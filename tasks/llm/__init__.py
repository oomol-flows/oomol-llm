import json

from typing import cast, Any
from oocana import Context
from shared.llm_creation import create_llm
from shared.message import render_messages
from shared.schema import inject_json_schema_into_messages, parse_json_schema

#region generated meta
import typing
class Inputs(typing.TypedDict):
  model: typing.Any
  template: typing.Any
  stream: bool
Outputs = typing.Dict[str, typing.Any]
#endregion


def main(params: Inputs, context: Context) -> Outputs:
  model = params["model"]
  temperature: float = float(model["temperature"])
  top_p: float = float(model["top_p"])
  max_tokens: int = int(model["max_tokens"])

  json_schema = parse_json_schema(context)
  valid_keys = set(cast(dict, json_schema["properties"]).keys())

  messages = list(render_messages(
    params=cast(dict[str, Any], params),
    reserved_keys=("model", "prompt"),
  ))
  llm = create_llm(params, context)
  messages = inject_json_schema_into_messages(messages, json_schema)
  resp_message = llm.request(
    stream=params["stream"],
    messages=messages,
    max_completion_tokens=max_tokens,
    response_format_type="json_object",
    temperature=temperature,
    top_p=top_p,
  )
  try:
    resp_obj = json.loads(resp_message.content)
  except json.JSONDecodeError as err:
    raise ValueError("Response invalid format") from err
  except Exception as err:
    raise ValueError("Parse the response failed") from err
  if not isinstance(resp_obj, dict):
    raise ValueError("Response is not a valid JSON object")

  for key in list(resp_obj.keys()):
    if key not in valid_keys:
      resp_obj.pop(key)

  return resp_obj

