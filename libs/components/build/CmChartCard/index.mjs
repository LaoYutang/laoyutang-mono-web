import { ElButton as de, ElDropdownItem as ue, ElDropdownMenu as _e, ElDropdown as pe, ElEmpty as he, ElTableColumn as fe, ElTable as me, ElCard as ve, ElLoadingDirective as ge } from "element-plus/es";
import { getCurrentScope as we, onScopeDispose as be, unref as u, getCurrentInstance as Ce, onMounted as U, nextTick as W, computed as $, ref as m, watch as V, defineComponent as x, onBeforeUnmount as ye, openBlock as c, createElementBlock as v, createElementVNode as h, normalizeStyle as S, createBlock as C, mergeProps as Oe, withCtx as g, renderSlot as xe, withDirectives as Ie, createCommentVNode as b, toDisplayString as $e, createVNode as y, Fragment as B, renderList as M, resolveDynamicComponent as N } from "vue";
import * as F from "echarts/core";
import { BarChart as Te, LineChart as Ee, PieChart as Be } from "echarts/charts";
import { TitleComponent as ze, TooltipComponent as Pe, GridComponent as Se, DatasetComponent as ke, TransformComponent as De, LegendComponent as Ve, ToolboxComponent as Le } from "echarts/components";
import { LabelLayout as Me, UniversalTransition as Ne } from "echarts/features";
import { CanvasRenderer as He } from "echarts/renderers";
import { _throttle as Qe, _debounce as Re, _deepClone as Ae } from "utils";
F.use([
  ze,
  Pe,
  Se,
  ke,
  De,
  Ve,
  Le,
  Te,
  Ee,
  Be,
  Me,
  Ne,
  He
]);
const je = F;
var H;
const T = typeof window < "u", P = () => {
};
T && ((H = window == null ? void 0 : window.navigator) != null && H.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function qe(e) {
  return typeof e == "function" ? e() : u(e);
}
function Ge(e) {
  return e;
}
function Z(e) {
  return we() ? (be(e), !0) : !1;
}
function Ue(e, t = !0) {
  Ce() ? U(e) : t ? e() : W(e);
}
function O(e) {
  var t;
  const n = qe(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const L = T ? window : void 0;
T && window.document;
T && window.navigator;
T && window.location;
function K(e, t = !1) {
  const n = m(), o = () => n.value = Boolean(e());
  return o(), Ue(o, t), n;
}
const k = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, D = "__vueuse_ssr_handlers__";
k[D] = k[D] || {};
k[D];
var Q = Object.getOwnPropertySymbols, We = Object.prototype.hasOwnProperty, Fe = Object.prototype.propertyIsEnumerable, Ze = (e, t) => {
  var n = {};
  for (var o in e)
    We.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Q)
    for (var o of Q(e))
      t.indexOf(o) < 0 && Fe.call(e, o) && (n[o] = e[o]);
  return n;
};
function J(e, t, n = {}) {
  const o = n, { window: a = L } = o, i = Ze(o, ["window"]);
  let s;
  const _ = K(() => a && "ResizeObserver" in a), r = () => {
    s && (s.disconnect(), s = void 0);
  }, l = V(() => O(e), (p) => {
    r(), _.value && a && p && (s = new ResizeObserver(t), s.observe(p, i));
  }, { immediate: !0, flush: "post" }), d = () => {
    r(), l();
  };
  return Z(d), {
    isSupported: _,
    stop: d
  };
}
function Ke(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: o = L, box: a = "content-box" } = n, i = $(() => {
    var r, l;
    return (l = (r = O(e)) == null ? void 0 : r.namespaceURI) == null ? void 0 : l.includes("svg");
  }), s = m(t.width), _ = m(t.height);
  return J(e, ([r]) => {
    const l = a === "border-box" ? r.borderBoxSize : a === "content-box" ? r.contentBoxSize : r.devicePixelContentBoxSize;
    if (o && i.value) {
      const d = O(e);
      if (d) {
        const p = o.getComputedStyle(d);
        s.value = parseFloat(p.width), _.value = parseFloat(p.height);
      }
    } else if (l) {
      const d = Array.isArray(l) ? l : [l];
      s.value = d.reduce((p, { inlineSize: w }) => p + w, 0), _.value = d.reduce((p, { blockSize: w }) => p + w, 0);
    } else
      s.value = r.contentRect.width, _.value = r.contentRect.height;
  }, n), V(() => O(e), (r) => {
    s.value = r ? t.width : 0, _.value = r ? t.height : 0;
  }), {
    width: s,
    height: _
  };
}
function Je(e, t, n = {}) {
  const {
    root: o,
    rootMargin: a = "0px",
    threshold: i = 0.1,
    window: s = L
  } = n, _ = K(() => s && "IntersectionObserver" in s);
  let r = P;
  const l = _.value ? V(() => ({
    el: O(e),
    root: O(o)
  }), ({ el: p, root: w }) => {
    if (r(), !p)
      return;
    const f = new IntersectionObserver(t, {
      root: w,
      rootMargin: a,
      threshold: i
    });
    f.observe(p), r = () => {
      f.disconnect(), r = P;
    };
  }, { immediate: !0, flush: "post" }) : P, d = () => {
    r(), l();
  };
  return Z(d), {
    isSupported: _,
    stop: d
  };
}
var R;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(R || (R = {}));
var Xe = Object.defineProperty, A = Object.getOwnPropertySymbols, Ye = Object.prototype.hasOwnProperty, et = Object.prototype.propertyIsEnumerable, j = (e, t, n) => t in e ? Xe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, tt = (e, t) => {
  for (var n in t || (t = {}))
    Ye.call(t, n) && j(e, n, t[n]);
  if (A)
    for (var n of A(t))
      et.call(t, n) && j(e, n, t[n]);
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
const ot = x({
  name: "CmChart"
}), rt = /* @__PURE__ */ x({
  ...ot,
  props: {
    options: null
  },
  setup(e, { expose: t }) {
    const n = e, o = m(null);
    let a = null, i;
    const { height: s, width: _ } = Ke(o), r = m(null), { stop: l } = Je(o, ([{ isIntersecting: d }]) => {
      d && (a = je.init(r.value), i = Qe(a.resize, 500, !1), J(o, () => i()), a.setOption(n.options), l());
    });
    return ye(() => {
      a.dispose();
    }), t({
      chartInstance: a
    }), (d, p) => (c(), v(
      "div",
      {
        ref_key: "cmChart",
        ref: o,
        class: "cm-chart"
      },
      [
        h(
          "div",
          {
            id: "chart",
            ref_key: "chart",
            ref: r,
            class: "chart",
            style: S(`width: ${u(_)}px;height: ${u(s)}px;`)
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
const at = x({
  name: "cm-button"
}), st = /* @__PURE__ */ x({
  ...at,
  props: {
    handler: null
  },
  setup(e) {
    const t = e, n = m(!1), o = Re(async (a) => {
      n.value = !0;
      try {
        await t.handler(a);
      } catch {
      }
      n.value = !1;
    });
    return (a, i) => {
      const s = de;
      return c(), C(s, Oe(a.$attrs, {
        loading: u(n),
        onClick: u(o)
      }), {
        default: g(() => [
          xe(a.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["loading", "onClick"]);
    };
  }
});
const X = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, a] of t)
    n[o] = a;
  return n;
}, lt = /* @__PURE__ */ X(st, [["__scopeId", "data-v-68fd51f0"]]), ct = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, it = /* @__PURE__ */ h(
  "path",
  {
    fill: "currentColor",
    d: "M12 20q-3.35 0-5.675-2.325T4 12q0-3.35 2.325-5.675T12 4q1.725 0 3.3.712T18 6.75V4h2v7h-7V9h4.2q-.8-1.4-2.188-2.2T12 6Q9.5 6 7.75 7.75T6 12q0 2.5 1.75 4.25T12 18q1.925 0 3.475-1.1T17.65 14h2.1q-.7 2.65-2.85 4.325T12 20Z"
  },
  null,
  -1
  /* HOISTED */
), dt = [
  it
];
function ut(e, t) {
  return c(), v("svg", ct, dt);
}
const _t = { name: "material-symbols-refresh", render: ut };
const pt = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, ht = /* @__PURE__ */ h(
  "path",
  {
    fill: "currentColor",
    d: "M4 20V9h4v11Zm6 0V4h4v16Zm6 0v-7h4v7Z"
  },
  null,
  -1
  /* HOISTED */
), ft = [
  ht
];
function mt(e, t) {
  return c(), v("svg", pt, ft);
}
const vt = { name: "material-symbols-bar-chart-sharp", render: mt }, gt = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, wt = /* @__PURE__ */ h(
  "path",
  {
    fill: "currentColor",
    d: "m3.5 18.5l6-6l4 4L22 6.92L20.59 5.5l-7.09 8l-4-4L2 17l1.5 1.5Z"
  },
  null,
  -1
  /* HOISTED */
), bt = [
  wt
];
function Ct(e, t) {
  return c(), v("svg", gt, bt);
}
const yt = { name: "mdi-chart-line-variant", render: Ct }, Ot = {
  viewBox: "0 0 1024 1024",
  width: "1.2em",
  height: "1.2em"
}, xt = /* @__PURE__ */ h(
  "path",
  {
    fill: "currentColor",
    d: "M448 68.48v64.832A384.128 384.128 0 0 0 512 896a384.128 384.128 0 0 0 378.688-320h64.768A448.128 448.128 0 0 1 64 512A448.128 448.128 0 0 1 448 68.48z"
  },
  null,
  -1
  /* HOISTED */
), It = /* @__PURE__ */ h(
  "path",
  {
    fill: "currentColor",
    d: "M576 97.28V448h350.72A384.064 384.064 0 0 0 576 97.28zM512 64V33.152A448 448 0 0 1 990.848 512H512V64z"
  },
  null,
  -1
  /* HOISTED */
), $t = [
  xt,
  It
];
function Tt(e, t) {
  return c(), v("svg", Ot, $t);
}
const Et = { name: "ep-pie-chart", render: Tt }, Bt = {
  viewBox: "0 0 16 16",
  width: "1.2em",
  height: "1.2em"
}, zt = /* @__PURE__ */ h(
  "path",
  {
    fill: "currentColor",
    d: "M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"
  },
  null,
  -1
  /* HOISTED */
), Pt = [
  zt
];
function St(e, t) {
  return c(), v("svg", Bt, Pt);
}
const kt = { name: "bi-grid-3x3-gap-fill", render: St }, Dt = {
  legend: { bottom: 0, type: "scroll" },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  grid: { top: 30, right: 70, bottom: 70, left: 70 }
}, q = {
  bar: vt,
  line: yt,
  pie: Et,
  grid: kt
}, Vt = { class: "header" }, Lt = { class: "header-left" }, Mt = { class: "header-left-title" }, Nt = { class: "header-left-dropdown" }, Ht = { class: "header-right" }, Qt = x({
  name: "CmChartCard"
}), Rt = /* @__PURE__ */ x({
  ...Qt,
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
      var f, z;
      (z = (f = n.value) == null ? void 0 : f.chartInstance) == null || z.update();
    }, a = m(!1), i = m([]), s = () => (a.value = !0, t.getData().then((f) => {
      i.value = f ?? [], o();
    }).finally(() => {
      a.value = !1;
    }));
    U(() => {
      t.isInitData && s();
    });
    const _ = $(() => i.value.length <= 1), r = $(() => [...t.configs.map(({ type: f }) => f), "grid"]), l = m(0), d = $(() => q[r.value[l.value]]), p = $(() => Object.assign(
      Ae(Dt),
      t.publicConfig,
      t.configs[l.value] ? t.configs[l.value].config : {},
      {
        dataset: {
          source: i.value
        }
      }
    )), w = (f) => {
      l.value = f, W(() => {
        o();
      });
    };
    return (f, z) => {
      const Y = ue, ee = _e, te = pe, ne = _t, oe = lt, re = he, ae = rt, se = fe, le = me, ce = ve, ie = ge;
      return Ie((c(), C(ce, { class: "cm-chart-card" }, {
        header: g(() => [
          h("div", Vt, [
            h("div", Lt, [
              b(" 标题 "),
              h(
                "div",
                Mt,
                $e(t.title),
                1
                /* TEXT */
              ),
              b(" 类型选择下拉 "),
              h("div", Nt, [
                y(te, {
                  trigger: "click",
                  onCommand: w
                }, {
                  dropdown: g(() => [
                    y(ee, null, {
                      default: g(() => [
                        (c(!0), v(
                          B,
                          null,
                          M(u(r), (I, E) => (c(), C(Y, {
                            key: I,
                            command: E,
                            disabled: E === u(l)
                          }, {
                            default: g(() => [
                              (c(), C(N(u(q)[I]), { style: { "font-size": "18px" } }))
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
                  default: g(() => [
                    (c(), C(N(u(d)), { class: "icon" }))
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])
            ]),
            b(" 右侧操作区 "),
            h("div", Ht, [
              y(oe, {
                text: "",
                circle: "",
                handler: s
              }, {
                default: g(() => [
                  y(ne)
                ]),
                _: 1
                /* STABLE */
              })
            ])
          ])
        ]),
        default: g(() => [
          b(" 卡片主体 "),
          h(
            "div",
            {
              class: "card-body",
              style: S(`height: ${t.height}px`)
            },
            [
              b(" 空 "),
              u(_) ? (c(), C(re, {
                key: 0,
                description: "No Data"
              })) : u(l) < u(r).length - 1 ? (c(), v(
                B,
                { key: 1 },
                [
                  b(" 图表 "),
                  y(ae, {
                    ref_key: "refChart",
                    ref: n,
                    options: u(p),
                    style: S(`height: ${t.height}px`)
                  }, null, 8, ["options", "style"])
                ],
                2112
                /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
              )) : (c(), v(
                B,
                { key: 2 },
                [
                  b(" 表格 "),
                  y(le, {
                    data: u(i).slice(1)
                  }, {
                    default: g(() => [
                      (c(!0), v(
                        B,
                        null,
                        M(u(i)[0], (I, E) => (c(), C(se, {
                          key: I,
                          prop: E.toString(),
                          label: I
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
        [ie, u(a)]
      ]);
    };
  }
});
const G = /* @__PURE__ */ X(Rt, [["__scopeId", "data-v-23977528"]]), Zt = {
  install(e) {
    e.component(G.name, G);
  }
};
export {
  G as CmChartCard,
  Zt as default
};
