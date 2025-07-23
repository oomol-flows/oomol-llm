import CodestralSVG from "../icons/codestral.svg";
import DeepSeekSVG from "../icons/deepseek.svg";
import DouBaoSVG from "../icons/doubao.svg";
import Mistralai from "../icons/mistralai.svg";
import OOMOLSVG from "../icons/oomol.svg";
import QwenSVG from "../icons/qwen.svg";
import SiliconFlowSVG from "../icons/silicon-flow.svg";
import GeminiSVG from "../icons/gemini.svg";
import DefaultSVG from "../icons/default.svg";
import GrokSVG from "../icons/grok.svg";
import OpenAISVG from "../icons/openai.svg";
import ClaudeSVG from "../icons/claude.svg";
import KimiSVG from "../icons/kimi.svg";

import STYLE from './style.css';

import type { InputRenderContext } from '@oomol/types/inputRender'
import type { ReadonlyVal } from "value-enhancer";

import React, { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { createRoot } from "react-dom/client";
import Select, { components, SelectInstance, Props as ReactSelectProps, FilterOptionOption, OptionsOrGroups, GroupBase } from "react-select";
import Editor from "react-simple-code-editor";
import clsx from "clsx";
import { useVal } from "use-value-enhancer";
import { Model, IModelOptions, Message, CallableBlock, Skill } from './types';

// See https://github.com/JedWatson/react-select/blob/-/packages/react-select/src/builtins.ts
export interface IBasicOption {
  readonly icon?: string | React.ReactNode;
  readonly label?: string | React.ReactNode;
  readonly value?: string;
  readonly isDisabled?: boolean;
  // Derived from group label automatically.
  readonly group?: { label?: string; value?: string };
}

export function model(dom: HTMLElement, context: InputRenderContext) {
  injectStyles();

  function ModelComponent() {
    const [models, setModels] = useState<Model[]>([]);
    const [expanded, setExpanded] = useState(false);

    const readonly = !context.store.context.canEditValue;
    const value = context.store.value$?.value as IModelOptions | undefined;
    const [selectedModel, setSelectedModel] = useState(value?.model || "oomol-chat");
    const [temperature, setTemperature] = useState<number>(value?.temperature || 0);
    const [topP, setTopP] = useState<number>(value?.top_p ?? 0.5);
    const [maxTokens, setMaxTokens] = useState<number>(value?.max_tokens || 4096);

    useEffect(() => {
      context.postMessage("getLLMModels", (models: Model[]) => {
        if (models?.length) { setModels(models); }
      });
    }, []);

    useEffect(() => {
      context.store.value$?.set({
        model: selectedModel,
        temperature: temperature,
        top_p: topP,
        max_tokens: maxTokens,
      } satisfies IModelOptions);
    }, [selectedModel, temperature, topP, maxTokens]);

    const customSelectLabel = ({ value }: { value: Model }) => (
      <div className="llm-custom-label">
        <ModelIcon modelName={value.model_name} />
        <div className="llm-custom-label-content">
          <div className="llm-custom-label-header">
            <div className="llm-title-box">
              <span className="llm-title" title={labelOfModel(value.model_name)}>
                {labelOfModel(value.model_name)}
              </span>
            </div>
            <span className="llm-ratio">Input: {value.input_ratio} / Output: {value.output_ratio}</span>
          </div>
          <div className="llm-tags">
            <ModelTag channelName={value.channel_name} highlight />
            {value.tags.map((tag) => (
              <ModelTag key={tag} channelName={tag} />
            ))}
          </div>
        </div>
      </div>
    );

    return (
      <div className="llm-container">
        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
          <TheSelect
            value={{ value: selectedModel, label: labelOfModel(selectedModel) }}
            options={models.map((model) => ({
              value: model.model_name,
              label: customSelectLabel({ value: model }),
            }))}
            onChange={(selectedOption: IBasicOption | null) => {
              setSelectedModel(selectedOption?.value || '');
            }}
            isLoading={models.length === 0}
            isDisabled={readonly}
          />
          <button onClick={() => setExpanded(!expanded)}>
            <i className="codicon codicon-settings" />
          </button>
        </div>
        {expanded && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              paddingTop: "10px",
            }}
          >
            {[
              {
                label: "Temperature",
                value: temperature,
                min: 0,
                max: 1,
                step: 0.01,
                onChange: (value: any) => setTemperature(parseFloat(value)),
              },
              {
                label: "Top P",
                value: topP,
                min: 0,
                max: 1,
                step: 0.01,
                onChange: (value: any) => setTopP(parseFloat(value)),
              },
              {
                label: "Max Tokens",
                value: maxTokens,
                min: 1,
                max: 4096,
                step: 1,
                onChange: (value: any) => setMaxTokens(Number(value)),
              },
            ].map((props) => (
              <RangeInput key={props.label} {...props} disabled={readonly} />
            ))}
          </div>
        )}
      </div>
    );
  }

  const root = createRoot(dom);
  root.render(<ModelComponent />);

  return () => root.unmount();
}

function labelOfModel(model: string): string {
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

export function messages(dom: HTMLElement, context: InputRenderContext) {
  injectStyles();

  const carbonSystem = <svg width="16" height="16" viewBox="0 0 32 32"><path fill="currentColor" d="M30 24v-2h-2.101a5 5 0 0 0-.732-1.753l1.49-1.49l-1.414-1.414l-1.49 1.49A5 5 0 0 0 24 18.101V16h-2v2.101a5 5 0 0 0-1.753.732l-1.49-1.49l-1.414 1.414l1.49 1.49A5 5 0 0 0 18.101 22H16v2h2.101a5 5 0 0 0 .732 1.753l-1.49 1.49l1.414 1.414l1.49-1.49a5 5 0 0 0 1.753.732V30h2v-2.101a5 5 0 0 0 1.753-.732l1.49 1.49l1.414-1.414l-1.49-1.49A5 5 0 0 0 27.899 24Zm-7 2a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3" /><path fill="currentColor" d="M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h10v-2H4V12h24v3h2V6a2 2 0 0 0-2-2m0 6H4V6h24Z" /><circle cx="20" cy="8" r="1" fill="currentColor" /><circle cx="23" cy="8" r="1" fill="currentColor" /><circle cx="26" cy="8" r="1" fill="currentColor" /></svg>;
  const carbonAssistant = <svg width="16" height="16" viewBox="0 0 32 32"><path fill="currentColor" d="M16 30C8.28 30 2 23.72 2 16S8.28 2 16 2s14 6.28 14 14c0 2.62-.73 5.18-2.11 7.39c.05.74 1.05 3.21 2.01 5.17c.19.38.11.84-.19 1.14s-.76.38-1.14.2c-1.99-.96-4.5-1.94-5.24-1.97A14 14 0 0 1 16 30m0-26C9.38 4 4 9.38 4 16s5.38 12 12 12a12 12 0 0 0 6.39-1.84c.32-.21 1.01-.63 4.58.84c-1.5-3.54-1.07-4.22-.87-4.54c1.23-1.93 1.89-4.16 1.89-6.46c0-6.62-5.38-12-12-12zm7.83 16.87l-1.67-1.11a4.997 4.997 0 0 1-8.33 0l-1.67 1.11A7 7 0 0 0 17.99 24c2.35 0 4.54-1.17 5.83-3.13zM22 13c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2c.01-1.09-.87-1.99-1.96-2zm-8 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2c.01-1.09-.87-1.99-1.96-2z" /></svg>;
  const carbonUser = <svg width="16" height="16" viewBox="0 0 32 32"><path fill="currentColor" d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5m0 8a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3" /><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2m-6 24.377V25a3.003 3.003 0 0 1 3-3h6a3.003 3.003 0 0 1 3 3v1.377a11.9 11.9 0 0 1-12 0m13.993-1.451A5 5 0 0 0 19 20h-6a5 5 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0" /></svg>

  const Role = ["system", "user", "assistant"] as const;
  const RoleImages: Record<typeof Role[number], React.ReactNode> = {
    system: carbonSystem,
    assistant: carbonAssistant,
    user: carbonUser,
  }
  const RoleOptions = Role.map((role) => ({
    value: role,
    label: (
      <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {RoleImages[role]}
        <span style={{ textTransform: 'capitalize' }}>{role}</span>
      </div>
    )
  }));

  const initialMessages = parseMessages(context.store.value$?.value);
  function MessagesComponent() {
    const schema = useVal(context.store.context.schema$);
    const singleMessage = isSingleMessageMode(schema);
    const [messages, setMessages] = useState(initialMessages);
    const allHandleNames = useVal(context.allHandleNames);

    const readonly = !context.store.context.canEditValue;
    const allowAdd = !readonly && (!singleMessage || messages.length < 1);
    const allowDelete = !readonly && (!singleMessage || messages.length > 1);

    const doHighlight = useCallback((text: string): string => {
      return doHighlight_(text, allHandleNames.map(v => `{{${v}}}`));
    }, [allHandleNames]);

    const updateRole = useCallback((index: number, role: "system" | "user" | "assistant") => {
      const newMessages = messages.slice();
      if (newMessages[index]) {
        newMessages[index] = { ...newMessages[index], role };
        setMessages(newMessages);
      }
    }, [messages]);

    const updateContent = useCallback((index: number, content: string) => {
      const newMessages = messages.slice();
      if (newMessages[index]) {
        newMessages[index] = { ...newMessages[index], content };
        setMessages(newMessages);
      }
    }, [messages]);

    const addMessage = useCallback(() => setMessages((m) => {
      if (!m.length) {
        return [{ role: singleMessage ? "user" : "system", content: "" }];
      } else {
        const newRole = m[m.length - 1].role === "user" ? "assistant" : "user";
        return [...m, { role: newRole, content: "" }];
      }
    }), [singleMessage]);

    const deleteMessage = useCallback((index: number) => setMessages((m) => m.toSpliced(index, 1)), []);

    useEffect(() => {
      context.store.value$?.set(messages);
    }, [messages]);

    return (
      <div className="llm-container">
        {messages.map((a, i) => (
          <div key={i} data-message-index={i} className="llm-message-container">
            <div className="llm-message-head">
              <TheSelect
                value={RoleOptions.find((option) => option.value === a.role)}
                options={RoleOptions}
                onChange={(e: IBasicOption | null) => updateRole(i, (e?.value as typeof Role[number]) ?? 'user')}
                components={customComponentsWithDefaultSingleValue}
                isDisabled={readonly || singleMessage}
              />
              {allowDelete && (
                <button onClick={() => deleteMessage(i)}>
                  <i className="codicon codicon-trash" />
                </button>
              )}
            </div>
            <Editor
              value={a.content}
              onValueChange={(content) => updateContent(i, content)}
              readOnly={readonly}
              highlight={doHighlight}
              padding={5}
              className="llm-message-content"
              placeholder={context.store.description$.value}
              style={{ minHeight: 100, resize: "vertical" }}
            />
          </div>
        ))}
        {allowAdd && (
          <button className="llm-btn-add-message" onClick={addMessage}>
            Add message
          </button>
        )}
      </div>
    );
  }

  const root = createRoot(dom);
  root.render(<MessagesComponent />);

  return () => root.unmount();
}

function isSingleMessageMode(schema: unknown): boolean {
  if (schema && typeof schema === 'object' && !Array.isArray(schema)) {
    const s = schema as any;
    if (s.type === 'array' && !s.uniqueItems) {
      return s.maxItems === 1 && s.minItems === 1;
    }
  }
  return false;
}

function doHighlight_(content: string, keys: Iterable<string>): string {
  content = content.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  for (const key of keys) {
    content = content.replaceAll(key, `<mark>${key}</mark>`);
  }
  return content
}

function customSingleValue<Option extends IBasicOption = IBasicOption>(
  option: Option
) {
  const { label, value } = option;
  return (
    <div className="llm-format-option-container" title={filterString(label) || value}>
      {value && <ModelIcon modelName={value} size={16} />}
      <span className="llm-format-option-label">{label || value}</span>
    </div>
  );
}

function filterString(str: string | unknown): string {
  if (typeof str === "string") return str;
  return ""
}

const customComponents = {
  DropdownIndicator: (props: any) => (
    <components.DropdownIndicator {...props}>
      <i className="i-codicon:chevron-down" />
    </components.DropdownIndicator>
  ),
  Menu: (props: any) => (
    <components.Menu {...props} className={clsx(props.className, "nowheel")}>
      {props.children}
    </components.Menu>
  ),
  SingleValue: (props: any) => (
    <components.SingleValue {...props}>
      {customSingleValue(props.data)}
    </components.SingleValue>
  ),
};

const customComponentsWithDefaultSingleValue = {
  DropdownIndicator: (props: any) => (
    <components.DropdownIndicator {...props}>
      <i className="i-codicon:chevron-down" />
    </components.DropdownIndicator>
  ),
  Menu: (props: any) => (
    <components.Menu {...props} className={clsx(props.className, "nowheel")}>
      {props.children}
    </components.Menu>
  ),
};

interface SelectProps extends ReactSelectProps<IBasicOption, false> { }

function matchSubstring<Option extends IBasicOption = IBasicOption>(
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

function TheSelect(props: SelectProps) {
  const [menuWidth, setMenuWidth] = useState(0);
  const innerRef = useRef<SelectInstance<any, any>>(null);

  useEffect(() => {
    if (innerRef.current?.controlRef) {
      let timer = 0;
      const observer = new ResizeObserver((entries) => {
        const width = entries[0].borderBoxSize[0].inlineSize;
        clearTimeout(timer);
        timer = window.setTimeout(() => setMenuWidth(width), 0);
      });
      observer.observe(innerRef.current.controlRef);
      return () => {
        clearTimeout(timer);
        observer.disconnect();
      };
    }
  }, []);

  useEffect(() => {
    if (props.defaultMenuIsOpen && innerRef.current) {
      innerRef.current.focus();
    }
  }, [props.defaultMenuIsOpen]);

  return (
    <div
      className={props.className}
      style={
        {
          display: "contents",
          ["--menu-width"]: `${menuWidth}px`,
        } as React.CSSProperties
      }
    >
      <Select
        ref={innerRef}
        value={props.value}
        options={props.options}
        className="react-select-container"
        classNamePrefix="react-select"
        onChange={props.onChange as any}
        unstyled
        components={props.components ?? customComponents}
        styles={{ menu: (base) => ({ ...base, width: "var(--menu-width)" }) }}
        isLoading={props.isLoading}
        isDisabled={props.isDisabled}
        defaultMenuIsOpen={props.defaultMenuIsOpen}
        onMenuClose={props.onMenuClose}
        filterOption={props.filterOption}
        formatGroupLabel={props.formatGroupLabel}
        formatOptionLabel={props.formatOptionLabel}
        hideSelectedOptions={props.hideSelectedOptions}
      />
    </div>
  );
}

function ModelTag({
  channelName,
  highlight,
}: {
  channelName: string;
  highlight?: boolean;
}) {
  return (
    <div className={clsx(
      "llm-tag",
      highlight && "llm-tag-highlight",
      channelName && `llm-tag-${channelName}`
    )}>{channelName}</div>
  );
}

const modelIconMap = {
  "fallback-icon": DefaultSVG,
  codestral: CodestralSVG,
  deepseek: DeepSeekSVG,
  doubao: DouBaoSVG,
  mistralai: Mistralai,
  oomol: OOMOLSVG,
  qwen: QwenSVG,
  "silicon-flow": SiliconFlowSVG,
  qwq: QwenSVG,
  gemini: GeminiSVG,
  grok: GrokSVG,
  openai: OpenAISVG,
  claude: ClaudeSVG,
  kimi: KimiSVG,
};

function getModelIcon(model: string) {
  if (model === "oomol-chat" || model === "Default") return "oomol";
  const parsedLabel = model
    .replace(/\W/g, " ")
    .replace(/\s+/g, " ")
    .toLowerCase();

  return (
    Object.keys(modelIconMap).find((key) => parsedLabel.includes(key)) || "fallback-icon"
  );
}

function ModelIcon({ modelName, size }: { modelName: string; size?: number }) {
  const iconSize = size || 40;
  const iconSrc = getModelIcon(modelName);
  return iconSrc ? (
    <img
      src={modelIconMap[iconSrc]}
      alt={modelName}
      style={{ width: iconSize, height: iconSize }}
    />
  ) : null;
}

interface RangeInputProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number | string) => void;
  defaultValue?: number;
  disabled?: boolean;
}

function RangeInput({
  label,
  value,
  min,
  max,
  step,
  onChange,
  defaultValue,
  disabled
}: RangeInputProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <label>{label}:</label>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          defaultValue={defaultValue}
          disabled={disabled}
          style={{
            height: "4px",
            flex: 1,
            padding: 0,
            margin: 0,
            border: "none",
          }}
        />
        <input
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          onChange={(e) => {
            const newValue =
              e.target.value === ""
                ? ""
                : Math.min(Math.max(Number(e.target.value), min), max);
            onChange(newValue);
          }}
          onBlur={(e) => {
            const numValue = Number(e.target.value);
            if (e.target.value === "" || isNaN(numValue)) {
              onChange(min);
            } else {
              const clampedValue = Math.min(Math.max(numValue, min), max);
              const finalValue = Number.isInteger(step)
                ? Math.round(clampedValue)
                : Number.parseFloat(clampedValue.toFixed(2));
              onChange(finalValue);
            }
          }}
          style={{ width: "60px", margin: 0, border: "none" }}
        />
      </div>
    </div>
  );
}

function parseMessages(value: unknown): Message[] {
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

export function skills(dom: HTMLElement, context: InputRenderContext) {
  injectStyles();

  const initialSkills = parseSkills(context.store.value$?.value);
  function SkillsComponent() {
    const [blocks$, setBlocks$] = useState<ReadonlyVal<CallableBlock[]>>();
    const [menuOpen, setMenuOpen] = useState(false);
    const blocks = useVal(blocks$);
    const blocksMap = useMemo(() => blocksToMap(blocks), [blocks]);
    const dark = useVal((context as any).dark); // TODO: update types.

    const [skills, setSkills] = useState<Skill[]>(initialSkills);

    const addSkill = useCallback((blockId: string) => {
      const block = blocksMap.get(blockId);
      if (block && !skills.some(s => s.blockName === block.blockName && s.package === block.package)) {
        setSkills((s) => [...s, { package: block.package, blockName: block.blockName }]);
        setMenuOpen(false);
      }
    }, [blocksMap, skills]);

    const deleteSkill = useCallback((skill: Skill) => {
      setSkills((s) => s.filter(sk => sk.package !== skill.package || sk.blockName !== skill.blockName));
    }, []);

    const readonly = !context.store.context.canEditValue;

    useEffect(() => {
      let isMounted = true;

      context.postMessage('getCallableBlocks', (blocks$: ReadonlyVal<CallableBlock[]>) => {
        if (!isMounted) return;
        setBlocks$(blocks$);
      });

      return () => {
        isMounted = false;
        blocks$?.dispose();
      }
    }, []);

    useEffect(() => {
      context.store.value$?.set(skills);
    }, [skills]);

    function formatGroupLabel(group: GroupBase<IBasicOption>): React.ReactNode {
      return <div className='llm-blocks-group' title={group.label}>{group.label}</div>;
    }

    function formatOptionLabel(option: IBasicOption): React.ReactNode {
      const block = blocksMap.get(option.value!);
      if (!block) return null;
      return <div className="llm-format-option-container" title={getBlockDetails(block)}>
        {block.icon && <BlockIcon icon={block.icon} alt={block.title || block.blockName} dark={dark} />}
        <span className="llm-format-option-label">{block.title || block.blockName}</span>
      </div>
    }

    return (
      <div className="llm-container">
        {skills.length > 0 && <div className="llm-tags">
          {skills.map(skill => {
            const block = findBlock(blocks, skill)
            return block && (
              <button className="llm-tag-btn" key={`${skill.package}::${skill.blockName}`} disabled={readonly}
                  title={getBlockDetails(block)}
                  onClick={() => deleteSkill(skill)}>
                {block.icon && <BlockIcon icon={block.icon} alt={getBlockLabel(block)} dark={dark} />}
                <span className="llm-tag-content">{block.title || block.blockName}</span>
                <span className="codicon codicon-close" />
              </button>
            );
          }).filter(x => !!x)}
        </div>}
        {readonly ? null : menuOpen ? (
          <TheSelect
            className="llm-select-skills"
            defaultMenuIsOpen
            value={skills.map(skill => {
              const block = findBlock(blocks, skill);
              return block && mapBlockToOption(block);
            }).filter(x => !!x)}
            options={mapBlocksToOptions(blocks)}
            onMenuClose={() => setMenuOpen(false)}
            components={customComponentsWithDefaultSingleValue}
            onChange={v => v?.value && addSkill(v.value)}
            filterOption={matchSubstring}
            formatGroupLabel={formatGroupLabel}
            formatOptionLabel={formatOptionLabel}
            hideSelectedOptions
          />
        ) : (
          <button className="llm-btn-add-message" onClick={() => setMenuOpen(true)}>
            Add skill
          </button>
        )}
      </div>
    );
  }

  const root = createRoot(dom);
  root.render(<SkillsComponent />);

  return () => root.unmount();
}

function findBlock(blocks: CallableBlock[] | undefined, skill: Skill): CallableBlock | undefined {
  return blocks?.find(b => b.package === skill.package && b.blockName === skill.blockName)
}

function BlockIcon({ icon, alt, dark }: { icon: string, alt?: string, dark?: boolean }) {
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

function mapBlocksToOptions(blocks?: CallableBlock[]): OptionsOrGroups<IBasicOption, GroupBase<IBasicOption>> {
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

function mapBlockToOption(block: CallableBlock): IBasicOption {
  return { value: block.id, label: getBlockLabel(block), group: { label: block.packageDisplayName, value: block.package } };
}

function getBlockLabel(block?: CallableBlock): string {
  if (!block) return '<unknown>';
  if (block.title) {
    return `${block.title} (${block.packageDisplayName} - ${block.blockName})`;
  }
  return `${block.blockName} (${block.packageDisplayName})`;
}

function getBlockDetails(block: CallableBlock): string {
  let details = `${block.package}::${block.blockName}`;
  if (block.title) {
    details = `${block.title} (${details})`;
  }
  if (block.description) {
    details += `\n${block.description}`;
  }
  return details;
}

function parseSkills(value: unknown): Skill[] {
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

function blocksToMap(blocks: CallableBlock[] | undefined): Map<string, CallableBlock> {
  const map = new Map<string, CallableBlock>();
  if (blocks) {
    for (const block of blocks) {
      map.set(block.id, block);
    }
  }
  return map;
}

function isNonEmptyString(value: any): value is string {
  return typeof value === "string" && !!value;
}

function injectStyles() {
  let style = document.head.querySelector("#oomol-llm-styles");
  if (!style) {
    style = document.createElement("style");
    style.textContent = STYLE;
    style.id = "oomol-llm-styles";
    document.head.appendChild(style);
  }
}
