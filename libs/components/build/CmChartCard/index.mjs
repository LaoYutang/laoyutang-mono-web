import { ElEmpty as ue, ElButton as de, ElDropdownItem as fe, ElDropdownMenu as he, ElDropdown as pe, ElTableColumn as ve, ElTable as _e, ElCard as me, ElLoadingDirective as Pe } from "element-plus/es";
import { getCurrentScope as we, onScopeDispose as ge, unref as d, getCurrentInstance as ye, onMounted as X, nextTick as Y, computed as I, ref as m, watch as H, defineComponent as C, onBeforeUnmount as be, openBlock as i, createElementBlock as P, createElementVNode as p, normalizeStyle as V, createBlock as w, withCtx as _, mergeProps as ke, renderSlot as Ce, withDirectives as xe, createCommentVNode as y, toDisplayString as Ie, createVNode as b, Fragment as T, renderList as R, resolveDynamicComponent as L } from "vue";
import * as K from "echarts/core";
import { BarChart as Ae, LineChart as Ee, PieChart as Te } from "echarts/charts";
import { TitleComponent as Be, TooltipComponent as Oe, GridComponent as Ve, DatasetComponent as De, TransformComponent as ze, LegendComponent as He, ToolboxComponent as Qe } from "echarts/components";
import { LabelLayout as je, UniversalTransition as Re } from "echarts/features";
import { CanvasRenderer as Le } from "echarts/renderers";
import { _throttle as Se, _debounce as Me, _deepClone as We } from "utils";
K.use([
  Be,
  Oe,
  Ve,
  De,
  ze,
  He,
  Qe,
  Ae,
  Ee,
  Te,
  je,
  Re,
  Le
]);
const Ze = K;
var S;
const A = typeof window < "u", O = () => {
};
A && ((S = window == null ? void 0 : window.navigator) != null && S.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ue(e) {
  return typeof e == "function" ? e() : d(e);
}
function Ge(e) {
  return e;
}
function F(e) {
  return we() ? (ge(e), !0) : !1;
}
function Je(e, t = !0) {
  ye() ? X(e) : t ? e() : Y(e);
}
function k(e) {
  var t;
  const n = Ue(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Q = A ? window : void 0;
A && window.document;
A && window.navigator;
A && window.location;
function N(e, t = !1) {
  const n = m(), o = () => n.value = Boolean(e());
  return o(), Je(o, t), n;
}
const D = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, z = "__vueuse_ssr_handlers__";
D[z] = D[z] || {};
D[z];
var M = Object.getOwnPropertySymbols, Xe = Object.prototype.hasOwnProperty, Ye = Object.prototype.propertyIsEnumerable, Ke = (e, t) => {
  var n = {};
  for (var o in e)
    Xe.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && M)
    for (var o of M(e))
      t.indexOf(o) < 0 && Ye.call(e, o) && (n[o] = e[o]);
  return n;
};
function q(e, t, n = {}) {
  const o = n, { window: s = Q } = o, l = Ke(o, ["window"]);
  let a;
  const f = N(() => s && "ResizeObserver" in s), r = () => {
    a && (a.disconnect(), a = void 0);
  }, c = H(() => k(e), (h) => {
    r(), f.value && s && h && (a = new ResizeObserver(t), a.observe(h, l));
  }, { immediate: !0, flush: "post" }), u = () => {
    r(), c();
  };
  return F(u), {
    isSupported: f,
    stop: u
  };
}
function Fe(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: o = Q, box: s = "content-box" } = n, l = I(() => {
    var r, c;
    return (c = (r = k(e)) == null ? void 0 : r.namespaceURI) == null ? void 0 : c.includes("svg");
  }), a = m(t.width), f = m(t.height);
  return q(e, ([r]) => {
    const c = s === "border-box" ? r.borderBoxSize : s === "content-box" ? r.contentBoxSize : r.devicePixelContentBoxSize;
    if (o && l.value) {
      const u = k(e);
      if (u) {
        const h = o.getComputedStyle(u);
        a.value = parseFloat(h.width), f.value = parseFloat(h.height);
      }
    } else if (c) {
      const u = Array.isArray(c) ? c : [c];
      a.value = u.reduce((h, { inlineSize: g }) => h + g, 0), f.value = u.reduce((h, { blockSize: g }) => h + g, 0);
    } else
      a.value = r.contentRect.width, f.value = r.contentRect.height;
  }, n), H(() => k(e), (r) => {
    a.value = r ? t.width : 0, f.value = r ? t.height : 0;
  }), {
    width: a,
    height: f
  };
}
function Ne(e, t, n = {}) {
  const {
    root: o,
    rootMargin: s = "0px",
    threshold: l = 0.1,
    window: a = Q
  } = n, f = N(() => a && "IntersectionObserver" in a);
  let r = O;
  const c = f.value ? H(() => ({
    el: k(e),
    root: k(o)
  }), ({ el: h, root: g }) => {
    if (r(), !h)
      return;
    const v = new IntersectionObserver(t, {
      root: g,
      rootMargin: s,
      threshold: l
    });
    v.observe(h), r = () => {
      v.disconnect(), r = O;
    };
  }, { immediate: !0, flush: "post" }) : O, u = () => {
    r(), c();
  };
  return F(u), {
    isSupported: f,
    stop: u
  };
}
var W;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(W || (W = {}));
var qe = Object.defineProperty, Z = Object.getOwnPropertySymbols, $e = Object.prototype.hasOwnProperty, et = Object.prototype.propertyIsEnumerable, U = (e, t, n) => t in e ? qe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, tt = (e, t) => {
  for (var n in t || (t = {}))
    $e.call(t, n) && U(e, n, t[n]);
  if (Z)
    for (var n of Z(t))
      et.call(t, n) && U(e, n, t[n]);
  return e;
};
const nt = {
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
tt({
  linear: Ge
}, nt);
const ot = C({
  name: "CmChart"
}), rt = /* @__PURE__ */ C({
  ...ot,
  props: {
    options: null
  },
  setup(e, { expose: t }) {
    const n = e, o = m(null);
    let s = null, l;
    const { height: a, width: f } = Fe(o), r = m(null), { stop: c } = Ne(o, ([{ isIntersecting: u }]) => {
      u && (s = Ze.init(r.value), l = Se(s.resize, 500, !1), q(o, () => l()), s.setOption(n.options), c());
    });
    return be(() => {
      s.dispose();
    }), t({
      chartInstance: s
    }), (u, h) => (i(), P(
      "div",
      {
        ref_key: "cmChart",
        ref: o,
        class: "cm-chart"
      },
      [
        p(
          "div",
          {
            id: "chart",
            ref_key: "chart",
            ref: r,
            class: "chart",
            style: V(`width: ${d(f)}px;height: ${d(a)}px;`)
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
});
const st = "data:image/png;base64,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", j = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, at = {}, ct = /* @__PURE__ */ p(
  "img",
  { src: st },
  null,
  -1
  /* HOISTED */
);
function it(e, t) {
  const n = ue;
  return i(), w(n, null, {
    image: _(() => [
      ct
    ]),
    _: 1
    /* STABLE */
  });
}
const lt = /* @__PURE__ */ j(at, [["render", it]]);
const ut = C({
  name: "cm-button"
}), dt = /* @__PURE__ */ C({
  ...ut,
  props: {
    handler: null
  },
  setup(e) {
    const t = e, n = m(!1), o = Me(async (s) => {
      n.value = !0;
      try {
        await t.handler(s);
      } catch {
      }
      n.value = !1;
    });
    return (s, l) => {
      const a = de;
      return i(), w(a, ke(s.$attrs, {
        loading: d(n),
        onClick: d(o)
      }), {
        default: _(() => [
          Ce(s.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["loading", "onClick"]);
    };
  }
});
const ft = /* @__PURE__ */ j(dt, [["__scopeId", "data-v-68fd51f0"]]), ht = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, pt = /* @__PURE__ */ p(
  "path",
  {
    fill: "currentColor",
    d: "M12 20q-3.35 0-5.675-2.325T4 12q0-3.35 2.325-5.675T12 4q1.725 0 3.3.712T18 6.75V4h2v7h-7V9h4.2q-.8-1.4-2.188-2.2T12 6Q9.5 6 7.75 7.75T6 12q0 2.5 1.75 4.25T12 18q1.925 0 3.475-1.1T17.65 14h2.1q-.7 2.65-2.85 4.325T12 20Z"
  },
  null,
  -1
  /* HOISTED */
), vt = [
  pt
];
function _t(e, t) {
  return i(), P("svg", ht, vt);
}
const mt = { name: "material-symbols-refresh", render: _t };
const Pt = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, wt = /* @__PURE__ */ p(
  "path",
  {
    fill: "currentColor",
    d: "M4 20V9h4v11Zm6 0V4h4v16Zm6 0v-7h4v7Z"
  },
  null,
  -1
  /* HOISTED */
), gt = [
  wt
];
function yt(e, t) {
  return i(), P("svg", Pt, gt);
}
const bt = { name: "material-symbols-bar-chart-sharp", render: yt }, kt = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, Ct = /* @__PURE__ */ p(
  "path",
  {
    fill: "currentColor",
    d: "m3.5 18.5l6-6l4 4L22 6.92L20.59 5.5l-7.09 8l-4-4L2 17l1.5 1.5Z"
  },
  null,
  -1
  /* HOISTED */
), xt = [
  Ct
];
function It(e, t) {
  return i(), P("svg", kt, xt);
}
const At = { name: "mdi-chart-line-variant", render: It }, Et = {
  viewBox: "0 0 1024 1024",
  width: "1.2em",
  height: "1.2em"
}, Tt = /* @__PURE__ */ p(
  "path",
  {
    fill: "currentColor",
    d: "M448 68.48v64.832A384.128 384.128 0 0 0 512 896a384.128 384.128 0 0 0 378.688-320h64.768A448.128 448.128 0 0 1 64 512A448.128 448.128 0 0 1 448 68.48z"
  },
  null,
  -1
  /* HOISTED */
), Bt = /* @__PURE__ */ p(
  "path",
  {
    fill: "currentColor",
    d: "M576 97.28V448h350.72A384.064 384.064 0 0 0 576 97.28zM512 64V33.152A448 448 0 0 1 990.848 512H512V64z"
  },
  null,
  -1
  /* HOISTED */
), Ot = [
  Tt,
  Bt
];
function Vt(e, t) {
  return i(), P("svg", Et, Ot);
}
const Dt = { name: "ep-pie-chart", render: Vt }, zt = {
  viewBox: "0 0 16 16",
  width: "1.2em",
  height: "1.2em"
}, Ht = /* @__PURE__ */ p(
  "path",
  {
    fill: "currentColor",
    d: "M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"
  },
  null,
  -1
  /* HOISTED */
), Qt = [
  Ht
];
function jt(e, t) {
  return i(), P("svg", zt, Qt);
}
const Rt = { name: "bi-grid-3x3-gap-fill", render: jt }, Lt = {
  legend: { bottom: 0, type: "scroll" },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  grid: { top: 30, right: 70, bottom: 70, left: 70 }
}, G = {
  bar: bt,
  line: At,
  pie: Dt,
  grid: Rt
}, St = { class: "header" }, Mt = { class: "header-left" }, Wt = { class: "header-left-title" }, Zt = { class: "header-left-dropdown" }, Ut = { class: "header-right" }, Gt = C({
  name: "CmChartCard"
}), Jt = /* @__PURE__ */ C({
  ...Gt,
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
    const t = e, n = m(null), o = () => {
      var v, B;
      (B = (v = n.value) == null ? void 0 : v.chartInstance) == null || B.update();
    }, s = m(!1), l = m([]), a = () => (s.value = !0, t.getData().then((v) => {
      l.value = v ?? [], o();
    }).finally(() => {
      s.value = !1;
    }));
    X(() => {
      t.isInitData && a();
    });
    const f = I(() => l.value.length <= 1), r = I(() => [...t.configs.map(({ type: v }) => v), "grid"]), c = m(0), u = I(() => G[r.value[c.value]]), h = I(() => Object.assign(
      We(Lt),
      t.publicConfig,
      t.configs[c.value] ? t.configs[c.value].config : {},
      {
        dataset: {
          source: l.value
        }
      }
    )), g = (v) => {
      c.value = v, Y(() => {
        o();
      });
    };
    return (v, B) => {
      const $ = fe, ee = he, te = pe, ne = mt, oe = ft, re = lt, se = rt, ae = ve, ce = _e, ie = me, le = Pe;
      return xe((i(), w(ie, { class: "cm-chart-card" }, {
        header: _(() => [
          p("div", St, [
            p("div", Mt, [
              y(" 标题 "),
              p(
                "div",
                Wt,
                Ie(t.title),
                1
                /* TEXT */
              ),
              y(" 类型选择下拉 "),
              p("div", Zt, [
                b(te, {
                  trigger: "click",
                  onCommand: g
                }, {
                  dropdown: _(() => [
                    b(ee, null, {
                      default: _(() => [
                        (i(!0), P(
                          T,
                          null,
                          R(d(r), (x, E) => (i(), w($, {
                            key: x,
                            command: E,
                            disabled: E === d(c)
                          }, {
                            default: _(() => [
                              (i(), w(L(d(G)[x]), { style: { "font-size": "18px" } }))
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
                  default: _(() => [
                    (i(), w(L(d(u)), { class: "icon" }))
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])
            ]),
            y(" 右侧操作区 "),
            p("div", Ut, [
              b(oe, {
                text: "",
                circle: "",
                handler: a
              }, {
                default: _(() => [
                  b(ne)
                ]),
                _: 1
                /* STABLE */
              })
            ])
          ])
        ]),
        default: _(() => [
          y(" 卡片主体 "),
          p(
            "div",
            {
              class: "card-body",
              style: V(`height: ${t.height}px`)
            },
            [
              y(" 空 "),
              d(f) ? (i(), w(re, { key: 0 })) : d(c) < d(r).length - 1 ? (i(), P(
                T,
                { key: 1 },
                [
                  y(" 图表 "),
                  b(se, {
                    ref_key: "refChart",
                    ref: n,
                    options: d(h),
                    style: V(`height: ${t.height}px`)
                  }, null, 8, ["options", "style"])
                ],
                2112
                /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
              )) : (i(), P(
                T,
                { key: 2 },
                [
                  y(" 表格 "),
                  b(ce, {
                    data: d(l).slice(1)
                  }, {
                    default: _(() => [
                      (i(!0), P(
                        T,
                        null,
                        R(d(l)[0], (x, E) => (i(), w(ae, {
                          key: x,
                          prop: E.toString(),
                          label: x
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
        [le, d(s)]
      ]);
    };
  }
});
const J = /* @__PURE__ */ j(Jt, [["__scopeId", "data-v-b3ea7ceb"]]), en = {
  install(e) {
    e.component(J.name, J);
  }
};
export {
  J as CmChartCard,
  en as default
};
