import { ElInput as c, ElInputNumber as a } from "element-plus/es";
import { defineComponent as l, openBlock as o, createBlock as p, mergeProps as r, normalizeProps as _ } from "vue";
const i = l({
  name: "CmInput"
}), s = /* @__PURE__ */ l({
  ...i,
  props: {
    type: { default: "text" }
  },
  setup(e) {
    const t = e;
    return (n, f) => {
      const u = c, m = a;
      return t.type !== "number" ? (o(), p(u, r({ key: 0 }, n.$attrs, {
        type: t.type,
        clearable: ""
      }), null, 16, ["type"])) : (o(), p(
        m,
        _(r({ key: 1 }, n.$attrs)),
        null,
        16
        /* FULL_PROPS */
      ));
    };
  }
}), I = {
  install(e) {
    e.component(s.name, s);
  }
};
export {
  s as CmInput,
  I as default
};
