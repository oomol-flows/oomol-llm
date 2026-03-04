from oocana import Context
from shared.message import render_prompt

#region generated meta
import typing
class Inputs(typing.TypedDict):
  template: typing.Any
class Outputs(typing.TypedDict):
  prompt: typing.NotRequired[str]
#endregion


def main(params: Inputs, context: Context) -> Outputs:
  return { "prompt": render_prompt(params["template"], params, context) }
