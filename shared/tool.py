from json import loads
from dataclasses import dataclass
from typing import Any


@dataclass
class FunctionTool:
  name: str
  description: str | None
  struct: bool
  parameters: dict[str, Any]

@dataclass
class FunctionToolCall:
  id: str
  name: str
  arguments: Any

def parse_tool_call(json: dict[str, Any]) -> FunctionToolCall | None:
  id = json.get("id", None)
  type = json.get("type", None)
  func = json.get("function", None)
  if type != "function" or id is None or func is None:
    return None

  return FunctionToolCall(
    id=id,
    name=func["name"],
    arguments=loads(func["arguments"])
  )