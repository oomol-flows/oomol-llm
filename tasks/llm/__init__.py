from oocana import Context
from shared.llm import LLM, Message, Role

#region generated meta
import typing
class Inputs(typing.TypedDict):
  model: typing.Any
Outputs = typing.Dict[str, typing.Any]
#endregion

def main(params: Inputs, context: Context) -> Outputs:
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
  resp = llm.request(
    stream=True,
    messages=[Message(
      role=Role.User,
      content="把“你们好”翻译成英语。",
    )],
  )
  print(resp)


  return {}
