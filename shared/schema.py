import json

from typing import cast, Any
from oocana import Context
from .message import Message, Role


def inject_json_schema_into_messages(messages: list[Message], json_schema: dict[str, Any]) -> list[Message]:
  messages = [*messages]
  system: tuple[int, Message] | None = None
  for i, message in enumerate(messages):
    if message.role == Role.System:
      system = (i, message)
      break

  # DeepSeek doesn't support response_format="json_schema"
  # can only description JSON schema format in the system prompt
  injection = "You must output in JSON format and strictly follow the following JSON Schema:\n"
  injection += json.dumps(
    obj=json_schema,
    indent=2,
    ensure_ascii=False,
  )
  if system is None:
    messages.insert(0, Message(
      role=Role.System,
      content=injection,
      tool_call_id="",
      tool_calls=[],
    ))
  else:
    system_index, system_message = system
    system_content = f"{system_message.content}\n\n{injection}"
    messages[system_index] = Message(
      role=Role.System,
      content=system_content,
      tool_call_id="",
      tool_calls=[],
    )
  return messages

def parse_json_schema(context: Context) -> dict[str, Any]:
  required: list[str] = []
  properties: dict[str, Any] = {}

  for item in context.outputs_def.values():
    handle = item.get("handle", None)
    description = item.get("description", None)
    json_schema = item.get("json_schema", None)
    nullable = item.get("nullable", False)
    if handle is None or not isinstance(json_schema, dict):
      continue
    if not nullable:
      required.append(handle)
    if description is not None:
      json_schema = {
        **json_schema,
        "description": description,
      }
    properties[handle] = clear_invalid_key(json_schema)

  return {
    "type": "object",
    "required": required,
    "properties": properties,
    "additionalProperties": False,
  }

def clear_invalid_key(value: Any) -> Any:
  if isinstance(value, dict):
    for key in list(cast(dict[str, Any], value).keys()):
      if key.startswith("ui:"):
        value.pop(key, None)
      elif key == "contentMediaType":
        prop = value[key]
        if isinstance(prop, str) and \
           prop.lower().startswith("oomol/"):
          value.pop(key, None)
  elif isinstance(value, list):
    for child in value:
      clear_invalid_key(child)
  return value