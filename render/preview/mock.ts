import { HandleRowStore, InputRenderContext } from '@oomol/types/inputRender';
import { ReadonlyVal, val } from 'value-enhancer';
import { faker } from '@faker-js/faker';
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
    description$: val(faker.lorem.sentence()),
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
    const fakePackages = expand(faker.helpers.uniqueArray(faker.lorem.word, 10));
    (args[0] as Function)(val<CallableBlock[]>(Array.from({ length: 50 }, (_, i) => ({
      id: faker.string.uuid(),
      package: i < 2 ? 'self' : fakePackages[i % fakePackages.length],
      packageDisplayName: capitalize(fakePackages[i % fakePackages.length]),
      blockName: faker.lorem.word(),
      icon: ':carbon:ai-generate:',
      title: capitalize(faker.lorem.words({ min: 1, max: 10 })),
      description: faker.lorem.sentence(),
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

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function expand(a: string[]): string[] {
  // Randomly duplicate items to simulate a larger set
  return a.flatMap(item => {
    const count = faker.number.int({ min: 1, max: 5 });
    return Array.from({ length: count }, () => item);
  });
}

