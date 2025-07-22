import re

from dataclasses import dataclass
from typing import Any, Iterable
from oocana import Context, HandleDefDict
from oocana.context import QueryBlockResponse
from ..schema import clear_invalid_key


@dataclass
class Input:
  name: str
  optional: bool
  schema: dict[str, Any]

@dataclass
class Block:
  package: str
  block: str
  func_name: str
  description: str
  inputs: list[Input]

  def __str__(self) -> str:
    return f"{self.package}::{self.block}"

async def parse_skill(context: Context, skill: Any) -> Block | None:
  package: str = skill["package"]
  block: str = skill["blockName"]
  response = await context.query_block(f"{package}::{block}")
  inputs_def = response.get("inputs_def", None) or {}
  inputs = await _parse_handle_defs(inputs_def.values())
  if inputs is None:
    return None

  return Block(
    package=package,
    block=block,
    func_name=block, # TODO: 考虑可能重名导致的无法辨识问题
    inputs=inputs,
    description=_generate_description(response)
  )

async def _parse_handle_defs(handle_defs: Iterable[HandleDefDict]) -> list[Input] | None:
  inputs: list[Input] = []
  for handle_def in handle_defs:
    handle = handle_def["handle"]
    optional = False
    if bool(handle_def.get("nullable", False)):
      optional = True
    elif "value" in handle_def:
      optional = True

    handle_schema = handle_def.get("json_schema", None)
    if handle_schema is None:
      handle_schema = {}
    else:
      handle_schema = {**handle_schema}

    handle_description = handle_def.get("description", None)
    if handle_description:
      handle_schema["description"] = handle_description

    if not optional and _is_variable(handle_schema):
      return None

    inputs.append(Input(
      name=handle,
      optional=optional,
      schema=clear_invalid_key(handle_schema),
    ))
  return inputs

def _generate_description(response: QueryBlockResponse):
  outputs_def = response.get("outputs_def", None) or {}
  enable_output_handles: list[str] = []
  lines: dict[str, str] = {}

  for output_def in outputs_def.values():
    handle_schema = output_def.get("json_schema") or {}
    if _is_variable(handle_schema):
      continue

    handle_type = handle_schema.get("type", None)
    handle = output_def["handle"]
    optional = bool(output_def.get("nullable", False))

    if not isinstance(handle_type, str):
      handle_type = "any"
    elif optional:
      handle_type = f"{handle_type} optional"
    line: str = f"  - {handle} ({handle_type})"
    line_description = _normalize_description(output_def.get("description"))
    if line_description:
      line = f"{line}: {line_description}"

    enable_output_handles.append(handle)
    lines[handle] = line

  description = _normalize_description(response.get("description", None))
  if not enable_output_handles:
    return description

  descriptions: list[str] = []
  if description:
    descriptions.append(description)
    descriptions.append("")

  if enable_output_handles:
    descriptions.append("Returns a object:")
    for handle in sorted(enable_output_handles):
      line = lines[handle]
      descriptions.append(line)

  return "\n".join(descriptions)

def _is_variable(handle_schema: dict[str, Any]) -> bool:
  media_type = handle_schema.get("contentMediaType", None)
  return media_type == "oomol/var"

_WHITESPACE_REGEX = re.compile(r"\s+")

def _normalize_description(description: str | None):
  if description is None:
    description = ""
  description = _WHITESPACE_REGEX.sub(" ", description)
  description = description.strip()
  return description