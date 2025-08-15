import ClaudeSVG from "../icons/claude.svg";
import CodestralSVG from "../icons/codestral.svg";
import DeepSeekSVG from "../icons/deepseek.svg";
import DefaultSVG from "../icons/default.svg";
import DouBaoSVG from "../icons/doubao.svg";
import GeminiSVG from "../icons/gemini.svg";
import GrokSVG from "../icons/grok.svg";
import KimiSVG from "../icons/kimi.svg";
import Mistralai from "../icons/mistralai.svg";
import OOMOLSVG from "../icons/oomol.svg";
import OpenAISVG from "../icons/openai.svg";
import QwenSVG from "../icons/qwen.svg";
import SiliconFlowSVG from "../icons/silicon-flow.svg";

import { clsx } from 'clsx';
import React from 'react';
import { FilterOptionOption, GroupBase, OptionsOrGroups } from 'react-select';

import { CallableBlock, IBasicOption, Message, Model, Skill } from './types';

const map = {
  "default": DefaultSVG,
  "codestral": CodestralSVG,
  "deepseek": DeepSeekSVG,
  "doubao": DouBaoSVG,
  "mistralai": Mistralai,
  "oomol": OOMOLSVG,
  "qwen": QwenSVG,
  "silicon-flow": SiliconFlowSVG,
  "qwq": QwenSVG,
  "gemini": GeminiSVG,
  "grok": GrokSVG,
  "openai": OpenAISVG,
  "claude": ClaudeSVG,
  "kimi": KimiSVG,
};

export function iconOf(model: string, channel?: string): string {
  if (model === "oomol-chat" || model === "Default") return map.oomol;

  const parsedLabel = model
    .replace(/\W/g, " ")
    .replace(/\s+/g, " ")
    .toLowerCase();

  let icon = Object.keys(map).find((key) => parsedLabel.includes(key)) as keyof typeof map | undefined;
  if (!icon && channel) {
    if (channel === 'Kimi') icon = 'kimi';
    if (channel === 'SiliconFlow') icon = 'silicon-flow';
  }

  return map[icon || "default"];
}

export function labelOf(model: string): string {
  model = model.replace(/[-_/]/g, " ").replace(/\s+/g, " ").toLowerCase();
  model = model
    .split(" ")
    .map((word) => {
      if (word === "oomol") return "OOMOL";
      if (word === "qwen") return "Qwen";
      if (word === "qvq") return "QvQ";
      if (word === "qwq") return "QwQ";
      if (word === "deepseek") return "DeepSeek";
      if (word === "vl") return "VL";
      if (word === "ai") return "AI";
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
  return model;
}

/** Wrap `keys` with `<mark>`. */
export function highlightText(content: string, keys: Iterable<string>): string {
  content = content.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  for (const key of keys) {
    content = content.replaceAll(key, `<mark>${key}</mark>`);
  }
  return content
}

export function filterString(str: unknown): string {
  return typeof str == 'string' ? str : '';
}

export function ModelIcon({ modelName, channelName, size }: { modelName: string; channelName?: string; size?: number; }) {
  const iconSize = size || 40;
  const icon = iconOf(modelName, channelName);
  return icon ? <img src={icon} alt={modelName} style={{ width: iconSize, height: iconSize }} /> : null;
}

export function ModelTag({ channelName, highlight }: { channelName: string; highlight?: boolean; }) {
  return <div className={clsx("llm-tag", highlight && "llm-tag-highlight", channelName && `llm-tag-${channelName}`)}>{channelName}</div>;
}

const carbonSystem = <svg width="16" height="16" viewBox="0 0 32 32"><path fill="currentColor" d="M30 24v-2h-2.101a5 5 0 0 0-.732-1.753l1.49-1.49l-1.414-1.414l-1.49 1.49A5 5 0 0 0 24 18.101V16h-2v2.101a5 5 0 0 0-1.753.732l-1.49-1.49l-1.414 1.414l1.49 1.49A5 5 0 0 0 18.101 22H16v2h2.101a5 5 0 0 0 .732 1.753l-1.49 1.49l1.414 1.414l1.49-1.49a5 5 0 0 0 1.753.732V30h2v-2.101a5 5 0 0 0 1.753-.732l1.49 1.49l1.414-1.414l-1.49-1.49A5 5 0 0 0 27.899 24Zm-7 2a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3" /><path fill="currentColor" d="M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h10v-2H4V12h24v3h2V6a2 2 0 0 0-2-2m0 6H4V6h24Z" /><circle cx="20" cy="8" r="1" fill="currentColor" /><circle cx="23" cy="8" r="1" fill="currentColor" /><circle cx="26" cy="8" r="1" fill="currentColor" /></svg>;
const carbonAssistant = <svg width="16" height="16" viewBox="0 0 32 32"><path fill="currentColor" d="M16 30C8.28 30 2 23.72 2 16S8.28 2 16 2s14 6.28 14 14c0 2.62-.73 5.18-2.11 7.39c.05.74 1.05 3.21 2.01 5.17c.19.38.11.84-.19 1.14s-.76.38-1.14.2c-1.99-.96-4.5-1.94-5.24-1.97A14 14 0 0 1 16 30m0-26C9.38 4 4 9.38 4 16s5.38 12 12 12a12 12 0 0 0 6.39-1.84c.32-.21 1.01-.63 4.58.84c-1.5-3.54-1.07-4.22-.87-4.54c1.23-1.93 1.89-4.16 1.89-6.46c0-6.62-5.38-12-12-12zm7.83 16.87l-1.67-1.11a4.997 4.997 0 0 1-8.33 0l-1.67 1.11A7 7 0 0 0 17.99 24c2.35 0 4.54-1.17 5.83-3.13zM22 13c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2c.01-1.09-.87-1.99-1.96-2zm-8 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2c.01-1.09-.87-1.99-1.96-2z" /></svg>;
const carbonUser = <svg width="16" height="16" viewBox="0 0 32 32"><path fill="currentColor" d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5m0 8a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3" /><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2m-6 24.377V25a3.003 3.003 0 0 1 3-3h6a3.003 3.003 0 0 1 3 3v1.377a11.9 11.9 0 0 1-12 0m13.993-1.451A5 5 0 0 0 19 20h-6a5 5 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0" /></svg>

const ROLE = ["system", "user", "assistant"] as const;
export type Role = typeof ROLE[number];
const RoleImages: Record<Role, React.ReactNode> = {
  system: carbonSystem,
  assistant: carbonAssistant,
  user: carbonUser,
}

export const RoleOptions = ROLE.map((role): IBasicOption<Role> => ({
  value: role,
  label: (
    <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      {RoleImages[role]}
      <span style={{ textTransform: 'capitalize' }}>{role}</span>
    </div>
  )
}));

export function isSingleMessageMode(schema: unknown): boolean {
  if (schema && typeof schema === 'object' && !Array.isArray(schema)) {
    return (schema as any).type === 'string';
  }
  return false;
}

export function parseMessages(value: unknown): Message[] {
  if (typeof value === "string") {
    return [{ role: "user", content: value }];
  } else if (Array.isArray(value)) {
    const Role = ["system", "user", "assistant"];
    return value
      .filter((x) => !!x)
      .map((v) => {
        if (typeof v === "string") {
          return { role: "user", content: v };
        } else {
          let role = Role.includes(v.role) ? v.role : "user";
          let content = typeof v.content === "string" ? v.content : "";
          return { role, content };
        }
      });
  } else {
    return [];
  }
}

export function firstMessageContent(value: unknown): string | undefined {
  if (typeof value === "string") {
    return value;
  } else if (Array.isArray(value) && value.length > 0) {
    const first = value[0];
    if (typeof first === "string") {
      return first;
    } else if (typeof first === "object" && first !== null && "content" in first) {
      return filterString(first.content);
    }
  }
  return undefined;
}

export function findBlock(blocks: CallableBlock[] | undefined, skill: Skill): CallableBlock | undefined {
  return blocks?.find(b => b.package === skill.package && b.blockName === skill.blockName)
}

export function BlockIcon({ icon, alt, dark }: { icon: string, alt?: string, dark?: boolean }) {
  let src: string | null = null;
  if (icon.startsWith(":") && icon.endsWith(":")) {
    const [_, collection = "", name = "", color = ""] = icon.split(':')
    if (collection && name) {
      src = `https://api.iconify.design/${collection}:${name}.svg?color=${encodeURIComponent(getColor(color, dark))}`;
    }
  } else {
    src = icon;
  }
  return src && <img src={src} alt={alt} style={{ width: 12, height: 12 }} />;
}

function getColor(color: string, dark?: boolean): string {
  if (color && color.toLowerCase() !== 'currentcolor') return color;
  return dark ? '#f0f6fc' : '#252a2e';
}

export function mapBlocksToOptions(blocks?: CallableBlock[]): OptionsOrGroups<IBasicOption, GroupBase<IBasicOption>> {
  if (!blocks || !blocks.length) return [];
  const result: (IBasicOption | GroupBase<IBasicOption>)[] = [];
  let p = 'self', group: GroupBase<IBasicOption> & { readonly options: IBasicOption[] } | undefined;
  for (const block of blocks) {
    if (block.package !== p) {
      p = block.package;
      group = { label: block.packageDisplayName, options: [] };
      result.push(group);
    }
    const option = mapBlockToOption(block);
    if (group) {
      group.options.push(option);
    } else {
      result.push(option);
    }
  }
  return result;
}

export function mapBlockToOption(block: CallableBlock): IBasicOption;
export function mapBlockToOption(block: CallableBlock | undefined): IBasicOption | undefined;
export function mapBlockToOption(block: CallableBlock | undefined): IBasicOption | undefined {
  return block && { value: block.id, label: getBlockLabel(block), group: { label: block.packageDisplayName, value: block.package } };
}

export function getBlockLabel(block?: CallableBlock): string {
  if (!block) return '<unknown>';
  if (block.title) {
    return `${block.title} (${block.packageDisplayName} - ${block.blockName})`;
  }
  return `${block.blockName} (${block.packageDisplayName})`;
}

export function getBlockDetails(block: CallableBlock): string {
  let details = `${block.package}::${block.blockName}`;
  if (block.title) {
    details = `${block.title} (${details})`;
  }
  if (block.description) {
    details += `\n${block.description}`;
  }
  return details;
}

export function parseSkills(value: unknown): Skill[] {
  if (Array.isArray(value)) {
    return value.map((v: any) => {
      if (typeof v === "object" && v !== null && isNonEmptyString(v.package) && isNonEmptyString(v.blockName)) {
        return v as Skill;
      }
    }).filter(x => !!x);
  } else {
    return [];
  }
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && !!value;
}

export function blocksToMap(blocks: CallableBlock[] | undefined): Map<string, CallableBlock> {
  const map = new Map<string, CallableBlock>();
  if (blocks) {
    for (const block of blocks) {
      map.set(block.id, block);
    }
  }
  return map;
}

export function matchSubstring<Option extends IBasicOption = IBasicOption>(
  option: FilterOptionOption<Option>,
  input: string,
): boolean {
  input = input.trim().toLowerCase();
  return (
    (option.data.group?.label || "").toLowerCase().includes(input) ||
    (option.data.group?.value || "").toLowerCase().includes(input) ||
    (option.label || "").toLowerCase().includes(input) ||
    (option.value || "").toLowerCase().includes(input)
  );
}

export type FilterByTagFn = (model: Model) => boolean;

export const returnsTrue = () => true;

function toStringArray(value: unknown): string[] | undefined {
  if (typeof value === 'string') {
    return value.split(',').map(x => x.trim()).filter(x => !!x);
  }
  if (Array.isArray(value)) {
    return value.map(x => typeof x === 'string' ? x.trim() : '').filter(x => !!x);
  }
  return undefined;
}

const ui_options = 'ui:options';
const tags = 'tags';
const excludeTags = 'excludeTags';

export function getFilterByTag(schema: any): FilterByTagFn {
  if (schema && typeof schema === 'object') {
    const options = schema[ui_options];
    if (options && typeof options === 'object') {
      const include = toStringArray(options[tags])?.map(x => x.toLowerCase());
      const exclude = toStringArray(options[excludeTags])?.map(x => x.toLowerCase());
      if (include && include.length > 0 || exclude && exclude.length > 0) {
        return (model: Model) => {
          const tags = model.tags.map(x => x.toLowerCase());
          let result = true;
          if (include && include.length > 0) {
            if (!tags.length) {
              result = false;
            } else {
              result = include.some(tag => tags.includes(tag));
            }
          }
          if (result && exclude && exclude.length > 0) {
            result = !exclude.some(tag => tags.includes(tag));
          }
          return result;
        };
      }
    }
  }
  return returnsTrue;
}
