import CodestralSVG from "./icons/codestral.svg";
import DeepSeekSVG from "./icons/deepseek.svg";
import DouBaoSVG from "./icons/doubao.svg";
import Mistralai from "./icons/mistralai.svg";
import OOMOLSVG from "./icons/oomol.svg";
import QwenSVG from "./icons/qwen.svg";
import SiliconFlowSVG from "./icons/silicon-flow.svg";
import GeminiSVG from "./icons/gemini.svg";
import DefaultSVG from "./icons/default.svg";
import GrokSVG from "./icons/grok.svg";
import OpenAISVG from "./icons/openai.svg";
import ClaudeSVG from "./icons/claude.svg";

import type { InputRenderContext } from '@oomol/types/inputRender'
import type { IModelOptions, Message } from "./main";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { createRoot } from "react-dom/client";
import Select, { components, SelectInstance, Props as ReactSelectProps } from "react-select";
import Editor from "react-simple-code-editor";
import clsx from "clsx";
import { useVal } from "use-value-enhancer";

type Model = {
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

// See https://github.com/JedWatson/react-select/blob/-/packages/react-select/src/builtins.ts
export interface IBasicOption {
  readonly icon?: string | React.ReactNode;
  readonly label?: string | React.ReactNode;
  readonly value?: string;
  readonly isDisabled?: boolean;
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
                defaultValue: 0.5,
              },
              {
                label: "Top P",
                value: topP,
                min: 0,
                max: 1,
                step: 0.01,
                onChange: (value: any) => setTopP(parseFloat(value)),
                defaultValue: 1,
              },
              {
                label: "Max Tokens",
                value: maxTokens,
                min: 1,
                max: 4096,
                step: 1,
                onChange: (value: any) => setMaxTokens(Number(value)),
                defaultValue: 2048,
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

/**
 * @param {HTMLElement} dom
 * @param {InputRenderContext} context
 */
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
    const [messages, setMessages] = useState(initialMessages);
    const allHandleNames = useVal(context.allHandleNames);

    const readonly = !context.store.context.canEditValue;

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
        return [{ role: "system", content: "" }];
      } else {
        const newRole = m[m.length - 1].role === "user" ? "assistant" : "user";
        return [...m, { role: newRole, content: "" }];
      }
    }), []);

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
                isDisabled={readonly}
              />
              {readonly ? null : (
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
        {readonly ? null : (
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

function filterString(str: string | React.ReactNode): string {
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

  return (
    <div
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

function injectStyles() {
  let style = document.head.querySelector("#oomol-llm-styles");
  if (!style) {
    style = document.createElement("style");
    style.textContent = STYLE;
    style.id = "oomol-llm-styles";
    document.head.appendChild(style);
  }
}

const STYLE = `
.llm-container .react-select-container {
  flex: 1;
}

.llm-container .react-select__control {
  min-height: 24px;
}

.llm-container mark {
  color: var(--vscode-chat-slashCommandForeground);
  background: none transparent !important;
}

.llm-message-container {
  margin-bottom: 4px;
}

.llm-message-head {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 4px;
}

.llm-message-head select {
  border-color: transparent;
}

.llm-btn-add-message {
}

.llm-message-content {
  border: 1px solid transparent;
  background: var(--widget-background);
  border-radius: var(--widget-radius);
}

.llm-message-content:hover {
  background: var(--widget-background-highlight-color);
}

.llm-message-content:focus-within {
  border-color: var(--brand-highlight-color);
  background: var(--widget-input-background);
}

.llm-message-content ::selection {
  background: #2b4f7760;
}

.llm-custom-label {
  flex: 1;
  display: flex;
  gap: 12px;
  align-items: center;
  overflow: hidden;
  padding: 8px 12px;
}

.llm-custom-label-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 9px;
  overflow: hidden;

  .llm-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }
}

.llm-custom-label-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  .llm-title-box {
    display: flex;
    gap: 4px;
    align-items: center;
    overflow: hidden;
  }

   .llm-title {
    font-size: 13px;
    font-weight: 500;
    color: var(--text-4);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .llm-ratio {
    white-space: nowrap;
    font-size: 12px;
    color: var(--text-2);
    font-weight: 500;
  }
}

.llm-tag {
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 2px 6px;
  border-radius: 4px;
  background-color: var(--fill-6);
  font-size: 11px;
  color: var(--text-4);
  white-space: nowrap;
}

.llm-tag-highlight {
  background-color: var(--brand-5);
  color: #ffffff;

  .oomol-theme-dark & {
    color: var(--text-4);
  }
}

.llm-tag-AlibabaCloud {
  color: #ffffff;
  background-color: #E4630B;
}

.llm-tag-DeepSeek {
  color: #ffffff;
  background-color: #4D6BFF;
}

.llm-tag-VolcEngine {
  color: #ffffff;
  background-color: #2FC6C6;
}

.llm-tag-OpenRouter {
  color: #ffffff;
  background-color: #7C8B9D;
}

.llm-format-option-container {
  display: flex;
  align-items: center;
  gap: 4px;

  .llm-format-option-label {
    font-size: 11px;
    color: var(--text-4);
    font-weight: 500;
  }
}
`;
