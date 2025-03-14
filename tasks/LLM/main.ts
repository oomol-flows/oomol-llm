/// <reference lib="esnext" />
import type { Context } from '@oomol/types/oocana'
import { createOpenAICompatible } from '@ai-sdk/openai-compatible'
import { generateText } from 'ai'

export interface IModelOptions {
    model?: string
    temperature?: number // 0-1
    top_p?: number // 0-1
    max_tokens?: number // 1-4096
}

interface Input {
    input: string | null
    model: IModelOptions
    messages: string | Message[]
}

export interface Message {
    role: 'system' | 'user' | 'assistant'
    content: string
}

interface Output {
    output: string
}

export default async function (
    params: Input,
    context: Context<Input, Output>,
): Promise<Output> {
    const models = context.OOMOL_LLM_ENV.models
    const baseURL = context.OOMOL_LLM_ENV.baseUrl
    const apiKey = context.OOMOL_LLM_ENV.apiKey

    const input = (params.input || '').trim()
    const model = params.model.model || models.shift()!
    const messages: Message[] = typeof params.messages === 'string'
        ? [{ role: 'user', content: params.messages }]
        : params.messages.map(e => {
            e.content = e.content.replaceAll('{{input}}', input)
            return e
        })

    const { text } = await generateText({
        model: createOpenAICompatible({ name: 'oomol', baseURL, apiKey }).chatModel(model),
        messages: messages,
        temperature: params.model.temperature,
        topP: params.model.top_p,
        maxTokens: params.model.max_tokens
    });

    return { output: text }
}
