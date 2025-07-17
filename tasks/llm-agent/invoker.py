from dataclasses import dataclass
from typing import Any
from oocana import Context
from shared.tool import FunctionTool, FunctionToolCall


@dataclass
class _Node:
  package: str
  block: str

  def __str__(self) -> str:
    return f"{self.package}::{self.block}"

class Invoker:
  def __init__(self, skills: Any, context: Context) -> None:
    self._context: Context = context
    self._nodes: list[_Node] = [
      _Node(
        package=item["package"],
        block=item["blockName"],
      )
      for item in skills
    ]

  async def query_tools(self) -> list[FunctionTool]:
    tools: list[FunctionTool] = []
    for node in self._nodes:
      response = await self._context.query_block(str(node))
      inputs_def = response.get("inputs_def", None)
      required: list[str] = []
      properties: dict[str, Any] = {}
      if inputs_def:
        for handle_def in inputs_def.values():
          handle = handle_def["handle"]
          if not handle_def.get("nullable", False):
            required.append(handle)
          handle_schema = handle_def.get("json_schema", None)
          if handle_schema is None:
            handle_schema = {}
          else:
            handle_schema = {**handle_schema}
          properties[handle] = handle_schema
          handle_schema["description"] = handle_def.get("description")

      tools.append(FunctionTool(
        name=str(node),
        description=response.get("description", None),
        struct=True,
        parameters={
          "type": "object",
          "required": required,
          "properties": properties,
        },
      ))
    return tools

  async def call(self, func_call: FunctionToolCall) -> dict[str, Any]:
    node = next((n for n in self._nodes if str(n) == func_call.name.strip()), None)
    if node is None:
      raise ValueError(f"cannot find function name {func_call.name}")
    response = self._context.run_block(block=str(node), inputs=func_call.arguments)
    payload = await response.finish()
    error = payload.get("error", None)
    if error:
      raise ValueError(error)
    result = payload.get("result")
    if result is None:
      raise ValueError("result not found")
    return result
