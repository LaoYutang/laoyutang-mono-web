import { getCurrentScope as N, onScopeDispose as $, unref as O, getCurrentInstance as j, onMounted as k, nextTick as L, computed as U, ref as v, watch as b, defineComponent as T, onBeforeUnmount as W, openBlock as A, createElementBlock as F, createElementVNode as G, normalizeStyle as H } from "vue";
import * as B from "echarts/core";
import { BarChart as M, LineChart as V, PieChart as D } from "echarts/charts";
import { TitleComponent as K, TooltipComponent as q, GridComponent as J, DatasetComponent as X, TransformComponent as Y, LegendComponent as Z, ToolboxComponent as ee } from "echarts/components";
import { LabelLayout as te, UniversalTransition as ne } from "echarts/features";
import { CanvasRenderer as oe } from "echarts/renderers";
import { _throttle as re } from "utils";
B.use([
  K,
  q,
  J,
  X,
  Y,
  Z,
  ee,
  M,
  V,
  D,
  te,
  ne,
  oe
]);
const se = B;
var y;
const h = typeof window < "u", m = () => {
};
h && ((y = window == null ? void 0 : window.navigator) != null && y.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ae(e) {
  return typeof e == "function" ? e() : O(e);
}
function ie(e) {
  return e;
}
function R(e) {
  return N() ? ($(e), !0) : !1;
}
function ue(e, t = !0) {
  j() ? k(e) : t ? e() : L(e);
}
function p(e) {
  var t;
  const n = ae(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const g = h ? window : void 0;
h && window.document;
h && window.navigator;
h && window.location;
function z(e, t = !1) {
  const n = v(), o = () => n.value = Boolean(e());
  return o(), ue(o, t), n;
}
const w = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, _ = "__vueuse_ssr_handlers__";
w[_] = w[_] || {};
w[_];
var I = Object.getOwnPropertySymbols, le = Object.prototype.hasOwnProperty, ce = Object.prototype.propertyIsEnumerable, de = (e, t) => {
  var n = {};
  for (var o in e)
    le.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && I)
    for (var o of I(e))
      t.indexOf(o) < 0 && ce.call(e, o) && (n[o] = e[o]);
  return n;
};
function Q(e, t, n = {}) {
  const o = n, { window: a = g } = o, d = de(o, ["window"]);
  let s;
  const u = z(() => a && "ResizeObserver" in a), r = () => {
    s && (s.disconnect(), s = void 0);
  }, l = b(() => p(e), (c) => {
    r(), u.value && a && c && (s = new ResizeObserver(t), s.observe(c, d));
  }, { immediate: !0, flush: "post" }), i = () => {
    r(), l();
  };
  return R(i), {
    isSupported: u,
    stop: i
  };
}
function pe(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: o = g, box: a = "content-box" } = n, d = U(() => {
    var r, l;
    return (l = (r = p(e)) == null ? void 0 : r.namespaceURI) == null ? void 0 : l.includes("svg");
  }), s = v(t.width), u = v(t.height);
  return Q(e, ([r]) => {
    const l = a === "border-box" ? r.borderBoxSize : a === "content-box" ? r.contentBoxSize : r.devicePixelContentBoxSize;
    if (o && d.value) {
      const i = p(e);
      if (i) {
        const c = o.getComputedStyle(i);
        s.value = parseFloat(c.width), u.value = parseFloat(c.height);
      }
    } else if (l) {
      const i = Array.isArray(l) ? l : [l];
      s.value = i.reduce((c, { inlineSize: f }) => c + f, 0), u.value = i.reduce((c, { blockSize: f }) => c + f, 0);
    } else
      s.value = r.contentRect.width, u.value = r.contentRect.height;
  }, n), b(() => p(e), (r) => {
    s.value = r ? t.width : 0, u.value = r ? t.height : 0;
  }), {
    width: s,
    height: u
  };
}
function fe(e, t, n = {}) {
  const {
    root: o,
    rootMargin: a = "0px",
    threshold: d = 0.1,
    window: s = g
  } = n, u = z(() => s && "IntersectionObserver" in s);
  let r = m;
  const l = u.value ? b(() => ({
    el: p(e),
    root: p(o)
  }), ({ el: c, root: f }) => {
    if (r(), !c)
      return;
    const C = new IntersectionObserver(t, {
      root: f,
      rootMargin: a,
      threshold: d
    });
    C.observe(c), r = () => {
      C.disconnect(), r = m;
    };
  }, { immediate: !0, flush: "post" }) : m, i = () => {
    r(), l();
  };
  return R(i), {
    isSupported: u,
    stop: i
  };
}
var x;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(x || (x = {}));
var ve = Object.defineProperty, P = Object.getOwnPropertySymbols, he = Object.prototype.hasOwnProperty, me = Object.prototype.propertyIsEnumerable, S = (e, t, n) => t in e ? ve(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Oe = (e, t) => {
  for (var n in t || (t = {}))
    he.call(t, n) && S(e, n, t[n]);
  if (P)
    for (var n of P(t))
      me.call(t, n) && S(e, n, t[n]);
  return e;
};
const we = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
Oe({
  linear: ie
}, we);
const _e = T({
  name: "CmChart"
}), E = /* @__PURE__ */ T({
  ..._e,
  props: {
    options: null
  },
  setup(e, { expose: t }) {
    const n = e, o = v(null);
    let a = null, d;
    const { height: s, width: u } = pe(o), r = v(null), { stop: l } = fe(o, ([{ isIntersecting: i }]) => {
      i && (a = se.init(r.value), d = re(a.resize, 500, !1), Q(o, () => d()), a.setOption(n.options), l());
    });
    return W(() => {
      a.dispose();
    }), t({
      chartInstance: a
    }), (i, c) => (A(), F(
      "div",
      {
        ref_key: "cmChart",
        ref: o,
        class: "cm-chart"
      },
      [
        G(
          "div",
          {
            id: "chart",
            ref_key: "chart",
            ref: r,
            class: "chart",
            style: H(`width: ${O(u)}px;height: ${O(s)}px;`)
          },
          null,
          4
          /* STYLE */
        )
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), Pe = {
  install(e) {
    e.component(E.name, E);
  }
};
export {
  E as CmChart,
  Pe as default
};
