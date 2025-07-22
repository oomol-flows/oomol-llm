from dataclasses import dataclass
from typing import Any, Iterable
from oocana import Context, BlockExecuteException
from ..tool import FunctionTool, FunctionToolCall
from .block import Block


class Invoker:
  def __init__(self, context: Context, blocks: Iterable[Block]) -> None:
    self._context: Context = context
    self._blocks: list[Block] = list(blocks)

  async def query_tools(self) -> list[FunctionTool]:
    tools: list[FunctionTool] = []
    for block in self._blocks:
      required: list[str] = []
      properties: dict[str, Any] = {}
      for input in block.inputs:
        if not input.optional:
          required.append(input.name)
        properties[input.name] = input.schema

      tools.append(FunctionTool(
        name=block.func_name,
        description=block.description,
        struct=True,
        parameters={
          "type": "object",
          "required": required,
          "properties": properties,
        },
      ))
    return tools

  async def call(self, func_call: FunctionToolCall) -> dict[str, Any]:
    block = next((b for b in self._blocks if b.func_name == func_call.name.strip()), None)
    if block is None:
      raise ValueError(f"cannot find function name {func_call.name}")

    outputs: dict[str, Any] = {}
    def on_add_output(added: dict[str, Any]):
      for key, value in added.items():
        outputs[key] = value
    response = self._context.run_block(
      block=str(block),
      inputs=func_call.arguments,
    )
    response.add_output_callback(on_add_output)
    try:
      await response.finish()
    except BlockExecuteException as error:
      raise ValueError(f"run {str(block)} failed") from error

    for key, value in list(outputs.items()):
      if value is None:
        del outputs[key]
    return outputs
