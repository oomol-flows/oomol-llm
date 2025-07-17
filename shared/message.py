import re

from typing import Any, Generator, TypedDict
from dataclasses import dataclass
from enum import Enum
from oocana import Context


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

class RenderParams(TypedDict):
  messages: list[dict] | None
  template: list[dict[str, Any]] | str

def render_messages(params: RenderParams, context: Context) -> Generator[Message, None, None]:
  param_messages = params["messages"]
  param_template = params["template"]

  if param_messages:
    for message in param_messages:
      yield Message(
        role=parse_role(message["role"]),
        content=message["content"],
      )

  def repl(match: re.Match):
    key = match.group(1).strip()
    input_def = context.inputs_def.get(key, None)
    if input_def is None:
      return match.group()
    if not input_def["is_additional"]:
      return match.group()
    value = params.get(key, None)
    if value is None:
      return match.group()
    return str(value)

  if isinstance(param_template, str):
    yield Message(
      role=Role.System,
      content=_KEY_PATTERN.sub(repl, param_template),
    )
  elif isinstance(param_template, list):
    for message in param_template:
      yield Message(
        role=parse_role(message["role"]),
        content=_KEY_PATTERN.sub(repl, message["content"]),
      )