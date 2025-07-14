//#region generated meta
type Inputs = {
    skills: any;
};
type Outputs = {
    output: string;
};
//#endregion

import type { Context } from "@oomol/types/oocana";

type Skill = {
    readonly package: string
    readonly blockName: string;
}

export default async function(
    params: Inputs,
    context: Context<Inputs, Outputs>
): Promise<Partial<Outputs> | undefined | void> {

    var skill: Skill = params.skills[0];

    if (skill.package !== "self" && skill.blockName !== "llm-chat")
        throw new Error('Expected skills[0] to be self::llm-chat');

    var response = context.runBlock(`${skill.package}::${skill.blockName}`, {
        timeout: 30,
        retry_times: 0,
        retry_sleep: 3.5,
        stream: false,
        model: { model: 'oomol-chat', temperature: 0, top_p: 0.5, max_tokens: 4096 },
        template: [
            { role: 'user', content: 'Hello, what day is today?' },
        ],
    });

    var { error, result } = await response.finish();
    if (error || !result) throw new Error(error + '' || 'No result.');

    var output = result.output as string;

    context.preview({ type: 'markdown', data: output })

    return { output };
};
