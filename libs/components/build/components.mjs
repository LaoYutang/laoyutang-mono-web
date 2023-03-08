import { ElButton as Me, ElEmpty as Re, ElDropdownItem as He, ElDropdownMenu as Le, ElDropdown as Qe, ElTableColumn as he, ElTable as ve, ElCard as Ue, ElLoadingDirective as ge, ElDialog as We, ElButtonGroup as Ze, ElInput as Ne, ElInputNumber as Ge, ElRadioButton as Fe, ElRadioGroup as Je, ElOption as Xe, ElSelect as Ye, ElTreeSelect as Ke, ElPagination as qe } from "element-plus/es";
import { defineComponent as y, ref as v, openBlock as l, createBlock as k, mergeProps as E, unref as i, withCtx as m, renderSlot as B, getCurrentScope as et, onScopeDispose as tt, getCurrentInstance as be, onMounted as ye, nextTick as Ce, computed as O, watch as T, onBeforeUnmount as nt, createElementBlock as h, createElementVNode as g, normalizeStyle as U, withDirectives as W, createCommentVNode as C, toDisplayString as ke, createVNode as P, Fragment as $, renderList as R, resolveDynamicComponent as re, createStaticVNode as G, isRef as ot, createSlots as Pe, createTextVNode as H, vShow as ce, normalizeProps as J, guardReactiveProps as we, useCssVars as at, reactive as ie } from "vue";
import { _debounce as st, _throttle as lt, _deepClone as xe } from "utils";
import * as Ie from "echarts/core";
import { BarChart as rt, LineChart as ct, PieChart as it } from "echarts/charts";
import { TitleComponent as dt, TooltipComponent as ut, GridComponent as _t, DatasetComponent as ft, TransformComponent as pt, LegendComponent as mt, ToolboxComponent as ht } from "echarts/components";
import { LabelLayout as vt, UniversalTransition as gt } from "echarts/features";
import { CanvasRenderer as bt } from "echarts/renderers";
const yt = y({
  name: "cm-button"
}), Ct = /* @__PURE__ */ y({
  ...yt,
  props: {
    handler: null
  },
  setup(e) {
    const t = e, n = v(!1), o = st(async (s) => {
      n.value = !0;
      try {
        await t.handler(s);
      } catch {
      }
      n.value = !1;
    });
    return (s, d) => {
      const a = Me;
      return l(), k(a, E(s.$attrs, {
        loading: i(n),
        onClick: i(o)
      }), {
        default: m(() => [
          B(s.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["loading", "onClick"]);
    };
  }
});
const D = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, j = /* @__PURE__ */ D(Ct, [["__scopeId", "data-v-68fd51f0"]]), kt = {
  install(e) {
    e.component(j.name, j);
  }
}, Pt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmButton: j,
  default: kt
}, Symbol.toStringTag, { value: "Module" }));
Ie.use([
  dt,
  ut,
  _t,
  ft,
  pt,
  mt,
  ht,
  rt,
  ct,
  it,
  vt,
  gt,
  bt
]);
const wt = Ie;
var de;
const L = typeof window < "u", xt = (e) => typeof e < "u", It = (e) => typeof e == "function", F = () => {
};
L && ((de = window == null ? void 0 : window.navigator) != null && de.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function St(e) {
  return typeof e == "function" ? e() : i(e);
}
function Ot(e) {
  return e;
}
function Se(e) {
  return et() ? (tt(e), !0) : !1;
}
function $t(e, t = !0) {
  be() ? ye(e) : t ? e() : Ce(e);
}
function A(e) {
  var t;
  const n = St(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const le = L ? window : void 0;
L && window.document;
L && window.navigator;
L && window.location;
function Oe(e, t = !1) {
  const n = v(), o = () => n.value = Boolean(e());
  return o(), $t(o, t), n;
}
function Bt(e) {
  return JSON.parse(JSON.stringify(e));
}
const X = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Y = "__vueuse_ssr_handlers__";
X[Y] = X[Y] || {};
X[Y];
var ue = Object.getOwnPropertySymbols, Tt = Object.prototype.hasOwnProperty, zt = Object.prototype.propertyIsEnumerable, Et = (e, t) => {
  var n = {};
  for (var o in e)
    Tt.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && ue)
    for (var o of ue(e))
      t.indexOf(o) < 0 && zt.call(e, o) && (n[o] = e[o]);
  return n;
};
function $e(e, t, n = {}) {
  const o = n, { window: s = le } = o, d = Et(o, ["window"]);
  let a;
  const r = Oe(() => s && "ResizeObserver" in s), c = () => {
    a && (a.disconnect(), a = void 0);
  }, u = T(() => A(e), (_) => {
    c(), r.value && s && _ && (a = new ResizeObserver(t), a.observe(_, d));
  }, { immediate: !0, flush: "post" }), f = () => {
    c(), u();
  };
  return Se(f), {
    isSupported: r,
    stop: f
  };
}
function Be(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: o = le, box: s = "content-box" } = n, d = O(() => {
    var c, u;
    return (u = (c = A(e)) == null ? void 0 : c.namespaceURI) == null ? void 0 : u.includes("svg");
  }), a = v(t.width), r = v(t.height);
  return $e(e, ([c]) => {
    const u = s === "border-box" ? c.borderBoxSize : s === "content-box" ? c.contentBoxSize : c.devicePixelContentBoxSize;
    if (o && d.value) {
      const f = A(e);
      if (f) {
        const _ = o.getComputedStyle(f);
        a.value = parseFloat(_.width), r.value = parseFloat(_.height);
      }
    } else if (u) {
      const f = Array.isArray(u) ? u : [u];
      a.value = f.reduce((_, { inlineSize: b }) => _ + b, 0), r.value = f.reduce((_, { blockSize: b }) => _ + b, 0);
    } else
      a.value = c.contentRect.width, r.value = c.contentRect.height;
  }, n), T(() => A(e), (c) => {
    a.value = c ? t.width : 0, r.value = c ? t.height : 0;
  }), {
    width: a,
    height: r
  };
}
function Vt(e, t, n = {}) {
  const {
    root: o,
    rootMargin: s = "0px",
    threshold: d = 0.1,
    window: a = le
  } = n, r = Oe(() => a && "IntersectionObserver" in a);
  let c = F;
  const u = r.value ? T(() => ({
    el: A(e),
    root: A(o)
  }), ({ el: _, root: b }) => {
    if (c(), !_)
      return;
    const p = new IntersectionObserver(t, {
      root: b,
      rootMargin: s,
      threshold: d
    });
    p.observe(_), c = () => {
      p.disconnect(), c = F;
    };
  }, { immediate: !0, flush: "post" }) : F, f = () => {
    c(), u();
  };
  return Se(f), {
    isSupported: r,
    stop: f
  };
}
var _e;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(_e || (_e = {}));
var At = Object.defineProperty, fe = Object.getOwnPropertySymbols, jt = Object.prototype.hasOwnProperty, Dt = Object.prototype.propertyIsEnumerable, pe = (e, t, n) => t in e ? At(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Mt = (e, t) => {
  for (var n in t || (t = {}))
    jt.call(t, n) && pe(e, n, t[n]);
  if (fe)
    for (var n of fe(t))
      Dt.call(t, n) && pe(e, n, t[n]);
  return e;
};
const Rt = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
Mt({
  linear: Ot
}, Rt);
function Ht(e, t, n, o = {}) {
  var s, d, a;
  const {
    clone: r = !1,
    passive: c = !1,
    eventName: u,
    deep: f = !1,
    defaultValue: _
  } = o, b = be(), p = n || (b == null ? void 0 : b.emit) || ((s = b == null ? void 0 : b.$emit) == null ? void 0 : s.bind(b)) || ((a = (d = b == null ? void 0 : b.proxy) == null ? void 0 : d.$emit) == null ? void 0 : a.bind(b == null ? void 0 : b.proxy));
  let w = u;
  t || (t = "modelValue"), w = u || w || `update:${t.toString()}`;
  const S = (x) => r ? It(r) ? r(x) : Bt(x) : x, V = () => xt(e[t]) ? S(e[t]) : _;
  if (c) {
    const x = V(), z = v(x);
    return T(() => e[t], (I) => z.value = S(I)), T(z, (I) => {
      (I !== e[t] || f) && p(w, I);
    }, { deep: f }), z;
  } else
    return O({
      get() {
        return V();
      },
      set(x) {
        p(w, x);
      }
    });
}
const Lt = y({
  name: "CmChart"
}), Z = /* @__PURE__ */ y({
  ...Lt,
  props: {
    options: null
  },
  setup(e, { expose: t }) {
    const n = e, o = v(null);
    let s = null, d;
    const { height: a, width: r } = Be(o), c = v(null), { stop: u } = Vt(o, ([{ isIntersecting: f }]) => {
      f && (s = wt.init(c.value), d = lt(s.resize, 500, !1), $e(o, () => d()), s.setOption(n.options), u());
    });
    return nt(() => {
      s.dispose();
    }), t({
      chartInstance: s
    }), (f, _) => (l(), h(
      "div",
      {
        ref_key: "cmChart",
        ref: o,
        class: "cm-chart"
      },
      [
        g(
          "div",
          {
            id: "chart",
            ref_key: "chart",
            ref: c,
            class: "chart",
            style: U(`width: ${i(r)}px;height: ${i(a)}px;`)
          },
          null,
          4
          /* STYLE */
        )
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), Qt = {
  install(e) {
    e.component(Z.name, Z);
  }
}, Ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmChart: Z,
  default: Qt
}, Symbol.toStringTag, { value: "Module" }));
const Wt = "data:image/png;base64,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", Zt = {}, Nt = /* @__PURE__ */ g(
  "img",
  { src: Wt },
  null,
  -1
  /* HOISTED */
);
function Gt(e, t) {
  const n = Re;
  return l(), k(n, null, {
    image: m(() => [
      Nt
    ]),
    _: 1
    /* STABLE */
  });
}
const N = /* @__PURE__ */ D(Zt, [["render", Gt]]), Ft = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, Jt = /* @__PURE__ */ g(
  "path",
  {
    fill: "currentColor",
    d: "M12 20q-3.35 0-5.675-2.325T4 12q0-3.35 2.325-5.675T12 4q1.725 0 3.3.712T18 6.75V4h2v7h-7V9h4.2q-.8-1.4-2.188-2.2T12 6Q9.5 6 7.75 7.75T6 12q0 2.5 1.75 4.25T12 18q1.925 0 3.475-1.1T17.65 14h2.1q-.7 2.65-2.85 4.325T12 20Z"
  },
  null,
  -1
  /* HOISTED */
), Xt = [
  Jt
];
function Yt(e, t) {
  return l(), h("svg", Ft, Xt);
}
const Kt = { name: "material-symbols-refresh", render: Yt };
const qt = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, en = /* @__PURE__ */ g(
  "path",
  {
    fill: "currentColor",
    d: "M4 20V9h4v11Zm6 0V4h4v16Zm6 0v-7h4v7Z"
  },
  null,
  -1
  /* HOISTED */
), tn = [
  en
];
function nn(e, t) {
  return l(), h("svg", qt, tn);
}
const on = { name: "material-symbols-bar-chart-sharp", render: nn }, an = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, sn = /* @__PURE__ */ g(
  "path",
  {
    fill: "currentColor",
    d: "m3.5 18.5l6-6l4 4L22 6.92L20.59 5.5l-7.09 8l-4-4L2 17l1.5 1.5Z"
  },
  null,
  -1
  /* HOISTED */
), ln = [
  sn
];
function rn(e, t) {
  return l(), h("svg", an, ln);
}
const cn = { name: "mdi-chart-line-variant", render: rn }, dn = {
  viewBox: "0 0 1024 1024",
  width: "1.2em",
  height: "1.2em"
}, un = /* @__PURE__ */ g(
  "path",
  {
    fill: "currentColor",
    d: "M448 68.48v64.832A384.128 384.128 0 0 0 512 896a384.128 384.128 0 0 0 378.688-320h64.768A448.128 448.128 0 0 1 64 512A448.128 448.128 0 0 1 448 68.48z"
  },
  null,
  -1
  /* HOISTED */
), _n = /* @__PURE__ */ g(
  "path",
  {
    fill: "currentColor",
    d: "M576 97.28V448h350.72A384.064 384.064 0 0 0 576 97.28zM512 64V33.152A448 448 0 0 1 990.848 512H512V64z"
  },
  null,
  -1
  /* HOISTED */
), fn = [
  un,
  _n
];
function pn(e, t) {
  return l(), h("svg", dn, fn);
}
const mn = { name: "ep-pie-chart", render: pn }, hn = {
  viewBox: "0 0 16 16",
  width: "1.2em",
  height: "1.2em"
}, vn = /* @__PURE__ */ g(
  "path",
  {
    fill: "currentColor",
    d: "M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"
  },
  null,
  -1
  /* HOISTED */
), gn = [
  vn
];
function bn(e, t) {
  return l(), h("svg", hn, gn);
}
const yn = { name: "bi-grid-3x3-gap-fill", render: bn }, Cn = {
  legend: { bottom: 0, type: "scroll" },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  grid: { top: 30, right: 70, bottom: 70, left: 70 }
}, me = {
  bar: on,
  line: cn,
  pie: mn,
  grid: yn
}, kn = { class: "header" }, Pn = { class: "header-left" }, wn = { class: "header-left-title" }, xn = { class: "header-left-dropdown" }, In = { class: "header-right" }, Sn = y({
  name: "CmChartCard"
}), On = /* @__PURE__ */ y({
  ...Sn,
  props: {
    name: null,
    title: null,
    configs: null,
    getData: null,
    publicConfig: { default: void 0 },
    height: { default: 400 },
    isInitData: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, n = v(null), o = () => {
      var p, w;
      (w = (p = n.value) == null ? void 0 : p.chartInstance) == null || w.update();
    }, s = v(!1), d = v([]), a = () => (s.value = !0, t.getData().then((p) => {
      d.value = p ?? [], o();
    }).finally(() => {
      s.value = !1;
    }));
    ye(() => {
      t.isInitData && a();
    });
    const r = O(() => d.value.length <= 1), c = O(() => [...t.configs.map(({ type: p }) => p), "grid"]), u = v(0), f = O(() => me[c.value[u.value]]), _ = O(() => Object.assign(
      xe(Cn),
      t.publicConfig,
      t.configs[u.value] ? t.configs[u.value].config : {},
      {
        dataset: {
          source: d.value
        }
      }
    )), b = (p) => {
      u.value = p, Ce(() => {
        o();
      });
    };
    return (p, w) => {
      const S = He, V = Le, x = Qe, z = Kt, I = j, ze = N, Ee = Z, Ve = he, Ae = ve, je = Ue, De = ge;
      return W((l(), k(je, { class: "cm-chart-card" }, {
        header: m(() => [
          g("div", kn, [
            g("div", Pn, [
              C(" 标题 "),
              g(
                "div",
                wn,
                ke(t.title),
                1
                /* TEXT */
              ),
              C(" 类型选择下拉 "),
              g("div", xn, [
                P(x, {
                  trigger: "click",
                  onCommand: b
                }, {
                  dropdown: m(() => [
                    P(V, null, {
                      default: m(() => [
                        (l(!0), h(
                          $,
                          null,
                          R(i(c), (M, Q) => (l(), k(S, {
                            key: M,
                            command: Q,
                            disabled: Q === i(u)
                          }, {
                            default: m(() => [
                              (l(), k(re(i(me)[M]), { style: { "font-size": "18px" } }))
                            ]),
                            _: 2
                            /* DYNAMIC */
                          }, 1032, ["command", "disabled"]))),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  default: m(() => [
                    (l(), k(re(i(f)), { class: "icon" }))
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])
            ]),
            C(" 右侧操作区 "),
            g("div", In, [
              P(I, {
                text: "",
                circle: "",
                handler: a
              }, {
                default: m(() => [
                  P(z)
                ]),
                _: 1
                /* STABLE */
              })
            ])
          ])
        ]),
        default: m(() => [
          C(" 卡片主体 "),
          g(
            "div",
            {
              class: "card-body",
              style: U(`height: ${t.height}px`)
            },
            [
              C(" 空 "),
              i(r) ? (l(), k(ze, { key: 0 })) : i(u) < i(c).length - 1 ? (l(), h(
                $,
                { key: 1 },
                [
                  C(" 图表 "),
                  P(Ee, {
                    ref_key: "refChart",
                    ref: n,
                    options: i(_),
                    style: U(`height: ${t.height}px`)
                  }, null, 8, ["options", "style"])
                ],
                2112
                /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
              )) : (l(), h(
                $,
                { key: 2 },
                [
                  C(" 表格 "),
                  P(Ae, {
                    data: i(d).slice(1)
                  }, {
                    default: m(() => [
                      (l(!0), h(
                        $,
                        null,
                        R(i(d)[0], (M, Q) => (l(), k(Ve, {
                          key: M,
                          prop: Q.toString(),
                          label: M
                        }, null, 8, ["prop", "label"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["data"])
                ],
                2112
                /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
              ))
            ],
            4
            /* STYLE */
          )
        ]),
        _: 1
        /* STABLE */
      })), [
        [De, i(s)]
      ]);
    };
  }
});
const K = /* @__PURE__ */ D(On, [["__scopeId", "data-v-b3ea7ceb"]]), $n = {
  install(e) {
    e.component(K.name, K);
  }
}, Bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmChartCard: K,
  default: $n
}, Symbol.toStringTag, { value: "Module" }));
const Tn = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, zn = /* @__PURE__ */ G('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M5.63604 5.63603C9.15076 2.12131 14.8492 2.12131 18.364 5.63603C21.8787 9.15075 21.8787 14.8492 18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C2.12132 14.8492 2.12132 9.15075 5.63604 5.63603Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"></animate></path><path stroke-dasharray="18" stroke-dashoffset="18" d="M6 6L18 18"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="18;0"></animate></path></g>', 1), En = [
  zn
];
function Vn(e, t) {
  return l(), h("svg", Tn, En);
}
const An = { name: "line-md-cancel", render: Vn }, jn = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, Dn = /* @__PURE__ */ G('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"></animate></path><path stroke-dasharray="14" stroke-dashoffset="14" d="M8 12L11 15L16 10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"></animate></path></g>', 1), Mn = [
  Dn
];
function Rn(e, t) {
  return l(), h("svg", jn, Mn);
}
const Hn = { name: "line-md-confirm-circle", render: Rn }, Ln = { class: "footer" }, Qn = y({
  name: "CmDialog"
}), q = /* @__PURE__ */ y({
  ...Qn,
  props: {
    modelValue: { type: Boolean },
    isShowButtons: { type: Boolean, default: !0 },
    beforeconfrim: { type: Function, default: () => Promise.reject() }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = Ht(n, "modelValue", t), s = () => {
      n.beforeconfrim().then(() => {
        o.value = !1;
      }).catch((a) => a);
    }, d = () => {
      o.value = !1;
    };
    return (a, r) => {
      const c = j, u = We;
      return l(), k(u, E({
        modelValue: i(o),
        "onUpdate:modelValue": r[0] || (r[0] = (f) => ot(o) ? o.value = f : null)
      }, a.$attrs, {
        class: "cm-dialog",
        draggable: "",
        "close-on-click-modal": !1,
        "destroy-on-close": ""
      }), Pe({
        default: m(() => [
          B(a.$slots, "default")
        ]),
        _: 2
        /* DYNAMIC */
      }, [
        e.isShowButtons ? {
          name: "footer",
          fn: m(() => [
            g("div", Ln, [
              P(c, {
                handler: d,
                icon: i(An)
              }, {
                default: m(() => [
                  H(" 取消 ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["icon"]),
              P(c, {
                handler: s,
                type: "primary",
                icon: i(Hn)
              }, {
                default: m(() => [
                  H(" 提交 ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["icon"])
            ])
          ]),
          key: "0"
        } : void 0
      ]), 1040, ["modelValue"]);
    };
  }
}), Un = {
  install(e) {
    e.component(q.name, q);
  }
}, Wn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmDialog: q,
  default: Un
}, Symbol.toStringTag, { value: "Module" })), Zn = {
  install(e) {
    e.component(N.name, N);
  }
}, Nn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmEmpty: N,
  default: Zn
}, Symbol.toStringTag, { value: "Module" })), Gn = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, Fn = /* @__PURE__ */ g(
  "path",
  {
    fill: "currentColor",
    d: "M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z"
  },
  null,
  -1
  /* HOISTED */
), Jn = [
  Fn
];
function Xn(e, t) {
  return l(), h("svg", Gn, Jn);
}
const Yn = { name: "ic-round-keyboard-arrow-up", render: Xn }, Kn = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, qn = /* @__PURE__ */ g(
  "path",
  {
    fill: "currentColor",
    d: "M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z"
  },
  null,
  -1
  /* HOISTED */
), eo = [
  qn
];
function to(e, t) {
  return l(), h("svg", Kn, eo);
}
const no = { name: "ic-round-keyboard-arrow-down", render: to }, oo = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, ao = /* @__PURE__ */ G('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="16" stroke-dashoffset="16" d="M10.5 13.5L3 21"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="16;0"></animate></path><path stroke-dasharray="40" stroke-dashoffset="40" d="M10.7574 13.2426C8.41421 10.8995 8.41421 7.10051 10.7574 4.75736C13.1005 2.41421 16.8995 2.41421 19.2426 4.75736C21.5858 7.10051 21.5858 10.8995 19.2426 13.2426C16.8995 15.5858 13.1005 15.5858 10.7574 13.2426Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="40;0"></animate></path></g>', 1), so = [
  ao
];
function lo(e, t) {
  return l(), h("svg", oo, so);
}
const ro = { name: "line-md-search", render: lo }, co = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, io = /* @__PURE__ */ G('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="32" stroke-dashoffset="32" d="M12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12V9.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="32;0"></animate></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M6 9L3 12M6 9L9 12"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0"></animate></path></g>', 1), uo = [
  io
];
function _o(e, t) {
  return l(), h("svg", co, uo);
}
const fo = { name: "line-md-rotate-270", render: _o }, po = { class: "cm-filter" }, mo = { class: "buttons" }, ho = y({
  name: "CmFilter"
}), vo = /* @__PURE__ */ y({
  ...ho,
  props: {
    queryHandler: { type: Function },
    resetHandler: { type: Function }
  },
  setup(e) {
    const t = e, n = v(!0), o = v("50px"), s = v(null), { height: d } = Be(s), a = () => {
      n.value = !n.value, o.value = n.value ? "50px" : d.value.toString() + "px";
    };
    return (r, c) => {
      const u = no, f = Yn, _ = j, b = Ze;
      return l(), h("div", po, [
        C(" 左侧表单 "),
        g(
          "div",
          {
            class: "form",
            style: U(`height: ${i(o)}`)
          },
          [
            g(
              "div",
              {
                ref_key: "slot",
                ref: s
              },
              [
                B(r.$slots, "default", {}, void 0, !0)
              ],
              512
              /* NEED_PATCH */
            ),
            i(d) > 50 ? (l(), k(_, {
              key: 0,
              class: "form-fold_icon",
              handler: a,
              circle: "",
              text: "",
              bg: ""
            }, {
              default: m(() => [
                W(P(
                  u,
                  null,
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [ce, i(n)]
                ]),
                W(P(
                  f,
                  null,
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [ce, !i(n)]
                ])
              ]),
              _: 1
              /* STABLE */
            })) : C("v-if", !0)
          ],
          4
          /* STYLE */
        ),
        C(" 右侧按钮 "),
        g("div", mo, [
          P(b, null, {
            default: m(() => [
              P(_, {
                type: "primary",
                icon: i(ro),
                handler: t.queryHandler
              }, {
                default: m(() => [
                  H(" 查询 ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["icon", "handler"]),
              P(_, {
                icon: i(fo),
                handler: t.resetHandler
              }, {
                default: m(() => [
                  H(" 重置 ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["icon", "handler"])
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ]);
    };
  }
});
const ee = /* @__PURE__ */ D(vo, [["__scopeId", "data-v-0d8d7aba"]]), go = {
  install(e) {
    e.component(ee.name, ee);
  }
}, bo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmFilter: ee,
  default: go
}, Symbol.toStringTag, { value: "Module" }));
const yo = y({
  name: "CmInput"
}), te = /* @__PURE__ */ y({
  ...yo,
  props: {
    type: { default: "text" }
  },
  setup(e) {
    const t = e;
    return (n, o) => {
      const s = Ne, d = Ge;
      return t.type !== "number" ? (l(), k(s, E({ key: 0 }, n.$attrs, {
        type: t.type,
        clearable: ""
      }), Pe({
        _: 2
        /* DYNAMIC */
      }, [
        R(n.$slots, (a, r) => ({
          name: r,
          fn: m((c) => [
            B(n.$slots, r, J(we(c)))
          ])
        }))
      ]), 1040, ["type"])) : (l(), k(
        d,
        J(E({ key: 1 }, n.$attrs)),
        null,
        16
        /* FULL_PROPS */
      ));
    };
  }
}), Co = {
  install(e) {
    e.component(te.name, te);
  }
}, ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmInput: te,
  default: Co
}, Symbol.toStringTag, { value: "Module" }));
const Po = y({
  name: "CmRadio"
}), ne = /* @__PURE__ */ y({
  ...Po,
  props: {
    getData: null
  },
  setup(e) {
    const t = e, n = v([]);
    return t.getData().then((o) => {
      n.value = o;
    }).catch(), (o, s) => {
      const d = Fe, a = Je;
      return l(), k(
        a,
        J(we(o.$attrs)),
        {
          default: m(() => [
            (l(!0), h(
              $,
              null,
              R(i(n), ({ value: r, label: c, disabled: u }) => (l(), k(d, {
                key: r,
                label: r,
                disabled: u
              }, {
                default: m(() => [
                  H(
                    ke(c),
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
}), wo = {
  install(e) {
    e.component(ne.name, ne);
  }
}, xo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmRadio: ne,
  default: wo
}, Symbol.toStringTag, { value: "Module" }));
const Io = y({
  name: "CmSelect"
}), oe = /* @__PURE__ */ y({
  ...Io,
  props: {
    type: { default: "normal" },
    getData: null,
    params: { default: "" },
    multiple: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = v([]), s = v(!1), d = (a) => {
      s.value = !0, n.getData(a).then((r) => {
        o.value = r;
      }).finally(() => {
        s.value = !1;
      });
    };
    return d(n.params), T(
      () => n.params,
      () => {
        t("update:modelValue", null), d(n.params);
      }
    ), (a, r) => {
      const c = Xe, u = Ye, f = Ke;
      return l(), h(
        $,
        null,
        [
          C(" 普通下拉框 "),
          n.type === "normal" ? (l(), k(u, E({ key: 0 }, a.$attrs, {
            multiple: n.multiple,
            "show-checkbox": !1,
            "onUpdate:modelValue": r[0] || (r[0] = (_) => a.$emit("update:modelValue", _))
          }), {
            default: m(() => [
              (l(!0), h(
                $,
                null,
                R(i(o), (_) => (l(), k(c, {
                  key: _.value,
                  label: _.label,
                  value: _.value
                }, {
                  default: m(() => [
                    B(a.$slots, "default", { data: _ })
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
          }, 16, ["multiple"])) : n.type === "tree" ? (l(), h(
            $,
            { key: 1 },
            [
              C(" 树形下拉框 "),
              P(f, E(a.$attrs, {
                data: i(o),
                multiple: n.multiple,
                "show-checkbox": n.multiple,
                "onUpdate:modelValue": r[1] || (r[1] = (_) => a.$emit("update:modelValue", _))
              }), {
                default: m(({ data: _ }) => [
                  B(a.$slots, "default", { data: _ })
                ]),
                _: 3
                /* FORWARDED */
              }, 16, ["data", "multiple", "show-checkbox"])
            ],
            2112
            /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
          )) : C("v-if", !0)
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      );
    };
  }
}), So = {
  install(e) {
    e.component(oe.name, oe);
  }
}, Oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmSelect: oe,
  default: So
}, Symbol.toStringTag, { value: "Module" })), $o = {
  "aria-hidden": "true",
  class: "svg-icon"
}, Bo = ["xlink:href"], To = y({
  name: "CmSvg"
}), zo = /* @__PURE__ */ y({
  ...To,
  props: {
    prefix: { default: "icon" },
    name: null,
    widthScale: { default: 1 }
  },
  setup(e) {
    const t = e;
    at((s) => ({
      "88ae7cc6": i(o)
    }));
    const n = O(() => `#${t.prefix}-${t.name}`), o = O(() => t.widthScale.toString() + "em");
    return (s, d) => (l(), h("svg", $o, [
      g("use", { "xlink:href": i(n) }, null, 8, Bo)
    ]));
  }
});
const ae = /* @__PURE__ */ D(zo, [["__scopeId", "data-v-5865a63a"]]), Eo = {
  install(e) {
    e.component(ae.name, ae);
  }
}, Vo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmSvg: ae,
  default: Eo
}, Symbol.toStringTag, { value: "Module" }));
const Ao = { class: "cm-table" }, jo = {
  key: 0,
  class: "buttons"
}, Do = { class: "table" }, Mo = { class: "pager" }, Ro = y({
  name: "CmTable"
}), Ho = /* @__PURE__ */ y({
  ...Ro,
  props: {
    getData: null,
    isInitData: { type: Boolean, default: !0 },
    initParams: { default: () => ({}) },
    isUsePager: { type: Boolean, default: !0 },
    isUseCheckBox: { type: Boolean, default: !0 }
  },
  setup(e, { expose: t }) {
    const n = e, o = v([]), s = v(!1), d = v({}), a = ie({
      pageSize: 20,
      currentPage: 1
    }), r = v(0), c = v(null), u = (p, w = !0) => (p && (d.value = xe(p)), w && (a.currentPage = 1), n.isUsePager && (d.value.pager = a), s.value = !0, n.getData(d).then((S) => {
      o.value = S.datas, r.value = S.total;
    }).catch().finally(() => {
      s.value = !1;
    }));
    n.isInitData && u(n.initParams), T(
      () => a.currentPage,
      () => {
        u(null, !1);
      }
    ), T(
      () => a.pageSize,
      () => {
        u();
      }
    );
    const f = v([]), _ = (p) => {
      f.value = p;
    }, b = ie({ a: 1 });
    return t({
      update: u,
      selection: f,
      test: b
    }), (p, w) => {
      const S = he, V = ve, x = qe, z = ge;
      return W((l(), h("div", Ao, [
        C(" 操作按钮组 "),
        p.$slots.buttons ? (l(), h("div", jo, [
          B(p.$slots, "buttons", { selection: i(f) }, void 0, !0)
        ])) : C("v-if", !0),
        C(" 表格主体 "),
        g("div", Do, [
          P(V, E({
            ref_key: "table",
            ref: c
          }, p.$attrs, {
            data: i(o),
            onSelectionChange: _
          }), {
            default: m(() => [
              n.isUseCheckBox ? (l(), k(S, {
                key: 0,
                type: "selection"
              })) : C("v-if", !0),
              B(p.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["data"])
        ]),
        C(" 分页部分 "),
        g("div", Mo, [
          P(x, {
            "page-size": i(a).pageSize,
            "onUpdate:pageSize": w[0] || (w[0] = (I) => i(a).pageSize = I),
            "current-page": i(a).currentPage,
            "onUpdate:currentPage": w[1] || (w[1] = (I) => i(a).currentPage = I),
            background: "",
            layout: "total, prev, pager, next",
            "hide-on-single-page": "",
            total: i(r)
          }, null, 8, ["page-size", "current-page", "total"])
        ])
      ])), [
        [z, i(s)]
      ]);
    };
  }
});
const se = /* @__PURE__ */ D(Ho, [["__scopeId", "data-v-978dd10c"]]), Lo = {
  install(e) {
    e.component(se.name, se);
  }
}, Qo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmTable: se,
  default: Lo
}, Symbol.toStringTag, { value: "Module" })), Te = [], Uo = /* @__PURE__ */ Object.assign({ "./CmButton/index.ts": Pt, "./CmChart/index.ts": Ut, "./CmChartCard/index.ts": Bn, "./CmDialog/index.ts": Wn, "./CmEmpty/index.ts": Nn, "./CmFilter/index.ts": bo, "./CmInput/index.ts": ko, "./CmRadio/index.ts": xo, "./CmSelect/index.ts": Oo, "./CmSvg/index.ts": Vo, "./CmTable/index.ts": Qo }), Wo = async () => {
  for (const e of Object.values(Uo))
    Te.push(e.default);
};
Wo();
const Ko = {
  install(e) {
    Te.forEach((t) => {
      e.use(t);
    });
  }
};
export {
  j as CmButton,
  Z as CmChart,
  K as CmChartCard,
  q as CmDialog,
  N as CmEmpty,
  ee as CmFilter,
  te as CmInput,
  ne as CmRadio,
  oe as CmSelect,
  ae as CmSvg,
  se as CmTable,
  Ko as default
};
