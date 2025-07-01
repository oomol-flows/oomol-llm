from typing import cast, Any
from oocana import Context
from shared.message import prompt_messages

#region generated meta
import typing
class Inputs(typing.TypedDict):
  template: typing.Any
class Outputs(typing.TypedDict):
  messages: list[dict]
#endregion


def main(params: Inputs, context: Context) -> Outputs:
  messages = prompt_messages(
    params=cast(dict[str, Any], params),
    reserved_keys=("template",),
  )
  return {
    "messages": [
      {
        "role": message.role.value,
        "content": message.content,
      }
      for message in messages
    ],
  }
