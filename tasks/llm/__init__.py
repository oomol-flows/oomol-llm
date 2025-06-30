import re

from typing import Any
from oocana import Context
from shared.llm import parse_role, LLM, Message, Role

#region generated meta
import typing
class Inputs(typing.TypedDict):
  model: typing.Any
  prompt: typing.Any
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

  messages = _prompt_messages(params)
  llm = LLM(
    base_url=base_url,
    api_key=api_key,
    model=model,
  )
  resp = llm.request(
    stream=True,
    messages=messages,
  )
  print(resp)
  return {}

_RESERVED_KEYS = ("model", "prompt")
_KEY_PATTERN: re.Pattern = re.compile(r"{{\s*([^}]+)\s*}}")

def _prompt_messages(params: Inputs):
  messages: list[Message] = []
  prompt: list[dict[str, Any]] = params["prompt"]

  def repl(match: re.Match):
    key = match.group(1).strip()
    if key in _RESERVED_KEYS:
      return match.group()
    value = params.get(key, None)
    if value is None:
      return match.group()
    return str(value)

  for message in prompt:
    messages.append(Message(
      role=parse_role(message["role"]),
      content=_KEY_PATTERN.sub(repl, message["content"]),
    ))
  return messages