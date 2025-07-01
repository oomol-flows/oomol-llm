from oocana import Context
from shared.llm import LLM
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
  model_obj = params["model"]
  model: str = model_obj["model"]
  temperature: float = float(model_obj["temperature"])
  top_p: float = float(model_obj["top_p"])
  max_tokens: int = int(model_obj["max_tokens"])
  base_url = context.oomol_llm_env["base_url_v1"]
  api_key = context.oomol_llm_env["api_key"]

  llm = LLM(
    base_url=base_url,
    api_key=api_key,
    model=model,
  )
  resp_message = llm.request(
    stream=True,
    messages=messages,
    max_completion_tokens=max_tokens,
    temperature=temperature,
    top_p=top_p,
  )
  return { "output": resp_message.content }
