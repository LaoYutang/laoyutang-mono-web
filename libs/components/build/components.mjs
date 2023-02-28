import { openBlock as S, createElementBlock as A, createElementVNode as ct, warn as $t, getCurrentInstance as ut, computed as _, ref as z, inject as H, unref as u, watch as Mt, defineComponent as x, mergeProps as lt, renderSlot as C, useSlots as Bt, Text as Nt, normalizeClass as V, normalizeStyle as At, Fragment as Ht, createBlock as I, withCtx as j, resolveDynamicComponent as U, createCommentVNode as J, provide as Ct, reactive as It, toRef as Z, useCssVars as Et } from "vue";
function Rt(t) {
  for (var e = -1, r = t == null ? 0 : t.length, n = {}; ++e < r; ) {
    var o = t[e];
    n[o[0]] = o[1];
  }
  return n;
}
var Q;
const Vt = typeof window < "u", zt = (t) => typeof t == "number";
Vt && ((Q = window == null ? void 0 : window.navigator) != null && Q.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Pt = () => {
}, Tt = Object.prototype.hasOwnProperty, X = (t, e) => Tt.call(t, e), L = (t) => typeof t == "string", ft = (t) => t !== null && typeof t == "object", Ot = (t) => t === void 0, Ft = (t) => L(t) ? !Number.isNaN(Number(t)) : !1;
class jt extends Error {
  constructor(e) {
    super(e), this.name = "ElementPlusError";
  }
}
function dt(t, e) {
  if (process.env.NODE_ENV !== "production") {
    const r = L(t) ? new jt(`[${t}] ${e}`) : t;
    console.warn(r);
  }
}
const Gt = "utils/dom/style";
function Dt(t, e = "px") {
  if (!t)
    return "";
  if (zt(t) || Ft(t))
    return `${t}${e}`;
  if (L(t))
    return t;
  dt(Gt, "binding value must be a string or number");
}
/*! Element Plus Icons Vue v2.0.10 */
var Lt = (t, e) => {
  let r = t.__vccOpts || t;
  for (let [n, o] of e)
    r[n] = o;
  return r;
}, Wt = {
  name: "Loading"
}, qt = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Kt = /* @__PURE__ */ ct("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1), Ut = [
  Kt
];
function Jt(t, e, r, n, o, a) {
  return S(), A("svg", qt, Ut);
}
var Zt = /* @__PURE__ */ Lt(Wt, [["render", Jt], ["__file", "loading.vue"]]);
const ht = "__epPropKey", gt = (t) => t, Qt = (t) => ft(t) && !!t[ht], pt = (t, e) => {
  if (!ft(t) || Qt(t))
    return t;
  const { values: r, required: n, default: o, type: a, validator: s } = t, d = {
    type: a,
    required: !!n,
    validator: r || s ? (g) => {
      let p = !1, b = [];
      if (r && (b = Array.from(r), X(t, "default") && b.push(o), p || (p = b.includes(g))), s && (p || (p = s(g))), !p && b.length > 0) {
        const f = [...new Set(b)].map((m) => JSON.stringify(m)).join(", ");
        $t(`Invalid prop: validation failed${e ? ` for prop "${e}"` : ""}. Expected one of [${f}], got value ${JSON.stringify(g)}.`);
      }
      return p;
    } : void 0,
    [ht]: !0
  };
  return X(t, "default") && (d.default = o), d;
}, vt = (t) => Rt(Object.entries(t).map(([e, r]) => [
  e,
  pt(r, e)
])), Y = gt([
  String,
  Object,
  Function
]), bt = (t, e) => {
  if (t.install = (r) => {
    for (const n of [t, ...Object.values(e ?? {})])
      r.component(n.name, n);
  }, e)
    for (const [r, n] of Object.entries(e))
      t[r] = n;
  return t;
}, Xt = (t) => (t.install = Pt, t), Yt = ["", "default", "small", "large"], mt = Symbol("buttonGroupContextKey"), te = Symbol(), W = Symbol("formContextKey"), yt = Symbol("formItemContextKey"), _t = (t) => {
  const e = ut();
  return _(() => {
    var r, n;
    return (n = ((r = e.proxy) == null ? void 0 : r.$props)[t]) != null ? n : void 0;
  });
}, tt = z();
function q(t, e = void 0) {
  const r = ut() ? H(te, tt) : tt;
  return t ? _(() => {
    var n, o;
    return (o = (n = r.value) == null ? void 0 : n[t]) != null ? o : e;
  }) : r;
}
const ee = pt({
  type: String,
  values: Yt,
  required: !1
}), re = (t, e = {}) => {
  const r = z(void 0), n = e.prop ? r : _t("size"), o = e.global ? r : q("size"), a = e.form ? { size: void 0 } : H(W, void 0), s = e.formItem ? { size: void 0 } : H(yt, void 0);
  return _(() => n.value || u(t) || (s == null ? void 0 : s.size) || (a == null ? void 0 : a.size) || o.value || "");
}, St = (t) => {
  const e = _t("disabled"), r = H(W, void 0);
  return _(() => e.value || u(t) || (r == null ? void 0 : r.disabled) || !1);
}, ne = ({ from: t, replacement: e, scope: r, version: n, ref: o, type: a = "API" }, s) => {
  Mt(() => u(s), (c) => {
    c && dt(r, `[${a}] ${t} is about to be deprecated in version ${n}, please use ${e} instead.
For more detail, please visit: ${o}
`);
  }, {
    immediate: !0
  });
}, oe = "el", ae = "is-", B = (t, e, r, n, o) => {
  let a = `${t}-${e}`;
  return r && (a += `-${r}`), n && (a += `__${n}`), o && (a += `--${o}`), a;
}, P = (t) => {
  const e = q("namespace", oe);
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
      return i && v ? `${ae}${i}` : "";
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
}, se = () => {
  const t = H(W, void 0), e = H(yt, void 0);
  return {
    form: t,
    formItem: e
  };
};
var K = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, o] of e)
    r[n] = o;
  return r;
};
const ie = vt({
  size: {
    type: gt([Number, String])
  },
  color: {
    type: String
  }
}), ce = x({
  name: "ElIcon",
  inheritAttrs: !1
}), ue = /* @__PURE__ */ x({
  ...ce,
  props: ie,
  setup(t) {
    const e = t, r = P("icon"), n = _(() => {
      const { size: o, color: a } = e;
      return !o && !a ? {} : {
        fontSize: Ot(o) ? void 0 : Dt(o),
        "--color": a
      };
    });
    return (o, a) => (S(), A("i", lt({
      class: u(r).b(),
      style: u(n)
    }, o.$attrs), [
      C(o.$slots, "default")
    ], 16));
  }
});
var le = /* @__PURE__ */ K(ue, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const et = bt(le), fe = (t, e) => {
  ne({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, _(() => t.type === "text"));
  const r = H(mt, void 0), n = q("button"), { form: o } = se(), a = re(_(() => r == null ? void 0 : r.size)), s = St(), c = z(), d = Bt(), g = _(() => t.type || (r == null ? void 0 : r.type) || ""), p = _(() => {
    var m, i, l;
    return (l = (i = t.autoInsertSpace) != null ? i : (m = n.value) == null ? void 0 : m.autoInsertSpace) != null ? l : !1;
  }), b = _(() => {
    var m;
    const i = (m = d.default) == null ? void 0 : m.call(d);
    if (p.value && (i == null ? void 0 : i.length) === 1) {
      const l = i[0];
      if ((l == null ? void 0 : l.type) === Nt) {
        const v = l.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(v.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: s,
    _size: a,
    _type: g,
    _ref: c,
    shouldAddSpace: b,
    handleClick: (m) => {
      t.nativeType === "reset" && (o == null || o.resetFields()), e("click", m);
    }
  };
}, de = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], he = ["button", "submit", "reset"], G = vt({
  size: ee,
  disabled: Boolean,
  type: {
    type: String,
    values: de,
    default: ""
  },
  icon: {
    type: Y
  },
  nativeType: {
    type: String,
    values: he,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: Y,
    default: () => Zt
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
}), ge = {
  click: (t) => t instanceof MouseEvent
};
function h(t, e) {
  pe(t) && (t = "100%");
  var r = ve(t);
  return t = e === 360 ? t : Math.min(e, Math.max(0, parseFloat(t))), r && (t = parseInt(String(t * e), 10) / 100), Math.abs(t - e) < 1e-6 ? 1 : (e === 360 ? t = (t < 0 ? t % e + e : t % e) / parseFloat(String(e)) : t = t % e / parseFloat(String(e)), t);
}
function E(t) {
  return Math.min(1, Math.max(0, t));
}
function pe(t) {
  return typeof t == "string" && t.indexOf(".") !== -1 && parseFloat(t) === 1;
}
function ve(t) {
  return typeof t == "string" && t.indexOf("%") !== -1;
}
function kt(t) {
  return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
}
function R(t) {
  return t <= 1 ? "".concat(Number(t) * 100, "%") : t;
}
function N(t) {
  return t.length === 1 ? "0" + t : String(t);
}
function be(t, e, r) {
  return {
    r: h(t, 255) * 255,
    g: h(e, 255) * 255,
    b: h(r, 255) * 255
  };
}
function rt(t, e, r) {
  t = h(t, 255), e = h(e, 255), r = h(r, 255);
  var n = Math.max(t, e, r), o = Math.min(t, e, r), a = 0, s = 0, c = (n + o) / 2;
  if (n === o)
    s = 0, a = 0;
  else {
    var d = n - o;
    switch (s = c > 0.5 ? d / (2 - n - o) : d / (n + o), n) {
      case t:
        a = (e - r) / d + (e < r ? 6 : 0);
        break;
      case e:
        a = (r - t) / d + 2;
        break;
      case r:
        a = (t - e) / d + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s, l: c };
}
function T(t, e, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (e - t) * (6 * r) : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t;
}
function me(t, e, r) {
  var n, o, a;
  if (t = h(t, 360), e = h(e, 100), r = h(r, 100), e === 0)
    o = r, a = r, n = r;
  else {
    var s = r < 0.5 ? r * (1 + e) : r + e - r * e, c = 2 * r - s;
    n = T(c, s, t + 1 / 3), o = T(c, s, t), a = T(c, s, t - 1 / 3);
  }
  return { r: n * 255, g: o * 255, b: a * 255 };
}
function nt(t, e, r) {
  t = h(t, 255), e = h(e, 255), r = h(r, 255);
  var n = Math.max(t, e, r), o = Math.min(t, e, r), a = 0, s = n, c = n - o, d = n === 0 ? 0 : c / n;
  if (n === o)
    a = 0;
  else {
    switch (n) {
      case t:
        a = (e - r) / c + (e < r ? 6 : 0);
        break;
      case e:
        a = (r - t) / c + 2;
        break;
      case r:
        a = (t - e) / c + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: d, v: s };
}
function ye(t, e, r) {
  t = h(t, 360) * 6, e = h(e, 100), r = h(r, 100);
  var n = Math.floor(t), o = t - n, a = r * (1 - e), s = r * (1 - o * e), c = r * (1 - (1 - o) * e), d = n % 6, g = [r, s, a, a, c, r][d], p = [c, r, r, s, a, a][d], b = [a, a, c, r, r, s][d];
  return { r: g * 255, g: p * 255, b: b * 255 };
}
function ot(t, e, r, n) {
  var o = [
    N(Math.round(t).toString(16)),
    N(Math.round(e).toString(16)),
    N(Math.round(r).toString(16))
  ];
  return n && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function _e(t, e, r, n, o) {
  var a = [
    N(Math.round(t).toString(16)),
    N(Math.round(e).toString(16)),
    N(Math.round(r).toString(16)),
    N(Se(n))
  ];
  return o && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function Se(t) {
  return Math.round(parseFloat(t) * 255).toString(16);
}
function at(t) {
  return y(t) / 255;
}
function y(t) {
  return parseInt(t, 16);
}
function ke(t) {
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
function xe(t) {
  var e = { r: 0, g: 0, b: 0 }, r = 1, n = null, o = null, a = null, s = !1, c = !1;
  return typeof t == "string" && (t = Me(t)), typeof t == "object" && (w(t.r) && w(t.g) && w(t.b) ? (e = be(t.r, t.g, t.b), s = !0, c = String(t.r).substr(-1) === "%" ? "prgb" : "rgb") : w(t.h) && w(t.s) && w(t.v) ? (n = R(t.s), o = R(t.v), e = ye(t.h, n, o), s = !0, c = "hsv") : w(t.h) && w(t.s) && w(t.l) && (n = R(t.s), a = R(t.l), e = me(t.h, n, a), s = !0, c = "hsl"), Object.prototype.hasOwnProperty.call(t, "a") && (r = t.a)), r = kt(r), {
    ok: s,
    format: t.format || c,
    r: Math.min(255, Math.max(e.r, 0)),
    g: Math.min(255, Math.max(e.g, 0)),
    b: Math.min(255, Math.max(e.b, 0)),
    a: r
  };
}
var we = "[-\\+]?\\d+%?", $e = "[-\\+]?\\d*\\.\\d+%?", M = "(?:".concat($e, ")|(?:").concat(we, ")"), O = "[\\s|\\(]+(".concat(M, ")[,|\\s]+(").concat(M, ")[,|\\s]+(").concat(M, ")\\s*\\)?"), F = "[\\s|\\(]+(".concat(M, ")[,|\\s]+(").concat(M, ")[,|\\s]+(").concat(M, ")[,|\\s]+(").concat(M, ")\\s*\\)?"), k = {
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
function Me(t) {
  if (t = t.trim().toLowerCase(), t.length === 0)
    return !1;
  var e = !1;
  if (D[t])
    t = D[t], e = !0;
  else if (t === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = k.rgb.exec(t);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = k.rgba.exec(t), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = k.hsl.exec(t), r ? { h: r[1], s: r[2], l: r[3] } : (r = k.hsla.exec(t), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = k.hsv.exec(t), r ? { h: r[1], s: r[2], v: r[3] } : (r = k.hsva.exec(t), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = k.hex8.exec(t), r ? {
    r: y(r[1]),
    g: y(r[2]),
    b: y(r[3]),
    a: at(r[4]),
    format: e ? "name" : "hex8"
  } : (r = k.hex6.exec(t), r ? {
    r: y(r[1]),
    g: y(r[2]),
    b: y(r[3]),
    format: e ? "name" : "hex"
  } : (r = k.hex4.exec(t), r ? {
    r: y(r[1] + r[1]),
    g: y(r[2] + r[2]),
    b: y(r[3] + r[3]),
    a: at(r[4] + r[4]),
    format: e ? "name" : "hex8"
  } : (r = k.hex3.exec(t), r ? {
    r: y(r[1] + r[1]),
    g: y(r[2] + r[2]),
    b: y(r[3] + r[3]),
    format: e ? "name" : "hex"
  } : !1)))))))));
}
function w(t) {
  return Boolean(k.CSS_UNIT.exec(String(t)));
}
var Be = (
  /** @class */
  function() {
    function t(e, r) {
      e === void 0 && (e = ""), r === void 0 && (r = {});
      var n;
      if (e instanceof t)
        return e;
      typeof e == "number" && (e = ke(e)), this.originalInput = e;
      var o = xe(e);
      this.originalInput = e, this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (n = r.format) !== null && n !== void 0 ? n : o.format, this.gradientType = r.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = o.ok;
    }
    return t.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, t.prototype.isLight = function() {
      return !this.isDark();
    }, t.prototype.getBrightness = function() {
      var e = this.toRgb();
      return (e.r * 299 + e.g * 587 + e.b * 114) / 1e3;
    }, t.prototype.getLuminance = function() {
      var e = this.toRgb(), r, n, o, a = e.r / 255, s = e.g / 255, c = e.b / 255;
      return a <= 0.03928 ? r = a / 12.92 : r = Math.pow((a + 0.055) / 1.055, 2.4), s <= 0.03928 ? n = s / 12.92 : n = Math.pow((s + 0.055) / 1.055, 2.4), c <= 0.03928 ? o = c / 12.92 : o = Math.pow((c + 0.055) / 1.055, 2.4), 0.2126 * r + 0.7152 * n + 0.0722 * o;
    }, t.prototype.getAlpha = function() {
      return this.a;
    }, t.prototype.setAlpha = function(e) {
      return this.a = kt(e), this.roundA = Math.round(100 * this.a) / 100, this;
    }, t.prototype.isMonochrome = function() {
      var e = this.toHsl().s;
      return e === 0;
    }, t.prototype.toHsv = function() {
      var e = nt(this.r, this.g, this.b);
      return { h: e.h * 360, s: e.s, v: e.v, a: this.a };
    }, t.prototype.toHsvString = function() {
      var e = nt(this.r, this.g, this.b), r = Math.round(e.h * 360), n = Math.round(e.s * 100), o = Math.round(e.v * 100);
      return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, t.prototype.toHsl = function() {
      var e = rt(this.r, this.g, this.b);
      return { h: e.h * 360, s: e.s, l: e.l, a: this.a };
    }, t.prototype.toHslString = function() {
      var e = rt(this.r, this.g, this.b), r = Math.round(e.h * 360), n = Math.round(e.s * 100), o = Math.round(e.l * 100);
      return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, t.prototype.toHex = function(e) {
      return e === void 0 && (e = !1), ot(this.r, this.g, this.b, e);
    }, t.prototype.toHexString = function(e) {
      return e === void 0 && (e = !1), "#" + this.toHex(e);
    }, t.prototype.toHex8 = function(e) {
      return e === void 0 && (e = !1), _e(this.r, this.g, this.b, this.a, e);
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
      for (var e = "#" + ot(this.r, this.g, this.b, !1), r = 0, n = Object.entries(D); r < n.length; r++) {
        var o = n[r], a = o[0], s = o[1];
        if (e === s)
          return a;
      }
      return !1;
    }, t.prototype.toString = function(e) {
      var r = Boolean(e);
      e = e ?? this.format;
      var n = !1, o = this.a < 1 && this.a >= 0, a = !r && o && (e.startsWith("hex") || e === "name");
      return a ? e === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (e === "rgb" && (n = this.toRgbString()), e === "prgb" && (n = this.toPercentageRgbString()), (e === "hex" || e === "hex6") && (n = this.toHexString()), e === "hex3" && (n = this.toHexString(!0)), e === "hex4" && (n = this.toHex8String(!0)), e === "hex8" && (n = this.toHex8String()), e === "name" && (n = this.toName()), e === "hsl" && (n = this.toHslString()), e === "hsv" && (n = this.toHsvString()), n || this.toHexString());
    }, t.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, t.prototype.clone = function() {
      return new t(this.toString());
    }, t.prototype.lighten = function(e) {
      e === void 0 && (e = 10);
      var r = this.toHsl();
      return r.l += e / 100, r.l = E(r.l), new t(r);
    }, t.prototype.brighten = function(e) {
      e === void 0 && (e = 10);
      var r = this.toRgb();
      return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(e / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(e / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(e / 100)))), new t(r);
    }, t.prototype.darken = function(e) {
      e === void 0 && (e = 10);
      var r = this.toHsl();
      return r.l -= e / 100, r.l = E(r.l), new t(r);
    }, t.prototype.tint = function(e) {
      return e === void 0 && (e = 10), this.mix("white", e);
    }, t.prototype.shade = function(e) {
      return e === void 0 && (e = 10), this.mix("black", e);
    }, t.prototype.desaturate = function(e) {
      e === void 0 && (e = 10);
      var r = this.toHsl();
      return r.s -= e / 100, r.s = E(r.s), new t(r);
    }, t.prototype.saturate = function(e) {
      e === void 0 && (e = 10);
      var r = this.toHsl();
      return r.s += e / 100, r.s = E(r.s), new t(r);
    }, t.prototype.greyscale = function() {
      return this.desaturate(100);
    }, t.prototype.spin = function(e) {
      var r = this.toHsl(), n = (r.h + e) % 360;
      return r.h = n < 0 ? 360 + n : n, new t(r);
    }, t.prototype.mix = function(e, r) {
      r === void 0 && (r = 50);
      var n = this.toRgb(), o = new t(e).toRgb(), a = r / 100, s = {
        r: (o.r - n.r) * a + n.r,
        g: (o.g - n.g) * a + n.g,
        b: (o.b - n.b) * a + n.b,
        a: (o.a - n.a) * a + n.a
      };
      return new t(s);
    }, t.prototype.analogous = function(e, r) {
      e === void 0 && (e = 6), r === void 0 && (r = 30);
      var n = this.toHsl(), o = 360 / r, a = [this];
      for (n.h = (n.h - (o * e >> 1) + 720) % 360; --e; )
        n.h = (n.h + o) % 360, a.push(new t(n));
      return a;
    }, t.prototype.complement = function() {
      var e = this.toHsl();
      return e.h = (e.h + 180) % 360, new t(e);
    }, t.prototype.monochromatic = function(e) {
      e === void 0 && (e = 6);
      for (var r = this.toHsv(), n = r.h, o = r.s, a = r.v, s = [], c = 1 / e; e--; )
        s.push(new t({ h: n, s: o, v: a })), a = (a + c) % 1;
      return s;
    }, t.prototype.splitcomplement = function() {
      var e = this.toHsl(), r = e.h;
      return [
        this,
        new t({ h: (r + 72) % 360, s: e.s, l: e.l }),
        new t({ h: (r + 216) % 360, s: e.s, l: e.l })
      ];
    }, t.prototype.onBackground = function(e) {
      var r = this.toRgb(), n = new t(e).toRgb(), o = r.a + n.a * (1 - r.a);
      return new t({
        r: (r.r * r.a + n.r * n.a * (1 - r.a)) / o,
        g: (r.g * r.a + n.g * n.a * (1 - r.a)) / o,
        b: (r.b * r.a + n.b * n.a * (1 - r.a)) / o,
        a: o
      });
    }, t.prototype.triad = function() {
      return this.polyad(3);
    }, t.prototype.tetrad = function() {
      return this.polyad(4);
    }, t.prototype.polyad = function(e) {
      for (var r = this.toHsl(), n = r.h, o = [this], a = 360 / e, s = 1; s < e; s++)
        o.push(new t({ h: (n + s * a) % 360, s: r.s, l: r.l }));
      return o;
    }, t.prototype.equals = function(e) {
      return this.toRgbString() === new t(e).toRgbString();
    }, t;
  }()
);
function $(t, e = 20) {
  return t.mix("#141414", e).toString();
}
function Ne(t) {
  const e = St(), r = P("button");
  return _(() => {
    let n = {};
    const o = t.color;
    if (o) {
      const a = new Be(o), s = t.dark ? a.tint(20).toString() : $(a, 20);
      if (t.plain)
        n = r.cssVarBlock({
          "bg-color": t.dark ? $(a, 90) : a.tint(90).toString(),
          "text-color": o,
          "border-color": t.dark ? $(a, 50) : a.tint(50).toString(),
          "hover-text-color": `var(${r.cssVarName("color-white")})`,
          "hover-bg-color": o,
          "hover-border-color": o,
          "active-bg-color": s,
          "active-text-color": `var(${r.cssVarName("color-white")})`,
          "active-border-color": s
        }), e.value && (n[r.cssVarBlockName("disabled-bg-color")] = t.dark ? $(a, 90) : a.tint(90).toString(), n[r.cssVarBlockName("disabled-text-color")] = t.dark ? $(a, 50) : a.tint(50).toString(), n[r.cssVarBlockName("disabled-border-color")] = t.dark ? $(a, 80) : a.tint(80).toString());
      else {
        const c = t.dark ? $(a, 30) : a.tint(30).toString(), d = a.isDark() ? `var(${r.cssVarName("color-white")})` : `var(${r.cssVarName("color-black")})`;
        if (n = r.cssVarBlock({
          "bg-color": o,
          "text-color": d,
          "border-color": o,
          "hover-bg-color": c,
          "hover-text-color": d,
          "hover-border-color": c,
          "active-bg-color": s,
          "active-border-color": s
        }), e.value) {
          const g = t.dark ? $(a, 50) : a.tint(50).toString();
          n[r.cssVarBlockName("disabled-bg-color")] = g, n[r.cssVarBlockName("disabled-text-color")] = t.dark ? "rgba(255, 255, 255, 0.5)" : `var(${r.cssVarName("color-white")})`, n[r.cssVarBlockName("disabled-border-color")] = g;
        }
      }
    }
    return n;
  });
}
const Ae = ["aria-disabled", "disabled", "autofocus", "type"], He = x({
  name: "ElButton"
}), Ce = /* @__PURE__ */ x({
  ...He,
  props: G,
  emits: ge,
  setup(t, { expose: e, emit: r }) {
    const n = t, o = Ne(n), a = P("button"), { _ref: s, _size: c, _type: d, _disabled: g, shouldAddSpace: p, handleClick: b } = fe(n, r);
    return e({
      ref: s,
      size: c,
      type: d,
      disabled: g,
      shouldAddSpace: p
    }), (f, m) => (S(), A("button", {
      ref_key: "_ref",
      ref: s,
      class: V([
        u(a).b(),
        u(a).m(u(d)),
        u(a).m(u(c)),
        u(a).is("disabled", u(g)),
        u(a).is("loading", f.loading),
        u(a).is("plain", f.plain),
        u(a).is("round", f.round),
        u(a).is("circle", f.circle),
        u(a).is("text", f.text),
        u(a).is("link", f.link),
        u(a).is("has-bg", f.bg)
      ]),
      "aria-disabled": u(g) || f.loading,
      disabled: u(g) || f.loading,
      autofocus: f.autofocus,
      type: f.nativeType,
      style: At(u(o)),
      onClick: m[0] || (m[0] = (...i) => u(b) && u(b)(...i))
    }, [
      f.loading ? (S(), A(Ht, { key: 0 }, [
        f.$slots.loading ? C(f.$slots, "loading", { key: 0 }) : (S(), I(u(et), {
          key: 1,
          class: V(u(a).is("loading"))
        }, {
          default: j(() => [
            (S(), I(U(f.loadingIcon)))
          ]),
          _: 1
        }, 8, ["class"]))
      ], 64)) : f.icon || f.$slots.icon ? (S(), I(u(et), { key: 1 }, {
        default: j(() => [
          f.icon ? (S(), I(U(f.icon), { key: 0 })) : C(f.$slots, "icon", { key: 1 })
        ]),
        _: 3
      })) : J("v-if", !0),
      f.$slots.default ? (S(), A("span", {
        key: 2,
        class: V({ [u(a).em("text", "expand")]: u(p) })
      }, [
        C(f.$slots, "default")
      ], 2)) : J("v-if", !0)
    ], 14, Ae));
  }
});
var Ie = /* @__PURE__ */ K(Ce, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const Ee = {
  size: G.size,
  type: G.type
}, Re = x({
  name: "ElButtonGroup"
}), Ve = /* @__PURE__ */ x({
  ...Re,
  props: Ee,
  setup(t) {
    const e = t;
    Ct(mt, It({
      size: Z(e, "size"),
      type: Z(e, "type")
    }));
    const r = P("button");
    return (n, o) => (S(), A("div", {
      class: V(`${u(r).b("group")}`)
    }, [
      C(n.$slots, "default")
    ], 2));
  }
});
var xt = /* @__PURE__ */ K(Ve, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const ze = bt(Ie, {
  ButtonGroup: xt
});
Xt(xt);
const Pe = x({
  name: "cm-button"
}), Te = /* @__PURE__ */ x({
  ...Pe,
  props: {
    handler: null
  },
  setup(t) {
    const e = t, r = z(!1), n = async (o) => {
      r.value = !0;
      try {
        await e.handler(o);
      } catch {
      }
      r.value = !1;
    };
    return (o, a) => {
      const s = ze;
      return S(), I(s, lt(o.$attrs, {
        loading: u(r),
        onClick: n
      }), {
        default: j(() => [
          C(o.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["loading"]);
    };
  }
});
const wt = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, o] of e)
    r[n] = o;
  return r;
}, st = /* @__PURE__ */ wt(Te, [["__scopeId", "data-v-5e79745c"]]), Oe = {
  install(t) {
    t.component(st.name, st);
  }
}, Fe = {
  "aria-hidden": "true",
  class: "svg-icon"
}, je = ["xlink:href"], Ge = x({
  name: "CmSvg"
}), De = /* @__PURE__ */ x({
  ...Ge,
  props: {
    prefix: { default: "icon" },
    name: null,
    widthScale: { default: 1 }
  },
  setup(t) {
    const e = t;
    Et((o) => ({
      "29b5cb5c": u(n)
    }));
    const r = _(() => `#${e.prefix}-${e.name}`), n = _(() => e.widthScale.toString() + "em");
    return (o, a) => (S(), A("svg", Fe, [
      ct("use", { "xlink:href": u(r) }, null, 8, je)
    ]));
  }
});
const it = /* @__PURE__ */ wt(De, [["__scopeId", "data-v-85fad73b"]]), Le = {
  install(t) {
    t.component(it.name, it);
  }
}, We = [Oe, Le], Ke = {
  install(t) {
    We.forEach((e) => {
      t.use(e);
    });
  }
};
export {
  st as CmButton,
  it as CmSvg,
  Ke as default
};
