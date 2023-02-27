import { defineComponent as r, useCssVars as d, unref as c, computed as _, openBlock as l, createElementBlock as i, createElementVNode as p } from "vue";
const u = {
  "aria-hidden": "true",
  class: "svg-icon"
}, f = ["xlink:href"], m = r({
  name: "CmSvg"
}), x = /* @__PURE__ */ r({
  ...m,
  props: {
    prefix: { default: "icon" },
    name: null,
    widthScale: { default: 1 }
  },
  setup(e) {
    const t = e;
    d((s) => ({
      "29b5cb5c": c(o)
    }));
    const n = _(() => `#${t.prefix}-${t.name}`), o = _(() => t.widthScale.toString() + "em");
    return (s, h) => (l(), i("svg", u, [
      p("use", { "xlink:href": c(n) }, null, 8, f)
    ]));
  }
});
const v = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, a = /* @__PURE__ */ v(x, [["__scopeId", "data-v-85fad73b"]]), b = {
  install(e) {
    e.component(a.name, a);
  }
};
export {
  a as CmSvg,
  b as default
};
