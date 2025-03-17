import CodestralSVG from "./icons/codestral.svg";
import DeepSeekSVG from "./icons/deepseek.svg";
import DouBaoSVG from "./icons/doubao.svg";
import Mistralai from "./icons/mistralai.svg";
import OOMOLSVG from "./icons/oomol.svg";
import QwenSVG from "./icons/qwen.svg";
import SiliconFlowSVG from "./icons/silicon-flow.svg";

import type { InputRenderContext } from '@oomol/types/inputRender'
import type { IModelOptions } from "./main";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { createRoot } from "react-dom/client";
import Select, { components, SelectInstance } from "react-select";
import Editor from "react-simple-code-editor";
import clsx from "clsx";

type Model = {
  model_name: string;
  model_display_name: string;
  temperature: number;
  top_p: number;
  max_tokens: number;
  tags: string[];
  ratio: number;
  channel_name: string;
};

// See https://github.com/JedWatson/react-select/blob/-/packages/react-select/src/builtins.ts
export interface IBasicOption {
  readonly icon?: string | React.ReactNode;
  readonly label?: string;
  readonly value?: string;
  readonly isDisabled?: boolean;
}

export function model(dom: HTMLElement, context: InputRenderContext) {
  injectStyles();

  function ModelComponent() {
    const [models, setModels] = useState<Model[]>([]);
    const [expanded, setExpanded] = useState(false);

    const [selectedModel, setSelectedModel] = useState(
      context.store.value$.value?.model || "oomol-chat"
    );
    const [temperature, setTemperature] = useState<number>(
      context.store.value$.value?.temperature || 0
    );
    const [topP, setTopP] = useState<number>(
      context.store.value$.value?.top_p ?? 0.5
    );
    const [maxTokens, setMaxTokens] = useState<number>(
      context.store.value$.value?.max_tokens || 4096
    );

    useEffect(() => {
      context.postMessage("getLLMModels", (models: Model[]) => {
        if (models?.length) {
          setModels(models);
        }
      });
    }, []);

    useEffect(() => {
      context.store.value$.set({
        model: selectedModel,
        temperature: temperature,
        top_p: topP,
        max_tokens: maxTokens,
      } satisfies IModelOptions);
    }, [selectedModel, temperature, topP, maxTokens]);

    const customSelectLabel = ({ value }: { value: Model }) => {
      return (
        <div className="custom-label">
          <ModelIcon modelName={value.model_name} />
          <div className="custom-label-content">
            <div className="custom-label-header">
              <div className="title-box">
                <span className="title" title={labelOfModel(value.model_name)}>
                  {labelOfModel(value.model_name)}
                </span>
                <ModelTag content={value.channel_name} highlight />
              </div>
              <span className="ratio">Ratio: {value.ratio}</span>
            </div>
            <div className="tags">
              {value.tags.map((tag) => (
                <ModelTag key={tag} content={tag} />
              ))}
            </div>
          </div>
        </div>
      );
    };

    return (
      <div className="llm-container">
        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
          <TheSelect
            value={{ value: selectedModel, label: labelOfModel(selectedModel) }}
            options={models.map((model) => ({
              value: model.model_name,
              label: customSelectLabel({ value: model }),
            }))}
            onChange={(selectedOption: IBasicOption) => {
              setSelectedModel(selectedOption.value);
            }}
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
              <RangeInput key={props.label} {...props} />
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
  model = model.replace(/\W/g, " ").replace(/\s+/g, " ").toLowerCase();
  model = model
    .split(" ")
    .map((word) => {
      if (word === "oomol") return "OOMOL";
      if (word === "qwen") return "Qwen";
      if (word === "qvq") return "QvQ";
      if (word === "qwq") return "QwQ";
      if (word === "deepseek") return "DeepSeek";
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

  const Role = ["system", "user", "assistant"];
  const initialMessages = parseMessages(context.store.value$.value);
  function MessagesComponent() {
    const [messages, setMessages] = useState(initialMessages);

    const updateRole = useCallback(
      (index: number, role: string) => {
        const newMessages = messages.slice();
        if (newMessages[index]) {
          newMessages[index] = { ...newMessages[index], role };
          setMessages(newMessages);
        }
      },
      [messages]
    );

    const updateContent = useCallback(
      (index: number, content: string) => {
        const newMessages = messages.slice();
        if (newMessages[index]) {
          newMessages[index] = { ...newMessages[index], content };
          setMessages(newMessages);
        }
      },
      [messages]
    );

    const addMessage = useCallback(() => {
      setMessages((m) => [...m, { role: "user", content: "" }]);
    }, []);

    const deleteMessage = useCallback((index: number) => {
      setMessages((m) => {
        m = m.slice();
        m.splice(index, 1);
        return m;
      });
    }, []);

    useEffect(() => {
      context.store.value$.set(messages);
    }, [messages]);

    return (
      <div className="llm-container">
        {messages.map((a, i) => (
          <div key={i} data-message-index={i} className="llm-message-container">
            <div className="llm-message-head">
              <TheSelect
                value={{ value: a.role, label: a.role }}
                options={Role.map((role) => ({ value: role, label: role }))}
                onChange={(e: IBasicOption) => updateRole(i, e.value!)}
              />
              <button onClick={() => deleteMessage(i)}>
                <i className="codicon codicon-trash" />
              </button>
            </div>
            <Editor
              value={a.content}
              onValueChange={(content) => updateContent(i, content)}
              highlight={doHighlight}
              padding={5}
              className="llm-message-content"
              placeholder={context.store.description$.value}
              style={{ minHeight: 100, resize: "vertical" }}
            />
          </div>
        ))}
        <button className="llm-btn-add-message" onClick={addMessage}>
          Add message
        </button>
      </div>
    );
  }

  const root = createRoot(dom);
  root.render(<MessagesComponent />);

  return () => root.unmount();
}

function doHighlight(content: string): string {
  return content
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/{{input}}/g, "<mark>{{input}}</mark>");
}

function customSingleValue<Option extends IBasicOption = IBasicOption>(
  option: Option
) {
  const { label, value } = option;
  return (
    <div className="format-option-container" title={label || value}>
      {value && <ModelIcon modelName={value} size={16} />}
      <span className="format-option-label">{label || value}</span>
    </div>
  );
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

function TheSelect(props: any) {
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
        onChange={props.onChange}
        unstyled
        components={customComponents}
        styles={{ menu: (base) => ({ ...base, width: "var(--menu-width)" }) }}
      />
    </div>
  );
}

function ModelTag({
  content,
  highlight,
}: {
  content: string;
  highlight?: boolean;
}) {
  return (
    <div className={`model-tag ${highlight ? "highlight" : ""}`}>{content}</div>
  );
}

const modelIconMap = {
  codestral: CodestralSVG,
  deepseek: DeepSeekSVG,
  doubao: DouBaoSVG,
  mistralai: Mistralai,
  oomol: OOMOLSVG,
  qwen: QwenSVG,
  "silicon-flow": SiliconFlowSVG,
  qwq: QwenSVG,
};

function getModelIcon(model: string) {
  if (model === "oomol-chat" || model === "Default") return "oomol";
  const parsedLabel = model
    .replace(/\W/g, " ")
    .replace(/\s+/g, " ")
    .toLowerCase();

  return (
    Object.keys(modelIconMap).find((key) => parsedLabel.includes(key)) || null
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
}

function RangeInput({
  label,
  value,
  min,
  max,
  step,
  onChange,
  defaultValue,
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

function parseMessages(value: unknown) {
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

.custom-label {
  flex: 1;
  display: flex;
  gap: 12px;
  align-items: center;
  overflow: hidden;
  padding: 8px 12px;
}

.custom-label-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 9px;
  overflow: hidden;

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }
}

.custom-label-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  .title-box {
    display: flex;
    gap: 4px;
    align-items: center;
    overflow: hidden;
  }

   .title {
    font-size: 13px;
    font-weight: 500;
    color: var(--text-4);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .ratio {
    white-space: nowrap;
    font-size: 12px;
    color: var(--text-2);
    font-weight: 500;

    .oomol-theme-dark & {
      color: var(--text-3);
    }
  }
}

.model-tag {
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

.highlight {
  background-color: var(--brand-5);
  color: #ffffff;

  .oomol-theme-dark & {
    color: var(--text-4);
  }
}

.format-option-container {
  display: flex;
  align-items: center;
  gap: 4px;

  .format-option-label {
    font-size: 11px;
    color: var(--text-4);
    font-weight: 500;
  }
}
`;
