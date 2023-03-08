import { ElTableColumn as I, ElTable as $, ElPagination as w, ElLoadingDirective as N } from "element-plus/es";
import { defineComponent as T, ref as s, reactive as b, watch as P, withDirectives as O, openBlock as m, createElementBlock as h, createCommentVNode as r, renderSlot as y, unref as n, createElementVNode as C, createVNode as k, mergeProps as V, withCtx as L, createBlock as G } from "vue";
import { _deepClone as j } from "utils";
const q = { class: "cm-table" }, A = {
  key: 0,
  class: "buttons"
}, F = { class: "table" }, H = { class: "pager" }, J = T({
  name: "CmTable"
}), K = /* @__PURE__ */ T({
  ...J,
  props: {
    getData: null,
    isInitData: { type: Boolean, default: !0 },
    initParams: { default: () => ({}) },
    isUsePager: { type: Boolean, default: !0 },
    isUseCheckBox: { type: Boolean, default: !0 }
  },
  setup(a, { expose: d }) {
    const t = a, i = s([]), c = s(!1), _ = s({}), o = b({
      pageSize: 20,
      currentPage: 1
    }), v = s(0), B = s(null), u = (e, l = !0) => (e && (_.value = j(e)), l && (o.currentPage = 1), t.isUsePager && (_.value.pager = o), c.value = !0, t.getData(_).then((p) => {
      i.value = p.datas, v.value = p.total;
    }).catch().finally(() => {
      c.value = !1;
    }));
    t.isInitData && u(t.initParams), P(
      () => o.currentPage,
      () => {
        u(null, !1);
      }
    ), P(
      () => o.pageSize,
      () => {
        u();
      }
    );
    const g = s([]), x = (e) => {
      g.value = e;
    }, z = b({ a: 1 });
    return d({
      update: u,
      selection: g,
      test: z
    }), (e, l) => {
      const p = I, D = $, E = w, U = N;
      return O((m(), h("div", q, [
        r(" 操作按钮组 "),
        e.$slots.buttons ? (m(), h("div", A, [
          y(e.$slots, "buttons", { selection: n(g) }, void 0, !0)
        ])) : r("v-if", !0),
        r(" 表格主体 "),
        C("div", F, [
          k(D, V({
            ref_key: "table",
            ref: B
          }, e.$attrs, {
            data: n(i),
            onSelectionChange: x
          }), {
            default: L(() => [
              t.isUseCheckBox ? (m(), G(p, {
                key: 0,
                type: "selection"
              })) : r("v-if", !0),
              y(e.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["data"])
        ]),
        r(" 分页部分 "),
        C("div", H, [
          k(E, {
            "page-size": n(o).pageSize,
            "onUpdate:pageSize": l[0] || (l[0] = (f) => n(o).pageSize = f),
            "current-page": n(o).currentPage,
            "onUpdate:currentPage": l[1] || (l[1] = (f) => n(o).currentPage = f),
            background: "",
            layout: "total, prev, pager, next",
            "hide-on-single-page": "",
            total: n(v)
          }, null, 8, ["page-size", "current-page", "total"])
        ])
      ])), [
        [U, n(c)]
      ]);
    };
  }
});
const M = (a, d) => {
  const t = a.__vccOpts || a;
  for (const [i, c] of d)
    t[i] = c;
  return t;
}, S = /* @__PURE__ */ M(K, [["__scopeId", "data-v-978dd10c"]]), X = {
  install(a) {
    a.component(S.name, S);
  }
};
export {
  S as CmTable,
  X as default
};
