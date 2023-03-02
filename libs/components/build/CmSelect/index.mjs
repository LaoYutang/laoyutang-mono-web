import { ElOption as C, ElSelect as $, ElTreeSelect as w } from "element-plus/es";
import { defineComponent as y, ref as i, watch as B, openBlock as a, createElementBlock as u, Fragment as p, createCommentVNode as r, createBlock as f, mergeProps as _, withCtx as m, renderList as E, unref as k, renderSlot as b, createVNode as T } from "vue";
const O = y({
  name: "CmSelect"
}), v = /* @__PURE__ */ y({
  ...O,
  props: {
    type: { default: "normal" },
    getData: null,
    params: { default: "" },
    multiple: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: S }) {
    const l = n, s = i([]), c = i(!1), d = (t) => {
      c.value = !0, l.getData(t).then((o) => {
        s.value = o;
      }).finally(() => {
        c.value = !1;
      });
    };
    return d(l.params), B(
      () => l.params,
      () => {
        S("update:modelValue", null), d(l.params);
      }
    ), (t, o) => {
      const V = C, h = $, g = w;
      return a(), u(
        p,
        null,
        [
          r(" 普通下拉框 "),
          l.type === "normal" ? (a(), f(h, _({ key: 0 }, t.$attrs, {
            multiple: l.multiple,
            "show-checkbox": !1,
            "onUpdate:modelValue": o[0] || (o[0] = (e) => t.$emit("update:modelValue", e))
          }), {
            default: m(() => [
              (a(!0), u(
                p,
                null,
                E(k(s), (e) => (a(), f(V, {
                  key: e.value,
                  label: e.label,
                  value: e.value
                }, {
                  default: m(() => [
                    b(t.$slots, "default", { data: e })
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["label", "value"]))),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["multiple"])) : l.type === "tree" ? (a(), u(
            p,
            { key: 1 },
            [
              r(" 树形下拉框 "),
              T(g, _(t.$attrs, {
                data: k(s),
                multiple: l.multiple,
                "show-checkbox": l.multiple,
                "onUpdate:modelValue": o[1] || (o[1] = (e) => t.$emit("update:modelValue", e))
              }), {
                default: m(({ data: e }) => [
                  b(t.$slots, "default", { data: e })
                ]),
                _: 3
                /* FORWARDED */
              }, 16, ["data", "multiple", "show-checkbox"])
            ],
            2112
            /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
          )) : r("v-if", !0)
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      );
    };
  }
}), N = {
  install(n) {
    n.component(v.name, v);
  }
};
export {
  v as CmSelect,
  N as default
};
