import { ElButton as Ee, ElDropdownItem as Me, ElDropdownMenu as De, ElDropdown as je, ElEmpty as Ne, ElTableColumn as me, ElTable as fe, ElCard as Le, ElLoadingDirective as he, ElDialog as Fe, ElButtonGroup as He, ElInput as Ue, ElInputNumber as Re, ElOption as Qe, ElSelect as qe, ElTreeSelect as Ae, ElPagination as Ge } from "element-plus/es";
import { defineComponent as y, ref as v, openBlock as c, createBlock as x, mergeProps as V, unref as i, withCtx as h, renderSlot as z, getCurrentScope as Ze, onScopeDispose as We, getCurrentInstance as ve, onMounted as ge, nextTick as be, computed as I, watch as B, onBeforeUnmount as Je, createElementBlock as g, createElementVNode as f, normalizeStyle as H, withDirectives as U, createCommentVNode as C, toDisplayString as Ke, createVNode as $, Fragment as T, renderList as R, resolveDynamicComponent as ae, createStaticVNode as A, isRef as Xe, createSlots as ye, createTextVNode as Q, vShow as se, normalizeProps as le, guardReactiveProps as Ye, useCssVars as et, reactive as re } from "vue";
import { _debounce as tt, _throttle as nt, _deepClone as Ce } from "utils";
import * as $e from "echarts/core";
import { BarChart as ot, LineChart as at, PieChart as st } from "echarts/charts";
import { TitleComponent as lt, TooltipComponent as rt, GridComponent as it, DatasetComponent as ct, TransformComponent as dt, LegendComponent as ut, ToolboxComponent as _t } from "echarts/components";
import { LabelLayout as pt, UniversalTransition as mt } from "echarts/features";
import { CanvasRenderer as ft } from "echarts/renderers";
const ht = y({
  name: "cm-button"
}), vt = /* @__PURE__ */ y({
  ...ht,
  props: {
    handler: null
  },
  setup(e) {
    const t = e, n = v(!1), o = tt(async (s) => {
      n.value = !0;
      try {
        await t.handler(s);
      } catch {
      }
      n.value = !1;
    });
    return (s, d) => {
      const a = Ee;
      return c(), x(a, V(s.$attrs, {
        loading: i(n),
        onClick: i(o)
      }), {
        default: h(() => [
          z(s.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["loading", "onClick"]);
    };
  }
});
const N = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, D = /* @__PURE__ */ N(vt, [["__scopeId", "data-v-68fd51f0"]]), gt = {
  install(e) {
    e.component(D.name, D);
  }
}, bt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmButton: D,
  default: gt
}, Symbol.toStringTag, { value: "Module" }));
$e.use([
  lt,
  rt,
  it,
  ct,
  dt,
  ut,
  _t,
  ot,
  at,
  st,
  pt,
  mt,
  ft
]);
const yt = $e;
var ie;
const L = typeof window < "u", Ct = (e) => typeof e < "u", $t = (e) => typeof e == "function", G = () => {
};
L && ((ie = window == null ? void 0 : window.navigator) != null && ie.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function wt(e) {
  return typeof e == "function" ? e() : i(e);
}
function xt(e) {
  return e;
}
function we(e) {
  return Ze() ? (We(e), !0) : !1;
}
function Ot(e, t = !0) {
  ve() ? ge(e) : t ? e() : be(e);
}
function M(e) {
  var t;
  const n = wt(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const oe = L ? window : void 0;
L && window.document;
L && window.navigator;
L && window.location;
function xe(e, t = !1) {
  const n = v(), o = () => n.value = Boolean(e());
  return o(), Ot(o, t), n;
}
function kt(e) {
  return JSON.parse(JSON.stringify(e));
}
const Z = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, W = "__vueuse_ssr_handlers__";
Z[W] = Z[W] || {};
Z[W];
var ce = Object.getOwnPropertySymbols, St = Object.prototype.hasOwnProperty, It = Object.prototype.propertyIsEnumerable, zt = (e, t) => {
  var n = {};
  for (var o in e)
    St.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && ce)
    for (var o of ce(e))
      t.indexOf(o) < 0 && It.call(e, o) && (n[o] = e[o]);
  return n;
};
function Oe(e, t, n = {}) {
  const o = n, { window: s = oe } = o, d = zt(o, ["window"]);
  let a;
  const r = xe(() => s && "ResizeObserver" in s), l = () => {
    a && (a.disconnect(), a = void 0);
  }, u = B(() => M(e), (_) => {
    l(), r.value && s && _ && (a = new ResizeObserver(t), a.observe(_, d));
  }, { immediate: !0, flush: "post" }), p = () => {
    l(), u();
  };
  return we(p), {
    isSupported: r,
    stop: p
  };
}
function ke(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: o = oe, box: s = "content-box" } = n, d = I(() => {
    var l, u;
    return (u = (l = M(e)) == null ? void 0 : l.namespaceURI) == null ? void 0 : u.includes("svg");
  }), a = v(t.width), r = v(t.height);
  return Oe(e, ([l]) => {
    const u = s === "border-box" ? l.borderBoxSize : s === "content-box" ? l.contentBoxSize : l.devicePixelContentBoxSize;
    if (o && d.value) {
      const p = M(e);
      if (p) {
        const _ = o.getComputedStyle(p);
        a.value = parseFloat(_.width), r.value = parseFloat(_.height);
      }
    } else if (u) {
      const p = Array.isArray(u) ? u : [u];
      a.value = p.reduce((_, { inlineSize: b }) => _ + b, 0), r.value = p.reduce((_, { blockSize: b }) => _ + b, 0);
    } else
      a.value = l.contentRect.width, r.value = l.contentRect.height;
  }, n), B(() => M(e), (l) => {
    a.value = l ? t.width : 0, r.value = l ? t.height : 0;
  }), {
    width: a,
    height: r
  };
}
function Bt(e, t, n = {}) {
  const {
    root: o,
    rootMargin: s = "0px",
    threshold: d = 0.1,
    window: a = oe
  } = n, r = xe(() => a && "IntersectionObserver" in a);
  let l = G;
  const u = r.value ? B(() => ({
    el: M(e),
    root: M(o)
  }), ({ el: _, root: b }) => {
    if (l(), !_)
      return;
    const m = new IntersectionObserver(t, {
      root: b,
      rootMargin: s,
      threshold: d
    });
    m.observe(_), l = () => {
      m.disconnect(), l = G;
    };
  }, { immediate: !0, flush: "post" }) : G, p = () => {
    l(), u();
  };
  return we(p), {
    isSupported: r,
    stop: p
  };
}
var de;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(de || (de = {}));
var Pt = Object.defineProperty, ue = Object.getOwnPropertySymbols, Tt = Object.prototype.hasOwnProperty, Vt = Object.prototype.propertyIsEnumerable, _e = (e, t, n) => t in e ? Pt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Et = (e, t) => {
  for (var n in t || (t = {}))
    Tt.call(t, n) && _e(e, n, t[n]);
  if (ue)
    for (var n of ue(t))
      Vt.call(t, n) && _e(e, n, t[n]);
  return e;
};
const Mt = {
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
Et({
  linear: xt
}, Mt);
function Dt(e, t, n, o = {}) {
  var s, d, a;
  const {
    clone: r = !1,
    passive: l = !1,
    eventName: u,
    deep: p = !1,
    defaultValue: _
  } = o, b = ve(), m = n || (b == null ? void 0 : b.emit) || ((s = b == null ? void 0 : b.$emit) == null ? void 0 : s.bind(b)) || ((a = (d = b == null ? void 0 : b.proxy) == null ? void 0 : d.$emit) == null ? void 0 : a.bind(b == null ? void 0 : b.proxy));
  let w = u;
  t || (t = "modelValue"), w = u || w || `update:${t.toString()}`;
  const S = (O) => r ? $t(r) ? r(O) : kt(O) : O, E = () => Ct(e[t]) ? S(e[t]) : _;
  if (l) {
    const O = E(), P = v(O);
    return B(() => e[t], (k) => P.value = S(k)), B(P, (k) => {
      (k !== e[t] || p) && m(w, k);
    }, { deep: p }), P;
  } else
    return I({
      get() {
        return E();
      },
      set(O) {
        m(w, O);
      }
    });
}
const jt = y({
  name: "CmChart"
}), q = /* @__PURE__ */ y({
  ...jt,
  props: {
    options: null
  },
  setup(e, { expose: t }) {
    const n = e, o = v(null);
    let s = null, d;
    const { height: a, width: r } = ke(o), l = v(null), { stop: u } = Bt(o, ([{ isIntersecting: p }]) => {
      p && (s = yt.init(l.value), d = nt(s.resize, 500, !1), Oe(o, () => d()), s.setOption(n.options), u());
    });
    return Je(() => {
      s.dispose();
    }), t({
      chartInstance: s
    }), (p, _) => (c(), g(
      "div",
      {
        ref_key: "cmChart",
        ref: o,
        class: "cm-chart"
      },
      [
        f(
          "div",
          {
            id: "chart",
            ref_key: "chart",
            ref: l,
            class: "chart",
            style: H(`width: ${i(r)}px;height: ${i(a)}px;`)
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
}), Nt = {
  install(e) {
    e.component(q.name, q);
  }
}, Lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmChart: q,
  default: Nt
}, Symbol.toStringTag, { value: "Module" }));
const Ft = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, Ht = /* @__PURE__ */ f(
  "path",
  {
    fill: "currentColor",
    d: "M12 20q-3.35 0-5.675-2.325T4 12q0-3.35 2.325-5.675T12 4q1.725 0 3.3.712T18 6.75V4h2v7h-7V9h4.2q-.8-1.4-2.188-2.2T12 6Q9.5 6 7.75 7.75T6 12q0 2.5 1.75 4.25T12 18q1.925 0 3.475-1.1T17.65 14h2.1q-.7 2.65-2.85 4.325T12 20Z"
  },
  null,
  -1
  /* HOISTED */
), Ut = [
  Ht
];
function Rt(e, t) {
  return c(), g("svg", Ft, Ut);
}
const Qt = { name: "material-symbols-refresh", render: Rt };
const qt = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, At = /* @__PURE__ */ f(
  "path",
  {
    fill: "currentColor",
    d: "M4 20V9h4v11Zm6 0V4h4v16Zm6 0v-7h4v7Z"
  },
  null,
  -1
  /* HOISTED */
), Gt = [
  At
];
function Zt(e, t) {
  return c(), g("svg", qt, Gt);
}
const Wt = { name: "material-symbols-bar-chart-sharp", render: Zt }, Jt = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, Kt = /* @__PURE__ */ f(
  "path",
  {
    fill: "currentColor",
    d: "m3.5 18.5l6-6l4 4L22 6.92L20.59 5.5l-7.09 8l-4-4L2 17l1.5 1.5Z"
  },
  null,
  -1
  /* HOISTED */
), Xt = [
  Kt
];
function Yt(e, t) {
  return c(), g("svg", Jt, Xt);
}
const en = { name: "mdi-chart-line-variant", render: Yt }, tn = {
  viewBox: "0 0 1024 1024",
  width: "1.2em",
  height: "1.2em"
}, nn = /* @__PURE__ */ f(
  "path",
  {
    fill: "currentColor",
    d: "M448 68.48v64.832A384.128 384.128 0 0 0 512 896a384.128 384.128 0 0 0 378.688-320h64.768A448.128 448.128 0 0 1 64 512A448.128 448.128 0 0 1 448 68.48z"
  },
  null,
  -1
  /* HOISTED */
), on = /* @__PURE__ */ f(
  "path",
  {
    fill: "currentColor",
    d: "M576 97.28V448h350.72A384.064 384.064 0 0 0 576 97.28zM512 64V33.152A448 448 0 0 1 990.848 512H512V64z"
  },
  null,
  -1
  /* HOISTED */
), an = [
  nn,
  on
];
function sn(e, t) {
  return c(), g("svg", tn, an);
}
const ln = { name: "ep-pie-chart", render: sn }, rn = {
  viewBox: "0 0 16 16",
  width: "1.2em",
  height: "1.2em"
}, cn = /* @__PURE__ */ f(
  "path",
  {
    fill: "currentColor",
    d: "M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"
  },
  null,
  -1
  /* HOISTED */
), dn = [
  cn
];
function un(e, t) {
  return c(), g("svg", rn, dn);
}
const _n = { name: "bi-grid-3x3-gap-fill", render: un }, pn = {
  legend: { bottom: 0, type: "scroll" },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  grid: { top: 30, right: 70, bottom: 70, left: 70 }
}, pe = {
  bar: Wt,
  line: en,
  pie: ln,
  grid: _n
}, mn = { class: "header" }, fn = { class: "header-left" }, hn = { class: "header-left-title" }, vn = { class: "header-left-dropdown" }, gn = { class: "header-right" }, bn = y({
  name: "CmChartCard"
}), yn = /* @__PURE__ */ y({
  ...bn,
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
      var m, w;
      (w = (m = n.value) == null ? void 0 : m.chartInstance) == null || w.update();
    }, s = v(!1), d = v([]), a = () => (s.value = !0, t.getData().then((m) => {
      d.value = m ?? [], o();
    }).finally(() => {
      s.value = !1;
    }));
    ge(() => {
      t.isInitData && a();
    });
    const r = I(() => d.value.length <= 1), l = I(() => [...t.configs.map(({ type: m }) => m), "grid"]), u = v(0), p = I(() => pe[l.value[u.value]]), _ = I(() => Object.assign(
      Ce(pn),
      t.publicConfig,
      t.configs[u.value] ? t.configs[u.value].config : {},
      {
        dataset: {
          source: d.value
        }
      }
    )), b = (m) => {
      u.value = m, be(() => {
        o();
      });
    };
    return (m, w) => {
      const S = Me, E = De, O = je, P = Qt, k = D, Ie = Ne, ze = q, Be = me, Pe = fe, Te = Le, Ve = he;
      return U((c(), x(Te, { class: "cm-chart-card" }, {
        header: h(() => [
          f("div", mn, [
            f("div", fn, [
              C(" 标题 "),
              f(
                "div",
                hn,
                Ke(t.title),
                1
                /* TEXT */
              ),
              C(" 类型选择下拉 "),
              f("div", vn, [
                $(O, {
                  trigger: "click",
                  onCommand: b
                }, {
                  dropdown: h(() => [
                    $(E, null, {
                      default: h(() => [
                        (c(!0), g(
                          T,
                          null,
                          R(i(l), (j, F) => (c(), x(S, {
                            key: j,
                            command: F,
                            disabled: F === i(u)
                          }, {
                            default: h(() => [
                              (c(), x(ae(i(pe)[j]), { style: { "font-size": "18px" } }))
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
                  default: h(() => [
                    (c(), x(ae(i(p)), { class: "icon" }))
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])
            ]),
            C(" 右侧操作区 "),
            f("div", gn, [
              $(k, {
                text: "",
                circle: "",
                handler: a
              }, {
                default: h(() => [
                  $(P)
                ]),
                _: 1
                /* STABLE */
              })
            ])
          ])
        ]),
        default: h(() => [
          C(" 卡片主体 "),
          f(
            "div",
            {
              class: "card-body",
              style: H(`height: ${t.height}px`)
            },
            [
              C(" 空 "),
              i(r) ? (c(), x(Ie, {
                key: 0,
                description: "No Data"
              })) : i(u) < i(l).length - 1 ? (c(), g(
                T,
                { key: 1 },
                [
                  C(" 图表 "),
                  $(ze, {
                    ref_key: "refChart",
                    ref: n,
                    options: i(_),
                    style: H(`height: ${t.height}px`)
                  }, null, 8, ["options", "style"])
                ],
                2112
                /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
              )) : (c(), g(
                T,
                { key: 2 },
                [
                  C(" 表格 "),
                  $(Pe, {
                    data: i(d).slice(1)
                  }, {
                    default: h(() => [
                      (c(!0), g(
                        T,
                        null,
                        R(i(d)[0], (j, F) => (c(), x(Be, {
                          key: j,
                          prop: F.toString(),
                          label: j
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
        [Ve, i(s)]
      ]);
    };
  }
});
const J = /* @__PURE__ */ N(yn, [["__scopeId", "data-v-23977528"]]), Cn = {
  install(e) {
    e.component(J.name, J);
  }
}, $n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmChartCard: J,
  default: Cn
}, Symbol.toStringTag, { value: "Module" }));
const wn = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, xn = /* @__PURE__ */ A('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M5.63604 5.63603C9.15076 2.12131 14.8492 2.12131 18.364 5.63603C21.8787 9.15075 21.8787 14.8492 18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C2.12132 14.8492 2.12132 9.15075 5.63604 5.63603Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"></animate></path><path stroke-dasharray="18" stroke-dashoffset="18" d="M6 6L18 18"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="18;0"></animate></path></g>', 1), On = [
  xn
];
function kn(e, t) {
  return c(), g("svg", wn, On);
}
const Sn = { name: "line-md-cancel", render: kn }, In = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, zn = /* @__PURE__ */ A('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"></animate></path><path stroke-dasharray="14" stroke-dashoffset="14" d="M8 12L11 15L16 10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"></animate></path></g>', 1), Bn = [
  zn
];
function Pn(e, t) {
  return c(), g("svg", In, Bn);
}
const Tn = { name: "line-md-confirm-circle", render: Pn }, Vn = { class: "footer" }, En = y({
  name: "CmDialog"
}), K = /* @__PURE__ */ y({
  ...En,
  props: {
    modelValue: { type: Boolean },
    isShowButtons: { type: Boolean, default: !0 },
    beforeconfrim: { type: Function, default: () => Promise.reject() }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = Dt(n, "modelValue", t), s = () => {
      n.beforeconfrim().then(() => {
        o.value = !1;
      }).catch((a) => a);
    }, d = () => {
      o.value = !1;
    };
    return (a, r) => {
      const l = D, u = Fe;
      return c(), x(u, V({
        modelValue: i(o),
        "onUpdate:modelValue": r[0] || (r[0] = (p) => Xe(o) ? o.value = p : null)
      }, a.$attrs, {
        class: "cm-dialog",
        draggable: "",
        "close-on-click-modal": !1,
        "destroy-on-close": ""
      }), ye({
        default: h(() => [
          z(a.$slots, "default")
        ]),
        _: 2
        /* DYNAMIC */
      }, [
        e.isShowButtons ? {
          name: "footer",
          fn: h(() => [
            f("div", Vn, [
              $(l, {
                handler: d,
                icon: i(Sn)
              }, {
                default: h(() => [
                  Q(" 取消 ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["icon"]),
              $(l, {
                handler: s,
                type: "primary",
                icon: i(Tn)
              }, {
                default: h(() => [
                  Q(" 提交 ")
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
}), Mn = {
  install(e) {
    e.component(K.name, K);
  }
}, Dn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmDialog: K,
  default: Mn
}, Symbol.toStringTag, { value: "Module" })), jn = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, Nn = /* @__PURE__ */ f(
  "path",
  {
    fill: "currentColor",
    d: "M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z"
  },
  null,
  -1
  /* HOISTED */
), Ln = [
  Nn
];
function Fn(e, t) {
  return c(), g("svg", jn, Ln);
}
const Hn = { name: "ic-round-keyboard-arrow-up", render: Fn }, Un = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, Rn = /* @__PURE__ */ f(
  "path",
  {
    fill: "currentColor",
    d: "M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z"
  },
  null,
  -1
  /* HOISTED */
), Qn = [
  Rn
];
function qn(e, t) {
  return c(), g("svg", Un, Qn);
}
const An = { name: "ic-round-keyboard-arrow-down", render: qn }, Gn = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, Zn = /* @__PURE__ */ A('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="16" stroke-dashoffset="16" d="M10.5 13.5L3 21"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="16;0"></animate></path><path stroke-dasharray="40" stroke-dashoffset="40" d="M10.7574 13.2426C8.41421 10.8995 8.41421 7.10051 10.7574 4.75736C13.1005 2.41421 16.8995 2.41421 19.2426 4.75736C21.5858 7.10051 21.5858 10.8995 19.2426 13.2426C16.8995 15.5858 13.1005 15.5858 10.7574 13.2426Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="40;0"></animate></path></g>', 1), Wn = [
  Zn
];
function Jn(e, t) {
  return c(), g("svg", Gn, Wn);
}
const Kn = { name: "line-md-search", render: Jn }, Xn = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, Yn = /* @__PURE__ */ A('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="32" stroke-dashoffset="32" d="M12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12V9.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="32;0"></animate></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M6 9L3 12M6 9L9 12"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0"></animate></path></g>', 1), eo = [
  Yn
];
function to(e, t) {
  return c(), g("svg", Xn, eo);
}
const no = { name: "line-md-rotate-270", render: to }, oo = { class: "cm-filter" }, ao = { class: "buttons" }, so = y({
  name: "CmFilter"
}), lo = /* @__PURE__ */ y({
  ...so,
  props: {
    queryHandler: { type: Function },
    resetHandler: { type: Function }
  },
  setup(e) {
    const t = e, n = v(!0), o = v("50px"), s = v(null), { height: d } = ke(s), a = () => {
      n.value = !n.value, o.value = n.value ? "50px" : d.value.toString() + "px";
    };
    return (r, l) => {
      const u = An, p = Hn, _ = D, b = He;
      return c(), g("div", oo, [
        C(" 左侧表单 "),
        f(
          "div",
          {
            class: "form",
            style: H(`height: ${i(o)}`)
          },
          [
            f(
              "div",
              {
                ref_key: "slot",
                ref: s
              },
              [
                z(r.$slots, "default", {}, void 0, !0)
              ],
              512
              /* NEED_PATCH */
            ),
            i(d) > 50 ? (c(), x(_, {
              key: 0,
              class: "form-fold_icon",
              handler: a,
              circle: "",
              text: "",
              bg: ""
            }, {
              default: h(() => [
                U($(
                  u,
                  null,
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [se, i(n)]
                ]),
                U($(
                  p,
                  null,
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [se, !i(n)]
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
        f("div", ao, [
          $(b, null, {
            default: h(() => [
              $(_, {
                type: "primary",
                icon: i(Kn),
                handler: t.queryHandler
              }, {
                default: h(() => [
                  Q(" 查询 ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["icon", "handler"]),
              $(_, {
                icon: i(no),
                handler: t.resetHandler
              }, {
                default: h(() => [
                  Q(" 重置 ")
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
const X = /* @__PURE__ */ N(lo, [["__scopeId", "data-v-0d8d7aba"]]), ro = {
  install(e) {
    e.component(X.name, X);
  }
}, io = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmFilter: X,
  default: ro
}, Symbol.toStringTag, { value: "Module" }));
const co = y({
  name: "CmInput"
}), Y = /* @__PURE__ */ y({
  ...co,
  props: {
    type: { default: "text" }
  },
  setup(e) {
    const t = e;
    return (n, o) => {
      const s = Ue, d = Re;
      return t.type !== "number" ? (c(), x(s, V({ key: 0 }, n.$attrs, {
        type: t.type,
        clearable: ""
      }), ye({
        _: 2
        /* DYNAMIC */
      }, [
        R(n.$slots, (a, r) => ({
          name: r,
          fn: h((l) => [
            z(n.$slots, r, le(Ye(l)))
          ])
        }))
      ]), 1040, ["type"])) : (c(), x(
        d,
        le(V({ key: 1 }, n.$attrs)),
        null,
        16
        /* FULL_PROPS */
      ));
    };
  }
}), uo = {
  install(e) {
    e.component(Y.name, Y);
  }
}, _o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmInput: Y,
  default: uo
}, Symbol.toStringTag, { value: "Module" }));
const po = y({
  name: "CmSelect"
}), ee = /* @__PURE__ */ y({
  ...po,
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
    return d(n.params), B(
      () => n.params,
      () => {
        t("update:modelValue", null), d(n.params);
      }
    ), (a, r) => {
      const l = Qe, u = qe, p = Ae;
      return c(), g(
        T,
        null,
        [
          C(" 普通下拉框 "),
          n.type === "normal" ? (c(), x(u, V({ key: 0 }, a.$attrs, {
            multiple: n.multiple,
            "show-checkbox": !1,
            "onUpdate:modelValue": r[0] || (r[0] = (_) => a.$emit("update:modelValue", _))
          }), {
            default: h(() => [
              (c(!0), g(
                T,
                null,
                R(i(o), (_) => (c(), x(l, {
                  key: _.value,
                  label: _.label,
                  value: _.value
                }, {
                  default: h(() => [
                    z(a.$slots, "default", { data: _ })
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
          }, 16, ["multiple"])) : n.type === "tree" ? (c(), g(
            T,
            { key: 1 },
            [
              C(" 树形下拉框 "),
              $(p, V(a.$attrs, {
                data: i(o),
                multiple: n.multiple,
                "show-checkbox": n.multiple,
                "onUpdate:modelValue": r[1] || (r[1] = (_) => a.$emit("update:modelValue", _))
              }), {
                default: h(({ data: _ }) => [
                  z(a.$slots, "default", { data: _ })
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
}), mo = {
  install(e) {
    e.component(ee.name, ee);
  }
}, fo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmSelect: ee,
  default: mo
}, Symbol.toStringTag, { value: "Module" })), ho = {
  "aria-hidden": "true",
  class: "svg-icon"
}, vo = ["xlink:href"], go = y({
  name: "CmSvg"
}), bo = /* @__PURE__ */ y({
  ...go,
  props: {
    prefix: { default: "icon" },
    name: null,
    widthScale: { default: 1 }
  },
  setup(e) {
    const t = e;
    et((s) => ({
      "88ae7cc6": i(o)
    }));
    const n = I(() => `#${t.prefix}-${t.name}`), o = I(() => t.widthScale.toString() + "em");
    return (s, d) => (c(), g("svg", ho, [
      f("use", { "xlink:href": i(n) }, null, 8, vo)
    ]));
  }
});
const te = /* @__PURE__ */ N(bo, [["__scopeId", "data-v-5865a63a"]]), yo = {
  install(e) {
    e.component(te.name, te);
  }
}, Co = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmSvg: te,
  default: yo
}, Symbol.toStringTag, { value: "Module" }));
const $o = { class: "cm-table" }, wo = { class: "buttons" }, xo = { class: "table" }, Oo = { class: "pager" }, ko = y({
  name: "CmTable"
}), So = /* @__PURE__ */ y({
  ...ko,
  props: {
    getData: null,
    isInitData: { type: Boolean, default: !0 },
    initParams: { default: () => ({}) },
    isUsePager: { type: Boolean, default: !0 },
    isUseCheckBox: { type: Boolean, default: !0 }
  },
  setup(e, { expose: t }) {
    const n = e, o = v([]), s = v(!1), d = v({}), a = re({
      pageSize: 20,
      currentPage: 1
    }), r = v(0), l = v(null), u = (m, w = !0) => (m && (d.value = Ce(m)), w && (a.currentPage = 1), n.isUsePager && (d.value.pager = a), s.value = !0, n.getData(d).then((S) => {
      o.value = S.datas, r.value = S.total;
    }).catch().finally(() => {
      s.value = !1;
    }));
    n.isInitData && u(n.initParams), B(
      () => a.currentPage,
      () => {
        u(null, !1);
      }
    ), B(
      () => a.pageSize,
      () => {
        u();
      }
    );
    const p = v([]), _ = (m) => {
      p.value = m;
    }, b = re({ a: 1 });
    return t({
      update: u,
      selection: p,
      test: b
    }), (m, w) => {
      const S = me, E = fe, O = Ge, P = he;
      return U((c(), g("div", $o, [
        C(" 操作按钮组 "),
        f("div", wo, [
          z(m.$slots, "buttons", { selection: i(p) }, void 0, !0)
        ]),
        C(" 表格主体 "),
        f("div", xo, [
          $(E, V({
            ref_key: "table",
            ref: l
          }, m.$attrs, {
            data: i(o),
            onSelectionChange: _
          }), {
            default: h(() => [
              n.isUseCheckBox ? (c(), x(S, {
                key: 0,
                type: "selection"
              })) : C("v-if", !0),
              z(m.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["data"])
        ]),
        C(" 分页部分 "),
        f("div", Oo, [
          $(O, {
            "page-size": i(a).pageSize,
            "onUpdate:pageSize": w[0] || (w[0] = (k) => i(a).pageSize = k),
            "current-page": i(a).currentPage,
            "onUpdate:currentPage": w[1] || (w[1] = (k) => i(a).currentPage = k),
            background: "",
            layout: "total, prev, pager, next",
            "hide-on-single-page": "",
            total: i(r)
          }, null, 8, ["page-size", "current-page", "total"])
        ])
      ])), [
        [P, i(s)]
      ]);
    };
  }
});
const ne = /* @__PURE__ */ N(So, [["__scopeId", "data-v-175e1406"]]), Io = {
  install(e) {
    e.component(ne.name, ne);
  }
}, zo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmTable: ne,
  default: Io
}, Symbol.toStringTag, { value: "Module" })), Se = [], Bo = /* @__PURE__ */ Object.assign({ "./CmButton/index.ts": bt, "./CmChart/index.ts": Lt, "./CmChartCard/index.ts": $n, "./CmDialog/index.ts": Dn, "./CmFilter/index.ts": io, "./CmInput/index.ts": _o, "./CmSelect/index.ts": fo, "./CmSvg/index.ts": Co, "./CmTable/index.ts": zo }), Po = async () => {
  for (const e of Object.values(Bo))
    Se.push(e.default);
};
Po();
const Lo = {
  install(e) {
    Se.forEach((t) => {
      e.use(t);
    });
  }
};
export {
  D as CmButton,
  q as CmChart,
  K as CmDialog,
  X as CmFilter,
  Y as CmInput,
  ee as CmSelect,
  te as CmSvg,
  ne as CmTable,
  Lo as default
};
