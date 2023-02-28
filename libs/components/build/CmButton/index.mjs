import { openBlock as k, createElementBlock as H, createElementVNode as St, warn as wt, getCurrentInstance as it, computed as S, ref as V, inject as A, unref as u, watch as xt, defineComponent as $, mergeProps as ct, renderSlot as R, useSlots as Mt, Text as $t, normalizeClass as P, normalizeStyle as Bt, Fragment as Nt, createBlock as E, withCtx as j, resolveDynamicComponent as W, createCommentVNode as J, provide as At, reactive as Ht, toRef as Z } from "vue";
function Rt(t) {
  for (var e = -1, r = t == null ? 0 : t.length, n = {}; ++e < r; ) {
    var a = t[e];
    n[a[0]] = a[1];
  }
  return n;
}
var Q;
const Et = typeof window < "u", It = (t) => typeof t == "number";
Et && ((Q = window == null ? void 0 : window.navigator) != null && Q.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const zt = () => {
}, Pt = Object.prototype.hasOwnProperty, X = (t, e) => Pt.call(t, e), L = (t) => typeof t == "string", ut = (t) => t !== null && typeof t == "object", Vt = (t) => t === void 0, Ct = (t) => L(t) ? !Number.isNaN(Number(t)) : !1;
class Tt extends Error {
  constructor(e) {
    super(e), this.name = "ElementPlusError";
  }
}
function lt(t, e) {
  if (process.env.NODE_ENV !== "production") {
    const r = L(t) ? new Tt(`[${t}] ${e}`) : t;
    console.warn(r);
  }
}
const Ot = "utils/dom/style";
function Ft(t, e = "px") {
  if (!t)
    return "";
  if (It(t) || Ct(t))
    return `${t}${e}`;
  if (L(t))
    return t;
  lt(Ot, "binding value must be a string or number");
}
/*! Element Plus Icons Vue v2.0.10 */
var jt = (t, e) => {
  let r = t.__vccOpts || t;
  for (let [n, a] of e)
    r[n] = a;
  return r;
}, Gt = {
  name: "Loading"
}, Dt = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Lt = /* @__PURE__ */ St("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1), qt = [
  Lt
];
function Kt(t, e, r, n, a, o) {
  return k(), H("svg", Dt, qt);
}
var Ut = /* @__PURE__ */ jt(Gt, [["render", Kt], ["__file", "loading.vue"]]);
const ft = "__epPropKey", dt = (t) => t, Wt = (t) => ut(t) && !!t[ft], ht = (t, e) => {
  if (!ut(t) || Wt(t))
    return t;
  const { values: r, required: n, default: a, type: o, validator: s } = t, d = {
    type: o,
    required: !!n,
    validator: r || s ? (g) => {
      let p = !1, b = [];
      if (r && (b = Array.from(r), X(t, "default") && b.push(a), p || (p = b.includes(g))), s && (p || (p = s(g))), !p && b.length > 0) {
        const f = [...new Set(b)].map((m) => JSON.stringify(m)).join(", ");
        wt(`Invalid prop: validation failed${e ? ` for prop "${e}"` : ""}. Expected one of [${f}], got value ${JSON.stringify(g)}.`);
      }
      return p;
    } : void 0,
    [ft]: !0
  };
  return X(t, "default") && (d.default = a), d;
}, gt = (t) => Rt(Object.entries(t).map(([e, r]) => [
  e,
  ht(r, e)
])), Y = dt([
  String,
  Object,
  Function
]), pt = (t, e) => {
  if (t.install = (r) => {
    for (const n of [t, ...Object.values(e ?? {})])
      r.component(n.name, n);
  }, e)
    for (const [r, n] of Object.entries(e))
      t[r] = n;
  return t;
}, Jt = (t) => (t.install = zt, t), Zt = ["", "default", "small", "large"], vt = Symbol("buttonGroupContextKey"), Qt = Symbol(), q = Symbol("formContextKey"), bt = Symbol("formItemContextKey"), mt = (t) => {
  const e = it();
  return S(() => {
    var r, n;
    return (n = ((r = e.proxy) == null ? void 0 : r.$props)[t]) != null ? n : void 0;
  });
}, tt = V();
function K(t, e = void 0) {
  const r = it() ? A(Qt, tt) : tt;
  return t ? S(() => {
    var n, a;
    return (a = (n = r.value) == null ? void 0 : n[t]) != null ? a : e;
  }) : r;
}
const Xt = ht({
  type: String,
  values: Zt,
  required: !1
}), Yt = (t, e = {}) => {
  const r = V(void 0), n = e.prop ? r : mt("size"), a = e.global ? r : K("size"), o = e.form ? { size: void 0 } : A(q, void 0), s = e.formItem ? { size: void 0 } : A(bt, void 0);
  return S(() => n.value || u(t) || (s == null ? void 0 : s.size) || (o == null ? void 0 : o.size) || a.value || "");
}, yt = (t) => {
  const e = mt("disabled"), r = A(q, void 0);
  return S(() => e.value || u(t) || (r == null ? void 0 : r.disabled) || !1);
}, te = ({ from: t, replacement: e, scope: r, version: n, ref: a, type: o = "API" }, s) => {
  xt(() => u(s), (c) => {
    c && lt(r, `[${o}] ${t} is about to be deprecated in version ${n}, please use ${e} instead.
For more detail, please visit: ${a}
`);
  }, {
    immediate: !0
  });
}, ee = "el", re = "is-", B = (t, e, r, n, a) => {
  let o = `${t}-${e}`;
  return r && (o += `-${r}`), n && (o += `__${n}`), a && (o += `--${a}`), o;
}, C = (t) => {
  const e = K("namespace", ee);
  return {
    namespace: e,
    b: (i = "") => B(e.value, t, i, "", ""),
    e: (i) => i ? B(e.value, t, "", i, "") : "",
    m: (i) => i ? B(e.value, t, "", "", i) : "",
    be: (i, l) => i && l ? B(e.value, t, i, l, "") : "",
    em: (i, l) => i && l ? B(e.value, t, "", i, l) : "",
    bm: (i, l) => i && l ? B(e.value, t, i, "", l) : "",
    bem: (i, l, v) => i && l && v ? B(e.value, t, i, l, v) : "",
    is: (i, ...l) => {
      const v = l.length >= 1 ? l[0] : !0;
      return i && v ? `${re}${i}` : "";
    },
    cssVar: (i) => {
      const l = {};
      for (const v in i)
        i[v] && (l[`--${e.value}-${v}`] = i[v]);
      return l;
    },
    cssVarName: (i) => `--${e.value}-${i}`,
    cssVarBlock: (i) => {
      const l = {};
      for (const v in i)
        i[v] && (l[`--${e.value}-${t}-${v}`] = i[v]);
      return l;
    },
    cssVarBlockName: (i) => `--${e.value}-${t}-${i}`
  };
}, ne = () => {
  const t = A(q, void 0), e = A(bt, void 0);
  return {
    form: t,
    formItem: e
  };
};
var U = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, a] of e)
    r[n] = a;
  return r;
};
const ae = gt({
  size: {
    type: dt([Number, String])
  },
  color: {
    type: String
  }
}), oe = $({
  name: "ElIcon",
  inheritAttrs: !1
}), se = /* @__PURE__ */ $({
  ...oe,
  props: ae,
  setup(t) {
    const e = t, r = C("icon"), n = S(() => {
      const { size: a, color: o } = e;
      return !a && !o ? {} : {
        fontSize: Vt(a) ? void 0 : Ft(a),
        "--color": o
      };
    });
    return (a, o) => (k(), H("i", ct({
      class: u(r).b(),
      style: u(n)
    }, a.$attrs), [
      R(a.$slots, "default")
    ], 16));
  }
});
var ie = /* @__PURE__ */ U(se, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const et = pt(ie), ce = (t, e) => {
  te({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, S(() => t.type === "text"));
  const r = A(vt, void 0), n = K("button"), { form: a } = ne(), o = Yt(S(() => r == null ? void 0 : r.size)), s = yt(), c = V(), d = Mt(), g = S(() => t.type || (r == null ? void 0 : r.type) || ""), p = S(() => {
    var m, i, l;
    return (l = (i = t.autoInsertSpace) != null ? i : (m = n.value) == null ? void 0 : m.autoInsertSpace) != null ? l : !1;
  }), b = S(() => {
    var m;
    const i = (m = d.default) == null ? void 0 : m.call(d);
    if (p.value && (i == null ? void 0 : i.length) === 1) {
      const l = i[0];
      if ((l == null ? void 0 : l.type) === $t) {
        const v = l.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(v.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: s,
    _size: o,
    _type: g,
    _ref: c,
    shouldAddSpace: b,
    handleClick: (m) => {
      t.nativeType === "reset" && (a == null || a.resetFields()), e("click", m);
    }
  };
}, ue = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], le = ["button", "submit", "reset"], G = gt({
  size: Xt,
  disabled: Boolean,
  type: {
    type: String,
    values: ue,
    default: ""
  },
  icon: {
    type: Y
  },
  nativeType: {
    type: String,
    values: le,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: Y,
    default: () => Ut
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  }
}), fe = {
  click: (t) => t instanceof MouseEvent
};
function h(t, e) {
  de(t) && (t = "100%");
  var r = he(t);
  return t = e === 360 ? t : Math.min(e, Math.max(0, parseFloat(t))), r && (t = parseInt(String(t * e), 10) / 100), Math.abs(t - e) < 1e-6 ? 1 : (e === 360 ? t = (t < 0 ? t % e + e : t % e) / parseFloat(String(e)) : t = t % e / parseFloat(String(e)), t);
}
function I(t) {
  return Math.min(1, Math.max(0, t));
}
function de(t) {
  return typeof t == "string" && t.indexOf(".") !== -1 && parseFloat(t) === 1;
}
function he(t) {
  return typeof t == "string" && t.indexOf("%") !== -1;
}
function _t(t) {
  return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
}
function z(t) {
  return t <= 1 ? "".concat(Number(t) * 100, "%") : t;
}
function N(t) {
  return t.length === 1 ? "0" + t : String(t);
}
function ge(t, e, r) {
  return {
    r: h(t, 255) * 255,
    g: h(e, 255) * 255,
    b: h(r, 255) * 255
  };
}
function rt(t, e, r) {
  t = h(t, 255), e = h(e, 255), r = h(r, 255);
  var n = Math.max(t, e, r), a = Math.min(t, e, r), o = 0, s = 0, c = (n + a) / 2;
  if (n === a)
    s = 0, o = 0;
  else {
    var d = n - a;
    switch (s = c > 0.5 ? d / (2 - n - a) : d / (n + a), n) {
      case t:
        o = (e - r) / d + (e < r ? 6 : 0);
        break;
      case e:
        o = (r - t) / d + 2;
        break;
      case r:
        o = (t - e) / d + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s, l: c };
}
function T(t, e, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (e - t) * (6 * r) : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t;
}
function pe(t, e, r) {
  var n, a, o;
  if (t = h(t, 360), e = h(e, 100), r = h(r, 100), e === 0)
    a = r, o = r, n = r;
  else {
    var s = r < 0.5 ? r * (1 + e) : r + e - r * e, c = 2 * r - s;
    n = T(c, s, t + 1 / 3), a = T(c, s, t), o = T(c, s, t - 1 / 3);
  }
  return { r: n * 255, g: a * 255, b: o * 255 };
}
function nt(t, e, r) {
  t = h(t, 255), e = h(e, 255), r = h(r, 255);
  var n = Math.max(t, e, r), a = Math.min(t, e, r), o = 0, s = n, c = n - a, d = n === 0 ? 0 : c / n;
  if (n === a)
    o = 0;
  else {
    switch (n) {
      case t:
        o = (e - r) / c + (e < r ? 6 : 0);
        break;
      case e:
        o = (r - t) / c + 2;
        break;
      case r:
        o = (t - e) / c + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: d, v: s };
}
function ve(t, e, r) {
  t = h(t, 360) * 6, e = h(e, 100), r = h(r, 100);
  var n = Math.floor(t), a = t - n, o = r * (1 - e), s = r * (1 - a * e), c = r * (1 - (1 - a) * e), d = n % 6, g = [r, s, o, o, c, r][d], p = [c, r, r, s, o, o][d], b = [o, o, c, r, r, s][d];
  return { r: g * 255, g: p * 255, b: b * 255 };
}
function at(t, e, r, n) {
  var a = [
    N(Math.round(t).toString(16)),
    N(Math.round(e).toString(16)),
    N(Math.round(r).toString(16))
  ];
  return n && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function be(t, e, r, n, a) {
  var o = [
    N(Math.round(t).toString(16)),
    N(Math.round(e).toString(16)),
    N(Math.round(r).toString(16)),
    N(me(n))
  ];
  return a && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function me(t) {
  return Math.round(parseFloat(t) * 255).toString(16);
}
function ot(t) {
  return y(t) / 255;
}
function y(t) {
  return parseInt(t, 16);
}
function ye(t) {
  return {
    r: t >> 16,
    g: (t & 65280) >> 8,
    b: t & 255
  };
}
var D = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function _e(t) {
  var e = { r: 0, g: 0, b: 0 }, r = 1, n = null, a = null, o = null, s = !1, c = !1;
  return typeof t == "string" && (t = we(t)), typeof t == "object" && (w(t.r) && w(t.g) && w(t.b) ? (e = ge(t.r, t.g, t.b), s = !0, c = String(t.r).substr(-1) === "%" ? "prgb" : "rgb") : w(t.h) && w(t.s) && w(t.v) ? (n = z(t.s), a = z(t.v), e = ve(t.h, n, a), s = !0, c = "hsv") : w(t.h) && w(t.s) && w(t.l) && (n = z(t.s), o = z(t.l), e = pe(t.h, n, o), s = !0, c = "hsl"), Object.prototype.hasOwnProperty.call(t, "a") && (r = t.a)), r = _t(r), {
    ok: s,
    format: t.format || c,
    r: Math.min(255, Math.max(e.r, 0)),
    g: Math.min(255, Math.max(e.g, 0)),
    b: Math.min(255, Math.max(e.b, 0)),
    a: r
  };
}
var ke = "[-\\+]?\\d+%?", Se = "[-\\+]?\\d*\\.\\d+%?", M = "(?:".concat(Se, ")|(?:").concat(ke, ")"), O = "[\\s|\\(]+(".concat(M, ")[,|\\s]+(").concat(M, ")[,|\\s]+(").concat(M, ")\\s*\\)?"), F = "[\\s|\\(]+(".concat(M, ")[,|\\s]+(").concat(M, ")[,|\\s]+(").concat(M, ")[,|\\s]+(").concat(M, ")\\s*\\)?"), _ = {
  CSS_UNIT: new RegExp(M),
  rgb: new RegExp("rgb" + O),
  rgba: new RegExp("rgba" + F),
  hsl: new RegExp("hsl" + O),
  hsla: new RegExp("hsla" + F),
  hsv: new RegExp("hsv" + O),
  hsva: new RegExp("hsva" + F),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function we(t) {
  if (t = t.trim().toLowerCase(), t.length === 0)
    return !1;
  var e = !1;
  if (D[t])
    t = D[t], e = !0;
  else if (t === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = _.rgb.exec(t);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = _.rgba.exec(t), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = _.hsl.exec(t), r ? { h: r[1], s: r[2], l: r[3] } : (r = _.hsla.exec(t), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = _.hsv.exec(t), r ? { h: r[1], s: r[2], v: r[3] } : (r = _.hsva.exec(t), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = _.hex8.exec(t), r ? {
    r: y(r[1]),
    g: y(r[2]),
    b: y(r[3]),
    a: ot(r[4]),
    format: e ? "name" : "hex8"
  } : (r = _.hex6.exec(t), r ? {
    r: y(r[1]),
    g: y(r[2]),
    b: y(r[3]),
    format: e ? "name" : "hex"
  } : (r = _.hex4.exec(t), r ? {
    r: y(r[1] + r[1]),
    g: y(r[2] + r[2]),
    b: y(r[3] + r[3]),
    a: ot(r[4] + r[4]),
    format: e ? "name" : "hex8"
  } : (r = _.hex3.exec(t), r ? {
    r: y(r[1] + r[1]),
    g: y(r[2] + r[2]),
    b: y(r[3] + r[3]),
    format: e ? "name" : "hex"
  } : !1)))))))));
}
function w(t) {
  return Boolean(_.CSS_UNIT.exec(String(t)));
}
var xe = (
  /** @class */
  function() {
    function t(e, r) {
      e === void 0 && (e = ""), r === void 0 && (r = {});
      var n;
      if (e instanceof t)
        return e;
      typeof e == "number" && (e = ye(e)), this.originalInput = e;
      var a = _e(e);
      this.originalInput = e, this.r = a.r, this.g = a.g, this.b = a.b, this.a = a.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (n = r.format) !== null && n !== void 0 ? n : a.format, this.gradientType = r.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = a.ok;
    }
    return t.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, t.prototype.isLight = function() {
      return !this.isDark();
    }, t.prototype.getBrightness = function() {
      var e = this.toRgb();
      return (e.r * 299 + e.g * 587 + e.b * 114) / 1e3;
    }, t.prototype.getLuminance = function() {
      var e = this.toRgb(), r, n, a, o = e.r / 255, s = e.g / 255, c = e.b / 255;
      return o <= 0.03928 ? r = o / 12.92 : r = Math.pow((o + 0.055) / 1.055, 2.4), s <= 0.03928 ? n = s / 12.92 : n = Math.pow((s + 0.055) / 1.055, 2.4), c <= 0.03928 ? a = c / 12.92 : a = Math.pow((c + 0.055) / 1.055, 2.4), 0.2126 * r + 0.7152 * n + 0.0722 * a;
    }, t.prototype.getAlpha = function() {
      return this.a;
    }, t.prototype.setAlpha = function(e) {
      return this.a = _t(e), this.roundA = Math.round(100 * this.a) / 100, this;
    }, t.prototype.isMonochrome = function() {
      var e = this.toHsl().s;
      return e === 0;
    }, t.prototype.toHsv = function() {
      var e = nt(this.r, this.g, this.b);
      return { h: e.h * 360, s: e.s, v: e.v, a: this.a };
    }, t.prototype.toHsvString = function() {
      var e = nt(this.r, this.g, this.b), r = Math.round(e.h * 360), n = Math.round(e.s * 100), a = Math.round(e.v * 100);
      return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(a, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, t.prototype.toHsl = function() {
      var e = rt(this.r, this.g, this.b);
      return { h: e.h * 360, s: e.s, l: e.l, a: this.a };
    }, t.prototype.toHslString = function() {
      var e = rt(this.r, this.g, this.b), r = Math.round(e.h * 360), n = Math.round(e.s * 100), a = Math.round(e.l * 100);
      return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(a, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, t.prototype.toHex = function(e) {
      return e === void 0 && (e = !1), at(this.r, this.g, this.b, e);
    }, t.prototype.toHexString = function(e) {
      return e === void 0 && (e = !1), "#" + this.toHex(e);
    }, t.prototype.toHex8 = function(e) {
      return e === void 0 && (e = !1), be(this.r, this.g, this.b, this.a, e);
    }, t.prototype.toHex8String = function(e) {
      return e === void 0 && (e = !1), "#" + this.toHex8(e);
    }, t.prototype.toHexShortString = function(e) {
      return e === void 0 && (e = !1), this.a === 1 ? this.toHexString(e) : this.toHex8String(e);
    }, t.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, t.prototype.toRgbString = function() {
      var e = Math.round(this.r), r = Math.round(this.g), n = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(e, ", ").concat(r, ", ").concat(n, ")") : "rgba(".concat(e, ", ").concat(r, ", ").concat(n, ", ").concat(this.roundA, ")");
    }, t.prototype.toPercentageRgb = function() {
      var e = function(r) {
        return "".concat(Math.round(h(r, 255) * 100), "%");
      };
      return {
        r: e(this.r),
        g: e(this.g),
        b: e(this.b),
        a: this.a
      };
    }, t.prototype.toPercentageRgbString = function() {
      var e = function(r) {
        return Math.round(h(r, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(e(this.r), "%, ").concat(e(this.g), "%, ").concat(e(this.b), "%)") : "rgba(".concat(e(this.r), "%, ").concat(e(this.g), "%, ").concat(e(this.b), "%, ").concat(this.roundA, ")");
    }, t.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var e = "#" + at(this.r, this.g, this.b, !1), r = 0, n = Object.entries(D); r < n.length; r++) {
        var a = n[r], o = a[0], s = a[1];
        if (e === s)
          return o;
      }
      return !1;
    }, t.prototype.toString = function(e) {
      var r = Boolean(e);
      e = e ?? this.format;
      var n = !1, a = this.a < 1 && this.a >= 0, o = !r && a && (e.startsWith("hex") || e === "name");
      return o ? e === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (e === "rgb" && (n = this.toRgbString()), e === "prgb" && (n = this.toPercentageRgbString()), (e === "hex" || e === "hex6") && (n = this.toHexString()), e === "hex3" && (n = this.toHexString(!0)), e === "hex4" && (n = this.toHex8String(!0)), e === "hex8" && (n = this.toHex8String()), e === "name" && (n = this.toName()), e === "hsl" && (n = this.toHslString()), e === "hsv" && (n = this.toHsvString()), n || this.toHexString());
    }, t.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, t.prototype.clone = function() {
      return new t(this.toString());
    }, t.prototype.lighten = function(e) {
      e === void 0 && (e = 10);
      var r = this.toHsl();
      return r.l += e / 100, r.l = I(r.l), new t(r);
    }, t.prototype.brighten = function(e) {
      e === void 0 && (e = 10);
      var r = this.toRgb();
      return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(e / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(e / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(e / 100)))), new t(r);
    }, t.prototype.darken = function(e) {
      e === void 0 && (e = 10);
      var r = this.toHsl();
      return r.l -= e / 100, r.l = I(r.l), new t(r);
    }, t.prototype.tint = function(e) {
      return e === void 0 && (e = 10), this.mix("white", e);
    }, t.prototype.shade = function(e) {
      return e === void 0 && (e = 10), this.mix("black", e);
    }, t.prototype.desaturate = function(e) {
      e === void 0 && (e = 10);
      var r = this.toHsl();
      return r.s -= e / 100, r.s = I(r.s), new t(r);
    }, t.prototype.saturate = function(e) {
      e === void 0 && (e = 10);
      var r = this.toHsl();
      return r.s += e / 100, r.s = I(r.s), new t(r);
    }, t.prototype.greyscale = function() {
      return this.desaturate(100);
    }, t.prototype.spin = function(e) {
      var r = this.toHsl(), n = (r.h + e) % 360;
      return r.h = n < 0 ? 360 + n : n, new t(r);
    }, t.prototype.mix = function(e, r) {
      r === void 0 && (r = 50);
      var n = this.toRgb(), a = new t(e).toRgb(), o = r / 100, s = {
        r: (a.r - n.r) * o + n.r,
        g: (a.g - n.g) * o + n.g,
        b: (a.b - n.b) * o + n.b,
        a: (a.a - n.a) * o + n.a
      };
      return new t(s);
    }, t.prototype.analogous = function(e, r) {
      e === void 0 && (e = 6), r === void 0 && (r = 30);
      var n = this.toHsl(), a = 360 / r, o = [this];
      for (n.h = (n.h - (a * e >> 1) + 720) % 360; --e; )
        n.h = (n.h + a) % 360, o.push(new t(n));
      return o;
    }, t.prototype.complement = function() {
      var e = this.toHsl();
      return e.h = (e.h + 180) % 360, new t(e);
    }, t.prototype.monochromatic = function(e) {
      e === void 0 && (e = 6);
      for (var r = this.toHsv(), n = r.h, a = r.s, o = r.v, s = [], c = 1 / e; e--; )
        s.push(new t({ h: n, s: a, v: o })), o = (o + c) % 1;
      return s;
    }, t.prototype.splitcomplement = function() {
      var e = this.toHsl(), r = e.h;
      return [
        this,
        new t({ h: (r + 72) % 360, s: e.s, l: e.l }),
        new t({ h: (r + 216) % 360, s: e.s, l: e.l })
      ];
    }, t.prototype.onBackground = function(e) {
      var r = this.toRgb(), n = new t(e).toRgb(), a = r.a + n.a * (1 - r.a);
      return new t({
        r: (r.r * r.a + n.r * n.a * (1 - r.a)) / a,
        g: (r.g * r.a + n.g * n.a * (1 - r.a)) / a,
        b: (r.b * r.a + n.b * n.a * (1 - r.a)) / a,
        a
      });
    }, t.prototype.triad = function() {
      return this.polyad(3);
    }, t.prototype.tetrad = function() {
      return this.polyad(4);
    }, t.prototype.polyad = function(e) {
      for (var r = this.toHsl(), n = r.h, a = [this], o = 360 / e, s = 1; s < e; s++)
        a.push(new t({ h: (n + s * o) % 360, s: r.s, l: r.l }));
      return a;
    }, t.prototype.equals = function(e) {
      return this.toRgbString() === new t(e).toRgbString();
    }, t;
  }()
);
function x(t, e = 20) {
  return t.mix("#141414", e).toString();
}
function Me(t) {
  const e = yt(), r = C("button");
  return S(() => {
    let n = {};
    const a = t.color;
    if (a) {
      const o = new xe(a), s = t.dark ? o.tint(20).toString() : x(o, 20);
      if (t.plain)
        n = r.cssVarBlock({
          "bg-color": t.dark ? x(o, 90) : o.tint(90).toString(),
          "text-color": a,
          "border-color": t.dark ? x(o, 50) : o.tint(50).toString(),
          "hover-text-color": `var(${r.cssVarName("color-white")})`,
          "hover-bg-color": a,
          "hover-border-color": a,
          "active-bg-color": s,
          "active-text-color": `var(${r.cssVarName("color-white")})`,
          "active-border-color": s
        }), e.value && (n[r.cssVarBlockName("disabled-bg-color")] = t.dark ? x(o, 90) : o.tint(90).toString(), n[r.cssVarBlockName("disabled-text-color")] = t.dark ? x(o, 50) : o.tint(50).toString(), n[r.cssVarBlockName("disabled-border-color")] = t.dark ? x(o, 80) : o.tint(80).toString());
      else {
        const c = t.dark ? x(o, 30) : o.tint(30).toString(), d = o.isDark() ? `var(${r.cssVarName("color-white")})` : `var(${r.cssVarName("color-black")})`;
        if (n = r.cssVarBlock({
          "bg-color": a,
          "text-color": d,
          "border-color": a,
          "hover-bg-color": c,
          "hover-text-color": d,
          "hover-border-color": c,
          "active-bg-color": s,
          "active-border-color": s
        }), e.value) {
          const g = t.dark ? x(o, 50) : o.tint(50).toString();
          n[r.cssVarBlockName("disabled-bg-color")] = g, n[r.cssVarBlockName("disabled-text-color")] = t.dark ? "rgba(255, 255, 255, 0.5)" : `var(${r.cssVarName("color-white")})`, n[r.cssVarBlockName("disabled-border-color")] = g;
        }
      }
    }
    return n;
  });
}
const $e = ["aria-disabled", "disabled", "autofocus", "type"], Be = $({
  name: "ElButton"
}), Ne = /* @__PURE__ */ $({
  ...Be,
  props: G,
  emits: fe,
  setup(t, { expose: e, emit: r }) {
    const n = t, a = Me(n), o = C("button"), { _ref: s, _size: c, _type: d, _disabled: g, shouldAddSpace: p, handleClick: b } = ce(n, r);
    return e({
      ref: s,
      size: c,
      type: d,
      disabled: g,
      shouldAddSpace: p
    }), (f, m) => (k(), H("button", {
      ref_key: "_ref",
      ref: s,
      class: P([
        u(o).b(),
        u(o).m(u(d)),
        u(o).m(u(c)),
        u(o).is("disabled", u(g)),
        u(o).is("loading", f.loading),
        u(o).is("plain", f.plain),
        u(o).is("round", f.round),
        u(o).is("circle", f.circle),
        u(o).is("text", f.text),
        u(o).is("link", f.link),
        u(o).is("has-bg", f.bg)
      ]),
      "aria-disabled": u(g) || f.loading,
      disabled: u(g) || f.loading,
      autofocus: f.autofocus,
      type: f.nativeType,
      style: Bt(u(a)),
      onClick: m[0] || (m[0] = (...i) => u(b) && u(b)(...i))
    }, [
      f.loading ? (k(), H(Nt, { key: 0 }, [
        f.$slots.loading ? R(f.$slots, "loading", { key: 0 }) : (k(), E(u(et), {
          key: 1,
          class: P(u(o).is("loading"))
        }, {
          default: j(() => [
            (k(), E(W(f.loadingIcon)))
          ]),
          _: 1
        }, 8, ["class"]))
      ], 64)) : f.icon || f.$slots.icon ? (k(), E(u(et), { key: 1 }, {
        default: j(() => [
          f.icon ? (k(), E(W(f.icon), { key: 0 })) : R(f.$slots, "icon", { key: 1 })
        ]),
        _: 3
      })) : J("v-if", !0),
      f.$slots.default ? (k(), H("span", {
        key: 2,
        class: P({ [u(o).em("text", "expand")]: u(p) })
      }, [
        R(f.$slots, "default")
      ], 2)) : J("v-if", !0)
    ], 14, $e));
  }
});
var Ae = /* @__PURE__ */ U(Ne, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const He = {
  size: G.size,
  type: G.type
}, Re = $({
  name: "ElButtonGroup"
}), Ee = /* @__PURE__ */ $({
  ...Re,
  props: He,
  setup(t) {
    const e = t;
    At(vt, Ht({
      size: Z(e, "size"),
      type: Z(e, "type")
    }));
    const r = C("button");
    return (n, a) => (k(), H("div", {
      class: P(`${u(r).b("group")}`)
    }, [
      R(n.$slots, "default")
    ], 2));
  }
});
var kt = /* @__PURE__ */ U(Ee, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const Ie = pt(Ae, {
  ButtonGroup: kt
});
Jt(kt);
const ze = $({
  name: "cm-button"
}), Pe = /* @__PURE__ */ $({
  ...ze,
  props: {
    handler: null
  },
  setup(t) {
    const e = t, r = V(!1), n = async (a) => {
      r.value = !0;
      try {
        await e.handler(a);
      } catch {
      }
      r.value = !1;
    };
    return (a, o) => {
      const s = Ie;
      return k(), E(s, ct(a.$attrs, {
        loading: u(r),
        onClick: n
      }), {
        default: j(() => [
          R(a.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["loading"]);
    };
  }
});
const Ve = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, a] of e)
    r[n] = a;
  return r;
}, st = /* @__PURE__ */ Ve(Pe, [["__scopeId", "data-v-5e79745c"]]), Te = {
  install(t) {
    t.component(st.name, st);
  }
};
export {
  st as CmButton,
  Te as default
};
