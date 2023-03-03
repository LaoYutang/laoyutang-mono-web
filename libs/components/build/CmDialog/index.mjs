import { ElButton as D, ElDialog as J } from "element-plus/es";
import { defineComponent as v, ref as Q, openBlock as g, createBlock as T, mergeProps as F, unref as c, withCtx as u, renderSlot as L, createElementBlock as M, createStaticVNode as j, getCurrentInstance as R, watch as N, computed as U, isRef as A, createSlots as G, createElementVNode as H, createVNode as V, createTextVNode as x } from "vue";
import { _debounce as W } from "utils";
const Z = v({
  name: "cm-button"
}), K = /* @__PURE__ */ v({
  ...Z,
  props: {
    handler: null
  },
  setup(e) {
    const t = e, n = Q(!1), o = W(async (a) => {
      n.value = !0;
      try {
        await t.handler(a);
      } catch {
      }
      n.value = !1;
    });
    return (a, i) => {
      const s = D;
      return g(), T(s, F(a.$attrs, {
        loading: c(n),
        onClick: c(o)
      }), {
        default: u(() => [
          L(a.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["loading", "onClick"]);
    };
  }
});
const q = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, a] of t)
    n[o] = a;
  return n;
}, X = /* @__PURE__ */ q(K, [["__scopeId", "data-v-68fd51f0"]]), Y = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, ee = /* @__PURE__ */ j('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M5.63604 5.63603C9.15076 2.12131 14.8492 2.12131 18.364 5.63603C21.8787 9.15075 21.8787 14.8492 18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C2.12132 14.8492 2.12132 9.15075 5.63604 5.63603Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"></animate></path><path stroke-dasharray="18" stroke-dashoffset="18" d="M6 6L18 18"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="18;0"></animate></path></g>', 1), te = [
  ee
];
function ne(e, t) {
  return g(), M("svg", Y, te);
}
const oe = { name: "line-md-cancel", render: ne }, ae = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, se = /* @__PURE__ */ j('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"></animate></path><path stroke-dasharray="14" stroke-dashoffset="14" d="M8 12L11 15L16 10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"></animate></path></g>', 1), re = [
  se
];
function le(e, t) {
  return g(), M("svg", ae, re);
}
const ie = { name: "line-md-confirm-circle", render: le };
var B;
const w = typeof window < "u", de = (e) => typeof e < "u", ue = (e) => typeof e == "function";
w && ((B = window == null ? void 0 : window.navigator) != null && B.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ce(e) {
  return e;
}
w && window.document;
w && window.navigator;
w && window.location;
function fe(e) {
  return JSON.parse(JSON.stringify(e));
}
const y = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, C = "__vueuse_ssr_handlers__";
y[C] = y[C] || {};
y[C];
var $;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})($ || ($ = {}));
var _e = Object.defineProperty, E = Object.getOwnPropertySymbols, me = Object.prototype.hasOwnProperty, pe = Object.prototype.propertyIsEnumerable, P = (e, t, n) => t in e ? _e(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, he = (e, t) => {
  for (var n in t || (t = {}))
    me.call(t, n) && P(e, n, t[n]);
  if (E)
    for (var n of E(t))
      pe.call(t, n) && P(e, n, t[n]);
  return e;
};
const ve = {
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
he({
  linear: ce
}, ve);
function ge(e, t, n, o = {}) {
  var a, i, s;
  const {
    clone: d = !1,
    passive: f = !1,
    eventName: _,
    deep: m = !1,
    defaultValue: z
  } = o, r = R(), b = n || (r == null ? void 0 : r.emit) || ((a = r == null ? void 0 : r.$emit) == null ? void 0 : a.bind(r)) || ((s = (i = r == null ? void 0 : r.proxy) == null ? void 0 : i.$emit) == null ? void 0 : s.bind(r == null ? void 0 : r.proxy));
  let p = _;
  t || (t = "modelValue"), p = _ || p || `update:${t.toString()}`;
  const I = (l) => d ? ue(d) ? d(l) : fe(l) : l, k = () => de(e[t]) ? I(e[t]) : z;
  if (f) {
    const l = k(), O = Q(l);
    return N(() => e[t], (h) => O.value = I(h)), N(O, (h) => {
      (h !== e[t] || m) && b(p, h);
    }, { deep: m }), O;
  } else
    return U({
      get() {
        return k();
      },
      set(l) {
        b(p, l);
      }
    });
}
const we = { class: "footer" }, Oe = v({
  name: "CmDialog"
}), S = /* @__PURE__ */ v({
  ...Oe,
  props: {
    modelValue: { type: Boolean },
    isShowButtons: { type: Boolean, default: !0 },
    beforeconfrim: { type: Function, default: () => Promise.reject() }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = ge(n, "modelValue", t), a = () => {
      n.beforeconfrim().then(() => {
        o.value = !1;
      }).catch((s) => s);
    }, i = () => {
      o.value = !1;
    };
    return (s, d) => {
      const f = X, _ = J;
      return g(), T(_, F({
        modelValue: c(o),
        "onUpdate:modelValue": d[0] || (d[0] = (m) => A(o) ? o.value = m : null)
      }, s.$attrs, {
        class: "cm-dialog",
        draggable: "",
        "close-on-click-modal": !1,
        "destroy-on-close": ""
      }), G({
        default: u(() => [
          L(s.$slots, "default")
        ]),
        _: 2
        /* DYNAMIC */
      }, [
        e.isShowButtons ? {
          name: "footer",
          fn: u(() => [
            H("div", we, [
              V(f, {
                handler: i,
                icon: c(oe)
              }, {
                default: u(() => [
                  x(" 取消 ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["icon"]),
              V(f, {
                handler: a,
                type: "primary",
                icon: c(ie)
              }, {
                default: u(() => [
                  x(" 提交 ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["icon"])
            ])
          ]),
          key: "0"
        } : void 0
      ]), 1040, ["modelValue"]);
    };
  }
}), Ie = {
  install(e) {
    e.component(S.name, S);
  }
};
export {
  S as CmDialog,
  Ie as default
};
