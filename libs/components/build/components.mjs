import { defineComponent as c, ref as a, openBlock as r, createElementBlock as m } from "vue";
const p = { class: "cm-button" }, l = c({
  name: "cm-button"
}), u = /* @__PURE__ */ c({
  ...l,
  setup(t) {
    return a("a"), (e, n) => (r(), m("div", p, "yige button"));
  }
});
const f = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [s, _] of e)
    n[s] = _;
  return n;
}, o = /* @__PURE__ */ f(u, [["__scopeId", "data-v-291be8bf"]]), d = {
  install(t) {
    t.component(o.name, o);
  }
}, i = [d], x = {
  install(t) {
    i.forEach((e) => {
      t.use(e);
    });
  }
};
export {
  o as CmButton,
  x as default
};
