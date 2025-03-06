/// <reference lib="esnext" />
import type { Context } from '@oomol/types/oocana'
import { createOpenAICompatible } from '@ai-sdk/openai-compatible'
import { generateText } from 'ai'

interface Input {
    input: string | null
    model: IModelOptions
    prompt: string
}

interface Output {
    output: string
}

export default async function (
    params: Input,
    context: Context<Input, Output>,
): Promise<Output> {    
    const models = context.OOMOL_LLM_ENV.models
    const baseURL = context.OOMOL_LLM_ENV.baseUrl + '/v1'
    const apiKey = context.OOMOL_LLM_ENV.apiKey

    const input = (params.input || '').trim()
    const model = params.model.model || models.shift()!
    const prompt = params.prompt.replaceAll('{{input}}', input)

    const { text } = await generateText({
        model: createOpenAICompatible({ name: 'oomol', baseURL, apiKey }).chatModel(model),
        prompt: prompt,
        temperature: params.model.temperature,
        topP: params.model.top_p,
        maxTokens: params.model.max_tokens
    });

    return { output: text }
}

interface IModelOptions {
    model?: string
    temperature?: number // 0-1
    top_p?: number // 0-1
    max_tokens?: number // 1-4096
}
