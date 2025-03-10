import React, { useEffect, useState, useRef, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import Select, { components, SelectInstance } from 'react-select';
import Editor from 'react-simple-code-editor';
import clsx from 'clsx';

/**
 * TODO: publish @oomol/types/inputRender
 * @typedef {{
 *   store: {
 *     value$: { value: any, set(v: any): void }
 *     description$: { value: string }
 *   },
 *   postMessage: (message: any, ...args: any[]) => void
 * }} InputRenderContext
 */

/**
 * @param {HTMLElement} dom
 * @param {InputRenderContext} context
 */

interface InputRenderContext {
  store: {
    value$: { value: any; set(v: any): void };
    description$: { value: string };
  };
  postMessage: (message: any, ...args: any[]) => void;
}

export function model(dom: HTMLElement, context: InputRenderContext) {
  injectStyles()

  function ModelComponent() {
    const [models, setModels] = useState([]);
    const [expanded, setExpanded] = useState(false);
    const [selectedModel, setSelectedModel] = useState(context.store.value$.value?.model || 'oomol-chat');
    const [temperature, setTemperature] = useState(context.store.value$.value?.temperature || 0);
    const [topP, setTopP] = useState(context.store.value$.value?.top_p ?? 0.5);
    const [maxTokens, setMaxTokens] = useState(context.store.value$.value?.max_tokens || 4096);

    useEffect(() => {
      context.postMessage('getLLMModels', (models) => {
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
        max_tokens: maxTokens
      });
    }, [selectedModel, temperature, topP, maxTokens]);

    return (
      <div className="llm-container">
        <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
          <TheSelect
            value={{ value: selectedModel, label: labelOfModel(selectedModel) }}
            options={models.map((model) => ({ value: model, label: labelOfModel(model) }))}
            onChange={(selectedOption) => setSelectedModel(selectedOption.value)}
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
                onChange: (value) => setTemperature(value),
                defaultValue: temperature,
              },
              {
                label: "Top P",
                value: topP,
                min: 0,
                max: 1,
                step: 0.01,
                onChange: (value) => setTopP(value),
                defaultValue: topP,
              },
              {
                label: "Max Tokens",
                value: maxTokens,
                min: 1,
                max: 4096,
                step: 1,
                onChange: (value) => setMaxTokens(parseInt(value)),
                defaultValue: maxTokens,
              },
            ].map((props) => (
              <RangeSlider key={props.label} {...props} />
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

function labelOfModel(model) {
  if (model === 'oomol-chat') return 'Default';
  model = model.replace(/\W/g, ' ').replace(/\s+/g, ' ').toLowerCase()
  model = model.split(' ').map(word => {
    if (word === 'oomol') return 'OOMOL';
    if (word === 'qwen') return 'Qwen';
    if (word === 'qvq') return 'QvQ';
    if (word === 'qwq') return 'QwQ';
    if (word === 'deepseek') return 'DeepSeek';
    if (word === 'ai') return 'AI';
    return word[0].toUpperCase() + word.slice(1)
  }).join(' ')
  return model
}

/**
 * @param {HTMLElement} dom
 * @param {InputRenderContext} context
 */
export function messages(dom: HTMLElement, context: InputRenderContext) {
  injectStyles()

  const Role = ['system', 'user', 'assistant']
  const initialMessages = parseMessages(context.store.value$.value)
  function MessagesComponent() {
    const [messages, setMessages] = useState(initialMessages)

    const updateRole = useCallback((index: number, role: string) => {
      const newMessages = messages.slice()
      if (newMessages[index]) {
        newMessages[index] = { ...newMessages[index], role }
        setMessages(newMessages)
      }
    }, [messages])

    const updateContent = useCallback((index: number, content: string) => {
      const newMessages = messages.slice()
      if (newMessages[index]) {
        newMessages[index] = { ...newMessages[index], content }
        setMessages(newMessages)
      }
    }, [messages])

    const addMessage = useCallback(() => {
      setMessages(m => [...m, { role: 'user', content: '' }])
    }, [])

    const deleteMessage = useCallback((index) => {
      setMessages(m => {
        m = m.slice()
        m.splice(index, 1)
        return m
      })
    }, [])

    useEffect(() => {
      context.store.value$.set(messages);
    }, [messages]);

    return <div className='llm-container'>
      {messages.map((a, i) => (
        <div key={i} data-message-index={i} className='llm-message-container'>
          <div className='llm-message-head'>
            <TheSelect
              value={{ value: a.role, label: a.role }}
              options={Role.map((role) => ({ value: role, label: role }))}
              onChange={e => updateRole(i, e.value)}
            />
            <button onClick={() => deleteMessage(i)}>
              <i className='codicon codicon-trash' />
            </button>
          </div>
          <Editor
            value={a.content}
            onValueChange={content => updateContent(i, content)}
            highlight={doHighlight}
            padding={5}
            className='llm-message-content'
            placeholder={context.store.description$.value}
            style={{ minHeight: 100, resize: 'vertical' }}
          />
        </div>
      ))}
      <button className='llm-btn-add-message' onClick={addMessage}>
        Add message
      </button>
    </div>
  }

  const root = createRoot(dom);
  root.render(<MessagesComponent />);

  return () => root.unmount();
}

function doHighlight(content) {
  return content
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/{{input}}/g, '<mark>{{input}}</mark>');
}

const customComponents = {
  Menu: (props) => (
    <components.Menu {...props} className={clsx(props.className, "nowheel")}>
      {props.children}
    </components.Menu>
  ),
}

function TheSelect(props) {
  const [menuWidth, setMenuWidth] = useState(0);
  const innerRef = useRef<SelectInstance<any, any>>(null);

  useEffect(() => {
    if (innerRef.current?.controlRef) {
      let timer = 0;
      const observer = new ResizeObserver(entries => {
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

  return <div style={{ display: 'contents', ['--menu-width']: `${menuWidth}px` } as React.CSSProperties}>
    <Select
      ref={innerRef}
      value={props.value}
      options={props.options}
      className='react-select-container'
      classNamePrefix="react-select"
      onChange={props.onChange}
      unstyled
      components={customComponents}
      styles={{ menu: (base) => ({ ...base, width: 'var(--menu-width)' }) }}
    />
  </div>
}

// TODO: add types
function RangeSlider({ label, value, min, max, step, onChange, defaultValue }) {
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
          onChange={(e) => onChange(e.target.value)}
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
          // TODO: add limits
          onChange={(e) => {
            const newValue =
              e.target.value === "" ? "" : Math.min(Math.max(Number(e.target.value), min), max);
            onChange(newValue);
          }}
          onBlur={(e) => {
            console.log("blur", e.target.value);
            if (e.target.value === "" || isNaN(Number(e.target.value))) {
              console.log("run here", defaultValue);
              onChange(defaultValue);
            } else {
              onChange(Math.min(Math.max(Number(e.target.value), min), max));
            }
          }}
          style={{ width: "60px", margin: 0, border: "none" }}
        />
      </div>
    </div>
  );
}

function parseMessages(value) {
  if (typeof value === 'string') {
    return [{ role: 'user', content: value }]
  } else if (Array.isArray(value)) {
    const Role = ['system', 'user', 'assistant']
    return value.filter(x => !!x).map(v => {
      if (typeof v === 'string') {
        return { role: 'user', content: v }
      } else {
        let role = Role.includes(v.role) ? v.role : 'user'
        let content = typeof v.content === 'string' ? v.content : ''
        return { role, content }
      }
    })
  } else {
    return []
  }
}

function injectStyles() {
  let style = document.head.querySelector('#oomol-llm-styles')
  if (!style) {
    style = document.createElement('style')
    style.textContent = STYLE
    style.id = 'oomol-llm-styles'
    document.head.appendChild(style)
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
`
