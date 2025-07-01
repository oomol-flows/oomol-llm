import json

from typing import cast
from oocana import Context
from shared.llm import LLM
from shared.message import Message, Role
from shared.schema import inject_json_schema_into_messages, parse_json_schema

#region generated meta
import typing
class Inputs(typing.TypedDict):
  model: typing.Any
  messages: list[dict]
Outputs = typing.Dict[str, typing.Any]
#endregion


def main(params: Inputs, context: Context) -> Outputs:
  model_obj = params["model"]
  model: str = model_obj["model"]
  temperature: float = float(model_obj["temperature"])
  top_p: float = float(model_obj["top_p"])
  max_tokens: int = int(model_obj["max_tokens"])
  base_url = context.oomol_llm_env["base_url_v1"]
  api_key = context.oomol_llm_env["api_key"]

  json_schema = parse_json_schema(context)
  valid_keys = set(cast(dict, json_schema["properties"]).keys())

  llm = LLM(
    base_url=base_url,
    api_key=api_key,
    model=model,
  )
  messages = inject_json_schema_into_messages(
    json_schema=json_schema,
    messages=[
      Message(
        role=Role(message["role"]),
        content=message["content"],
      )
      for message in params["messages"]
    ],
  )
  resp_message = llm.request(
    stream=True,
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

