import re

from typing import Any, Container, Generator
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

_KEY_PATTERN: re.Pattern = re.compile(r"{{\s*([^}]+)\s*}}")

def render_messages(params: dict[str, Any], reserved_keys: Container[str]) -> Generator[Message, None, None]:
  template: list[dict[str, Any]] = params["template"]

  def repl(match: re.Match):
    key = match.group(1).strip()
    if key in reserved_keys:
      return match.group()
    value = params.get(key, None)
    if value is None:
      return match.group()
    return str(value)

  for message in template:
    yield Message(
      role=parse_role(message["role"]),
      content=_KEY_PATTERN.sub(repl, message["content"]),
    )