import json

from typing import cast, Any
from oocana import Context
from shared.llm_creation import create_llm
from shared.message import render_messages, assert_user_prompt, Role, Message, RenderParams
from shared.schema import inject_json_schema_into_messages, parse_json_schema
from shared.agent import request, json_system_message, decode_json_response

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
  json_schema: dict[str, Any] = parse_json_schema(context)
  response_object: Any

  if skills:
    messages = [
      json_system_message(context),
      Message(
        role=Role.User,
        content=assert_user_prompt(messages),
        tool_call_id="",
        tool_calls=[],
      ),
    ]
    response_text = await request(
      context=context,
      llm=llm,
      skills=skills,
      messages=messages,
      temperature=temperature,
      top_p=top_p,
      max_tokens=max_tokens,
      stream=stream,
      response_format_type="json_object",
    )
    response_object = decode_json_response(response_text)

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
    try:
      response_object = json.loads(resp_message.content)
    except json.JSONDecodeError as error:
      raise RuntimeError(f"LLM response wrong JSON: {resp_message.content}") from error
    except Exception as error:
      raise ValueError("Parse the response failed") from error
    if not isinstance(response_object, dict):
      raise ValueError("Response is not a valid JSON object")

  valid_keys = set(cast(dict, json_schema["properties"]).keys())
  for key in list(response_object.keys()):
    if key not in valid_keys:
      response_object.pop(key)
  return response_object
