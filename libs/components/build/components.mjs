import { ElButton as q, ElInput as H, ElInputNumber as J, ElTableColumn as K, ElTable as Q, ElPagination as X, ElLoadingDirective as Y } from "element-plus/es";
import { defineComponent as g, ref as m, openBlock as v, createBlock as x, mergeProps as C, unref as u, withCtx as U, renderSlot as E, normalizeProps as Z, useCssVars as ee, computed as j, createElementBlock as W, createElementVNode as S, reactive as z, watch as D, withDirectives as te, createCommentVNode as k, createVNode as M } from "vue";
const ne = g({
  name: "cm-button"
}), ae = /* @__PURE__ */ g({
  ...ne,
  props: {
    handler: null
  },
  setup(e) {
    const t = e, n = m(!1), l = async (s) => {
      n.value = !0;
      try {
        await t.handler(s);
      } catch {
      }
      n.value = !1;
    };
    return (s, r) => {
      const c = q;
      return v(), x(c, C(s.$attrs, {
        loading: u(n),
        onClick: l
      }), {
        default: U(() => [
          E(s.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["loading"]);
    };
  }
});
const B = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, s] of t)
    n[l] = s;
  return n;
}, P = /* @__PURE__ */ B(ae, [["__scopeId", "data-v-5e79745c"]]), oe = {
  install(e) {
    e.component(P.name, P);
  }
}, se = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmButton: P,
  default: oe
}, Symbol.toStringTag, { value: "Module" }));
const ce = g({
  name: "CmInput"
}), O = /* @__PURE__ */ g({
  ...ce,
  props: {
    type: { default: "text" }
  },
  setup(e) {
    const t = e;
    return (n, l) => {
      const s = H, r = J;
      return t.type !== "number" ? (v(), x(s, C({ key: 0 }, n.$attrs, {
        type: t.type,
        clearable: ""
      }), null, 16, ["type"])) : (v(), x(
        r,
        Z(C({ key: 1 }, n.$attrs)),
        null,
        16
        /* FULL_PROPS */
      ));
    };
  }
}), re = {
  install(e) {
    e.component(O.name, O);
  }
}, le = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmInput: O,
  default: re
}, Symbol.toStringTag, { value: "Module" })), ie = {
  "aria-hidden": "true",
  class: "svg-icon"
}, ue = ["xlink:href"], pe = g({
  name: "CmSvg"
}), _e = /* @__PURE__ */ g({
  ...pe,
  props: {
    prefix: { default: "icon" },
    name: null,
    widthScale: { default: 1 }
  },
  setup(e) {
    const t = e;
    ee((s) => ({
      "88ae7cc6": u(l)
    }));
    const n = j(() => `#${t.prefix}-${t.name}`), l = j(() => t.widthScale.toString() + "em");
    return (s, r) => (v(), W("svg", ie, [
      S("use", { "xlink:href": u(n) }, null, 8, ue)
    ]));
  }
});
const T = /* @__PURE__ */ B(_e, [["__scopeId", "data-v-5865a63a"]]), de = {
  install(e) {
    e.component(T.name, T);
  }
}, ge = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmSvg: T,
  default: de
}, Symbol.toStringTag, { value: "Module" }));
const A = (e) => Object.prototype.toString.call(e).slice(8, -1), N = (e) => [
  "String",
  "Number",
  "Boolean",
  "Null",
  "Undefined",
  "Symbol",
  "Bigint"
].includes(A(e));
var V = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, w = (e, t, n) => (V(e, t, "read from private field"), n ? n.call(e) : t.get(e)), fe = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, me = (e, t, n, l) => (V(e, t, "write to private field"), l ? l.call(e, n) : t.set(e, n), n), h;
class be {
  /**
   * 初始化一个栈
   * @param initData 初始栈的成员，可以任意个参数
   */
  constructor(...t) {
    fe(this, h, void 0), me(this, h, new Array(...t));
  }
  /**
   * 推入栈
   * @param member 要推入的成员
   * @returns 栈长度
   */
  push(t) {
    return w(this, h).push(t);
  }
  /**
   * 抛出最后一个成员
   * @returns 最后一个成员
   */
  pop() {
    return w(this, h).pop();
  }
  /**
   * 当前栈的长度
   * @returns 长度
   */
  length() {
    return w(this, h).length;
  }
}
h = /* @__PURE__ */ new WeakMap();
const he = (e) => {
  if (N(e))
    return e;
  let t;
  const n = new be({
    parent: t,
    key: void 0,
    data: e,
    sign: 2
    /* SELF */
  }), l = /* @__PURE__ */ new Map(), s = (r, c, a, i) => {
    switch (i) {
      case 2: {
        t = a;
        break;
      }
      case 3: {
        r[c] = a;
        break;
      }
      case 0: {
        r.add(a);
        break;
      }
      case 1: {
        r.set(c, a);
        break;
      }
    }
  };
  for (; n.length() > 0; ) {
    const { parent: r, key: c, data: a, sign: i } = n.pop();
    if (N(a)) {
      s(r, c, a, i);
      continue;
    }
    if (l.has(a)) {
      s(r, c, l.get(a), i);
      continue;
    }
    const f = A(a);
    switch (f) {
      case "Date": {
        const o = new Date(a);
        s(r, c, o, i), l.set(a, o);
        break;
      }
      case "RegExp": {
        const o = new RegExp(a.source, a.flags);
        s(r, c, o, i), l.set(a, o);
        break;
      }
      case "Function": {
        s(r, c, a, i);
        break;
      }
      case "Array": {
        const o = [];
        s(r, c, o, i), l.set(a, o), a.forEach((p, _) => {
          n.push({
            parent: o,
            key: _,
            data: p,
            sign: 3
            /* OTHER */
          });
        });
        break;
      }
      case "Object": {
        const o = {};
        s(r, c, o, i), l.set(a, o), Object.entries(a).reverse().forEach(([p, _]) => {
          n.push({
            parent: o,
            key: p,
            data: _,
            sign: 3
            /* OTHER */
          });
        });
        break;
      }
      case "Set":
      case "WeakSet": {
        const o = new a.constructor();
        s(r, c, o, i), l.set(a, o), Array.from(a).reverse().forEach((p, _) => {
          n.push({
            parent: o,
            key: _,
            data: p,
            sign: 0
            /* SET */
          });
        });
        break;
      }
      case "Map":
      case "WeakMap": {
        const o = new a.constructor();
        s(r, c, o, i), l.set(a, o), Array.from(a).reverse().forEach(([p, _]) => {
          n.push({
            parent: o,
            key: p,
            data: _,
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
  return t;
}, ve = { class: "cm-table" }, ye = { class: "buttons" }, ke = { class: "table" }, Se = { class: "pager" }, xe = g({
  name: "CmTable"
}), Ce = /* @__PURE__ */ g({
  ...xe,
  props: {
    getData: null,
    isInitData: { type: Boolean, default: !0 },
    initParams: { default: () => ({}) },
    isUsePager: { type: Boolean, default: !0 },
    isUseCheckBox: { type: Boolean, default: !0 }
  },
  setup(e, { expose: t }) {
    const n = e, l = m([]), s = m(!1), r = m({}), c = z({
      pageSize: 20,
      currentPage: 1
    }), a = m(0), i = m(null), f = (d, b = !0) => (d && (r.value = he(d)), b && (c.currentPage = 1), n.isUsePager && (r.value.pager = c), s.value = !0, n.getData(r).then((y) => {
      l.value = y.datas, a.value = y.total;
    }).catch().finally(() => {
      s.value = !1;
    }));
    n.isInitData && f(n.initParams), D(
      () => c.currentPage,
      () => {
        f(null, !1);
      }
    ), D(
      () => c.pageSize,
      () => {
        f();
      }
    );
    const o = m([]), p = (d) => {
      o.value = d;
    }, _ = z({ a: 1 });
    return t({
      update: f,
      selection: o,
      test: _
    }), (d, b) => {
      const y = K, R = Q, F = X, G = Y;
      return te((v(), W("div", ve, [
        k(" 操作按钮组 "),
        S("div", ye, [
          E(d.$slots, "buttons", { selection: u(o) }, void 0, !0)
        ]),
        k(" 表格主体 "),
        S("div", ke, [
          M(R, C({
            ref_key: "table",
            ref: i
          }, d.$attrs, {
            data: u(l),
            onSelectionChange: p
          }), {
            default: U(() => [
              n.isUseCheckBox ? (v(), x(y, {
                key: 0,
                type: "selection"
              })) : k("v-if", !0),
              E(d.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["data"])
        ]),
        k(" 分页部分 "),
        S("div", Se, [
          M(F, {
            "page-size": u(c).pageSize,
            "onUpdate:pageSize": b[0] || (b[0] = ($) => u(c).pageSize = $),
            "current-page": u(c).currentPage,
            "onUpdate:currentPage": b[1] || (b[1] = ($) => u(c).currentPage = $),
            background: "",
            layout: "total, prev, pager, next",
            "hide-on-single-page": "",
            total: u(a)
          }, null, 8, ["page-size", "current-page", "total"])
        ])
      ])), [
        [G, u(s)]
      ]);
    };
  }
});
const I = /* @__PURE__ */ B(Ce, [["__scopeId", "data-v-175e1406"]]), $e = {
  install(e) {
    e.component(I.name, I);
  }
}, we = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmTable: I,
  default: $e
}, Symbol.toStringTag, { value: "Module" })), L = [], Ee = /* @__PURE__ */ Object.assign({ "./CmButton/index.ts": se, "./CmInput/index.ts": le, "./CmSvg/index.ts": ge, "./CmTable/index.ts": we }), Pe = async () => {
  for (const e of Object.values(Ee))
    L.push(e.default);
};
Pe();
const Ie = {
  install(e) {
    L.forEach((t) => {
      e.use(t);
    });
  }
};
export {
  P as CmButton,
  O as CmInput,
  T as CmSvg,
  I as CmTable,
  Ie as default
};
