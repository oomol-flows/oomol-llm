from typing import Any
from oocana import Context
from shared.llm import LLM


def create_llm(params: Any, context: Context):
  model_obj = params["model"]
  model: str = model_obj["model"]
  base_url = context.oomol_llm_env["base_url_v1"]
  api_key = context.oomol_llm_env["api_key"]

  return LLM(
    base_url=base_url,
    api_key=api_key,
    model=model,
  )