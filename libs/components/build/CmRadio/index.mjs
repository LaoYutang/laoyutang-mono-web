import { ElRadioButton as m, ElRadioGroup as f } from "element-plus/es";
import { defineComponent as s, ref as R, openBlock as o, createBlock as r, normalizeProps as g, guardReactiveProps as b, withCtx as l, createElementBlock as B, Fragment as h, renderList as k, unref as x, createTextVNode as C, toDisplayString as D } from "vue";
const E = s({
  name: "CmRadio"
}), c = /* @__PURE__ */ s({
  ...E,
  props: {
    getData: null
  },
  setup(t) {
    const i = t, n = R([]);
    return i.getData().then((e) => {
      n.value = e;
    }).catch(), (e, y) => {
      const d = m, p = f;
      return o(), r(
        p,
        g(b(e.$attrs)),
        {
          default: l(() => [
            (o(!0), B(
              h,
              null,
              k(x(n), ({ value: a, label: u, disabled: _ }) => (o(), r(d, {
                key: a,
                label: a,
                disabled: _
              }, {
                default: l(() => [
                  C(
                    D(u),
                    1
                    /* TEXT */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["label", "disabled"]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        },
        16
        /* FULL_PROPS */
      );
    };
  }
}), v = {
  install(t) {
    t.component(c.name, c);
  }
};
export {
  c as CmRadio,
  v as default
};
