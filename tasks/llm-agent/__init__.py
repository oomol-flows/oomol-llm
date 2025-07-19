from json import dumps
from oocana import Context
from shared.llm_creation import create_llm
from shared.message import Message, Role
from shared.tool import FunctionTool

from .invoker import Invoker

#region generated meta
import typing
class Inputs(typing.TypedDict):
  timeout: float
  retry_times: int
  retry_sleep: float
  skills: typing.Any
  model: typing.Any
Outputs = typing.Dict[str, typing.Any]
#endregion


async def main(params: Inputs, context: Context) -> Outputs:
  model = params["model"]
  temperature: float = float(model["temperature"])
  top_p: float = float(model["top_p"])
  max_tokens: int = int(model["max_tokens"])
  llm = create_llm(params, context)
  invoker = Invoker(params["skills"], context)

  messages: list[Message] = [
    Message(
      role=Role.System,
      content="你要根据用户要求，使用我的工具完成用户的任务或回答用户的问题。如果我提供的工具不足，你要直接向用户说你做不到，不要胡乱使用我提供的工具。" + '你返回 json，类似这种格式： {"result": "ok"}',
      tool_calls=[],
      tool_call_id="",
    ),
    Message(
      role=Role.User,
      content="我要把文件 /oomol-driver/downloads/manga/qq_manga.epub 转化为 PDF 格式的漫画，转化后的文件保存在原目录，以同名文件的形式保存。",
      tool_calls=[],
      tool_call_id="",
    ),
  ]
  tools = await invoker.query_tools()
  while True:
    resp_message = llm.request(
      temperature=temperature,
      top_p=top_p,
      max_completion_tokens=max_tokens,
      response_format_type="json_object",
      stream=True,
      messages=messages,
      tools=tools,
    )
    if not resp_message.tool_calls:
      print(resp_message.content)
      break

    messages.append(resp_message)
    for tool_call in resp_message.tool_calls:
      print("call function", tool_call.name, tool_call.arguments)
      outputs = await invoker.call(tool_call)
      messages.append(Message(
        role=Role.Tool,
        tool_call_id=tool_call.id,
        tool_calls=[],
        content=dumps(
          ensure_ascii=False,
          obj=outputs,
        ),
      ))

  return {}
