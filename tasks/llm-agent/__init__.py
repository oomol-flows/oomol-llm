from oocana import Context
from shared.llm_creation import create_llm
from shared.message import Message, Role
from shared.tool import FunctionTool

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


def main(params: Inputs, context: Context) -> Outputs:
  model = params["model"]
  temperature: float = float(model["temperature"])
  top_p: float = float(model["top_p"])
  max_tokens: int = int(model["max_tokens"])

  print(params["skills"])

  llm = create_llm(params, context)
  resp_message = llm.request(
    temperature=temperature,
    top_p=top_p,
    max_completion_tokens=max_tokens,
    stream=True,
    messages=[
      Message(
        role=Role.System,
        content="你要根据用户要求完成任务",
        tools=[],
      ),
      Message(
        role=Role.User,
        content="今天上海天气多少度？",
        tools=[],
      ),
    ],
    tools=[FunctionTool(
      name="get_weather",
      description="Get current temperature for a given location.",
      struct=True,
      parameters={
        "type": "object",
        "properties": {
          "location": {
            "type": "string",
            "description": "City and country e.g. Bogotá, Colombia"
          }
        },
        "required": ["location"],
        "additionalProperties": False,
      },
    )],
  )
  print(resp_message.content)
  print(resp_message.tools)
  return {}
