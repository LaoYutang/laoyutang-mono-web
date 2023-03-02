import { ElButton as te, ElDialog as ne, ElInput as oe, ElInputNumber as le, ElOption as ae, ElSelect as se, ElTreeSelect as ue, ElTableColumn as re, ElTable as ce, ElPagination as ie, ElLoadingDirective as de } from "element-plus/es";
import { defineComponent as d, ref as b, openBlock as i, createBlock as $, mergeProps as I, unref as r, withCtx as y, renderSlot as P, getCurrentInstance as _e, watch as E, computed as D, isRef as pe, createSlots as Y, createElementVNode as x, createVNode as V, createTextVNode as J, renderList as Z, normalizeProps as W, guardReactiveProps as me, createElementBlock as T, Fragment as N, createCommentVNode as S, useCssVars as fe, reactive as A, withDirectives as ge } from "vue";
import { _debounce as ve, _deepClone as be } from "utils";
const ye = d({
  name: "cm-button"
}), Oe = /* @__PURE__ */ d({
  ...ye,
  props: {
    handler: null
  },
  setup(e) {
    const n = e, t = b(!1), a = ve(async (l) => {
      t.value = !0;
      try {
        await n.handler(l);
      } catch {
      }
      t.value = !1;
    });
    return (l, u) => {
      const o = te;
      return i(), $(o, I(l.$attrs, {
        loading: r(t),
        onClick: r(a)
      }), {
        default: y(() => [
          P(l.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["loading", "onClick"]);
    };
  }
});
const G = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [a, l] of n)
    t[a] = l;
  return t;
}, k = /* @__PURE__ */ G(Oe, [["__scopeId", "data-v-68fd51f0"]]), he = {
  install(e) {
    e.component(k.name, k);
  }
}, Ce = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmButton: k,
  default: he
}, Symbol.toStringTag, { value: "Module" }));
var H;
const j = typeof window < "u", Se = (e) => typeof e < "u", $e = (e) => typeof e == "function";
j && ((H = window == null ? void 0 : window.navigator) != null && H.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ie(e) {
  return e;
}
j && window.document;
j && window.navigator;
j && window.location;
function Pe(e) {
  return JSON.parse(JSON.stringify(e));
}
const z = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, U = "__vueuse_ssr_handlers__";
z[U] = z[U] || {};
z[U];
var K;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(K || (K = {}));
var we = Object.defineProperty, q = Object.getOwnPropertySymbols, xe = Object.prototype.hasOwnProperty, Te = Object.prototype.propertyIsEnumerable, X = (e, n, t) => n in e ? we(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Ee = (e, n) => {
  for (var t in n || (n = {}))
    xe.call(n, t) && X(e, t, n[t]);
  if (q)
    for (var t of q(n))
      Te.call(n, t) && X(e, t, n[t]);
  return e;
};
const Ve = {
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
Ee({
  linear: Ie
}, Ve);
function Be(e, n, t, a = {}) {
  var l, u, o;
  const {
    clone: s = !1,
    passive: g = !1,
    eventName: _,
    deep: v = !1,
    defaultValue: c
  } = a, p = _e(), m = t || (p == null ? void 0 : p.emit) || ((l = p == null ? void 0 : p.$emit) == null ? void 0 : l.bind(p)) || ((o = (u = p == null ? void 0 : p.proxy) == null ? void 0 : u.$emit) == null ? void 0 : o.bind(p == null ? void 0 : p.proxy));
  let f = _;
  n || (n = "modelValue"), f = _ || f || `update:${n.toString()}`;
  const C = (O) => s ? $e(s) ? s(O) : Pe(O) : O, B = () => Se(e[n]) ? C(e[n]) : c;
  if (g) {
    const O = B(), w = b(O);
    return E(() => e[n], (h) => w.value = C(h)), E(w, (h) => {
      (h !== e[n] || v) && m(f, h);
    }, { deep: v }), w;
  } else
    return D({
      get() {
        return B();
      },
      set(O) {
        m(f, O);
      }
    });
}
const ke = { class: "footer" }, je = d({
  name: "CmDialog"
}), Q = /* @__PURE__ */ d({
  ...je,
  props: {
    modelValue: { type: Boolean },
    isShowButtons: { type: Boolean, default: !0 },
    beforeconfrim: { type: Function, default: () => Promise.reject() }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, a = Be(t, "modelValue", n), l = () => {
      t.beforeconfrim().then(() => {
        a.value = !1;
      }).catch((o) => o);
    }, u = () => {
      a.value = !1;
    };
    return (o, s) => {
      const g = k, _ = ne;
      return i(), $(_, I({
        modelValue: r(a),
        "onUpdate:modelValue": s[0] || (s[0] = (v) => pe(a) ? a.value = v : null)
      }, o.$attrs, {
        class: "cm-dialog",
        draggable: "",
        "close-on-click-modal": !1,
        "destroy-on-close": ""
      }), Y({
        default: y(() => [
          P(o.$slots, "default")
        ]),
        _: 2
        /* DYNAMIC */
      }, [
        e.isShowButtons ? {
          name: "footer",
          fn: y(() => [
            x("div", ke, [
              V(g, { handler: u }, {
                default: y(() => [
                  J("取消")
                ]),
                _: 1
                /* STABLE */
              }),
              V(g, {
                handler: l,
                type: "primary"
              }, {
                default: y(() => [
                  J("提交")
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
}), Ne = {
  install(e) {
    e.component(Q.name, Q);
  }
}, De = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmDialog: Q,
  default: Ne
}, Symbol.toStringTag, { value: "Module" }));
const ze = d({
  name: "CmInput"
}), F = /* @__PURE__ */ d({
  ...ze,
  props: {
    type: { default: "text" }
  },
  setup(e) {
    const n = e;
    return (t, a) => {
      const l = oe, u = le;
      return n.type !== "number" ? (i(), $(l, I({ key: 0 }, t.$attrs, {
        type: n.type,
        clearable: ""
      }), Y({
        _: 2
        /* DYNAMIC */
      }, [
        Z(t.$slots, (o, s) => ({
          name: s,
          fn: y((g) => [
            P(t.$slots, s, W(me(g)))
          ])
        }))
      ]), 1040, ["type"])) : (i(), $(
        u,
        W(I({ key: 1 }, t.$attrs)),
        null,
        16
        /* FULL_PROPS */
      ));
    };
  }
}), Ue = {
  install(e) {
    e.component(F.name, F);
  }
}, Qe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmInput: F,
  default: Ue
}, Symbol.toStringTag, { value: "Module" }));
const Fe = d({
  name: "CmSelect"
}), M = /* @__PURE__ */ d({
  ...Fe,
  props: {
    type: { default: "normal" },
    getData: null,
    params: { default: "" },
    multiple: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, a = b([]), l = b(!1), u = (o) => {
      l.value = !0, t.getData(o).then((s) => {
        a.value = s;
      }).finally(() => {
        l.value = !1;
      });
    };
    return u(t.params), E(
      () => t.params,
      () => {
        n("update:modelValue", null), u(t.params);
      }
    ), (o, s) => {
      const g = ae, _ = se, v = ue;
      return i(), T(
        N,
        null,
        [
          S(" 普通下拉框 "),
          t.type === "normal" ? (i(), $(_, I({ key: 0 }, o.$attrs, {
            multiple: t.multiple,
            "show-checkbox": !1,
            "onUpdate:modelValue": s[0] || (s[0] = (c) => o.$emit("update:modelValue", c))
          }), {
            default: y(() => [
              (i(!0), T(
                N,
                null,
                Z(r(a), (c) => (i(), $(g, {
                  key: c.value,
                  label: c.label,
                  value: c.value
                }, {
                  default: y(() => [
                    P(o.$slots, "default", { data: c })
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
          }, 16, ["multiple"])) : t.type === "tree" ? (i(), T(
            N,
            { key: 1 },
            [
              S(" 树形下拉框 "),
              V(v, I(o.$attrs, {
                data: r(a),
                multiple: t.multiple,
                "show-checkbox": t.multiple,
                "onUpdate:modelValue": s[1] || (s[1] = (c) => o.$emit("update:modelValue", c))
              }), {
                default: y(({ data: c }) => [
                  P(o.$slots, "default", { data: c })
                ]),
                _: 3
                /* FORWARDED */
              }, 16, ["data", "multiple", "show-checkbox"])
            ],
            2112
            /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
          )) : S("v-if", !0)
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      );
    };
  }
}), Me = {
  install(e) {
    e.component(M.name, M);
  }
}, Le = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmSelect: M,
  default: Me
}, Symbol.toStringTag, { value: "Module" })), Re = {
  "aria-hidden": "true",
  class: "svg-icon"
}, Ge = ["xlink:href"], Je = d({
  name: "CmSvg"
}), We = /* @__PURE__ */ d({
  ...Je,
  props: {
    prefix: { default: "icon" },
    name: null,
    widthScale: { default: 1 }
  },
  setup(e) {
    const n = e;
    fe((l) => ({
      "88ae7cc6": r(a)
    }));
    const t = D(() => `#${n.prefix}-${n.name}`), a = D(() => n.widthScale.toString() + "em");
    return (l, u) => (i(), T("svg", Re, [
      x("use", { "xlink:href": r(t) }, null, 8, Ge)
    ]));
  }
});
const L = /* @__PURE__ */ G(We, [["__scopeId", "data-v-5865a63a"]]), Ae = {
  install(e) {
    e.component(L.name, L);
  }
}, He = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmSvg: L,
  default: Ae
}, Symbol.toStringTag, { value: "Module" }));
const Ke = { class: "cm-table" }, qe = { class: "buttons" }, Xe = { class: "table" }, Ye = { class: "pager" }, Ze = d({
  name: "CmTable"
}), et = /* @__PURE__ */ d({
  ...Ze,
  props: {
    getData: null,
    isInitData: { type: Boolean, default: !0 },
    initParams: { default: () => ({}) },
    isUsePager: { type: Boolean, default: !0 },
    isUseCheckBox: { type: Boolean, default: !0 }
  },
  setup(e, { expose: n }) {
    const t = e, a = b([]), l = b(!1), u = b({}), o = A({
      pageSize: 20,
      currentPage: 1
    }), s = b(0), g = b(null), _ = (m, f = !0) => (m && (u.value = be(m)), f && (o.currentPage = 1), t.isUsePager && (u.value.pager = o), l.value = !0, t.getData(u).then((C) => {
      a.value = C.datas, s.value = C.total;
    }).catch().finally(() => {
      l.value = !1;
    }));
    t.isInitData && _(t.initParams), E(
      () => o.currentPage,
      () => {
        _(null, !1);
      }
    ), E(
      () => o.pageSize,
      () => {
        _();
      }
    );
    const v = b([]), c = (m) => {
      v.value = m;
    }, p = A({ a: 1 });
    return n({
      update: _,
      selection: v,
      test: p
    }), (m, f) => {
      const C = re, B = ce, O = ie, w = de;
      return ge((i(), T("div", Ke, [
        S(" 操作按钮组 "),
        x("div", qe, [
          P(m.$slots, "buttons", { selection: r(v) }, void 0, !0)
        ]),
        S(" 表格主体 "),
        x("div", Xe, [
          V(B, I({
            ref_key: "table",
            ref: g
          }, m.$attrs, {
            data: r(a),
            onSelectionChange: c
          }), {
            default: y(() => [
              t.isUseCheckBox ? (i(), $(C, {
                key: 0,
                type: "selection"
              })) : S("v-if", !0),
              P(m.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["data"])
        ]),
        S(" 分页部分 "),
        x("div", Ye, [
          V(O, {
            "page-size": r(o).pageSize,
            "onUpdate:pageSize": f[0] || (f[0] = (h) => r(o).pageSize = h),
            "current-page": r(o).currentPage,
            "onUpdate:currentPage": f[1] || (f[1] = (h) => r(o).currentPage = h),
            background: "",
            layout: "total, prev, pager, next",
            "hide-on-single-page": "",
            total: r(s)
          }, null, 8, ["page-size", "current-page", "total"])
        ])
      ])), [
        [w, r(l)]
      ]);
    };
  }
});
const R = /* @__PURE__ */ G(et, [["__scopeId", "data-v-175e1406"]]), tt = {
  install(e) {
    e.component(R.name, R);
  }
}, nt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmTable: R,
  default: tt
}, Symbol.toStringTag, { value: "Module" })), ee = [], ot = /* @__PURE__ */ Object.assign({ "./CmButton/index.ts": Ce, "./CmDialog/index.ts": De, "./CmInput/index.ts": Qe, "./CmSelect/index.ts": Le, "./CmSvg/index.ts": He, "./CmTable/index.ts": nt }), lt = async () => {
  for (const e of Object.values(ot))
    ee.push(e.default);
};
lt();
const rt = {
  install(e) {
    ee.forEach((n) => {
      e.use(n);
    });
  }
};
export {
  k as CmButton,
  Q as CmDialog,
  F as CmInput,
  M as CmSelect,
  L as CmSvg,
  R as CmTable,
  rt as default
};
