import { ElTableColumn as U, ElTable as I, ElPagination as w, ElLoadingDirective as N } from "element-plus/es";
import { defineComponent as S, ref as s, reactive as b, watch as P, withDirectives as O, openBlock as h, createElementBlock as V, createCommentVNode as u, createElementVNode as m, renderSlot as C, unref as n, createVNode as y, mergeProps as $, withCtx as L, createBlock as G } from "vue";
import { _deepClone as j } from "utils";
const q = { class: "cm-table" }, A = { class: "buttons" }, F = { class: "table" }, H = { class: "pager" }, J = S({
  name: "CmTable"
}), K = /* @__PURE__ */ S({
  ...J,
  props: {
    getData: null,
    isInitData: { type: Boolean, default: !0 },
    initParams: { default: () => ({}) },
    isUsePager: { type: Boolean, default: !0 },
    isUseCheckBox: { type: Boolean, default: !0 }
  },
  setup(a, { expose: d }) {
    const e = a, r = s([]), c = s(!1), _ = s({}), t = b({
      pageSize: 20,
      currentPage: 1
    }), v = s(0), T = s(null), i = (o, l = !0) => (o && (_.value = j(o)), l && (t.currentPage = 1), e.isUsePager && (_.value.pager = t), c.value = !0, e.getData(_).then((p) => {
      r.value = p.datas, v.value = p.total;
    }).catch().finally(() => {
      c.value = !1;
    }));
    e.isInitData && i(e.initParams), P(
      () => t.currentPage,
      () => {
        i(null, !1);
      }
    ), P(
      () => t.pageSize,
      () => {
        i();
      }
    );
    const g = s([]), x = (o) => {
      g.value = o;
    }, B = b({ a: 1 });
    return d({
      update: i,
      selection: g,
      test: B
    }), (o, l) => {
      const p = U, z = I, D = w, E = N;
      return O((h(), V("div", q, [
        u(" 操作按钮组 "),
        m("div", A, [
          C(o.$slots, "buttons", { selection: n(g) }, void 0, !0)
        ]),
        u(" 表格主体 "),
        m("div", F, [
          y(z, $({
            ref_key: "table",
            ref: T
          }, o.$attrs, {
            data: n(r),
            onSelectionChange: x
          }), {
            default: L(() => [
              e.isUseCheckBox ? (h(), G(p, {
                key: 0,
                type: "selection"
              })) : u("v-if", !0),
              C(o.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["data"])
        ]),
        u(" 分页部分 "),
        m("div", H, [
          y(D, {
            "page-size": n(t).pageSize,
            "onUpdate:pageSize": l[0] || (l[0] = (f) => n(t).pageSize = f),
            "current-page": n(t).currentPage,
            "onUpdate:currentPage": l[1] || (l[1] = (f) => n(t).currentPage = f),
            background: "",
            layout: "total, prev, pager, next",
            "hide-on-single-page": "",
            total: n(v)
          }, null, 8, ["page-size", "current-page", "total"])
        ])
      ])), [
        [E, n(c)]
      ]);
    };
  }
});
const M = (a, d) => {
  const e = a.__vccOpts || a;
  for (const [r, c] of d)
    e[r] = c;
  return e;
}, k = /* @__PURE__ */ M(K, [["__scopeId", "data-v-175e1406"]]), X = {
  install(a) {
    a.component(k.name, k);
  }
};
export {
  k as CmTable,
  X as default
};
