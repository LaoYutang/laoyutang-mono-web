import { ElInput as _, ElInputNumber as d } from "element-plus/es";
import { defineComponent as a, openBlock as r, createBlock as p, mergeProps as s, createSlots as f, renderList as y, withCtx as b, renderSlot as I, normalizeProps as l, guardReactiveProps as k } from "vue";
const C = a({
  name: "CmInput"
}), u = /* @__PURE__ */ a({
  ...C,
  props: {
    type: { default: "text" }
  },
  setup(t) {
    const n = t;
    return (e, $) => {
      const m = _, c = d;
      return n.type !== "number" ? (r(), p(m, s({ key: 0 }, e.$attrs, {
        type: n.type,
        clearable: ""
      }), f({
        _: 2
        /* DYNAMIC */
      }, [
        y(e.$slots, (P, o) => ({
          name: o,
          fn: b((i) => [
            I(e.$slots, o, l(k(i)))
          ])
        }))
      ]), 1040, ["type"])) : (r(), p(
        c,
        l(s({ key: 1 }, e.$attrs)),
        null,
        16
        /* FULL_PROPS */
      ));
    };
  }
}), v = {
  install(t) {
    t.component(u.name, u);
  }
};
export {
  u as CmInput,
  v as default
};
