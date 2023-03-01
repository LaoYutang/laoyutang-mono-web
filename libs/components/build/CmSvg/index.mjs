import { defineComponent as r, useCssVars as l, unref as c, computed as a, openBlock as d, createElementBlock as i, createElementVNode as p } from "vue";
const u = {
  "aria-hidden": "true",
  class: "svg-icon"
}, m = ["xlink:href"], f = r({
  name: "CmSvg"
}), x = /* @__PURE__ */ r({
  ...f,
  props: {
    prefix: { default: "icon" },
    name: null,
    widthScale: { default: 1 }
  },
  setup(e) {
    const t = e;
    l((s) => ({
      "88ae7cc6": c(o)
    }));
    const n = a(() => `#${t.prefix}-${t.name}`), o = a(() => t.widthScale.toString() + "em");
    return (s, h) => (d(), i("svg", u, [
      p("use", { "xlink:href": c(n) }, null, 8, m)
    ]));
  }
});
const v = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, _ = /* @__PURE__ */ v(x, [["__scopeId", "data-v-5865a63a"]]), k = {
  install(e) {
    e.component(_.name, _);
  }
};
export {
  _ as CmSvg,
  k as default
};
