import re
import json

from typing import Any, Iterable
from io import StringIO
from time import sleep
from .request import Request
from .message import parse_role, Role, Message


_BASE_URL_TAIL = re.compile(r"\\$")
_DATA_HEAD = re.compile(r"^data:\s+")
_DEFAULT_RETRY_TIME = 5.0
_DEFAULT_TIMEOUT = 30.0

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
        response_format_type: str | None = None,
        max_completion_tokens: int | None = None,
        temperature: float | None = None,
        top_p: float | None = None,
        stream: bool = False,
      ) -> Message:

    data: dict[str, Any] = {
      "model": self._model,
      "stream": stream,
      "messages": [
        {
          "role": m.role.value,
          "content": m.content,
        }
        for m in messages
      ],
    }
    if response_format_type is not None:
      data["response_format"] = {
        "type": response_format_type,
      }
    if max_completion_tokens is not None:
      data["max_tokens"] = max_completion_tokens # for DeepSeek
      data["max_completion_tokens"] = max_completion_tokens # for ChatGPT

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
            "Authorization": f"Bearer {self._api_key}"
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
      delta_role = delta.get("role", None)
      delta_content = delta.get("content", None)
      if delta_role is not None:
        role = parse_role(delta_role)
      if delta_content is not None:
        content_buffer.write(delta_content)

    return Message(
      role=role,
      content=content_buffer.getvalue(),
    )

  def _parse_response(self, response_json: Any) -> Message:
    message = response_json["choices"][-1]["message"]
    return Message(
      role=parse_role(message["role"]),
      content=message["content"],
    )