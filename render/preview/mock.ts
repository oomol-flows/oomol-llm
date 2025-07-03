import { HandleRowStore, InputRenderContext } from '@oomol/types/inputRender';
import { ReadonlyVal, val } from 'value-enhancer';
import { CallableBlock, Model } from '../src/types';

export function mockInputRenderContext(name: string): InputRenderContext & { dark?: ReadonlyVal<boolean> } {
  return {
    handle: name,
    allHandleNames: val(['mockHandle']),
    store: mockHandleRowStore(name),
    dark: val(true),
    resolveStaticResource: (uri: string) => `mock://static/${uri}`,
    registerActions: console.info,
    postMessage: mockPostMessage,
  }
}

function mockHandleRowStore(name: string): HandleRowStore {
  const value$ = val();
  value$.reaction(v => {
    console.info(`${name}:`, v);
  });
  return {
    name,
    context: { canEditValue: true },
    value$: value$,
    description$: val('Mock description'),
  } as any;
}

function mockPostMessage(message: unknown, ...args: unknown[]) {
  if (message === 'getLLMModels') {
    (args[0] as Function)(<Model[]>[{
      model_name: 'mock-model',
      model_display_name: 'Mock Model',
      temperature: 0.5,
      top_p: 0.9,
      max_tokens: 1000,
      tags: ['mock', 'example'],
      ratio: 1.0,
      channel_name: 'mock-channel',
      input_ratio: 1.0,
      output_ratio: 1.0,
    }])
  }
  if (message === 'getCallableBlocks') {
    (args[0] as Function)(val<CallableBlock[]>(Array.from({ length: 5 }, (_, i) => ({
      id: 'mock-block-' + i,
      package: 'self',
      blockName: 'mockBlock' + i,
      icon: ':codicon:add:',
      title: 'Mock Block Title ' + i,
      description: 'This is a mock block for demonstration purposes.',
      inputsDef: [{
        handle: 'input1',
        description: 'Input 1 description',
        value: 'default value',
      }],
      outputsDef: [{
        handle: 'output1',
        description: 'Output 1 description',
      }],
    }))))
  }
}
