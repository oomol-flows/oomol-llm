from oocana import Context
from shared.message import render_messages

#region generated meta
import typing
class Inputs(typing.TypedDict):
  template: typing.Any
class Outputs(typing.TypedDict):
  prompt: typing.NotRequired[list[dict]]
#endregion


def main(params: Inputs, context: Context) -> Outputs:
  return { "prompt": render_messages(params, context) }
