import { ElButton as ce, ElDialog as ue, ElButtonGroup as de, ElInput as _e, ElInputNumber as pe, ElOption as fe, ElSelect as me, ElTreeSelect as he, ElTableColumn as ve, ElTable as ge, ElPagination as be, ElLoadingDirective as ye } from "element-plus/es";
import { defineComponent as v, ref as f, openBlock as p, createBlock as S, mergeProps as P, unref as c, withCtx as h, renderSlot as x, createElementBlock as g, createStaticVNode as D, getCurrentScope as Ce, onScopeDispose as $e, getCurrentInstance as ae, onMounted as we, nextTick as Oe, computed as j, watch as B, isRef as ke, createSlots as se, createElementVNode as w, createVNode as C, createTextVNode as M, createCommentVNode as $, normalizeStyle as Se, withDirectives as U, vShow as q, renderList as le, normalizeProps as K, guardReactiveProps as xe, Fragment as L, useCssVars as Ie, reactive as X } from "vue";
import { _debounce as Pe, _deepClone as Be } from "utils";
const ze = v({
  name: "cm-button"
}), Te = /* @__PURE__ */ v({
  ...ze,
  props: {
    handler: null
  },
  setup(e) {
    const t = e, n = f(!1), o = Pe(async (s) => {
      n.value = !0;
      try {
        await t.handler(s);
      } catch {
      }
      n.value = !1;
    });
    return (s, _) => {
      const a = ce;
      return p(), S(a, P(s.$attrs, {
        loading: c(n),
        onClick: c(o)
      }), {
        default: h(() => [
          x(s.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["loading", "onClick"]);
    };
  }
});
const F = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, T = /* @__PURE__ */ F(Te, [["__scopeId", "data-v-68fd51f0"]]), Ee = {
  install(e) {
    e.component(T.name, T);
  }
}, Ve = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmButton: T,
  default: Ee
}, Symbol.toStringTag, { value: "Module" }));
const Ne = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, je = /* @__PURE__ */ D('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M5.63604 5.63603C9.15076 2.12131 14.8492 2.12131 18.364 5.63603C21.8787 9.15075 21.8787 14.8492 18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C2.12132 14.8492 2.12132 9.15075 5.63604 5.63603Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"></animate></path><path stroke-dasharray="18" stroke-dashoffset="18" d="M6 6L18 18"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="18;0"></animate></path></g>', 1), Me = [
  je
];
function De(e, t) {
  return p(), g("svg", Ne, Me);
}
const Fe = { name: "line-md-cancel", render: De }, Le = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, Ue = /* @__PURE__ */ D('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"></animate></path><path stroke-dasharray="14" stroke-dashoffset="14" d="M8 12L11 15L16 10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"></animate></path></g>', 1), Re = [
  Ue
];
function Qe(e, t) {
  return p(), g("svg", Le, Re);
}
const He = { name: "line-md-confirm-circle", render: Qe };
var Y;
const E = typeof window < "u", Ge = (e) => typeof e < "u", We = (e) => typeof e == "function";
E && ((Y = window == null ? void 0 : window.navigator) != null && Y.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ae(e) {
  return typeof e == "function" ? e() : c(e);
}
function Je(e) {
  return e;
}
function Ze(e) {
  return Ce() ? ($e(e), !0) : !1;
}
function qe(e, t = !0) {
  ae() ? we(e) : t ? e() : Oe(e);
}
function N(e) {
  var t;
  const n = Ae(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const re = E ? window : void 0;
E && window.document;
E && window.navigator;
E && window.location;
function Ke(e, t = !1) {
  const n = f(), o = () => n.value = Boolean(e());
  return o(), qe(o, t), n;
}
function Xe(e) {
  return JSON.parse(JSON.stringify(e));
}
const R = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Q = "__vueuse_ssr_handlers__";
R[Q] = R[Q] || {};
R[Q];
var ee = Object.getOwnPropertySymbols, Ye = Object.prototype.hasOwnProperty, et = Object.prototype.propertyIsEnumerable, tt = (e, t) => {
  var n = {};
  for (var o in e)
    Ye.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && ee)
    for (var o of ee(e))
      t.indexOf(o) < 0 && et.call(e, o) && (n[o] = e[o]);
  return n;
};
function nt(e, t, n = {}) {
  const o = n, { window: s = re } = o, _ = tt(o, ["window"]);
  let a;
  const l = Ke(() => s && "ResizeObserver" in s), r = () => {
    a && (a.disconnect(), a = void 0);
  }, u = B(() => N(e), (i) => {
    r(), l.value && s && i && (a = new ResizeObserver(t), a.observe(i, _));
  }, { immediate: !0, flush: "post" }), d = () => {
    r(), u();
  };
  return Ze(d), {
    isSupported: l,
    stop: d
  };
}
function ot(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: o = re, box: s = "content-box" } = n, _ = j(() => {
    var r, u;
    return (u = (r = N(e)) == null ? void 0 : r.namespaceURI) == null ? void 0 : u.includes("svg");
  }), a = f(t.width), l = f(t.height);
  return nt(e, ([r]) => {
    const u = s === "border-box" ? r.borderBoxSize : s === "content-box" ? r.contentBoxSize : r.devicePixelContentBoxSize;
    if (o && _.value) {
      const d = N(e);
      if (d) {
        const i = o.getComputedStyle(d);
        a.value = parseFloat(i.width), l.value = parseFloat(i.height);
      }
    } else if (u) {
      const d = Array.isArray(u) ? u : [u];
      a.value = d.reduce((i, { inlineSize: m }) => i + m, 0), l.value = d.reduce((i, { blockSize: m }) => i + m, 0);
    } else
      a.value = r.contentRect.width, l.value = r.contentRect.height;
  }, n), B(() => N(e), (r) => {
    a.value = r ? t.width : 0, l.value = r ? t.height : 0;
  }), {
    width: a,
    height: l
  };
}
var te;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(te || (te = {}));
var at = Object.defineProperty, ne = Object.getOwnPropertySymbols, st = Object.prototype.hasOwnProperty, lt = Object.prototype.propertyIsEnumerable, oe = (e, t, n) => t in e ? at(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, rt = (e, t) => {
  for (var n in t || (t = {}))
    st.call(t, n) && oe(e, n, t[n]);
  if (ne)
    for (var n of ne(t))
      lt.call(t, n) && oe(e, n, t[n]);
  return e;
};
const it = {
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
rt({
  linear: Je
}, it);
function ct(e, t, n, o = {}) {
  var s, _, a;
  const {
    clone: l = !1,
    passive: r = !1,
    eventName: u,
    deep: d = !1,
    defaultValue: i
  } = o, m = ae(), b = n || (m == null ? void 0 : m.emit) || ((s = m == null ? void 0 : m.$emit) == null ? void 0 : s.bind(m)) || ((a = (_ = m == null ? void 0 : m.proxy) == null ? void 0 : _.$emit) == null ? void 0 : a.bind(m == null ? void 0 : m.proxy));
  let y = u;
  t || (t = "modelValue"), y = u || y || `update:${t.toString()}`;
  const I = (O) => l ? We(l) ? l(O) : Xe(O) : O, V = () => Ge(e[t]) ? I(e[t]) : i;
  if (r) {
    const O = V(), z = f(O);
    return B(() => e[t], (k) => z.value = I(k)), B(z, (k) => {
      (k !== e[t] || d) && b(y, k);
    }, { deep: d }), z;
  } else
    return j({
      get() {
        return V();
      },
      set(O) {
        b(y, O);
      }
    });
}
const ut = { class: "footer" }, dt = v({
  name: "CmDialog"
}), H = /* @__PURE__ */ v({
  ...dt,
  props: {
    modelValue: { type: Boolean },
    isShowButtons: { type: Boolean, default: !0 },
    beforeconfrim: { type: Function, default: () => Promise.reject() }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = ct(n, "modelValue", t), s = () => {
      n.beforeconfrim().then(() => {
        o.value = !1;
      }).catch((a) => a);
    }, _ = () => {
      o.value = !1;
    };
    return (a, l) => {
      const r = T, u = ue;
      return p(), S(u, P({
        modelValue: c(o),
        "onUpdate:modelValue": l[0] || (l[0] = (d) => ke(o) ? o.value = d : null)
      }, a.$attrs, {
        class: "cm-dialog",
        draggable: "",
        "close-on-click-modal": !1,
        "destroy-on-close": ""
      }), se({
        default: h(() => [
          x(a.$slots, "default")
        ]),
        _: 2
        /* DYNAMIC */
      }, [
        e.isShowButtons ? {
          name: "footer",
          fn: h(() => [
            w("div", ut, [
              C(r, {
                handler: _,
                icon: c(Fe)
              }, {
                default: h(() => [
                  M(" 取消 ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["icon"]),
              C(r, {
                handler: s,
                type: "primary",
                icon: c(He)
              }, {
                default: h(() => [
                  M(" 提交 ")
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
}), _t = {
  install(e) {
    e.component(H.name, H);
  }
}, pt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmDialog: H,
  default: _t
}, Symbol.toStringTag, { value: "Module" }));
const ft = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, mt = /* @__PURE__ */ w(
  "path",
  {
    fill: "currentColor",
    d: "M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z"
  },
  null,
  -1
  /* HOISTED */
), ht = [
  mt
];
function vt(e, t) {
  return p(), g("svg", ft, ht);
}
const gt = { name: "ic-round-keyboard-arrow-up", render: vt }, bt = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, yt = /* @__PURE__ */ w(
  "path",
  {
    fill: "currentColor",
    d: "M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z"
  },
  null,
  -1
  /* HOISTED */
), Ct = [
  yt
];
function $t(e, t) {
  return p(), g("svg", bt, Ct);
}
const wt = { name: "ic-round-keyboard-arrow-down", render: $t }, Ot = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, kt = /* @__PURE__ */ D('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="16" stroke-dashoffset="16" d="M10.5 13.5L3 21"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="16;0"></animate></path><path stroke-dasharray="40" stroke-dashoffset="40" d="M10.7574 13.2426C8.41421 10.8995 8.41421 7.10051 10.7574 4.75736C13.1005 2.41421 16.8995 2.41421 19.2426 4.75736C21.5858 7.10051 21.5858 10.8995 19.2426 13.2426C16.8995 15.5858 13.1005 15.5858 10.7574 13.2426Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="40;0"></animate></path></g>', 1), St = [
  kt
];
function xt(e, t) {
  return p(), g("svg", Ot, St);
}
const It = { name: "line-md-search", render: xt }, Pt = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, Bt = /* @__PURE__ */ D('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="32" stroke-dashoffset="32" d="M12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12V9.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="32;0"></animate></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M6 9L3 12M6 9L9 12"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0"></animate></path></g>', 1), zt = [
  Bt
];
function Tt(e, t) {
  return p(), g("svg", Pt, zt);
}
const Et = { name: "line-md-rotate-270", render: Tt }, Vt = { class: "cm-filter" }, Nt = { class: "buttons" }, jt = v({
  name: "CmFilter"
}), Mt = /* @__PURE__ */ v({
  ...jt,
  props: {
    queryHandler: { type: Function },
    resetHandler: { type: Function }
  },
  setup(e) {
    const t = f(!0), n = f("50px"), o = f(null), { height: s } = ot(o), _ = () => {
      t.value = !t.value, n.value = t.value ? "50px" : s.value.toString() + "px";
    };
    return (a, l) => {
      const r = wt, u = gt, d = T, i = de;
      return p(), g("div", Vt, [
        $(" 左侧表单 "),
        w(
          "div",
          {
            class: "form",
            style: Se(`height: ${c(n)}`)
          },
          [
            w(
              "div",
              {
                ref_key: "slot",
                ref: o
              },
              [
                x(a.$slots, "default", {}, void 0, !0)
              ],
              512
              /* NEED_PATCH */
            ),
            c(s) > 50 ? (p(), S(d, {
              key: 0,
              class: "form-fold_icon",
              handler: _,
              circle: "",
              text: "",
              bg: ""
            }, {
              default: h(() => [
                U(C(
                  r,
                  null,
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [q, c(t)]
                ]),
                U(C(
                  u,
                  null,
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [q, !c(t)]
                ])
              ]),
              _: 1
              /* STABLE */
            })) : $("v-if", !0)
          ],
          4
          /* STYLE */
        ),
        $(" 右侧按钮 "),
        w("div", Nt, [
          C(i, null, {
            default: h(() => [
              C(d, {
                type: "primary",
                icon: c(It),
                handler: e.queryHandler
              }, {
                default: h(() => [
                  M(" 查询 ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["icon", "handler"]),
              C(d, {
                icon: c(Et),
                handler: e.resetHandler
              }, {
                default: h(() => [
                  M("重置")
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
const G = /* @__PURE__ */ F(Mt, [["__scopeId", "data-v-f7beca35"]]), Dt = {
  install(e) {
    e.component(G.name, G);
  }
}, Ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmFilter: G,
  default: Dt
}, Symbol.toStringTag, { value: "Module" }));
const Lt = v({
  name: "CmInput"
}), W = /* @__PURE__ */ v({
  ...Lt,
  props: {
    type: { default: "text" }
  },
  setup(e) {
    const t = e;
    return (n, o) => {
      const s = _e, _ = pe;
      return t.type !== "number" ? (p(), S(s, P({ key: 0 }, n.$attrs, {
        type: t.type,
        clearable: ""
      }), se({
        _: 2
        /* DYNAMIC */
      }, [
        le(n.$slots, (a, l) => ({
          name: l,
          fn: h((r) => [
            x(n.$slots, l, K(xe(r)))
          ])
        }))
      ]), 1040, ["type"])) : (p(), S(
        _,
        K(P({ key: 1 }, n.$attrs)),
        null,
        16
        /* FULL_PROPS */
      ));
    };
  }
}), Ut = {
  install(e) {
    e.component(W.name, W);
  }
}, Rt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmInput: W,
  default: Ut
}, Symbol.toStringTag, { value: "Module" }));
const Qt = v({
  name: "CmSelect"
}), A = /* @__PURE__ */ v({
  ...Qt,
  props: {
    type: { default: "normal" },
    getData: null,
    params: { default: "" },
    multiple: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = f([]), s = f(!1), _ = (a) => {
      s.value = !0, n.getData(a).then((l) => {
        o.value = l;
      }).finally(() => {
        s.value = !1;
      });
    };
    return _(n.params), B(
      () => n.params,
      () => {
        t("update:modelValue", null), _(n.params);
      }
    ), (a, l) => {
      const r = fe, u = me, d = he;
      return p(), g(
        L,
        null,
        [
          $(" 普通下拉框 "),
          n.type === "normal" ? (p(), S(u, P({ key: 0 }, a.$attrs, {
            multiple: n.multiple,
            "show-checkbox": !1,
            "onUpdate:modelValue": l[0] || (l[0] = (i) => a.$emit("update:modelValue", i))
          }), {
            default: h(() => [
              (p(!0), g(
                L,
                null,
                le(c(o), (i) => (p(), S(r, {
                  key: i.value,
                  label: i.label,
                  value: i.value
                }, {
                  default: h(() => [
                    x(a.$slots, "default", { data: i })
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["label", "value"]))),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["multiple"])) : n.type === "tree" ? (p(), g(
            L,
            { key: 1 },
            [
              $(" 树形下拉框 "),
              C(d, P(a.$attrs, {
                data: c(o),
                multiple: n.multiple,
                "show-checkbox": n.multiple,
                "onUpdate:modelValue": l[1] || (l[1] = (i) => a.$emit("update:modelValue", i))
              }), {
                default: h(({ data: i }) => [
                  x(a.$slots, "default", { data: i })
                ]),
                _: 3
                /* FORWARDED */
              }, 16, ["data", "multiple", "show-checkbox"])
            ],
            2112
            /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
          )) : $("v-if", !0)
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      );
    };
  }
}), Ht = {
  install(e) {
    e.component(A.name, A);
  }
}, Gt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmSelect: A,
  default: Ht
}, Symbol.toStringTag, { value: "Module" })), Wt = {
  "aria-hidden": "true",
  class: "svg-icon"
}, At = ["xlink:href"], Jt = v({
  name: "CmSvg"
}), Zt = /* @__PURE__ */ v({
  ...Jt,
  props: {
    prefix: { default: "icon" },
    name: null,
    widthScale: { default: 1 }
  },
  setup(e) {
    const t = e;
    Ie((s) => ({
      "88ae7cc6": c(o)
    }));
    const n = j(() => `#${t.prefix}-${t.name}`), o = j(() => t.widthScale.toString() + "em");
    return (s, _) => (p(), g("svg", Wt, [
      w("use", { "xlink:href": c(n) }, null, 8, At)
    ]));
  }
});
const J = /* @__PURE__ */ F(Zt, [["__scopeId", "data-v-5865a63a"]]), qt = {
  install(e) {
    e.component(J.name, J);
  }
}, Kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmSvg: J,
  default: qt
}, Symbol.toStringTag, { value: "Module" }));
const Xt = { class: "cm-table" }, Yt = { class: "buttons" }, en = { class: "table" }, tn = { class: "pager" }, nn = v({
  name: "CmTable"
}), on = /* @__PURE__ */ v({
  ...nn,
  props: {
    getData: null,
    isInitData: { type: Boolean, default: !0 },
    initParams: { default: () => ({}) },
    isUsePager: { type: Boolean, default: !0 },
    isUseCheckBox: { type: Boolean, default: !0 }
  },
  setup(e, { expose: t }) {
    const n = e, o = f([]), s = f(!1), _ = f({}), a = X({
      pageSize: 20,
      currentPage: 1
    }), l = f(0), r = f(null), u = (b, y = !0) => (b && (_.value = Be(b)), y && (a.currentPage = 1), n.isUsePager && (_.value.pager = a), s.value = !0, n.getData(_).then((I) => {
      o.value = I.datas, l.value = I.total;
    }).catch().finally(() => {
      s.value = !1;
    }));
    n.isInitData && u(n.initParams), B(
      () => a.currentPage,
      () => {
        u(null, !1);
      }
    ), B(
      () => a.pageSize,
      () => {
        u();
      }
    );
    const d = f([]), i = (b) => {
      d.value = b;
    }, m = X({ a: 1 });
    return t({
      update: u,
      selection: d,
      test: m
    }), (b, y) => {
      const I = ve, V = ge, O = be, z = ye;
      return U((p(), g("div", Xt, [
        $(" 操作按钮组 "),
        w("div", Yt, [
          x(b.$slots, "buttons", { selection: c(d) }, void 0, !0)
        ]),
        $(" 表格主体 "),
        w("div", en, [
          C(V, P({
            ref_key: "table",
            ref: r
          }, b.$attrs, {
            data: c(o),
            onSelectionChange: i
          }), {
            default: h(() => [
              n.isUseCheckBox ? (p(), S(I, {
                key: 0,
                type: "selection"
              })) : $("v-if", !0),
              x(b.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["data"])
        ]),
        $(" 分页部分 "),
        w("div", tn, [
          C(O, {
            "page-size": c(a).pageSize,
            "onUpdate:pageSize": y[0] || (y[0] = (k) => c(a).pageSize = k),
            "current-page": c(a).currentPage,
            "onUpdate:currentPage": y[1] || (y[1] = (k) => c(a).currentPage = k),
            background: "",
            layout: "total, prev, pager, next",
            "hide-on-single-page": "",
            total: c(l)
          }, null, 8, ["page-size", "current-page", "total"])
        ])
      ])), [
        [z, c(s)]
      ]);
    };
  }
});
const Z = /* @__PURE__ */ F(on, [["__scopeId", "data-v-175e1406"]]), an = {
  install(e) {
    e.component(Z.name, Z);
  }
}, sn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmTable: Z,
  default: an
}, Symbol.toStringTag, { value: "Module" })), ie = [], ln = /* @__PURE__ */ Object.assign({ "./CmButton/index.ts": Ve, "./CmDialog/index.ts": pt, "./CmFilter/index.ts": Ft, "./CmInput/index.ts": Rt, "./CmSelect/index.ts": Gt, "./CmSvg/index.ts": Kt, "./CmTable/index.ts": sn }), rn = async () => {
  for (const e of Object.values(ln))
    ie.push(e.default);
};
rn();
const _n = {
  install(e) {
    ie.forEach((t) => {
      e.use(t);
    });
  }
};
export {
  T as CmButton,
  H as CmDialog,
  G as CmFilter,
  W as CmInput,
  A as CmSelect,
  J as CmSvg,
  Z as CmTable,
  _n as default
};
