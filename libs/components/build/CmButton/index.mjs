import { defineComponent as _, ref as a, openBlock as r, createElementBlock as p } from "vue";
const d = { class: "cm-button" }, f = _({
  name: "cm-button"
}), l = /* @__PURE__ */ _({
  ...f,
  setup(t) {
    return a("a"), (n, e) => (r(), p("div", d, "yige button"));
  }
});
const m = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [c, s] of n)
    e[c] = s;
  return e;
}, o = /* @__PURE__ */ m(l, [["__scopeId", "data-v-291be8bf"]]), i = {
  install(t) {
    t.component(o.name, o);
  }
};
export {
  o as CmButton,
  i as default
};
