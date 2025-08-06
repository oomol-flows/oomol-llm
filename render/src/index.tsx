import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { GroupBase } from 'react-select';
import Editor from 'react-simple-code-editor';
import { useVal } from 'use-value-enhancer';
import { ReadonlyVal } from 'value-enhancer';
import { BlockIcon, blocksToMap, filterString, findBlock, firstMessageContent, getBlockDetails, getBlockLabel, highlightText, isSingleMessageMode, labelOf, mapBlocksToOptions, mapBlockToOption, matchSubstring, ModelIcon, ModelTag, parseMessages, parseSkills, Role, RoleOptions } from './base/base';
import { RangeInput } from './base/RangeInput';
import { wrapReactComponent } from './base/react';
import { Select } from './base/Select';
import { CallableBlock, IBasicOption, IModelOptions, Model, Skill } from './base/types';

export const model = wrapReactComponent(function Model({ context }) {
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

  const selectModel = useCallback((model: string) => {
    setSelectedModel(model);
    const info = models.find(m => m.model_name === model);
    setTemperature(t => info?.temperature ?? t);
    setTopP(t => info?.top_p ?? t);
    setMaxTokens(t => info?.max_tokens ?? t);
  }, [models]);

  const customSelectLabel = ({ value }: { value: Model }) => (
    <div className="llm-custom-label">
      <ModelIcon modelName={value.model_name} channelName={value.channel_name} />
      <div className="llm-custom-label-content">
        <div className="llm-custom-label-header">
          <div className="llm-title-box">
            <span className="llm-title" title={labelOf(value.model_name)}>
              {labelOf(value.model_name)}
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
        <Select
          variant='models'
          value={{ value: selectedModel, label: labelOf(selectedModel), channel: models.find(m => m.model_name === selectedModel)?.channel_name }}
          options={models.map((model) => ({
            value: model.model_name,
            label: customSelectLabel({ value: model }),
          }))}
          onChange={(selectedOption: IBasicOption | null) => {
            selectModel(selectedOption?.value || '');
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
});

export const messages = wrapReactComponent(function Messages({ context }) {
  const schema = useVal(context.store.context.schema$);
  const singleMessage = isSingleMessageMode(schema);
  const [messages, setMessages] = useState(() => parseMessages(context.store.value$?.value));
  const allHandleNames = useVal(context.allHandleNames);

  const readonly = !context.store.context.canEditValue;
  const allowAdd = !readonly && (!singleMessage || messages.length < 1);
  const allowDelete = !readonly && (!singleMessage || messages.length > 1);

  const doHighlight = useCallback((text: string): string => {
    return highlightText(text, allHandleNames.map(v => `{{${v}}}`));
  }, [allHandleNames]);

  const updateRole = useCallback((index: number, role: Role) => {
    const newMessages = messages.slice();
    if (newMessages[index]) {
      newMessages[index] = { ...newMessages[index], role };
      setMessages(newMessages);
    }
  }, [messages]);

  const updateContent = useCallback((index: number | null, content: string) => {
    if (typeof index == 'number') {
      const newMessages = messages.slice();
      if (newMessages[index]) {
        newMessages[index] = { ...newMessages[index], content };
        setMessages(newMessages);
      }
    } else {
      setMessages([{ role: "user", content }]);
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

  const singleMessageContent = useMemo(() => filterString(firstMessageContent(messages)), [messages]);

  useEffect(() => {
    context.store.value$?.set(singleMessage ? singleMessageContent : messages);
  }, [singleMessage, singleMessageContent, messages]);

  return (
    <div className="llm-container">
      {singleMessage ? (
        <Editor
          value={singleMessageContent}
          onValueChange={(content) => updateContent(null, content)}
          readOnly={readonly}
          highlight={doHighlight}
          padding={5}
          className="llm-message-content"
          placeholder={context.store.description$.value}
          style={{ minHeight: 100, resize: "vertical" }}
        />
      ) : <>
        {messages.map((a, i) => (
          <div key={i} data-message-index={i} className="llm-message-container">
            <div className="llm-message-head">
              <Select
                variant='default'
                value={RoleOptions.find((option) => option.value === a.role)}
                options={RoleOptions}
                onChange={(e: IBasicOption | null) => updateRole(i, (e?.value as Role) ?? 'user')}
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
      </>}
    </div>
  );
});

export const skills = wrapReactComponent(function Skills({ context }) {
  const [blocks$, setBlocks$] = useState<ReadonlyVal<CallableBlock[]>>();
  const [menuOpen, setMenuOpen] = useState(false);
  const blocks = useVal(blocks$);
  const blocksMap = useMemo(() => blocksToMap(blocks), [blocks]);
  const dark = useVal(context.dark);

  const [skills, setSkills] = useState<Skill[]>(() => parseSkills(context.store.value$?.value));

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
        <Select
          className="llm-select-skills"
          defaultMenuIsOpen
          value={skills.map(skill => mapBlockToOption(findBlock(blocks, skill))).filter(x => !!x)}
          options={mapBlocksToOptions(blocks)}
          onMenuClose={() => setMenuOpen(false)}
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
});
