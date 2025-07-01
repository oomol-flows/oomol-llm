from typing import cast, Any
from oocana import Context
from shared.message import render_messages

#region generated meta
import typing
class Inputs(typing.TypedDict):
  template: typing.Any
  be_continued: list[dict] | None
class Outputs(typing.TypedDict):
  messages: list[dict]
#endregion


def main(params: Inputs, context: Context) -> Outputs:
  messages = params["be_continued"]
  if messages is None:
    messages = []

  for message in render_messages(
    params=cast(dict[str, Any], params),
    reserved_keys=("be_continued", "template",),
  ):
    messages.append({
      "role": message.role.value,
      "content": message.content,
    })

  return { "messages": messages }
