import STYLE from '../style.css';

import type { InputRenderContext, InputRenderer } from '@oomol/types/inputRender';

import React from 'react';
import { createRoot } from 'react-dom/client';

export interface InputRenderProps { context: InputRenderContext; }

export function wrapReactComponent(Comp: React.ComponentType<InputRenderProps>): InputRenderer {
  return function (dom, context) {
    injectStyles();

    const root = createRoot(dom);
    root.render(<Comp context={context} />);

    return () => root.unmount();
  };
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
