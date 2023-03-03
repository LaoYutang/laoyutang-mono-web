import { ElButton as H, ElButtonGroup as j } from "element-plus/es";
import { defineComponent as y, ref as f, openBlock as p, createBlock as L, mergeProps as G, unref as d, withCtx as v, renderSlot as R, createElementBlock as w, createElementVNode as m, createStaticVNode as M, getCurrentScope as A, onScopeDispose as U, getCurrentInstance as W, onMounted as q, nextTick as D, computed as K, watch as Q, createCommentVNode as x, normalizeStyle as Z, withDirectives as I, createVNode as h, vShow as $, createTextVNode as S } from "vue";
import { _debounce as J } from "utils";
const X = y({
  name: "cm-button"
}), Y = /* @__PURE__ */ y({
  ...X,
  props: {
    handler: null
  },
  setup(e) {
    const t = e, n = f(!1), o = J(async (r) => {
      n.value = !0;
      try {
        await t.handler(r);
      } catch {
      }
      n.value = !1;
    });
    return (r, _) => {
      const a = H;
      return p(), L(a, G(r.$attrs, {
        loading: d(n),
        onClick: d(o)
      }), {
        default: v(() => [
          R(r.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["loading", "onClick"]);
    };
  }
});
const T = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, ee = /* @__PURE__ */ T(Y, [["__scopeId", "data-v-68fd51f0"]]), te = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, ne = /* @__PURE__ */ m(
  "path",
  {
    fill: "currentColor",
    d: "M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z"
  },
  null,
  -1
  /* HOISTED */
), oe = [
  ne
];
function re(e, t) {
  return p(), w("svg", te, oe);
}
const se = { name: "ic-round-keyboard-arrow-up", render: re }, ae = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, ie = /* @__PURE__ */ m(
  "path",
  {
    fill: "currentColor",
    d: "M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z"
  },
  null,
  -1
  /* HOISTED */
), ce = [
  ie
];
function le(e, t) {
  return p(), w("svg", ae, ce);
}
const ue = { name: "ic-round-keyboard-arrow-down", render: le }, de = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, _e = /* @__PURE__ */ M('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="16" stroke-dashoffset="16" d="M10.5 13.5L3 21"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="16;0"></animate></path><path stroke-dasharray="40" stroke-dashoffset="40" d="M10.7574 13.2426C8.41421 10.8995 8.41421 7.10051 10.7574 4.75736C13.1005 2.41421 16.8995 2.41421 19.2426 4.75736C21.5858 7.10051 21.5858 10.8995 19.2426 13.2426C16.8995 15.5858 13.1005 15.5858 10.7574 13.2426Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="40;0"></animate></path></g>', 1), fe = [
  _e
];
function pe(e, t) {
  return p(), w("svg", de, fe);
}
const he = { name: "line-md-search", render: pe }, ve = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, me = /* @__PURE__ */ M('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="32" stroke-dashoffset="32" d="M12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12V9.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="32;0"></animate></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M6 9L3 12M6 9L9 12"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0"></animate></path></g>', 1), we = [
  me
];
function ge(e, t) {
  return p(), w("svg", ve, we);
}
const be = { name: "line-md-rotate-270", render: ge };
var B;
const g = typeof window < "u";
g && ((B = window == null ? void 0 : window.navigator) != null && B.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ye(e) {
  return typeof e == "function" ? e() : d(e);
}
function Oe(e) {
  return e;
}
function xe(e) {
  return A() ? (U(e), !0) : !1;
}
function ke(e, t = !0) {
  W() ? q(e) : t ? e() : D(e);
}
function b(e) {
  var t;
  const n = ye(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const V = g ? window : void 0;
g && window.document;
g && window.navigator;
g && window.location;
function Ce(e, t = !1) {
  const n = f(), o = () => n.value = Boolean(e());
  return o(), ke(o, t), n;
}
const k = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, C = "__vueuse_ssr_handlers__";
k[C] = k[C] || {};
k[C];
var E = Object.getOwnPropertySymbols, Ie = Object.prototype.hasOwnProperty, $e = Object.prototype.propertyIsEnumerable, Se = (e, t) => {
  var n = {};
  for (var o in e)
    Ie.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && E)
    for (var o of E(e))
      t.indexOf(o) < 0 && $e.call(e, o) && (n[o] = e[o]);
  return n;
};
function Be(e, t, n = {}) {
  const o = n, { window: r = V } = o, _ = Se(o, ["window"]);
  let a;
  const u = Ce(() => r && "ResizeObserver" in r), s = () => {
    a && (a.disconnect(), a = void 0);
  }, c = Q(() => b(e), (l) => {
    s(), u.value && r && l && (a = new ResizeObserver(t), a.observe(l, _));
  }, { immediate: !0, flush: "post" }), i = () => {
    s(), c();
  };
  return xe(i), {
    isSupported: u,
    stop: i
  };
}
function Ee(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: o = V, box: r = "content-box" } = n, _ = K(() => {
    var s, c;
    return (c = (s = b(e)) == null ? void 0 : s.namespaceURI) == null ? void 0 : c.includes("svg");
  }), a = f(t.width), u = f(t.height);
  return Be(e, ([s]) => {
    const c = r === "border-box" ? s.borderBoxSize : r === "content-box" ? s.contentBoxSize : s.devicePixelContentBoxSize;
    if (o && _.value) {
      const i = b(e);
      if (i) {
        const l = o.getComputedStyle(i);
        a.value = parseFloat(l.width), u.value = parseFloat(l.height);
      }
    } else if (c) {
      const i = Array.isArray(c) ? c : [c];
      a.value = i.reduce((l, { inlineSize: O }) => l + O, 0), u.value = i.reduce((l, { blockSize: O }) => l + O, 0);
    } else
      a.value = s.contentRect.width, u.value = s.contentRect.height;
  }, n), Q(() => b(e), (s) => {
    a.value = s ? t.width : 0, u.value = s ? t.height : 0;
  }), {
    width: a,
    height: u
  };
}
var P;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(P || (P = {}));
var Pe = Object.defineProperty, N = Object.getOwnPropertySymbols, Ne = Object.prototype.hasOwnProperty, ze = Object.prototype.propertyIsEnumerable, z = (e, t, n) => t in e ? Pe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Fe = (e, t) => {
  for (var n in t || (t = {}))
    Ne.call(t, n) && z(e, n, t[n]);
  if (N)
    for (var n of N(t))
      ze.call(t, n) && z(e, n, t[n]);
  return e;
};
const Le = {
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
Fe({
  linear: Oe
}, Le);
const Re = { class: "cm-filter" }, Me = { class: "buttons" }, Qe = y({
  name: "CmFilter"
}), Te = /* @__PURE__ */ y({
  ...Qe,
  props: {
    queryHandler: { type: Function },
    resetHandler: { type: Function }
  },
  setup(e) {
    const t = f(!0), n = f("50px"), o = f(null), { height: r } = Ee(o), _ = () => {
      t.value = !t.value, n.value = t.value ? "50px" : r.value.toString() + "px";
    };
    return (a, u) => {
      const s = ue, c = se, i = ee, l = j;
      return p(), w("div", Re, [
        x(" 左侧表单 "),
        m(
          "div",
          {
            class: "form",
            style: Z(`height: ${d(n)}`)
          },
          [
            m(
              "div",
              {
                ref_key: "slot",
                ref: o
              },
              [
                R(a.$slots, "default", {}, void 0, !0)
              ],
              512
              /* NEED_PATCH */
            ),
            d(r) > 50 ? (p(), L(i, {
              key: 0,
              class: "form-fold_icon",
              handler: _,
              circle: "",
              text: "",
              bg: ""
            }, {
              default: v(() => [
                I(h(
                  s,
                  null,
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [$, d(t)]
                ]),
                I(h(
                  c,
                  null,
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [$, !d(t)]
                ])
              ]),
              _: 1
              /* STABLE */
            })) : x("v-if", !0)
          ],
          4
          /* STYLE */
        ),
        x(" 右侧按钮 "),
        m("div", Me, [
          h(l, null, {
            default: v(() => [
              h(i, {
                type: "primary",
                icon: d(he),
                handler: e.queryHandler
              }, {
                default: v(() => [
                  S(" 查询 ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["icon", "handler"]),
              h(i, {
                icon: d(be),
                handler: e.resetHandler
              }, {
                default: v(() => [
                  S("重置")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["icon", "handler"])
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ]);
    };
  }
});
const F = /* @__PURE__ */ T(Te, [["__scopeId", "data-v-f7beca35"]]), Ge = {
  install(e) {
    e.component(F.name, F);
  }
};
export {
  F as CmFilter,
  Ge as default
};
