from typing import Any, Generator
from json import dumps
from oocana import Context

from ..llm import LLM
from ..message import Role, Message
from .block import parse_skill, Block
from .invoker import Invoker


async def request(
      context: Context,
      llm: LLM,
      skills: list[Any],
      messages: list[Message],
      temperature: float,
      top_p: float,
      max_tokens: int,
      stream: bool,
      response_format_type: str | None,
    ):

  blocks = await _create_blocks(context, skills)
  invoker = Invoker(context, blocks)
  tools = await invoker.query_tools()

  while True:
    resp_message = llm.request(
      temperature=temperature,
      top_p=top_p,
      max_completion_tokens=max_tokens,
      response_format_type=response_format_type,
      stream=stream,
      messages=messages,
      tools=tools,
    )
    if not resp_message.tool_calls:
      return resp_message.content

    messages.append(resp_message)
    for tool_call in resp_message.tool_calls:
      print("call function", tool_call.name, tool_call.arguments)
      call_result: dict[str, Any] = {}
      try:
        call_result["status"] = "success"
        call_result["outputs"] = await invoker.call(tool_call)
      except Exception as error:
        call_result["status"] = "error"
        call_result["message"] = str(error)
      messages.append(Message(
        role=Role.Tool,
        tool_call_id=tool_call.id,
        tool_calls=[],
        content=dumps(
          ensure_ascii=False,
          obj=call_result,
        ),
      ))

async def _create_blocks(context: Context, skills: list[Any]):
  blocks: list[Block] = []
  for skill in skills:
    block = await parse_skill(context, skill)
    if block is None:
      skill_id = skill["package"] + "::" + skill["blockName"]
      print(f"Warning: skill {skill_id} is disabled, it cannot be call by LLMs.")
      continue
    blocks.append(block)

  if not blocks:
    raise ValueError("No enabled blocks found in skills")

  for same_name_blocks in _find_same_name_blocks(blocks):
    for block in same_name_blocks:
      block.func_name = block.package + "_" + block.func_name

  used_names: set[str] = set(b.func_name for b in blocks)
  for same_name_blocks in _find_same_name_blocks(blocks):
    for i, block in enumerate(same_name_blocks):
      if i == 0:
        continue
      new_name = block.func_name + f"_{i}"
      while new_name in used_names:
        new_name += f"_{i}"
      used_names.add(new_name)
      block.func_name = new_name

  return blocks

def _find_same_name_blocks(blocks: list[Block]) -> Generator[list[Block], None, None]:
  name2blocks: dict[str, list[Block]] = {}
  for block in blocks:
    same_name_blocks = name2blocks.get(block.func_name, None)
    if same_name_blocks is None:
      same_name_blocks = []
      name2blocks[block.func_name] = same_name_blocks
    same_name_blocks.append(block)
  for same_name_blocks in name2blocks.values():
    if len(same_name_blocks) > 1:
      yield same_name_blocks