all:
	esbuild tasks/LLM/main.ts --bundle --platform=node --format=esm --outdir=tasks/LLM/bundled
