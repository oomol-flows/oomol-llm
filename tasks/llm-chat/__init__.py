from oocana import Context
from shared.llm_creation import create_llm
from shared.message import render_messages

#region generated meta
import typing
class Inputs(typing.TypedDict):
  model: typing.Any
  template: typing.Any
  stream: bool
class Outputs(typing.TypedDict):
  output: str
#endregion


def main(params: Inputs, context: Context) -> Outputs:
  model = params["model"]
  temperature: float = float(model["temperature"])
  top_p: float = float(model["top_p"])
  max_tokens: int = int(model["max_tokens"])

  messages = render_messages(params, context)
  llm = create_llm(params, context)
  resp_message = llm.request(
    stream=params["stream"],
    messages=messages,
    max_completion_tokens=max_tokens,
    temperature=temperature,
    top_p=top_p,
  )
  return { "output": resp_message.content }
