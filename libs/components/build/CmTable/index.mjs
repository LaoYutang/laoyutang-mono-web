import { ElTableColumn as $, ElTable as A, ElPagination as M, ElLoadingDirective as W } from "element-plus/es";
import { defineComponent as D, ref as _, reactive as S, watch as E, withDirectives as j, openBlock as P, createElementBlock as V, createCommentVNode as v, createElementVNode as y, renderSlot as C, unref as g, createVNode as T, mergeProps as L, withCtx as R, createBlock as F } from "vue";
const z = (e) => Object.prototype.toString.call(e).slice(8, -1), x = (e) => [
  "String",
  "Number",
  "Boolean",
  "Null",
  "Undefined",
  "Symbol",
  "Bigint"
].includes(z(e));
var U = (e, o, a) => {
  if (!o.has(e))
    throw TypeError("Cannot " + a);
}, w = (e, o, a) => (U(e, o, "read from private field"), a ? a.call(e) : o.get(e)), G = (e, o, a) => {
  if (o.has(e))
    throw TypeError("Cannot add the same private member more than once");
  o instanceof WeakSet ? o.add(e) : o.set(e, a);
}, q = (e, o, a, c) => (U(e, o, "write to private field"), c ? c.call(e, a) : o.set(e, a), a), b;
class H {
  /**
   * 初始化一个栈
   * @param initData 初始栈的成员，可以任意个参数
   */
  constructor(...o) {
    G(this, b, void 0), q(this, b, new Array(...o));
  }
  /**
   * 推入栈
   * @param member 要推入的成员
   * @returns 栈长度
   */
  push(o) {
    return w(this, b).push(o);
  }
  /**
   * 抛出最后一个成员
   * @returns 最后一个成员
   */
  pop() {
    return w(this, b).pop();
  }
  /**
   * 当前栈的长度
   * @returns 长度
   */
  length() {
    return w(this, b).length;
  }
}
b = /* @__PURE__ */ new WeakMap();
const J = (e) => {
  if (x(e))
    return e;
  let o;
  const a = new H({
    parent: o,
    key: void 0,
    data: e,
    sign: 2
    /* SELF */
  }), c = /* @__PURE__ */ new Map(), l = (r, s, t, i) => {
    switch (i) {
      case 2: {
        o = t;
        break;
      }
      case 3: {
        r[s] = t;
        break;
      }
      case 0: {
        r.add(t);
        break;
      }
      case 1: {
        r.set(s, t);
        break;
      }
    }
  };
  for (; a.length() > 0; ) {
    const { parent: r, key: s, data: t, sign: i } = a.pop();
    if (x(t)) {
      l(r, s, t, i);
      continue;
    }
    if (c.has(t)) {
      l(r, s, c.get(t), i);
      continue;
    }
    const f = z(t);
    switch (f) {
      case "Date": {
        const n = new Date(t);
        l(r, s, n, i), c.set(t, n);
        break;
      }
      case "RegExp": {
        const n = new RegExp(t.source, t.flags);
        l(r, s, n, i), c.set(t, n);
        break;
      }
      case "Function": {
        l(r, s, t, i);
        break;
      }
      case "Array": {
        const n = [];
        l(r, s, n, i), c.set(t, n), t.forEach((p, u) => {
          a.push({
            parent: n,
            key: u,
            data: p,
            sign: 3
            /* OTHER */
          });
        });
        break;
      }
      case "Object": {
        const n = {};
        l(r, s, n, i), c.set(t, n), Object.entries(t).reverse().forEach(([p, u]) => {
          a.push({
            parent: n,
            key: p,
            data: u,
            sign: 3
            /* OTHER */
          });
        });
        break;
      }
      case "Set":
      case "WeakSet": {
        const n = new t.constructor();
        l(r, s, n, i), c.set(t, n), Array.from(t).reverse().forEach((p, u) => {
          a.push({
            parent: n,
            key: u,
            data: p,
            sign: 0
            /* SET */
          });
        });
        break;
      }
      case "Map":
      case "WeakMap": {
        const n = new t.constructor();
        l(r, s, n, i), c.set(t, n), Array.from(t).reverse().forEach(([p, u]) => {
          a.push({
            parent: n,
            key: p,
            data: u,
            sign: 1
            /* MAP */
          });
        });
        break;
      }
      default:
        console.error(`[typeError] unknown type ${f}`);
    }
  }
  return o;
}, K = { class: "cm-table" }, Q = { class: "buttons" }, X = { class: "table" }, Y = { class: "pager" }, Z = D({
  name: "CmTable"
}), ee = /* @__PURE__ */ D({
  ...Z,
  props: {
    getData: null,
    isInitData: { type: Boolean, default: !0 },
    initParams: { default: () => ({}) },
    isUsePager: { type: Boolean, default: !0 },
    isUseCheckBox: { type: Boolean, default: !0 }
  },
  setup(e, { expose: o }) {
    const a = e, c = _([]), l = _(!1), r = _({}), s = S({
      pageSize: 20,
      currentPage: 1
    }), t = _(0), i = _(null), f = (d, h = !0) => (d && (r.value = J(d)), h && (s.currentPage = 1), a.isUsePager && (r.value.pager = s), l.value = !0, a.getData(r).then((m) => {
      c.value = m.datas, t.value = m.total;
    }).catch().finally(() => {
      l.value = !1;
    }));
    a.isInitData && f(a.initParams), E(
      () => s.currentPage,
      () => {
        f(null, !1);
      }
    ), E(
      () => s.pageSize,
      () => {
        f();
      }
    );
    const n = _([]), p = (d) => {
      n.value = d;
    }, u = S({ a: 1 });
    return o({
      update: f,
      selection: n,
      test: u
    }), (d, h) => {
      const m = $, O = A, I = M, N = W;
      return j((P(), V("div", K, [
        v(" 操作按钮组 "),
        y("div", Q, [
          C(d.$slots, "buttons", { selection: g(n) }, void 0, !0)
        ]),
        v(" 表格主体 "),
        y("div", X, [
          T(O, L({
            ref_key: "table",
            ref: i
          }, d.$attrs, {
            data: g(c),
            onSelectionChange: p
          }), {
            default: R(() => [
              a.isUseCheckBox ? (P(), F(m, {
                key: 0,
                type: "selection"
              })) : v("v-if", !0),
              C(d.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["data"])
        ]),
        v(" 分页部分 "),
        y("div", Y, [
          T(I, {
            "page-size": g(s).pageSize,
            "onUpdate:pageSize": h[0] || (h[0] = (k) => g(s).pageSize = k),
            "current-page": g(s).currentPage,
            "onUpdate:currentPage": h[1] || (h[1] = (k) => g(s).currentPage = k),
            background: "",
            layout: "total, prev, pager, next",
            "hide-on-single-page": "",
            total: g(t)
          }, null, 8, ["page-size", "current-page", "total"])
        ])
      ])), [
        [N, g(l)]
      ]);
    };
  }
});
const te = (e, o) => {
  const a = e.__vccOpts || e;
  for (const [c, l] of o)
    a[c] = l;
  return a;
}, B = /* @__PURE__ */ te(ee, [["__scopeId", "data-v-175e1406"]]), oe = {
  install(e) {
    e.component(B.name, B);
  }
};
export {
  B as CmTable,
  oe as default
};
