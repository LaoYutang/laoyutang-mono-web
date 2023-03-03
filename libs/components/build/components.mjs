import { ElButton as ne, ElDialog as oe, ElInput as ae, ElInputNumber as le, ElOption as se, ElSelect as re, ElTreeSelect as ie, ElTableColumn as ue, ElTable as ce, ElPagination as de, ElLoadingDirective as _e } from "element-plus/es";
import { defineComponent as d, ref as b, openBlock as c, createBlock as k, mergeProps as w, unref as r, withCtx as h, renderSlot as I, createElementBlock as S, createStaticVNode as X, getCurrentInstance as pe, watch as T, computed as z, isRef as fe, createSlots as Y, createElementVNode as P, createVNode as B, createTextVNode as J, renderList as ee, normalizeProps as W, guardReactiveProps as me, Fragment as j, createCommentVNode as $, useCssVars as ge, reactive as A, withDirectives as ve } from "vue";
import { _debounce as be, _deepClone as he } from "utils";
const ye = d({
  name: "cm-button"
}), Ce = /* @__PURE__ */ d({
  ...ye,
  props: {
    handler: null
  },
  setup(e) {
    const n = e, t = b(!1), l = be(async (a) => {
      t.value = !0;
      try {
        await n.handler(a);
      } catch {
      }
      t.value = !1;
    });
    return (a, i) => {
      const o = ne;
      return c(), k(o, w(a.$attrs, {
        loading: r(t),
        onClick: r(l)
      }), {
        default: h(() => [
          I(a.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["loading", "onClick"]);
    };
  }
});
const G = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [l, a] of n)
    t[l] = a;
  return t;
}, E = /* @__PURE__ */ G(Ce, [["__scopeId", "data-v-68fd51f0"]]), Oe = {
  install(e) {
    e.component(E.name, E);
  }
}, $e = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmButton: E,
  default: Oe
}, Symbol.toStringTag, { value: "Module" }));
const Se = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, ke = /* @__PURE__ */ X('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M5.63604 5.63603C9.15076 2.12131 14.8492 2.12131 18.364 5.63603C21.8787 9.15075 21.8787 14.8492 18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C2.12132 14.8492 2.12132 9.15075 5.63604 5.63603Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"></animate></path><path stroke-dasharray="18" stroke-dashoffset="18" d="M6 6L18 18"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="18;0"></animate></path></g>', 1), we = [
  ke
];
function Ie(e, n) {
  return c(), S("svg", Se, we);
}
const xe = { name: "line-md-cancel", render: Ie }, Pe = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, Te = /* @__PURE__ */ X('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"></animate></path><path stroke-dasharray="14" stroke-dashoffset="14" d="M8 12L11 15L16 10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"></animate></path></g>', 1), Be = [
  Te
];
function Ve(e, n) {
  return c(), S("svg", Pe, Be);
}
const Ee = { name: "line-md-confirm-circle", render: Ve };
var H;
const N = typeof window < "u", Ne = (e) => typeof e < "u", je = (e) => typeof e == "function";
N && ((H = window == null ? void 0 : window.navigator) != null && H.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ze(e) {
  return e;
}
N && window.document;
N && window.navigator;
N && window.location;
function De(e) {
  return JSON.parse(JSON.stringify(e));
}
const D = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, M = "__vueuse_ssr_handlers__";
D[M] = D[M] || {};
D[M];
var Z;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Z || (Z = {}));
var Me = Object.defineProperty, K = Object.getOwnPropertySymbols, Ue = Object.prototype.hasOwnProperty, Qe = Object.prototype.propertyIsEnumerable, q = (e, n, t) => n in e ? Me(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Le = (e, n) => {
  for (var t in n || (n = {}))
    Ue.call(n, t) && q(e, t, n[t]);
  if (K)
    for (var t of K(n))
      Qe.call(n, t) && q(e, t, n[t]);
  return e;
};
const Fe = {
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
Le({
  linear: ze
}, Fe);
function Re(e, n, t, l = {}) {
  var a, i, o;
  const {
    clone: s = !1,
    passive: g = !1,
    eventName: _,
    deep: v = !1,
    defaultValue: u
  } = l, p = pe(), f = t || (p == null ? void 0 : p.emit) || ((a = p == null ? void 0 : p.$emit) == null ? void 0 : a.bind(p)) || ((o = (i = p == null ? void 0 : p.proxy) == null ? void 0 : i.$emit) == null ? void 0 : o.bind(p == null ? void 0 : p.proxy));
  let m = _;
  n || (n = "modelValue"), m = _ || m || `update:${n.toString()}`;
  const O = (y) => s ? je(s) ? s(y) : De(y) : y, V = () => Ne(e[n]) ? O(e[n]) : u;
  if (g) {
    const y = V(), x = b(y);
    return T(() => e[n], (C) => x.value = O(C)), T(x, (C) => {
      (C !== e[n] || v) && f(m, C);
    }, { deep: v }), x;
  } else
    return z({
      get() {
        return V();
      },
      set(y) {
        f(m, y);
      }
    });
}
const Ge = { class: "footer" }, Je = d({
  name: "CmDialog"
}), U = /* @__PURE__ */ d({
  ...Je,
  props: {
    modelValue: { type: Boolean },
    isShowButtons: { type: Boolean, default: !0 },
    beforeconfrim: { type: Function, default: () => Promise.reject() }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, l = Re(t, "modelValue", n), a = () => {
      t.beforeconfrim().then(() => {
        l.value = !1;
      }).catch((o) => o);
    }, i = () => {
      l.value = !1;
    };
    return (o, s) => {
      const g = E, _ = oe;
      return c(), k(_, w({
        modelValue: r(l),
        "onUpdate:modelValue": s[0] || (s[0] = (v) => fe(l) ? l.value = v : null)
      }, o.$attrs, {
        class: "cm-dialog",
        draggable: "",
        "close-on-click-modal": !1,
        "destroy-on-close": ""
      }), Y({
        default: h(() => [
          I(o.$slots, "default")
        ]),
        _: 2
        /* DYNAMIC */
      }, [
        e.isShowButtons ? {
          name: "footer",
          fn: h(() => [
            P("div", Ge, [
              B(g, {
                handler: i,
                icon: r(xe)
              }, {
                default: h(() => [
                  J(" 取消 ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["icon"]),
              B(g, {
                handler: a,
                type: "primary",
                icon: r(Ee)
              }, {
                default: h(() => [
                  J(" 提交 ")
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
}), We = {
  install(e) {
    e.component(U.name, U);
  }
}, Ae = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmDialog: U,
  default: We
}, Symbol.toStringTag, { value: "Module" }));
const He = d({
  name: "CmInput"
}), Q = /* @__PURE__ */ d({
  ...He,
  props: {
    type: { default: "text" }
  },
  setup(e) {
    const n = e;
    return (t, l) => {
      const a = ae, i = le;
      return n.type !== "number" ? (c(), k(a, w({ key: 0 }, t.$attrs, {
        type: n.type,
        clearable: ""
      }), Y({
        _: 2
        /* DYNAMIC */
      }, [
        ee(t.$slots, (o, s) => ({
          name: s,
          fn: h((g) => [
            I(t.$slots, s, W(me(g)))
          ])
        }))
      ]), 1040, ["type"])) : (c(), k(
        i,
        W(w({ key: 1 }, t.$attrs)),
        null,
        16
        /* FULL_PROPS */
      ));
    };
  }
}), Ze = {
  install(e) {
    e.component(Q.name, Q);
  }
}, Ke = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmInput: Q,
  default: Ze
}, Symbol.toStringTag, { value: "Module" }));
const qe = d({
  name: "CmSelect"
}), L = /* @__PURE__ */ d({
  ...qe,
  props: {
    type: { default: "normal" },
    getData: null,
    params: { default: "" },
    multiple: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, l = b([]), a = b(!1), i = (o) => {
      a.value = !0, t.getData(o).then((s) => {
        l.value = s;
      }).finally(() => {
        a.value = !1;
      });
    };
    return i(t.params), T(
      () => t.params,
      () => {
        n("update:modelValue", null), i(t.params);
      }
    ), (o, s) => {
      const g = se, _ = re, v = ie;
      return c(), S(
        j,
        null,
        [
          $(" 普通下拉框 "),
          t.type === "normal" ? (c(), k(_, w({ key: 0 }, o.$attrs, {
            multiple: t.multiple,
            "show-checkbox": !1,
            "onUpdate:modelValue": s[0] || (s[0] = (u) => o.$emit("update:modelValue", u))
          }), {
            default: h(() => [
              (c(!0), S(
                j,
                null,
                ee(r(l), (u) => (c(), k(g, {
                  key: u.value,
                  label: u.label,
                  value: u.value
                }, {
                  default: h(() => [
                    I(o.$slots, "default", { data: u })
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
          }, 16, ["multiple"])) : t.type === "tree" ? (c(), S(
            j,
            { key: 1 },
            [
              $(" 树形下拉框 "),
              B(v, w(o.$attrs, {
                data: r(l),
                multiple: t.multiple,
                "show-checkbox": t.multiple,
                "onUpdate:modelValue": s[1] || (s[1] = (u) => o.$emit("update:modelValue", u))
              }), {
                default: h(({ data: u }) => [
                  I(o.$slots, "default", { data: u })
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
}), Xe = {
  install(e) {
    e.component(L.name, L);
  }
}, Ye = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmSelect: L,
  default: Xe
}, Symbol.toStringTag, { value: "Module" })), et = {
  "aria-hidden": "true",
  class: "svg-icon"
}, tt = ["xlink:href"], nt = d({
  name: "CmSvg"
}), ot = /* @__PURE__ */ d({
  ...nt,
  props: {
    prefix: { default: "icon" },
    name: null,
    widthScale: { default: 1 }
  },
  setup(e) {
    const n = e;
    ge((a) => ({
      "88ae7cc6": r(l)
    }));
    const t = z(() => `#${n.prefix}-${n.name}`), l = z(() => n.widthScale.toString() + "em");
    return (a, i) => (c(), S("svg", et, [
      P("use", { "xlink:href": r(t) }, null, 8, tt)
    ]));
  }
});
const F = /* @__PURE__ */ G(ot, [["__scopeId", "data-v-5865a63a"]]), at = {
  install(e) {
    e.component(F.name, F);
  }
}, lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmSvg: F,
  default: at
}, Symbol.toStringTag, { value: "Module" }));
const st = { class: "cm-table" }, rt = { class: "buttons" }, it = { class: "table" }, ut = { class: "pager" }, ct = d({
  name: "CmTable"
}), dt = /* @__PURE__ */ d({
  ...ct,
  props: {
    getData: null,
    isInitData: { type: Boolean, default: !0 },
    initParams: { default: () => ({}) },
    isUsePager: { type: Boolean, default: !0 },
    isUseCheckBox: { type: Boolean, default: !0 }
  },
  setup(e, { expose: n }) {
    const t = e, l = b([]), a = b(!1), i = b({}), o = A({
      pageSize: 20,
      currentPage: 1
    }), s = b(0), g = b(null), _ = (f, m = !0) => (f && (i.value = he(f)), m && (o.currentPage = 1), t.isUsePager && (i.value.pager = o), a.value = !0, t.getData(i).then((O) => {
      l.value = O.datas, s.value = O.total;
    }).catch().finally(() => {
      a.value = !1;
    }));
    t.isInitData && _(t.initParams), T(
      () => o.currentPage,
      () => {
        _(null, !1);
      }
    ), T(
      () => o.pageSize,
      () => {
        _();
      }
    );
    const v = b([]), u = (f) => {
      v.value = f;
    }, p = A({ a: 1 });
    return n({
      update: _,
      selection: v,
      test: p
    }), (f, m) => {
      const O = ue, V = ce, y = de, x = _e;
      return ve((c(), S("div", st, [
        $(" 操作按钮组 "),
        P("div", rt, [
          I(f.$slots, "buttons", { selection: r(v) }, void 0, !0)
        ]),
        $(" 表格主体 "),
        P("div", it, [
          B(V, w({
            ref_key: "table",
            ref: g
          }, f.$attrs, {
            data: r(l),
            onSelectionChange: u
          }), {
            default: h(() => [
              t.isUseCheckBox ? (c(), k(O, {
                key: 0,
                type: "selection"
              })) : $("v-if", !0),
              I(f.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["data"])
        ]),
        $(" 分页部分 "),
        P("div", ut, [
          B(y, {
            "page-size": r(o).pageSize,
            "onUpdate:pageSize": m[0] || (m[0] = (C) => r(o).pageSize = C),
            "current-page": r(o).currentPage,
            "onUpdate:currentPage": m[1] || (m[1] = (C) => r(o).currentPage = C),
            background: "",
            layout: "total, prev, pager, next",
            "hide-on-single-page": "",
            total: r(s)
          }, null, 8, ["page-size", "current-page", "total"])
        ])
      ])), [
        [x, r(a)]
      ]);
    };
  }
});
const R = /* @__PURE__ */ G(dt, [["__scopeId", "data-v-175e1406"]]), _t = {
  install(e) {
    e.component(R.name, R);
  }
}, pt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmTable: R,
  default: _t
}, Symbol.toStringTag, { value: "Module" })), te = [], ft = /* @__PURE__ */ Object.assign({ "./CmButton/index.ts": $e, "./CmDialog/index.ts": Ae, "./CmInput/index.ts": Ke, "./CmSelect/index.ts": Ye, "./CmSvg/index.ts": lt, "./CmTable/index.ts": pt }), mt = async () => {
  for (const e of Object.values(ft))
    te.push(e.default);
};
mt();
const ht = {
  install(e) {
    te.forEach((n) => {
      e.use(n);
    });
  }
};
export {
  E as CmButton,
  U as CmDialog,
  Q as CmInput,
  L as CmSelect,
  F as CmSvg,
  R as CmTable,
  ht as default
};
