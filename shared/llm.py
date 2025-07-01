import re
import io
import json
import requests

from typing import Any, Iterable
from .message import parse_role, Role, Message


_BASE_URL_TAIL = re.compile(r"\\$")
_DATA_HEAD = re.compile(r"^data:\s+")

class LLM:
  def __init__(
      self,
      base_url: str,
      api_key: str,
      model: str,
    ) -> None:
    self._base_url: str = _BASE_URL_TAIL.sub("", base_url)
    self._api_key: str = api_key
    self._model: str = model

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

    response: requests.Response = requests.post(
      timeout=30.0,
      url=f"{self._base_url}/chat/completions",
      json=data,
      headers={
        "Content-Type": "application/json",
        "Authorization": f"Bearer {self._api_key}"
      },
    )
    response.raise_for_status()

    if stream:
      return self._parse_stream(response)
    else:
      return self._parse_response(response)

  def _parse_stream(self, response: requests.Response) -> Message:
    role: Role = Role.Assistant
    content_buffer = io.StringIO()

    for line in response.iter_lines():
      if not isinstance(line, bytes):
        continue
      decoded_line = line.decode("utf-8").strip()
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

  def _parse_response(self, response: requests.Response) -> Message:
    message = response.json()["choices"][-1]["message"]
    return Message(
      role=parse_role(message["role"]),
      content=message["content"],
    )