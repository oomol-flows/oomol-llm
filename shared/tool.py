# https://platform.openai.com/docs/guides/function-calling

from json import loads, dumps
from dataclasses import dataclass
from typing import Any


@dataclass
class FunctionTool:
  name: str
  description: str | None
  struct: bool
  parameters: dict[str, Any]

def encode_tool(tool: FunctionTool) -> dict[str, Any]:
  return {
    "type": "function",
    "function": {
      "name": tool.name,
      "description": tool.description if tool.description else "unknown",
      "parameters": tool.parameters,
      "struct": tool.struct,
    },
  }

@dataclass
class FunctionToolCall:
  id: str
  name: str
  arguments: Any

def encode_tool_call(tool_call: FunctionToolCall) -> dict[str, Any]:
  return {
    "id": tool_call.id,
    "type": "function",
    "function": {
      "name": tool_call.name,
      "arguments": dumps(
        obj=tool_call.arguments,
        ensure_ascii=False,
      ),
    },
  }

def decode_tool_call(json: dict[str, Any]) -> FunctionToolCall | None:
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