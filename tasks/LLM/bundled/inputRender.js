var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from2, except, desc) => {
  if (from2 && typeof from2 === "object" || typeof from2 === "function") {
    for (let key of __getOwnPropNames(from2))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
  "node_modules/react/cjs/react.production.min.js"(exports) {
    "use strict";
    var l = Symbol.for("react.element");
    var n = Symbol.for("react.portal");
    var p = Symbol.for("react.fragment");
    var q = Symbol.for("react.strict_mode");
    var r2 = Symbol.for("react.profiler");
    var t = Symbol.for("react.provider");
    var u = Symbol.for("react.context");
    var v = Symbol.for("react.forward_ref");
    var w2 = Symbol.for("react.suspense");
    var x = Symbol.for("react.memo");
    var y = Symbol.for("react.lazy");
    var z = Symbol.iterator;
    function A(a) {
      if (null === a || "object" !== typeof a) return null;
      a = z && a[z] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } };
    var C = Object.assign;
    var D = {};
    function E(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    E.prototype.isReactComponent = {};
    E.prototype.setState = function(a, b) {
      if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    E.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {
    }
    F.prototype = E.prototype;
    function G(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    var H = G.prototype = new F();
    H.constructor = G;
    C(H, E.prototype);
    H.isPureReactComponent = true;
    var I = Array.isArray;
    var J = Object.prototype.hasOwnProperty;
    var K = { current: null };
    var L = { key: true, ref: true, __self: true, __source: true };
    function M(a, b, e) {
      var d, c = {}, k = null, h = null;
      if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
      var g = arguments.length - 2;
      if (1 === g) c.children = e;
      else if (1 < g) {
        for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
        c.children = f;
      }
      if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
      return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
    }
    function N(a, b) {
      return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l;
    }
    function escape(a) {
      var b = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b[a2];
      });
    }
    var P = /\/+/g;
    function Q(a, b) {
      return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
    }
    function R(a, b, e, d, c) {
      var k = typeof a;
      if ("undefined" === k || "boolean" === k) a = null;
      var h = false;
      if (null === a) h = true;
      else switch (k) {
        case "string":
        case "number":
          h = true;
          break;
        case "object":
          switch (a.$$typeof) {
            case l:
            case n:
              h = true;
          }
      }
      if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
        return a2;
      })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
      h = 0;
      d = "" === d ? "." : d + ":";
      if (I(a)) for (var g = 0; g < a.length; g++) {
        k = a[g];
        var f = d + Q(k, g);
        h += R(k, b, e, f, c);
      }
      else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done; ) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
      else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
      return h;
    }
    function S(a, b, e) {
      if (null == a) return a;
      var d = [], c = 0;
      R(a, d, "", "", function(a2) {
        return b.call(e, a2, c++);
      });
      return d;
    }
    function T(a) {
      if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(b2) {
          if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
        }, function(b2) {
          if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
        });
        -1 === a._status && (a._status = 0, a._result = b);
      }
      if (1 === a._status) return a._result.default;
      throw a._result;
    }
    var U = { current: null };
    var V = { transition: null };
    var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
    function X() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    exports.Children = { map: S, forEach: function(a, b, e) {
      S(a, function() {
        b.apply(this, arguments);
      }, e);
    }, count: function(a) {
      var b = 0;
      S(a, function() {
        b++;
      });
      return b;
    }, toArray: function(a) {
      return S(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    } };
    exports.Component = E;
    exports.Fragment = p;
    exports.Profiler = r2;
    exports.PureComponent = G;
    exports.StrictMode = q;
    exports.Suspense = w2;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
    exports.act = X;
    exports.cloneElement = function(a, b, e) {
      if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
      if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (1 === f) d.children = e;
      else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
        d.children = g;
      }
      return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
    };
    exports.createContext = function(a) {
      a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t, _context: a };
      return a.Consumer = a;
    };
    exports.createElement = M;
    exports.createFactory = function(a) {
      var b = M.bind(null, a);
      b.type = a;
      return b;
    };
    exports.createRef = function() {
      return { current: null };
    };
    exports.forwardRef = function(a) {
      return { $$typeof: v, render: a };
    };
    exports.isValidElement = O;
    exports.lazy = function(a) {
      return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
    };
    exports.memo = function(a, b) {
      return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
    };
    exports.startTransition = function(a) {
      var b = V.transition;
      V.transition = {};
      try {
        a();
      } finally {
        V.transition = b;
      }
    };
    exports.unstable_act = X;
    exports.useCallback = function(a, b) {
      return U.current.useCallback(a, b);
    };
    exports.useContext = function(a) {
      return U.current.useContext(a);
    };
    exports.useDebugValue = function() {
    };
    exports.useDeferredValue = function(a) {
      return U.current.useDeferredValue(a);
    };
    exports.useEffect = function(a, b) {
      return U.current.useEffect(a, b);
    };
    exports.useId = function() {
      return U.current.useId();
    };
    exports.useImperativeHandle = function(a, b, e) {
      return U.current.useImperativeHandle(a, b, e);
    };
    exports.useInsertionEffect = function(a, b) {
      return U.current.useInsertionEffect(a, b);
    };
    exports.useLayoutEffect = function(a, b) {
      return U.current.useLayoutEffect(a, b);
    };
    exports.useMemo = function(a, b) {
      return U.current.useMemo(a, b);
    };
    exports.useReducer = function(a, b, e) {
      return U.current.useReducer(a, b, e);
    };
    exports.useRef = function(a) {
      return U.current.useRef(a);
    };
    exports.useState = function(a) {
      return U.current.useState(a);
    };
    exports.useSyncExternalStore = function(a, b, e) {
      return U.current.useSyncExternalStore(a, b, e);
    };
    exports.useTransition = function() {
      return U.current.useTransition();
    };
    exports.version = "18.3.1";
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    if (true) {
      module.exports = require_react_production_min();
    } else {
      module.exports = null;
    }
  }
});

// node_modules/scheduler/cjs/scheduler.production.min.js
var require_scheduler_production_min = __commonJS({
  "node_modules/scheduler/cjs/scheduler.production.min.js"(exports) {
    "use strict";
    function f(a, b) {
      var c = a.length;
      a.push(b);
      a: for (; 0 < c; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
        else break a;
      }
    }
    function h(a) {
      return 0 === a.length ? null : a[0];
    }
    function k(a) {
      if (0 === a.length) return null;
      var b = a[0], c = a.pop();
      if (c !== b) {
        a[0] = c;
        a: for (var d = 0, e = a.length, w2 = e >>> 1; d < w2; ) {
          var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
          if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
          else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;
          else break a;
        }
      }
      return b;
    }
    function g(a, b) {
      var c = a.sortIndex - b.sortIndex;
      return 0 !== c ? c : a.id - b.id;
    }
    if ("object" === typeof performance && "function" === typeof performance.now) {
      l = performance;
      exports.unstable_now = function() {
        return l.now();
      };
    } else {
      p = Date, q = p.now();
      exports.unstable_now = function() {
        return p.now() - q;
      };
    }
    var l;
    var p;
    var q;
    var r2 = [];
    var t = [];
    var u = 1;
    var v = null;
    var y = 3;
    var z = false;
    var A = false;
    var B = false;
    var D = "function" === typeof setTimeout ? setTimeout : null;
    var E = "function" === typeof clearTimeout ? clearTimeout : null;
    var F = "undefined" !== typeof setImmediate ? setImmediate : null;
    "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function G(a) {
      for (var b = h(t); null !== b; ) {
        if (null === b.callback) k(t);
        else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r2, b);
        else break;
        b = h(t);
      }
    }
    function H(a) {
      B = false;
      G(a);
      if (!A) if (null !== h(r2)) A = true, I(J);
      else {
        var b = h(t);
        null !== b && K(H, b.startTime - a);
      }
    }
    function J(a, b) {
      A = false;
      B && (B = false, E(L), L = -1);
      z = true;
      var c = y;
      try {
        G(b);
        for (v = h(r2); null !== v && (!(v.expirationTime > b) || a && !M()); ) {
          var d = v.callback;
          if ("function" === typeof d) {
            v.callback = null;
            y = v.priorityLevel;
            var e = d(v.expirationTime <= b);
            b = exports.unstable_now();
            "function" === typeof e ? v.callback = e : v === h(r2) && k(r2);
            G(b);
          } else k(r2);
          v = h(r2);
        }
        if (null !== v) var w2 = true;
        else {
          var m = h(t);
          null !== m && K(H, m.startTime - b);
          w2 = false;
        }
        return w2;
      } finally {
        v = null, y = c, z = false;
      }
    }
    var N = false;
    var O = null;
    var L = -1;
    var P = 5;
    var Q = -1;
    function M() {
      return exports.unstable_now() - Q < P ? false : true;
    }
    function R() {
      if (null !== O) {
        var a = exports.unstable_now();
        Q = a;
        var b = true;
        try {
          b = O(true, a);
        } finally {
          b ? S() : (N = false, O = null);
        }
      } else N = false;
    }
    var S;
    if ("function" === typeof F) S = function() {
      F(R);
    };
    else if ("undefined" !== typeof MessageChannel) {
      T = new MessageChannel(), U = T.port2;
      T.port1.onmessage = R;
      S = function() {
        U.postMessage(null);
      };
    } else S = function() {
      D(R, 0);
    };
    var T;
    var U;
    function I(a) {
      O = a;
      N || (N = true, S());
    }
    function K(a, b) {
      L = D(function() {
        a(exports.unstable_now());
      }, b);
    }
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(a) {
      a.callback = null;
    };
    exports.unstable_continueExecution = function() {
      A || z || (A = true, I(J));
    };
    exports.unstable_forceFrameRate = function(a) {
      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function() {
      return y;
    };
    exports.unstable_getFirstCallbackNode = function() {
      return h(r2);
    };
    exports.unstable_next = function(a) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = y;
      }
      var c = y;
      y = b;
      try {
        return a();
      } finally {
        y = c;
      }
    };
    exports.unstable_pauseExecution = function() {
    };
    exports.unstable_requestPaint = function() {
    };
    exports.unstable_runWithPriority = function(a, b) {
      switch (a) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a = 3;
      }
      var c = y;
      y = a;
      try {
        return b();
      } finally {
        y = c;
      }
    };
    exports.unstable_scheduleCallback = function(a, b, c) {
      var d = exports.unstable_now();
      "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
      switch (a) {
        case 1:
          var e = -1;
          break;
        case 2:
          e = 250;
          break;
        case 5:
          e = 1073741823;
          break;
        case 4:
          e = 1e4;
          break;
        default:
          e = 5e3;
      }
      e = c + e;
      a = { id: u++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
      c > d ? (a.sortIndex = c, f(t, a), null === h(r2) && a === h(t) && (B ? (E(L), L = -1) : B = true, K(H, c - d))) : (a.sortIndex = e, f(r2, a), A || z || (A = true, I(J)));
      return a;
    };
    exports.unstable_shouldYield = M;
    exports.unstable_wrapCallback = function(a) {
      var b = y;
      return function() {
        var c = y;
        y = b;
        try {
          return a.apply(this, arguments);
        } finally {
          y = c;
        }
      };
    };
  }
});

// node_modules/scheduler/index.js
var require_scheduler = __commonJS({
  "node_modules/scheduler/index.js"(exports, module) {
    "use strict";
    if (true) {
      module.exports = require_scheduler_production_min();
    } else {
      module.exports = null;
    }
  }
});

// node_modules/react-dom/cjs/react-dom.production.min.js
var require_react_dom_production_min = __commonJS({
  "node_modules/react-dom/cjs/react-dom.production.min.js"(exports) {
    "use strict";
    var aa = require_react();
    var ca = require_scheduler();
    function p(a) {
      for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
      return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var da = /* @__PURE__ */ new Set();
    var ea = {};
    function fa(a, b) {
      ha(a, b);
      ha(a + "Capture", b);
    }
    function ha(a, b) {
      ea[a] = b;
      for (a = 0; a < b.length; a++) da.add(b[a]);
    }
    var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
    var ja = Object.prototype.hasOwnProperty;
    var ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
    var la = {};
    var ma = {};
    function oa(a) {
      if (ja.call(ma, a)) return true;
      if (ja.call(la, a)) return false;
      if (ka.test(a)) return ma[a] = true;
      la[a] = true;
      return false;
    }
    function pa(a, b, c, d) {
      if (null !== c && 0 === c.type) return false;
      switch (typeof b) {
        case "function":
        case "symbol":
          return true;
        case "boolean":
          if (d) return false;
          if (null !== c) return !c.acceptsBooleans;
          a = a.toLowerCase().slice(0, 5);
          return "data-" !== a && "aria-" !== a;
        default:
          return false;
      }
    }
    function qa(a, b, c, d) {
      if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return true;
      if (d) return false;
      if (null !== c) switch (c.type) {
        case 3:
          return !b;
        case 4:
          return false === b;
        case 5:
          return isNaN(b);
        case 6:
          return isNaN(b) || 1 > b;
      }
      return false;
    }
    function v(a, b, c, d, e, f, g) {
      this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
      this.attributeName = d;
      this.attributeNamespace = e;
      this.mustUseProperty = c;
      this.propertyName = a;
      this.type = b;
      this.sanitizeURL = f;
      this.removeEmptyString = g;
    }
    var z = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
      z[a] = new v(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
      var b = a[0];
      z[b] = new v(b, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
      z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
      z[a] = new v(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
      z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a) {
      z[a] = new v(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function(a) {
      z[a] = new v(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a) {
      z[a] = new v(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a) {
      z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var ra = /[\-:]([a-z])/g;
    function sa(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
      var b = a.replace(
        ra,
        sa
      );
      z[b] = new v(b, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
      var b = a.replace(ra, sa);
      z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
      var b = a.replace(ra, sa);
      z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a) {
      z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
    });
    z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a) {
      z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
    });
    function ta(a, b, c, d) {
      var e = z.hasOwnProperty(b) ? z[b] : null;
      if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
    }
    var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    var va = Symbol.for("react.element");
    var wa = Symbol.for("react.portal");
    var ya = Symbol.for("react.fragment");
    var za = Symbol.for("react.strict_mode");
    var Aa = Symbol.for("react.profiler");
    var Ba = Symbol.for("react.provider");
    var Ca = Symbol.for("react.context");
    var Da = Symbol.for("react.forward_ref");
    var Ea = Symbol.for("react.suspense");
    var Fa = Symbol.for("react.suspense_list");
    var Ga = Symbol.for("react.memo");
    var Ha = Symbol.for("react.lazy");
    Symbol.for("react.scope");
    Symbol.for("react.debug_trace_mode");
    var Ia = Symbol.for("react.offscreen");
    Symbol.for("react.legacy_hidden");
    Symbol.for("react.cache");
    Symbol.for("react.tracing_marker");
    var Ja = Symbol.iterator;
    function Ka(a) {
      if (null === a || "object" !== typeof a) return null;
      a = Ja && a[Ja] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var A = Object.assign;
    var La;
    function Ma(a) {
      if (void 0 === La) try {
        throw Error();
      } catch (c) {
        var b = c.stack.trim().match(/\n( *(at )?)/);
        La = b && b[1] || "";
      }
      return "\n" + La + a;
    }
    var Na = false;
    function Oa(a, b) {
      if (!a || Na) return "";
      Na = true;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (b) if (b = function() {
          throw Error();
        }, Object.defineProperty(b.prototype, "props", { set: function() {
          throw Error();
        } }), "object" === typeof Reflect && Reflect.construct) {
          try {
            Reflect.construct(b, []);
          } catch (l) {
            var d = l;
          }
          Reflect.construct(a, [], b);
        } else {
          try {
            b.call();
          } catch (l) {
            d = l;
          }
          a.call(b.prototype);
        }
        else {
          try {
            throw Error();
          } catch (l) {
            d = l;
          }
          a();
        }
      } catch (l) {
        if (l && d && "string" === typeof l.stack) {
          for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; ) h--;
          for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
            if (1 !== g || 1 !== h) {
              do
                if (g--, h--, 0 > h || e[g] !== f[h]) {
                  var k = "\n" + e[g].replace(" at new ", " at ");
                  a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                  return k;
                }
              while (1 <= g && 0 <= h);
            }
            break;
          }
        }
      } finally {
        Na = false, Error.prepareStackTrace = c;
      }
      return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
    }
    function Pa(a) {
      switch (a.tag) {
        case 5:
          return Ma(a.type);
        case 16:
          return Ma("Lazy");
        case 13:
          return Ma("Suspense");
        case 19:
          return Ma("SuspenseList");
        case 0:
        case 2:
        case 15:
          return a = Oa(a.type, false), a;
        case 11:
          return a = Oa(a.type.render, false), a;
        case 1:
          return a = Oa(a.type, true), a;
        default:
          return "";
      }
    }
    function Qa(a) {
      if (null == a) return null;
      if ("function" === typeof a) return a.displayName || a.name || null;
      if ("string" === typeof a) return a;
      switch (a) {
        case ya:
          return "Fragment";
        case wa:
          return "Portal";
        case Aa:
          return "Profiler";
        case za:
          return "StrictMode";
        case Ea:
          return "Suspense";
        case Fa:
          return "SuspenseList";
      }
      if ("object" === typeof a) switch (a.$$typeof) {
        case Ca:
          return (a.displayName || "Context") + ".Consumer";
        case Ba:
          return (a._context.displayName || "Context") + ".Provider";
        case Da:
          var b = a.render;
          a = a.displayName;
          a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          return a;
        case Ga:
          return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
        case Ha:
          b = a._payload;
          a = a._init;
          try {
            return Qa(a(b));
          } catch (c) {
          }
      }
      return null;
    }
    function Ra(a) {
      var b = a.type;
      switch (a.tag) {
        case 24:
          return "Cache";
        case 9:
          return (b.displayName || "Context") + ".Consumer";
        case 10:
          return (b._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 5:
          return b;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Qa(b);
        case 8:
          return b === za ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if ("function" === typeof b) return b.displayName || b.name || null;
          if ("string" === typeof b) return b;
      }
      return null;
    }
    function Sa(a) {
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return a;
        case "object":
          return a;
        default:
          return "";
      }
    }
    function Ta(a) {
      var b = a.type;
      return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
    }
    function Ua(a) {
      var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
      if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
        var e = c.get, f = c.set;
        Object.defineProperty(a, b, { configurable: true, get: function() {
          return e.call(this);
        }, set: function(a2) {
          d = "" + a2;
          f.call(this, a2);
        } });
        Object.defineProperty(a, b, { enumerable: c.enumerable });
        return { getValue: function() {
          return d;
        }, setValue: function(a2) {
          d = "" + a2;
        }, stopTracking: function() {
          a._valueTracker = null;
          delete a[b];
        } };
      }
    }
    function Va(a) {
      a._valueTracker || (a._valueTracker = Ua(a));
    }
    function Wa(a) {
      if (!a) return false;
      var b = a._valueTracker;
      if (!b) return true;
      var c = b.getValue();
      var d = "";
      a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
      a = d;
      return a !== c ? (b.setValue(a), true) : false;
    }
    function Xa(a) {
      a = a || ("undefined" !== typeof document ? document : void 0);
      if ("undefined" === typeof a) return null;
      try {
        return a.activeElement || a.body;
      } catch (b) {
        return a.body;
      }
    }
    function Ya(a, b) {
      var c = b.checked;
      return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
    }
    function Za(a, b) {
      var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
      c = Sa(null != b.value ? b.value : c);
      a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
    }
    function ab(a, b) {
      b = b.checked;
      null != b && ta(a, "checked", b, false);
    }
    function bb(a, b) {
      ab(a, b);
      var c = Sa(b.value), d = b.type;
      if (null != c) if ("number" === d) {
        if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
      } else a.value !== "" + c && (a.value = "" + c);
      else if ("submit" === d || "reset" === d) {
        a.removeAttribute("value");
        return;
      }
      b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
      null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
    }
    function db(a, b, c) {
      if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
        var d = b.type;
        if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
        b = "" + a._wrapperState.initialValue;
        c || b === a.value || (a.value = b);
        a.defaultValue = b;
      }
      c = a.name;
      "" !== c && (a.name = "");
      a.defaultChecked = !!a._wrapperState.initialChecked;
      "" !== c && (a.name = c);
    }
    function cb(a, b, c) {
      if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
    }
    var eb = Array.isArray;
    function fb(a, b, c, d) {
      a = a.options;
      if (b) {
        b = {};
        for (var e = 0; e < c.length; e++) b["$" + c[e]] = true;
        for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
      } else {
        c = "" + Sa(c);
        b = null;
        for (e = 0; e < a.length; e++) {
          if (a[e].value === c) {
            a[e].selected = true;
            d && (a[e].defaultSelected = true);
            return;
          }
          null !== b || a[e].disabled || (b = a[e]);
        }
        null !== b && (b.selected = true);
      }
    }
    function gb(a, b) {
      if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
      return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
    }
    function hb(a, b) {
      var c = b.value;
      if (null == c) {
        c = b.children;
        b = b.defaultValue;
        if (null != c) {
          if (null != b) throw Error(p(92));
          if (eb(c)) {
            if (1 < c.length) throw Error(p(93));
            c = c[0];
          }
          b = c;
        }
        null == b && (b = "");
        c = b;
      }
      a._wrapperState = { initialValue: Sa(c) };
    }
    function ib(a, b) {
      var c = Sa(b.value), d = Sa(b.defaultValue);
      null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
      null != d && (a.defaultValue = "" + d);
    }
    function jb(a) {
      var b = a.textContent;
      b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
    }
    function kb(a) {
      switch (a) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function lb(a, b) {
      return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
    }
    var mb;
    var nb = function(a) {
      return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
        MSApp.execUnsafeLocalFunction(function() {
          return a(b, c, d, e);
        });
      } : a;
    }(function(a, b) {
      if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
      else {
        mb = mb || document.createElement("div");
        mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
        for (b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
        for (; b.firstChild; ) a.appendChild(b.firstChild);
      }
    });
    function ob(a, b) {
      if (b) {
        var c = a.firstChild;
        if (c && c === a.lastChild && 3 === c.nodeType) {
          c.nodeValue = b;
          return;
        }
      }
      a.textContent = b;
    }
    var pb = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    var qb = ["Webkit", "ms", "Moz", "O"];
    Object.keys(pb).forEach(function(a) {
      qb.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        pb[b] = pb[a];
      });
    });
    function rb(a, b, c) {
      return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
    }
    function sb(a, b) {
      a = a.style;
      for (var c in b) if (b.hasOwnProperty(c)) {
        var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
        "float" === c && (c = "cssFloat");
        d ? a.setProperty(c, e) : a[c] = e;
      }
    }
    var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
    function ub(a, b) {
      if (b) {
        if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
        if (null != b.dangerouslySetInnerHTML) {
          if (null != b.children) throw Error(p(60));
          if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
        }
        if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
      }
    }
    function vb(a, b) {
      if (-1 === a.indexOf("-")) return "string" === typeof b.is;
      switch (a) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var wb = null;
    function xb(a) {
      a = a.target || a.srcElement || window;
      a.correspondingUseElement && (a = a.correspondingUseElement);
      return 3 === a.nodeType ? a.parentNode : a;
    }
    var yb = null;
    var zb = null;
    var Ab = null;
    function Bb(a) {
      if (a = Cb(a)) {
        if ("function" !== typeof yb) throw Error(p(280));
        var b = a.stateNode;
        b && (b = Db(b), yb(a.stateNode, a.type, b));
      }
    }
    function Eb(a) {
      zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
    }
    function Fb() {
      if (zb) {
        var a = zb, b = Ab;
        Ab = zb = null;
        Bb(a);
        if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
      }
    }
    function Gb(a, b) {
      return a(b);
    }
    function Hb() {
    }
    var Ib = false;
    function Jb(a, b, c) {
      if (Ib) return a(b, c);
      Ib = true;
      try {
        return Gb(a, b, c);
      } finally {
        if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
      }
    }
    function Kb(a, b) {
      var c = a.stateNode;
      if (null === c) return null;
      var d = Db(c);
      if (null === d) return null;
      c = d[b];
      a: switch (b) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
          a = !d;
          break a;
        default:
          a = false;
      }
      if (a) return null;
      if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
      return c;
    }
    var Lb = false;
    if (ia) try {
      Mb = {};
      Object.defineProperty(Mb, "passive", { get: function() {
        Lb = true;
      } });
      window.addEventListener("test", Mb, Mb);
      window.removeEventListener("test", Mb, Mb);
    } catch (a) {
      Lb = false;
    }
    var Mb;
    function Nb(a, b, c, d, e, f, g, h, k) {
      var l = Array.prototype.slice.call(arguments, 3);
      try {
        b.apply(c, l);
      } catch (m) {
        this.onError(m);
      }
    }
    var Ob = false;
    var Pb = null;
    var Qb = false;
    var Rb = null;
    var Sb = { onError: function(a) {
      Ob = true;
      Pb = a;
    } };
    function Tb(a, b, c, d, e, f, g, h, k) {
      Ob = false;
      Pb = null;
      Nb.apply(Sb, arguments);
    }
    function Ub(a, b, c, d, e, f, g, h, k) {
      Tb.apply(this, arguments);
      if (Ob) {
        if (Ob) {
          var l = Pb;
          Ob = false;
          Pb = null;
        } else throw Error(p(198));
        Qb || (Qb = true, Rb = l);
      }
    }
    function Vb(a) {
      var b = a, c = a;
      if (a.alternate) for (; b.return; ) b = b.return;
      else {
        a = b;
        do
          b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
        while (a);
      }
      return 3 === b.tag ? c : null;
    }
    function Wb(a) {
      if (13 === a.tag) {
        var b = a.memoizedState;
        null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
        if (null !== b) return b.dehydrated;
      }
      return null;
    }
    function Xb(a) {
      if (Vb(a) !== a) throw Error(p(188));
    }
    function Yb(a) {
      var b = a.alternate;
      if (!b) {
        b = Vb(a);
        if (null === b) throw Error(p(188));
        return b !== a ? null : a;
      }
      for (var c = a, d = b; ; ) {
        var e = c.return;
        if (null === e) break;
        var f = e.alternate;
        if (null === f) {
          d = e.return;
          if (null !== d) {
            c = d;
            continue;
          }
          break;
        }
        if (e.child === f.child) {
          for (f = e.child; f; ) {
            if (f === c) return Xb(e), a;
            if (f === d) return Xb(e), b;
            f = f.sibling;
          }
          throw Error(p(188));
        }
        if (c.return !== d.return) c = e, d = f;
        else {
          for (var g = false, h = e.child; h; ) {
            if (h === c) {
              g = true;
              c = e;
              d = f;
              break;
            }
            if (h === d) {
              g = true;
              d = e;
              c = f;
              break;
            }
            h = h.sibling;
          }
          if (!g) {
            for (h = f.child; h; ) {
              if (h === c) {
                g = true;
                c = f;
                d = e;
                break;
              }
              if (h === d) {
                g = true;
                d = f;
                c = e;
                break;
              }
              h = h.sibling;
            }
            if (!g) throw Error(p(189));
          }
        }
        if (c.alternate !== d) throw Error(p(190));
      }
      if (3 !== c.tag) throw Error(p(188));
      return c.stateNode.current === c ? a : b;
    }
    function Zb(a) {
      a = Yb(a);
      return null !== a ? $b(a) : null;
    }
    function $b(a) {
      if (5 === a.tag || 6 === a.tag) return a;
      for (a = a.child; null !== a; ) {
        var b = $b(a);
        if (null !== b) return b;
        a = a.sibling;
      }
      return null;
    }
    var ac = ca.unstable_scheduleCallback;
    var bc = ca.unstable_cancelCallback;
    var cc = ca.unstable_shouldYield;
    var dc = ca.unstable_requestPaint;
    var B = ca.unstable_now;
    var ec = ca.unstable_getCurrentPriorityLevel;
    var fc = ca.unstable_ImmediatePriority;
    var gc = ca.unstable_UserBlockingPriority;
    var hc = ca.unstable_NormalPriority;
    var ic = ca.unstable_LowPriority;
    var jc = ca.unstable_IdlePriority;
    var kc = null;
    var lc = null;
    function mc(a) {
      if (lc && "function" === typeof lc.onCommitFiberRoot) try {
        lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
      } catch (b) {
      }
    }
    var oc = Math.clz32 ? Math.clz32 : nc;
    var pc = Math.log;
    var qc = Math.LN2;
    function nc(a) {
      a >>>= 0;
      return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
    }
    var rc = 64;
    var sc = 4194304;
    function tc(a) {
      switch (a & -a) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return a & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return a & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return a;
      }
    }
    function uc(a, b) {
      var c = a.pendingLanes;
      if (0 === c) return 0;
      var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
      if (0 !== g) {
        var h = g & ~e;
        0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
      } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
      if (0 === d) return 0;
      if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
      0 !== (d & 4) && (d |= c & 16);
      b = a.entangledLanes;
      if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
      return d;
    }
    function vc(a, b) {
      switch (a) {
        case 1:
        case 2:
        case 4:
          return b + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return b + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function wc(a, b) {
      for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f; ) {
        var g = 31 - oc(f), h = 1 << g, k = e[g];
        if (-1 === k) {
          if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
        } else k <= b && (a.expiredLanes |= h);
        f &= ~h;
      }
    }
    function xc(a) {
      a = a.pendingLanes & -1073741825;
      return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
    }
    function yc() {
      var a = rc;
      rc <<= 1;
      0 === (rc & 4194240) && (rc = 64);
      return a;
    }
    function zc(a) {
      for (var b = [], c = 0; 31 > c; c++) b.push(a);
      return b;
    }
    function Ac(a, b, c) {
      a.pendingLanes |= b;
      536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
      a = a.eventTimes;
      b = 31 - oc(b);
      a[b] = c;
    }
    function Bc(a, b) {
      var c = a.pendingLanes & ~b;
      a.pendingLanes = b;
      a.suspendedLanes = 0;
      a.pingedLanes = 0;
      a.expiredLanes &= b;
      a.mutableReadLanes &= b;
      a.entangledLanes &= b;
      b = a.entanglements;
      var d = a.eventTimes;
      for (a = a.expirationTimes; 0 < c; ) {
        var e = 31 - oc(c), f = 1 << e;
        b[e] = 0;
        d[e] = -1;
        a[e] = -1;
        c &= ~f;
      }
    }
    function Cc(a, b) {
      var c = a.entangledLanes |= b;
      for (a = a.entanglements; c; ) {
        var d = 31 - oc(c), e = 1 << d;
        e & b | a[d] & b && (a[d] |= b);
        c &= ~e;
      }
    }
    var C = 0;
    function Dc(a) {
      a &= -a;
      return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
    }
    var Ec;
    var Fc;
    var Gc;
    var Hc;
    var Ic;
    var Jc = false;
    var Kc = [];
    var Lc = null;
    var Mc = null;
    var Nc = null;
    var Oc = /* @__PURE__ */ new Map();
    var Pc = /* @__PURE__ */ new Map();
    var Qc = [];
    var Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Sc(a, b) {
      switch (a) {
        case "focusin":
        case "focusout":
          Lc = null;
          break;
        case "dragenter":
        case "dragleave":
          Mc = null;
          break;
        case "mouseover":
        case "mouseout":
          Nc = null;
          break;
        case "pointerover":
        case "pointerout":
          Oc.delete(b.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Pc.delete(b.pointerId);
      }
    }
    function Tc(a, b, c, d, e, f) {
      if (null === a || a.nativeEvent !== f) return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
      a.eventSystemFlags |= d;
      b = a.targetContainers;
      null !== e && -1 === b.indexOf(e) && b.push(e);
      return a;
    }
    function Uc(a, b, c, d, e) {
      switch (b) {
        case "focusin":
          return Lc = Tc(Lc, a, b, c, d, e), true;
        case "dragenter":
          return Mc = Tc(Mc, a, b, c, d, e), true;
        case "mouseover":
          return Nc = Tc(Nc, a, b, c, d, e), true;
        case "pointerover":
          var f = e.pointerId;
          Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
          return true;
        case "gotpointercapture":
          return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), true;
      }
      return false;
    }
    function Vc(a) {
      var b = Wc(a.target);
      if (null !== b) {
        var c = Vb(b);
        if (null !== c) {
          if (b = c.tag, 13 === b) {
            if (b = Wb(c), null !== b) {
              a.blockedOn = b;
              Ic(a.priority, function() {
                Gc(c);
              });
              return;
            }
          } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
            a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
            return;
          }
        }
      }
      a.blockedOn = null;
    }
    function Xc(a) {
      if (null !== a.blockedOn) return false;
      for (var b = a.targetContainers; 0 < b.length; ) {
        var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
        if (null === c) {
          c = a.nativeEvent;
          var d = new c.constructor(c.type, c);
          wb = d;
          c.target.dispatchEvent(d);
          wb = null;
        } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
        b.shift();
      }
      return true;
    }
    function Zc(a, b, c) {
      Xc(a) && c.delete(b);
    }
    function $c() {
      Jc = false;
      null !== Lc && Xc(Lc) && (Lc = null);
      null !== Mc && Xc(Mc) && (Mc = null);
      null !== Nc && Xc(Nc) && (Nc = null);
      Oc.forEach(Zc);
      Pc.forEach(Zc);
    }
    function ad(a, b) {
      a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
    }
    function bd(a) {
      function b(b2) {
        return ad(b2, a);
      }
      if (0 < Kc.length) {
        ad(Kc[0], a);
        for (var c = 1; c < Kc.length; c++) {
          var d = Kc[c];
          d.blockedOn === a && (d.blockedOn = null);
        }
      }
      null !== Lc && ad(Lc, a);
      null !== Mc && ad(Mc, a);
      null !== Nc && ad(Nc, a);
      Oc.forEach(b);
      Pc.forEach(b);
      for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
      for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
    }
    var cd = ua.ReactCurrentBatchConfig;
    var dd = true;
    function ed(a, b, c, d) {
      var e = C, f = cd.transition;
      cd.transition = null;
      try {
        C = 1, fd(a, b, c, d);
      } finally {
        C = e, cd.transition = f;
      }
    }
    function gd(a, b, c, d) {
      var e = C, f = cd.transition;
      cd.transition = null;
      try {
        C = 4, fd(a, b, c, d);
      } finally {
        C = e, cd.transition = f;
      }
    }
    function fd(a, b, c, d) {
      if (dd) {
        var e = Yc(a, b, c, d);
        if (null === e) hd(a, b, d, id, c), Sc(a, d);
        else if (Uc(e, a, b, c, d)) d.stopPropagation();
        else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
          for (; null !== e; ) {
            var f = Cb(e);
            null !== f && Ec(f);
            f = Yc(a, b, c, d);
            null === f && hd(a, b, d, id, c);
            if (f === e) break;
            e = f;
          }
          null !== e && d.stopPropagation();
        } else hd(a, b, d, null, c);
      }
    }
    var id = null;
    function Yc(a, b, c, d) {
      id = null;
      a = xb(d);
      a = Wc(a);
      if (null !== a) if (b = Vb(a), null === b) a = null;
      else if (c = b.tag, 13 === c) {
        a = Wb(b);
        if (null !== a) return a;
        a = null;
      } else if (3 === c) {
        if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
        a = null;
      } else b !== a && (a = null);
      id = a;
      return null;
    }
    function jd(a) {
      switch (a) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (ec()) {
            case fc:
              return 1;
            case gc:
              return 4;
            case hc:
            case ic:
              return 16;
            case jc:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var kd = null;
    var ld = null;
    var md = null;
    function nd() {
      if (md) return md;
      var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
      for (a = 0; a < c && b[a] === e[a]; a++) ;
      var g = c - a;
      for (d = 1; d <= g && b[c - d] === e[f - d]; d++) ;
      return md = e.slice(a, 1 < d ? 1 - d : void 0);
    }
    function od(a) {
      var b = a.keyCode;
      "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
      10 === a && (a = 13);
      return 32 <= a || 13 === a ? a : 0;
    }
    function pd() {
      return true;
    }
    function qd() {
      return false;
    }
    function rd(a) {
      function b(b2, d, e, f, g) {
        this._reactName = b2;
        this._targetInst = e;
        this.type = d;
        this.nativeEvent = f;
        this.target = g;
        this.currentTarget = null;
        for (var c in a) a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
        this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : false === f.returnValue) ? pd : qd;
        this.isPropagationStopped = qd;
        return this;
      }
      A(b.prototype, { preventDefault: function() {
        this.defaultPrevented = true;
        var a2 = this.nativeEvent;
        a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
      }, stopPropagation: function() {
        var a2 = this.nativeEvent;
        a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
      }, persist: function() {
      }, isPersistent: pd });
      return b;
    }
    var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
      return a.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 };
    var td = rd(sd);
    var ud = A({}, sd, { view: 0, detail: 0 });
    var vd = rd(ud);
    var wd;
    var xd;
    var yd;
    var Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
      return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
    }, movementX: function(a) {
      if ("movementX" in a) return a.movementX;
      a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
      return wd;
    }, movementY: function(a) {
      return "movementY" in a ? a.movementY : xd;
    } });
    var Bd = rd(Ad);
    var Cd = A({}, Ad, { dataTransfer: 0 });
    var Dd = rd(Cd);
    var Ed = A({}, ud, { relatedTarget: 0 });
    var Fd = rd(Ed);
    var Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
    var Hd = rd(Gd);
    var Id = A({}, sd, { clipboardData: function(a) {
      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    } });
    var Jd = rd(Id);
    var Kd = A({}, sd, { data: 0 });
    var Ld = rd(Kd);
    var Md = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    };
    var Nd = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    var Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function Pd(a) {
      var b = this.nativeEvent;
      return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
    }
    function zd() {
      return Pd;
    }
    var Qd = A({}, ud, { key: function(a) {
      if (a.key) {
        var b = Md[a.key] || a.key;
        if ("Unidentified" !== b) return b;
      }
      return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
      return "keypress" === a.type ? od(a) : 0;
    }, keyCode: function(a) {
      return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    }, which: function(a) {
      return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    } });
    var Rd = rd(Qd);
    var Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
    var Td = rd(Sd);
    var Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd });
    var Vd = rd(Ud);
    var Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
    var Xd = rd(Wd);
    var Yd = A({}, Ad, {
      deltaX: function(a) {
        return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
      },
      deltaY: function(a) {
        return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    });
    var Zd = rd(Yd);
    var $d = [9, 13, 27, 32];
    var ae = ia && "CompositionEvent" in window;
    var be = null;
    ia && "documentMode" in document && (be = document.documentMode);
    var ce = ia && "TextEvent" in window && !be;
    var de = ia && (!ae || be && 8 < be && 11 >= be);
    var ee = String.fromCharCode(32);
    var fe = false;
    function ge(a, b) {
      switch (a) {
        case "keyup":
          return -1 !== $d.indexOf(b.keyCode);
        case "keydown":
          return 229 !== b.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function he(a) {
      a = a.detail;
      return "object" === typeof a && "data" in a ? a.data : null;
    }
    var ie = false;
    function je(a, b) {
      switch (a) {
        case "compositionend":
          return he(b);
        case "keypress":
          if (32 !== b.which) return null;
          fe = true;
          return ee;
        case "textInput":
          return a = b.data, a === ee && fe ? null : a;
        default:
          return null;
      }
    }
    function ke(a, b) {
      if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
      switch (a) {
        case "paste":
          return null;
        case "keypress":
          if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
            if (b.char && 1 < b.char.length) return b.char;
            if (b.which) return String.fromCharCode(b.which);
          }
          return null;
        case "compositionend":
          return de && "ko" !== b.locale ? null : b.data;
        default:
          return null;
      }
    }
    var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
    function me(a) {
      var b = a && a.nodeName && a.nodeName.toLowerCase();
      return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
    }
    function ne(a, b, c, d) {
      Eb(d);
      b = oe(b, "onChange");
      0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
    }
    var pe = null;
    var qe = null;
    function re(a) {
      se(a, 0);
    }
    function te(a) {
      var b = ue(a);
      if (Wa(b)) return a;
    }
    function ve(a, b) {
      if ("change" === a) return b;
    }
    var we = false;
    if (ia) {
      if (ia) {
        ye = "oninput" in document;
        if (!ye) {
          ze = document.createElement("div");
          ze.setAttribute("oninput", "return;");
          ye = "function" === typeof ze.oninput;
        }
        xe = ye;
      } else xe = false;
      we = xe && (!document.documentMode || 9 < document.documentMode);
    }
    var xe;
    var ye;
    var ze;
    function Ae() {
      pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
    }
    function Be(a) {
      if ("value" === a.propertyName && te(qe)) {
        var b = [];
        ne(b, qe, a, xb(a));
        Jb(re, b);
      }
    }
    function Ce(a, b, c) {
      "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
    }
    function De(a) {
      if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
    }
    function Ee(a, b) {
      if ("click" === a) return te(b);
    }
    function Fe(a, b) {
      if ("input" === a || "change" === a) return te(b);
    }
    function Ge(a, b) {
      return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
    }
    var He = "function" === typeof Object.is ? Object.is : Ge;
    function Ie(a, b) {
      if (He(a, b)) return true;
      if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
      var c = Object.keys(a), d = Object.keys(b);
      if (c.length !== d.length) return false;
      for (d = 0; d < c.length; d++) {
        var e = c[d];
        if (!ja.call(b, e) || !He(a[e], b[e])) return false;
      }
      return true;
    }
    function Je(a) {
      for (; a && a.firstChild; ) a = a.firstChild;
      return a;
    }
    function Ke(a, b) {
      var c = Je(a);
      a = 0;
      for (var d; c; ) {
        if (3 === c.nodeType) {
          d = a + c.textContent.length;
          if (a <= b && d >= b) return { node: c, offset: b - a };
          a = d;
        }
        a: {
          for (; c; ) {
            if (c.nextSibling) {
              c = c.nextSibling;
              break a;
            }
            c = c.parentNode;
          }
          c = void 0;
        }
        c = Je(c);
      }
    }
    function Le(a, b) {
      return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
    }
    function Me() {
      for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
        try {
          var c = "string" === typeof b.contentWindow.location.href;
        } catch (d) {
          c = false;
        }
        if (c) a = b.contentWindow;
        else break;
        b = Xa(a.document);
      }
      return b;
    }
    function Ne(a) {
      var b = a && a.nodeName && a.nodeName.toLowerCase();
      return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
    }
    function Oe(a) {
      var b = Me(), c = a.focusedElem, d = a.selectionRange;
      if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
        if (null !== d && Ne(c)) {
          if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
          else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
            a = a.getSelection();
            var e = c.textContent.length, f = Math.min(d.start, e);
            d = void 0 === d.end ? f : Math.min(d.end, e);
            !a.extend && f > d && (e = d, d = f, f = e);
            e = Ke(c, f);
            var g = Ke(
              c,
              d
            );
            e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
          }
        }
        b = [];
        for (a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
        "function" === typeof c.focus && c.focus();
        for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
      }
    }
    var Pe = ia && "documentMode" in document && 11 >= document.documentMode;
    var Qe = null;
    var Re = null;
    var Se = null;
    var Te = false;
    function Ue(a, b, c) {
      var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
      Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
    }
    function Ve(a, b) {
      var c = {};
      c[a.toLowerCase()] = b.toLowerCase();
      c["Webkit" + a] = "webkit" + b;
      c["Moz" + a] = "moz" + b;
      return c;
    }
    var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") };
    var Xe = {};
    var Ye = {};
    ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
    function Ze(a) {
      if (Xe[a]) return Xe[a];
      if (!We[a]) return a;
      var b = We[a], c;
      for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
      return a;
    }
    var $e = Ze("animationend");
    var af = Ze("animationiteration");
    var bf = Ze("animationstart");
    var cf = Ze("transitionend");
    var df = /* @__PURE__ */ new Map();
    var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function ff(a, b) {
      df.set(a, b);
      fa(b, [a]);
    }
    for (gf = 0; gf < ef.length; gf++) {
      hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
      ff(jf, "on" + kf);
    }
    var hf;
    var jf;
    var kf;
    var gf;
    ff($e, "onAnimationEnd");
    ff(af, "onAnimationIteration");
    ff(bf, "onAnimationStart");
    ff("dblclick", "onDoubleClick");
    ff("focusin", "onFocus");
    ff("focusout", "onBlur");
    ff(cf, "onTransitionEnd");
    ha("onMouseEnter", ["mouseout", "mouseover"]);
    ha("onMouseLeave", ["mouseout", "mouseover"]);
    ha("onPointerEnter", ["pointerout", "pointerover"]);
    ha("onPointerLeave", ["pointerout", "pointerover"]);
    fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
    var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
    function nf(a, b, c) {
      var d = a.type || "unknown-event";
      a.currentTarget = c;
      Ub(d, b, void 0, a);
      a.currentTarget = null;
    }
    function se(a, b) {
      b = 0 !== (b & 4);
      for (var c = 0; c < a.length; c++) {
        var d = a[c], e = d.event;
        d = d.listeners;
        a: {
          var f = void 0;
          if (b) for (var g = d.length - 1; 0 <= g; g--) {
            var h = d[g], k = h.instance, l = h.currentTarget;
            h = h.listener;
            if (k !== f && e.isPropagationStopped()) break a;
            nf(e, h, l);
            f = k;
          }
          else for (g = 0; g < d.length; g++) {
            h = d[g];
            k = h.instance;
            l = h.currentTarget;
            h = h.listener;
            if (k !== f && e.isPropagationStopped()) break a;
            nf(e, h, l);
            f = k;
          }
        }
      }
      if (Qb) throw a = Rb, Qb = false, Rb = null, a;
    }
    function D(a, b) {
      var c = b[of];
      void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
      var d = a + "__bubble";
      c.has(d) || (pf(b, a, 2, false), c.add(d));
    }
    function qf(a, b, c) {
      var d = 0;
      b && (d |= 4);
      pf(c, a, d, b);
    }
    var rf = "_reactListening" + Math.random().toString(36).slice(2);
    function sf(a) {
      if (!a[rf]) {
        a[rf] = true;
        da.forEach(function(b2) {
          "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
        });
        var b = 9 === a.nodeType ? a : a.ownerDocument;
        null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
      }
    }
    function pf(a, b, c, d) {
      switch (jd(b)) {
        case 1:
          var e = ed;
          break;
        case 4:
          e = gd;
          break;
        default:
          e = fd;
      }
      c = e.bind(null, b, c, a);
      e = void 0;
      !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
      d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
    }
    function hd(a, b, c, d, e) {
      var f = d;
      if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (; ; ) {
        if (null === d) return;
        var g = d.tag;
        if (3 === g || 4 === g) {
          var h = d.stateNode.containerInfo;
          if (h === e || 8 === h.nodeType && h.parentNode === e) break;
          if (4 === g) for (g = d.return; null !== g; ) {
            var k = g.tag;
            if (3 === k || 4 === k) {
              if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
            }
            g = g.return;
          }
          for (; null !== h; ) {
            g = Wc(h);
            if (null === g) return;
            k = g.tag;
            if (5 === k || 6 === k) {
              d = f = g;
              continue a;
            }
            h = h.parentNode;
          }
        }
        d = d.return;
      }
      Jb(function() {
        var d2 = f, e2 = xb(c), g2 = [];
        a: {
          var h2 = df.get(a);
          if (void 0 !== h2) {
            var k2 = td, n = a;
            switch (a) {
              case "keypress":
                if (0 === od(c)) break a;
              case "keydown":
              case "keyup":
                k2 = Rd;
                break;
              case "focusin":
                n = "focus";
                k2 = Fd;
                break;
              case "focusout":
                n = "blur";
                k2 = Fd;
                break;
              case "beforeblur":
              case "afterblur":
                k2 = Fd;
                break;
              case "click":
                if (2 === c.button) break a;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                k2 = Bd;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                k2 = Dd;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                k2 = Vd;
                break;
              case $e:
              case af:
              case bf:
                k2 = Hd;
                break;
              case cf:
                k2 = Xd;
                break;
              case "scroll":
                k2 = vd;
                break;
              case "wheel":
                k2 = Zd;
                break;
              case "copy":
              case "cut":
              case "paste":
                k2 = Jd;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                k2 = Td;
            }
            var t = 0 !== (b & 4), J = !t && "scroll" === a, x = t ? null !== h2 ? h2 + "Capture" : null : h2;
            t = [];
            for (var w2 = d2, u; null !== w2; ) {
              u = w2;
              var F = u.stateNode;
              5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w2, x), null != F && t.push(tf(w2, F, u))));
              if (J) break;
              w2 = w2.return;
            }
            0 < t.length && (h2 = new k2(h2, n, null, c, e2), g2.push({ event: h2, listeners: t }));
          }
        }
        if (0 === (b & 7)) {
          a: {
            h2 = "mouseover" === a || "pointerover" === a;
            k2 = "mouseout" === a || "pointerout" === a;
            if (h2 && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
            if (k2 || h2) {
              h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
              if (k2) {
                if (n = c.relatedTarget || c.toElement, k2 = d2, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
              } else k2 = null, n = d2;
              if (k2 !== n) {
                t = Bd;
                F = "onMouseLeave";
                x = "onMouseEnter";
                w2 = "mouse";
                if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", w2 = "pointer";
                J = null == k2 ? h2 : ue(k2);
                u = null == n ? h2 : ue(n);
                h2 = new t(F, w2 + "leave", k2, c, e2);
                h2.target = J;
                h2.relatedTarget = u;
                F = null;
                Wc(e2) === d2 && (t = new t(x, w2 + "enter", n, c, e2), t.target = u, t.relatedTarget = J, F = t);
                J = F;
                if (k2 && n) b: {
                  t = k2;
                  x = n;
                  w2 = 0;
                  for (u = t; u; u = vf(u)) w2++;
                  u = 0;
                  for (F = x; F; F = vf(F)) u++;
                  for (; 0 < w2 - u; ) t = vf(t), w2--;
                  for (; 0 < u - w2; ) x = vf(x), u--;
                  for (; w2--; ) {
                    if (t === x || null !== x && t === x.alternate) break b;
                    t = vf(t);
                    x = vf(x);
                  }
                  t = null;
                }
                else t = null;
                null !== k2 && wf(g2, h2, k2, t, false);
                null !== n && null !== J && wf(g2, J, n, t, true);
              }
            }
          }
          a: {
            h2 = d2 ? ue(d2) : window;
            k2 = h2.nodeName && h2.nodeName.toLowerCase();
            if ("select" === k2 || "input" === k2 && "file" === h2.type) var na = ve;
            else if (me(h2)) if (we) na = Fe;
            else {
              na = De;
              var xa = Ce;
            }
            else (k2 = h2.nodeName) && "input" === k2.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
            if (na && (na = na(a, d2))) {
              ne(g2, na, c, e2);
              break a;
            }
            xa && xa(a, h2, d2);
            "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
          }
          xa = d2 ? ue(d2) : window;
          switch (a) {
            case "focusin":
              if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d2, Se = null;
              break;
            case "focusout":
              Se = Re = Qe = null;
              break;
            case "mousedown":
              Te = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Te = false;
              Ue(g2, c, e2);
              break;
            case "selectionchange":
              if (Pe) break;
            case "keydown":
            case "keyup":
              Ue(g2, c, e2);
          }
          var $a;
          if (ae) b: {
            switch (a) {
              case "compositionstart":
                var ba = "onCompositionStart";
                break b;
              case "compositionend":
                ba = "onCompositionEnd";
                break b;
              case "compositionupdate":
                ba = "onCompositionUpdate";
                break b;
            }
            ba = void 0;
          }
          else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
          ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
          if ($a = ce ? je(a, c) : ke(a, c)) d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
        }
        se(g2, b);
      });
    }
    function tf(a, b, c) {
      return { instance: a, listener: b, currentTarget: c };
    }
    function oe(a, b) {
      for (var c = b + "Capture", d = []; null !== a; ) {
        var e = a, f = e.stateNode;
        5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
        a = a.return;
      }
      return d;
    }
    function vf(a) {
      if (null === a) return null;
      do
        a = a.return;
      while (a && 5 !== a.tag);
      return a ? a : null;
    }
    function wf(a, b, c, d, e) {
      for (var f = b._reactName, g = []; null !== c && c !== d; ) {
        var h = c, k = h.alternate, l = h.stateNode;
        if (null !== k && k === d) break;
        5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
        c = c.return;
      }
      0 !== g.length && a.push({ event: b, listeners: g });
    }
    var xf = /\r\n?/g;
    var yf = /\u0000|\uFFFD/g;
    function zf(a) {
      return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
    }
    function Af(a, b, c) {
      b = zf(b);
      if (zf(a) !== b && c) throw Error(p(425));
    }
    function Bf() {
    }
    var Cf = null;
    var Df = null;
    function Ef(a, b) {
      return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
    }
    var Ff = "function" === typeof setTimeout ? setTimeout : void 0;
    var Gf = "function" === typeof clearTimeout ? clearTimeout : void 0;
    var Hf = "function" === typeof Promise ? Promise : void 0;
    var Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
      return Hf.resolve(null).then(a).catch(If);
    } : Ff;
    function If(a) {
      setTimeout(function() {
        throw a;
      });
    }
    function Kf(a, b) {
      var c = b, d = 0;
      do {
        var e = c.nextSibling;
        a.removeChild(c);
        if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
          if (0 === d) {
            a.removeChild(e);
            bd(b);
            return;
          }
          d--;
        } else "$" !== c && "$?" !== c && "$!" !== c || d++;
        c = e;
      } while (c);
      bd(b);
    }
    function Lf(a) {
      for (; null != a; a = a.nextSibling) {
        var b = a.nodeType;
        if (1 === b || 3 === b) break;
        if (8 === b) {
          b = a.data;
          if ("$" === b || "$!" === b || "$?" === b) break;
          if ("/$" === b) return null;
        }
      }
      return a;
    }
    function Mf(a) {
      a = a.previousSibling;
      for (var b = 0; a; ) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("$" === c || "$!" === c || "$?" === c) {
            if (0 === b) return a;
            b--;
          } else "/$" === c && b++;
        }
        a = a.previousSibling;
      }
      return null;
    }
    var Nf = Math.random().toString(36).slice(2);
    var Of = "__reactFiber$" + Nf;
    var Pf = "__reactProps$" + Nf;
    var uf = "__reactContainer$" + Nf;
    var of = "__reactEvents$" + Nf;
    var Qf = "__reactListeners$" + Nf;
    var Rf = "__reactHandles$" + Nf;
    function Wc(a) {
      var b = a[Of];
      if (b) return b;
      for (var c = a.parentNode; c; ) {
        if (b = c[uf] || c[Of]) {
          c = b.alternate;
          if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
            if (c = a[Of]) return c;
            a = Mf(a);
          }
          return b;
        }
        a = c;
        c = a.parentNode;
      }
      return null;
    }
    function Cb(a) {
      a = a[Of] || a[uf];
      return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
    }
    function ue(a) {
      if (5 === a.tag || 6 === a.tag) return a.stateNode;
      throw Error(p(33));
    }
    function Db(a) {
      return a[Pf] || null;
    }
    var Sf = [];
    var Tf = -1;
    function Uf(a) {
      return { current: a };
    }
    function E(a) {
      0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
    }
    function G(a, b) {
      Tf++;
      Sf[Tf] = a.current;
      a.current = b;
    }
    var Vf = {};
    var H = Uf(Vf);
    var Wf = Uf(false);
    var Xf = Vf;
    function Yf(a, b) {
      var c = a.type.contextTypes;
      if (!c) return Vf;
      var d = a.stateNode;
      if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
      var e = {}, f;
      for (f in c) e[f] = b[f];
      d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
      return e;
    }
    function Zf(a) {
      a = a.childContextTypes;
      return null !== a && void 0 !== a;
    }
    function $f() {
      E(Wf);
      E(H);
    }
    function ag(a, b, c) {
      if (H.current !== Vf) throw Error(p(168));
      G(H, b);
      G(Wf, c);
    }
    function bg(a, b, c) {
      var d = a.stateNode;
      b = b.childContextTypes;
      if ("function" !== typeof d.getChildContext) return c;
      d = d.getChildContext();
      for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
      return A({}, c, d);
    }
    function cg(a) {
      a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
      Xf = H.current;
      G(H, a);
      G(Wf, Wf.current);
      return true;
    }
    function dg(a, b, c) {
      var d = a.stateNode;
      if (!d) throw Error(p(169));
      c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
      G(Wf, c);
    }
    var eg = null;
    var fg = false;
    var gg = false;
    function hg(a) {
      null === eg ? eg = [a] : eg.push(a);
    }
    function ig(a) {
      fg = true;
      hg(a);
    }
    function jg() {
      if (!gg && null !== eg) {
        gg = true;
        var a = 0, b = C;
        try {
          var c = eg;
          for (C = 1; a < c.length; a++) {
            var d = c[a];
            do
              d = d(true);
            while (null !== d);
          }
          eg = null;
          fg = false;
        } catch (e) {
          throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
        } finally {
          C = b, gg = false;
        }
      }
      return null;
    }
    var kg = [];
    var lg = 0;
    var mg = null;
    var ng = 0;
    var og = [];
    var pg = 0;
    var qg = null;
    var rg = 1;
    var sg = "";
    function tg(a, b) {
      kg[lg++] = ng;
      kg[lg++] = mg;
      mg = a;
      ng = b;
    }
    function ug(a, b, c) {
      og[pg++] = rg;
      og[pg++] = sg;
      og[pg++] = qg;
      qg = a;
      var d = rg;
      a = sg;
      var e = 32 - oc(d) - 1;
      d &= ~(1 << e);
      c += 1;
      var f = 32 - oc(b) + e;
      if (30 < f) {
        var g = e - e % 5;
        f = (d & (1 << g) - 1).toString(32);
        d >>= g;
        e -= g;
        rg = 1 << 32 - oc(b) + e | c << e | d;
        sg = f + a;
      } else rg = 1 << f | c << e | d, sg = a;
    }
    function vg(a) {
      null !== a.return && (tg(a, 1), ug(a, 1, 0));
    }
    function wg(a) {
      for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
      for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
    }
    var xg = null;
    var yg = null;
    var I = false;
    var zg = null;
    function Ag(a, b) {
      var c = Bg(5, null, null, 0);
      c.elementType = "DELETED";
      c.stateNode = b;
      c.return = a;
      b = a.deletions;
      null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
    }
    function Cg(a, b) {
      switch (a.tag) {
        case 5:
          var c = a.type;
          b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
          return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
        case 6:
          return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
        case 13:
          return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
        default:
          return false;
      }
    }
    function Dg(a) {
      return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
    }
    function Eg(a) {
      if (I) {
        var b = yg;
        if (b) {
          var c = b;
          if (!Cg(a, b)) {
            if (Dg(a)) throw Error(p(418));
            b = Lf(c.nextSibling);
            var d = xg;
            b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
          }
        } else {
          if (Dg(a)) throw Error(p(418));
          a.flags = a.flags & -4097 | 2;
          I = false;
          xg = a;
        }
      }
    }
    function Fg(a) {
      for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
      xg = a;
    }
    function Gg(a) {
      if (a !== xg) return false;
      if (!I) return Fg(a), I = true, false;
      var b;
      (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
      if (b && (b = yg)) {
        if (Dg(a)) throw Hg(), Error(p(418));
        for (; b; ) Ag(a, b), b = Lf(b.nextSibling);
      }
      Fg(a);
      if (13 === a.tag) {
        a = a.memoizedState;
        a = null !== a ? a.dehydrated : null;
        if (!a) throw Error(p(317));
        a: {
          a = a.nextSibling;
          for (b = 0; a; ) {
            if (8 === a.nodeType) {
              var c = a.data;
              if ("/$" === c) {
                if (0 === b) {
                  yg = Lf(a.nextSibling);
                  break a;
                }
                b--;
              } else "$" !== c && "$!" !== c && "$?" !== c || b++;
            }
            a = a.nextSibling;
          }
          yg = null;
        }
      } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
      return true;
    }
    function Hg() {
      for (var a = yg; a; ) a = Lf(a.nextSibling);
    }
    function Ig() {
      yg = xg = null;
      I = false;
    }
    function Jg(a) {
      null === zg ? zg = [a] : zg.push(a);
    }
    var Kg = ua.ReactCurrentBatchConfig;
    function Lg(a, b, c) {
      a = c.ref;
      if (null !== a && "function" !== typeof a && "object" !== typeof a) {
        if (c._owner) {
          c = c._owner;
          if (c) {
            if (1 !== c.tag) throw Error(p(309));
            var d = c.stateNode;
          }
          if (!d) throw Error(p(147, a));
          var e = d, f = "" + a;
          if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
          b = function(a2) {
            var b2 = e.refs;
            null === a2 ? delete b2[f] : b2[f] = a2;
          };
          b._stringRef = f;
          return b;
        }
        if ("string" !== typeof a) throw Error(p(284));
        if (!c._owner) throw Error(p(290, a));
      }
      return a;
    }
    function Mg(a, b) {
      a = Object.prototype.toString.call(b);
      throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
    }
    function Ng(a) {
      var b = a._init;
      return b(a._payload);
    }
    function Og(a) {
      function b(b2, c2) {
        if (a) {
          var d2 = b2.deletions;
          null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
        }
      }
      function c(c2, d2) {
        if (!a) return null;
        for (; null !== d2; ) b(c2, d2), d2 = d2.sibling;
        return null;
      }
      function d(a2, b2) {
        for (a2 = /* @__PURE__ */ new Map(); null !== b2; ) null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
        return a2;
      }
      function e(a2, b2) {
        a2 = Pg(a2, b2);
        a2.index = 0;
        a2.sibling = null;
        return a2;
      }
      function f(b2, c2, d2) {
        b2.index = d2;
        if (!a) return b2.flags |= 1048576, c2;
        d2 = b2.alternate;
        if (null !== d2) return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
        b2.flags |= 2;
        return c2;
      }
      function g(b2) {
        a && null === b2.alternate && (b2.flags |= 2);
        return b2;
      }
      function h(a2, b2, c2, d2) {
        if (null === b2 || 6 !== b2.tag) return b2 = Qg(c2, a2.mode, d2), b2.return = a2, b2;
        b2 = e(b2, c2);
        b2.return = a2;
        return b2;
      }
      function k(a2, b2, c2, d2) {
        var f2 = c2.type;
        if (f2 === ya) return m(a2, b2, c2.props.children, d2, c2.key);
        if (null !== b2 && (b2.elementType === f2 || "object" === typeof f2 && null !== f2 && f2.$$typeof === Ha && Ng(f2) === b2.type)) return d2 = e(b2, c2.props), d2.ref = Lg(a2, b2, c2), d2.return = a2, d2;
        d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
        d2.ref = Lg(a2, b2, c2);
        d2.return = a2;
        return d2;
      }
      function l(a2, b2, c2, d2) {
        if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation) return b2 = Sg(c2, a2.mode, d2), b2.return = a2, b2;
        b2 = e(b2, c2.children || []);
        b2.return = a2;
        return b2;
      }
      function m(a2, b2, c2, d2, f2) {
        if (null === b2 || 7 !== b2.tag) return b2 = Tg(c2, a2.mode, d2, f2), b2.return = a2, b2;
        b2 = e(b2, c2);
        b2.return = a2;
        return b2;
      }
      function q(a2, b2, c2) {
        if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = Qg("" + b2, a2.mode, c2), b2.return = a2, b2;
        if ("object" === typeof b2 && null !== b2) {
          switch (b2.$$typeof) {
            case va:
              return c2 = Rg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b2), c2.return = a2, c2;
            case wa:
              return b2 = Sg(b2, a2.mode, c2), b2.return = a2, b2;
            case Ha:
              var d2 = b2._init;
              return q(a2, d2(b2._payload), c2);
          }
          if (eb(b2) || Ka(b2)) return b2 = Tg(b2, a2.mode, c2, null), b2.return = a2, b2;
          Mg(a2, b2);
        }
        return null;
      }
      function r2(a2, b2, c2, d2) {
        var e2 = null !== b2 ? b2.key : null;
        if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e2 ? null : h(a2, b2, "" + c2, d2);
        if ("object" === typeof c2 && null !== c2) {
          switch (c2.$$typeof) {
            case va:
              return c2.key === e2 ? k(a2, b2, c2, d2) : null;
            case wa:
              return c2.key === e2 ? l(a2, b2, c2, d2) : null;
            case Ha:
              return e2 = c2._init, r2(
                a2,
                b2,
                e2(c2._payload),
                d2
              );
          }
          if (eb(c2) || Ka(c2)) return null !== e2 ? null : m(a2, b2, c2, d2, null);
          Mg(a2, c2);
        }
        return null;
      }
      function y(a2, b2, c2, d2, e2) {
        if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
        if ("object" === typeof d2 && null !== d2) {
          switch (d2.$$typeof) {
            case va:
              return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k(b2, a2, d2, e2);
            case wa:
              return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l(b2, a2, d2, e2);
            case Ha:
              var f2 = d2._init;
              return y(a2, b2, c2, f2(d2._payload), e2);
          }
          if (eb(d2) || Ka(d2)) return a2 = a2.get(c2) || null, m(b2, a2, d2, e2, null);
          Mg(b2, d2);
        }
        return null;
      }
      function n(e2, g2, h2, k2) {
        for (var l2 = null, m2 = null, u = g2, w2 = g2 = 0, x = null; null !== u && w2 < h2.length; w2++) {
          u.index > w2 ? (x = u, u = null) : x = u.sibling;
          var n2 = r2(e2, u, h2[w2], k2);
          if (null === n2) {
            null === u && (u = x);
            break;
          }
          a && u && null === n2.alternate && b(e2, u);
          g2 = f(n2, g2, w2);
          null === m2 ? l2 = n2 : m2.sibling = n2;
          m2 = n2;
          u = x;
        }
        if (w2 === h2.length) return c(e2, u), I && tg(e2, w2), l2;
        if (null === u) {
          for (; w2 < h2.length; w2++) u = q(e2, h2[w2], k2), null !== u && (g2 = f(u, g2, w2), null === m2 ? l2 = u : m2.sibling = u, m2 = u);
          I && tg(e2, w2);
          return l2;
        }
        for (u = d(e2, u); w2 < h2.length; w2++) x = y(u, e2, w2, h2[w2], k2), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w2 : x.key), g2 = f(x, g2, w2), null === m2 ? l2 = x : m2.sibling = x, m2 = x);
        a && u.forEach(function(a2) {
          return b(e2, a2);
        });
        I && tg(e2, w2);
        return l2;
      }
      function t(e2, g2, h2, k2) {
        var l2 = Ka(h2);
        if ("function" !== typeof l2) throw Error(p(150));
        h2 = l2.call(h2);
        if (null == h2) throw Error(p(151));
        for (var u = l2 = null, m2 = g2, w2 = g2 = 0, x = null, n2 = h2.next(); null !== m2 && !n2.done; w2++, n2 = h2.next()) {
          m2.index > w2 ? (x = m2, m2 = null) : x = m2.sibling;
          var t2 = r2(e2, m2, n2.value, k2);
          if (null === t2) {
            null === m2 && (m2 = x);
            break;
          }
          a && m2 && null === t2.alternate && b(e2, m2);
          g2 = f(t2, g2, w2);
          null === u ? l2 = t2 : u.sibling = t2;
          u = t2;
          m2 = x;
        }
        if (n2.done) return c(
          e2,
          m2
        ), I && tg(e2, w2), l2;
        if (null === m2) {
          for (; !n2.done; w2++, n2 = h2.next()) n2 = q(e2, n2.value, k2), null !== n2 && (g2 = f(n2, g2, w2), null === u ? l2 = n2 : u.sibling = n2, u = n2);
          I && tg(e2, w2);
          return l2;
        }
        for (m2 = d(e2, m2); !n2.done; w2++, n2 = h2.next()) n2 = y(m2, e2, w2, n2.value, k2), null !== n2 && (a && null !== n2.alternate && m2.delete(null === n2.key ? w2 : n2.key), g2 = f(n2, g2, w2), null === u ? l2 = n2 : u.sibling = n2, u = n2);
        a && m2.forEach(function(a2) {
          return b(e2, a2);
        });
        I && tg(e2, w2);
        return l2;
      }
      function J(a2, d2, f2, h2) {
        "object" === typeof f2 && null !== f2 && f2.type === ya && null === f2.key && (f2 = f2.props.children);
        if ("object" === typeof f2 && null !== f2) {
          switch (f2.$$typeof) {
            case va:
              a: {
                for (var k2 = f2.key, l2 = d2; null !== l2; ) {
                  if (l2.key === k2) {
                    k2 = f2.type;
                    if (k2 === ya) {
                      if (7 === l2.tag) {
                        c(a2, l2.sibling);
                        d2 = e(l2, f2.props.children);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      }
                    } else if (l2.elementType === k2 || "object" === typeof k2 && null !== k2 && k2.$$typeof === Ha && Ng(k2) === l2.type) {
                      c(a2, l2.sibling);
                      d2 = e(l2, f2.props);
                      d2.ref = Lg(a2, l2, f2);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                    c(a2, l2);
                    break;
                  } else b(a2, l2);
                  l2 = l2.sibling;
                }
                f2.type === ya ? (d2 = Tg(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = Rg(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = Lg(a2, d2, f2), h2.return = a2, a2 = h2);
              }
              return g(a2);
            case wa:
              a: {
                for (l2 = f2.key; null !== d2; ) {
                  if (d2.key === l2) if (4 === d2.tag && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                    c(a2, d2.sibling);
                    d2 = e(d2, f2.children || []);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  } else {
                    c(a2, d2);
                    break;
                  }
                  else b(a2, d2);
                  d2 = d2.sibling;
                }
                d2 = Sg(f2, a2.mode, h2);
                d2.return = a2;
                a2 = d2;
              }
              return g(a2);
            case Ha:
              return l2 = f2._init, J(a2, d2, l2(f2._payload), h2);
          }
          if (eb(f2)) return n(a2, d2, f2, h2);
          if (Ka(f2)) return t(a2, d2, f2, h2);
          Mg(a2, f2);
        }
        return "string" === typeof f2 && "" !== f2 || "number" === typeof f2 ? (f2 = "" + f2, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
      }
      return J;
    }
    var Ug = Og(true);
    var Vg = Og(false);
    var Wg = Uf(null);
    var Xg = null;
    var Yg = null;
    var Zg = null;
    function $g() {
      Zg = Yg = Xg = null;
    }
    function ah(a) {
      var b = Wg.current;
      E(Wg);
      a._currentValue = b;
    }
    function bh(a, b, c) {
      for (; null !== a; ) {
        var d = a.alternate;
        (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
        if (a === c) break;
        a = a.return;
      }
    }
    function ch(a, b) {
      Xg = a;
      Zg = Yg = null;
      a = a.dependencies;
      null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = true), a.firstContext = null);
    }
    function eh(a) {
      var b = a._currentValue;
      if (Zg !== a) if (a = { context: a, memoizedValue: b, next: null }, null === Yg) {
        if (null === Xg) throw Error(p(308));
        Yg = a;
        Xg.dependencies = { lanes: 0, firstContext: a };
      } else Yg = Yg.next = a;
      return b;
    }
    var fh = null;
    function gh(a) {
      null === fh ? fh = [a] : fh.push(a);
    }
    function hh(a, b, c, d) {
      var e = b.interleaved;
      null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
      b.interleaved = c;
      return ih(a, d);
    }
    function ih(a, b) {
      a.lanes |= b;
      var c = a.alternate;
      null !== c && (c.lanes |= b);
      c = a;
      for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
      return 3 === c.tag ? c.stateNode : null;
    }
    var jh = false;
    function kh(a) {
      a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
    }
    function lh(a, b) {
      a = a.updateQueue;
      b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
    }
    function mh(a, b) {
      return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
    }
    function nh(a, b, c) {
      var d = a.updateQueue;
      if (null === d) return null;
      d = d.shared;
      if (0 !== (K & 2)) {
        var e = d.pending;
        null === e ? b.next = b : (b.next = e.next, e.next = b);
        d.pending = b;
        return ih(a, c);
      }
      e = d.interleaved;
      null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
      d.interleaved = b;
      return ih(a, c);
    }
    function oh(a, b, c) {
      b = b.updateQueue;
      if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
        var d = b.lanes;
        d &= a.pendingLanes;
        c |= d;
        b.lanes = c;
        Cc(a, c);
      }
    }
    function ph(a, b) {
      var c = a.updateQueue, d = a.alternate;
      if (null !== d && (d = d.updateQueue, c === d)) {
        var e = null, f = null;
        c = c.firstBaseUpdate;
        if (null !== c) {
          do {
            var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
            null === f ? e = f = g : f = f.next = g;
            c = c.next;
          } while (null !== c);
          null === f ? e = f = b : f = f.next = b;
        } else e = f = b;
        c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects };
        a.updateQueue = c;
        return;
      }
      a = c.lastBaseUpdate;
      null === a ? c.firstBaseUpdate = b : a.next = b;
      c.lastBaseUpdate = b;
    }
    function qh(a, b, c, d) {
      var e = a.updateQueue;
      jh = false;
      var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
      if (null !== h) {
        e.shared.pending = null;
        var k = h, l = k.next;
        k.next = null;
        null === g ? f = l : g.next = l;
        g = k;
        var m = a.alternate;
        null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
      }
      if (null !== f) {
        var q = e.baseState;
        g = 0;
        m = l = k = null;
        h = f;
        do {
          var r2 = h.lane, y = h.eventTime;
          if ((d & r2) === r2) {
            null !== m && (m = m.next = {
              eventTime: y,
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            });
            a: {
              var n = a, t = h;
              r2 = b;
              y = c;
              switch (t.tag) {
                case 1:
                  n = t.payload;
                  if ("function" === typeof n) {
                    q = n.call(y, q, r2);
                    break a;
                  }
                  q = n;
                  break a;
                case 3:
                  n.flags = n.flags & -65537 | 128;
                case 0:
                  n = t.payload;
                  r2 = "function" === typeof n ? n.call(y, q, r2) : n;
                  if (null === r2 || void 0 === r2) break a;
                  q = A({}, q, r2);
                  break a;
                case 2:
                  jh = true;
              }
            }
            null !== h.callback && 0 !== h.lane && (a.flags |= 64, r2 = e.effects, null === r2 ? e.effects = [h] : r2.push(h));
          } else y = { eventTime: y, lane: r2, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r2;
          h = h.next;
          if (null === h) if (h = e.shared.pending, null === h) break;
          else r2 = h, h = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
        } while (1);
        null === m && (k = q);
        e.baseState = k;
        e.firstBaseUpdate = l;
        e.lastBaseUpdate = m;
        b = e.shared.interleaved;
        if (null !== b) {
          e = b;
          do
            g |= e.lane, e = e.next;
          while (e !== b);
        } else null === f && (e.shared.lanes = 0);
        rh |= g;
        a.lanes = g;
        a.memoizedState = q;
      }
    }
    function sh(a, b, c) {
      a = b.effects;
      b.effects = null;
      if (null !== a) for (b = 0; b < a.length; b++) {
        var d = a[b], e = d.callback;
        if (null !== e) {
          d.callback = null;
          d = c;
          if ("function" !== typeof e) throw Error(p(191, e));
          e.call(d);
        }
      }
    }
    var th = {};
    var uh = Uf(th);
    var vh = Uf(th);
    var wh = Uf(th);
    function xh(a) {
      if (a === th) throw Error(p(174));
      return a;
    }
    function yh(a, b) {
      G(wh, b);
      G(vh, a);
      G(uh, th);
      a = b.nodeType;
      switch (a) {
        case 9:
        case 11:
          b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
          break;
        default:
          a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
      }
      E(uh);
      G(uh, b);
    }
    function zh() {
      E(uh);
      E(vh);
      E(wh);
    }
    function Ah(a) {
      xh(wh.current);
      var b = xh(uh.current);
      var c = lb(b, a.type);
      b !== c && (G(vh, a), G(uh, c));
    }
    function Bh(a) {
      vh.current === a && (E(uh), E(vh));
    }
    var L = Uf(0);
    function Ch(a) {
      for (var b = a; null !== b; ) {
        if (13 === b.tag) {
          var c = b.memoizedState;
          if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
        } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
          if (0 !== (b.flags & 128)) return b;
        } else if (null !== b.child) {
          b.child.return = b;
          b = b.child;
          continue;
        }
        if (b === a) break;
        for (; null === b.sibling; ) {
          if (null === b.return || b.return === a) return null;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
      return null;
    }
    var Dh = [];
    function Eh() {
      for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
      Dh.length = 0;
    }
    var Fh = ua.ReactCurrentDispatcher;
    var Gh = ua.ReactCurrentBatchConfig;
    var Hh = 0;
    var M = null;
    var N = null;
    var O = null;
    var Ih = false;
    var Jh = false;
    var Kh = 0;
    var Lh = 0;
    function P() {
      throw Error(p(321));
    }
    function Mh(a, b) {
      if (null === b) return false;
      for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return false;
      return true;
    }
    function Nh(a, b, c, d, e, f) {
      Hh = f;
      M = b;
      b.memoizedState = null;
      b.updateQueue = null;
      b.lanes = 0;
      Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
      a = c(d, e);
      if (Jh) {
        f = 0;
        do {
          Jh = false;
          Kh = 0;
          if (25 <= f) throw Error(p(301));
          f += 1;
          O = N = null;
          b.updateQueue = null;
          Fh.current = Qh;
          a = c(d, e);
        } while (Jh);
      }
      Fh.current = Rh;
      b = null !== N && null !== N.next;
      Hh = 0;
      O = N = M = null;
      Ih = false;
      if (b) throw Error(p(300));
      return a;
    }
    function Sh() {
      var a = 0 !== Kh;
      Kh = 0;
      return a;
    }
    function Th() {
      var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      null === O ? M.memoizedState = O = a : O = O.next = a;
      return O;
    }
    function Uh() {
      if (null === N) {
        var a = M.alternate;
        a = null !== a ? a.memoizedState : null;
      } else a = N.next;
      var b = null === O ? M.memoizedState : O.next;
      if (null !== b) O = b, N = a;
      else {
        if (null === a) throw Error(p(310));
        N = a;
        a = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
        null === O ? M.memoizedState = O = a : O = O.next = a;
      }
      return O;
    }
    function Vh(a, b) {
      return "function" === typeof b ? b(a) : b;
    }
    function Wh(a) {
      var b = Uh(), c = b.queue;
      if (null === c) throw Error(p(311));
      c.lastRenderedReducer = a;
      var d = N, e = d.baseQueue, f = c.pending;
      if (null !== f) {
        if (null !== e) {
          var g = e.next;
          e.next = f.next;
          f.next = g;
        }
        d.baseQueue = e = f;
        c.pending = null;
      }
      if (null !== e) {
        f = e.next;
        d = d.baseState;
        var h = g = null, k = null, l = f;
        do {
          var m = l.lane;
          if ((Hh & m) === m) null !== k && (k = k.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), d = l.hasEagerState ? l.eagerState : a(d, l.action);
          else {
            var q = {
              lane: m,
              action: l.action,
              hasEagerState: l.hasEagerState,
              eagerState: l.eagerState,
              next: null
            };
            null === k ? (h = k = q, g = d) : k = k.next = q;
            M.lanes |= m;
            rh |= m;
          }
          l = l.next;
        } while (null !== l && l !== f);
        null === k ? g = d : k.next = h;
        He(d, b.memoizedState) || (dh = true);
        b.memoizedState = d;
        b.baseState = g;
        b.baseQueue = k;
        c.lastRenderedState = d;
      }
      a = c.interleaved;
      if (null !== a) {
        e = a;
        do
          f = e.lane, M.lanes |= f, rh |= f, e = e.next;
        while (e !== a);
      } else null === e && (c.lanes = 0);
      return [b.memoizedState, c.dispatch];
    }
    function Xh(a) {
      var b = Uh(), c = b.queue;
      if (null === c) throw Error(p(311));
      c.lastRenderedReducer = a;
      var d = c.dispatch, e = c.pending, f = b.memoizedState;
      if (null !== e) {
        c.pending = null;
        var g = e = e.next;
        do
          f = a(f, g.action), g = g.next;
        while (g !== e);
        He(f, b.memoizedState) || (dh = true);
        b.memoizedState = f;
        null === b.baseQueue && (b.baseState = f);
        c.lastRenderedState = f;
      }
      return [f, d];
    }
    function Yh() {
    }
    function Zh(a, b) {
      var c = M, d = Uh(), e = b(), f = !He(d.memoizedState, e);
      f && (d.memoizedState = e, dh = true);
      d = d.queue;
      $h(ai.bind(null, c, d, a), [a]);
      if (d.getSnapshot !== b || f || null !== O && O.memoizedState.tag & 1) {
        c.flags |= 2048;
        bi(9, ci.bind(null, c, d, e, b), void 0, null);
        if (null === Q) throw Error(p(349));
        0 !== (Hh & 30) || di(c, b, e);
      }
      return e;
    }
    function di(a, b, c) {
      a.flags |= 16384;
      a = { getSnapshot: b, value: c };
      b = M.updateQueue;
      null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
    }
    function ci(a, b, c, d) {
      b.value = c;
      b.getSnapshot = d;
      ei(b) && fi(a);
    }
    function ai(a, b, c) {
      return c(function() {
        ei(b) && fi(a);
      });
    }
    function ei(a) {
      var b = a.getSnapshot;
      a = a.value;
      try {
        var c = b();
        return !He(a, c);
      } catch (d) {
        return true;
      }
    }
    function fi(a) {
      var b = ih(a, 1);
      null !== b && gi(b, a, 1, -1);
    }
    function hi(a) {
      var b = Th();
      "function" === typeof a && (a = a());
      b.memoizedState = b.baseState = a;
      a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
      b.queue = a;
      a = a.dispatch = ii.bind(null, M, a);
      return [b.memoizedState, a];
    }
    function bi(a, b, c, d) {
      a = { tag: a, create: b, destroy: c, deps: d, next: null };
      b = M.updateQueue;
      null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
      return a;
    }
    function ji() {
      return Uh().memoizedState;
    }
    function ki(a, b, c, d) {
      var e = Th();
      M.flags |= a;
      e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
    }
    function li(a, b, c, d) {
      var e = Uh();
      d = void 0 === d ? null : d;
      var f = void 0;
      if (null !== N) {
        var g = N.memoizedState;
        f = g.destroy;
        if (null !== d && Mh(d, g.deps)) {
          e.memoizedState = bi(b, c, f, d);
          return;
        }
      }
      M.flags |= a;
      e.memoizedState = bi(1 | b, c, f, d);
    }
    function mi(a, b) {
      return ki(8390656, 8, a, b);
    }
    function $h(a, b) {
      return li(2048, 8, a, b);
    }
    function ni(a, b) {
      return li(4, 2, a, b);
    }
    function oi(a, b) {
      return li(4, 4, a, b);
    }
    function pi(a, b) {
      if ("function" === typeof b) return a = a(), b(a), function() {
        b(null);
      };
      if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
        b.current = null;
      };
    }
    function qi(a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return li(4, 4, pi.bind(null, b, a), c);
    }
    function ri() {
    }
    function si(a, b) {
      var c = Uh();
      b = void 0 === b ? null : b;
      var d = c.memoizedState;
      if (null !== d && null !== b && Mh(b, d[1])) return d[0];
      c.memoizedState = [a, b];
      return a;
    }
    function ti(a, b) {
      var c = Uh();
      b = void 0 === b ? null : b;
      var d = c.memoizedState;
      if (null !== d && null !== b && Mh(b, d[1])) return d[0];
      a = a();
      c.memoizedState = [a, b];
      return a;
    }
    function ui(a, b, c) {
      if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
      He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = true);
      return b;
    }
    function vi(a, b) {
      var c = C;
      C = 0 !== c && 4 > c ? c : 4;
      a(true);
      var d = Gh.transition;
      Gh.transition = {};
      try {
        a(false), b();
      } finally {
        C = c, Gh.transition = d;
      }
    }
    function wi() {
      return Uh().memoizedState;
    }
    function xi(a, b, c) {
      var d = yi(a);
      c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
      if (zi(a)) Ai(b, c);
      else if (c = hh(a, b, c, d), null !== c) {
        var e = R();
        gi(c, a, d, e);
        Bi(c, b, d);
      }
    }
    function ii(a, b, c) {
      var d = yi(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
      if (zi(a)) Ai(b, e);
      else {
        var f = a.alternate;
        if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
          var g = b.lastRenderedState, h = f(g, c);
          e.hasEagerState = true;
          e.eagerState = h;
          if (He(h, g)) {
            var k = b.interleaved;
            null === k ? (e.next = e, gh(b)) : (e.next = k.next, k.next = e);
            b.interleaved = e;
            return;
          }
        } catch (l) {
        } finally {
        }
        c = hh(a, b, e, d);
        null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
      }
    }
    function zi(a) {
      var b = a.alternate;
      return a === M || null !== b && b === M;
    }
    function Ai(a, b) {
      Jh = Ih = true;
      var c = a.pending;
      null === c ? b.next = b : (b.next = c.next, c.next = b);
      a.pending = b;
    }
    function Bi(a, b, c) {
      if (0 !== (c & 4194240)) {
        var d = b.lanes;
        d &= a.pendingLanes;
        c |= d;
        b.lanes = c;
        Cc(a, c);
      }
    }
    var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false };
    var Oh = { readContext: eh, useCallback: function(a, b) {
      Th().memoizedState = [a, void 0 === b ? null : b];
      return a;
    }, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return ki(
        4194308,
        4,
        pi.bind(null, b, a),
        c
      );
    }, useLayoutEffect: function(a, b) {
      return ki(4194308, 4, a, b);
    }, useInsertionEffect: function(a, b) {
      return ki(4, 2, a, b);
    }, useMemo: function(a, b) {
      var c = Th();
      b = void 0 === b ? null : b;
      a = a();
      c.memoizedState = [a, b];
      return a;
    }, useReducer: function(a, b, c) {
      var d = Th();
      b = void 0 !== c ? c(b) : b;
      d.memoizedState = d.baseState = b;
      a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
      d.queue = a;
      a = a.dispatch = xi.bind(null, M, a);
      return [d.memoizedState, a];
    }, useRef: function(a) {
      var b = Th();
      a = { current: a };
      return b.memoizedState = a;
    }, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
      return Th().memoizedState = a;
    }, useTransition: function() {
      var a = hi(false), b = a[0];
      a = vi.bind(null, a[1]);
      Th().memoizedState = a;
      return [b, a];
    }, useMutableSource: function() {
    }, useSyncExternalStore: function(a, b, c) {
      var d = M, e = Th();
      if (I) {
        if (void 0 === c) throw Error(p(407));
        c = c();
      } else {
        c = b();
        if (null === Q) throw Error(p(349));
        0 !== (Hh & 30) || di(d, b, c);
      }
      e.memoizedState = c;
      var f = { value: c, getSnapshot: b };
      e.queue = f;
      mi(ai.bind(
        null,
        d,
        f,
        a
      ), [a]);
      d.flags |= 2048;
      bi(9, ci.bind(null, d, f, c, b), void 0, null);
      return c;
    }, useId: function() {
      var a = Th(), b = Q.identifierPrefix;
      if (I) {
        var c = sg;
        var d = rg;
        c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
        b = ":" + b + "R" + c;
        c = Kh++;
        0 < c && (b += "H" + c.toString(32));
        b += ":";
      } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
      return a.memoizedState = b;
    }, unstable_isNewReconciler: false };
    var Ph = {
      readContext: eh,
      useCallback: si,
      useContext: eh,
      useEffect: $h,
      useImperativeHandle: qi,
      useInsertionEffect: ni,
      useLayoutEffect: oi,
      useMemo: ti,
      useReducer: Wh,
      useRef: ji,
      useState: function() {
        return Wh(Vh);
      },
      useDebugValue: ri,
      useDeferredValue: function(a) {
        var b = Uh();
        return ui(b, N.memoizedState, a);
      },
      useTransition: function() {
        var a = Wh(Vh)[0], b = Uh().memoizedState;
        return [a, b];
      },
      useMutableSource: Yh,
      useSyncExternalStore: Zh,
      useId: wi,
      unstable_isNewReconciler: false
    };
    var Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
      return Xh(Vh);
    }, useDebugValue: ri, useDeferredValue: function(a) {
      var b = Uh();
      return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
    }, useTransition: function() {
      var a = Xh(Vh)[0], b = Uh().memoizedState;
      return [a, b];
    }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
    function Ci(a, b) {
      if (a && a.defaultProps) {
        b = A({}, b);
        a = a.defaultProps;
        for (var c in a) void 0 === b[c] && (b[c] = a[c]);
        return b;
      }
      return b;
    }
    function Di(a, b, c, d) {
      b = a.memoizedState;
      c = c(d, b);
      c = null === c || void 0 === c ? b : A({}, b, c);
      a.memoizedState = c;
      0 === a.lanes && (a.updateQueue.baseState = c);
    }
    var Ei = { isMounted: function(a) {
      return (a = a._reactInternals) ? Vb(a) === a : false;
    }, enqueueSetState: function(a, b, c) {
      a = a._reactInternals;
      var d = R(), e = yi(a), f = mh(d, e);
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      b = nh(a, f, e);
      null !== b && (gi(b, a, e, d), oh(b, a, e));
    }, enqueueReplaceState: function(a, b, c) {
      a = a._reactInternals;
      var d = R(), e = yi(a), f = mh(d, e);
      f.tag = 1;
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      b = nh(a, f, e);
      null !== b && (gi(b, a, e, d), oh(b, a, e));
    }, enqueueForceUpdate: function(a, b) {
      a = a._reactInternals;
      var c = R(), d = yi(a), e = mh(c, d);
      e.tag = 2;
      void 0 !== b && null !== b && (e.callback = b);
      b = nh(a, e, d);
      null !== b && (gi(b, a, d, c), oh(b, a, d));
    } };
    function Fi(a, b, c, d, e, f, g) {
      a = a.stateNode;
      return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : true;
    }
    function Gi(a, b, c) {
      var d = false, e = Vf;
      var f = b.contextType;
      "object" === typeof f && null !== f ? f = eh(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
      b = new b(c, f);
      a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
      b.updater = Ei;
      a.stateNode = b;
      b._reactInternals = a;
      d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
      return b;
    }
    function Hi(a, b, c, d) {
      a = b.state;
      "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
      "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
      b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
    }
    function Ii(a, b, c, d) {
      var e = a.stateNode;
      e.props = c;
      e.state = a.memoizedState;
      e.refs = {};
      kh(a);
      var f = b.contextType;
      "object" === typeof f && null !== f ? e.context = eh(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
      e.state = a.memoizedState;
      f = b.getDerivedStateFromProps;
      "function" === typeof f && (Di(a, b, f, c), e.state = a.memoizedState);
      "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
      "function" === typeof e.componentDidMount && (a.flags |= 4194308);
    }
    function Ji(a, b) {
      try {
        var c = "", d = b;
        do
          c += Pa(d), d = d.return;
        while (d);
        var e = c;
      } catch (f) {
        e = "\nError generating stack: " + f.message + "\n" + f.stack;
      }
      return { value: a, source: b, stack: e, digest: null };
    }
    function Ki(a, b, c) {
      return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
    }
    function Li(a, b) {
      try {
        console.error(b.value);
      } catch (c) {
        setTimeout(function() {
          throw c;
        });
      }
    }
    var Mi = "function" === typeof WeakMap ? WeakMap : Map;
    function Ni(a, b, c) {
      c = mh(-1, c);
      c.tag = 3;
      c.payload = { element: null };
      var d = b.value;
      c.callback = function() {
        Oi || (Oi = true, Pi = d);
        Li(a, b);
      };
      return c;
    }
    function Qi(a, b, c) {
      c = mh(-1, c);
      c.tag = 3;
      var d = a.type.getDerivedStateFromError;
      if ("function" === typeof d) {
        var e = b.value;
        c.payload = function() {
          return d(e);
        };
        c.callback = function() {
          Li(a, b);
        };
      }
      var f = a.stateNode;
      null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
        Li(a, b);
        "function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
        var c2 = b.stack;
        this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
      });
      return c;
    }
    function Si(a, b, c) {
      var d = a.pingCache;
      if (null === d) {
        d = a.pingCache = new Mi();
        var e = /* @__PURE__ */ new Set();
        d.set(b, e);
      } else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
      e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
    }
    function Ui(a) {
      do {
        var b;
        if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
        if (b) return a;
        a = a.return;
      } while (null !== a);
      return null;
    }
    function Vi(a, b, c, d, e) {
      if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
      a.flags |= 65536;
      a.lanes = e;
      return a;
    }
    var Wi = ua.ReactCurrentOwner;
    var dh = false;
    function Xi(a, b, c, d) {
      b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
    }
    function Yi(a, b, c, d, e) {
      c = c.render;
      var f = b.ref;
      ch(b, e);
      d = Nh(a, b, c, d, f, e);
      c = Sh();
      if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
      I && c && vg(b);
      b.flags |= 1;
      Xi(a, b, d, e);
      return b.child;
    }
    function $i(a, b, c, d, e) {
      if (null === a) {
        var f = c.type;
        if ("function" === typeof f && !aj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, bj(a, b, f, d, e);
        a = Rg(c.type, null, d, b, b.mode, e);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
      }
      f = a.child;
      if (0 === (a.lanes & e)) {
        var g = f.memoizedProps;
        c = c.compare;
        c = null !== c ? c : Ie;
        if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
      }
      b.flags |= 1;
      a = Pg(f, d);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }
    function bj(a, b, c, d, e) {
      if (null !== a) {
        var f = a.memoizedProps;
        if (Ie(f, d) && a.ref === b.ref) if (dh = false, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = true);
        else return b.lanes = a.lanes, Zi(a, b, e);
      }
      return cj(a, b, c, d, e);
    }
    function dj(a, b, c) {
      var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
      if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c;
      else {
        if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(ej, fj), fj |= a, null;
        b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
        d = null !== f ? f.baseLanes : c;
        G(ej, fj);
        fj |= d;
      }
      else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
      Xi(a, b, e, c);
      return b.child;
    }
    function gj(a, b) {
      var c = b.ref;
      if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
    }
    function cj(a, b, c, d, e) {
      var f = Zf(c) ? Xf : H.current;
      f = Yf(b, f);
      ch(b, e);
      c = Nh(a, b, c, d, f, e);
      d = Sh();
      if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
      I && d && vg(b);
      b.flags |= 1;
      Xi(a, b, c, e);
      return b.child;
    }
    function hj(a, b, c, d, e) {
      if (Zf(c)) {
        var f = true;
        cg(b);
      } else f = false;
      ch(b, e);
      if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = true;
      else if (null === a) {
        var g = b.stateNode, h = b.memoizedProps;
        g.props = h;
        var k = g.context, l = c.contextType;
        "object" === typeof l && null !== l ? l = eh(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
        var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
        q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Hi(b, g, d, l);
        jh = false;
        var r2 = b.memoizedState;
        g.state = r2;
        qh(b, d, g, e);
        k = b.memoizedState;
        h !== d || r2 !== k || Wf.current || jh ? ("function" === typeof m && (Di(b, c, m, d), k = b.memoizedState), (h = jh || Fi(b, c, h, d, r2, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
      } else {
        g = b.stateNode;
        lh(a, b);
        h = b.memoizedProps;
        l = b.type === b.elementType ? h : Ci(b.type, h);
        g.props = l;
        q = b.pendingProps;
        r2 = g.context;
        k = c.contextType;
        "object" === typeof k && null !== k ? k = eh(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
        var y = c.getDerivedStateFromProps;
        (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r2 !== k) && Hi(b, g, d, k);
        jh = false;
        r2 = b.memoizedState;
        g.state = r2;
        qh(b, d, g, e);
        var n = b.memoizedState;
        h !== q || r2 !== n || Wf.current || jh ? ("function" === typeof y && (Di(b, c, y, d), n = b.memoizedState), (l = jh || Fi(b, c, l, d, r2, n, k) || false) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), d = false);
      }
      return jj(a, b, c, d, f, e);
    }
    function jj(a, b, c, d, e, f) {
      gj(a, b);
      var g = 0 !== (b.flags & 128);
      if (!d && !g) return e && dg(b, c, false), Zi(a, b, f);
      d = b.stateNode;
      Wi.current = b;
      var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
      b.flags |= 1;
      null !== a && g ? (b.child = Ug(b, a.child, null, f), b.child = Ug(b, null, h, f)) : Xi(a, b, h, f);
      b.memoizedState = d.state;
      e && dg(b, c, true);
      return b.child;
    }
    function kj(a) {
      var b = a.stateNode;
      b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
      yh(a, b.containerInfo);
    }
    function lj(a, b, c, d, e) {
      Ig();
      Jg(e);
      b.flags |= 256;
      Xi(a, b, c, d);
      return b.child;
    }
    var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
    function nj(a) {
      return { baseLanes: a, cachePool: null, transitions: null };
    }
    function oj(a, b, c) {
      var d = b.pendingProps, e = L.current, f = false, g = 0 !== (b.flags & 128), h;
      (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
      if (h) f = true, b.flags &= -129;
      else if (null === a || null !== a.memoizedState) e |= 1;
      G(L, e & 1);
      if (null === a) {
        Eg(b);
        a = b.memoizedState;
        if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
        g = d.children;
        a = d.fallback;
        return f ? (d = b.mode, f = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = pj(g, d, 0, null), a = Tg(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
      }
      e = a.memoizedState;
      if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
      if (f) {
        f = d.fallback;
        g = b.mode;
        e = a.child;
        h = e.sibling;
        var k = { mode: "hidden", children: d.children };
        0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = Pg(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
        null !== h ? f = Pg(h, f) : (f = Tg(f, g, c, null), f.flags |= 2);
        f.return = b;
        d.return = b;
        d.sibling = f;
        b.child = d;
        d = f;
        f = b.child;
        g = a.child.memoizedState;
        g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
        f.memoizedState = g;
        f.childLanes = a.childLanes & ~c;
        b.memoizedState = mj;
        return d;
      }
      f = a.child;
      a = f.sibling;
      d = Pg(f, { mode: "visible", children: d.children });
      0 === (b.mode & 1) && (d.lanes = c);
      d.return = b;
      d.sibling = null;
      null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
      b.child = d;
      b.memoizedState = null;
      return d;
    }
    function qj(a, b) {
      b = pj({ mode: "visible", children: b }, a.mode, 0, null);
      b.return = a;
      return a.child = b;
    }
    function sj(a, b, c, d) {
      null !== d && Jg(d);
      Ug(b, a.child, null, c);
      a = qj(b, b.pendingProps.children);
      a.flags |= 2;
      b.memoizedState = null;
      return a;
    }
    function rj(a, b, c, d, e, f, g) {
      if (c) {
        if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
        if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
        f = d.fallback;
        e = b.mode;
        d = pj({ mode: "visible", children: d.children }, e, 0, null);
        f = Tg(f, e, g, null);
        f.flags |= 2;
        d.return = b;
        f.return = b;
        d.sibling = f;
        b.child = d;
        0 !== (b.mode & 1) && Ug(b, a.child, null, g);
        b.child.memoizedState = nj(g);
        b.memoizedState = mj;
        return f;
      }
      if (0 === (b.mode & 1)) return sj(a, b, g, null);
      if ("$!" === e.data) {
        d = e.nextSibling && e.nextSibling.dataset;
        if (d) var h = d.dgst;
        d = h;
        f = Error(p(419));
        d = Ki(f, d, void 0);
        return sj(a, b, g, d);
      }
      h = 0 !== (g & a.childLanes);
      if (dh || h) {
        d = Q;
        if (null !== d) {
          switch (g & -g) {
            case 4:
              e = 2;
              break;
            case 16:
              e = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              e = 32;
              break;
            case 536870912:
              e = 268435456;
              break;
            default:
              e = 0;
          }
          e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
          0 !== e && e !== f.retryLane && (f.retryLane = e, ih(a, e), gi(d, a, e, -1));
        }
        tj();
        d = Ki(Error(p(421)));
        return sj(a, b, g, d);
      }
      if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
      a = f.treeContext;
      yg = Lf(e.nextSibling);
      xg = b;
      I = true;
      zg = null;
      null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
      b = qj(b, d.children);
      b.flags |= 4096;
      return b;
    }
    function vj(a, b, c) {
      a.lanes |= b;
      var d = a.alternate;
      null !== d && (d.lanes |= b);
      bh(a.return, b, c);
    }
    function wj(a, b, c, d, e) {
      var f = a.memoizedState;
      null === f ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
    }
    function xj(a, b, c) {
      var d = b.pendingProps, e = d.revealOrder, f = d.tail;
      Xi(a, b, d.children, c);
      d = L.current;
      if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
      else {
        if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
          if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
          else if (19 === a.tag) vj(a, c, b);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b) break a;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === b) break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
        d &= 1;
      }
      G(L, d);
      if (0 === (b.mode & 1)) b.memoizedState = null;
      else switch (e) {
        case "forwards":
          c = b.child;
          for (e = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
          c = e;
          null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
          wj(b, false, e, c, f);
          break;
        case "backwards":
          c = null;
          e = b.child;
          for (b.child = null; null !== e; ) {
            a = e.alternate;
            if (null !== a && null === Ch(a)) {
              b.child = e;
              break;
            }
            a = e.sibling;
            e.sibling = c;
            c = e;
            e = a;
          }
          wj(b, true, c, null, f);
          break;
        case "together":
          wj(b, false, null, null, void 0);
          break;
        default:
          b.memoizedState = null;
      }
      return b.child;
    }
    function ij(a, b) {
      0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
    }
    function Zi(a, b, c) {
      null !== a && (b.dependencies = a.dependencies);
      rh |= b.lanes;
      if (0 === (c & b.childLanes)) return null;
      if (null !== a && b.child !== a.child) throw Error(p(153));
      if (null !== b.child) {
        a = b.child;
        c = Pg(a, a.pendingProps);
        b.child = c;
        for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
        c.sibling = null;
      }
      return b.child;
    }
    function yj(a, b, c) {
      switch (b.tag) {
        case 3:
          kj(b);
          Ig();
          break;
        case 5:
          Ah(b);
          break;
        case 1:
          Zf(b.type) && cg(b);
          break;
        case 4:
          yh(b, b.stateNode.containerInfo);
          break;
        case 10:
          var d = b.type._context, e = b.memoizedProps.value;
          G(Wg, d._currentValue);
          d._currentValue = e;
          break;
        case 13:
          d = b.memoizedState;
          if (null !== d) {
            if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
            if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
            G(L, L.current & 1);
            a = Zi(a, b, c);
            return null !== a ? a.sibling : null;
          }
          G(L, L.current & 1);
          break;
        case 19:
          d = 0 !== (c & b.childLanes);
          if (0 !== (a.flags & 128)) {
            if (d) return xj(a, b, c);
            b.flags |= 128;
          }
          e = b.memoizedState;
          null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
          G(L, L.current);
          if (d) break;
          else return null;
        case 22:
        case 23:
          return b.lanes = 0, dj(a, b, c);
      }
      return Zi(a, b, c);
    }
    var zj;
    var Aj;
    var Bj;
    var Cj;
    zj = function(a, b) {
      for (var c = b.child; null !== c; ) {
        if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
        else if (4 !== c.tag && null !== c.child) {
          c.child.return = c;
          c = c.child;
          continue;
        }
        if (c === b) break;
        for (; null === c.sibling; ) {
          if (null === c.return || c.return === b) return;
          c = c.return;
        }
        c.sibling.return = c.return;
        c = c.sibling;
      }
    };
    Aj = function() {
    };
    Bj = function(a, b, c, d) {
      var e = a.memoizedProps;
      if (e !== d) {
        a = b.stateNode;
        xh(uh.current);
        var f = null;
        switch (c) {
          case "input":
            e = Ya(a, e);
            d = Ya(a, d);
            f = [];
            break;
          case "select":
            e = A({}, e, { value: void 0 });
            d = A({}, d, { value: void 0 });
            f = [];
            break;
          case "textarea":
            e = gb(a, e);
            d = gb(a, d);
            f = [];
            break;
          default:
            "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
        }
        ub(c, d);
        var g;
        c = null;
        for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
          var h = e[l];
          for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
        } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
        for (l in d) {
          var k = d[l];
          h = null != e ? e[l] : void 0;
          if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) if (h) {
            for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
            for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
          } else c || (f || (f = []), f.push(
            l,
            c
          )), c = k;
          else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
        }
        c && (f = f || []).push("style", c);
        var l = f;
        if (b.updateQueue = l) b.flags |= 4;
      }
    };
    Cj = function(a, b, c, d) {
      c !== d && (b.flags |= 4);
    };
    function Dj(a, b) {
      if (!I) switch (a.tailMode) {
        case "hidden":
          b = a.tail;
          for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
          null === c ? a.tail = null : c.sibling = null;
          break;
        case "collapsed":
          c = a.tail;
          for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
          null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
      }
    }
    function S(a) {
      var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
      if (b) for (var e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
      else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
      a.subtreeFlags |= d;
      a.childLanes = c;
      return b;
    }
    function Ej(a, b, c) {
      var d = b.pendingProps;
      wg(b);
      switch (b.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return S(b), null;
        case 1:
          return Zf(b.type) && $f(), S(b), null;
        case 3:
          d = b.stateNode;
          zh();
          E(Wf);
          E(H);
          Eh();
          d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
          if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
          Aj(a, b);
          S(b);
          return null;
        case 5:
          Bh(b);
          var e = xh(wh.current);
          c = b.type;
          if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
          else {
            if (!d) {
              if (null === b.stateNode) throw Error(p(166));
              S(b);
              return null;
            }
            a = xh(uh.current);
            if (Gg(b)) {
              d = b.stateNode;
              c = b.type;
              var f = b.memoizedProps;
              d[Of] = b;
              d[Pf] = f;
              a = 0 !== (b.mode & 1);
              switch (c) {
                case "dialog":
                  D("cancel", d);
                  D("close", d);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D("load", d);
                  break;
                case "video":
                case "audio":
                  for (e = 0; e < lf.length; e++) D(lf[e], d);
                  break;
                case "source":
                  D("error", d);
                  break;
                case "img":
                case "image":
                case "link":
                  D(
                    "error",
                    d
                  );
                  D("load", d);
                  break;
                case "details":
                  D("toggle", d);
                  break;
                case "input":
                  Za(d, f);
                  D("invalid", d);
                  break;
                case "select":
                  d._wrapperState = { wasMultiple: !!f.multiple };
                  D("invalid", d);
                  break;
                case "textarea":
                  hb(d, f), D("invalid", d);
              }
              ub(c, f);
              e = null;
              for (var g in f) if (f.hasOwnProperty(g)) {
                var h = f[g];
                "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f.suppressHydrationWarning && Af(
                  d.textContent,
                  h,
                  a
                ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
              }
              switch (c) {
                case "input":
                  Va(d);
                  db(d, f, true);
                  break;
                case "textarea":
                  Va(d);
                  jb(d);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  "function" === typeof f.onClick && (d.onclick = Bf);
              }
              d = e;
              b.updateQueue = d;
              null !== d && (b.flags |= 4);
            } else {
              g = 9 === e.nodeType ? e : e.ownerDocument;
              "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
              "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
              a[Of] = b;
              a[Pf] = d;
              zj(a, b, false, false);
              b.stateNode = a;
              a: {
                g = vb(c, d);
                switch (c) {
                  case "dialog":
                    D("cancel", a);
                    D("close", a);
                    e = d;
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D("load", a);
                    e = d;
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < lf.length; e++) D(lf[e], a);
                    e = d;
                    break;
                  case "source":
                    D("error", a);
                    e = d;
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D(
                      "error",
                      a
                    );
                    D("load", a);
                    e = d;
                    break;
                  case "details":
                    D("toggle", a);
                    e = d;
                    break;
                  case "input":
                    Za(a, d);
                    e = Ya(a, d);
                    D("invalid", a);
                    break;
                  case "option":
                    e = d;
                    break;
                  case "select":
                    a._wrapperState = { wasMultiple: !!d.multiple };
                    e = A({}, d, { value: void 0 });
                    D("invalid", a);
                    break;
                  case "textarea":
                    hb(a, d);
                    e = gb(a, d);
                    D("invalid", a);
                    break;
                  default:
                    e = d;
                }
                ub(c, e);
                h = e;
                for (f in h) if (h.hasOwnProperty(f)) {
                  var k = h[f];
                  "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
                }
                switch (c) {
                  case "input":
                    Va(a);
                    db(a, d, false);
                    break;
                  case "textarea":
                    Va(a);
                    jb(a);
                    break;
                  case "option":
                    null != d.value && a.setAttribute("value", "" + Sa(d.value));
                    break;
                  case "select":
                    a.multiple = !!d.multiple;
                    f = d.value;
                    null != f ? fb(a, !!d.multiple, f, false) : null != d.defaultValue && fb(
                      a,
                      !!d.multiple,
                      d.defaultValue,
                      true
                    );
                    break;
                  default:
                    "function" === typeof e.onClick && (a.onclick = Bf);
                }
                switch (c) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    d = !!d.autoFocus;
                    break a;
                  case "img":
                    d = true;
                    break a;
                  default:
                    d = false;
                }
              }
              d && (b.flags |= 4);
            }
            null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
          }
          S(b);
          return null;
        case 6:
          if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
          else {
            if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
            c = xh(wh.current);
            xh(uh.current);
            if (Gg(b)) {
              d = b.stateNode;
              c = b.memoizedProps;
              d[Of] = b;
              if (f = d.nodeValue !== c) {
                if (a = xg, null !== a) switch (a.tag) {
                  case 3:
                    Af(d.nodeValue, c, 0 !== (a.mode & 1));
                    break;
                  case 5:
                    true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                }
              }
              f && (b.flags |= 4);
            } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
          }
          S(b);
          return null;
        case 13:
          E(L);
          d = b.memoizedState;
          if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
            if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f = false;
            else if (f = Gg(b), null !== d && null !== d.dehydrated) {
              if (null === a) {
                if (!f) throw Error(p(318));
                f = b.memoizedState;
                f = null !== f ? f.dehydrated : null;
                if (!f) throw Error(p(317));
                f[Of] = b;
              } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
              S(b);
              f = false;
            } else null !== zg && (Fj(zg), zg = null), f = true;
            if (!f) return b.flags & 65536 ? b : null;
          }
          if (0 !== (b.flags & 128)) return b.lanes = c, b;
          d = null !== d;
          d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
          null !== b.updateQueue && (b.flags |= 4);
          S(b);
          return null;
        case 4:
          return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
        case 10:
          return ah(b.type._context), S(b), null;
        case 17:
          return Zf(b.type) && $f(), S(b), null;
        case 19:
          E(L);
          f = b.memoizedState;
          if (null === f) return S(b), null;
          d = 0 !== (b.flags & 128);
          g = f.rendering;
          if (null === g) if (d) Dj(f, false);
          else {
            if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
              g = Ch(a);
              if (null !== g) {
                b.flags |= 128;
                Dj(f, false);
                d = g.updateQueue;
                null !== d && (b.updateQueue = d, b.flags |= 4);
                b.subtreeFlags = 0;
                d = c;
                for (c = b.child; null !== c; ) f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                G(L, L.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
            null !== f.tail && B() > Gj && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
          }
          else {
            if (!d) if (a = Ch(g), null !== a) {
              if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f, true), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), null;
            } else 2 * B() - f.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
            f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
          }
          if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
          S(b);
          return null;
        case 22:
        case 23:
          return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(p(156, b.tag));
    }
    function Ij(a, b) {
      wg(b);
      switch (b.tag) {
        case 1:
          return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
        case 3:
          return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
        case 5:
          return Bh(b), null;
        case 13:
          E(L);
          a = b.memoizedState;
          if (null !== a && null !== a.dehydrated) {
            if (null === b.alternate) throw Error(p(340));
            Ig();
          }
          a = b.flags;
          return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
        case 19:
          return E(L), null;
        case 4:
          return zh(), null;
        case 10:
          return ah(b.type._context), null;
        case 22:
        case 23:
          return Hj(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var Jj = false;
    var U = false;
    var Kj = "function" === typeof WeakSet ? WeakSet : Set;
    var V = null;
    function Lj(a, b) {
      var c = a.ref;
      if (null !== c) if ("function" === typeof c) try {
        c(null);
      } catch (d) {
        W(a, b, d);
      }
      else c.current = null;
    }
    function Mj(a, b, c) {
      try {
        c();
      } catch (d) {
        W(a, b, d);
      }
    }
    var Nj = false;
    function Oj(a, b) {
      Cf = dd;
      a = Me();
      if (Ne(a)) {
        if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
        else a: {
          c = (c = a.ownerDocument) && c.defaultView || window;
          var d = c.getSelection && c.getSelection();
          if (d && 0 !== d.rangeCount) {
            c = d.anchorNode;
            var e = d.anchorOffset, f = d.focusNode;
            d = d.focusOffset;
            try {
              c.nodeType, f.nodeType;
            } catch (F) {
              c = null;
              break a;
            }
            var g = 0, h = -1, k = -1, l = 0, m = 0, q = a, r2 = null;
            b: for (; ; ) {
              for (var y; ; ) {
                q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
                q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
                3 === q.nodeType && (g += q.nodeValue.length);
                if (null === (y = q.firstChild)) break;
                r2 = q;
                q = y;
              }
              for (; ; ) {
                if (q === a) break b;
                r2 === c && ++l === e && (h = g);
                r2 === f && ++m === d && (k = g);
                if (null !== (y = q.nextSibling)) break;
                q = r2;
                r2 = q.parentNode;
              }
              q = y;
            }
            c = -1 === h || -1 === k ? null : { start: h, end: k };
          } else c = null;
        }
        c = c || { start: 0, end: 0 };
      } else c = null;
      Df = { focusedElem: a, selectionRange: c };
      dd = false;
      for (V = b; null !== V; ) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;
      else for (; null !== V; ) {
        b = V;
        try {
          var n = b.alternate;
          if (0 !== (b.flags & 1024)) switch (b.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (null !== n) {
                var t = n.memoizedProps, J = n.memoizedState, x = b.stateNode, w2 = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Ci(b.type, t), J);
                x.__reactInternalSnapshotBeforeUpdate = w2;
              }
              break;
            case 3:
              var u = b.stateNode.containerInfo;
              1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
              break;
            case 5:
            case 6:
            case 4:
            case 17:
              break;
            default:
              throw Error(p(163));
          }
        } catch (F) {
          W(b, b.return, F);
        }
        a = b.sibling;
        if (null !== a) {
          a.return = b.return;
          V = a;
          break;
        }
        V = b.return;
      }
      n = Nj;
      Nj = false;
      return n;
    }
    function Pj(a, b, c) {
      var d = b.updateQueue;
      d = null !== d ? d.lastEffect : null;
      if (null !== d) {
        var e = d = d.next;
        do {
          if ((e.tag & a) === a) {
            var f = e.destroy;
            e.destroy = void 0;
            void 0 !== f && Mj(b, c, f);
          }
          e = e.next;
        } while (e !== d);
      }
    }
    function Qj(a, b) {
      b = b.updateQueue;
      b = null !== b ? b.lastEffect : null;
      if (null !== b) {
        var c = b = b.next;
        do {
          if ((c.tag & a) === a) {
            var d = c.create;
            c.destroy = d();
          }
          c = c.next;
        } while (c !== b);
      }
    }
    function Rj(a) {
      var b = a.ref;
      if (null !== b) {
        var c = a.stateNode;
        switch (a.tag) {
          case 5:
            a = c;
            break;
          default:
            a = c;
        }
        "function" === typeof b ? b(a) : b.current = a;
      }
    }
    function Sj(a) {
      var b = a.alternate;
      null !== b && (a.alternate = null, Sj(b));
      a.child = null;
      a.deletions = null;
      a.sibling = null;
      5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
      a.stateNode = null;
      a.return = null;
      a.dependencies = null;
      a.memoizedProps = null;
      a.memoizedState = null;
      a.pendingProps = null;
      a.stateNode = null;
      a.updateQueue = null;
    }
    function Tj(a) {
      return 5 === a.tag || 3 === a.tag || 4 === a.tag;
    }
    function Uj(a) {
      a: for (; ; ) {
        for (; null === a.sibling; ) {
          if (null === a.return || Tj(a.return)) return null;
          a = a.return;
        }
        a.sibling.return = a.return;
        for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
          if (a.flags & 2) continue a;
          if (null === a.child || 4 === a.tag) continue a;
          else a.child.return = a, a = a.child;
        }
        if (!(a.flags & 2)) return a.stateNode;
      }
    }
    function Vj(a, b, c) {
      var d = a.tag;
      if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
      else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a; ) Vj(a, b, c), a = a.sibling;
    }
    function Wj(a, b, c) {
      var d = a.tag;
      if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
      else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a; ) Wj(a, b, c), a = a.sibling;
    }
    var X = null;
    var Xj = false;
    function Yj(a, b, c) {
      for (c = c.child; null !== c; ) Zj(a, b, c), c = c.sibling;
    }
    function Zj(a, b, c) {
      if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
        lc.onCommitFiberUnmount(kc, c);
      } catch (h) {
      }
      switch (c.tag) {
        case 5:
          U || Lj(c, b);
        case 6:
          var d = X, e = Xj;
          X = null;
          Yj(a, b, c);
          X = d;
          Xj = e;
          null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
          break;
        case 18:
          null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
          break;
        case 4:
          d = X;
          e = Xj;
          X = c.stateNode.containerInfo;
          Xj = true;
          Yj(a, b, c);
          X = d;
          Xj = e;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
            e = d = d.next;
            do {
              var f = e, g = f.destroy;
              f = f.tag;
              void 0 !== g && (0 !== (f & 2) ? Mj(c, b, g) : 0 !== (f & 4) && Mj(c, b, g));
              e = e.next;
            } while (e !== d);
          }
          Yj(a, b, c);
          break;
        case 1:
          if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
            d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
          } catch (h) {
            W(c, b, h);
          }
          Yj(a, b, c);
          break;
        case 21:
          Yj(a, b, c);
          break;
        case 22:
          c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
          break;
        default:
          Yj(a, b, c);
      }
    }
    function ak(a) {
      var b = a.updateQueue;
      if (null !== b) {
        a.updateQueue = null;
        var c = a.stateNode;
        null === c && (c = a.stateNode = new Kj());
        b.forEach(function(b2) {
          var d = bk.bind(null, a, b2);
          c.has(b2) || (c.add(b2), b2.then(d, d));
        });
      }
    }
    function ck(a, b) {
      var c = b.deletions;
      if (null !== c) for (var d = 0; d < c.length; d++) {
        var e = c[d];
        try {
          var f = a, g = b, h = g;
          a: for (; null !== h; ) {
            switch (h.tag) {
              case 5:
                X = h.stateNode;
                Xj = false;
                break a;
              case 3:
                X = h.stateNode.containerInfo;
                Xj = true;
                break a;
              case 4:
                X = h.stateNode.containerInfo;
                Xj = true;
                break a;
            }
            h = h.return;
          }
          if (null === X) throw Error(p(160));
          Zj(f, g, e);
          X = null;
          Xj = false;
          var k = e.alternate;
          null !== k && (k.return = null);
          e.return = null;
        } catch (l) {
          W(e, b, l);
        }
      }
      if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) dk(b, a), b = b.sibling;
    }
    function dk(a, b) {
      var c = a.alternate, d = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ck(b, a);
          ek(a);
          if (d & 4) {
            try {
              Pj(3, a, a.return), Qj(3, a);
            } catch (t) {
              W(a, a.return, t);
            }
            try {
              Pj(5, a, a.return);
            } catch (t) {
              W(a, a.return, t);
            }
          }
          break;
        case 1:
          ck(b, a);
          ek(a);
          d & 512 && null !== c && Lj(c, c.return);
          break;
        case 5:
          ck(b, a);
          ek(a);
          d & 512 && null !== c && Lj(c, c.return);
          if (a.flags & 32) {
            var e = a.stateNode;
            try {
              ob(e, "");
            } catch (t) {
              W(a, a.return, t);
            }
          }
          if (d & 4 && (e = a.stateNode, null != e)) {
            var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
            a.updateQueue = null;
            if (null !== k) try {
              "input" === h && "radio" === f.type && null != f.name && ab(e, f);
              vb(h, g);
              var l = vb(h, f);
              for (g = 0; g < k.length; g += 2) {
                var m = k[g], q = k[g + 1];
                "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
              }
              switch (h) {
                case "input":
                  bb(e, f);
                  break;
                case "textarea":
                  ib(e, f);
                  break;
                case "select":
                  var r2 = e._wrapperState.wasMultiple;
                  e._wrapperState.wasMultiple = !!f.multiple;
                  var y = f.value;
                  null != y ? fb(e, !!f.multiple, y, false) : r2 !== !!f.multiple && (null != f.defaultValue ? fb(
                    e,
                    !!f.multiple,
                    f.defaultValue,
                    true
                  ) : fb(e, !!f.multiple, f.multiple ? [] : "", false));
              }
              e[Pf] = f;
            } catch (t) {
              W(a, a.return, t);
            }
          }
          break;
        case 6:
          ck(b, a);
          ek(a);
          if (d & 4) {
            if (null === a.stateNode) throw Error(p(162));
            e = a.stateNode;
            f = a.memoizedProps;
            try {
              e.nodeValue = f;
            } catch (t) {
              W(a, a.return, t);
            }
          }
          break;
        case 3:
          ck(b, a);
          ek(a);
          if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
            bd(b.containerInfo);
          } catch (t) {
            W(a, a.return, t);
          }
          break;
        case 4:
          ck(b, a);
          ek(a);
          break;
        case 13:
          ck(b, a);
          ek(a);
          e = a.child;
          e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
          d & 4 && ak(a);
          break;
        case 22:
          m = null !== c && null !== c.memoizedState;
          a.mode & 1 ? (U = (l = U) || m, ck(b, a), U = l) : ck(b, a);
          ek(a);
          if (d & 8192) {
            l = null !== a.memoizedState;
            if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m; ) {
              for (q = V = m; null !== V; ) {
                r2 = V;
                y = r2.child;
                switch (r2.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Pj(4, r2, r2.return);
                    break;
                  case 1:
                    Lj(r2, r2.return);
                    var n = r2.stateNode;
                    if ("function" === typeof n.componentWillUnmount) {
                      d = r2;
                      c = r2.return;
                      try {
                        b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                      } catch (t) {
                        W(d, c, t);
                      }
                    }
                    break;
                  case 5:
                    Lj(r2, r2.return);
                    break;
                  case 22:
                    if (null !== r2.memoizedState) {
                      gk(q);
                      continue;
                    }
                }
                null !== y ? (y.return = r2, V = y) : gk(q);
              }
              m = m.sibling;
            }
            a: for (m = null, q = a; ; ) {
              if (5 === q.tag) {
                if (null === m) {
                  m = q;
                  try {
                    e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
                  } catch (t) {
                    W(a, a.return, t);
                  }
                }
              } else if (6 === q.tag) {
                if (null === m) try {
                  q.stateNode.nodeValue = l ? "" : q.memoizedProps;
                } catch (t) {
                  W(a, a.return, t);
                }
              } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
                q.child.return = q;
                q = q.child;
                continue;
              }
              if (q === a) break a;
              for (; null === q.sibling; ) {
                if (null === q.return || q.return === a) break a;
                m === q && (m = null);
                q = q.return;
              }
              m === q && (m = null);
              q.sibling.return = q.return;
              q = q.sibling;
            }
          }
          break;
        case 19:
          ck(b, a);
          ek(a);
          d & 4 && ak(a);
          break;
        case 21:
          break;
        default:
          ck(
            b,
            a
          ), ek(a);
      }
    }
    function ek(a) {
      var b = a.flags;
      if (b & 2) {
        try {
          a: {
            for (var c = a.return; null !== c; ) {
              if (Tj(c)) {
                var d = c;
                break a;
              }
              c = c.return;
            }
            throw Error(p(160));
          }
          switch (d.tag) {
            case 5:
              var e = d.stateNode;
              d.flags & 32 && (ob(e, ""), d.flags &= -33);
              var f = Uj(a);
              Wj(a, f, e);
              break;
            case 3:
            case 4:
              var g = d.stateNode.containerInfo, h = Uj(a);
              Vj(a, h, g);
              break;
            default:
              throw Error(p(161));
          }
        } catch (k) {
          W(a, a.return, k);
        }
        a.flags &= -3;
      }
      b & 4096 && (a.flags &= -4097);
    }
    function hk(a, b, c) {
      V = a;
      ik(a, b, c);
    }
    function ik(a, b, c) {
      for (var d = 0 !== (a.mode & 1); null !== V; ) {
        var e = V, f = e.child;
        if (22 === e.tag && d) {
          var g = null !== e.memoizedState || Jj;
          if (!g) {
            var h = e.alternate, k = null !== h && null !== h.memoizedState || U;
            h = Jj;
            var l = U;
            Jj = g;
            if ((U = k) && !l) for (V = e; null !== V; ) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k ? (k.return = g, V = k) : jk(e);
            for (; null !== f; ) V = f, ik(f, b, c), f = f.sibling;
            V = e;
            Jj = h;
            U = l;
          }
          kk(a, b, c);
        } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : kk(a, b, c);
      }
    }
    function kk(a) {
      for (; null !== V; ) {
        var b = V;
        if (0 !== (b.flags & 8772)) {
          var c = b.alternate;
          try {
            if (0 !== (b.flags & 8772)) switch (b.tag) {
              case 0:
              case 11:
              case 15:
                U || Qj(5, b);
                break;
              case 1:
                var d = b.stateNode;
                if (b.flags & 4 && !U) if (null === c) d.componentDidMount();
                else {
                  var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
                  d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                }
                var f = b.updateQueue;
                null !== f && sh(b, f, d);
                break;
              case 3:
                var g = b.updateQueue;
                if (null !== g) {
                  c = null;
                  if (null !== b.child) switch (b.child.tag) {
                    case 5:
                      c = b.child.stateNode;
                      break;
                    case 1:
                      c = b.child.stateNode;
                  }
                  sh(b, g, c);
                }
                break;
              case 5:
                var h = b.stateNode;
                if (null === c && b.flags & 4) {
                  c = h;
                  var k = b.memoizedProps;
                  switch (b.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      k.autoFocus && c.focus();
                      break;
                    case "img":
                      k.src && (c.src = k.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (null === b.memoizedState) {
                  var l = b.alternate;
                  if (null !== l) {
                    var m = l.memoizedState;
                    if (null !== m) {
                      var q = m.dehydrated;
                      null !== q && bd(q);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(p(163));
            }
            U || b.flags & 512 && Rj(b);
          } catch (r2) {
            W(b, b.return, r2);
          }
        }
        if (b === a) {
          V = null;
          break;
        }
        c = b.sibling;
        if (null !== c) {
          c.return = b.return;
          V = c;
          break;
        }
        V = b.return;
      }
    }
    function gk(a) {
      for (; null !== V; ) {
        var b = V;
        if (b === a) {
          V = null;
          break;
        }
        var c = b.sibling;
        if (null !== c) {
          c.return = b.return;
          V = c;
          break;
        }
        V = b.return;
      }
    }
    function jk(a) {
      for (; null !== V; ) {
        var b = V;
        try {
          switch (b.tag) {
            case 0:
            case 11:
            case 15:
              var c = b.return;
              try {
                Qj(4, b);
              } catch (k) {
                W(b, c, k);
              }
              break;
            case 1:
              var d = b.stateNode;
              if ("function" === typeof d.componentDidMount) {
                var e = b.return;
                try {
                  d.componentDidMount();
                } catch (k) {
                  W(b, e, k);
                }
              }
              var f = b.return;
              try {
                Rj(b);
              } catch (k) {
                W(b, f, k);
              }
              break;
            case 5:
              var g = b.return;
              try {
                Rj(b);
              } catch (k) {
                W(b, g, k);
              }
          }
        } catch (k) {
          W(b, b.return, k);
        }
        if (b === a) {
          V = null;
          break;
        }
        var h = b.sibling;
        if (null !== h) {
          h.return = b.return;
          V = h;
          break;
        }
        V = b.return;
      }
    }
    var lk = Math.ceil;
    var mk = ua.ReactCurrentDispatcher;
    var nk = ua.ReactCurrentOwner;
    var ok = ua.ReactCurrentBatchConfig;
    var K = 0;
    var Q = null;
    var Y = null;
    var Z = 0;
    var fj = 0;
    var ej = Uf(0);
    var T = 0;
    var pk = null;
    var rh = 0;
    var qk = 0;
    var rk = 0;
    var sk = null;
    var tk = null;
    var fk = 0;
    var Gj = Infinity;
    var uk = null;
    var Oi = false;
    var Pi = null;
    var Ri = null;
    var vk = false;
    var wk = null;
    var xk = 0;
    var yk = 0;
    var zk = null;
    var Ak = -1;
    var Bk = 0;
    function R() {
      return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
    }
    function yi(a) {
      if (0 === (a.mode & 1)) return 1;
      if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
      if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
      a = C;
      if (0 !== a) return a;
      a = window.event;
      a = void 0 === a ? 16 : jd(a.type);
      return a;
    }
    function gi(a, b, c, d) {
      if (50 < yk) throw yk = 0, zk = null, Error(p(185));
      Ac(a, c, d);
      if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
    }
    function Dk(a, b) {
      var c = a.callbackNode;
      wc(a, b);
      var d = uc(a, a === Q ? Z : 0);
      if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
      else if (b = d & -d, a.callbackPriority !== b) {
        null != c && bc(c);
        if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
          0 === (K & 6) && jg();
        }), c = null;
        else {
          switch (Dc(d)) {
            case 1:
              c = fc;
              break;
            case 4:
              c = gc;
              break;
            case 16:
              c = hc;
              break;
            case 536870912:
              c = jc;
              break;
            default:
              c = hc;
          }
          c = Fk(c, Gk.bind(null, a));
        }
        a.callbackPriority = b;
        a.callbackNode = c;
      }
    }
    function Gk(a, b) {
      Ak = -1;
      Bk = 0;
      if (0 !== (K & 6)) throw Error(p(327));
      var c = a.callbackNode;
      if (Hk() && a.callbackNode !== c) return null;
      var d = uc(a, a === Q ? Z : 0);
      if (0 === d) return null;
      if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
      else {
        b = d;
        var e = K;
        K |= 2;
        var f = Jk();
        if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
        do
          try {
            Lk();
            break;
          } catch (h) {
            Mk(a, h);
          }
        while (1);
        $g();
        mk.current = f;
        K = e;
        null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
      }
      if (0 !== b) {
        2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
        if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
        if (6 === b) Ck(a, d);
        else {
          e = a.current.alternate;
          if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Nk(a, f))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
          a.finishedWork = e;
          a.finishedLanes = d;
          switch (b) {
            case 0:
            case 1:
              throw Error(p(345));
            case 2:
              Pk(a, tk, uk);
              break;
            case 3:
              Ck(a, d);
              if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
                if (0 !== uc(a, 0)) break;
                e = a.suspendedLanes;
                if ((e & d) !== d) {
                  R();
                  a.pingedLanes |= a.suspendedLanes & e;
                  break;
                }
                a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
                break;
              }
              Pk(a, tk, uk);
              break;
            case 4:
              Ck(a, d);
              if ((d & 4194240) === d) break;
              b = a.eventTimes;
              for (e = -1; 0 < d; ) {
                var g = 31 - oc(d);
                f = 1 << g;
                g = b[g];
                g > e && (e = g);
                d &= ~f;
              }
              d = e;
              d = B() - d;
              d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
              if (10 < d) {
                a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
                break;
              }
              Pk(a, tk, uk);
              break;
            case 5:
              Pk(a, tk, uk);
              break;
            default:
              throw Error(p(329));
          }
        }
      }
      Dk(a, B());
      return a.callbackNode === c ? Gk.bind(null, a) : null;
    }
    function Nk(a, b) {
      var c = sk;
      a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
      a = Ik(a, b);
      2 !== a && (b = tk, tk = c, null !== b && Fj(b));
      return a;
    }
    function Fj(a) {
      null === tk ? tk = a : tk.push.apply(tk, a);
    }
    function Ok(a) {
      for (var b = a; ; ) {
        if (b.flags & 16384) {
          var c = b.updateQueue;
          if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
            var e = c[d], f = e.getSnapshot;
            e = e.value;
            try {
              if (!He(f(), e)) return false;
            } catch (g) {
              return false;
            }
          }
        }
        c = b.child;
        if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
        else {
          if (b === a) break;
          for (; null === b.sibling; ) {
            if (null === b.return || b.return === a) return true;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
      }
      return true;
    }
    function Ck(a, b) {
      b &= ~rk;
      b &= ~qk;
      a.suspendedLanes |= b;
      a.pingedLanes &= ~b;
      for (a = a.expirationTimes; 0 < b; ) {
        var c = 31 - oc(b), d = 1 << c;
        a[c] = -1;
        b &= ~d;
      }
    }
    function Ek(a) {
      if (0 !== (K & 6)) throw Error(p(327));
      Hk();
      var b = uc(a, 0);
      if (0 === (b & 1)) return Dk(a, B()), null;
      var c = Ik(a, b);
      if (0 !== a.tag && 2 === c) {
        var d = xc(a);
        0 !== d && (b = d, c = Nk(a, d));
      }
      if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
      if (6 === c) throw Error(p(345));
      a.finishedWork = a.current.alternate;
      a.finishedLanes = b;
      Pk(a, tk, uk);
      Dk(a, B());
      return null;
    }
    function Qk(a, b) {
      var c = K;
      K |= 1;
      try {
        return a(b);
      } finally {
        K = c, 0 === K && (Gj = B() + 500, fg && jg());
      }
    }
    function Rk(a) {
      null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
      var b = K;
      K |= 1;
      var c = ok.transition, d = C;
      try {
        if (ok.transition = null, C = 1, a) return a();
      } finally {
        C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
      }
    }
    function Hj() {
      fj = ej.current;
      E(ej);
    }
    function Kk(a, b) {
      a.finishedWork = null;
      a.finishedLanes = 0;
      var c = a.timeoutHandle;
      -1 !== c && (a.timeoutHandle = -1, Gf(c));
      if (null !== Y) for (c = Y.return; null !== c; ) {
        var d = c;
        wg(d);
        switch (d.tag) {
          case 1:
            d = d.type.childContextTypes;
            null !== d && void 0 !== d && $f();
            break;
          case 3:
            zh();
            E(Wf);
            E(H);
            Eh();
            break;
          case 5:
            Bh(d);
            break;
          case 4:
            zh();
            break;
          case 13:
            E(L);
            break;
          case 19:
            E(L);
            break;
          case 10:
            ah(d.type._context);
            break;
          case 22:
          case 23:
            Hj();
        }
        c = c.return;
      }
      Q = a;
      Y = a = Pg(a.current, null);
      Z = fj = b;
      T = 0;
      pk = null;
      rk = qk = rh = 0;
      tk = sk = null;
      if (null !== fh) {
        for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
          c.interleaved = null;
          var e = d.next, f = c.pending;
          if (null !== f) {
            var g = f.next;
            f.next = e;
            d.next = g;
          }
          c.pending = d;
        }
        fh = null;
      }
      return a;
    }
    function Mk(a, b) {
      do {
        var c = Y;
        try {
          $g();
          Fh.current = Rh;
          if (Ih) {
            for (var d = M.memoizedState; null !== d; ) {
              var e = d.queue;
              null !== e && (e.pending = null);
              d = d.next;
            }
            Ih = false;
          }
          Hh = 0;
          O = N = M = null;
          Jh = false;
          Kh = 0;
          nk.current = null;
          if (null === c || null === c.return) {
            T = 1;
            pk = b;
            Y = null;
            break;
          }
          a: {
            var f = a, g = c.return, h = c, k = b;
            b = Z;
            h.flags |= 32768;
            if (null !== k && "object" === typeof k && "function" === typeof k.then) {
              var l = k, m = h, q = m.tag;
              if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
                var r2 = m.alternate;
                r2 ? (m.updateQueue = r2.updateQueue, m.memoizedState = r2.memoizedState, m.lanes = r2.lanes) : (m.updateQueue = null, m.memoizedState = null);
              }
              var y = Ui(g);
              if (null !== y) {
                y.flags &= -257;
                Vi(y, g, h, f, b);
                y.mode & 1 && Si(f, l, b);
                b = y;
                k = l;
                var n = b.updateQueue;
                if (null === n) {
                  var t = /* @__PURE__ */ new Set();
                  t.add(k);
                  b.updateQueue = t;
                } else n.add(k);
                break a;
              } else {
                if (0 === (b & 1)) {
                  Si(f, l, b);
                  tj();
                  break a;
                }
                k = Error(p(426));
              }
            } else if (I && h.mode & 1) {
              var J = Ui(g);
              if (null !== J) {
                0 === (J.flags & 65536) && (J.flags |= 256);
                Vi(J, g, h, f, b);
                Jg(Ji(k, h));
                break a;
              }
            }
            f = k = Ji(k, h);
            4 !== T && (T = 2);
            null === sk ? sk = [f] : sk.push(f);
            f = g;
            do {
              switch (f.tag) {
                case 3:
                  f.flags |= 65536;
                  b &= -b;
                  f.lanes |= b;
                  var x = Ni(f, k, b);
                  ph(f, x);
                  break a;
                case 1:
                  h = k;
                  var w2 = f.type, u = f.stateNode;
                  if (0 === (f.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
                    f.flags |= 65536;
                    b &= -b;
                    f.lanes |= b;
                    var F = Qi(f, h, b);
                    ph(f, F);
                    break a;
                  }
              }
              f = f.return;
            } while (null !== f);
          }
          Sk(c);
        } catch (na) {
          b = na;
          Y === c && null !== c && (Y = c = c.return);
          continue;
        }
        break;
      } while (1);
    }
    function Jk() {
      var a = mk.current;
      mk.current = Rh;
      return null === a ? Rh : a;
    }
    function tj() {
      if (0 === T || 3 === T || 2 === T) T = 4;
      null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
    }
    function Ik(a, b) {
      var c = K;
      K |= 2;
      var d = Jk();
      if (Q !== a || Z !== b) uk = null, Kk(a, b);
      do
        try {
          Tk();
          break;
        } catch (e) {
          Mk(a, e);
        }
      while (1);
      $g();
      K = c;
      mk.current = d;
      if (null !== Y) throw Error(p(261));
      Q = null;
      Z = 0;
      return T;
    }
    function Tk() {
      for (; null !== Y; ) Uk(Y);
    }
    function Lk() {
      for (; null !== Y && !cc(); ) Uk(Y);
    }
    function Uk(a) {
      var b = Vk(a.alternate, a, fj);
      a.memoizedProps = a.pendingProps;
      null === b ? Sk(a) : Y = b;
      nk.current = null;
    }
    function Sk(a) {
      var b = a;
      do {
        var c = b.alternate;
        a = b.return;
        if (0 === (b.flags & 32768)) {
          if (c = Ej(c, b, fj), null !== c) {
            Y = c;
            return;
          }
        } else {
          c = Ij(c, b);
          if (null !== c) {
            c.flags &= 32767;
            Y = c;
            return;
          }
          if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
          else {
            T = 6;
            Y = null;
            return;
          }
        }
        b = b.sibling;
        if (null !== b) {
          Y = b;
          return;
        }
        Y = b = a;
      } while (null !== b);
      0 === T && (T = 5);
    }
    function Pk(a, b, c) {
      var d = C, e = ok.transition;
      try {
        ok.transition = null, C = 1, Wk(a, b, c, d);
      } finally {
        ok.transition = e, C = d;
      }
      return null;
    }
    function Wk(a, b, c, d) {
      do
        Hk();
      while (null !== wk);
      if (0 !== (K & 6)) throw Error(p(327));
      c = a.finishedWork;
      var e = a.finishedLanes;
      if (null === c) return null;
      a.finishedWork = null;
      a.finishedLanes = 0;
      if (c === a.current) throw Error(p(177));
      a.callbackNode = null;
      a.callbackPriority = 0;
      var f = c.lanes | c.childLanes;
      Bc(a, f);
      a === Q && (Y = Q = null, Z = 0);
      0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function() {
        Hk();
        return null;
      }));
      f = 0 !== (c.flags & 15990);
      if (0 !== (c.subtreeFlags & 15990) || f) {
        f = ok.transition;
        ok.transition = null;
        var g = C;
        C = 1;
        var h = K;
        K |= 4;
        nk.current = null;
        Oj(a, c);
        dk(c, a);
        Oe(Df);
        dd = !!Cf;
        Df = Cf = null;
        a.current = c;
        hk(c, a, e);
        dc();
        K = h;
        C = g;
        ok.transition = f;
      } else a.current = c;
      vk && (vk = false, wk = a, xk = e);
      f = a.pendingLanes;
      0 === f && (Ri = null);
      mc(c.stateNode, d);
      Dk(a, B());
      if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
      if (Oi) throw Oi = false, a = Pi, Pi = null, a;
      0 !== (xk & 1) && 0 !== a.tag && Hk();
      f = a.pendingLanes;
      0 !== (f & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
      jg();
      return null;
    }
    function Hk() {
      if (null !== wk) {
        var a = Dc(xk), b = ok.transition, c = C;
        try {
          ok.transition = null;
          C = 16 > a ? 16 : a;
          if (null === wk) var d = false;
          else {
            a = wk;
            wk = null;
            xk = 0;
            if (0 !== (K & 6)) throw Error(p(331));
            var e = K;
            K |= 4;
            for (V = a.current; null !== V; ) {
              var f = V, g = f.child;
              if (0 !== (V.flags & 16)) {
                var h = f.deletions;
                if (null !== h) {
                  for (var k = 0; k < h.length; k++) {
                    var l = h[k];
                    for (V = l; null !== V; ) {
                      var m = V;
                      switch (m.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Pj(8, m, f);
                      }
                      var q = m.child;
                      if (null !== q) q.return = m, V = q;
                      else for (; null !== V; ) {
                        m = V;
                        var r2 = m.sibling, y = m.return;
                        Sj(m);
                        if (m === l) {
                          V = null;
                          break;
                        }
                        if (null !== r2) {
                          r2.return = y;
                          V = r2;
                          break;
                        }
                        V = y;
                      }
                    }
                  }
                  var n = f.alternate;
                  if (null !== n) {
                    var t = n.child;
                    if (null !== t) {
                      n.child = null;
                      do {
                        var J = t.sibling;
                        t.sibling = null;
                        t = J;
                      } while (null !== t);
                    }
                  }
                  V = f;
                }
              }
              if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g;
              else b: for (; null !== V; ) {
                f = V;
                if (0 !== (f.flags & 2048)) switch (f.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Pj(9, f, f.return);
                }
                var x = f.sibling;
                if (null !== x) {
                  x.return = f.return;
                  V = x;
                  break b;
                }
                V = f.return;
              }
            }
            var w2 = a.current;
            for (V = w2; null !== V; ) {
              g = V;
              var u = g.child;
              if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;
              else b: for (g = w2; null !== V; ) {
                h = V;
                if (0 !== (h.flags & 2048)) try {
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, h);
                  }
                } catch (na) {
                  W(h, h.return, na);
                }
                if (h === g) {
                  V = null;
                  break b;
                }
                var F = h.sibling;
                if (null !== F) {
                  F.return = h.return;
                  V = F;
                  break b;
                }
                V = h.return;
              }
            }
            K = e;
            jg();
            if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
              lc.onPostCommitFiberRoot(kc, a);
            } catch (na) {
            }
            d = true;
          }
          return d;
        } finally {
          C = c, ok.transition = b;
        }
      }
      return false;
    }
    function Xk(a, b, c) {
      b = Ji(c, b);
      b = Ni(a, b, 1);
      a = nh(a, b, 1);
      b = R();
      null !== a && (Ac(a, 1, b), Dk(a, b));
    }
    function W(a, b, c) {
      if (3 === a.tag) Xk(a, a, c);
      else for (; null !== b; ) {
        if (3 === b.tag) {
          Xk(b, a, c);
          break;
        } else if (1 === b.tag) {
          var d = b.stateNode;
          if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
            a = Ji(c, a);
            a = Qi(b, a, 1);
            b = nh(b, a, 1);
            a = R();
            null !== b && (Ac(b, 1, a), Dk(b, a));
            break;
          }
        }
        b = b.return;
      }
    }
    function Ti(a, b, c) {
      var d = a.pingCache;
      null !== d && d.delete(b);
      b = R();
      a.pingedLanes |= a.suspendedLanes & c;
      Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
      Dk(a, b);
    }
    function Yk(a, b) {
      0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
      var c = R();
      a = ih(a, b);
      null !== a && (Ac(a, b, c), Dk(a, c));
    }
    function uj(a) {
      var b = a.memoizedState, c = 0;
      null !== b && (c = b.retryLane);
      Yk(a, c);
    }
    function bk(a, b) {
      var c = 0;
      switch (a.tag) {
        case 13:
          var d = a.stateNode;
          var e = a.memoizedState;
          null !== e && (c = e.retryLane);
          break;
        case 19:
          d = a.stateNode;
          break;
        default:
          throw Error(p(314));
      }
      null !== d && d.delete(b);
      Yk(a, c);
    }
    var Vk;
    Vk = function(a, b, c) {
      if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = true;
      else {
        if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = false, yj(a, b, c);
        dh = 0 !== (a.flags & 131072) ? true : false;
      }
      else dh = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
      b.lanes = 0;
      switch (b.tag) {
        case 2:
          var d = b.type;
          ij(a, b);
          a = b.pendingProps;
          var e = Yf(b, H.current);
          ch(b, c);
          e = Nh(null, b, d, a, e, c);
          var f = Sh();
          b.flags |= 1;
          "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = true, cg(b)) : f = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, true, f, c)) : (b.tag = 0, I && f && vg(b), Xi(null, b, e, c), b = b.child);
          return b;
        case 16:
          d = b.elementType;
          a: {
            ij(a, b);
            a = b.pendingProps;
            e = d._init;
            d = e(d._payload);
            b.type = d;
            e = b.tag = Zk(d);
            a = Ci(d, a);
            switch (e) {
              case 0:
                b = cj(null, b, d, a, c);
                break a;
              case 1:
                b = hj(null, b, d, a, c);
                break a;
              case 11:
                b = Yi(null, b, d, a, c);
                break a;
              case 14:
                b = $i(null, b, d, Ci(d.type, a), c);
                break a;
            }
            throw Error(p(
              306,
              d,
              ""
            ));
          }
          return b;
        case 0:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
        case 1:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
        case 3:
          a: {
            kj(b);
            if (null === a) throw Error(p(387));
            d = b.pendingProps;
            f = b.memoizedState;
            e = f.element;
            lh(a, b);
            qh(b, d, null, c);
            var g = b.memoizedState;
            d = g.element;
            if (f.isDehydrated) if (f = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
              e = Ji(Error(p(423)), b);
              b = lj(a, b, d, c, e);
              break a;
            } else if (d !== e) {
              e = Ji(Error(p(424)), b);
              b = lj(a, b, d, c, e);
              break a;
            } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Vg(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
            else {
              Ig();
              if (d === e) {
                b = Zi(a, b, c);
                break a;
              }
              Xi(a, b, d, c);
            }
            b = b.child;
          }
          return b;
        case 5:
          return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
        case 6:
          return null === a && Eg(b), null;
        case 13:
          return oj(a, b, c);
        case 4:
          return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
        case 11:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
        case 7:
          return Xi(a, b, b.pendingProps, c), b.child;
        case 8:
          return Xi(a, b, b.pendingProps.children, c), b.child;
        case 12:
          return Xi(a, b, b.pendingProps.children, c), b.child;
        case 10:
          a: {
            d = b.type._context;
            e = b.pendingProps;
            f = b.memoizedProps;
            g = e.value;
            G(Wg, d._currentValue);
            d._currentValue = g;
            if (null !== f) if (He(f.value, g)) {
              if (f.children === e.children && !Wf.current) {
                b = Zi(a, b, c);
                break a;
              }
            } else for (f = b.child, null !== f && (f.return = b); null !== f; ) {
              var h = f.dependencies;
              if (null !== h) {
                g = f.child;
                for (var k = h.firstContext; null !== k; ) {
                  if (k.context === d) {
                    if (1 === f.tag) {
                      k = mh(-1, c & -c);
                      k.tag = 2;
                      var l = f.updateQueue;
                      if (null !== l) {
                        l = l.shared;
                        var m = l.pending;
                        null === m ? k.next = k : (k.next = m.next, m.next = k);
                        l.pending = k;
                      }
                    }
                    f.lanes |= c;
                    k = f.alternate;
                    null !== k && (k.lanes |= c);
                    bh(
                      f.return,
                      c,
                      b
                    );
                    h.lanes |= c;
                    break;
                  }
                  k = k.next;
                }
              } else if (10 === f.tag) g = f.type === b.type ? null : f.child;
              else if (18 === f.tag) {
                g = f.return;
                if (null === g) throw Error(p(341));
                g.lanes |= c;
                h = g.alternate;
                null !== h && (h.lanes |= c);
                bh(g, c, b);
                g = f.sibling;
              } else g = f.child;
              if (null !== g) g.return = f;
              else for (g = f; null !== g; ) {
                if (g === b) {
                  g = null;
                  break;
                }
                f = g.sibling;
                if (null !== f) {
                  f.return = g.return;
                  g = f;
                  break;
                }
                g = g.return;
              }
              f = g;
            }
            Xi(a, b, e.children, c);
            b = b.child;
          }
          return b;
        case 9:
          return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
        case 14:
          return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
        case 15:
          return bj(a, b, b.type, b.pendingProps, c);
        case 17:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, true, a, c);
        case 19:
          return xj(a, b, c);
        case 22:
          return dj(a, b, c);
      }
      throw Error(p(156, b.tag));
    };
    function Fk(a, b) {
      return ac(a, b);
    }
    function $k(a, b, c, d) {
      this.tag = a;
      this.key = c;
      this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
      this.index = 0;
      this.ref = null;
      this.pendingProps = b;
      this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
      this.mode = d;
      this.subtreeFlags = this.flags = 0;
      this.deletions = null;
      this.childLanes = this.lanes = 0;
      this.alternate = null;
    }
    function Bg(a, b, c, d) {
      return new $k(a, b, c, d);
    }
    function aj(a) {
      a = a.prototype;
      return !(!a || !a.isReactComponent);
    }
    function Zk(a) {
      if ("function" === typeof a) return aj(a) ? 1 : 0;
      if (void 0 !== a && null !== a) {
        a = a.$$typeof;
        if (a === Da) return 11;
        if (a === Ga) return 14;
      }
      return 2;
    }
    function Pg(a, b) {
      var c = a.alternate;
      null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
      c.flags = a.flags & 14680064;
      c.childLanes = a.childLanes;
      c.lanes = a.lanes;
      c.child = a.child;
      c.memoizedProps = a.memoizedProps;
      c.memoizedState = a.memoizedState;
      c.updateQueue = a.updateQueue;
      b = a.dependencies;
      c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
      c.sibling = a.sibling;
      c.index = a.index;
      c.ref = a.ref;
      return c;
    }
    function Rg(a, b, c, d, e, f) {
      var g = 2;
      d = a;
      if ("function" === typeof a) aj(a) && (g = 1);
      else if ("string" === typeof a) g = 5;
      else a: switch (a) {
        case ya:
          return Tg(c.children, e, f, b);
        case za:
          g = 8;
          e |= 8;
          break;
        case Aa:
          return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
        case Ea:
          return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
        case Fa:
          return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
        case Ia:
          return pj(c, e, f, b);
        default:
          if ("object" === typeof a && null !== a) switch (a.$$typeof) {
            case Ba:
              g = 10;
              break a;
            case Ca:
              g = 9;
              break a;
            case Da:
              g = 11;
              break a;
            case Ga:
              g = 14;
              break a;
            case Ha:
              g = 16;
              d = null;
              break a;
          }
          throw Error(p(130, null == a ? a : typeof a, ""));
      }
      b = Bg(g, c, b, e);
      b.elementType = a;
      b.type = d;
      b.lanes = f;
      return b;
    }
    function Tg(a, b, c, d) {
      a = Bg(7, a, d, b);
      a.lanes = c;
      return a;
    }
    function pj(a, b, c, d) {
      a = Bg(22, a, d, b);
      a.elementType = Ia;
      a.lanes = c;
      a.stateNode = { isHidden: false };
      return a;
    }
    function Qg(a, b, c) {
      a = Bg(6, a, null, b);
      a.lanes = c;
      return a;
    }
    function Sg(a, b, c) {
      b = Bg(4, null !== a.children ? a.children : [], a.key, b);
      b.lanes = c;
      b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
      return b;
    }
    function al(a, b, c, d, e) {
      this.tag = b;
      this.containerInfo = a;
      this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
      this.timeoutHandle = -1;
      this.callbackNode = this.pendingContext = this.context = null;
      this.callbackPriority = 0;
      this.eventTimes = zc(0);
      this.expirationTimes = zc(-1);
      this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
      this.entanglements = zc(0);
      this.identifierPrefix = d;
      this.onRecoverableError = e;
      this.mutableSourceEagerHydrationData = null;
    }
    function bl(a, b, c, d, e, f, g, h, k) {
      a = new al(a, b, c, h, k);
      1 === b ? (b = 1, true === f && (b |= 8)) : b = 0;
      f = Bg(3, null, null, b);
      a.current = f;
      f.stateNode = a;
      f.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
      kh(f);
      return a;
    }
    function cl(a, b, c) {
      var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
    }
    function dl(a) {
      if (!a) return Vf;
      a = a._reactInternals;
      a: {
        if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
        var b = a;
        do {
          switch (b.tag) {
            case 3:
              b = b.stateNode.context;
              break a;
            case 1:
              if (Zf(b.type)) {
                b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                break a;
              }
          }
          b = b.return;
        } while (null !== b);
        throw Error(p(171));
      }
      if (1 === a.tag) {
        var c = a.type;
        if (Zf(c)) return bg(a, c, b);
      }
      return b;
    }
    function el(a, b, c, d, e, f, g, h, k) {
      a = bl(c, d, true, a, e, f, g, h, k);
      a.context = dl(null);
      c = a.current;
      d = R();
      e = yi(c);
      f = mh(d, e);
      f.callback = void 0 !== b && null !== b ? b : null;
      nh(c, f, e);
      a.current.lanes = e;
      Ac(a, e, d);
      Dk(a, d);
      return a;
    }
    function fl(a, b, c, d) {
      var e = b.current, f = R(), g = yi(e);
      c = dl(c);
      null === b.context ? b.context = c : b.pendingContext = c;
      b = mh(f, g);
      b.payload = { element: a };
      d = void 0 === d ? null : d;
      null !== d && (b.callback = d);
      a = nh(e, b, g);
      null !== a && (gi(a, e, g, f), oh(a, e, g));
      return g;
    }
    function gl(a) {
      a = a.current;
      if (!a.child) return null;
      switch (a.child.tag) {
        case 5:
          return a.child.stateNode;
        default:
          return a.child.stateNode;
      }
    }
    function hl(a, b) {
      a = a.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        var c = a.retryLane;
        a.retryLane = 0 !== c && c < b ? c : b;
      }
    }
    function il(a, b) {
      hl(a, b);
      (a = a.alternate) && hl(a, b);
    }
    function jl() {
      return null;
    }
    var kl = "function" === typeof reportError ? reportError : function(a) {
      console.error(a);
    };
    function ll(a) {
      this._internalRoot = a;
    }
    ml.prototype.render = ll.prototype.render = function(a) {
      var b = this._internalRoot;
      if (null === b) throw Error(p(409));
      fl(a, b, null, null);
    };
    ml.prototype.unmount = ll.prototype.unmount = function() {
      var a = this._internalRoot;
      if (null !== a) {
        this._internalRoot = null;
        var b = a.containerInfo;
        Rk(function() {
          fl(null, a, null, null);
        });
        b[uf] = null;
      }
    };
    function ml(a) {
      this._internalRoot = a;
    }
    ml.prototype.unstable_scheduleHydration = function(a) {
      if (a) {
        var b = Hc();
        a = { blockedOn: null, target: a, priority: b };
        for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++) ;
        Qc.splice(c, 0, a);
        0 === c && Vc(a);
      }
    };
    function nl(a) {
      return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
    }
    function ol(a) {
      return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
    }
    function pl() {
    }
    function ql(a, b, c, d, e) {
      if (e) {
        if ("function" === typeof d) {
          var f = d;
          d = function() {
            var a2 = gl(g);
            f.call(a2);
          };
        }
        var g = el(b, d, a, 0, null, false, false, "", pl);
        a._reactRootContainer = g;
        a[uf] = g.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        Rk();
        return g;
      }
      for (; e = a.lastChild; ) a.removeChild(e);
      if ("function" === typeof d) {
        var h = d;
        d = function() {
          var a2 = gl(k);
          h.call(a2);
        };
      }
      var k = bl(a, 0, false, null, null, false, false, "", pl);
      a._reactRootContainer = k;
      a[uf] = k.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      Rk(function() {
        fl(b, k, c, d);
      });
      return k;
    }
    function rl(a, b, c, d, e) {
      var f = c._reactRootContainer;
      if (f) {
        var g = f;
        if ("function" === typeof e) {
          var h = e;
          e = function() {
            var a2 = gl(g);
            h.call(a2);
          };
        }
        fl(b, g, a, e);
      } else g = ql(c, b, a, e, d);
      return gl(g);
    }
    Ec = function(a) {
      switch (a.tag) {
        case 3:
          var b = a.stateNode;
          if (b.current.memoizedState.isDehydrated) {
            var c = tc(b.pendingLanes);
            0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
          }
          break;
        case 13:
          Rk(function() {
            var b2 = ih(a, 1);
            if (null !== b2) {
              var c2 = R();
              gi(b2, a, 1, c2);
            }
          }), il(a, 1);
      }
    };
    Fc = function(a) {
      if (13 === a.tag) {
        var b = ih(a, 134217728);
        if (null !== b) {
          var c = R();
          gi(b, a, 134217728, c);
        }
        il(a, 134217728);
      }
    };
    Gc = function(a) {
      if (13 === a.tag) {
        var b = yi(a), c = ih(a, b);
        if (null !== c) {
          var d = R();
          gi(c, a, b, d);
        }
        il(a, b);
      }
    };
    Hc = function() {
      return C;
    };
    Ic = function(a, b) {
      var c = C;
      try {
        return C = a, b();
      } finally {
        C = c;
      }
    };
    yb = function(a, b, c) {
      switch (b) {
        case "input":
          bb(a, c);
          b = c.name;
          if ("radio" === c.type && null != b) {
            for (c = a; c.parentNode; ) c = c.parentNode;
            c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
            for (b = 0; b < c.length; b++) {
              var d = c[b];
              if (d !== a && d.form === a.form) {
                var e = Db(d);
                if (!e) throw Error(p(90));
                Wa(d);
                bb(d, e);
              }
            }
          }
          break;
        case "textarea":
          ib(a, c);
          break;
        case "select":
          b = c.value, null != b && fb(a, !!c.multiple, b, false);
      }
    };
    Gb = Qk;
    Hb = Rk;
    var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] };
    var tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
    var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
      a = Zb(a);
      return null === a ? null : a.stateNode;
    }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!vl.isDisabled && vl.supportsFiber) try {
        kc = vl.inject(ul), lc = vl;
      } catch (a) {
      }
    }
    var vl;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
    exports.createPortal = function(a, b) {
      var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!nl(b)) throw Error(p(200));
      return cl(a, b, null, c);
    };
    exports.createRoot = function(a, b) {
      if (!nl(a)) throw Error(p(299));
      var c = false, d = "", e = kl;
      null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
      b = bl(a, 1, false, null, null, c, false, d, e);
      a[uf] = b.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      return new ll(b);
    };
    exports.findDOMNode = function(a) {
      if (null == a) return null;
      if (1 === a.nodeType) return a;
      var b = a._reactInternals;
      if (void 0 === b) {
        if ("function" === typeof a.render) throw Error(p(188));
        a = Object.keys(a).join(",");
        throw Error(p(268, a));
      }
      a = Zb(b);
      a = null === a ? null : a.stateNode;
      return a;
    };
    exports.flushSync = function(a) {
      return Rk(a);
    };
    exports.hydrate = function(a, b, c) {
      if (!ol(b)) throw Error(p(200));
      return rl(null, a, b, true, c);
    };
    exports.hydrateRoot = function(a, b, c) {
      if (!nl(a)) throw Error(p(405));
      var d = null != c && c.hydratedSources || null, e = false, f = "", g = kl;
      null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
      b = el(b, null, a, 1, null != c ? c : null, e, false, f, g);
      a[uf] = b.current;
      sf(a);
      if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
        c,
        e
      );
      return new ml(b);
    };
    exports.render = function(a, b, c) {
      if (!ol(b)) throw Error(p(200));
      return rl(null, a, b, false, c);
    };
    exports.unmountComponentAtNode = function(a) {
      if (!ol(a)) throw Error(p(40));
      return a._reactRootContainer ? (Rk(function() {
        rl(null, null, a, false, function() {
          a._reactRootContainer = null;
          a[uf] = null;
        });
      }), true) : false;
    };
    exports.unstable_batchedUpdates = Qk;
    exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
      if (!ol(c)) throw Error(p(200));
      if (null == a || void 0 === a._reactInternals) throw Error(p(38));
      return rl(a, b, c, false, d);
    };
    exports.version = "18.3.1-next-f1338f8080-20240426";
  }
});

// node_modules/react-dom/index.js
var require_react_dom = __commonJS({
  "node_modules/react-dom/index.js"(exports, module) {
    "use strict";
    function checkDCE() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
        return;
      }
      if (false) {
        throw new Error("^_^");
      }
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        console.error(err);
      }
    }
    if (true) {
      checkDCE();
      module.exports = require_react_dom_production_min();
    } else {
      module.exports = null;
    }
  }
});

// node_modules/react-dom/client.js
var require_client = __commonJS({
  "node_modules/react-dom/client.js"(exports) {
    "use strict";
    var m = require_react_dom();
    if (true) {
      exports.createRoot = m.createRoot;
      exports.hydrateRoot = m.hydrateRoot;
    } else {
      i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      exports.createRoot = function(c, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.createRoot(c, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
      exports.hydrateRoot = function(c, h, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.hydrateRoot(c, h, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
    }
    var i;
  }
});

// node_modules/react-is/cjs/react-is.production.min.js
var require_react_is_production_min = __commonJS({
  "node_modules/react-is/cjs/react-is.production.min.js"(exports) {
    "use strict";
    var b = "function" === typeof Symbol && Symbol.for;
    var c = b ? Symbol.for("react.element") : 60103;
    var d = b ? Symbol.for("react.portal") : 60106;
    var e = b ? Symbol.for("react.fragment") : 60107;
    var f = b ? Symbol.for("react.strict_mode") : 60108;
    var g = b ? Symbol.for("react.profiler") : 60114;
    var h = b ? Symbol.for("react.provider") : 60109;
    var k = b ? Symbol.for("react.context") : 60110;
    var l = b ? Symbol.for("react.async_mode") : 60111;
    var m = b ? Symbol.for("react.concurrent_mode") : 60111;
    var n = b ? Symbol.for("react.forward_ref") : 60112;
    var p = b ? Symbol.for("react.suspense") : 60113;
    var q = b ? Symbol.for("react.suspense_list") : 60120;
    var r2 = b ? Symbol.for("react.memo") : 60115;
    var t = b ? Symbol.for("react.lazy") : 60116;
    var v = b ? Symbol.for("react.block") : 60121;
    var w2 = b ? Symbol.for("react.fundamental") : 60117;
    var x = b ? Symbol.for("react.responder") : 60118;
    var y = b ? Symbol.for("react.scope") : 60119;
    function z(a) {
      if ("object" === typeof a && null !== a) {
        var u = a.$$typeof;
        switch (u) {
          case c:
            switch (a = a.type, a) {
              case l:
              case m:
              case e:
              case g:
              case f:
              case p:
                return a;
              default:
                switch (a = a && a.$$typeof, a) {
                  case k:
                  case n:
                  case t:
                  case r2:
                  case h:
                    return a;
                  default:
                    return u;
                }
            }
          case d:
            return u;
        }
      }
    }
    function A(a) {
      return z(a) === m;
    }
    exports.AsyncMode = l;
    exports.ConcurrentMode = m;
    exports.ContextConsumer = k;
    exports.ContextProvider = h;
    exports.Element = c;
    exports.ForwardRef = n;
    exports.Fragment = e;
    exports.Lazy = t;
    exports.Memo = r2;
    exports.Portal = d;
    exports.Profiler = g;
    exports.StrictMode = f;
    exports.Suspense = p;
    exports.isAsyncMode = function(a) {
      return A(a) || z(a) === l;
    };
    exports.isConcurrentMode = A;
    exports.isContextConsumer = function(a) {
      return z(a) === k;
    };
    exports.isContextProvider = function(a) {
      return z(a) === h;
    };
    exports.isElement = function(a) {
      return "object" === typeof a && null !== a && a.$$typeof === c;
    };
    exports.isForwardRef = function(a) {
      return z(a) === n;
    };
    exports.isFragment = function(a) {
      return z(a) === e;
    };
    exports.isLazy = function(a) {
      return z(a) === t;
    };
    exports.isMemo = function(a) {
      return z(a) === r2;
    };
    exports.isPortal = function(a) {
      return z(a) === d;
    };
    exports.isProfiler = function(a) {
      return z(a) === g;
    };
    exports.isStrictMode = function(a) {
      return z(a) === f;
    };
    exports.isSuspense = function(a) {
      return z(a) === p;
    };
    exports.isValidElementType = function(a) {
      return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r2 || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w2 || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
    };
    exports.typeOf = z;
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (true) {
      module.exports = require_react_is_production_min();
    } else {
      module.exports = null;
    }
  }
});

// node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = __commonJS({
  "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module) {
    "use strict";
    var reactIs = require_react_is();
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      "$$typeof": true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      "$$typeof": true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
          }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty(targetComponent, key, descriptor);
            } catch (e) {
            }
          }
        }
      }
      return targetComponent;
    }
    module.exports = hoistNonReactStatics;
  }
});

// node_modules/react-simple-code-editor/lib/index.js
var require_lib = __commonJS({
  "node_modules/react-simple-code-editor/lib/index.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __rest = exports && exports.__rest || function(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var React7 = __importStar(require_react());
    var KEYCODE_Y = 89;
    var KEYCODE_Z = 90;
    var KEYCODE_M = 77;
    var KEYCODE_PARENS = 57;
    var KEYCODE_BRACKETS = 219;
    var KEYCODE_QUOTE = 222;
    var KEYCODE_BACK_QUOTE = 192;
    var HISTORY_LIMIT = 100;
    var HISTORY_TIME_GAP = 3e3;
    var isWindows = typeof window !== "undefined" && "navigator" in window && /Win/i.test(navigator.platform);
    var isMacLike = typeof window !== "undefined" && "navigator" in window && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
    var className = "npm__react-simple-code-editor__textarea";
    var cssText = (
      /* CSS */
      "\n/**\n * Reset the text fill color so that placeholder is visible\n */\n.".concat(className, ":empty {\n  -webkit-text-fill-color: inherit !important;\n}\n\n/**\n * Hack to apply on some CSS on IE10 and IE11\n */\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /**\n    * IE doesn't support '-webkit-text-fill-color'\n    * So we use 'color: transparent' to make the text transparent on IE\n    * Unlike other browsers, it doesn't affect caret color in IE\n    */\n  .").concat(className, " {\n    color: transparent !important;\n  }\n\n  .").concat(className, "::selection {\n    background-color: #accef7 !important;\n    color: transparent !important;\n  }\n}\n")
    );
    var Editor2 = React7.forwardRef(function Editor3(props, ref) {
      var autoFocus = props.autoFocus, disabled = props.disabled, form = props.form, highlight = props.highlight, _a = props.ignoreTabKey, ignoreTabKey = _a === void 0 ? false : _a, _b = props.insertSpaces, insertSpaces = _b === void 0 ? true : _b, maxLength = props.maxLength, minLength = props.minLength, name = props.name, onBlur = props.onBlur, onClick = props.onClick, onFocus2 = props.onFocus, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, onValueChange = props.onValueChange, _c = props.padding, padding = _c === void 0 ? 0 : _c, placeholder = props.placeholder, preClassName = props.preClassName, readOnly = props.readOnly, required = props.required, style = props.style, _d = props.tabSize, tabSize = _d === void 0 ? 2 : _d, textareaClassName = props.textareaClassName, textareaId = props.textareaId, value = props.value, rest = __rest(props, ["autoFocus", "disabled", "form", "highlight", "ignoreTabKey", "insertSpaces", "maxLength", "minLength", "name", "onBlur", "onClick", "onFocus", "onKeyDown", "onKeyUp", "onValueChange", "padding", "placeholder", "preClassName", "readOnly", "required", "style", "tabSize", "textareaClassName", "textareaId", "value"]);
      var historyRef = React7.useRef({
        stack: [],
        offset: -1
      });
      var inputRef = React7.useRef(null);
      var _e = React7.useState(true), capture = _e[0], setCapture = _e[1];
      var contentStyle = {
        paddingTop: typeof padding === "object" ? padding.top : padding,
        paddingRight: typeof padding === "object" ? padding.right : padding,
        paddingBottom: typeof padding === "object" ? padding.bottom : padding,
        paddingLeft: typeof padding === "object" ? padding.left : padding
      };
      var highlighted = highlight(value);
      var getLines = function(text, position2) {
        return text.substring(0, position2).split("\n");
      };
      var recordChange = React7.useCallback(function(record, overwrite) {
        var _a2, _b2, _c2;
        if (overwrite === void 0) {
          overwrite = false;
        }
        var _d2 = historyRef.current, stack = _d2.stack, offset2 = _d2.offset;
        if (stack.length && offset2 > -1) {
          historyRef.current.stack = stack.slice(0, offset2 + 1);
          var count = historyRef.current.stack.length;
          if (count > HISTORY_LIMIT) {
            var extras = count - HISTORY_LIMIT;
            historyRef.current.stack = stack.slice(extras, count);
            historyRef.current.offset = Math.max(historyRef.current.offset - extras, 0);
          }
        }
        var timestamp = Date.now();
        if (overwrite) {
          var last = historyRef.current.stack[historyRef.current.offset];
          if (last && timestamp - last.timestamp < HISTORY_TIME_GAP) {
            var re = /[^a-z0-9]([a-z0-9]+)$/i;
            var previous = (_a2 = getLines(last.value, last.selectionStart).pop()) === null || _a2 === void 0 ? void 0 : _a2.match(re);
            var current = (_b2 = getLines(record.value, record.selectionStart).pop()) === null || _b2 === void 0 ? void 0 : _b2.match(re);
            if ((previous === null || previous === void 0 ? void 0 : previous[1]) && ((_c2 = current === null || current === void 0 ? void 0 : current[1]) === null || _c2 === void 0 ? void 0 : _c2.startsWith(previous[1]))) {
              historyRef.current.stack[historyRef.current.offset] = __assign(__assign({}, record), { timestamp });
              return;
            }
          }
        }
        historyRef.current.stack.push(__assign(__assign({}, record), { timestamp }));
        historyRef.current.offset++;
      }, []);
      var recordCurrentState = React7.useCallback(function() {
        var input = inputRef.current;
        if (!input)
          return;
        var value2 = input.value, selectionStart = input.selectionStart, selectionEnd = input.selectionEnd;
        recordChange({
          value: value2,
          selectionStart,
          selectionEnd
        });
      }, [recordChange]);
      var updateInput = function(record) {
        var input = inputRef.current;
        if (!input)
          return;
        input.value = record.value;
        input.selectionStart = record.selectionStart;
        input.selectionEnd = record.selectionEnd;
        onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(record.value);
      };
      var applyEdits = function(record) {
        var input = inputRef.current;
        var last = historyRef.current.stack[historyRef.current.offset];
        if (last && input) {
          historyRef.current.stack[historyRef.current.offset] = __assign(__assign({}, last), { selectionStart: input.selectionStart, selectionEnd: input.selectionEnd });
        }
        recordChange(record);
        updateInput(record);
      };
      var undoEdit = function() {
        var _a2 = historyRef.current, stack = _a2.stack, offset2 = _a2.offset;
        var record = stack[offset2 - 1];
        if (record) {
          updateInput(record);
          historyRef.current.offset = Math.max(offset2 - 1, 0);
        }
      };
      var redoEdit = function() {
        var _a2 = historyRef.current, stack = _a2.stack, offset2 = _a2.offset;
        var record = stack[offset2 + 1];
        if (record) {
          updateInput(record);
          historyRef.current.offset = Math.min(offset2 + 1, stack.length - 1);
        }
      };
      var handleKeyDown = function(e) {
        if (onKeyDown) {
          onKeyDown(e);
          if (e.defaultPrevented) {
            return;
          }
        }
        if (e.key === "Escape") {
          e.currentTarget.blur();
        }
        var _a2 = e.currentTarget, value2 = _a2.value, selectionStart = _a2.selectionStart, selectionEnd = _a2.selectionEnd;
        var tabCharacter = (insertSpaces ? " " : "	").repeat(tabSize);
        if (e.key === "Tab" && !ignoreTabKey && capture) {
          e.preventDefault();
          if (e.shiftKey) {
            var linesBeforeCaret = getLines(value2, selectionStart);
            var startLine_1 = linesBeforeCaret.length - 1;
            var endLine_1 = getLines(value2, selectionEnd).length - 1;
            var nextValue = value2.split("\n").map(function(line3, i) {
              if (i >= startLine_1 && i <= endLine_1 && line3.startsWith(tabCharacter)) {
                return line3.substring(tabCharacter.length);
              }
              return line3;
            }).join("\n");
            if (value2 !== nextValue) {
              var startLineText = linesBeforeCaret[startLine_1];
              applyEdits({
                value: nextValue,
                // Move the start cursor if first line in selection was modified
                // It was modified only if it started with a tab
                selectionStart: (startLineText === null || startLineText === void 0 ? void 0 : startLineText.startsWith(tabCharacter)) ? selectionStart - tabCharacter.length : selectionStart,
                // Move the end cursor by total number of characters removed
                selectionEnd: selectionEnd - (value2.length - nextValue.length)
              });
            }
          } else if (selectionStart !== selectionEnd) {
            var linesBeforeCaret = getLines(value2, selectionStart);
            var startLine_2 = linesBeforeCaret.length - 1;
            var endLine_2 = getLines(value2, selectionEnd).length - 1;
            var startLineText = linesBeforeCaret[startLine_2];
            applyEdits({
              value: value2.split("\n").map(function(line3, i) {
                if (i >= startLine_2 && i <= endLine_2) {
                  return tabCharacter + line3;
                }
                return line3;
              }).join("\n"),
              // Move the start cursor by number of characters added in first line of selection
              // Don't move it if it there was no text before cursor
              selectionStart: startLineText && /\S/.test(startLineText) ? selectionStart + tabCharacter.length : selectionStart,
              // Move the end cursor by total number of characters added
              selectionEnd: selectionEnd + tabCharacter.length * (endLine_2 - startLine_2 + 1)
            });
          } else {
            var updatedSelection = selectionStart + tabCharacter.length;
            applyEdits({
              // Insert tab character at caret
              value: value2.substring(0, selectionStart) + tabCharacter + value2.substring(selectionEnd),
              // Update caret position
              selectionStart: updatedSelection,
              selectionEnd: updatedSelection
            });
          }
        } else if (e.key === "Backspace") {
          var hasSelection = selectionStart !== selectionEnd;
          var textBeforeCaret = value2.substring(0, selectionStart);
          if (textBeforeCaret.endsWith(tabCharacter) && !hasSelection) {
            e.preventDefault();
            var updatedSelection = selectionStart - tabCharacter.length;
            applyEdits({
              // Remove tab character at caret
              value: value2.substring(0, selectionStart - tabCharacter.length) + value2.substring(selectionEnd),
              // Update caret position
              selectionStart: updatedSelection,
              selectionEnd: updatedSelection
            });
          }
        } else if (e.key === "Enter") {
          if (selectionStart === selectionEnd) {
            var line2 = getLines(value2, selectionStart).pop();
            var matches = line2 === null || line2 === void 0 ? void 0 : line2.match(/^\s+/);
            if (matches === null || matches === void 0 ? void 0 : matches[0]) {
              e.preventDefault();
              var indent = "\n" + matches[0];
              var updatedSelection = selectionStart + indent.length;
              applyEdits({
                // Insert indentation character at caret
                value: value2.substring(0, selectionStart) + indent + value2.substring(selectionEnd),
                // Update caret position
                selectionStart: updatedSelection,
                selectionEnd: updatedSelection
              });
            }
          }
        } else if (e.keyCode === KEYCODE_PARENS || e.keyCode === KEYCODE_BRACKETS || e.keyCode === KEYCODE_QUOTE || e.keyCode === KEYCODE_BACK_QUOTE) {
          var chars = void 0;
          if (e.keyCode === KEYCODE_PARENS && e.shiftKey) {
            chars = ["(", ")"];
          } else if (e.keyCode === KEYCODE_BRACKETS) {
            if (e.shiftKey) {
              chars = ["{", "}"];
            } else {
              chars = ["[", "]"];
            }
          } else if (e.keyCode === KEYCODE_QUOTE) {
            if (e.shiftKey) {
              chars = ['"', '"'];
            } else {
              chars = ["'", "'"];
            }
          } else if (e.keyCode === KEYCODE_BACK_QUOTE && !e.shiftKey) {
            chars = ["`", "`"];
          }
          if (selectionStart !== selectionEnd && chars) {
            e.preventDefault();
            applyEdits({
              value: value2.substring(0, selectionStart) + chars[0] + value2.substring(selectionStart, selectionEnd) + chars[1] + value2.substring(selectionEnd),
              // Update caret position
              selectionStart,
              selectionEnd: selectionEnd + 2
            });
          }
        } else if ((isMacLike ? (
          // Trigger undo with ⌘+Z on Mac
          e.metaKey && e.keyCode === KEYCODE_Z
        ) : (
          // Trigger undo with Ctrl+Z on other platforms
          e.ctrlKey && e.keyCode === KEYCODE_Z
        )) && !e.shiftKey && !e.altKey) {
          e.preventDefault();
          undoEdit();
        } else if ((isMacLike ? (
          // Trigger redo with ⌘+Shift+Z on Mac
          e.metaKey && e.keyCode === KEYCODE_Z && e.shiftKey
        ) : isWindows ? (
          // Trigger redo with Ctrl+Y on Windows
          e.ctrlKey && e.keyCode === KEYCODE_Y
        ) : (
          // Trigger redo with Ctrl+Shift+Z on other platforms
          e.ctrlKey && e.keyCode === KEYCODE_Z && e.shiftKey
        )) && !e.altKey) {
          e.preventDefault();
          redoEdit();
        } else if (e.keyCode === KEYCODE_M && e.ctrlKey && (isMacLike ? e.shiftKey : true)) {
          e.preventDefault();
          setCapture(function(prev2) {
            return !prev2;
          });
        }
      };
      var handleChange = function(e) {
        var _a2 = e.currentTarget, value2 = _a2.value, selectionStart = _a2.selectionStart, selectionEnd = _a2.selectionEnd;
        recordChange({
          value: value2,
          selectionStart,
          selectionEnd
        }, true);
        onValueChange(value2);
      };
      React7.useEffect(function() {
        recordCurrentState();
      }, [recordCurrentState]);
      React7.useImperativeHandle(ref, function() {
        return {
          get session() {
            return {
              history: historyRef.current
            };
          },
          set session(session) {
            historyRef.current = session.history;
          }
        };
      }, []);
      return React7.createElement(
        "div",
        __assign({}, rest, { style: __assign(__assign({}, styles.container), style) }),
        React7.createElement("pre", __assign({ className: preClassName, "aria-hidden": "true", style: __assign(__assign(__assign({}, styles.editor), styles.highlight), contentStyle) }, typeof highlighted === "string" ? { dangerouslySetInnerHTML: { __html: highlighted + "<br />" } } : { children: highlighted })),
        React7.createElement("textarea", { ref: function(c) {
          return inputRef.current = c;
        }, style: __assign(__assign(__assign({}, styles.editor), styles.textarea), contentStyle), className: className + (textareaClassName ? " ".concat(textareaClassName) : ""), id: textareaId, value, onChange: handleChange, onKeyDown: handleKeyDown, onClick, onKeyUp, onFocus: onFocus2, onBlur, disabled, form, maxLength, minLength, name, placeholder, readOnly, required, autoFocus, autoCapitalize: "off", autoComplete: "off", autoCorrect: "off", spellCheck: false, "data-gramm": false }),
        React7.createElement("style", { dangerouslySetInnerHTML: { __html: cssText } })
      );
    });
    var styles = {
      container: {
        position: "relative",
        textAlign: "left",
        boxSizing: "border-box",
        padding: 0,
        overflow: "hidden"
      },
      textarea: {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        resize: "none",
        color: "inherit",
        overflow: "hidden",
        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased",
        WebkitTextFillColor: "transparent"
      },
      highlight: {
        position: "relative",
        pointerEvents: "none"
      },
      editor: {
        margin: 0,
        border: 0,
        background: "none",
        boxSizing: "inherit",
        display: "inherit",
        fontFamily: "inherit",
        fontSize: "inherit",
        fontStyle: "inherit",
        fontVariantLigatures: "inherit",
        fontWeight: "inherit",
        letterSpacing: "inherit",
        lineHeight: "inherit",
        tabSize: "inherit",
        textIndent: "inherit",
        textRendering: "inherit",
        textTransform: "inherit",
        whiteSpace: "pre-wrap",
        wordBreak: "keep-all",
        overflowWrap: "break-word"
      }
    };
    exports.default = Editor2;
  }
});

// tasks/LLM/icons/codestral.svg
var codestral_default = 'data:image/svg+xml,<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<rect width="40" height="40" rx="8" fill="white"/>%0A<g clip-path="url(%23clip0_2130_22556)">%0A<path d="M13.1357 9H8.56689V13.3995H13.1357V9Z" fill="black"/>%0A<path d="M31.4165 9H26.8477V13.3995H31.4165V9Z" fill="black"/>%0A<path d="M17.7044 13.3989H8.56689V17.7984H17.7044V13.3989Z" fill="black"/>%0A<path d="M31.4178 13.3989H22.2803V17.7984H31.4178V13.3989Z" fill="black"/>%0A<path d="M31.4136 17.7983H8.56689V22.1977H31.4136V17.7983Z" fill="black"/>%0A<path d="M13.1357 22.1987H8.56689V26.5982H13.1357V22.1987Z" fill="black"/>%0A<path d="M22.2763 22.1987H17.7075V26.5982H22.2763V22.1987Z" fill="black"/>%0A<path d="M31.4165 22.1987H26.8477V26.5982H31.4165V22.1987Z" fill="black"/>%0A<path d="M17.7091 26.6011H4V31.0005H17.7091V26.6011Z" fill="black"/>%0A<path d="M35.9894 26.6011H22.2803V31.0005H35.9894V26.6011Z" fill="black"/>%0A<path d="M13.1371 9H8.56836V13.3995H13.1371V9Z" fill="%23FFD800"/>%0A<path d="M31.4149 9H26.8462V13.3995H31.4149V9Z" fill="%23FFD800"/>%0A<path d="M17.7059 13.3989H8.56836V17.7984H17.7059V13.3989Z" fill="%23FFAF00"/>%0A<path d="M31.4148 13.3989H22.2773V17.7984H31.4148V13.3989Z" fill="%23FFAF00"/>%0A<path d="M31.415 17.7983H8.56836V22.1977H31.415V17.7983Z" fill="%23FF8205"/>%0A<path d="M13.1371 22.1987H8.56836V26.5982H13.1371V22.1987Z" fill="%23FA500F"/>%0A<path d="M22.2763 22.1987H17.7075V26.5982H22.2763V22.1987Z" fill="%23FA500F"/>%0A<path d="M31.4149 22.1987H26.8462V26.5982H31.4149V22.1987Z" fill="%23FA500F"/>%0A<path d="M17.7091 26.6011H4V31.0005H17.7091V26.6011Z" fill="%23E10500"/>%0A<path d="M35.9865 26.6011H22.2773V31.0005H35.9865V26.6011Z" fill="%23E10500"/>%0A</g>%0A<defs>%0A<clipPath id="clip0_2130_22556">%0A<rect width="32" height="22" fill="white" transform="translate(4 9)"/>%0A</clipPath>%0A</defs>%0A</svg>%0A';

// tasks/LLM/icons/deepseek.svg
var deepseek_default = 'data:image/svg+xml,<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<rect width="40" height="40" rx="8" fill="white"/>%0A<g clip-path="url(%23clip0_2130_22530)">%0A<path d="M35.6639 9.97616C35.3253 9.81083 35.1786 10.1268 34.9813 10.2882C34.9133 10.3402 34.8559 10.4082 34.7986 10.4695C34.3026 10.9988 33.7239 11.3455 32.9679 11.3042C31.8626 11.2428 30.9186 11.5895 30.0839 12.4348C29.9066 11.3922 29.3173 10.7708 28.4213 10.3708C27.9519 10.1628 27.4773 9.95616 27.1479 9.50416C26.9186 9.18283 26.8559 8.82416 26.7413 8.47216C26.6679 8.25883 26.5946 8.0415 26.3506 8.0055C26.0839 7.96416 25.9799 8.18683 25.8759 8.3735C25.4586 9.13616 25.2973 9.97616 25.3133 10.8268C25.3493 12.7415 26.1573 14.2668 27.7639 15.3508C27.9466 15.4748 27.9933 15.6002 27.9359 15.7815C27.8266 16.1548 27.6959 16.5175 27.5813 16.8922C27.5079 17.1308 27.3986 17.1815 27.1426 17.0788C26.2776 16.7071 25.4919 16.173 24.8279 15.5055C23.6853 14.4015 22.6533 13.1828 21.3653 12.2282C21.0668 12.0077 20.7604 11.7982 20.4466 11.6002C19.1333 10.3242 20.6199 9.27616 20.9639 9.15216C21.3239 9.0215 21.0879 8.57616 19.9253 8.5815C18.7626 8.58683 17.6986 8.97483 16.3426 9.4935C16.1411 9.57071 15.9338 9.63179 15.7226 9.67616C14.4554 9.43741 13.1595 9.39156 11.8786 9.54016C9.36527 9.82016 7.3586 11.0095 5.8826 13.0375C4.10927 15.4748 3.69193 18.2455 4.2026 21.1335C4.73993 24.1788 6.2946 26.7002 8.6826 28.6708C11.1599 30.7148 14.0119 31.7162 17.2666 31.5242C19.2426 31.4108 21.4439 31.1455 23.9253 29.0442C24.5519 29.3562 25.2079 29.4802 26.2986 29.5735C27.1386 29.6522 27.9466 29.5335 28.5719 29.4028C29.5519 29.1948 29.4839 28.2868 29.1306 28.1215C26.2573 26.7828 26.8879 27.3282 26.3133 26.8868C27.7746 25.1588 29.9746 23.3642 30.8359 17.5495C30.9026 17.0868 30.8453 16.7962 30.8359 16.4228C30.8306 16.1962 30.8826 16.1068 31.1426 16.0815C31.864 16.0067 32.5638 15.7915 33.2026 15.4482C35.0639 14.4308 35.8159 12.7615 35.9933 10.7588C36.0199 10.4522 35.9879 10.1375 35.6639 9.97616ZM19.4413 28.0002C16.6559 25.8108 15.3053 25.0895 14.7479 25.1202C14.2253 25.1522 14.3199 25.7482 14.4346 26.1375C14.5546 26.5215 14.7106 26.7855 14.9293 27.1228C15.0813 27.3455 15.1853 27.6775 14.7786 27.9268C13.8813 28.4815 12.3226 27.7402 12.2493 27.7042C10.4346 26.6348 8.91593 25.2242 7.84793 23.2948C6.81593 21.4375 6.21593 19.4455 6.11727 17.3188C6.0906 16.8042 6.24127 16.6228 6.75327 16.5295C7.42541 16.4009 8.1141 16.3833 8.79193 16.4775C11.6346 16.8935 14.0533 18.1642 16.0826 20.1762C17.2399 21.3228 18.1159 22.6922 19.0186 24.0308C19.9786 25.4522 21.0106 26.8068 22.3253 27.9162C22.7893 28.3055 23.1586 28.6015 23.5133 28.8188C22.4439 28.9388 20.6599 28.9655 19.4413 28.0002ZM20.7746 19.4135C20.7744 19.3473 20.7903 19.282 20.8209 19.2233C20.8516 19.1645 20.8961 19.1142 20.9505 19.0765C21.005 19.0388 21.0678 19.015 21.1336 19.007C21.1993 18.9991 21.266 19.0072 21.3279 19.0308C21.4068 19.0591 21.4749 19.1113 21.5227 19.1802C21.5705 19.249 21.5956 19.331 21.5946 19.4148C21.5948 19.469 21.5842 19.5226 21.5634 19.5726C21.5427 19.6226 21.5122 19.668 21.4737 19.7061C21.4352 19.7442 21.3896 19.7743 21.3393 19.7945C21.2891 19.8148 21.2354 19.8249 21.1813 19.8242C21.1275 19.8243 21.0743 19.8138 21.0247 19.7932C20.9751 19.7725 20.9301 19.7422 20.8923 19.704C20.8546 19.6657 20.8249 19.6203 20.8049 19.5705C20.7849 19.5206 20.7737 19.4672 20.7746 19.4135ZM24.9213 21.5415C24.6546 21.6495 24.3893 21.7428 24.1346 21.7548C23.7515 21.7682 23.3755 21.6485 23.0706 21.4162C22.7053 21.1095 22.4439 20.9388 22.3346 20.4055C22.2969 20.1449 22.3041 19.8797 22.3559 19.6215C22.4493 19.1855 22.3453 18.9055 22.0373 18.6522C21.7879 18.4442 21.4693 18.3868 21.1199 18.3868C21.0003 18.3799 20.8842 18.3442 20.7813 18.2828C20.6346 18.2108 20.5146 18.0295 20.6293 17.8055C20.6666 17.7335 20.8426 17.5575 20.8853 17.5255C21.3599 17.2562 21.9079 17.3442 22.4133 17.5468C22.8826 17.7388 23.2373 18.0908 23.7479 18.5895C24.2693 19.1908 24.3639 19.3575 24.6613 19.8082C24.8959 20.1615 25.1093 20.5242 25.2546 20.9388C25.3439 21.1988 25.2293 21.4108 24.9213 21.5415Z" fill="%234D6BFE"/>%0A</g>%0A<defs>%0A<clipPath id="clip0_2130_22530">%0A<rect width="32" height="32" fill="white" transform="translate(4 4)"/>%0A</clipPath>%0A</defs>%0A</svg>%0A';

// tasks/LLM/icons/doubao.svg
var doubao_default = 'data:image/svg+xml,<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<rect width="40" height="40" rx="8" fill="white"/>%0A<g clip-path="url(%23clip0_2154_22614)">%0A<path d="M11.6377 24.6952C11.8527 20.0077 13.9915 17.1965 14.824 16.2715C10.749 18.844 8.04271 23.344 6.87646 26.6565V28.0565C6.87646 31.8915 10.2827 35.0002 14.4877 35.0002C15.4244 35.0015 16.3544 34.8429 17.2377 34.5315C17.679 34.3815 18.1127 34.2215 18.5365 34.059C19.6777 32.9352 20.599 31.6715 21.3402 30.319C15.244 33.3577 11.3727 30.409 11.6365 24.694L11.6377 24.6952Z" fill="%231E37FC"/>%0A<path d="M33.2124 17.8535C31.6974 16.7273 28.0761 14.8485 23.9661 14.3535C24.3349 19.0935 24.0824 25.311 21.3411 30.3198C20.5946 31.6972 19.6494 32.9574 18.5361 34.0598C23.2411 32.2498 26.9686 29.7385 29.2811 27.536C32.8061 24.1823 33.4724 21.0635 33.4824 19.211C33.4855 18.7457 33.3936 18.2846 33.2124 17.856V17.8535Z" fill="%2337E1BE"/>%0A<path d="M22.8787 7.33375C21.1938 5.875 19.06 5 16.7375 5C14.415 5 12.3538 5.84625 10.6813 7.25875C8.48875 9.1125 7.03375 11.9462 6.875 15.1562V26.6575C8.04 23.345 10.7462 18.845 14.8212 16.2738C15.4462 15.8763 16.1025 15.53 16.7825 15.2375C19.1362 14.2362 21.63 14.0725 23.965 14.355C23.6875 10.8175 23.0675 8.1025 22.8775 7.33375H22.8787Z" fill="%23A569FF"/>%0A<path d="M26.6311 11.2015C26.1793 10.7474 25.7293 10.2916 25.2811 9.83398C25.0286 9.56773 24.7836 9.31023 24.5486 9.05648L22.8823 7.33398C23.0711 8.10273 23.6923 10.8165 23.9686 14.3552C28.0786 14.849 31.6998 16.7277 33.2136 17.8552C31.5811 16.2615 28.8698 13.4965 26.6311 11.2015Z" fill="%231E37FC"/>%0A</g>%0A<defs>%0A<clipPath id="clip0_2154_22614">%0A<rect width="30" height="30" fill="white" transform="translate(5 5)"/>%0A</clipPath>%0A</defs>%0A</svg>%0A';

// tasks/LLM/icons/mistralai.svg
var mistralai_default = 'data:image/svg+xml,<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">%0A<rect width="40" height="40" rx="8" fill="white"/>%0A<rect width="40" height="40" rx="8" fill="url(%23pattern0_2130_22556)"/>%0A<defs>%0A<pattern id="pattern0_2130_22556" patternContentUnits="objectBoundingBox" width="1" height="1">%0A<use xlink:href="%23image0_2130_22556" transform="scale(0.005)"/>%0A</pattern>%0A<image id="image0_2130_22556" width="200" height="200" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAIABJREFUeF7tfWuQHcd13tc9M/fuA9gFQQIkAS6wxEN8gGbxIYqkzEiQSCs0n1bJoByXYim2LJVk2lJiEVSpIgtU4qrQ8r/8ilPlX/oVJX9ciVip/DArFVuJUylbtAiRFonwJYoESAJ793EfM9OdnO6Ze+fOnde9exdccM645AV3ex59+nx9zuk+52sBvlgCLIFcCQiWDUuAJZAvAQYIawdLoEACDBBWD5YAA4R1gCUwmQTYgkwmN76rJhJggNRkoLmbk0mAATKZ3PiumkiAAVKTgeZuTiYBBshkcuO7aiIBBkhNBpq7OZkEGCCTyY3vqokEGCA1GWju5mQSYIBMJje+qyYSYIDUZKC5m5NJgAEymdz4rppIgAFSk4Hmbk4mAQbIZHLju2oiAQZITQaauzmZBBggk8mN76qJBBggNRlo7uZkEmCATCY3vqsmEmCA1GSguZuTSYABMpnc+K6aSIABUpOB5m5OJgEGyGRy47tqIgEGSE0Gmrs5mQQYIJPJje+qiQQYIDUZaO7mZBJggEwmN76rJhJggNRkoLmbk0mAATKZ3PiumkiAAVKTgeZuTiYBBshkcuO7aiIBBkhNBpq7OZkEGCCTyY3vqokEGCA1GWju5mQSYIBMJje+qyYSYIDUZKC5m5NJYDsCRFbtyokTECdOVG1t2504AV31DiGgqra9xNuxzHMGcDsC5BLXNf78D5IEthtAnKWlpVuVUq4Qwsz0rhuLm/7hAfDhIUC784b+7AOHGr/9MJrzzhlrFQLbNvoBc6sLBB1gxwywcIXbmfVEAAFBz8m62j4w24Rcb6M9/9/wnDj1gbcicnl5+WbXdWeDIMixmAE8bxbB6s/0Jz8K7w8+d11zPngZLgIEJN8cRHgC4tCS24UOelbmdNEYxlc8Bh49REB4AV7d+FvxGMLtArLtAhD6Dn3kyJEF3/dfA7AIGMUUQltZKVgvwHMacEQXqncOn7n/SvHEFxexQ74AIWxXZOKn0hpS00MEhENvCAGtNIz8Labov5KX9DwFKZ2w033Z2YVj4ii6WptHVHbNtsvglnxHLPOm7/vPNxqNw+12O3QcZ8jdchwHWmvQT9V5CQ/cA/Gt378Ve5pvQ+r3oESRF0qjFtDIDWQXjY/5Nvqtpr9KDaEkIFcQ+gfEXWhtF5lvO4CEYfg6gIVIfEJGstXCjlvQDTA3J9BuvYETD16Fbz++GzvF831doMHsX5H2CykgJA2ETiAiByCuo6C1VKE689oqjl37CXS2y2BNGXgGIMvLyzOO45AAD0kpVa/XGwaI9CxAXA3VOYNP3QX862/egp3iVTTECqDGDNOGNE4A2th5DRHQX1rw9RIDZHSk+xYkDMMhCyIjy6wjwQot4To9rF94Db/x6NV46vevwEz499Z6RBhIYiQ/+owemGxsTFRDQYWO9sOXxTpuEjUAiJTyJwAOa23M9bDItITSyri6Yef/4sF/BPyrJ2/FvH4JDbVqRzLPtmZNv0kLYu6VgKCZjP6BFfhgC5IxEyYBkrIgVspZAPnNRwggu9FQ1oJsCiDxwAnjM0gdqDPiMtxYBxcrDMPTZEEit/biAqQPMRphwRYkx03YFEBmwsjFojiD1Ds5o6VnrIEzlj37EUAEeXb6DBY0A6RvQSTCzst48B6yIHdgXp1BQ58v9vqy4pPs8aARE9CyhSBkF2u6FsS6WOQp2UA8bfLpl4mrP2gRikbdAwrSGSAJkVGY4bouwvbPrIt18k7MawLIu1AlUaxMLwKOuFixkyZtDMIAyZx0ci2IXewlvbeWXwoN1wlMDGJdrAggChCeA4SJFULj1qauwlUX05YBkhKZUhSDNBIAuRvz+h/QwLvFFqTKX+34ahpZA5BQsQUZx4KUAuTxvZhRP4ZOAyQLHPTiMoCwi5WaVZRZqOoDxLhYDJAq2J9mm8ktyON70SCAaMDxHKggtiCRxUm7UFUAQi4W9BnsUByD4CIBxG4kthCALcjmLQgt875hXSwGyKQTVX+jsHAViwEyqXynel++BaEN1sQyr41BpgiQEQsjEjEIWxAKyS6Ki8UWpBBQDJCpzjeVHsYWpIKYtn2qiUnR2UoLMrLKFVkQjkEiybAFqYCjLW/y/lkQBkiTY5B8/WYLwgBhgBTM/wwQBggDhAGSkEBqHySdrC2kUCJONanRPogQ4pDWtN2ayublVawtjy+qvOB9i0EYIEeMBWGAZKvp9nexMnOxprcPwgA5QhWFpx3HOUQlt+mKQt4HqTK/b32b9y3VhAEyAEgYhkqaNJvkxcu8W6/+5W8YGyAbK6/jnzx81aZTTQoBsksdE9eakltSmvKa9DHtMRWclovGtBjrybbsuPiWp56COHUK6vjx5ZlXXxXPK6UOua6rlIo2nvofxgCpOEZb2mwygDy0D999fC+aVHJLSmHqQoeTFUdVMIJEP1hPTZiUzRsH6Yu9GiQroul0vdPN5uyhbsdX0vWGBGJIGZRAQ1K6+7v4x/cA333yTszhJUhTMFVCqVU6BZjx0BHrSQuK092zkGYAct111+3s9XqvArjM8PsQIUmkz3H2uoRjWE3aq2/gM/ftkX/6tWXhBM9bgDiO/Wlm0GjgcrN58xhufGUoPIAzL/y4+5H//hzax3bB8eegz50F9kRffy7RC/rddXuhrt59pDpdzXsv+VUphU6dOiW///3vJ/lyCmarl/DJG+Dcd7sVwJ6zGU33Aq3XIPYf2Bf+px+/Oft3L+Jvej4OCYnQJxIS4raIqEgM1wiluytgRgD3fBj4xuM3wVOvQ8qNATNJ3he5nobOoU6iwTV1CooA4kHgPMKFg+Ked1a3C1HGWKZ7C21IEiAvDAEkDtKjL7UA6aG9+ro+ce8e7w8/PdOc918zXsUQPqKPJdqfxKXLKuCoKtFxITptBEEXraYCmp6DXjfEzKwDv5fAQPRNYQ+iOYPuzM7Zju71RJJZhf5NzSgXT2ut5eysRLer/CD89cY/w9/pU/+/Uiife4uUXO3fv/8W13X/o2U1EkrEHEd9zgND/wUPHfgbv9C/8+ihmc9/LGzOdV7VjhaQidqYMAwNw4umDMSZBZzVi2j5MwudjnAdb15rNBEzyJD1IHmRDB3lYgbrmPPexsJcS8y4awiDbB8xruGhbs820ZXaTnaZ+iOMgdIhAQQ4376A6/f8DhggKWGVu1hDAOmis/ZzPPbJK/CtX9+Jnd2XRw1INkDyS0QjIJH6EzPURhvYsUNABwQ8B2EYmKxWz+sz2VmWiOjSYWjocRK62/+bIe2wl4briqDb066LXxa/iR9RfFNAcWoAcuTIkbt93/8rpZRwXdcEGIP3WEvoQMBBB73WL/DVxz6EL93nwls7Dc8hgAykLVzHUh9JB4EfQHuz6AQSUjYsBY9woAzFkpnZo6+m/6apieirNsz/pPAhpaEQG9H7BECMTHKv6PmaACIhlEBrposl8TnmxUrLbDKAfGIv/uVndmKh+zMDEDNWsYeVeEO/KjHPXvatlFX4UBHzj3mejmnUSGfoHcmKXnJiqMTa1MPTTCulNgxzCaVI/lsQkx01cxyFIPxl8Vv4X1UsyDXXXHOn4zh/FfmNtNKUC5DuCgHkqPjivQ6a6y+g2bAWIL6oX9QXRcCfEVBdAjWEkV9Mm5TyPmOrK4WEdDxrNlyJYL0Nx82OQUYmiiyyBgMQAuIAIJ7PAMmaUCoDhLJ7qSY97JzFw3fvxLc/u4iFjgUIxeixwtr52iKiD5CUvzVoYweZeABJoQlo7Y0AzRlyLZJIs8+PnxtTESUD1SwL0jcfWmuhSRm1FlB3VwXI8vLynVLKH5nbrHr2oR4xtJo+uuRirb5lLIgFyE9HLEjedG9kRGA3+tq3d4auyrw1mu2NJ2Ta5hGO5huMgr/oUJq3tBzNAJkiQBbx7cd2YWfvhb6LZWb6aMrLwoMBQtIHMOoQB/QWIMIFNjYCzDYkHLIOJgMjugy3QPKKFCj6VRFAYC3IRQaIM2RBRoVPiLAmxvQs7mr80xC7JWr5DXUM/Xf19YhcYAxmGAZIybxSwYLYNCEzU0qyIO/g4bsX8Z0Tu7AjAojrCEuim1jFGsKCmfzjZd5U9G8+UCKMLUhbYZbck/Ri1whAUj2LFSirw/RhFLMbFL6/FmRosYKEFAXj/dCDxENLWCQvu8oQWRI7Qaho9jE/BoqeZ6Dyh19out3GIECrEbIFmdCCWE011KNbBhCKJ7TZBmm3FZrNDy5ArCWl/x9NFEmAxOAwAh/4XNbVEtYCx4aUYpcpAYRcLJcBkjmZVLQg2QBZ6MYuFo0yrRsm9kFGXpdHthxVLtLkLiU67QDNJlmsVPsyC1L8dw0VxRFajxWDCCF+FHlBY8UgTSLuzllIGtJrExxFwhr6wwBAQ7FXYuUj7/klXkPyz1pHMYjgGGR6AHn0rkX8EcUgDJDcIL0IIGMo8BY2NRMTbU2aIB1C8zJvhrTHsCCwq1jt91AMkPgt8TJkwhIMLdTHvkK2BRlErVFsmsv1G73vErIgW6j1YzyaAVJFWBcPIKNRe6zZ5qeJnxMuFgOkyvBtpo3ZlCT/zloQcJA+tSB9IgvyfgJkaJkXY8UgWmsTg9Bm5Dj7INvdxYrCHQMQoRkgeVPNGBZksIrFADFn1EWre9kbhQyQzVi3sqKBzT17nLu3F0CEQLcbotGIcpISPSncCKR2RTEIW5ARnWALUg0mDJBsORmEUqoJu1jVFGnarfLS96b9nrLnVQYI7fS6MkTYOYdH79qFU7+xGzu7P7XJinHi3NDRtalVrFQMYpPRzdQ/9I1kQVxXUE7eNC+bhmX3nseOQShJcdxcLHaxNjd8DBAGyOY0aJN3s4tVTYDbyoLQUq9vCgu3jwXZip30akOzta0YINXkWxEgVMigttzF2s4AUcr4j4bbjq70KlavRenuR6N09xcwQwmcpXXh1QZpK1rZ/K4+y0SLU02ypVwBINGNIe2kUwzy9pbFIJcCQEzUJOUIQDorb+H3ThzGF+9z0Vx/EbNuMUAKK/6mgIiyVT8tTcG6IW2QGgyQHJkzQEpWsWIXS1iT0a8ojC0I2RNTcrvyJr762HX43XsdNNZPo2HKBfM1nQFSPAtcYkH6B8jFkvio+Bz+p/4PcHAii/VD47HHHpM/+MEPwuXl5buEEH9tks+V0tFqVqaLFayRi8UAmYLxs/Kd1oM2+RxjQbJofwbPtcmGRJzQkCF67bP4zF2Xy+8+tlfMd16MeLGiarfCZd6MdPc+60dUPac1lO/bZWNDYFD5KvP2NbR5GdGFfFR8sf03VWrS774GH1Gh+GsiRaFPo3SxOAs/+XnU+3Ad+NJnrxS/dd8uOOsvwfWIjKHg+4tIFSp3O90wmRgqFJWIlTyKsnkNqwlC/6BgVpMRcfUB4vv+T7XWfV6sWNTxgfQEkCZxHqy/rR84trNx8t6dzb3+KzkDkFbuvFqQ+HukpcTRGt2A9kEG9ex5A2y3JsxlyozKdMqTDnq9AK0W/ocj8W4Ywg0ldLcBhDFBSAg4PRe+uly0xXyw0uldvrLSumdtbR2uoewaXGE0x8W07BSUH71mUS5d0RXSv2D2cpLXSCpaRYAUV9EM97ovdUvy0oVGTxDtSuIyJBcUoSuXJKfhBBYgTX2DeBKrEQ9GGbDKxL3pv28rC3LkyJGFMAxfB7AQb4jlAmT1LTx00y58/Y4m9vbeqC6IuHIu7w4HCDUQGLqfYUaQrFtKDUxqiKk9aU3ga8zOetBhAaakByVmEAoXIdGRWGIsiMRL6cQCIpuw1YFUt6qheh0Tj0gEJvKlK5mln6zVz8NHmj8sq2gwK7bpPzvSrJHqgGR5P23uWqZTraStB3HpGOh/ixYDZFjbcoP0EYBoZS1I6yweObYL37hrDld1XysASPZO+iihgzDTv3CJVE2jFyp4UTVekZMVB8n5HxAxpkQKQytPSinijlPNptQqAkgWoR2BgVjstBIUe8iYdyu5MkS/M2wsMUAI3N0eGlKhOdOw/D4Fhi0JkKxvKKimtcArmeOd1BScLtCENhZRKxkagDhE+8MAGVGnigBRppo2CZAnPjKLq4sAEscXqYNzsgaWlEE41sXqBRrEUmuX6QvwV2qD46k0ekY0pfZ8hcaMa4OqjIuUlYBK/0f6HXty8Yxsf9pv7QNES8PpJZQy7cmrsQBOdCCtsKm+pQFRxkSZxxwTd6k/uaTl1DcthohPQwYGIOhqBkiGPhQAxMa0NgYZBsijN+7CN++ax94kQEZ8hnRFYUmBtqFc1wj8yMVKT4Gpj08vk44WHA5rRty+1wOaMxUWANL9Sb8g0mCiC7WgovdZeRluhRKApMdi2gCxzy+YRewExhakJEgYDyASCFbP4tEbF7YUIMSP5ZaQNGwaIKVhaDqIiZQtNgxkUk1gQxmQEW2RsXqWOpQ4gYssSNG4lLlX8b25NWiVwGErCtnFKkbIRAB55NgCnrxrfjgGSc+4Iy5WpHAjikn+lU2zJdema3bsLUDG2Wgb24LkAiTmxU0JLj0ZU+xOH03E9gQQ8lYM2Z2l7BnEK3n93oz7GN071Acrx1zLlCDStm0YICXGoz/N6OxVrAwXK7IgfYD0BkH6yM5wBkBGFX4wosQNSqtYvQDwLgZArAeeFYXY36X/lla+OIQhZBrGI9vALjnYFbOhB5VarJzhyvOSsiaaDK+qb40YIFXwMNKmsgWhGafhaISts3j42AIoSL8qAZAR5c+yIGZ27TsIiY+JCNEEsNGBqSh0knxRE3Vt+Cba5SOvyBzXQGdvlLGkVH1n1Cd6Pi2MEau7ColnuHQVoeobpt/O8P6yBaki2IsHkNgFi11zw3Ydl9bSwry1+nT8QcNzLUDK9/+q9NG0iQFC8zvt4W0WIPHMHE8MDJDKQ1Gp4XaZXhgglYZrtBEDZELBVbyNAcIWpKKqbEEzdrEqC5UtSGVRDTe81C2I2ewUdpnX1INwqkmmJjBAagwQE5lFqSYMkGxFYIAwQEyqCQNkIoCQIR4c+TVDx6aunsUjN+7CN+5s5i/zptfczbHD9AHR4r3ZGBSgY936CX20HESrWFNY5jW5XfH+XPQP2uCmZV57jubml5HzXCxKc9fBNl/mNUNhU03YghTPkCUWhHSWcots1UPTCU0278PHdtl9kLGyeftni5kvGgAk+kACkRTY6Kj+Pkjxp0e8ywYIg9wqU+ogKCfKAjJO+qPHU34ibejRCbFT32cB7YMoUzdCP1PlIyNdsXwJ+RfJh67B2SHptsNH0A39lXbykxPS6NsZIBU9h2yAaCnoSGKpKafIJisagEhtcrH6G4XTBIjRc4GNboBGA3AKarqTuUo2WTgLIFYB4/PGqQum3gQWIB7xFUy6u50hXBUBRLoOlApLU2XKxidtofrto41JS4OXk3RpAFKSCs0WpGwI7ARFYh5JNbkoAKHZ0aTw2ou+pG9BiBA68bd0V+Jz++IZNqkL/b/ZX/ZdLTpK2gDEulhTB0i0ky7JxQq1TbbM09F+Fkp5VnF2lm9sIfPGuAz88SYtu1hlKCl0sSzhf8LFmqoFmQ5A4g4OZkwRFTHlAMScqw54lG87TQsyDkDMR5eDg1olATKoESkDSHlBFccgZdAYzNuZyYp98x0fOg+JGWFdLKoHOXn3LPYkcrFGXjeSixXHIPYneQA2SI8uaQ+h7QUhFfPBJS0uUOCA/HxqQrXsQ2QRiUcmLQjFJkSuQHlSMn5+4v05z6gmRsBXoc3z8hwIFZansmiK7iiYdwDPA8J4MSS7kMvvBpQ4bHO86ERhEk6ei1VUbBaXEZDspdKgZV46H8Tngqmssc61IGUA+UNaxZo4BjElhHaA+yCgCj0ibQiI8CAsD2IBk3FORRnSs+ckxYoRVTHKhALRMdOUSNjr9DDToCDdkBb0Lx1u7vzxwABEa6fhKa1DswiQe1EFopDQBh20eJAGxWAyib0xsua2UtECpOgIaDMB9QE3/BX9LGNzDnsEEKoo5I3CzOEaGyDh2jk8csMinrhrBnsntiA0ON4wQIwmkAWxtD909ro5CjnjMitV5szwBkIxA1/RUoIbnScemFU3W5IaZUCaYF3B0Qqu38MM6WVAgCglQ6lqQMy3kyUTTaL7CSPWiZznCxdd7aEXWVCXaFwSF30rhK1pd2hxj57e7sGjuSAmjrAmuACEee9OZjkpDcfWpKMTcslthjQNQIgXK037Y2b3vntllY1crHDtnP616y/zvnKjau5rv1nNi7f8TENt7YQtIkUm18SDVkp2w2BNuu6zkF7Y89pibRboDeuPsRw9tUuEenf3/Fr3hrPvtG7WQvaUUIIUy6y+JTi3zMu1xg7VxrGFhtglfDEjxFAUQEuzWVjMqhpJ1oPHlbcAGqHWzzUajZ92vV6zNWcpheKLlFwQrVC3AV/v1i1n3nnz3ZXj62trOxqNhgoMYO2lJdF3WQA7GpgJAhycnxV7GlLMK4WGsbWD/anR71bCcd0uoPx03a2IXKyo4JYYvwztjwguv0H8+TtM+5MSZh8gvV7vVQB9XixYHzUxy0o0qTZ9/R08cHCH+IPDjrxm462cGSwzALUsCEMqMzxxUia6lvhZoxv8kngG3SIKmuOA+ywQ3HGF+w3pOt/rBUHPkD1Frk2sxHFg6wqBK9sa/+LDnrh5h0KTYpiCuINWumJ9NVBO1I9kACQIlGpo6Cd2/Bf8qT4OVzybq8FG5r8KNN/Zg79vNMTRblcHrjvAq4mViNKUPNAQmFsH7r0S4rN3LGGPv4JmZx3kxhURNzgu2Z6iKM5s3lJNgQfI8w0RHhR/wbxYaYUudrFSFqRJcFl7Fw8dnMfXr21iKQsgSbbEEf23q2LRNJn+FrvZApzB/O6bxA/eaOtTpyS+cyrTSn35y7e7f/Zn/8c/evSXTqoweNrw7AhiQ7PPHwWIi6X1n+M7t+zEh+e68Lo9ODnMJmYWz9lHyKkDD0TDc1XHf9L5r+0/0V+Ch3+XDZCnnjolTp06pU7cfffsj8+99RPfDw55nqe0Go64qYRXEPVQACyuvYVP7Qrw+duuxdW9c5hvr4KI8IquUu5fOw5aKDIpsgXRXBLPvMe8WFkWJKvkNsvFIoBg4z08sDS3tQDR+24Uz7xUbEGOH3efffbZ4PDyDScVgqeNz0EAiQA4SDWxPXaFi6W1n+OPbtmJO+Y6mAkpTinw4VPWJVa4LIAoYcDgOm7jpPiLle/95XG4nyixIEeOHGmGgX/alfJQSMS/OrmkRxaElh+I4E5jcfUtPLhHDAEkzfSYBkshMZ4xiQyQwhkm+uPYFsQCZAe+fq23dRZkDIAcOLB80vO8p4OAOBkxsCBRB2MIuNLDgbU3IoB0DUCKLEj6UNBY4ZIAsWkt5kUWIJAnxQ/Xv/eXx4+7n3j22bwgIZZ5M+h1TjuOeygIfOU4w4fOhZTi43gmr4sA8sAVGAZICbUkW5Aq6l/eJhcgpAh26ZQCRpvW0CQSjzULkK/luVi5MUakqlVcrLEAcsAARClDZejGy9NxuW68/Ju2IE3abylwscpFF3mKEUAELUWF+qT4z6vVLUgYnpYQh5QKlSBy4sQVkkHcBEBKvz+yINC0ASVbQINdrAyhFQIkclLfB4Bs3FgapEcu1oHlfSdd2Xhaa7MuelEBElsQSjCgZSME+qT44XgAcYU8FIQBAyTD9y8F+UVocMkDZHn5mpNSuk9rTeGsvGgAiS1TlAw5GUCC0MQgVQBiYpDbD2Ff9xzm2i2zabipiy1IJfFtEUCylnnHcbGqW5ARgBizJ/uMKFvlYjFAKunXxI02Cf+J35u+cQsAEoMjzc27NQA5fHj5JCCeVsoGynEHy1axNhuDTAMgOgxPA+KQprMUUtmL6RiELcjUdH6sBzFAxhLXoHEqDd26WGq8IJ0AojUO9QtuCoJ0BsiEA7XJ2z4AADl8EsBgFSsSyFZbkFjuEVAmBAhOax0yQHJWjzap21O5nQGySTFuBiChr08LoUYAQs8kF0vSRmG0D8IWZJMDNeHtYwJEwVm7kNgHOVvw2osVg2wXCyIjF4s2CivupJsYJMfFooxkx2GATKjY07ptQoAsjLFROFwoVSkXS1dfxTp8mAEykTLwMm8lsdUYIL6pD8m9Cqr1kvf0XSwJu5P+wzZbkEqqV9zoEl3mjV2sD4IFuTQAQkcp7CKqpT0an7/tEK7unsNsp2VP3a1WjVOkiVSCYLN59QynmuQsFmTWpFsuLJuPNcjFUnBWW3jgwA788+Um9ufWg9CdqRgkt/otYrCyyVMm3V2otcqpJpO6WF7owy2wIEP18tSdgupGSlYUQm6JBSGALBIPwG6BL9y+bADS7BJAhtPdR89nyRjtNKCoJp2KzKBaUL0l8QwfA52WWoGL9cEHiDdOGfr7BJBAaVzWOotHL9f4wm3LuLIXWxBD4dAfz4kAQjwZDp1yq1oi3MEWZJoW5Gt56e7mJelUk9QuekxnM+znJyzIRQrS8wCSBYYygEC4UJhaDEJEDsJ1QADZtUYWxMc//fAyrooA4mlvmBVmAr9fE0sqZeUALS9gFytLhNUsSKTwTSI+iFysYoCUu1gZZ+dNDBCtdZSsmJ9qIuGYepDv3LqIO+Z6aPqU7p4WSQzk+PeJg9Kp9jXLa4nT3afsYhmmE/LaoLB7/RwevqzXB8hMt4WGchJ195Ogw1CXal/aisJG4LIFmcyC2JPSySYQaQNWV/Dw8iK+cgDIr0kf0GLS4RP2ikpho/8ekCpEfxZmirYlt2G7cgxy8ODBJwD8iZSyV5SLRTHFwQ1TUSg+Mh/A6YbwcgBC9efGxTdlrYE2hFf0/RlluP1VLIGGXcXqVl7F8kP/NETGPghZ1hggGrhi4x08uNjD5287iCu7Z+G1L2C20SzmDaMD4QsvGldHh0IKDdmak1wPMoEFkURtZtc5oAxpg9xYxf1XzuGJowu4av3t8qnLHhY5AElMXGaoRiJXzCqeomPtIXDF9KfmAAAIzUlEQVQGncVj4tlXOoWkDVE9yJEjR55USv0bm+6ebUEM8rTEwfYv8NRti7h7RwjRy7Igg2BcUP2V+Uai8CEeqhILopULpb4pngmerrJRuLy8PKOFfj4TICSN0B4vTTLa0z6PB+Z7+MIth7DffxfNYL0QHEbYhjuraHgMJRLV9dqCKTm/JJ55iWvSUyJLspq8kGQ1iRndkwBxVYhGd10f3+F53zq4u7lv9b3yhUbDBqK6pizV0PIkB46oheJ4xViQWQjxIhZn7iirSY/AEFx//fVf6vV6f6y1fo942+L+DdbQIuqORhP7W6/j2zfPzd/e6LrwFZ08nbqIj0qZWguPmLuEDITQ60bfcihETFqI0qEDtVtofEs84//7KgChmvRABf9bQ18HoJ0O3EzJLHVHu7iq3dIPNX33c9ctNa/qvIfZsGeLfDOnPOPzkZy70PANADJ9QxIVvYTyWXAerfXrxYtM+5MWVS7tj1DK0HrGLLDGIIc9zPW6uMeB/G0RisMrFwqmKKuiwmohMRIY2p+YPmdYOSWxiCip0dDAP8yvqZsFiml/4hcfP37cfeWVV1zXdUvBehQv4auL+5w7/DdL96GupBeQ6uw1DDzlV9sEu0EB3U/8jH5Nuq/85wB8iGi+RgFCZzWQDF3sX9/Ax9beFSeWrpKXn38bi0EXFFONuKmJr5SGmzSbGS+WvRkTLT2pxfnmbOegeIdpfzIBkslq0neKrKITQLzAAuTjUuLLcHD0QhZA0vUg8SsHDv/ozG3uIYDYfZDu6o1VAVKuuduuxQAgeTFI/MnGBXWxtLqB+9bX8OnLL8e+tRUs+l3DGpq1UZhmgx/0Pr0kbFlNDFurFi2321gSYNqfTQIkwHy3i48Lid/TDo5caGVoXxxXpJZ608uk/fm+324QpPvnxwFIqTVIfmSpmdkknso8/8SRE83cIH0IIBJLqx3cv7qBX9u9B9esEkB8QKWpUyM5pqSRXi3sg8pynvUBInyXAZIx9rnLvIN5P2lBtiVANqnSF/32ShYk5hYmF5csyP2rHQbIRR+qvAN07O/NlYxBvIABMoUxYoBUEOJYbkGF503aZCwL0vADG4NsLxdr0r6/X/f1ARIW1IPEx96xBXm/hsm+txggdMiLOauQIjkFL1rFYoBsatAYIBXEd2lYEAZIhaEcuwkDpILIGCDTW8WqIO5t1WQ6AKGd/aF0fdp0He1n5irWgLWfV7FKVGMTLpaXs8yb88Z0hd5oduxgmbe3Ms4y77bS/gofMxWAaIQj+yBDx2OXrWdbcNH5IGYfhJd5s0eOAVJBo6fcZGoAKfqu0mpDBkilYWWAVBLTVBsxQCqI8wMQg7CLVWGcs5owQCoI7oMPkPQ56RyDxGoxAAgRx2XxYglFZ6NFGXDZO+kUg0zFxaLQXosWqGCKc7FGRLp1LhYDJE9/GSD1sCB5yYrUe1voY670iVL5Z3vzKtaQ4myxBbHvosPd2YIUAHZiC/IVOPjQ+axsXgZIxaX15jipJp9aG05WFDkVjn0/rmyZtw8QOkpFtBBKdrEyBm5TADmame5uAZLFK5VVq5BYjmQLkhggSu2hkts4F4sA8ujle7B/dQW7TLq7zj0nPapRGzwtiniH9knsobpmo9ACBAyQ9xMgWmbTfDJAssmrY4CQq7p/bQMjFiR1THVybA0Hn6mnj7LtUgDpy1ybukNix2ILkmP2J7Yg+QVTKRcr5sDqn18eA2XkmLbaWZC8gqlB+buN5a5Z28D9rQ4+HVmQBbIgJS7WEGFD1pqprYS2ECKABFxRWLQmvxCG4WsAFqM65qF6EJPNa0puU+nu59dGnxnfmbusWwgQYhJ4Gb2VmwRQyGpSYSFkuzYxk5JhNZH6JwAOWw6TYba9uGAqDZCl1gp2EEAqlspnCqEfnxBADF3ACvyZA7zMm63OhpvX9/3XASzEhllGx3aTD0yD1XAlnJ6P2W4bH6Oa9J7E0QtroyQMRKIRm3/j9EaASPFjWc6pjGUb4sXqrRyrA0Aac43nO+32ISGM/zlkUu0pttaCEGnDQ+0QD+5YxO533sZe4iIZPlZ9WJK0j0I168mYxrDLRKNr/mHomDREYGMQtiCZc0nfxVJKDVkQQzuTqCiECjCngHm/h3uEFL+rHBy+MLAg6WOJ4/vJ8kQWyNLsxBmowjD7JS9SEmNBhN8igHSLeLG2q3mo8F39fZBe0H2+0Wgc7vm9UIiBxtv6G6vEobAxyK+sdcSju6/AvtUV7OhZVpO8yzDQKCP3vogNm8zQyhZl/xqASCi2IGXj5iwtLd3qOA6dEptaIPTMvUHQxgJczAUdfVsYNr4gG80DK2uJtqM7u/Qw+p8Iws5O4QXENVX4IZrOb3ba8C88R3ao7KMv8b/L5eX9N2uN2VAI5Q4470y3vADwXUt/tbTa0b+qlPfxxmxzf2cNM12iGXNyqbFmEIgFNLqzIRFolR2o7gsaXfj+35qT37bJtV1STbaJOPgzWAIpL3EbCmRkWSnvG08A4sSYHThRTpbZf2INrEfcV5Z5jh6xBRkTYNy8XhJggNRrvLm3Y0qAATKmwLh5vSTAAKnXeHNvx5QAA2RMgXHzekmAAVKv8ebejikBBsiYAuPm9ZIAA6Re4829HVMCDJAxBcbN6yUBBki9xpt7O6YEGCBjCoyb10sCDJB6jTf3dkwJMEDGFBg3r5cEGCD1Gm/u7ZgSYICMKTBuXi8JMEDqNd7c2zElwAAZU2DcvF4SYIDUa7y5t2NKgAEypsC4eb0kwACp13hzb8eUAANkTIFx83pJgAFSr/Hm3o4pAQbImALj5vWSAAOkXuPNvR1TAgyQMQXGzeslAQZIvcabezumBBggYwqMm9dLAgyQeo0393ZMCTBAxhQYN6+XBBgg9Rpv7u2YEmCAjCkwbl4vCTBA6jXe3NsxJcAAGVNg3LxeEmCA1Gu8ubdjSoABMqbAuHm9JMAAqdd4c2/HlAADZEyBcfN6SYABUq/x5t6OKQEGyJgC4+b1ksD/A76oTbi1UnKKAAAAAElFTkSuQmCC"/>%0A</defs>%0A</svg>%0A';

// tasks/LLM/icons/oomol.svg
var oomol_default = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" fill="none"><path fill="url(%23a)" d="M0 8a8 8 0 0 1 8-8h24a8 8 0 0 1 8 8v24a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"/><defs><pattern id="a" width="1" height="1" patternContentUnits="objectBoundingBox"><use xlink:href="%23b" transform="scale(.00098)"/></pattern><image xlink:href="data:image/png;base64,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" id="b" width="1024" height="1024" preserveAspectRatio="none"/></defs></svg>';

// tasks/LLM/icons/qwen.svg
var qwen_default = 'data:image/svg+xml,<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<path d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z" fill="white"/>%0A<path d="M20.8052 5.78656C21.3292 6.70656 21.8505 7.62923 22.3705 8.55323C22.3915 8.59018 22.422 8.62089 22.4588 8.6422C22.4955 8.66352 22.5373 8.67469 22.5798 8.67456H29.9825C30.2145 8.67456 30.4118 8.82123 30.5772 9.11056L32.5158 12.5372C32.7692 12.9866 32.8358 13.1746 32.5478 13.6532C32.2012 14.2266 31.8638 14.8052 31.5345 15.3866L31.0452 16.2639C30.9038 16.5252 30.7478 16.6372 30.9918 16.9466L34.5278 23.1292C34.7572 23.5306 34.6758 23.7879 34.4705 24.1559C33.8878 25.2026 33.2945 26.2412 32.6905 27.2759C32.4785 27.6386 32.2212 27.7759 31.7838 27.7692C30.7478 27.7479 29.7145 27.7559 28.6812 27.7906C28.659 27.7917 28.6375 27.7984 28.6186 27.8101C28.5998 27.8217 28.5841 27.8379 28.5732 27.8572C27.381 29.9696 26.1787 32.0763 24.9665 34.1772C24.7412 34.5679 24.4598 34.6612 23.9998 34.6626C22.6705 34.6666 21.3305 34.6679 19.9772 34.6652C19.8512 34.6649 19.7275 34.6313 19.6186 34.5678C19.5098 34.5044 19.4196 34.4134 19.3572 34.3039L17.5772 31.2066C17.5668 31.1863 17.5509 31.1694 17.5313 31.1578C17.5117 31.1463 17.4892 31.1405 17.4665 31.1412H10.6425C10.2625 31.1812 9.90517 31.1399 9.56917 31.0186L7.43184 27.3252C7.36863 27.2159 7.33512 27.0919 7.33466 26.9656C7.33419 26.8393 7.36677 26.715 7.42917 26.6052L9.0385 23.7786C9.06143 23.7386 9.07349 23.6933 9.07349 23.6472C9.07349 23.6011 9.06143 23.5559 9.0385 23.5159C8.2002 22.0645 7.36686 20.6103 6.5385 19.1532L5.48517 17.2932C5.27184 16.8799 5.2545 16.6319 5.61184 16.0066C6.23184 14.9226 6.84784 13.8399 7.46117 12.7586C7.63717 12.4466 7.8665 12.3132 8.23984 12.3119C9.3905 12.307 10.5412 12.3066 11.6918 12.3106C11.7209 12.3103 11.7494 12.3025 11.7744 12.2877C11.7995 12.273 11.8202 12.2519 11.8345 12.2266L15.5758 5.69989C15.6325 5.60061 15.7144 5.51801 15.8132 5.46043C15.912 5.40285 16.0242 5.37231 16.1385 5.37189C16.8372 5.37056 17.5425 5.37189 18.2492 5.36389L19.6052 5.33323C20.0598 5.32923 20.5705 5.37589 20.8052 5.78656ZM16.2292 6.3239C16.2151 6.32389 16.2013 6.32758 16.1891 6.3346C16.177 6.34162 16.1669 6.35173 16.1598 6.36389L12.3385 13.0506C12.3202 13.0821 12.2939 13.1082 12.2623 13.1265C12.2308 13.1447 12.195 13.1544 12.1585 13.1546H8.33717C8.2625 13.1546 8.24384 13.1879 8.2825 13.2532L16.0292 26.7946C16.0625 26.8506 16.0465 26.8772 15.9838 26.8786L12.2572 26.8986C12.2027 26.8967 12.1488 26.9103 12.1016 26.9376C12.0545 26.965 12.016 27.005 11.9905 27.0532L10.2305 30.1332C10.1718 30.2372 10.2025 30.2906 10.3212 30.2906L17.9425 30.3012C18.0038 30.3012 18.0492 30.3279 18.0812 30.3826L19.9518 33.6546C20.0132 33.7626 20.0745 33.7639 20.1372 33.6546L26.8118 21.9746L27.8558 20.1319C27.8622 20.1205 27.8715 20.111 27.8827 20.1044C27.894 20.0978 27.9068 20.0944 27.9198 20.0944C27.9329 20.0944 27.9457 20.0978 27.9569 20.1044C27.9682 20.111 27.9775 20.1205 27.9838 20.1319L29.8825 23.5052C29.8968 23.5305 29.9175 23.5514 29.9426 23.566C29.9677 23.5805 29.9962 23.5881 30.0252 23.5879L33.7092 23.5612C33.7186 23.5613 33.7279 23.5589 33.7361 23.5542C33.7443 23.5495 33.7511 23.5427 33.7558 23.5346C33.7604 23.5264 33.7628 23.5172 33.7628 23.5079C33.7628 23.4986 33.7604 23.4894 33.7558 23.4812L29.8892 16.6999C29.8753 16.6772 29.8679 16.6512 29.8679 16.6246C29.8679 16.598 29.8753 16.5719 29.8892 16.5492L30.2798 15.8732L31.7732 13.2372C31.8052 13.1826 31.7892 13.1546 31.7265 13.1546H16.2665C16.1878 13.1546 16.1692 13.1199 16.2092 13.0519L18.1212 9.71189C18.1355 9.68913 18.1431 9.66279 18.1431 9.6359C18.1431 9.609 18.1355 9.58266 18.1212 9.5599L16.2998 6.36523C16.2929 6.35261 16.2826 6.34211 16.2702 6.33484C16.2578 6.32756 16.2436 6.32378 16.2292 6.3239ZM24.6158 17.0172C24.6772 17.0172 24.6932 17.0439 24.6612 17.0972L23.5518 19.0506L20.0678 25.1639C20.0613 25.1758 20.0516 25.1857 20.0399 25.1925C20.0281 25.1993 20.0147 25.2028 20.0012 25.2026C19.9876 25.2025 19.9744 25.1989 19.9627 25.1921C19.951 25.1853 19.9413 25.1756 19.9345 25.1639L15.3305 17.1212C15.3038 17.0759 15.3172 17.0519 15.3678 17.0492L15.6558 17.0332L24.6185 17.0172H24.6158Z" fill="url(%23paint0_linear_2130_22647)"/>%0A<defs>%0A<linearGradient id="paint0_linear_2130_22647" x1="5.33252" y1="5.33301" x2="35" y2="5.33301" gradientUnits="userSpaceOnUse">%0A<stop stop-color="%2300055F" stop-opacity="0.84"/>%0A<stop offset="1" stop-color="%236F69F7" stop-opacity="0.84"/>%0A</linearGradient>%0A</defs>%0A</svg>%0A';

// tasks/LLM/icons/silicon-flow.svg
var silicon_flow_default = 'data:image/svg+xml,<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">%0A<rect width="40" height="40" rx="8" fill="url(%23pattern0_2130_22425)"/>%0A<defs>%0A<pattern id="pattern0_2130_22425" patternContentUnits="objectBoundingBox" width="1" height="1">%0A<use xlink:href="%23image0_2130_22425" transform="scale(0.005)"/>%0A</pattern>%0A<image id="image0_2130_22425" width="200" height="200" preserveAspectRatio="none" xlink:href="data:image/jpeg;base64,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"/>%0A</defs>%0A</svg>%0A';

// tasks/LLM/icons/gemini.svg
var gemini_default = 'data:image/svg+xml,<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<path d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z" fill="white"/>%0A<g clip-path="url(%23clip0_2777_22422)">%0A<path d="M34 20.028C30.3673 20.2509 26.9416 21.7945 24.3681 24.3681C21.7945 26.9416 20.2509 30.3673 20.028 34H19.972C19.7494 30.3672 18.2059 26.9412 15.6324 24.3676C13.0588 21.7941 9.63279 20.2506 6 20.028L6 19.972C9.63279 19.7494 13.0588 18.2059 15.6324 15.6324C18.2059 13.0588 19.7494 9.63279 19.972 6L20.028 6C20.2509 9.63266 21.7945 13.0584 24.3681 15.6319C26.9416 18.2055 30.3673 19.7491 34 19.972V20.028Z" fill="url(%23paint0_radial_2777_22422)"/>%0A</g>%0A<defs>%0A<radialGradient id="paint0_radial_2777_22422" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.779 17.3802) rotate(18.6832) scale(29.8025 238.737)">%0A<stop offset="0.067" stop-color="%239168C0"/>%0A<stop offset="0.343" stop-color="%235684D1"/>%0A<stop offset="0.672" stop-color="%231BA1E3"/>%0A</radialGradient>%0A<clipPath id="clip0_2777_22422">%0A<rect width="28" height="28" fill="white" transform="translate(6 6)"/>%0A</clipPath>%0A</defs>%0A</svg>%0A';

// tasks/LLM/icons/default.svg
var default_default = 'data:image/svg+xml,<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<path d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z" fill="%23F6F8FA"/>%0A<path d="M14 24.96L15.52 23.44V25.6L13.76 27.28L12.48 26.72V22.96H10.24L9.52 22.24V10.24L10.24 9.52H28.24L29.04 10.24V16.96H27.52V10.96H11.04V21.52H13.28L14 22.24V24.96ZM23.44 27.52L26.24 30.24L27.52 29.76V27.52H29.76L30.48 26.72V19.28L29.76 18.48H17.76L17.04 19.28V26.72L17.76 27.52H23.44ZM23.76 26H18.48V20H29.04V26H26.72L26 26.72V27.92L24.24 26.24L23.76 26Z" fill="%236A6CC6"/>%0A</svg>%0A';

// tasks/LLM/icons/grok.svg
var grok_default = 'data:image/svg+xml,<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<path d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z" fill="black"/>%0A<g clip-path="url(%23clip0_2788_23746)">%0A<path d="M16.5864 24.2563L26.5591 16.5781C27.0491 16.2031 27.7473 16.3494 27.9809 16.9344C29.2073 20.0169 28.6591 23.7228 26.2191 26.2672C23.78 28.8116 20.3855 29.3703 17.2827 28.0991L13.8936 29.735C18.7545 33.2009 24.6573 32.3431 28.3464 28.4937C31.2727 25.4422 32.1791 21.2825 31.3318 17.5316L31.3391 17.54C30.1109 12.0294 31.6409 9.82719 34.7773 5.32344L35 5L30.8727 9.30313V9.29L16.5845 24.26M14.5273 26.1228C11.0391 22.6475 11.6409 17.2672 14.6182 14.165C16.8182 11.8691 20.4255 10.9325 23.5745 12.3097L26.9564 10.6812C26.3473 10.2219 25.5655 9.72781 24.67 9.38094C20.62 7.64281 15.7709 8.50813 12.4791 11.9384C9.31273 15.2413 8.31636 20.3197 10.0273 24.6519C11.3045 27.89 9.21 30.1813 7.1 32.4931C6.35455 33.3125 5.60545 34.1319 5 35L14.5255 26.1256" fill="white"/>%0A</g>%0A<defs>%0A<clipPath id="clip0_2788_23746">%0A<rect width="30" height="30" fill="white" transform="translate(5 5)"/>%0A</clipPath>%0A</defs>%0A</svg>%0A';

// tasks/LLM/icons/openai.svg
var openai_default = 'data:image/svg+xml,<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<rect width="40" height="40" rx="8" fill="white"/>%0A<path d="M32.1902 17.4058C32.4306 16.6802 32.5532 15.9204 32.5533 15.1556C32.5532 13.8901 32.2177 12.6475 31.5812 11.5554C30.3023 9.31886 27.9298 7.93804 25.3621 7.93804C24.8569 7.93804 24.3509 7.99165 23.8571 8.09815C23.1918 7.3451 22.3752 6.74229 21.4611 6.32946C20.5469 5.91663 19.5561 5.70316 18.5539 5.70312H18.5089C18.5043 5.70328 18.4972 5.70328 18.492 5.70328C15.3821 5.70328 12.6242 7.7193 11.6681 10.6914C9.66606 11.1026 7.93777 12.364 6.9273 14.1472C6.29279 15.2459 5.95841 16.4935 5.95801 17.7637C5.95826 19.5488 6.61787 21.2702 7.8091 22.5948C7.56864 23.3204 7.446 24.0802 7.4459 24.845C7.44601 26.1105 7.78151 27.3531 8.41793 28.4452C9.69676 30.6824 12.0695 32.0624 14.6375 32.0624C15.1431 32.0624 15.6472 32.0088 16.1416 31.9023C16.807 32.6553 17.6237 33.2582 18.5379 33.671C19.4521 34.0838 20.443 34.2973 21.4453 34.2974H21.4903L21.5086 34.2973C24.6202 34.2973 27.3772 32.2813 28.3333 29.3065C30.3354 28.8951 32.0636 27.6338 33.0741 25.8505C33.7079 24.7528 34.0417 23.5063 34.0415 22.2373C34.0413 20.4522 33.3817 18.7308 32.1905 17.4062L32.1902 17.4058ZM21.4921 32.428H21.4848C20.2397 32.4276 19.0341 31.9888 18.0777 31.1879C18.1345 31.1572 18.1906 31.1252 18.2461 31.0921L23.9132 27.8034C24.0547 27.7225 24.1722 27.6055 24.2541 27.4642C24.3359 27.3229 24.379 27.1623 24.379 26.9988V18.9667L26.7744 20.3562C26.7999 20.369 26.8174 20.3938 26.821 20.4222V27.0695C26.8177 30.0247 24.434 32.4221 21.4921 32.428ZM10.0321 27.5109C9.56397 26.6977 9.31737 25.775 9.31707 24.8356C9.31707 24.5292 9.34371 24.2221 9.39559 23.9203C9.4377 23.9456 9.51121 23.9907 9.56395 24.0211L15.2311 27.3098C15.3725 27.3925 15.5331 27.4361 15.6967 27.4361C15.8603 27.4361 16.0209 27.3924 16.1622 27.3096L23.0812 23.296V26.0751C23.082 26.0893 23.0793 26.1034 23.0733 26.1163C23.0673 26.1292 23.0583 26.1404 23.047 26.1489L17.3181 29.4719C16.5074 29.9406 15.5886 30.1874 14.6532 30.1878C13.717 30.1876 12.7972 29.9402 11.9861 29.4703C11.1751 29.0004 10.5012 28.3246 10.0321 27.5106L10.0321 27.5109ZM8.54121 15.0817C9.16361 13.9955 10.1464 13.1639 11.3176 12.7323C11.3176 12.7813 11.3148 12.8681 11.3148 12.9285V19.5058L11.3147 19.5113C11.3148 19.6746 11.3578 19.835 11.4395 19.9761C11.5212 20.1173 11.6386 20.2343 11.7799 20.3151L18.6989 24.3282L16.3036 25.7177C16.2917 25.7255 16.2782 25.7303 16.2641 25.7316C16.25 25.7328 16.2358 25.7306 16.2228 25.725L10.4933 22.3991C9.68335 21.9277 9.01092 21.2508 8.54342 20.4361C8.07592 19.6214 7.82978 18.6975 7.82965 17.7571C7.83003 16.8182 8.07549 15.8958 8.54152 15.0819L8.54121 15.0817ZM28.2214 19.6827L21.3025 15.6691L23.6979 14.2801C23.7097 14.2723 23.7232 14.2675 23.7373 14.2662C23.7514 14.2649 23.7656 14.2672 23.7786 14.2727L29.5081 17.5958C31.1572 18.5529 32.1746 20.3229 32.1746 22.2369C32.1746 24.4819 30.7802 26.4908 28.6836 27.2662V20.4921C28.6839 20.4896 28.6839 20.487 28.6839 20.4846C28.6839 20.1534 28.5072 19.8473 28.2214 19.6827ZM30.6057 16.0778C30.5636 16.0518 30.49 16.0073 30.4373 15.9768L24.7701 12.6881C24.6288 12.6054 24.4682 12.5618 24.3046 12.5617C24.1412 12.5617 23.9804 12.6055 23.8393 12.6881L16.9202 16.7017V13.9227L16.9201 13.9179C16.9201 13.9045 16.9232 13.8913 16.9292 13.8793C16.9352 13.8673 16.9438 13.8569 16.9545 13.8488L22.6834 10.5286C23.4938 10.0592 24.4127 9.81214 25.3481 9.81207C28.2937 9.81207 30.6825 12.212 30.6825 15.1712C30.6824 15.4749 30.6566 15.778 30.6057 16.0774V16.0778ZM15.6179 21.031L13.222 19.6415C13.2094 19.6352 13.1986 19.6259 13.1905 19.6144C13.1823 19.6029 13.1772 19.5895 13.1754 19.5755V12.9283C13.1767 9.97054 15.5655 7.57268 18.5099 7.57268C19.7569 7.57297 20.9645 8.01182 21.9231 8.81309C21.8663 8.84395 21.8102 8.87593 21.7547 8.909L16.0875 12.1976C15.9461 12.2784 15.8286 12.3954 15.7468 12.5367C15.665 12.678 15.6219 12.8385 15.6218 13.0019V13.0073L15.6179 21.031ZM16.9191 18.2125L20.0007 16.4244L23.0823 18.2114V21.7864L20.0007 23.5733L16.9191 21.7864V18.2125Z" fill="black"/>%0A</svg>%0A';

// tasks/LLM/icons/claude.svg
var claude_default = 'data:image/svg+xml,<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<path d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z" fill="%23D77655"/>%0A<path d="M11.1147 24.8503L16.869 21.6068L16.9657 21.3251L16.869 21.1684L16.5886 21.1683L15.6269 21.1088L12.339 21.0194L9.48764 20.9005L6.72506 20.7516L6.02998 20.6029L5.37842 19.7399L5.44553 19.3095L6.03006 18.9147L6.86732 18.9881L8.71756 19.115L11.4939 19.3075L13.5081 19.4266L16.4919 19.738H16.9657L17.0329 19.5456L16.8709 19.4266L16.7445 19.3075L13.8714 17.3514L10.7612 15.2843L9.13217 14.0939L8.25146 13.4909L7.80717 12.9255L7.61568 11.6916L8.41545 10.8068L9.48967 10.8802L9.76412 10.9537L10.8522 11.7947L13.1764 13.602L16.2114 15.8477L16.6557 16.2187L16.8334 16.0918L16.8551 16.0025L16.6557 15.6673L15.0049 12.6696L13.2435 9.62057L12.4595 8.35685L12.2522 7.59907C12.1791 7.28763 12.1258 7.0258 12.1258 6.70636L13.0362 5.46446L13.5397 5.30176L14.7541 5.46446L15.2656 5.91081L16.0199 7.64474L17.2422 10.3745L19.1379 14.0862L19.6929 15.1872L19.989 16.2069L20.0997 16.5184L20.291 16.5183V16.3397L20.447 14.2488L20.7353 11.6817L21.0157 8.37867L21.1125 7.44829L21.5705 6.33331L22.4808 5.7303L23.1917 6.07156L23.7762 6.91262L23.6953 7.45622L23.3477 9.72566L22.6665 13.2806L22.2222 15.6612H22.481L22.7772 15.3637L23.9758 13.7648L25.9901 11.2354L26.8787 10.2316L27.9154 9.12265L28.5808 8.59491L29.8386 8.59483L30.7647 9.97753L30.3501 11.4059L29.0547 13.0564L27.9804 14.455L26.4401 16.538L25.4785 18.2044L25.5674 18.3373L25.7965 18.3155L29.2758 17.5715L31.1557 17.2303L33.399 16.8436L34.414 17.3197L34.5246 17.8037L34.1257 18.7936L31.7265 19.3888L28.9126 19.9542L24.7222 20.9501L24.6709 20.9878L24.7301 21.0612L26.6179 21.2398L27.4255 21.2834H29.4022L33.0829 21.5592L34.0446 22.198L34.6212 22.9796L34.5245 23.5748L33.0435 24.3326L31.0451 23.8565L26.3809 22.7416L24.7814 22.3408L24.5603 22.3408V22.4737L25.8932 23.783L28.3358 25.999L31.3946 28.8556L31.5506 29.5619L31.1576 30.1194L30.743 30.0599L28.0554 28.0284L27.0187 27.1139L24.6708 25.1281L24.5149 25.128V25.3363L25.056 26.1318L27.9133 30.4466L28.0614 31.7699L27.8541 32.2004L27.1136 32.4602L26.3 32.3115L24.6275 29.9526L22.9015 27.2963L21.5094 24.9158L21.3397 25.0129L20.5182 33.9024L20.1331 34.3567L19.2445 34.698L18.504 34.1325L18.1111 33.218L18.504 31.4107L18.9779 29.052L19.363 27.1773L19.7105 24.8483L19.9179 24.0745L19.904 24.023L19.7343 24.0448L17.9866 26.4551L15.3287 30.0637L13.2257 32.3253L12.7222 32.5257L11.8493 32.0713L11.9303 31.26L12.418 30.5379L15.3287 26.8183L17.0842 24.513L18.2176 23.1818L18.2097 22.9895H18.1426L10.4119 28.0323L9.03545 28.2109L8.44303 27.6534L8.51615 26.7388L8.79654 26.4413L11.1207 24.8344L11.1128 24.8424L11.1147 24.8503Z" fill="%23FCF2EE"/>%0A</svg>%0A';

// tasks/LLM/inputRender.tsx
var import_react10 = __toESM(require_react());
var import_client = __toESM(require_client());

// node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}

// node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function toPrimitive(t, r2) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r2 || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t);
}

// node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

// node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(e, r2, t) {
  return (r2 = toPropertyKey(r2)) in e ? Object.defineProperty(e, r2, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r2] = t, e;
}

// node_modules/@babel/runtime/helpers/esm/objectSpread2.js
function ownKeys(e, r2) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e, r3).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys(Object(t), true).forEach(function(r3) {
      _defineProperty(e, r3, t[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r3) {
      Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t, r3));
    });
  }
  return e;
}

// node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(r2) {
  if (Array.isArray(r2)) return r2;
}

// node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r2, l) {
  var t = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r2)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r3) {
      o = true, n = r3;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

// node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(r2, a) {
  (null == a || a > r2.length) && (a = r2.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r2[e];
  return n;
}

// node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(r2, a) {
  if (r2) {
    if ("string" == typeof r2) return _arrayLikeToArray(r2, a);
    var t = {}.toString.call(r2).slice(8, -1);
    return "Object" === t && r2.constructor && (t = r2.constructor.name), "Map" === t || "Set" === t ? Array.from(r2) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r2, a) : void 0;
  }
}

// node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function _slicedToArray(r2, e) {
  return _arrayWithHoles(r2) || _iterableToArrayLimit(r2, e) || _unsupportedIterableToArray(r2, e) || _nonIterableRest();
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r2, e) {
  if (null == r2) return {};
  var t = {};
  for (var n in r2) if ({}.hasOwnProperty.call(r2, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r2[n];
  }
  return t;
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o, r2, i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r2 = 0; r2 < n.length; r2++) o = n[r2], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}

// node_modules/react-select/dist/useStateManager-7e1e8489.esm.js
var import_react = __toESM(require_react());
var _excluded = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function useStateManager(_ref3) {
  var _ref$defaultInputValu = _ref3.defaultInputValue, defaultInputValue = _ref$defaultInputValu === void 0 ? "" : _ref$defaultInputValu, _ref$defaultMenuIsOpe = _ref3.defaultMenuIsOpen, defaultMenuIsOpen = _ref$defaultMenuIsOpe === void 0 ? false : _ref$defaultMenuIsOpe, _ref$defaultValue = _ref3.defaultValue, defaultValue = _ref$defaultValue === void 0 ? null : _ref$defaultValue, propsInputValue = _ref3.inputValue, propsMenuIsOpen = _ref3.menuIsOpen, propsOnChange = _ref3.onChange, propsOnInputChange = _ref3.onInputChange, propsOnMenuClose = _ref3.onMenuClose, propsOnMenuOpen = _ref3.onMenuOpen, propsValue = _ref3.value, restSelectProps = _objectWithoutProperties(_ref3, _excluded);
  var _useState = (0, import_react.useState)(propsInputValue !== void 0 ? propsInputValue : defaultInputValue), _useState2 = _slicedToArray(_useState, 2), stateInputValue = _useState2[0], setStateInputValue = _useState2[1];
  var _useState3 = (0, import_react.useState)(propsMenuIsOpen !== void 0 ? propsMenuIsOpen : defaultMenuIsOpen), _useState4 = _slicedToArray(_useState3, 2), stateMenuIsOpen = _useState4[0], setStateMenuIsOpen = _useState4[1];
  var _useState5 = (0, import_react.useState)(propsValue !== void 0 ? propsValue : defaultValue), _useState6 = _slicedToArray(_useState5, 2), stateValue = _useState6[0], setStateValue = _useState6[1];
  var onChange2 = (0, import_react.useCallback)(function(value2, actionMeta) {
    if (typeof propsOnChange === "function") {
      propsOnChange(value2, actionMeta);
    }
    setStateValue(value2);
  }, [propsOnChange]);
  var onInputChange = (0, import_react.useCallback)(function(value2, actionMeta) {
    var newValue;
    if (typeof propsOnInputChange === "function") {
      newValue = propsOnInputChange(value2, actionMeta);
    }
    setStateInputValue(newValue !== void 0 ? newValue : value2);
  }, [propsOnInputChange]);
  var onMenuOpen = (0, import_react.useCallback)(function() {
    if (typeof propsOnMenuOpen === "function") {
      propsOnMenuOpen();
    }
    setStateMenuIsOpen(true);
  }, [propsOnMenuOpen]);
  var onMenuClose = (0, import_react.useCallback)(function() {
    if (typeof propsOnMenuClose === "function") {
      propsOnMenuClose();
    }
    setStateMenuIsOpen(false);
  }, [propsOnMenuClose]);
  var inputValue = propsInputValue !== void 0 ? propsInputValue : stateInputValue;
  var menuIsOpen = propsMenuIsOpen !== void 0 ? propsMenuIsOpen : stateMenuIsOpen;
  var value = propsValue !== void 0 ? propsValue : stateValue;
  return _objectSpread2(_objectSpread2({}, restSelectProps), {}, {
    inputValue,
    menuIsOpen,
    onChange: onChange2,
    onInputChange,
    onMenuClose,
    onMenuOpen,
    value
  });
}

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

// node_modules/react-select/dist/react-select.esm.js
var React5 = __toESM(require_react());
var import_react8 = __toESM(require_react());

// node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}

// node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(e, r2) {
  for (var t = 0; t < r2.length; t++) {
    var o = r2[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r2, t) {
  return r2 && _defineProperties(e.prototype, r2), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}

// node_modules/@babel/runtime/helpers/esm/inherits.js
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t, "prototype", {
    writable: false
  }), e && _setPrototypeOf(t, e);
}

// node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, _getPrototypeOf(t);
}

// node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

// node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}

// node_modules/@babel/runtime/helpers/esm/createSuper.js
function _createSuper(t) {
  var r2 = _isNativeReflectConstruct();
  return function() {
    var e, o = _getPrototypeOf(t);
    if (r2) {
      var s = _getPrototypeOf(this).constructor;
      e = Reflect.construct(o, arguments, s);
    } else e = o.apply(this, arguments);
    return _possibleConstructorReturn(this, e);
  };
}

// node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(r2) {
  if (Array.isArray(r2)) return _arrayLikeToArray(r2);
}

// node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(r2) {
  if ("undefined" != typeof Symbol && null != r2[Symbol.iterator] || null != r2["@@iterator"]) return Array.from(r2);
}

// node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
function _toConsumableArray(r2) {
  return _arrayWithoutHoles(r2) || _iterableToArray(r2) || _unsupportedIterableToArray(r2) || _nonIterableSpread();
}

// node_modules/react-select/dist/Select-aab027f3.esm.js
var React4 = __toESM(require_react());
var import_react6 = __toESM(require_react());

// node_modules/@emotion/react/dist/emotion-element-f0de968e.browser.esm.js
var React2 = __toESM(require_react());
var import_react2 = __toESM(require_react());

// node_modules/@emotion/sheet/dist/emotion-sheet.esm.js
var isDevelopment = false;
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
  return void 0;
}
function createStyleElement(options2) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options2.key);
  if (options2.nonce !== void 0) {
    tag.setAttribute("nonce", options2.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  tag.setAttribute("data-s", "");
  return tag;
}
var StyleSheet = /* @__PURE__ */ function() {
  function StyleSheet2(options2) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options2.speedy === void 0 ? !isDevelopment : options2.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options2.nonce;
    this.key = options2.key;
    this.container = options2.container;
    this.prepend = options2.prepend;
    this.insertionPoint = options2.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag) {
      var _tag$parentNode;
      return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };
  return StyleSheet2;
}();

// node_modules/stylis/src/Enum.js
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";

// node_modules/stylis/src/Utility.js
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length2) {
  return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index2) {
  return value.charCodeAt(index2) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}

// node_modules/stylis/src/Tokenizer.js
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
}
function copy(root, props) {
  return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index2, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index2, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      // ] ) " '
      case type:
        return position;
      // " '
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      // (
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      // \
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index2) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index2, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index2) {
  while (!token(peek()))
    next();
  return slice(index2, position);
}

// node_modules/stylis/src/Parser.js
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index2 = 0;
  var offset2 = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      // (
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
            ampersand = -1;
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      // \
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      // /
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      // {
      case 123 * variable:
        points[index2++] = strlen(characters2) * ampersand;
      // } ; \0
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          // \0 }
          case 0:
          case 125:
            scanning = 0;
          // ;
          case 59 + offset2:
            if (ampersand == -1) characters2 = replace(characters2, /\f/g, "");
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          // @ ;
          case 59:
            characters2 += ";";
          // { rule/at-rule
          default:
            append(reference = ruleset(characters2, root, parent, index2, offset2, rules, points, type, props = [], children = [], length2), rulesets);
            if (character2 === 123)
              if (offset2 === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index2 = offset2 = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      // :
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          // &
          case 38:
            ampersand = offset2 > 0 ? 1 : (characters2 += "\f", -1);
            break;
          // ,
          case 44:
            points[index2++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          // @
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset2 = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          // -
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index2, offset2, rules, points, type, props, children, length2) {
  var post = offset2 - 1;
  var rule = offset2 === 0 ? rules : [""];
  var size2 = sizeof(rule);
  for (var i = 0, j = 0, k = 0; i < index2; ++i)
    for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size2; ++x)
      if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x])))
        props[k++] = z;
  return node(value, root, parent, offset2 === 0 ? RULESET : type, props, children, length2);
}
function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root, parent, length2) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}

// node_modules/stylis/src/Serializer.js
function serialize(children, callback) {
  var output = "";
  var length2 = sizeof(children);
  for (var i = 0; i < length2; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
function stringify(element, index2, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length) break;
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}

// node_modules/stylis/src/Middleware.js
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index2, children, callback) {
    var output = "";
    for (var i = 0; i < length2; i++)
      output += collection[i](element, index2, children, callback) || "";
    return output;
  };
}
function rulesheet(callback) {
  return function(element) {
    if (!element.root) {
      if (element = element.return)
        callback(element);
    }
  };
}

// node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0) cache[arg] = fn(arg);
    return cache[arg];
  };
}

// node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index2) {
  var previous = 0;
  var character2 = 0;
  while (true) {
    previous = character2;
    character2 = peek();
    if (previous === 38 && character2 === 12) {
      points[index2] = 1;
    }
    if (token(character2)) {
      break;
    }
    next();
  }
  return slice(begin, position);
};
var toRules = function toRules2(parsed, points) {
  var index2 = -1;
  var character2 = 44;
  do {
    switch (token(character2)) {
      case 0:
        if (character2 === 38 && peek() === 12) {
          points[index2] = 1;
        }
        parsed[index2] += identifierWithPointTracking(position - 1, points, index2);
        break;
      case 2:
        parsed[index2] += delimit(character2);
        break;
      case 4:
        if (character2 === 44) {
          parsed[++index2] = peek() === 58 ? "&\f" : "";
          points[index2] = parsed[index2].length;
          break;
        }
      // fallthrough
      default:
        parsed[index2] += from(character2);
    }
  } while (character2 = next());
  return parsed;
};
var getRules = function getRules2(value, points) {
  return dealloc(toRules(alloc(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== "rule" || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }
  var value = element.value;
  var parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== "rule") {
    parent = parent.parent;
    if (!parent) return;
  }
  if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel2(element) {
  if (element.type === "decl") {
    var value = element.value;
    if (
      // charcode for l
      value.charCodeAt(0) === 108 && // charcode for b
      value.charCodeAt(2) === 98
    ) {
      element["return"] = "";
      element.value = "";
    }
  }
};
function prefix(value, length2) {
  switch (hash(value, length2)) {
    // color-adjust
    case 5103:
      return WEBKIT + "print-" + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    // flex, flex-direction
    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    // order
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    // align-items
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    // align-self
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
    // align-content
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
    // flex-shrink
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    // flex-basis
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    // flex-grow
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    // transition
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    // cursor
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    // background, background-image
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    // justify-content
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6) switch (charat(value, length2 + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (charat(value, length2 + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
        // (s)tretch
        case 115:
          return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
      }
      break;
    // position: sticky
    case 4949:
      if (charat(value, length2 + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
        // stic(k)y
        case 107:
          return replace(value, ":", ":" + WEBKIT) + value;
        // (inline-)?fl(e)x
        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
      }
      break;
    // writing-mode
    case 5936:
      switch (charat(value, length2 + 11)) {
        // vertical-l(r)
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        // vertical-r(l)
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        // horizontal(-)tb
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
      return WEBKIT + value + MS + value + value;
  }
  return value;
}
var prefixer = function prefixer2(element, index2, children, callback) {
  if (element.length > -1) {
    if (!element["return"]) switch (element.type) {
      case DECLARATION:
        element["return"] = prefix(element.value, element.length);
        break;
      case KEYFRAMES:
        return serialize([copy(element, {
          value: replace(element.value, "@", "@" + WEBKIT)
        })], callback);
      case RULESET:
        if (element.length) return combine(element.props, function(value) {
          switch (match(value, /(::plac\w+|:read-\w+)/)) {
            // :read-(only|write)
            case ":read-only":
            case ":read-write":
              return serialize([copy(element, {
                props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")]
              })], callback);
            // :placeholder
            case "::placeholder":
              return serialize([copy(element, {
                props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]
              }), copy(element, {
                props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")]
              }), copy(element, {
                props: [replace(value, /:(plac\w+)/, MS + "input-$1")]
              })], callback);
          }
          return "";
        });
    }
  }
};
var defaultStylisPlugins = [prefixer];
var createCache = function createCache2(options2) {
  var key = options2.key;
  if (key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node2) {
      var dataEmotionAttribute = node2.getAttribute("data-emotion");
      if (dataEmotionAttribute.indexOf(" ") === -1) {
        return;
      }
      document.head.appendChild(node2);
      node2.setAttribute("data-s", "");
    });
  }
  var stylisPlugins = options2.stylisPlugins || defaultStylisPlugins;
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  {
    container = options2.container || document.head;
    Array.prototype.forEach.call(
      // this means we will ignore elements which don't have a space in them which
      // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
      document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
      function(node2) {
        var attrib = node2.getAttribute("data-emotion").split(" ");
        for (var i = 1; i < attrib.length; i++) {
          inserted[attrib[i]] = true;
        }
        nodesToHydrate.push(node2);
      }
    );
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  {
    var currentSheet;
    var finalizingPlugins = [stringify, rulesheet(function(rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis2(styles) {
      return serialize(compile(styles), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }
  var cache = {
    key,
    sheet: new StyleSheet({
      key,
      container,
      nonce: options2.nonce,
      speedy: options2.speedy,
      prepend: options2.prepend,
      insertionPoint: options2.insertionPoint
    }),
    nonce: options2.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

// node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames2) {
  var rawClassName = "";
  classNames2.split(" ").forEach(function(className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className] + ";");
    } else if (className) {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles2(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  if (
    // we only need to add the styles to the registered cache if the
    // class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false || // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser === false) && cache.registered[className] === void 0
  ) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;
  if (cache.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
      current = current.next;
    } while (current !== void 0);
  }
};

// node_modules/@emotion/hash/dist/emotion-hash.esm.js
function murmur2(str) {
  var h = 0;
  var k, i = 0, len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
    k = /* Math.imul(k, m): */
    (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
    k ^= /* k >>> r: */
    k >>> 24;
    h = /* Math.imul(k, m): */
    (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 255;
      h = /* Math.imul(h, m): */
      (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  h ^= h >>> 13;
  h = /* Math.imul(h, m): */
  (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

// node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

// node_modules/@emotion/serialize/dist/emotion-serialize.esm.js
var isDevelopment2 = false;
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName = /* @__PURE__ */ memoize(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex, function(match2, p1, p2) {
          cursor = {
            name: p1,
            styles: p2,
            next: cursor
          };
          return p1;
        });
      }
    }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  var componentSelector = interpolation;
  if (componentSelector.__emotion_styles !== void 0) {
    return componentSelector;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      var keyframes2 = interpolation;
      if (keyframes2.anim === 1) {
        cursor = {
          name: keyframes2.name,
          styles: keyframes2.styles,
          next: cursor
        };
        return keyframes2.name;
      }
      var serializedStyles = interpolation;
      if (serializedStyles.styles !== void 0) {
        var next2 = serializedStyles.next;
        if (next2 !== void 0) {
          while (next2 !== void 0) {
            cursor = {
              name: next2.name,
              styles: next2.styles,
              next: cursor
            };
            next2 = next2.next;
          }
        }
        var styles = serializedStyles.styles + ";";
        return styles;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      }
      break;
    }
  }
  var asString = interpolation;
  if (registered == null) {
    return asString;
  }
  var cached = registered[asString];
  return cached !== void 0 ? cached : asString;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var key in obj) {
      var value = obj[key];
      if (typeof value !== "object") {
        var asString = value;
        if (registered != null && registered[asString] !== void 0) {
          string += key + "{" + registered[asString] + "}";
        } else if (isProcessableValue(asString)) {
          string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
        }
      } else {
        if (key === "NO_COMPONENT_SELECTOR" && isDevelopment2) {
          throw new Error(noComponentSelectorMessage);
        }
        if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (key) {
            case "animation":
            case "animationName": {
              string += processStyleName(key) + ":" + interpolated + ";";
              break;
            }
            default: {
              string += key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g;
var cursor;
function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles = "";
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    var asTemplateStringsArr = strings;
    styles += asTemplateStringsArr[0];
  }
  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);
    if (stringMode) {
      var templateStringsArr = strings;
      styles += templateStringsArr[i];
    }
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match2;
  while ((match2 = labelPattern.exec(styles)) !== null) {
    identifierName += "-" + match2[1];
  }
  var name = murmur2(styles) + identifierName;
  return {
    name,
    styles,
    next: cursor
  };
}

// node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js
var React = __toESM(require_react());
var syncFallback = function syncFallback2(create) {
  return create();
};
var useInsertionEffect2 = React["useInsertionEffect"] ? React["useInsertionEffect"] : false;
var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect2 || syncFallback;

// node_modules/@emotion/react/dist/emotion-element-f0de968e.browser.esm.js
var isDevelopment3 = false;
var EmotionCacheContext = /* @__PURE__ */ React2.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache({
    key: "css"
  }) : null
);
var CacheProvider = EmotionCacheContext.Provider;
var withEmotionCache = function withEmotionCache2(func) {
  return /* @__PURE__ */ (0, import_react2.forwardRef)(function(props, ref) {
    var cache = (0, import_react2.useContext)(EmotionCacheContext);
    return func(props, cache, ref);
  });
};
var ThemeContext = /* @__PURE__ */ React2.createContext({});
var hasOwn = {}.hasOwnProperty;
var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
var createEmotionProps = function createEmotionProps2(type, props) {
  var newProps = {};
  for (var _key in props) {
    if (hasOwn.call(props, _key)) {
      newProps[_key] = props[_key];
    }
  }
  newProps[typePropName] = type;
  return newProps;
};
var Insertion = function Insertion2(_ref3) {
  var cache = _ref3.cache, serialized = _ref3.serialized, isStringTag = _ref3.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  useInsertionEffectAlwaysWithSyncFallback(function() {
    return insertStyles(cache, serialized, isStringTag);
  });
  return null;
};
var Emotion = /* @__PURE__ */ withEmotionCache(function(props, cache, ref) {
  var cssProp = props.css;
  if (typeof cssProp === "string" && cache.registered[cssProp] !== void 0) {
    cssProp = cache.registered[cssProp];
  }
  var WrappedComponent = props[typePropName];
  var registeredStyles = [cssProp];
  var className = "";
  if (typeof props.className === "string") {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }
  var serialized = serializeStyles(registeredStyles, void 0, React2.useContext(ThemeContext));
  className += cache.key + "-" + serialized.name;
  var newProps = {};
  for (var _key2 in props) {
    if (hasOwn.call(props, _key2) && _key2 !== "css" && _key2 !== typePropName && !isDevelopment3) {
      newProps[_key2] = props[_key2];
    }
  }
  newProps.className = className;
  if (ref) {
    newProps.ref = ref;
  }
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(Insertion, {
    cache,
    serialized,
    isStringTag: typeof WrappedComponent === "string"
  }), /* @__PURE__ */ React2.createElement(WrappedComponent, newProps));
});
var Emotion$1 = Emotion;

// node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var React3 = __toESM(require_react());
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
var jsx = function jsx2(type, props) {
  var args = arguments;
  if (props == null || !hasOwn.call(props, "css")) {
    return React3.createElement.apply(void 0, args);
  }
  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion$1;
  createElementArgArray[1] = createEmotionProps(type, props);
  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  }
  return React3.createElement.apply(null, createElementArgArray);
};
(function(_jsx) {
  var JSX;
  /* @__PURE__ */ (function(_JSX) {
  })(JSX || (JSX = _jsx.JSX || (_jsx.JSX = {})));
})(jsx || (jsx = {}));
function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return serializeStyles(args);
}
function keyframes() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name;
  return {
    name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}

// node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}

// node_modules/react-select/dist/index-641ee5b8.esm.js
var import_react5 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v
});
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node2) {
  if (isNode(node2)) {
    return (node2.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node2) {
  var _node$ownerDocument;
  return (node2 == null || (_node$ownerDocument = node2.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node2) {
  var _ref3;
  return (_ref3 = (isNode(node2) ? node2.ownerDocument : node2.document) || window.document) == null ? void 0 : _ref3.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node2) {
  return ["html", "body", "#document"].includes(getNodeName(node2));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getParentNode(node2) {
  if (getNodeName(node2) === "html") {
    return node2;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node2.assignedSlot || // DOM Element detected.
    node2.parentNode || // ShadowRoot detected.
    isShadowRoot(node2) && node2.host || // Fallback.
    getDocumentElement(node2)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node2) {
  const parentNode = getParentNode(node2);
  if (isLastTraversableNode(parentNode)) {
    return node2.ownerDocument ? node2.ownerDocument.body : node2.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node2, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node2);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node2.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css5 = getComputedStyle2(element);
  let width = parseFloat(css5.width) || 0;
  let height = parseFloat(css5.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css5 = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css5.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css5.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options2 = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        refresh();
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options2,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options2);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options2;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref3) => {
      let [firstEntry] = _ref3;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

// node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js
var import_react3 = __toESM(require_react());
var index = import_react3.useLayoutEffect;

// node_modules/react-select/dist/index-641ee5b8.esm.js
var _excluded$4 = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"];
var noop = function noop2() {
};
function applyPrefixToName(prefix2, name) {
  if (!name) {
    return prefix2;
  } else if (name[0] === "-") {
    return prefix2 + name;
  } else {
    return prefix2 + "__" + name;
  }
}
function classNames(prefix2, state) {
  for (var _len = arguments.length, classNameList = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    classNameList[_key - 2] = arguments[_key];
  }
  var arr = [].concat(classNameList);
  if (state && prefix2) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("".concat(applyPrefixToName(prefix2, key)));
      }
    }
  }
  return arr.filter(function(i) {
    return i;
  }).map(function(i) {
    return String(i).trim();
  }).join(" ");
}
var cleanValue = function cleanValue2(value) {
  if (isArray(value)) return value.filter(Boolean);
  if (_typeof(value) === "object" && value !== null) return [value];
  return [];
};
var cleanCommonProps = function cleanCommonProps2(props) {
  props.className;
  props.clearValue;
  props.cx;
  props.getStyles;
  props.getClassNames;
  props.getValue;
  props.hasValue;
  props.isMulti;
  props.isRtl;
  props.options;
  props.selectOption;
  props.selectProps;
  props.setValue;
  props.theme;
  var innerProps = _objectWithoutProperties(props, _excluded$4);
  return _objectSpread2({}, innerProps);
};
var getStyleProps = function getStyleProps2(props, name, classNamesState) {
  var cx = props.cx, getStyles = props.getStyles, getClassNames = props.getClassNames, className = props.className;
  return {
    css: getStyles(name, props),
    className: cx(classNamesState !== null && classNamesState !== void 0 ? classNamesState : {}, getClassNames(name, props), className)
  };
};
function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
}
function normalizedHeight(el) {
  if (isDocumentElement(el)) {
    return window.innerHeight;
  }
  return el.clientHeight;
}
function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }
  return el.scrollTop;
}
function scrollTo(el, top) {
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }
  el.scrollTop = top;
}
function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === "absolute";
  var overflowRx = /(auto|scroll)/;
  if (style.position === "fixed") return document.documentElement;
  for (var parent = element; parent = parent.parentElement; ) {
    style = getComputedStyle(parent);
    if (excludeStaticParent && style.position === "static") {
      continue;
    }
    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }
  return document.documentElement;
}
function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}
function animatedScrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200;
  var callback = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : noop;
  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;
  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);
    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      callback(element);
    }
  }
  animateScroll();
}
function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;
  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
}
function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}
function isTouchCapable() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}
function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
}
var passiveOptionAccessed = false;
var options = {
  get passive() {
    return passiveOptionAccessed = true;
  }
};
var w = typeof window !== "undefined" ? window : {};
if (w.addEventListener && w.removeEventListener) {
  w.addEventListener("p", noop, options);
  w.removeEventListener("p", noop, false);
}
var supportsPassiveEvents = passiveOptionAccessed;
function notNullish(item) {
  return item != null;
}
function isArray(arg) {
  return Array.isArray(arg);
}
function valueTernary(isMulti, multiValue, singleValue) {
  return isMulti ? multiValue : singleValue;
}
function singleValueAsValue(singleValue) {
  return singleValue;
}
function multiValueAsValue(multiValue) {
  return multiValue;
}
var removeProps = function removeProps2(propsObj) {
  for (var _len2 = arguments.length, properties = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    properties[_key2 - 1] = arguments[_key2];
  }
  var propsMap = Object.entries(propsObj).filter(function(_ref3) {
    var _ref23 = _slicedToArray(_ref3, 1), key = _ref23[0];
    return !properties.includes(key);
  });
  return propsMap.reduce(function(newProps, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2), key = _ref4[0], val = _ref4[1];
    newProps[key] = val;
    return newProps;
  }, {});
};
var _excluded$3 = ["children", "innerProps"];
var _excluded2$1 = ["children", "innerProps"];
function getMenuPlacement(_ref3) {
  var preferredMaxHeight = _ref3.maxHeight, menuEl = _ref3.menuEl, minHeight = _ref3.minHeight, preferredPlacement = _ref3.placement, shouldScroll = _ref3.shouldScroll, isFixedPosition = _ref3.isFixedPosition, controlHeight2 = _ref3.controlHeight;
  var scrollParent = getScrollParent(menuEl);
  var defaultState = {
    placement: "bottom",
    maxHeight: preferredMaxHeight
  };
  if (!menuEl || !menuEl.offsetParent) return defaultState;
  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(), scrollHeight = _scrollParent$getBoun.height;
  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(), menuBottom = _menuEl$getBoundingCl.bottom, menuHeight = _menuEl$getBoundingCl.height, menuTop = _menuEl$getBoundingCl.top;
  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(), containerTop = _menuEl$offsetParent$.top;
  var viewHeight = isFixedPosition ? window.innerHeight : normalizedHeight(scrollParent);
  var scrollTop = getScrollTop(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;
  switch (preferredPlacement) {
    case "auto":
    case "bottom":
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: "bottom",
          maxHeight: preferredMaxHeight
        };
      }
      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }
        return {
          placement: "bottom",
          maxHeight: preferredMaxHeight
        };
      }
      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }
        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: "bottom",
          maxHeight: constrainedHeight
        };
      }
      if (preferredPlacement === "auto" || isFixedPosition) {
        var _constrainedHeight = preferredMaxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;
        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - controlHeight2, preferredMaxHeight);
        }
        return {
          placement: "top",
          maxHeight: _constrainedHeight
        };
      }
      if (preferredPlacement === "bottom") {
        if (shouldScroll) {
          scrollTo(scrollParent, scrollDown);
        }
        return {
          placement: "bottom",
          maxHeight: preferredMaxHeight
        };
      }
      break;
    case "top":
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: "top",
          maxHeight: preferredMaxHeight
        };
      }
      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }
        return {
          placement: "top",
          maxHeight: preferredMaxHeight
        };
      }
      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = preferredMaxHeight;
        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }
        return {
          placement: "top",
          maxHeight: _constrainedHeight2
        };
      }
      return {
        placement: "bottom",
        maxHeight: preferredMaxHeight
      };
    default:
      throw new Error('Invalid placement provided "'.concat(preferredPlacement, '".'));
  }
  return defaultState;
}
function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: "top",
    top: "bottom"
  };
  return placement ? placementToCSSProp[placement] : "bottom";
}
var coercePlacement = function coercePlacement2(p) {
  return p === "auto" ? "bottom" : p;
};
var menuCSS = function menuCSS2(_ref23, unstyled) {
  var _objectSpread22;
  var placement = _ref23.placement, _ref2$theme = _ref23.theme, borderRadius2 = _ref2$theme.borderRadius, spacing2 = _ref2$theme.spacing, colors2 = _ref2$theme.colors;
  return _objectSpread2((_objectSpread22 = {
    label: "menu"
  }, _defineProperty(_objectSpread22, alignToControl(placement), "100%"), _defineProperty(_objectSpread22, "position", "absolute"), _defineProperty(_objectSpread22, "width", "100%"), _defineProperty(_objectSpread22, "zIndex", 1), _objectSpread22), unstyled ? {} : {
    backgroundColor: colors2.neutral0,
    borderRadius: borderRadius2,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: spacing2.menuGutter,
    marginTop: spacing2.menuGutter
  });
};
var PortalPlacementContext = /* @__PURE__ */ (0, import_react5.createContext)(null);
var MenuPlacer = function MenuPlacer2(props) {
  var children = props.children, minMenuHeight = props.minMenuHeight, maxMenuHeight = props.maxMenuHeight, menuPlacement = props.menuPlacement, menuPosition = props.menuPosition, menuShouldScrollIntoView = props.menuShouldScrollIntoView, theme = props.theme;
  var _ref3 = (0, import_react5.useContext)(PortalPlacementContext) || {}, setPortalPlacement = _ref3.setPortalPlacement;
  var ref = (0, import_react5.useRef)(null);
  var _useState = (0, import_react5.useState)(maxMenuHeight), _useState2 = _slicedToArray(_useState, 2), maxHeight = _useState2[0], setMaxHeight = _useState2[1];
  var _useState3 = (0, import_react5.useState)(null), _useState4 = _slicedToArray(_useState3, 2), placement = _useState4[0], setPlacement = _useState4[1];
  var controlHeight2 = theme.spacing.controlHeight;
  index(function() {
    var menuEl = ref.current;
    if (!menuEl) return;
    var isFixedPosition = menuPosition === "fixed";
    var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
    var state = getMenuPlacement({
      maxHeight: maxMenuHeight,
      menuEl,
      minHeight: minMenuHeight,
      placement: menuPlacement,
      shouldScroll,
      isFixedPosition,
      controlHeight: controlHeight2
    });
    setMaxHeight(state.maxHeight);
    setPlacement(state.placement);
    setPortalPlacement === null || setPortalPlacement === void 0 ? void 0 : setPortalPlacement(state.placement);
  }, [maxMenuHeight, menuPlacement, menuPosition, menuShouldScrollIntoView, minMenuHeight, setPortalPlacement, controlHeight2]);
  return children({
    ref,
    placerProps: _objectSpread2(_objectSpread2({}, props), {}, {
      placement: placement || coercePlacement(menuPlacement),
      maxHeight
    })
  });
};
var Menu = function Menu2(props) {
  var children = props.children, innerRef = props.innerRef, innerProps = props.innerProps;
  return jsx("div", _extends({}, getStyleProps(props, "menu", {
    menu: true
  }), {
    ref: innerRef
  }, innerProps), children);
};
var Menu$1 = Menu;
var menuListCSS = function menuListCSS2(_ref4, unstyled) {
  var maxHeight = _ref4.maxHeight, baseUnit2 = _ref4.theme.spacing.baseUnit;
  return _objectSpread2({
    maxHeight,
    overflowY: "auto",
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }, unstyled ? {} : {
    paddingBottom: baseUnit2,
    paddingTop: baseUnit2
  });
};
var MenuList = function MenuList2(props) {
  var children = props.children, innerProps = props.innerProps, innerRef = props.innerRef, isMulti = props.isMulti;
  return jsx("div", _extends({}, getStyleProps(props, "menuList", {
    "menu-list": true,
    "menu-list--is-multi": isMulti
  }), {
    ref: innerRef
  }, innerProps), children);
};
var noticeCSS = function noticeCSS2(_ref5, unstyled) {
  var _ref5$theme = _ref5.theme, baseUnit2 = _ref5$theme.spacing.baseUnit, colors2 = _ref5$theme.colors;
  return _objectSpread2({
    textAlign: "center"
  }, unstyled ? {} : {
    color: colors2.neutral40,
    padding: "".concat(baseUnit2 * 2, "px ").concat(baseUnit2 * 3, "px")
  });
};
var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;
var NoOptionsMessage = function NoOptionsMessage2(_ref6) {
  var _ref6$children = _ref6.children, children = _ref6$children === void 0 ? "No options" : _ref6$children, innerProps = _ref6.innerProps, restProps = _objectWithoutProperties(_ref6, _excluded$3);
  return jsx("div", _extends({}, getStyleProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
    children,
    innerProps
  }), "noOptionsMessage", {
    "menu-notice": true,
    "menu-notice--no-options": true
  }), innerProps), children);
};
var LoadingMessage = function LoadingMessage2(_ref7) {
  var _ref7$children = _ref7.children, children = _ref7$children === void 0 ? "Loading..." : _ref7$children, innerProps = _ref7.innerProps, restProps = _objectWithoutProperties(_ref7, _excluded2$1);
  return jsx("div", _extends({}, getStyleProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
    children,
    innerProps
  }), "loadingMessage", {
    "menu-notice": true,
    "menu-notice--loading": true
  }), innerProps), children);
};
var menuPortalCSS = function menuPortalCSS2(_ref8) {
  var rect = _ref8.rect, offset2 = _ref8.offset, position2 = _ref8.position;
  return {
    left: rect.left,
    position: position2,
    top: offset2,
    width: rect.width,
    zIndex: 1
  };
};
var MenuPortal = function MenuPortal2(props) {
  var appendTo = props.appendTo, children = props.children, controlElement = props.controlElement, innerProps = props.innerProps, menuPlacement = props.menuPlacement, menuPosition = props.menuPosition;
  var menuPortalRef = (0, import_react5.useRef)(null);
  var cleanupRef = (0, import_react5.useRef)(null);
  var _useState5 = (0, import_react5.useState)(coercePlacement(menuPlacement)), _useState6 = _slicedToArray(_useState5, 2), placement = _useState6[0], setPortalPlacement = _useState6[1];
  var portalPlacementContext = (0, import_react5.useMemo)(function() {
    return {
      setPortalPlacement
    };
  }, []);
  var _useState7 = (0, import_react5.useState)(null), _useState8 = _slicedToArray(_useState7, 2), computedPosition = _useState8[0], setComputedPosition = _useState8[1];
  var updateComputedPosition = (0, import_react5.useCallback)(function() {
    if (!controlElement) return;
    var rect = getBoundingClientObj(controlElement);
    var scrollDistance = menuPosition === "fixed" ? 0 : window.pageYOffset;
    var offset2 = rect[placement] + scrollDistance;
    if (offset2 !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset) || rect.left !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left) || rect.width !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width)) {
      setComputedPosition({
        offset: offset2,
        rect
      });
    }
  }, [controlElement, menuPosition, placement, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width]);
  index(function() {
    updateComputedPosition();
  }, [updateComputedPosition]);
  var runAutoUpdate = (0, import_react5.useCallback)(function() {
    if (typeof cleanupRef.current === "function") {
      cleanupRef.current();
      cleanupRef.current = null;
    }
    if (controlElement && menuPortalRef.current) {
      cleanupRef.current = autoUpdate(controlElement, menuPortalRef.current, updateComputedPosition, {
        elementResize: "ResizeObserver" in window
      });
    }
  }, [controlElement, updateComputedPosition]);
  index(function() {
    runAutoUpdate();
  }, [runAutoUpdate]);
  var setMenuPortalElement = (0, import_react5.useCallback)(function(menuPortalElement) {
    menuPortalRef.current = menuPortalElement;
    runAutoUpdate();
  }, [runAutoUpdate]);
  if (!appendTo && menuPosition !== "fixed" || !computedPosition) return null;
  var menuWrapper = jsx("div", _extends({
    ref: setMenuPortalElement
  }, getStyleProps(_objectSpread2(_objectSpread2({}, props), {}, {
    offset: computedPosition.offset,
    position: menuPosition,
    rect: computedPosition.rect
  }), "menuPortal", {
    "menu-portal": true
  }), innerProps), children);
  return jsx(PortalPlacementContext.Provider, {
    value: portalPlacementContext
  }, appendTo ? /* @__PURE__ */ (0, import_react_dom.createPortal)(menuWrapper, appendTo) : menuWrapper);
};
var containerCSS = function containerCSS2(_ref3) {
  var isDisabled = _ref3.isDisabled, isRtl = _ref3.isRtl;
  return {
    label: "container",
    direction: isRtl ? "rtl" : void 0,
    pointerEvents: isDisabled ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
};
var SelectContainer = function SelectContainer2(props) {
  var children = props.children, innerProps = props.innerProps, isDisabled = props.isDisabled, isRtl = props.isRtl;
  return jsx("div", _extends({}, getStyleProps(props, "container", {
    "--is-disabled": isDisabled,
    "--is-rtl": isRtl
  }), innerProps), children);
};
var valueContainerCSS = function valueContainerCSS2(_ref23, unstyled) {
  var spacing2 = _ref23.theme.spacing, isMulti = _ref23.isMulti, hasValue = _ref23.hasValue, controlShouldRenderValue = _ref23.selectProps.controlShouldRenderValue;
  return _objectSpread2({
    alignItems: "center",
    display: isMulti && hasValue && controlShouldRenderValue ? "flex" : "grid",
    flex: 1,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, unstyled ? {} : {
    padding: "".concat(spacing2.baseUnit / 2, "px ").concat(spacing2.baseUnit * 2, "px")
  });
};
var ValueContainer = function ValueContainer2(props) {
  var children = props.children, innerProps = props.innerProps, isMulti = props.isMulti, hasValue = props.hasValue;
  return jsx("div", _extends({}, getStyleProps(props, "valueContainer", {
    "value-container": true,
    "value-container--is-multi": isMulti,
    "value-container--has-value": hasValue
  }), innerProps), children);
};
var indicatorsContainerCSS = function indicatorsContainerCSS2() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
};
var IndicatorsContainer = function IndicatorsContainer2(props) {
  var children = props.children, innerProps = props.innerProps;
  return jsx("div", _extends({}, getStyleProps(props, "indicatorsContainer", {
    indicators: true
  }), innerProps), children);
};
var _templateObject;
var _excluded$2 = ["size"];
var _excluded2 = ["innerProps", "isRtl", "size"];
var _ref2 = true ? {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
} : {
  name: "tj5bde-Svg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
var Svg = function Svg2(_ref3) {
  var size2 = _ref3.size, props = _objectWithoutProperties(_ref3, _excluded$2);
  return jsx("svg", _extends({
    height: size2,
    width: size2,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: _ref2
  }, props));
};
var CrossIcon = function CrossIcon2(props) {
  return jsx(Svg, _extends({
    size: 20
  }, props), jsx("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};
var DownChevron = function DownChevron2(props) {
  return jsx(Svg, _extends({
    size: 20
  }, props), jsx("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
};
var baseCSS = function baseCSS2(_ref3, unstyled) {
  var isFocused = _ref3.isFocused, _ref3$theme = _ref3.theme, baseUnit2 = _ref3$theme.spacing.baseUnit, colors2 = _ref3$theme.colors;
  return _objectSpread2({
    label: "indicatorContainer",
    display: "flex",
    transition: "color 150ms"
  }, unstyled ? {} : {
    color: isFocused ? colors2.neutral60 : colors2.neutral20,
    padding: baseUnit2 * 2,
    ":hover": {
      color: isFocused ? colors2.neutral80 : colors2.neutral40
    }
  });
};
var dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = function DropdownIndicator2(props) {
  var children = props.children, innerProps = props.innerProps;
  return jsx("div", _extends({}, getStyleProps(props, "dropdownIndicator", {
    indicator: true,
    "dropdown-indicator": true
  }), innerProps), children || jsx(DownChevron, null));
};
var clearIndicatorCSS = baseCSS;
var ClearIndicator = function ClearIndicator2(props) {
  var children = props.children, innerProps = props.innerProps;
  return jsx("div", _extends({}, getStyleProps(props, "clearIndicator", {
    indicator: true,
    "clear-indicator": true
  }), innerProps), children || jsx(CrossIcon, null));
};
var indicatorSeparatorCSS = function indicatorSeparatorCSS2(_ref4, unstyled) {
  var isDisabled = _ref4.isDisabled, _ref4$theme = _ref4.theme, baseUnit2 = _ref4$theme.spacing.baseUnit, colors2 = _ref4$theme.colors;
  return _objectSpread2({
    label: "indicatorSeparator",
    alignSelf: "stretch",
    width: 1
  }, unstyled ? {} : {
    backgroundColor: isDisabled ? colors2.neutral10 : colors2.neutral20,
    marginBottom: baseUnit2 * 2,
    marginTop: baseUnit2 * 2
  });
};
var IndicatorSeparator = function IndicatorSeparator2(props) {
  var innerProps = props.innerProps;
  return jsx("span", _extends({}, innerProps, getStyleProps(props, "indicatorSeparator", {
    "indicator-separator": true
  })));
};
var loadingDotAnimations = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"])));
var loadingIndicatorCSS = function loadingIndicatorCSS2(_ref5, unstyled) {
  var isFocused = _ref5.isFocused, size2 = _ref5.size, _ref5$theme = _ref5.theme, colors2 = _ref5$theme.colors, baseUnit2 = _ref5$theme.spacing.baseUnit;
  return _objectSpread2({
    label: "loadingIndicator",
    display: "flex",
    transition: "color 150ms",
    alignSelf: "center",
    fontSize: size2,
    lineHeight: 1,
    marginRight: size2,
    textAlign: "center",
    verticalAlign: "middle"
  }, unstyled ? {} : {
    color: isFocused ? colors2.neutral60 : colors2.neutral20,
    padding: baseUnit2 * 2
  });
};
var LoadingDot = function LoadingDot2(_ref6) {
  var delay = _ref6.delay, offset2 = _ref6.offset;
  return jsx("span", {
    css: /* @__PURE__ */ css({
      animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: offset2 ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, true ? "" : ";label:LoadingDot;", true ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1RSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */")
  });
};
var LoadingIndicator = function LoadingIndicator2(_ref7) {
  var innerProps = _ref7.innerProps, isRtl = _ref7.isRtl, _ref7$size = _ref7.size, size2 = _ref7$size === void 0 ? 4 : _ref7$size, restProps = _objectWithoutProperties(_ref7, _excluded2);
  return jsx("div", _extends({}, getStyleProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
    innerProps,
    isRtl,
    size: size2
  }), "loadingIndicator", {
    indicator: true,
    "loading-indicator": true
  }), innerProps), jsx(LoadingDot, {
    delay: 0,
    offset: isRtl
  }), jsx(LoadingDot, {
    delay: 160,
    offset: true
  }), jsx(LoadingDot, {
    delay: 320,
    offset: !isRtl
  }));
};
var css$1 = function css2(_ref3, unstyled) {
  var isDisabled = _ref3.isDisabled, isFocused = _ref3.isFocused, _ref$theme = _ref3.theme, colors2 = _ref$theme.colors, borderRadius2 = _ref$theme.borderRadius, spacing2 = _ref$theme.spacing;
  return _objectSpread2({
    label: "control",
    alignItems: "center",
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: spacing2.controlHeight,
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms"
  }, unstyled ? {} : {
    backgroundColor: isDisabled ? colors2.neutral5 : colors2.neutral0,
    borderColor: isDisabled ? colors2.neutral10 : isFocused ? colors2.primary : colors2.neutral20,
    borderRadius: borderRadius2,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px ".concat(colors2.primary) : void 0,
    "&:hover": {
      borderColor: isFocused ? colors2.primary : colors2.neutral30
    }
  });
};
var Control = function Control2(props) {
  var children = props.children, isDisabled = props.isDisabled, isFocused = props.isFocused, innerRef = props.innerRef, innerProps = props.innerProps, menuIsOpen = props.menuIsOpen;
  return jsx("div", _extends({
    ref: innerRef
  }, getStyleProps(props, "control", {
    control: true,
    "control--is-disabled": isDisabled,
    "control--is-focused": isFocused,
    "control--menu-is-open": menuIsOpen
  }), innerProps, {
    "aria-disabled": isDisabled || void 0
  }), children);
};
var Control$1 = Control;
var _excluded$1 = ["data"];
var groupCSS = function groupCSS2(_ref3, unstyled) {
  var spacing2 = _ref3.theme.spacing;
  return unstyled ? {} : {
    paddingBottom: spacing2.baseUnit * 2,
    paddingTop: spacing2.baseUnit * 2
  };
};
var Group = function Group2(props) {
  var children = props.children, cx = props.cx, getStyles = props.getStyles, getClassNames = props.getClassNames, Heading = props.Heading, headingProps = props.headingProps, innerProps = props.innerProps, label = props.label, theme = props.theme, selectProps = props.selectProps;
  return jsx("div", _extends({}, getStyleProps(props, "group", {
    group: true
  }), innerProps), jsx(Heading, _extends({}, headingProps, {
    selectProps,
    theme,
    getStyles,
    getClassNames,
    cx
  }), label), jsx("div", null, children));
};
var groupHeadingCSS = function groupHeadingCSS2(_ref23, unstyled) {
  var _ref2$theme = _ref23.theme, colors2 = _ref2$theme.colors, spacing2 = _ref2$theme.spacing;
  return _objectSpread2({
    label: "group",
    cursor: "default",
    display: "block"
  }, unstyled ? {} : {
    color: colors2.neutral40,
    fontSize: "75%",
    fontWeight: 500,
    marginBottom: "0.25em",
    paddingLeft: spacing2.baseUnit * 3,
    paddingRight: spacing2.baseUnit * 3,
    textTransform: "uppercase"
  });
};
var GroupHeading = function GroupHeading2(props) {
  var _cleanCommonProps = cleanCommonProps(props);
  _cleanCommonProps.data;
  var innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded$1);
  return jsx("div", _extends({}, getStyleProps(props, "groupHeading", {
    "group-heading": true
  }), innerProps));
};
var Group$1 = Group;
var _excluded3 = ["innerRef", "isDisabled", "isHidden", "inputClassName"];
var inputCSS = function inputCSS2(_ref3, unstyled) {
  var isDisabled = _ref3.isDisabled, value = _ref3.value, _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
  return _objectSpread2(_objectSpread2({
    visibility: isDisabled ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: value ? "translateZ(0)" : ""
  }, containerStyle), unstyled ? {} : {
    margin: spacing2.baseUnit / 2,
    paddingBottom: spacing2.baseUnit / 2,
    paddingTop: spacing2.baseUnit / 2,
    color: colors2.neutral80
  });
};
var spacingStyle = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
};
var containerStyle = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": _objectSpread2({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, spacingStyle)
};
var inputStyle = function inputStyle2(isHidden) {
  return _objectSpread2({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: isHidden ? 0 : 1,
    width: "100%"
  }, spacingStyle);
};
var Input = function Input2(props) {
  var cx = props.cx, value = props.value;
  var _cleanCommonProps = cleanCommonProps(props), innerRef = _cleanCommonProps.innerRef, isDisabled = _cleanCommonProps.isDisabled, isHidden = _cleanCommonProps.isHidden, inputClassName = _cleanCommonProps.inputClassName, innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded3);
  return jsx("div", _extends({}, getStyleProps(props, "input", {
    "input-container": true
  }), {
    "data-value": value || ""
  }), jsx("input", _extends({
    className: cx({
      input: true
    }, inputClassName),
    ref: innerRef,
    style: inputStyle(isHidden),
    disabled: isDisabled
  }, innerProps)));
};
var Input$1 = Input;
var multiValueCSS = function multiValueCSS2(_ref3, unstyled) {
  var _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, borderRadius2 = _ref$theme.borderRadius, colors2 = _ref$theme.colors;
  return _objectSpread2({
    label: "multiValue",
    display: "flex",
    minWidth: 0
  }, unstyled ? {} : {
    backgroundColor: colors2.neutral10,
    borderRadius: borderRadius2 / 2,
    margin: spacing2.baseUnit / 2
  });
};
var multiValueLabelCSS = function multiValueLabelCSS2(_ref23, unstyled) {
  var _ref2$theme = _ref23.theme, borderRadius2 = _ref2$theme.borderRadius, colors2 = _ref2$theme.colors, cropWithEllipsis = _ref23.cropWithEllipsis;
  return _objectSpread2({
    overflow: "hidden",
    textOverflow: cropWithEllipsis || cropWithEllipsis === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }, unstyled ? {} : {
    borderRadius: borderRadius2 / 2,
    color: colors2.neutral80,
    fontSize: "85%",
    padding: 3,
    paddingLeft: 6
  });
};
var multiValueRemoveCSS = function multiValueRemoveCSS2(_ref3, unstyled) {
  var _ref3$theme = _ref3.theme, spacing2 = _ref3$theme.spacing, borderRadius2 = _ref3$theme.borderRadius, colors2 = _ref3$theme.colors, isFocused = _ref3.isFocused;
  return _objectSpread2({
    alignItems: "center",
    display: "flex"
  }, unstyled ? {} : {
    borderRadius: borderRadius2 / 2,
    backgroundColor: isFocused ? colors2.dangerLight : void 0,
    paddingLeft: spacing2.baseUnit,
    paddingRight: spacing2.baseUnit,
    ":hover": {
      backgroundColor: colors2.dangerLight,
      color: colors2.danger
    }
  });
};
var MultiValueGeneric = function MultiValueGeneric2(_ref4) {
  var children = _ref4.children, innerProps = _ref4.innerProps;
  return jsx("div", innerProps, children);
};
var MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = MultiValueGeneric;
function MultiValueRemove(_ref5) {
  var children = _ref5.children, innerProps = _ref5.innerProps;
  return jsx("div", _extends({
    role: "button"
  }, innerProps), children || jsx(CrossIcon, {
    size: 14
  }));
}
var MultiValue = function MultiValue2(props) {
  var children = props.children, components2 = props.components, data = props.data, innerProps = props.innerProps, isDisabled = props.isDisabled, removeProps3 = props.removeProps, selectProps = props.selectProps;
  var Container = components2.Container, Label = components2.Label, Remove = components2.Remove;
  return jsx(Container, {
    data,
    innerProps: _objectSpread2(_objectSpread2({}, getStyleProps(props, "multiValue", {
      "multi-value": true,
      "multi-value--is-disabled": isDisabled
    })), innerProps),
    selectProps
  }, jsx(Label, {
    data,
    innerProps: _objectSpread2({}, getStyleProps(props, "multiValueLabel", {
      "multi-value__label": true
    })),
    selectProps
  }, children), jsx(Remove, {
    data,
    innerProps: _objectSpread2(_objectSpread2({}, getStyleProps(props, "multiValueRemove", {
      "multi-value__remove": true
    })), {}, {
      "aria-label": "Remove ".concat(children || "option")
    }, removeProps3),
    selectProps
  }));
};
var MultiValue$1 = MultiValue;
var optionCSS = function optionCSS2(_ref3, unstyled) {
  var isDisabled = _ref3.isDisabled, isFocused = _ref3.isFocused, isSelected = _ref3.isSelected, _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
  return _objectSpread2({
    label: "option",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    width: "100%",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
  }, unstyled ? {} : {
    backgroundColor: isSelected ? colors2.primary : isFocused ? colors2.primary25 : "transparent",
    color: isDisabled ? colors2.neutral20 : isSelected ? colors2.neutral0 : "inherit",
    padding: "".concat(spacing2.baseUnit * 2, "px ").concat(spacing2.baseUnit * 3, "px"),
    // provide some affordance on touch devices
    ":active": {
      backgroundColor: !isDisabled ? isSelected ? colors2.primary : colors2.primary50 : void 0
    }
  });
};
var Option = function Option2(props) {
  var children = props.children, isDisabled = props.isDisabled, isFocused = props.isFocused, isSelected = props.isSelected, innerRef = props.innerRef, innerProps = props.innerProps;
  return jsx("div", _extends({}, getStyleProps(props, "option", {
    option: true,
    "option--is-disabled": isDisabled,
    "option--is-focused": isFocused,
    "option--is-selected": isSelected
  }), {
    ref: innerRef,
    "aria-disabled": isDisabled
  }, innerProps), children);
};
var Option$1 = Option;
var placeholderCSS = function placeholderCSS2(_ref3, unstyled) {
  var _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
  return _objectSpread2({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, unstyled ? {} : {
    color: colors2.neutral50,
    marginLeft: spacing2.baseUnit / 2,
    marginRight: spacing2.baseUnit / 2
  });
};
var Placeholder = function Placeholder2(props) {
  var children = props.children, innerProps = props.innerProps;
  return jsx("div", _extends({}, getStyleProps(props, "placeholder", {
    placeholder: true
  }), innerProps), children);
};
var Placeholder$1 = Placeholder;
var css3 = function css4(_ref3, unstyled) {
  var isDisabled = _ref3.isDisabled, _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
  return _objectSpread2({
    label: "singleValue",
    gridArea: "1 / 1 / 2 / 3",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, unstyled ? {} : {
    color: isDisabled ? colors2.neutral40 : colors2.neutral80,
    marginLeft: spacing2.baseUnit / 2,
    marginRight: spacing2.baseUnit / 2
  });
};
var SingleValue = function SingleValue2(props) {
  var children = props.children, isDisabled = props.isDisabled, innerProps = props.innerProps;
  return jsx("div", _extends({}, getStyleProps(props, "singleValue", {
    "single-value": true,
    "single-value--is-disabled": isDisabled
  }), innerProps), children);
};
var SingleValue$1 = SingleValue;
var components = {
  ClearIndicator,
  Control: Control$1,
  DropdownIndicator,
  DownChevron,
  CrossIcon,
  Group: Group$1,
  GroupHeading,
  IndicatorsContainer,
  IndicatorSeparator,
  Input: Input$1,
  LoadingIndicator,
  Menu: Menu$1,
  MenuList,
  MenuPortal,
  LoadingMessage,
  NoOptionsMessage,
  MultiValue: MultiValue$1,
  MultiValueContainer,
  MultiValueLabel,
  MultiValueRemove,
  Option: Option$1,
  Placeholder: Placeholder$1,
  SelectContainer,
  SingleValue: SingleValue$1,
  ValueContainer
};
var defaultComponents = function defaultComponents2(props) {
  return _objectSpread2(_objectSpread2({}, components), props.components);
};

// node_modules/memoize-one/dist/memoize-one.esm.js
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual2) {
  if (isEqual2 === void 0) {
    isEqual2 = areInputsEqual;
  }
  var cache = null;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (cache && cache.lastThis === this && isEqual2(newArgs, cache.lastArgs)) {
      return cache.lastResult;
    }
    var lastResult = resultFn.apply(this, newArgs);
    cache = {
      lastResult,
      lastArgs: newArgs,
      lastThis: this
    };
    return lastResult;
  }
  memoized.clear = function clear() {
    cache = null;
  };
  return memoized;
}

// node_modules/react-select/dist/Select-aab027f3.esm.js
var _ref = true ? {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
} : {
  name: "1f43avz-a11yText-A11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPSSIsImZpbGUiOiJBMTF5VGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IEpTWCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG5jb25zdCBBMTF5VGV4dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ10pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$2
};
var A11yText = function A11yText2(props) {
  return jsx("span", _extends({
    css: _ref
  }, props));
};
var A11yText$1 = A11yText;
var defaultAriaLiveMessages = {
  guidance: function guidance(props) {
    var isSearchable = props.isSearchable, isMulti = props.isMulti, tabSelectsValue = props.tabSelectsValue, context = props.context, isInitialFocus = props.isInitialFocus;
    switch (context) {
      case "menu":
        return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(tabSelectsValue ? ", press Tab to select the option and exit the menu" : "", ".");
      case "input":
        return isInitialFocus ? "".concat(props["aria-label"] || "Select", " is focused ").concat(isSearchable ? ",type to refine list" : "", ", press Down to open the menu, ").concat(isMulti ? " press left to focus selected values" : "") : "";
      case "value":
        return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
      default:
        return "";
    }
  },
  onChange: function onChange(props) {
    var action = props.action, _props$label = props.label, label = _props$label === void 0 ? "" : _props$label, labels = props.labels, isDisabled = props.isDisabled;
    switch (action) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(label, ", deselected.");
      case "clear":
        return "All selected options have been cleared.";
      case "initial-input-focus":
        return "option".concat(labels.length > 1 ? "s" : "", " ").concat(labels.join(","), ", selected.");
      case "select-option":
        return isDisabled ? "option ".concat(label, " is disabled. Select another option.") : "option ".concat(label, ", selected.");
      default:
        return "";
    }
  },
  onFocus: function onFocus(props) {
    var context = props.context, focused = props.focused, options2 = props.options, _props$label2 = props.label, label = _props$label2 === void 0 ? "" : _props$label2, selectValue = props.selectValue, isDisabled = props.isDisabled, isSelected = props.isSelected, isAppleDevice2 = props.isAppleDevice;
    var getArrayIndex = function getArrayIndex2(arr, item) {
      return arr && arr.length ? "".concat(arr.indexOf(item) + 1, " of ").concat(arr.length) : "";
    };
    if (context === "value" && selectValue) {
      return "value ".concat(label, " focused, ").concat(getArrayIndex(selectValue, focused), ".");
    }
    if (context === "menu" && isAppleDevice2) {
      var disabled = isDisabled ? " disabled" : "";
      var status = "".concat(isSelected ? " selected" : "").concat(disabled);
      return "".concat(label).concat(status, ", ").concat(getArrayIndex(options2, focused), ".");
    }
    return "";
  },
  onFilter: function onFilter(props) {
    var inputValue = props.inputValue, resultsMessage = props.resultsMessage;
    return "".concat(resultsMessage).concat(inputValue ? " for search term " + inputValue : "", ".");
  }
};
var LiveRegion = function LiveRegion2(props) {
  var ariaSelection = props.ariaSelection, focusedOption = props.focusedOption, focusedValue = props.focusedValue, focusableOptions = props.focusableOptions, isFocused = props.isFocused, selectValue = props.selectValue, selectProps = props.selectProps, id = props.id, isAppleDevice2 = props.isAppleDevice;
  var ariaLiveMessages = selectProps.ariaLiveMessages, getOptionLabel4 = selectProps.getOptionLabel, inputValue = selectProps.inputValue, isMulti = selectProps.isMulti, isOptionDisabled3 = selectProps.isOptionDisabled, isSearchable = selectProps.isSearchable, menuIsOpen = selectProps.menuIsOpen, options2 = selectProps.options, screenReaderStatus2 = selectProps.screenReaderStatus, tabSelectsValue = selectProps.tabSelectsValue, isLoading = selectProps.isLoading;
  var ariaLabel = selectProps["aria-label"];
  var ariaLive = selectProps["aria-live"];
  var messages2 = (0, import_react6.useMemo)(function() {
    return _objectSpread2(_objectSpread2({}, defaultAriaLiveMessages), ariaLiveMessages || {});
  }, [ariaLiveMessages]);
  var ariaSelected = (0, import_react6.useMemo)(function() {
    var message = "";
    if (ariaSelection && messages2.onChange) {
      var option = ariaSelection.option, selectedOptions = ariaSelection.options, removedValue = ariaSelection.removedValue, removedValues = ariaSelection.removedValues, value = ariaSelection.value;
      var asOption = function asOption2(val) {
        return !Array.isArray(val) ? val : null;
      };
      var selected = removedValue || option || asOption(value);
      var label = selected ? getOptionLabel4(selected) : "";
      var multiSelected = selectedOptions || removedValues || void 0;
      var labels = multiSelected ? multiSelected.map(getOptionLabel4) : [];
      var onChangeProps = _objectSpread2({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: selected && isOptionDisabled3(selected, selectValue),
        label,
        labels
      }, ariaSelection);
      message = messages2.onChange(onChangeProps);
    }
    return message;
  }, [ariaSelection, messages2, isOptionDisabled3, selectValue, getOptionLabel4]);
  var ariaFocused = (0, import_react6.useMemo)(function() {
    var focusMsg = "";
    var focused = focusedOption || focusedValue;
    var isSelected = !!(focusedOption && selectValue && selectValue.includes(focusedOption));
    if (focused && messages2.onFocus) {
      var onFocusProps = {
        focused,
        label: getOptionLabel4(focused),
        isDisabled: isOptionDisabled3(focused, selectValue),
        isSelected,
        options: focusableOptions,
        context: focused === focusedOption ? "menu" : "value",
        selectValue,
        isAppleDevice: isAppleDevice2
      };
      focusMsg = messages2.onFocus(onFocusProps);
    }
    return focusMsg;
  }, [focusedOption, focusedValue, getOptionLabel4, isOptionDisabled3, messages2, focusableOptions, selectValue, isAppleDevice2]);
  var ariaResults = (0, import_react6.useMemo)(function() {
    var resultsMsg = "";
    if (menuIsOpen && options2.length && !isLoading && messages2.onFilter) {
      var resultsMessage = screenReaderStatus2({
        count: focusableOptions.length
      });
      resultsMsg = messages2.onFilter({
        inputValue,
        resultsMessage
      });
    }
    return resultsMsg;
  }, [focusableOptions, inputValue, menuIsOpen, messages2, options2, screenReaderStatus2, isLoading]);
  var isInitialFocus = (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus";
  var ariaGuidance = (0, import_react6.useMemo)(function() {
    var guidanceMsg = "";
    if (messages2.guidance) {
      var context = focusedValue ? "value" : menuIsOpen ? "menu" : "input";
      guidanceMsg = messages2.guidance({
        "aria-label": ariaLabel,
        context,
        isDisabled: focusedOption && isOptionDisabled3(focusedOption, selectValue),
        isMulti,
        isSearchable,
        tabSelectsValue,
        isInitialFocus
      });
    }
    return guidanceMsg;
  }, [ariaLabel, focusedOption, focusedValue, isMulti, isOptionDisabled3, isSearchable, menuIsOpen, messages2, selectValue, tabSelectsValue, isInitialFocus]);
  var ScreenReaderText = jsx(import_react6.Fragment, null, jsx("span", {
    id: "aria-selection"
  }, ariaSelected), jsx("span", {
    id: "aria-focused"
  }, ariaFocused), jsx("span", {
    id: "aria-results"
  }, ariaResults), jsx("span", {
    id: "aria-guidance"
  }, ariaGuidance));
  return jsx(import_react6.Fragment, null, jsx(A11yText$1, {
    id
  }, isInitialFocus && ScreenReaderText), jsx(A11yText$1, {
    "aria-live": ariaLive,
    "aria-atomic": "false",
    "aria-relevant": "additions text",
    role: "log"
  }, isFocused && !isInitialFocus && ScreenReaderText));
};
var LiveRegion$1 = LiveRegion;
var diacritics = [{
  base: "A",
  letters: "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
}, {
  base: "AA",
  letters: "\uA732"
}, {
  base: "AE",
  letters: "\xC6\u01FC\u01E2"
}, {
  base: "AO",
  letters: "\uA734"
}, {
  base: "AU",
  letters: "\uA736"
}, {
  base: "AV",
  letters: "\uA738\uA73A"
}, {
  base: "AY",
  letters: "\uA73C"
}, {
  base: "B",
  letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
}, {
  base: "C",
  letters: "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"
}, {
  base: "D",
  letters: "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"
}, {
  base: "DZ",
  letters: "\u01F1\u01C4"
}, {
  base: "Dz",
  letters: "\u01F2\u01C5"
}, {
  base: "E",
  letters: "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
}, {
  base: "F",
  letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B"
}, {
  base: "G",
  letters: "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
}, {
  base: "H",
  letters: "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
}, {
  base: "I",
  letters: "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
}, {
  base: "J",
  letters: "J\u24BF\uFF2A\u0134\u0248"
}, {
  base: "K",
  letters: "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
}, {
  base: "L",
  letters: "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
}, {
  base: "LJ",
  letters: "\u01C7"
}, {
  base: "Lj",
  letters: "\u01C8"
}, {
  base: "M",
  letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
}, {
  base: "N",
  letters: "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
}, {
  base: "NJ",
  letters: "\u01CA"
}, {
  base: "Nj",
  letters: "\u01CB"
}, {
  base: "O",
  letters: "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
}, {
  base: "OI",
  letters: "\u01A2"
}, {
  base: "OO",
  letters: "\uA74E"
}, {
  base: "OU",
  letters: "\u0222"
}, {
  base: "P",
  letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
}, {
  base: "Q",
  letters: "Q\u24C6\uFF31\uA756\uA758\u024A"
}, {
  base: "R",
  letters: "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
}, {
  base: "S",
  letters: "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
}, {
  base: "T",
  letters: "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
}, {
  base: "TZ",
  letters: "\uA728"
}, {
  base: "U",
  letters: "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
}, {
  base: "V",
  letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
}, {
  base: "VY",
  letters: "\uA760"
}, {
  base: "W",
  letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
}, {
  base: "X",
  letters: "X\u24CD\uFF38\u1E8A\u1E8C"
}, {
  base: "Y",
  letters: "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
}, {
  base: "Z",
  letters: "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
}, {
  base: "a",
  letters: "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
}, {
  base: "aa",
  letters: "\uA733"
}, {
  base: "ae",
  letters: "\xE6\u01FD\u01E3"
}, {
  base: "ao",
  letters: "\uA735"
}, {
  base: "au",
  letters: "\uA737"
}, {
  base: "av",
  letters: "\uA739\uA73B"
}, {
  base: "ay",
  letters: "\uA73D"
}, {
  base: "b",
  letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
}, {
  base: "c",
  letters: "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
}, {
  base: "d",
  letters: "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
}, {
  base: "dz",
  letters: "\u01F3\u01C6"
}, {
  base: "e",
  letters: "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
}, {
  base: "f",
  letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C"
}, {
  base: "g",
  letters: "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
}, {
  base: "h",
  letters: "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
}, {
  base: "hv",
  letters: "\u0195"
}, {
  base: "i",
  letters: "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
}, {
  base: "j",
  letters: "j\u24D9\uFF4A\u0135\u01F0\u0249"
}, {
  base: "k",
  letters: "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
}, {
  base: "l",
  letters: "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
}, {
  base: "lj",
  letters: "\u01C9"
}, {
  base: "m",
  letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
}, {
  base: "n",
  letters: "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
}, {
  base: "nj",
  letters: "\u01CC"
}, {
  base: "o",
  letters: "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"
}, {
  base: "oi",
  letters: "\u01A3"
}, {
  base: "ou",
  letters: "\u0223"
}, {
  base: "oo",
  letters: "\uA74F"
}, {
  base: "p",
  letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
}, {
  base: "q",
  letters: "q\u24E0\uFF51\u024B\uA757\uA759"
}, {
  base: "r",
  letters: "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
}, {
  base: "s",
  letters: "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
}, {
  base: "t",
  letters: "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
}, {
  base: "tz",
  letters: "\uA729"
}, {
  base: "u",
  letters: "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
}, {
  base: "v",
  letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
}, {
  base: "vy",
  letters: "\uA761"
}, {
  base: "w",
  letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
}, {
  base: "x",
  letters: "x\u24E7\uFF58\u1E8B\u1E8D"
}, {
  base: "y",
  letters: "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
}, {
  base: "z",
  letters: "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
}];
var anyDiacritic = new RegExp("[" + diacritics.map(function(d) {
  return d.letters;
}).join("") + "]", "g");
var diacriticToBase = {};
for (i = 0; i < diacritics.length; i++) {
  diacritic = diacritics[i];
  for (j = 0; j < diacritic.letters.length; j++) {
    diacriticToBase[diacritic.letters[j]] = diacritic.base;
  }
}
var diacritic;
var j;
var i;
var stripDiacritics = function stripDiacritics2(str) {
  return str.replace(anyDiacritic, function(match2) {
    return diacriticToBase[match2];
  });
};
var memoizedStripDiacriticsForInput = memoizeOne(stripDiacritics);
var trimString = function trimString2(str) {
  return str.replace(/^\s+|\s+$/g, "");
};
var defaultStringify = function defaultStringify2(option) {
  return "".concat(option.label, " ").concat(option.value);
};
var createFilter = function createFilter2(config) {
  return function(option, rawInput) {
    if (option.data.__isNew__) return true;
    var _ignoreCase$ignoreAcc = _objectSpread2({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaultStringify,
      trim: true,
      matchFrom: "any"
    }, config), ignoreCase = _ignoreCase$ignoreAcc.ignoreCase, ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents, stringify2 = _ignoreCase$ignoreAcc.stringify, trim2 = _ignoreCase$ignoreAcc.trim, matchFrom = _ignoreCase$ignoreAcc.matchFrom;
    var input = trim2 ? trimString(rawInput) : rawInput;
    var candidate = trim2 ? trimString(stringify2(option)) : stringify2(option);
    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }
    if (ignoreAccents) {
      input = memoizedStripDiacriticsForInput(input);
      candidate = stripDiacritics(candidate);
    }
    return matchFrom === "start" ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};
var _excluded4 = ["innerRef"];
function DummyInput(_ref3) {
  var innerRef = _ref3.innerRef, props = _objectWithoutProperties(_ref3, _excluded4);
  var filteredProps = removeProps(props, "onExited", "in", "enter", "exit", "appear");
  return jsx("input", _extends({
    ref: innerRef
  }, filteredProps, {
    css: /* @__PURE__ */ css({
      label: "dummyInput",
      // get rid of any default styles
      background: 0,
      border: 0,
      // important! this hides the flashing cursor
      caretColor: "transparent",
      fontSize: "inherit",
      gridArea: "1 / 1 / 2 / 3",
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: "transparent",
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: "relative",
      transform: "scale(.01)"
    }, true ? "" : ";label:DummyInput;", true ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCTSIsImZpbGUiOiJEdW1teUlucHV0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyByZW1vdmVQcm9wcyB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHVtbXlJbnB1dCh7XG4gIGlubmVyUmVmLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbnB1dCddICYge1xuICByZWFkb25seSBpbm5lclJlZjogUmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xufSkge1xuICAvLyBSZW1vdmUgYW5pbWF0aW9uIHByb3BzIG5vdCBtZWFudCBmb3IgSFRNTCBlbGVtZW50c1xuICBjb25zdCBmaWx0ZXJlZFByb3BzID0gcmVtb3ZlUHJvcHMoXG4gICAgcHJvcHMsXG4gICAgJ29uRXhpdGVkJyxcbiAgICAnaW4nLFxuICAgICdlbnRlcicsXG4gICAgJ2V4aXQnLFxuICAgICdhcHBlYXInXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8aW5wdXRcbiAgICAgIHJlZj17aW5uZXJSZWZ9XG4gICAgICB7Li4uZmlsdGVyZWRQcm9wc31cbiAgICAgIGNzcz17e1xuICAgICAgICBsYWJlbDogJ2R1bW15SW5wdXQnLFxuICAgICAgICAvLyBnZXQgcmlkIG9mIGFueSBkZWZhdWx0IHN0eWxlc1xuICAgICAgICBiYWNrZ3JvdW5kOiAwLFxuICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgIC8vIGltcG9ydGFudCEgdGhpcyBoaWRlcyB0aGUgZmxhc2hpbmcgY3Vyc29yXG4gICAgICAgIGNhcmV0Q29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICAgIGdyaWRBcmVhOiAnMSAvIDEgLyAyIC8gMycsXG4gICAgICAgIG91dGxpbmU6IDAsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIC8vIGltcG9ydGFudCEgd2l0aG91dCBgd2lkdGhgIGJyb3dzZXJzIHdvbid0IGFsbG93IGZvY3VzXG4gICAgICAgIHdpZHRoOiAxLFxuXG4gICAgICAgIC8vIHJlbW92ZSBjdXJzb3Igb24gZGVza3RvcFxuICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcblxuICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIG1vYmlsZSB3aGlsc3QgbWFpbnRhaW5pbmcgXCJzY3JvbGwgaW50byB2aWV3XCIgYmVoYXZpb3VyXG4gICAgICAgIGxlZnQ6IC0xMDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSguMDEpJyxcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn1cbiJdfQ== */")
  }));
}
var cancelScroll = function cancelScroll2(event) {
  if (event.cancelable) event.preventDefault();
  event.stopPropagation();
};
function useScrollCapture(_ref3) {
  var isEnabled = _ref3.isEnabled, onBottomArrive = _ref3.onBottomArrive, onBottomLeave = _ref3.onBottomLeave, onTopArrive = _ref3.onTopArrive, onTopLeave = _ref3.onTopLeave;
  var isBottom = (0, import_react6.useRef)(false);
  var isTop = (0, import_react6.useRef)(false);
  var touchStart = (0, import_react6.useRef)(0);
  var scrollTarget = (0, import_react6.useRef)(null);
  var handleEventDelta = (0, import_react6.useCallback)(function(event, delta) {
    if (scrollTarget.current === null) return;
    var _scrollTarget$current = scrollTarget.current, scrollTop = _scrollTarget$current.scrollTop, scrollHeight = _scrollTarget$current.scrollHeight, clientHeight = _scrollTarget$current.clientHeight;
    var target = scrollTarget.current;
    var isDeltaPositive = delta > 0;
    var availableScroll = scrollHeight - clientHeight - scrollTop;
    var shouldCancelScroll = false;
    if (availableScroll > delta && isBottom.current) {
      if (onBottomLeave) onBottomLeave(event);
      isBottom.current = false;
    }
    if (isDeltaPositive && isTop.current) {
      if (onTopLeave) onTopLeave(event);
      isTop.current = false;
    }
    if (isDeltaPositive && delta > availableScroll) {
      if (onBottomArrive && !isBottom.current) {
        onBottomArrive(event);
      }
      target.scrollTop = scrollHeight;
      shouldCancelScroll = true;
      isBottom.current = true;
    } else if (!isDeltaPositive && -delta > scrollTop) {
      if (onTopArrive && !isTop.current) {
        onTopArrive(event);
      }
      target.scrollTop = 0;
      shouldCancelScroll = true;
      isTop.current = true;
    }
    if (shouldCancelScroll) {
      cancelScroll(event);
    }
  }, [onBottomArrive, onBottomLeave, onTopArrive, onTopLeave]);
  var onWheel = (0, import_react6.useCallback)(function(event) {
    handleEventDelta(event, event.deltaY);
  }, [handleEventDelta]);
  var onTouchStart = (0, import_react6.useCallback)(function(event) {
    touchStart.current = event.changedTouches[0].clientY;
  }, []);
  var onTouchMove = (0, import_react6.useCallback)(function(event) {
    var deltaY = touchStart.current - event.changedTouches[0].clientY;
    handleEventDelta(event, deltaY);
  }, [handleEventDelta]);
  var startListening = (0, import_react6.useCallback)(function(el) {
    if (!el) return;
    var notPassive = supportsPassiveEvents ? {
      passive: false
    } : false;
    el.addEventListener("wheel", onWheel, notPassive);
    el.addEventListener("touchstart", onTouchStart, notPassive);
    el.addEventListener("touchmove", onTouchMove, notPassive);
  }, [onTouchMove, onTouchStart, onWheel]);
  var stopListening = (0, import_react6.useCallback)(function(el) {
    if (!el) return;
    el.removeEventListener("wheel", onWheel, false);
    el.removeEventListener("touchstart", onTouchStart, false);
    el.removeEventListener("touchmove", onTouchMove, false);
  }, [onTouchMove, onTouchStart, onWheel]);
  (0, import_react6.useEffect)(function() {
    if (!isEnabled) return;
    var element = scrollTarget.current;
    startListening(element);
    return function() {
      stopListening(element);
    };
  }, [isEnabled, startListening, stopListening]);
  return function(element) {
    scrollTarget.current = element;
  };
}
var STYLE_KEYS = ["boxSizing", "height", "overflow", "paddingRight", "position"];
var LOCK_STYLES = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function preventTouchMove(e) {
  if (e.cancelable) e.preventDefault();
}
function allowTouchMove(e) {
  e.stopPropagation();
}
function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;
  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
}
function isTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var activeScrollLocks = 0;
var listenerOptions = {
  capture: false,
  passive: false
};
function useScrollLock(_ref3) {
  var isEnabled = _ref3.isEnabled, _ref$accountForScroll = _ref3.accountForScrollbars, accountForScrollbars = _ref$accountForScroll === void 0 ? true : _ref$accountForScroll;
  var originalStyles = (0, import_react6.useRef)({});
  var scrollTarget = (0, import_react6.useRef)(null);
  var addScrollLock = (0, import_react6.useCallback)(function(touchScrollTarget) {
    if (!canUseDOM) return;
    var target = document.body;
    var targetStyle = target && target.style;
    if (accountForScrollbars) {
      STYLE_KEYS.forEach(function(key) {
        var val = targetStyle && targetStyle[key];
        originalStyles.current[key] = val;
      });
    }
    if (accountForScrollbars && activeScrollLocks < 1) {
      var currentPadding = parseInt(originalStyles.current.paddingRight, 10) || 0;
      var clientWidth = document.body ? document.body.clientWidth : 0;
      var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
      Object.keys(LOCK_STYLES).forEach(function(key) {
        var val = LOCK_STYLES[key];
        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
      if (targetStyle) {
        targetStyle.paddingRight = "".concat(adjustedPadding, "px");
      }
    }
    if (target && isTouchDevice()) {
      target.addEventListener("touchmove", preventTouchMove, listenerOptions);
      if (touchScrollTarget) {
        touchScrollTarget.addEventListener("touchstart", preventInertiaScroll, listenerOptions);
        touchScrollTarget.addEventListener("touchmove", allowTouchMove, listenerOptions);
      }
    }
    activeScrollLocks += 1;
  }, [accountForScrollbars]);
  var removeScrollLock = (0, import_react6.useCallback)(function(touchScrollTarget) {
    if (!canUseDOM) return;
    var target = document.body;
    var targetStyle = target && target.style;
    activeScrollLocks = Math.max(activeScrollLocks - 1, 0);
    if (accountForScrollbars && activeScrollLocks < 1) {
      STYLE_KEYS.forEach(function(key) {
        var val = originalStyles.current[key];
        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
    }
    if (target && isTouchDevice()) {
      target.removeEventListener("touchmove", preventTouchMove, listenerOptions);
      if (touchScrollTarget) {
        touchScrollTarget.removeEventListener("touchstart", preventInertiaScroll, listenerOptions);
        touchScrollTarget.removeEventListener("touchmove", allowTouchMove, listenerOptions);
      }
    }
  }, [accountForScrollbars]);
  (0, import_react6.useEffect)(function() {
    if (!isEnabled) return;
    var element = scrollTarget.current;
    addScrollLock(element);
    return function() {
      removeScrollLock(element);
    };
  }, [isEnabled, addScrollLock, removeScrollLock]);
  return function(element) {
    scrollTarget.current = element;
  };
}
var blurSelectInput = function blurSelectInput2(event) {
  var element = event.target;
  return element.ownerDocument.activeElement && element.ownerDocument.activeElement.blur();
};
var _ref2$1 = true ? {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
} : {
  name: "bp8cua-ScrollManager",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EVSIsImZpbGUiOiJTY3JvbGxNYW5hZ2VyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgUmVmQ2FsbGJhY2ssIE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2Nyb2xsQ2FwdHVyZSBmcm9tICcuL3VzZVNjcm9sbENhcHR1cmUnO1xuaW1wb3J0IHVzZVNjcm9sbExvY2sgZnJvbSAnLi91c2VTY3JvbGxMb2NrJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IChyZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PikgPT4gUmVhY3RFbGVtZW50O1xuICByZWFkb25seSBsb2NrRW5hYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Cb3R0b21MZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9uVG9wQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Ub3BMZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJsdXJTZWxlY3RJbnB1dCA9IChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgcmV0dXJuIChcbiAgICBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxuICAgIChlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuYmx1cigpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxNYW5hZ2VyKHtcbiAgY2hpbGRyZW4sXG4gIGxvY2tFbmFibGVkLFxuICBjYXB0dXJlRW5hYmxlZCA9IHRydWUsXG4gIG9uQm90dG9tQXJyaXZlLFxuICBvbkJvdHRvbUxlYXZlLFxuICBvblRvcEFycml2ZSxcbiAgb25Ub3BMZWF2ZSxcbn06IFByb3BzKSB7XG4gIGNvbnN0IHNldFNjcm9sbENhcHR1cmVUYXJnZXQgPSB1c2VTY3JvbGxDYXB0dXJlKHtcbiAgICBpc0VuYWJsZWQ6IGNhcHR1cmVFbmFibGVkLFxuICAgIG9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmUsXG4gICAgb25Ub3BMZWF2ZSxcbiAgfSk7XG4gIGNvbnN0IHNldFNjcm9sbExvY2tUYXJnZXQgPSB1c2VTY3JvbGxMb2NrKHsgaXNFbmFibGVkOiBsb2NrRW5hYmxlZCB9KTtcblxuICBjb25zdCB0YXJnZXRSZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PiA9IChlbGVtZW50KSA9PiB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge2xvY2tFbmFibGVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2JsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbih0YXJnZXRSZWYpfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
};
function ScrollManager(_ref3) {
  var children = _ref3.children, lockEnabled = _ref3.lockEnabled, _ref$captureEnabled = _ref3.captureEnabled, captureEnabled = _ref$captureEnabled === void 0 ? true : _ref$captureEnabled, onBottomArrive = _ref3.onBottomArrive, onBottomLeave = _ref3.onBottomLeave, onTopArrive = _ref3.onTopArrive, onTopLeave = _ref3.onTopLeave;
  var setScrollCaptureTarget = useScrollCapture({
    isEnabled: captureEnabled,
    onBottomArrive,
    onBottomLeave,
    onTopArrive,
    onTopLeave
  });
  var setScrollLockTarget = useScrollLock({
    isEnabled: lockEnabled
  });
  var targetRef = function targetRef2(element) {
    setScrollCaptureTarget(element);
    setScrollLockTarget(element);
  };
  return jsx(import_react6.Fragment, null, lockEnabled && jsx("div", {
    onClick: blurSelectInput,
    css: _ref2$1
  }), children(targetRef));
}
var _ref22 = true ? {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
} : {
  name: "5kkxb2-requiredInput-RequiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%;label:RequiredInput;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVpcmVkSW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNJIiwiZmlsZSI6IlJlcXVpcmVkSW5wdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBGb2N1c0V2ZW50SGFuZGxlciwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IFJlcXVpcmVkSW5wdXQ6IEZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgcmVhZG9ubHkgb25Gb2N1czogRm9jdXNFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD47XG59PiA9ICh7IG5hbWUsIG9uRm9jdXMgfSkgPT4gKFxuICA8aW5wdXRcbiAgICByZXF1aXJlZFxuICAgIG5hbWU9e25hbWV9XG4gICAgdGFiSW5kZXg9ey0xfVxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAncmVxdWlyZWRJbnB1dCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH19XG4gICAgLy8gUHJldmVudCBgU3dpdGNoaW5nIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWRgIGVycm9yXG4gICAgdmFsdWU9XCJcIlxuICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVkSW5wdXQ7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
var RequiredInput = function RequiredInput2(_ref3) {
  var name = _ref3.name, onFocus2 = _ref3.onFocus;
  return jsx("input", {
    required: true,
    name,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: onFocus2,
    css: _ref22,
    value: "",
    onChange: function onChange2() {
    }
  });
};
var RequiredInput$1 = RequiredInput;
function testPlatform(re) {
  var _window$navigator$use;
  return typeof window !== "undefined" && window.navigator != null ? re.test(((_window$navigator$use = window.navigator["userAgentData"]) === null || _window$navigator$use === void 0 ? void 0 : _window$navigator$use.platform) || window.navigator.platform) : false;
}
function isIPhone() {
  return testPlatform(/^iPhone/i);
}
function isMac() {
  return testPlatform(/^Mac/i);
}
function isIPad() {
  return testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  isMac() && navigator.maxTouchPoints > 1;
}
function isIOS() {
  return isIPhone() || isIPad();
}
function isAppleDevice() {
  return isMac() || isIOS();
}
var formatGroupLabel = function formatGroupLabel2(group) {
  return group.label;
};
var getOptionLabel$1 = function getOptionLabel(option) {
  return option.label;
};
var getOptionValue$1 = function getOptionValue(option) {
  return option.value;
};
var isOptionDisabled = function isOptionDisabled2(option) {
  return !!option.isDisabled;
};
var defaultStyles = {
  clearIndicator: clearIndicatorCSS,
  container: containerCSS,
  control: css$1,
  dropdownIndicator: dropdownIndicatorCSS,
  group: groupCSS,
  groupHeading: groupHeadingCSS,
  indicatorsContainer: indicatorsContainerCSS,
  indicatorSeparator: indicatorSeparatorCSS,
  input: inputCSS,
  loadingIndicator: loadingIndicatorCSS,
  loadingMessage: loadingMessageCSS,
  menu: menuCSS,
  menuList: menuListCSS,
  menuPortal: menuPortalCSS,
  multiValue: multiValueCSS,
  multiValueLabel: multiValueLabelCSS,
  multiValueRemove: multiValueRemoveCSS,
  noOptionsMessage: noOptionsMessageCSS,
  option: optionCSS,
  placeholder: placeholderCSS,
  singleValue: css3,
  valueContainer: valueContainerCSS
};
var colors = {
  primary: "#2684FF",
  primary75: "#4C9AFF",
  primary50: "#B2D4FF",
  primary25: "#DEEBFF",
  danger: "#DE350B",
  dangerLight: "#FFBDAD",
  neutral0: "hsl(0, 0%, 100%)",
  neutral5: "hsl(0, 0%, 95%)",
  neutral10: "hsl(0, 0%, 90%)",
  neutral20: "hsl(0, 0%, 80%)",
  neutral30: "hsl(0, 0%, 70%)",
  neutral40: "hsl(0, 0%, 60%)",
  neutral50: "hsl(0, 0%, 50%)",
  neutral60: "hsl(0, 0%, 40%)",
  neutral70: "hsl(0, 0%, 30%)",
  neutral80: "hsl(0, 0%, 20%)",
  neutral90: "hsl(0, 0%, 10%)"
};
var borderRadius = 4;
var baseUnit = 4;
var controlHeight = 38;
var menuGutter = baseUnit * 2;
var spacing = {
  baseUnit,
  controlHeight,
  menuGutter
};
var defaultTheme = {
  borderRadius,
  colors,
  spacing
};
var defaultProps = {
  "aria-live": "polite",
  backspaceRemovesValue: true,
  blurInputOnSelect: isTouchCapable(),
  captureMenuScroll: !isTouchCapable(),
  classNames: {},
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: createFilter(),
  formatGroupLabel,
  getOptionLabel: getOptionLabel$1,
  getOptionValue: getOptionValue$1,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !isMobileDevice(),
  noOptionsMessage: function noOptionsMessage() {
    return "No options";
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: "Select...",
  screenReaderStatus: function screenReaderStatus(_ref3) {
    var count = _ref3.count;
    return "".concat(count, " result").concat(count !== 1 ? "s" : "", " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: true,
  unstyled: false
};
function toCategorizedOption(props, option, selectValue, index2) {
  var isDisabled = _isOptionDisabled(props, option, selectValue);
  var isSelected = _isOptionSelected(props, option, selectValue);
  var label = getOptionLabel2(props, option);
  var value = getOptionValue2(props, option);
  return {
    type: "option",
    data: option,
    isDisabled,
    isSelected,
    label,
    value,
    index: index2
  };
}
function buildCategorizedOptions(props, selectValue) {
  return props.options.map(function(groupOrOption, groupOrOptionIndex) {
    if ("options" in groupOrOption) {
      var categorizedOptions = groupOrOption.options.map(function(option, optionIndex) {
        return toCategorizedOption(props, option, selectValue, optionIndex);
      }).filter(function(categorizedOption2) {
        return isFocusable(props, categorizedOption2);
      });
      return categorizedOptions.length > 0 ? {
        type: "group",
        data: groupOrOption,
        options: categorizedOptions,
        index: groupOrOptionIndex
      } : void 0;
    }
    var categorizedOption = toCategorizedOption(props, groupOrOption, selectValue, groupOrOptionIndex);
    return isFocusable(props, categorizedOption) ? categorizedOption : void 0;
  }).filter(notNullish);
}
function buildFocusableOptionsFromCategorizedOptions(categorizedOptions) {
  return categorizedOptions.reduce(function(optionsAccumulator, categorizedOption) {
    if (categorizedOption.type === "group") {
      optionsAccumulator.push.apply(optionsAccumulator, _toConsumableArray(categorizedOption.options.map(function(option) {
        return option.data;
      })));
    } else {
      optionsAccumulator.push(categorizedOption.data);
    }
    return optionsAccumulator;
  }, []);
}
function buildFocusableOptionsWithIds(categorizedOptions, optionId) {
  return categorizedOptions.reduce(function(optionsAccumulator, categorizedOption) {
    if (categorizedOption.type === "group") {
      optionsAccumulator.push.apply(optionsAccumulator, _toConsumableArray(categorizedOption.options.map(function(option) {
        return {
          data: option.data,
          id: "".concat(optionId, "-").concat(categorizedOption.index, "-").concat(option.index)
        };
      })));
    } else {
      optionsAccumulator.push({
        data: categorizedOption.data,
        id: "".concat(optionId, "-").concat(categorizedOption.index)
      });
    }
    return optionsAccumulator;
  }, []);
}
function buildFocusableOptions(props, selectValue) {
  return buildFocusableOptionsFromCategorizedOptions(buildCategorizedOptions(props, selectValue));
}
function isFocusable(props, categorizedOption) {
  var _props$inputValue = props.inputValue, inputValue = _props$inputValue === void 0 ? "" : _props$inputValue;
  var data = categorizedOption.data, isSelected = categorizedOption.isSelected, label = categorizedOption.label, value = categorizedOption.value;
  return (!shouldHideSelectedOptions(props) || !isSelected) && _filterOption(props, {
    label,
    value,
    data
  }, inputValue);
}
function getNextFocusedValue(state, nextSelectValue) {
  var focusedValue = state.focusedValue, lastSelectValue = state.selectValue;
  var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);
  if (lastFocusedIndex > -1) {
    var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);
    if (nextFocusedIndex > -1) {
      return focusedValue;
    } else if (lastFocusedIndex < nextSelectValue.length) {
      return nextSelectValue[lastFocusedIndex];
    }
  }
  return null;
}
function getNextFocusedOption(state, options2) {
  var lastFocusedOption = state.focusedOption;
  return lastFocusedOption && options2.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options2[0];
}
var getFocusedOptionId = function getFocusedOptionId2(focusableOptionsWithIds, focusedOption) {
  var _focusableOptionsWith;
  var focusedOptionId = (_focusableOptionsWith = focusableOptionsWithIds.find(function(option) {
    return option.data === focusedOption;
  })) === null || _focusableOptionsWith === void 0 ? void 0 : _focusableOptionsWith.id;
  return focusedOptionId || null;
};
var getOptionLabel2 = function getOptionLabel3(props, data) {
  return props.getOptionLabel(data);
};
var getOptionValue2 = function getOptionValue3(props, data) {
  return props.getOptionValue(data);
};
function _isOptionDisabled(props, option, selectValue) {
  return typeof props.isOptionDisabled === "function" ? props.isOptionDisabled(option, selectValue) : false;
}
function _isOptionSelected(props, option, selectValue) {
  if (selectValue.indexOf(option) > -1) return true;
  if (typeof props.isOptionSelected === "function") {
    return props.isOptionSelected(option, selectValue);
  }
  var candidate = getOptionValue2(props, option);
  return selectValue.some(function(i) {
    return getOptionValue2(props, i) === candidate;
  });
}
function _filterOption(props, option, inputValue) {
  return props.filterOption ? props.filterOption(option, inputValue) : true;
}
var shouldHideSelectedOptions = function shouldHideSelectedOptions2(props) {
  var hideSelectedOptions = props.hideSelectedOptions, isMulti = props.isMulti;
  if (hideSelectedOptions === void 0) return isMulti;
  return hideSelectedOptions;
};
var instanceId = 1;
var Select = /* @__PURE__ */ function(_Component) {
  _inherits(Select2, _Component);
  var _super = _createSuper(Select2);
  function Select2(_props) {
    var _this;
    _classCallCheck(this, Select2);
    _this = _super.call(this, _props);
    _this.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedOptionId: null,
      focusableOptionsWithIds: [],
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      selectValue: [],
      clearFocusValueOnUpdate: false,
      prevWasFocused: false,
      inputIsHiddenAfterUpdate: void 0,
      prevProps: void 0,
      instancePrefix: ""
    };
    _this.blockOptionHover = false;
    _this.isComposing = false;
    _this.commonProps = void 0;
    _this.initialTouchX = 0;
    _this.initialTouchY = 0;
    _this.openAfterFocus = false;
    _this.scrollToFocusedOptionOnUpdate = false;
    _this.userIsDragging = void 0;
    _this.isAppleDevice = isAppleDevice();
    _this.controlRef = null;
    _this.getControlRef = function(ref) {
      _this.controlRef = ref;
    };
    _this.focusedOptionRef = null;
    _this.getFocusedOptionRef = function(ref) {
      _this.focusedOptionRef = ref;
    };
    _this.menuListRef = null;
    _this.getMenuListRef = function(ref) {
      _this.menuListRef = ref;
    };
    _this.inputRef = null;
    _this.getInputRef = function(ref) {
      _this.inputRef = ref;
    };
    _this.focus = _this.focusInput;
    _this.blur = _this.blurInput;
    _this.onChange = function(newValue, actionMeta) {
      var _this$props = _this.props, onChange2 = _this$props.onChange, name = _this$props.name;
      actionMeta.name = name;
      _this.ariaOnChange(newValue, actionMeta);
      onChange2(newValue, actionMeta);
    };
    _this.setValue = function(newValue, action, option) {
      var _this$props2 = _this.props, closeMenuOnSelect = _this$props2.closeMenuOnSelect, isMulti = _this$props2.isMulti, inputValue = _this$props2.inputValue;
      _this.onInputChange("", {
        action: "set-value",
        prevInputValue: inputValue
      });
      if (closeMenuOnSelect) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });
        _this.onMenuClose();
      }
      _this.setState({
        clearFocusValueOnUpdate: true
      });
      _this.onChange(newValue, {
        action,
        option
      });
    };
    _this.selectOption = function(newValue) {
      var _this$props3 = _this.props, blurInputOnSelect = _this$props3.blurInputOnSelect, isMulti = _this$props3.isMulti, name = _this$props3.name;
      var selectValue = _this.state.selectValue;
      var deselected = isMulti && _this.isOptionSelected(newValue, selectValue);
      var isDisabled = _this.isOptionDisabled(newValue, selectValue);
      if (deselected) {
        var candidate = _this.getOptionValue(newValue);
        _this.setValue(multiValueAsValue(selectValue.filter(function(i) {
          return _this.getOptionValue(i) !== candidate;
        })), "deselect-option", newValue);
      } else if (!isDisabled) {
        if (isMulti) {
          _this.setValue(multiValueAsValue([].concat(_toConsumableArray(selectValue), [newValue])), "select-option", newValue);
        } else {
          _this.setValue(singleValueAsValue(newValue), "select-option");
        }
      } else {
        _this.ariaOnChange(singleValueAsValue(newValue), {
          action: "select-option",
          option: newValue,
          name
        });
        return;
      }
      if (blurInputOnSelect) {
        _this.blurInput();
      }
    };
    _this.removeValue = function(removedValue) {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var candidate = _this.getOptionValue(removedValue);
      var newValueArray = selectValue.filter(function(i) {
        return _this.getOptionValue(i) !== candidate;
      });
      var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
      _this.onChange(newValue, {
        action: "remove-value",
        removedValue
      });
      _this.focusInput();
    };
    _this.clearValue = function() {
      var selectValue = _this.state.selectValue;
      _this.onChange(valueTernary(_this.props.isMulti, [], null), {
        action: "clear",
        removedValues: selectValue
      });
    };
    _this.popValue = function() {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];
      var newValueArray = selectValue.slice(0, selectValue.length - 1);
      var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
      if (lastSelectedValue) {
        _this.onChange(newValue, {
          action: "pop-value",
          removedValue: lastSelectedValue
        });
      }
    };
    _this.getFocusedOptionId = function(focusedOption) {
      return getFocusedOptionId(_this.state.focusableOptionsWithIds, focusedOption);
    };
    _this.getFocusableOptionsWithIds = function() {
      return buildFocusableOptionsWithIds(buildCategorizedOptions(_this.props, _this.state.selectValue), _this.getElementId("option"));
    };
    _this.getValue = function() {
      return _this.state.selectValue;
    };
    _this.cx = function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return classNames.apply(void 0, [_this.props.classNamePrefix].concat(args));
    };
    _this.getOptionLabel = function(data) {
      return getOptionLabel2(_this.props, data);
    };
    _this.getOptionValue = function(data) {
      return getOptionValue2(_this.props, data);
    };
    _this.getStyles = function(key, props) {
      var unstyled = _this.props.unstyled;
      var base = defaultStyles[key](props, unstyled);
      base.boxSizing = "border-box";
      var custom = _this.props.styles[key];
      return custom ? custom(base, props) : base;
    };
    _this.getClassNames = function(key, props) {
      var _this$props$className, _this$props$className2;
      return (_this$props$className = (_this$props$className2 = _this.props.classNames)[key]) === null || _this$props$className === void 0 ? void 0 : _this$props$className.call(_this$props$className2, props);
    };
    _this.getElementId = function(element) {
      return "".concat(_this.state.instancePrefix, "-").concat(element);
    };
    _this.getComponents = function() {
      return defaultComponents(_this.props);
    };
    _this.buildCategorizedOptions = function() {
      return buildCategorizedOptions(_this.props, _this.state.selectValue);
    };
    _this.getCategorizedOptions = function() {
      return _this.props.menuIsOpen ? _this.buildCategorizedOptions() : [];
    };
    _this.buildFocusableOptions = function() {
      return buildFocusableOptionsFromCategorizedOptions(_this.buildCategorizedOptions());
    };
    _this.getFocusableOptions = function() {
      return _this.props.menuIsOpen ? _this.buildFocusableOptions() : [];
    };
    _this.ariaOnChange = function(value, actionMeta) {
      _this.setState({
        ariaSelection: _objectSpread2({
          value
        }, actionMeta)
      });
    };
    _this.onMenuMouseDown = function(event) {
      if (event.button !== 0) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      _this.focusInput();
    };
    _this.onMenuMouseMove = function(event) {
      _this.blockOptionHover = false;
    };
    _this.onControlMouseDown = function(event) {
      if (event.defaultPrevented) {
        return;
      }
      var openMenuOnClick = _this.props.openMenuOnClick;
      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }
        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu("first");
        }
      } else {
        if (event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA") {
          _this.onMenuClose();
        }
      }
      if (event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA") {
        event.preventDefault();
      }
    };
    _this.onDropdownIndicatorMouseDown = function(event) {
      if (event && event.type === "mousedown" && event.button !== 0) {
        return;
      }
      if (_this.props.isDisabled) return;
      var _this$props4 = _this.props, isMulti = _this$props4.isMulti, menuIsOpen = _this$props4.menuIsOpen;
      _this.focusInput();
      if (menuIsOpen) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });
        _this.onMenuClose();
      } else {
        _this.openMenu("first");
      }
      event.preventDefault();
    };
    _this.onClearIndicatorMouseDown = function(event) {
      if (event && event.type === "mousedown" && event.button !== 0) {
        return;
      }
      _this.clearValue();
      event.preventDefault();
      _this.openAfterFocus = false;
      if (event.type === "touchend") {
        _this.focusInput();
      } else {
        setTimeout(function() {
          return _this.focusInput();
        });
      }
    };
    _this.onScroll = function(event) {
      if (typeof _this.props.closeMenuOnScroll === "boolean") {
        if (event.target instanceof HTMLElement && isDocumentElement(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === "function") {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    };
    _this.onCompositionStart = function() {
      _this.isComposing = true;
    };
    _this.onCompositionEnd = function() {
      _this.isComposing = false;
    };
    _this.onTouchStart = function(_ref23) {
      var touches = _ref23.touches;
      var touch = touches && touches.item(0);
      if (!touch) {
        return;
      }
      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    };
    _this.onTouchMove = function(_ref3) {
      var touches = _ref3.touches;
      var touch = touches && touches.item(0);
      if (!touch) {
        return;
      }
      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    };
    _this.onTouchEnd = function(event) {
      if (_this.userIsDragging) return;
      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      }
      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    };
    _this.onControlTouchEnd = function(event) {
      if (_this.userIsDragging) return;
      _this.onControlMouseDown(event);
    };
    _this.onClearIndicatorTouchEnd = function(event) {
      if (_this.userIsDragging) return;
      _this.onClearIndicatorMouseDown(event);
    };
    _this.onDropdownIndicatorTouchEnd = function(event) {
      if (_this.userIsDragging) return;
      _this.onDropdownIndicatorMouseDown(event);
    };
    _this.handleInputChange = function(event) {
      var prevInputValue = _this.props.inputValue;
      var inputValue = event.currentTarget.value;
      _this.setState({
        inputIsHiddenAfterUpdate: false
      });
      _this.onInputChange(inputValue, {
        action: "input-change",
        prevInputValue
      });
      if (!_this.props.menuIsOpen) {
        _this.onMenuOpen();
      }
    };
    _this.onInputFocus = function(event) {
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
      _this.setState({
        inputIsHiddenAfterUpdate: false,
        isFocused: true
      });
      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu("first");
      }
      _this.openAfterFocus = false;
    };
    _this.onInputBlur = function(event) {
      var prevInputValue = _this.props.inputValue;
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();
        return;
      }
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
      _this.onInputChange("", {
        action: "input-blur",
        prevInputValue
      });
      _this.onMenuClose();
      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    };
    _this.onOptionHover = function(focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }
      var options2 = _this.getFocusableOptions();
      var focusedOptionIndex = options2.indexOf(focusedOption);
      _this.setState({
        focusedOption,
        focusedOptionId: focusedOptionIndex > -1 ? _this.getFocusedOptionId(focusedOption) : null
      });
    };
    _this.shouldHideSelectedOptions = function() {
      return shouldHideSelectedOptions(_this.props);
    };
    _this.onValueInputFocus = function(e) {
      e.preventDefault();
      e.stopPropagation();
      _this.focus();
    };
    _this.onKeyDown = function(event) {
      var _this$props5 = _this.props, isMulti = _this$props5.isMulti, backspaceRemovesValue = _this$props5.backspaceRemovesValue, escapeClearsValue = _this$props5.escapeClearsValue, inputValue = _this$props5.inputValue, isClearable = _this$props5.isClearable, isDisabled = _this$props5.isDisabled, menuIsOpen = _this$props5.menuIsOpen, onKeyDown = _this$props5.onKeyDown, tabSelectsValue = _this$props5.tabSelectsValue, openMenuOnFocus = _this$props5.openMenuOnFocus;
      var _this$state = _this.state, focusedOption = _this$state.focusedOption, focusedValue = _this$state.focusedValue, selectValue = _this$state.selectValue;
      if (isDisabled) return;
      if (typeof onKeyDown === "function") {
        onKeyDown(event);
        if (event.defaultPrevented) {
          return;
        }
      }
      _this.blockOptionHover = true;
      switch (event.key) {
        case "ArrowLeft":
          if (!isMulti || inputValue) return;
          _this.focusValue("previous");
          break;
        case "ArrowRight":
          if (!isMulti || inputValue) return;
          _this.focusValue("next");
          break;
        case "Delete":
        case "Backspace":
          if (inputValue) return;
          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue) return;
            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }
          break;
        case "Tab":
          if (_this.isComposing) return;
          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || // don't capture the event if the menu opens on focus and the focused
          // option is already selected; it breaks the flow of navigation
          openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }
          _this.selectOption(focusedOption);
          break;
        case "Enter":
          if (event.keyCode === 229) {
            break;
          }
          if (menuIsOpen) {
            if (!focusedOption) return;
            if (_this.isComposing) return;
            _this.selectOption(focusedOption);
            break;
          }
          return;
        case "Escape":
          if (menuIsOpen) {
            _this.setState({
              inputIsHiddenAfterUpdate: false
            });
            _this.onInputChange("", {
              action: "menu-close",
              prevInputValue: inputValue
            });
            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }
          break;
        case " ":
          if (inputValue) {
            return;
          }
          if (!menuIsOpen) {
            _this.openMenu("first");
            break;
          }
          if (!focusedOption) return;
          _this.selectOption(focusedOption);
          break;
        case "ArrowUp":
          if (menuIsOpen) {
            _this.focusOption("up");
          } else {
            _this.openMenu("last");
          }
          break;
        case "ArrowDown":
          if (menuIsOpen) {
            _this.focusOption("down");
          } else {
            _this.openMenu("first");
          }
          break;
        case "PageUp":
          if (!menuIsOpen) return;
          _this.focusOption("pageup");
          break;
        case "PageDown":
          if (!menuIsOpen) return;
          _this.focusOption("pagedown");
          break;
        case "Home":
          if (!menuIsOpen) return;
          _this.focusOption("first");
          break;
        case "End":
          if (!menuIsOpen) return;
          _this.focusOption("last");
          break;
        default:
          return;
      }
      event.preventDefault();
    };
    _this.state.instancePrefix = "react-select-" + (_this.props.instanceId || ++instanceId);
    _this.state.selectValue = cleanValue(_props.value);
    if (_props.menuIsOpen && _this.state.selectValue.length) {
      var focusableOptionsWithIds = _this.getFocusableOptionsWithIds();
      var focusableOptions = _this.buildFocusableOptions();
      var optionIndex = focusableOptions.indexOf(_this.state.selectValue[0]);
      _this.state.focusableOptionsWithIds = focusableOptionsWithIds;
      _this.state.focusedOption = focusableOptions[optionIndex];
      _this.state.focusedOptionId = getFocusedOptionId(focusableOptionsWithIds, focusableOptions[optionIndex]);
    }
    return _this;
  }
  _createClass(Select2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListeningComposition();
      this.startListeningToTouch();
      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
        document.addEventListener("scroll", this.onScroll, true);
      }
      if (this.props.autoFocus) {
        this.focusInput();
      }
      if (this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef) {
        scrollIntoView(this.menuListRef, this.focusedOptionRef);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props6 = this.props, isDisabled = _this$props6.isDisabled, menuIsOpen = _this$props6.menuIsOpen;
      var isFocused = this.state.isFocused;
      if (
        // ensure focus is restored correctly when the control becomes enabled
        isFocused && !isDisabled && prevProps.isDisabled || // ensure focus is on the Input when the menu opens
        isFocused && menuIsOpen && !prevProps.menuIsOpen
      ) {
        this.focusInput();
      }
      if (isFocused && isDisabled && !prevProps.isDisabled) {
        this.setState({
          isFocused: false
        }, this.onMenuClose);
      } else if (!isFocused && !isDisabled && prevProps.isDisabled && this.inputRef === document.activeElement) {
        this.setState({
          isFocused: true
        });
      }
      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
        scrollIntoView(this.menuListRef, this.focusedOptionRef);
        this.scrollToFocusedOptionOnUpdate = false;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListeningComposition();
      this.stopListeningToTouch();
      document.removeEventListener("scroll", this.onScroll, true);
    }
    // ==============================
    // Consumer Handlers
    // ==============================
  }, {
    key: "onMenuOpen",
    value: function onMenuOpen() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function onMenuClose() {
      this.onInputChange("", {
        action: "menu-close",
        prevInputValue: this.props.inputValue
      });
      this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(newValue, actionMeta) {
      this.props.onInputChange(newValue, actionMeta);
    }
    // ==============================
    // Methods
    // ==============================
  }, {
    key: "focusInput",
    value: function focusInput() {
      if (!this.inputRef) return;
      this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function blurInput() {
      if (!this.inputRef) return;
      this.inputRef.blur();
    }
    // aliased for consumers
  }, {
    key: "openMenu",
    value: function openMenu(focusOption) {
      var _this2 = this;
      var _this$state2 = this.state, selectValue = _this$state2.selectValue, isFocused = _this$state2.isFocused;
      var focusableOptions = this.buildFocusableOptions();
      var openAtIndex = focusOption === "first" ? 0 : focusableOptions.length - 1;
      if (!this.props.isMulti) {
        var selectedIndex = focusableOptions.indexOf(selectValue[0]);
        if (selectedIndex > -1) {
          openAtIndex = selectedIndex;
        }
      }
      this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
      this.setState({
        inputIsHiddenAfterUpdate: false,
        focusedValue: null,
        focusedOption: focusableOptions[openAtIndex],
        focusedOptionId: this.getFocusedOptionId(focusableOptions[openAtIndex])
      }, function() {
        return _this2.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function focusValue(direction) {
      var _this$state3 = this.state, selectValue = _this$state3.selectValue, focusedValue = _this$state3.focusedValue;
      if (!this.props.isMulti) return;
      this.setState({
        focusedOption: null
      });
      var focusedIndex = selectValue.indexOf(focusedValue);
      if (!focusedValue) {
        focusedIndex = -1;
      }
      var lastIndex = selectValue.length - 1;
      var nextFocus = -1;
      if (!selectValue.length) return;
      switch (direction) {
        case "previous":
          if (focusedIndex === 0) {
            nextFocus = 0;
          } else if (focusedIndex === -1) {
            nextFocus = lastIndex;
          } else {
            nextFocus = focusedIndex - 1;
          }
          break;
        case "next":
          if (focusedIndex > -1 && focusedIndex < lastIndex) {
            nextFocus = focusedIndex + 1;
          }
          break;
      }
      this.setState({
        inputIsHidden: nextFocus !== -1,
        focusedValue: selectValue[nextFocus]
      });
    }
  }, {
    key: "focusOption",
    value: function focusOption() {
      var direction = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first";
      var pageSize = this.props.pageSize;
      var focusedOption = this.state.focusedOption;
      var options2 = this.getFocusableOptions();
      if (!options2.length) return;
      var nextFocus = 0;
      var focusedIndex = options2.indexOf(focusedOption);
      if (!focusedOption) {
        focusedIndex = -1;
      }
      if (direction === "up") {
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options2.length - 1;
      } else if (direction === "down") {
        nextFocus = (focusedIndex + 1) % options2.length;
      } else if (direction === "pageup") {
        nextFocus = focusedIndex - pageSize;
        if (nextFocus < 0) nextFocus = 0;
      } else if (direction === "pagedown") {
        nextFocus = focusedIndex + pageSize;
        if (nextFocus > options2.length - 1) nextFocus = options2.length - 1;
      } else if (direction === "last") {
        nextFocus = options2.length - 1;
      }
      this.scrollToFocusedOptionOnUpdate = true;
      this.setState({
        focusedOption: options2[nextFocus],
        focusedValue: null,
        focusedOptionId: this.getFocusedOptionId(options2[nextFocus])
      });
    }
  }, {
    key: "getTheme",
    value: (
      // ==============================
      // Getters
      // ==============================
      function getTheme() {
        if (!this.props.theme) {
          return defaultTheme;
        }
        if (typeof this.props.theme === "function") {
          return this.props.theme(defaultTheme);
        }
        return _objectSpread2(_objectSpread2({}, defaultTheme), this.props.theme);
      }
    )
  }, {
    key: "getCommonProps",
    value: function getCommonProps() {
      var clearValue = this.clearValue, cx = this.cx, getStyles = this.getStyles, getClassNames = this.getClassNames, getValue = this.getValue, selectOption = this.selectOption, setValue = this.setValue, props = this.props;
      var isMulti = props.isMulti, isRtl = props.isRtl, options2 = props.options;
      var hasValue = this.hasValue();
      return {
        clearValue,
        cx,
        getStyles,
        getClassNames,
        getValue,
        hasValue,
        isMulti,
        isRtl,
        options: options2,
        selectOption,
        selectProps: props,
        setValue,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      var selectValue = this.state.selectValue;
      return selectValue.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function hasOptions() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function isClearable() {
      var _this$props7 = this.props, isClearable2 = _this$props7.isClearable, isMulti = _this$props7.isMulti;
      if (isClearable2 === void 0) return isMulti;
      return isClearable2;
    }
  }, {
    key: "isOptionDisabled",
    value: function isOptionDisabled3(option, selectValue) {
      return _isOptionDisabled(this.props, option, selectValue);
    }
  }, {
    key: "isOptionSelected",
    value: function isOptionSelected(option, selectValue) {
      return _isOptionSelected(this.props, option, selectValue);
    }
  }, {
    key: "filterOption",
    value: function filterOption(option, inputValue) {
      return _filterOption(this.props, option, inputValue);
    }
  }, {
    key: "formatOptionLabel",
    value: function formatOptionLabel(data, context) {
      if (typeof this.props.formatOptionLabel === "function") {
        var _inputValue = this.props.inputValue;
        var _selectValue = this.state.selectValue;
        return this.props.formatOptionLabel(data, {
          context,
          inputValue: _inputValue,
          selectValue: _selectValue
        });
      } else {
        return this.getOptionLabel(data);
      }
    }
  }, {
    key: "formatGroupLabel",
    value: function formatGroupLabel3(data) {
      return this.props.formatGroupLabel(data);
    }
    // ==============================
    // Mouse Handlers
    // ==============================
  }, {
    key: "startListeningComposition",
    value: (
      // ==============================
      // Composition Handlers
      // ==============================
      function startListeningComposition() {
        if (document && document.addEventListener) {
          document.addEventListener("compositionstart", this.onCompositionStart, false);
          document.addEventListener("compositionend", this.onCompositionEnd, false);
        }
      }
    )
  }, {
    key: "stopListeningComposition",
    value: function stopListeningComposition() {
      if (document && document.removeEventListener) {
        document.removeEventListener("compositionstart", this.onCompositionStart);
        document.removeEventListener("compositionend", this.onCompositionEnd);
      }
    }
  }, {
    key: "startListeningToTouch",
    value: (
      // ==============================
      // Touch Handlers
      // ==============================
      function startListeningToTouch() {
        if (document && document.addEventListener) {
          document.addEventListener("touchstart", this.onTouchStart, false);
          document.addEventListener("touchmove", this.onTouchMove, false);
          document.addEventListener("touchend", this.onTouchEnd, false);
        }
      }
    )
  }, {
    key: "stopListeningToTouch",
    value: function stopListeningToTouch() {
      if (document && document.removeEventListener) {
        document.removeEventListener("touchstart", this.onTouchStart);
        document.removeEventListener("touchmove", this.onTouchMove);
        document.removeEventListener("touchend", this.onTouchEnd);
      }
    }
  }, {
    key: "renderInput",
    value: (
      // ==============================
      // Renderers
      // ==============================
      function renderInput() {
        var _this$props8 = this.props, isDisabled = _this$props8.isDisabled, isSearchable = _this$props8.isSearchable, inputId = _this$props8.inputId, inputValue = _this$props8.inputValue, tabIndex = _this$props8.tabIndex, form = _this$props8.form, menuIsOpen = _this$props8.menuIsOpen, required = _this$props8.required;
        var _this$getComponents = this.getComponents(), Input3 = _this$getComponents.Input;
        var _this$state4 = this.state, inputIsHidden = _this$state4.inputIsHidden, ariaSelection = _this$state4.ariaSelection;
        var commonProps = this.commonProps;
        var id = inputId || this.getElementId("input");
        var ariaAttributes = _objectSpread2(_objectSpread2(_objectSpread2({
          "aria-autocomplete": "list",
          "aria-expanded": menuIsOpen,
          "aria-haspopup": true,
          "aria-errormessage": this.props["aria-errormessage"],
          "aria-invalid": this.props["aria-invalid"],
          "aria-label": this.props["aria-label"],
          "aria-labelledby": this.props["aria-labelledby"],
          "aria-required": required,
          role: "combobox",
          "aria-activedescendant": this.isAppleDevice ? void 0 : this.state.focusedOptionId || ""
        }, menuIsOpen && {
          "aria-controls": this.getElementId("listbox")
        }), !isSearchable && {
          "aria-readonly": true
        }), this.hasValue() ? (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus" && {
          "aria-describedby": this.getElementId("live-region")
        } : {
          "aria-describedby": this.getElementId("placeholder")
        });
        if (!isSearchable) {
          return /* @__PURE__ */ React4.createElement(DummyInput, _extends({
            id,
            innerRef: this.getInputRef,
            onBlur: this.onInputBlur,
            onChange: noop,
            onFocus: this.onInputFocus,
            disabled: isDisabled,
            tabIndex,
            inputMode: "none",
            form,
            value: ""
          }, ariaAttributes));
        }
        return /* @__PURE__ */ React4.createElement(Input3, _extends({}, commonProps, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id,
          innerRef: this.getInputRef,
          isDisabled,
          isHidden: inputIsHidden,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex,
          form,
          type: "text",
          value: inputValue
        }, ariaAttributes));
      }
    )
  }, {
    key: "renderPlaceholderOrValue",
    value: function renderPlaceholderOrValue() {
      var _this3 = this;
      var _this$getComponents2 = this.getComponents(), MultiValue3 = _this$getComponents2.MultiValue, MultiValueContainer2 = _this$getComponents2.MultiValueContainer, MultiValueLabel2 = _this$getComponents2.MultiValueLabel, MultiValueRemove2 = _this$getComponents2.MultiValueRemove, SingleValue3 = _this$getComponents2.SingleValue, Placeholder3 = _this$getComponents2.Placeholder;
      var commonProps = this.commonProps;
      var _this$props9 = this.props, controlShouldRenderValue = _this$props9.controlShouldRenderValue, isDisabled = _this$props9.isDisabled, isMulti = _this$props9.isMulti, inputValue = _this$props9.inputValue, placeholder = _this$props9.placeholder;
      var _this$state5 = this.state, selectValue = _this$state5.selectValue, focusedValue = _this$state5.focusedValue, isFocused = _this$state5.isFocused;
      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : /* @__PURE__ */ React4.createElement(Placeholder3, _extends({}, commonProps, {
          key: "placeholder",
          isDisabled,
          isFocused,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), placeholder);
      }
      if (isMulti) {
        return selectValue.map(function(opt, index2) {
          var isOptionFocused = opt === focusedValue;
          var key = "".concat(_this3.getOptionLabel(opt), "-").concat(_this3.getOptionValue(opt));
          return /* @__PURE__ */ React4.createElement(MultiValue3, _extends({}, commonProps, {
            components: {
              Container: MultiValueContainer2,
              Label: MultiValueLabel2,
              Remove: MultiValueRemove2
            },
            isFocused: isOptionFocused,
            isDisabled,
            key,
            index: index2,
            removeProps: {
              onClick: function onClick() {
                return _this3.removeValue(opt);
              },
              onTouchEnd: function onTouchEnd() {
                return _this3.removeValue(opt);
              },
              onMouseDown: function onMouseDown(e) {
                e.preventDefault();
              }
            },
            data: opt
          }), _this3.formatOptionLabel(opt, "value"));
        });
      }
      if (inputValue) {
        return null;
      }
      var singleValue = selectValue[0];
      return /* @__PURE__ */ React4.createElement(SingleValue3, _extends({}, commonProps, {
        data: singleValue,
        isDisabled
      }), this.formatOptionLabel(singleValue, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function renderClearIndicator() {
      var _this$getComponents3 = this.getComponents(), ClearIndicator3 = _this$getComponents3.ClearIndicator;
      var commonProps = this.commonProps;
      var _this$props10 = this.props, isDisabled = _this$props10.isDisabled, isLoading = _this$props10.isLoading;
      var isFocused = this.state.isFocused;
      if (!this.isClearable() || !ClearIndicator3 || isDisabled || !this.hasValue() || isLoading) {
        return null;
      }
      var innerProps = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ React4.createElement(ClearIndicator3, _extends({}, commonProps, {
        innerProps,
        isFocused
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function renderLoadingIndicator() {
      var _this$getComponents4 = this.getComponents(), LoadingIndicator3 = _this$getComponents4.LoadingIndicator;
      var commonProps = this.commonProps;
      var _this$props11 = this.props, isDisabled = _this$props11.isDisabled, isLoading = _this$props11.isLoading;
      var isFocused = this.state.isFocused;
      if (!LoadingIndicator3 || !isLoading) return null;
      var innerProps = {
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ React4.createElement(LoadingIndicator3, _extends({}, commonProps, {
        innerProps,
        isDisabled,
        isFocused
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function renderIndicatorSeparator() {
      var _this$getComponents5 = this.getComponents(), DropdownIndicator3 = _this$getComponents5.DropdownIndicator, IndicatorSeparator3 = _this$getComponents5.IndicatorSeparator;
      if (!DropdownIndicator3 || !IndicatorSeparator3) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      return /* @__PURE__ */ React4.createElement(IndicatorSeparator3, _extends({}, commonProps, {
        isDisabled,
        isFocused
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function renderDropdownIndicator() {
      var _this$getComponents6 = this.getComponents(), DropdownIndicator3 = _this$getComponents6.DropdownIndicator;
      if (!DropdownIndicator3) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      var innerProps = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ React4.createElement(DropdownIndicator3, _extends({}, commonProps, {
        innerProps,
        isDisabled,
        isFocused
      }));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this4 = this;
      var _this$getComponents7 = this.getComponents(), Group3 = _this$getComponents7.Group, GroupHeading3 = _this$getComponents7.GroupHeading, Menu3 = _this$getComponents7.Menu, MenuList3 = _this$getComponents7.MenuList, MenuPortal3 = _this$getComponents7.MenuPortal, LoadingMessage3 = _this$getComponents7.LoadingMessage, NoOptionsMessage3 = _this$getComponents7.NoOptionsMessage, Option3 = _this$getComponents7.Option;
      var commonProps = this.commonProps;
      var focusedOption = this.state.focusedOption;
      var _this$props12 = this.props, captureMenuScroll = _this$props12.captureMenuScroll, inputValue = _this$props12.inputValue, isLoading = _this$props12.isLoading, loadingMessage2 = _this$props12.loadingMessage, minMenuHeight = _this$props12.minMenuHeight, maxMenuHeight = _this$props12.maxMenuHeight, menuIsOpen = _this$props12.menuIsOpen, menuPlacement = _this$props12.menuPlacement, menuPosition = _this$props12.menuPosition, menuPortalTarget = _this$props12.menuPortalTarget, menuShouldBlockScroll = _this$props12.menuShouldBlockScroll, menuShouldScrollIntoView = _this$props12.menuShouldScrollIntoView, noOptionsMessage2 = _this$props12.noOptionsMessage, onMenuScrollToTop = _this$props12.onMenuScrollToTop, onMenuScrollToBottom = _this$props12.onMenuScrollToBottom;
      if (!menuIsOpen) return null;
      var render = function render2(props, id) {
        var type = props.type, data = props.data, isDisabled = props.isDisabled, isSelected = props.isSelected, label = props.label, value = props.value;
        var isFocused = focusedOption === data;
        var onHover = isDisabled ? void 0 : function() {
          return _this4.onOptionHover(data);
        };
        var onSelect = isDisabled ? void 0 : function() {
          return _this4.selectOption(data);
        };
        var optionId = "".concat(_this4.getElementId("option"), "-").concat(id);
        var innerProps = {
          id: optionId,
          onClick: onSelect,
          onMouseMove: onHover,
          onMouseOver: onHover,
          tabIndex: -1,
          role: "option",
          "aria-selected": _this4.isAppleDevice ? void 0 : isSelected
          // is not supported on Apple devices
        };
        return /* @__PURE__ */ React4.createElement(Option3, _extends({}, commonProps, {
          innerProps,
          data,
          isDisabled,
          isSelected,
          key: optionId,
          label,
          type,
          value,
          isFocused,
          innerRef: isFocused ? _this4.getFocusedOptionRef : void 0
        }), _this4.formatOptionLabel(props.data, "menu"));
      };
      var menuUI;
      if (this.hasOptions()) {
        menuUI = this.getCategorizedOptions().map(function(item) {
          if (item.type === "group") {
            var _data = item.data, options2 = item.options, groupIndex = item.index;
            var groupId = "".concat(_this4.getElementId("group"), "-").concat(groupIndex);
            var headingId = "".concat(groupId, "-heading");
            return /* @__PURE__ */ React4.createElement(Group3, _extends({}, commonProps, {
              key: groupId,
              data: _data,
              options: options2,
              Heading: GroupHeading3,
              headingProps: {
                id: headingId,
                data: item.data
              },
              label: _this4.formatGroupLabel(item.data)
            }), item.options.map(function(option) {
              return render(option, "".concat(groupIndex, "-").concat(option.index));
            }));
          } else if (item.type === "option") {
            return render(item, "".concat(item.index));
          }
        });
      } else if (isLoading) {
        var message = loadingMessage2({
          inputValue
        });
        if (message === null) return null;
        menuUI = /* @__PURE__ */ React4.createElement(LoadingMessage3, commonProps, message);
      } else {
        var _message = noOptionsMessage2({
          inputValue
        });
        if (_message === null) return null;
        menuUI = /* @__PURE__ */ React4.createElement(NoOptionsMessage3, commonProps, _message);
      }
      var menuPlacementProps = {
        minMenuHeight,
        maxMenuHeight,
        menuPlacement,
        menuPosition,
        menuShouldScrollIntoView
      };
      var menuElement = /* @__PURE__ */ React4.createElement(MenuPlacer, _extends({}, commonProps, menuPlacementProps), function(_ref4) {
        var ref = _ref4.ref, _ref4$placerProps = _ref4.placerProps, placement = _ref4$placerProps.placement, maxHeight = _ref4$placerProps.maxHeight;
        return /* @__PURE__ */ React4.createElement(Menu3, _extends({}, commonProps, menuPlacementProps, {
          innerRef: ref,
          innerProps: {
            onMouseDown: _this4.onMenuMouseDown,
            onMouseMove: _this4.onMenuMouseMove
          },
          isLoading,
          placement
        }), /* @__PURE__ */ React4.createElement(ScrollManager, {
          captureEnabled: captureMenuScroll,
          onTopArrive: onMenuScrollToTop,
          onBottomArrive: onMenuScrollToBottom,
          lockEnabled: menuShouldBlockScroll
        }, function(scrollTargetRef) {
          return /* @__PURE__ */ React4.createElement(MenuList3, _extends({}, commonProps, {
            innerRef: function innerRef(instance) {
              _this4.getMenuListRef(instance);
              scrollTargetRef(instance);
            },
            innerProps: {
              role: "listbox",
              "aria-multiselectable": commonProps.isMulti,
              id: _this4.getElementId("listbox")
            },
            isLoading,
            maxHeight,
            focusedOption
          }), menuUI);
        }));
      });
      return menuPortalTarget || menuPosition === "fixed" ? /* @__PURE__ */ React4.createElement(MenuPortal3, _extends({}, commonProps, {
        appendTo: menuPortalTarget,
        controlElement: this.controlRef,
        menuPlacement,
        menuPosition
      }), menuElement) : menuElement;
    }
  }, {
    key: "renderFormField",
    value: function renderFormField() {
      var _this5 = this;
      var _this$props13 = this.props, delimiter2 = _this$props13.delimiter, isDisabled = _this$props13.isDisabled, isMulti = _this$props13.isMulti, name = _this$props13.name, required = _this$props13.required;
      var selectValue = this.state.selectValue;
      if (required && !this.hasValue() && !isDisabled) {
        return /* @__PURE__ */ React4.createElement(RequiredInput$1, {
          name,
          onFocus: this.onValueInputFocus
        });
      }
      if (!name || isDisabled) return;
      if (isMulti) {
        if (delimiter2) {
          var value = selectValue.map(function(opt) {
            return _this5.getOptionValue(opt);
          }).join(delimiter2);
          return /* @__PURE__ */ React4.createElement("input", {
            name,
            type: "hidden",
            value
          });
        } else {
          var input = selectValue.length > 0 ? selectValue.map(function(opt, i) {
            return /* @__PURE__ */ React4.createElement("input", {
              key: "i-".concat(i),
              name,
              type: "hidden",
              value: _this5.getOptionValue(opt)
            });
          }) : /* @__PURE__ */ React4.createElement("input", {
            name,
            type: "hidden",
            value: ""
          });
          return /* @__PURE__ */ React4.createElement("div", null, input);
        }
      } else {
        var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : "";
        return /* @__PURE__ */ React4.createElement("input", {
          name,
          type: "hidden",
          value: _value
        });
      }
    }
  }, {
    key: "renderLiveRegion",
    value: function renderLiveRegion() {
      var commonProps = this.commonProps;
      var _this$state6 = this.state, ariaSelection = _this$state6.ariaSelection, focusedOption = _this$state6.focusedOption, focusedValue = _this$state6.focusedValue, isFocused = _this$state6.isFocused, selectValue = _this$state6.selectValue;
      var focusableOptions = this.getFocusableOptions();
      return /* @__PURE__ */ React4.createElement(LiveRegion$1, _extends({}, commonProps, {
        id: this.getElementId("live-region"),
        ariaSelection,
        focusedOption,
        focusedValue,
        isFocused,
        selectValue,
        focusableOptions,
        isAppleDevice: this.isAppleDevice
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$getComponents8 = this.getComponents(), Control3 = _this$getComponents8.Control, IndicatorsContainer3 = _this$getComponents8.IndicatorsContainer, SelectContainer3 = _this$getComponents8.SelectContainer, ValueContainer3 = _this$getComponents8.ValueContainer;
      var _this$props14 = this.props, className = _this$props14.className, id = _this$props14.id, isDisabled = _this$props14.isDisabled, menuIsOpen = _this$props14.menuIsOpen;
      var isFocused = this.state.isFocused;
      var commonProps = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ React4.createElement(SelectContainer3, _extends({}, commonProps, {
        className,
        innerProps: {
          id,
          onKeyDown: this.onKeyDown
        },
        isDisabled,
        isFocused
      }), this.renderLiveRegion(), /* @__PURE__ */ React4.createElement(Control3, _extends({}, commonProps, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled,
        isFocused,
        menuIsOpen
      }), /* @__PURE__ */ React4.createElement(ValueContainer3, _extends({}, commonProps, {
        isDisabled
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ React4.createElement(IndicatorsContainer3, _extends({}, commonProps, {
        isDisabled
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var prevProps = state.prevProps, clearFocusValueOnUpdate = state.clearFocusValueOnUpdate, inputIsHiddenAfterUpdate = state.inputIsHiddenAfterUpdate, ariaSelection = state.ariaSelection, isFocused = state.isFocused, prevWasFocused = state.prevWasFocused, instancePrefix = state.instancePrefix;
      var options2 = props.options, value = props.value, menuIsOpen = props.menuIsOpen, inputValue = props.inputValue, isMulti = props.isMulti;
      var selectValue = cleanValue(value);
      var newMenuOptionsState = {};
      if (prevProps && (value !== prevProps.value || options2 !== prevProps.options || menuIsOpen !== prevProps.menuIsOpen || inputValue !== prevProps.inputValue)) {
        var focusableOptions = menuIsOpen ? buildFocusableOptions(props, selectValue) : [];
        var focusableOptionsWithIds = menuIsOpen ? buildFocusableOptionsWithIds(buildCategorizedOptions(props, selectValue), "".concat(instancePrefix, "-option")) : [];
        var focusedValue = clearFocusValueOnUpdate ? getNextFocusedValue(state, selectValue) : null;
        var focusedOption = getNextFocusedOption(state, focusableOptions);
        var focusedOptionId = getFocusedOptionId(focusableOptionsWithIds, focusedOption);
        newMenuOptionsState = {
          selectValue,
          focusedOption,
          focusedOptionId,
          focusableOptionsWithIds,
          focusedValue,
          clearFocusValueOnUpdate: false
        };
      }
      var newInputIsHiddenState = inputIsHiddenAfterUpdate != null && props !== prevProps ? {
        inputIsHidden: inputIsHiddenAfterUpdate,
        inputIsHiddenAfterUpdate: void 0
      } : {};
      var newAriaSelection = ariaSelection;
      var hasKeptFocus = isFocused && prevWasFocused;
      if (isFocused && !hasKeptFocus) {
        newAriaSelection = {
          value: valueTernary(isMulti, selectValue, selectValue[0] || null),
          options: selectValue,
          action: "initial-input-focus"
        };
        hasKeptFocus = !prevWasFocused;
      }
      if ((ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus") {
        newAriaSelection = null;
      }
      return _objectSpread2(_objectSpread2(_objectSpread2({}, newMenuOptionsState), newInputIsHiddenState), {}, {
        prevProps: props,
        ariaSelection: newAriaSelection,
        prevWasFocused: hasKeptFocus
      });
    }
  }]);
  return Select2;
}(import_react6.Component);
Select.defaultProps = defaultProps;

// node_modules/react-select/dist/react-select.esm.js
var import_react_dom2 = __toESM(require_react_dom());
var StateManagedSelect = /* @__PURE__ */ (0, import_react8.forwardRef)(function(props, ref) {
  var baseSelectProps = useStateManager(props);
  return /* @__PURE__ */ React5.createElement(Select, _extends({
    ref
  }, baseSelectProps));
});
var StateManagedSelect$1 = StateManagedSelect;

// tasks/LLM/inputRender.tsx
var import_react_simple_code_editor = __toESM(require_lib());

// node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx;

// node_modules/value-enhancer/dist/index.mjs
var isVal = (val$) => !!val$?.$valCompute;
if (false) {
  initDev();
}

// node_modules/use-value-enhancer/dist/use-value-enhancer.mjs
var import_react9 = __toESM(require_react(), 1);
var noop3 = () => {
};
var returnsNoop = () => noop3;
var useValWithUseSyncExternalStore = (val$, eager = true) => {
  const [subscriber, getSnapshot] = (0, import_react9.useMemo)(
    () => isVal(val$) ? [
      (onChange2) => val$.subscribe(onChange2, eager),
      () => val$.$version
    ] : [
      returnsNoop,
      returnsNoop
    ],
    [val$, eager]
  );
  import_react9.default.useSyncExternalStore(
    subscriber,
    getSnapshot,
    getSnapshot
  );
  const value = isVal(val$) ? val$.get() : val$;
  (0, import_react9.useDebugValue)(value);
  return value;
};
var useValWithUseEffect = (val$, eager = true) => {
  const [, setVersion] = (0, import_react9.useState)(() => isVal(val$) ? val$.$version : noop3);
  (0, import_react9.useEffect)(() => {
    if (isVal(val$)) {
      const versionSetter = () => val$.$version;
      return val$.subscribe(() => setVersion(versionSetter), eager);
    }
    setVersion(returnsNoop);
  }, [val$, eager]);
  const value = isVal(val$) ? val$.get() : val$;
  (0, import_react9.useDebugValue)(value);
  return value;
};
var useVal = /* @__PURE__ */ (() => import_react9.default.useSyncExternalStore ? useValWithUseSyncExternalStore : useValWithUseEffect)();

// tasks/LLM/inputRender.tsx
function model(dom, context) {
  injectStyles();
  function ModelComponent() {
    const [models, setModels] = (0, import_react10.useState)([]);
    const [expanded, setExpanded] = (0, import_react10.useState)(false);
    const value = context.store.value$?.value;
    const [selectedModel, setSelectedModel] = (0, import_react10.useState)(value?.model || "oomol-chat");
    const [temperature, setTemperature] = (0, import_react10.useState)(value?.temperature || 0);
    const [topP, setTopP] = (0, import_react10.useState)(value?.top_p ?? 0.5);
    const [maxTokens, setMaxTokens] = (0, import_react10.useState)(value?.max_tokens || 4096);
    (0, import_react10.useEffect)(() => {
      context.postMessage("getLLMModels", (models2) => {
        if (models2?.length) {
          setModels(models2);
        }
      });
    }, []);
    (0, import_react10.useEffect)(() => {
      context.store.value$?.set({
        model: selectedModel,
        temperature,
        top_p: topP,
        max_tokens: maxTokens
      });
    }, [selectedModel, temperature, topP, maxTokens]);
    const customSelectLabel = ({ value: value2 }) => {
      return /* @__PURE__ */ import_react10.default.createElement("div", { className: "llm-custom-label" }, /* @__PURE__ */ import_react10.default.createElement(ModelIcon, { modelName: value2.model_name }), /* @__PURE__ */ import_react10.default.createElement("div", { className: "llm-custom-label-content" }, /* @__PURE__ */ import_react10.default.createElement("div", { className: "llm-custom-label-header" }, /* @__PURE__ */ import_react10.default.createElement("div", { className: "llm-title-box" }, /* @__PURE__ */ import_react10.default.createElement("span", { className: "llm-title", title: labelOfModel(value2.model_name) }, labelOfModel(value2.model_name))), /* @__PURE__ */ import_react10.default.createElement("span", { className: "llm-ratio" }, "Input: ", value2.input_ratio, " / Output: ", value2.output_ratio)), /* @__PURE__ */ import_react10.default.createElement("div", { className: "llm-tags" }, /* @__PURE__ */ import_react10.default.createElement(ModelTag, { channelName: value2.channel_name, highlight: true }), value2.tags.map((tag) => /* @__PURE__ */ import_react10.default.createElement(ModelTag, { key: tag, channelName: tag })))));
    };
    return /* @__PURE__ */ import_react10.default.createElement("div", { className: "llm-container" }, /* @__PURE__ */ import_react10.default.createElement("div", { style: { display: "flex", gap: "5px", alignItems: "center" } }, /* @__PURE__ */ import_react10.default.createElement(
      TheSelect,
      {
        value: { value: selectedModel, label: labelOfModel(selectedModel) },
        options: models.map((model2) => ({
          value: model2.model_name,
          label: customSelectLabel({ value: model2 })
        })),
        onChange: (selectedOption) => {
          setSelectedModel(selectedOption?.value || "");
        },
        isLoading: models.length === 0
      }
    ), /* @__PURE__ */ import_react10.default.createElement("button", { onClick: () => setExpanded(!expanded) }, /* @__PURE__ */ import_react10.default.createElement("i", { className: "codicon codicon-settings" }))), expanded && /* @__PURE__ */ import_react10.default.createElement(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          paddingTop: "10px"
        }
      },
      [
        {
          label: "Temperature",
          value: temperature,
          min: 0,
          max: 1,
          step: 0.01,
          onChange: (value2) => setTemperature(parseFloat(value2)),
          defaultValue: 0.5
        },
        {
          label: "Top P",
          value: topP,
          min: 0,
          max: 1,
          step: 0.01,
          onChange: (value2) => setTopP(parseFloat(value2)),
          defaultValue: 1
        },
        {
          label: "Max Tokens",
          value: maxTokens,
          min: 1,
          max: 4096,
          step: 1,
          onChange: (value2) => setMaxTokens(Number(value2)),
          defaultValue: 2048
        }
      ].map((props) => /* @__PURE__ */ import_react10.default.createElement(RangeInput, { key: props.label, ...props }))
    ));
  }
  const root = (0, import_client.createRoot)(dom);
  root.render(/* @__PURE__ */ import_react10.default.createElement(ModelComponent, null));
  return () => root.unmount();
}
function labelOfModel(model2) {
  model2 = model2.replace(/\W/g, " ").replace(/\s+/g, " ").toLowerCase();
  model2 = model2.split(" ").map((word) => {
    if (word === "oomol") return "OOMOL";
    if (word === "qwen") return "Qwen";
    if (word === "qvq") return "QvQ";
    if (word === "qwq") return "QwQ";
    if (word === "deepseek") return "DeepSeek";
    if (word === "vl") return "VL";
    if (word === "ai") return "AI";
    return word[0].toUpperCase() + word.slice(1);
  }).join(" ");
  return model2;
}
function messages(dom, context) {
  injectStyles();
  const carbonSystem = /* @__PURE__ */ import_react10.default.createElement("svg", { width: "16", height: "16", viewBox: "0 0 32 32" }, /* @__PURE__ */ import_react10.default.createElement("path", { fill: "currentColor", d: "M30 24v-2h-2.101a5 5 0 0 0-.732-1.753l1.49-1.49l-1.414-1.414l-1.49 1.49A5 5 0 0 0 24 18.101V16h-2v2.101a5 5 0 0 0-1.753.732l-1.49-1.49l-1.414 1.414l1.49 1.49A5 5 0 0 0 18.101 22H16v2h2.101a5 5 0 0 0 .732 1.753l-1.49 1.49l1.414 1.414l1.49-1.49a5 5 0 0 0 1.753.732V30h2v-2.101a5 5 0 0 0 1.753-.732l1.49 1.49l1.414-1.414l-1.49-1.49A5 5 0 0 0 27.899 24Zm-7 2a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3" }), /* @__PURE__ */ import_react10.default.createElement("path", { fill: "currentColor", d: "M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h10v-2H4V12h24v3h2V6a2 2 0 0 0-2-2m0 6H4V6h24Z" }), /* @__PURE__ */ import_react10.default.createElement("circle", { cx: "20", cy: "8", r: "1", fill: "currentColor" }), /* @__PURE__ */ import_react10.default.createElement("circle", { cx: "23", cy: "8", r: "1", fill: "currentColor" }), /* @__PURE__ */ import_react10.default.createElement("circle", { cx: "26", cy: "8", r: "1", fill: "currentColor" }));
  const carbonAssistant = /* @__PURE__ */ import_react10.default.createElement("svg", { width: "16", height: "16", viewBox: "0 0 32 32" }, /* @__PURE__ */ import_react10.default.createElement("path", { fill: "currentColor", d: "M16 30C8.28 30 2 23.72 2 16S8.28 2 16 2s14 6.28 14 14c0 2.62-.73 5.18-2.11 7.39c.05.74 1.05 3.21 2.01 5.17c.19.38.11.84-.19 1.14s-.76.38-1.14.2c-1.99-.96-4.5-1.94-5.24-1.97A14 14 0 0 1 16 30m0-26C9.38 4 4 9.38 4 16s5.38 12 12 12a12 12 0 0 0 6.39-1.84c.32-.21 1.01-.63 4.58.84c-1.5-3.54-1.07-4.22-.87-4.54c1.23-1.93 1.89-4.16 1.89-6.46c0-6.62-5.38-12-12-12zm7.83 16.87l-1.67-1.11a4.997 4.997 0 0 1-8.33 0l-1.67 1.11A7 7 0 0 0 17.99 24c2.35 0 4.54-1.17 5.83-3.13zM22 13c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2c.01-1.09-.87-1.99-1.96-2zm-8 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2c.01-1.09-.87-1.99-1.96-2z" }));
  const carbonUser = /* @__PURE__ */ import_react10.default.createElement("svg", { width: "16", height: "16", viewBox: "0 0 32 32" }, /* @__PURE__ */ import_react10.default.createElement("path", { fill: "currentColor", d: "M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5m0 8a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3" }), /* @__PURE__ */ import_react10.default.createElement("path", { fill: "currentColor", d: "M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2m-6 24.377V25a3.003 3.003 0 0 1 3-3h6a3.003 3.003 0 0 1 3 3v1.377a11.9 11.9 0 0 1-12 0m13.993-1.451A5 5 0 0 0 19 20h-6a5 5 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0" }));
  const Role = ["system", "user", "assistant"];
  const RoleImages = {
    system: carbonSystem,
    assistant: carbonAssistant,
    user: carbonUser
  };
  const RoleOptions = Role.map((role) => ({
    value: role,
    label: /* @__PURE__ */ import_react10.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: 2 } }, RoleImages[role], /* @__PURE__ */ import_react10.default.createElement("span", { style: { textTransform: "capitalize" } }, role))
  }));
  const initialMessages = parseMessages(context.store.value$?.value);
  function MessagesComponent() {
    const [messages2, setMessages] = (0, import_react10.useState)(initialMessages);
    const allHandleNames = useVal(context.allHandleNames);
    const doHighlight = (0, import_react10.useCallback)((text) => {
      return doHighlight_(text, allHandleNames.map((v) => `{{${v}}}`));
    }, [allHandleNames]);
    const updateRole = (0, import_react10.useCallback)((index2, role) => {
      const newMessages = messages2.slice();
      if (newMessages[index2]) {
        newMessages[index2] = { ...newMessages[index2], role };
        setMessages(newMessages);
      }
    }, [messages2]);
    const updateContent = (0, import_react10.useCallback)((index2, content) => {
      const newMessages = messages2.slice();
      if (newMessages[index2]) {
        newMessages[index2] = { ...newMessages[index2], content };
        setMessages(newMessages);
      }
    }, [messages2]);
    const addMessage = (0, import_react10.useCallback)(() => setMessages((m) => {
      if (!m.length) {
        return [{ role: "system", content: "" }];
      } else {
        const newRole = m[m.length - 1].role === "user" ? "assistant" : "user";
        return [...m, { role: newRole, content: "" }];
      }
    }), []);
    const deleteMessage = (0, import_react10.useCallback)((index2) => setMessages((m) => m.toSpliced(index2, 1)), []);
    (0, import_react10.useEffect)(() => {
      context.store.value$?.set(messages2);
    }, [messages2]);
    return /* @__PURE__ */ import_react10.default.createElement("div", { className: "llm-container" }, messages2.map((a, i) => /* @__PURE__ */ import_react10.default.createElement("div", { key: i, "data-message-index": i, className: "llm-message-container" }, /* @__PURE__ */ import_react10.default.createElement("div", { className: "llm-message-head" }, /* @__PURE__ */ import_react10.default.createElement(
      TheSelect,
      {
        value: RoleOptions.find((option) => option.value === a.role),
        options: RoleOptions,
        onChange: (e) => updateRole(i, e?.value ?? "user"),
        components: customComponentsWithDefaultSingleValue
      }
    ), /* @__PURE__ */ import_react10.default.createElement("button", { onClick: () => deleteMessage(i) }, /* @__PURE__ */ import_react10.default.createElement("i", { className: "codicon codicon-trash" }))), /* @__PURE__ */ import_react10.default.createElement(
      import_react_simple_code_editor.default,
      {
        value: a.content,
        onValueChange: (content) => updateContent(i, content),
        highlight: doHighlight,
        padding: 5,
        className: "llm-message-content",
        placeholder: context.store.description$.value,
        style: { minHeight: 100, resize: "vertical" }
      }
    ))), /* @__PURE__ */ import_react10.default.createElement("button", { className: "llm-btn-add-message", onClick: addMessage }, "Add message"));
  }
  const root = (0, import_client.createRoot)(dom);
  root.render(/* @__PURE__ */ import_react10.default.createElement(MessagesComponent, null));
  return () => root.unmount();
}
function doHighlight_(content, keys) {
  content = content.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  for (const key of keys) {
    content = content.replaceAll(key, `<mark>${key}</mark>`);
  }
  return content;
}
function customSingleValue(option) {
  const { label, value } = option;
  return /* @__PURE__ */ import_react10.default.createElement("div", { className: "llm-format-option-container", title: filterString(label) || value }, value && /* @__PURE__ */ import_react10.default.createElement(ModelIcon, { modelName: value, size: 16 }), /* @__PURE__ */ import_react10.default.createElement("span", { className: "llm-format-option-label" }, label || value));
}
function filterString(str) {
  if (typeof str === "string") return str;
  return "";
}
var customComponents = {
  DropdownIndicator: (props) => /* @__PURE__ */ import_react10.default.createElement(components.DropdownIndicator, { ...props }, /* @__PURE__ */ import_react10.default.createElement("i", { className: "i-codicon:chevron-down" })),
  Menu: (props) => /* @__PURE__ */ import_react10.default.createElement(components.Menu, { ...props, className: clsx_default(props.className, "nowheel") }, props.children),
  SingleValue: (props) => /* @__PURE__ */ import_react10.default.createElement(components.SingleValue, { ...props }, customSingleValue(props.data))
};
var customComponentsWithDefaultSingleValue = {
  DropdownIndicator: (props) => /* @__PURE__ */ import_react10.default.createElement(components.DropdownIndicator, { ...props }, /* @__PURE__ */ import_react10.default.createElement("i", { className: "i-codicon:chevron-down" })),
  Menu: (props) => /* @__PURE__ */ import_react10.default.createElement(components.Menu, { ...props, className: clsx_default(props.className, "nowheel") }, props.children)
};
function TheSelect(props) {
  const [menuWidth, setMenuWidth] = (0, import_react10.useState)(0);
  const innerRef = (0, import_react10.useRef)(null);
  (0, import_react10.useEffect)(() => {
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
  return /* @__PURE__ */ import_react10.default.createElement(
    "div",
    {
      style: {
        display: "contents",
        ["--menu-width"]: `${menuWidth}px`
      }
    },
    /* @__PURE__ */ import_react10.default.createElement(
      StateManagedSelect$1,
      {
        ref: innerRef,
        value: props.value,
        options: props.options,
        className: "react-select-container",
        classNamePrefix: "react-select",
        onChange: props.onChange,
        unstyled: true,
        components: props.components ?? customComponents,
        styles: { menu: (base) => ({ ...base, width: "var(--menu-width)" }) },
        isLoading: props.isLoading
      }
    )
  );
}
function ModelTag({
  channelName,
  highlight
}) {
  return /* @__PURE__ */ import_react10.default.createElement("div", { className: clsx_default(
    "llm-tag",
    highlight && "llm-tag-highlight",
    channelName && `llm-tag-${channelName}`
  ) }, channelName);
}
var modelIconMap = {
  "fallback-icon": default_default,
  codestral: codestral_default,
  deepseek: deepseek_default,
  doubao: doubao_default,
  mistralai: mistralai_default,
  oomol: oomol_default,
  qwen: qwen_default,
  "silicon-flow": silicon_flow_default,
  qwq: qwen_default,
  gemini: gemini_default,
  grok: grok_default,
  openai: openai_default,
  claude: claude_default
};
function getModelIcon(model2) {
  if (model2 === "oomol-chat" || model2 === "Default") return "oomol";
  const parsedLabel = model2.replace(/\W/g, " ").replace(/\s+/g, " ").toLowerCase();
  return Object.keys(modelIconMap).find((key) => parsedLabel.includes(key)) || "fallback-icon";
}
function ModelIcon({ modelName, size: size2 }) {
  const iconSize = size2 || 40;
  const iconSrc = getModelIcon(modelName);
  return iconSrc ? /* @__PURE__ */ import_react10.default.createElement(
    "img",
    {
      src: modelIconMap[iconSrc],
      alt: modelName,
      style: { width: iconSize, height: iconSize }
    }
  ) : null;
}
function RangeInput({
  label,
  value,
  min: min2,
  max: max2,
  step,
  onChange: onChange2,
  defaultValue
}) {
  return /* @__PURE__ */ import_react10.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "4px" } }, /* @__PURE__ */ import_react10.default.createElement("label", null, label, ":"), /* @__PURE__ */ import_react10.default.createElement("div", { style: { display: "flex", gap: "8px", alignItems: "center" } }, /* @__PURE__ */ import_react10.default.createElement(
    "input",
    {
      type: "range",
      min: min2,
      max: max2,
      step,
      value,
      onChange: (e) => {
        onChange2(e.target.value);
      },
      defaultValue,
      style: {
        height: "4px",
        flex: 1,
        padding: 0,
        margin: 0,
        border: "none"
      }
    }
  ), /* @__PURE__ */ import_react10.default.createElement(
    "input",
    {
      type: "number",
      min: min2,
      max: max2,
      step,
      value,
      defaultValue,
      onChange: (e) => {
        const newValue = e.target.value === "" ? "" : Math.min(Math.max(Number(e.target.value), min2), max2);
        onChange2(newValue);
      },
      onBlur: (e) => {
        const numValue = Number(e.target.value);
        if (e.target.value === "" || isNaN(numValue)) {
          onChange2(min2);
        } else {
          const clampedValue = Math.min(Math.max(numValue, min2), max2);
          const finalValue = Number.isInteger(step) ? Math.round(clampedValue) : Number.parseFloat(clampedValue.toFixed(2));
          onChange2(finalValue);
        }
      },
      style: { width: "60px", margin: 0, border: "none" }
    }
  )));
}
function parseMessages(value) {
  if (typeof value === "string") {
    return [{ role: "user", content: value }];
  } else if (Array.isArray(value)) {
    const Role = ["system", "user", "assistant"];
    return value.filter((x) => !!x).map((v) => {
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
var STYLE = `
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
export {
  messages,
  model
};
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-is/cjs/react-is.production.min.js:
  (** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
