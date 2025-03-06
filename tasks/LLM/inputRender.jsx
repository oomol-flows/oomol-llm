import React, { useEffect, useState, useMemo, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import Select, { components } from 'react-select';
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
export function model(dom, context) {
    const customComponents = {
      Menu: (props) => (<components.Menu {...props} className={clsx(props.className, "nowheel")}>
      {props.children}
    </components.Menu>),
    }

    const LLM_STYLE = `
      .llm-container {
        .react-select-container {
          flex: 1;
        }

        .react-select__control {
          min-height: 24px;
        }
      }
    `

      function ModelComponent() {
          const [models, setModels] = useState([]);
          const [expanded, setExpanded] = useState(false);
          const [selectedModel, setSelectedModel] = useState(context.store.value$.value?.model || 'oomol-chat');
          const [temperature, setTemperature] = useState(context.store.value$.value?.temperature || 0);
          const [topP, setTopP] = useState(context.store.value$.value?.top_p ?? 0.5);
          const [maxTokens, setMaxTokens] = useState(context.store.value$.value?.max_tokens || 4096);

          useEffect(() => {
            let style = document.head.querySelector('#llm-container-style');
            if (!style) {
                style = document.createElement('style');
                style.textContent = LLM_STYLE;
                style.id = 'llm-container-style';
                document.head.appendChild(style);
            }
        }, []);

        const [menuWidth, setMenuWidth] = useState(0);
        const innerRef = useRef(null);

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


          const options = useMemo(() => {
              return models.map((model) => ({
                  value: model,
                  label: model
              }));
          }
          , [models]);
          
          return (
              <div id="llm-container-style" className="llm-container" style={{ ['--menu-width']: `${menuWidth}px` }}>
                  <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                      <Select
                          ref={innerRef}
                          defaultValue={{ value: "oomol-chat", label: "Default" }}
                          options={options}
                          className='react-select-container'
                          classNamePrefix="react-select"
                          onChange={(selectedOption) => setSelectedModel(selectedOption.value)}
                          unstyled
                          components={customComponents}
                          styles={
                            {
                              menu: (base) => ({
                                ...base,
                                width: 'var(--menu-width)',
                              }),
                            }
                          }
                      />

                      <button onClick={() => setExpanded(!expanded)}>
                          <i className="codicon codicon-settings" />
                      </button>
                  </div>
                  {expanded && (
                    <div style={{ display: 'flex', flexDirection: "column", gap: '5px', paddingTop: '10px' }}>
                      <div style={{ display: 'flex', flexDirection: "column", gap: '8px' }}>
                          <label style={{ paddingLeft: '0.375em' }}>Temperature:</label>
                          <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                            <input
                                type="range"
                                min="0"
                                max="2"
                                step="0.01"
                                value={temperature}
                                onChange={(e) => setTemperature(parseFloat(e.target.value))}
                                style={{ flex: 1, padding: 0, margin: 0, border: 'none' }}
                            />
                          <input
                                type="number"
                                min="0"
                                max="2"
                                step="0.1"
                                value={temperature}
                                onChange={(e) => {
                                    const value = parseFloat(e.target.value);
                                    setTemperature(Math.min(value, 2));
                                }}
                                style={{ width:'52px', margin: 0, border: 'none' }}
                            />
                          </div>

                      </div> 
                      <div style={{ display: 'flex', flexDirection: "column", gap: '5px' }}>
                          <label style={{ paddingLeft: '0.375em' }}>Top P:</label>
                          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={topP}
                                onChange={(e) => setTopP(parseFloat(e.target.value))}
                                style={{ flex: 1, margin: 0, border: 'none', padding: 0 }}
                            />
                            <input
                                type="number"
                                min="0"
                                max="1"
                                step="0.1"
                                value={topP}
                                onChange={(e) => {
                                    const value = parseFloat(e.target.value);
                                    setTopP(Math.min(value, 1));
                                }}
                                style={{ width:'52px',  margin: 0, border: 'none' }}
                            />
                          </div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: "column", gap: '5px' }}>
                          <label style={{ paddingLeft: '0.375em' }}>Max Tokens:</label>
                          <div style={{ display: 'flex', gap: '8px' }}>
                            <input
                                  type="range"
                                  min="1"
                                  max="4096"
                                  step="1"
                                  value={maxTokens}
                                  onChange={(e) => setMaxTokens(parseInt(e.target.value))}
                                  style={{ flex: 1,padding: 0, margin: 0, border: 'none' }}
                              />
                            <input
                                type="number"
                                min="1"
                                max="4096"
                                value={maxTokens}
                                onChange={(e) => {
                                    const value = parseInt(e.target.value);
                                    setMaxTokens(Math.min(value, 4096));
                                }}
                                style={{ width:'60px',  margin: 0, border: 'none' }}
                            />
                          </div>
                      </div>
                  </div>
                )}
              </div>
          );
      }
  
      const root = createRoot(dom);
      root.render(<ModelComponent />);
      
      return () => root.unmount();
}

/**
 * @param {HTMLElement} dom
 * @param {InputRenderContext} context
 */
export function prompt(dom, context) {
    let style = document.head.querySelector('#highlight-in-textarea')
    if (!style) {
        style = document.createElement('style')
        style.textContent = HL_STYLE
        style.id = 'highlight-in-textarea'
        document.head.appendChild(style)
    }
    const textarea = dom.appendChild(document.createElement('textarea'))
    textarea.value = context.store.value$.value || ''
    textarea.placeholder = context.store.description$.value
    textarea.style.minHeight = '100px'
    textarea.style.resize = 'vertical'
    textarea.onchange = function update() {
        context.store.value$.set(this.value)
    }
    const hit = new HighlightInTextarea(textarea, {
        highlight: '{{input}}'
    })
    return () => hit.destroy()
}

// From npm:highlight-in-textarea
const HL_STYLE = `
.hit-container {
    position: relative;
    overflow: hidden !important;
    -webkit-text-size-adjust: none !important;
}

.hit-backdrop {
    position: absolute !important;
    top: 0 !important;
    right: -99px !important;
    bottom: 0 !important;
    left: 0 !important;
    padding-right: 99px !important;
    overflow-x: hidden !important;
    overflow-y: auto !important;
    pointer-events: none;
}

.hit-highlights {
    width: auto !important;
    height: auto !important;
    border-color: transparent !important;
    white-space: pre-wrap !important;
    word-wrap: break-word !important;
    color: transparent !important;
    overflow: hidden !important;
}

.hit-input {
    display: block !important;
    position: relative !important;
    margin: 0;
    padding: 0;
    border-radius: 5px;
    font: inherit;
    overflow-x: hidden !important;
    overflow-y: auto !important;
}

.hit-content {
    border: 1px solid transparent;
    padding: 5px;
}
.hit-content:focus-within {
    border-color: var(--vscode-focusBorder);
}

.hit-content mark {
    padding: 0 !important;
    color: var(--vscode-chat-slashCommandForeground);
    background: none transparent !important;
}
`

const HighlightInTextarea = function(el, config) {
  this.init(el, config);
};

HighlightInTextarea.instance = function(el, config) {
  return new HighlightInTextarea(el, config);
};

HighlightInTextarea.prototype = {
  ID: 'hit',

  init: function(el, config) {

    if (typeof el === 'string') {
      this.el = document.querySelector(el);
    } else {
      this.el = el;
    }

    if (this.getType(config) === 'custom') {
      this.highlight = config;
      this.generate();
    } else {
      console.error('valid config object not provided');
    }
  },

  // returns identifier strings that aren't necessarily "real" JavaScript types
  getType: function(instance) {
    let type = typeof instance;
    if (!instance) {
      return 'falsey';
    } else if (Array.isArray(instance)) {
      if (instance.length === 2 && typeof instance[0] === 'number' &&
          typeof instance[1] === 'number') {
        return 'range';
      } else {
        return 'array';
      }
    } else if (type === 'object') {
      if (instance instanceof RegExp) {
        return 'regexp';
      } else if (instance.hasOwnProperty('highlight')) {
        return 'custom';
      }
    } else if (type === 'function' || type === 'string') {
      return type;
    }

    return 'other';
  },

  generate: function() {
    this.el.classList.add(this.ID + '-input', this.ID + '-content');

    this.el.addEventListener('input', this.handleInput.bind(this));
    this.el.addEventListener('scroll', this.handleScroll.bind(this));

    this.highlights = document.createElement('div');
    this.highlights.classList.add(this.ID + '-highlights',
        this.ID + '-content');

    this.backdrop = document.createElement('div');
    this.backdrop.classList.add(this.ID + '-backdrop');
    this.backdrop.append(this.highlights);

    this.container = document.createElement('div');
    this.container.classList.add(this.ID + '-container');
    this.el.parentNode.insertBefore(this.container, this.el.nextSibling);

    this.container.append(this.el); // moves el into container
    this.container.append(this.backdrop);

    this.container.addEventListener('scroll',
        this.blockContainerScroll.bind(this));

    this.browser = this.detectBrowser();
    switch (this.browser) {
      case 'firefox':
        this.fixFirefox();
        break;
      case 'ios':
        this.fixIOS();
        break;
    }

    // trigger input event to highlight any existing input
    this.handleInput();
  },

  // browser sniffing sucks, but there are browser-specific quirks to handle
  // that are not a matter of feature detection
  detectBrowser: function() {
    let ua = window.navigator.userAgent.toLowerCase();
    if (ua.indexOf('firefox') !== -1) {
      return 'firefox';
    } else if (!!ua.match(/msie|trident\/7|edge/)) {
      return 'ie';
    } else if (!!ua.match(/ipad|iphone|ipod/) &&
        ua.indexOf('windows phone') === -1) {
      // Windows Phone flags itself as "like iPhone", thus the extra check
      return 'ios';
    } else {
      return 'other';
    }
  },

  // Firefox doesn't show text that scrolls into the padding of a textarea, so
  // rearrange a couple box models to make highlights behave the same way
  fixFirefox: function() {

    const hl = window.getComputedStyle(this.highlights, null);
    // take padding and border pixels from highlights div
    let padding = {
      'padding-top': parseInt(hl.getPropertyValue('padding-top')),
      'padding-right': parseInt(hl.getPropertyValue('padding-right')),
      'padding-bottom': parseInt(hl.getPropertyValue('padding-bottom')),
      'padding-left': parseInt(hl.getPropertyValue('padding-left')),
    };

    let border = {
      'border-top-width': parseInt(hl.getPropertyValue('border-top-width')),
      'border-right-width': parseInt(hl.getPropertyValue('border-right-width')),
      'border-bottom-width': parseInt(
          hl.getPropertyValue('border-bottom-width')),
      'border-left-width': parseInt(hl.getPropertyValue('border-left-width')),
    };

    this.highlights.style.padding = '0';
    this.highlights.style.borderWidth = '0';

    const bdStyle = window.getComputedStyle(this.backdrop, null);

    const bdMarginTopOldValue = parseInt(
        bdStyle.getPropertyValue('margin-top'));
    const bdMarginRightOldValue = parseInt(
        bdStyle.getPropertyValue('margin-right'));
    const bdMarginBottomOldValue = parseInt(
        bdStyle.getPropertyValue('margin-bottom'));
    const bdMarginLeftOldValue = parseInt(
        bdStyle.getPropertyValue('margin-left'));

    this.backdrop.style.marginTop = bdMarginTopOldValue +
        padding['padding-top'] + border['border-top-width'] + 'px';

    this.backdrop.style.marginRight = bdMarginRightOldValue +
        padding['padding-right'] + border['border-right-width'] + 'px';

    this.backdrop.style.marginBottom = bdMarginBottomOldValue +
        padding['padding-bottom'] + border['border-bottom-width'] + 'px';

    this.backdrop.style.marginLeft = bdMarginLeftOldValue +
        padding['padding-left'] + border['border-left-width'] + 'px';
  },

  // iOS adds 3px of (unremovable) padding to the left and right of a textarea,
  // so adjust highlights div to match
  fixIOS: function() {
    const paddingLeftOldValue = parseInt(this.highlights.style.paddingLeft);
    this.highlights.style.paddingLeft = (paddingLeftOldValue + 3) + 'px';

    const paddingRightOldValue = parseInt(this.highlights.style.paddingRight);
    this.highlights.style.paddingRight = (paddingRightOldValue + 3) + 'px';
  },

  handleInput: function() {
    let input = this.el.value;
    let ranges = this.getRanges(input, this.highlight);
    let unstaggeredRanges = this.removeStaggeredRanges(ranges);
    let boundaries = this.getBoundaries(unstaggeredRanges);
    this.renderMarks(boundaries);
  },

  getRanges: function(input, highlight) {
    let type = this.getType(highlight);
    switch (type) {
      case 'array':
        return this.getArrayRanges(input, highlight);
      case 'function':
        return this.getFunctionRanges(input, highlight);
      case 'regexp':
        return this.getRegExpRanges(input, highlight);
      case 'string':
        return this.getStringRanges(input, highlight);
      case 'range':
        return this.getRangeRanges(input, highlight);
      case 'custom':
        return this.getCustomRanges(input, highlight);
      default:
        if (!highlight) {
          // do nothing for falsey values
          return [];
        } else {
          console.error('unrecognized highlight type');
        }
    }
  },

  getArrayRanges: function(input, arr) {
    let ranges = arr.map(this.getRanges.bind(this, input));
    return Array.prototype.concat.apply([], ranges);
  },

  getFunctionRanges: function(input, func) {
    return this.getRanges(input, func(input));
  },

  getRegExpRanges: function(input, regex) {
    let ranges = [];
    let match;
    while (match = regex.exec(input), match !== null) {
      ranges.push([match.index, match.index + match[0].length]);
      if (!regex.global) {
        // non-global regexes do not increase lastIndex, causing an infinite loop,
        // but we can just break manually after the first match
        break;
      }
    }
    return ranges;
  },

  getStringRanges: function(input, str) {
    let ranges = [];
    let inputLower = input.toLowerCase();
    let strLower = str.toLowerCase();
    let index = 0;
    while (index = inputLower.indexOf(strLower, index), index !== -1) {
      ranges.push([index, index + strLower.length]);
      index += strLower.length;
    }
    return ranges;
  },

  getRangeRanges: function(input, range) {
    return [range];
  },

  getCustomRanges: function(input, custom) {
    let ranges = this.getRanges(input, custom.highlight);
    if (custom.className) {
      ranges.forEach(function(range) {
        // persist class name as a property of the array
        if (range.className) {
          range.className = custom.className + ' ' + range.className;
        } else {
          range.className = custom.className;
        }
      });
    }
    return ranges;
  },

  // prevent staggered overlaps (clean nesting is fine)
  removeStaggeredRanges: function(ranges) {
    let unstaggeredRanges = [];
    ranges.forEach(function(range) {
      let isStaggered = unstaggeredRanges.some(function(unstaggeredRange) {
        let isStartInside = range[0] > unstaggeredRange[0] && range[0] <
            unstaggeredRange[1];
        let isStopInside = range[1] > unstaggeredRange[0] && range[1] <
            unstaggeredRange[1];
        return isStartInside !== isStopInside; // xor
      });
      if (!isStaggered) {
        unstaggeredRanges.push(range);
      }
    });
    return unstaggeredRanges;
  },

  getBoundaries: function(ranges) {
    let boundaries = [];
    ranges.forEach(function(range) {
      boundaries.push({
        type: 'start',
        index: range[0],
        className: range.className,
      });
      boundaries.push({
        type: 'stop',
        index: range[1],
      });
    });

    this.sortBoundaries(boundaries);
    return boundaries;
  },

  sortBoundaries: function(boundaries) {
    // backwards sort (since marks are inserted right to left)
    boundaries.sort(function(a, b) {
      if (a.index !== b.index) {
        return b.index - a.index;
      } else if (a.type === 'stop' && b.type === 'start') {
        return 1;
      } else if (a.type === 'start' && b.type === 'stop') {
        return -1;
      } else {
        return 0;
      }
    });
  },

  renderMarks: function(boundaries) {
    let input = this.el.value;
    boundaries.forEach(function(boundary, index) {
      let markup;
      if (boundary.type === 'start') {
        markup = '{{hit-mark-start|' + index + '}}';
      } else {
        markup = '{{hit-mark-stop}}';
      }
      input = input.slice(0, boundary.index) + markup +
          input.slice(boundary.index);
    });

    // this keeps scrolling aligned when input ends with a newline
    input = input.replace(/\n({{hit-mark-stop}})?$/, '\n\n$1');

    // encode HTML entities
    input = input.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    if (this.browser === 'ie') {
      // IE/Edge wraps whitespace differently in a div vs textarea, this fixes it
      input = input.replace(/ /g, ' <wbr>');
    }

    // replace start tokens with opening <mark> tags with class name
    input = input.replace(/{{hit-mark-start\|(\d+)}}/g,
        function(match, subMatch) {
          const className = boundaries[+subMatch].className;
          if (className) {
            return '<mark class="' + className + '">';
          } else {
            return '<mark>';
          }
        });

    // replace stop tokens with closing </mark> tags
    input = input.replace(/{{hit-mark-stop}}/g, '</mark>');

    this.highlights.innerHTML = input;
  },

  handleScroll: function() {
    this.backdrop.scrollTop = this.el.scrollTop;

    // Chrome and Safari won't break long strings of spaces, which can cause
    // horizontal scrolling, this compensates by shifting highlights by the
    // horizontally scrolled amount to keep things aligned
    let scrollLeft = this.el.scrollLeft;

    if (scrollLeft > 0) {
      this.backdrop.style.transform = 'translateX(' + -scrollLeft + 'px)';
    } else {
      this.backdrop.style.transform = '';
    }
  },

  // in Chrome, page up/down in the textarea will shift stuff within the
  // container (despite the CSS), this immediately reverts the shift
  blockContainerScroll: function() {
    this.container.scrollLeft = 0;
  },

  destroy: function() {
    this.container.parentElement.replaceChild(this.el, this.container);
    this.el.classList.remove(this.ID + '-content', this.ID + '-input');
  },
};
