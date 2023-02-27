import { defineComponent as s, ref as u, openBlock as l, createElementBlock as i, useCssVars as p, unref as _, computed as a, createElementVNode as f } from "vue";
const v = { class: "cm-button" }, b = s({
  name: "cm-button"
}), x = /* @__PURE__ */ s({
  ...b,
  setup(t) {
    return u("a"), (e, n) => (l(), i("div", v, "yige button"));
  }
});
const m = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, c] of e)
    n[o] = c;
  return n;
}, r = /* @__PURE__ */ m(x, [["__scopeId", "data-v-291be8bf"]]), g = {
  install(t) {
    t.component(r.name, r);
  }
}, h = {
  "aria-hidden": "true",
  class: "svg-icon"
}, C = ["xlink:href"], y = s({
  name: "CmSvg"
}), S = /* @__PURE__ */ s({
  ...y,
  props: {
    prefix: { default: "icon" },
    name: null,
    widthScale: { default: 1 }
  },
  setup(t) {
    const e = t;
    p((c) => ({
      "29b5cb5c": _(o)
    }));
    const n = a(() => `#${e.prefix}-${e.name}`), o = a(() => e.widthScale.toString() + "em");
    return (c, B) => (l(), i("svg", h, [
      f("use", { "xlink:href": _(n) }, null, 8, C)
    ]));
  }
});
const d = /* @__PURE__ */ m(S, [["__scopeId", "data-v-85fad73b"]]), $ = {
  install(t) {
    t.component(d.name, d);
  }
}, k = [g, $], I = {
  install(t) {
    k.forEach((e) => {
      t.use(e);
    });
  }
};
export {
  r as CmButton,
  d as CmSvg,
  I as default
};
