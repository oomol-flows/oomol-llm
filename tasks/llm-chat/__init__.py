from typing import cast, Any
from oocana import Context
from shared.llm_creation import create_llm
from shared.message import render_messages, assert_user_prompt, RenderParams, Role, Message
from shared.agent import request, chat_system_message

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
class Outputs(typing.TypedDict):
  output: str
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
  resp_text: str

  if skills:
    messages = [
      chat_system_message(),
      Message(
        role=Role.User,
        content=assert_user_prompt(messages),
        tool_call_id="",
        tool_calls=[],
      ),
    ]
    resp_text = await request(
      context=context,
      llm=llm,
      skills=skills,
      messages=messages,
      temperature=temperature,
      top_p=top_p,
      max_tokens=max_tokens,
      stream=stream,
      response_format_type=None,
    )
  else:
    resp_message = llm.request(
      stream=params["stream"],
      tools=[],
      messages=messages,
      max_completion_tokens=max_tokens,
      temperature=temperature,
      top_p=top_p,
    )
    resp_text = resp_message.content

  return { "output": resp_text }
