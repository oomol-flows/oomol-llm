/// <reference lib="esnext" />
import type { Context } from '@oomol/types/oocana'
import { createOpenAICompatible } from '@ai-sdk/openai-compatible'
import { streamText } from 'ai'

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
    [key: string]: any
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
    const baseURL = context.OOMOL_LLM_ENV.baseUrlV1
    const apiKey = context.OOMOL_LLM_ENV.apiKey

    const replacements = getReplacements(params);
    const model = params.model.model || models.shift()!
    const messages: Message[] = typeof params.messages === 'string'
        ? [{ role: 'user', content: applyReplacement(params.messages, replacements) }]
        : params.messages.map(e => applyReplacement2(e, replacements))

    const response = streamText({
        model: createOpenAICompatible({ name: 'oomol', baseURL, apiKey }).chatModel(model),
        messages: messages,
        temperature: params.model.temperature,
        topP: params.model.top_p,
        maxTokens: params.model.max_tokens
    });

    let output = ''
    for await (const textPart of response.textStream) {
        output += textPart
        context.preview({ type: 'markdown', data: output })
    }

    return { output: await response.text }
}

function getReplacements(params: Input): [string, string][] {
    const replacements: [string, string][] = []
    for (const key of Object.keys(params)) {
        if (key !== 'model' && key !== 'messages') {
            const value = params[key]
            if (typeof value === 'string') {
                replacements.push([`{{${key}}}`, value.trim()])
            }
        }
    }
    replacements.push(['{{input}}', params.input || ''])
    return replacements
}

function applyReplacement(message: string, replacements: [string, string][]): string {
    let content = message
    for (const [key, value] of replacements) {
        content = content.replaceAll(key, value);
    }
    return content
}

function applyReplacement2(message: Message, replacements: [string, string][]): Message {
    let content = message.content
    for (const [key, value] of replacements) {
        content = content.replaceAll(key, value);
    }
    message.content = content
    return message;
}
