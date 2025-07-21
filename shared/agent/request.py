from typing import Any
from json import loads, dumps, JSONDecodeError
from oocana import Context

from ..llm import LLM
from ..message import Role, Message
from ..llm_creation import create_llm

from .invoker import Invoker
from .system import json_system_message


async def request(
      context: Context,
      llm: LLM,
      skills: list[Any],
      messages: list[Message],
      temperature: float,
      top_p: float,
      max_tokens: int,
      stream: bool,
    ):

  invoker = Invoker(skills, context)
  tools = await invoker.query_tools()

  while True:
    resp_message = llm.request(
      temperature=temperature,
      top_p=top_p,
      max_completion_tokens=max_tokens,
      response_format_type="json_object",
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