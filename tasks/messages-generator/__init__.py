from oocana import Context
from shared.message import render_messages

#region generated meta
import typing
class Inputs(typing.TypedDict):
  template: typing.Any
  messages: list[dict] | None
class Outputs(typing.TypedDict):
  messages: typing.NotRequired[list[dict]]
#endregion


def main(params: Inputs, context: Context) -> Outputs:
  messages = [
    {
      "role": message.role.value,
      "content": message.content,
    }
    for message in render_messages(params, context)
  ]
  return { "messages": messages }
