import { clsx } from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import ReactSelect, { components, Props, SelectInstance } from 'react-select';
import { filterString, ModelIcon } from './base';
import { IBasicOption } from './types';

export interface SelectProps extends Props<IBasicOption, false> {
  readonly variant?: "models" | "default";
}

const defaultComponents = {
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
}

function withModelIcon<Option extends IBasicOption = IBasicOption>(option: Option) {
  const { label, value, channel } = option;
  return (
    <div className="llm-format-option-container" title={filterString(label) || value}>
      {value && <ModelIcon modelName={value} channelName={channel} size={16} />}
      <span className="llm-format-option-label">{label || value}</span>
    </div>
  );
}

const withCustomSingleValue = {
  ...defaultComponents,
  SingleValue: (props: any) => (
    <components.SingleValue {...props}>
      {withModelIcon(props.data)}
    </components.SingleValue>
  ),
};

export function Select(props: SelectProps) {
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
      <ReactSelect
        ref={innerRef}
        value={props.value}
        options={props.options}
        className="react-select-container"
        classNamePrefix="react-select"
        onChange={props.onChange as any}
        unstyled
        components={props.components ?? (props.variant === "models" ? withCustomSingleValue : defaultComponents)}
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
