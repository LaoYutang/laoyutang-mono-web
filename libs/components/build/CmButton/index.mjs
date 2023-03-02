import { ElButton as _ } from "element-plus/es";
import { defineComponent as a, ref as u, openBlock as d, createBlock as p, mergeProps as i, unref as f, withCtx as m, renderSlot as v } from "vue";
const g = a({
  name: "cm-button"
}), h = /* @__PURE__ */ a({
  ...g,
  props: {
    handler: null
  },
  setup(t) {
    const o = t, e = u(!1), c = async (n) => {
      e.value = !0;
      try {
        await o.handler(n);
      } catch {
      }
      e.value = !1;
    };
    return (n, r) => {
      const l = _;
      return d(), p(l, i(n.$attrs, {
        loading: f(e),
        onClick: c
      }), {
        default: m(() => [
          v(n.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["loading"]);
    };
  }
});
const k = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [c, n] of o)
    e[c] = n;
  return e;
}, s = /* @__PURE__ */ k(h, [["__scopeId", "data-v-5e79745c"]]), B = {
  install(t) {
    t.component(s.name, s);
  }
};
export {
  s as CmButton,
  B as default
};
