from typing import cast, Any
from json import loads, dumps, JSONDecodeError
from oocana import Context
from shared.llm_creation import create_llm
from shared.message import render_messages, RenderParams
from shared.message import Message, Role

from .invoker import Invoker
from .system import create_system_message

#region generated meta
import typing
class Inputs(typing.TypedDict):
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

  messages = list(render_messages(cast(RenderParams, params), context))
  if len(messages) == 0:
    raise ValueError("template cannot be empty")
  if len(messages) > 1:
    print("Warning: template has more than one message, only the first one will be used")

  llm = create_llm(params, context)
  invoker = Invoker(params["skills"], context)
  messages = [create_system_message(context), messages[0]]
  tools = await invoker.query_tools()
  response: Any

  while True:
    resp_message = llm.request(
      temperature=temperature,
      top_p=top_p,
      max_completion_tokens=max_tokens,
      response_format_type="json_object",
      stream=params["stream"],
      messages=messages,
      tools=tools,
    )
    if not resp_message.tool_calls:
      try:
        response = loads(resp_message.content)
        break
      except JSONDecodeError as error:
        raise RuntimeError("LLM response wrong JSON") from error

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
  if not isinstance(response, dict):
    raise RuntimeError("LLM response invalid")

  result = response.get("result")
  if result == "ok":
    data = response.get("data", None)
    if not isinstance(data, dict):
      raise RuntimeError("LLM response invalid data")
    return data

  message = response.get("message", None)
  if not isinstance(message, str):
    raise RuntimeError("LLM response invalid message")

  if result == "error":
    raise Exception(message)
  elif result == "unmet":
    raise ValueError(message)
  else:
    raise RuntimeError("LLM response invalid result")
