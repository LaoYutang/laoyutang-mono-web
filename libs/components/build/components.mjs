import { ElButton as q, ElInput as A, ElInputNumber as H, ElOption as J, ElSelect as K, ElTreeSelect as Q, ElTableColumn as X, ElTable as Y, ElPagination as Z, ElLoadingDirective as ee } from "element-plus/es";
import { defineComponent as i, ref as p, openBlock as _, createBlock as b, mergeProps as y, unref as a, withCtx as v, renderSlot as S, createSlots as te, renderList as N, normalizeProps as D, guardReactiveProps as ne, watch as O, createElementBlock as C, Fragment as T, createCommentVNode as m, createVNode as I, useCssVars as oe, computed as U, createElementVNode as x, reactive as M, withDirectives as le } from "vue";
import { _debounce as ae, _deepClone as se } from "utils";
const ce = i({
  name: "cm-button"
}), re = /* @__PURE__ */ i({
  ...ce,
  props: {
    handler: null
  },
  setup(t) {
    const l = t, e = p(!1), s = ae(async (o) => {
      e.value = !0;
      try {
        await l.handler(o);
      } catch {
      }
      e.value = !1;
    });
    return (o, u) => {
      const n = q;
      return _(), b(n, y(o.$attrs, {
        loading: a(e),
        onClick: a(s)
      }), {
        default: v(() => [
          S(o.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["loading", "onClick"]);
    };
  }
});
const w = (t, l) => {
  const e = t.__vccOpts || t;
  for (const [s, o] of l)
    e[s] = o;
  return e;
}, z = /* @__PURE__ */ w(re, [["__scopeId", "data-v-68fd51f0"]]), ue = {
  install(t) {
    t.component(z.name, z);
  }
}, _e = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmButton: z,
  default: ue
}, Symbol.toStringTag, { value: "Module" }));
const ie = i({
  name: "CmInput"
}), B = /* @__PURE__ */ i({
  ...ie,
  props: {
    type: { default: "text" }
  },
  setup(t) {
    const l = t;
    return (e, s) => {
      const o = A, u = H;
      return l.type !== "number" ? (_(), b(o, y({ key: 0 }, e.$attrs, {
        type: l.type,
        clearable: ""
      }), te({
        _: 2
        /* DYNAMIC */
      }, [
        N(e.$slots, (n, c) => ({
          name: c,
          fn: v((h) => [
            S(e.$slots, c, D(ne(h)))
          ])
        }))
      ]), 1040, ["type"])) : (_(), b(
        u,
        D(y({ key: 1 }, e.$attrs)),
        null,
        16
        /* FULL_PROPS */
      ));
    };
  }
}), pe = {
  install(t) {
    t.component(B.name, B);
  }
}, de = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmInput: B,
  default: pe
}, Symbol.toStringTag, { value: "Module" }));
const me = i({
  name: "CmSelect"
}), E = /* @__PURE__ */ i({
  ...me,
  props: {
    type: { default: "normal" },
    getData: null,
    params: { default: "" },
    multiple: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: l }) {
    const e = t, s = p([]), o = p(!1), u = (n) => {
      o.value = !0, e.getData(n).then((c) => {
        s.value = c;
      }).finally(() => {
        o.value = !1;
      });
    };
    return u(e.params), O(
      () => e.params,
      () => {
        l("update:modelValue", null), u(e.params);
      }
    ), (n, c) => {
      const h = J, f = K, $ = Q;
      return _(), C(
        T,
        null,
        [
          m(" 普通下拉框 "),
          e.type === "normal" ? (_(), b(f, y({ key: 0 }, n.$attrs, {
            multiple: e.multiple,
            "show-checkbox": !1,
            "onUpdate:modelValue": c[0] || (c[0] = (r) => n.$emit("update:modelValue", r))
          }), {
            default: v(() => [
              (_(!0), C(
                T,
                null,
                N(a(s), (r) => (_(), b(h, {
                  key: r.value,
                  label: r.label,
                  value: r.value
                }, {
                  default: v(() => [
                    S(n.$slots, "default", { data: r })
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
          }, 16, ["multiple"])) : e.type === "tree" ? (_(), C(
            T,
            { key: 1 },
            [
              m(" 树形下拉框 "),
              I($, y(n.$attrs, {
                data: a(s),
                multiple: e.multiple,
                "show-checkbox": e.multiple,
                "onUpdate:modelValue": c[1] || (c[1] = (r) => n.$emit("update:modelValue", r))
              }), {
                default: v(({ data: r }) => [
                  S(n.$slots, "default", { data: r })
                ]),
                _: 3
                /* FORWARDED */
              }, 16, ["data", "multiple", "show-checkbox"])
            ],
            2112
            /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
          )) : m("v-if", !0)
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      );
    };
  }
}), fe = {
  install(t) {
    t.component(E.name, E);
  }
}, ge = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmSelect: E,
  default: fe
}, Symbol.toStringTag, { value: "Module" })), ve = {
  "aria-hidden": "true",
  class: "svg-icon"
}, be = ["xlink:href"], ye = i({
  name: "CmSvg"
}), Se = /* @__PURE__ */ i({
  ...ye,
  props: {
    prefix: { default: "icon" },
    name: null,
    widthScale: { default: 1 }
  },
  setup(t) {
    const l = t;
    oe((o) => ({
      "88ae7cc6": a(s)
    }));
    const e = U(() => `#${l.prefix}-${l.name}`), s = U(() => l.widthScale.toString() + "em");
    return (o, u) => (_(), C("svg", ve, [
      x("use", { "xlink:href": a(e) }, null, 8, be)
    ]));
  }
});
const j = /* @__PURE__ */ w(Se, [["__scopeId", "data-v-5865a63a"]]), he = {
  install(t) {
    t.component(j.name, j);
  }
}, $e = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmSvg: j,
  default: he
}, Symbol.toStringTag, { value: "Module" }));
const Ce = { class: "cm-table" }, ke = { class: "buttons" }, xe = { class: "table" }, Pe = { class: "pager" }, Te = i({
  name: "CmTable"
}), Oe = /* @__PURE__ */ i({
  ...Te,
  props: {
    getData: null,
    isInitData: { type: Boolean, default: !0 },
    initParams: { default: () => ({}) },
    isUsePager: { type: Boolean, default: !0 },
    isUseCheckBox: { type: Boolean, default: !0 }
  },
  setup(t, { expose: l }) {
    const e = t, s = p([]), o = p(!1), u = p({}), n = M({
      pageSize: 20,
      currentPage: 1
    }), c = p(0), h = p(null), f = (d, g = !0) => (d && (u.value = se(d)), g && (n.currentPage = 1), e.isUsePager && (u.value.pager = n), o.value = !0, e.getData(u).then((k) => {
      s.value = k.datas, c.value = k.total;
    }).catch().finally(() => {
      o.value = !1;
    }));
    e.isInitData && f(e.initParams), O(
      () => n.currentPage,
      () => {
        f(null, !1);
      }
    ), O(
      () => n.pageSize,
      () => {
        f();
      }
    );
    const $ = p([]), r = (d) => {
      $.value = d;
    }, F = M({ a: 1 });
    return l({
      update: f,
      selection: $,
      test: F
    }), (d, g) => {
      const k = X, G = Y, R = Z, W = ee;
      return le((_(), C("div", Ce, [
        m(" 操作按钮组 "),
        x("div", ke, [
          S(d.$slots, "buttons", { selection: a($) }, void 0, !0)
        ]),
        m(" 表格主体 "),
        x("div", xe, [
          I(G, y({
            ref_key: "table",
            ref: h
          }, d.$attrs, {
            data: a(s),
            onSelectionChange: r
          }), {
            default: v(() => [
              e.isUseCheckBox ? (_(), b(k, {
                key: 0,
                type: "selection"
              })) : m("v-if", !0),
              S(d.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["data"])
        ]),
        m(" 分页部分 "),
        x("div", Pe, [
          I(R, {
            "page-size": a(n).pageSize,
            "onUpdate:pageSize": g[0] || (g[0] = (P) => a(n).pageSize = P),
            "current-page": a(n).currentPage,
            "onUpdate:currentPage": g[1] || (g[1] = (P) => a(n).currentPage = P),
            background: "",
            layout: "total, prev, pager, next",
            "hide-on-single-page": "",
            total: a(c)
          }, null, 8, ["page-size", "current-page", "total"])
        ])
      ])), [
        [W, a(o)]
      ]);
    };
  }
});
const V = /* @__PURE__ */ w(Oe, [["__scopeId", "data-v-175e1406"]]), Ie = {
  install(t) {
    t.component(V.name, V);
  }
}, ze = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmTable: V,
  default: Ie
}, Symbol.toStringTag, { value: "Module" })), L = [], Be = /* @__PURE__ */ Object.assign({ "./CmButton/index.ts": _e, "./CmInput/index.ts": de, "./CmSelect/index.ts": ge, "./CmSvg/index.ts": $e, "./CmTable/index.ts": ze }), Ee = async () => {
  for (const t of Object.values(Be))
    L.push(t.default);
};
Ee();
const De = {
  install(t) {
    L.forEach((l) => {
      t.use(l);
    });
  }
};
export {
  z as CmButton,
  B as CmInput,
  E as CmSelect,
  j as CmSvg,
  V as CmTable,
  De as default
};
