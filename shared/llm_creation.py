from typing import Any, TypedDict
from oocana import Context
from shared.llm import LLM

class CreationParams(TypedDict):
  model: Any
  retry_times: int
  retry_sleep: float
  timeout: float


def create_llm(params: CreationParams, context: Context):
  model_obj = params["model"]
  model: str = model_obj["model"]
  base_url = context.oomol_llm_env["base_url_v1"]
  api_key = context.oomol_llm_env["api_key"]

  return LLM(
    base_url=base_url,
    api_key=api_key,
    model=model,
    retry_times=params["retry_times"],
    retry_sleep_time=params["retry_sleep"],
    timeout=params["timeout"],
  )