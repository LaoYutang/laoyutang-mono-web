import { getCurrentScope as tu, onScopeDispose as nu, unref as v, getCurrentInstance as Ce, onMounted as Pe, nextTick as ce, watch as Q, ref as x, openBlock as T, createElementBlock as B, createElementVNode as U, warn as ou, computed as $, inject as ie, toRef as Ot, onUnmounted as jo, isRef as vn, shallowRef as Pn, onBeforeUnmount as St, onBeforeMount as Gr, provide as st, defineComponent as K, mergeProps as Ct, renderSlot as se, useAttrs as ru, useSlots as Ko, withDirectives as Oe, createCommentVNode as X, Fragment as Ue, normalizeClass as I, createBlock as Y, withCtx as ee, resolveDynamicComponent as at, withModifiers as Qe, createVNode as fe, toDisplayString as we, normalizeStyle as xe, vShow as jt, Transition as co, reactive as kt, onUpdated as Yr, cloneVNode as lu, Text as fs, Comment as ps, Teleport as au, readonly as su, onDeactivated as iu, toRaw as An, vModelCheckbox as Io, createTextVNode as Uo, toRefs as Vn, withKeys as ze, triggerRef as Gn, resolveComponent as Ae, resolveDirective as Xr, renderList as Ln, vModelText as uu, createSlots as cu, watchEffect as kn, h as te, createApp as du, normalizeProps as fu, useCssVars as pu } from "vue";
var vu = typeof global == "object" && global && global.Object === Object && global;
const vs = vu;
var hu = typeof self == "object" && self && self.Object === Object && self, gu = vs || hu || Function("return this")();
const _t = gu;
var mu = _t.Symbol;
const At = mu;
var hs = Object.prototype, bu = hs.hasOwnProperty, yu = hs.toString, Yn = At ? At.toStringTag : void 0;
function wu(e) {
  var t = bu.call(e, Yn), n = e[Yn];
  try {
    e[Yn] = void 0;
    var o = !0;
  } catch {
  }
  var r = yu.call(e);
  return o && (t ? e[Yn] = n : delete e[Yn]), r;
}
var Cu = Object.prototype, Su = Cu.toString;
function _u(e) {
  return Su.call(e);
}
var Eu = "[object Null]", $u = "[object Undefined]", Hl = At ? At.toStringTag : void 0;
function yn(e) {
  return e == null ? e === void 0 ? $u : Eu : Hl && Hl in Object(e) ? wu(e) : _u(e);
}
function tn(e) {
  return e != null && typeof e == "object";
}
var xu = "[object Symbol]";
function qo(e) {
  return typeof e == "symbol" || tn(e) && yn(e) == xu;
}
function gs(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var Ou = Array.isArray;
const it = Ou;
var Tu = 1 / 0, Dl = At ? At.prototype : void 0, Wl = Dl ? Dl.toString : void 0;
function ms(e) {
  if (typeof e == "string")
    return e;
  if (it(e))
    return gs(e, ms) + "";
  if (qo(e))
    return Wl ? Wl.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Tu ? "-0" : t;
}
var Pu = /\s/;
function ku(e) {
  for (var t = e.length; t-- && Pu.test(e.charAt(t)); )
    ;
  return t;
}
var Au = /^\s+/;
function Lu(e) {
  return e && e.slice(0, ku(e) + 1).replace(Au, "");
}
function ut(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Vl = 0 / 0, Mu = /^[-+]0x[0-9a-f]+$/i, Iu = /^0b[01]+$/i, Nu = /^0o[0-7]+$/i, Ru = parseInt;
function jl(e) {
  if (typeof e == "number")
    return e;
  if (qo(e))
    return Vl;
  if (ut(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ut(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Lu(e);
  var n = Iu.test(e);
  return n || Nu.test(e) ? Ru(e.slice(2), n ? 2 : 8) : Mu.test(e) ? Vl : +e;
}
function Qr(e) {
  return e;
}
var Fu = "[object AsyncFunction]", Bu = "[object Function]", zu = "[object GeneratorFunction]", Hu = "[object Proxy]";
function Zr(e) {
  if (!ut(e))
    return !1;
  var t = yn(e);
  return t == Bu || t == zu || t == Fu || t == Hu;
}
var Du = _t["__core-js_shared__"];
const ar = Du;
var Kl = function() {
  var e = /[^.]+$/.exec(ar && ar.keys && ar.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Wu(e) {
  return !!Kl && Kl in e;
}
var Vu = Function.prototype, ju = Vu.toString;
function wn(e) {
  if (e != null) {
    try {
      return ju.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ku = /[\\^$.*+?()[\]{}|]/g, Uu = /^\[object .+?Constructor\]$/, qu = Function.prototype, Gu = Object.prototype, Yu = qu.toString, Xu = Gu.hasOwnProperty, Qu = RegExp(
  "^" + Yu.call(Xu).replace(Ku, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Zu(e) {
  if (!ut(e) || Wu(e))
    return !1;
  var t = Zr(e) ? Qu : Uu;
  return t.test(wn(e));
}
function Ju(e, t) {
  return e == null ? void 0 : e[t];
}
function Cn(e, t) {
  var n = Ju(e, t);
  return Zu(n) ? n : void 0;
}
var ec = Cn(_t, "WeakMap");
const yr = ec;
var Ul = Object.create, tc = function() {
  function e() {
  }
  return function(t) {
    if (!ut(t))
      return {};
    if (Ul)
      return Ul(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
const nc = tc;
function oc(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
function rc(e, t) {
  var n = -1, o = e.length;
  for (t || (t = Array(o)); ++n < o; )
    t[n] = e[n];
  return t;
}
var lc = 800, ac = 16, sc = Date.now;
function ic(e) {
  var t = 0, n = 0;
  return function() {
    var o = sc(), r = ac - (o - n);
    if (n = o, r > 0) {
      if (++t >= lc)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function uc(e) {
  return function() {
    return e;
  };
}
var cc = function() {
  try {
    var e = Cn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const No = cc;
var dc = No ? function(e, t) {
  return No(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: uc(t),
    writable: !0
  });
} : Qr;
const fc = dc;
var pc = ic(fc);
const bs = pc;
var vc = 9007199254740991, hc = /^(?:0|[1-9]\d*)$/;
function Go(e, t) {
  var n = typeof e;
  return t = t ?? vc, !!t && (n == "number" || n != "symbol" && hc.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Jr(e, t, n) {
  t == "__proto__" && No ? No(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function fo(e, t) {
  return e === t || e !== e && t !== t;
}
var gc = Object.prototype, mc = gc.hasOwnProperty;
function ys(e, t, n) {
  var o = e[t];
  (!(mc.call(e, t) && fo(o, n)) || n === void 0 && !(t in e)) && Jr(e, t, n);
}
function bc(e, t, n, o) {
  var r = !n;
  n || (n = {});
  for (var l = -1, s = t.length; ++l < s; ) {
    var a = t[l], i = o ? o(n[a], e[a], a, n, e) : void 0;
    i === void 0 && (i = e[a]), r ? Jr(n, a, i) : ys(n, a, i);
  }
  return n;
}
var ql = Math.max;
function ws(e, t, n) {
  return t = ql(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, l = ql(o.length - t, 0), s = Array(l); ++r < l; )
      s[r] = o[t + r];
    r = -1;
    for (var a = Array(t + 1); ++r < t; )
      a[r] = o[r];
    return a[t] = n(s), oc(e, this, a);
  };
}
function yc(e, t) {
  return bs(ws(e, t, Qr), e + "");
}
var wc = 9007199254740991;
function el(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= wc;
}
function jn(e) {
  return e != null && el(e.length) && !Zr(e);
}
function Cc(e, t, n) {
  if (!ut(n))
    return !1;
  var o = typeof t;
  return (o == "number" ? jn(n) && Go(t, n.length) : o == "string" && t in n) ? fo(n[t], e) : !1;
}
function Sc(e) {
  return yc(function(t, n) {
    var o = -1, r = n.length, l = r > 1 ? n[r - 1] : void 0, s = r > 2 ? n[2] : void 0;
    for (l = e.length > 3 && typeof l == "function" ? (r--, l) : void 0, s && Cc(n[0], n[1], s) && (l = r < 3 ? void 0 : l, r = 1), t = Object(t); ++o < r; ) {
      var a = n[o];
      a && e(t, a, o, l);
    }
    return t;
  });
}
var _c = Object.prototype;
function tl(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || _c;
  return e === n;
}
function Ec(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var $c = "[object Arguments]";
function Gl(e) {
  return tn(e) && yn(e) == $c;
}
var Cs = Object.prototype, xc = Cs.hasOwnProperty, Oc = Cs.propertyIsEnumerable, Tc = Gl(function() {
  return arguments;
}()) ? Gl : function(e) {
  return tn(e) && xc.call(e, "callee") && !Oc.call(e, "callee");
};
const no = Tc;
function Pc() {
  return !1;
}
var Ss = typeof exports == "object" && exports && !exports.nodeType && exports, Yl = Ss && typeof module == "object" && module && !module.nodeType && module, kc = Yl && Yl.exports === Ss, Xl = kc ? _t.Buffer : void 0, Ac = Xl ? Xl.isBuffer : void 0, Lc = Ac || Pc;
const Ro = Lc;
var Mc = "[object Arguments]", Ic = "[object Array]", Nc = "[object Boolean]", Rc = "[object Date]", Fc = "[object Error]", Bc = "[object Function]", zc = "[object Map]", Hc = "[object Number]", Dc = "[object Object]", Wc = "[object RegExp]", Vc = "[object Set]", jc = "[object String]", Kc = "[object WeakMap]", Uc = "[object ArrayBuffer]", qc = "[object DataView]", Gc = "[object Float32Array]", Yc = "[object Float64Array]", Xc = "[object Int8Array]", Qc = "[object Int16Array]", Zc = "[object Int32Array]", Jc = "[object Uint8Array]", ed = "[object Uint8ClampedArray]", td = "[object Uint16Array]", nd = "[object Uint32Array]", Se = {};
Se[Gc] = Se[Yc] = Se[Xc] = Se[Qc] = Se[Zc] = Se[Jc] = Se[ed] = Se[td] = Se[nd] = !0;
Se[Mc] = Se[Ic] = Se[Uc] = Se[Nc] = Se[qc] = Se[Rc] = Se[Fc] = Se[Bc] = Se[zc] = Se[Hc] = Se[Dc] = Se[Wc] = Se[Vc] = Se[jc] = Se[Kc] = !1;
function od(e) {
  return tn(e) && el(e.length) && !!Se[yn(e)];
}
function rd(e) {
  return function(t) {
    return e(t);
  };
}
var _s = typeof exports == "object" && exports && !exports.nodeType && exports, Qn = _s && typeof module == "object" && module && !module.nodeType && module, ld = Qn && Qn.exports === _s, sr = ld && vs.process, ad = function() {
  try {
    var e = Qn && Qn.require && Qn.require("util").types;
    return e || sr && sr.binding && sr.binding("util");
  } catch {
  }
}();
const Ql = ad;
var Zl = Ql && Ql.isTypedArray, sd = Zl ? rd(Zl) : od;
const nl = sd;
var id = Object.prototype, ud = id.hasOwnProperty;
function Es(e, t) {
  var n = it(e), o = !n && no(e), r = !n && !o && Ro(e), l = !n && !o && !r && nl(e), s = n || o || r || l, a = s ? Ec(e.length, String) : [], i = a.length;
  for (var u in e)
    (t || ud.call(e, u)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    l && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Go(u, i))) && a.push(u);
  return a;
}
function $s(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var cd = $s(Object.keys, Object);
const dd = cd;
var fd = Object.prototype, pd = fd.hasOwnProperty;
function vd(e) {
  if (!tl(e))
    return dd(e);
  var t = [];
  for (var n in Object(e))
    pd.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function ol(e) {
  return jn(e) ? Es(e) : vd(e);
}
function hd(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var gd = Object.prototype, md = gd.hasOwnProperty;
function bd(e) {
  if (!ut(e))
    return hd(e);
  var t = tl(e), n = [];
  for (var o in e)
    o == "constructor" && (t || !md.call(e, o)) || n.push(o);
  return n;
}
function xs(e) {
  return jn(e) ? Es(e, !0) : bd(e);
}
var yd = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, wd = /^\w*$/;
function rl(e, t) {
  if (it(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || qo(e) ? !0 : wd.test(e) || !yd.test(e) || t != null && e in Object(t);
}
var Cd = Cn(Object, "create");
const oo = Cd;
function Sd() {
  this.__data__ = oo ? oo(null) : {}, this.size = 0;
}
function _d(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ed = "__lodash_hash_undefined__", $d = Object.prototype, xd = $d.hasOwnProperty;
function Od(e) {
  var t = this.__data__;
  if (oo) {
    var n = t[e];
    return n === Ed ? void 0 : n;
  }
  return xd.call(t, e) ? t[e] : void 0;
}
var Td = Object.prototype, Pd = Td.hasOwnProperty;
function kd(e) {
  var t = this.__data__;
  return oo ? t[e] !== void 0 : Pd.call(t, e);
}
var Ad = "__lodash_hash_undefined__";
function Ld(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = oo && t === void 0 ? Ad : t, this;
}
function hn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
hn.prototype.clear = Sd;
hn.prototype.delete = _d;
hn.prototype.get = Od;
hn.prototype.has = kd;
hn.prototype.set = Ld;
function Md() {
  this.__data__ = [], this.size = 0;
}
function Yo(e, t) {
  for (var n = e.length; n--; )
    if (fo(e[n][0], t))
      return n;
  return -1;
}
var Id = Array.prototype, Nd = Id.splice;
function Rd(e) {
  var t = this.__data__, n = Yo(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Nd.call(t, n, 1), --this.size, !0;
}
function Fd(e) {
  var t = this.__data__, n = Yo(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Bd(e) {
  return Yo(this.__data__, e) > -1;
}
function zd(e, t) {
  var n = this.__data__, o = Yo(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function Ut(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Ut.prototype.clear = Md;
Ut.prototype.delete = Rd;
Ut.prototype.get = Fd;
Ut.prototype.has = Bd;
Ut.prototype.set = zd;
var Hd = Cn(_t, "Map");
const ro = Hd;
function Dd() {
  this.size = 0, this.__data__ = {
    hash: new hn(),
    map: new (ro || Ut)(),
    string: new hn()
  };
}
function Wd(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Xo(e, t) {
  var n = e.__data__;
  return Wd(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Vd(e) {
  var t = Xo(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function jd(e) {
  return Xo(this, e).get(e);
}
function Kd(e) {
  return Xo(this, e).has(e);
}
function Ud(e, t) {
  var n = Xo(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function qt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
qt.prototype.clear = Dd;
qt.prototype.delete = Vd;
qt.prototype.get = jd;
qt.prototype.has = Kd;
qt.prototype.set = Ud;
var qd = "Expected a function";
function ll(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(qd);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], l = n.cache;
    if (l.has(r))
      return l.get(r);
    var s = e.apply(this, o);
    return n.cache = l.set(r, s) || l, s;
  };
  return n.cache = new (ll.Cache || qt)(), n;
}
ll.Cache = qt;
var Gd = 500;
function Yd(e) {
  var t = ll(e, function(o) {
    return n.size === Gd && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Xd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Qd = /\\(\\)?/g, Zd = Yd(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Xd, function(n, o, r, l) {
    t.push(r ? l.replace(Qd, "$1") : o || n);
  }), t;
});
const Jd = Zd;
function ef(e) {
  return e == null ? "" : ms(e);
}
function Qo(e, t) {
  return it(e) ? e : rl(e, t) ? [e] : Jd(ef(e));
}
var tf = 1 / 0;
function po(e) {
  if (typeof e == "string" || qo(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -tf ? "-0" : t;
}
function al(e, t) {
  t = Qo(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[po(t[n++])];
  return n && n == o ? e : void 0;
}
function He(e, t, n) {
  var o = e == null ? void 0 : al(e, t);
  return o === void 0 ? n : o;
}
function Os(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var Jl = At ? At.isConcatSpreadable : void 0;
function nf(e) {
  return it(e) || no(e) || !!(Jl && e && e[Jl]);
}
function sl(e, t, n, o, r) {
  var l = -1, s = e.length;
  for (n || (n = nf), r || (r = []); ++l < s; ) {
    var a = e[l];
    t > 0 && n(a) ? t > 1 ? sl(a, t - 1, n, o, r) : Os(r, a) : o || (r[r.length] = a);
  }
  return r;
}
function of(e) {
  var t = e == null ? 0 : e.length;
  return t ? sl(e, 1) : [];
}
function rf(e) {
  return bs(ws(e, void 0, of), e + "");
}
var lf = $s(Object.getPrototypeOf, Object);
const Ts = lf;
var af = "[object Object]", sf = Function.prototype, uf = Object.prototype, Ps = sf.toString, cf = uf.hasOwnProperty, df = Ps.call(Object);
function ff(e) {
  if (!tn(e) || yn(e) != af)
    return !1;
  var t = Ts(e);
  if (t === null)
    return !0;
  var n = cf.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Ps.call(n) == df;
}
function pf() {
  this.__data__ = new Ut(), this.size = 0;
}
function vf(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function hf(e) {
  return this.__data__.get(e);
}
function gf(e) {
  return this.__data__.has(e);
}
var mf = 200;
function bf(e, t) {
  var n = this.__data__;
  if (n instanceof Ut) {
    var o = n.__data__;
    if (!ro || o.length < mf - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new qt(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Tt(e) {
  var t = this.__data__ = new Ut(e);
  this.size = t.size;
}
Tt.prototype.clear = pf;
Tt.prototype.delete = vf;
Tt.prototype.get = hf;
Tt.prototype.has = gf;
Tt.prototype.set = bf;
var ks = typeof exports == "object" && exports && !exports.nodeType && exports, ea = ks && typeof module == "object" && module && !module.nodeType && module, yf = ea && ea.exports === ks, ta = yf ? _t.Buffer : void 0, na = ta ? ta.allocUnsafe : void 0;
function wf(e, t) {
  if (t)
    return e.slice();
  var n = e.length, o = na ? na(n) : new e.constructor(n);
  return e.copy(o), o;
}
function Cf(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, l = []; ++n < o; ) {
    var s = e[n];
    t(s, n, e) && (l[r++] = s);
  }
  return l;
}
function Sf() {
  return [];
}
var _f = Object.prototype, Ef = _f.propertyIsEnumerable, oa = Object.getOwnPropertySymbols, $f = oa ? function(e) {
  return e == null ? [] : (e = Object(e), Cf(oa(e), function(t) {
    return Ef.call(e, t);
  }));
} : Sf;
const xf = $f;
function Of(e, t, n) {
  var o = t(e);
  return it(e) ? o : Os(o, n(e));
}
function ra(e) {
  return Of(e, ol, xf);
}
var Tf = Cn(_t, "DataView");
const wr = Tf;
var Pf = Cn(_t, "Promise");
const Cr = Pf;
var kf = Cn(_t, "Set");
const Sr = kf;
var la = "[object Map]", Af = "[object Object]", aa = "[object Promise]", sa = "[object Set]", ia = "[object WeakMap]", ua = "[object DataView]", Lf = wn(wr), Mf = wn(ro), If = wn(Cr), Nf = wn(Sr), Rf = wn(yr), sn = yn;
(wr && sn(new wr(new ArrayBuffer(1))) != ua || ro && sn(new ro()) != la || Cr && sn(Cr.resolve()) != aa || Sr && sn(new Sr()) != sa || yr && sn(new yr()) != ia) && (sn = function(e) {
  var t = yn(e), n = t == Af ? e.constructor : void 0, o = n ? wn(n) : "";
  if (o)
    switch (o) {
      case Lf:
        return ua;
      case Mf:
        return la;
      case If:
        return aa;
      case Nf:
        return sa;
      case Rf:
        return ia;
    }
  return t;
});
const ca = sn;
var Ff = _t.Uint8Array;
const Fo = Ff;
function Bf(e) {
  var t = new e.constructor(e.byteLength);
  return new Fo(t).set(new Fo(e)), t;
}
function zf(e, t) {
  var n = t ? Bf(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
function Hf(e) {
  return typeof e.constructor == "function" && !tl(e) ? nc(Ts(e)) : {};
}
var Df = "__lodash_hash_undefined__";
function Wf(e) {
  return this.__data__.set(e, Df), this;
}
function Vf(e) {
  return this.__data__.has(e);
}
function Bo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new qt(); ++t < n; )
    this.add(e[t]);
}
Bo.prototype.add = Bo.prototype.push = Wf;
Bo.prototype.has = Vf;
function jf(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Kf(e, t) {
  return e.has(t);
}
var Uf = 1, qf = 2;
function As(e, t, n, o, r, l) {
  var s = n & Uf, a = e.length, i = t.length;
  if (a != i && !(s && i > a))
    return !1;
  var u = l.get(e), d = l.get(t);
  if (u && d)
    return u == t && d == e;
  var f = -1, p = !0, h = n & qf ? new Bo() : void 0;
  for (l.set(e, t), l.set(t, e); ++f < a; ) {
    var c = e[f], g = t[f];
    if (o)
      var y = s ? o(g, c, f, t, e, l) : o(c, g, f, e, t, l);
    if (y !== void 0) {
      if (y)
        continue;
      p = !1;
      break;
    }
    if (h) {
      if (!jf(t, function(m, w) {
        if (!Kf(h, w) && (c === m || r(c, m, n, o, l)))
          return h.push(w);
      })) {
        p = !1;
        break;
      }
    } else if (!(c === g || r(c, g, n, o, l))) {
      p = !1;
      break;
    }
  }
  return l.delete(e), l.delete(t), p;
}
function Gf(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function Yf(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var Xf = 1, Qf = 2, Zf = "[object Boolean]", Jf = "[object Date]", ep = "[object Error]", tp = "[object Map]", np = "[object Number]", op = "[object RegExp]", rp = "[object Set]", lp = "[object String]", ap = "[object Symbol]", sp = "[object ArrayBuffer]", ip = "[object DataView]", da = At ? At.prototype : void 0, ir = da ? da.valueOf : void 0;
function up(e, t, n, o, r, l, s) {
  switch (n) {
    case ip:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case sp:
      return !(e.byteLength != t.byteLength || !l(new Fo(e), new Fo(t)));
    case Zf:
    case Jf:
    case np:
      return fo(+e, +t);
    case ep:
      return e.name == t.name && e.message == t.message;
    case op:
    case lp:
      return e == t + "";
    case tp:
      var a = Gf;
    case rp:
      var i = o & Xf;
      if (a || (a = Yf), e.size != t.size && !i)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      o |= Qf, s.set(e, t);
      var d = As(a(e), a(t), o, r, l, s);
      return s.delete(e), d;
    case ap:
      if (ir)
        return ir.call(e) == ir.call(t);
  }
  return !1;
}
var cp = 1, dp = Object.prototype, fp = dp.hasOwnProperty;
function pp(e, t, n, o, r, l) {
  var s = n & cp, a = ra(e), i = a.length, u = ra(t), d = u.length;
  if (i != d && !s)
    return !1;
  for (var f = i; f--; ) {
    var p = a[f];
    if (!(s ? p in t : fp.call(t, p)))
      return !1;
  }
  var h = l.get(e), c = l.get(t);
  if (h && c)
    return h == t && c == e;
  var g = !0;
  l.set(e, t), l.set(t, e);
  for (var y = s; ++f < i; ) {
    p = a[f];
    var m = e[p], w = t[p];
    if (o)
      var C = s ? o(w, m, p, t, e, l) : o(m, w, p, e, t, l);
    if (!(C === void 0 ? m === w || r(m, w, n, o, l) : C)) {
      g = !1;
      break;
    }
    y || (y = p == "constructor");
  }
  if (g && !y) {
    var b = e.constructor, O = t.constructor;
    b != O && "constructor" in e && "constructor" in t && !(typeof b == "function" && b instanceof b && typeof O == "function" && O instanceof O) && (g = !1);
  }
  return l.delete(e), l.delete(t), g;
}
var vp = 1, fa = "[object Arguments]", pa = "[object Array]", bo = "[object Object]", hp = Object.prototype, va = hp.hasOwnProperty;
function gp(e, t, n, o, r, l) {
  var s = it(e), a = it(t), i = s ? pa : ca(e), u = a ? pa : ca(t);
  i = i == fa ? bo : i, u = u == fa ? bo : u;
  var d = i == bo, f = u == bo, p = i == u;
  if (p && Ro(e)) {
    if (!Ro(t))
      return !1;
    s = !0, d = !1;
  }
  if (p && !d)
    return l || (l = new Tt()), s || nl(e) ? As(e, t, n, o, r, l) : up(e, t, i, n, o, r, l);
  if (!(n & vp)) {
    var h = d && va.call(e, "__wrapped__"), c = f && va.call(t, "__wrapped__");
    if (h || c) {
      var g = h ? e.value() : e, y = c ? t.value() : t;
      return l || (l = new Tt()), r(g, y, n, o, l);
    }
  }
  return p ? (l || (l = new Tt()), pp(e, t, n, o, r, l)) : !1;
}
function Zo(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !tn(e) && !tn(t) ? e !== e && t !== t : gp(e, t, n, o, Zo, r);
}
var mp = 1, bp = 2;
function yp(e, t, n, o) {
  var r = n.length, l = r, s = !o;
  if (e == null)
    return !l;
  for (e = Object(e); r--; ) {
    var a = n[r];
    if (s && a[2] ? a[1] !== e[a[0]] : !(a[0] in e))
      return !1;
  }
  for (; ++r < l; ) {
    a = n[r];
    var i = a[0], u = e[i], d = a[1];
    if (s && a[2]) {
      if (u === void 0 && !(i in e))
        return !1;
    } else {
      var f = new Tt();
      if (o)
        var p = o(u, d, i, e, t, f);
      if (!(p === void 0 ? Zo(d, u, mp | bp, o, f) : p))
        return !1;
    }
  }
  return !0;
}
function Ls(e) {
  return e === e && !ut(e);
}
function wp(e) {
  for (var t = ol(e), n = t.length; n--; ) {
    var o = t[n], r = e[o];
    t[n] = [o, r, Ls(r)];
  }
  return t;
}
function Ms(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Cp(e) {
  var t = wp(e);
  return t.length == 1 && t[0][2] ? Ms(t[0][0], t[0][1]) : function(n) {
    return n === e || yp(n, e, t);
  };
}
function Sp(e, t) {
  return e != null && t in Object(e);
}
function _p(e, t, n) {
  t = Qo(t, e);
  for (var o = -1, r = t.length, l = !1; ++o < r; ) {
    var s = po(t[o]);
    if (!(l = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return l || ++o != r ? l : (r = e == null ? 0 : e.length, !!r && el(r) && Go(s, r) && (it(e) || no(e)));
}
function Is(e, t) {
  return e != null && _p(e, t, Sp);
}
var Ep = 1, $p = 2;
function xp(e, t) {
  return rl(e) && Ls(t) ? Ms(po(e), t) : function(n) {
    var o = He(n, e);
    return o === void 0 && o === t ? Is(n, e) : Zo(t, o, Ep | $p);
  };
}
function Op(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Tp(e) {
  return function(t) {
    return al(t, e);
  };
}
function Pp(e) {
  return rl(e) ? Op(po(e)) : Tp(e);
}
function kp(e) {
  return typeof e == "function" ? e : e == null ? Qr : typeof e == "object" ? it(e) ? xp(e[0], e[1]) : Cp(e) : Pp(e);
}
function Ap(e) {
  return function(t, n, o) {
    for (var r = -1, l = Object(t), s = o(t), a = s.length; a--; ) {
      var i = s[e ? a : ++r];
      if (n(l[i], i, l) === !1)
        break;
    }
    return t;
  };
}
var Lp = Ap();
const Ns = Lp;
function Mp(e, t) {
  return e && Ns(e, t, ol);
}
function Ip(e, t) {
  return function(n, o) {
    if (n == null)
      return n;
    if (!jn(n))
      return e(n, o);
    for (var r = n.length, l = t ? r : -1, s = Object(n); (t ? l-- : ++l < r) && o(s[l], l, s) !== !1; )
      ;
    return n;
  };
}
var Np = Ip(Mp);
const Rp = Np;
var Fp = function() {
  return _t.Date.now();
};
const ur = Fp;
var Bp = "Expected a function", zp = Math.max, Hp = Math.min;
function Mn(e, t, n) {
  var o, r, l, s, a, i, u = 0, d = !1, f = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(Bp);
  t = jl(t) || 0, ut(n) && (d = !!n.leading, f = "maxWait" in n, l = f ? zp(jl(n.maxWait) || 0, t) : l, p = "trailing" in n ? !!n.trailing : p);
  function h(_) {
    var S = o, P = r;
    return o = r = void 0, u = _, s = e.apply(P, S), s;
  }
  function c(_) {
    return u = _, a = setTimeout(m, t), d ? h(_) : s;
  }
  function g(_) {
    var S = _ - i, P = _ - u, N = t - S;
    return f ? Hp(N, l - P) : N;
  }
  function y(_) {
    var S = _ - i, P = _ - u;
    return i === void 0 || S >= t || S < 0 || f && P >= l;
  }
  function m() {
    var _ = ur();
    if (y(_))
      return w(_);
    a = setTimeout(m, g(_));
  }
  function w(_) {
    return a = void 0, p && o ? h(_) : (o = r = void 0, s);
  }
  function C() {
    a !== void 0 && clearTimeout(a), u = 0, o = i = r = a = void 0;
  }
  function b() {
    return a === void 0 ? s : w(ur());
  }
  function O() {
    var _ = ur(), S = y(_);
    if (o = arguments, r = this, i = _, S) {
      if (a === void 0)
        return c(i);
      if (f)
        return clearTimeout(a), a = setTimeout(m, t), h(i);
    }
    return a === void 0 && (a = setTimeout(m, t)), s;
  }
  return O.cancel = C, O.flush = b, O;
}
function _r(e, t, n) {
  (n !== void 0 && !fo(e[t], n) || n === void 0 && !(t in e)) && Jr(e, t, n);
}
function Dp(e) {
  return tn(e) && jn(e);
}
function Er(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Wp(e) {
  return bc(e, xs(e));
}
function Vp(e, t, n, o, r, l, s) {
  var a = Er(e, n), i = Er(t, n), u = s.get(i);
  if (u) {
    _r(e, n, u);
    return;
  }
  var d = l ? l(a, i, n + "", e, t, s) : void 0, f = d === void 0;
  if (f) {
    var p = it(i), h = !p && Ro(i), c = !p && !h && nl(i);
    d = i, p || h || c ? it(a) ? d = a : Dp(a) ? d = rc(a) : h ? (f = !1, d = wf(i, !0)) : c ? (f = !1, d = zf(i, !0)) : d = [] : ff(i) || no(i) ? (d = a, no(a) ? d = Wp(a) : (!ut(a) || Zr(a)) && (d = Hf(i))) : f = !1;
  }
  f && (s.set(i, d), r(d, i, o, l, s), s.delete(i)), _r(e, n, d);
}
function Rs(e, t, n, o, r) {
  e !== t && Ns(t, function(l, s) {
    if (r || (r = new Tt()), ut(l))
      Vp(e, t, s, n, Rs, o, r);
    else {
      var a = o ? o(Er(e, s), l, s + "", e, t, r) : void 0;
      a === void 0 && (a = l), _r(e, s, a);
    }
  }, xs);
}
function jp(e, t) {
  var n = -1, o = jn(e) ? Array(e.length) : [];
  return Rp(e, function(r, l, s) {
    o[++n] = t(r, l, s);
  }), o;
}
function Kp(e, t) {
  var n = it(e) ? gs : jp;
  return n(e, kp(t));
}
function Up(e, t) {
  return sl(Kp(e, t), 1);
}
function zo(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var r = e[t];
    o[r[0]] = r[1];
  }
  return o;
}
function Ho(e, t) {
  return Zo(e, t);
}
function Vt(e) {
  return e == null;
}
function qp(e) {
  return e === void 0;
}
var Gp = Sc(function(e, t, n) {
  Rs(e, t, n);
});
const Fs = Gp;
function Bs(e, t, n, o) {
  if (!ut(e))
    return e;
  t = Qo(t, e);
  for (var r = -1, l = t.length, s = l - 1, a = e; a != null && ++r < l; ) {
    var i = po(t[r]), u = n;
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return e;
    if (r != s) {
      var d = a[i];
      u = o ? o(d, i, a) : void 0, u === void 0 && (u = ut(d) ? d : Go(t[r + 1]) ? [] : {});
    }
    ys(a, i, u), a = a[i];
  }
  return e;
}
function Yp(e, t, n) {
  for (var o = -1, r = t.length, l = {}; ++o < r; ) {
    var s = t[o], a = al(e, s);
    n(a, s) && Bs(l, Qo(s, e), a);
  }
  return l;
}
function Xp(e, t) {
  return Yp(e, t, function(n, o) {
    return Is(e, o);
  });
}
var Qp = rf(function(e, t) {
  return e == null ? {} : Xp(e, t);
});
const Zp = Qp;
function Jp(e, t, n) {
  return e == null ? e : Bs(e, t, n);
}
const Wt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const l = e == null ? void 0 : e(r);
  if (n === !1 || !l)
    return t == null ? void 0 : t(r);
};
var ha;
const $e = typeof window < "u", In = (e) => typeof e == "boolean", me = (e) => typeof e == "number", ev = (e) => typeof e == "string", zs = () => {
}, tv = $e && ((ha = window == null ? void 0 : window.navigator) == null ? void 0 : ha.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Hs(e) {
  return typeof e == "function" ? e() : v(e);
}
function nv(e) {
  return e;
}
function il(e) {
  return tu() ? (nu(e), !0) : !1;
}
function ov(e, t = !0) {
  Ce() ? Pe(e) : t ? e() : ce(e);
}
function Qt(e) {
  var t;
  const n = Hs(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const ul = $e ? window : void 0;
function en(...e) {
  let t, n, o, r;
  if (ev(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = ul) : [t, n, o, r] = e, !t)
    return zs;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const l = [], s = () => {
    l.forEach((d) => d()), l.length = 0;
  }, a = (d, f, p, h) => (d.addEventListener(f, p, h), () => d.removeEventListener(f, p, h)), i = Q(() => [Qt(t), Hs(r)], ([d, f]) => {
    s(), d && l.push(...n.flatMap((p) => o.map((h) => a(d, p, h, f))));
  }, { immediate: !0, flush: "post" }), u = () => {
    i(), s();
  };
  return il(u), u;
}
let ga = !1;
function rv(e, t, n = {}) {
  const { window: o = ul, ignore: r = [], capture: l = !0, detectIframe: s = !1 } = n;
  if (!o)
    return;
  tv && !ga && (ga = !0, Array.from(o.document.body.children).forEach((p) => p.addEventListener("click", zs)));
  let a = !0;
  const i = (p) => r.some((h) => {
    if (typeof h == "string")
      return Array.from(o.document.querySelectorAll(h)).some((c) => c === p.target || p.composedPath().includes(c));
    {
      const c = Qt(h);
      return c && (p.target === c || p.composedPath().includes(c));
    }
  }), d = [
    en(o, "click", (p) => {
      const h = Qt(e);
      if (!(!h || h === p.target || p.composedPath().includes(h))) {
        if (p.detail === 0 && (a = !i(p)), !a) {
          a = !0;
          return;
        }
        t(p);
      }
    }, { passive: !0, capture: l }),
    en(o, "pointerdown", (p) => {
      const h = Qt(e);
      h && (a = !p.composedPath().includes(h) && !i(p));
    }, { passive: !0 }),
    s && en(o, "blur", (p) => {
      var h;
      const c = Qt(e);
      ((h = o.document.activeElement) == null ? void 0 : h.tagName) === "IFRAME" && !(c != null && c.contains(o.document.activeElement)) && t(p);
    })
  ].filter(Boolean);
  return () => d.forEach((p) => p());
}
function lv(e, t = !1) {
  const n = x(), o = () => n.value = Boolean(e());
  return o(), ov(o, t), n;
}
const $r = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, xr = "__vueuse_ssr_handlers__";
$r[xr] = $r[xr] || {};
$r[xr];
var ma = Object.getOwnPropertySymbols, av = Object.prototype.hasOwnProperty, sv = Object.prototype.propertyIsEnumerable, iv = (e, t) => {
  var n = {};
  for (var o in e)
    av.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && ma)
    for (var o of ma(e))
      t.indexOf(o) < 0 && sv.call(e, o) && (n[o] = e[o]);
  return n;
};
function Nn(e, t, n = {}) {
  const o = n, { window: r = ul } = o, l = iv(o, ["window"]);
  let s;
  const a = lv(() => r && "ResizeObserver" in r), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Q(() => Qt(e), (f) => {
    i(), a.value && r && f && (s = new ResizeObserver(t), s.observe(f, l));
  }, { immediate: !0, flush: "post" }), d = () => {
    i(), u();
  };
  return il(d), {
    isSupported: a,
    stop: d
  };
}
var ba;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ba || (ba = {}));
var uv = Object.defineProperty, ya = Object.getOwnPropertySymbols, cv = Object.prototype.hasOwnProperty, dv = Object.prototype.propertyIsEnumerable, wa = (e, t, n) => t in e ? uv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, fv = (e, t) => {
  for (var n in t || (t = {}))
    cv.call(t, n) && wa(e, n, t[n]);
  if (ya)
    for (var n of ya(t))
      dv.call(t, n) && wa(e, n, t[n]);
  return e;
};
const pv = {
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
fv({
  linear: nv
}, pv);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const lo = () => {
}, vv = Object.prototype.hasOwnProperty, gn = (e, t) => vv.call(e, t), mn = Array.isArray, ft = (e) => typeof e == "function", Ze = (e) => typeof e == "string", ct = (e) => e !== null && typeof e == "object", hv = Object.prototype.toString, gv = (e) => hv.call(e), cr = (e) => gv(e).slice(8, -1), Ds = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, mv = /-(\w)/g, bv = Ds((e) => e.replace(mv, (t, n) => n ? n.toUpperCase() : "")), yv = /\B([A-Z])/g, wv = Ds((e) => e.replace(yv, "-$1").toLowerCase()), Zt = (e) => e === void 0, ao = (e) => typeof Element > "u" ? !1 : e instanceof Element, Cv = (e) => Ze(e) ? !Number.isNaN(Number(e)) : !1, Sv = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), _v = (e, t, n) => ({
  get value() {
    return He(e, t, n);
  },
  set value(o) {
    Jp(e, t, o);
  }
});
class Ws extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Vs(e, t) {
  throw new Ws(`[${e}] ${t}`);
}
function Le(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = Ze(e) ? new Ws(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Ev = "utils/dom/style", js = (e = "") => e.split(" ").filter((t) => !!t.trim()), Oo = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, Do = (e, t) => {
  !e || !t.trim() || e.classList.add(...js(t));
}, bn = (e, t) => {
  !e || !t.trim() || e.classList.remove(...js(t));
}, un = (e, t) => {
  var n;
  if (!$e || !e || !t)
    return "";
  let o = bv(t);
  o === "float" && (o = "cssFloat");
  try {
    const r = e.style[o];
    if (r)
      return r;
    const l = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, "");
    return l ? l[o] : "";
  } catch {
    return e.style[o];
  }
};
function Or(e, t = "px") {
  if (!e)
    return "";
  if (me(e) || Cv(e))
    return `${e}${t}`;
  if (Ze(e))
    return e;
  Le(Ev, "binding value must be a string or number");
}
function $v(e, t) {
  if (!$e)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let o = t.offsetParent;
  for (; o !== null && e !== o && e.contains(o); )
    n.push(o), o = o.offsetParent;
  const r = t.offsetTop + n.reduce((i, u) => i + u.offsetTop, 0), l = r + t.offsetHeight, s = e.scrollTop, a = s + e.clientHeight;
  r < s ? e.scrollTop = r : l > a && (e.scrollTop = l - e.clientHeight);
}
/*! Element Plus Icons Vue v2.0.10 */
var qe = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [o, r] of t)
    n[o] = r;
  return n;
}, xv = {
  name: "ArrowDown"
}, Ov = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Tv = /* @__PURE__ */ U("path", {
  fill: "currentColor",
  d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
}, null, -1), Pv = [
  Tv
];
function kv(e, t, n, o, r, l) {
  return T(), B("svg", Ov, Pv);
}
var cl = /* @__PURE__ */ qe(xv, [["render", kv], ["__file", "arrow-down.vue"]]), Av = {
  name: "ArrowLeft"
}, Lv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Mv = /* @__PURE__ */ U("path", {
  fill: "currentColor",
  d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
}, null, -1), Iv = [
  Mv
];
function Nv(e, t, n, o, r, l) {
  return T(), B("svg", Lv, Iv);
}
var Rv = /* @__PURE__ */ qe(Av, [["render", Nv], ["__file", "arrow-left.vue"]]), Fv = {
  name: "ArrowRight"
}, Bv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, zv = /* @__PURE__ */ U("path", {
  fill: "currentColor",
  d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
}, null, -1), Hv = [
  zv
];
function Dv(e, t, n, o, r, l) {
  return T(), B("svg", Bv, Hv);
}
var dl = /* @__PURE__ */ qe(Fv, [["render", Dv], ["__file", "arrow-right.vue"]]), Wv = {
  name: "ArrowUp"
}, Vv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, jv = /* @__PURE__ */ U("path", {
  fill: "currentColor",
  d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
}, null, -1), Kv = [
  jv
];
function Uv(e, t, n, o, r, l) {
  return T(), B("svg", Vv, Kv);
}
var Ks = /* @__PURE__ */ qe(Wv, [["render", Uv], ["__file", "arrow-up.vue"]]), qv = {
  name: "CircleCheck"
}, Gv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Yv = /* @__PURE__ */ U("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), Xv = /* @__PURE__ */ U("path", {
  fill: "currentColor",
  d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
}, null, -1), Qv = [
  Yv,
  Xv
];
function Zv(e, t, n, o, r, l) {
  return T(), B("svg", Gv, Qv);
}
var Jv = /* @__PURE__ */ qe(qv, [["render", Zv], ["__file", "circle-check.vue"]]), eh = {
  name: "CircleClose"
}, th = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, nh = /* @__PURE__ */ U("path", {
  fill: "currentColor",
  d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
}, null, -1), oh = /* @__PURE__ */ U("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), rh = [
  nh,
  oh
];
function lh(e, t, n, o, r, l) {
  return T(), B("svg", th, rh);
}
var fl = /* @__PURE__ */ qe(eh, [["render", lh], ["__file", "circle-close.vue"]]), ah = {
  name: "Close"
}, sh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ih = /* @__PURE__ */ U("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1), uh = [
  ih
];
function ch(e, t, n, o, r, l) {
  return T(), B("svg", sh, uh);
}
var Ca = /* @__PURE__ */ qe(ah, [["render", ch], ["__file", "close.vue"]]), dh = {
  name: "DArrowLeft"
}, fh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ph = /* @__PURE__ */ U("path", {
  fill: "currentColor",
  d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
}, null, -1), vh = [
  ph
];
function hh(e, t, n, o, r, l) {
  return T(), B("svg", fh, vh);
}
var gh = /* @__PURE__ */ qe(dh, [["render", hh], ["__file", "d-arrow-left.vue"]]), mh = {
  name: "DArrowRight"
}, bh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, yh = /* @__PURE__ */ U("path", {
  fill: "currentColor",
  d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
}, null, -1), wh = [
  yh
];
function Ch(e, t, n, o, r, l) {
  return T(), B("svg", bh, wh);
}
var Sh = /* @__PURE__ */ qe(mh, [["render", Ch], ["__file", "d-arrow-right.vue"]]), _h = {
  name: "Hide"
}, Eh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, $h = /* @__PURE__ */ U("path", {
  d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z",
  fill: "currentColor"
}, null, -1), xh = /* @__PURE__ */ U("path", {
  d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z",
  fill: "currentColor"
}, null, -1), Oh = [
  $h,
  xh
];
function Th(e, t, n, o, r, l) {
  return T(), B("svg", Eh, Oh);
}
var Ph = /* @__PURE__ */ qe(_h, [["render", Th], ["__file", "hide.vue"]]), kh = {
  name: "Loading"
}, Ah = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Lh = /* @__PURE__ */ U("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1), Mh = [
  Lh
];
function Ih(e, t, n, o, r, l) {
  return T(), B("svg", Ah, Mh);
}
var pl = /* @__PURE__ */ qe(kh, [["render", Ih], ["__file", "loading.vue"]]), Nh = {
  name: "Minus"
}, Rh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Fh = /* @__PURE__ */ U("path", {
  fill: "currentColor",
  d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"
}, null, -1), Bh = [
  Fh
];
function zh(e, t, n, o, r, l) {
  return T(), B("svg", Rh, Bh);
}
var Hh = /* @__PURE__ */ qe(Nh, [["render", zh], ["__file", "minus.vue"]]), Dh = {
  name: "MoreFilled"
}, Wh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Vh = /* @__PURE__ */ U("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"
}, null, -1), jh = [
  Vh
];
function Kh(e, t, n, o, r, l) {
  return T(), B("svg", Wh, jh);
}
var Sa = /* @__PURE__ */ qe(Dh, [["render", Kh], ["__file", "more-filled.vue"]]), Uh = {
  name: "Plus"
}, qh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Gh = /* @__PURE__ */ U("path", {
  fill: "currentColor",
  d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
}, null, -1), Yh = [
  Gh
];
function Xh(e, t, n, o, r, l) {
  return T(), B("svg", qh, Yh);
}
var Qh = /* @__PURE__ */ qe(Uh, [["render", Xh], ["__file", "plus.vue"]]), Zh = {
  name: "View"
}, Jh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, eg = /* @__PURE__ */ U("path", {
  fill: "currentColor",
  d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
}, null, -1), tg = [
  eg
];
function ng(e, t, n, o, r, l) {
  return T(), B("svg", Jh, tg);
}
var og = /* @__PURE__ */ qe(Zh, [["render", ng], ["__file", "view.vue"]]);
const Us = "__epPropKey", ve = (e) => e, rg = (e) => ct(e) && !!e[Us], Jo = (e, t) => {
  if (!ct(e) || rg(e))
    return e;
  const { values: n, required: o, default: r, type: l, validator: s } = e, i = {
    type: l,
    required: !!o,
    validator: n || s ? (u) => {
      let d = !1, f = [];
      if (n && (f = Array.from(n), gn(e, "default") && f.push(r), d || (d = f.includes(u))), s && (d || (d = s(u))), !d && f.length > 0) {
        const p = [...new Set(f)].map((h) => JSON.stringify(h)).join(", ");
        ou(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${p}], got value ${JSON.stringify(u)}.`);
      }
      return d;
    } : void 0,
    [Us]: !0
  };
  return gn(e, "default") && (i.default = r), i;
}, _e = (e) => zo(Object.entries(e).map(([t, n]) => [
  t,
  Jo(n, t)
])), Lt = ve([
  String,
  Object,
  Function
]), lg = {
  validating: pl,
  success: Jv,
  error: fl
}, gt = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, Kn = (e) => (e.install = lo, e), so = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
}, Te = "update:modelValue", er = "change", To = "input", vo = ["", "default", "small", "large"], ag = {
  large: 40,
  default: 32,
  small: 24
}, sg = (e) => ag[e || "default"], ig = (e) => ["", ...vo].includes(e), ug = () => $e && /firefox/i.test(window.navigator.userAgent), qs = (e) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e), vl = (e) => e, cg = ["class", "style"], dg = /^on[A-Z]/, fg = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = $(() => ((n == null ? void 0 : n.value) || []).concat(cg)), r = Ce();
  return r ? $(() => {
    var l;
    return zo(Object.entries((l = r.proxy) == null ? void 0 : l.$attrs).filter(([s]) => !o.value.includes(s) && !(t && dg.test(s))));
  }) : (Le("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), $(() => ({})));
}, Gs = Symbol("buttonGroupContextKey"), Un = Symbol("checkboxGroupContextKey"), pg = Symbol(), hl = Symbol("formContextKey"), Wo = Symbol("formItemContextKey"), Ys = Symbol("elPaginationKey"), Xs = Symbol("scrollbarContextKey"), gl = Symbol("popper"), Qs = Symbol("popperContent"), ml = Symbol("elTooltip"), Zs = (e) => {
  const t = Ce();
  return $(() => {
    var n, o;
    return (o = ((n = t.proxy) == null ? void 0 : n.$props)[e]) != null ? o : void 0;
  });
}, _a = x();
function Sn(e, t = void 0) {
  const n = Ce() ? ie(pg, _a) : _a;
  return e ? $(() => {
    var o, r;
    return (r = (o = n.value) == null ? void 0 : o[e]) != null ? r : t;
  }) : n;
}
const qn = Jo({
  type: String,
  values: vo,
  required: !1
}), nn = (e, t = {}) => {
  const n = x(void 0), o = t.prop ? n : Zs("size"), r = t.global ? n : Sn("size"), l = t.form ? { size: void 0 } : ie(hl, void 0), s = t.formItem ? { size: void 0 } : ie(Wo, void 0);
  return $(() => o.value || v(e) || (s == null ? void 0 : s.size) || (l == null ? void 0 : l.size) || r.value || "");
}, ho = (e) => {
  const t = Zs("disabled"), n = ie(hl, void 0);
  return $(() => t.value || v(e) || (n == null ? void 0 : n.disabled) || !1);
}, Js = ({ from: e, replacement: t, scope: n, version: o, ref: r, type: l = "API" }, s) => {
  Q(() => v(s), (a) => {
    a && Le(n, `[${l}] ${e} is about to be deprecated in version ${o}, please use ${t} instead.
For more detail, please visit: ${r}
`);
  }, {
    immediate: !0
  });
}, vg = (e) => ({
  focus: () => {
    var t, n;
    (n = (t = e.value) == null ? void 0 : t.focus) == null || n.call(t);
  }
}), bl = "el", hg = "is-", an = (e, t, n, o, r) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), o && (l += `__${o}`), r && (l += `--${r}`), l;
}, re = (e) => {
  const t = Sn("namespace", bl);
  return {
    namespace: t,
    b: (c = "") => an(t.value, e, c, "", ""),
    e: (c) => c ? an(t.value, e, "", c, "") : "",
    m: (c) => c ? an(t.value, e, "", "", c) : "",
    be: (c, g) => c && g ? an(t.value, e, c, g, "") : "",
    em: (c, g) => c && g ? an(t.value, e, "", c, g) : "",
    bm: (c, g) => c && g ? an(t.value, e, c, "", g) : "",
    bem: (c, g, y) => c && g && y ? an(t.value, e, c, g, y) : "",
    is: (c, ...g) => {
      const y = g.length >= 1 ? g[0] : !0;
      return c && y ? `${hg}${c}` : "";
    },
    cssVar: (c) => {
      const g = {};
      for (const y in c)
        c[y] && (g[`--${t.value}-${y}`] = c[y]);
      return g;
    },
    cssVarName: (c) => `--${t.value}-${c}`,
    cssVarBlock: (c) => {
      const g = {};
      for (const y in c)
        c[y] && (g[`--${t.value}-${e}-${y}`] = c[y]);
      return g;
    },
    cssVarBlockName: (c) => `--${t.value}-${e}-${c}`
  };
}, Tr = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, gg = Symbol("elIdInjection"), ei = () => Ce() ? ie(gg, Tr) : Tr, ti = (e) => {
  const t = ei();
  !$e && t === Tr && Le("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = Sn("namespace", bl);
  return $(() => v(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, _n = () => {
  const e = ie(hl, void 0), t = ie(Wo, void 0);
  return {
    form: e,
    formItem: t
  };
}, yl = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = x(!1)), o || (o = x(!1));
  const r = x();
  let l;
  const s = $(() => {
    var a;
    return !!(!e.label && t && t.inputIds && ((a = t.inputIds) == null ? void 0 : a.length) <= 1);
  });
  return Pe(() => {
    l = Q([Ot(e, "id"), n], ([a, i]) => {
      const u = a ?? (i ? void 0 : ti().value);
      u !== r.value && (t != null && t.removeInputId && (r.value && t.removeInputId(r.value), !(o != null && o.value) && !i && u && t.addInputId(u)), r.value = u);
    }, { immediate: !0 });
  }), jo(() => {
    l && l(), t != null && t.removeInputId && r.value && t.removeInputId(r.value);
  }), {
    isLabeledByFormItem: s,
    inputId: r
  };
};
var mg = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
};
const bg = (e) => (t, n) => yg(t, n, v(e)), yg = (e, t, n) => He(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var l;
  return `${(l = t == null ? void 0 : t[r]) != null ? l : `{${r}}`}`;
}), wg = (e) => {
  const t = $(() => v(e).name), n = vn(e) ? e : x(e);
  return {
    lang: t,
    locale: n,
    t: bg(e)
  };
}, It = () => {
  const e = Sn("locale");
  return wg($(() => e.value || mg));
}, Cg = Jo({
  type: ve(Boolean),
  default: null
}), Sg = Jo({
  type: ve(Function)
}), _g = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: Cg,
    [n]: Sg
  };
  return {
    useModelToggle: ({
      indicator: s,
      toggleReason: a,
      shouldHideWhenRouteChanges: i,
      shouldProceed: u,
      onShow: d,
      onHide: f
    }) => {
      const p = Ce(), { emit: h } = p, c = p.props, g = $(() => ft(c[n])), y = $(() => c[e] === null), m = (S) => {
        s.value !== !0 && (s.value = !0, a && (a.value = S), ft(d) && d(S));
      }, w = (S) => {
        s.value !== !1 && (s.value = !1, a && (a.value = S), ft(f) && f(S));
      }, C = (S) => {
        if (c.disabled === !0 || ft(u) && !u())
          return;
        const P = g.value && $e;
        P && h(t, !0), (y.value || !P) && m(S);
      }, b = (S) => {
        if (c.disabled === !0 || !$e)
          return;
        const P = g.value && $e;
        P && h(t, !1), (y.value || !P) && w(S);
      }, O = (S) => {
        In(S) && (c.disabled && S ? g.value && h(t, !1) : s.value !== S && (S ? m() : w()));
      }, _ = () => {
        s.value ? b() : C();
      };
      return Q(() => c[e], O), i && p.appContext.config.globalProperties.$route !== void 0 && Q(() => ({
        ...p.proxy.$route
      }), () => {
        i.value && s.value && b();
      }), Pe(() => {
        O(c[e]);
      }), {
        hide: b,
        show: C,
        toggle: _,
        hasUpdateHandler: g
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
};
var Je = "top", vt = "bottom", ht = "right", et = "left", wl = "auto", go = [Je, vt, ht, et], Rn = "start", io = "end", Eg = "clippingParents", ni = "viewport", Xn = "popper", $g = "reference", Ea = go.reduce(function(e, t) {
  return e.concat([t + "-" + Rn, t + "-" + io]);
}, []), tr = [].concat(go, [wl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Rn, t + "-" + io]);
}, []), xg = "beforeRead", Og = "read", Tg = "afterRead", Pg = "beforeMain", kg = "main", Ag = "afterMain", Lg = "beforeWrite", Mg = "write", Ig = "afterWrite", Ng = [xg, Og, Tg, Pg, kg, Ag, Lg, Mg, Ig];
function Mt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Et(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Fn(e) {
  var t = Et(e).Element;
  return e instanceof t || e instanceof Element;
}
function pt(e) {
  var t = Et(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Cl(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Et(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Rg(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, l = t.elements[n];
    !pt(l) || !Mt(l) || (Object.assign(l.style, o), Object.keys(r).forEach(function(s) {
      var a = r[s];
      a === !1 ? l.removeAttribute(s) : l.setAttribute(s, a === !0 ? "" : a);
    }));
  });
}
function Fg(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], l = t.attributes[o] || {}, s = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), a = s.reduce(function(i, u) {
        return i[u] = "", i;
      }, {});
      !pt(r) || !Mt(r) || (Object.assign(r.style, a), Object.keys(l).forEach(function(i) {
        r.removeAttribute(i);
      }));
    });
  };
}
var oi = { name: "applyStyles", enabled: !0, phase: "write", fn: Rg, effect: Fg, requires: ["computeStyles"] };
function Pt(e) {
  return e.split("-")[0];
}
var pn = Math.max, Vo = Math.min, Bn = Math.round;
function zn(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), o = 1, r = 1;
  if (pt(e) && t) {
    var l = e.offsetHeight, s = e.offsetWidth;
    s > 0 && (o = Bn(n.width) / s || 1), l > 0 && (r = Bn(n.height) / l || 1);
  }
  return { width: n.width / o, height: n.height / r, top: n.top / r, right: n.right / o, bottom: n.bottom / r, left: n.left / o, x: n.left / o, y: n.top / r };
}
function Sl(e) {
  var t = zn(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function ri(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Cl(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Kt(e) {
  return Et(e).getComputedStyle(e);
}
function Bg(e) {
  return ["table", "td", "th"].indexOf(Mt(e)) >= 0;
}
function on(e) {
  return ((Fn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function nr(e) {
  return Mt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Cl(e) ? e.host : null) || on(e);
}
function $a(e) {
  return !pt(e) || Kt(e).position === "fixed" ? null : e.offsetParent;
}
function zg(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && pt(e)) {
    var o = Kt(e);
    if (o.position === "fixed")
      return null;
  }
  var r = nr(e);
  for (Cl(r) && (r = r.host); pt(r) && ["html", "body"].indexOf(Mt(r)) < 0; ) {
    var l = Kt(r);
    if (l.transform !== "none" || l.perspective !== "none" || l.contain === "paint" || ["transform", "perspective"].indexOf(l.willChange) !== -1 || t && l.willChange === "filter" || t && l.filter && l.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function mo(e) {
  for (var t = Et(e), n = $a(e); n && Bg(n) && Kt(n).position === "static"; )
    n = $a(n);
  return n && (Mt(n) === "html" || Mt(n) === "body" && Kt(n).position === "static") ? t : n || zg(e) || t;
}
function _l(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Zn(e, t, n) {
  return pn(e, Vo(t, n));
}
function Hg(e, t, n) {
  var o = Zn(e, t, n);
  return o > n ? n : o;
}
function li() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function ai(e) {
  return Object.assign({}, li(), e);
}
function si(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var Dg = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, ai(typeof e != "number" ? e : si(e, go));
};
function Wg(e) {
  var t, n = e.state, o = e.name, r = e.options, l = n.elements.arrow, s = n.modifiersData.popperOffsets, a = Pt(n.placement), i = _l(a), u = [et, ht].indexOf(a) >= 0, d = u ? "height" : "width";
  if (!(!l || !s)) {
    var f = Dg(r.padding, n), p = Sl(l), h = i === "y" ? Je : et, c = i === "y" ? vt : ht, g = n.rects.reference[d] + n.rects.reference[i] - s[i] - n.rects.popper[d], y = s[i] - n.rects.reference[i], m = mo(l), w = m ? i === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, C = g / 2 - y / 2, b = f[h], O = w - p[d] - f[c], _ = w / 2 - p[d] / 2 + C, S = Zn(b, _, O), P = i;
    n.modifiersData[o] = (t = {}, t[P] = S, t.centerOffset = S - _, t);
  }
}
function Vg(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || !ri(t.elements.popper, r) || (t.elements.arrow = r));
}
var jg = { name: "arrow", enabled: !0, phase: "main", fn: Wg, effect: Vg, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Hn(e) {
  return e.split("-")[1];
}
var Kg = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Ug(e) {
  var t = e.x, n = e.y, o = window, r = o.devicePixelRatio || 1;
  return { x: Bn(t * r) / r || 0, y: Bn(n * r) / r || 0 };
}
function xa(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, l = e.variation, s = e.offsets, a = e.position, i = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, f = e.isFixed, p = s.x, h = p === void 0 ? 0 : p, c = s.y, g = c === void 0 ? 0 : c, y = typeof d == "function" ? d({ x: h, y: g }) : { x: h, y: g };
  h = y.x, g = y.y;
  var m = s.hasOwnProperty("x"), w = s.hasOwnProperty("y"), C = et, b = Je, O = window;
  if (u) {
    var _ = mo(n), S = "clientHeight", P = "clientWidth";
    if (_ === Et(n) && (_ = on(n), Kt(_).position !== "static" && a === "absolute" && (S = "scrollHeight", P = "scrollWidth")), _ = _, r === Je || (r === et || r === ht) && l === io) {
      b = vt;
      var N = f && _ === O && O.visualViewport ? O.visualViewport.height : _[S];
      g -= N - o.height, g *= i ? 1 : -1;
    }
    if (r === et || (r === Je || r === vt) && l === io) {
      C = ht;
      var z = f && _ === O && O.visualViewport ? O.visualViewport.width : _[P];
      h -= z - o.width, h *= i ? 1 : -1;
    }
  }
  var j = Object.assign({ position: a }, u && Kg), D = d === !0 ? Ug({ x: h, y: g }) : { x: h, y: g };
  if (h = D.x, g = D.y, i) {
    var k;
    return Object.assign({}, j, (k = {}, k[b] = w ? "0" : "", k[C] = m ? "0" : "", k.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + g + "px)" : "translate3d(" + h + "px, " + g + "px, 0)", k));
  }
  return Object.assign({}, j, (t = {}, t[b] = w ? g + "px" : "", t[C] = m ? h + "px" : "", t.transform = "", t));
}
function qg(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, l = n.adaptive, s = l === void 0 ? !0 : l, a = n.roundOffsets, i = a === void 0 ? !0 : a, u = { placement: Pt(t.placement), variation: Hn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, xa(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: i })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, xa(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: i })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var ii = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: qg, data: {} }, yo = { passive: !0 };
function Gg(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, l = r === void 0 ? !0 : r, s = o.resize, a = s === void 0 ? !0 : s, i = Et(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return l && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, yo);
  }), a && i.addEventListener("resize", n.update, yo), function() {
    l && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, yo);
    }), a && i.removeEventListener("resize", n.update, yo);
  };
}
var ui = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Gg, data: {} }, Yg = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Po(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Yg[t];
  });
}
var Xg = { start: "end", end: "start" };
function Oa(e) {
  return e.replace(/start|end/g, function(t) {
    return Xg[t];
  });
}
function El(e) {
  var t = Et(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function $l(e) {
  return zn(on(e)).left + El(e).scrollLeft;
}
function Qg(e) {
  var t = Et(e), n = on(e), o = t.visualViewport, r = n.clientWidth, l = n.clientHeight, s = 0, a = 0;
  return o && (r = o.width, l = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = o.offsetLeft, a = o.offsetTop)), { width: r, height: l, x: s + $l(e), y: a };
}
function Zg(e) {
  var t, n = on(e), o = El(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, l = pn(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), s = pn(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), a = -o.scrollLeft + $l(e), i = -o.scrollTop;
  return Kt(r || n).direction === "rtl" && (a += pn(n.clientWidth, r ? r.clientWidth : 0) - l), { width: l, height: s, x: a, y: i };
}
function xl(e) {
  var t = Kt(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function ci(e) {
  return ["html", "body", "#document"].indexOf(Mt(e)) >= 0 ? e.ownerDocument.body : pt(e) && xl(e) ? e : ci(nr(e));
}
function Jn(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = ci(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), l = Et(o), s = r ? [l].concat(l.visualViewport || [], xl(o) ? o : []) : o, a = t.concat(s);
  return r ? a : a.concat(Jn(nr(s)));
}
function Pr(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Jg(e) {
  var t = zn(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Ta(e, t) {
  return t === ni ? Pr(Qg(e)) : Fn(t) ? Jg(t) : Pr(Zg(on(e)));
}
function em(e) {
  var t = Jn(nr(e)), n = ["absolute", "fixed"].indexOf(Kt(e).position) >= 0, o = n && pt(e) ? mo(e) : e;
  return Fn(o) ? t.filter(function(r) {
    return Fn(r) && ri(r, o) && Mt(r) !== "body";
  }) : [];
}
function tm(e, t, n) {
  var o = t === "clippingParents" ? em(e) : [].concat(t), r = [].concat(o, [n]), l = r[0], s = r.reduce(function(a, i) {
    var u = Ta(e, i);
    return a.top = pn(u.top, a.top), a.right = Vo(u.right, a.right), a.bottom = Vo(u.bottom, a.bottom), a.left = pn(u.left, a.left), a;
  }, Ta(e, l));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function di(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? Pt(o) : null, l = o ? Hn(o) : null, s = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, i;
  switch (r) {
    case Je:
      i = { x: s, y: t.y - n.height };
      break;
    case vt:
      i = { x: s, y: t.y + t.height };
      break;
    case ht:
      i = { x: t.x + t.width, y: a };
      break;
    case et:
      i = { x: t.x - n.width, y: a };
      break;
    default:
      i = { x: t.x, y: t.y };
  }
  var u = r ? _l(r) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (l) {
      case Rn:
        i[u] = i[u] - (t[d] / 2 - n[d] / 2);
        break;
      case io:
        i[u] = i[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return i;
}
function uo(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, l = n.boundary, s = l === void 0 ? Eg : l, a = n.rootBoundary, i = a === void 0 ? ni : a, u = n.elementContext, d = u === void 0 ? Xn : u, f = n.altBoundary, p = f === void 0 ? !1 : f, h = n.padding, c = h === void 0 ? 0 : h, g = ai(typeof c != "number" ? c : si(c, go)), y = d === Xn ? $g : Xn, m = e.rects.popper, w = e.elements[p ? y : d], C = tm(Fn(w) ? w : w.contextElement || on(e.elements.popper), s, i), b = zn(e.elements.reference), O = di({ reference: b, element: m, strategy: "absolute", placement: r }), _ = Pr(Object.assign({}, m, O)), S = d === Xn ? _ : b, P = { top: C.top - S.top + g.top, bottom: S.bottom - C.bottom + g.bottom, left: C.left - S.left + g.left, right: S.right - C.right + g.right }, N = e.modifiersData.offset;
  if (d === Xn && N) {
    var z = N[r];
    Object.keys(P).forEach(function(j) {
      var D = [ht, vt].indexOf(j) >= 0 ? 1 : -1, k = [Je, vt].indexOf(j) >= 0 ? "y" : "x";
      P[j] += z[k] * D;
    });
  }
  return P;
}
function nm(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, l = n.rootBoundary, s = n.padding, a = n.flipVariations, i = n.allowedAutoPlacements, u = i === void 0 ? tr : i, d = Hn(o), f = d ? a ? Ea : Ea.filter(function(c) {
    return Hn(c) === d;
  }) : go, p = f.filter(function(c) {
    return u.indexOf(c) >= 0;
  });
  p.length === 0 && (p = f);
  var h = p.reduce(function(c, g) {
    return c[g] = uo(e, { placement: g, boundary: r, rootBoundary: l, padding: s })[Pt(g)], c;
  }, {});
  return Object.keys(h).sort(function(c, g) {
    return h[c] - h[g];
  });
}
function om(e) {
  if (Pt(e) === wl)
    return [];
  var t = Po(e);
  return [Oa(e), t, Oa(t)];
}
function rm(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, l = r === void 0 ? !0 : r, s = n.altAxis, a = s === void 0 ? !0 : s, i = n.fallbackPlacements, u = n.padding, d = n.boundary, f = n.rootBoundary, p = n.altBoundary, h = n.flipVariations, c = h === void 0 ? !0 : h, g = n.allowedAutoPlacements, y = t.options.placement, m = Pt(y), w = m === y, C = i || (w || !c ? [Po(y)] : om(y)), b = [y].concat(C).reduce(function(ge, le) {
      return ge.concat(Pt(le) === wl ? nm(t, { placement: le, boundary: d, rootBoundary: f, padding: u, flipVariations: c, allowedAutoPlacements: g }) : le);
    }, []), O = t.rects.reference, _ = t.rects.popper, S = /* @__PURE__ */ new Map(), P = !0, N = b[0], z = 0; z < b.length; z++) {
      var j = b[z], D = Pt(j), k = Hn(j) === Rn, R = [Je, vt].indexOf(D) >= 0, M = R ? "width" : "height", V = uo(t, { placement: j, boundary: d, rootBoundary: f, altBoundary: p, padding: u }), Z = R ? k ? ht : et : k ? vt : Je;
      O[M] > _[M] && (Z = Po(Z));
      var H = Po(Z), L = [];
      if (l && L.push(V[D] <= 0), a && L.push(V[Z] <= 0, V[H] <= 0), L.every(function(ge) {
        return ge;
      })) {
        N = j, P = !1;
        break;
      }
      S.set(j, L);
    }
    if (P)
      for (var q = c ? 3 : 1, oe = function(ge) {
        var le = b.find(function(ye) {
          var Ee = S.get(ye);
          if (Ee)
            return Ee.slice(0, ge).every(function(ae) {
              return ae;
            });
        });
        if (le)
          return N = le, "break";
      }, de = q; de > 0; de--) {
        var be = oe(de);
        if (be === "break")
          break;
      }
    t.placement !== N && (t.modifiersData[o]._skip = !0, t.placement = N, t.reset = !0);
  }
}
var lm = { name: "flip", enabled: !0, phase: "main", fn: rm, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Pa(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function ka(e) {
  return [Je, ht, vt, et].some(function(t) {
    return e[t] >= 0;
  });
}
function am(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, l = t.modifiersData.preventOverflow, s = uo(t, { elementContext: "reference" }), a = uo(t, { altBoundary: !0 }), i = Pa(s, o), u = Pa(a, r, l), d = ka(i), f = ka(u);
  t.modifiersData[n] = { referenceClippingOffsets: i, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: f }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": f });
}
var sm = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: am };
function im(e, t, n) {
  var o = Pt(e), r = [et, Je].indexOf(o) >= 0 ? -1 : 1, l = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = l[0], a = l[1];
  return s = s || 0, a = (a || 0) * r, [et, ht].indexOf(o) >= 0 ? { x: a, y: s } : { x: s, y: a };
}
function um(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, l = r === void 0 ? [0, 0] : r, s = tr.reduce(function(d, f) {
    return d[f] = im(f, t.rects, l), d;
  }, {}), a = s[t.placement], i = a.x, u = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = s;
}
var cm = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: um };
function dm(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = di({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var fi = { name: "popperOffsets", enabled: !0, phase: "read", fn: dm, data: {} };
function fm(e) {
  return e === "x" ? "y" : "x";
}
function pm(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, l = r === void 0 ? !0 : r, s = n.altAxis, a = s === void 0 ? !1 : s, i = n.boundary, u = n.rootBoundary, d = n.altBoundary, f = n.padding, p = n.tether, h = p === void 0 ? !0 : p, c = n.tetherOffset, g = c === void 0 ? 0 : c, y = uo(t, { boundary: i, rootBoundary: u, padding: f, altBoundary: d }), m = Pt(t.placement), w = Hn(t.placement), C = !w, b = _l(m), O = fm(b), _ = t.modifiersData.popperOffsets, S = t.rects.reference, P = t.rects.popper, N = typeof g == "function" ? g(Object.assign({}, t.rects, { placement: t.placement })) : g, z = typeof N == "number" ? { mainAxis: N, altAxis: N } : Object.assign({ mainAxis: 0, altAxis: 0 }, N), j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, D = { x: 0, y: 0 };
  if (_) {
    if (l) {
      var k, R = b === "y" ? Je : et, M = b === "y" ? vt : ht, V = b === "y" ? "height" : "width", Z = _[b], H = Z + y[R], L = Z - y[M], q = h ? -P[V] / 2 : 0, oe = w === Rn ? S[V] : P[V], de = w === Rn ? -P[V] : -S[V], be = t.elements.arrow, ge = h && be ? Sl(be) : { width: 0, height: 0 }, le = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : li(), ye = le[R], Ee = le[M], ae = Zn(0, S[V], ge[V]), ke = C ? S[V] / 2 - q - ae - ye - z.mainAxis : oe - ae - ye - z.mainAxis, De = C ? -S[V] / 2 + q + ae + Ee + z.mainAxis : de + ae + Ee + z.mainAxis, dt = t.elements.arrow && mo(t.elements.arrow), Ge = dt ? b === "y" ? dt.clientTop || 0 : dt.clientLeft || 0 : 0, tt = (k = j == null ? void 0 : j[b]) != null ? k : 0, Rt = Z + ke - tt - Ge, mt = Z + De - tt, nt = Zn(h ? Vo(H, Rt) : H, Z, h ? pn(L, mt) : L);
      _[b] = nt, D[b] = nt - Z;
    }
    if (a) {
      var $t, Ft = b === "x" ? Je : et, We = b === "x" ? vt : ht, Be = _[O], ot = O === "y" ? "height" : "width", F = Be + y[Ft], ue = Be - y[We], Me = [Je, et].indexOf(m) !== -1, rt = ($t = j == null ? void 0 : j[O]) != null ? $t : 0, Bt = Me ? F : Be - S[ot] - P[ot] - rt + z.altAxis, xt = Me ? Be + S[ot] + P[ot] - rt - z.altAxis : ue, rn = h && Me ? Hg(Bt, Be, xt) : Zn(h ? Bt : F, Be, h ? xt : ue);
      _[O] = rn, D[O] = rn - Be;
    }
    t.modifiersData[o] = D;
  }
}
var vm = { name: "preventOverflow", enabled: !0, phase: "main", fn: pm, requiresIfExists: ["offset"] };
function hm(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function gm(e) {
  return e === Et(e) || !pt(e) ? El(e) : hm(e);
}
function mm(e) {
  var t = e.getBoundingClientRect(), n = Bn(t.width) / e.offsetWidth || 1, o = Bn(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function bm(e, t, n) {
  n === void 0 && (n = !1);
  var o = pt(t), r = pt(t) && mm(t), l = on(t), s = zn(e, r), a = { scrollLeft: 0, scrollTop: 0 }, i = { x: 0, y: 0 };
  return (o || !o && !n) && ((Mt(t) !== "body" || xl(l)) && (a = gm(t)), pt(t) ? (i = zn(t, !0), i.x += t.clientLeft, i.y += t.clientTop) : l && (i.x = $l(l))), { x: s.left + a.scrollLeft - i.x, y: s.top + a.scrollTop - i.y, width: s.width, height: s.height };
}
function ym(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(l) {
    t.set(l.name, l);
  });
  function r(l) {
    n.add(l.name);
    var s = [].concat(l.requires || [], l.requiresIfExists || []);
    s.forEach(function(a) {
      if (!n.has(a)) {
        var i = t.get(a);
        i && r(i);
      }
    }), o.push(l);
  }
  return e.forEach(function(l) {
    n.has(l.name) || r(l);
  }), o;
}
function wm(e) {
  var t = ym(e);
  return Ng.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function Cm(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Sm(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Aa = { placement: "bottom", modifiers: [], strategy: "absolute" };
function La() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Ol(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, l = r === void 0 ? Aa : r;
  return function(s, a, i) {
    i === void 0 && (i = l);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Aa, l), modifiersData: {}, elements: { reference: s, popper: a }, attributes: {}, styles: {} }, d = [], f = !1, p = { state: u, setOptions: function(g) {
      var y = typeof g == "function" ? g(u.options) : g;
      c(), u.options = Object.assign({}, l, u.options, y), u.scrollParents = { reference: Fn(s) ? Jn(s) : s.contextElement ? Jn(s.contextElement) : [], popper: Jn(a) };
      var m = wm(Sm([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = m.filter(function(w) {
        return w.enabled;
      }), h(), p.update();
    }, forceUpdate: function() {
      if (!f) {
        var g = u.elements, y = g.reference, m = g.popper;
        if (La(y, m)) {
          u.rects = { reference: bm(y, mo(m), u.options.strategy === "fixed"), popper: Sl(m) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(P) {
            return u.modifiersData[P.name] = Object.assign({}, P.data);
          });
          for (var w = 0; w < u.orderedModifiers.length; w++) {
            if (u.reset === !0) {
              u.reset = !1, w = -1;
              continue;
            }
            var C = u.orderedModifiers[w], b = C.fn, O = C.options, _ = O === void 0 ? {} : O, S = C.name;
            typeof b == "function" && (u = b({ state: u, options: _, name: S, instance: p }) || u);
          }
        }
      }
    }, update: Cm(function() {
      return new Promise(function(g) {
        p.forceUpdate(), g(u);
      });
    }), destroy: function() {
      c(), f = !0;
    } };
    if (!La(s, a))
      return p;
    p.setOptions(i).then(function(g) {
      !f && i.onFirstUpdate && i.onFirstUpdate(g);
    });
    function h() {
      u.orderedModifiers.forEach(function(g) {
        var y = g.name, m = g.options, w = m === void 0 ? {} : m, C = g.effect;
        if (typeof C == "function") {
          var b = C({ state: u, name: y, instance: p, options: w }), O = function() {
          };
          d.push(b || O);
        }
      });
    }
    function c() {
      d.forEach(function(g) {
        return g();
      }), d = [];
    }
    return p;
  };
}
Ol();
var _m = [ui, fi, ii, oi];
Ol({ defaultModifiers: _m });
var Em = [ui, fi, ii, oi, cm, lm, vm, jg, sm], pi = Ol({ defaultModifiers: Em });
const $m = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: i }) => {
      const u = xm(i);
      Object.assign(s.value, u);
    },
    requires: ["computeStyles"]
  }, r = $(() => {
    const { onFirstUpdate: i, placement: u, strategy: d, modifiers: f } = v(n);
    return {
      onFirstUpdate: i,
      placement: u || "bottom",
      strategy: d || "absolute",
      modifiers: [
        ...f || [],
        o,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), l = Pn(), s = x({
    styles: {
      popper: {
        position: v(r).strategy,
        left: "0",
        right: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), a = () => {
    l.value && (l.value.destroy(), l.value = void 0);
  };
  return Q(r, (i) => {
    const u = v(l);
    u && u.setOptions(i);
  }, {
    deep: !0
  }), Q([e, t], ([i, u]) => {
    a(), !(!i || !u) && (l.value = pi(i, u, v(r)));
  }), St(() => {
    a();
  }), {
    state: $(() => {
      var i;
      return { ...((i = v(l)) == null ? void 0 : i.state) || {} };
    }),
    styles: $(() => v(s).styles),
    attributes: $(() => v(s).attributes),
    update: () => {
      var i;
      return (i = v(l)) == null ? void 0 : i.update();
    },
    forceUpdate: () => {
      var i;
      return (i = v(l)) == null ? void 0 : i.forceUpdate();
    },
    instanceRef: $(() => v(l))
  };
};
function xm(e) {
  const t = Object.keys(e.elements), n = zo(t.map((r) => [r, e.styles[r] || {}])), o = zo(t.map((r) => [r, e.attributes[r]]));
  return {
    styles: n,
    attributes: o
  };
}
function Om() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return il(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
let xn = [];
const Ma = (e) => {
  const t = e;
  t.key === so.esc && xn.forEach((n) => n(t));
}, Tm = (e) => {
  Pe(() => {
    xn.length === 0 && document.addEventListener("keydown", Ma), $e && xn.push(e);
  }), St(() => {
    xn = xn.filter((t) => t !== e), xn.length === 0 && $e && document.removeEventListener("keydown", Ma);
  });
};
let Ia;
const vi = () => {
  const e = Sn("namespace", bl), t = ei(), n = $(() => `${e.value}-popper-container-${t.prefix}`), o = $(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, Pm = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, km = () => {
  Gr(() => {
    if (!$e)
      return;
    const { id: e, selector: t } = vi();
    (process.env.NODE_ENV === "test" || !Ia && !document.body.querySelector(t.value)) && (Ia = Pm(e.value));
  });
}, Am = _e({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  }
}), hi = ({
  showAfter: e,
  hideAfter: t,
  open: n,
  close: o
}) => {
  const { registerTimeout: r } = Om();
  return {
    onOpen: (a) => {
      r(() => {
        n(a);
      }, v(e));
    },
    onClose: (a) => {
      r(() => {
        o(a);
      }, v(t));
    }
  };
}, gi = Symbol("elForwardRef"), Lm = (e) => {
  st(gi, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, Mm = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Na = x(0), Tl = () => {
  const e = Sn("zIndex", 2e3), t = $(() => e.value + Na.value);
  return {
    initialZIndex: e,
    currentZIndex: t,
    nextZIndex: () => (Na.value++, t.value)
  };
};
function Im(e) {
  const t = x();
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: r, selectionEnd: l, value: s } = e.value;
    if (r == null || l == null)
      return;
    const a = s.slice(0, Math.max(0, r)), i = s.slice(Math.max(0, l));
    t.value = {
      selectionStart: r,
      selectionEnd: l,
      value: s,
      beforeTxt: a,
      afterTxt: i
    };
  }
  function o() {
    if (e.value == null || t.value == null)
      return;
    const { value: r } = e.value, { beforeTxt: l, afterTxt: s, selectionStart: a } = t.value;
    if (l == null || s == null || a == null)
      return;
    let i = r.length;
    if (r.endsWith(s))
      i = r.length - s.length;
    else if (r.startsWith(l))
      i = l.length;
    else {
      const u = l[a - 1], d = r.indexOf(u, a - 1);
      d !== -1 && (i = d + 1);
    }
    e.value.setSelectionRange(i, i);
  }
  return [n, o];
}
var pe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
const Nm = _e({
  size: {
    type: ve([Number, String])
  },
  color: {
    type: String
  }
}), Rm = K({
  name: "ElIcon",
  inheritAttrs: !1
}), Fm = /* @__PURE__ */ K({
  ...Rm,
  props: Nm,
  setup(e) {
    const t = e, n = re("icon"), o = $(() => {
      const { size: r, color: l } = t;
      return !r && !l ? {} : {
        fontSize: Zt(r) ? void 0 : Or(r),
        "--color": l
      };
    });
    return (r, l) => (T(), B("i", Ct({
      class: v(n).b(),
      style: v(o)
    }, r.$attrs), [
      se(r.$slots, "default")
    ], 16));
  }
});
var Bm = /* @__PURE__ */ pe(Fm, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const Ne = gt(Bm);
let yt;
const zm = `
  height:0 !important;
  visibility:hidden !important;
  ${ug() ? "" : "overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, Hm = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function Dm(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), r = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: Hm.map((s) => `${s}:${t.getPropertyValue(s)}`).join(";"), paddingSize: o, borderSize: r, boxSizing: n };
}
function Ra(e, t = 1, n) {
  var o;
  yt || (yt = document.createElement("textarea"), document.body.appendChild(yt));
  const { paddingSize: r, borderSize: l, boxSizing: s, contextStyle: a } = Dm(e);
  yt.setAttribute("style", `${a};${zm}`), yt.value = e.value || e.placeholder || "";
  let i = yt.scrollHeight;
  const u = {};
  s === "border-box" ? i = i + l : s === "content-box" && (i = i - r), yt.value = "";
  const d = yt.scrollHeight - r;
  if (me(t)) {
    let f = d * t;
    s === "border-box" && (f = f + r + l), i = Math.max(f, i), u.minHeight = `${f}px`;
  }
  if (me(n)) {
    let f = d * n;
    s === "border-box" && (f = f + r + l), i = Math.min(f, i);
  }
  return u.height = `${i}px`, (o = yt.parentNode) == null || o.removeChild(yt), yt = void 0, u;
}
const Wm = _e({
  id: {
    type: String,
    default: void 0
  },
  size: qn,
  disabled: Boolean,
  modelValue: {
    type: ve([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: ve([Boolean, Object]),
    default: !1
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  showPassword: {
    type: Boolean,
    default: !1
  },
  showWordLimit: {
    type: Boolean,
    default: !1
  },
  suffixIcon: {
    type: Lt
  },
  prefixIcon: {
    type: Lt
  },
  containerRole: {
    type: String,
    default: void 0
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  inputStyle: {
    type: ve([Object, Array, String]),
    default: () => vl({})
  }
}), Vm = {
  [Te]: (e) => Ze(e),
  input: (e) => Ze(e),
  change: (e) => Ze(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, jm = ["role"], Km = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form"], Um = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form"], qm = K({
  name: "ElInput",
  inheritAttrs: !1
}), Gm = /* @__PURE__ */ K({
  ...qm,
  props: Wm,
  emits: Vm,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = ru(), l = Ko(), s = $(() => {
      const F = {};
      return o.containerRole === "combobox" && (F["aria-haspopup"] = r["aria-haspopup"], F["aria-owns"] = r["aria-owns"], F["aria-expanded"] = r["aria-expanded"]), F;
    }), a = $(() => [
      o.type === "textarea" ? y.b() : g.b(),
      g.m(h.value),
      g.is("disabled", c.value),
      g.is("exceed", oe.value),
      {
        [g.b("group")]: l.prepend || l.append,
        [g.bm("group", "append")]: l.append,
        [g.bm("group", "prepend")]: l.prepend,
        [g.m("prefix")]: l.prefix || o.prefixIcon,
        [g.m("suffix")]: l.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [g.bm("suffix", "password-clear")]: Z.value && H.value
      },
      r.class
    ]), i = $(() => [
      g.e("wrapper"),
      g.is("focus", C.value)
    ]), u = fg({
      excludeKeys: $(() => Object.keys(s.value))
    }), { form: d, formItem: f } = _n(), { inputId: p } = yl(o, {
      formItemContext: f
    }), h = nn(), c = ho(), g = re("input"), y = re("textarea"), m = Pn(), w = Pn(), C = x(!1), b = x(!1), O = x(!1), _ = x(!1), S = x(), P = Pn(o.inputStyle), N = $(() => m.value || w.value), z = $(() => {
      var F;
      return (F = d == null ? void 0 : d.statusIcon) != null ? F : !1;
    }), j = $(() => (f == null ? void 0 : f.validateState) || ""), D = $(() => j.value && lg[j.value]), k = $(() => _.value ? og : Ph), R = $(() => [
      r.style,
      o.inputStyle
    ]), M = $(() => [
      o.inputStyle,
      P.value,
      { resize: o.resize }
    ]), V = $(() => Vt(o.modelValue) ? "" : String(o.modelValue)), Z = $(() => o.clearable && !c.value && !o.readonly && !!V.value && (C.value || b.value)), H = $(() => o.showPassword && !c.value && !o.readonly && !!V.value && (!!V.value || C.value)), L = $(() => o.showWordLimit && !!u.value.maxlength && (o.type === "text" || o.type === "textarea") && !c.value && !o.readonly && !o.showPassword), q = $(() => Array.from(V.value).length), oe = $(() => !!L.value && q.value > Number(u.value.maxlength)), de = $(() => !!l.suffix || !!o.suffixIcon || Z.value || o.showPassword || L.value || !!j.value && z.value), [be, ge] = Im(m);
    Nn(w, (F) => {
      if (!L.value || o.resize !== "both")
        return;
      const ue = F[0], { width: Me } = ue.contentRect;
      S.value = {
        right: `calc(100% - ${Me + 15 + 6}px)`
      };
    });
    const le = () => {
      const { type: F, autosize: ue } = o;
      if (!(!$e || F !== "textarea" || !w.value))
        if (ue) {
          const Me = ct(ue) ? ue.minRows : void 0, rt = ct(ue) ? ue.maxRows : void 0;
          P.value = {
            ...Ra(w.value, Me, rt)
          };
        } else
          P.value = {
            minHeight: Ra(w.value).minHeight
          };
    }, ye = () => {
      const F = N.value;
      !F || F.value === V.value || (F.value = V.value);
    }, Ee = async (F) => {
      be();
      let { value: ue } = F.target;
      if (o.formatter && (ue = o.parser ? o.parser(ue) : ue, ue = o.formatter(ue)), !O.value) {
        if (ue === V.value) {
          ye();
          return;
        }
        n(Te, ue), n("input", ue), await ce(), ye(), ge();
      }
    }, ae = (F) => {
      n("change", F.target.value);
    }, ke = (F) => {
      n("compositionstart", F), O.value = !0;
    }, De = (F) => {
      var ue;
      n("compositionupdate", F);
      const Me = (ue = F.target) == null ? void 0 : ue.value, rt = Me[Me.length - 1] || "";
      O.value = !qs(rt);
    }, dt = (F) => {
      n("compositionend", F), O.value && (O.value = !1, Ee(F));
    }, Ge = () => {
      _.value = !_.value, tt();
    }, tt = async () => {
      var F;
      await ce(), (F = N.value) == null || F.focus();
    }, Rt = () => {
      var F;
      return (F = N.value) == null ? void 0 : F.blur();
    }, mt = (F) => {
      C.value = !0, n("focus", F);
    }, nt = (F) => {
      var ue;
      C.value = !1, n("blur", F), o.validateEvent && ((ue = f == null ? void 0 : f.validate) == null || ue.call(f, "blur").catch((Me) => Le(Me)));
    }, $t = (F) => {
      b.value = !1, n("mouseleave", F);
    }, Ft = (F) => {
      b.value = !0, n("mouseenter", F);
    }, We = (F) => {
      n("keydown", F);
    }, Be = () => {
      var F;
      (F = N.value) == null || F.select();
    }, ot = () => {
      n(Te, ""), n("change", ""), n("clear"), n("input", "");
    };
    return Q(() => o.modelValue, () => {
      var F;
      ce(() => le()), o.validateEvent && ((F = f == null ? void 0 : f.validate) == null || F.call(f, "change").catch((ue) => Le(ue)));
    }), Q(V, () => ye()), Q(() => o.type, async () => {
      await ce(), ye(), le();
    }), Pe(() => {
      !o.formatter && o.parser && Le("ElInput", "If you set the parser, you also need to set the formatter."), ye(), ce(le);
    }), t({
      input: m,
      textarea: w,
      ref: N,
      textareaStyle: M,
      autosize: Ot(o, "autosize"),
      focus: tt,
      blur: Rt,
      select: Be,
      clear: ot,
      resizeTextarea: le
    }), (F, ue) => Oe((T(), B("div", Ct(v(s), {
      class: v(a),
      style: v(R),
      role: F.containerRole,
      onMouseenter: Ft,
      onMouseleave: $t
    }), [
      X(" input "),
      F.type !== "textarea" ? (T(), B(Ue, { key: 0 }, [
        X(" prepend slot "),
        F.$slots.prepend ? (T(), B("div", {
          key: 0,
          class: I(v(g).be("group", "prepend"))
        }, [
          se(F.$slots, "prepend")
        ], 2)) : X("v-if", !0),
        U("div", {
          class: I(v(i))
        }, [
          X(" prefix slot "),
          F.$slots.prefix || F.prefixIcon ? (T(), B("span", {
            key: 0,
            class: I(v(g).e("prefix"))
          }, [
            U("span", {
              class: I(v(g).e("prefix-inner")),
              onClick: tt
            }, [
              se(F.$slots, "prefix"),
              F.prefixIcon ? (T(), Y(v(Ne), {
                key: 0,
                class: I(v(g).e("icon"))
              }, {
                default: ee(() => [
                  (T(), Y(at(F.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : X("v-if", !0)
            ], 2)
          ], 2)) : X("v-if", !0),
          U("input", Ct({
            id: v(p),
            ref_key: "input",
            ref: m,
            class: v(g).e("inner")
          }, v(u), {
            type: F.showPassword ? _.value ? "text" : "password" : F.type,
            disabled: v(c),
            formatter: F.formatter,
            parser: F.parser,
            readonly: F.readonly,
            autocomplete: F.autocomplete,
            tabindex: F.tabindex,
            "aria-label": F.label,
            placeholder: F.placeholder,
            style: F.inputStyle,
            form: o.form,
            onCompositionstart: ke,
            onCompositionupdate: De,
            onCompositionend: dt,
            onInput: Ee,
            onFocus: mt,
            onBlur: nt,
            onChange: ae,
            onKeydown: We
          }), null, 16, Km),
          X(" suffix slot "),
          v(de) ? (T(), B("span", {
            key: 1,
            class: I(v(g).e("suffix"))
          }, [
            U("span", {
              class: I(v(g).e("suffix-inner")),
              onClick: tt
            }, [
              !v(Z) || !v(H) || !v(L) ? (T(), B(Ue, { key: 0 }, [
                se(F.$slots, "suffix"),
                F.suffixIcon ? (T(), Y(v(Ne), {
                  key: 0,
                  class: I(v(g).e("icon"))
                }, {
                  default: ee(() => [
                    (T(), Y(at(F.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : X("v-if", !0)
              ], 64)) : X("v-if", !0),
              v(Z) ? (T(), Y(v(Ne), {
                key: 1,
                class: I([v(g).e("icon"), v(g).e("clear")]),
                onMousedown: Qe(v(lo), ["prevent"]),
                onClick: ot
              }, {
                default: ee(() => [
                  fe(v(fl))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : X("v-if", !0),
              v(H) ? (T(), Y(v(Ne), {
                key: 2,
                class: I([v(g).e("icon"), v(g).e("password")]),
                onClick: Ge
              }, {
                default: ee(() => [
                  (T(), Y(at(v(k))))
                ]),
                _: 1
              }, 8, ["class"])) : X("v-if", !0),
              v(L) ? (T(), B("span", {
                key: 3,
                class: I(v(g).e("count"))
              }, [
                U("span", {
                  class: I(v(g).e("count-inner"))
                }, we(v(q)) + " / " + we(v(u).maxlength), 3)
              ], 2)) : X("v-if", !0),
              v(j) && v(D) && v(z) ? (T(), Y(v(Ne), {
                key: 4,
                class: I([
                  v(g).e("icon"),
                  v(g).e("validateIcon"),
                  v(g).is("loading", v(j) === "validating")
                ])
              }, {
                default: ee(() => [
                  (T(), Y(at(v(D))))
                ]),
                _: 1
              }, 8, ["class"])) : X("v-if", !0)
            ], 2)
          ], 2)) : X("v-if", !0)
        ], 2),
        X(" append slot "),
        F.$slots.append ? (T(), B("div", {
          key: 1,
          class: I(v(g).be("group", "append"))
        }, [
          se(F.$slots, "append")
        ], 2)) : X("v-if", !0)
      ], 64)) : (T(), B(Ue, { key: 1 }, [
        X(" textarea "),
        U("textarea", Ct({
          id: v(p),
          ref_key: "textarea",
          ref: w,
          class: v(y).e("inner")
        }, v(u), {
          tabindex: F.tabindex,
          disabled: v(c),
          readonly: F.readonly,
          autocomplete: F.autocomplete,
          style: v(M),
          "aria-label": F.label,
          placeholder: F.placeholder,
          form: o.form,
          onCompositionstart: ke,
          onCompositionupdate: De,
          onCompositionend: dt,
          onInput: Ee,
          onFocus: mt,
          onBlur: nt,
          onChange: ae,
          onKeydown: We
        }), null, 16, Um),
        v(L) ? (T(), B("span", {
          key: 0,
          style: xe(S.value),
          class: I(v(g).e("count"))
        }, we(v(q)) + " / " + we(v(u).maxlength), 7)) : X("v-if", !0)
      ], 64))
    ], 16, jm)), [
      [jt, F.type !== "hidden"]
    ]);
  }
});
var Ym = /* @__PURE__ */ pe(Gm, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const or = gt(Ym), Tn = 4, Xm = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
}, Qm = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Zm = _e({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Jm = "Thumb", eb = /* @__PURE__ */ K({
  __name: "thumb",
  props: Zm,
  setup(e) {
    const t = e, n = ie(Xs), o = re("scrollbar");
    n || Vs(Jm, "can not inject scrollbar context");
    const r = x(), l = x(), s = x({}), a = x(!1);
    let i = !1, u = !1, d = $e ? document.onselectstart : null;
    const f = $(() => Xm[t.vertical ? "vertical" : "horizontal"]), p = $(() => Qm({
      size: t.size,
      move: t.move,
      bar: f.value
    })), h = $(() => r.value[f.value.offset] ** 2 / n.wrapElement[f.value.scrollSize] / t.ratio / l.value[f.value.offset]), c = (_) => {
      var S;
      if (_.stopPropagation(), _.ctrlKey || [1, 2].includes(_.button))
        return;
      (S = window.getSelection()) == null || S.removeAllRanges(), y(_);
      const P = _.currentTarget;
      P && (s.value[f.value.axis] = P[f.value.offset] - (_[f.value.client] - P.getBoundingClientRect()[f.value.direction]));
    }, g = (_) => {
      if (!l.value || !r.value || !n.wrapElement)
        return;
      const S = Math.abs(_.target.getBoundingClientRect()[f.value.direction] - _[f.value.client]), P = l.value[f.value.offset] / 2, N = (S - P) * 100 * h.value / r.value[f.value.offset];
      n.wrapElement[f.value.scroll] = N * n.wrapElement[f.value.scrollSize] / 100;
    }, y = (_) => {
      _.stopImmediatePropagation(), i = !0, document.addEventListener("mousemove", m), document.addEventListener("mouseup", w), d = document.onselectstart, document.onselectstart = () => !1;
    }, m = (_) => {
      if (!r.value || !l.value || i === !1)
        return;
      const S = s.value[f.value.axis];
      if (!S)
        return;
      const P = (r.value.getBoundingClientRect()[f.value.direction] - _[f.value.client]) * -1, N = l.value[f.value.offset] - S, z = (P - N) * 100 * h.value / r.value[f.value.offset];
      n.wrapElement[f.value.scroll] = z * n.wrapElement[f.value.scrollSize] / 100;
    }, w = () => {
      i = !1, s.value[f.value.axis] = 0, document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", w), O(), u && (a.value = !1);
    }, C = () => {
      u = !1, a.value = !!t.size;
    }, b = () => {
      u = !0, a.value = i;
    };
    St(() => {
      O(), document.removeEventListener("mouseup", w);
    });
    const O = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return en(Ot(n, "scrollbarElement"), "mousemove", C), en(Ot(n, "scrollbarElement"), "mouseleave", b), (_, S) => (T(), Y(co, {
      name: v(o).b("fade"),
      persisted: ""
    }, {
      default: ee(() => [
        Oe(U("div", {
          ref_key: "instance",
          ref: r,
          class: I([v(o).e("bar"), v(o).is(v(f).key)]),
          onMousedown: g
        }, [
          U("div", {
            ref_key: "thumb",
            ref: l,
            class: I(v(o).e("thumb")),
            style: xe(v(p)),
            onMousedown: c
          }, null, 38)
        ], 34), [
          [jt, _.always || a.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Fa = /* @__PURE__ */ pe(eb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const tb = _e({
  always: {
    type: Boolean,
    default: !0
  },
  width: String,
  height: String,
  ratioX: {
    type: Number,
    default: 1
  },
  ratioY: {
    type: Number,
    default: 1
  }
}), nb = /* @__PURE__ */ K({
  __name: "bar",
  props: tb,
  setup(e, { expose: t }) {
    const n = e, o = x(0), r = x(0);
    return t({
      handleScroll: (s) => {
        if (s) {
          const a = s.offsetHeight - Tn, i = s.offsetWidth - Tn;
          r.value = s.scrollTop * 100 / a * n.ratioY, o.value = s.scrollLeft * 100 / i * n.ratioX;
        }
      }
    }), (s, a) => (T(), B(Ue, null, [
      fe(Fa, {
        move: o.value,
        ratio: s.ratioX,
        size: s.width,
        always: s.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      fe(Fa, {
        move: r.value,
        ratio: s.ratioY,
        size: s.height,
        vertical: "",
        always: s.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var ob = /* @__PURE__ */ pe(nb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const rb = _e({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: {
    type: Boolean,
    default: !1
  },
  wrapStyle: {
    type: ve([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array, Object],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: Boolean,
  minSize: {
    type: Number,
    default: 20
  }
}), lb = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(me)
}, kr = "ElScrollbar", ab = K({
  name: kr
}), sb = /* @__PURE__ */ K({
  ...ab,
  props: rb,
  emits: lb,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = re("scrollbar");
    let l, s;
    const a = x(), i = x(), u = x(), d = x("0"), f = x("0"), p = x(), h = x(1), c = x(1), g = $(() => {
      const S = {};
      return o.height && (S.height = Or(o.height)), o.maxHeight && (S.maxHeight = Or(o.maxHeight)), [o.wrapStyle, S];
    }), y = $(() => [
      o.wrapClass,
      r.e("wrap"),
      { [r.em("wrap", "hidden-default")]: !o.native }
    ]), m = $(() => [r.e("view"), o.viewClass]), w = () => {
      var S;
      i.value && ((S = p.value) == null || S.handleScroll(i.value), n("scroll", {
        scrollTop: i.value.scrollTop,
        scrollLeft: i.value.scrollLeft
      }));
    };
    function C(S, P) {
      ct(S) ? i.value.scrollTo(S) : me(S) && me(P) && i.value.scrollTo(S, P);
    }
    const b = (S) => {
      if (!me(S)) {
        Le(kr, "value must be a number");
        return;
      }
      i.value.scrollTop = S;
    }, O = (S) => {
      if (!me(S)) {
        Le(kr, "value must be a number");
        return;
      }
      i.value.scrollLeft = S;
    }, _ = () => {
      if (!i.value)
        return;
      const S = i.value.offsetHeight - Tn, P = i.value.offsetWidth - Tn, N = S ** 2 / i.value.scrollHeight, z = P ** 2 / i.value.scrollWidth, j = Math.max(N, o.minSize), D = Math.max(z, o.minSize);
      h.value = N / (S - N) / (j / (S - j)), c.value = z / (P - z) / (D / (P - D)), f.value = j + Tn < S ? `${j}px` : "", d.value = D + Tn < P ? `${D}px` : "";
    };
    return Q(() => o.noresize, (S) => {
      S ? (l == null || l(), s == null || s()) : ({ stop: l } = Nn(u, _), s = en("resize", _));
    }, { immediate: !0 }), Q(() => [o.maxHeight, o.height], () => {
      o.native || ce(() => {
        var S;
        _(), i.value && ((S = p.value) == null || S.handleScroll(i.value));
      });
    }), st(Xs, kt({
      scrollbarElement: a,
      wrapElement: i
    })), Pe(() => {
      o.native || ce(() => {
        _();
      });
    }), Yr(() => _()), t({
      wrapRef: i,
      update: _,
      scrollTo: C,
      setScrollTop: b,
      setScrollLeft: O,
      handleScroll: w
    }), (S, P) => (T(), B("div", {
      ref_key: "scrollbarRef",
      ref: a,
      class: I(v(r).b())
    }, [
      U("div", {
        ref_key: "wrapRef",
        ref: i,
        class: I(v(y)),
        style: xe(v(g)),
        onScroll: w
      }, [
        (T(), Y(at(S.tag), {
          ref_key: "resizeRef",
          ref: u,
          class: I(v(m)),
          style: xe(S.viewStyle)
        }, {
          default: ee(() => [
            se(S.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      S.native ? X("v-if", !0) : (T(), Y(ob, {
        key: 0,
        ref_key: "barRef",
        ref: p,
        height: f.value,
        width: d.value,
        always: S.always,
        "ratio-x": c.value,
        "ratio-y": h.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var ib = /* @__PURE__ */ pe(sb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const Pl = gt(ib), ub = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], mi = _e({
  role: {
    type: String,
    values: ub,
    default: "tooltip"
  }
}), cb = K({
  name: "ElPopper",
  inheritAttrs: !1
}), db = /* @__PURE__ */ K({
  ...cb,
  props: mi,
  setup(e, { expose: t }) {
    const n = e, o = x(), r = x(), l = x(), s = x(), a = $(() => n.role), i = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: l,
      referenceRef: s,
      role: a
    };
    return t(i), st(gl, i), (u, d) => se(u.$slots, "default");
  }
});
var fb = /* @__PURE__ */ pe(db, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const bi = _e({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), pb = K({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), vb = /* @__PURE__ */ K({
  ...pb,
  props: bi,
  setup(e, { expose: t }) {
    const n = e, o = re("popper"), { arrowOffset: r, arrowRef: l, arrowStyle: s } = ie(Qs, void 0);
    return Q(() => n.arrowOffset, (a) => {
      r.value = a;
    }), St(() => {
      l.value = void 0;
    }), t({
      arrowRef: l
    }), (a, i) => (T(), B("span", {
      ref_key: "arrowRef",
      ref: l,
      class: I(v(o).e("arrow")),
      style: xe(v(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var hb = /* @__PURE__ */ pe(vb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const dr = "ElOnlyChild", gb = K({
  name: dr,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = ie(gi), l = Mm((o = r == null ? void 0 : r.setForwardRef) != null ? o : lo);
    return () => {
      var s;
      const a = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!a)
        return null;
      if (a.length > 1)
        return Le(dr, "requires exact only one valid child."), null;
      const i = yi(a);
      return i ? Oe(lu(i, n), [[l]]) : (Le(dr, "no valid child node found"), null);
    };
  }
});
function yi(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (ct(n))
      switch (n.type) {
        case ps:
          continue;
        case fs:
        case "svg":
          return Ba(n);
        case Ue:
          return yi(n.children);
        default:
          return n;
      }
    return Ba(n);
  }
  return null;
}
function Ba(e) {
  const t = re("only-child");
  return fe("span", {
    class: t.e("content")
  }, [e]);
}
const wi = _e({
  virtualRef: {
    type: ve(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: ve(Function)
  },
  onMouseleave: {
    type: ve(Function)
  },
  onClick: {
    type: ve(Function)
  },
  onKeydown: {
    type: ve(Function)
  },
  onFocus: {
    type: ve(Function)
  },
  onBlur: {
    type: ve(Function)
  },
  onContextmenu: {
    type: ve(Function)
  },
  id: String,
  open: Boolean
}), mb = K({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), bb = /* @__PURE__ */ K({
  ...mb,
  props: wi,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = ie(gl, void 0);
    Lm(r);
    const l = $(() => a.value ? n.id : void 0), s = $(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), a = $(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), i = $(() => a.value ? `${n.open}` : void 0);
    let u;
    return Pe(() => {
      Q(() => n.virtualRef, (d) => {
        d && (r.value = Qt(d));
      }, {
        immediate: !0
      }), Q(r, (d, f) => {
        u == null || u(), u = void 0, ao(d) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((p) => {
          var h;
          const c = n[p];
          c && (d.addEventListener(p.slice(2).toLowerCase(), c), (h = f == null ? void 0 : f.removeEventListener) == null || h.call(f, p.slice(2).toLowerCase(), c));
        }), u = Q([l, s, a, i], (p) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((h, c) => {
            Vt(p[c]) ? d.removeAttribute(h) : d.setAttribute(h, p[c]);
          });
        }, { immediate: !0 })), ao(f) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((p) => f.removeAttribute(p));
      }, {
        immediate: !0
      });
    }), St(() => {
      u == null || u(), u = void 0;
    }), t({
      triggerRef: r
    }), (d, f) => d.virtualTriggering ? X("v-if", !0) : (T(), Y(v(gb), Ct({ key: 0 }, d.$attrs, {
      "aria-controls": v(l),
      "aria-describedby": v(s),
      "aria-expanded": v(i),
      "aria-haspopup": v(a)
    }), {
      default: ee(() => [
        se(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var yb = /* @__PURE__ */ pe(bb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
const fr = "focus-trap.focus-after-trapped", pr = "focus-trap.focus-after-released", wb = "focus-trap.focusout-prevented", za = {
  cancelable: !0,
  bubbles: !1
}, Cb = {
  cancelable: !0,
  bubbles: !1
}, Ha = "focusAfterTrapped", Da = "focusAfterReleased", Sb = Symbol("elFocusTrap"), kl = x(), rr = x(0), Al = x(0);
let wo = 0;
const Ci = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Wa = (e, t) => {
  for (const n of e)
    if (!_b(n, t))
      return n;
}, _b = (e, t) => {
  if (process.env.NODE_ENV === "test")
    return !1;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}, Eb = (e) => {
  const t = Ci(e), n = Wa(t, e), o = Wa(t.reverse(), e);
  return [n, o];
}, $b = (e) => e instanceof HTMLInputElement && "select" in e, Yt = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), Al.value = window.performance.now(), e !== n && $b(e) && t && e.select();
  }
};
function Va(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const xb = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = Va(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, l;
      e = Va(e, o), (l = (r = e[0]) == null ? void 0 : r.resume) == null || l.call(r);
    }
  };
}, Ob = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (Yt(o, t), document.activeElement !== n)
      return;
}, ja = xb(), Tb = () => rr.value > Al.value, Co = () => {
  kl.value = "pointer", rr.value = window.performance.now();
}, Ka = () => {
  kl.value = "keyboard", rr.value = window.performance.now();
}, Pb = () => (Pe(() => {
  wo === 0 && (document.addEventListener("mousedown", Co), document.addEventListener("touchstart", Co), document.addEventListener("keydown", Ka)), wo++;
}), St(() => {
  wo--, wo <= 0 && (document.removeEventListener("mousedown", Co), document.removeEventListener("touchstart", Co), document.removeEventListener("keydown", Ka));
}), {
  focusReason: kl,
  lastUserFocusTimestamp: rr,
  lastAutomatedFocusTimestamp: Al
}), So = (e) => new CustomEvent(wb, {
  ...Cb,
  detail: e
}), kb = K({
  name: "ElFocusTrap",
  inheritAttrs: !1,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    Ha,
    Da,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = x();
    let o, r;
    const { focusReason: l } = Pb();
    Tm((c) => {
      e.trapped && !s.paused && t("release-requested", c);
    });
    const s = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, a = (c) => {
      if (!e.loop && !e.trapped || s.paused)
        return;
      const { key: g, altKey: y, ctrlKey: m, metaKey: w, currentTarget: C, shiftKey: b } = c, { loop: O } = e, _ = g === so.tab && !y && !m && !w, S = document.activeElement;
      if (_ && S) {
        const P = C, [N, z] = Eb(P);
        if (N && z) {
          if (!b && S === z) {
            const D = So({
              focusReason: l.value
            });
            t("focusout-prevented", D), D.defaultPrevented || (c.preventDefault(), O && Yt(N, !0));
          } else if (b && [N, P].includes(S)) {
            const D = So({
              focusReason: l.value
            });
            t("focusout-prevented", D), D.defaultPrevented || (c.preventDefault(), O && Yt(z, !0));
          }
        } else if (S === P) {
          const D = So({
            focusReason: l.value
          });
          t("focusout-prevented", D), D.defaultPrevented || c.preventDefault();
        }
      }
    };
    st(Sb, {
      focusTrapRef: n,
      onKeydown: a
    }), Q(() => e.focusTrapEl, (c) => {
      c && (n.value = c);
    }, { immediate: !0 }), Q([n], ([c], [g]) => {
      c && (c.addEventListener("keydown", a), c.addEventListener("focusin", d), c.addEventListener("focusout", f)), g && (g.removeEventListener("keydown", a), g.removeEventListener("focusin", d), g.removeEventListener("focusout", f));
    });
    const i = (c) => {
      t(Ha, c);
    }, u = (c) => t(Da, c), d = (c) => {
      const g = v(n);
      if (!g)
        return;
      const y = c.target, m = c.relatedTarget, w = y && g.contains(y);
      e.trapped || m && g.contains(m) || (o = m), w && t("focusin", c), !s.paused && e.trapped && (w ? r = y : Yt(r, !0));
    }, f = (c) => {
      const g = v(n);
      if (!(s.paused || !g))
        if (e.trapped) {
          const y = c.relatedTarget;
          !Vt(y) && !g.contains(y) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const m = So({
                focusReason: l.value
              });
              t("focusout-prevented", m), m.defaultPrevented || Yt(r, !0);
            }
          }, 0);
        } else {
          const y = c.target;
          y && g.contains(y) || t("focusout", c);
        }
    };
    async function p() {
      await ce();
      const c = v(n);
      if (c) {
        ja.push(s);
        const g = c.contains(document.activeElement) ? o : document.activeElement;
        if (o = g, !c.contains(g)) {
          const m = new Event(fr, za);
          c.addEventListener(fr, i), c.dispatchEvent(m), m.defaultPrevented || ce(() => {
            let w = e.focusStartEl;
            Ze(w) || (Yt(w), document.activeElement !== w && (w = "first")), w === "first" && Ob(Ci(c), !0), (document.activeElement === g || w === "container") && Yt(c);
          });
        }
      }
    }
    function h() {
      const c = v(n);
      if (c) {
        c.removeEventListener(fr, i);
        const g = new CustomEvent(pr, {
          ...za,
          detail: {
            focusReason: l.value
          }
        });
        c.addEventListener(pr, u), c.dispatchEvent(g), !g.defaultPrevented && (l.value == "keyboard" || !Tb() || c.contains(document.activeElement)) && Yt(o ?? document.body), c.removeEventListener(pr, i), ja.remove(s);
      }
    }
    return Pe(() => {
      e.trapped && p(), Q(() => e.trapped, (c) => {
        c ? p() : h();
      });
    }), St(() => {
      e.trapped && h();
    }), {
      onKeydown: a
    };
  }
});
function Ab(e, t, n, o, r, l) {
  return se(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var Lb = /* @__PURE__ */ pe(kb, [["render", Ab], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const Mb = ["fixed", "absolute"], Ib = _e({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: ve(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: tr,
    default: "bottom"
  },
  popperOptions: {
    type: ve(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Mb,
    default: "absolute"
  }
}), Si = _e({
  ...Ib,
  id: String,
  style: {
    type: ve([String, Array, Object])
  },
  className: {
    type: ve([String, Array, Object])
  },
  effect: {
    type: String,
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: !0
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: !1
  },
  trapping: {
    type: Boolean,
    default: !1
  },
  popperClass: {
    type: ve([String, Array, Object])
  },
  popperStyle: {
    type: ve([String, Array, Object])
  },
  referenceEl: {
    type: ve(Object)
  },
  triggerTargetEl: {
    type: ve(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  ariaLabel: {
    type: String,
    default: void 0
  },
  virtualTriggering: Boolean,
  zIndex: Number
}), Nb = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Rb = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: r } = e, l = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: [...Bb(e), ...t]
  };
  return zb(l, r == null ? void 0 : r.modifiers), l;
}, Fb = (e) => {
  if ($e)
    return Qt(e);
};
function Bb(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: o } = e;
  return [
    {
      name: "offset",
      options: {
        offset: [0, t ?? 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: o
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: n
      }
    }
  ];
}
function zb(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const Hb = 0, Db = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: r } = ie(gl, void 0), l = x(), s = x(), a = $(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), i = $(() => {
    var m;
    const w = v(l), C = (m = v(s)) != null ? m : Hb;
    return {
      name: "arrow",
      enabled: !qp(w),
      options: {
        element: w,
        padding: C
      }
    };
  }), u = $(() => ({
    onFirstUpdate: () => {
      c();
    },
    ...Rb(e, [
      v(i),
      v(a)
    ])
  })), d = $(() => Fb(e.referenceEl) || v(o)), { attributes: f, state: p, styles: h, update: c, forceUpdate: g, instanceRef: y } = $m(d, n, u);
  return Q(y, (m) => t.value = m), Pe(() => {
    Q(() => {
      var m;
      return (m = v(d)) == null ? void 0 : m.getBoundingClientRect();
    }, () => {
      c();
    });
  }), {
    attributes: f,
    arrowRef: l,
    contentRef: n,
    instanceRef: y,
    state: p,
    styles: h,
    role: r,
    forceUpdate: g,
    update: c
  };
}, Wb = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: r } = Tl(), l = re("popper"), s = $(() => v(t).popper), a = x(e.zIndex || r()), i = $(() => [
    l.b(),
    l.is("pure", e.pure),
    l.is(e.effect),
    e.popperClass
  ]), u = $(() => [
    { zIndex: v(a) },
    e.popperStyle || {},
    v(n).popper
  ]), d = $(() => o.value === "dialog" ? "false" : void 0), f = $(() => v(n).arrow || {});
  return {
    ariaModal: d,
    arrowStyle: f,
    contentAttrs: s,
    contentClass: i,
    contentStyle: u,
    contentZIndex: a,
    updateZIndex: () => {
      a.value = e.zIndex || r();
    }
  };
}, Vb = (e, t) => {
  const n = x(!1), o = x();
  return {
    focusStartRef: o,
    trapped: n,
    onFocusAfterReleased: (u) => {
      var d;
      ((d = u.detail) == null ? void 0 : d.focusReason) !== "pointer" && (o.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (u) => {
      e.visible && !n.value && (u.target && (o.value = u.target), n.value = !0);
    },
    onFocusoutPrevented: (u) => {
      e.trapping || (u.detail.focusReason === "pointer" && u.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, jb = K({
  name: "ElPopperContent"
}), Kb = /* @__PURE__ */ K({
  ...jb,
  props: Si,
  emits: Nb,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: r,
      trapped: l,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: a,
      onFocusInTrap: i,
      onFocusoutPrevented: u,
      onReleaseRequested: d
    } = Vb(o, n), { attributes: f, arrowRef: p, contentRef: h, styles: c, instanceRef: g, role: y, update: m } = Db(o), {
      ariaModal: w,
      arrowStyle: C,
      contentAttrs: b,
      contentClass: O,
      contentStyle: _,
      updateZIndex: S
    } = Wb(o, {
      styles: c,
      attributes: f,
      role: y
    }), P = ie(Wo, void 0), N = x();
    st(Qs, {
      arrowStyle: C,
      arrowRef: p,
      arrowOffset: N
    }), P && (P.addInputId || P.removeInputId) && st(Wo, {
      ...P,
      addInputId: lo,
      removeInputId: lo
    });
    let z;
    const j = (k = !0) => {
      m(), k && S();
    }, D = () => {
      j(!1), o.visible && o.focusOnShow ? l.value = !0 : o.visible === !1 && (l.value = !1);
    };
    return Pe(() => {
      Q(() => o.triggerTargetEl, (k, R) => {
        z == null || z(), z = void 0;
        const M = v(k || h.value), V = v(R || h.value);
        ao(M) && (z = Q([y, () => o.ariaLabel, w, () => o.id], (Z) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((H, L) => {
            Vt(Z[L]) ? M.removeAttribute(H) : M.setAttribute(H, Z[L]);
          });
        }, { immediate: !0 })), V !== M && ao(V) && ["role", "aria-label", "aria-modal", "id"].forEach((Z) => {
          V.removeAttribute(Z);
        });
      }, { immediate: !0 }), Q(() => o.visible, D, { immediate: !0 });
    }), St(() => {
      z == null || z(), z = void 0;
    }), t({
      popperContentRef: h,
      popperInstanceRef: g,
      updatePopper: j,
      contentStyle: _
    }), (k, R) => (T(), B("div", Ct({
      ref_key: "contentRef",
      ref: h
    }, v(b), {
      style: v(_),
      class: v(O),
      tabindex: "-1",
      onMouseenter: R[0] || (R[0] = (M) => k.$emit("mouseenter", M)),
      onMouseleave: R[1] || (R[1] = (M) => k.$emit("mouseleave", M))
    }), [
      fe(v(Lb), {
        trapped: v(l),
        "trap-on-focus-in": !0,
        "focus-trap-el": v(h),
        "focus-start-el": v(r),
        onFocusAfterTrapped: v(a),
        onFocusAfterReleased: v(s),
        onFocusin: v(i),
        onFocusoutPrevented: v(u),
        onReleaseRequested: v(d)
      }, {
        default: ee(() => [
          se(k.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var Ub = /* @__PURE__ */ pe(Kb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const qb = gt(fb), Gb = re("tooltip"), Ll = _e({
  ...Am,
  ...Si,
  appendTo: {
    type: ve([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: !1
  },
  persistent: Boolean,
  ariaLabel: String,
  visible: {
    type: ve(Boolean),
    default: null
  },
  transition: {
    type: String,
    default: `${Gb.namespace.value}-fade-in-linear`
  },
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: {
    type: Boolean
  }
}), _i = _e({
  ...wi,
  disabled: Boolean,
  trigger: {
    type: ve([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: ve(Array),
    default: () => [so.enter, so.space]
  }
}), {
  useModelToggleProps: Yb,
  useModelToggleEmits: Xb,
  useModelToggle: Qb
} = _g("visible"), Zb = _e({
  ...mi,
  ...Yb,
  ...Ll,
  ..._i,
  ...bi,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Jb = [
  ...Xb,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], e0 = (e, t) => mn(e) ? e.includes(t) : e === t, $n = (e, t, n) => (o) => {
  e0(v(e), t) && n(o);
}, t0 = K({
  name: "ElTooltipTrigger"
}), n0 = /* @__PURE__ */ K({
  ...t0,
  props: _i,
  setup(e, { expose: t }) {
    const n = e, o = re("tooltip"), { controlled: r, id: l, open: s, onOpen: a, onClose: i, onToggle: u } = ie(ml, void 0), d = x(null), f = () => {
      if (v(r) || n.disabled)
        return !0;
    }, p = Ot(n, "trigger"), h = Wt(f, $n(p, "hover", a)), c = Wt(f, $n(p, "hover", i)), g = Wt(f, $n(p, "click", (b) => {
      b.button === 0 && u(b);
    })), y = Wt(f, $n(p, "focus", a)), m = Wt(f, $n(p, "focus", i)), w = Wt(f, $n(p, "contextmenu", (b) => {
      b.preventDefault(), u(b);
    })), C = Wt(f, (b) => {
      const { code: O } = b;
      n.triggerKeys.includes(O) && (b.preventDefault(), u(b));
    });
    return t({
      triggerRef: d
    }), (b, O) => (T(), Y(v(yb), {
      id: v(l),
      "virtual-ref": b.virtualRef,
      open: v(s),
      "virtual-triggering": b.virtualTriggering,
      class: I(v(o).e("trigger")),
      onBlur: v(m),
      onClick: v(g),
      onContextmenu: v(w),
      onFocus: v(y),
      onMouseenter: v(h),
      onMouseleave: v(c),
      onKeydown: v(C)
    }, {
      default: ee(() => [
        se(b.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var o0 = /* @__PURE__ */ pe(n0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const r0 = K({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), l0 = /* @__PURE__ */ K({
  ...r0,
  props: Ll,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = vi(), r = x(null), l = x(!1), {
      controlled: s,
      id: a,
      open: i,
      trigger: u,
      onClose: d,
      onOpen: f,
      onShow: p,
      onHide: h,
      onBeforeShow: c,
      onBeforeHide: g
    } = ie(ml, void 0), y = $(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    St(() => {
      l.value = !0;
    });
    const m = $(() => v(y) ? !0 : v(i)), w = $(() => n.disabled ? !1 : v(i)), C = $(() => n.appendTo || o.value), b = $(() => {
      var M;
      return (M = n.style) != null ? M : {};
    }), O = $(() => !v(i)), _ = () => {
      h();
    }, S = () => {
      if (v(s))
        return !0;
    }, P = Wt(S, () => {
      n.enterable && v(u) === "hover" && f();
    }), N = Wt(S, () => {
      v(u) === "hover" && d();
    }), z = () => {
      var M, V;
      (V = (M = r.value) == null ? void 0 : M.updatePopper) == null || V.call(M), c == null || c();
    }, j = () => {
      g == null || g();
    }, D = () => {
      p(), R = rv($(() => {
        var M;
        return (M = r.value) == null ? void 0 : M.popperContentRef;
      }), () => {
        if (v(s))
          return;
        v(u) !== "hover" && d();
      });
    }, k = () => {
      n.virtualTriggering || d();
    };
    let R;
    return Q(() => v(i), (M) => {
      M || R == null || R();
    }, {
      flush: "post"
    }), Q(() => n.content, () => {
      var M, V;
      (V = (M = r.value) == null ? void 0 : M.updatePopper) == null || V.call(M);
    }), t({
      contentRef: r
    }), (M, V) => (T(), Y(au, {
      disabled: !M.teleported,
      to: v(C)
    }, [
      fe(co, {
        name: M.transition,
        onAfterLeave: _,
        onBeforeEnter: z,
        onAfterEnter: D,
        onBeforeLeave: j
      }, {
        default: ee(() => [
          v(m) ? Oe((T(), Y(v(Ub), Ct({
            key: 0,
            id: v(a),
            ref_key: "contentRef",
            ref: r
          }, M.$attrs, {
            "aria-label": M.ariaLabel,
            "aria-hidden": v(O),
            "boundaries-padding": M.boundariesPadding,
            "fallback-placements": M.fallbackPlacements,
            "gpu-acceleration": M.gpuAcceleration,
            offset: M.offset,
            placement: M.placement,
            "popper-options": M.popperOptions,
            strategy: M.strategy,
            effect: M.effect,
            enterable: M.enterable,
            pure: M.pure,
            "popper-class": M.popperClass,
            "popper-style": [M.popperStyle, v(b)],
            "reference-el": M.referenceEl,
            "trigger-target-el": M.triggerTargetEl,
            visible: v(w),
            "z-index": M.zIndex,
            onMouseenter: v(P),
            onMouseleave: v(N),
            onBlur: k,
            onClose: v(d)
          }), {
            default: ee(() => [
              l.value ? X("v-if", !0) : se(M.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [jt, v(w)]
          ]) : X("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var a0 = /* @__PURE__ */ pe(l0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const s0 = ["innerHTML"], i0 = { key: 1 }, u0 = K({
  name: "ElTooltip"
}), c0 = /* @__PURE__ */ K({
  ...u0,
  props: Zb,
  emits: Jb,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    km();
    const r = ti(), l = x(), s = x(), a = () => {
      var m;
      const w = v(l);
      w && ((m = w.popperInstanceRef) == null || m.update());
    }, i = x(!1), u = x(), { show: d, hide: f, hasUpdateHandler: p } = Qb({
      indicator: i,
      toggleReason: u
    }), { onOpen: h, onClose: c } = hi({
      showAfter: Ot(o, "showAfter"),
      hideAfter: Ot(o, "hideAfter"),
      open: d,
      close: f
    }), g = $(() => In(o.visible) && !p.value);
    st(ml, {
      controlled: g,
      id: r,
      open: su(i),
      trigger: Ot(o, "trigger"),
      onOpen: (m) => {
        h(m);
      },
      onClose: (m) => {
        c(m);
      },
      onToggle: (m) => {
        v(i) ? c(m) : h(m);
      },
      onShow: () => {
        n("show", u.value);
      },
      onHide: () => {
        n("hide", u.value);
      },
      onBeforeShow: () => {
        n("before-show", u.value);
      },
      onBeforeHide: () => {
        n("before-hide", u.value);
      },
      updatePopper: a
    }), Q(() => o.disabled, (m) => {
      m && i.value && (i.value = !1);
    });
    const y = () => {
      var m, w;
      const C = (w = (m = s.value) == null ? void 0 : m.contentRef) == null ? void 0 : w.popperContentRef;
      return C && C.contains(document.activeElement);
    };
    return iu(() => i.value && f()), t({
      popperRef: l,
      contentRef: s,
      isFocusInsideContent: y,
      updatePopper: a,
      onOpen: h,
      onClose: c,
      hide: f
    }), (m, w) => (T(), Y(v(qb), {
      ref_key: "popperRef",
      ref: l,
      role: m.role
    }, {
      default: ee(() => [
        fe(o0, {
          disabled: m.disabled,
          trigger: m.trigger,
          "trigger-keys": m.triggerKeys,
          "virtual-ref": m.virtualRef,
          "virtual-triggering": m.virtualTriggering
        }, {
          default: ee(() => [
            m.$slots.default ? se(m.$slots, "default", { key: 0 }) : X("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        fe(a0, {
          ref_key: "contentRef",
          ref: s,
          "aria-label": m.ariaLabel,
          "boundaries-padding": m.boundariesPadding,
          content: m.content,
          disabled: m.disabled,
          effect: m.effect,
          enterable: m.enterable,
          "fallback-placements": m.fallbackPlacements,
          "hide-after": m.hideAfter,
          "gpu-acceleration": m.gpuAcceleration,
          offset: m.offset,
          persistent: m.persistent,
          "popper-class": m.popperClass,
          "popper-style": m.popperStyle,
          placement: m.placement,
          "popper-options": m.popperOptions,
          pure: m.pure,
          "raw-content": m.rawContent,
          "reference-el": m.referenceEl,
          "trigger-target-el": m.triggerTargetEl,
          "show-after": m.showAfter,
          strategy: m.strategy,
          teleported: m.teleported,
          transition: m.transition,
          "virtual-triggering": m.virtualTriggering,
          "z-index": m.zIndex,
          "append-to": m.appendTo
        }, {
          default: ee(() => [
            se(m.$slots, "content", {}, () => [
              m.rawContent ? (T(), B("span", {
                key: 0,
                innerHTML: m.content
              }, null, 8, s0)) : (T(), B("span", i0, we(m.content), 1))
            ]),
            m.showArrow ? (T(), Y(v(hb), {
              key: 0,
              "arrow-offset": m.arrowOffset
            }, null, 8, ["arrow-offset"])) : X("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var d0 = /* @__PURE__ */ pe(c0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const Ei = gt(d0), f0 = (e, t) => {
  Js({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, $(() => e.type === "text"));
  const n = ie(Gs, void 0), o = Sn("button"), { form: r } = _n(), l = nn($(() => n == null ? void 0 : n.size)), s = ho(), a = x(), i = Ko(), u = $(() => e.type || (n == null ? void 0 : n.type) || ""), d = $(() => {
    var h, c, g;
    return (g = (c = e.autoInsertSpace) != null ? c : (h = o.value) == null ? void 0 : h.autoInsertSpace) != null ? g : !1;
  }), f = $(() => {
    var h;
    const c = (h = i.default) == null ? void 0 : h.call(i);
    if (d.value && (c == null ? void 0 : c.length) === 1) {
      const g = c[0];
      if ((g == null ? void 0 : g.type) === fs) {
        const y = g.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(y.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: s,
    _size: l,
    _type: u,
    _ref: a,
    shouldAddSpace: f,
    handleClick: (h) => {
      e.nativeType === "reset" && (r == null || r.resetFields()), t("click", h);
    }
  };
}, p0 = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], v0 = ["button", "submit", "reset"], Ar = _e({
  size: qn,
  disabled: Boolean,
  type: {
    type: String,
    values: p0,
    default: ""
  },
  icon: {
    type: Lt
  },
  nativeType: {
    type: String,
    values: v0,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: Lt,
    default: () => pl
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
}), h0 = {
  click: (e) => e instanceof MouseEvent
};
function Fe(e, t) {
  g0(e) && (e = "100%");
  var n = m0(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function _o(e) {
  return Math.min(1, Math.max(0, e));
}
function g0(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function m0(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function $i(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Eo(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function dn(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function b0(e, t, n) {
  return {
    r: Fe(e, 255) * 255,
    g: Fe(t, 255) * 255,
    b: Fe(n, 255) * 255
  };
}
function Ua(e, t, n) {
  e = Fe(e, 255), t = Fe(t, 255), n = Fe(n, 255);
  var o = Math.max(e, t, n), r = Math.min(e, t, n), l = 0, s = 0, a = (o + r) / 2;
  if (o === r)
    s = 0, l = 0;
  else {
    var i = o - r;
    switch (s = a > 0.5 ? i / (2 - o - r) : i / (o + r), o) {
      case e:
        l = (t - n) / i + (t < n ? 6 : 0);
        break;
      case t:
        l = (n - e) / i + 2;
        break;
      case n:
        l = (e - t) / i + 4;
        break;
    }
    l /= 6;
  }
  return { h: l, s, l: a };
}
function vr(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function y0(e, t, n) {
  var o, r, l;
  if (e = Fe(e, 360), t = Fe(t, 100), n = Fe(n, 100), t === 0)
    r = n, l = n, o = n;
  else {
    var s = n < 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;
    o = vr(a, s, e + 1 / 3), r = vr(a, s, e), l = vr(a, s, e - 1 / 3);
  }
  return { r: o * 255, g: r * 255, b: l * 255 };
}
function qa(e, t, n) {
  e = Fe(e, 255), t = Fe(t, 255), n = Fe(n, 255);
  var o = Math.max(e, t, n), r = Math.min(e, t, n), l = 0, s = o, a = o - r, i = o === 0 ? 0 : a / o;
  if (o === r)
    l = 0;
  else {
    switch (o) {
      case e:
        l = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        l = (n - e) / a + 2;
        break;
      case n:
        l = (e - t) / a + 4;
        break;
    }
    l /= 6;
  }
  return { h: l, s: i, v: s };
}
function w0(e, t, n) {
  e = Fe(e, 360) * 6, t = Fe(t, 100), n = Fe(n, 100);
  var o = Math.floor(e), r = e - o, l = n * (1 - t), s = n * (1 - r * t), a = n * (1 - (1 - r) * t), i = o % 6, u = [n, s, l, l, a, n][i], d = [a, n, n, s, l, l][i], f = [l, l, a, n, n, s][i];
  return { r: u * 255, g: d * 255, b: f * 255 };
}
function Ga(e, t, n, o) {
  var r = [
    dn(Math.round(e).toString(16)),
    dn(Math.round(t).toString(16)),
    dn(Math.round(n).toString(16))
  ];
  return o && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function C0(e, t, n, o, r) {
  var l = [
    dn(Math.round(e).toString(16)),
    dn(Math.round(t).toString(16)),
    dn(Math.round(n).toString(16)),
    dn(S0(o))
  ];
  return r && l[0].startsWith(l[0].charAt(1)) && l[1].startsWith(l[1].charAt(1)) && l[2].startsWith(l[2].charAt(1)) && l[3].startsWith(l[3].charAt(1)) ? l[0].charAt(0) + l[1].charAt(0) + l[2].charAt(0) + l[3].charAt(0) : l.join("");
}
function S0(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Ya(e) {
  return lt(e) / 255;
}
function lt(e) {
  return parseInt(e, 16);
}
function _0(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Lr = {
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
function E0(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, o = null, r = null, l = null, s = !1, a = !1;
  return typeof e == "string" && (e = O0(e)), typeof e == "object" && (Ht(e.r) && Ht(e.g) && Ht(e.b) ? (t = b0(e.r, e.g, e.b), s = !0, a = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Ht(e.h) && Ht(e.s) && Ht(e.v) ? (o = Eo(e.s), r = Eo(e.v), t = w0(e.h, o, r), s = !0, a = "hsv") : Ht(e.h) && Ht(e.s) && Ht(e.l) && (o = Eo(e.s), l = Eo(e.l), t = y0(e.h, o, l), s = !0, a = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = $i(n), {
    ok: s,
    format: e.format || a,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var $0 = "[-\\+]?\\d+%?", x0 = "[-\\+]?\\d*\\.\\d+%?", Jt = "(?:".concat(x0, ")|(?:").concat($0, ")"), hr = "[\\s|\\(]+(".concat(Jt, ")[,|\\s]+(").concat(Jt, ")[,|\\s]+(").concat(Jt, ")\\s*\\)?"), gr = "[\\s|\\(]+(".concat(Jt, ")[,|\\s]+(").concat(Jt, ")[,|\\s]+(").concat(Jt, ")[,|\\s]+(").concat(Jt, ")\\s*\\)?"), wt = {
  CSS_UNIT: new RegExp(Jt),
  rgb: new RegExp("rgb" + hr),
  rgba: new RegExp("rgba" + gr),
  hsl: new RegExp("hsl" + hr),
  hsla: new RegExp("hsla" + gr),
  hsv: new RegExp("hsv" + hr),
  hsva: new RegExp("hsva" + gr),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function O0(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Lr[e])
    e = Lr[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = wt.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = wt.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = wt.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = wt.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = wt.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = wt.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = wt.hex8.exec(e), n ? {
    r: lt(n[1]),
    g: lt(n[2]),
    b: lt(n[3]),
    a: Ya(n[4]),
    format: t ? "name" : "hex8"
  } : (n = wt.hex6.exec(e), n ? {
    r: lt(n[1]),
    g: lt(n[2]),
    b: lt(n[3]),
    format: t ? "name" : "hex"
  } : (n = wt.hex4.exec(e), n ? {
    r: lt(n[1] + n[1]),
    g: lt(n[2] + n[2]),
    b: lt(n[3] + n[3]),
    a: Ya(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = wt.hex3.exec(e), n ? {
    r: lt(n[1] + n[1]),
    g: lt(n[2] + n[2]),
    b: lt(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Ht(e) {
  return Boolean(wt.CSS_UNIT.exec(String(e)));
}
var T0 = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var o;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = _0(t)), this.originalInput = t;
      var r = E0(t);
      this.originalInput = t, this.r = r.r, this.g = r.g, this.b = r.b, this.a = r.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (o = n.format) !== null && o !== void 0 ? o : r.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = r.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, o, r, l = t.r / 255, s = t.g / 255, a = t.b / 255;
      return l <= 0.03928 ? n = l / 12.92 : n = Math.pow((l + 0.055) / 1.055, 2.4), s <= 0.03928 ? o = s / 12.92 : o = Math.pow((s + 0.055) / 1.055, 2.4), a <= 0.03928 ? r = a / 12.92 : r = Math.pow((a + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * o + 0.0722 * r;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = $i(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = qa(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = qa(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsva(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Ua(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Ua(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsla(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), Ga(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), C0(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), n = Math.round(this.g), o = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(o, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(o, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(Fe(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(Fe(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + Ga(this.r, this.g, this.b, !1), n = 0, o = Object.entries(Lr); n < o.length; n++) {
        var r = o[n], l = r[0], s = r[1];
        if (t === s)
          return l;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = Boolean(t);
      t = t ?? this.format;
      var o = !1, r = this.a < 1 && this.a >= 0, l = !n && r && (t.startsWith("hex") || t === "name");
      return l ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (o = this.toRgbString()), t === "prgb" && (o = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (o = this.toHexString()), t === "hex3" && (o = this.toHexString(!0)), t === "hex4" && (o = this.toHex8String(!0)), t === "hex8" && (o = this.toHex8String()), t === "name" && (o = this.toName()), t === "hsl" && (o = this.toHslString()), t === "hsv" && (o = this.toHsvString()), o || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = _o(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = _o(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = _o(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = _o(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), o = (n.h + t) % 360;
      return n.h = o < 0 ? 360 + o : o, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var o = this.toRgb(), r = new e(t).toRgb(), l = n / 100, s = {
        r: (r.r - o.r) * l + o.r,
        g: (r.g - o.g) * l + o.g,
        b: (r.b - o.b) * l + o.b,
        a: (r.a - o.a) * l + o.a
      };
      return new e(s);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var o = this.toHsl(), r = 360 / n, l = [this];
      for (o.h = (o.h - (r * t >> 1) + 720) % 360; --t; )
        o.h = (o.h + r) % 360, l.push(new e(o));
      return l;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), o = n.h, r = n.s, l = n.v, s = [], a = 1 / t; t--; )
        s.push(new e({ h: o, s: r, v: l })), l = (l + a) % 1;
      return s;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), o = new e(t).toRgb(), r = n.a + o.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + o.r * o.a * (1 - n.a)) / r,
        g: (n.g * n.a + o.g * o.a * (1 - n.a)) / r,
        b: (n.b * n.a + o.b * o.a * (1 - n.a)) / r,
        a: r
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), o = n.h, r = [this], l = 360 / t, s = 1; s < t; s++)
        r.push(new e({ h: (o + s * l) % 360, s: n.s, l: n.l }));
      return r;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
);
function Gt(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function P0(e) {
  const t = ho(), n = re("button");
  return $(() => {
    let o = {};
    const r = e.color;
    if (r) {
      const l = new T0(r), s = e.dark ? l.tint(20).toString() : Gt(l, 20);
      if (e.plain)
        o = n.cssVarBlock({
          "bg-color": e.dark ? Gt(l, 90) : l.tint(90).toString(),
          "text-color": r,
          "border-color": e.dark ? Gt(l, 50) : l.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": r,
          "hover-border-color": r,
          "active-bg-color": s,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": s
        }), t.value && (o[n.cssVarBlockName("disabled-bg-color")] = e.dark ? Gt(l, 90) : l.tint(90).toString(), o[n.cssVarBlockName("disabled-text-color")] = e.dark ? Gt(l, 50) : l.tint(50).toString(), o[n.cssVarBlockName("disabled-border-color")] = e.dark ? Gt(l, 80) : l.tint(80).toString());
      else {
        const a = e.dark ? Gt(l, 30) : l.tint(30).toString(), i = l.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (o = n.cssVarBlock({
          "bg-color": r,
          "text-color": i,
          "border-color": r,
          "hover-bg-color": a,
          "hover-text-color": i,
          "hover-border-color": a,
          "active-bg-color": s,
          "active-border-color": s
        }), t.value) {
          const u = e.dark ? Gt(l, 50) : l.tint(50).toString();
          o[n.cssVarBlockName("disabled-bg-color")] = u, o[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, o[n.cssVarBlockName("disabled-border-color")] = u;
        }
      }
    }
    return o;
  });
}
const k0 = ["aria-disabled", "disabled", "autofocus", "type"], A0 = K({
  name: "ElButton"
}), L0 = /* @__PURE__ */ K({
  ...A0,
  props: Ar,
  emits: h0,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = P0(o), l = re("button"), { _ref: s, _size: a, _type: i, _disabled: u, shouldAddSpace: d, handleClick: f } = f0(o, n);
    return t({
      ref: s,
      size: a,
      type: i,
      disabled: u,
      shouldAddSpace: d
    }), (p, h) => (T(), B("button", {
      ref_key: "_ref",
      ref: s,
      class: I([
        v(l).b(),
        v(l).m(v(i)),
        v(l).m(v(a)),
        v(l).is("disabled", v(u)),
        v(l).is("loading", p.loading),
        v(l).is("plain", p.plain),
        v(l).is("round", p.round),
        v(l).is("circle", p.circle),
        v(l).is("text", p.text),
        v(l).is("link", p.link),
        v(l).is("has-bg", p.bg)
      ]),
      "aria-disabled": v(u) || p.loading,
      disabled: v(u) || p.loading,
      autofocus: p.autofocus,
      type: p.nativeType,
      style: xe(v(r)),
      onClick: h[0] || (h[0] = (...c) => v(f) && v(f)(...c))
    }, [
      p.loading ? (T(), B(Ue, { key: 0 }, [
        p.$slots.loading ? se(p.$slots, "loading", { key: 0 }) : (T(), Y(v(Ne), {
          key: 1,
          class: I(v(l).is("loading"))
        }, {
          default: ee(() => [
            (T(), Y(at(p.loadingIcon)))
          ]),
          _: 1
        }, 8, ["class"]))
      ], 64)) : p.icon || p.$slots.icon ? (T(), Y(v(Ne), { key: 1 }, {
        default: ee(() => [
          p.icon ? (T(), Y(at(p.icon), { key: 0 })) : se(p.$slots, "icon", { key: 1 })
        ]),
        _: 3
      })) : X("v-if", !0),
      p.$slots.default ? (T(), B("span", {
        key: 2,
        class: I({ [v(l).em("text", "expand")]: v(d) })
      }, [
        se(p.$slots, "default")
      ], 2)) : X("v-if", !0)
    ], 14, k0));
  }
});
var M0 = /* @__PURE__ */ pe(L0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const I0 = {
  size: Ar.size,
  type: Ar.type
}, N0 = K({
  name: "ElButtonGroup"
}), R0 = /* @__PURE__ */ K({
  ...N0,
  props: I0,
  setup(e) {
    const t = e;
    st(Gs, kt({
      size: Ot(t, "size"),
      type: Ot(t, "type")
    }));
    const n = re("button");
    return (o, r) => (T(), B("div", {
      class: I(`${v(n).b("group")}`)
    }, [
      se(o.$slots, "default")
    ], 2));
  }
});
var xi = /* @__PURE__ */ pe(R0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const F0 = gt(M0, {
  ButtonGroup: xi
});
Kn(xi);
const Xt = /* @__PURE__ */ new Map();
let Xa;
$e && (document.addEventListener("mousedown", (e) => Xa = e), document.addEventListener("mouseup", (e) => {
  for (const t of Xt.values())
    for (const { documentHandler: n } of t)
      n(e, Xa);
}));
function Qa(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : ao(t.arg) && n.push(t.arg), function(o, r) {
    const l = t.instance.popperRef, s = o.target, a = r == null ? void 0 : r.target, i = !t || !t.instance, u = !s || !a, d = e.contains(s) || e.contains(a), f = e === s, p = n.length && n.some((c) => c == null ? void 0 : c.contains(s)) || n.length && n.includes(a), h = l && (l.contains(s) || l.contains(a));
    i || u || d || f || p || h || t.value(o, r);
  };
}
const Oi = {
  beforeMount(e, t) {
    Xt.has(e) || Xt.set(e, []), Xt.get(e).push({
      documentHandler: Qa(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    Xt.has(e) || Xt.set(e, []);
    const n = Xt.get(e), o = n.findIndex((l) => l.bindingFn === t.oldValue), r = {
      documentHandler: Qa(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, r) : n.push(r);
  },
  unmounted(e) {
    Xt.delete(e);
  }
}, B0 = 100, z0 = 600, Za = {
  beforeMount(e, t) {
    const n = t.value, { interval: o = B0, delay: r = z0 } = ft(n) ? {} : n;
    let l, s;
    const a = () => ft(n) ? n() : n.handler(), i = () => {
      s && (clearTimeout(s), s = void 0), l && (clearInterval(l), l = void 0);
    };
    e.addEventListener("mousedown", (u) => {
      u.button === 0 && (i(), a(), document.addEventListener("mouseup", () => i(), {
        once: !0
      }), s = setTimeout(() => {
        l = setInterval(() => {
          a();
        }, o);
      }, r));
    });
  }
};
var Ja = !1, cn, Mr, Ir, ko, Ao, Ti, Lo, Nr, Rr, Fr, Pi, Br, zr, ki, Ai;
function Xe() {
  if (!Ja) {
    Ja = !0;
    var e = navigator.userAgent, t = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e), n = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
    if (Br = /\b(iPhone|iP[ao]d)/.exec(e), zr = /\b(iP[ao]d)/.exec(e), Fr = /Android/i.exec(e), ki = /FBAN\/\w+;/i.exec(e), Ai = /Mobile/i.exec(e), Pi = !!/Win64/.exec(e), t) {
      cn = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN, cn && document && document.documentMode && (cn = document.documentMode);
      var o = /(?:Trident\/(\d+.\d+))/.exec(e);
      Ti = o ? parseFloat(o[1]) + 4 : cn, Mr = t[2] ? parseFloat(t[2]) : NaN, Ir = t[3] ? parseFloat(t[3]) : NaN, ko = t[4] ? parseFloat(t[4]) : NaN, ko ? (t = /(?:Chrome\/(\d+\.\d+))/.exec(e), Ao = t && t[1] ? parseFloat(t[1]) : NaN) : Ao = NaN;
    } else
      cn = Mr = Ir = Ao = ko = NaN;
    if (n) {
      if (n[1]) {
        var r = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
        Lo = r ? parseFloat(r[1].replace("_", ".")) : !0;
      } else
        Lo = !1;
      Nr = !!n[2], Rr = !!n[3];
    } else
      Lo = Nr = Rr = !1;
  }
}
var Hr = { ie: function() {
  return Xe() || cn;
}, ieCompatibilityMode: function() {
  return Xe() || Ti > cn;
}, ie64: function() {
  return Hr.ie() && Pi;
}, firefox: function() {
  return Xe() || Mr;
}, opera: function() {
  return Xe() || Ir;
}, webkit: function() {
  return Xe() || ko;
}, safari: function() {
  return Hr.webkit();
}, chrome: function() {
  return Xe() || Ao;
}, windows: function() {
  return Xe() || Nr;
}, osx: function() {
  return Xe() || Lo;
}, linux: function() {
  return Xe() || Rr;
}, iphone: function() {
  return Xe() || Br;
}, mobile: function() {
  return Xe() || Br || zr || Fr || Ai;
}, nativeApp: function() {
  return Xe() || ki;
}, android: function() {
  return Xe() || Fr;
}, ipad: function() {
  return Xe() || zr;
} }, H0 = Hr, $o = !!(typeof window < "u" && window.document && window.document.createElement), D0 = { canUseDOM: $o, canUseWorkers: typeof Worker < "u", canUseEventListeners: $o && !!(window.addEventListener || window.attachEvent), canUseViewport: $o && !!window.screen, isInWorker: !$o }, Li = D0, Mi;
Li.canUseDOM && (Mi = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0);
function W0(e, t) {
  if (!Li.canUseDOM || t && !("addEventListener" in document))
    return !1;
  var n = "on" + e, o = n in document;
  if (!o) {
    var r = document.createElement("div");
    r.setAttribute(n, "return;"), o = typeof r[n] == "function";
  }
  return !o && Mi && e === "wheel" && (o = document.implementation.hasFeature("Events.wheel", "3.0")), o;
}
var V0 = W0, es = 10, ts = 40, ns = 800;
function Ii(e) {
  var t = 0, n = 0, o = 0, r = 0;
  return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), o = t * es, r = n * es, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (o = e.deltaX), (o || r) && e.deltaMode && (e.deltaMode == 1 ? (o *= ts, r *= ts) : (o *= ns, r *= ns)), o && !t && (t = o < 1 ? -1 : 1), r && !n && (n = r < 1 ? -1 : 1), { spinX: t, spinY: n, pixelX: o, pixelY: r };
}
Ii.getEventType = function() {
  return H0.firefox() ? "DOMMouseScroll" : V0("wheel") ? "wheel" : "mousewheel";
};
var j0 = Ii;
/**
* Checks if an event is supported in the current execution environment.
*
* NOTE: This will not work correctly for non-generic events such as `change`,
* `reset`, `load`, `error`, and `select`.
*
* Borrows from Modernizr.
*
* @param {string} eventNameSuffix Event name, e.g. "click".
* @param {?boolean} capture Check if the capture phase is supported.
* @return {boolean} True if the event is supported.
* @internal
* @license Modernizr 3.0.0pre (Custom Build) | MIT
*/
const K0 = function(e, t) {
  if (e && e.addEventListener) {
    const n = function(o) {
      const r = j0(o);
      t && Reflect.apply(t, this, [o, r]);
    };
    e.addEventListener("wheel", n, { passive: !0 });
  }
}, U0 = {
  beforeMount(e, t) {
    K0(e, t.value);
  }
}, Ni = {
  modelValue: {
    type: [Number, String, Boolean],
    default: void 0
  },
  label: {
    type: [String, Boolean, Number, Object]
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: void 0
  },
  trueLabel: {
    type: [String, Number],
    default: void 0
  },
  falseLabel: {
    type: [String, Number],
    default: void 0
  },
  id: {
    type: String,
    default: void 0
  },
  controls: {
    type: String,
    default: void 0
  },
  border: Boolean,
  size: qn,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: !0
  }
}, Ri = {
  [Te]: (e) => Ze(e) || me(e) || In(e),
  change: (e) => Ze(e) || me(e) || In(e)
}, q0 = ({
  model: e,
  isChecked: t
}) => {
  const n = ie(Un, void 0), o = $(() => {
    var l, s;
    const a = (l = n == null ? void 0 : n.max) == null ? void 0 : l.value, i = (s = n == null ? void 0 : n.min) == null ? void 0 : s.value;
    return !Zt(a) && e.value.length >= a && !t.value || !Zt(i) && e.value.length <= i && t.value;
  });
  return {
    isDisabled: ho($(() => (n == null ? void 0 : n.disabled.value) || o.value)),
    isLimitDisabled: o
  };
}, G0 = (e, {
  model: t,
  isLimitExceeded: n,
  hasOwnLabel: o,
  isDisabled: r,
  isLabeledByFormItem: l
}) => {
  const s = ie(Un, void 0), { formItem: a } = _n(), { emit: i } = Ce();
  function u(c) {
    var g, y;
    return c === e.trueLabel || c === !0 ? (g = e.trueLabel) != null ? g : !0 : (y = e.falseLabel) != null ? y : !1;
  }
  function d(c, g) {
    i("change", u(c), g);
  }
  function f(c) {
    if (n.value)
      return;
    const g = c.target;
    i("change", u(g.checked), c);
  }
  async function p(c) {
    n.value || !o.value && !r.value && l.value && (c.composedPath().some((m) => m.tagName === "LABEL") || (t.value = u([!1, e.falseLabel].includes(t.value)), await ce(), d(t.value, c)));
  }
  const h = $(() => (s == null ? void 0 : s.validateEvent) || e.validateEvent);
  return Q(() => e.modelValue, () => {
    h.value && (a == null || a.validate("change").catch((c) => Le(c)));
  }), {
    handleChange: f,
    onClickRoot: p
  };
}, Y0 = (e) => {
  const t = x(!1), { emit: n } = Ce(), o = ie(Un, void 0), r = $(() => Zt(o) === !1), l = x(!1);
  return {
    model: $({
      get() {
        var a, i;
        return r.value ? (a = o == null ? void 0 : o.modelValue) == null ? void 0 : a.value : (i = e.modelValue) != null ? i : t.value;
      },
      set(a) {
        var i, u;
        r.value && mn(a) ? (l.value = ((i = o == null ? void 0 : o.max) == null ? void 0 : i.value) !== void 0 && a.length > (o == null ? void 0 : o.max.value), l.value === !1 && ((u = o == null ? void 0 : o.changeEvent) == null || u.call(o, a))) : (n(Te, a), t.value = a);
      }
    }),
    isGroup: r,
    isLimitExceeded: l
  };
}, X0 = (e, t, { model: n }) => {
  const o = ie(Un, void 0), r = x(!1), l = $(() => {
    const u = n.value;
    return In(u) ? u : mn(u) ? ct(e.label) ? u.map(An).some((d) => Ho(d, e.label)) : u.map(An).includes(e.label) : u != null ? u === e.trueLabel : !!u;
  }), s = nn($(() => {
    var u;
    return (u = o == null ? void 0 : o.size) == null ? void 0 : u.value;
  }), {
    prop: !0
  }), a = nn($(() => {
    var u;
    return (u = o == null ? void 0 : o.size) == null ? void 0 : u.value;
  })), i = $(() => !!(t.default || e.label));
  return {
    checkboxButtonSize: s,
    isChecked: l,
    isFocused: r,
    checkboxSize: a,
    hasOwnLabel: i
  };
}, Q0 = (e, { model: t }) => {
  function n() {
    mn(t.value) && !t.value.includes(e.label) ? t.value.push(e.label) : t.value = e.trueLabel || !0;
  }
  e.checked && n();
}, Fi = (e, t) => {
  const { formItem: n } = _n(), { model: o, isGroup: r, isLimitExceeded: l } = Y0(e), {
    isFocused: s,
    isChecked: a,
    checkboxButtonSize: i,
    checkboxSize: u,
    hasOwnLabel: d
  } = X0(e, t, { model: o }), { isDisabled: f } = q0({ model: o, isChecked: a }), { inputId: p, isLabeledByFormItem: h } = yl(e, {
    formItemContext: n,
    disableIdGeneration: d,
    disableIdManagement: r
  }), { handleChange: c, onClickRoot: g } = G0(e, {
    model: o,
    isLimitExceeded: l,
    hasOwnLabel: d,
    isDisabled: f,
    isLabeledByFormItem: h
  });
  return Q0(e, { model: o }), {
    inputId: p,
    isLabeledByFormItem: h,
    isChecked: a,
    isDisabled: f,
    isFocused: s,
    checkboxButtonSize: i,
    checkboxSize: u,
    hasOwnLabel: d,
    model: o,
    handleChange: c,
    onClickRoot: g
  };
}, Z0 = ["tabindex", "role", "aria-checked"], J0 = ["id", "aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"], ey = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"], ty = K({
  name: "ElCheckbox"
}), ny = /* @__PURE__ */ K({
  ...ty,
  props: Ni,
  emits: Ri,
  setup(e) {
    const t = e, n = Ko(), {
      inputId: o,
      isLabeledByFormItem: r,
      isChecked: l,
      isDisabled: s,
      isFocused: a,
      checkboxSize: i,
      hasOwnLabel: u,
      model: d,
      handleChange: f,
      onClickRoot: p
    } = Fi(t, n), h = re("checkbox"), c = $(() => [
      h.b(),
      h.m(i.value),
      h.is("disabled", s.value),
      h.is("bordered", t.border),
      h.is("checked", l.value)
    ]), g = $(() => [
      h.e("input"),
      h.is("disabled", s.value),
      h.is("checked", l.value),
      h.is("indeterminate", t.indeterminate),
      h.is("focus", a.value)
    ]);
    return (y, m) => (T(), Y(at(!v(u) && v(r) ? "span" : "label"), {
      class: I(v(c)),
      "aria-controls": y.indeterminate ? y.controls : null,
      onClick: v(p)
    }, {
      default: ee(() => [
        U("span", {
          class: I(v(g)),
          tabindex: y.indeterminate ? 0 : void 0,
          role: y.indeterminate ? "checkbox" : void 0,
          "aria-checked": y.indeterminate ? "mixed" : void 0
        }, [
          y.trueLabel || y.falseLabel ? Oe((T(), B("input", {
            key: 0,
            id: v(o),
            "onUpdate:modelValue": m[0] || (m[0] = (w) => vn(d) ? d.value = w : null),
            class: I(v(h).e("original")),
            type: "checkbox",
            "aria-hidden": y.indeterminate ? "true" : "false",
            name: y.name,
            tabindex: y.tabindex,
            disabled: v(s),
            "true-value": y.trueLabel,
            "false-value": y.falseLabel,
            onChange: m[1] || (m[1] = (...w) => v(f) && v(f)(...w)),
            onFocus: m[2] || (m[2] = (w) => a.value = !0),
            onBlur: m[3] || (m[3] = (w) => a.value = !1)
          }, null, 42, J0)), [
            [Io, v(d)]
          ]) : Oe((T(), B("input", {
            key: 1,
            id: v(o),
            "onUpdate:modelValue": m[4] || (m[4] = (w) => vn(d) ? d.value = w : null),
            class: I(v(h).e("original")),
            type: "checkbox",
            "aria-hidden": y.indeterminate ? "true" : "false",
            disabled: v(s),
            value: y.label,
            name: y.name,
            tabindex: y.tabindex,
            onChange: m[5] || (m[5] = (...w) => v(f) && v(f)(...w)),
            onFocus: m[6] || (m[6] = (w) => a.value = !0),
            onBlur: m[7] || (m[7] = (w) => a.value = !1)
          }, null, 42, ey)), [
            [Io, v(d)]
          ]),
          U("span", {
            class: I(v(h).e("inner"))
          }, null, 2)
        ], 10, Z0),
        v(u) ? (T(), B("span", {
          key: 0,
          class: I(v(h).e("label"))
        }, [
          se(y.$slots, "default"),
          y.$slots.default ? X("v-if", !0) : (T(), B(Ue, { key: 0 }, [
            Uo(we(y.label), 1)
          ], 64))
        ], 2)) : X("v-if", !0)
      ]),
      _: 3
    }, 8, ["class", "aria-controls", "onClick"]));
  }
});
var oy = /* @__PURE__ */ pe(ny, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
const ry = ["name", "tabindex", "disabled", "true-value", "false-value"], ly = ["name", "tabindex", "disabled", "value"], ay = K({
  name: "ElCheckboxButton"
}), sy = /* @__PURE__ */ K({
  ...ay,
  props: Ni,
  emits: Ri,
  setup(e) {
    const t = e, n = Ko(), {
      isFocused: o,
      isChecked: r,
      isDisabled: l,
      checkboxButtonSize: s,
      model: a,
      handleChange: i
    } = Fi(t, n), u = ie(Un, void 0), d = re("checkbox"), f = $(() => {
      var h, c, g, y;
      const m = (c = (h = u == null ? void 0 : u.fill) == null ? void 0 : h.value) != null ? c : "";
      return {
        backgroundColor: m,
        borderColor: m,
        color: (y = (g = u == null ? void 0 : u.textColor) == null ? void 0 : g.value) != null ? y : "",
        boxShadow: m ? `-1px 0 0 0 ${m}` : void 0
      };
    }), p = $(() => [
      d.b("button"),
      d.bm("button", s.value),
      d.is("disabled", l.value),
      d.is("checked", r.value),
      d.is("focus", o.value)
    ]);
    return (h, c) => (T(), B("label", {
      class: I(v(p))
    }, [
      h.trueLabel || h.falseLabel ? Oe((T(), B("input", {
        key: 0,
        "onUpdate:modelValue": c[0] || (c[0] = (g) => vn(a) ? a.value = g : null),
        class: I(v(d).be("button", "original")),
        type: "checkbox",
        name: h.name,
        tabindex: h.tabindex,
        disabled: v(l),
        "true-value": h.trueLabel,
        "false-value": h.falseLabel,
        onChange: c[1] || (c[1] = (...g) => v(i) && v(i)(...g)),
        onFocus: c[2] || (c[2] = (g) => o.value = !0),
        onBlur: c[3] || (c[3] = (g) => o.value = !1)
      }, null, 42, ry)), [
        [Io, v(a)]
      ]) : Oe((T(), B("input", {
        key: 1,
        "onUpdate:modelValue": c[4] || (c[4] = (g) => vn(a) ? a.value = g : null),
        class: I(v(d).be("button", "original")),
        type: "checkbox",
        name: h.name,
        tabindex: h.tabindex,
        disabled: v(l),
        value: h.label,
        onChange: c[5] || (c[5] = (...g) => v(i) && v(i)(...g)),
        onFocus: c[6] || (c[6] = (g) => o.value = !0),
        onBlur: c[7] || (c[7] = (g) => o.value = !1)
      }, null, 42, ly)), [
        [Io, v(a)]
      ]),
      h.$slots.default || h.label ? (T(), B("span", {
        key: 2,
        class: I(v(d).be("button", "inner")),
        style: xe(v(r) ? v(f) : void 0)
      }, [
        se(h.$slots, "default", {}, () => [
          Uo(we(h.label), 1)
        ])
      ], 6)) : X("v-if", !0)
    ], 2));
  }
});
var Bi = /* @__PURE__ */ pe(sy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
const iy = _e({
  modelValue: {
    type: ve(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: qn,
  label: String,
  fill: String,
  textColor: String,
  tag: {
    type: String,
    default: "div"
  },
  validateEvent: {
    type: Boolean,
    default: !0
  }
}), uy = {
  [Te]: (e) => mn(e),
  change: (e) => mn(e)
}, cy = K({
  name: "ElCheckboxGroup"
}), dy = /* @__PURE__ */ K({
  ...cy,
  props: iy,
  emits: uy,
  setup(e, { emit: t }) {
    const n = e, o = re("checkbox"), { formItem: r } = _n(), { inputId: l, isLabeledByFormItem: s } = yl(n, {
      formItemContext: r
    }), a = async (u) => {
      t(Te, u), await ce(), t("change", u);
    }, i = $({
      get() {
        return n.modelValue;
      },
      set(u) {
        a(u);
      }
    });
    return st(Un, {
      ...Zp(Vn(n), [
        "size",
        "min",
        "max",
        "disabled",
        "validateEvent",
        "fill",
        "textColor"
      ]),
      modelValue: i,
      changeEvent: a
    }), Q(() => n.modelValue, () => {
      n.validateEvent && (r == null || r.validate("change").catch((u) => Le(u)));
    }), (u, d) => {
      var f;
      return T(), Y(at(u.tag), {
        id: v(l),
        class: I(v(o).b("group")),
        role: "group",
        "aria-label": v(s) ? void 0 : u.label || "checkbox-group",
        "aria-labelledby": v(s) ? (f = v(r)) == null ? void 0 : f.labelId : void 0
      }, {
        default: ee(() => [
          se(u.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var zi = /* @__PURE__ */ pe(dy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
const Dn = gt(oy, {
  CheckboxButton: Bi,
  CheckboxGroup: zi
});
Kn(Bi);
Kn(zi);
const Hi = _e({
  closable: Boolean,
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", ""],
    default: ""
  },
  hit: Boolean,
  disableTransitions: Boolean,
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    values: vo,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), fy = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, py = K({
  name: "ElTag"
}), vy = /* @__PURE__ */ K({
  ...py,
  props: Hi,
  emits: fy,
  setup(e, { emit: t }) {
    const n = e, o = nn(), r = re("tag"), l = $(() => {
      const { type: i, hit: u, effect: d, closable: f, round: p } = n;
      return [
        r.b(),
        r.is("closable", f),
        r.m(i),
        r.m(o.value),
        r.m(d),
        r.is("hit", u),
        r.is("round", p)
      ];
    }), s = (i) => {
      t("close", i);
    }, a = (i) => {
      t("click", i);
    };
    return (i, u) => i.disableTransitions ? (T(), B("span", {
      key: 0,
      class: I(v(l)),
      style: xe({ backgroundColor: i.color }),
      onClick: a
    }, [
      U("span", {
        class: I(v(r).e("content"))
      }, [
        se(i.$slots, "default")
      ], 2),
      i.closable ? (T(), Y(v(Ne), {
        key: 0,
        class: I(v(r).e("close")),
        onClick: Qe(s, ["stop"])
      }, {
        default: ee(() => [
          fe(v(Ca))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : X("v-if", !0)
    ], 6)) : (T(), Y(co, {
      key: 1,
      name: `${v(r).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: ee(() => [
        U("span", {
          class: I(v(l)),
          style: xe({ backgroundColor: i.color }),
          onClick: a
        }, [
          U("span", {
            class: I(v(r).e("content"))
          }, [
            se(i.$slots, "default")
          ], 2),
          i.closable ? (T(), Y(v(Ne), {
            key: 0,
            class: I(v(r).e("close")),
            onClick: Qe(s, ["stop"])
          }, {
            default: ee(() => [
              fe(v(Ca))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : X("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var hy = /* @__PURE__ */ pe(vy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const gy = gt(hy), my = _e({
  id: {
    type: String,
    default: void 0
  },
  step: {
    type: Number,
    default: 1
  },
  stepStrictly: Boolean,
  max: {
    type: Number,
    default: Number.POSITIVE_INFINITY
  },
  min: {
    type: Number,
    default: Number.NEGATIVE_INFINITY
  },
  modelValue: Number,
  readonly: Boolean,
  disabled: Boolean,
  size: qn,
  controls: {
    type: Boolean,
    default: !0
  },
  controlsPosition: {
    type: String,
    default: "",
    values: ["", "right"]
  },
  valueOnClear: {
    type: [String, Number, null],
    validator: (e) => e === null || me(e) || ["min", "max"].includes(e),
    default: null
  },
  name: String,
  label: String,
  placeholder: String,
  precision: {
    type: Number,
    validator: (e) => e >= 0 && e === Number.parseInt(`${e}`, 10)
  },
  validateEvent: {
    type: Boolean,
    default: !0
  }
}), by = {
  [er]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [To]: (e) => me(e) || Vt(e),
  [Te]: (e) => me(e) || Vt(e)
}, yy = ["aria-label", "onKeydown"], wy = ["aria-label", "onKeydown"], Cy = K({
  name: "ElInputNumber"
}), Sy = /* @__PURE__ */ K({
  ...Cy,
  props: my,
  emits: by,
  setup(e, { expose: t, emit: n }) {
    const o = e, { t: r } = It(), l = re("input-number"), s = x(), a = kt({
      currentValue: o.modelValue,
      userInput: null
    }), { formItem: i } = _n(), u = $(() => me(o.modelValue) && o.modelValue <= o.min), d = $(() => me(o.modelValue) && o.modelValue >= o.max), f = $(() => {
      const k = m(o.step);
      return Zt(o.precision) ? Math.max(m(o.modelValue), k) : (k > o.precision && Le("InputNumber", "precision should not be less than the decimal places of step"), o.precision);
    }), p = $(() => o.controls && o.controlsPosition === "right"), h = nn(), c = ho(), g = $(() => {
      if (a.userInput !== null)
        return a.userInput;
      let k = a.currentValue;
      if (Vt(k))
        return "";
      if (me(k)) {
        if (Number.isNaN(k))
          return "";
        Zt(o.precision) || (k = k.toFixed(o.precision));
      }
      return k;
    }), y = (k, R) => {
      if (Zt(R) && (R = f.value), R === 0)
        return Math.round(k);
      let M = String(k);
      const V = M.indexOf(".");
      if (V === -1 || !M.replace(".", "").split("")[V + R])
        return k;
      const L = M.length;
      return M.charAt(L - 1) === "5" && (M = `${M.slice(0, Math.max(0, L - 1))}6`), Number.parseFloat(Number(M).toFixed(R));
    }, m = (k) => {
      if (Vt(k))
        return 0;
      const R = k.toString(), M = R.indexOf(".");
      let V = 0;
      return M !== -1 && (V = R.length - M - 1), V;
    }, w = (k, R = 1) => me(k) ? y(k + o.step * R) : a.currentValue, C = () => {
      if (o.readonly || c.value || d.value)
        return;
      const k = Number(g.value) || 0, R = w(k);
      _(R), n(To, a.currentValue);
    }, b = () => {
      if (o.readonly || c.value || u.value)
        return;
      const k = Number(g.value) || 0, R = w(k, -1);
      _(R), n(To, a.currentValue);
    }, O = (k, R) => {
      const { max: M, min: V, step: Z, precision: H, stepStrictly: L, valueOnClear: q } = o;
      let oe = Number(k);
      if (Vt(k) || Number.isNaN(oe))
        return null;
      if (k === "") {
        if (q === null)
          return null;
        oe = Ze(q) ? { min: V, max: M }[q] : q;
      }
      return L && (oe = y(Math.round(oe / Z) * Z, H)), Zt(H) || (oe = y(oe, H)), (oe > M || oe < V) && (oe = oe > M ? M : V, R && n(Te, oe)), oe;
    }, _ = (k, R = !0) => {
      var M;
      const V = a.currentValue, Z = O(k);
      if (V !== Z) {
        if (!R) {
          n(Te, Z);
          return;
        }
        a.userInput = null, n(Te, Z), n(er, Z, V), o.validateEvent && ((M = i == null ? void 0 : i.validate) == null || M.call(i, "change").catch((H) => Le(H))), a.currentValue = Z;
      }
    }, S = (k) => {
      a.userInput = k;
      const R = k === "" ? null : Number(k);
      n(To, R), _(R, !1);
    }, P = (k) => {
      const R = k !== "" ? Number(k) : "";
      (me(R) && !Number.isNaN(R) || k === "") && _(R), a.userInput = null;
    }, N = () => {
      var k, R;
      (R = (k = s.value) == null ? void 0 : k.focus) == null || R.call(k);
    }, z = () => {
      var k, R;
      (R = (k = s.value) == null ? void 0 : k.blur) == null || R.call(k);
    }, j = (k) => {
      n("focus", k);
    }, D = (k) => {
      var R;
      n("blur", k), o.validateEvent && ((R = i == null ? void 0 : i.validate) == null || R.call(i, "blur").catch((M) => Le(M)));
    };
    return Q(() => o.modelValue, (k) => {
      const R = O(a.userInput), M = O(k, !0);
      !me(R) && (!R || R !== M) && (a.currentValue = M, a.userInput = null);
    }, { immediate: !0 }), Pe(() => {
      var k;
      const { min: R, max: M, modelValue: V } = o, Z = (k = s.value) == null ? void 0 : k.input;
      if (Z.setAttribute("role", "spinbutton"), Number.isFinite(M) ? Z.setAttribute("aria-valuemax", String(M)) : Z.removeAttribute("aria-valuemax"), Number.isFinite(R) ? Z.setAttribute("aria-valuemin", String(R)) : Z.removeAttribute("aria-valuemin"), Z.setAttribute("aria-valuenow", String(a.currentValue)), Z.setAttribute("aria-disabled", String(c.value)), !me(V) && V != null) {
        let H = Number(V);
        Number.isNaN(H) && (H = null), n(Te, H);
      }
    }), Yr(() => {
      var k;
      const R = (k = s.value) == null ? void 0 : k.input;
      R == null || R.setAttribute("aria-valuenow", `${a.currentValue}`);
    }), t({
      focus: N,
      blur: z
    }), (k, R) => (T(), B("div", {
      class: I([
        v(l).b(),
        v(l).m(v(h)),
        v(l).is("disabled", v(c)),
        v(l).is("without-controls", !k.controls),
        v(l).is("controls-right", v(p))
      ]),
      onDragstart: R[0] || (R[0] = Qe(() => {
      }, ["prevent"]))
    }, [
      k.controls ? Oe((T(), B("span", {
        key: 0,
        role: "button",
        "aria-label": v(r)("el.inputNumber.decrease"),
        class: I([v(l).e("decrease"), v(l).is("disabled", v(u))]),
        onKeydown: ze(b, ["enter"])
      }, [
        fe(v(Ne), null, {
          default: ee(() => [
            v(p) ? (T(), Y(v(cl), { key: 0 })) : (T(), Y(v(Hh), { key: 1 }))
          ]),
          _: 1
        })
      ], 42, yy)), [
        [v(Za), b]
      ]) : X("v-if", !0),
      k.controls ? Oe((T(), B("span", {
        key: 1,
        role: "button",
        "aria-label": v(r)("el.inputNumber.increase"),
        class: I([v(l).e("increase"), v(l).is("disabled", v(d))]),
        onKeydown: ze(C, ["enter"])
      }, [
        fe(v(Ne), null, {
          default: ee(() => [
            v(p) ? (T(), Y(v(Ks), { key: 0 })) : (T(), Y(v(Qh), { key: 1 }))
          ]),
          _: 1
        })
      ], 42, wy)), [
        [v(Za), C]
      ]) : X("v-if", !0),
      fe(v(or), {
        id: k.id,
        ref_key: "input",
        ref: s,
        type: "number",
        step: k.step,
        "model-value": v(g),
        placeholder: k.placeholder,
        readonly: k.readonly,
        disabled: v(c),
        size: v(h),
        max: k.max,
        min: k.min,
        name: k.name,
        label: k.label,
        "validate-event": !1,
        onKeydown: [
          ze(Qe(C, ["prevent"]), ["up"]),
          ze(Qe(b, ["prevent"]), ["down"])
        ],
        onBlur: D,
        onFocus: j,
        onInput: S,
        onChange: P
      }, null, 8, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "label", "onKeydown"])
    ], 34));
  }
});
var _y = /* @__PURE__ */ pe(Sy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]);
const Ey = gt(_y), $y = _e({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  prevText: {
    type: String
  },
  prevIcon: {
    type: Lt
  }
}), xy = {
  click: (e) => e instanceof MouseEvent
}, Oy = ["disabled", "aria-disabled"], Ty = { key: 0 }, Py = K({
  name: "ElPaginationPrev"
}), ky = /* @__PURE__ */ K({
  ...Py,
  props: $y,
  emits: xy,
  setup(e) {
    const t = e, n = $(() => t.disabled || t.currentPage <= 1);
    return (o, r) => (T(), B("button", {
      type: "button",
      class: "btn-prev",
      disabled: v(n),
      "aria-disabled": v(n),
      onClick: r[0] || (r[0] = (l) => o.$emit("click", l))
    }, [
      o.prevText ? (T(), B("span", Ty, we(o.prevText), 1)) : (T(), Y(v(Ne), { key: 1 }, {
        default: ee(() => [
          (T(), Y(at(o.prevIcon)))
        ]),
        _: 1
      }))
    ], 8, Oy));
  }
});
var Ay = /* @__PURE__ */ pe(ky, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);
const Ly = _e({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    default: 50
  },
  nextText: {
    type: String
  },
  nextIcon: {
    type: Lt
  }
}), My = ["disabled", "aria-disabled"], Iy = { key: 0 }, Ny = K({
  name: "ElPaginationNext"
}), Ry = /* @__PURE__ */ K({
  ...Ny,
  props: Ly,
  emits: ["click"],
  setup(e) {
    const t = e, n = $(() => t.disabled || t.currentPage === t.pageCount || t.pageCount === 0);
    return (o, r) => (T(), B("button", {
      type: "button",
      class: "btn-next",
      disabled: v(n),
      "aria-disabled": v(n),
      onClick: r[0] || (r[0] = (l) => o.$emit("click", l))
    }, [
      o.nextText ? (T(), B("span", Iy, we(o.nextText), 1)) : (T(), Y(v(Ne), { key: 1 }, {
        default: ee(() => [
          (T(), Y(at(o.nextIcon)))
        ]),
        _: 1
      }))
    ], 8, My));
  }
});
var Fy = /* @__PURE__ */ pe(Ry, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);
const Di = Symbol("ElSelectGroup"), lr = Symbol("ElSelect");
function By(e, t) {
  const n = ie(lr), o = ie(Di, { disabled: !1 }), r = $(() => Object.prototype.toString.call(e.value).toLowerCase() === "[object object]"), l = $(() => n.props.multiple ? f(n.props.modelValue, e.value) : p(e.value, n.props.modelValue)), s = $(() => {
    if (n.props.multiple) {
      const g = n.props.modelValue || [];
      return !l.value && g.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), a = $(() => e.label || (r.value ? "" : e.value)), i = $(() => e.value || e.label || ""), u = $(() => e.disabled || t.groupDisabled || s.value), d = Ce(), f = (g = [], y) => {
    if (r.value) {
      const m = n.props.valueKey;
      return g && g.some((w) => An(He(w, m)) === He(y, m));
    } else
      return g && g.includes(y);
  }, p = (g, y) => {
    if (r.value) {
      const { valueKey: m } = n.props;
      return He(g, m) === He(y, m);
    } else
      return g === y;
  }, h = () => {
    !e.disabled && !o.disabled && (n.hoverIndex = n.optionsArray.indexOf(d.proxy));
  };
  Q(() => a.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), Q(() => e.value, (g, y) => {
    const { remote: m, valueKey: w } = n.props;
    if (Object.is(g, y) || (n.onOptionDestroy(y, d.proxy), n.onOptionCreate(d.proxy)), !e.created && !m) {
      if (w && typeof g == "object" && typeof y == "object" && g[w] === y[w])
        return;
      n.setSelected();
    }
  }), Q(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 });
  const { queryChange: c } = An(n);
  return Q(c, (g) => {
    const { query: y } = v(g), m = new RegExp(Sv(y), "i");
    t.visible = m.test(a.value) || e.created, t.visible || n.filteredOptionsCount--;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: a,
    currentValue: i,
    itemSelected: l,
    isDisabled: u,
    hoverItem: h
  };
}
const zy = K({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: !0,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = re("select"), n = kt({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hitState: !1,
      hover: !1
    }), { currentLabel: o, itemSelected: r, isDisabled: l, select: s, hoverItem: a } = By(e, n), { visible: i, hover: u } = Vn(n), d = Ce().proxy;
    s.onOptionCreate(d), St(() => {
      const p = d.value, { selected: h } = s, g = (s.props.multiple ? h : [h]).some((y) => y.value === d.value);
      ce(() => {
        s.cachedOptions.get(p) === d && !g && s.cachedOptions.delete(p);
      }), s.onOptionDestroy(p, d);
    });
    function f() {
      e.disabled !== !0 && n.groupDisabled !== !0 && s.handleOptionSelect(d, !0);
    }
    return {
      ns: t,
      currentLabel: o,
      itemSelected: r,
      isDisabled: l,
      select: s,
      hoverItem: a,
      visible: i,
      hover: u,
      selectOptionClick: f,
      states: n
    };
  }
});
function Hy(e, t, n, o, r, l) {
  return Oe((T(), B("li", {
    class: I([
      e.ns.be("dropdown", "item"),
      e.ns.is("disabled", e.isDisabled),
      {
        selected: e.itemSelected,
        hover: e.hover
      }
    ]),
    onMouseenter: t[0] || (t[0] = (...s) => e.hoverItem && e.hoverItem(...s)),
    onClick: t[1] || (t[1] = Qe((...s) => e.selectOptionClick && e.selectOptionClick(...s), ["stop"]))
  }, [
    se(e.$slots, "default", {}, () => [
      U("span", null, we(e.currentLabel), 1)
    ])
  ], 34)), [
    [jt, e.visible]
  ]);
}
var Ml = /* @__PURE__ */ pe(zy, [["render", Hy], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const Dy = K({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = ie(lr), t = re("select"), n = $(() => e.props.popperClass), o = $(() => e.props.multiple), r = $(() => e.props.fitInputWidth), l = x("");
    function s() {
      var a;
      l.value = `${(a = e.selectWrapper) == null ? void 0 : a.offsetWidth}px`;
    }
    return Pe(() => {
      s(), Nn(e.selectWrapper, s);
    }), {
      ns: t,
      minWidth: l,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: r
    };
  }
});
function Wy(e, t, n, o, r, l) {
  return T(), B("div", {
    class: I([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: xe({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    se(e.$slots, "default")
  ], 6);
}
var Vy = /* @__PURE__ */ pe(Dy, [["render", Wy], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function jy(e) {
  const { t } = It();
  return kt({
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    createdLabel: null,
    createdSelected: !1,
    selected: e.multiple ? [] : {},
    inputLength: 20,
    inputWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: !1,
    softFocus: !1,
    selectedLabel: "",
    hoverIndex: -1,
    query: "",
    previousQuery: null,
    inputHovering: !1,
    cachedPlaceHolder: "",
    currentPlaceholder: t("el.select.placeholder"),
    menuVisibleOnFocus: !1,
    isOnComposition: !1,
    isSilentBlur: !1,
    prefixWidth: 11,
    tagInMultiLine: !1,
    mouseEnter: !1
  });
}
const Ky = (e, t, n) => {
  const { t: o } = It(), r = re("select");
  Js({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, $(() => e.suffixTransition === !1));
  const l = x(null), s = x(null), a = x(null), i = x(null), u = x(null), d = x(null), f = x(-1), p = Pn({ query: "" }), h = Pn(""), { form: c, formItem: g } = _n(), y = $(() => !e.filterable || e.multiple || !t.visible), m = $(() => e.disabled || (c == null ? void 0 : c.disabled)), w = $(() => {
    const E = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !m.value && t.inputHovering && E;
  }), C = $(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), b = $(() => r.is("reverse", C.value && t.visible && e.suffixTransition)), O = $(() => e.remote ? 300 : 0), _ = $(() => e.loading ? e.loadingText || o("el.select.loading") : e.remote && t.query === "" && t.options.size === 0 ? !1 : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0 ? e.noMatchText || o("el.select.noMatch") : t.options.size === 0 ? e.noDataText || o("el.select.noData") : null), S = $(() => Array.from(t.options.values())), P = $(() => Array.from(t.cachedOptions.values())), N = $(() => {
    const E = S.value.filter((A) => !A.created).some((A) => A.currentLabel === t.query);
    return e.filterable && e.allowCreate && t.query !== "" && !E;
  }), z = nn(), j = $(() => ["small"].includes(z.value) ? "small" : "default"), D = $({
    get() {
      return t.visible && _.value !== !1;
    },
    set(E) {
      t.visible = E;
    }
  });
  Q([() => m.value, () => z.value, () => c == null ? void 0 : c.size], () => {
    ce(() => {
      k();
    });
  }), Q(() => e.placeholder, (E) => {
    t.cachedPlaceHolder = t.currentPlaceholder = E;
  }), Q(() => e.modelValue, (E, A) => {
    e.multiple && (k(), E && E.length > 0 || s.value && t.query !== "" ? t.currentPlaceholder = "" : t.currentPlaceholder = t.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (t.query = "", R(t.query))), Z(), e.filterable && !e.multiple && (t.inputLength = 20), !Ho(E, A) && e.validateEvent && (g == null || g.validate("change").catch((W) => Le(W)));
  }, {
    flush: "post",
    deep: !0
  }), Q(() => t.visible, (E) => {
    var A, W, J;
    E ? ((W = (A = a.value) == null ? void 0 : A.updatePopper) == null || W.call(A), e.filterable && (t.filteredOptionsCount = t.optionsCount, t.query = e.remote ? "" : t.selectedLabel, e.multiple ? (J = s.value) == null || J.focus() : t.selectedLabel && (t.currentPlaceholder = `${t.selectedLabel}`, t.selectedLabel = ""), R(t.query), !e.multiple && !e.remote && (p.value.query = "", Gn(p), Gn(h)))) : (e.filterable && (ft(e.filterMethod) && e.filterMethod(""), ft(e.remoteMethod) && e.remoteMethod("")), s.value && s.value.blur(), t.query = "", t.previousQuery = null, t.selectedLabel = "", t.inputLength = 20, t.menuVisibleOnFocus = !1, L(), ce(() => {
      s.value && s.value.value === "" && t.selected.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }), e.multiple || (t.selected && (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel ? t.selectedLabel = t.createdLabel : t.selectedLabel = t.selected.currentLabel, e.filterable && (t.query = t.selectedLabel)), e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))), n.emit("visible-change", E);
  }), Q(() => t.options.entries(), () => {
    var E, A, W;
    if (!$e)
      return;
    (A = (E = a.value) == null ? void 0 : E.updatePopper) == null || A.call(E), e.multiple && k();
    const J = ((W = u.value) == null ? void 0 : W.querySelectorAll("input")) || [];
    Array.from(J).includes(document.activeElement) || Z(), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && V();
  }, {
    flush: "post"
  }), Q(() => t.hoverIndex, (E) => {
    me(E) && E > -1 ? f.value = S.value[E] || {} : f.value = {}, S.value.forEach((A) => {
      A.hover = f.value === A;
    });
  });
  const k = () => {
    e.collapseTags && !e.filterable || ce(() => {
      var E, A;
      if (!l.value)
        return;
      const W = l.value.$el.querySelector("input"), J = i.value, he = sg(z.value || (c == null ? void 0 : c.size));
      W.style.height = `${(t.selected.length === 0 ? he : Math.max(J ? J.clientHeight + (J.clientHeight > he ? 6 : 0) : 0, he)) - 2}px`, t.tagInMultiLine = Number.parseFloat(W.style.height) >= he, t.visible && _.value !== !1 && ((A = (E = a.value) == null ? void 0 : E.updatePopper) == null || A.call(E));
    });
  }, R = async (E) => {
    if (!(t.previousQuery === E || t.isOnComposition)) {
      if (t.previousQuery === null && (ft(e.filterMethod) || ft(e.remoteMethod))) {
        t.previousQuery = E;
        return;
      }
      t.previousQuery = E, ce(() => {
        var A, W;
        t.visible && ((W = (A = a.value) == null ? void 0 : A.updatePopper) == null || W.call(A));
      }), t.hoverIndex = -1, e.multiple && e.filterable && ce(() => {
        const A = s.value.value.length * 15 + 20;
        t.inputLength = e.collapseTags ? Math.min(50, A) : A, M(), k();
      }), e.remote && ft(e.remoteMethod) ? (t.hoverIndex = -1, e.remoteMethod(E)) : ft(e.filterMethod) ? (e.filterMethod(E), Gn(h)) : (t.filteredOptionsCount = t.optionsCount, p.value.query = E, Gn(p), Gn(h)), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && (await ce(), V());
    }
  }, M = () => {
    t.currentPlaceholder !== "" && (t.currentPlaceholder = s.value.value ? "" : t.cachedPlaceHolder);
  }, V = () => {
    const E = S.value.filter((J) => J.visible && !J.disabled && !J.states.groupDisabled), A = E.find((J) => J.created), W = E[0];
    t.hoverIndex = De(S.value, A || W);
  }, Z = () => {
    var E;
    if (e.multiple)
      t.selectedLabel = "";
    else {
      const W = H(e.modelValue);
      (E = W.props) != null && E.created ? (t.createdLabel = W.props.value, t.createdSelected = !0) : t.createdSelected = !1, t.selectedLabel = W.currentLabel, t.selected = W, e.filterable && (t.query = t.selectedLabel);
      return;
    }
    const A = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((W) => {
      A.push(H(W));
    }), t.selected = A, ce(() => {
      k();
    });
  }, H = (E) => {
    let A;
    const W = cr(E).toLowerCase() === "object", J = cr(E).toLowerCase() === "null", he = cr(E).toLowerCase() === "undefined";
    for (let bt = t.cachedOptions.size - 1; bt >= 0; bt--) {
      const Ye = P.value[bt];
      if (W ? He(Ye.value, e.valueKey) === He(E, e.valueKey) : Ye.value === E) {
        A = {
          value: E,
          currentLabel: Ye.currentLabel,
          isDisabled: Ye.isDisabled
        };
        break;
      }
    }
    if (A)
      return A;
    const Ve = W ? E.label : !J && !he ? E : "", Ie = {
      value: E,
      currentLabel: Ve
    };
    return e.multiple && (Ie.hitState = !1), Ie;
  }, L = () => {
    setTimeout(() => {
      const E = e.valueKey;
      e.multiple ? t.selected.length > 0 ? t.hoverIndex = Math.min.apply(null, t.selected.map((A) => S.value.findIndex((W) => He(W, E) === He(A, E)))) : t.hoverIndex = -1 : t.hoverIndex = S.value.findIndex((A) => xt(A) === xt(t.selected));
    }, 300);
  }, q = () => {
    var E, A;
    oe(), (A = (E = a.value) == null ? void 0 : E.updatePopper) == null || A.call(E), e.multiple && k();
  }, oe = () => {
    var E;
    t.inputWidth = (E = l.value) == null ? void 0 : E.$el.offsetWidth;
  }, de = () => {
    e.filterable && t.query !== t.selectedLabel && (t.query = t.selectedLabel, R(t.query));
  }, be = Mn(() => {
    de();
  }, O.value), ge = Mn((E) => {
    R(E.target.value);
  }, O.value), le = (E) => {
    Ho(e.modelValue, E) || n.emit(er, E);
  }, ye = (E) => {
    if (E.target.value.length <= 0 && !nt()) {
      const A = e.modelValue.slice();
      A.pop(), n.emit(Te, A), le(A);
    }
    E.target.value.length === 1 && e.modelValue.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
  }, Ee = (E, A) => {
    const W = t.selected.indexOf(A);
    if (W > -1 && !m.value) {
      const J = e.modelValue.slice();
      J.splice(W, 1), n.emit(Te, J), le(J), n.emit("remove-tag", A.value);
    }
    E.stopPropagation();
  }, ae = (E) => {
    E.stopPropagation();
    const A = e.multiple ? [] : "";
    if (!Ze(A))
      for (const W of t.selected)
        W.isDisabled && A.push(W.value);
    n.emit(Te, A), le(A), t.hoverIndex = -1, t.visible = !1, n.emit("clear");
  }, ke = (E, A) => {
    var W;
    if (e.multiple) {
      const J = (e.modelValue || []).slice(), he = De(J, E.value);
      he > -1 ? J.splice(he, 1) : (e.multipleLimit <= 0 || J.length < e.multipleLimit) && J.push(E.value), n.emit(Te, J), le(J), E.created && (t.query = "", R(""), t.inputLength = 20), e.filterable && ((W = s.value) == null || W.focus());
    } else
      n.emit(Te, E.value), le(E.value), t.visible = !1;
    t.isSilentBlur = A, dt(), !t.visible && ce(() => {
      Ge(E);
    });
  }, De = (E = [], A) => {
    if (!ct(A))
      return E.indexOf(A);
    const W = e.valueKey;
    let J = -1;
    return E.some((he, Ve) => An(He(he, W)) === He(A, W) ? (J = Ve, !0) : !1), J;
  }, dt = () => {
    t.softFocus = !0;
    const E = s.value || l.value;
    E && (E == null || E.focus());
  }, Ge = (E) => {
    var A, W, J, he, Ve;
    const Ie = Array.isArray(E) ? E[0] : E;
    let bt = null;
    if (Ie != null && Ie.value) {
      const Ye = S.value.filter((En) => En.value === Ie.value);
      Ye.length > 0 && (bt = Ye[0].$el);
    }
    if (a.value && bt) {
      const Ye = (he = (J = (W = (A = a.value) == null ? void 0 : A.popperRef) == null ? void 0 : W.contentRef) == null ? void 0 : J.querySelector) == null ? void 0 : he.call(J, `.${r.be("dropdown", "wrap")}`);
      Ye && $v(Ye, bt);
    }
    (Ve = d.value) == null || Ve.handleScroll();
  }, tt = (E) => {
    t.optionsCount++, t.filteredOptionsCount++, t.options.set(E.value, E), t.cachedOptions.set(E.value, E);
  }, Rt = (E, A) => {
    t.options.get(E) === A && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(E));
  }, mt = (E) => {
    E.code !== so.backspace && nt(!1), t.inputLength = s.value.value.length * 15 + 20, k();
  }, nt = (E) => {
    if (!Array.isArray(t.selected))
      return;
    const A = t.selected[t.selected.length - 1];
    if (A)
      return E === !0 || E === !1 ? (A.hitState = E, E) : (A.hitState = !A.hitState, A.hitState);
  }, $t = (E) => {
    const A = E.target.value;
    if (E.type === "compositionend")
      t.isOnComposition = !1, ce(() => R(A));
    else {
      const W = A[A.length - 1] || "";
      t.isOnComposition = !qs(W);
    }
  }, Ft = () => {
    ce(() => Ge(t.selected));
  }, We = (E) => {
    t.softFocus ? t.softFocus = !1 : ((e.automaticDropdown || e.filterable) && (e.filterable && !t.visible && (t.menuVisibleOnFocus = !0), t.visible = !0), n.emit("focus", E));
  }, Be = () => {
    var E;
    t.visible = !1, (E = l.value) == null || E.blur();
  }, ot = (E) => {
    ce(() => {
      t.isSilentBlur ? t.isSilentBlur = !1 : n.emit("blur", E);
    }), t.softFocus = !1;
  }, F = (E) => {
    ae(E);
  }, ue = () => {
    t.visible = !1;
  }, Me = (E) => {
    t.visible && (E.preventDefault(), E.stopPropagation(), t.visible = !1);
  }, rt = (E) => {
    var A;
    E && !t.mouseEnter || m.value || (t.menuVisibleOnFocus ? t.menuVisibleOnFocus = !1 : (!a.value || !a.value.isFocusInsideContent()) && (t.visible = !t.visible), t.visible && ((A = s.value || l.value) == null || A.focus()));
  }, Bt = () => {
    t.visible ? S.value[t.hoverIndex] && ke(S.value[t.hoverIndex], void 0) : rt();
  }, xt = (E) => ct(E.value) ? He(E.value, e.valueKey) : E.value, rn = $(() => S.value.filter((E) => E.visible).every((E) => E.disabled)), ln = (E) => {
    if (!t.visible) {
      t.visible = !0;
      return;
    }
    if (!(t.options.size === 0 || t.filteredOptionsCount === 0) && !t.isOnComposition && !rn.value) {
      E === "next" ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0)) : E === "prev" && (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1));
      const A = S.value[t.hoverIndex];
      (A.disabled === !0 || A.states.groupDisabled === !0 || !A.visible) && ln(E), ce(() => Ge(f.value));
    }
  };
  return {
    optionsArray: S,
    selectSize: z,
    handleResize: q,
    debouncedOnInputChange: be,
    debouncedQueryChange: ge,
    deletePrevTag: ye,
    deleteTag: Ee,
    deleteSelected: ae,
    handleOptionSelect: ke,
    scrollToOption: Ge,
    readonly: y,
    resetInputHeight: k,
    showClose: w,
    iconComponent: C,
    iconReverse: b,
    showNewOption: N,
    collapseTagSize: j,
    setSelected: Z,
    managePlaceholder: M,
    selectDisabled: m,
    emptyText: _,
    toggleLastOptionHitState: nt,
    resetInputState: mt,
    handleComposition: $t,
    onOptionCreate: tt,
    onOptionDestroy: Rt,
    handleMenuEnter: Ft,
    handleFocus: We,
    blur: Be,
    handleBlur: ot,
    handleClearClick: F,
    handleClose: ue,
    handleKeydownEscape: Me,
    toggleMenu: rt,
    selectOption: Bt,
    getValueKey: xt,
    navigateOptions: ln,
    dropMenuVisible: D,
    queryChange: p,
    groupQueryChange: h,
    reference: l,
    input: s,
    tooltipRef: a,
    tags: i,
    selectWrapper: u,
    scrollbar: d,
    handleMouseEnter: () => {
      t.mouseEnter = !0;
    },
    handleMouseLeave: () => {
      t.mouseEnter = !1;
    }
  };
}, os = "ElSelect", Uy = K({
  name: os,
  componentName: os,
  components: {
    ElInput: or,
    ElSelectMenu: Vy,
    ElOption: Ml,
    ElTag: gy,
    ElScrollbar: Pl,
    ElTooltip: Ei,
    ElIcon: Ne
  },
  directives: { ClickOutside: Oi },
  props: {
    name: String,
    id: String,
    modelValue: {
      type: [Array, String, Number, Boolean, Object],
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    automaticDropdown: Boolean,
    size: {
      type: String,
      validator: ig
    },
    effect: {
      type: String,
      default: "light"
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: {
      type: String,
      default: ""
    },
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String
    },
    defaultFirstOption: Boolean,
    reserveKeyword: {
      type: Boolean,
      default: !0
    },
    valueKey: {
      type: String,
      default: "value"
    },
    collapseTags: Boolean,
    collapseTagsTooltip: {
      type: Boolean,
      default: !1
    },
    teleported: Ll.teleported,
    persistent: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: Lt,
      default: fl
    },
    fitInputWidth: {
      type: Boolean,
      default: !1
    },
    suffixIcon: {
      type: Lt,
      default: cl
    },
    tagType: { ...Hi.type, default: "info" },
    validateEvent: {
      type: Boolean,
      default: !0
    },
    remoteShowSuffix: {
      type: Boolean,
      default: !1
    },
    suffixTransition: {
      type: Boolean,
      default: !0
    },
    placement: {
      type: String,
      values: tr,
      default: "bottom-start"
    }
  },
  emits: [
    Te,
    er,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const n = re("select"), o = re("input"), { t: r } = It(), l = jy(e), {
      optionsArray: s,
      selectSize: a,
      readonly: i,
      handleResize: u,
      collapseTagSize: d,
      debouncedOnInputChange: f,
      debouncedQueryChange: p,
      deletePrevTag: h,
      deleteTag: c,
      deleteSelected: g,
      handleOptionSelect: y,
      scrollToOption: m,
      setSelected: w,
      resetInputHeight: C,
      managePlaceholder: b,
      showClose: O,
      selectDisabled: _,
      iconComponent: S,
      iconReverse: P,
      showNewOption: N,
      emptyText: z,
      toggleLastOptionHitState: j,
      resetInputState: D,
      handleComposition: k,
      onOptionCreate: R,
      onOptionDestroy: M,
      handleMenuEnter: V,
      handleFocus: Z,
      blur: H,
      handleBlur: L,
      handleClearClick: q,
      handleClose: oe,
      handleKeydownEscape: de,
      toggleMenu: be,
      selectOption: ge,
      getValueKey: le,
      navigateOptions: ye,
      dropMenuVisible: Ee,
      reference: ae,
      input: ke,
      tooltipRef: De,
      tags: dt,
      selectWrapper: Ge,
      scrollbar: tt,
      queryChange: Rt,
      groupQueryChange: mt,
      handleMouseEnter: nt,
      handleMouseLeave: $t
    } = Ky(e, l, t), { focus: Ft } = vg(ae), {
      inputWidth: We,
      selected: Be,
      inputLength: ot,
      filteredOptionsCount: F,
      visible: ue,
      softFocus: Me,
      selectedLabel: rt,
      hoverIndex: Bt,
      query: xt,
      inputHovering: rn,
      currentPlaceholder: ln,
      menuVisibleOnFocus: G,
      isOnComposition: ne,
      isSilentBlur: E,
      options: A,
      cachedOptions: W,
      optionsCount: J,
      prefixWidth: he,
      tagInMultiLine: Ve
    } = Vn(l), Ie = $(() => {
      const je = [n.b()], zt = v(a);
      return zt && je.push(n.m(zt)), e.disabled && je.push(n.m("disabled")), je;
    }), bt = $(() => ({
      maxWidth: `${v(We) - 32}px`,
      width: "100%"
    })), Ye = $(() => ({ maxWidth: `${v(We) > 123 ? v(We) - 123 : v(We) - 75}px` }));
    st(lr, kt({
      props: e,
      options: A,
      optionsArray: s,
      cachedOptions: W,
      optionsCount: J,
      filteredOptionsCount: F,
      hoverIndex: Bt,
      handleOptionSelect: y,
      onOptionCreate: R,
      onOptionDestroy: M,
      selectWrapper: Ge,
      selected: Be,
      setSelected: w,
      queryChange: Rt,
      groupQueryChange: mt
    })), Pe(() => {
      l.cachedPlaceHolder = ln.value = e.placeholder || (() => r("el.select.placeholder")), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (ln.value = ""), Nn(Ge, u), e.remote && e.multiple && C(), ce(() => {
        const je = ae.value && ae.value.$el;
        if (je && (We.value = je.getBoundingClientRect().width, t.slots.prefix)) {
          const zt = je.querySelector(`.${o.e("prefix")}`);
          he.value = Math.max(zt.getBoundingClientRect().width + 5, 30);
        }
      }), w();
    }), e.multiple && !Array.isArray(e.modelValue) && t.emit(Te, []), !e.multiple && Array.isArray(e.modelValue) && t.emit(Te, "");
    const En = $(() => {
      var je, zt;
      return (zt = (je = De.value) == null ? void 0 : je.popperRef) == null ? void 0 : zt.contentRef;
    });
    return {
      tagInMultiLine: Ve,
      prefixWidth: he,
      selectSize: a,
      readonly: i,
      handleResize: u,
      collapseTagSize: d,
      debouncedOnInputChange: f,
      debouncedQueryChange: p,
      deletePrevTag: h,
      deleteTag: c,
      deleteSelected: g,
      handleOptionSelect: y,
      scrollToOption: m,
      inputWidth: We,
      selected: Be,
      inputLength: ot,
      filteredOptionsCount: F,
      visible: ue,
      softFocus: Me,
      selectedLabel: rt,
      hoverIndex: Bt,
      query: xt,
      inputHovering: rn,
      currentPlaceholder: ln,
      menuVisibleOnFocus: G,
      isOnComposition: ne,
      isSilentBlur: E,
      options: A,
      resetInputHeight: C,
      managePlaceholder: b,
      showClose: O,
      selectDisabled: _,
      iconComponent: S,
      iconReverse: P,
      showNewOption: N,
      emptyText: z,
      toggleLastOptionHitState: j,
      resetInputState: D,
      handleComposition: k,
      handleMenuEnter: V,
      handleFocus: Z,
      blur: H,
      handleBlur: L,
      handleClearClick: q,
      handleClose: oe,
      handleKeydownEscape: de,
      toggleMenu: be,
      selectOption: ge,
      getValueKey: le,
      navigateOptions: ye,
      dropMenuVisible: Ee,
      focus: Ft,
      reference: ae,
      input: ke,
      tooltipRef: De,
      popperPaneRef: En,
      tags: dt,
      selectWrapper: Ge,
      scrollbar: tt,
      wrapperKls: Ie,
      selectTagsStyle: bt,
      nsSelect: n,
      tagTextStyle: Ye,
      handleMouseEnter: nt,
      handleMouseLeave: $t
    };
  }
}), qy = ["disabled", "autocomplete"], Gy = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function Yy(e, t, n, o, r, l) {
  const s = Ae("el-tag"), a = Ae("el-tooltip"), i = Ae("el-icon"), u = Ae("el-input"), d = Ae("el-option"), f = Ae("el-scrollbar"), p = Ae("el-select-menu"), h = Xr("click-outside");
  return Oe((T(), B("div", {
    ref: "selectWrapper",
    class: I(e.wrapperKls),
    onMouseenter: t[22] || (t[22] = (...c) => e.handleMouseEnter && e.handleMouseEnter(...c)),
    onMouseleave: t[23] || (t[23] = (...c) => e.handleMouseLeave && e.handleMouseLeave(...c)),
    onClick: t[24] || (t[24] = Qe((...c) => e.toggleMenu && e.toggleMenu(...c), ["stop"]))
  }, [
    fe(a, {
      ref: "tooltipRef",
      visible: e.dropMenuVisible,
      placement: e.placement,
      teleported: e.teleported,
      "popper-class": [e.nsSelect.e("popper"), e.popperClass],
      "fallback-placements": ["bottom-start", "top-start", "right", "left"],
      effect: e.effect,
      pure: "",
      trigger: "click",
      transition: `${e.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": !1,
      "gpu-acceleration": !1,
      persistent: e.persistent,
      onShow: e.handleMenuEnter
    }, {
      default: ee(() => [
        U("div", {
          class: "select-trigger",
          onMouseenter: t[20] || (t[20] = (c) => e.inputHovering = !0),
          onMouseleave: t[21] || (t[21] = (c) => e.inputHovering = !1)
        }, [
          e.multiple ? (T(), B("div", {
            key: 0,
            ref: "tags",
            class: I(e.nsSelect.e("tags")),
            style: xe(e.selectTagsStyle)
          }, [
            e.collapseTags && e.selected.length ? (T(), B("span", {
              key: 0,
              class: I([
                e.nsSelect.b("tags-wrapper"),
                { "has-prefix": e.prefixWidth && e.selected.length }
              ])
            }, [
              fe(s, {
                closable: !e.selectDisabled && !e.selected[0].isDisabled,
                size: e.collapseTagSize,
                hit: e.selected[0].hitState,
                type: e.tagType,
                "disable-transitions": "",
                onClose: t[0] || (t[0] = (c) => e.deleteTag(c, e.selected[0]))
              }, {
                default: ee(() => [
                  U("span", {
                    class: I(e.nsSelect.e("tags-text")),
                    style: xe(e.tagTextStyle)
                  }, we(e.selected[0].currentLabel), 7)
                ]),
                _: 1
              }, 8, ["closable", "size", "hit", "type"]),
              e.selected.length > 1 ? (T(), Y(s, {
                key: 0,
                closable: !1,
                size: e.collapseTagSize,
                type: e.tagType,
                "disable-transitions": ""
              }, {
                default: ee(() => [
                  e.collapseTagsTooltip ? (T(), Y(a, {
                    key: 0,
                    disabled: e.dropMenuVisible,
                    "fallback-placements": ["bottom", "top", "right", "left"],
                    effect: e.effect,
                    placement: "bottom",
                    teleported: e.teleported
                  }, {
                    default: ee(() => [
                      U("span", {
                        class: I(e.nsSelect.e("tags-text"))
                      }, "+ " + we(e.selected.length - 1), 3)
                    ]),
                    content: ee(() => [
                      U("div", {
                        class: I(e.nsSelect.e("collapse-tags"))
                      }, [
                        (T(!0), B(Ue, null, Ln(e.selected.slice(1), (c, g) => (T(), B("div", {
                          key: g,
                          class: I(e.nsSelect.e("collapse-tag"))
                        }, [
                          (T(), Y(s, {
                            key: e.getValueKey(c),
                            class: "in-tooltip",
                            closable: !e.selectDisabled && !c.isDisabled,
                            size: e.collapseTagSize,
                            hit: c.hitState,
                            type: e.tagType,
                            "disable-transitions": "",
                            style: { margin: "2px" },
                            onClose: (y) => e.deleteTag(y, c)
                          }, {
                            default: ee(() => [
                              U("span", {
                                class: I(e.nsSelect.e("tags-text")),
                                style: xe({
                                  maxWidth: e.inputWidth - 75 + "px"
                                })
                              }, we(c.currentLabel), 7)
                            ]),
                            _: 2
                          }, 1032, ["closable", "size", "hit", "type", "onClose"]))
                        ], 2))), 128))
                      ], 2)
                    ]),
                    _: 1
                  }, 8, ["disabled", "effect", "teleported"])) : (T(), B("span", {
                    key: 1,
                    class: I(e.nsSelect.e("tags-text"))
                  }, "+ " + we(e.selected.length - 1), 3))
                ]),
                _: 1
              }, 8, ["size", "type"])) : X("v-if", !0)
            ], 2)) : X("v-if", !0),
            X(" <div> "),
            e.collapseTags ? X("v-if", !0) : (T(), Y(co, {
              key: 1,
              onAfterLeave: e.resetInputHeight
            }, {
              default: ee(() => [
                U("span", {
                  class: I([
                    e.nsSelect.b("tags-wrapper"),
                    { "has-prefix": e.prefixWidth && e.selected.length }
                  ])
                }, [
                  (T(!0), B(Ue, null, Ln(e.selected, (c) => (T(), Y(s, {
                    key: e.getValueKey(c),
                    closable: !e.selectDisabled && !c.isDisabled,
                    size: e.collapseTagSize,
                    hit: c.hitState,
                    type: e.tagType,
                    "disable-transitions": "",
                    onClose: (g) => e.deleteTag(g, c)
                  }, {
                    default: ee(() => [
                      U("span", {
                        class: I(e.nsSelect.e("tags-text")),
                        style: xe({ maxWidth: e.inputWidth - 75 + "px" })
                      }, we(c.currentLabel), 7)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                ], 2)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])),
            X(" </div> "),
            e.filterable ? Oe((T(), B("input", {
              key: 2,
              ref: "input",
              "onUpdate:modelValue": t[1] || (t[1] = (c) => e.query = c),
              type: "text",
              class: I([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
              disabled: e.selectDisabled,
              autocomplete: e.autocomplete,
              style: xe({
                marginLeft: e.prefixWidth && !e.selected.length || e.tagInMultiLine ? `${e.prefixWidth}px` : "",
                flexGrow: 1,
                width: `${e.inputLength / (e.inputWidth - 32)}%`,
                maxWidth: `${e.inputWidth - 42}px`
              }),
              onFocus: t[2] || (t[2] = (...c) => e.handleFocus && e.handleFocus(...c)),
              onBlur: t[3] || (t[3] = (...c) => e.handleBlur && e.handleBlur(...c)),
              onKeyup: t[4] || (t[4] = (...c) => e.managePlaceholder && e.managePlaceholder(...c)),
              onKeydown: [
                t[5] || (t[5] = (...c) => e.resetInputState && e.resetInputState(...c)),
                t[6] || (t[6] = ze(Qe((c) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                t[7] || (t[7] = ze(Qe((c) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                t[8] || (t[8] = ze((...c) => e.handleKeydownEscape && e.handleKeydownEscape(...c), ["esc"])),
                t[9] || (t[9] = ze(Qe((...c) => e.selectOption && e.selectOption(...c), ["stop", "prevent"]), ["enter"])),
                t[10] || (t[10] = ze((...c) => e.deletePrevTag && e.deletePrevTag(...c), ["delete"])),
                t[11] || (t[11] = ze((c) => e.visible = !1, ["tab"]))
              ],
              onCompositionstart: t[12] || (t[12] = (...c) => e.handleComposition && e.handleComposition(...c)),
              onCompositionupdate: t[13] || (t[13] = (...c) => e.handleComposition && e.handleComposition(...c)),
              onCompositionend: t[14] || (t[14] = (...c) => e.handleComposition && e.handleComposition(...c)),
              onInput: t[15] || (t[15] = (...c) => e.debouncedQueryChange && e.debouncedQueryChange(...c))
            }, null, 46, qy)), [
              [uu, e.query]
            ]) : X("v-if", !0)
          ], 6)) : X("v-if", !0),
          fe(u, {
            id: e.id,
            ref: "reference",
            modelValue: e.selectedLabel,
            "onUpdate:modelValue": t[16] || (t[16] = (c) => e.selectedLabel = c),
            type: "text",
            placeholder: typeof e.currentPlaceholder == "function" ? e.currentPlaceholder() : e.currentPlaceholder,
            name: e.name,
            autocomplete: e.autocomplete,
            size: e.selectSize,
            disabled: e.selectDisabled,
            readonly: e.readonly,
            "validate-event": !1,
            class: I([e.nsSelect.is("focus", e.visible)]),
            tabindex: e.multiple && e.filterable ? -1 : void 0,
            onFocus: e.handleFocus,
            onBlur: e.handleBlur,
            onInput: e.debouncedOnInputChange,
            onPaste: e.debouncedOnInputChange,
            onCompositionstart: e.handleComposition,
            onCompositionupdate: e.handleComposition,
            onCompositionend: e.handleComposition,
            onKeydown: [
              t[17] || (t[17] = ze(Qe((c) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
              t[18] || (t[18] = ze(Qe((c) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
              ze(Qe(e.selectOption, ["stop", "prevent"]), ["enter"]),
              ze(e.handleKeydownEscape, ["esc"]),
              t[19] || (t[19] = ze((c) => e.visible = !1, ["tab"]))
            ]
          }, cu({
            suffix: ee(() => [
              e.iconComponent && !e.showClose ? (T(), Y(i, {
                key: 0,
                class: I([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: ee(() => [
                  (T(), Y(at(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : X("v-if", !0),
              e.showClose && e.clearIcon ? (T(), Y(i, {
                key: 1,
                class: I([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                onClick: e.handleClearClick
              }, {
                default: ee(() => [
                  (T(), Y(at(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : X("v-if", !0)
            ]),
            _: 2
          }, [
            e.$slots.prefix ? {
              name: "prefix",
              fn: ee(() => [
                U("div", Gy, [
                  se(e.$slots, "prefix")
                ])
              ])
            } : void 0
          ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
        ], 32)
      ]),
      content: ee(() => [
        fe(p, null, {
          default: ee(() => [
            Oe(fe(f, {
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: I([
                e.nsSelect.is("empty", !e.allowCreate && Boolean(e.query) && e.filteredOptionsCount === 0)
              ])
            }, {
              default: ee(() => [
                e.showNewOption ? (T(), Y(d, {
                  key: 0,
                  value: e.query,
                  created: !0
                }, null, 8, ["value"])) : X("v-if", !0),
                se(e.$slots, "default")
              ]),
              _: 3
            }, 8, ["wrap-class", "view-class", "class"]), [
              [jt, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? (T(), B(Ue, { key: 0 }, [
              e.$slots.empty ? se(e.$slots, "empty", { key: 0 }) : (T(), B("p", {
                key: 1,
                class: I(e.nsSelect.be("dropdown", "empty"))
              }, we(e.emptyText), 3))
            ], 64)) : X("v-if", !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "effect", "transition", "persistent", "onShow"])
  ], 34)), [
    [h, e.handleClose, e.popperPaneRef]
  ]);
}
var Xy = /* @__PURE__ */ pe(Uy, [["render", Yy], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const Qy = K({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = re("select"), n = x(!0), o = Ce(), r = x([]);
    st(Di, kt({
      ...Vn(e)
    }));
    const l = ie(lr);
    Pe(() => {
      r.value = s(o.subTree);
    });
    const s = (i) => {
      const u = [];
      return Array.isArray(i.children) && i.children.forEach((d) => {
        var f;
        d.type && d.type.name === "ElOption" && d.component && d.component.proxy ? u.push(d.component.proxy) : (f = d.children) != null && f.length && u.push(...s(d));
      }), u;
    }, { groupQueryChange: a } = An(l);
    return Q(a, () => {
      n.value = r.value.some((i) => i.visible === !0);
    }, { flush: "post" }), {
      visible: n,
      ns: t
    };
  }
});
function Zy(e, t, n, o, r, l) {
  return Oe((T(), B("ul", {
    class: I(e.ns.be("group", "wrap"))
  }, [
    U("li", {
      class: I(e.ns.be("group", "title"))
    }, we(e.label), 3),
    U("li", null, [
      U("ul", {
        class: I(e.ns.b("group"))
      }, [
        se(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [jt, e.visible]
  ]);
}
var Wi = /* @__PURE__ */ pe(Qy, [["render", Zy], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
const Jy = gt(Xy, {
  Option: Ml,
  OptionGroup: Wi
}), e1 = Kn(Ml);
Kn(Wi);
const Il = () => ie(Ys, {}), t1 = _e({
  pageSize: {
    type: Number,
    required: !0
  },
  pageSizes: {
    type: ve(Array),
    default: () => vl([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String
  },
  disabled: Boolean,
  size: {
    type: String,
    values: vo
  }
}), n1 = K({
  name: "ElPaginationSizes"
}), o1 = /* @__PURE__ */ K({
  ...n1,
  props: t1,
  emits: ["page-size-change"],
  setup(e, { emit: t }) {
    const n = e, { t: o } = It(), r = re("pagination"), l = Il(), s = x(n.pageSize);
    Q(() => n.pageSizes, (u, d) => {
      if (!Ho(u, d) && Array.isArray(u)) {
        const f = u.includes(n.pageSize) ? n.pageSize : n.pageSizes[0];
        t("page-size-change", f);
      }
    }), Q(() => n.pageSize, (u) => {
      s.value = u;
    });
    const a = $(() => n.pageSizes);
    function i(u) {
      var d;
      u !== s.value && (s.value = u, (d = l.handleSizeChange) == null || d.call(l, Number(u)));
    }
    return (u, d) => (T(), B("span", {
      class: I(v(r).e("sizes"))
    }, [
      fe(v(Jy), {
        "model-value": s.value,
        disabled: u.disabled,
        "popper-class": u.popperClass,
        size: u.size,
        "validate-event": !1,
        onChange: i
      }, {
        default: ee(() => [
          (T(!0), B(Ue, null, Ln(v(a), (f) => (T(), Y(v(e1), {
            key: f,
            value: f,
            label: f + v(o)("el.pagination.pagesize")
          }, null, 8, ["value", "label"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value", "disabled", "popper-class", "size"])
    ], 2));
  }
});
var r1 = /* @__PURE__ */ pe(o1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);
const l1 = _e({
  size: {
    type: String,
    values: vo
  }
}), a1 = ["disabled"], s1 = K({
  name: "ElPaginationJumper"
}), i1 = /* @__PURE__ */ K({
  ...s1,
  props: l1,
  setup(e) {
    const { t } = It(), n = re("pagination"), { pageCount: o, disabled: r, currentPage: l, changeEvent: s } = Il(), a = x(), i = $(() => {
      var f;
      return (f = a.value) != null ? f : l == null ? void 0 : l.value;
    });
    function u(f) {
      a.value = +f;
    }
    function d(f) {
      f = Math.trunc(+f), s == null || s(+f), a.value = void 0;
    }
    return (f, p) => (T(), B("span", {
      class: I(v(n).e("jump")),
      disabled: v(r)
    }, [
      U("span", {
        class: I([v(n).e("goto")])
      }, we(v(t)("el.pagination.goto")), 3),
      fe(v(or), {
        size: f.size,
        class: I([v(n).e("editor"), v(n).is("in-pagination")]),
        min: 1,
        max: v(o),
        disabled: v(r),
        "model-value": v(i),
        "validate-event": !1,
        type: "number",
        "onUpdate:modelValue": u,
        onChange: d
      }, null, 8, ["size", "class", "max", "disabled", "model-value"]),
      U("span", {
        class: I([v(n).e("classifier")])
      }, we(v(t)("el.pagination.pageClassifier")), 3)
    ], 10, a1));
  }
});
var u1 = /* @__PURE__ */ pe(i1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);
const c1 = _e({
  total: {
    type: Number,
    default: 1e3
  }
}), d1 = ["disabled"], f1 = K({
  name: "ElPaginationTotal"
}), p1 = /* @__PURE__ */ K({
  ...f1,
  props: c1,
  setup(e) {
    const { t } = It(), n = re("pagination"), { disabled: o } = Il();
    return (r, l) => (T(), B("span", {
      class: I(v(n).e("total")),
      disabled: v(o)
    }, we(v(t)("el.pagination.total", {
      total: r.total
    })), 11, d1));
  }
});
var v1 = /* @__PURE__ */ pe(p1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);
const h1 = _e({
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    required: !0
  },
  pagerCount: {
    type: Number,
    default: 7
  },
  disabled: Boolean
}), g1 = ["onKeyup"], m1 = ["aria-current", "tabindex"], b1 = ["tabindex"], y1 = ["aria-current", "tabindex"], w1 = ["tabindex"], C1 = ["aria-current", "tabindex"], S1 = K({
  name: "ElPaginationPager"
}), _1 = /* @__PURE__ */ K({
  ...S1,
  props: h1,
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = e, o = re("pager"), r = re("icon"), l = x(!1), s = x(!1), a = x(!1), i = x(!1), u = x(!1), d = x(!1), f = $(() => {
      const m = n.pagerCount, w = (m - 1) / 2, C = Number(n.currentPage), b = Number(n.pageCount);
      let O = !1, _ = !1;
      b > m && (C > m - w && (O = !0), C < b - w && (_ = !0));
      const S = [];
      if (O && !_) {
        const P = b - (m - 2);
        for (let N = P; N < b; N++)
          S.push(N);
      } else if (!O && _)
        for (let P = 2; P < m; P++)
          S.push(P);
      else if (O && _) {
        const P = Math.floor(m / 2) - 1;
        for (let N = C - P; N <= C + P; N++)
          S.push(N);
      } else
        for (let P = 2; P < b; P++)
          S.push(P);
      return S;
    }), p = $(() => n.disabled ? -1 : 0);
    kn(() => {
      const m = (n.pagerCount - 1) / 2;
      l.value = !1, s.value = !1, n.pageCount > n.pagerCount && (n.currentPage > n.pagerCount - m && (l.value = !0), n.currentPage < n.pageCount - m && (s.value = !0));
    });
    function h(m = !1) {
      n.disabled || (m ? a.value = !0 : i.value = !0);
    }
    function c(m = !1) {
      m ? u.value = !0 : d.value = !0;
    }
    function g(m) {
      const w = m.target;
      if (w.tagName.toLowerCase() === "li" && Array.from(w.classList).includes("number")) {
        const C = Number(w.textContent);
        C !== n.currentPage && t("change", C);
      } else
        w.tagName.toLowerCase() === "li" && Array.from(w.classList).includes("more") && y(m);
    }
    function y(m) {
      const w = m.target;
      if (w.tagName.toLowerCase() === "ul" || n.disabled)
        return;
      let C = Number(w.textContent);
      const b = n.pageCount, O = n.currentPage, _ = n.pagerCount - 2;
      w.className.includes("more") && (w.className.includes("quickprev") ? C = O - _ : w.className.includes("quicknext") && (C = O + _)), Number.isNaN(+C) || (C < 1 && (C = 1), C > b && (C = b)), C !== O && t("change", C);
    }
    return (m, w) => (T(), B("ul", {
      class: I(v(o).b()),
      onClick: y,
      onKeyup: ze(g, ["enter"])
    }, [
      m.pageCount > 0 ? (T(), B("li", {
        key: 0,
        class: I([[
          v(o).is("active", m.currentPage === 1),
          v(o).is("disabled", m.disabled)
        ], "number"]),
        "aria-current": m.currentPage === 1,
        tabindex: v(p)
      }, " 1 ", 10, m1)) : X("v-if", !0),
      l.value ? (T(), B("li", {
        key: 1,
        class: I([
          "more",
          "btn-quickprev",
          v(r).b(),
          v(o).is("disabled", m.disabled)
        ]),
        tabindex: v(p),
        onMouseenter: w[0] || (w[0] = (C) => h(!0)),
        onMouseleave: w[1] || (w[1] = (C) => a.value = !1),
        onFocus: w[2] || (w[2] = (C) => c(!0)),
        onBlur: w[3] || (w[3] = (C) => u.value = !1)
      }, [
        (a.value || u.value) && !m.disabled ? (T(), Y(v(gh), { key: 0 })) : (T(), Y(v(Sa), { key: 1 }))
      ], 42, b1)) : X("v-if", !0),
      (T(!0), B(Ue, null, Ln(v(f), (C) => (T(), B("li", {
        key: C,
        class: I([[
          v(o).is("active", m.currentPage === C),
          v(o).is("disabled", m.disabled)
        ], "number"]),
        "aria-current": m.currentPage === C,
        tabindex: v(p)
      }, we(C), 11, y1))), 128)),
      s.value ? (T(), B("li", {
        key: 2,
        class: I([
          "more",
          "btn-quicknext",
          v(r).b(),
          v(o).is("disabled", m.disabled)
        ]),
        tabindex: v(p),
        onMouseenter: w[4] || (w[4] = (C) => h()),
        onMouseleave: w[5] || (w[5] = (C) => i.value = !1),
        onFocus: w[6] || (w[6] = (C) => c()),
        onBlur: w[7] || (w[7] = (C) => d.value = !1)
      }, [
        (i.value || d.value) && !m.disabled ? (T(), Y(v(Sh), { key: 0 })) : (T(), Y(v(Sa), { key: 1 }))
      ], 42, w1)) : X("v-if", !0),
      m.pageCount > 1 ? (T(), B("li", {
        key: 3,
        class: I([[
          v(o).is("active", m.currentPage === m.pageCount),
          v(o).is("disabled", m.disabled)
        ], "number"]),
        "aria-current": m.currentPage === m.pageCount,
        tabindex: v(p)
      }, we(m.pageCount), 11, C1)) : X("v-if", !0)
    ], 42, g1));
  }
});
var E1 = /* @__PURE__ */ pe(_1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);
const Ke = (e) => typeof e != "number", $1 = _e({
  total: Number,
  pageSize: Number,
  defaultPageSize: Number,
  currentPage: Number,
  defaultCurrentPage: Number,
  pageCount: Number,
  pagerCount: {
    type: Number,
    validator: (e) => me(e) && Math.trunc(e) === e && e > 4 && e < 22 && e % 2 === 1,
    default: 7
  },
  layout: {
    type: String,
    default: ["prev", "pager", "next", "jumper", "->", "total"].join(", ")
  },
  pageSizes: {
    type: ve(Array),
    default: () => vl([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String,
    default: ""
  },
  prevText: {
    type: String,
    default: ""
  },
  prevIcon: {
    type: Lt,
    default: () => Rv
  },
  nextText: {
    type: String,
    default: ""
  },
  nextIcon: {
    type: Lt,
    default: () => dl
  },
  small: Boolean,
  background: Boolean,
  disabled: Boolean,
  hideOnSinglePage: Boolean
}), x1 = {
  "update:current-page": (e) => me(e),
  "update:page-size": (e) => me(e),
  "size-change": (e) => me(e),
  "current-change": (e) => me(e),
  "prev-click": (e) => me(e),
  "next-click": (e) => me(e)
}, rs = "ElPagination";
var O1 = K({
  name: rs,
  props: $1,
  emits: x1,
  setup(e, { emit: t, slots: n }) {
    const { t: o } = It(), r = re("pagination"), l = Ce().vnode.props || {}, s = "onUpdate:currentPage" in l || "onUpdate:current-page" in l || "onCurrentChange" in l, a = "onUpdate:pageSize" in l || "onUpdate:page-size" in l || "onSizeChange" in l, i = $(() => {
      if (Ke(e.total) && Ke(e.pageCount) || !Ke(e.currentPage) && !s)
        return !1;
      if (e.layout.includes("sizes")) {
        if (Ke(e.pageCount)) {
          if (!Ke(e.total) && !Ke(e.pageSize) && !a)
            return !1;
        } else if (!a)
          return !1;
      }
      return !0;
    }), u = x(Ke(e.defaultPageSize) ? 10 : e.defaultPageSize), d = x(Ke(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage), f = $({
      get() {
        return Ke(e.pageSize) ? u.value : e.pageSize;
      },
      set(C) {
        Ke(e.pageSize) && (u.value = C), a && (t("update:page-size", C), t("size-change", C));
      }
    }), p = $(() => {
      let C = 0;
      return Ke(e.pageCount) ? Ke(e.total) || (C = Math.max(1, Math.ceil(e.total / f.value))) : C = e.pageCount, C;
    }), h = $({
      get() {
        return Ke(e.currentPage) ? d.value : e.currentPage;
      },
      set(C) {
        let b = C;
        C < 1 ? b = 1 : C > p.value && (b = p.value), Ke(e.currentPage) && (d.value = b), s && (t("update:current-page", b), t("current-change", b));
      }
    });
    Q(p, (C) => {
      h.value > C && (h.value = C);
    });
    function c(C) {
      h.value = C;
    }
    function g(C) {
      f.value = C;
      const b = p.value;
      h.value > b && (h.value = b);
    }
    function y() {
      e.disabled || (h.value -= 1, t("prev-click", h.value));
    }
    function m() {
      e.disabled || (h.value += 1, t("next-click", h.value));
    }
    function w(C, b) {
      C && (C.props || (C.props = {}), C.props.class = [C.props.class, b].join(" "));
    }
    return st(Ys, {
      pageCount: p,
      disabled: $(() => e.disabled),
      currentPage: h,
      changeEvent: c,
      handleSizeChange: g
    }), () => {
      var C, b;
      if (!i.value)
        return Le(rs, o("el.pagination.deprecationWarning")), null;
      if (!e.layout || e.hideOnSinglePage && p.value <= 1)
        return null;
      const O = [], _ = [], S = te("div", { class: r.e("rightwrapper") }, _), P = {
        prev: te(Ay, {
          disabled: e.disabled,
          currentPage: h.value,
          prevText: e.prevText,
          prevIcon: e.prevIcon,
          onClick: y
        }),
        jumper: te(u1, {
          size: e.small ? "small" : "default"
        }),
        pager: te(E1, {
          currentPage: h.value,
          pageCount: p.value,
          pagerCount: e.pagerCount,
          onChange: c,
          disabled: e.disabled
        }),
        next: te(Fy, {
          disabled: e.disabled,
          currentPage: h.value,
          pageCount: p.value,
          nextText: e.nextText,
          nextIcon: e.nextIcon,
          onClick: m
        }),
        sizes: te(r1, {
          pageSize: f.value,
          pageSizes: e.pageSizes,
          popperClass: e.popperClass,
          disabled: e.disabled,
          size: e.small ? "small" : "default"
        }),
        slot: (b = (C = n == null ? void 0 : n.default) == null ? void 0 : C.call(n)) != null ? b : null,
        total: te(v1, { total: Ke(e.total) ? 0 : e.total })
      }, N = e.layout.split(",").map((j) => j.trim());
      let z = !1;
      return N.forEach((j) => {
        if (j === "->") {
          z = !0;
          return;
        }
        z ? _.push(P[j]) : O.push(P[j]);
      }), w(O[0], r.is("first")), w(O[O.length - 1], r.is("last")), z && _.length > 0 && (w(_[0], r.is("first")), w(_[_.length - 1], r.is("last")), O.push(S)), te("div", {
        role: "pagination",
        "aria-label": "pagination",
        class: [
          r.b(),
          r.is("background", e.background),
          {
            [r.m("small")]: e.small
          }
        ]
      }, O);
    };
  }
});
const T1 = gt(O1);
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
var P1 = /["'&<>]/, k1 = A1;
function A1(e) {
  var t = "" + e, n = P1.exec(t);
  if (!n)
    return t;
  var o, r = "", l = 0, s = 0;
  for (l = n.index; l < t.length; l++) {
    switch (t.charCodeAt(l)) {
      case 34:
        o = "&quot;";
        break;
      case 38:
        o = "&amp;";
        break;
      case 39:
        o = "&#39;";
        break;
      case 60:
        o = "&lt;";
        break;
      case 62:
        o = "&gt;";
        break;
      default:
        continue;
    }
    s !== l && (r += t.substring(s, l)), s = l + 1, r += o;
  }
  return s !== l ? r + t.substring(s, l) : r;
}
const mr = function(e) {
  var t;
  return (t = e.target) == null ? void 0 : t.closest("td");
}, L1 = function(e, t, n, o, r) {
  if (!t && !o && (!r || Array.isArray(r) && !r.length))
    return e;
  typeof n == "string" ? n = n === "descending" ? -1 : 1 : n = n && n < 0 ? -1 : 1;
  const l = o ? null : function(a, i) {
    return r ? (Array.isArray(r) || (r = [r]), r.map((u) => typeof u == "string" ? He(a, u) : u(a, i, e))) : (t !== "$key" && ct(a) && "$value" in a && (a = a.$value), [ct(a) ? He(a, t) : a]);
  }, s = function(a, i) {
    if (o)
      return o(a.value, i.value);
    for (let u = 0, d = a.key.length; u < d; u++) {
      if (a.key[u] < i.key[u])
        return -1;
      if (a.key[u] > i.key[u])
        return 1;
    }
    return 0;
  };
  return e.map((a, i) => ({
    value: a,
    index: i,
    key: l ? l(a, i) : null
  })).sort((a, i) => {
    let u = s(a, i);
    return u || (u = a.index - i.index), u * +n;
  }).map((a) => a.value);
}, Vi = function(e, t) {
  let n = null;
  return e.columns.forEach((o) => {
    o.id === t && (n = o);
  }), n;
}, M1 = function(e, t) {
  let n = null;
  for (let o = 0; o < e.columns.length; o++) {
    const r = e.columns[o];
    if (r.columnKey === t) {
      n = r;
      break;
    }
  }
  return n || Vs("ElTable", `No column matching with column-key: ${t}`), n;
}, ls = function(e, t, n) {
  const o = (t.className || "").match(new RegExp(`${n}-table_[^\\s]+`, "gm"));
  return o ? Vi(e, o[0]) : null;
}, Re = (e, t) => {
  if (!e)
    throw new Error("Row is required when get row identity");
  if (typeof t == "string") {
    if (!t.includes("."))
      return `${e[t]}`;
    const n = t.split(".");
    let o = e;
    for (const r of n)
      o = o[r];
    return `${o}`;
  } else if (typeof t == "function")
    return t.call(null, e);
}, fn = function(e, t) {
  const n = {};
  return (e || []).forEach((o, r) => {
    n[Re(o, t)] = { row: o, index: r };
  }), n;
};
function I1(e, t) {
  const n = {};
  let o;
  for (o in e)
    n[o] = e[o];
  for (o in t)
    if (gn(t, o)) {
      const r = t[o];
      typeof r < "u" && (n[o] = r);
    }
  return n;
}
function Nl(e) {
  return e === "" || e !== void 0 && (e = Number.parseInt(e, 10), Number.isNaN(e) && (e = "")), e;
}
function ji(e) {
  return e === "" || e !== void 0 && (e = Nl(e), Number.isNaN(e) && (e = 80)), e;
}
function N1(e) {
  return typeof e == "number" ? e : typeof e == "string" ? /^\d+(?:px)?$/.test(e) ? Number.parseInt(e, 10) : e : null;
}
function R1(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...o) => t(n(...o)));
}
function eo(e, t, n) {
  let o = !1;
  const r = e.indexOf(t), l = r !== -1, s = (a) => {
    a === "add" ? e.push(t) : e.splice(r, 1), o = !0, mn(t.children) && t.children.forEach((i) => {
      eo(e, i, n ?? !l);
    });
  };
  return In(n) ? n && !l ? s("add") : !n && l && s("remove") : s(l ? "remove" : "add"), o;
}
function F1(e, t, n = "children", o = "hasChildren") {
  const r = (s) => !(Array.isArray(s) && s.length);
  function l(s, a, i) {
    t(s, a, i), a.forEach((u) => {
      if (u[o]) {
        t(u, null, i + 1);
        return;
      }
      const d = u[n];
      r(d) || l(u, d, i + 1);
    });
  }
  e.forEach((s) => {
    if (s[o]) {
      t(s, null, 0);
      return;
    }
    const a = s[n];
    r(a) || l(s, a, 0);
  });
}
let Dt;
function B1(e, t, n, o) {
  o = Fs({
    enterable: !0,
    showArrow: !0
  }, o);
  const { nextZIndex: r } = Tl(), l = e == null ? void 0 : e.dataset.prefix, s = e == null ? void 0 : e.querySelector(`.${l}-scrollbar__wrap`);
  function a() {
    const y = o.effect === "light", m = document.createElement("div");
    return m.className = [
      `${l}-popper`,
      y ? "is-light" : "is-dark",
      o.popperClass || ""
    ].join(" "), n = k1(n), m.innerHTML = n, m.style.zIndex = String(r()), e == null || e.appendChild(m), m;
  }
  function i() {
    const y = document.createElement("div");
    return y.className = `${l}-popper__arrow`, y;
  }
  function u() {
    d && d.update();
  }
  Dt == null || Dt(), Dt = () => {
    try {
      d && d.destroy(), h && (e == null || e.removeChild(h)), t.removeEventListener("mouseenter", f), t.removeEventListener("mouseleave", p), s == null || s.removeEventListener("scroll", Dt), Dt = void 0;
    } catch {
    }
  };
  let d = null, f = u, p = Dt;
  o.enterable && ({ onOpen: f, onClose: p } = hi({
    showAfter: o.showAfter,
    hideAfter: o.hideAfter,
    open: u,
    close: Dt
  }));
  const h = a();
  h.onmouseenter = f, h.onmouseleave = p;
  const c = [];
  if (o.offset && c.push({
    name: "offset",
    options: {
      offset: [0, o.offset]
    }
  }), o.showArrow) {
    const y = h.appendChild(i());
    c.push({
      name: "arrow",
      options: {
        element: y,
        padding: 10
      }
    });
  }
  const g = o.popperOptions || {};
  return d = pi(t, h, {
    placement: o.placement || "top",
    strategy: "fixed",
    ...g,
    modifiers: g.modifiers ? c.concat(g.modifiers) : c
  }), t.addEventListener("mouseenter", f), t.addEventListener("mouseleave", p), s == null || s.addEventListener("scroll", Dt), d;
}
function Ki(e) {
  return e.children ? Up(e.children, Ki) : [e];
}
function as(e, t) {
  return e + t.colSpan;
}
const Ui = (e, t, n, o) => {
  let r = 0, l = e;
  const s = n.states.columns.value;
  if (o) {
    const i = Ki(o[e]);
    r = s.slice(0, s.indexOf(i[0])).reduce(as, 0), l = r + i.reduce(as, 0) - 1;
  } else
    r = e;
  let a;
  switch (t) {
    case "left":
      l < n.states.fixedLeafColumnsLength.value && (a = "left");
      break;
    case "right":
      r >= s.length - n.states.rightFixedLeafColumnsLength.value && (a = "right");
      break;
    default:
      l < n.states.fixedLeafColumnsLength.value ? a = "left" : r >= s.length - n.states.rightFixedLeafColumnsLength.value && (a = "right");
  }
  return a ? {
    direction: a,
    start: r,
    after: l
  } : {};
}, Rl = (e, t, n, o, r, l = 0) => {
  const s = [], { direction: a, start: i, after: u } = Ui(t, n, o, r);
  if (a) {
    const d = a === "left";
    s.push(`${e}-fixed-column--${a}`), d && u + l === o.states.fixedLeafColumnsLength.value - 1 ? s.push("is-last-column") : !d && i - l === o.states.columns.value.length - o.states.rightFixedLeafColumnsLength.value && s.push("is-first-column");
  }
  return s;
};
function ss(e, t) {
  return e + (t.realWidth === null || Number.isNaN(t.realWidth) ? Number(t.width) : t.realWidth);
}
const Fl = (e, t, n, o) => {
  const {
    direction: r,
    start: l = 0,
    after: s = 0
  } = Ui(e, t, n, o);
  if (!r)
    return;
  const a = {}, i = r === "left", u = n.states.columns.value;
  return i ? a.left = u.slice(0, l).reduce(ss, 0) : a.right = u.slice(s + 1).reverse().reduce(ss, 0), a;
}, Wn = (e, t) => {
  e && (Number.isNaN(e[t]) || (e[t] = `${e[t]}px`));
};
function z1(e) {
  const t = Ce(), n = x(!1), o = x([]);
  return {
    updateExpandRows: () => {
      const i = e.data.value || [], u = e.rowKey.value;
      if (n.value)
        o.value = i.slice();
      else if (u) {
        const d = fn(o.value, u);
        o.value = i.reduce((f, p) => {
          const h = Re(p, u);
          return d[h] && f.push(p), f;
        }, []);
      } else
        o.value = [];
    },
    toggleRowExpansion: (i, u) => {
      eo(o.value, i, u) && t.emit("expand-change", i, o.value.slice());
    },
    setExpandRowKeys: (i) => {
      t.store.assertRowKey();
      const u = e.data.value || [], d = e.rowKey.value, f = fn(u, d);
      o.value = i.reduce((p, h) => {
        const c = f[h];
        return c && p.push(c.row), p;
      }, []);
    },
    isRowExpanded: (i) => {
      const u = e.rowKey.value;
      return u ? !!fn(o.value, u)[Re(i, u)] : o.value.includes(i);
    },
    states: {
      expandRows: o,
      defaultExpandAll: n
    }
  };
}
function H1(e) {
  const t = Ce(), n = x(null), o = x(null), r = (u) => {
    t.store.assertRowKey(), n.value = u, s(u);
  }, l = () => {
    n.value = null;
  }, s = (u) => {
    const { data: d, rowKey: f } = e;
    let p = null;
    f.value && (p = (v(d) || []).find((h) => Re(h, f.value) === u)), o.value = p, t.emit("current-change", o.value, null);
  };
  return {
    setCurrentRowKey: r,
    restoreCurrentRowKey: l,
    setCurrentRowByKey: s,
    updateCurrentRow: (u) => {
      const d = o.value;
      if (u && u !== d) {
        o.value = u, t.emit("current-change", o.value, d);
        return;
      }
      !u && d && (o.value = null, t.emit("current-change", null, d));
    },
    updateCurrentRowData: () => {
      const u = e.rowKey.value, d = e.data.value || [], f = o.value;
      if (!d.includes(f) && f) {
        if (u) {
          const p = Re(f, u);
          s(p);
        } else
          o.value = null;
        o.value === null && t.emit("current-change", null, f);
      } else
        n.value && (s(n.value), l());
    },
    states: {
      _currentRowKey: n,
      currentRow: o
    }
  };
}
function D1(e) {
  const t = x([]), n = x({}), o = x(16), r = x(!1), l = x({}), s = x("hasChildren"), a = x("children"), i = Ce(), u = $(() => {
    if (!e.rowKey.value)
      return {};
    const m = e.data.value || [];
    return f(m);
  }), d = $(() => {
    const m = e.rowKey.value, w = Object.keys(l.value), C = {};
    return w.length && w.forEach((b) => {
      if (l.value[b].length) {
        const O = { children: [] };
        l.value[b].forEach((_) => {
          const S = Re(_, m);
          O.children.push(S), _[s.value] && !C[S] && (C[S] = { children: [] });
        }), C[b] = O;
      }
    }), C;
  }), f = (m) => {
    const w = e.rowKey.value, C = {};
    return F1(m, (b, O, _) => {
      const S = Re(b, w);
      Array.isArray(O) ? C[S] = {
        children: O.map((P) => Re(P, w)),
        level: _
      } : r.value && (C[S] = {
        children: [],
        lazy: !0,
        level: _
      });
    }, a.value, s.value), C;
  }, p = (m = !1, w = ((C) => (C = i.store) == null ? void 0 : C.states.defaultExpandAll.value)()) => {
    var C;
    const b = u.value, O = d.value, _ = Object.keys(b), S = {};
    if (_.length) {
      const P = v(n), N = [], z = (D, k) => {
        if (m)
          return t.value ? w || t.value.includes(k) : !!(w || D != null && D.expanded);
        {
          const R = w || t.value && t.value.includes(k);
          return !!(D != null && D.expanded || R);
        }
      };
      _.forEach((D) => {
        const k = P[D], R = { ...b[D] };
        if (R.expanded = z(k, D), R.lazy) {
          const { loaded: M = !1, loading: V = !1 } = k || {};
          R.loaded = !!M, R.loading = !!V, N.push(D);
        }
        S[D] = R;
      });
      const j = Object.keys(O);
      r.value && j.length && N.length && j.forEach((D) => {
        const k = P[D], R = O[D].children;
        if (N.includes(D)) {
          if (S[D].children.length !== 0)
            throw new Error("[ElTable]children must be an empty array.");
          S[D].children = R;
        } else {
          const { loaded: M = !1, loading: V = !1 } = k || {};
          S[D] = {
            lazy: !0,
            loaded: !!M,
            loading: !!V,
            expanded: z(k, D),
            children: R,
            level: ""
          };
        }
      });
    }
    n.value = S, (C = i.store) == null || C.updateTableScrollY();
  };
  Q(() => t.value, () => {
    p(!0);
  }), Q(() => u.value, () => {
    p();
  }), Q(() => d.value, () => {
    p();
  });
  const h = (m) => {
    t.value = m, p();
  }, c = (m, w) => {
    i.store.assertRowKey();
    const C = e.rowKey.value, b = Re(m, C), O = b && n.value[b];
    if (b && O && "expanded" in O) {
      const _ = O.expanded;
      w = typeof w > "u" ? !O.expanded : w, n.value[b].expanded = w, _ !== w && i.emit("expand-change", m, w), i.store.updateTableScrollY();
    }
  }, g = (m) => {
    i.store.assertRowKey();
    const w = e.rowKey.value, C = Re(m, w), b = n.value[C];
    r.value && b && "loaded" in b && !b.loaded ? y(m, C, b) : c(m, void 0);
  }, y = (m, w, C) => {
    const { load: b } = i.props;
    b && !n.value[w].loaded && (n.value[w].loading = !0, b(m, C, (O) => {
      if (!Array.isArray(O))
        throw new TypeError("[ElTable] data must be an array");
      n.value[w].loading = !1, n.value[w].loaded = !0, n.value[w].expanded = !0, O.length && (l.value[w] = O), i.emit("expand-change", m, !0);
    }));
  };
  return {
    loadData: y,
    loadOrToggle: g,
    toggleTreeExpansion: c,
    updateTreeExpandKeys: h,
    updateTreeData: p,
    normalize: f,
    states: {
      expandRowKeys: t,
      treeData: n,
      indent: o,
      lazy: r,
      lazyTreeNodeMap: l,
      lazyColumnIdentifier: s,
      childrenColumnName: a
    }
  };
}
const W1 = (e, t) => {
  const n = t.sortingColumn;
  return !n || typeof n.sortable == "string" ? e : L1(e, t.sortProp, t.sortOrder, n.sortMethod, n.sortBy);
}, Mo = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children ? t.push.apply(t, Mo(n.children)) : t.push(n);
  }), t;
};
function V1() {
  var e;
  const t = Ce(), { size: n } = Vn((e = t.proxy) == null ? void 0 : e.$props), o = x(null), r = x([]), l = x([]), s = x(!1), a = x([]), i = x([]), u = x([]), d = x([]), f = x([]), p = x([]), h = x([]), c = x([]), g = [], y = x(0), m = x(0), w = x(0), C = x(!1), b = x([]), O = x(!1), _ = x(!1), S = x(null), P = x({}), N = x(null), z = x(null), j = x(null), D = x(null), k = x(null);
  Q(r, () => t.state && Z(!1), {
    deep: !0
  });
  const R = () => {
    if (!o.value)
      throw new Error("[ElTable] prop row-key is required");
  }, M = (G) => {
    var ne;
    (ne = G.children) == null || ne.forEach((E) => {
      E.fixed = G.fixed, M(E);
    });
  }, V = () => {
    a.value.forEach((W) => {
      M(W);
    }), d.value = a.value.filter((W) => W.fixed === !0 || W.fixed === "left"), f.value = a.value.filter((W) => W.fixed === "right"), d.value.length > 0 && a.value[0] && a.value[0].type === "selection" && !a.value[0].fixed && (a.value[0].fixed = !0, d.value.unshift(a.value[0]));
    const G = a.value.filter((W) => !W.fixed);
    i.value = [].concat(d.value).concat(G).concat(f.value);
    const ne = Mo(G), E = Mo(d.value), A = Mo(f.value);
    y.value = ne.length, m.value = E.length, w.value = A.length, u.value = [].concat(E).concat(ne).concat(A), s.value = d.value.length > 0 || f.value.length > 0;
  }, Z = (G, ne = !1) => {
    G && V(), ne ? t.state.doLayout() : t.state.debouncedUpdateLayout();
  }, H = (G) => b.value.includes(G), L = () => {
    C.value = !1, b.value.length && (b.value = [], t.emit("selection-change", []));
  }, q = () => {
    let G;
    if (o.value) {
      G = [];
      const ne = fn(b.value, o.value), E = fn(r.value, o.value);
      for (const A in ne)
        gn(ne, A) && !E[A] && G.push(ne[A].row);
    } else
      G = b.value.filter((ne) => !r.value.includes(ne));
    if (G.length) {
      const ne = b.value.filter((E) => !G.includes(E));
      b.value = ne, t.emit("selection-change", ne.slice());
    }
  }, oe = () => (b.value || []).slice(), de = (G, ne = void 0, E = !0) => {
    if (eo(b.value, G, ne)) {
      const W = (b.value || []).slice();
      E && t.emit("select", W, G), t.emit("selection-change", W);
    }
  }, be = () => {
    var G, ne;
    const E = _.value ? !C.value : !(C.value || b.value.length);
    C.value = E;
    let A = !1, W = 0;
    const J = (ne = (G = t == null ? void 0 : t.store) == null ? void 0 : G.states) == null ? void 0 : ne.rowKey.value;
    r.value.forEach((he, Ve) => {
      const Ie = Ve + W;
      S.value ? S.value.call(null, he, Ie) && eo(b.value, he, E) && (A = !0) : eo(b.value, he, E) && (A = !0), W += ye(Re(he, J));
    }), A && t.emit("selection-change", b.value ? b.value.slice() : []), t.emit("select-all", b.value);
  }, ge = () => {
    const G = fn(b.value, o.value);
    r.value.forEach((ne) => {
      const E = Re(ne, o.value), A = G[E];
      A && (b.value[A.index] = ne);
    });
  }, le = () => {
    var G, ne, E;
    if (((G = r.value) == null ? void 0 : G.length) === 0) {
      C.value = !1;
      return;
    }
    let A;
    o.value && (A = fn(b.value, o.value));
    const W = function(Ie) {
      return A ? !!A[Re(Ie, o.value)] : b.value.includes(Ie);
    };
    let J = !0, he = 0, Ve = 0;
    for (let Ie = 0, bt = (r.value || []).length; Ie < bt; Ie++) {
      const Ye = (E = (ne = t == null ? void 0 : t.store) == null ? void 0 : ne.states) == null ? void 0 : E.rowKey.value, En = Ie + Ve, je = r.value[Ie], zt = S.value && S.value.call(null, je, En);
      if (W(je))
        he++;
      else if (!S.value || zt) {
        J = !1;
        break;
      }
      Ve += ye(Re(je, Ye));
    }
    he === 0 && (J = !1), C.value = J;
  }, ye = (G) => {
    var ne;
    if (!t || !t.store)
      return 0;
    const { treeData: E } = t.store.states;
    let A = 0;
    const W = (ne = E.value[G]) == null ? void 0 : ne.children;
    return W && (A += W.length, W.forEach((J) => {
      A += ye(J);
    })), A;
  }, Ee = (G, ne) => {
    Array.isArray(G) || (G = [G]);
    const E = {};
    return G.forEach((A) => {
      P.value[A.id] = ne, E[A.columnKey || A.id] = ne;
    }), E;
  }, ae = (G, ne, E) => {
    z.value && z.value !== G && (z.value.order = null), z.value = G, j.value = ne, D.value = E;
  }, ke = () => {
    let G = v(l);
    Object.keys(P.value).forEach((ne) => {
      const E = P.value[ne];
      if (!E || E.length === 0)
        return;
      const A = Vi({
        columns: u.value
      }, ne);
      A && A.filterMethod && (G = G.filter((W) => E.some((J) => A.filterMethod.call(null, J, W, A))));
    }), N.value = G;
  }, De = () => {
    r.value = W1(N.value, {
      sortingColumn: z.value,
      sortProp: j.value,
      sortOrder: D.value
    });
  }, dt = (G = void 0) => {
    G && G.filter || ke(), De();
  }, Ge = (G) => {
    const { tableHeaderRef: ne } = t.refs;
    if (!ne)
      return;
    const E = Object.assign({}, ne.filterPanels), A = Object.keys(E);
    if (A.length)
      if (typeof G == "string" && (G = [G]), Array.isArray(G)) {
        const W = G.map((J) => M1({
          columns: u.value
        }, J));
        A.forEach((J) => {
          const he = W.find((Ve) => Ve.id === J);
          he && (he.filteredValue = []);
        }), t.store.commit("filterChange", {
          column: W,
          values: [],
          silent: !0,
          multi: !0
        });
      } else
        A.forEach((W) => {
          const J = u.value.find((he) => he.id === W);
          J && (J.filteredValue = []);
        }), P.value = {}, t.store.commit("filterChange", {
          column: {},
          values: [],
          silent: !0
        });
  }, tt = () => {
    z.value && (ae(null, null, null), t.store.commit("changeSortCondition", {
      silent: !0
    }));
  }, {
    setExpandRowKeys: Rt,
    toggleRowExpansion: mt,
    updateExpandRows: nt,
    states: $t,
    isRowExpanded: Ft
  } = z1({
    data: r,
    rowKey: o
  }), {
    updateTreeExpandKeys: We,
    toggleTreeExpansion: Be,
    updateTreeData: ot,
    loadOrToggle: F,
    states: ue
  } = D1({
    data: r,
    rowKey: o
  }), {
    updateCurrentRowData: Me,
    updateCurrentRow: rt,
    setCurrentRowKey: Bt,
    states: xt
  } = H1({
    data: r,
    rowKey: o
  });
  return {
    assertRowKey: R,
    updateColumns: V,
    scheduleLayout: Z,
    isSelected: H,
    clearSelection: L,
    cleanSelection: q,
    getSelectionRows: oe,
    toggleRowSelection: de,
    _toggleAllSelection: be,
    toggleAllSelection: null,
    updateSelectionByRowKey: ge,
    updateAllSelected: le,
    updateFilters: Ee,
    updateCurrentRow: rt,
    updateSort: ae,
    execFilter: ke,
    execSort: De,
    execQuery: dt,
    clearFilter: Ge,
    clearSort: tt,
    toggleRowExpansion: mt,
    setExpandRowKeysAdapter: (G) => {
      Rt(G), We(G);
    },
    setCurrentRowKey: Bt,
    toggleRowExpansionAdapter: (G, ne) => {
      u.value.some(({ type: A }) => A === "expand") ? mt(G, ne) : Be(G, ne);
    },
    isRowExpanded: Ft,
    updateExpandRows: nt,
    updateCurrentRowData: Me,
    loadOrToggle: F,
    updateTreeData: ot,
    states: {
      tableSize: n,
      rowKey: o,
      data: r,
      _data: l,
      isComplex: s,
      _columns: a,
      originColumns: i,
      columns: u,
      fixedColumns: d,
      rightFixedColumns: f,
      leafColumns: p,
      fixedLeafColumns: h,
      rightFixedLeafColumns: c,
      updateOrderFns: g,
      leafColumnsLength: y,
      fixedLeafColumnsLength: m,
      rightFixedLeafColumnsLength: w,
      isAllSelected: C,
      selection: b,
      reserveSelection: O,
      selectOnIndeterminate: _,
      selectable: S,
      filters: P,
      filteredData: N,
      sortingColumn: z,
      sortProp: j,
      sortOrder: D,
      hoverRow: k,
      ...$t,
      ...ue,
      ...xt
    }
  };
}
function Dr(e, t) {
  return e.map((n) => {
    var o;
    return n.id === t.id ? t : ((o = n.children) != null && o.length && (n.children = Dr(n.children, t)), n);
  });
}
function Wr(e) {
  e.forEach((t) => {
    var n, o;
    t.no = (n = t.getColumnIndex) == null ? void 0 : n.call(t), (o = t.children) != null && o.length && Wr(t.children);
  }), e.sort((t, n) => t.no - n.no);
}
function j1() {
  const e = Ce(), t = V1();
  return {
    ns: re("table"),
    ...t,
    mutations: {
      setData(s, a) {
        const i = v(s._data) !== a;
        s.data.value = a, s._data.value = a, e.store.execQuery(), e.store.updateCurrentRowData(), e.store.updateExpandRows(), e.store.updateTreeData(e.store.states.defaultExpandAll.value), v(s.reserveSelection) ? (e.store.assertRowKey(), e.store.updateSelectionByRowKey()) : i ? e.store.clearSelection() : e.store.cleanSelection(), e.store.updateAllSelected(), e.$ready && e.store.scheduleLayout();
      },
      insertColumn(s, a, i, u) {
        const d = v(s._columns);
        let f = [];
        i ? (i && !i.children && (i.children = []), i.children.push(a), f = Dr(d, i)) : (d.push(a), f = d), Wr(f), s._columns.value = f, s.updateOrderFns.push(u), a.type === "selection" && (s.selectable.value = a.selectable, s.reserveSelection.value = a.reserveSelection), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
      },
      updateColumnOrder(s, a) {
        var i;
        ((i = a.getColumnIndex) == null ? void 0 : i.call(a)) !== a.no && (Wr(s._columns.value), e.$ready && e.store.updateColumns());
      },
      removeColumn(s, a, i, u) {
        const d = v(s._columns) || [];
        if (i)
          i.children.splice(i.children.findIndex((p) => p.id === a.id), 1), ce(() => {
            var p;
            ((p = i.children) == null ? void 0 : p.length) === 0 && delete i.children;
          }), s._columns.value = Dr(d, i);
        else {
          const p = d.indexOf(a);
          p > -1 && (d.splice(p, 1), s._columns.value = d);
        }
        const f = s.updateOrderFns.indexOf(u);
        f > -1 && s.updateOrderFns.splice(f, 1), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
      },
      sort(s, a) {
        const { prop: i, order: u, init: d } = a;
        if (i) {
          const f = v(s.columns).find((p) => p.property === i);
          f && (f.order = u, e.store.updateSort(f, i, u), e.store.commit("changeSortCondition", { init: d }));
        }
      },
      changeSortCondition(s, a) {
        const { sortingColumn: i, sortProp: u, sortOrder: d } = s, f = v(i), p = v(u), h = v(d);
        h === null && (s.sortingColumn.value = null, s.sortProp.value = null);
        const c = { filter: !0 };
        e.store.execQuery(c), (!a || !(a.silent || a.init)) && e.emit("sort-change", {
          column: f,
          prop: p,
          order: h
        }), e.store.updateTableScrollY();
      },
      filterChange(s, a) {
        const { column: i, values: u, silent: d } = a, f = e.store.updateFilters(i, u);
        e.store.execQuery(), d || e.emit("filter-change", f), e.store.updateTableScrollY();
      },
      toggleAllSelection() {
        e.store.toggleAllSelection();
      },
      rowSelectedChanged(s, a) {
        e.store.toggleRowSelection(a), e.store.updateAllSelected();
      },
      setHoverRow(s, a) {
        s.hoverRow.value = a;
      },
      setCurrentRow(s, a) {
        e.store.updateCurrentRow(a);
      }
    },
    commit: function(s, ...a) {
      const i = e.store.mutations;
      if (i[s])
        i[s].apply(e, [e.store.states].concat(a));
      else
        throw new Error(`Action not found: ${s}`);
    },
    updateTableScrollY: function() {
      ce(() => e.layout.updateScrollY.apply(e.layout));
    }
  };
}
const to = {
  rowKey: "rowKey",
  defaultExpandAll: "defaultExpandAll",
  selectOnIndeterminate: "selectOnIndeterminate",
  indent: "indent",
  lazy: "lazy",
  data: "data",
  ["treeProps.hasChildren"]: {
    key: "lazyColumnIdentifier",
    default: "hasChildren"
  },
  ["treeProps.children"]: {
    key: "childrenColumnName",
    default: "children"
  }
};
function K1(e, t) {
  if (!e)
    throw new Error("Table is required.");
  const n = j1();
  return n.toggleAllSelection = Mn(n._toggleAllSelection, 10), Object.keys(to).forEach((o) => {
    qi(Gi(t, o), o, n);
  }), U1(n, t), n;
}
function U1(e, t) {
  Object.keys(to).forEach((n) => {
    Q(() => Gi(t, n), (o) => {
      qi(o, n, e);
    });
  });
}
function qi(e, t, n) {
  let o = e, r = to[t];
  typeof to[t] == "object" && (r = r.key, o = o || to[t].default), n.states[r].value = o;
}
function Gi(e, t) {
  if (t.includes(".")) {
    const n = t.split(".");
    let o = e;
    return n.forEach((r) => {
      o = o[r];
    }), o;
  } else
    return e[t];
}
class q1 {
  constructor(t) {
    this.observers = [], this.table = null, this.store = null, this.columns = [], this.fit = !0, this.showHeader = !0, this.height = x(null), this.scrollX = x(!1), this.scrollY = x(!1), this.bodyWidth = x(null), this.fixedWidth = x(null), this.rightFixedWidth = x(null), this.gutterWidth = 0;
    for (const n in t)
      gn(t, n) && (vn(this[n]) ? this[n].value = t[n] : this[n] = t[n]);
    if (!this.table)
      throw new Error("Table is required for Table Layout");
    if (!this.store)
      throw new Error("Store is required for Table Layout");
  }
  updateScrollY() {
    if (this.height.value === null)
      return !1;
    const n = this.table.refs.scrollBarRef;
    if (this.table.vnode.el && (n != null && n.wrapRef)) {
      let o = !0;
      const r = this.scrollY.value;
      return o = n.wrapRef.scrollHeight > n.wrapRef.clientHeight, this.scrollY.value = o, r !== o;
    }
    return !1;
  }
  setHeight(t, n = "height") {
    if (!$e)
      return;
    const o = this.table.vnode.el;
    if (t = N1(t), this.height.value = Number(t), !o && (t || t === 0))
      return ce(() => this.setHeight(t, n));
    typeof t == "number" ? (o.style[n] = `${t}px`, this.updateElsHeight()) : typeof t == "string" && (o.style[n] = t, this.updateElsHeight());
  }
  setMaxHeight(t) {
    this.setHeight(t, "max-height");
  }
  getFlattenColumns() {
    const t = [];
    return this.table.store.states.columns.value.forEach((o) => {
      o.isColumnGroup ? t.push.apply(t, o.columns) : t.push(o);
    }), t;
  }
  updateElsHeight() {
    this.updateScrollY(), this.notifyObservers("scrollable");
  }
  headerDisplayNone(t) {
    if (!t)
      return !0;
    let n = t;
    for (; n.tagName !== "DIV"; ) {
      if (getComputedStyle(n).display === "none")
        return !0;
      n = n.parentElement;
    }
    return !1;
  }
  updateColumnsWidth() {
    if (!$e)
      return;
    const t = this.fit, n = this.table.vnode.el.clientWidth;
    let o = 0;
    const r = this.getFlattenColumns(), l = r.filter((i) => typeof i.width != "number");
    if (r.forEach((i) => {
      typeof i.width == "number" && i.realWidth && (i.realWidth = null);
    }), l.length > 0 && t) {
      if (r.forEach((i) => {
        o += Number(i.width || i.minWidth || 80);
      }), o <= n) {
        this.scrollX.value = !1;
        const i = n - o;
        if (l.length === 1)
          l[0].realWidth = Number(l[0].minWidth || 80) + i;
        else {
          const u = l.reduce((p, h) => p + Number(h.minWidth || 80), 0), d = i / u;
          let f = 0;
          l.forEach((p, h) => {
            if (h === 0)
              return;
            const c = Math.floor(Number(p.minWidth || 80) * d);
            f += c, p.realWidth = Number(p.minWidth || 80) + c;
          }), l[0].realWidth = Number(l[0].minWidth || 80) + i - f;
        }
      } else
        this.scrollX.value = !0, l.forEach((i) => {
          i.realWidth = Number(i.minWidth);
        });
      this.bodyWidth.value = Math.max(o, n), this.table.state.resizeState.value.width = this.bodyWidth.value;
    } else
      r.forEach((i) => {
        !i.width && !i.minWidth ? i.realWidth = 80 : i.realWidth = Number(i.width || i.minWidth), o += i.realWidth;
      }), this.scrollX.value = o > n, this.bodyWidth.value = o;
    const s = this.store.states.fixedColumns.value;
    if (s.length > 0) {
      let i = 0;
      s.forEach((u) => {
        i += Number(u.realWidth || u.width);
      }), this.fixedWidth.value = i;
    }
    const a = this.store.states.rightFixedColumns.value;
    if (a.length > 0) {
      let i = 0;
      a.forEach((u) => {
        i += Number(u.realWidth || u.width);
      }), this.rightFixedWidth.value = i;
    }
    this.notifyObservers("columns");
  }
  addObserver(t) {
    this.observers.push(t);
  }
  removeObserver(t) {
    const n = this.observers.indexOf(t);
    n !== -1 && this.observers.splice(n, 1);
  }
  notifyObservers(t) {
    this.observers.forEach((o) => {
      var r, l;
      switch (t) {
        case "columns":
          (r = o.state) == null || r.onColumnsChange(this);
          break;
        case "scrollable":
          (l = o.state) == null || l.onScrollableChange(this);
          break;
        default:
          throw new Error(`Table Layout don't have event ${t}.`);
      }
    });
  }
}
const { CheckboxGroup: G1 } = Dn, Y1 = K({
  name: "ElTableFilterPanel",
  components: {
    ElCheckbox: Dn,
    ElCheckboxGroup: G1,
    ElScrollbar: Pl,
    ElTooltip: Ei,
    ElIcon: Ne,
    ArrowDown: cl,
    ArrowUp: Ks
  },
  directives: { ClickOutside: Oi },
  props: {
    placement: {
      type: String,
      default: "bottom-start"
    },
    store: {
      type: Object
    },
    column: {
      type: Object
    },
    upDataColumn: {
      type: Function
    }
  },
  setup(e) {
    const t = Ce(), { t: n } = It(), o = re("table-filter"), r = t == null ? void 0 : t.parent;
    r.filterPanels.value[e.column.id] || (r.filterPanels.value[e.column.id] = t);
    const l = x(!1), s = x(null), a = $(() => e.column && e.column.filters), i = $({
      get: () => {
        var b;
        return (((b = e.column) == null ? void 0 : b.filteredValue) || [])[0];
      },
      set: (b) => {
        u.value && (typeof b < "u" && b !== null ? u.value.splice(0, 1, b) : u.value.splice(0, 1));
      }
    }), u = $({
      get() {
        return e.column ? e.column.filteredValue || [] : [];
      },
      set(b) {
        e.column && e.upDataColumn("filteredValue", b);
      }
    }), d = $(() => e.column ? e.column.filterMultiple : !0), f = (b) => b.value === i.value, p = () => {
      l.value = !1;
    }, h = (b) => {
      b.stopPropagation(), l.value = !l.value;
    }, c = () => {
      l.value = !1;
    }, g = () => {
      w(u.value), p();
    }, y = () => {
      u.value = [], w(u.value), p();
    }, m = (b) => {
      i.value = b, w(typeof b < "u" && b !== null ? u.value : []), p();
    }, w = (b) => {
      e.store.commit("filterChange", {
        column: e.column,
        values: b
      }), e.store.updateAllSelected();
    };
    Q(l, (b) => {
      e.column && e.upDataColumn("filterOpened", b);
    }, {
      immediate: !0
    });
    const C = $(() => {
      var b, O;
      return (O = (b = s.value) == null ? void 0 : b.popperRef) == null ? void 0 : O.contentRef;
    });
    return {
      tooltipVisible: l,
      multiple: d,
      filteredValue: u,
      filterValue: i,
      filters: a,
      handleConfirm: g,
      handleReset: y,
      handleSelect: m,
      isActive: f,
      t: n,
      ns: o,
      showFilterPanel: h,
      hideFilterPanel: c,
      popperPaneRef: C,
      tooltip: s
    };
  }
}), X1 = { key: 0 }, Q1 = ["disabled"], Z1 = ["label", "onClick"];
function J1(e, t, n, o, r, l) {
  const s = Ae("el-checkbox"), a = Ae("el-checkbox-group"), i = Ae("el-scrollbar"), u = Ae("arrow-up"), d = Ae("arrow-down"), f = Ae("el-icon"), p = Ae("el-tooltip"), h = Xr("click-outside");
  return T(), Y(p, {
    ref: "tooltip",
    visible: e.tooltipVisible,
    offset: 0,
    placement: e.placement,
    "show-arrow": !1,
    "stop-popper-mouse-event": !1,
    teleported: "",
    effect: "light",
    pure: "",
    "popper-class": e.ns.b(),
    persistent: ""
  }, {
    content: ee(() => [
      e.multiple ? (T(), B("div", X1, [
        U("div", {
          class: I(e.ns.e("content"))
        }, [
          fe(i, {
            "wrap-class": e.ns.e("wrap")
          }, {
            default: ee(() => [
              fe(a, {
                modelValue: e.filteredValue,
                "onUpdate:modelValue": t[0] || (t[0] = (c) => e.filteredValue = c),
                class: I(e.ns.e("checkbox-group"))
              }, {
                default: ee(() => [
                  (T(!0), B(Ue, null, Ln(e.filters, (c) => (T(), Y(s, {
                    key: c.value,
                    label: c.value
                  }, {
                    default: ee(() => [
                      Uo(we(c.text), 1)
                    ]),
                    _: 2
                  }, 1032, ["label"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "class"])
            ]),
            _: 1
          }, 8, ["wrap-class"])
        ], 2),
        U("div", {
          class: I(e.ns.e("bottom"))
        }, [
          U("button", {
            class: I({ [e.ns.is("disabled")]: e.filteredValue.length === 0 }),
            disabled: e.filteredValue.length === 0,
            type: "button",
            onClick: t[1] || (t[1] = (...c) => e.handleConfirm && e.handleConfirm(...c))
          }, we(e.t("el.table.confirmFilter")), 11, Q1),
          U("button", {
            type: "button",
            onClick: t[2] || (t[2] = (...c) => e.handleReset && e.handleReset(...c))
          }, we(e.t("el.table.resetFilter")), 1)
        ], 2)
      ])) : (T(), B("ul", {
        key: 1,
        class: I(e.ns.e("list"))
      }, [
        U("li", {
          class: I([
            e.ns.e("list-item"),
            {
              [e.ns.is("active")]: e.filterValue === void 0 || e.filterValue === null
            }
          ]),
          onClick: t[3] || (t[3] = (c) => e.handleSelect(null))
        }, we(e.t("el.table.clearFilter")), 3),
        (T(!0), B(Ue, null, Ln(e.filters, (c) => (T(), B("li", {
          key: c.value,
          class: I([e.ns.e("list-item"), e.ns.is("active", e.isActive(c))]),
          label: c.value,
          onClick: (g) => e.handleSelect(c.value)
        }, we(c.text), 11, Z1))), 128))
      ], 2))
    ]),
    default: ee(() => [
      Oe((T(), B("span", {
        class: I([
          `${e.ns.namespace.value}-table__column-filter-trigger`,
          `${e.ns.namespace.value}-none-outline`
        ]),
        onClick: t[4] || (t[4] = (...c) => e.showFilterPanel && e.showFilterPanel(...c))
      }, [
        fe(f, null, {
          default: ee(() => [
            e.column.filterOpened ? (T(), Y(u, { key: 0 })) : (T(), Y(d, { key: 1 }))
          ]),
          _: 1
        })
      ], 2)), [
        [h, e.hideFilterPanel, e.popperPaneRef]
      ])
    ]),
    _: 1
  }, 8, ["visible", "placement", "popper-class"]);
}
var ew = /* @__PURE__ */ pe(Y1, [["render", J1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/filter-panel.vue"]]);
function Yi(e) {
  const t = Ce();
  Gr(() => {
    n.value.addObserver(t);
  }), Pe(() => {
    o(n.value), r(n.value);
  }), Yr(() => {
    o(n.value), r(n.value);
  }), jo(() => {
    n.value.removeObserver(t);
  });
  const n = $(() => {
    const l = e.layout;
    if (!l)
      throw new Error("Can not find table layout.");
    return l;
  }), o = (l) => {
    var s;
    const a = ((s = e.vnode.el) == null ? void 0 : s.querySelectorAll("colgroup > col")) || [];
    if (!a.length)
      return;
    const i = l.getFlattenColumns(), u = {};
    i.forEach((d) => {
      u[d.id] = d;
    });
    for (let d = 0, f = a.length; d < f; d++) {
      const p = a[d], h = p.getAttribute("name"), c = u[h];
      c && p.setAttribute("width", c.realWidth || c.width);
    }
  }, r = (l) => {
    var s, a;
    const i = ((s = e.vnode.el) == null ? void 0 : s.querySelectorAll("colgroup > col[name=gutter]")) || [];
    for (let d = 0, f = i.length; d < f; d++)
      i[d].setAttribute("width", l.scrollY.value ? l.gutterWidth : "0");
    const u = ((a = e.vnode.el) == null ? void 0 : a.querySelectorAll("th.gutter")) || [];
    for (let d = 0, f = u.length; d < f; d++) {
      const p = u[d];
      p.style.width = l.scrollY.value ? `${l.gutterWidth}px` : "0", p.style.display = l.scrollY.value ? "" : "none";
    }
  };
  return {
    tableLayout: n.value,
    onColumnsChange: o,
    onScrollableChange: r
  };
}
const Nt = Symbol("ElTable");
function tw(e, t) {
  const n = Ce(), o = ie(Nt), r = (g) => {
    g.stopPropagation();
  }, l = (g, y) => {
    !y.filters && y.sortable ? c(g, y, !1) : y.filterable && !y.sortable && r(g), o == null || o.emit("header-click", y, g);
  }, s = (g, y) => {
    o == null || o.emit("header-contextmenu", y, g);
  }, a = x(null), i = x(!1), u = x({}), d = (g, y) => {
    if ($e && !(y.children && y.children.length > 0) && a.value && e.border) {
      i.value = !0;
      const m = o;
      t("set-drag-visible", !0);
      const C = (m == null ? void 0 : m.vnode.el).getBoundingClientRect().left, b = n.vnode.el.querySelector(`th.${y.id}`), O = b.getBoundingClientRect(), _ = O.left - C + 30;
      Do(b, "noclick"), u.value = {
        startMouseLeft: g.clientX,
        startLeft: O.right - C,
        startColumnLeft: O.left - C,
        tableLeft: C
      };
      const S = m == null ? void 0 : m.refs.resizeProxy;
      S.style.left = `${u.value.startLeft}px`, document.onselectstart = function() {
        return !1;
      }, document.ondragstart = function() {
        return !1;
      };
      const P = (z) => {
        const j = z.clientX - u.value.startMouseLeft, D = u.value.startLeft + j;
        S.style.left = `${Math.max(_, D)}px`;
      }, N = () => {
        if (i.value) {
          const { startColumnLeft: z, startLeft: j } = u.value, k = Number.parseInt(S.style.left, 10) - z;
          y.width = y.realWidth = k, m == null || m.emit("header-dragend", y.width, j - z, y, g), requestAnimationFrame(() => {
            e.store.scheduleLayout(!1, !0);
          }), document.body.style.cursor = "", i.value = !1, a.value = null, u.value = {}, t("set-drag-visible", !1);
        }
        document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", N), document.onselectstart = null, document.ondragstart = null, setTimeout(() => {
          bn(b, "noclick");
        }, 0);
      };
      document.addEventListener("mousemove", P), document.addEventListener("mouseup", N);
    }
  }, f = (g, y) => {
    var m;
    if (y.children && y.children.length > 0)
      return;
    const w = (m = g.target) == null ? void 0 : m.closest("th");
    if (!(!y || !y.resizable) && !i.value && e.border) {
      const C = w.getBoundingClientRect(), b = document.body.style;
      C.width > 12 && C.right - g.pageX < 8 ? (b.cursor = "col-resize", Oo(w, "is-sortable") && (w.style.cursor = "col-resize"), a.value = y) : i.value || (b.cursor = "", Oo(w, "is-sortable") && (w.style.cursor = "pointer"), a.value = null);
    }
  }, p = () => {
    $e && (document.body.style.cursor = "");
  }, h = ({ order: g, sortOrders: y }) => {
    if (g === "")
      return y[0];
    const m = y.indexOf(g || null);
    return y[m > y.length - 2 ? 0 : m + 1];
  }, c = (g, y, m) => {
    var w;
    g.stopPropagation();
    const C = y.order === m ? null : m || h(y), b = (w = g.target) == null ? void 0 : w.closest("th");
    if (b && Oo(b, "noclick")) {
      bn(b, "noclick");
      return;
    }
    if (!y.sortable)
      return;
    const O = e.store.states;
    let _ = O.sortProp.value, S;
    const P = O.sortingColumn.value;
    (P !== y || P === y && P.order === null) && (P && (P.order = null), O.sortingColumn.value = y, _ = y.property), C ? S = y.order = C : S = y.order = null, O.sortProp.value = _, O.sortOrder.value = S, o == null || o.store.commit("changeSortCondition");
  };
  return {
    handleHeaderClick: l,
    handleHeaderContextMenu: s,
    handleMouseDown: d,
    handleMouseMove: f,
    handleMouseOut: p,
    handleSortClick: c,
    handleFilterClick: r
  };
}
function nw(e) {
  const t = ie(Nt), n = re("table");
  return {
    getHeaderRowStyle: (a) => {
      const i = t == null ? void 0 : t.props.headerRowStyle;
      return typeof i == "function" ? i.call(null, { rowIndex: a }) : i;
    },
    getHeaderRowClass: (a) => {
      const i = [], u = t == null ? void 0 : t.props.headerRowClassName;
      return typeof u == "string" ? i.push(u) : typeof u == "function" && i.push(u.call(null, { rowIndex: a })), i.join(" ");
    },
    getHeaderCellStyle: (a, i, u, d) => {
      var f;
      let p = (f = t == null ? void 0 : t.props.headerCellStyle) != null ? f : {};
      typeof p == "function" && (p = p.call(null, {
        rowIndex: a,
        columnIndex: i,
        row: u,
        column: d
      }));
      const h = Fl(i, d.fixed, e.store, u);
      return Wn(h, "left"), Wn(h, "right"), Object.assign({}, p, h);
    },
    getHeaderCellClass: (a, i, u, d) => {
      const f = Rl(n.b(), i, d.fixed, e.store, u), p = [
        d.id,
        d.order,
        d.headerAlign,
        d.className,
        d.labelClassName,
        ...f
      ];
      d.children || p.push("is-leaf"), d.sortable && p.push("is-sortable");
      const h = t == null ? void 0 : t.props.headerCellClassName;
      return typeof h == "string" ? p.push(h) : typeof h == "function" && p.push(h.call(null, {
        rowIndex: a,
        columnIndex: i,
        row: u,
        column: d
      })), p.push(n.e("cell")), p.filter((c) => Boolean(c)).join(" ");
    }
  };
}
const Xi = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children ? (t.push(n), t.push.apply(t, Xi(n.children))) : t.push(n);
  }), t;
}, ow = (e) => {
  let t = 1;
  const n = (l, s) => {
    if (s && (l.level = s.level + 1, t < l.level && (t = l.level)), l.children) {
      let a = 0;
      l.children.forEach((i) => {
        n(i, l), a += i.colSpan;
      }), l.colSpan = a;
    } else
      l.colSpan = 1;
  };
  e.forEach((l) => {
    l.level = 1, n(l, void 0);
  });
  const o = [];
  for (let l = 0; l < t; l++)
    o.push([]);
  return Xi(e).forEach((l) => {
    l.children ? (l.rowSpan = 1, l.children.forEach((s) => s.isSubColumn = !0)) : l.rowSpan = t - l.level + 1, o[l.level - 1].push(l);
  }), o;
};
function rw(e) {
  const t = ie(Nt), n = $(() => ow(e.store.states.originColumns.value));
  return {
    isGroup: $(() => {
      const l = n.value.length > 1;
      return l && t && (t.state.isGroup.value = !0), l;
    }),
    toggleAllSelection: (l) => {
      l.stopPropagation(), t == null || t.store.commit("toggleAllSelection");
    },
    columnRows: n
  };
}
var lw = K({
  name: "ElTableHeader",
  components: {
    ElCheckbox: Dn
  },
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: !0,
      type: Object
    },
    border: Boolean,
    defaultSort: {
      type: Object,
      default: () => ({
        prop: "",
        order: ""
      })
    }
  },
  setup(e, { emit: t }) {
    const n = Ce(), o = ie(Nt), r = re("table"), l = x({}), { onColumnsChange: s, onScrollableChange: a } = Yi(o);
    Pe(async () => {
      await ce(), await ce();
      const { prop: _, order: S } = e.defaultSort;
      o == null || o.store.commit("sort", { prop: _, order: S, init: !0 });
    });
    const {
      handleHeaderClick: i,
      handleHeaderContextMenu: u,
      handleMouseDown: d,
      handleMouseMove: f,
      handleMouseOut: p,
      handleSortClick: h,
      handleFilterClick: c
    } = tw(e, t), {
      getHeaderRowStyle: g,
      getHeaderRowClass: y,
      getHeaderCellStyle: m,
      getHeaderCellClass: w
    } = nw(e), { isGroup: C, toggleAllSelection: b, columnRows: O } = rw(e);
    return n.state = {
      onColumnsChange: s,
      onScrollableChange: a
    }, n.filterPanels = l, {
      ns: r,
      filterPanels: l,
      onColumnsChange: s,
      onScrollableChange: a,
      columnRows: O,
      getHeaderRowClass: y,
      getHeaderRowStyle: g,
      getHeaderCellClass: w,
      getHeaderCellStyle: m,
      handleHeaderClick: i,
      handleHeaderContextMenu: u,
      handleMouseDown: d,
      handleMouseMove: f,
      handleMouseOut: p,
      handleSortClick: h,
      handleFilterClick: c,
      isGroup: C,
      toggleAllSelection: b
    };
  },
  render() {
    const {
      ns: e,
      isGroup: t,
      columnRows: n,
      getHeaderCellStyle: o,
      getHeaderCellClass: r,
      getHeaderRowClass: l,
      getHeaderRowStyle: s,
      handleHeaderClick: a,
      handleHeaderContextMenu: i,
      handleMouseDown: u,
      handleMouseMove: d,
      handleSortClick: f,
      handleMouseOut: p,
      store: h,
      $parent: c
    } = this;
    let g = 1;
    return te("thead", {
      class: { [e.is("group")]: t }
    }, n.map((y, m) => te("tr", {
      class: l(m),
      key: m,
      style: s(m)
    }, y.map((w, C) => (w.rowSpan > g && (g = w.rowSpan), te("th", {
      class: r(m, C, y, w),
      colspan: w.colSpan,
      key: `${w.id}-thead`,
      rowspan: w.rowSpan,
      style: o(m, C, y, w),
      onClick: (b) => a(b, w),
      onContextmenu: (b) => i(b, w),
      onMousedown: (b) => u(b, w),
      onMousemove: (b) => d(b, w),
      onMouseout: p
    }, [
      te("div", {
        class: [
          "cell",
          w.filteredValue && w.filteredValue.length > 0 ? "highlight" : ""
        ]
      }, [
        w.renderHeader ? w.renderHeader({
          column: w,
          $index: C,
          store: h,
          _self: c
        }) : w.label,
        w.sortable && te("span", {
          onClick: (b) => f(b, w),
          class: "caret-wrapper"
        }, [
          te("i", {
            onClick: (b) => f(b, w, "ascending"),
            class: "sort-caret ascending"
          }),
          te("i", {
            onClick: (b) => f(b, w, "descending"),
            class: "sort-caret descending"
          })
        ]),
        w.filterable && te(ew, {
          store: h,
          placement: w.filterPlacement || "bottom-start",
          column: w,
          upDataColumn: (b, O) => {
            w[b] = O;
          }
        })
      ])
    ]))))));
  }
});
function aw(e) {
  const t = ie(Nt), n = x(""), o = x(te("div")), r = (p, h, c) => {
    var g;
    const y = t, m = mr(p);
    let w;
    const C = (g = y == null ? void 0 : y.vnode.el) == null ? void 0 : g.dataset.prefix;
    m && (w = ls({
      columns: e.store.states.columns.value
    }, m, C), w && (y == null || y.emit(`cell-${c}`, h, w, m, p))), y == null || y.emit(`row-${c}`, h, w, p);
  }, l = (p, h) => {
    r(p, h, "dblclick");
  }, s = (p, h) => {
    e.store.commit("setCurrentRow", h), r(p, h, "click");
  }, a = (p, h) => {
    r(p, h, "contextmenu");
  }, i = Mn((p) => {
    e.store.commit("setHoverRow", p);
  }, 30), u = Mn(() => {
    e.store.commit("setHoverRow", null);
  }, 30);
  return {
    handleDoubleClick: l,
    handleClick: s,
    handleContextMenu: a,
    handleMouseEnter: i,
    handleMouseLeave: u,
    handleCellMouseEnter: (p, h, c) => {
      var g;
      const y = t, m = mr(p), w = (g = y == null ? void 0 : y.vnode.el) == null ? void 0 : g.dataset.prefix;
      if (m) {
        const S = ls({
          columns: e.store.states.columns.value
        }, m, w), P = y.hoverState = { cell: m, column: S, row: h };
        y == null || y.emit("cell-mouse-enter", P.row, P.column, P.cell, p);
      }
      if (!c)
        return;
      const C = p.target.querySelector(".cell");
      if (!(Oo(C, `${w}-tooltip`) && C.childNodes.length))
        return;
      const b = document.createRange();
      b.setStart(C, 0), b.setEnd(C, C.childNodes.length);
      const O = Math.round(b.getBoundingClientRect().width), _ = (Number.parseInt(un(C, "paddingLeft"), 10) || 0) + (Number.parseInt(un(C, "paddingRight"), 10) || 0);
      (O + _ > C.offsetWidth || C.scrollWidth > C.offsetWidth) && B1(t == null ? void 0 : t.refs.tableWrapper, m, m.innerText || m.textContent, c);
    },
    handleCellMouseLeave: (p) => {
      if (!mr(p))
        return;
      const c = t == null ? void 0 : t.hoverState;
      t == null || t.emit("cell-mouse-leave", c == null ? void 0 : c.row, c == null ? void 0 : c.column, c == null ? void 0 : c.cell, p);
    },
    tooltipContent: n,
    tooltipTrigger: o
  };
}
function sw(e) {
  const t = ie(Nt), n = re("table");
  return {
    getRowStyle: (u, d) => {
      const f = t == null ? void 0 : t.props.rowStyle;
      return typeof f == "function" ? f.call(null, {
        row: u,
        rowIndex: d
      }) : f || null;
    },
    getRowClass: (u, d) => {
      const f = [n.e("row")];
      t != null && t.props.highlightCurrentRow && u === e.store.states.currentRow.value && f.push("current-row"), e.stripe && d % 2 === 1 && f.push(n.em("row", "striped"));
      const p = t == null ? void 0 : t.props.rowClassName;
      return typeof p == "string" ? f.push(p) : typeof p == "function" && f.push(p.call(null, {
        row: u,
        rowIndex: d
      })), f;
    },
    getCellStyle: (u, d, f, p) => {
      const h = t == null ? void 0 : t.props.cellStyle;
      let c = h ?? {};
      typeof h == "function" && (c = h.call(null, {
        rowIndex: u,
        columnIndex: d,
        row: f,
        column: p
      }));
      const g = Fl(d, e == null ? void 0 : e.fixed, e.store);
      return Wn(g, "left"), Wn(g, "right"), Object.assign({}, c, g);
    },
    getCellClass: (u, d, f, p, h) => {
      const c = Rl(n.b(), d, e == null ? void 0 : e.fixed, e.store, void 0, h), g = [p.id, p.align, p.className, ...c], y = t == null ? void 0 : t.props.cellClassName;
      return typeof y == "string" ? g.push(y) : typeof y == "function" && g.push(y.call(null, {
        rowIndex: u,
        columnIndex: d,
        row: f,
        column: p
      })), g.push(n.e("cell")), g.filter((m) => Boolean(m)).join(" ");
    },
    getSpan: (u, d, f, p) => {
      let h = 1, c = 1;
      const g = t == null ? void 0 : t.props.spanMethod;
      if (typeof g == "function") {
        const y = g({
          row: u,
          column: d,
          rowIndex: f,
          columnIndex: p
        });
        Array.isArray(y) ? (h = y[0], c = y[1]) : typeof y == "object" && (h = y.rowspan, c = y.colspan);
      }
      return { rowspan: h, colspan: c };
    },
    getColspanRealWidth: (u, d, f) => {
      if (d < 1)
        return u[f].realWidth;
      const p = u.map(({ realWidth: h, width: c }) => h || c).slice(f, f + d);
      return Number(p.reduce((h, c) => Number(h) + Number(c), -1));
    }
  };
}
function iw(e) {
  const t = ie(Nt), n = re("table"), {
    handleDoubleClick: o,
    handleClick: r,
    handleContextMenu: l,
    handleMouseEnter: s,
    handleMouseLeave: a,
    handleCellMouseEnter: i,
    handleCellMouseLeave: u,
    tooltipContent: d,
    tooltipTrigger: f
  } = aw(e), {
    getRowStyle: p,
    getRowClass: h,
    getCellStyle: c,
    getCellClass: g,
    getSpan: y,
    getColspanRealWidth: m
  } = sw(e), w = $(() => e.store.states.columns.value.findIndex(({ type: S }) => S === "default")), C = (S, P) => {
    const N = t.props.rowKey;
    return N ? Re(S, N) : P;
  }, b = (S, P, N, z = !1) => {
    const { tooltipEffect: j, tooltipOptions: D, store: k } = e, { indent: R, columns: M } = k.states, V = h(S, P);
    let Z = !0;
    return N && (V.push(n.em("row", `level-${N.level}`)), Z = N.display), te("tr", {
      style: [Z ? null : {
        display: "none"
      }, p(S, P)],
      class: V,
      key: C(S, P),
      onDblclick: (L) => o(L, S),
      onClick: (L) => r(L, S),
      onContextmenu: (L) => l(L, S),
      onMouseenter: () => s(P),
      onMouseleave: a
    }, M.value.map((L, q) => {
      const { rowspan: oe, colspan: de } = y(S, L, P, q);
      if (!oe || !de)
        return null;
      const be = { ...L };
      be.realWidth = m(M.value, de, q);
      const ge = {
        store: e.store,
        _self: e.context || t,
        column: be,
        row: S,
        $index: P,
        cellIndex: q,
        expanded: z
      };
      q === w.value && N && (ge.treeNode = {
        indent: N.level * R.value,
        level: N.level
      }, typeof N.expanded == "boolean" && (ge.treeNode.expanded = N.expanded, "loading" in N && (ge.treeNode.loading = N.loading), "noLazyChildren" in N && (ge.treeNode.noLazyChildren = N.noLazyChildren)));
      const le = `${P},${q}`, ye = be.columnKey || be.rawColumnKey || "", Ee = O(q, L, ge), ae = L.showOverflowTooltip && Fs({
        effect: j
      }, D, L.showOverflowTooltip);
      return te("td", {
        style: c(P, q, S, L),
        class: g(P, q, S, L, de - 1),
        key: `${ye}${le}`,
        rowspan: oe,
        colspan: de,
        onMouseenter: (ke) => i(ke, S, ae),
        onMouseleave: u
      }, [Ee]);
    }));
  }, O = (S, P, N) => P.renderCell(N);
  return {
    wrappedRowRender: (S, P) => {
      const N = e.store, { isRowExpanded: z, assertRowKey: j } = N, { treeData: D, lazyTreeNodeMap: k, childrenColumnName: R, rowKey: M } = N.states, V = N.states.columns.value;
      if (V.some(({ type: H }) => H === "expand")) {
        const H = z(S), L = b(S, P, void 0, H), q = t.renderExpanded;
        return H ? q ? [
          [
            L,
            te("tr", {
              key: `expanded-row__${L.key}`
            }, [
              te("td", {
                colspan: V.length,
                class: `${n.e("cell")} ${n.e("expanded-cell")}`
              }, [q({ row: S, $index: P, store: N, expanded: H })])
            ])
          ]
        ] : (console.error("[Element Error]renderExpanded is required."), L) : [[L]];
      } else if (Object.keys(D.value).length) {
        j();
        const H = Re(S, M.value);
        let L = D.value[H], q = null;
        L && (q = {
          expanded: L.expanded,
          level: L.level,
          display: !0
        }, typeof L.lazy == "boolean" && (typeof L.loaded == "boolean" && L.loaded && (q.noLazyChildren = !(L.children && L.children.length)), q.loading = L.loading));
        const oe = [b(S, P, q)];
        if (L) {
          let de = 0;
          const be = (le, ye) => {
            le && le.length && ye && le.forEach((Ee) => {
              const ae = {
                display: ye.display && ye.expanded,
                level: ye.level + 1,
                expanded: !1,
                noLazyChildren: !1,
                loading: !1
              }, ke = Re(Ee, M.value);
              if (ke == null)
                throw new Error("For nested data item, row-key is required.");
              if (L = { ...D.value[ke] }, L && (ae.expanded = L.expanded, L.level = L.level || ae.level, L.display = !!(L.expanded && ae.display), typeof L.lazy == "boolean" && (typeof L.loaded == "boolean" && L.loaded && (ae.noLazyChildren = !(L.children && L.children.length)), ae.loading = L.loading)), de++, oe.push(b(Ee, P + de, ae)), L) {
                const De = k.value[ke] || Ee[R.value];
                be(De, L);
              }
            });
          };
          L.display = !0;
          const ge = k.value[H] || S[R.value];
          be(ge, L);
        }
        return oe;
      } else
        return b(S, P, void 0);
    },
    tooltipContent: d,
    tooltipTrigger: f
  };
}
const uw = {
  store: {
    required: !0,
    type: Object
  },
  stripe: Boolean,
  tooltipEffect: String,
  tooltipOptions: {
    type: Object
  },
  context: {
    default: () => ({}),
    type: Object
  },
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  fixed: {
    type: String,
    default: ""
  },
  highlight: Boolean
};
var cw = K({
  name: "ElTableBody",
  props: uw,
  setup(e) {
    const t = Ce(), n = ie(Nt), o = re("table"), { wrappedRowRender: r, tooltipContent: l, tooltipTrigger: s } = iw(e), { onColumnsChange: a, onScrollableChange: i } = Yi(n);
    return Q(e.store.states.hoverRow, (u, d) => {
      if (!e.store.states.isComplex.value || !$e)
        return;
      let f = window.requestAnimationFrame;
      f || (f = (p) => window.setTimeout(p, 16)), f(() => {
        const p = t == null ? void 0 : t.vnode.el, h = Array.from((p == null ? void 0 : p.children) || []).filter((y) => y == null ? void 0 : y.classList.contains(`${o.e("row")}`)), c = h[d], g = h[u];
        c && bn(c, "hover-row"), g && Do(g, "hover-row");
      });
    }), jo(() => {
      var u;
      (u = Dt) == null || u();
    }), {
      ns: o,
      onColumnsChange: a,
      onScrollableChange: i,
      wrappedRowRender: r,
      tooltipContent: l,
      tooltipTrigger: s
    };
  },
  render() {
    const { wrappedRowRender: e, store: t } = this, n = t.states.data.value || [];
    return te("tbody", {}, [
      n.reduce((o, r) => o.concat(e(r, o.length)), [])
    ]);
  }
});
function Bl(e) {
  const t = e.tableLayout === "auto";
  let n = e.columns || [];
  t && n.every((r) => r.width === void 0) && (n = []);
  const o = (r) => {
    const l = {
      key: `${e.tableLayout}_${r.id}`,
      style: {},
      name: void 0
    };
    return t ? l.style = {
      width: `${r.width}px`
    } : l.name = r.id, l;
  };
  return te("colgroup", {}, n.map((r) => te("col", o(r))));
}
Bl.props = ["columns", "tableLayout"];
function dw() {
  const e = ie(Nt), t = e == null ? void 0 : e.store, n = $(() => t.states.fixedLeafColumnsLength.value), o = $(() => t.states.rightFixedColumns.value.length), r = $(() => t.states.columns.value.length), l = $(() => t.states.fixedColumns.value.length), s = $(() => t.states.rightFixedColumns.value.length);
  return {
    leftFixedLeafCount: n,
    rightFixedLeafCount: o,
    columnsCount: r,
    leftFixedCount: l,
    rightFixedCount: s,
    columns: t.states.columns
  };
}
function fw(e) {
  const { columns: t } = dw(), n = re("table");
  return {
    getCellClasses: (l, s) => {
      const a = l[s], i = [
        n.e("cell"),
        a.id,
        a.align,
        a.labelClassName,
        ...Rl(n.b(), s, a.fixed, e.store)
      ];
      return a.className && i.push(a.className), a.children || i.push(n.is("leaf")), i;
    },
    getCellStyles: (l, s) => {
      const a = Fl(s, l.fixed, e.store);
      return Wn(a, "left"), Wn(a, "right"), a;
    },
    columns: t
  };
}
var pw = K({
  name: "ElTableFooter",
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: !0,
      type: Object
    },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: {
      type: Object,
      default: () => ({
        prop: "",
        order: ""
      })
    }
  },
  setup(e) {
    const { getCellClasses: t, getCellStyles: n, columns: o } = fw(e);
    return {
      ns: re("table"),
      getCellClasses: t,
      getCellStyles: n,
      columns: o
    };
  },
  render() {
    const {
      columns: e,
      getCellStyles: t,
      getCellClasses: n,
      summaryMethod: o,
      sumText: r,
      ns: l
    } = this, s = this.store.states.data.value;
    let a = [];
    return o ? a = o({
      columns: e,
      data: s
    }) : e.forEach((i, u) => {
      if (u === 0) {
        a[u] = r;
        return;
      }
      const d = s.map((c) => Number(c[i.property])), f = [];
      let p = !0;
      d.forEach((c) => {
        if (!Number.isNaN(+c)) {
          p = !1;
          const g = `${c}`.split(".")[1];
          f.push(g ? g.length : 0);
        }
      });
      const h = Math.max.apply(null, f);
      p ? a[u] = "" : a[u] = d.reduce((c, g) => {
        const y = Number(g);
        return Number.isNaN(+y) ? c : Number.parseFloat((c + g).toFixed(Math.min(h, 20)));
      }, 0);
    }), te("table", {
      class: l.e("footer"),
      cellspacing: "0",
      cellpadding: "0",
      border: "0"
    }, [
      Bl({
        columns: e
      }),
      te("tbody", [
        te("tr", {}, [
          ...e.map((i, u) => te("td", {
            key: u,
            colspan: i.colSpan,
            rowspan: i.rowSpan,
            class: n(e, u),
            style: t(i, u)
          }, [
            te("div", {
              class: ["cell", i.labelClassName]
            }, [a[u]])
          ]))
        ])
      ])
    ]);
  }
});
function vw(e) {
  return {
    setCurrentRow: (d) => {
      e.commit("setCurrentRow", d);
    },
    getSelectionRows: () => e.getSelectionRows(),
    toggleRowSelection: (d, f) => {
      e.toggleRowSelection(d, f, !1), e.updateAllSelected();
    },
    clearSelection: () => {
      e.clearSelection();
    },
    clearFilter: (d) => {
      e.clearFilter(d);
    },
    toggleAllSelection: () => {
      e.commit("toggleAllSelection");
    },
    toggleRowExpansion: (d, f) => {
      e.toggleRowExpansionAdapter(d, f);
    },
    clearSort: () => {
      e.clearSort();
    },
    sort: (d, f) => {
      e.commit("sort", { prop: d, order: f });
    }
  };
}
function hw(e, t, n, o) {
  const r = x(!1), l = x(null), s = x(!1), a = (H) => {
    s.value = H;
  }, i = x({
    width: null,
    height: null,
    headerHeight: null
  }), u = x(!1), d = {
    display: "inline-block",
    verticalAlign: "middle"
  }, f = x(), p = x(0), h = x(0), c = x(0), g = x(0);
  kn(() => {
    t.setHeight(e.height);
  }), kn(() => {
    t.setMaxHeight(e.maxHeight);
  }), Q(() => [e.currentRowKey, n.states.rowKey], ([H, L]) => {
    !v(L) || !v(H) || n.setCurrentRowKey(`${H}`);
  }, {
    immediate: !0
  }), Q(() => e.data, (H) => {
    o.store.commit("setData", H);
  }, {
    immediate: !0,
    deep: !0
  }), kn(() => {
    e.expandRowKeys && n.setExpandRowKeysAdapter(e.expandRowKeys);
  });
  const y = () => {
    o.store.commit("setHoverRow", null), o.hoverState && (o.hoverState = null);
  }, m = (H, L) => {
    const { pixelX: q, pixelY: oe } = L;
    Math.abs(q) >= Math.abs(oe) && (o.refs.bodyWrapper.scrollLeft += L.pixelX / 5);
  }, w = $(() => e.height || e.maxHeight || n.states.fixedColumns.value.length > 0 || n.states.rightFixedColumns.value.length > 0), C = $(() => ({
    width: t.bodyWidth.value ? `${t.bodyWidth.value}px` : ""
  })), b = () => {
    w.value && t.updateElsHeight(), t.updateColumnsWidth(), requestAnimationFrame(P);
  };
  Pe(async () => {
    await ce(), n.updateColumns(), N(), requestAnimationFrame(b);
    const H = o.vnode.el, L = o.refs.headerWrapper;
    e.flexible && H && H.parentElement && (H.parentElement.style.minWidth = "0"), i.value = {
      width: f.value = H.offsetWidth,
      height: H.offsetHeight,
      headerHeight: e.showHeader && L ? L.offsetHeight : null
    }, n.states.columns.value.forEach((q) => {
      q.filteredValue && q.filteredValue.length && o.store.commit("filterChange", {
        column: q,
        values: q.filteredValue,
        silent: !0
      });
    }), o.$ready = !0;
  });
  const O = (H, L) => {
    if (!H)
      return;
    const q = Array.from(H.classList).filter((oe) => !oe.startsWith("is-scrolling-"));
    q.push(t.scrollX.value ? L : "is-scrolling-none"), H.className = q.join(" ");
  }, _ = (H) => {
    const { tableWrapper: L } = o.refs;
    O(L, H);
  }, S = (H) => {
    const { tableWrapper: L } = o.refs;
    return !!(L && L.classList.contains(H));
  }, P = function() {
    if (!o.refs.scrollBarRef)
      return;
    if (!t.scrollX.value) {
      const le = "is-scrolling-none";
      S(le) || _(le);
      return;
    }
    const H = o.refs.scrollBarRef.wrapRef;
    if (!H)
      return;
    const { scrollLeft: L, offsetWidth: q, scrollWidth: oe } = H, { headerWrapper: de, footerWrapper: be } = o.refs;
    de && (de.scrollLeft = L), be && (be.scrollLeft = L);
    const ge = oe - q - 1;
    L >= ge ? _("is-scrolling-right") : _(L === 0 ? "is-scrolling-left" : "is-scrolling-middle");
  }, N = () => {
    o.refs.scrollBarRef && (o.refs.scrollBarRef.wrapRef && en(o.refs.scrollBarRef.wrapRef, "scroll", P, {
      passive: !0
    }), e.fit ? Nn(o.vnode.el, z) : en(window, "resize", z), Nn(o.refs.bodyWrapper, () => {
      var H, L;
      z(), (L = (H = o.refs) == null ? void 0 : H.scrollBarRef) == null || L.update();
    }));
  }, z = () => {
    var H, L, q;
    const oe = o.vnode.el;
    if (!o.$ready || !oe)
      return;
    let de = !1;
    const {
      width: be,
      height: ge,
      headerHeight: le
    } = i.value, ye = f.value = oe.offsetWidth;
    be !== ye && (de = !0);
    const Ee = oe.offsetHeight;
    (e.height || w.value) && ge !== Ee && (de = !0);
    const ae = e.tableLayout === "fixed" ? o.refs.headerWrapper : (H = o.refs.tableHeaderRef) == null ? void 0 : H.$el;
    e.showHeader && (ae == null ? void 0 : ae.offsetHeight) !== le && (de = !0), p.value = ((L = o.refs.tableWrapper) == null ? void 0 : L.scrollHeight) || 0, c.value = (ae == null ? void 0 : ae.scrollHeight) || 0, g.value = ((q = o.refs.footerWrapper) == null ? void 0 : q.offsetHeight) || 0, h.value = p.value - c.value - g.value, de && (i.value = {
      width: ye,
      height: Ee,
      headerHeight: e.showHeader && (ae == null ? void 0 : ae.offsetHeight) || 0
    }, b());
  }, j = nn(), D = $(() => {
    const { bodyWidth: H, scrollY: L, gutterWidth: q } = t;
    return H.value ? `${H.value - (L.value ? q : 0)}px` : "";
  }), k = $(() => e.maxHeight ? "fixed" : e.tableLayout), R = $(() => {
    if (e.data && e.data.length)
      return null;
    let H = "100%";
    e.height && h.value && (H = `${h.value}px`);
    const L = f.value;
    return {
      width: L ? `${L}px` : "",
      height: H
    };
  }), M = $(() => e.height ? {
    height: Number.isNaN(Number(e.height)) ? e.height : `${e.height}px`
  } : e.maxHeight ? {
    maxHeight: Number.isNaN(Number(e.maxHeight)) ? e.maxHeight : `${e.maxHeight}px`
  } : {}), V = $(() => {
    if (e.height)
      return {
        height: "100%"
      };
    if (e.maxHeight) {
      if (Number.isNaN(Number(e.maxHeight)))
        return {
          maxHeight: `calc(${e.maxHeight} - ${c.value + g.value}px)`
        };
      {
        const H = e.maxHeight;
        if (p.value >= Number(H))
          return {
            maxHeight: `${p.value - c.value - g.value}px`
          };
      }
    }
    return {};
  });
  return {
    isHidden: r,
    renderExpanded: l,
    setDragVisible: a,
    isGroup: u,
    handleMouseLeave: y,
    handleHeaderFooterMousewheel: m,
    tableSize: j,
    emptyBlockStyle: R,
    handleFixedMousewheel: (H, L) => {
      const q = o.refs.bodyWrapper;
      if (Math.abs(L.spinY) > 0) {
        const oe = q.scrollTop;
        L.pixelY < 0 && oe !== 0 && H.preventDefault(), L.pixelY > 0 && q.scrollHeight - q.clientHeight > oe && H.preventDefault(), q.scrollTop += Math.ceil(L.pixelY / 5);
      } else
        q.scrollLeft += Math.ceil(L.pixelX / 5);
    },
    resizeProxyVisible: s,
    bodyWidth: D,
    resizeState: i,
    doLayout: b,
    tableBodyStyles: C,
    tableLayout: k,
    scrollbarViewStyle: d,
    tableInnerStyle: M,
    scrollbarStyle: V
  };
}
function gw(e) {
  const t = x(), n = () => {
    const r = e.vnode.el.querySelector(".hidden-columns"), l = { childList: !0, subtree: !0 }, s = e.store.states.updateOrderFns;
    t.value = new MutationObserver(() => {
      s.forEach((a) => a());
    }), t.value.observe(r, l);
  };
  Pe(() => {
    n();
  }), jo(() => {
    var o;
    (o = t.value) == null || o.disconnect();
  });
}
var mw = {
  data: {
    type: Array,
    default: () => []
  },
  size: qn,
  width: [String, Number],
  height: [String, Number],
  maxHeight: [String, Number],
  fit: {
    type: Boolean,
    default: !0
  },
  stripe: Boolean,
  border: Boolean,
  rowKey: [String, Function],
  showHeader: {
    type: Boolean,
    default: !0
  },
  showSummary: Boolean,
  sumText: String,
  summaryMethod: Function,
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  cellClassName: [String, Function],
  cellStyle: [Object, Function],
  headerRowClassName: [String, Function],
  headerRowStyle: [Object, Function],
  headerCellClassName: [String, Function],
  headerCellStyle: [Object, Function],
  highlightCurrentRow: Boolean,
  currentRowKey: [String, Number],
  emptyText: String,
  expandRowKeys: Array,
  defaultExpandAll: Boolean,
  defaultSort: Object,
  tooltipEffect: String,
  tooltipOptions: Object,
  spanMethod: Function,
  selectOnIndeterminate: {
    type: Boolean,
    default: !0
  },
  indent: {
    type: Number,
    default: 16
  },
  treeProps: {
    type: Object,
    default: () => ({
      hasChildren: "hasChildren",
      children: "children"
    })
  },
  lazy: Boolean,
  load: Function,
  style: {
    type: Object,
    default: () => ({})
  },
  className: {
    type: String,
    default: ""
  },
  tableLayout: {
    type: String,
    default: "fixed"
  },
  scrollbarAlwaysOn: {
    type: Boolean,
    default: !1
  },
  flexible: Boolean
};
const bw = () => {
  const e = x(), t = (l, s) => {
    const a = e.value;
    a && a.scrollTo(l, s);
  }, n = (l, s) => {
    const a = e.value;
    a && me(s) && ["Top", "Left"].includes(l) && a[`setScroll${l}`](s);
  };
  return {
    scrollBarRef: e,
    scrollTo: t,
    setScrollTop: (l) => n("Top", l),
    setScrollLeft: (l) => n("Left", l)
  };
};
let yw = 1;
const ww = K({
  name: "ElTable",
  directives: {
    Mousewheel: U0
  },
  components: {
    TableHeader: lw,
    TableBody: cw,
    TableFooter: pw,
    ElScrollbar: Pl,
    hColgroup: Bl
  },
  props: mw,
  emits: [
    "select",
    "select-all",
    "selection-change",
    "cell-mouse-enter",
    "cell-mouse-leave",
    "cell-contextmenu",
    "cell-click",
    "cell-dblclick",
    "row-click",
    "row-contextmenu",
    "row-dblclick",
    "header-click",
    "header-contextmenu",
    "sort-change",
    "filter-change",
    "current-change",
    "header-dragend",
    "expand-change"
  ],
  setup(e) {
    const { t } = It(), n = re("table"), o = Ce();
    st(Nt, o);
    const r = K1(o, e);
    o.store = r;
    const l = new q1({
      store: o.store,
      table: o,
      fit: e.fit,
      showHeader: e.showHeader
    });
    o.layout = l;
    const s = $(() => (r.states.data.value || []).length === 0), {
      setCurrentRow: a,
      getSelectionRows: i,
      toggleRowSelection: u,
      clearSelection: d,
      clearFilter: f,
      toggleAllSelection: p,
      toggleRowExpansion: h,
      clearSort: c,
      sort: g
    } = vw(r), {
      isHidden: y,
      renderExpanded: m,
      setDragVisible: w,
      isGroup: C,
      handleMouseLeave: b,
      handleHeaderFooterMousewheel: O,
      tableSize: _,
      emptyBlockStyle: S,
      handleFixedMousewheel: P,
      resizeProxyVisible: N,
      bodyWidth: z,
      resizeState: j,
      doLayout: D,
      tableBodyStyles: k,
      tableLayout: R,
      scrollbarViewStyle: M,
      tableInnerStyle: V,
      scrollbarStyle: Z
    } = hw(e, l, r, o), { scrollBarRef: H, scrollTo: L, setScrollLeft: q, setScrollTop: oe } = bw(), de = Mn(D, 50), be = `${n.namespace.value}-table_${yw++}`;
    o.tableId = be, o.state = {
      isGroup: C,
      resizeState: j,
      doLayout: D,
      debouncedUpdateLayout: de
    };
    const ge = $(() => e.sumText || t("el.table.sumText")), le = $(() => e.emptyText || t("el.table.emptyText"));
    return gw(o), {
      ns: n,
      layout: l,
      store: r,
      handleHeaderFooterMousewheel: O,
      handleMouseLeave: b,
      tableId: be,
      tableSize: _,
      isHidden: y,
      isEmpty: s,
      renderExpanded: m,
      resizeProxyVisible: N,
      resizeState: j,
      isGroup: C,
      bodyWidth: z,
      tableBodyStyles: k,
      emptyBlockStyle: S,
      debouncedUpdateLayout: de,
      handleFixedMousewheel: P,
      setCurrentRow: a,
      getSelectionRows: i,
      toggleRowSelection: u,
      clearSelection: d,
      clearFilter: f,
      toggleAllSelection: p,
      toggleRowExpansion: h,
      clearSort: c,
      doLayout: D,
      sort: g,
      t,
      setDragVisible: w,
      context: o,
      computedSumText: ge,
      computedEmptyText: le,
      tableLayout: R,
      scrollbarViewStyle: M,
      tableInnerStyle: V,
      scrollbarStyle: Z,
      scrollBarRef: H,
      scrollTo: L,
      setScrollLeft: q,
      setScrollTop: oe
    };
  }
}), Cw = ["data-prefix"], Sw = {
  ref: "hiddenColumns",
  class: "hidden-columns"
};
function _w(e, t, n, o, r, l) {
  const s = Ae("hColgroup"), a = Ae("table-header"), i = Ae("table-body"), u = Ae("el-scrollbar"), d = Ae("table-footer"), f = Xr("mousewheel");
  return T(), B("div", {
    ref: "tableWrapper",
    class: I([
      {
        [e.ns.m("fit")]: e.fit,
        [e.ns.m("striped")]: e.stripe,
        [e.ns.m("border")]: e.border || e.isGroup,
        [e.ns.m("hidden")]: e.isHidden,
        [e.ns.m("group")]: e.isGroup,
        [e.ns.m("fluid-height")]: e.maxHeight,
        [e.ns.m("scrollable-x")]: e.layout.scrollX.value,
        [e.ns.m("scrollable-y")]: e.layout.scrollY.value,
        [e.ns.m("enable-row-hover")]: !e.store.states.isComplex.value,
        [e.ns.m("enable-row-transition")]: (e.store.states.data.value || []).length !== 0 && (e.store.states.data.value || []).length < 100,
        "has-footer": e.showSummary
      },
      e.ns.m(e.tableSize),
      e.className,
      e.ns.b(),
      e.ns.m(`layout-${e.tableLayout}`)
    ]),
    style: xe(e.style),
    "data-prefix": e.ns.namespace.value,
    onMouseleave: t[0] || (t[0] = (p) => e.handleMouseLeave())
  }, [
    U("div", {
      class: I(e.ns.e("inner-wrapper")),
      style: xe(e.tableInnerStyle)
    }, [
      U("div", Sw, [
        se(e.$slots, "default")
      ], 512),
      e.showHeader && e.tableLayout === "fixed" ? Oe((T(), B("div", {
        key: 0,
        ref: "headerWrapper",
        class: I(e.ns.e("header-wrapper"))
      }, [
        U("table", {
          ref: "tableHeader",
          class: I(e.ns.e("header")),
          style: xe(e.tableBodyStyles),
          border: "0",
          cellpadding: "0",
          cellspacing: "0"
        }, [
          fe(s, {
            columns: e.store.states.columns.value,
            "table-layout": e.tableLayout
          }, null, 8, ["columns", "table-layout"]),
          fe(a, {
            ref: "tableHeaderRef",
            border: e.border,
            "default-sort": e.defaultSort,
            store: e.store,
            onSetDragVisible: e.setDragVisible
          }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])
        ], 6)
      ], 2)), [
        [f, e.handleHeaderFooterMousewheel]
      ]) : X("v-if", !0),
      U("div", {
        ref: "bodyWrapper",
        class: I(e.ns.e("body-wrapper"))
      }, [
        fe(u, {
          ref: "scrollBarRef",
          "view-style": e.scrollbarViewStyle,
          "wrap-style": e.scrollbarStyle,
          always: e.scrollbarAlwaysOn
        }, {
          default: ee(() => [
            U("table", {
              ref: "tableBody",
              class: I(e.ns.e("body")),
              cellspacing: "0",
              cellpadding: "0",
              border: "0",
              style: xe({
                width: e.bodyWidth,
                tableLayout: e.tableLayout
              })
            }, [
              fe(s, {
                columns: e.store.states.columns.value,
                "table-layout": e.tableLayout
              }, null, 8, ["columns", "table-layout"]),
              e.showHeader && e.tableLayout === "auto" ? (T(), Y(a, {
                key: 0,
                ref: "tableHeaderRef",
                border: e.border,
                "default-sort": e.defaultSort,
                store: e.store,
                onSetDragVisible: e.setDragVisible
              }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])) : X("v-if", !0),
              fe(i, {
                context: e.context,
                highlight: e.highlightCurrentRow,
                "row-class-name": e.rowClassName,
                "tooltip-effect": e.tooltipEffect,
                "tooltip-options": e.tooltipOptions,
                "row-style": e.rowStyle,
                store: e.store,
                stripe: e.stripe
              }, null, 8, ["context", "highlight", "row-class-name", "tooltip-effect", "tooltip-options", "row-style", "store", "stripe"])
            ], 6),
            e.isEmpty ? (T(), B("div", {
              key: 0,
              ref: "emptyBlock",
              style: xe(e.emptyBlockStyle),
              class: I(e.ns.e("empty-block"))
            }, [
              U("span", {
                class: I(e.ns.e("empty-text"))
              }, [
                se(e.$slots, "empty", {}, () => [
                  Uo(we(e.computedEmptyText), 1)
                ])
              ], 2)
            ], 6)) : X("v-if", !0),
            e.$slots.append ? (T(), B("div", {
              key: 1,
              ref: "appendWrapper",
              class: I(e.ns.e("append-wrapper"))
            }, [
              se(e.$slots, "append")
            ], 2)) : X("v-if", !0)
          ]),
          _: 3
        }, 8, ["view-style", "wrap-style", "always"])
      ], 2),
      e.showSummary ? Oe((T(), B("div", {
        key: 1,
        ref: "footerWrapper",
        class: I(e.ns.e("footer-wrapper"))
      }, [
        fe(d, {
          border: e.border,
          "default-sort": e.defaultSort,
          store: e.store,
          style: xe(e.tableBodyStyles),
          "sum-text": e.computedSumText,
          "summary-method": e.summaryMethod
        }, null, 8, ["border", "default-sort", "store", "style", "sum-text", "summary-method"])
      ], 2)), [
        [jt, !e.isEmpty],
        [f, e.handleHeaderFooterMousewheel]
      ]) : X("v-if", !0),
      e.border || e.isGroup ? (T(), B("div", {
        key: 2,
        class: I(e.ns.e("border-left-patch"))
      }, null, 2)) : X("v-if", !0)
    ], 6),
    Oe(U("div", {
      ref: "resizeProxy",
      class: I(e.ns.e("column-resize-proxy"))
    }, null, 2), [
      [jt, e.resizeProxyVisible]
    ])
  ], 46, Cw);
}
var Ew = /* @__PURE__ */ pe(ww, [["render", _w], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/table.vue"]]);
const $w = {
  selection: "table-column--selection",
  expand: "table__expand-column"
}, xw = {
  default: {
    order: ""
  },
  selection: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  },
  expand: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  },
  index: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  }
}, Ow = (e) => $w[e] || "", Tw = {
  selection: {
    renderHeader({ store: e }) {
      function t() {
        return e.states.data.value && e.states.data.value.length === 0;
      }
      return te(Dn, {
        disabled: t(),
        size: e.states.tableSize.value,
        indeterminate: e.states.selection.value.length > 0 && !e.states.isAllSelected.value,
        "onUpdate:modelValue": e.toggleAllSelection,
        modelValue: e.states.isAllSelected.value
      });
    },
    renderCell({
      row: e,
      column: t,
      store: n,
      $index: o
    }) {
      return te(Dn, {
        disabled: t.selectable ? !t.selectable.call(null, e, o) : !1,
        size: n.states.tableSize.value,
        onChange: () => {
          n.commit("rowSelectedChanged", e);
        },
        onClick: (r) => r.stopPropagation(),
        modelValue: n.isSelected(e)
      });
    },
    sortable: !1,
    resizable: !1
  },
  index: {
    renderHeader({ column: e }) {
      return e.label || "#";
    },
    renderCell({
      column: e,
      $index: t
    }) {
      let n = t + 1;
      const o = e.index;
      return typeof o == "number" ? n = t + o : typeof o == "function" && (n = o(t)), te("div", {}, [n]);
    },
    sortable: !1
  },
  expand: {
    renderHeader({ column: e }) {
      return e.label || "";
    },
    renderCell({
      row: e,
      store: t,
      expanded: n
    }) {
      const { ns: o } = t, r = [o.e("expand-icon")];
      return n && r.push(o.em("expand-icon", "expanded")), te("div", {
        class: r,
        onClick: function(s) {
          s.stopPropagation(), t.toggleRowExpansion(e);
        }
      }, {
        default: () => [
          te(Ne, null, {
            default: () => [te(dl)]
          })
        ]
      });
    },
    sortable: !1,
    resizable: !1
  }
};
function Pw({
  row: e,
  column: t,
  $index: n
}) {
  var o;
  const r = t.property, l = r && _v(e, r).value;
  return t && t.formatter ? t.formatter(e, t, l, n) : ((o = l == null ? void 0 : l.toString) == null ? void 0 : o.call(l)) || "";
}
function kw({
  row: e,
  treeNode: t,
  store: n
}, o = !1) {
  const { ns: r } = n;
  if (!t)
    return o ? [
      te("span", {
        class: r.e("placeholder")
      })
    ] : null;
  const l = [], s = function(a) {
    a.stopPropagation(), !t.loading && n.loadOrToggle(e);
  };
  if (t.indent && l.push(te("span", {
    class: r.e("indent"),
    style: { "padding-left": `${t.indent}px` }
  })), typeof t.expanded == "boolean" && !t.noLazyChildren) {
    const a = [
      r.e("expand-icon"),
      t.expanded ? r.em("expand-icon", "expanded") : ""
    ];
    let i = dl;
    t.loading && (i = pl), l.push(te("div", {
      class: a,
      onClick: s
    }, {
      default: () => [
        te(Ne, { class: { [r.is("loading")]: t.loading } }, {
          default: () => [te(i)]
        })
      ]
    }));
  } else
    l.push(te("span", {
      class: r.e("placeholder")
    }));
  return l;
}
function is(e, t) {
  return e.reduce((n, o) => (n[o] = o, n), t);
}
function Aw(e, t) {
  const n = Ce();
  return {
    registerComplexWatchers: () => {
      const l = ["fixed"], s = {
        realWidth: "width",
        realMinWidth: "minWidth"
      }, a = is(l, s);
      Object.keys(a).forEach((i) => {
        const u = s[i];
        gn(t, u) && Q(() => t[u], (d) => {
          let f = d;
          u === "width" && i === "realWidth" && (f = Nl(d)), u === "minWidth" && i === "realMinWidth" && (f = ji(d)), n.columnConfig.value[u] = f, n.columnConfig.value[i] = f;
          const p = u === "fixed";
          e.value.store.scheduleLayout(p);
        });
      });
    },
    registerNormalWatchers: () => {
      const l = [
        "label",
        "filters",
        "filterMultiple",
        "sortable",
        "index",
        "formatter",
        "className",
        "labelClassName",
        "showOverflowTooltip"
      ], s = {
        property: "prop",
        align: "realAlign",
        headerAlign: "realHeaderAlign"
      }, a = is(l, s);
      Object.keys(a).forEach((i) => {
        const u = s[i];
        gn(t, u) && Q(() => t[u], (d) => {
          n.columnConfig.value[i] = d;
        });
      });
    }
  };
}
function Lw(e, t, n) {
  const o = Ce(), r = x(""), l = x(!1), s = x(), a = x(), i = re("table");
  kn(() => {
    s.value = e.align ? `is-${e.align}` : null, s.value;
  }), kn(() => {
    a.value = e.headerAlign ? `is-${e.headerAlign}` : s.value, a.value;
  });
  const u = $(() => {
    let b = o.vnode.vParent || o.parent;
    for (; b && !b.tableId && !b.columnId; )
      b = b.vnode.vParent || b.parent;
    return b;
  }), d = $(() => {
    const { store: b } = o.parent;
    if (!b)
      return !1;
    const { treeData: O } = b.states, _ = O.value;
    return _ && Object.keys(_).length > 0;
  }), f = x(Nl(e.width)), p = x(ji(e.minWidth)), h = (b) => (f.value && (b.width = f.value), p.value && (b.minWidth = p.value), !f.value && p.value && (b.width = void 0), b.minWidth || (b.minWidth = 80), b.realWidth = Number(b.width === void 0 ? b.minWidth : b.width), b), c = (b) => {
    const O = b.type, _ = Tw[O] || {};
    Object.keys(_).forEach((P) => {
      const N = _[P];
      P !== "className" && N !== void 0 && (b[P] = N);
    });
    const S = Ow(O);
    if (S) {
      const P = `${v(i.namespace)}-${S}`;
      b.className = b.className ? `${b.className} ${P}` : P;
    }
    return b;
  }, g = (b) => {
    Array.isArray(b) ? b.forEach((_) => O(_)) : O(b);
    function O(_) {
      var S;
      ((S = _ == null ? void 0 : _.type) == null ? void 0 : S.name) === "ElTableColumn" && (_.vParent = o);
    }
  };
  return {
    columnId: r,
    realAlign: s,
    isSubColumn: l,
    realHeaderAlign: a,
    columnOrTableParent: u,
    setColumnWidth: h,
    setColumnForcedProps: c,
    setColumnRenders: (b) => {
      e.renderHeader ? Le("TableColumn", "Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.") : b.type !== "selection" && (b.renderHeader = (_) => {
        o.columnConfig.value.label;
        const S = t.header;
        return S ? S(_) : b.label;
      });
      let O = b.renderCell;
      return b.type === "expand" ? (b.renderCell = (_) => te("div", {
        class: "cell"
      }, [O(_)]), n.value.renderExpanded = (_) => t.default ? t.default(_) : t.default) : (O = O || Pw, b.renderCell = (_) => {
        let S = null;
        if (t.default) {
          const j = t.default(_);
          S = j.some((D) => D.type !== ps) ? j : O(_);
        } else
          S = O(_);
        const P = d.value && _.cellIndex === 0 && _.column.type !== "selection", N = kw(_, P), z = {
          class: "cell",
          style: {}
        };
        return b.showOverflowTooltip && (z.class = `${z.class} ${v(i.namespace)}-tooltip`, z.style = {
          width: `${(_.column.realWidth || Number(_.column.width)) - 1}px`
        }), g(S), te("div", z, [N, S]);
      }), b;
    },
    getPropsData: (...b) => b.reduce((O, _) => (Array.isArray(_) && _.forEach((S) => {
      O[S] = e[S];
    }), O), {}),
    getColumnElIndex: (b, O) => Array.prototype.indexOf.call(b, O),
    updateColumnOrder: () => {
      n.value.store.commit("updateColumnOrder", o.columnConfig.value);
    }
  };
}
var Mw = {
  type: {
    type: String,
    default: "default"
  },
  label: String,
  className: String,
  labelClassName: String,
  property: String,
  prop: String,
  width: {
    type: [String, Number],
    default: ""
  },
  minWidth: {
    type: [String, Number],
    default: ""
  },
  renderHeader: Function,
  sortable: {
    type: [Boolean, String],
    default: !1
  },
  sortMethod: Function,
  sortBy: [String, Function, Array],
  resizable: {
    type: Boolean,
    default: !0
  },
  columnKey: String,
  align: String,
  headerAlign: String,
  showOverflowTooltip: [Boolean, Object],
  fixed: [Boolean, String],
  formatter: Function,
  selectable: Function,
  reserveSelection: Boolean,
  filterMethod: Function,
  filteredValue: Array,
  filters: Array,
  filterPlacement: String,
  filterMultiple: {
    type: Boolean,
    default: !0
  },
  index: [Number, Function],
  sortOrders: {
    type: Array,
    default: () => ["ascending", "descending", null],
    validator: (e) => e.every((t) => ["ascending", "descending", null].includes(t))
  }
};
let Iw = 1;
var Qi = K({
  name: "ElTableColumn",
  components: {
    ElCheckbox: Dn
  },
  props: Mw,
  setup(e, { slots: t }) {
    const n = Ce(), o = x({}), r = $(() => {
      let C = n.parent;
      for (; C && !C.tableId; )
        C = C.parent;
      return C;
    }), { registerNormalWatchers: l, registerComplexWatchers: s } = Aw(r, e), {
      columnId: a,
      isSubColumn: i,
      realHeaderAlign: u,
      columnOrTableParent: d,
      setColumnWidth: f,
      setColumnForcedProps: p,
      setColumnRenders: h,
      getPropsData: c,
      getColumnElIndex: g,
      realAlign: y,
      updateColumnOrder: m
    } = Lw(e, t, r), w = d.value;
    a.value = `${w.tableId || w.columnId}_column_${Iw++}`, Gr(() => {
      i.value = r.value !== w;
      const C = e.type || "default", b = e.sortable === "" ? !0 : e.sortable, O = {
        ...xw[C],
        id: a.value,
        type: C,
        property: e.prop || e.property,
        align: y,
        headerAlign: u,
        showOverflowTooltip: e.showOverflowTooltip,
        filterable: e.filters || e.filterMethod,
        filteredValue: [],
        filterPlacement: "",
        isColumnGroup: !1,
        isSubColumn: !1,
        filterOpened: !1,
        sortable: b,
        index: e.index,
        rawColumnKey: n.vnode.key
      };
      let z = c([
        "columnKey",
        "label",
        "className",
        "labelClassName",
        "type",
        "renderHeader",
        "formatter",
        "fixed",
        "resizable"
      ], ["sortMethod", "sortBy", "sortOrders"], ["selectable", "reserveSelection"], [
        "filterMethod",
        "filters",
        "filterMultiple",
        "filterOpened",
        "filteredValue",
        "filterPlacement"
      ]);
      z = I1(O, z), z = R1(h, f, p)(z), o.value = z, l(), s();
    }), Pe(() => {
      var C;
      const b = d.value, O = i.value ? b.vnode.el.children : (C = b.refs.hiddenColumns) == null ? void 0 : C.children, _ = () => g(O || [], n.vnode.el);
      o.value.getColumnIndex = _, _() > -1 && r.value.store.commit("insertColumn", o.value, i.value ? b.columnConfig.value : null, m);
    }), St(() => {
      r.value.store.commit("removeColumn", o.value, i.value ? w.columnConfig.value : null, m);
    }), n.columnId = a.value, n.columnConfig = o;
  },
  render() {
    var e, t, n;
    try {
      const o = (t = (e = this.$slots).default) == null ? void 0 : t.call(e, {
        row: {},
        column: {},
        $index: -1
      }), r = [];
      if (Array.isArray(o))
        for (const s of o)
          ((n = s.type) == null ? void 0 : n.name) === "ElTableColumn" || s.shapeFlag & 2 ? r.push(s) : s.type === Ue && Array.isArray(s.children) && s.children.forEach((a) => {
            (a == null ? void 0 : a.patchFlag) !== 1024 && !Ze(a == null ? void 0 : a.children) && r.push(a);
          });
      return te("div", r);
    } catch {
      return te("div", []);
    }
  }
});
const Nw = gt(Ew, {
  TableColumn: Qi
}), Rw = Kn(Qi);
function Fw(e) {
  let t;
  const n = re("loading"), o = x(!1), r = kt({
    ...e,
    originalPosition: "",
    originalOverflow: "",
    visible: !1
  });
  function l(h) {
    r.text = h;
  }
  function s() {
    const h = r.parent;
    if (!h.vLoadingAddClassList) {
      let c = h.getAttribute("loading-number");
      c = Number.parseInt(c) - 1, c ? h.setAttribute("loading-number", c.toString()) : (bn(h, n.bm("parent", "relative")), h.removeAttribute("loading-number")), bn(h, n.bm("parent", "hidden"));
    }
    a(), f.unmount();
  }
  function a() {
    var h, c;
    (c = (h = p.$el) == null ? void 0 : h.parentNode) == null || c.removeChild(p.$el);
  }
  function i() {
    var h;
    e.beforeClose && !e.beforeClose() || (o.value = !0, clearTimeout(t), t = window.setTimeout(u, 400), r.visible = !1, (h = e.closed) == null || h.call(e));
  }
  function u() {
    if (!o.value)
      return;
    const h = r.parent;
    o.value = !1, h.vLoadingAddClassList = void 0, s();
  }
  const f = du({
    name: "ElLoading",
    setup() {
      return () => {
        const h = r.spinner || r.svg, c = te("svg", {
          class: "circular",
          viewBox: r.svgViewBox ? r.svgViewBox : "0 0 50 50",
          ...h ? { innerHTML: h } : {}
        }, [
          te("circle", {
            class: "path",
            cx: "25",
            cy: "25",
            r: "20",
            fill: "none"
          })
        ]), g = r.text ? te("p", { class: n.b("text") }, [r.text]) : void 0;
        return te(co, {
          name: n.b("fade"),
          onAfterLeave: u
        }, {
          default: ee(() => [
            Oe(fe("div", {
              style: {
                backgroundColor: r.background || ""
              },
              class: [
                n.b("mask"),
                r.customClass,
                r.fullscreen ? "is-fullscreen" : ""
              ]
            }, [
              te("div", {
                class: n.b("spinner")
              }, [c, g])
            ]), [[jt, r.visible]])
          ])
        });
      };
    }
  }), p = f.mount(document.createElement("div"));
  return {
    ...Vn(r),
    setText: l,
    removeElLoadingChild: a,
    close: i,
    handleAfterLeave: u,
    vm: p,
    get $el() {
      return p.$el;
    }
  };
}
let xo;
const Bw = function(e = {}) {
  if (!$e)
    return;
  const t = zw(e);
  if (t.fullscreen && xo)
    return xo;
  const n = Fw({
    ...t,
    closed: () => {
      var r;
      (r = t.closed) == null || r.call(t), t.fullscreen && (xo = void 0);
    }
  });
  Hw(t, t.parent, n), us(t, t.parent, n), t.parent.vLoadingAddClassList = () => us(t, t.parent, n);
  let o = t.parent.getAttribute("loading-number");
  return o ? o = `${Number.parseInt(o) + 1}` : o = "1", t.parent.setAttribute("loading-number", o), t.parent.appendChild(n.$el), ce(() => n.visible.value = t.visible), t.fullscreen && (xo = n), n;
}, zw = (e) => {
  var t, n, o, r;
  let l;
  return Ze(e.target) ? l = (t = document.querySelector(e.target)) != null ? t : document.body : l = e.target || document.body, {
    parent: l === document.body || e.body ? document.body : l,
    background: e.background || "",
    svg: e.svg || "",
    svgViewBox: e.svgViewBox || "",
    spinner: e.spinner || !1,
    text: e.text || "",
    fullscreen: l === document.body && ((n = e.fullscreen) != null ? n : !0),
    lock: (o = e.lock) != null ? o : !1,
    customClass: e.customClass || "",
    visible: (r = e.visible) != null ? r : !0,
    target: l
  };
}, Hw = async (e, t, n) => {
  const { nextZIndex: o } = Tl(), r = {};
  if (e.fullscreen)
    n.originalPosition.value = un(document.body, "position"), n.originalOverflow.value = un(document.body, "overflow"), r.zIndex = o();
  else if (e.parent === document.body) {
    n.originalPosition.value = un(document.body, "position"), await ce();
    for (const l of ["top", "left"]) {
      const s = l === "top" ? "scrollTop" : "scrollLeft";
      r[l] = `${e.target.getBoundingClientRect()[l] + document.body[s] + document.documentElement[s] - Number.parseInt(un(document.body, `margin-${l}`), 10)}px`;
    }
    for (const l of ["height", "width"])
      r[l] = `${e.target.getBoundingClientRect()[l]}px`;
  } else
    n.originalPosition.value = un(t, "position");
  for (const [l, s] of Object.entries(r))
    n.$el.style[l] = s;
}, us = (e, t, n) => {
  const o = re("loading");
  ["absolute", "fixed", "sticky"].includes(n.originalPosition.value) ? bn(t, o.bm("parent", "relative")) : Do(t, o.bm("parent", "relative")), e.fullscreen && e.lock ? Do(t, o.bm("parent", "hidden")) : bn(t, o.bm("parent", "hidden"));
}, Vr = Symbol("ElLoading"), cs = (e, t) => {
  var n, o, r, l;
  const s = t.instance, a = (p) => ct(t.value) ? t.value[p] : void 0, i = (p) => {
    const h = Ze(p) && (s == null ? void 0 : s[p]) || p;
    return h && x(h);
  }, u = (p) => i(a(p) || e.getAttribute(`element-loading-${wv(p)}`)), d = (n = a("fullscreen")) != null ? n : t.modifiers.fullscreen, f = {
    text: u("text"),
    svg: u("svg"),
    svgViewBox: u("svgViewBox"),
    spinner: u("spinner"),
    background: u("background"),
    customClass: u("customClass"),
    fullscreen: d,
    target: (o = a("target")) != null ? o : d ? void 0 : e,
    body: (r = a("body")) != null ? r : t.modifiers.body,
    lock: (l = a("lock")) != null ? l : t.modifiers.lock
  };
  e[Vr] = {
    options: f,
    instance: Bw(f)
  };
}, Dw = (e, t) => {
  for (const n of Object.keys(t))
    vn(t[n]) && (t[n].value = e[n]);
}, Ww = {
  mounted(e, t) {
    t.value && cs(e, t);
  },
  updated(e, t) {
    const n = e[Vr];
    t.oldValue !== t.value && (t.value && !t.oldValue ? cs(e, t) : t.value && t.oldValue ? ct(t.value) && Dw(t.value, n.options) : n == null || n.instance.close());
  },
  unmounted(e) {
    var t;
    (t = e[Vr]) == null || t.instance.close();
  }
};
const Vw = K({
  name: "cm-button"
}), jw = /* @__PURE__ */ K({
  ...Vw,
  props: {
    handler: null
  },
  setup(e) {
    const t = e, n = x(!1), o = async (r) => {
      n.value = !0;
      try {
        await t.handler(r);
      } catch {
      }
      n.value = !1;
    };
    return (r, l) => {
      const s = F0;
      return T(), Y(s, Ct(r.$attrs, {
        loading: v(n),
        onClick: o
      }), {
        default: ee(() => [
          se(r.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["loading"]);
    };
  }
});
const zl = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, jr = /* @__PURE__ */ zl(jw, [["__scopeId", "data-v-5e79745c"]]), Kw = {
  install(e) {
    e.component(jr.name, jr);
  }
}, Uw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmButton: jr,
  default: Kw
}, Symbol.toStringTag, { value: "Module" }));
const qw = K({
  name: "CmInput"
}), Kr = /* @__PURE__ */ K({
  ...qw,
  props: {
    type: { default: "text" }
  },
  setup(e) {
    const t = e;
    return (n, o) => {
      const r = or, l = Ey;
      return t.type !== "number" ? (T(), Y(r, Ct({ key: 0 }, n.$attrs, {
        type: t.type,
        clearable: ""
      }), null, 16, ["type"])) : (T(), Y(
        l,
        fu(Ct({ key: 1 }, n.$attrs)),
        null,
        16
        /* FULL_PROPS */
      ));
    };
  }
}), Gw = {
  install(e) {
    e.component(Kr.name, Kr);
  }
}, Yw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmInput: Kr,
  default: Gw
}, Symbol.toStringTag, { value: "Module" })), Xw = {
  "aria-hidden": "true",
  class: "svg-icon"
}, Qw = ["xlink:href"], Zw = K({
  name: "CmSvg"
}), Jw = /* @__PURE__ */ K({
  ...Zw,
  props: {
    prefix: { default: "icon" },
    name: null,
    widthScale: { default: 1 }
  },
  setup(e) {
    const t = e;
    pu((r) => ({
      "88ae7cc6": v(o)
    }));
    const n = $(() => `#${t.prefix}-${t.name}`), o = $(() => t.widthScale.toString() + "em");
    return (r, l) => (T(), B("svg", Xw, [
      U("use", { "xlink:href": v(n) }, null, 8, Qw)
    ]));
  }
});
const Ur = /* @__PURE__ */ zl(Jw, [["__scopeId", "data-v-5865a63a"]]), e2 = {
  install(e) {
    e.component(Ur.name, Ur);
  }
}, t2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmSvg: Ur,
  default: e2
}, Symbol.toStringTag, { value: "Module" }));
const Zi = (e) => Object.prototype.toString.call(e).slice(8, -1), ds = (e) => [
  "String",
  "Number",
  "Boolean",
  "Null",
  "Undefined",
  "Symbol",
  "Bigint"
].includes(Zi(e));
var Ji = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, br = (e, t, n) => (Ji(e, t, "read from private field"), n ? n.call(e) : t.get(e)), n2 = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, o2 = (e, t, n, o) => (Ji(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n), On;
class r2 {
  /**
   * 初始化一个栈
   * @param initData 初始栈的成员，可以任意个参数
   */
  constructor(...t) {
    n2(this, On, void 0), o2(this, On, new Array(...t));
  }
  /**
   * 推入栈
   * @param member 要推入的成员
   * @returns 栈长度
   */
  push(t) {
    return br(this, On).push(t);
  }
  /**
   * 抛出最后一个成员
   * @returns 最后一个成员
   */
  pop() {
    return br(this, On).pop();
  }
  /**
   * 当前栈的长度
   * @returns 长度
   */
  length() {
    return br(this, On).length;
  }
}
On = /* @__PURE__ */ new WeakMap();
const l2 = (e) => {
  if (ds(e))
    return e;
  let t;
  const n = new r2({
    parent: t,
    key: void 0,
    data: e,
    sign: 2
    /* SELF */
  }), o = /* @__PURE__ */ new Map(), r = (l, s, a, i) => {
    switch (i) {
      case 2: {
        t = a;
        break;
      }
      case 3: {
        l[s] = a;
        break;
      }
      case 0: {
        l.add(a);
        break;
      }
      case 1: {
        l.set(s, a);
        break;
      }
    }
  };
  for (; n.length() > 0; ) {
    const { parent: l, key: s, data: a, sign: i } = n.pop();
    if (ds(a)) {
      r(l, s, a, i);
      continue;
    }
    if (o.has(a)) {
      r(l, s, o.get(a), i);
      continue;
    }
    const u = Zi(a);
    switch (u) {
      case "Date": {
        const d = new Date(a);
        r(l, s, d, i), o.set(a, d);
        break;
      }
      case "RegExp": {
        const d = new RegExp(a.source, a.flags);
        r(l, s, d, i), o.set(a, d);
        break;
      }
      case "Function": {
        r(l, s, a, i);
        break;
      }
      case "Array": {
        const d = [];
        r(l, s, d, i), o.set(a, d), a.forEach((f, p) => {
          n.push({
            parent: d,
            key: p,
            data: f,
            sign: 3
            /* OTHER */
          });
        });
        break;
      }
      case "Object": {
        const d = {};
        r(l, s, d, i), o.set(a, d), Object.entries(a).reverse().forEach(([f, p]) => {
          n.push({
            parent: d,
            key: f,
            data: p,
            sign: 3
            /* OTHER */
          });
        });
        break;
      }
      case "Set":
      case "WeakSet": {
        const d = new a.constructor();
        r(l, s, d, i), o.set(a, d), Array.from(a).reverse().forEach((f, p) => {
          n.push({
            parent: d,
            key: p,
            data: f,
            sign: 0
            /* SET */
          });
        });
        break;
      }
      case "Map":
      case "WeakMap": {
        const d = new a.constructor();
        r(l, s, d, i), o.set(a, d), Array.from(a).reverse().forEach(([f, p]) => {
          n.push({
            parent: d,
            key: f,
            data: p,
            sign: 1
            /* MAP */
          });
        });
        break;
      }
      default:
        console.error(`[typeError] unknown type ${u}`);
    }
  }
  return t;
}, a2 = { class: "cm-table" }, s2 = { class: "buttons" }, i2 = { class: "table" }, u2 = { class: "pager" }, c2 = K({
  name: "CmTable"
}), d2 = /* @__PURE__ */ K({
  ...c2,
  props: {
    getData: null,
    isInitData: { type: Boolean, default: !0 },
    initParams: { default: () => ({}) },
    isUsePager: { type: Boolean, default: !0 },
    isUseCheckBox: { type: Boolean, default: !0 }
  },
  setup(e, { expose: t }) {
    const n = e, o = x([]), r = x(!1), l = x({}), s = kt({
      pageSize: 20,
      currentPage: 1
    }), a = x(0), i = x(null), u = (h, c = !0) => (h && (l.value = l2(h)), c && (s.currentPage = 1), n.isUsePager && (l.value.pager = s), r.value = !0, n.getData(l).then((g) => {
      o.value = g.datas, a.value = g.total;
    }).catch().finally(() => {
      r.value = !1;
    }));
    n.isInitData && u(n.initParams), Q(
      () => s.currentPage,
      () => {
        u(null, !1);
      }
    ), Q(
      () => s.pageSize,
      () => {
        u();
      }
    );
    const d = x([]), f = (h) => {
      d.value = h;
    }, p = kt({ a: 1 });
    return t({
      update: u,
      selection: d,
      test: p
    }), (h, c) => {
      const g = Rw, y = Nw, m = T1, w = Ww;
      return Oe((T(), B("div", a2, [
        X(" 操作按钮组 "),
        U("div", s2, [
          se(h.$slots, "buttons", { selection: v(d) }, void 0, !0)
        ]),
        X(" 表格主体 "),
        U("div", i2, [
          fe(y, Ct({
            ref_key: "table",
            ref: i
          }, h.$attrs, {
            data: v(o),
            onSelectionChange: f
          }), {
            default: ee(() => [
              n.isUseCheckBox ? (T(), Y(g, {
                key: 0,
                type: "selection"
              })) : X("v-if", !0),
              se(h.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["data"])
        ]),
        X(" 分页部分 "),
        U("div", u2, [
          fe(m, {
            "page-size": v(s).pageSize,
            "onUpdate:pageSize": c[0] || (c[0] = (C) => v(s).pageSize = C),
            "current-page": v(s).currentPage,
            "onUpdate:currentPage": c[1] || (c[1] = (C) => v(s).currentPage = C),
            background: "",
            layout: "total, prev, pager, next",
            "hide-on-single-page": "",
            total: v(a)
          }, null, 8, ["page-size", "current-page", "total"])
        ])
      ])), [
        [w, v(r)]
      ]);
    };
  }
});
const qr = /* @__PURE__ */ zl(d2, [["__scopeId", "data-v-175e1406"]]), f2 = {
  install(e) {
    e.component(qr.name, qr);
  }
}, p2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CmTable: qr,
  default: f2
}, Symbol.toStringTag, { value: "Module" })), eu = [], v2 = /* @__PURE__ */ Object.assign({ "./CmButton/index.ts": Uw, "./CmInput/index.ts": Yw, "./CmSvg/index.ts": t2, "./CmTable/index.ts": p2 }), h2 = async () => {
  for (const e of Object.values(v2))
    eu.push(e.default);
};
h2();
const m2 = {
  install(e) {
    eu.forEach((t) => {
      e.use(t);
    });
  }
};
export {
  jr as CmButton,
  Kr as CmInput,
  Ur as CmSvg,
  qr as CmTable,
  m2 as default
};
