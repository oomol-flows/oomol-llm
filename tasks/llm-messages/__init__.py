from typing import cast, Any
from oocana import Context
from shared.message import render_messages

#region generated meta
import typing
class Inputs(typing.TypedDict):
  template: typing.Any
  source: list[dict] | None
class Outputs(typing.TypedDict):
  messages: list[dict]
#endregion


def main(params: Inputs, context: Context) -> Outputs:
  messages = params["source"]
  if messages is None:
    messages = []

  for message in render_messages(
    params=cast(dict[str, Any], params),
    reserved_keys=("source", "template",),
  ):
    messages.append({
      "role": message.role.value,
      "content": message.content,
    })

  return { "messages": messages }
