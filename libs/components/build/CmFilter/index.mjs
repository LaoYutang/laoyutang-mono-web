import { ElButton as H, ElButtonGroup as j } from "element-plus/es";
import { defineComponent as O, ref as f, openBlock as p, createBlock as L, mergeProps as G, unref as d, withCtx as m, renderSlot as R, createElementBlock as g, createElementVNode as w, createStaticVNode as M, getCurrentScope as A, onScopeDispose as U, getCurrentInstance as W, onMounted as q, nextTick as D, computed as K, watch as Q, createCommentVNode as x, normalizeStyle as Z, withDirectives as I, createVNode as v, vShow as $, createTextVNode as S } from "vue";
import { _debounce as J } from "utils";
const X = O({
  name: "cm-button"
}), Y = /* @__PURE__ */ O({
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
      const s = H;
      return p(), L(s, G(r.$attrs, {
        loading: d(n),
        onClick: d(o)
      }), {
        default: m(() => [
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
}, ne = /* @__PURE__ */ w(
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
  return p(), g("svg", te, oe);
}
const se = { name: "ic-round-keyboard-arrow-up", render: re }, ae = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, ie = /* @__PURE__ */ w(
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
  return p(), g("svg", ae, ce);
}
const ue = { name: "ic-round-keyboard-arrow-down", render: le }, de = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, _e = /* @__PURE__ */ M('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="16" stroke-dashoffset="16" d="M10.5 13.5L3 21"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="16;0"></animate></path><path stroke-dasharray="40" stroke-dashoffset="40" d="M10.7574 13.2426C8.41421 10.8995 8.41421 7.10051 10.7574 4.75736C13.1005 2.41421 16.8995 2.41421 19.2426 4.75736C21.5858 7.10051 21.5858 10.8995 19.2426 13.2426C16.8995 15.5858 13.1005 15.5858 10.7574 13.2426Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="40;0"></animate></path></g>', 1), fe = [
  _e
];
function pe(e, t) {
  return p(), g("svg", de, fe);
}
const he = { name: "line-md-search", render: pe }, ve = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, me = /* @__PURE__ */ M('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="32" stroke-dashoffset="32" d="M12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12V9.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="32;0"></animate></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M6 9L3 12M6 9L9 12"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0"></animate></path></g>', 1), we = [
  me
];
function ge(e, t) {
  return p(), g("svg", ve, we);
}
const be = { name: "line-md-rotate-270", render: ge };
var B;
const b = typeof window < "u";
b && ((B = window == null ? void 0 : window.navigator) != null && B.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
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
function y(e) {
  var t;
  const n = ye(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const V = b ? window : void 0;
b && window.document;
b && window.navigator;
b && window.location;
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
  let s;
  const l = Ce(() => r && "ResizeObserver" in r), a = () => {
    s && (s.disconnect(), s = void 0);
  }, c = Q(() => y(e), (i) => {
    a(), l.value && r && i && (s = new ResizeObserver(t), s.observe(i, _));
  }, { immediate: !0, flush: "post" }), u = () => {
    a(), c();
  };
  return xe(u), {
    isSupported: l,
    stop: u
  };
}
function Ee(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: o = V, box: r = "content-box" } = n, _ = K(() => {
    var a, c;
    return (c = (a = y(e)) == null ? void 0 : a.namespaceURI) == null ? void 0 : c.includes("svg");
  }), s = f(t.width), l = f(t.height);
  return Be(e, ([a]) => {
    const c = r === "border-box" ? a.borderBoxSize : r === "content-box" ? a.contentBoxSize : a.devicePixelContentBoxSize;
    if (o && _.value) {
      const u = y(e);
      if (u) {
        const i = o.getComputedStyle(u);
        s.value = parseFloat(i.width), l.value = parseFloat(i.height);
      }
    } else if (c) {
      const u = Array.isArray(c) ? c : [c];
      s.value = u.reduce((i, { inlineSize: h }) => i + h, 0), l.value = u.reduce((i, { blockSize: h }) => i + h, 0);
    } else
      s.value = a.contentRect.width, l.value = a.contentRect.height;
  }, n), Q(() => y(e), (a) => {
    s.value = a ? t.width : 0, l.value = a ? t.height : 0;
  }), {
    width: s,
    height: l
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
const Re = { class: "cm-filter" }, Me = { class: "buttons" }, Qe = O({
  name: "CmFilter"
}), Te = /* @__PURE__ */ O({
  ...Qe,
  props: {
    queryHandler: { type: Function },
    resetHandler: { type: Function }
  },
  setup(e) {
    const t = e, n = f(!0), o = f("50px"), r = f(null), { height: _ } = Ee(r), s = () => {
      n.value = !n.value, o.value = n.value ? "50px" : _.value.toString() + "px";
    };
    return (l, a) => {
      const c = ue, u = se, i = ee, h = j;
      return p(), g("div", Re, [
        x(" 左侧表单 "),
        w(
          "div",
          {
            class: "form",
            style: Z(`height: ${d(o)}`)
          },
          [
            w(
              "div",
              {
                ref_key: "slot",
                ref: r
              },
              [
                R(l.$slots, "default", {}, void 0, !0)
              ],
              512
              /* NEED_PATCH */
            ),
            d(_) > 50 ? (p(), L(i, {
              key: 0,
              class: "form-fold_icon",
              handler: s,
              circle: "",
              text: "",
              bg: ""
            }, {
              default: m(() => [
                I(v(
                  c,
                  null,
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [$, d(n)]
                ]),
                I(v(
                  u,
                  null,
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [$, !d(n)]
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
        w("div", Me, [
          v(h, null, {
            default: m(() => [
              v(i, {
                type: "primary",
                icon: d(he),
                handler: t.queryHandler
              }, {
                default: m(() => [
                  S(" 查询 ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["icon", "handler"]),
              v(i, {
                icon: d(be),
                handler: t.resetHandler
              }, {
                default: m(() => [
                  S(" 重置 ")
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
const F = /* @__PURE__ */ T(Te, [["__scopeId", "data-v-0d8d7aba"]]), Ge = {
  install(e) {
    e.component(F.name, F);
  }
};
export {
  F as CmFilter,
  Ge as default
};
