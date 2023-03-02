import { ElButton as G, ElInput as W, ElInputNumber as q, ElTableColumn as A, ElTable as F, ElPagination as H, ElLoadingDirective as J } from "element-plus/es";
import { defineComponent as _, ref as i, openBlock as p, createBlock as b, mergeProps as v, unref as a, withCtx as j, renderSlot as C, normalizeProps as K, useCssVars as Q, computed as T, createElementBlock as E, createElementVNode as f, reactive as O, watch as z, withDirectives as R, createCommentVNode as g, createVNode as B } from "vue";
import { _deepClone as X } from "utils";
const Y = _({
  name: "cm-button"
}), Z = /* @__PURE__ */ _({
  ...Y,
  props: {
    handler: null
  },
  setup(e) {
    const n = e, t = i(!1), s = async (o) => {
      t.value = !0;
      try {
        await n.handler(o);
      } catch {
      }
      t.value = !1;
    };
    return (o, c) => {
      const l = G;
      return p(), b(l, v(o.$attrs, {
        loading: a(t),
        onClick: s
      }), {
        default: j(() => [
          C(o.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["loading"]);
    };
  }
});
const k = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [s, o] of n)
    t[s] = o;
  return t;
}, x = /* @__PURE__ */ k(Z, [["__scopeId", "data-v-5e79745c"]]), ee = {
  install(e) {
    e.component(x.name, x);
  }
}, te = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmButton: x,
  default: ee
}, Symbol.toStringTag, { value: "Module" }));
const ne = _({
  name: "CmInput"
}), S = /* @__PURE__ */ _({
  ...ne,
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
}), oe = {
  install(e) {
    e.component(S.name, S);
  }
}, ae = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmInput: S,
  default: oe
}, Symbol.toStringTag, { value: "Module" })), le = {
  "aria-hidden": "true",
  class: "svg-icon"
}, se = ["xlink:href"], ce = _({
  name: "CmSvg"
}), re = /* @__PURE__ */ _({
  ...ce,
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
    return (o, c) => (p(), E("svg", le, [
      f("use", { "xlink:href": a(t) }, null, 8, se)
    ]));
  }
});
const $ = /* @__PURE__ */ k(re, [["__scopeId", "data-v-5865a63a"]]), _e = {
  install(e) {
    e.component($.name, $);
  }
}, ie = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmSvg: $,
  default: _e
}, Symbol.toStringTag, { value: "Module" }));
const ue = { class: "cm-table" }, pe = { class: "buttons" }, de = { class: "table" }, me = { class: "pager" }, ge = _({
  name: "CmTable"
}), fe = /* @__PURE__ */ _({
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
    }), I = i(0), w = i(null), d = (r, u = !0) => (r && (c.value = X(r)), u && (l.currentPage = 1), t.isUsePager && (c.value.pager = l), o.value = !0, t.getData(c).then((m) => {
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
      return R((p(), E("div", ue, [
        g(" 操作按钮组 "),
        f("div", pe, [
          C(r.$slots, "buttons", { selection: a(y) }, void 0, !0)
        ]),
        g(" 表格主体 "),
        f("div", de, [
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
              })) : g("v-if", !0),
              C(r.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["data"])
        ]),
        g(" 分页部分 "),
        f("div", me, [
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
const P = /* @__PURE__ */ k(fe, [["__scopeId", "data-v-175e1406"]]), be = {
  install(e) {
    e.component(P.name, P);
  }
}, ve = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmTable: P,
  default: be
}, Symbol.toStringTag, { value: "Module" })), D = [], ye = /* @__PURE__ */ Object.assign({ "./CmButton/index.ts": te, "./CmInput/index.ts": ae, "./CmSvg/index.ts": ie, "./CmTable/index.ts": ve }), he = async () => {
  for (const e of Object.values(ye))
    D.push(e.default);
};
he();
const $e = {
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
  $e as default
};
