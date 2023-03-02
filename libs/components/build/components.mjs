import { ElButton as G, ElInput as W, ElInputNumber as q, ElTableColumn as A, ElTable as F, ElPagination as H, ElLoadingDirective as J } from "element-plus/es";
import { defineComponent as _, ref as i, openBlock as p, createBlock as b, mergeProps as v, unref as a, withCtx as j, renderSlot as C, normalizeProps as K, useCssVars as Q, computed as T, createElementBlock as E, createElementVNode as g, reactive as O, watch as z, withDirectives as R, createCommentVNode as f, createVNode as B } from "vue";
import { _debounce as X, _deepClone as Y } from "utils";
const Z = _({
  name: "cm-button"
}), ee = /* @__PURE__ */ _({
  ...Z,
  props: {
    handler: null
  },
  setup(e) {
    const n = e, t = i(!1), s = X(async (o) => {
      t.value = !0;
      try {
        await n.handler(o);
      } catch {
      }
      t.value = !1;
    });
    return (o, c) => {
      const l = G;
      return p(), b(l, v(o.$attrs, {
        loading: a(t),
        onClick: a(s)
      }), {
        default: j(() => [
          C(o.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["loading", "onClick"]);
    };
  }
});
const k = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [s, o] of n)
    t[s] = o;
  return t;
}, x = /* @__PURE__ */ k(ee, [["__scopeId", "data-v-68fd51f0"]]), te = {
  install(e) {
    e.component(x.name, x);
  }
}, ne = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmButton: x,
  default: te
}, Symbol.toStringTag, { value: "Module" }));
const oe = _({
  name: "CmInput"
}), S = /* @__PURE__ */ _({
  ...oe,
  props: {
    type: { default: "text" }
  },
  setup(e) {
    const n = e;
    return (t, s) => {
      const o = W, c = q;
      return n.type !== "number" ? (p(), b(o, v({ key: 0 }, t.$attrs, {
        type: n.type,
        clearable: ""
      }), null, 16, ["type"])) : (p(), b(
        c,
        K(v({ key: 1 }, t.$attrs)),
        null,
        16
        /* FULL_PROPS */
      ));
    };
  }
}), ae = {
  install(e) {
    e.component(S.name, S);
  }
}, le = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmInput: S,
  default: ae
}, Symbol.toStringTag, { value: "Module" })), se = {
  "aria-hidden": "true",
  class: "svg-icon"
}, ce = ["xlink:href"], re = _({
  name: "CmSvg"
}), _e = /* @__PURE__ */ _({
  ...re,
  props: {
    prefix: { default: "icon" },
    name: null,
    widthScale: { default: 1 }
  },
  setup(e) {
    const n = e;
    Q((o) => ({
      "88ae7cc6": a(s)
    }));
    const t = T(() => `#${n.prefix}-${n.name}`), s = T(() => n.widthScale.toString() + "em");
    return (o, c) => (p(), E("svg", se, [
      g("use", { "xlink:href": a(t) }, null, 8, ce)
    ]));
  }
});
const $ = /* @__PURE__ */ k(_e, [["__scopeId", "data-v-5865a63a"]]), ie = {
  install(e) {
    e.component($.name, $);
  }
}, ue = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmSvg: $,
  default: ie
}, Symbol.toStringTag, { value: "Module" }));
const pe = { class: "cm-table" }, de = { class: "buttons" }, me = { class: "table" }, fe = { class: "pager" }, ge = _({
  name: "CmTable"
}), be = /* @__PURE__ */ _({
  ...ge,
  props: {
    getData: null,
    isInitData: { type: Boolean, default: !0 },
    initParams: { default: () => ({}) },
    isUsePager: { type: Boolean, default: !0 },
    isUseCheckBox: { type: Boolean, default: !0 }
  },
  setup(e, { expose: n }) {
    const t = e, s = i([]), o = i(!1), c = i({}), l = O({
      pageSize: 20,
      currentPage: 1
    }), I = i(0), w = i(null), d = (r, u = !0) => (r && (c.value = Y(r)), u && (l.currentPage = 1), t.isUsePager && (c.value.pager = l), o.value = !0, t.getData(c).then((m) => {
      s.value = m.datas, I.value = m.total;
    }).catch().finally(() => {
      o.value = !1;
    }));
    t.isInitData && d(t.initParams), z(
      () => l.currentPage,
      () => {
        d(null, !1);
      }
    ), z(
      () => l.pageSize,
      () => {
        d();
      }
    );
    const y = i([]), U = (r) => {
      y.value = r;
    }, N = O({ a: 1 });
    return n({
      update: d,
      selection: y,
      test: N
    }), (r, u) => {
      const m = A, M = F, V = H, L = J;
      return R((p(), E("div", pe, [
        f(" 操作按钮组 "),
        g("div", de, [
          C(r.$slots, "buttons", { selection: a(y) }, void 0, !0)
        ]),
        f(" 表格主体 "),
        g("div", me, [
          B(M, v({
            ref_key: "table",
            ref: w
          }, r.$attrs, {
            data: a(s),
            onSelectionChange: U
          }), {
            default: j(() => [
              t.isUseCheckBox ? (p(), b(m, {
                key: 0,
                type: "selection"
              })) : f("v-if", !0),
              C(r.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["data"])
        ]),
        f(" 分页部分 "),
        g("div", fe, [
          B(V, {
            "page-size": a(l).pageSize,
            "onUpdate:pageSize": u[0] || (u[0] = (h) => a(l).pageSize = h),
            "current-page": a(l).currentPage,
            "onUpdate:currentPage": u[1] || (u[1] = (h) => a(l).currentPage = h),
            background: "",
            layout: "total, prev, pager, next",
            "hide-on-single-page": "",
            total: a(I)
          }, null, 8, ["page-size", "current-page", "total"])
        ])
      ])), [
        [L, a(o)]
      ]);
    };
  }
});
const P = /* @__PURE__ */ k(be, [["__scopeId", "data-v-175e1406"]]), ve = {
  install(e) {
    e.component(P.name, P);
  }
}, ye = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmTable: P,
  default: ve
}, Symbol.toStringTag, { value: "Module" })), D = [], he = /* @__PURE__ */ Object.assign({ "./CmButton/index.ts": ne, "./CmInput/index.ts": le, "./CmSvg/index.ts": ue, "./CmTable/index.ts": ye }), Ce = async () => {
  for (const e of Object.values(he))
    D.push(e.default);
};
Ce();
const Pe = {
  install(e) {
    D.forEach((n) => {
      e.use(n);
    });
  }
};
export {
  x as CmButton,
  S as CmInput,
  $ as CmSvg,
  P as CmTable,
  Pe as default
};
