export interface Model {
  model_name: string;
  model_display_name: string;
  temperature: number;
  top_p: number;
  max_tokens: number;
  tags: string[];
  ratio: number;
  channel_name: string;
  input_ratio: number;
  output_ratio: number;
};

export interface IModelOptions {
  model?: string;
  temperature?: number; // 0-1
  top_p?: number; // 0-1
  max_tokens?: number; // 1-4096
}

export interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface CallableBlock {
  id: string;
  package: string; // 'self' is current workspace
  packageDisplayName: string;
  blockName: string;
  icon?: string; // ':collection:name:' or url
  title?: string;
  description?: string;
  inputsDef?: InputHandleDef[];
  outputsDef?: OutputHandleDef[];
}

export interface Skill {
  package: string;
  blockName: string;
  // XXX: value, exclude inputs, exclude outputs, etc.
}

interface OutputHandleDef {
  handle: string;
  description?: string;
}

interface InputHandleDef extends OutputHandleDef {
  value?: any; // default value
}

// See https://github.com/JedWatson/react-select/blob/-/packages/react-select/src/builtins.ts
export interface IBasicOption<Value extends string = string> {
  readonly icon?: string | React.ReactNode;
  readonly label?: string | React.ReactNode;
  readonly value?: Value;
  readonly isDisabled?: boolean;
  // Derived from group label automatically.
  readonly group?: { label?: string; value?: string };
  // For model.
  readonly channel?: string;
}
