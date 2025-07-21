import json

from typing import cast, Any
from oocana import Context
from shared.llm_creation import create_llm, LLM
from shared.message import Message, render_messages, RenderParams
from shared.schema import inject_json_schema_into_messages, parse_json_schema
from shared.agent import request

#region generated meta
import typing
class Inputs(typing.TypedDict):
  messages: list[dict] | None
  timeout: float
  retry_times: int
  retry_sleep: float
  stream: bool
  model: typing.Any
  template: typing.Any
  skills: typing.Any
Outputs = typing.Dict[str, typing.Any]
#endregion


async def main(params: Inputs, context: Context) -> Outputs:
  model = params["model"]
  temperature: float = float(model["temperature"])
  top_p: float = float(model["top_p"])
  max_tokens: int = int(model["max_tokens"])
  stream = params["stream"]

  skills = params["skills"]
  messages = list(render_messages(cast(RenderParams, params), context))
  llm = create_llm(params, context)
  json_schema = parse_json_schema(context)

  if skills:
    return await request(
      context=context,
      llm=llm,
      skills=skills,
      messages=messages,
      temperature=temperature,
      top_p=top_p,
      max_tokens=max_tokens,
      stream=stream,
    )
  else:
    messages = inject_json_schema_into_messages(messages, json_schema)
    resp_message = llm.request(
      stream=stream,
      tools=[],
      messages=messages,
      max_completion_tokens=max_tokens,
      response_format_type="json_object",
      temperature=temperature,
      top_p=top_p,
    )

  return _parse_object(resp_message, json_schema)

def _parse_object(resp_message: Message, json_schema: dict[str, Any]) -> dict[str, Any]:
  try:
    resp_obj = json.loads(resp_message.content)
  except json.JSONDecodeError as err:
    raise ValueError("Response invalid format") from err
  except Exception as err:
    raise ValueError("Parse the response failed") from err
  if not isinstance(resp_obj, dict):
    raise ValueError("Response is not a valid JSON object")

  valid_keys = set(cast(dict, json_schema["properties"]).keys())
  for key in list(resp_obj.keys()):
    if key not in valid_keys:
      resp_obj.pop(key)
  return resp_obj
