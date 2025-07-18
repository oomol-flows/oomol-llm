import re
import json

from typing import Any, Iterable
from io import StringIO
from time import sleep
from .request import Request
from .tool import encode_tool, decode_tool_call, FunctionTool, FunctionToolCall
from .message import encode_message, decode_role, Role, Message


_BASE_URL_TAIL = re.compile(r"\\$")
_DATA_HEAD = re.compile(r"^data:\s+")

class LLM:
  def __init__(
      self,
      base_url: str,
      api_key: str,
      model: str,
      retry_times: int,
      retry_sleep_time: float,
      timeout: float,
    ) -> None:

    self._base_url: str = _BASE_URL_TAIL.sub("", base_url)
    self._api_key: str = api_key
    self._model: str = model
    self._retry_times: int = retry_times
    self._retry_sleep_time: float = retry_sleep_time
    self._timeout: float = timeout

  # https://platform.openai.com/docs/api-reference/chat/create
  def request(
        self,
        messages: Iterable[Message],
        tools: list[FunctionTool],
        response_format_type: str | None = None,
        max_completion_tokens: int | None = None,
        temperature: float | None = None,
        top_p: float | None = None,
        stream: bool = False,
      ) -> Message:

    data: dict[str, Any] = {
      "model": self._model,
      "stream": stream,
      "messages": [encode_message(message) for message in messages],
    }
    if tools:
      data["tools"] = [encode_tool(tool) for tool in tools]

    if response_format_type is not None:
      data["response_format"] = {
        "type": response_format_type,
      }
    # FIXME: 火山引擎此参数混乱，传入过期参数直接 400，反应过于粗暴。在和他们沟通，有结果前先关闭这个功能。
    # if max_completion_tokens is not None:
    #   data["max_tokens"] = max_completion_tokens # for DeepSeek
    #   data["max_completion_tokens"] = max_completion_tokens # for ChatGPT

    if temperature is not None:
      data["temperature"] = temperature
    if top_p is not None:
      data["top_p"] = top_p

    did_retry_times: int = 0
    while True:
      try:
        request = Request(
          url=f"{self._base_url}/chat/completions",
          data=data,
          timeout=self._timeout,
          headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {self._api_key}",
          },
        )
        if stream:
          return self._parse_stream(request.post_and_iter_lines())
        else:
          return self._parse_response(request.post())

      except TimeoutError as err:
        if did_retry_times >= self._retry_times:
          raise err
        if self._retry_sleep_time > 0.0:
          sleep(self._retry_sleep_time)
        did_retry_times += 1

  def _parse_stream(self, lines: Iterable[str]) -> Message:
    role: Role = Role.Assistant
    content_buffer = StringIO()
    tool_call_tuples: list[tuple[StringIO, dict[str, Any]]] = []

    for line in lines:
      decoded_line = line.strip()
      if not _DATA_HEAD.match(decoded_line):
        continue
      decoded_line = _DATA_HEAD.sub("", decoded_line)
      if decoded_line == "[DONE]":
        break
      try:
        chunk: dict[str, Any] = json.loads(decoded_line)
      except json.JSONDecodeError:
        continue

      delta: dict[str, Any] = chunk["choices"][0]["delta"]
      delta_role: str | None = delta.get("role", None)
      delta_content: str | None = delta.get("content", None)
      delta_tool_calls: list[dict[str, Any]] | None = delta.get("tool_calls", None)

      if delta_role is not None:
        role = decode_role(delta_role)
      if delta_content is not None:
        content_buffer.write(delta_content)

      if not delta_tool_calls:
        continue
      for delta_tool_call in delta_tool_calls:
        index = int(delta_tool_call.get("index", -1))
        arguments: StringIO
        tool_call_json: dict[str, Any]

        if 0 <= index < len(tool_call_tuples):
          arguments, tool_call_json = tool_call_tuples[index]
        elif index == len(tool_call_tuples):
          arguments = StringIO()
          tool_call_json = {}
          tool_call_tuples.append((arguments, tool_call_json))
        else:
          continue

        delta_function = delta_tool_call.pop("function", None)
        if delta_function:
          function_json = tool_call_json.get("function", None)
          if function_json is None:
            function_json = {}
            tool_call_json["function"] = function_json
          arguments_part = delta_function.pop("arguments", None)
          if arguments_part is not None:
            arguments.write(arguments_part)
          for key, value in delta_function.items():
            function_json[key] = value

        for key, value in delta_tool_call.items():
          tool_call_json[key] = value

    tool_call_jsons: list[dict[str, Any]] = []
    for arguments, tool_call_json in tool_call_tuples:
      function_json = tool_call_json.get("function", None)
      if not function_json:
        function_json = {}
        tool_call_json["function"] = function_json
      function_json["arguments"] = arguments.getvalue()
      tool_call_jsons.append(tool_call_json)

    return Message(
      role=role,
      content=content_buffer.getvalue(),
      tool_calls=self._parse_tool_calls(tool_call_jsons),
      tool_call_id="",
    )

  def _parse_response(self, response_json: Any) -> Message:
    message = response_json["choices"][-1]["message"]
    tool_call_jsons = message.get("tool_calls", None)

    return Message(
      role=decode_role(message["role"]),
      content=message["content"],
      tool_calls=self._parse_tool_calls(tool_call_jsons),
      tool_call_id="",
    )

  def _parse_tool_calls(self, tool_call_jsons: list[dict[str, Any]] | None) -> list[FunctionToolCall]:
    tool_calls: list[FunctionToolCall] = []
    if tool_call_jsons:
      for tool_call_json in tool_call_jsons:
        tool_call = decode_tool_call(tool_call_json)
        if tool_call:
          tool_calls.append(tool_call)
    return tool_calls