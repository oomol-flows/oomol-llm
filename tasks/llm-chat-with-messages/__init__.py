from oocana import Context
from shared.llm_creation import create_llm
from shared.message import Role, Message

#region generated meta
import typing
class Inputs(typing.TypedDict):
  messages: list[dict]
  model: typing.Any
class Outputs(typing.TypedDict):
  output: str
#endregion


def main(params: Inputs, context: Context) -> Outputs:
  messages = [
    Message(
      role=Role(message["role"]),
      content=message["content"],
    )
    for message in params["messages"]
  ]
  model = params["model"]
  temperature: float = float(model["temperature"])
  top_p: float = float(model["top_p"])
  max_tokens: int = int(model["max_tokens"])

  llm = create_llm(params, context)
  resp_message = llm.request(
    stream=True,
    messages=messages,
    max_completion_tokens=max_tokens,
    temperature=temperature,
    top_p=top_p,
  )
  return { "output": resp_message.content }
