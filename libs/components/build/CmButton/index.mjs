import { ElButton as d } from "element-plus/es";
import { defineComponent as a, ref as f, openBlock as u, createBlock as p, mergeProps as i, unref as c, withCtx as m, renderSlot as v } from "vue";
import { _debounce as g } from "utils";
const h = a({
  name: "cm-button"
}), k = /* @__PURE__ */ a({
  ...h,
  props: {
    handler: null
  },
  setup(t) {
    const n = t, o = f(!1), s = g(async (e) => {
      o.value = !0;
      try {
        await n.handler(e);
      } catch {
      }
      o.value = !1;
    });
    return (e, l) => {
      const _ = d;
      return u(), p(_, i(e.$attrs, {
        loading: c(o),
        onClick: c(s)
      }), {
        default: m(() => [
          v(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["loading", "onClick"]);
    };
  }
});
const C = (t, n) => {
  const o = t.__vccOpts || t;
  for (const [s, e] of n)
    o[s] = e;
  return o;
}, r = /* @__PURE__ */ C(k, [["__scopeId", "data-v-68fd51f0"]]), b = {
  install(t) {
    t.component(r.name, r);
  }
};
export {
  r as CmButton,
  b as default
};
