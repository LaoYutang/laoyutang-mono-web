import { ElButton as ce, ElDialog as ue, ElButtonGroup as de, ElInput as _e, ElInputNumber as pe, ElOption as fe, ElSelect as me, ElTreeSelect as he, ElTableColumn as ve, ElTable as ge, ElPagination as be, ElLoadingDirective as ye } from "element-plus/es";
import { defineComponent as v, ref as m, openBlock as p, createBlock as S, mergeProps as P, unref as c, withCtx as h, renderSlot as x, createElementBlock as g, createStaticVNode as D, getCurrentScope as Ce, onScopeDispose as $e, getCurrentInstance as ae, onMounted as we, nextTick as Oe, computed as j, watch as B, isRef as ke, createSlots as se, createElementVNode as w, createVNode as C, createTextVNode as M, createCommentVNode as $, normalizeStyle as Se, withDirectives as U, vShow as q, renderList as le, normalizeProps as K, guardReactiveProps as xe, Fragment as L, useCssVars as Ie, reactive as X } from "vue";
import { _debounce as Pe, _deepClone as Be } from "utils";
const ze = v({
  name: "cm-button"
}), Te = /* @__PURE__ */ v({
  ...ze,
  props: {
    handler: null
  },
  setup(e) {
    const n = e, t = m(!1), o = Pe(async (s) => {
      t.value = !0;
      try {
        await n.handler(s);
      } catch {
      }
      t.value = !1;
    });
    return (s, u) => {
      const a = ce;
      return p(), S(a, P(s.$attrs, {
        loading: c(t),
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
const F = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, s] of n)
    t[o] = s;
  return t;
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
function De(e, n) {
  return p(), g("svg", Ne, Me);
}
const Fe = { name: "line-md-cancel", render: De }, Le = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, Ue = /* @__PURE__ */ D('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"></animate></path><path stroke-dasharray="14" stroke-dashoffset="14" d="M8 12L11 15L16 10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"></animate></path></g>', 1), Re = [
  Ue
];
function Qe(e, n) {
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
function qe(e, n = !0) {
  ae() ? we(e) : n ? e() : Oe(e);
}
function N(e) {
  var n;
  const t = Ae(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}
const re = E ? window : void 0;
E && window.document;
E && window.navigator;
E && window.location;
function Ke(e, n = !1) {
  const t = m(), o = () => t.value = Boolean(e());
  return o(), qe(o, n), t;
}
function Xe(e) {
  return JSON.parse(JSON.stringify(e));
}
const R = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Q = "__vueuse_ssr_handlers__";
R[Q] = R[Q] || {};
R[Q];
var ee = Object.getOwnPropertySymbols, Ye = Object.prototype.hasOwnProperty, et = Object.prototype.propertyIsEnumerable, tt = (e, n) => {
  var t = {};
  for (var o in e)
    Ye.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && ee)
    for (var o of ee(e))
      n.indexOf(o) < 0 && et.call(e, o) && (t[o] = e[o]);
  return t;
};
function nt(e, n, t = {}) {
  const o = t, { window: s = re } = o, u = tt(o, ["window"]);
  let a;
  const l = Ke(() => s && "ResizeObserver" in s), i = () => {
    a && (a.disconnect(), a = void 0);
  }, d = B(() => N(e), (r) => {
    i(), l.value && s && r && (a = new ResizeObserver(n), a.observe(r, u));
  }, { immediate: !0, flush: "post" }), _ = () => {
    i(), d();
  };
  return Ze(_), {
    isSupported: l,
    stop: _
  };
}
function ot(e, n = { width: 0, height: 0 }, t = {}) {
  const { window: o = re, box: s = "content-box" } = t, u = j(() => {
    var i, d;
    return (d = (i = N(e)) == null ? void 0 : i.namespaceURI) == null ? void 0 : d.includes("svg");
  }), a = m(n.width), l = m(n.height);
  return nt(e, ([i]) => {
    const d = s === "border-box" ? i.borderBoxSize : s === "content-box" ? i.contentBoxSize : i.devicePixelContentBoxSize;
    if (o && u.value) {
      const _ = N(e);
      if (_) {
        const r = o.getComputedStyle(_);
        a.value = parseFloat(r.width), l.value = parseFloat(r.height);
      }
    } else if (d) {
      const _ = Array.isArray(d) ? d : [d];
      a.value = _.reduce((r, { inlineSize: f }) => r + f, 0), l.value = _.reduce((r, { blockSize: f }) => r + f, 0);
    } else
      a.value = i.contentRect.width, l.value = i.contentRect.height;
  }, t), B(() => N(e), (i) => {
    a.value = i ? n.width : 0, l.value = i ? n.height : 0;
  }), {
    width: a,
    height: l
  };
}
var te;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(te || (te = {}));
var at = Object.defineProperty, ne = Object.getOwnPropertySymbols, st = Object.prototype.hasOwnProperty, lt = Object.prototype.propertyIsEnumerable, oe = (e, n, t) => n in e ? at(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, rt = (e, n) => {
  for (var t in n || (n = {}))
    st.call(n, t) && oe(e, t, n[t]);
  if (ne)
    for (var t of ne(n))
      lt.call(n, t) && oe(e, t, n[t]);
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
function ct(e, n, t, o = {}) {
  var s, u, a;
  const {
    clone: l = !1,
    passive: i = !1,
    eventName: d,
    deep: _ = !1,
    defaultValue: r
  } = o, f = ae(), b = t || (f == null ? void 0 : f.emit) || ((s = f == null ? void 0 : f.$emit) == null ? void 0 : s.bind(f)) || ((a = (u = f == null ? void 0 : f.proxy) == null ? void 0 : u.$emit) == null ? void 0 : a.bind(f == null ? void 0 : f.proxy));
  let y = d;
  n || (n = "modelValue"), y = d || y || `update:${n.toString()}`;
  const I = (O) => l ? We(l) ? l(O) : Xe(O) : O, V = () => Ge(e[n]) ? I(e[n]) : r;
  if (i) {
    const O = V(), z = m(O);
    return B(() => e[n], (k) => z.value = I(k)), B(z, (k) => {
      (k !== e[n] || _) && b(y, k);
    }, { deep: _ }), z;
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
  setup(e, { emit: n }) {
    const t = e, o = ct(t, "modelValue", n), s = () => {
      t.beforeconfrim().then(() => {
        o.value = !1;
      }).catch((a) => a);
    }, u = () => {
      o.value = !1;
    };
    return (a, l) => {
      const i = T, d = ue;
      return p(), S(d, P({
        modelValue: c(o),
        "onUpdate:modelValue": l[0] || (l[0] = (_) => ke(o) ? o.value = _ : null)
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
              C(i, {
                handler: u,
                icon: c(Fe)
              }, {
                default: h(() => [
                  M(" 取消 ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["icon"]),
              C(i, {
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
function vt(e, n) {
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
function $t(e, n) {
  return p(), g("svg", bt, Ct);
}
const wt = { name: "ic-round-keyboard-arrow-down", render: $t }, Ot = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, kt = /* @__PURE__ */ D('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="16" stroke-dashoffset="16" d="M10.5 13.5L3 21"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="16;0"></animate></path><path stroke-dasharray="40" stroke-dashoffset="40" d="M10.7574 13.2426C8.41421 10.8995 8.41421 7.10051 10.7574 4.75736C13.1005 2.41421 16.8995 2.41421 19.2426 4.75736C21.5858 7.10051 21.5858 10.8995 19.2426 13.2426C16.8995 15.5858 13.1005 15.5858 10.7574 13.2426Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="40;0"></animate></path></g>', 1), St = [
  kt
];
function xt(e, n) {
  return p(), g("svg", Ot, St);
}
const It = { name: "line-md-search", render: xt }, Pt = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, Bt = /* @__PURE__ */ D('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="32" stroke-dashoffset="32" d="M12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12V9.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="32;0"></animate></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M6 9L3 12M6 9L9 12"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0"></animate></path></g>', 1), zt = [
  Bt
];
function Tt(e, n) {
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
    const n = e, t = m(!0), o = m("50px"), s = m(null), { height: u } = ot(s), a = () => {
      t.value = !t.value, o.value = t.value ? "50px" : u.value.toString() + "px";
    };
    return (l, i) => {
      const d = wt, _ = gt, r = T, f = de;
      return p(), g("div", Vt, [
        $(" 左侧表单 "),
        w(
          "div",
          {
            class: "form",
            style: Se(`height: ${c(o)}`)
          },
          [
            w(
              "div",
              {
                ref_key: "slot",
                ref: s
              },
              [
                x(l.$slots, "default", {}, void 0, !0)
              ],
              512
              /* NEED_PATCH */
            ),
            c(u) > 50 ? (p(), S(r, {
              key: 0,
              class: "form-fold_icon",
              handler: a,
              circle: "",
              text: "",
              bg: ""
            }, {
              default: h(() => [
                U(C(
                  d,
                  null,
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [q, c(t)]
                ]),
                U(C(
                  _,
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
          C(f, null, {
            default: h(() => [
              C(r, {
                type: "primary",
                icon: c(It),
                handler: n.queryHandler
              }, {
                default: h(() => [
                  M(" 查询 ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["icon", "handler"]),
              C(r, {
                icon: c(Et),
                handler: n.resetHandler
              }, {
                default: h(() => [
                  M(" 重置 ")
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
const G = /* @__PURE__ */ F(Mt, [["__scopeId", "data-v-0d8d7aba"]]), Dt = {
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
    const n = e;
    return (t, o) => {
      const s = _e, u = pe;
      return n.type !== "number" ? (p(), S(s, P({ key: 0 }, t.$attrs, {
        type: n.type,
        clearable: ""
      }), se({
        _: 2
        /* DYNAMIC */
      }, [
        le(t.$slots, (a, l) => ({
          name: l,
          fn: h((i) => [
            x(t.$slots, l, K(xe(i)))
          ])
        }))
      ]), 1040, ["type"])) : (p(), S(
        u,
        K(P({ key: 1 }, t.$attrs)),
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
  setup(e, { emit: n }) {
    const t = e, o = m([]), s = m(!1), u = (a) => {
      s.value = !0, t.getData(a).then((l) => {
        o.value = l;
      }).finally(() => {
        s.value = !1;
      });
    };
    return u(t.params), B(
      () => t.params,
      () => {
        n("update:modelValue", null), u(t.params);
      }
    ), (a, l) => {
      const i = fe, d = me, _ = he;
      return p(), g(
        L,
        null,
        [
          $(" 普通下拉框 "),
          t.type === "normal" ? (p(), S(d, P({ key: 0 }, a.$attrs, {
            multiple: t.multiple,
            "show-checkbox": !1,
            "onUpdate:modelValue": l[0] || (l[0] = (r) => a.$emit("update:modelValue", r))
          }), {
            default: h(() => [
              (p(!0), g(
                L,
                null,
                le(c(o), (r) => (p(), S(i, {
                  key: r.value,
                  label: r.label,
                  value: r.value
                }, {
                  default: h(() => [
                    x(a.$slots, "default", { data: r })
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
          }, 16, ["multiple"])) : t.type === "tree" ? (p(), g(
            L,
            { key: 1 },
            [
              $(" 树形下拉框 "),
              C(_, P(a.$attrs, {
                data: c(o),
                multiple: t.multiple,
                "show-checkbox": t.multiple,
                "onUpdate:modelValue": l[1] || (l[1] = (r) => a.$emit("update:modelValue", r))
              }), {
                default: h(({ data: r }) => [
                  x(a.$slots, "default", { data: r })
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
    const n = e;
    Ie((s) => ({
      "88ae7cc6": c(o)
    }));
    const t = j(() => `#${n.prefix}-${n.name}`), o = j(() => n.widthScale.toString() + "em");
    return (s, u) => (p(), g("svg", Wt, [
      w("use", { "xlink:href": c(t) }, null, 8, At)
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
  setup(e, { expose: n }) {
    const t = e, o = m([]), s = m(!1), u = m({}), a = X({
      pageSize: 20,
      currentPage: 1
    }), l = m(0), i = m(null), d = (b, y = !0) => (b && (u.value = Be(b)), y && (a.currentPage = 1), t.isUsePager && (u.value.pager = a), s.value = !0, t.getData(u).then((I) => {
      o.value = I.datas, l.value = I.total;
    }).catch().finally(() => {
      s.value = !1;
    }));
    t.isInitData && d(t.initParams), B(
      () => a.currentPage,
      () => {
        d(null, !1);
      }
    ), B(
      () => a.pageSize,
      () => {
        d();
      }
    );
    const _ = m([]), r = (b) => {
      _.value = b;
    }, f = X({ a: 1 });
    return n({
      update: d,
      selection: _,
      test: f
    }), (b, y) => {
      const I = ve, V = ge, O = be, z = ye;
      return U((p(), g("div", Xt, [
        $(" 操作按钮组 "),
        w("div", Yt, [
          x(b.$slots, "buttons", { selection: c(_) }, void 0, !0)
        ]),
        $(" 表格主体 "),
        w("div", en, [
          C(V, P({
            ref_key: "table",
            ref: i
          }, b.$attrs, {
            data: c(o),
            onSelectionChange: r
          }), {
            default: h(() => [
              t.isUseCheckBox ? (p(), S(I, {
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
    ie.forEach((n) => {
      e.use(n);
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
