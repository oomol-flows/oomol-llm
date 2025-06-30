#!/bin/bash
set -e
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR/.."

poetry install --no-root

rm -rf ./requests
SITE="$(poetry run python -c "import sys; print(sys.path[-1])")"
cp -a "$SITE/requests" ./requests

cd render
pnpm i
pnpm build