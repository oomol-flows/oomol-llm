import re
import io
import json
import requests

from typing import Any, Iterable
from dataclasses import dataclass
from enum import Enum


class Role(Enum):
  System = "system"
  User = "user"
  Assistant = "assistant"

def parse_role(role: str) -> Role:
  if role == "system":
    return Role.System
  elif role == "developer":
    return Role.System
  elif role == "user":
    return Role.User
  elif role == "assistant":
    return Role.Assistant
  else:
    raise ValueError("Invalid role")

@dataclass
class Message:
  role: Role
  content: str

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

  def request(
        self,
        messages: Iterable[Message],
        response_format_type: str | None = None,
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