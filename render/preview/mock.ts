import { HandleRowStore, InputRenderContext } from '@oomol/types/inputRender';
import { ReadonlyVal, val } from 'value-enhancer';
import { faker } from '@faker-js/faker';
import { CallableBlock, Model } from '../src/types';
import { mockModels } from './mock-models';

function mockValue(name: string) {
  if (name === 'messages') {
    return [];
  }
}

function mockSchema(name: string) {
  if (name === 'messages') {
    return { type: 'array', items: {}, maxItems: 1, minItems: 1 };
  }
}

export function mockInputRenderContext(name: string): InputRenderContext & { dark?: ReadonlyVal<boolean> } {
  return {
    handle: name,
    allHandleNames: val(['mockHandle']),
    store: mockHandleRowStore(name, mockValue(name), mockSchema(name)),
    dark: val(true),
    resolveStaticResource: (uri: string) => `mock://static/${uri}`,
    registerActions: console.info,
    postMessage: mockPostMessage,
  }
}

function mockHandleRowStore(name: string, value: unknown, schema: unknown): HandleRowStore {
  const value$ = val(value);
  value$.reaction(v => {
    console.info(`${name}:`, v);
  });
  const schema$ = val(schema);
  schema$.reaction(s => {
    console.info(`${name} schema:`, s);
  });
  return {
    name,
    context: { schema$: schema$, canEditValue: true },
    value$: value$,
    description$: val(faker.lorem.sentence()),
  } as HandleRowStore;
}

function mockPostMessage(message: unknown, ...args: unknown[]) {
  if (message === 'getLLMModels') {
    (args[0] as Function)(mockModels)
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

