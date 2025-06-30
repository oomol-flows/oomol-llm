import re

from typing import Any, Container
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

def prompt_messages(params: dict[str, Any], reserved_keys: Container[str]) -> list[Message]:
  messages: list[Message] = []
  prompt: list[dict[str, Any]] = params["prompt"]

  def repl(match: re.Match):
    key = match.group(1).strip()
    if key in reserved_keys:
      return match.group()
    value = params.get(key, None)
    if value is None:
      return match.group()
    return str(value)

  for message in prompt:
    messages.append(Message(
      role=parse_role(message["role"]),
      content=_KEY_PATTERN.sub(repl, message["content"]),
    ))
  return messages