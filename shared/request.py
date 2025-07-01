import json
import urllib.request

from typing import Any
from io import TextIOWrapper


_POST_OK_STATUS = (200, 201)

class Request:
  def __init__(self, url: str, data: Any, headers: dict[str, Any], timeout: float) -> None:
    self._timeout: float = timeout
    self._request: urllib.request.Request = urllib.request.Request(
      url=url,
      method="POST",
      headers=headers,
      data=json.dumps(data).encode("utf-8"),
    )

  def post(self) -> Any:
    with urllib.request.urlopen(self._request, timeout=self._timeout) as response:
      self._assert_ok(response, "application/json")
      encoding = response.headers.get_content_charset() or "utf-8"
      response_body = response.read().decode(encoding)
      try:
        return json.loads(response_body)
      except json.JSONDecodeError as err:
        raise ValueError("Failed to decode JSON response") from err

  def post_and_iter_lines(self):
    with urllib.request.urlopen(self._request, timeout=self._timeout) as response:
      self._assert_ok(response, "text/event-stream")
      encoding = response.headers.get_content_charset() or "utf-8"
      with TextIOWrapper(response, encoding=encoding) as text_response:
        while True:
          line = text_response.readline()
          if not line:
            break
          yield line

  def _assert_ok(self, response: Any, content_type: str):
    if response.getcode() not in _POST_OK_STATUS:
      raise ValueError(f"request LLM failed with status code {response.getcode()}")
    content_types = response.headers.get("Content-Type", ())
    if isinstance(content_types, str):
      content_types = (content_types,)
    if content_type not in content_types:
      content_types = ", ".join(content_types)
      raise ValueError(f"Invalid Content-Type {content_type}: expect {content_types}")