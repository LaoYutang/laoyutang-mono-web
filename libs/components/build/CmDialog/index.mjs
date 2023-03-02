import { ElButton as J, ElDialog as R } from "element-plus/es";
import { defineComponent as v, ref as $, openBlock as T, createBlock as F, mergeProps as D, unref as w, withCtx as d, renderSlot as j, getCurrentInstance as U, watch as V, computed as A, isRef as G, createSlots as H, createElementVNode as L, createVNode as N, createTextVNode as P } from "vue";
import { _debounce as W } from "utils";
const K = v({
  name: "cm-button"
}), M = /* @__PURE__ */ v({
  ...K,
  props: {
    handler: null
  },
  setup(e) {
    const n = e, t = $(!1), o = W(async (a) => {
      t.value = !0;
      try {
        await n.handler(a);
      } catch {
      }
      t.value = !1;
    });
    return (a, u) => {
      const l = J;
      return T(), F(l, D(a.$attrs, {
        loading: w(t),
        onClick: w(o)
      }), {
        default: d(() => [
          j(a.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["loading", "onClick"]);
    };
  }
});
const q = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, a] of n)
    t[o] = a;
  return t;
}, z = /* @__PURE__ */ q(M, [["__scopeId", "data-v-68fd51f0"]]);
var B;
const g = typeof window < "u", X = (e) => typeof e < "u", Y = (e) => typeof e == "function";
g && ((B = window == null ? void 0 : window.navigator) != null && B.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Z(e) {
  return e;
}
g && window.document;
g && window.navigator;
g && window.location;
function ee(e) {
  return JSON.parse(JSON.stringify(e));
}
const y = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, b = "__vueuse_ssr_handlers__";
y[b] = y[b] || {};
y[b];
var E;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(E || (E = {}));
var ne = Object.defineProperty, x = Object.getOwnPropertySymbols, te = Object.prototype.hasOwnProperty, oe = Object.prototype.propertyIsEnumerable, S = (e, n, t) => n in e ? ne(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, ae = (e, n) => {
  for (var t in n || (n = {}))
    te.call(n, t) && S(e, t, n[t]);
  if (x)
    for (var t of x(n))
      oe.call(n, t) && S(e, t, n[t]);
  return e;
};
const le = {
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
ae({
  linear: Z
}, le);
function se(e, n, t, o = {}) {
  var a, u, l;
  const {
    clone: i = !1,
    passive: c = !1,
    eventName: f,
    deep: _ = !1,
    defaultValue: k
  } = o, s = U(), I = t || (s == null ? void 0 : s.emit) || ((a = s == null ? void 0 : s.$emit) == null ? void 0 : a.bind(s)) || ((l = (u = s == null ? void 0 : s.proxy) == null ? void 0 : u.$emit) == null ? void 0 : l.bind(s == null ? void 0 : s.proxy));
  let p = f;
  n || (n = "modelValue"), p = f || p || `update:${n.toString()}`;
  const h = (r) => i ? Y(i) ? i(r) : ee(r) : r, C = () => X(e[n]) ? h(e[n]) : k;
  if (c) {
    const r = C(), O = $(r);
    return V(() => e[n], (m) => O.value = h(m)), V(O, (m) => {
      (m !== e[n] || _) && I(p, m);
    }, { deep: _ }), O;
  } else
    return A({
      get() {
        return C();
      },
      set(r) {
        I(p, r);
      }
    });
}
const re = { class: "footer" }, ue = v({
  name: "CmDialog"
}), Q = /* @__PURE__ */ v({
  ...ue,
  props: {
    modelValue: { type: Boolean },
    isShowButtons: { type: Boolean, default: !0 },
    beforeconfrim: { type: Function, default: () => Promise.reject() }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, o = se(t, "modelValue", n), a = () => {
      t.beforeconfrim().then(() => {
        o.value = !1;
      }).catch((l) => l);
    }, u = () => {
      o.value = !1;
    };
    return (l, i) => {
      const c = z, f = R;
      return T(), F(f, D({
        modelValue: w(o),
        "onUpdate:modelValue": i[0] || (i[0] = (_) => G(o) ? o.value = _ : null)
      }, l.$attrs, {
        class: "cm-dialog",
        draggable: "",
        "close-on-click-modal": !1,
        "destroy-on-close": ""
      }), H({
        default: d(() => [
          j(l.$slots, "default")
        ]),
        _: 2
        /* DYNAMIC */
      }, [
        e.isShowButtons ? {
          name: "footer",
          fn: d(() => [
            L("div", re, [
              N(c, { handler: u }, {
                default: d(() => [
                  P("取消")
                ]),
                _: 1
                /* STABLE */
              }),
              N(c, {
                handler: a,
                type: "primary"
              }, {
                default: d(() => [
                  P("提交")
                ]),
                _: 1
                /* STABLE */
              })
            ])
          ]),
          key: "0"
        } : void 0
      ]), 1040, ["modelValue"]);
    };
  }
}), fe = {
  install(e) {
    e.component(Q.name, Q);
  }
};
export {
  Q as CmDialog,
  fe as default
};
