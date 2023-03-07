import { ElButton as Ae, ElEmpty as je, ElDropdownItem as De, ElDropdownMenu as Me, ElDropdown as He, ElTableColumn as me, ElTable as he, ElCard as Le, ElLoadingDirective as ve, ElDialog as Qe, ElButtonGroup as Re, ElInput as Ue, ElInputNumber as We, ElOption as Ze, ElSelect as Ne, ElTreeSelect as Fe, ElPagination as Ge } from "element-plus/es";
import { defineComponent as y, ref as v, openBlock as i, createBlock as P, mergeProps as V, unref as c, withCtx as h, renderSlot as B, getCurrentScope as Je, onScopeDispose as Xe, getCurrentInstance as ge, onMounted as be, nextTick as ye, computed as O, watch as T, onBeforeUnmount as Ye, createElementBlock as g, createElementVNode as m, normalizeStyle as Q, withDirectives as R, createCommentVNode as C, toDisplayString as Ke, createVNode as k, Fragment as z, renderList as U, resolveDynamicComponent as se, createStaticVNode as F, isRef as qe, createSlots as Ce, createTextVNode as W, vShow as le, normalizeProps as re, guardReactiveProps as et, useCssVars as tt, reactive as ce } from "vue";
import { _debounce as nt, _throttle as ot, _deepClone as ke } from "utils";
import * as we from "echarts/core";
import { BarChart as at, LineChart as st, PieChart as lt } from "echarts/charts";
import { TitleComponent as rt, TooltipComponent as ct, GridComponent as it, DatasetComponent as ut, TransformComponent as dt, LegendComponent as _t, ToolboxComponent as ft } from "echarts/components";
import { LabelLayout as pt, UniversalTransition as mt } from "echarts/features";
import { CanvasRenderer as ht } from "echarts/renderers";
const vt = y({
  name: "cm-button"
}), gt = /* @__PURE__ */ y({
  ...vt,
  props: {
    handler: null
  },
  setup(e) {
    const t = e, n = v(!1), o = nt(async (s) => {
      n.value = !0;
      try {
        await t.handler(s);
      } catch {
      }
      n.value = !1;
    });
    return (s, u) => {
      const a = Ae;
      return i(), P(a, V(s.$attrs, {
        loading: c(n),
        onClick: c(o)
      }), {
        default: h(() => [
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
}, j = /* @__PURE__ */ D(gt, [["__scopeId", "data-v-68fd51f0"]]), bt = {
  install(e) {
    e.component(j.name, j);
  }
}, yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmButton: j,
  default: bt
}, Symbol.toStringTag, { value: "Module" }));
we.use([
  rt,
  ct,
  it,
  ut,
  dt,
  _t,
  ft,
  at,
  st,
  lt,
  pt,
  mt,
  ht
]);
const Ct = we;
var ie;
const H = typeof window < "u", kt = (e) => typeof e < "u", wt = (e) => typeof e == "function", G = () => {
};
H && ((ie = window == null ? void 0 : window.navigator) != null && ie.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Pt(e) {
  return typeof e == "function" ? e() : c(e);
}
function xt(e) {
  return e;
}
function Pe(e) {
  return Je() ? (Xe(e), !0) : !1;
}
function It(e, t = !0) {
  ge() ? be(e) : t ? e() : ye(e);
}
function A(e) {
  var t;
  const n = Pt(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const ae = H ? window : void 0;
H && window.document;
H && window.navigator;
H && window.location;
function xe(e, t = !1) {
  const n = v(), o = () => n.value = Boolean(e());
  return o(), It(o, t), n;
}
function St(e) {
  return JSON.parse(JSON.stringify(e));
}
const J = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, X = "__vueuse_ssr_handlers__";
J[X] = J[X] || {};
J[X];
var ue = Object.getOwnPropertySymbols, Ot = Object.prototype.hasOwnProperty, Bt = Object.prototype.propertyIsEnumerable, Tt = (e, t) => {
  var n = {};
  for (var o in e)
    Ot.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && ue)
    for (var o of ue(e))
      t.indexOf(o) < 0 && Bt.call(e, o) && (n[o] = e[o]);
  return n;
};
function Ie(e, t, n = {}) {
  const o = n, { window: s = ae } = o, u = Tt(o, ["window"]);
  let a;
  const r = xe(() => s && "ResizeObserver" in s), l = () => {
    a && (a.disconnect(), a = void 0);
  }, d = T(() => A(e), (_) => {
    l(), r.value && s && _ && (a = new ResizeObserver(t), a.observe(_, u));
  }, { immediate: !0, flush: "post" }), f = () => {
    l(), d();
  };
  return Pe(f), {
    isSupported: r,
    stop: f
  };
}
function Se(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: o = ae, box: s = "content-box" } = n, u = O(() => {
    var l, d;
    return (d = (l = A(e)) == null ? void 0 : l.namespaceURI) == null ? void 0 : d.includes("svg");
  }), a = v(t.width), r = v(t.height);
  return Ie(e, ([l]) => {
    const d = s === "border-box" ? l.borderBoxSize : s === "content-box" ? l.contentBoxSize : l.devicePixelContentBoxSize;
    if (o && u.value) {
      const f = A(e);
      if (f) {
        const _ = o.getComputedStyle(f);
        a.value = parseFloat(_.width), r.value = parseFloat(_.height);
      }
    } else if (d) {
      const f = Array.isArray(d) ? d : [d];
      a.value = f.reduce((_, { inlineSize: b }) => _ + b, 0), r.value = f.reduce((_, { blockSize: b }) => _ + b, 0);
    } else
      a.value = l.contentRect.width, r.value = l.contentRect.height;
  }, n), T(() => A(e), (l) => {
    a.value = l ? t.width : 0, r.value = l ? t.height : 0;
  }), {
    width: a,
    height: r
  };
}
function $t(e, t, n = {}) {
  const {
    root: o,
    rootMargin: s = "0px",
    threshold: u = 0.1,
    window: a = ae
  } = n, r = xe(() => a && "IntersectionObserver" in a);
  let l = G;
  const d = r.value ? T(() => ({
    el: A(e),
    root: A(o)
  }), ({ el: _, root: b }) => {
    if (l(), !_)
      return;
    const p = new IntersectionObserver(t, {
      root: b,
      rootMargin: s,
      threshold: u
    });
    p.observe(_), l = () => {
      p.disconnect(), l = G;
    };
  }, { immediate: !0, flush: "post" }) : G, f = () => {
    l(), d();
  };
  return Pe(f), {
    isSupported: r,
    stop: f
  };
}
var de;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(de || (de = {}));
var zt = Object.defineProperty, _e = Object.getOwnPropertySymbols, Vt = Object.prototype.hasOwnProperty, Et = Object.prototype.propertyIsEnumerable, fe = (e, t, n) => t in e ? zt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, At = (e, t) => {
  for (var n in t || (t = {}))
    Vt.call(t, n) && fe(e, n, t[n]);
  if (_e)
    for (var n of _e(t))
      Et.call(t, n) && fe(e, n, t[n]);
  return e;
};
const jt = {
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
At({
  linear: xt
}, jt);
function Dt(e, t, n, o = {}) {
  var s, u, a;
  const {
    clone: r = !1,
    passive: l = !1,
    eventName: d,
    deep: f = !1,
    defaultValue: _
  } = o, b = ge(), p = n || (b == null ? void 0 : b.emit) || ((s = b == null ? void 0 : b.$emit) == null ? void 0 : s.bind(b)) || ((a = (u = b == null ? void 0 : b.proxy) == null ? void 0 : u.$emit) == null ? void 0 : a.bind(b == null ? void 0 : b.proxy));
  let w = d;
  t || (t = "modelValue"), w = d || w || `update:${t.toString()}`;
  const S = (x) => r ? wt(r) ? r(x) : St(x) : x, E = () => kt(e[t]) ? S(e[t]) : _;
  if (l) {
    const x = E(), $ = v(x);
    return T(() => e[t], (I) => $.value = S(I)), T($, (I) => {
      (I !== e[t] || f) && p(w, I);
    }, { deep: f }), $;
  } else
    return O({
      get() {
        return E();
      },
      set(x) {
        p(w, x);
      }
    });
}
const Mt = y({
  name: "CmChart"
}), Z = /* @__PURE__ */ y({
  ...Mt,
  props: {
    options: null
  },
  setup(e, { expose: t }) {
    const n = e, o = v(null);
    let s = null, u;
    const { height: a, width: r } = Se(o), l = v(null), { stop: d } = $t(o, ([{ isIntersecting: f }]) => {
      f && (s = Ct.init(l.value), u = ot(s.resize, 500, !1), Ie(o, () => u()), s.setOption(n.options), d());
    });
    return Ye(() => {
      s.dispose();
    }), t({
      chartInstance: s
    }), (f, _) => (i(), g(
      "div",
      {
        ref_key: "cmChart",
        ref: o,
        class: "cm-chart"
      },
      [
        m(
          "div",
          {
            id: "chart",
            ref_key: "chart",
            ref: l,
            class: "chart",
            style: Q(`width: ${c(r)}px;height: ${c(a)}px;`)
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
}), Ht = {
  install(e) {
    e.component(Z.name, Z);
  }
}, Lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmChart: Z,
  default: Ht
}, Symbol.toStringTag, { value: "Module" }));
const Qt = "data:image/png;base64,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", Rt = {}, Ut = /* @__PURE__ */ m(
  "img",
  { src: Qt },
  null,
  -1
  /* HOISTED */
);
function Wt(e, t) {
  const n = je;
  return i(), P(n, null, {
    image: h(() => [
      Ut
    ]),
    _: 1
    /* STABLE */
  });
}
const N = /* @__PURE__ */ D(Rt, [["render", Wt]]), Zt = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, Nt = /* @__PURE__ */ m(
  "path",
  {
    fill: "currentColor",
    d: "M12 20q-3.35 0-5.675-2.325T4 12q0-3.35 2.325-5.675T12 4q1.725 0 3.3.712T18 6.75V4h2v7h-7V9h4.2q-.8-1.4-2.188-2.2T12 6Q9.5 6 7.75 7.75T6 12q0 2.5 1.75 4.25T12 18q1.925 0 3.475-1.1T17.65 14h2.1q-.7 2.65-2.85 4.325T12 20Z"
  },
  null,
  -1
  /* HOISTED */
), Ft = [
  Nt
];
function Gt(e, t) {
  return i(), g("svg", Zt, Ft);
}
const Jt = { name: "material-symbols-refresh", render: Gt };
const Xt = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, Yt = /* @__PURE__ */ m(
  "path",
  {
    fill: "currentColor",
    d: "M4 20V9h4v11Zm6 0V4h4v16Zm6 0v-7h4v7Z"
  },
  null,
  -1
  /* HOISTED */
), Kt = [
  Yt
];
function qt(e, t) {
  return i(), g("svg", Xt, Kt);
}
const en = { name: "material-symbols-bar-chart-sharp", render: qt }, tn = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, nn = /* @__PURE__ */ m(
  "path",
  {
    fill: "currentColor",
    d: "m3.5 18.5l6-6l4 4L22 6.92L20.59 5.5l-7.09 8l-4-4L2 17l1.5 1.5Z"
  },
  null,
  -1
  /* HOISTED */
), on = [
  nn
];
function an(e, t) {
  return i(), g("svg", tn, on);
}
const sn = { name: "mdi-chart-line-variant", render: an }, ln = {
  viewBox: "0 0 1024 1024",
  width: "1.2em",
  height: "1.2em"
}, rn = /* @__PURE__ */ m(
  "path",
  {
    fill: "currentColor",
    d: "M448 68.48v64.832A384.128 384.128 0 0 0 512 896a384.128 384.128 0 0 0 378.688-320h64.768A448.128 448.128 0 0 1 64 512A448.128 448.128 0 0 1 448 68.48z"
  },
  null,
  -1
  /* HOISTED */
), cn = /* @__PURE__ */ m(
  "path",
  {
    fill: "currentColor",
    d: "M576 97.28V448h350.72A384.064 384.064 0 0 0 576 97.28zM512 64V33.152A448 448 0 0 1 990.848 512H512V64z"
  },
  null,
  -1
  /* HOISTED */
), un = [
  rn,
  cn
];
function dn(e, t) {
  return i(), g("svg", ln, un);
}
const _n = { name: "ep-pie-chart", render: dn }, fn = {
  viewBox: "0 0 16 16",
  width: "1.2em",
  height: "1.2em"
}, pn = /* @__PURE__ */ m(
  "path",
  {
    fill: "currentColor",
    d: "M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"
  },
  null,
  -1
  /* HOISTED */
), mn = [
  pn
];
function hn(e, t) {
  return i(), g("svg", fn, mn);
}
const vn = { name: "bi-grid-3x3-gap-fill", render: hn }, gn = {
  legend: { bottom: 0, type: "scroll" },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  grid: { top: 30, right: 70, bottom: 70, left: 70 }
}, pe = {
  bar: en,
  line: sn,
  pie: _n,
  grid: vn
}, bn = { class: "header" }, yn = { class: "header-left" }, Cn = { class: "header-left-title" }, kn = { class: "header-left-dropdown" }, wn = { class: "header-right" }, Pn = y({
  name: "CmChartCard"
}), xn = /* @__PURE__ */ y({
  ...Pn,
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
    }, s = v(!1), u = v([]), a = () => (s.value = !0, t.getData().then((p) => {
      u.value = p ?? [], o();
    }).finally(() => {
      s.value = !1;
    }));
    be(() => {
      t.isInitData && a();
    });
    const r = O(() => u.value.length <= 1), l = O(() => [...t.configs.map(({ type: p }) => p), "grid"]), d = v(0), f = O(() => pe[l.value[d.value]]), _ = O(() => Object.assign(
      ke(gn),
      t.publicConfig,
      t.configs[d.value] ? t.configs[d.value].config : {},
      {
        dataset: {
          source: u.value
        }
      }
    )), b = (p) => {
      d.value = p, ye(() => {
        o();
      });
    };
    return (p, w) => {
      const S = De, E = Me, x = He, $ = Jt, I = j, Be = N, Te = Z, $e = me, ze = he, Ve = Le, Ee = ve;
      return R((i(), P(Ve, { class: "cm-chart-card" }, {
        header: h(() => [
          m("div", bn, [
            m("div", yn, [
              C(" 标题 "),
              m(
                "div",
                Cn,
                Ke(t.title),
                1
                /* TEXT */
              ),
              C(" 类型选择下拉 "),
              m("div", kn, [
                k(x, {
                  trigger: "click",
                  onCommand: b
                }, {
                  dropdown: h(() => [
                    k(E, null, {
                      default: h(() => [
                        (i(!0), g(
                          z,
                          null,
                          U(c(l), (M, L) => (i(), P(S, {
                            key: M,
                            command: L,
                            disabled: L === c(d)
                          }, {
                            default: h(() => [
                              (i(), P(se(c(pe)[M]), { style: { "font-size": "18px" } }))
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
                    (i(), P(se(c(f)), { class: "icon" }))
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])
            ]),
            C(" 右侧操作区 "),
            m("div", wn, [
              k(I, {
                text: "",
                circle: "",
                handler: a
              }, {
                default: h(() => [
                  k($)
                ]),
                _: 1
                /* STABLE */
              })
            ])
          ])
        ]),
        default: h(() => [
          C(" 卡片主体 "),
          m(
            "div",
            {
              class: "card-body",
              style: Q(`height: ${t.height}px`)
            },
            [
              C(" 空 "),
              c(r) ? (i(), P(Be, { key: 0 })) : c(d) < c(l).length - 1 ? (i(), g(
                z,
                { key: 1 },
                [
                  C(" 图表 "),
                  k(Te, {
                    ref_key: "refChart",
                    ref: n,
                    options: c(_),
                    style: Q(`height: ${t.height}px`)
                  }, null, 8, ["options", "style"])
                ],
                2112
                /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
              )) : (i(), g(
                z,
                { key: 2 },
                [
                  C(" 表格 "),
                  k(ze, {
                    data: c(u).slice(1)
                  }, {
                    default: h(() => [
                      (i(!0), g(
                        z,
                        null,
                        U(c(u)[0], (M, L) => (i(), P($e, {
                          key: M,
                          prop: L.toString(),
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
        [Ee, c(s)]
      ]);
    };
  }
});
const Y = /* @__PURE__ */ D(xn, [["__scopeId", "data-v-b3ea7ceb"]]), In = {
  install(e) {
    e.component(Y.name, Y);
  }
}, Sn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmChartCard: Y,
  default: In
}, Symbol.toStringTag, { value: "Module" }));
const On = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, Bn = /* @__PURE__ */ F('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M5.63604 5.63603C9.15076 2.12131 14.8492 2.12131 18.364 5.63603C21.8787 9.15075 21.8787 14.8492 18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C2.12132 14.8492 2.12132 9.15075 5.63604 5.63603Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"></animate></path><path stroke-dasharray="18" stroke-dashoffset="18" d="M6 6L18 18"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="18;0"></animate></path></g>', 1), Tn = [
  Bn
];
function $n(e, t) {
  return i(), g("svg", On, Tn);
}
const zn = { name: "line-md-cancel", render: $n }, Vn = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, En = /* @__PURE__ */ F('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"></animate></path><path stroke-dasharray="14" stroke-dashoffset="14" d="M8 12L11 15L16 10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"></animate></path></g>', 1), An = [
  En
];
function jn(e, t) {
  return i(), g("svg", Vn, An);
}
const Dn = { name: "line-md-confirm-circle", render: jn }, Mn = { class: "footer" }, Hn = y({
  name: "CmDialog"
}), K = /* @__PURE__ */ y({
  ...Hn,
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
    }, u = () => {
      o.value = !1;
    };
    return (a, r) => {
      const l = j, d = Qe;
      return i(), P(d, V({
        modelValue: c(o),
        "onUpdate:modelValue": r[0] || (r[0] = (f) => qe(o) ? o.value = f : null)
      }, a.$attrs, {
        class: "cm-dialog",
        draggable: "",
        "close-on-click-modal": !1,
        "destroy-on-close": ""
      }), Ce({
        default: h(() => [
          B(a.$slots, "default")
        ]),
        _: 2
        /* DYNAMIC */
      }, [
        e.isShowButtons ? {
          name: "footer",
          fn: h(() => [
            m("div", Mn, [
              k(l, {
                handler: u,
                icon: c(zn)
              }, {
                default: h(() => [
                  W(" 取消 ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["icon"]),
              k(l, {
                handler: s,
                type: "primary",
                icon: c(Dn)
              }, {
                default: h(() => [
                  W(" 提交 ")
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
}), Ln = {
  install(e) {
    e.component(K.name, K);
  }
}, Qn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmDialog: K,
  default: Ln
}, Symbol.toStringTag, { value: "Module" })), Rn = {
  install(e) {
    e.component(N.name, N);
  }
}, Un = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmEmpty: N,
  default: Rn
}, Symbol.toStringTag, { value: "Module" })), Wn = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, Zn = /* @__PURE__ */ m(
  "path",
  {
    fill: "currentColor",
    d: "M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z"
  },
  null,
  -1
  /* HOISTED */
), Nn = [
  Zn
];
function Fn(e, t) {
  return i(), g("svg", Wn, Nn);
}
const Gn = { name: "ic-round-keyboard-arrow-up", render: Fn }, Jn = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, Xn = /* @__PURE__ */ m(
  "path",
  {
    fill: "currentColor",
    d: "M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z"
  },
  null,
  -1
  /* HOISTED */
), Yn = [
  Xn
];
function Kn(e, t) {
  return i(), g("svg", Jn, Yn);
}
const qn = { name: "ic-round-keyboard-arrow-down", render: Kn }, eo = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, to = /* @__PURE__ */ F('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="16" stroke-dashoffset="16" d="M10.5 13.5L3 21"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="16;0"></animate></path><path stroke-dasharray="40" stroke-dashoffset="40" d="M10.7574 13.2426C8.41421 10.8995 8.41421 7.10051 10.7574 4.75736C13.1005 2.41421 16.8995 2.41421 19.2426 4.75736C21.5858 7.10051 21.5858 10.8995 19.2426 13.2426C16.8995 15.5858 13.1005 15.5858 10.7574 13.2426Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="40;0"></animate></path></g>', 1), no = [
  to
];
function oo(e, t) {
  return i(), g("svg", eo, no);
}
const ao = { name: "line-md-search", render: oo }, so = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, lo = /* @__PURE__ */ F('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="32" stroke-dashoffset="32" d="M12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12V9.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="32;0"></animate></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M6 9L3 12M6 9L9 12"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0"></animate></path></g>', 1), ro = [
  lo
];
function co(e, t) {
  return i(), g("svg", so, ro);
}
const io = { name: "line-md-rotate-270", render: co }, uo = { class: "cm-filter" }, _o = { class: "buttons" }, fo = y({
  name: "CmFilter"
}), po = /* @__PURE__ */ y({
  ...fo,
  props: {
    queryHandler: { type: Function },
    resetHandler: { type: Function }
  },
  setup(e) {
    const t = e, n = v(!0), o = v("50px"), s = v(null), { height: u } = Se(s), a = () => {
      n.value = !n.value, o.value = n.value ? "50px" : u.value.toString() + "px";
    };
    return (r, l) => {
      const d = qn, f = Gn, _ = j, b = Re;
      return i(), g("div", uo, [
        C(" 左侧表单 "),
        m(
          "div",
          {
            class: "form",
            style: Q(`height: ${c(o)}`)
          },
          [
            m(
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
            c(u) > 50 ? (i(), P(_, {
              key: 0,
              class: "form-fold_icon",
              handler: a,
              circle: "",
              text: "",
              bg: ""
            }, {
              default: h(() => [
                R(k(
                  d,
                  null,
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [le, c(n)]
                ]),
                R(k(
                  f,
                  null,
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [le, !c(n)]
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
        m("div", _o, [
          k(b, null, {
            default: h(() => [
              k(_, {
                type: "primary",
                icon: c(ao),
                handler: t.queryHandler
              }, {
                default: h(() => [
                  W(" 查询 ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["icon", "handler"]),
              k(_, {
                icon: c(io),
                handler: t.resetHandler
              }, {
                default: h(() => [
                  W(" 重置 ")
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
const q = /* @__PURE__ */ D(po, [["__scopeId", "data-v-0d8d7aba"]]), mo = {
  install(e) {
    e.component(q.name, q);
  }
}, ho = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmFilter: q,
  default: mo
}, Symbol.toStringTag, { value: "Module" }));
const vo = y({
  name: "CmInput"
}), ee = /* @__PURE__ */ y({
  ...vo,
  props: {
    type: { default: "text" }
  },
  setup(e) {
    const t = e;
    return (n, o) => {
      const s = Ue, u = We;
      return t.type !== "number" ? (i(), P(s, V({ key: 0 }, n.$attrs, {
        type: t.type,
        clearable: ""
      }), Ce({
        _: 2
        /* DYNAMIC */
      }, [
        U(n.$slots, (a, r) => ({
          name: r,
          fn: h((l) => [
            B(n.$slots, r, re(et(l)))
          ])
        }))
      ]), 1040, ["type"])) : (i(), P(
        u,
        re(V({ key: 1 }, n.$attrs)),
        null,
        16
        /* FULL_PROPS */
      ));
    };
  }
}), go = {
  install(e) {
    e.component(ee.name, ee);
  }
}, bo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmInput: ee,
  default: go
}, Symbol.toStringTag, { value: "Module" }));
const yo = y({
  name: "CmSelect"
}), te = /* @__PURE__ */ y({
  ...yo,
  props: {
    type: { default: "normal" },
    getData: null,
    params: { default: "" },
    multiple: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = v([]), s = v(!1), u = (a) => {
      s.value = !0, n.getData(a).then((r) => {
        o.value = r;
      }).finally(() => {
        s.value = !1;
      });
    };
    return u(n.params), T(
      () => n.params,
      () => {
        t("update:modelValue", null), u(n.params);
      }
    ), (a, r) => {
      const l = Ze, d = Ne, f = Fe;
      return i(), g(
        z,
        null,
        [
          C(" 普通下拉框 "),
          n.type === "normal" ? (i(), P(d, V({ key: 0 }, a.$attrs, {
            multiple: n.multiple,
            "show-checkbox": !1,
            "onUpdate:modelValue": r[0] || (r[0] = (_) => a.$emit("update:modelValue", _))
          }), {
            default: h(() => [
              (i(!0), g(
                z,
                null,
                U(c(o), (_) => (i(), P(l, {
                  key: _.value,
                  label: _.label,
                  value: _.value
                }, {
                  default: h(() => [
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
          }, 16, ["multiple"])) : n.type === "tree" ? (i(), g(
            z,
            { key: 1 },
            [
              C(" 树形下拉框 "),
              k(f, V(a.$attrs, {
                data: c(o),
                multiple: n.multiple,
                "show-checkbox": n.multiple,
                "onUpdate:modelValue": r[1] || (r[1] = (_) => a.$emit("update:modelValue", _))
              }), {
                default: h(({ data: _ }) => [
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
}), Co = {
  install(e) {
    e.component(te.name, te);
  }
}, ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmSelect: te,
  default: Co
}, Symbol.toStringTag, { value: "Module" })), wo = {
  "aria-hidden": "true",
  class: "svg-icon"
}, Po = ["xlink:href"], xo = y({
  name: "CmSvg"
}), Io = /* @__PURE__ */ y({
  ...xo,
  props: {
    prefix: { default: "icon" },
    name: null,
    widthScale: { default: 1 }
  },
  setup(e) {
    const t = e;
    tt((s) => ({
      "88ae7cc6": c(o)
    }));
    const n = O(() => `#${t.prefix}-${t.name}`), o = O(() => t.widthScale.toString() + "em");
    return (s, u) => (i(), g("svg", wo, [
      m("use", { "xlink:href": c(n) }, null, 8, Po)
    ]));
  }
});
const ne = /* @__PURE__ */ D(Io, [["__scopeId", "data-v-5865a63a"]]), So = {
  install(e) {
    e.component(ne.name, ne);
  }
}, Oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmSvg: ne,
  default: So
}, Symbol.toStringTag, { value: "Module" }));
const Bo = { class: "cm-table" }, To = { class: "buttons" }, $o = { class: "table" }, zo = { class: "pager" }, Vo = y({
  name: "CmTable"
}), Eo = /* @__PURE__ */ y({
  ...Vo,
  props: {
    getData: null,
    isInitData: { type: Boolean, default: !0 },
    initParams: { default: () => ({}) },
    isUsePager: { type: Boolean, default: !0 },
    isUseCheckBox: { type: Boolean, default: !0 }
  },
  setup(e, { expose: t }) {
    const n = e, o = v([]), s = v(!1), u = v({}), a = ce({
      pageSize: 20,
      currentPage: 1
    }), r = v(0), l = v(null), d = (p, w = !0) => (p && (u.value = ke(p)), w && (a.currentPage = 1), n.isUsePager && (u.value.pager = a), s.value = !0, n.getData(u).then((S) => {
      o.value = S.datas, r.value = S.total;
    }).catch().finally(() => {
      s.value = !1;
    }));
    n.isInitData && d(n.initParams), T(
      () => a.currentPage,
      () => {
        d(null, !1);
      }
    ), T(
      () => a.pageSize,
      () => {
        d();
      }
    );
    const f = v([]), _ = (p) => {
      f.value = p;
    }, b = ce({ a: 1 });
    return t({
      update: d,
      selection: f,
      test: b
    }), (p, w) => {
      const S = me, E = he, x = Ge, $ = ve;
      return R((i(), g("div", Bo, [
        C(" 操作按钮组 "),
        m("div", To, [
          B(p.$slots, "buttons", { selection: c(f) }, void 0, !0)
        ]),
        C(" 表格主体 "),
        m("div", $o, [
          k(E, V({
            ref_key: "table",
            ref: l
          }, p.$attrs, {
            data: c(o),
            onSelectionChange: _
          }), {
            default: h(() => [
              n.isUseCheckBox ? (i(), P(S, {
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
        m("div", zo, [
          k(x, {
            "page-size": c(a).pageSize,
            "onUpdate:pageSize": w[0] || (w[0] = (I) => c(a).pageSize = I),
            "current-page": c(a).currentPage,
            "onUpdate:currentPage": w[1] || (w[1] = (I) => c(a).currentPage = I),
            background: "",
            layout: "total, prev, pager, next",
            "hide-on-single-page": "",
            total: c(r)
          }, null, 8, ["page-size", "current-page", "total"])
        ])
      ])), [
        [$, c(s)]
      ]);
    };
  }
});
const oe = /* @__PURE__ */ D(Eo, [["__scopeId", "data-v-175e1406"]]), Ao = {
  install(e) {
    e.component(oe.name, oe);
  }
}, jo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmTable: oe,
  default: Ao
}, Symbol.toStringTag, { value: "Module" })), Oe = [], Do = /* @__PURE__ */ Object.assign({ "./CmButton/index.ts": yt, "./CmChart/index.ts": Lt, "./CmChartCard/index.ts": Sn, "./CmDialog/index.ts": Qn, "./CmEmpty/index.ts": Un, "./CmFilter/index.ts": ho, "./CmInput/index.ts": bo, "./CmSelect/index.ts": ko, "./CmSvg/index.ts": Oo, "./CmTable/index.ts": jo }), Mo = async () => {
  for (const e of Object.values(Do))
    Oe.push(e.default);
};
Mo();
const No = {
  install(e) {
    Oe.forEach((t) => {
      e.use(t);
    });
  }
};
export {
  j as CmButton,
  Z as CmChart,
  Y as CmChartCard,
  K as CmDialog,
  N as CmEmpty,
  q as CmFilter,
  ee as CmInput,
  te as CmSelect,
  ne as CmSvg,
  oe as CmTable,
  No as default
};
