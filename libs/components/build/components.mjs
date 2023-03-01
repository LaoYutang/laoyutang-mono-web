import { unref as h, getCurrentScope as Gi, onScopeDispose as Yi, getCurrentInstance as we, onMounted as ke, nextTick as ue, watch as U, ref as x, openBlock as P, createElementBlock as N, createElementVNode as V, warn as Xi, computed as O, inject as se, toRef as xt, onUnmounted as Do, isRef as dn, shallowRef as xn, onBeforeUnmount as yt, onBeforeMount as Dr, provide as rt, defineComponent as W, mergeProps as Ht, renderSlot as ae, useAttrs as Qi, useSlots as Wo, withDirectives as Pe, createCommentVNode as G, Fragment as Ke, normalizeClass as M, createBlock as Q, withCtx as Z, resolveDynamicComponent as nt, withModifiers as bt, createVNode as ge, toDisplayString as ye, normalizeStyle as Oe, vShow as Dt, Transition as so, reactive as Wt, onUpdated as ns, cloneVNode as Zi, Text as os, Comment as rs, Teleport as Ji, readonly as eu, onDeactivated as tu, toRaw as $n, vModelCheckbox as ko, createTextVNode as Vo, toRefs as Hn, triggerRef as Kn, resolveComponent as Te, resolveDirective as Wr, renderList as Pn, withKeys as ct, vModelText as nu, createSlots as ou, watchEffect as Tn, h as J, createApp as ru, useCssVars as lu } from "vue";
var au = typeof global == "object" && global && global.Object === Object && global;
const ls = au;
var su = typeof self == "object" && self && self.Object === Object && self, iu = ls || su || Function("return this")();
const wt = iu;
var uu = wt.Symbol;
const Pt = uu;
var as = Object.prototype, cu = as.hasOwnProperty, du = as.toString, Un = Pt ? Pt.toStringTag : void 0;
function fu(e) {
  var t = cu.call(e, Un), n = e[Un];
  try {
    e[Un] = void 0;
    var o = !0;
  } catch {
  }
  var r = du.call(e);
  return o && (t ? e[Un] = n : delete e[Un]), r;
}
var pu = Object.prototype, vu = pu.toString;
function hu(e) {
  return vu.call(e);
}
var gu = "[object Null]", mu = "[object Undefined]", Al = Pt ? Pt.toStringTag : void 0;
function mn(e) {
  return e == null ? e === void 0 ? mu : gu : Al && Al in Object(e) ? fu(e) : hu(e);
}
function Jt(e) {
  return e != null && typeof e == "object";
}
var bu = "[object Symbol]";
function jo(e) {
  return typeof e == "symbol" || Jt(e) && mn(e) == bu;
}
function ss(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var yu = Array.isArray;
const lt = yu;
var wu = 1 / 0, Ll = Pt ? Pt.prototype : void 0, Ml = Ll ? Ll.toString : void 0;
function is(e) {
  if (typeof e == "string")
    return e;
  if (lt(e))
    return ss(e, is) + "";
  if (jo(e))
    return Ml ? Ml.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -wu ? "-0" : t;
}
var Cu = /\s/;
function Su(e) {
  for (var t = e.length; t-- && Cu.test(e.charAt(t)); )
    ;
  return t;
}
var Eu = /^\s+/;
function _u(e) {
  return e && e.slice(0, Su(e) + 1).replace(Eu, "");
}
function at(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Rl = 0 / 0, Ou = /^[-+]0x[0-9a-f]+$/i, xu = /^0b[01]+$/i, Tu = /^0o[0-7]+$/i, $u = parseInt;
function Il(e) {
  if (typeof e == "number")
    return e;
  if (jo(e))
    return Rl;
  if (at(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = at(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = _u(e);
  var n = xu.test(e);
  return n || Tu.test(e) ? $u(e.slice(2), n ? 2 : 8) : Ou.test(e) ? Rl : +e;
}
function Vr(e) {
  return e;
}
var Pu = "[object AsyncFunction]", ku = "[object Function]", Au = "[object GeneratorFunction]", Lu = "[object Proxy]";
function jr(e) {
  if (!at(e))
    return !1;
  var t = mn(e);
  return t == ku || t == Au || t == Pu || t == Lu;
}
var Mu = wt["__core-js_shared__"];
const or = Mu;
var Nl = function() {
  var e = /[^.]+$/.exec(or && or.keys && or.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ru(e) {
  return !!Nl && Nl in e;
}
var Iu = Function.prototype, Nu = Iu.toString;
function bn(e) {
  if (e != null) {
    try {
      return Nu.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Fu = /[\\^$.*+?()[\]{}|]/g, Bu = /^\[object .+?Constructor\]$/, zu = Function.prototype, Hu = Object.prototype, Du = zu.toString, Wu = Hu.hasOwnProperty, Vu = RegExp(
  "^" + Du.call(Wu).replace(Fu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ju(e) {
  if (!at(e) || Ru(e))
    return !1;
  var t = jr(e) ? Vu : Bu;
  return t.test(bn(e));
}
function Ku(e, t) {
  return e == null ? void 0 : e[t];
}
function yn(e, t) {
  var n = Ku(e, t);
  return ju(n) ? n : void 0;
}
var Uu = yn(wt, "WeakMap");
const gr = Uu;
var Fl = Object.create, qu = function() {
  function e() {
  }
  return function(t) {
    if (!at(t))
      return {};
    if (Fl)
      return Fl(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
const Gu = qu;
function Yu(e, t, n) {
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
function Xu(e, t) {
  var n = -1, o = e.length;
  for (t || (t = Array(o)); ++n < o; )
    t[n] = e[n];
  return t;
}
var Qu = 800, Zu = 16, Ju = Date.now;
function ec(e) {
  var t = 0, n = 0;
  return function() {
    var o = Ju(), r = Zu - (o - n);
    if (n = o, r > 0) {
      if (++t >= Qu)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function tc(e) {
  return function() {
    return e;
  };
}
var nc = function() {
  try {
    var e = yn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Ao = nc;
var oc = Ao ? function(e, t) {
  return Ao(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: tc(t),
    writable: !0
  });
} : Vr;
const rc = oc;
var lc = ec(rc);
const us = lc;
var ac = 9007199254740991, sc = /^(?:0|[1-9]\d*)$/;
function Ko(e, t) {
  var n = typeof e;
  return t = t ?? ac, !!t && (n == "number" || n != "symbol" && sc.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Kr(e, t, n) {
  t == "__proto__" && Ao ? Ao(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function io(e, t) {
  return e === t || e !== e && t !== t;
}
var ic = Object.prototype, uc = ic.hasOwnProperty;
function cs(e, t, n) {
  var o = e[t];
  (!(uc.call(e, t) && io(o, n)) || n === void 0 && !(t in e)) && Kr(e, t, n);
}
function cc(e, t, n, o) {
  var r = !n;
  n || (n = {});
  for (var l = -1, a = t.length; ++l < a; ) {
    var s = t[l], i = o ? o(n[s], e[s], s, n, e) : void 0;
    i === void 0 && (i = e[s]), r ? Kr(n, s, i) : cs(n, s, i);
  }
  return n;
}
var Bl = Math.max;
function ds(e, t, n) {
  return t = Bl(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, l = Bl(o.length - t, 0), a = Array(l); ++r < l; )
      a[r] = o[t + r];
    r = -1;
    for (var s = Array(t + 1); ++r < t; )
      s[r] = o[r];
    return s[t] = n(a), Yu(e, this, s);
  };
}
function dc(e, t) {
  return us(ds(e, t, Vr), e + "");
}
var fc = 9007199254740991;
function Ur(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= fc;
}
function Dn(e) {
  return e != null && Ur(e.length) && !jr(e);
}
function pc(e, t, n) {
  if (!at(n))
    return !1;
  var o = typeof t;
  return (o == "number" ? Dn(n) && Ko(t, n.length) : o == "string" && t in n) ? io(n[t], e) : !1;
}
function vc(e) {
  return dc(function(t, n) {
    var o = -1, r = n.length, l = r > 1 ? n[r - 1] : void 0, a = r > 2 ? n[2] : void 0;
    for (l = e.length > 3 && typeof l == "function" ? (r--, l) : void 0, a && pc(n[0], n[1], a) && (l = r < 3 ? void 0 : l, r = 1), t = Object(t); ++o < r; ) {
      var s = n[o];
      s && e(t, s, o, l);
    }
    return t;
  });
}
var hc = Object.prototype;
function qr(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || hc;
  return e === n;
}
function gc(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var mc = "[object Arguments]";
function zl(e) {
  return Jt(e) && mn(e) == mc;
}
var fs = Object.prototype, bc = fs.hasOwnProperty, yc = fs.propertyIsEnumerable, wc = zl(function() {
  return arguments;
}()) ? zl : function(e) {
  return Jt(e) && bc.call(e, "callee") && !yc.call(e, "callee");
};
const Jn = wc;
function Cc() {
  return !1;
}
var ps = typeof exports == "object" && exports && !exports.nodeType && exports, Hl = ps && typeof module == "object" && module && !module.nodeType && module, Sc = Hl && Hl.exports === ps, Dl = Sc ? wt.Buffer : void 0, Ec = Dl ? Dl.isBuffer : void 0, _c = Ec || Cc;
const Lo = _c;
var Oc = "[object Arguments]", xc = "[object Array]", Tc = "[object Boolean]", $c = "[object Date]", Pc = "[object Error]", kc = "[object Function]", Ac = "[object Map]", Lc = "[object Number]", Mc = "[object Object]", Rc = "[object RegExp]", Ic = "[object Set]", Nc = "[object String]", Fc = "[object WeakMap]", Bc = "[object ArrayBuffer]", zc = "[object DataView]", Hc = "[object Float32Array]", Dc = "[object Float64Array]", Wc = "[object Int8Array]", Vc = "[object Int16Array]", jc = "[object Int32Array]", Kc = "[object Uint8Array]", Uc = "[object Uint8ClampedArray]", qc = "[object Uint16Array]", Gc = "[object Uint32Array]", Ce = {};
Ce[Hc] = Ce[Dc] = Ce[Wc] = Ce[Vc] = Ce[jc] = Ce[Kc] = Ce[Uc] = Ce[qc] = Ce[Gc] = !0;
Ce[Oc] = Ce[xc] = Ce[Bc] = Ce[Tc] = Ce[zc] = Ce[$c] = Ce[Pc] = Ce[kc] = Ce[Ac] = Ce[Lc] = Ce[Mc] = Ce[Rc] = Ce[Ic] = Ce[Nc] = Ce[Fc] = !1;
function Yc(e) {
  return Jt(e) && Ur(e.length) && !!Ce[mn(e)];
}
function Xc(e) {
  return function(t) {
    return e(t);
  };
}
var vs = typeof exports == "object" && exports && !exports.nodeType && exports, Gn = vs && typeof module == "object" && module && !module.nodeType && module, Qc = Gn && Gn.exports === vs, rr = Qc && ls.process, Zc = function() {
  try {
    var e = Gn && Gn.require && Gn.require("util").types;
    return e || rr && rr.binding && rr.binding("util");
  } catch {
  }
}();
const Wl = Zc;
var Vl = Wl && Wl.isTypedArray, Jc = Vl ? Xc(Vl) : Yc;
const Gr = Jc;
var ed = Object.prototype, td = ed.hasOwnProperty;
function hs(e, t) {
  var n = lt(e), o = !n && Jn(e), r = !n && !o && Lo(e), l = !n && !o && !r && Gr(e), a = n || o || r || l, s = a ? gc(e.length, String) : [], i = s.length;
  for (var u in e)
    (t || td.call(e, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    l && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ko(u, i))) && s.push(u);
  return s;
}
function gs(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var nd = gs(Object.keys, Object);
const od = nd;
var rd = Object.prototype, ld = rd.hasOwnProperty;
function ad(e) {
  if (!qr(e))
    return od(e);
  var t = [];
  for (var n in Object(e))
    ld.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Yr(e) {
  return Dn(e) ? hs(e) : ad(e);
}
function sd(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var id = Object.prototype, ud = id.hasOwnProperty;
function cd(e) {
  if (!at(e))
    return sd(e);
  var t = qr(e), n = [];
  for (var o in e)
    o == "constructor" && (t || !ud.call(e, o)) || n.push(o);
  return n;
}
function ms(e) {
  return Dn(e) ? hs(e, !0) : cd(e);
}
var dd = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, fd = /^\w*$/;
function Xr(e, t) {
  if (lt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || jo(e) ? !0 : fd.test(e) || !dd.test(e) || t != null && e in Object(t);
}
var pd = yn(Object, "create");
const eo = pd;
function vd() {
  this.__data__ = eo ? eo(null) : {}, this.size = 0;
}
function hd(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var gd = "__lodash_hash_undefined__", md = Object.prototype, bd = md.hasOwnProperty;
function yd(e) {
  var t = this.__data__;
  if (eo) {
    var n = t[e];
    return n === gd ? void 0 : n;
  }
  return bd.call(t, e) ? t[e] : void 0;
}
var wd = Object.prototype, Cd = wd.hasOwnProperty;
function Sd(e) {
  var t = this.__data__;
  return eo ? t[e] !== void 0 : Cd.call(t, e);
}
var Ed = "__lodash_hash_undefined__";
function _d(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = eo && t === void 0 ? Ed : t, this;
}
function fn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
fn.prototype.clear = vd;
fn.prototype.delete = hd;
fn.prototype.get = yd;
fn.prototype.has = Sd;
fn.prototype.set = _d;
function Od() {
  this.__data__ = [], this.size = 0;
}
function Uo(e, t) {
  for (var n = e.length; n--; )
    if (io(e[n][0], t))
      return n;
  return -1;
}
var xd = Array.prototype, Td = xd.splice;
function $d(e) {
  var t = this.__data__, n = Uo(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Td.call(t, n, 1), --this.size, !0;
}
function Pd(e) {
  var t = this.__data__, n = Uo(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function kd(e) {
  return Uo(this.__data__, e) > -1;
}
function Ad(e, t) {
  var n = this.__data__, o = Uo(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function jt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
jt.prototype.clear = Od;
jt.prototype.delete = $d;
jt.prototype.get = Pd;
jt.prototype.has = kd;
jt.prototype.set = Ad;
var Ld = yn(wt, "Map");
const to = Ld;
function Md() {
  this.size = 0, this.__data__ = {
    hash: new fn(),
    map: new (to || jt)(),
    string: new fn()
  };
}
function Rd(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function qo(e, t) {
  var n = e.__data__;
  return Rd(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Id(e) {
  var t = qo(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Nd(e) {
  return qo(this, e).get(e);
}
function Fd(e) {
  return qo(this, e).has(e);
}
function Bd(e, t) {
  var n = qo(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function Kt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Kt.prototype.clear = Md;
Kt.prototype.delete = Id;
Kt.prototype.get = Nd;
Kt.prototype.has = Fd;
Kt.prototype.set = Bd;
var zd = "Expected a function";
function Qr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(zd);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], l = n.cache;
    if (l.has(r))
      return l.get(r);
    var a = e.apply(this, o);
    return n.cache = l.set(r, a) || l, a;
  };
  return n.cache = new (Qr.Cache || Kt)(), n;
}
Qr.Cache = Kt;
var Hd = 500;
function Dd(e) {
  var t = Qr(e, function(o) {
    return n.size === Hd && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Wd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Vd = /\\(\\)?/g, jd = Dd(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Wd, function(n, o, r, l) {
    t.push(r ? l.replace(Vd, "$1") : o || n);
  }), t;
});
const Kd = jd;
function Ud(e) {
  return e == null ? "" : is(e);
}
function Go(e, t) {
  return lt(e) ? e : Xr(e, t) ? [e] : Kd(Ud(e));
}
var qd = 1 / 0;
function uo(e) {
  if (typeof e == "string" || jo(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -qd ? "-0" : t;
}
function Zr(e, t) {
  t = Go(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[uo(t[n++])];
  return n && n == o ? e : void 0;
}
function Ne(e, t, n) {
  var o = e == null ? void 0 : Zr(e, t);
  return o === void 0 ? n : o;
}
function bs(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var jl = Pt ? Pt.isConcatSpreadable : void 0;
function Gd(e) {
  return lt(e) || Jn(e) || !!(jl && e && e[jl]);
}
function Jr(e, t, n, o, r) {
  var l = -1, a = e.length;
  for (n || (n = Gd), r || (r = []); ++l < a; ) {
    var s = e[l];
    t > 0 && n(s) ? t > 1 ? Jr(s, t - 1, n, o, r) : bs(r, s) : o || (r[r.length] = s);
  }
  return r;
}
function Yd(e) {
  var t = e == null ? 0 : e.length;
  return t ? Jr(e, 1) : [];
}
function Xd(e) {
  return us(ds(e, void 0, Yd), e + "");
}
var Qd = gs(Object.getPrototypeOf, Object);
const ys = Qd;
var Zd = "[object Object]", Jd = Function.prototype, ef = Object.prototype, ws = Jd.toString, tf = ef.hasOwnProperty, nf = ws.call(Object);
function of(e) {
  if (!Jt(e) || mn(e) != Zd)
    return !1;
  var t = ys(e);
  if (t === null)
    return !0;
  var n = tf.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && ws.call(n) == nf;
}
function rf() {
  this.__data__ = new jt(), this.size = 0;
}
function lf(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function af(e) {
  return this.__data__.get(e);
}
function sf(e) {
  return this.__data__.has(e);
}
var uf = 200;
function cf(e, t) {
  var n = this.__data__;
  if (n instanceof jt) {
    var o = n.__data__;
    if (!to || o.length < uf - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Kt(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Tt(e) {
  var t = this.__data__ = new jt(e);
  this.size = t.size;
}
Tt.prototype.clear = rf;
Tt.prototype.delete = lf;
Tt.prototype.get = af;
Tt.prototype.has = sf;
Tt.prototype.set = cf;
var Cs = typeof exports == "object" && exports && !exports.nodeType && exports, Kl = Cs && typeof module == "object" && module && !module.nodeType && module, df = Kl && Kl.exports === Cs, Ul = df ? wt.Buffer : void 0, ql = Ul ? Ul.allocUnsafe : void 0;
function ff(e, t) {
  if (t)
    return e.slice();
  var n = e.length, o = ql ? ql(n) : new e.constructor(n);
  return e.copy(o), o;
}
function pf(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, l = []; ++n < o; ) {
    var a = e[n];
    t(a, n, e) && (l[r++] = a);
  }
  return l;
}
function vf() {
  return [];
}
var hf = Object.prototype, gf = hf.propertyIsEnumerable, Gl = Object.getOwnPropertySymbols, mf = Gl ? function(e) {
  return e == null ? [] : (e = Object(e), pf(Gl(e), function(t) {
    return gf.call(e, t);
  }));
} : vf;
const bf = mf;
function yf(e, t, n) {
  var o = t(e);
  return lt(e) ? o : bs(o, n(e));
}
function Yl(e) {
  return yf(e, Yr, bf);
}
var wf = yn(wt, "DataView");
const mr = wf;
var Cf = yn(wt, "Promise");
const br = Cf;
var Sf = yn(wt, "Set");
const yr = Sf;
var Xl = "[object Map]", Ef = "[object Object]", Ql = "[object Promise]", Zl = "[object Set]", Jl = "[object WeakMap]", ea = "[object DataView]", _f = bn(mr), Of = bn(to), xf = bn(br), Tf = bn(yr), $f = bn(gr), rn = mn;
(mr && rn(new mr(new ArrayBuffer(1))) != ea || to && rn(new to()) != Xl || br && rn(br.resolve()) != Ql || yr && rn(new yr()) != Zl || gr && rn(new gr()) != Jl) && (rn = function(e) {
  var t = mn(e), n = t == Ef ? e.constructor : void 0, o = n ? bn(n) : "";
  if (o)
    switch (o) {
      case _f:
        return ea;
      case Of:
        return Xl;
      case xf:
        return Ql;
      case Tf:
        return Zl;
      case $f:
        return Jl;
    }
  return t;
});
const ta = rn;
var Pf = wt.Uint8Array;
const Mo = Pf;
function kf(e) {
  var t = new e.constructor(e.byteLength);
  return new Mo(t).set(new Mo(e)), t;
}
function Af(e, t) {
  var n = t ? kf(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
function Lf(e) {
  return typeof e.constructor == "function" && !qr(e) ? Gu(ys(e)) : {};
}
var Mf = "__lodash_hash_undefined__";
function Rf(e) {
  return this.__data__.set(e, Mf), this;
}
function If(e) {
  return this.__data__.has(e);
}
function Ro(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Kt(); ++t < n; )
    this.add(e[t]);
}
Ro.prototype.add = Ro.prototype.push = Rf;
Ro.prototype.has = If;
function Nf(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Ff(e, t) {
  return e.has(t);
}
var Bf = 1, zf = 2;
function Ss(e, t, n, o, r, l) {
  var a = n & Bf, s = e.length, i = t.length;
  if (s != i && !(a && i > s))
    return !1;
  var u = l.get(e), d = l.get(t);
  if (u && d)
    return u == t && d == e;
  var f = -1, p = !0, v = n & zf ? new Ro() : void 0;
  for (l.set(e, t), l.set(t, e); ++f < s; ) {
    var c = e[f], g = t[f];
    if (o)
      var y = a ? o(g, c, f, t, e, l) : o(c, g, f, e, t, l);
    if (y !== void 0) {
      if (y)
        continue;
      p = !1;
      break;
    }
    if (v) {
      if (!Nf(t, function(m, w) {
        if (!Ff(v, w) && (c === m || r(c, m, n, o, l)))
          return v.push(w);
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
function Hf(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function Df(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var Wf = 1, Vf = 2, jf = "[object Boolean]", Kf = "[object Date]", Uf = "[object Error]", qf = "[object Map]", Gf = "[object Number]", Yf = "[object RegExp]", Xf = "[object Set]", Qf = "[object String]", Zf = "[object Symbol]", Jf = "[object ArrayBuffer]", ep = "[object DataView]", na = Pt ? Pt.prototype : void 0, lr = na ? na.valueOf : void 0;
function tp(e, t, n, o, r, l, a) {
  switch (n) {
    case ep:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Jf:
      return !(e.byteLength != t.byteLength || !l(new Mo(e), new Mo(t)));
    case jf:
    case Kf:
    case Gf:
      return io(+e, +t);
    case Uf:
      return e.name == t.name && e.message == t.message;
    case Yf:
    case Qf:
      return e == t + "";
    case qf:
      var s = Hf;
    case Xf:
      var i = o & Wf;
      if (s || (s = Df), e.size != t.size && !i)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      o |= Vf, a.set(e, t);
      var d = Ss(s(e), s(t), o, r, l, a);
      return a.delete(e), d;
    case Zf:
      if (lr)
        return lr.call(e) == lr.call(t);
  }
  return !1;
}
var np = 1, op = Object.prototype, rp = op.hasOwnProperty;
function lp(e, t, n, o, r, l) {
  var a = n & np, s = Yl(e), i = s.length, u = Yl(t), d = u.length;
  if (i != d && !a)
    return !1;
  for (var f = i; f--; ) {
    var p = s[f];
    if (!(a ? p in t : rp.call(t, p)))
      return !1;
  }
  var v = l.get(e), c = l.get(t);
  if (v && c)
    return v == t && c == e;
  var g = !0;
  l.set(e, t), l.set(t, e);
  for (var y = a; ++f < i; ) {
    p = s[f];
    var m = e[p], w = t[p];
    if (o)
      var S = a ? o(w, m, p, t, e, l) : o(m, w, p, e, t, l);
    if (!(S === void 0 ? m === w || r(m, w, n, o, l) : S)) {
      g = !1;
      break;
    }
    y || (y = p == "constructor");
  }
  if (g && !y) {
    var b = e.constructor, T = t.constructor;
    b != T && "constructor" in e && "constructor" in t && !(typeof b == "function" && b instanceof b && typeof T == "function" && T instanceof T) && (g = !1);
  }
  return l.delete(e), l.delete(t), g;
}
var ap = 1, oa = "[object Arguments]", ra = "[object Array]", ho = "[object Object]", sp = Object.prototype, la = sp.hasOwnProperty;
function ip(e, t, n, o, r, l) {
  var a = lt(e), s = lt(t), i = a ? ra : ta(e), u = s ? ra : ta(t);
  i = i == oa ? ho : i, u = u == oa ? ho : u;
  var d = i == ho, f = u == ho, p = i == u;
  if (p && Lo(e)) {
    if (!Lo(t))
      return !1;
    a = !0, d = !1;
  }
  if (p && !d)
    return l || (l = new Tt()), a || Gr(e) ? Ss(e, t, n, o, r, l) : tp(e, t, i, n, o, r, l);
  if (!(n & ap)) {
    var v = d && la.call(e, "__wrapped__"), c = f && la.call(t, "__wrapped__");
    if (v || c) {
      var g = v ? e.value() : e, y = c ? t.value() : t;
      return l || (l = new Tt()), r(g, y, n, o, l);
    }
  }
  return p ? (l || (l = new Tt()), lp(e, t, n, o, r, l)) : !1;
}
function Yo(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !Jt(e) && !Jt(t) ? e !== e && t !== t : ip(e, t, n, o, Yo, r);
}
var up = 1, cp = 2;
function dp(e, t, n, o) {
  var r = n.length, l = r, a = !o;
  if (e == null)
    return !l;
  for (e = Object(e); r--; ) {
    var s = n[r];
    if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++r < l; ) {
    s = n[r];
    var i = s[0], u = e[i], d = s[1];
    if (a && s[2]) {
      if (u === void 0 && !(i in e))
        return !1;
    } else {
      var f = new Tt();
      if (o)
        var p = o(u, d, i, e, t, f);
      if (!(p === void 0 ? Yo(d, u, up | cp, o, f) : p))
        return !1;
    }
  }
  return !0;
}
function Es(e) {
  return e === e && !at(e);
}
function fp(e) {
  for (var t = Yr(e), n = t.length; n--; ) {
    var o = t[n], r = e[o];
    t[n] = [o, r, Es(r)];
  }
  return t;
}
function _s(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function pp(e) {
  var t = fp(e);
  return t.length == 1 && t[0][2] ? _s(t[0][0], t[0][1]) : function(n) {
    return n === e || dp(n, e, t);
  };
}
function vp(e, t) {
  return e != null && t in Object(e);
}
function hp(e, t, n) {
  t = Go(t, e);
  for (var o = -1, r = t.length, l = !1; ++o < r; ) {
    var a = uo(t[o]);
    if (!(l = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return l || ++o != r ? l : (r = e == null ? 0 : e.length, !!r && Ur(r) && Ko(a, r) && (lt(e) || Jn(e)));
}
function Os(e, t) {
  return e != null && hp(e, t, vp);
}
var gp = 1, mp = 2;
function bp(e, t) {
  return Xr(e) && Es(t) ? _s(uo(e), t) : function(n) {
    var o = Ne(n, e);
    return o === void 0 && o === t ? Os(n, e) : Yo(t, o, gp | mp);
  };
}
function yp(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function wp(e) {
  return function(t) {
    return Zr(t, e);
  };
}
function Cp(e) {
  return Xr(e) ? yp(uo(e)) : wp(e);
}
function Sp(e) {
  return typeof e == "function" ? e : e == null ? Vr : typeof e == "object" ? lt(e) ? bp(e[0], e[1]) : pp(e) : Cp(e);
}
function Ep(e) {
  return function(t, n, o) {
    for (var r = -1, l = Object(t), a = o(t), s = a.length; s--; ) {
      var i = a[e ? s : ++r];
      if (n(l[i], i, l) === !1)
        break;
    }
    return t;
  };
}
var _p = Ep();
const xs = _p;
function Op(e, t) {
  return e && xs(e, t, Yr);
}
function xp(e, t) {
  return function(n, o) {
    if (n == null)
      return n;
    if (!Dn(n))
      return e(n, o);
    for (var r = n.length, l = t ? r : -1, a = Object(n); (t ? l-- : ++l < r) && o(a[l], l, a) !== !1; )
      ;
    return n;
  };
}
var Tp = xp(Op);
const $p = Tp;
var Pp = function() {
  return wt.Date.now();
};
const ar = Pp;
var kp = "Expected a function", Ap = Math.max, Lp = Math.min;
function kn(e, t, n) {
  var o, r, l, a, s, i, u = 0, d = !1, f = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(kp);
  t = Il(t) || 0, at(n) && (d = !!n.leading, f = "maxWait" in n, l = f ? Ap(Il(n.maxWait) || 0, t) : l, p = "trailing" in n ? !!n.trailing : p);
  function v(_) {
    var C = o, $ = r;
    return o = r = void 0, u = _, a = e.apply($, C), a;
  }
  function c(_) {
    return u = _, s = setTimeout(m, t), d ? v(_) : a;
  }
  function g(_) {
    var C = _ - i, $ = _ - u, L = t - C;
    return f ? Lp(L, l - $) : L;
  }
  function y(_) {
    var C = _ - i, $ = _ - u;
    return i === void 0 || C >= t || C < 0 || f && $ >= l;
  }
  function m() {
    var _ = ar();
    if (y(_))
      return w(_);
    s = setTimeout(m, g(_));
  }
  function w(_) {
    return s = void 0, p && o ? v(_) : (o = r = void 0, a);
  }
  function S() {
    s !== void 0 && clearTimeout(s), u = 0, o = i = r = s = void 0;
  }
  function b() {
    return s === void 0 ? a : w(ar());
  }
  function T() {
    var _ = ar(), C = y(_);
    if (o = arguments, r = this, i = _, C) {
      if (s === void 0)
        return c(i);
      if (f)
        return clearTimeout(s), s = setTimeout(m, t), v(i);
    }
    return s === void 0 && (s = setTimeout(m, t)), a;
  }
  return T.cancel = S, T.flush = b, T;
}
function wr(e, t, n) {
  (n !== void 0 && !io(e[t], n) || n === void 0 && !(t in e)) && Kr(e, t, n);
}
function Mp(e) {
  return Jt(e) && Dn(e);
}
function Cr(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Rp(e) {
  return cc(e, ms(e));
}
function Ip(e, t, n, o, r, l, a) {
  var s = Cr(e, n), i = Cr(t, n), u = a.get(i);
  if (u) {
    wr(e, n, u);
    return;
  }
  var d = l ? l(s, i, n + "", e, t, a) : void 0, f = d === void 0;
  if (f) {
    var p = lt(i), v = !p && Lo(i), c = !p && !v && Gr(i);
    d = i, p || v || c ? lt(s) ? d = s : Mp(s) ? d = Xu(s) : v ? (f = !1, d = ff(i, !0)) : c ? (f = !1, d = Af(i, !0)) : d = [] : of(i) || Jn(i) ? (d = s, Jn(s) ? d = Rp(s) : (!at(s) || jr(s)) && (d = Lf(i))) : f = !1;
  }
  f && (a.set(i, d), r(d, i, o, l, a), a.delete(i)), wr(e, n, d);
}
function Ts(e, t, n, o, r) {
  e !== t && xs(t, function(l, a) {
    if (r || (r = new Tt()), at(l))
      Ip(e, t, a, n, Ts, o, r);
    else {
      var s = o ? o(Cr(e, a), l, a + "", e, t, r) : void 0;
      s === void 0 && (s = l), wr(e, a, s);
    }
  }, ms);
}
function Np(e, t) {
  var n = -1, o = Dn(e) ? Array(e.length) : [];
  return $p(e, function(r, l, a) {
    o[++n] = t(r, l, a);
  }), o;
}
function Fp(e, t) {
  var n = lt(e) ? ss : Np;
  return n(e, Sp(t));
}
function Bp(e, t) {
  return Jr(Fp(e, t), 1);
}
function Io(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var r = e[t];
    o[r[0]] = r[1];
  }
  return o;
}
function No(e, t) {
  return Yo(e, t);
}
function Xo(e) {
  return e == null;
}
function zp(e) {
  return e === void 0;
}
var Hp = vc(function(e, t, n) {
  Ts(e, t, n);
});
const $s = Hp;
function Ps(e, t, n, o) {
  if (!at(e))
    return e;
  t = Go(t, e);
  for (var r = -1, l = t.length, a = l - 1, s = e; s != null && ++r < l; ) {
    var i = uo(t[r]), u = n;
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return e;
    if (r != a) {
      var d = s[i];
      u = o ? o(d, i, s) : void 0, u === void 0 && (u = at(d) ? d : Ko(t[r + 1]) ? [] : {});
    }
    cs(s, i, u), s = s[i];
  }
  return e;
}
function Dp(e, t, n) {
  for (var o = -1, r = t.length, l = {}; ++o < r; ) {
    var a = t[o], s = Zr(e, a);
    n(s, a) && Ps(l, Go(a, e), s);
  }
  return l;
}
function Wp(e, t) {
  return Dp(e, t, function(n, o) {
    return Os(e, o);
  });
}
var Vp = Xd(function(e, t) {
  return e == null ? {} : Wp(e, t);
});
const jp = Vp;
function Kp(e, t, n) {
  return e == null ? e : Ps(e, t, n);
}
const zt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const l = e == null ? void 0 : e(r);
  if (n === !1 || !l)
    return t == null ? void 0 : t(r);
};
var aa;
const _e = typeof window < "u", An = (e) => typeof e == "boolean", $e = (e) => typeof e == "number", Up = (e) => typeof e == "string", ks = () => {
}, qp = _e && ((aa = window == null ? void 0 : window.navigator) == null ? void 0 : aa.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function As(e) {
  return typeof e == "function" ? e() : h(e);
}
function Gp(e) {
  return e;
}
function el(e) {
  return Gi() ? (Yi(e), !0) : !1;
}
function Yp(e, t = !0) {
  we() ? ke(e) : t ? e() : ue(e);
}
function Xt(e) {
  var t;
  const n = As(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const tl = _e ? window : void 0;
function Zt(...e) {
  let t, n, o, r;
  if (Up(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = tl) : [t, n, o, r] = e, !t)
    return ks;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const l = [], a = () => {
    l.forEach((d) => d()), l.length = 0;
  }, s = (d, f, p, v) => (d.addEventListener(f, p, v), () => d.removeEventListener(f, p, v)), i = U(() => [Xt(t), As(r)], ([d, f]) => {
    a(), d && l.push(...n.flatMap((p) => o.map((v) => s(d, p, v, f))));
  }, { immediate: !0, flush: "post" }), u = () => {
    i(), a();
  };
  return el(u), u;
}
let sa = !1;
function Xp(e, t, n = {}) {
  const { window: o = tl, ignore: r = [], capture: l = !0, detectIframe: a = !1 } = n;
  if (!o)
    return;
  qp && !sa && (sa = !0, Array.from(o.document.body.children).forEach((p) => p.addEventListener("click", ks)));
  let s = !0;
  const i = (p) => r.some((v) => {
    if (typeof v == "string")
      return Array.from(o.document.querySelectorAll(v)).some((c) => c === p.target || p.composedPath().includes(c));
    {
      const c = Xt(v);
      return c && (p.target === c || p.composedPath().includes(c));
    }
  }), d = [
    Zt(o, "click", (p) => {
      const v = Xt(e);
      if (!(!v || v === p.target || p.composedPath().includes(v))) {
        if (p.detail === 0 && (s = !i(p)), !s) {
          s = !0;
          return;
        }
        t(p);
      }
    }, { passive: !0, capture: l }),
    Zt(o, "pointerdown", (p) => {
      const v = Xt(e);
      v && (s = !p.composedPath().includes(v) && !i(p));
    }, { passive: !0 }),
    a && Zt(o, "blur", (p) => {
      var v;
      const c = Xt(e);
      ((v = o.document.activeElement) == null ? void 0 : v.tagName) === "IFRAME" && !(c != null && c.contains(o.document.activeElement)) && t(p);
    })
  ].filter(Boolean);
  return () => d.forEach((p) => p());
}
function Qp(e, t = !1) {
  const n = x(), o = () => n.value = Boolean(e());
  return o(), Yp(o, t), n;
}
const Sr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Er = "__vueuse_ssr_handlers__";
Sr[Er] = Sr[Er] || {};
Sr[Er];
var ia = Object.getOwnPropertySymbols, Zp = Object.prototype.hasOwnProperty, Jp = Object.prototype.propertyIsEnumerable, ev = (e, t) => {
  var n = {};
  for (var o in e)
    Zp.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && ia)
    for (var o of ia(e))
      t.indexOf(o) < 0 && Jp.call(e, o) && (n[o] = e[o]);
  return n;
};
function Ln(e, t, n = {}) {
  const o = n, { window: r = tl } = o, l = ev(o, ["window"]);
  let a;
  const s = Qp(() => r && "ResizeObserver" in r), i = () => {
    a && (a.disconnect(), a = void 0);
  }, u = U(() => Xt(e), (f) => {
    i(), s.value && r && f && (a = new ResizeObserver(t), a.observe(f, l));
  }, { immediate: !0, flush: "post" }), d = () => {
    i(), u();
  };
  return el(d), {
    isSupported: s,
    stop: d
  };
}
var ua;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ua || (ua = {}));
var tv = Object.defineProperty, ca = Object.getOwnPropertySymbols, nv = Object.prototype.hasOwnProperty, ov = Object.prototype.propertyIsEnumerable, da = (e, t, n) => t in e ? tv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, rv = (e, t) => {
  for (var n in t || (t = {}))
    nv.call(t, n) && da(e, n, t[n]);
  if (ca)
    for (var n of ca(t))
      ov.call(t, n) && da(e, n, t[n]);
  return e;
};
const lv = {
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
rv({
  linear: Gp
}, lv);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const no = () => {
}, av = Object.prototype.hasOwnProperty, pn = (e, t) => av.call(e, t), vn = Array.isArray, Ot = (e) => typeof e == "function", ot = (e) => typeof e == "string", st = (e) => e !== null && typeof e == "object", sv = Object.prototype.toString, iv = (e) => sv.call(e), sr = (e) => iv(e).slice(8, -1), Ls = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, uv = /-(\w)/g, cv = Ls((e) => e.replace(uv, (t, n) => n ? n.toUpperCase() : "")), dv = /\B([A-Z])/g, fv = Ls((e) => e.replace(dv, "-$1").toLowerCase()), Fo = (e) => e === void 0, oo = (e) => typeof Element > "u" ? !1 : e instanceof Element, pv = (e) => ot(e) ? !Number.isNaN(Number(e)) : !1, vv = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), hv = (e, t, n) => ({
  get value() {
    return Ne(e, t, n);
  },
  set value(o) {
    Kp(e, t, o);
  }
});
class Ms extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Rs(e, t) {
  throw new Ms(`[${e}] ${t}`);
}
function Fe(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = ot(e) ? new Ms(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const gv = "utils/dom/style", Is = (e = "") => e.split(" ").filter((t) => !!t.trim()), _o = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, Bo = (e, t) => {
  !e || !t.trim() || e.classList.add(...Is(t));
}, hn = (e, t) => {
  !e || !t.trim() || e.classList.remove(...Is(t));
}, ln = (e, t) => {
  var n;
  if (!_e || !e || !t)
    return "";
  let o = cv(t);
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
function _r(e, t = "px") {
  if (!e)
    return "";
  if ($e(e) || pv(e))
    return `${e}${t}`;
  if (ot(e))
    return e;
  Fe(gv, "binding value must be a string or number");
}
function mv(e, t) {
  if (!_e)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let o = t.offsetParent;
  for (; o !== null && e !== o && e.contains(o); )
    n.push(o), o = o.offsetParent;
  const r = t.offsetTop + n.reduce((i, u) => i + u.offsetTop, 0), l = r + t.offsetHeight, a = e.scrollTop, s = a + e.clientHeight;
  r < a ? e.scrollTop = r : l > s && (e.scrollTop = l - e.clientHeight);
}
/*! Element Plus Icons Vue v2.0.10 */
var it = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [o, r] of t)
    n[o] = r;
  return n;
}, bv = {
  name: "ArrowDown"
}, yv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, wv = /* @__PURE__ */ V("path", {
  fill: "currentColor",
  d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
}, null, -1), Cv = [
  wv
];
function Sv(e, t, n, o, r, l) {
  return P(), N("svg", yv, Cv);
}
var Ns = /* @__PURE__ */ it(bv, [["render", Sv], ["__file", "arrow-down.vue"]]), Ev = {
  name: "ArrowLeft"
}, _v = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ov = /* @__PURE__ */ V("path", {
  fill: "currentColor",
  d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
}, null, -1), xv = [
  Ov
];
function Tv(e, t, n, o, r, l) {
  return P(), N("svg", _v, xv);
}
var $v = /* @__PURE__ */ it(Ev, [["render", Tv], ["__file", "arrow-left.vue"]]), Pv = {
  name: "ArrowRight"
}, kv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Av = /* @__PURE__ */ V("path", {
  fill: "currentColor",
  d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
}, null, -1), Lv = [
  Av
];
function Mv(e, t, n, o, r, l) {
  return P(), N("svg", kv, Lv);
}
var nl = /* @__PURE__ */ it(Pv, [["render", Mv], ["__file", "arrow-right.vue"]]), Rv = {
  name: "ArrowUp"
}, Iv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Nv = /* @__PURE__ */ V("path", {
  fill: "currentColor",
  d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
}, null, -1), Fv = [
  Nv
];
function Bv(e, t, n, o, r, l) {
  return P(), N("svg", Iv, Fv);
}
var zv = /* @__PURE__ */ it(Rv, [["render", Bv], ["__file", "arrow-up.vue"]]), Hv = {
  name: "CircleCheck"
}, Dv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Wv = /* @__PURE__ */ V("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), Vv = /* @__PURE__ */ V("path", {
  fill: "currentColor",
  d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
}, null, -1), jv = [
  Wv,
  Vv
];
function Kv(e, t, n, o, r, l) {
  return P(), N("svg", Dv, jv);
}
var Uv = /* @__PURE__ */ it(Hv, [["render", Kv], ["__file", "circle-check.vue"]]), qv = {
  name: "CircleClose"
}, Gv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Yv = /* @__PURE__ */ V("path", {
  fill: "currentColor",
  d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
}, null, -1), Xv = /* @__PURE__ */ V("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), Qv = [
  Yv,
  Xv
];
function Zv(e, t, n, o, r, l) {
  return P(), N("svg", Gv, Qv);
}
var ol = /* @__PURE__ */ it(qv, [["render", Zv], ["__file", "circle-close.vue"]]), Jv = {
  name: "Close"
}, eh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, th = /* @__PURE__ */ V("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1), nh = [
  th
];
function oh(e, t, n, o, r, l) {
  return P(), N("svg", eh, nh);
}
var fa = /* @__PURE__ */ it(Jv, [["render", oh], ["__file", "close.vue"]]), rh = {
  name: "DArrowLeft"
}, lh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ah = /* @__PURE__ */ V("path", {
  fill: "currentColor",
  d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
}, null, -1), sh = [
  ah
];
function ih(e, t, n, o, r, l) {
  return P(), N("svg", lh, sh);
}
var uh = /* @__PURE__ */ it(rh, [["render", ih], ["__file", "d-arrow-left.vue"]]), ch = {
  name: "DArrowRight"
}, dh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, fh = /* @__PURE__ */ V("path", {
  fill: "currentColor",
  d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
}, null, -1), ph = [
  fh
];
function vh(e, t, n, o, r, l) {
  return P(), N("svg", dh, ph);
}
var hh = /* @__PURE__ */ it(ch, [["render", vh], ["__file", "d-arrow-right.vue"]]), gh = {
  name: "Hide"
}, mh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, bh = /* @__PURE__ */ V("path", {
  d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z",
  fill: "currentColor"
}, null, -1), yh = /* @__PURE__ */ V("path", {
  d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z",
  fill: "currentColor"
}, null, -1), wh = [
  bh,
  yh
];
function Ch(e, t, n, o, r, l) {
  return P(), N("svg", mh, wh);
}
var Sh = /* @__PURE__ */ it(gh, [["render", Ch], ["__file", "hide.vue"]]), Eh = {
  name: "Loading"
}, _h = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Oh = /* @__PURE__ */ V("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1), xh = [
  Oh
];
function Th(e, t, n, o, r, l) {
  return P(), N("svg", _h, xh);
}
var rl = /* @__PURE__ */ it(Eh, [["render", Th], ["__file", "loading.vue"]]), $h = {
  name: "MoreFilled"
}, Ph = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, kh = /* @__PURE__ */ V("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"
}, null, -1), Ah = [
  kh
];
function Lh(e, t, n, o, r, l) {
  return P(), N("svg", Ph, Ah);
}
var pa = /* @__PURE__ */ it($h, [["render", Lh], ["__file", "more-filled.vue"]]), Mh = {
  name: "View"
}, Rh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ih = /* @__PURE__ */ V("path", {
  fill: "currentColor",
  d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
}, null, -1), Nh = [
  Ih
];
function Fh(e, t, n, o, r, l) {
  return P(), N("svg", Rh, Nh);
}
var Bh = /* @__PURE__ */ it(Mh, [["render", Fh], ["__file", "view.vue"]]);
const Fs = "__epPropKey", fe = (e) => e, zh = (e) => st(e) && !!e[Fs], Qo = (e, t) => {
  if (!st(e) || zh(e))
    return e;
  const { values: n, required: o, default: r, type: l, validator: a } = e, i = {
    type: l,
    required: !!o,
    validator: n || a ? (u) => {
      let d = !1, f = [];
      if (n && (f = Array.from(n), pn(e, "default") && f.push(r), d || (d = f.includes(u))), a && (d || (d = a(u))), !d && f.length > 0) {
        const p = [...new Set(f)].map((v) => JSON.stringify(v)).join(", ");
        Xi(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${p}], got value ${JSON.stringify(u)}.`);
      }
      return d;
    } : void 0,
    [Fs]: !0
  };
  return pn(e, "default") && (i.default = r), i;
}, Ee = (e) => Io(Object.entries(e).map(([t, n]) => [
  t,
  Qo(n, t)
])), kt = fe([
  String,
  Object,
  Function
]), Hh = {
  validating: rl,
  success: Uv,
  error: ol
}, Ct = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, Wn = (e) => (e.install = no, e), ro = {
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
}, Ve = "update:modelValue", Bs = "change", co = ["", "default", "small", "large"], Dh = {
  large: 40,
  default: 32,
  small: 24
}, Wh = (e) => Dh[e || "default"], Vh = (e) => ["", ...co].includes(e), jh = () => _e && /firefox/i.test(window.navigator.userAgent), zs = (e) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e), ll = (e) => e, Kh = ["class", "style"], Uh = /^on[A-Z]/, qh = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = O(() => ((n == null ? void 0 : n.value) || []).concat(Kh)), r = we();
  return r ? O(() => {
    var l;
    return Io(Object.entries((l = r.proxy) == null ? void 0 : l.$attrs).filter(([a]) => !o.value.includes(a) && !(t && Uh.test(a))));
  }) : (Fe("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), O(() => ({})));
}, Hs = Symbol("buttonGroupContextKey"), Vn = Symbol("checkboxGroupContextKey"), Gh = Symbol(), al = Symbol("formContextKey"), zo = Symbol("formItemContextKey"), Ds = Symbol("elPaginationKey"), Ws = Symbol("scrollbarContextKey"), sl = Symbol("popper"), Vs = Symbol("popperContent"), il = Symbol("elTooltip"), js = (e) => {
  const t = we();
  return O(() => {
    var n, o;
    return (o = ((n = t.proxy) == null ? void 0 : n.$props)[e]) != null ? o : void 0;
  });
}, va = x();
function wn(e, t = void 0) {
  const n = we() ? se(Gh, va) : va;
  return e ? O(() => {
    var o, r;
    return (r = (o = n.value) == null ? void 0 : o[e]) != null ? r : t;
  }) : n;
}
const fo = Qo({
  type: String,
  values: co,
  required: !1
}), gn = (e, t = {}) => {
  const n = x(void 0), o = t.prop ? n : js("size"), r = t.global ? n : wn("size"), l = t.form ? { size: void 0 } : se(al, void 0), a = t.formItem ? { size: void 0 } : se(zo, void 0);
  return O(() => o.value || h(e) || (a == null ? void 0 : a.size) || (l == null ? void 0 : l.size) || r.value || "");
}, Zo = (e) => {
  const t = js("disabled"), n = se(al, void 0);
  return O(() => t.value || h(e) || (n == null ? void 0 : n.disabled) || !1);
}, Ks = ({ from: e, replacement: t, scope: n, version: o, ref: r, type: l = "API" }, a) => {
  U(() => h(a), (s) => {
    s && Fe(n, `[${l}] ${e} is about to be deprecated in version ${o}, please use ${t} instead.
For more detail, please visit: ${r}
`);
  }, {
    immediate: !0
  });
}, Yh = (e) => ({
  focus: () => {
    var t, n;
    (n = (t = e.value) == null ? void 0 : t.focus) == null || n.call(t);
  }
}), ul = "el", Xh = "is-", on = (e, t, n, o, r) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), o && (l += `__${o}`), r && (l += `--${r}`), l;
}, ne = (e) => {
  const t = wn("namespace", ul);
  return {
    namespace: t,
    b: (c = "") => on(t.value, e, c, "", ""),
    e: (c) => c ? on(t.value, e, "", c, "") : "",
    m: (c) => c ? on(t.value, e, "", "", c) : "",
    be: (c, g) => c && g ? on(t.value, e, c, g, "") : "",
    em: (c, g) => c && g ? on(t.value, e, "", c, g) : "",
    bm: (c, g) => c && g ? on(t.value, e, c, "", g) : "",
    bem: (c, g, y) => c && g && y ? on(t.value, e, c, g, y) : "",
    is: (c, ...g) => {
      const y = g.length >= 1 ? g[0] : !0;
      return c && y ? `${Xh}${c}` : "";
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
}, Or = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Qh = Symbol("elIdInjection"), Us = () => we() ? se(Qh, Or) : Or, qs = (e) => {
  const t = Us();
  !_e && t === Or && Fe("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = wn("namespace", ul);
  return O(() => h(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, jn = () => {
  const e = se(al, void 0), t = se(zo, void 0);
  return {
    form: e,
    formItem: t
  };
}, cl = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = x(!1)), o || (o = x(!1));
  const r = x();
  let l;
  const a = O(() => {
    var s;
    return !!(!e.label && t && t.inputIds && ((s = t.inputIds) == null ? void 0 : s.length) <= 1);
  });
  return ke(() => {
    l = U([xt(e, "id"), n], ([s, i]) => {
      const u = s ?? (i ? void 0 : qs().value);
      u !== r.value && (t != null && t.removeInputId && (r.value && t.removeInputId(r.value), !(o != null && o.value) && !i && u && t.addInputId(u)), r.value = u);
    }, { immediate: !0 });
  }), Do(() => {
    l && l(), t != null && t.removeInputId && r.value && t.removeInputId(r.value);
  }), {
    isLabeledByFormItem: a,
    inputId: r
  };
};
var Zh = {
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
const Jh = (e) => (t, n) => eg(t, n, h(e)), eg = (e, t, n) => Ne(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var l;
  return `${(l = t == null ? void 0 : t[r]) != null ? l : `{${r}}`}`;
}), tg = (e) => {
  const t = O(() => h(e).name), n = dn(e) ? e : x(e);
  return {
    lang: t,
    locale: n,
    t: Jh(e)
  };
}, Ut = () => {
  const e = wn("locale");
  return tg(O(() => e.value || Zh));
}, ng = Qo({
  type: fe(Boolean),
  default: null
}), og = Qo({
  type: fe(Function)
}), rg = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: ng,
    [n]: og
  };
  return {
    useModelToggle: ({
      indicator: a,
      toggleReason: s,
      shouldHideWhenRouteChanges: i,
      shouldProceed: u,
      onShow: d,
      onHide: f
    }) => {
      const p = we(), { emit: v } = p, c = p.props, g = O(() => Ot(c[n])), y = O(() => c[e] === null), m = (C) => {
        a.value !== !0 && (a.value = !0, s && (s.value = C), Ot(d) && d(C));
      }, w = (C) => {
        a.value !== !1 && (a.value = !1, s && (s.value = C), Ot(f) && f(C));
      }, S = (C) => {
        if (c.disabled === !0 || Ot(u) && !u())
          return;
        const $ = g.value && _e;
        $ && v(t, !0), (y.value || !$) && m(C);
      }, b = (C) => {
        if (c.disabled === !0 || !_e)
          return;
        const $ = g.value && _e;
        $ && v(t, !1), (y.value || !$) && w(C);
      }, T = (C) => {
        An(C) && (c.disabled && C ? g.value && v(t, !1) : a.value !== C && (C ? m() : w()));
      }, _ = () => {
        a.value ? b() : S();
      };
      return U(() => c[e], T), i && p.appContext.config.globalProperties.$route !== void 0 && U(() => ({
        ...p.proxy.$route
      }), () => {
        i.value && a.value && b();
      }), ke(() => {
        T(c[e]);
      }), {
        hide: b,
        show: S,
        toggle: _,
        hasUpdateHandler: g
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
};
var Ye = "top", ft = "bottom", pt = "right", Xe = "left", dl = "auto", po = [Ye, ft, pt, Xe], Mn = "start", lo = "end", lg = "clippingParents", Gs = "viewport", qn = "popper", ag = "reference", ha = po.reduce(function(e, t) {
  return e.concat([t + "-" + Mn, t + "-" + lo]);
}, []), Jo = [].concat(po, [dl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Mn, t + "-" + lo]);
}, []), sg = "beforeRead", ig = "read", ug = "afterRead", cg = "beforeMain", dg = "main", fg = "afterMain", pg = "beforeWrite", vg = "write", hg = "afterWrite", gg = [sg, ig, ug, cg, dg, fg, pg, vg, hg];
function At(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function St(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Rn(e) {
  var t = St(e).Element;
  return e instanceof t || e instanceof Element;
}
function dt(e) {
  var t = St(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function fl(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = St(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function mg(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, l = t.elements[n];
    !dt(l) || !At(l) || (Object.assign(l.style, o), Object.keys(r).forEach(function(a) {
      var s = r[a];
      s === !1 ? l.removeAttribute(a) : l.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function bg(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], l = t.attributes[o] || {}, a = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), s = a.reduce(function(i, u) {
        return i[u] = "", i;
      }, {});
      !dt(r) || !At(r) || (Object.assign(r.style, s), Object.keys(l).forEach(function(i) {
        r.removeAttribute(i);
      }));
    });
  };
}
var Ys = { name: "applyStyles", enabled: !0, phase: "write", fn: mg, effect: bg, requires: ["computeStyles"] };
function $t(e) {
  return e.split("-")[0];
}
var cn = Math.max, Ho = Math.min, In = Math.round;
function Nn(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), o = 1, r = 1;
  if (dt(e) && t) {
    var l = e.offsetHeight, a = e.offsetWidth;
    a > 0 && (o = In(n.width) / a || 1), l > 0 && (r = In(n.height) / l || 1);
  }
  return { width: n.width / o, height: n.height / r, top: n.top / r, right: n.right / o, bottom: n.bottom / r, left: n.left / o, x: n.left / o, y: n.top / r };
}
function pl(e) {
  var t = Nn(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function Xs(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && fl(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Vt(e) {
  return St(e).getComputedStyle(e);
}
function yg(e) {
  return ["table", "td", "th"].indexOf(At(e)) >= 0;
}
function en(e) {
  return ((Rn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function er(e) {
  return At(e) === "html" ? e : e.assignedSlot || e.parentNode || (fl(e) ? e.host : null) || en(e);
}
function ga(e) {
  return !dt(e) || Vt(e).position === "fixed" ? null : e.offsetParent;
}
function wg(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && dt(e)) {
    var o = Vt(e);
    if (o.position === "fixed")
      return null;
  }
  var r = er(e);
  for (fl(r) && (r = r.host); dt(r) && ["html", "body"].indexOf(At(r)) < 0; ) {
    var l = Vt(r);
    if (l.transform !== "none" || l.perspective !== "none" || l.contain === "paint" || ["transform", "perspective"].indexOf(l.willChange) !== -1 || t && l.willChange === "filter" || t && l.filter && l.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function vo(e) {
  for (var t = St(e), n = ga(e); n && yg(n) && Vt(n).position === "static"; )
    n = ga(n);
  return n && (At(n) === "html" || At(n) === "body" && Vt(n).position === "static") ? t : n || wg(e) || t;
}
function vl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Yn(e, t, n) {
  return cn(e, Ho(t, n));
}
function Cg(e, t, n) {
  var o = Yn(e, t, n);
  return o > n ? n : o;
}
function Qs() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Zs(e) {
  return Object.assign({}, Qs(), e);
}
function Js(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var Sg = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Zs(typeof e != "number" ? e : Js(e, po));
};
function Eg(e) {
  var t, n = e.state, o = e.name, r = e.options, l = n.elements.arrow, a = n.modifiersData.popperOffsets, s = $t(n.placement), i = vl(s), u = [Xe, pt].indexOf(s) >= 0, d = u ? "height" : "width";
  if (!(!l || !a)) {
    var f = Sg(r.padding, n), p = pl(l), v = i === "y" ? Ye : Xe, c = i === "y" ? ft : pt, g = n.rects.reference[d] + n.rects.reference[i] - a[i] - n.rects.popper[d], y = a[i] - n.rects.reference[i], m = vo(l), w = m ? i === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, S = g / 2 - y / 2, b = f[v], T = w - p[d] - f[c], _ = w / 2 - p[d] / 2 + S, C = Yn(b, _, T), $ = i;
    n.modifiersData[o] = (t = {}, t[$] = C, t.centerOffset = C - _, t);
  }
}
function _g(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || !Xs(t.elements.popper, r) || (t.elements.arrow = r));
}
var Og = { name: "arrow", enabled: !0, phase: "main", fn: Eg, effect: _g, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Fn(e) {
  return e.split("-")[1];
}
var xg = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Tg(e) {
  var t = e.x, n = e.y, o = window, r = o.devicePixelRatio || 1;
  return { x: In(t * r) / r || 0, y: In(n * r) / r || 0 };
}
function ma(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, l = e.variation, a = e.offsets, s = e.position, i = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, f = e.isFixed, p = a.x, v = p === void 0 ? 0 : p, c = a.y, g = c === void 0 ? 0 : c, y = typeof d == "function" ? d({ x: v, y: g }) : { x: v, y: g };
  v = y.x, g = y.y;
  var m = a.hasOwnProperty("x"), w = a.hasOwnProperty("y"), S = Xe, b = Ye, T = window;
  if (u) {
    var _ = vo(n), C = "clientHeight", $ = "clientWidth";
    if (_ === St(n) && (_ = en(n), Vt(_).position !== "static" && s === "absolute" && (C = "scrollHeight", $ = "scrollWidth")), _ = _, r === Ye || (r === Xe || r === pt) && l === lo) {
      b = ft;
      var L = f && _ === T && T.visualViewport ? T.visualViewport.height : _[C];
      g -= L - o.height, g *= i ? 1 : -1;
    }
    if (r === Xe || (r === Ye || r === ft) && l === lo) {
      S = pt;
      var I = f && _ === T && T.visualViewport ? T.visualViewport.width : _[$];
      v -= I - o.width, v *= i ? 1 : -1;
    }
  }
  var D = Object.assign({ position: s }, u && xg), B = d === !0 ? Tg({ x: v, y: g }) : { x: v, y: g };
  if (v = B.x, g = B.y, i) {
    var K;
    return Object.assign({}, D, (K = {}, K[b] = w ? "0" : "", K[S] = m ? "0" : "", K.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + g + "px)" : "translate3d(" + v + "px, " + g + "px, 0)", K));
  }
  return Object.assign({}, D, (t = {}, t[b] = w ? g + "px" : "", t[S] = m ? v + "px" : "", t.transform = "", t));
}
function $g(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, l = n.adaptive, a = l === void 0 ? !0 : l, s = n.roundOffsets, i = s === void 0 ? !0 : s, u = { placement: $t(t.placement), variation: Fn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ma(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: a, roundOffsets: i })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ma(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: i })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var ei = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: $g, data: {} }, go = { passive: !0 };
function Pg(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, l = r === void 0 ? !0 : r, a = o.resize, s = a === void 0 ? !0 : a, i = St(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return l && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, go);
  }), s && i.addEventListener("resize", n.update, go), function() {
    l && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, go);
    }), s && i.removeEventListener("resize", n.update, go);
  };
}
var ti = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Pg, data: {} }, kg = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Oo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return kg[t];
  });
}
var Ag = { start: "end", end: "start" };
function ba(e) {
  return e.replace(/start|end/g, function(t) {
    return Ag[t];
  });
}
function hl(e) {
  var t = St(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function gl(e) {
  return Nn(en(e)).left + hl(e).scrollLeft;
}
function Lg(e) {
  var t = St(e), n = en(e), o = t.visualViewport, r = n.clientWidth, l = n.clientHeight, a = 0, s = 0;
  return o && (r = o.width, l = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = o.offsetLeft, s = o.offsetTop)), { width: r, height: l, x: a + gl(e), y: s };
}
function Mg(e) {
  var t, n = en(e), o = hl(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, l = cn(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = cn(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), s = -o.scrollLeft + gl(e), i = -o.scrollTop;
  return Vt(r || n).direction === "rtl" && (s += cn(n.clientWidth, r ? r.clientWidth : 0) - l), { width: l, height: a, x: s, y: i };
}
function ml(e) {
  var t = Vt(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function ni(e) {
  return ["html", "body", "#document"].indexOf(At(e)) >= 0 ? e.ownerDocument.body : dt(e) && ml(e) ? e : ni(er(e));
}
function Xn(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = ni(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), l = St(o), a = r ? [l].concat(l.visualViewport || [], ml(o) ? o : []) : o, s = t.concat(a);
  return r ? s : s.concat(Xn(er(a)));
}
function xr(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Rg(e) {
  var t = Nn(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function ya(e, t) {
  return t === Gs ? xr(Lg(e)) : Rn(t) ? Rg(t) : xr(Mg(en(e)));
}
function Ig(e) {
  var t = Xn(er(e)), n = ["absolute", "fixed"].indexOf(Vt(e).position) >= 0, o = n && dt(e) ? vo(e) : e;
  return Rn(o) ? t.filter(function(r) {
    return Rn(r) && Xs(r, o) && At(r) !== "body";
  }) : [];
}
function Ng(e, t, n) {
  var o = t === "clippingParents" ? Ig(e) : [].concat(t), r = [].concat(o, [n]), l = r[0], a = r.reduce(function(s, i) {
    var u = ya(e, i);
    return s.top = cn(u.top, s.top), s.right = Ho(u.right, s.right), s.bottom = Ho(u.bottom, s.bottom), s.left = cn(u.left, s.left), s;
  }, ya(e, l));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function oi(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? $t(o) : null, l = o ? Fn(o) : null, a = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, i;
  switch (r) {
    case Ye:
      i = { x: a, y: t.y - n.height };
      break;
    case ft:
      i = { x: a, y: t.y + t.height };
      break;
    case pt:
      i = { x: t.x + t.width, y: s };
      break;
    case Xe:
      i = { x: t.x - n.width, y: s };
      break;
    default:
      i = { x: t.x, y: t.y };
  }
  var u = r ? vl(r) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (l) {
      case Mn:
        i[u] = i[u] - (t[d] / 2 - n[d] / 2);
        break;
      case lo:
        i[u] = i[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return i;
}
function ao(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, l = n.boundary, a = l === void 0 ? lg : l, s = n.rootBoundary, i = s === void 0 ? Gs : s, u = n.elementContext, d = u === void 0 ? qn : u, f = n.altBoundary, p = f === void 0 ? !1 : f, v = n.padding, c = v === void 0 ? 0 : v, g = Zs(typeof c != "number" ? c : Js(c, po)), y = d === qn ? ag : qn, m = e.rects.popper, w = e.elements[p ? y : d], S = Ng(Rn(w) ? w : w.contextElement || en(e.elements.popper), a, i), b = Nn(e.elements.reference), T = oi({ reference: b, element: m, strategy: "absolute", placement: r }), _ = xr(Object.assign({}, m, T)), C = d === qn ? _ : b, $ = { top: S.top - C.top + g.top, bottom: C.bottom - S.bottom + g.bottom, left: S.left - C.left + g.left, right: C.right - S.right + g.right }, L = e.modifiersData.offset;
  if (d === qn && L) {
    var I = L[r];
    Object.keys($).forEach(function(D) {
      var B = [pt, ft].indexOf(D) >= 0 ? 1 : -1, K = [Ye, ft].indexOf(D) >= 0 ? "y" : "x";
      $[D] += I[K] * B;
    });
  }
  return $;
}
function Fg(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, l = n.rootBoundary, a = n.padding, s = n.flipVariations, i = n.allowedAutoPlacements, u = i === void 0 ? Jo : i, d = Fn(o), f = d ? s ? ha : ha.filter(function(c) {
    return Fn(c) === d;
  }) : po, p = f.filter(function(c) {
    return u.indexOf(c) >= 0;
  });
  p.length === 0 && (p = f);
  var v = p.reduce(function(c, g) {
    return c[g] = ao(e, { placement: g, boundary: r, rootBoundary: l, padding: a })[$t(g)], c;
  }, {});
  return Object.keys(v).sort(function(c, g) {
    return v[c] - v[g];
  });
}
function Bg(e) {
  if ($t(e) === dl)
    return [];
  var t = Oo(e);
  return [ba(e), t, ba(t)];
}
function zg(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, l = r === void 0 ? !0 : r, a = n.altAxis, s = a === void 0 ? !0 : a, i = n.fallbackPlacements, u = n.padding, d = n.boundary, f = n.rootBoundary, p = n.altBoundary, v = n.flipVariations, c = v === void 0 ? !0 : v, g = n.allowedAutoPlacements, y = t.options.placement, m = $t(y), w = m === y, S = i || (w || !c ? [Oo(y)] : Bg(y)), b = [y].concat(S).reduce(function(he, re) {
      return he.concat($t(re) === dl ? Fg(t, { placement: re, boundary: d, rootBoundary: f, padding: u, flipVariations: c, allowedAutoPlacements: g }) : re);
    }, []), T = t.rects.reference, _ = t.rects.popper, C = /* @__PURE__ */ new Map(), $ = !0, L = b[0], I = 0; I < b.length; I++) {
      var D = b[I], B = $t(D), K = Fn(D) === Mn, ee = [Ye, ft].indexOf(B) >= 0, F = ee ? "width" : "height", Y = ao(t, { placement: D, boundary: d, rootBoundary: f, altBoundary: p, padding: u }), oe = ee ? K ? pt : Xe : K ? ft : Ye;
      T[F] > _[F] && (oe = Oo(oe));
      var H = Oo(oe), A = [];
      if (l && A.push(Y[B] <= 0), s && A.push(Y[oe] <= 0, Y[H] <= 0), A.every(function(he) {
        return he;
      })) {
        L = D, $ = !1;
        break;
      }
      C.set(D, A);
    }
    if ($)
      for (var q = c ? 3 : 1, ce = function(he) {
        var re = b.find(function(be) {
          var Se = C.get(be);
          if (Se)
            return Se.slice(0, he).every(function(le) {
              return le;
            });
        });
        if (re)
          return L = re, "break";
      }, de = q; de > 0; de--) {
        var me = ce(de);
        if (me === "break")
          break;
      }
    t.placement !== L && (t.modifiersData[o]._skip = !0, t.placement = L, t.reset = !0);
  }
}
var Hg = { name: "flip", enabled: !0, phase: "main", fn: zg, requiresIfExists: ["offset"], data: { _skip: !1 } };
function wa(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Ca(e) {
  return [Ye, pt, ft, Xe].some(function(t) {
    return e[t] >= 0;
  });
}
function Dg(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, l = t.modifiersData.preventOverflow, a = ao(t, { elementContext: "reference" }), s = ao(t, { altBoundary: !0 }), i = wa(a, o), u = wa(s, r, l), d = Ca(i), f = Ca(u);
  t.modifiersData[n] = { referenceClippingOffsets: i, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: f }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": f });
}
var Wg = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Dg };
function Vg(e, t, n) {
  var o = $t(e), r = [Xe, Ye].indexOf(o) >= 0 ? -1 : 1, l = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, a = l[0], s = l[1];
  return a = a || 0, s = (s || 0) * r, [Xe, pt].indexOf(o) >= 0 ? { x: s, y: a } : { x: a, y: s };
}
function jg(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, l = r === void 0 ? [0, 0] : r, a = Jo.reduce(function(d, f) {
    return d[f] = Vg(f, t.rects, l), d;
  }, {}), s = a[t.placement], i = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = a;
}
var Kg = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: jg };
function Ug(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = oi({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var ri = { name: "popperOffsets", enabled: !0, phase: "read", fn: Ug, data: {} };
function qg(e) {
  return e === "x" ? "y" : "x";
}
function Gg(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, l = r === void 0 ? !0 : r, a = n.altAxis, s = a === void 0 ? !1 : a, i = n.boundary, u = n.rootBoundary, d = n.altBoundary, f = n.padding, p = n.tether, v = p === void 0 ? !0 : p, c = n.tetherOffset, g = c === void 0 ? 0 : c, y = ao(t, { boundary: i, rootBoundary: u, padding: f, altBoundary: d }), m = $t(t.placement), w = Fn(t.placement), S = !w, b = vl(m), T = qg(b), _ = t.modifiersData.popperOffsets, C = t.rects.reference, $ = t.rects.popper, L = typeof g == "function" ? g(Object.assign({}, t.rects, { placement: t.placement })) : g, I = typeof L == "number" ? { mainAxis: L, altAxis: L } : Object.assign({ mainAxis: 0, altAxis: 0 }, L), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, B = { x: 0, y: 0 };
  if (_) {
    if (l) {
      var K, ee = b === "y" ? Ye : Xe, F = b === "y" ? ft : pt, Y = b === "y" ? "height" : "width", oe = _[b], H = oe + y[ee], A = oe - y[F], q = v ? -$[Y] / 2 : 0, ce = w === Mn ? C[Y] : $[Y], de = w === Mn ? -$[Y] : -C[Y], me = t.elements.arrow, he = v && me ? pl(me) : { width: 0, height: 0 }, re = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Qs(), be = re[ee], Se = re[F], le = Yn(0, C[Y], he[Y]), xe = S ? C[Y] / 2 - q - le - be - I.mainAxis : ce - le - be - I.mainAxis, Be = S ? -C[Y] / 2 + q + le + Se + I.mainAxis : de + le + Se + I.mainAxis, ut = t.elements.arrow && vo(t.elements.arrow), Ue = ut ? b === "y" ? ut.clientTop || 0 : ut.clientLeft || 0 : 0, Qe = (K = D == null ? void 0 : D[b]) != null ? K : 0, Mt = oe + xe - Qe - Ue, vt = oe + Be - Qe, Ze = Yn(v ? Ho(H, Mt) : H, oe, v ? cn(A, vt) : A);
      _[b] = Ze, B[b] = Ze - oe;
    }
    if (s) {
      var Et, Rt = b === "x" ? Ye : Xe, ze = b === "x" ? ft : pt, Ie = _[T], Je = T === "y" ? "height" : "width", R = Ie + y[Rt], ie = Ie - y[ze], Ae = [Ye, Xe].indexOf(m) !== -1, et = (Et = D == null ? void 0 : D[T]) != null ? Et : 0, It = Ae ? R : Ie - C[Je] - $[Je] - et + I.altAxis, _t = Ae ? Ie + C[Je] + $[Je] - et - I.altAxis : ie, tn = v && Ae ? Cg(It, Ie, _t) : Yn(v ? It : R, Ie, v ? _t : ie);
      _[T] = tn, B[T] = tn - Ie;
    }
    t.modifiersData[o] = B;
  }
}
var Yg = { name: "preventOverflow", enabled: !0, phase: "main", fn: Gg, requiresIfExists: ["offset"] };
function Xg(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Qg(e) {
  return e === St(e) || !dt(e) ? hl(e) : Xg(e);
}
function Zg(e) {
  var t = e.getBoundingClientRect(), n = In(t.width) / e.offsetWidth || 1, o = In(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Jg(e, t, n) {
  n === void 0 && (n = !1);
  var o = dt(t), r = dt(t) && Zg(t), l = en(t), a = Nn(e, r), s = { scrollLeft: 0, scrollTop: 0 }, i = { x: 0, y: 0 };
  return (o || !o && !n) && ((At(t) !== "body" || ml(l)) && (s = Qg(t)), dt(t) ? (i = Nn(t, !0), i.x += t.clientLeft, i.y += t.clientTop) : l && (i.x = gl(l))), { x: a.left + s.scrollLeft - i.x, y: a.top + s.scrollTop - i.y, width: a.width, height: a.height };
}
function em(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(l) {
    t.set(l.name, l);
  });
  function r(l) {
    n.add(l.name);
    var a = [].concat(l.requires || [], l.requiresIfExists || []);
    a.forEach(function(s) {
      if (!n.has(s)) {
        var i = t.get(s);
        i && r(i);
      }
    }), o.push(l);
  }
  return e.forEach(function(l) {
    n.has(l.name) || r(l);
  }), o;
}
function tm(e) {
  var t = em(e);
  return gg.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function nm(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function om(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Sa = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Ea() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function bl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, l = r === void 0 ? Sa : r;
  return function(a, s, i) {
    i === void 0 && (i = l);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Sa, l), modifiersData: {}, elements: { reference: a, popper: s }, attributes: {}, styles: {} }, d = [], f = !1, p = { state: u, setOptions: function(g) {
      var y = typeof g == "function" ? g(u.options) : g;
      c(), u.options = Object.assign({}, l, u.options, y), u.scrollParents = { reference: Rn(a) ? Xn(a) : a.contextElement ? Xn(a.contextElement) : [], popper: Xn(s) };
      var m = tm(om([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = m.filter(function(w) {
        return w.enabled;
      }), v(), p.update();
    }, forceUpdate: function() {
      if (!f) {
        var g = u.elements, y = g.reference, m = g.popper;
        if (Ea(y, m)) {
          u.rects = { reference: Jg(y, vo(m), u.options.strategy === "fixed"), popper: pl(m) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function($) {
            return u.modifiersData[$.name] = Object.assign({}, $.data);
          });
          for (var w = 0; w < u.orderedModifiers.length; w++) {
            if (u.reset === !0) {
              u.reset = !1, w = -1;
              continue;
            }
            var S = u.orderedModifiers[w], b = S.fn, T = S.options, _ = T === void 0 ? {} : T, C = S.name;
            typeof b == "function" && (u = b({ state: u, options: _, name: C, instance: p }) || u);
          }
        }
      }
    }, update: nm(function() {
      return new Promise(function(g) {
        p.forceUpdate(), g(u);
      });
    }), destroy: function() {
      c(), f = !0;
    } };
    if (!Ea(a, s))
      return p;
    p.setOptions(i).then(function(g) {
      !f && i.onFirstUpdate && i.onFirstUpdate(g);
    });
    function v() {
      u.orderedModifiers.forEach(function(g) {
        var y = g.name, m = g.options, w = m === void 0 ? {} : m, S = g.effect;
        if (typeof S == "function") {
          var b = S({ state: u, name: y, instance: p, options: w }), T = function() {
          };
          d.push(b || T);
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
bl();
var rm = [ti, ri, ei, Ys];
bl({ defaultModifiers: rm });
var lm = [ti, ri, ei, Ys, Kg, Hg, Yg, Og, Wg], li = bl({ defaultModifiers: lm });
const am = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: i }) => {
      const u = sm(i);
      Object.assign(a.value, u);
    },
    requires: ["computeStyles"]
  }, r = O(() => {
    const { onFirstUpdate: i, placement: u, strategy: d, modifiers: f } = h(n);
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
  }), l = xn(), a = x({
    styles: {
      popper: {
        position: h(r).strategy,
        left: "0",
        right: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), s = () => {
    l.value && (l.value.destroy(), l.value = void 0);
  };
  return U(r, (i) => {
    const u = h(l);
    u && u.setOptions(i);
  }, {
    deep: !0
  }), U([e, t], ([i, u]) => {
    s(), !(!i || !u) && (l.value = li(i, u, h(r)));
  }), yt(() => {
    s();
  }), {
    state: O(() => {
      var i;
      return { ...((i = h(l)) == null ? void 0 : i.state) || {} };
    }),
    styles: O(() => h(a).styles),
    attributes: O(() => h(a).attributes),
    update: () => {
      var i;
      return (i = h(l)) == null ? void 0 : i.update();
    },
    forceUpdate: () => {
      var i;
      return (i = h(l)) == null ? void 0 : i.forceUpdate();
    },
    instanceRef: O(() => h(l))
  };
};
function sm(e) {
  const t = Object.keys(e.elements), n = Io(t.map((r) => [r, e.styles[r] || {}])), o = Io(t.map((r) => [r, e.attributes[r]]));
  return {
    styles: n,
    attributes: o
  };
}
function im() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return el(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
let En = [];
const _a = (e) => {
  const t = e;
  t.key === ro.esc && En.forEach((n) => n(t));
}, um = (e) => {
  ke(() => {
    En.length === 0 && document.addEventListener("keydown", _a), _e && En.push(e);
  }), yt(() => {
    En = En.filter((t) => t !== e), En.length === 0 && _e && document.removeEventListener("keydown", _a);
  });
};
let Oa;
const ai = () => {
  const e = wn("namespace", ul), t = Us(), n = O(() => `${e.value}-popper-container-${t.prefix}`), o = O(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, cm = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, dm = () => {
  Dr(() => {
    if (!_e)
      return;
    const { id: e, selector: t } = ai();
    (process.env.NODE_ENV === "test" || !Oa && !document.body.querySelector(t.value)) && (Oa = cm(e.value));
  });
}, fm = Ee({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  }
}), si = ({
  showAfter: e,
  hideAfter: t,
  open: n,
  close: o
}) => {
  const { registerTimeout: r } = im();
  return {
    onOpen: (s) => {
      r(() => {
        n(s);
      }, h(e));
    },
    onClose: (s) => {
      r(() => {
        o(s);
      }, h(t));
    }
  };
}, ii = Symbol("elForwardRef"), pm = (e) => {
  rt(ii, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, vm = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), xa = x(0), yl = () => {
  const e = wn("zIndex", 2e3), t = O(() => e.value + xa.value);
  return {
    initialZIndex: e,
    currentZIndex: t,
    nextZIndex: () => (xa.value++, t.value)
  };
};
function hm(e) {
  const t = x();
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: r, selectionEnd: l, value: a } = e.value;
    if (r == null || l == null)
      return;
    const s = a.slice(0, Math.max(0, r)), i = a.slice(Math.max(0, l));
    t.value = {
      selectionStart: r,
      selectionEnd: l,
      value: a,
      beforeTxt: s,
      afterTxt: i
    };
  }
  function o() {
    if (e.value == null || t.value == null)
      return;
    const { value: r } = e.value, { beforeTxt: l, afterTxt: a, selectionStart: s } = t.value;
    if (l == null || a == null || s == null)
      return;
    let i = r.length;
    if (r.endsWith(a))
      i = r.length - a.length;
    else if (r.startsWith(l))
      i = l.length;
    else {
      const u = l[s - 1], d = r.indexOf(u, s - 1);
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
const gm = Ee({
  size: {
    type: fe([Number, String])
  },
  color: {
    type: String
  }
}), mm = W({
  name: "ElIcon",
  inheritAttrs: !1
}), bm = /* @__PURE__ */ W({
  ...mm,
  props: gm,
  setup(e) {
    const t = e, n = ne("icon"), o = O(() => {
      const { size: r, color: l } = t;
      return !r && !l ? {} : {
        fontSize: Fo(r) ? void 0 : _r(r),
        "--color": l
      };
    });
    return (r, l) => (P(), N("i", Ht({
      class: h(n).b(),
      style: h(o)
    }, r.$attrs), [
      ae(r.$slots, "default")
    ], 16));
  }
});
var ym = /* @__PURE__ */ pe(bm, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const je = Ct(ym);
let gt;
const wm = `
  height:0 !important;
  visibility:hidden !important;
  ${jh() ? "" : "overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, Cm = [
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
function Sm(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), r = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: Cm.map((a) => `${a}:${t.getPropertyValue(a)}`).join(";"), paddingSize: o, borderSize: r, boxSizing: n };
}
function Ta(e, t = 1, n) {
  var o;
  gt || (gt = document.createElement("textarea"), document.body.appendChild(gt));
  const { paddingSize: r, borderSize: l, boxSizing: a, contextStyle: s } = Sm(e);
  gt.setAttribute("style", `${s};${wm}`), gt.value = e.value || e.placeholder || "";
  let i = gt.scrollHeight;
  const u = {};
  a === "border-box" ? i = i + l : a === "content-box" && (i = i - r), gt.value = "";
  const d = gt.scrollHeight - r;
  if ($e(t)) {
    let f = d * t;
    a === "border-box" && (f = f + r + l), i = Math.max(f, i), u.minHeight = `${f}px`;
  }
  if ($e(n)) {
    let f = d * n;
    a === "border-box" && (f = f + r + l), i = Math.min(f, i);
  }
  return u.height = `${i}px`, (o = gt.parentNode) == null || o.removeChild(gt), gt = void 0, u;
}
const Em = Ee({
  id: {
    type: String,
    default: void 0
  },
  size: fo,
  disabled: Boolean,
  modelValue: {
    type: fe([
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
    type: fe([Boolean, Object]),
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
    type: kt
  },
  prefixIcon: {
    type: kt
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
    type: fe([Object, Array, String]),
    default: () => ll({})
  }
}), _m = {
  [Ve]: (e) => ot(e),
  input: (e) => ot(e),
  change: (e) => ot(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, Om = ["role"], xm = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form"], Tm = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form"], $m = W({
  name: "ElInput",
  inheritAttrs: !1
}), Pm = /* @__PURE__ */ W({
  ...$m,
  props: Em,
  emits: _m,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = Qi(), l = Wo(), a = O(() => {
      const R = {};
      return o.containerRole === "combobox" && (R["aria-haspopup"] = r["aria-haspopup"], R["aria-owns"] = r["aria-owns"], R["aria-expanded"] = r["aria-expanded"]), R;
    }), s = O(() => [
      o.type === "textarea" ? y.b() : g.b(),
      g.m(v.value),
      g.is("disabled", c.value),
      g.is("exceed", ce.value),
      {
        [g.b("group")]: l.prepend || l.append,
        [g.bm("group", "append")]: l.append,
        [g.bm("group", "prepend")]: l.prepend,
        [g.m("prefix")]: l.prefix || o.prefixIcon,
        [g.m("suffix")]: l.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [g.bm("suffix", "password-clear")]: oe.value && H.value
      },
      r.class
    ]), i = O(() => [
      g.e("wrapper"),
      g.is("focus", S.value)
    ]), u = qh({
      excludeKeys: O(() => Object.keys(a.value))
    }), { form: d, formItem: f } = jn(), { inputId: p } = cl(o, {
      formItemContext: f
    }), v = gn(), c = Zo(), g = ne("input"), y = ne("textarea"), m = xn(), w = xn(), S = x(!1), b = x(!1), T = x(!1), _ = x(!1), C = x(), $ = xn(o.inputStyle), L = O(() => m.value || w.value), I = O(() => {
      var R;
      return (R = d == null ? void 0 : d.statusIcon) != null ? R : !1;
    }), D = O(() => (f == null ? void 0 : f.validateState) || ""), B = O(() => D.value && Hh[D.value]), K = O(() => _.value ? Bh : Sh), ee = O(() => [
      r.style,
      o.inputStyle
    ]), F = O(() => [
      o.inputStyle,
      $.value,
      { resize: o.resize }
    ]), Y = O(() => Xo(o.modelValue) ? "" : String(o.modelValue)), oe = O(() => o.clearable && !c.value && !o.readonly && !!Y.value && (S.value || b.value)), H = O(() => o.showPassword && !c.value && !o.readonly && !!Y.value && (!!Y.value || S.value)), A = O(() => o.showWordLimit && !!u.value.maxlength && (o.type === "text" || o.type === "textarea") && !c.value && !o.readonly && !o.showPassword), q = O(() => Array.from(Y.value).length), ce = O(() => !!A.value && q.value > Number(u.value.maxlength)), de = O(() => !!l.suffix || !!o.suffixIcon || oe.value || o.showPassword || A.value || !!D.value && I.value), [me, he] = hm(m);
    Ln(w, (R) => {
      if (!A.value || o.resize !== "both")
        return;
      const ie = R[0], { width: Ae } = ie.contentRect;
      C.value = {
        right: `calc(100% - ${Ae + 15 + 6}px)`
      };
    });
    const re = () => {
      const { type: R, autosize: ie } = o;
      if (!(!_e || R !== "textarea" || !w.value))
        if (ie) {
          const Ae = st(ie) ? ie.minRows : void 0, et = st(ie) ? ie.maxRows : void 0;
          $.value = {
            ...Ta(w.value, Ae, et)
          };
        } else
          $.value = {
            minHeight: Ta(w.value).minHeight
          };
    }, be = () => {
      const R = L.value;
      !R || R.value === Y.value || (R.value = Y.value);
    }, Se = async (R) => {
      me();
      let { value: ie } = R.target;
      if (o.formatter && (ie = o.parser ? o.parser(ie) : ie, ie = o.formatter(ie)), !T.value) {
        if (ie === Y.value) {
          be();
          return;
        }
        n(Ve, ie), n("input", ie), await ue(), be(), he();
      }
    }, le = (R) => {
      n("change", R.target.value);
    }, xe = (R) => {
      n("compositionstart", R), T.value = !0;
    }, Be = (R) => {
      var ie;
      n("compositionupdate", R);
      const Ae = (ie = R.target) == null ? void 0 : ie.value, et = Ae[Ae.length - 1] || "";
      T.value = !zs(et);
    }, ut = (R) => {
      n("compositionend", R), T.value && (T.value = !1, Se(R));
    }, Ue = () => {
      _.value = !_.value, Qe();
    }, Qe = async () => {
      var R;
      await ue(), (R = L.value) == null || R.focus();
    }, Mt = () => {
      var R;
      return (R = L.value) == null ? void 0 : R.blur();
    }, vt = (R) => {
      S.value = !0, n("focus", R);
    }, Ze = (R) => {
      var ie;
      S.value = !1, n("blur", R), o.validateEvent && ((ie = f == null ? void 0 : f.validate) == null || ie.call(f, "blur").catch((Ae) => Fe(Ae)));
    }, Et = (R) => {
      b.value = !1, n("mouseleave", R);
    }, Rt = (R) => {
      b.value = !0, n("mouseenter", R);
    }, ze = (R) => {
      n("keydown", R);
    }, Ie = () => {
      var R;
      (R = L.value) == null || R.select();
    }, Je = () => {
      n(Ve, ""), n("change", ""), n("clear"), n("input", "");
    };
    return U(() => o.modelValue, () => {
      var R;
      ue(() => re()), o.validateEvent && ((R = f == null ? void 0 : f.validate) == null || R.call(f, "change").catch((ie) => Fe(ie)));
    }), U(Y, () => be()), U(() => o.type, async () => {
      await ue(), be(), re();
    }), ke(() => {
      !o.formatter && o.parser && Fe("ElInput", "If you set the parser, you also need to set the formatter."), be(), ue(re);
    }), t({
      input: m,
      textarea: w,
      ref: L,
      textareaStyle: F,
      autosize: xt(o, "autosize"),
      focus: Qe,
      blur: Mt,
      select: Ie,
      clear: Je,
      resizeTextarea: re
    }), (R, ie) => Pe((P(), N("div", Ht(h(a), {
      class: h(s),
      style: h(ee),
      role: R.containerRole,
      onMouseenter: Rt,
      onMouseleave: Et
    }), [
      G(" input "),
      R.type !== "textarea" ? (P(), N(Ke, { key: 0 }, [
        G(" prepend slot "),
        R.$slots.prepend ? (P(), N("div", {
          key: 0,
          class: M(h(g).be("group", "prepend"))
        }, [
          ae(R.$slots, "prepend")
        ], 2)) : G("v-if", !0),
        V("div", {
          class: M(h(i))
        }, [
          G(" prefix slot "),
          R.$slots.prefix || R.prefixIcon ? (P(), N("span", {
            key: 0,
            class: M(h(g).e("prefix"))
          }, [
            V("span", {
              class: M(h(g).e("prefix-inner")),
              onClick: Qe
            }, [
              ae(R.$slots, "prefix"),
              R.prefixIcon ? (P(), Q(h(je), {
                key: 0,
                class: M(h(g).e("icon"))
              }, {
                default: Z(() => [
                  (P(), Q(nt(R.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : G("v-if", !0)
            ], 2)
          ], 2)) : G("v-if", !0),
          V("input", Ht({
            id: h(p),
            ref_key: "input",
            ref: m,
            class: h(g).e("inner")
          }, h(u), {
            type: R.showPassword ? _.value ? "text" : "password" : R.type,
            disabled: h(c),
            formatter: R.formatter,
            parser: R.parser,
            readonly: R.readonly,
            autocomplete: R.autocomplete,
            tabindex: R.tabindex,
            "aria-label": R.label,
            placeholder: R.placeholder,
            style: R.inputStyle,
            form: o.form,
            onCompositionstart: xe,
            onCompositionupdate: Be,
            onCompositionend: ut,
            onInput: Se,
            onFocus: vt,
            onBlur: Ze,
            onChange: le,
            onKeydown: ze
          }), null, 16, xm),
          G(" suffix slot "),
          h(de) ? (P(), N("span", {
            key: 1,
            class: M(h(g).e("suffix"))
          }, [
            V("span", {
              class: M(h(g).e("suffix-inner")),
              onClick: Qe
            }, [
              !h(oe) || !h(H) || !h(A) ? (P(), N(Ke, { key: 0 }, [
                ae(R.$slots, "suffix"),
                R.suffixIcon ? (P(), Q(h(je), {
                  key: 0,
                  class: M(h(g).e("icon"))
                }, {
                  default: Z(() => [
                    (P(), Q(nt(R.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : G("v-if", !0)
              ], 64)) : G("v-if", !0),
              h(oe) ? (P(), Q(h(je), {
                key: 1,
                class: M([h(g).e("icon"), h(g).e("clear")]),
                onMousedown: bt(h(no), ["prevent"]),
                onClick: Je
              }, {
                default: Z(() => [
                  ge(h(ol))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : G("v-if", !0),
              h(H) ? (P(), Q(h(je), {
                key: 2,
                class: M([h(g).e("icon"), h(g).e("password")]),
                onClick: Ue
              }, {
                default: Z(() => [
                  (P(), Q(nt(h(K))))
                ]),
                _: 1
              }, 8, ["class"])) : G("v-if", !0),
              h(A) ? (P(), N("span", {
                key: 3,
                class: M(h(g).e("count"))
              }, [
                V("span", {
                  class: M(h(g).e("count-inner"))
                }, ye(h(q)) + " / " + ye(h(u).maxlength), 3)
              ], 2)) : G("v-if", !0),
              h(D) && h(B) && h(I) ? (P(), Q(h(je), {
                key: 4,
                class: M([
                  h(g).e("icon"),
                  h(g).e("validateIcon"),
                  h(g).is("loading", h(D) === "validating")
                ])
              }, {
                default: Z(() => [
                  (P(), Q(nt(h(B))))
                ]),
                _: 1
              }, 8, ["class"])) : G("v-if", !0)
            ], 2)
          ], 2)) : G("v-if", !0)
        ], 2),
        G(" append slot "),
        R.$slots.append ? (P(), N("div", {
          key: 1,
          class: M(h(g).be("group", "append"))
        }, [
          ae(R.$slots, "append")
        ], 2)) : G("v-if", !0)
      ], 64)) : (P(), N(Ke, { key: 1 }, [
        G(" textarea "),
        V("textarea", Ht({
          id: h(p),
          ref_key: "textarea",
          ref: w,
          class: h(y).e("inner")
        }, h(u), {
          tabindex: R.tabindex,
          disabled: h(c),
          readonly: R.readonly,
          autocomplete: R.autocomplete,
          style: h(F),
          "aria-label": R.label,
          placeholder: R.placeholder,
          form: o.form,
          onCompositionstart: xe,
          onCompositionupdate: Be,
          onCompositionend: ut,
          onInput: Se,
          onFocus: vt,
          onBlur: Ze,
          onChange: le,
          onKeydown: ze
        }), null, 16, Tm),
        h(A) ? (P(), N("span", {
          key: 0,
          style: Oe(C.value),
          class: M(h(g).e("count"))
        }, ye(h(q)) + " / " + ye(h(u).maxlength), 7)) : G("v-if", !0)
      ], 64))
    ], 16, Om)), [
      [Dt, R.type !== "hidden"]
    ]);
  }
});
var km = /* @__PURE__ */ pe(Pm, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const ui = Ct(km), On = 4, Am = {
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
}, Lm = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Mm = Ee({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Rm = "Thumb", Im = /* @__PURE__ */ W({
  __name: "thumb",
  props: Mm,
  setup(e) {
    const t = e, n = se(Ws), o = ne("scrollbar");
    n || Rs(Rm, "can not inject scrollbar context");
    const r = x(), l = x(), a = x({}), s = x(!1);
    let i = !1, u = !1, d = _e ? document.onselectstart : null;
    const f = O(() => Am[t.vertical ? "vertical" : "horizontal"]), p = O(() => Lm({
      size: t.size,
      move: t.move,
      bar: f.value
    })), v = O(() => r.value[f.value.offset] ** 2 / n.wrapElement[f.value.scrollSize] / t.ratio / l.value[f.value.offset]), c = (_) => {
      var C;
      if (_.stopPropagation(), _.ctrlKey || [1, 2].includes(_.button))
        return;
      (C = window.getSelection()) == null || C.removeAllRanges(), y(_);
      const $ = _.currentTarget;
      $ && (a.value[f.value.axis] = $[f.value.offset] - (_[f.value.client] - $.getBoundingClientRect()[f.value.direction]));
    }, g = (_) => {
      if (!l.value || !r.value || !n.wrapElement)
        return;
      const C = Math.abs(_.target.getBoundingClientRect()[f.value.direction] - _[f.value.client]), $ = l.value[f.value.offset] / 2, L = (C - $) * 100 * v.value / r.value[f.value.offset];
      n.wrapElement[f.value.scroll] = L * n.wrapElement[f.value.scrollSize] / 100;
    }, y = (_) => {
      _.stopImmediatePropagation(), i = !0, document.addEventListener("mousemove", m), document.addEventListener("mouseup", w), d = document.onselectstart, document.onselectstart = () => !1;
    }, m = (_) => {
      if (!r.value || !l.value || i === !1)
        return;
      const C = a.value[f.value.axis];
      if (!C)
        return;
      const $ = (r.value.getBoundingClientRect()[f.value.direction] - _[f.value.client]) * -1, L = l.value[f.value.offset] - C, I = ($ - L) * 100 * v.value / r.value[f.value.offset];
      n.wrapElement[f.value.scroll] = I * n.wrapElement[f.value.scrollSize] / 100;
    }, w = () => {
      i = !1, a.value[f.value.axis] = 0, document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", w), T(), u && (s.value = !1);
    }, S = () => {
      u = !1, s.value = !!t.size;
    }, b = () => {
      u = !0, s.value = i;
    };
    yt(() => {
      T(), document.removeEventListener("mouseup", w);
    });
    const T = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return Zt(xt(n, "scrollbarElement"), "mousemove", S), Zt(xt(n, "scrollbarElement"), "mouseleave", b), (_, C) => (P(), Q(so, {
      name: h(o).b("fade"),
      persisted: ""
    }, {
      default: Z(() => [
        Pe(V("div", {
          ref_key: "instance",
          ref: r,
          class: M([h(o).e("bar"), h(o).is(h(f).key)]),
          onMousedown: g
        }, [
          V("div", {
            ref_key: "thumb",
            ref: l,
            class: M(h(o).e("thumb")),
            style: Oe(h(p)),
            onMousedown: c
          }, null, 38)
        ], 34), [
          [Dt, _.always || s.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var $a = /* @__PURE__ */ pe(Im, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const Nm = Ee({
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
}), Fm = /* @__PURE__ */ W({
  __name: "bar",
  props: Nm,
  setup(e, { expose: t }) {
    const n = e, o = x(0), r = x(0);
    return t({
      handleScroll: (a) => {
        if (a) {
          const s = a.offsetHeight - On, i = a.offsetWidth - On;
          r.value = a.scrollTop * 100 / s * n.ratioY, o.value = a.scrollLeft * 100 / i * n.ratioX;
        }
      }
    }), (a, s) => (P(), N(Ke, null, [
      ge($a, {
        move: o.value,
        ratio: a.ratioX,
        size: a.width,
        always: a.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      ge($a, {
        move: r.value,
        ratio: a.ratioY,
        size: a.height,
        vertical: "",
        always: a.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var Bm = /* @__PURE__ */ pe(Fm, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const zm = Ee({
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
    type: fe([String, Object, Array]),
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
}), Hm = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every($e)
}, Tr = "ElScrollbar", Dm = W({
  name: Tr
}), Wm = /* @__PURE__ */ W({
  ...Dm,
  props: zm,
  emits: Hm,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = ne("scrollbar");
    let l, a;
    const s = x(), i = x(), u = x(), d = x("0"), f = x("0"), p = x(), v = x(1), c = x(1), g = O(() => {
      const C = {};
      return o.height && (C.height = _r(o.height)), o.maxHeight && (C.maxHeight = _r(o.maxHeight)), [o.wrapStyle, C];
    }), y = O(() => [
      o.wrapClass,
      r.e("wrap"),
      { [r.em("wrap", "hidden-default")]: !o.native }
    ]), m = O(() => [r.e("view"), o.viewClass]), w = () => {
      var C;
      i.value && ((C = p.value) == null || C.handleScroll(i.value), n("scroll", {
        scrollTop: i.value.scrollTop,
        scrollLeft: i.value.scrollLeft
      }));
    };
    function S(C, $) {
      st(C) ? i.value.scrollTo(C) : $e(C) && $e($) && i.value.scrollTo(C, $);
    }
    const b = (C) => {
      if (!$e(C)) {
        Fe(Tr, "value must be a number");
        return;
      }
      i.value.scrollTop = C;
    }, T = (C) => {
      if (!$e(C)) {
        Fe(Tr, "value must be a number");
        return;
      }
      i.value.scrollLeft = C;
    }, _ = () => {
      if (!i.value)
        return;
      const C = i.value.offsetHeight - On, $ = i.value.offsetWidth - On, L = C ** 2 / i.value.scrollHeight, I = $ ** 2 / i.value.scrollWidth, D = Math.max(L, o.minSize), B = Math.max(I, o.minSize);
      v.value = L / (C - L) / (D / (C - D)), c.value = I / ($ - I) / (B / ($ - B)), f.value = D + On < C ? `${D}px` : "", d.value = B + On < $ ? `${B}px` : "";
    };
    return U(() => o.noresize, (C) => {
      C ? (l == null || l(), a == null || a()) : ({ stop: l } = Ln(u, _), a = Zt("resize", _));
    }, { immediate: !0 }), U(() => [o.maxHeight, o.height], () => {
      o.native || ue(() => {
        var C;
        _(), i.value && ((C = p.value) == null || C.handleScroll(i.value));
      });
    }), rt(Ws, Wt({
      scrollbarElement: s,
      wrapElement: i
    })), ke(() => {
      o.native || ue(() => {
        _();
      });
    }), ns(() => _()), t({
      wrapRef: i,
      update: _,
      scrollTo: S,
      setScrollTop: b,
      setScrollLeft: T,
      handleScroll: w
    }), (C, $) => (P(), N("div", {
      ref_key: "scrollbarRef",
      ref: s,
      class: M(h(r).b())
    }, [
      V("div", {
        ref_key: "wrapRef",
        ref: i,
        class: M(h(y)),
        style: Oe(h(g)),
        onScroll: w
      }, [
        (P(), Q(nt(C.tag), {
          ref_key: "resizeRef",
          ref: u,
          class: M(h(m)),
          style: Oe(C.viewStyle)
        }, {
          default: Z(() => [
            ae(C.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      C.native ? G("v-if", !0) : (P(), Q(Bm, {
        key: 0,
        ref_key: "barRef",
        ref: p,
        height: f.value,
        width: d.value,
        always: C.always,
        "ratio-x": c.value,
        "ratio-y": v.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var Vm = /* @__PURE__ */ pe(Wm, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const wl = Ct(Vm), jm = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], ci = Ee({
  role: {
    type: String,
    values: jm,
    default: "tooltip"
  }
}), Km = W({
  name: "ElPopper",
  inheritAttrs: !1
}), Um = /* @__PURE__ */ W({
  ...Km,
  props: ci,
  setup(e, { expose: t }) {
    const n = e, o = x(), r = x(), l = x(), a = x(), s = O(() => n.role), i = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: l,
      referenceRef: a,
      role: s
    };
    return t(i), rt(sl, i), (u, d) => ae(u.$slots, "default");
  }
});
var qm = /* @__PURE__ */ pe(Um, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const di = Ee({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Gm = W({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Ym = /* @__PURE__ */ W({
  ...Gm,
  props: di,
  setup(e, { expose: t }) {
    const n = e, o = ne("popper"), { arrowOffset: r, arrowRef: l, arrowStyle: a } = se(Vs, void 0);
    return U(() => n.arrowOffset, (s) => {
      r.value = s;
    }), yt(() => {
      l.value = void 0;
    }), t({
      arrowRef: l
    }), (s, i) => (P(), N("span", {
      ref_key: "arrowRef",
      ref: l,
      class: M(h(o).e("arrow")),
      style: Oe(h(a)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Xm = /* @__PURE__ */ pe(Ym, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const ir = "ElOnlyChild", Qm = W({
  name: ir,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = se(ii), l = vm((o = r == null ? void 0 : r.setForwardRef) != null ? o : no);
    return () => {
      var a;
      const s = (a = t.default) == null ? void 0 : a.call(t, n);
      if (!s)
        return null;
      if (s.length > 1)
        return Fe(ir, "requires exact only one valid child."), null;
      const i = fi(s);
      return i ? Pe(Zi(i, n), [[l]]) : (Fe(ir, "no valid child node found"), null);
    };
  }
});
function fi(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (st(n))
      switch (n.type) {
        case rs:
          continue;
        case os:
        case "svg":
          return Pa(n);
        case Ke:
          return fi(n.children);
        default:
          return n;
      }
    return Pa(n);
  }
  return null;
}
function Pa(e) {
  const t = ne("only-child");
  return ge("span", {
    class: t.e("content")
  }, [e]);
}
const pi = Ee({
  virtualRef: {
    type: fe(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: fe(Function)
  },
  onMouseleave: {
    type: fe(Function)
  },
  onClick: {
    type: fe(Function)
  },
  onKeydown: {
    type: fe(Function)
  },
  onFocus: {
    type: fe(Function)
  },
  onBlur: {
    type: fe(Function)
  },
  onContextmenu: {
    type: fe(Function)
  },
  id: String,
  open: Boolean
}), Zm = W({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), Jm = /* @__PURE__ */ W({
  ...Zm,
  props: pi,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = se(sl, void 0);
    pm(r);
    const l = O(() => s.value ? n.id : void 0), a = O(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), s = O(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), i = O(() => s.value ? `${n.open}` : void 0);
    let u;
    return ke(() => {
      U(() => n.virtualRef, (d) => {
        d && (r.value = Xt(d));
      }, {
        immediate: !0
      }), U(r, (d, f) => {
        u == null || u(), u = void 0, oo(d) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((p) => {
          var v;
          const c = n[p];
          c && (d.addEventListener(p.slice(2).toLowerCase(), c), (v = f == null ? void 0 : f.removeEventListener) == null || v.call(f, p.slice(2).toLowerCase(), c));
        }), u = U([l, a, s, i], (p) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((v, c) => {
            Xo(p[c]) ? d.removeAttribute(v) : d.setAttribute(v, p[c]);
          });
        }, { immediate: !0 })), oo(f) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((p) => f.removeAttribute(p));
      }, {
        immediate: !0
      });
    }), yt(() => {
      u == null || u(), u = void 0;
    }), t({
      triggerRef: r
    }), (d, f) => d.virtualTriggering ? G("v-if", !0) : (P(), Q(h(Qm), Ht({ key: 0 }, d.$attrs, {
      "aria-controls": h(l),
      "aria-describedby": h(a),
      "aria-expanded": h(i),
      "aria-haspopup": h(s)
    }), {
      default: Z(() => [
        ae(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var eb = /* @__PURE__ */ pe(Jm, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
const ur = "focus-trap.focus-after-trapped", cr = "focus-trap.focus-after-released", tb = "focus-trap.focusout-prevented", ka = {
  cancelable: !0,
  bubbles: !1
}, nb = {
  cancelable: !0,
  bubbles: !1
}, Aa = "focusAfterTrapped", La = "focusAfterReleased", ob = Symbol("elFocusTrap"), Cl = x(), tr = x(0), Sl = x(0);
let mo = 0;
const vi = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Ma = (e, t) => {
  for (const n of e)
    if (!rb(n, t))
      return n;
}, rb = (e, t) => {
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
}, lb = (e) => {
  const t = vi(e), n = Ma(t, e), o = Ma(t.reverse(), e);
  return [n, o];
}, ab = (e) => e instanceof HTMLInputElement && "select" in e, Gt = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), Sl.value = window.performance.now(), e !== n && ab(e) && t && e.select();
  }
};
function Ra(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const sb = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = Ra(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, l;
      e = Ra(e, o), (l = (r = e[0]) == null ? void 0 : r.resume) == null || l.call(r);
    }
  };
}, ib = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (Gt(o, t), document.activeElement !== n)
      return;
}, Ia = sb(), ub = () => tr.value > Sl.value, bo = () => {
  Cl.value = "pointer", tr.value = window.performance.now();
}, Na = () => {
  Cl.value = "keyboard", tr.value = window.performance.now();
}, cb = () => (ke(() => {
  mo === 0 && (document.addEventListener("mousedown", bo), document.addEventListener("touchstart", bo), document.addEventListener("keydown", Na)), mo++;
}), yt(() => {
  mo--, mo <= 0 && (document.removeEventListener("mousedown", bo), document.removeEventListener("touchstart", bo), document.removeEventListener("keydown", Na));
}), {
  focusReason: Cl,
  lastUserFocusTimestamp: tr,
  lastAutomatedFocusTimestamp: Sl
}), yo = (e) => new CustomEvent(tb, {
  ...nb,
  detail: e
}), db = W({
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
    Aa,
    La,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = x();
    let o, r;
    const { focusReason: l } = cb();
    um((c) => {
      e.trapped && !a.paused && t("release-requested", c);
    });
    const a = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, s = (c) => {
      if (!e.loop && !e.trapped || a.paused)
        return;
      const { key: g, altKey: y, ctrlKey: m, metaKey: w, currentTarget: S, shiftKey: b } = c, { loop: T } = e, _ = g === ro.tab && !y && !m && !w, C = document.activeElement;
      if (_ && C) {
        const $ = S, [L, I] = lb($);
        if (L && I) {
          if (!b && C === I) {
            const B = yo({
              focusReason: l.value
            });
            t("focusout-prevented", B), B.defaultPrevented || (c.preventDefault(), T && Gt(L, !0));
          } else if (b && [L, $].includes(C)) {
            const B = yo({
              focusReason: l.value
            });
            t("focusout-prevented", B), B.defaultPrevented || (c.preventDefault(), T && Gt(I, !0));
          }
        } else if (C === $) {
          const B = yo({
            focusReason: l.value
          });
          t("focusout-prevented", B), B.defaultPrevented || c.preventDefault();
        }
      }
    };
    rt(ob, {
      focusTrapRef: n,
      onKeydown: s
    }), U(() => e.focusTrapEl, (c) => {
      c && (n.value = c);
    }, { immediate: !0 }), U([n], ([c], [g]) => {
      c && (c.addEventListener("keydown", s), c.addEventListener("focusin", d), c.addEventListener("focusout", f)), g && (g.removeEventListener("keydown", s), g.removeEventListener("focusin", d), g.removeEventListener("focusout", f));
    });
    const i = (c) => {
      t(Aa, c);
    }, u = (c) => t(La, c), d = (c) => {
      const g = h(n);
      if (!g)
        return;
      const y = c.target, m = c.relatedTarget, w = y && g.contains(y);
      e.trapped || m && g.contains(m) || (o = m), w && t("focusin", c), !a.paused && e.trapped && (w ? r = y : Gt(r, !0));
    }, f = (c) => {
      const g = h(n);
      if (!(a.paused || !g))
        if (e.trapped) {
          const y = c.relatedTarget;
          !Xo(y) && !g.contains(y) && setTimeout(() => {
            if (!a.paused && e.trapped) {
              const m = yo({
                focusReason: l.value
              });
              t("focusout-prevented", m), m.defaultPrevented || Gt(r, !0);
            }
          }, 0);
        } else {
          const y = c.target;
          y && g.contains(y) || t("focusout", c);
        }
    };
    async function p() {
      await ue();
      const c = h(n);
      if (c) {
        Ia.push(a);
        const g = c.contains(document.activeElement) ? o : document.activeElement;
        if (o = g, !c.contains(g)) {
          const m = new Event(ur, ka);
          c.addEventListener(ur, i), c.dispatchEvent(m), m.defaultPrevented || ue(() => {
            let w = e.focusStartEl;
            ot(w) || (Gt(w), document.activeElement !== w && (w = "first")), w === "first" && ib(vi(c), !0), (document.activeElement === g || w === "container") && Gt(c);
          });
        }
      }
    }
    function v() {
      const c = h(n);
      if (c) {
        c.removeEventListener(ur, i);
        const g = new CustomEvent(cr, {
          ...ka,
          detail: {
            focusReason: l.value
          }
        });
        c.addEventListener(cr, u), c.dispatchEvent(g), !g.defaultPrevented && (l.value == "keyboard" || !ub() || c.contains(document.activeElement)) && Gt(o ?? document.body), c.removeEventListener(cr, i), Ia.remove(a);
      }
    }
    return ke(() => {
      e.trapped && p(), U(() => e.trapped, (c) => {
        c ? p() : v();
      });
    }), yt(() => {
      e.trapped && v();
    }), {
      onKeydown: s
    };
  }
});
function fb(e, t, n, o, r, l) {
  return ae(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var pb = /* @__PURE__ */ pe(db, [["render", fb], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const vb = ["fixed", "absolute"], hb = Ee({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: fe(Array),
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
    values: Jo,
    default: "bottom"
  },
  popperOptions: {
    type: fe(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: vb,
    default: "absolute"
  }
}), hi = Ee({
  ...hb,
  id: String,
  style: {
    type: fe([String, Array, Object])
  },
  className: {
    type: fe([String, Array, Object])
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
    type: fe([String, Array, Object])
  },
  popperStyle: {
    type: fe([String, Array, Object])
  },
  referenceEl: {
    type: fe(Object)
  },
  triggerTargetEl: {
    type: fe(Object)
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
}), gb = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, mb = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: r } = e, l = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: [...yb(e), ...t]
  };
  return wb(l, r == null ? void 0 : r.modifiers), l;
}, bb = (e) => {
  if (_e)
    return Xt(e);
};
function yb(e) {
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
function wb(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const Cb = 0, Sb = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: r } = se(sl, void 0), l = x(), a = x(), s = O(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), i = O(() => {
    var m;
    const w = h(l), S = (m = h(a)) != null ? m : Cb;
    return {
      name: "arrow",
      enabled: !zp(w),
      options: {
        element: w,
        padding: S
      }
    };
  }), u = O(() => ({
    onFirstUpdate: () => {
      c();
    },
    ...mb(e, [
      h(i),
      h(s)
    ])
  })), d = O(() => bb(e.referenceEl) || h(o)), { attributes: f, state: p, styles: v, update: c, forceUpdate: g, instanceRef: y } = am(d, n, u);
  return U(y, (m) => t.value = m), ke(() => {
    U(() => {
      var m;
      return (m = h(d)) == null ? void 0 : m.getBoundingClientRect();
    }, () => {
      c();
    });
  }), {
    attributes: f,
    arrowRef: l,
    contentRef: n,
    instanceRef: y,
    state: p,
    styles: v,
    role: r,
    forceUpdate: g,
    update: c
  };
}, Eb = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: r } = yl(), l = ne("popper"), a = O(() => h(t).popper), s = x(e.zIndex || r()), i = O(() => [
    l.b(),
    l.is("pure", e.pure),
    l.is(e.effect),
    e.popperClass
  ]), u = O(() => [
    { zIndex: h(s) },
    e.popperStyle || {},
    h(n).popper
  ]), d = O(() => o.value === "dialog" ? "false" : void 0), f = O(() => h(n).arrow || {});
  return {
    ariaModal: d,
    arrowStyle: f,
    contentAttrs: a,
    contentClass: i,
    contentStyle: u,
    contentZIndex: s,
    updateZIndex: () => {
      s.value = e.zIndex || r();
    }
  };
}, _b = (e, t) => {
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
}, Ob = W({
  name: "ElPopperContent"
}), xb = /* @__PURE__ */ W({
  ...Ob,
  props: hi,
  emits: gb,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: r,
      trapped: l,
      onFocusAfterReleased: a,
      onFocusAfterTrapped: s,
      onFocusInTrap: i,
      onFocusoutPrevented: u,
      onReleaseRequested: d
    } = _b(o, n), { attributes: f, arrowRef: p, contentRef: v, styles: c, instanceRef: g, role: y, update: m } = Sb(o), {
      ariaModal: w,
      arrowStyle: S,
      contentAttrs: b,
      contentClass: T,
      contentStyle: _,
      updateZIndex: C
    } = Eb(o, {
      styles: c,
      attributes: f,
      role: y
    }), $ = se(zo, void 0), L = x();
    rt(Vs, {
      arrowStyle: S,
      arrowRef: p,
      arrowOffset: L
    }), $ && ($.addInputId || $.removeInputId) && rt(zo, {
      ...$,
      addInputId: no,
      removeInputId: no
    });
    let I;
    const D = (K = !0) => {
      m(), K && C();
    }, B = () => {
      D(!1), o.visible && o.focusOnShow ? l.value = !0 : o.visible === !1 && (l.value = !1);
    };
    return ke(() => {
      U(() => o.triggerTargetEl, (K, ee) => {
        I == null || I(), I = void 0;
        const F = h(K || v.value), Y = h(ee || v.value);
        oo(F) && (I = U([y, () => o.ariaLabel, w, () => o.id], (oe) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((H, A) => {
            Xo(oe[A]) ? F.removeAttribute(H) : F.setAttribute(H, oe[A]);
          });
        }, { immediate: !0 })), Y !== F && oo(Y) && ["role", "aria-label", "aria-modal", "id"].forEach((oe) => {
          Y.removeAttribute(oe);
        });
      }, { immediate: !0 }), U(() => o.visible, B, { immediate: !0 });
    }), yt(() => {
      I == null || I(), I = void 0;
    }), t({
      popperContentRef: v,
      popperInstanceRef: g,
      updatePopper: D,
      contentStyle: _
    }), (K, ee) => (P(), N("div", Ht({
      ref_key: "contentRef",
      ref: v
    }, h(b), {
      style: h(_),
      class: h(T),
      tabindex: "-1",
      onMouseenter: ee[0] || (ee[0] = (F) => K.$emit("mouseenter", F)),
      onMouseleave: ee[1] || (ee[1] = (F) => K.$emit("mouseleave", F))
    }), [
      ge(h(pb), {
        trapped: h(l),
        "trap-on-focus-in": !0,
        "focus-trap-el": h(v),
        "focus-start-el": h(r),
        onFocusAfterTrapped: h(s),
        onFocusAfterReleased: h(a),
        onFocusin: h(i),
        onFocusoutPrevented: h(u),
        onReleaseRequested: h(d)
      }, {
        default: Z(() => [
          ae(K.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var Tb = /* @__PURE__ */ pe(xb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const $b = Ct(qm), Pb = ne("tooltip"), El = Ee({
  ...fm,
  ...hi,
  appendTo: {
    type: fe([String, Object])
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
    type: fe(Boolean),
    default: null
  },
  transition: {
    type: String,
    default: `${Pb.namespace.value}-fade-in-linear`
  },
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: {
    type: Boolean
  }
}), gi = Ee({
  ...pi,
  disabled: Boolean,
  trigger: {
    type: fe([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: fe(Array),
    default: () => [ro.enter, ro.space]
  }
}), {
  useModelToggleProps: kb,
  useModelToggleEmits: Ab,
  useModelToggle: Lb
} = rg("visible"), Mb = Ee({
  ...ci,
  ...kb,
  ...El,
  ...gi,
  ...di,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Rb = [
  ...Ab,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], Ib = (e, t) => vn(e) ? e.includes(t) : e === t, Sn = (e, t, n) => (o) => {
  Ib(h(e), t) && n(o);
}, Nb = W({
  name: "ElTooltipTrigger"
}), Fb = /* @__PURE__ */ W({
  ...Nb,
  props: gi,
  setup(e, { expose: t }) {
    const n = e, o = ne("tooltip"), { controlled: r, id: l, open: a, onOpen: s, onClose: i, onToggle: u } = se(il, void 0), d = x(null), f = () => {
      if (h(r) || n.disabled)
        return !0;
    }, p = xt(n, "trigger"), v = zt(f, Sn(p, "hover", s)), c = zt(f, Sn(p, "hover", i)), g = zt(f, Sn(p, "click", (b) => {
      b.button === 0 && u(b);
    })), y = zt(f, Sn(p, "focus", s)), m = zt(f, Sn(p, "focus", i)), w = zt(f, Sn(p, "contextmenu", (b) => {
      b.preventDefault(), u(b);
    })), S = zt(f, (b) => {
      const { code: T } = b;
      n.triggerKeys.includes(T) && (b.preventDefault(), u(b));
    });
    return t({
      triggerRef: d
    }), (b, T) => (P(), Q(h(eb), {
      id: h(l),
      "virtual-ref": b.virtualRef,
      open: h(a),
      "virtual-triggering": b.virtualTriggering,
      class: M(h(o).e("trigger")),
      onBlur: h(m),
      onClick: h(g),
      onContextmenu: h(w),
      onFocus: h(y),
      onMouseenter: h(v),
      onMouseleave: h(c),
      onKeydown: h(S)
    }, {
      default: Z(() => [
        ae(b.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var Bb = /* @__PURE__ */ pe(Fb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const zb = W({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), Hb = /* @__PURE__ */ W({
  ...zb,
  props: El,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = ai(), r = x(null), l = x(!1), {
      controlled: a,
      id: s,
      open: i,
      trigger: u,
      onClose: d,
      onOpen: f,
      onShow: p,
      onHide: v,
      onBeforeShow: c,
      onBeforeHide: g
    } = se(il, void 0), y = O(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    yt(() => {
      l.value = !0;
    });
    const m = O(() => h(y) ? !0 : h(i)), w = O(() => n.disabled ? !1 : h(i)), S = O(() => n.appendTo || o.value), b = O(() => {
      var F;
      return (F = n.style) != null ? F : {};
    }), T = O(() => !h(i)), _ = () => {
      v();
    }, C = () => {
      if (h(a))
        return !0;
    }, $ = zt(C, () => {
      n.enterable && h(u) === "hover" && f();
    }), L = zt(C, () => {
      h(u) === "hover" && d();
    }), I = () => {
      var F, Y;
      (Y = (F = r.value) == null ? void 0 : F.updatePopper) == null || Y.call(F), c == null || c();
    }, D = () => {
      g == null || g();
    }, B = () => {
      p(), ee = Xp(O(() => {
        var F;
        return (F = r.value) == null ? void 0 : F.popperContentRef;
      }), () => {
        if (h(a))
          return;
        h(u) !== "hover" && d();
      });
    }, K = () => {
      n.virtualTriggering || d();
    };
    let ee;
    return U(() => h(i), (F) => {
      F || ee == null || ee();
    }, {
      flush: "post"
    }), U(() => n.content, () => {
      var F, Y;
      (Y = (F = r.value) == null ? void 0 : F.updatePopper) == null || Y.call(F);
    }), t({
      contentRef: r
    }), (F, Y) => (P(), Q(Ji, {
      disabled: !F.teleported,
      to: h(S)
    }, [
      ge(so, {
        name: F.transition,
        onAfterLeave: _,
        onBeforeEnter: I,
        onAfterEnter: B,
        onBeforeLeave: D
      }, {
        default: Z(() => [
          h(m) ? Pe((P(), Q(h(Tb), Ht({
            key: 0,
            id: h(s),
            ref_key: "contentRef",
            ref: r
          }, F.$attrs, {
            "aria-label": F.ariaLabel,
            "aria-hidden": h(T),
            "boundaries-padding": F.boundariesPadding,
            "fallback-placements": F.fallbackPlacements,
            "gpu-acceleration": F.gpuAcceleration,
            offset: F.offset,
            placement: F.placement,
            "popper-options": F.popperOptions,
            strategy: F.strategy,
            effect: F.effect,
            enterable: F.enterable,
            pure: F.pure,
            "popper-class": F.popperClass,
            "popper-style": [F.popperStyle, h(b)],
            "reference-el": F.referenceEl,
            "trigger-target-el": F.triggerTargetEl,
            visible: h(w),
            "z-index": F.zIndex,
            onMouseenter: h($),
            onMouseleave: h(L),
            onBlur: K,
            onClose: h(d)
          }), {
            default: Z(() => [
              l.value ? G("v-if", !0) : ae(F.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [Dt, h(w)]
          ]) : G("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var Db = /* @__PURE__ */ pe(Hb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const Wb = ["innerHTML"], Vb = { key: 1 }, jb = W({
  name: "ElTooltip"
}), Kb = /* @__PURE__ */ W({
  ...jb,
  props: Mb,
  emits: Rb,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    dm();
    const r = qs(), l = x(), a = x(), s = () => {
      var m;
      const w = h(l);
      w && ((m = w.popperInstanceRef) == null || m.update());
    }, i = x(!1), u = x(), { show: d, hide: f, hasUpdateHandler: p } = Lb({
      indicator: i,
      toggleReason: u
    }), { onOpen: v, onClose: c } = si({
      showAfter: xt(o, "showAfter"),
      hideAfter: xt(o, "hideAfter"),
      open: d,
      close: f
    }), g = O(() => An(o.visible) && !p.value);
    rt(il, {
      controlled: g,
      id: r,
      open: eu(i),
      trigger: xt(o, "trigger"),
      onOpen: (m) => {
        v(m);
      },
      onClose: (m) => {
        c(m);
      },
      onToggle: (m) => {
        h(i) ? c(m) : v(m);
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
      updatePopper: s
    }), U(() => o.disabled, (m) => {
      m && i.value && (i.value = !1);
    });
    const y = () => {
      var m, w;
      const S = (w = (m = a.value) == null ? void 0 : m.contentRef) == null ? void 0 : w.popperContentRef;
      return S && S.contains(document.activeElement);
    };
    return tu(() => i.value && f()), t({
      popperRef: l,
      contentRef: a,
      isFocusInsideContent: y,
      updatePopper: s,
      onOpen: v,
      onClose: c,
      hide: f
    }), (m, w) => (P(), Q(h($b), {
      ref_key: "popperRef",
      ref: l,
      role: m.role
    }, {
      default: Z(() => [
        ge(Bb, {
          disabled: m.disabled,
          trigger: m.trigger,
          "trigger-keys": m.triggerKeys,
          "virtual-ref": m.virtualRef,
          "virtual-triggering": m.virtualTriggering
        }, {
          default: Z(() => [
            m.$slots.default ? ae(m.$slots, "default", { key: 0 }) : G("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        ge(Db, {
          ref_key: "contentRef",
          ref: a,
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
          default: Z(() => [
            ae(m.$slots, "content", {}, () => [
              m.rawContent ? (P(), N("span", {
                key: 0,
                innerHTML: m.content
              }, null, 8, Wb)) : (P(), N("span", Vb, ye(m.content), 1))
            ]),
            m.showArrow ? (P(), Q(h(Xm), {
              key: 0,
              "arrow-offset": m.arrowOffset
            }, null, 8, ["arrow-offset"])) : G("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var Ub = /* @__PURE__ */ pe(Kb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const mi = Ct(Ub), qb = (e, t) => {
  Ks({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, O(() => e.type === "text"));
  const n = se(Hs, void 0), o = wn("button"), { form: r } = jn(), l = gn(O(() => n == null ? void 0 : n.size)), a = Zo(), s = x(), i = Wo(), u = O(() => e.type || (n == null ? void 0 : n.type) || ""), d = O(() => {
    var v, c, g;
    return (g = (c = e.autoInsertSpace) != null ? c : (v = o.value) == null ? void 0 : v.autoInsertSpace) != null ? g : !1;
  }), f = O(() => {
    var v;
    const c = (v = i.default) == null ? void 0 : v.call(i);
    if (d.value && (c == null ? void 0 : c.length) === 1) {
      const g = c[0];
      if ((g == null ? void 0 : g.type) === os) {
        const y = g.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(y.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: a,
    _size: l,
    _type: u,
    _ref: s,
    shouldAddSpace: f,
    handleClick: (v) => {
      e.nativeType === "reset" && (r == null || r.resetFields()), t("click", v);
    }
  };
}, Gb = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], Yb = ["button", "submit", "reset"], $r = Ee({
  size: fo,
  disabled: Boolean,
  type: {
    type: String,
    values: Gb,
    default: ""
  },
  icon: {
    type: kt
  },
  nativeType: {
    type: String,
    values: Yb,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: kt,
    default: () => rl
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
}), Xb = {
  click: (e) => e instanceof MouseEvent
};
function Re(e, t) {
  Qb(e) && (e = "100%");
  var n = Zb(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function wo(e) {
  return Math.min(1, Math.max(0, e));
}
function Qb(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Zb(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function bi(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Co(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function sn(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Jb(e, t, n) {
  return {
    r: Re(e, 255) * 255,
    g: Re(t, 255) * 255,
    b: Re(n, 255) * 255
  };
}
function Fa(e, t, n) {
  e = Re(e, 255), t = Re(t, 255), n = Re(n, 255);
  var o = Math.max(e, t, n), r = Math.min(e, t, n), l = 0, a = 0, s = (o + r) / 2;
  if (o === r)
    a = 0, l = 0;
  else {
    var i = o - r;
    switch (a = s > 0.5 ? i / (2 - o - r) : i / (o + r), o) {
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
  return { h: l, s: a, l: s };
}
function dr(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function e0(e, t, n) {
  var o, r, l;
  if (e = Re(e, 360), t = Re(t, 100), n = Re(n, 100), t === 0)
    r = n, l = n, o = n;
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - a;
    o = dr(s, a, e + 1 / 3), r = dr(s, a, e), l = dr(s, a, e - 1 / 3);
  }
  return { r: o * 255, g: r * 255, b: l * 255 };
}
function Ba(e, t, n) {
  e = Re(e, 255), t = Re(t, 255), n = Re(n, 255);
  var o = Math.max(e, t, n), r = Math.min(e, t, n), l = 0, a = o, s = o - r, i = o === 0 ? 0 : s / o;
  if (o === r)
    l = 0;
  else {
    switch (o) {
      case e:
        l = (t - n) / s + (t < n ? 6 : 0);
        break;
      case t:
        l = (n - e) / s + 2;
        break;
      case n:
        l = (e - t) / s + 4;
        break;
    }
    l /= 6;
  }
  return { h: l, s: i, v: a };
}
function t0(e, t, n) {
  e = Re(e, 360) * 6, t = Re(t, 100), n = Re(n, 100);
  var o = Math.floor(e), r = e - o, l = n * (1 - t), a = n * (1 - r * t), s = n * (1 - (1 - r) * t), i = o % 6, u = [n, a, l, l, s, n][i], d = [s, n, n, a, l, l][i], f = [l, l, s, n, n, a][i];
  return { r: u * 255, g: d * 255, b: f * 255 };
}
function za(e, t, n, o) {
  var r = [
    sn(Math.round(e).toString(16)),
    sn(Math.round(t).toString(16)),
    sn(Math.round(n).toString(16))
  ];
  return o && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function n0(e, t, n, o, r) {
  var l = [
    sn(Math.round(e).toString(16)),
    sn(Math.round(t).toString(16)),
    sn(Math.round(n).toString(16)),
    sn(o0(o))
  ];
  return r && l[0].startsWith(l[0].charAt(1)) && l[1].startsWith(l[1].charAt(1)) && l[2].startsWith(l[2].charAt(1)) && l[3].startsWith(l[3].charAt(1)) ? l[0].charAt(0) + l[1].charAt(0) + l[2].charAt(0) + l[3].charAt(0) : l.join("");
}
function o0(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Ha(e) {
  return tt(e) / 255;
}
function tt(e) {
  return parseInt(e, 16);
}
function r0(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Pr = {
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
function l0(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, o = null, r = null, l = null, a = !1, s = !1;
  return typeof e == "string" && (e = i0(e)), typeof e == "object" && (Ft(e.r) && Ft(e.g) && Ft(e.b) ? (t = Jb(e.r, e.g, e.b), a = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Ft(e.h) && Ft(e.s) && Ft(e.v) ? (o = Co(e.s), r = Co(e.v), t = t0(e.h, o, r), a = !0, s = "hsv") : Ft(e.h) && Ft(e.s) && Ft(e.l) && (o = Co(e.s), l = Co(e.l), t = e0(e.h, o, l), a = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = bi(n), {
    ok: a,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var a0 = "[-\\+]?\\d+%?", s0 = "[-\\+]?\\d*\\.\\d+%?", Qt = "(?:".concat(s0, ")|(?:").concat(a0, ")"), fr = "[\\s|\\(]+(".concat(Qt, ")[,|\\s]+(").concat(Qt, ")[,|\\s]+(").concat(Qt, ")\\s*\\)?"), pr = "[\\s|\\(]+(".concat(Qt, ")[,|\\s]+(").concat(Qt, ")[,|\\s]+(").concat(Qt, ")[,|\\s]+(").concat(Qt, ")\\s*\\)?"), mt = {
  CSS_UNIT: new RegExp(Qt),
  rgb: new RegExp("rgb" + fr),
  rgba: new RegExp("rgba" + pr),
  hsl: new RegExp("hsl" + fr),
  hsla: new RegExp("hsla" + pr),
  hsv: new RegExp("hsv" + fr),
  hsva: new RegExp("hsva" + pr),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function i0(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Pr[e])
    e = Pr[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = mt.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = mt.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = mt.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = mt.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = mt.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = mt.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = mt.hex8.exec(e), n ? {
    r: tt(n[1]),
    g: tt(n[2]),
    b: tt(n[3]),
    a: Ha(n[4]),
    format: t ? "name" : "hex8"
  } : (n = mt.hex6.exec(e), n ? {
    r: tt(n[1]),
    g: tt(n[2]),
    b: tt(n[3]),
    format: t ? "name" : "hex"
  } : (n = mt.hex4.exec(e), n ? {
    r: tt(n[1] + n[1]),
    g: tt(n[2] + n[2]),
    b: tt(n[3] + n[3]),
    a: Ha(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = mt.hex3.exec(e), n ? {
    r: tt(n[1] + n[1]),
    g: tt(n[2] + n[2]),
    b: tt(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Ft(e) {
  return Boolean(mt.CSS_UNIT.exec(String(e)));
}
var u0 = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var o;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = r0(t)), this.originalInput = t;
      var r = l0(t);
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
      var t = this.toRgb(), n, o, r, l = t.r / 255, a = t.g / 255, s = t.b / 255;
      return l <= 0.03928 ? n = l / 12.92 : n = Math.pow((l + 0.055) / 1.055, 2.4), a <= 0.03928 ? o = a / 12.92 : o = Math.pow((a + 0.055) / 1.055, 2.4), s <= 0.03928 ? r = s / 12.92 : r = Math.pow((s + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * o + 0.0722 * r;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = bi(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = Ba(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = Ba(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsva(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Fa(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Fa(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsla(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), za(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), n0(this.r, this.g, this.b, this.a, t);
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
        return "".concat(Math.round(Re(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(Re(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + za(this.r, this.g, this.b, !1), n = 0, o = Object.entries(Pr); n < o.length; n++) {
        var r = o[n], l = r[0], a = r[1];
        if (t === a)
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
      return n.l += t / 100, n.l = wo(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = wo(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = wo(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = wo(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), o = (n.h + t) % 360;
      return n.h = o < 0 ? 360 + o : o, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var o = this.toRgb(), r = new e(t).toRgb(), l = n / 100, a = {
        r: (r.r - o.r) * l + o.r,
        g: (r.g - o.g) * l + o.g,
        b: (r.b - o.b) * l + o.b,
        a: (r.a - o.a) * l + o.a
      };
      return new e(a);
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
      for (var n = this.toHsv(), o = n.h, r = n.s, l = n.v, a = [], s = 1 / t; t--; )
        a.push(new e({ h: o, s: r, v: l })), l = (l + s) % 1;
      return a;
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
      for (var n = this.toHsl(), o = n.h, r = [this], l = 360 / t, a = 1; a < t; a++)
        r.push(new e({ h: (o + a * l) % 360, s: n.s, l: n.l }));
      return r;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
);
function qt(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function c0(e) {
  const t = Zo(), n = ne("button");
  return O(() => {
    let o = {};
    const r = e.color;
    if (r) {
      const l = new u0(r), a = e.dark ? l.tint(20).toString() : qt(l, 20);
      if (e.plain)
        o = n.cssVarBlock({
          "bg-color": e.dark ? qt(l, 90) : l.tint(90).toString(),
          "text-color": r,
          "border-color": e.dark ? qt(l, 50) : l.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": r,
          "hover-border-color": r,
          "active-bg-color": a,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": a
        }), t.value && (o[n.cssVarBlockName("disabled-bg-color")] = e.dark ? qt(l, 90) : l.tint(90).toString(), o[n.cssVarBlockName("disabled-text-color")] = e.dark ? qt(l, 50) : l.tint(50).toString(), o[n.cssVarBlockName("disabled-border-color")] = e.dark ? qt(l, 80) : l.tint(80).toString());
      else {
        const s = e.dark ? qt(l, 30) : l.tint(30).toString(), i = l.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (o = n.cssVarBlock({
          "bg-color": r,
          "text-color": i,
          "border-color": r,
          "hover-bg-color": s,
          "hover-text-color": i,
          "hover-border-color": s,
          "active-bg-color": a,
          "active-border-color": a
        }), t.value) {
          const u = e.dark ? qt(l, 50) : l.tint(50).toString();
          o[n.cssVarBlockName("disabled-bg-color")] = u, o[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, o[n.cssVarBlockName("disabled-border-color")] = u;
        }
      }
    }
    return o;
  });
}
const d0 = ["aria-disabled", "disabled", "autofocus", "type"], f0 = W({
  name: "ElButton"
}), p0 = /* @__PURE__ */ W({
  ...f0,
  props: $r,
  emits: Xb,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = c0(o), l = ne("button"), { _ref: a, _size: s, _type: i, _disabled: u, shouldAddSpace: d, handleClick: f } = qb(o, n);
    return t({
      ref: a,
      size: s,
      type: i,
      disabled: u,
      shouldAddSpace: d
    }), (p, v) => (P(), N("button", {
      ref_key: "_ref",
      ref: a,
      class: M([
        h(l).b(),
        h(l).m(h(i)),
        h(l).m(h(s)),
        h(l).is("disabled", h(u)),
        h(l).is("loading", p.loading),
        h(l).is("plain", p.plain),
        h(l).is("round", p.round),
        h(l).is("circle", p.circle),
        h(l).is("text", p.text),
        h(l).is("link", p.link),
        h(l).is("has-bg", p.bg)
      ]),
      "aria-disabled": h(u) || p.loading,
      disabled: h(u) || p.loading,
      autofocus: p.autofocus,
      type: p.nativeType,
      style: Oe(h(r)),
      onClick: v[0] || (v[0] = (...c) => h(f) && h(f)(...c))
    }, [
      p.loading ? (P(), N(Ke, { key: 0 }, [
        p.$slots.loading ? ae(p.$slots, "loading", { key: 0 }) : (P(), Q(h(je), {
          key: 1,
          class: M(h(l).is("loading"))
        }, {
          default: Z(() => [
            (P(), Q(nt(p.loadingIcon)))
          ]),
          _: 1
        }, 8, ["class"]))
      ], 64)) : p.icon || p.$slots.icon ? (P(), Q(h(je), { key: 1 }, {
        default: Z(() => [
          p.icon ? (P(), Q(nt(p.icon), { key: 0 })) : ae(p.$slots, "icon", { key: 1 })
        ]),
        _: 3
      })) : G("v-if", !0),
      p.$slots.default ? (P(), N("span", {
        key: 2,
        class: M({ [h(l).em("text", "expand")]: h(d) })
      }, [
        ae(p.$slots, "default")
      ], 2)) : G("v-if", !0)
    ], 14, d0));
  }
});
var v0 = /* @__PURE__ */ pe(p0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const h0 = {
  size: $r.size,
  type: $r.type
}, g0 = W({
  name: "ElButtonGroup"
}), m0 = /* @__PURE__ */ W({
  ...g0,
  props: h0,
  setup(e) {
    const t = e;
    rt(Hs, Wt({
      size: xt(t, "size"),
      type: xt(t, "type")
    }));
    const n = ne("button");
    return (o, r) => (P(), N("div", {
      class: M(`${h(n).b("group")}`)
    }, [
      ae(o.$slots, "default")
    ], 2));
  }
});
var yi = /* @__PURE__ */ pe(m0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const b0 = Ct(v0, {
  ButtonGroup: yi
});
Wn(yi);
const Yt = /* @__PURE__ */ new Map();
let Da;
_e && (document.addEventListener("mousedown", (e) => Da = e), document.addEventListener("mouseup", (e) => {
  for (const t of Yt.values())
    for (const { documentHandler: n } of t)
      n(e, Da);
}));
function Wa(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : oo(t.arg) && n.push(t.arg), function(o, r) {
    const l = t.instance.popperRef, a = o.target, s = r == null ? void 0 : r.target, i = !t || !t.instance, u = !a || !s, d = e.contains(a) || e.contains(s), f = e === a, p = n.length && n.some((c) => c == null ? void 0 : c.contains(a)) || n.length && n.includes(s), v = l && (l.contains(a) || l.contains(s));
    i || u || d || f || p || v || t.value(o, r);
  };
}
const wi = {
  beforeMount(e, t) {
    Yt.has(e) || Yt.set(e, []), Yt.get(e).push({
      documentHandler: Wa(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    Yt.has(e) || Yt.set(e, []);
    const n = Yt.get(e), o = n.findIndex((l) => l.bindingFn === t.oldValue), r = {
      documentHandler: Wa(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, r) : n.push(r);
  },
  unmounted(e) {
    Yt.delete(e);
  }
};
var Va = !1, an, kr, Ar, xo, To, Ci, $o, Lr, Mr, Rr, Si, Ir, Nr, Ei, _i;
function Ge() {
  if (!Va) {
    Va = !0;
    var e = navigator.userAgent, t = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e), n = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
    if (Ir = /\b(iPhone|iP[ao]d)/.exec(e), Nr = /\b(iP[ao]d)/.exec(e), Rr = /Android/i.exec(e), Ei = /FBAN\/\w+;/i.exec(e), _i = /Mobile/i.exec(e), Si = !!/Win64/.exec(e), t) {
      an = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN, an && document && document.documentMode && (an = document.documentMode);
      var o = /(?:Trident\/(\d+.\d+))/.exec(e);
      Ci = o ? parseFloat(o[1]) + 4 : an, kr = t[2] ? parseFloat(t[2]) : NaN, Ar = t[3] ? parseFloat(t[3]) : NaN, xo = t[4] ? parseFloat(t[4]) : NaN, xo ? (t = /(?:Chrome\/(\d+\.\d+))/.exec(e), To = t && t[1] ? parseFloat(t[1]) : NaN) : To = NaN;
    } else
      an = kr = Ar = To = xo = NaN;
    if (n) {
      if (n[1]) {
        var r = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
        $o = r ? parseFloat(r[1].replace("_", ".")) : !0;
      } else
        $o = !1;
      Lr = !!n[2], Mr = !!n[3];
    } else
      $o = Lr = Mr = !1;
  }
}
var Fr = { ie: function() {
  return Ge() || an;
}, ieCompatibilityMode: function() {
  return Ge() || Ci > an;
}, ie64: function() {
  return Fr.ie() && Si;
}, firefox: function() {
  return Ge() || kr;
}, opera: function() {
  return Ge() || Ar;
}, webkit: function() {
  return Ge() || xo;
}, safari: function() {
  return Fr.webkit();
}, chrome: function() {
  return Ge() || To;
}, windows: function() {
  return Ge() || Lr;
}, osx: function() {
  return Ge() || $o;
}, linux: function() {
  return Ge() || Mr;
}, iphone: function() {
  return Ge() || Ir;
}, mobile: function() {
  return Ge() || Ir || Nr || Rr || _i;
}, nativeApp: function() {
  return Ge() || Ei;
}, android: function() {
  return Ge() || Rr;
}, ipad: function() {
  return Ge() || Nr;
} }, y0 = Fr, So = !!(typeof window < "u" && window.document && window.document.createElement), w0 = { canUseDOM: So, canUseWorkers: typeof Worker < "u", canUseEventListeners: So && !!(window.addEventListener || window.attachEvent), canUseViewport: So && !!window.screen, isInWorker: !So }, Oi = w0, xi;
Oi.canUseDOM && (xi = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0);
function C0(e, t) {
  if (!Oi.canUseDOM || t && !("addEventListener" in document))
    return !1;
  var n = "on" + e, o = n in document;
  if (!o) {
    var r = document.createElement("div");
    r.setAttribute(n, "return;"), o = typeof r[n] == "function";
  }
  return !o && xi && e === "wheel" && (o = document.implementation.hasFeature("Events.wheel", "3.0")), o;
}
var S0 = C0, ja = 10, Ka = 40, Ua = 800;
function Ti(e) {
  var t = 0, n = 0, o = 0, r = 0;
  return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), o = t * ja, r = n * ja, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (o = e.deltaX), (o || r) && e.deltaMode && (e.deltaMode == 1 ? (o *= Ka, r *= Ka) : (o *= Ua, r *= Ua)), o && !t && (t = o < 1 ? -1 : 1), r && !n && (n = r < 1 ? -1 : 1), { spinX: t, spinY: n, pixelX: o, pixelY: r };
}
Ti.getEventType = function() {
  return y0.firefox() ? "DOMMouseScroll" : S0("wheel") ? "wheel" : "mousewheel";
};
var E0 = Ti;
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
const _0 = function(e, t) {
  if (e && e.addEventListener) {
    const n = function(o) {
      const r = E0(o);
      t && Reflect.apply(t, this, [o, r]);
    };
    e.addEventListener("wheel", n, { passive: !0 });
  }
}, O0 = {
  beforeMount(e, t) {
    _0(e, t.value);
  }
}, $i = {
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
  size: fo,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: !0
  }
}, Pi = {
  [Ve]: (e) => ot(e) || $e(e) || An(e),
  change: (e) => ot(e) || $e(e) || An(e)
}, x0 = ({
  model: e,
  isChecked: t
}) => {
  const n = se(Vn, void 0), o = O(() => {
    var l, a;
    const s = (l = n == null ? void 0 : n.max) == null ? void 0 : l.value, i = (a = n == null ? void 0 : n.min) == null ? void 0 : a.value;
    return !Fo(s) && e.value.length >= s && !t.value || !Fo(i) && e.value.length <= i && t.value;
  });
  return {
    isDisabled: Zo(O(() => (n == null ? void 0 : n.disabled.value) || o.value)),
    isLimitDisabled: o
  };
}, T0 = (e, {
  model: t,
  isLimitExceeded: n,
  hasOwnLabel: o,
  isDisabled: r,
  isLabeledByFormItem: l
}) => {
  const a = se(Vn, void 0), { formItem: s } = jn(), { emit: i } = we();
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
    n.value || !o.value && !r.value && l.value && (c.composedPath().some((m) => m.tagName === "LABEL") || (t.value = u([!1, e.falseLabel].includes(t.value)), await ue(), d(t.value, c)));
  }
  const v = O(() => (a == null ? void 0 : a.validateEvent) || e.validateEvent);
  return U(() => e.modelValue, () => {
    v.value && (s == null || s.validate("change").catch((c) => Fe(c)));
  }), {
    handleChange: f,
    onClickRoot: p
  };
}, $0 = (e) => {
  const t = x(!1), { emit: n } = we(), o = se(Vn, void 0), r = O(() => Fo(o) === !1), l = x(!1);
  return {
    model: O({
      get() {
        var s, i;
        return r.value ? (s = o == null ? void 0 : o.modelValue) == null ? void 0 : s.value : (i = e.modelValue) != null ? i : t.value;
      },
      set(s) {
        var i, u;
        r.value && vn(s) ? (l.value = ((i = o == null ? void 0 : o.max) == null ? void 0 : i.value) !== void 0 && s.length > (o == null ? void 0 : o.max.value), l.value === !1 && ((u = o == null ? void 0 : o.changeEvent) == null || u.call(o, s))) : (n(Ve, s), t.value = s);
      }
    }),
    isGroup: r,
    isLimitExceeded: l
  };
}, P0 = (e, t, { model: n }) => {
  const o = se(Vn, void 0), r = x(!1), l = O(() => {
    const u = n.value;
    return An(u) ? u : vn(u) ? st(e.label) ? u.map($n).some((d) => No(d, e.label)) : u.map($n).includes(e.label) : u != null ? u === e.trueLabel : !!u;
  }), a = gn(O(() => {
    var u;
    return (u = o == null ? void 0 : o.size) == null ? void 0 : u.value;
  }), {
    prop: !0
  }), s = gn(O(() => {
    var u;
    return (u = o == null ? void 0 : o.size) == null ? void 0 : u.value;
  })), i = O(() => !!(t.default || e.label));
  return {
    checkboxButtonSize: a,
    isChecked: l,
    isFocused: r,
    checkboxSize: s,
    hasOwnLabel: i
  };
}, k0 = (e, { model: t }) => {
  function n() {
    vn(t.value) && !t.value.includes(e.label) ? t.value.push(e.label) : t.value = e.trueLabel || !0;
  }
  e.checked && n();
}, ki = (e, t) => {
  const { formItem: n } = jn(), { model: o, isGroup: r, isLimitExceeded: l } = $0(e), {
    isFocused: a,
    isChecked: s,
    checkboxButtonSize: i,
    checkboxSize: u,
    hasOwnLabel: d
  } = P0(e, t, { model: o }), { isDisabled: f } = x0({ model: o, isChecked: s }), { inputId: p, isLabeledByFormItem: v } = cl(e, {
    formItemContext: n,
    disableIdGeneration: d,
    disableIdManagement: r
  }), { handleChange: c, onClickRoot: g } = T0(e, {
    model: o,
    isLimitExceeded: l,
    hasOwnLabel: d,
    isDisabled: f,
    isLabeledByFormItem: v
  });
  return k0(e, { model: o }), {
    inputId: p,
    isLabeledByFormItem: v,
    isChecked: s,
    isDisabled: f,
    isFocused: a,
    checkboxButtonSize: i,
    checkboxSize: u,
    hasOwnLabel: d,
    model: o,
    handleChange: c,
    onClickRoot: g
  };
}, A0 = ["tabindex", "role", "aria-checked"], L0 = ["id", "aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"], M0 = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"], R0 = W({
  name: "ElCheckbox"
}), I0 = /* @__PURE__ */ W({
  ...R0,
  props: $i,
  emits: Pi,
  setup(e) {
    const t = e, n = Wo(), {
      inputId: o,
      isLabeledByFormItem: r,
      isChecked: l,
      isDisabled: a,
      isFocused: s,
      checkboxSize: i,
      hasOwnLabel: u,
      model: d,
      handleChange: f,
      onClickRoot: p
    } = ki(t, n), v = ne("checkbox"), c = O(() => [
      v.b(),
      v.m(i.value),
      v.is("disabled", a.value),
      v.is("bordered", t.border),
      v.is("checked", l.value)
    ]), g = O(() => [
      v.e("input"),
      v.is("disabled", a.value),
      v.is("checked", l.value),
      v.is("indeterminate", t.indeterminate),
      v.is("focus", s.value)
    ]);
    return (y, m) => (P(), Q(nt(!h(u) && h(r) ? "span" : "label"), {
      class: M(h(c)),
      "aria-controls": y.indeterminate ? y.controls : null,
      onClick: h(p)
    }, {
      default: Z(() => [
        V("span", {
          class: M(h(g)),
          tabindex: y.indeterminate ? 0 : void 0,
          role: y.indeterminate ? "checkbox" : void 0,
          "aria-checked": y.indeterminate ? "mixed" : void 0
        }, [
          y.trueLabel || y.falseLabel ? Pe((P(), N("input", {
            key: 0,
            id: h(o),
            "onUpdate:modelValue": m[0] || (m[0] = (w) => dn(d) ? d.value = w : null),
            class: M(h(v).e("original")),
            type: "checkbox",
            "aria-hidden": y.indeterminate ? "true" : "false",
            name: y.name,
            tabindex: y.tabindex,
            disabled: h(a),
            "true-value": y.trueLabel,
            "false-value": y.falseLabel,
            onChange: m[1] || (m[1] = (...w) => h(f) && h(f)(...w)),
            onFocus: m[2] || (m[2] = (w) => s.value = !0),
            onBlur: m[3] || (m[3] = (w) => s.value = !1)
          }, null, 42, L0)), [
            [ko, h(d)]
          ]) : Pe((P(), N("input", {
            key: 1,
            id: h(o),
            "onUpdate:modelValue": m[4] || (m[4] = (w) => dn(d) ? d.value = w : null),
            class: M(h(v).e("original")),
            type: "checkbox",
            "aria-hidden": y.indeterminate ? "true" : "false",
            disabled: h(a),
            value: y.label,
            name: y.name,
            tabindex: y.tabindex,
            onChange: m[5] || (m[5] = (...w) => h(f) && h(f)(...w)),
            onFocus: m[6] || (m[6] = (w) => s.value = !0),
            onBlur: m[7] || (m[7] = (w) => s.value = !1)
          }, null, 42, M0)), [
            [ko, h(d)]
          ]),
          V("span", {
            class: M(h(v).e("inner"))
          }, null, 2)
        ], 10, A0),
        h(u) ? (P(), N("span", {
          key: 0,
          class: M(h(v).e("label"))
        }, [
          ae(y.$slots, "default"),
          y.$slots.default ? G("v-if", !0) : (P(), N(Ke, { key: 0 }, [
            Vo(ye(y.label), 1)
          ], 64))
        ], 2)) : G("v-if", !0)
      ]),
      _: 3
    }, 8, ["class", "aria-controls", "onClick"]));
  }
});
var N0 = /* @__PURE__ */ pe(I0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
const F0 = ["name", "tabindex", "disabled", "true-value", "false-value"], B0 = ["name", "tabindex", "disabled", "value"], z0 = W({
  name: "ElCheckboxButton"
}), H0 = /* @__PURE__ */ W({
  ...z0,
  props: $i,
  emits: Pi,
  setup(e) {
    const t = e, n = Wo(), {
      isFocused: o,
      isChecked: r,
      isDisabled: l,
      checkboxButtonSize: a,
      model: s,
      handleChange: i
    } = ki(t, n), u = se(Vn, void 0), d = ne("checkbox"), f = O(() => {
      var v, c, g, y;
      const m = (c = (v = u == null ? void 0 : u.fill) == null ? void 0 : v.value) != null ? c : "";
      return {
        backgroundColor: m,
        borderColor: m,
        color: (y = (g = u == null ? void 0 : u.textColor) == null ? void 0 : g.value) != null ? y : "",
        boxShadow: m ? `-1px 0 0 0 ${m}` : void 0
      };
    }), p = O(() => [
      d.b("button"),
      d.bm("button", a.value),
      d.is("disabled", l.value),
      d.is("checked", r.value),
      d.is("focus", o.value)
    ]);
    return (v, c) => (P(), N("label", {
      class: M(h(p))
    }, [
      v.trueLabel || v.falseLabel ? Pe((P(), N("input", {
        key: 0,
        "onUpdate:modelValue": c[0] || (c[0] = (g) => dn(s) ? s.value = g : null),
        class: M(h(d).be("button", "original")),
        type: "checkbox",
        name: v.name,
        tabindex: v.tabindex,
        disabled: h(l),
        "true-value": v.trueLabel,
        "false-value": v.falseLabel,
        onChange: c[1] || (c[1] = (...g) => h(i) && h(i)(...g)),
        onFocus: c[2] || (c[2] = (g) => o.value = !0),
        onBlur: c[3] || (c[3] = (g) => o.value = !1)
      }, null, 42, F0)), [
        [ko, h(s)]
      ]) : Pe((P(), N("input", {
        key: 1,
        "onUpdate:modelValue": c[4] || (c[4] = (g) => dn(s) ? s.value = g : null),
        class: M(h(d).be("button", "original")),
        type: "checkbox",
        name: v.name,
        tabindex: v.tabindex,
        disabled: h(l),
        value: v.label,
        onChange: c[5] || (c[5] = (...g) => h(i) && h(i)(...g)),
        onFocus: c[6] || (c[6] = (g) => o.value = !0),
        onBlur: c[7] || (c[7] = (g) => o.value = !1)
      }, null, 42, B0)), [
        [ko, h(s)]
      ]),
      v.$slots.default || v.label ? (P(), N("span", {
        key: 2,
        class: M(h(d).be("button", "inner")),
        style: Oe(h(r) ? h(f) : void 0)
      }, [
        ae(v.$slots, "default", {}, () => [
          Vo(ye(v.label), 1)
        ])
      ], 6)) : G("v-if", !0)
    ], 2));
  }
});
var Ai = /* @__PURE__ */ pe(H0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
const D0 = Ee({
  modelValue: {
    type: fe(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: fo,
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
}), W0 = {
  [Ve]: (e) => vn(e),
  change: (e) => vn(e)
}, V0 = W({
  name: "ElCheckboxGroup"
}), j0 = /* @__PURE__ */ W({
  ...V0,
  props: D0,
  emits: W0,
  setup(e, { emit: t }) {
    const n = e, o = ne("checkbox"), { formItem: r } = jn(), { inputId: l, isLabeledByFormItem: a } = cl(n, {
      formItemContext: r
    }), s = async (u) => {
      t(Ve, u), await ue(), t("change", u);
    }, i = O({
      get() {
        return n.modelValue;
      },
      set(u) {
        s(u);
      }
    });
    return rt(Vn, {
      ...jp(Hn(n), [
        "size",
        "min",
        "max",
        "disabled",
        "validateEvent",
        "fill",
        "textColor"
      ]),
      modelValue: i,
      changeEvent: s
    }), U(() => n.modelValue, () => {
      n.validateEvent && (r == null || r.validate("change").catch((u) => Fe(u)));
    }), (u, d) => {
      var f;
      return P(), Q(nt(u.tag), {
        id: h(l),
        class: M(h(o).b("group")),
        role: "group",
        "aria-label": h(a) ? void 0 : u.label || "checkbox-group",
        "aria-labelledby": h(a) ? (f = h(r)) == null ? void 0 : f.labelId : void 0
      }, {
        default: Z(() => [
          ae(u.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var Li = /* @__PURE__ */ pe(j0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
const Bn = Ct(N0, {
  CheckboxButton: Ai,
  CheckboxGroup: Li
});
Wn(Ai);
Wn(Li);
const Mi = Ee({
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
    values: co,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), K0 = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, U0 = W({
  name: "ElTag"
}), q0 = /* @__PURE__ */ W({
  ...U0,
  props: Mi,
  emits: K0,
  setup(e, { emit: t }) {
    const n = e, o = gn(), r = ne("tag"), l = O(() => {
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
    }), a = (i) => {
      t("close", i);
    }, s = (i) => {
      t("click", i);
    };
    return (i, u) => i.disableTransitions ? (P(), N("span", {
      key: 0,
      class: M(h(l)),
      style: Oe({ backgroundColor: i.color }),
      onClick: s
    }, [
      V("span", {
        class: M(h(r).e("content"))
      }, [
        ae(i.$slots, "default")
      ], 2),
      i.closable ? (P(), Q(h(je), {
        key: 0,
        class: M(h(r).e("close")),
        onClick: bt(a, ["stop"])
      }, {
        default: Z(() => [
          ge(h(fa))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : G("v-if", !0)
    ], 6)) : (P(), Q(so, {
      key: 1,
      name: `${h(r).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: Z(() => [
        V("span", {
          class: M(h(l)),
          style: Oe({ backgroundColor: i.color }),
          onClick: s
        }, [
          V("span", {
            class: M(h(r).e("content"))
          }, [
            ae(i.$slots, "default")
          ], 2),
          i.closable ? (P(), Q(h(je), {
            key: 0,
            class: M(h(r).e("close")),
            onClick: bt(a, ["stop"])
          }, {
            default: Z(() => [
              ge(h(fa))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : G("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var G0 = /* @__PURE__ */ pe(q0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const Y0 = Ct(G0), X0 = Ee({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  prevText: {
    type: String
  },
  prevIcon: {
    type: kt
  }
}), Q0 = {
  click: (e) => e instanceof MouseEvent
}, Z0 = ["disabled", "aria-disabled"], J0 = { key: 0 }, ey = W({
  name: "ElPaginationPrev"
}), ty = /* @__PURE__ */ W({
  ...ey,
  props: X0,
  emits: Q0,
  setup(e) {
    const t = e, n = O(() => t.disabled || t.currentPage <= 1);
    return (o, r) => (P(), N("button", {
      type: "button",
      class: "btn-prev",
      disabled: h(n),
      "aria-disabled": h(n),
      onClick: r[0] || (r[0] = (l) => o.$emit("click", l))
    }, [
      o.prevText ? (P(), N("span", J0, ye(o.prevText), 1)) : (P(), Q(h(je), { key: 1 }, {
        default: Z(() => [
          (P(), Q(nt(o.prevIcon)))
        ]),
        _: 1
      }))
    ], 8, Z0));
  }
});
var ny = /* @__PURE__ */ pe(ty, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);
const oy = Ee({
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
    type: kt
  }
}), ry = ["disabled", "aria-disabled"], ly = { key: 0 }, ay = W({
  name: "ElPaginationNext"
}), sy = /* @__PURE__ */ W({
  ...ay,
  props: oy,
  emits: ["click"],
  setup(e) {
    const t = e, n = O(() => t.disabled || t.currentPage === t.pageCount || t.pageCount === 0);
    return (o, r) => (P(), N("button", {
      type: "button",
      class: "btn-next",
      disabled: h(n),
      "aria-disabled": h(n),
      onClick: r[0] || (r[0] = (l) => o.$emit("click", l))
    }, [
      o.nextText ? (P(), N("span", ly, ye(o.nextText), 1)) : (P(), Q(h(je), { key: 1 }, {
        default: Z(() => [
          (P(), Q(nt(o.nextIcon)))
        ]),
        _: 1
      }))
    ], 8, ry));
  }
});
var iy = /* @__PURE__ */ pe(sy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);
const Ri = Symbol("ElSelectGroup"), nr = Symbol("ElSelect");
function uy(e, t) {
  const n = se(nr), o = se(Ri, { disabled: !1 }), r = O(() => Object.prototype.toString.call(e.value).toLowerCase() === "[object object]"), l = O(() => n.props.multiple ? f(n.props.modelValue, e.value) : p(e.value, n.props.modelValue)), a = O(() => {
    if (n.props.multiple) {
      const g = n.props.modelValue || [];
      return !l.value && g.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = O(() => e.label || (r.value ? "" : e.value)), i = O(() => e.value || e.label || ""), u = O(() => e.disabled || t.groupDisabled || a.value), d = we(), f = (g = [], y) => {
    if (r.value) {
      const m = n.props.valueKey;
      return g && g.some((w) => $n(Ne(w, m)) === Ne(y, m));
    } else
      return g && g.includes(y);
  }, p = (g, y) => {
    if (r.value) {
      const { valueKey: m } = n.props;
      return Ne(g, m) === Ne(y, m);
    } else
      return g === y;
  }, v = () => {
    !e.disabled && !o.disabled && (n.hoverIndex = n.optionsArray.indexOf(d.proxy));
  };
  U(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), U(() => e.value, (g, y) => {
    const { remote: m, valueKey: w } = n.props;
    if (Object.is(g, y) || (n.onOptionDestroy(y, d.proxy), n.onOptionCreate(d.proxy)), !e.created && !m) {
      if (w && typeof g == "object" && typeof y == "object" && g[w] === y[w])
        return;
      n.setSelected();
    }
  }), U(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 });
  const { queryChange: c } = $n(n);
  return U(c, (g) => {
    const { query: y } = h(g), m = new RegExp(vv(y), "i");
    t.visible = m.test(s.value) || e.created, t.visible || n.filteredOptionsCount--;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: s,
    currentValue: i,
    itemSelected: l,
    isDisabled: u,
    hoverItem: v
  };
}
const cy = W({
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
    const t = ne("select"), n = Wt({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hitState: !1,
      hover: !1
    }), { currentLabel: o, itemSelected: r, isDisabled: l, select: a, hoverItem: s } = uy(e, n), { visible: i, hover: u } = Hn(n), d = we().proxy;
    a.onOptionCreate(d), yt(() => {
      const p = d.value, { selected: v } = a, g = (a.props.multiple ? v : [v]).some((y) => y.value === d.value);
      ue(() => {
        a.cachedOptions.get(p) === d && !g && a.cachedOptions.delete(p);
      }), a.onOptionDestroy(p, d);
    });
    function f() {
      e.disabled !== !0 && n.groupDisabled !== !0 && a.handleOptionSelect(d, !0);
    }
    return {
      ns: t,
      currentLabel: o,
      itemSelected: r,
      isDisabled: l,
      select: a,
      hoverItem: s,
      visible: i,
      hover: u,
      selectOptionClick: f,
      states: n
    };
  }
});
function dy(e, t, n, o, r, l) {
  return Pe((P(), N("li", {
    class: M([
      e.ns.be("dropdown", "item"),
      e.ns.is("disabled", e.isDisabled),
      {
        selected: e.itemSelected,
        hover: e.hover
      }
    ]),
    onMouseenter: t[0] || (t[0] = (...a) => e.hoverItem && e.hoverItem(...a)),
    onClick: t[1] || (t[1] = bt((...a) => e.selectOptionClick && e.selectOptionClick(...a), ["stop"]))
  }, [
    ae(e.$slots, "default", {}, () => [
      V("span", null, ye(e.currentLabel), 1)
    ])
  ], 34)), [
    [Dt, e.visible]
  ]);
}
var _l = /* @__PURE__ */ pe(cy, [["render", dy], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const fy = W({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = se(nr), t = ne("select"), n = O(() => e.props.popperClass), o = O(() => e.props.multiple), r = O(() => e.props.fitInputWidth), l = x("");
    function a() {
      var s;
      l.value = `${(s = e.selectWrapper) == null ? void 0 : s.offsetWidth}px`;
    }
    return ke(() => {
      a(), Ln(e.selectWrapper, a);
    }), {
      ns: t,
      minWidth: l,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: r
    };
  }
});
function py(e, t, n, o, r, l) {
  return P(), N("div", {
    class: M([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Oe({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    ae(e.$slots, "default")
  ], 6);
}
var vy = /* @__PURE__ */ pe(fy, [["render", py], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function hy(e) {
  const { t } = Ut();
  return Wt({
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
const gy = (e, t, n) => {
  const { t: o } = Ut(), r = ne("select");
  Ks({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, O(() => e.suffixTransition === !1));
  const l = x(null), a = x(null), s = x(null), i = x(null), u = x(null), d = x(null), f = x(-1), p = xn({ query: "" }), v = xn(""), { form: c, formItem: g } = jn(), y = O(() => !e.filterable || e.multiple || !t.visible), m = O(() => e.disabled || (c == null ? void 0 : c.disabled)), w = O(() => {
    const E = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !m.value && t.inputHovering && E;
  }), S = O(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), b = O(() => r.is("reverse", S.value && t.visible && e.suffixTransition)), T = O(() => e.remote ? 300 : 0), _ = O(() => e.loading ? e.loadingText || o("el.select.loading") : e.remote && t.query === "" && t.options.size === 0 ? !1 : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0 ? e.noMatchText || o("el.select.noMatch") : t.options.size === 0 ? e.noDataText || o("el.select.noData") : null), C = O(() => Array.from(t.options.values())), $ = O(() => Array.from(t.cachedOptions.values())), L = O(() => {
    const E = C.value.filter((k) => !k.created).some((k) => k.currentLabel === t.query);
    return e.filterable && e.allowCreate && t.query !== "" && !E;
  }), I = gn(), D = O(() => ["small"].includes(I.value) ? "small" : "default"), B = O({
    get() {
      return t.visible && _.value !== !1;
    },
    set(E) {
      t.visible = E;
    }
  });
  U([() => m.value, () => I.value, () => c == null ? void 0 : c.size], () => {
    ue(() => {
      K();
    });
  }), U(() => e.placeholder, (E) => {
    t.cachedPlaceHolder = t.currentPlaceholder = E;
  }), U(() => e.modelValue, (E, k) => {
    e.multiple && (K(), E && E.length > 0 || a.value && t.query !== "" ? t.currentPlaceholder = "" : t.currentPlaceholder = t.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (t.query = "", ee(t.query))), oe(), e.filterable && !e.multiple && (t.inputLength = 20), !No(E, k) && e.validateEvent && (g == null || g.validate("change").catch((z) => Fe(z)));
  }, {
    flush: "post",
    deep: !0
  }), U(() => t.visible, (E) => {
    var k, z, X;
    E ? ((z = (k = s.value) == null ? void 0 : k.updatePopper) == null || z.call(k), e.filterable && (t.filteredOptionsCount = t.optionsCount, t.query = e.remote ? "" : t.selectedLabel, e.multiple ? (X = a.value) == null || X.focus() : t.selectedLabel && (t.currentPlaceholder = `${t.selectedLabel}`, t.selectedLabel = ""), ee(t.query), !e.multiple && !e.remote && (p.value.query = "", Kn(p), Kn(v)))) : (e.filterable && (Ot(e.filterMethod) && e.filterMethod(""), Ot(e.remoteMethod) && e.remoteMethod("")), a.value && a.value.blur(), t.query = "", t.previousQuery = null, t.selectedLabel = "", t.inputLength = 20, t.menuVisibleOnFocus = !1, A(), ue(() => {
      a.value && a.value.value === "" && t.selected.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }), e.multiple || (t.selected && (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel ? t.selectedLabel = t.createdLabel : t.selectedLabel = t.selected.currentLabel, e.filterable && (t.query = t.selectedLabel)), e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))), n.emit("visible-change", E);
  }), U(() => t.options.entries(), () => {
    var E, k, z;
    if (!_e)
      return;
    (k = (E = s.value) == null ? void 0 : E.updatePopper) == null || k.call(E), e.multiple && K();
    const X = ((z = u.value) == null ? void 0 : z.querySelectorAll("input")) || [];
    Array.from(X).includes(document.activeElement) || oe(), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && Y();
  }, {
    flush: "post"
  }), U(() => t.hoverIndex, (E) => {
    $e(E) && E > -1 ? f.value = C.value[E] || {} : f.value = {}, C.value.forEach((k) => {
      k.hover = f.value === k;
    });
  });
  const K = () => {
    e.collapseTags && !e.filterable || ue(() => {
      var E, k;
      if (!l.value)
        return;
      const z = l.value.$el.querySelector("input"), X = i.value, ve = Wh(I.value || (c == null ? void 0 : c.size));
      z.style.height = `${(t.selected.length === 0 ? ve : Math.max(X ? X.clientHeight + (X.clientHeight > ve ? 6 : 0) : 0, ve)) - 2}px`, t.tagInMultiLine = Number.parseFloat(z.style.height) >= ve, t.visible && _.value !== !1 && ((k = (E = s.value) == null ? void 0 : E.updatePopper) == null || k.call(E));
    });
  }, ee = async (E) => {
    if (!(t.previousQuery === E || t.isOnComposition)) {
      if (t.previousQuery === null && (Ot(e.filterMethod) || Ot(e.remoteMethod))) {
        t.previousQuery = E;
        return;
      }
      t.previousQuery = E, ue(() => {
        var k, z;
        t.visible && ((z = (k = s.value) == null ? void 0 : k.updatePopper) == null || z.call(k));
      }), t.hoverIndex = -1, e.multiple && e.filterable && ue(() => {
        const k = a.value.value.length * 15 + 20;
        t.inputLength = e.collapseTags ? Math.min(50, k) : k, F(), K();
      }), e.remote && Ot(e.remoteMethod) ? (t.hoverIndex = -1, e.remoteMethod(E)) : Ot(e.filterMethod) ? (e.filterMethod(E), Kn(v)) : (t.filteredOptionsCount = t.optionsCount, p.value.query = E, Kn(p), Kn(v)), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && (await ue(), Y());
    }
  }, F = () => {
    t.currentPlaceholder !== "" && (t.currentPlaceholder = a.value.value ? "" : t.cachedPlaceHolder);
  }, Y = () => {
    const E = C.value.filter((X) => X.visible && !X.disabled && !X.states.groupDisabled), k = E.find((X) => X.created), z = E[0];
    t.hoverIndex = Be(C.value, k || z);
  }, oe = () => {
    var E;
    if (e.multiple)
      t.selectedLabel = "";
    else {
      const z = H(e.modelValue);
      (E = z.props) != null && E.created ? (t.createdLabel = z.props.value, t.createdSelected = !0) : t.createdSelected = !1, t.selectedLabel = z.currentLabel, t.selected = z, e.filterable && (t.query = t.selectedLabel);
      return;
    }
    const k = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((z) => {
      k.push(H(z));
    }), t.selected = k, ue(() => {
      K();
    });
  }, H = (E) => {
    let k;
    const z = sr(E).toLowerCase() === "object", X = sr(E).toLowerCase() === "null", ve = sr(E).toLowerCase() === "undefined";
    for (let ht = t.cachedOptions.size - 1; ht >= 0; ht--) {
      const qe = $.value[ht];
      if (z ? Ne(qe.value, e.valueKey) === Ne(E, e.valueKey) : qe.value === E) {
        k = {
          value: E,
          currentLabel: qe.currentLabel,
          isDisabled: qe.isDisabled
        };
        break;
      }
    }
    if (k)
      return k;
    const He = z ? E.label : !X && !ve ? E : "", Le = {
      value: E,
      currentLabel: He
    };
    return e.multiple && (Le.hitState = !1), Le;
  }, A = () => {
    setTimeout(() => {
      const E = e.valueKey;
      e.multiple ? t.selected.length > 0 ? t.hoverIndex = Math.min.apply(null, t.selected.map((k) => C.value.findIndex((z) => Ne(z, E) === Ne(k, E)))) : t.hoverIndex = -1 : t.hoverIndex = C.value.findIndex((k) => _t(k) === _t(t.selected));
    }, 300);
  }, q = () => {
    var E, k;
    ce(), (k = (E = s.value) == null ? void 0 : E.updatePopper) == null || k.call(E), e.multiple && K();
  }, ce = () => {
    var E;
    t.inputWidth = (E = l.value) == null ? void 0 : E.$el.offsetWidth;
  }, de = () => {
    e.filterable && t.query !== t.selectedLabel && (t.query = t.selectedLabel, ee(t.query));
  }, me = kn(() => {
    de();
  }, T.value), he = kn((E) => {
    ee(E.target.value);
  }, T.value), re = (E) => {
    No(e.modelValue, E) || n.emit(Bs, E);
  }, be = (E) => {
    if (E.target.value.length <= 0 && !Ze()) {
      const k = e.modelValue.slice();
      k.pop(), n.emit(Ve, k), re(k);
    }
    E.target.value.length === 1 && e.modelValue.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
  }, Se = (E, k) => {
    const z = t.selected.indexOf(k);
    if (z > -1 && !m.value) {
      const X = e.modelValue.slice();
      X.splice(z, 1), n.emit(Ve, X), re(X), n.emit("remove-tag", k.value);
    }
    E.stopPropagation();
  }, le = (E) => {
    E.stopPropagation();
    const k = e.multiple ? [] : "";
    if (!ot(k))
      for (const z of t.selected)
        z.isDisabled && k.push(z.value);
    n.emit(Ve, k), re(k), t.hoverIndex = -1, t.visible = !1, n.emit("clear");
  }, xe = (E, k) => {
    var z;
    if (e.multiple) {
      const X = (e.modelValue || []).slice(), ve = Be(X, E.value);
      ve > -1 ? X.splice(ve, 1) : (e.multipleLimit <= 0 || X.length < e.multipleLimit) && X.push(E.value), n.emit(Ve, X), re(X), E.created && (t.query = "", ee(""), t.inputLength = 20), e.filterable && ((z = a.value) == null || z.focus());
    } else
      n.emit(Ve, E.value), re(E.value), t.visible = !1;
    t.isSilentBlur = k, ut(), !t.visible && ue(() => {
      Ue(E);
    });
  }, Be = (E = [], k) => {
    if (!st(k))
      return E.indexOf(k);
    const z = e.valueKey;
    let X = -1;
    return E.some((ve, He) => $n(Ne(ve, z)) === Ne(k, z) ? (X = He, !0) : !1), X;
  }, ut = () => {
    t.softFocus = !0;
    const E = a.value || l.value;
    E && (E == null || E.focus());
  }, Ue = (E) => {
    var k, z, X, ve, He;
    const Le = Array.isArray(E) ? E[0] : E;
    let ht = null;
    if (Le != null && Le.value) {
      const qe = C.value.filter((Cn) => Cn.value === Le.value);
      qe.length > 0 && (ht = qe[0].$el);
    }
    if (s.value && ht) {
      const qe = (ve = (X = (z = (k = s.value) == null ? void 0 : k.popperRef) == null ? void 0 : z.contentRef) == null ? void 0 : X.querySelector) == null ? void 0 : ve.call(X, `.${r.be("dropdown", "wrap")}`);
      qe && mv(qe, ht);
    }
    (He = d.value) == null || He.handleScroll();
  }, Qe = (E) => {
    t.optionsCount++, t.filteredOptionsCount++, t.options.set(E.value, E), t.cachedOptions.set(E.value, E);
  }, Mt = (E, k) => {
    t.options.get(E) === k && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(E));
  }, vt = (E) => {
    E.code !== ro.backspace && Ze(!1), t.inputLength = a.value.value.length * 15 + 20, K();
  }, Ze = (E) => {
    if (!Array.isArray(t.selected))
      return;
    const k = t.selected[t.selected.length - 1];
    if (k)
      return E === !0 || E === !1 ? (k.hitState = E, E) : (k.hitState = !k.hitState, k.hitState);
  }, Et = (E) => {
    const k = E.target.value;
    if (E.type === "compositionend")
      t.isOnComposition = !1, ue(() => ee(k));
    else {
      const z = k[k.length - 1] || "";
      t.isOnComposition = !zs(z);
    }
  }, Rt = () => {
    ue(() => Ue(t.selected));
  }, ze = (E) => {
    t.softFocus ? t.softFocus = !1 : ((e.automaticDropdown || e.filterable) && (e.filterable && !t.visible && (t.menuVisibleOnFocus = !0), t.visible = !0), n.emit("focus", E));
  }, Ie = () => {
    var E;
    t.visible = !1, (E = l.value) == null || E.blur();
  }, Je = (E) => {
    ue(() => {
      t.isSilentBlur ? t.isSilentBlur = !1 : n.emit("blur", E);
    }), t.softFocus = !1;
  }, R = (E) => {
    le(E);
  }, ie = () => {
    t.visible = !1;
  }, Ae = (E) => {
    t.visible && (E.preventDefault(), E.stopPropagation(), t.visible = !1);
  }, et = (E) => {
    var k;
    E && !t.mouseEnter || m.value || (t.menuVisibleOnFocus ? t.menuVisibleOnFocus = !1 : (!s.value || !s.value.isFocusInsideContent()) && (t.visible = !t.visible), t.visible && ((k = a.value || l.value) == null || k.focus()));
  }, It = () => {
    t.visible ? C.value[t.hoverIndex] && xe(C.value[t.hoverIndex], void 0) : et();
  }, _t = (E) => st(E.value) ? Ne(E.value, e.valueKey) : E.value, tn = O(() => C.value.filter((E) => E.visible).every((E) => E.disabled)), nn = (E) => {
    if (!t.visible) {
      t.visible = !0;
      return;
    }
    if (!(t.options.size === 0 || t.filteredOptionsCount === 0) && !t.isOnComposition && !tn.value) {
      E === "next" ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0)) : E === "prev" && (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1));
      const k = C.value[t.hoverIndex];
      (k.disabled === !0 || k.states.groupDisabled === !0 || !k.visible) && nn(E), ue(() => Ue(f.value));
    }
  };
  return {
    optionsArray: C,
    selectSize: I,
    handleResize: q,
    debouncedOnInputChange: me,
    debouncedQueryChange: he,
    deletePrevTag: be,
    deleteTag: Se,
    deleteSelected: le,
    handleOptionSelect: xe,
    scrollToOption: Ue,
    readonly: y,
    resetInputHeight: K,
    showClose: w,
    iconComponent: S,
    iconReverse: b,
    showNewOption: L,
    collapseTagSize: D,
    setSelected: oe,
    managePlaceholder: F,
    selectDisabled: m,
    emptyText: _,
    toggleLastOptionHitState: Ze,
    resetInputState: vt,
    handleComposition: Et,
    onOptionCreate: Qe,
    onOptionDestroy: Mt,
    handleMenuEnter: Rt,
    handleFocus: ze,
    blur: Ie,
    handleBlur: Je,
    handleClearClick: R,
    handleClose: ie,
    handleKeydownEscape: Ae,
    toggleMenu: et,
    selectOption: It,
    getValueKey: _t,
    navigateOptions: nn,
    dropMenuVisible: B,
    queryChange: p,
    groupQueryChange: v,
    reference: l,
    input: a,
    tooltipRef: s,
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
}, qa = "ElSelect", my = W({
  name: qa,
  componentName: qa,
  components: {
    ElInput: ui,
    ElSelectMenu: vy,
    ElOption: _l,
    ElTag: Y0,
    ElScrollbar: wl,
    ElTooltip: mi,
    ElIcon: je
  },
  directives: { ClickOutside: wi },
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
      validator: Vh
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
    teleported: El.teleported,
    persistent: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: kt,
      default: ol
    },
    fitInputWidth: {
      type: Boolean,
      default: !1
    },
    suffixIcon: {
      type: kt,
      default: Ns
    },
    tagType: { ...Mi.type, default: "info" },
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
      values: Jo,
      default: "bottom-start"
    }
  },
  emits: [
    Ve,
    Bs,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const n = ne("select"), o = ne("input"), { t: r } = Ut(), l = hy(e), {
      optionsArray: a,
      selectSize: s,
      readonly: i,
      handleResize: u,
      collapseTagSize: d,
      debouncedOnInputChange: f,
      debouncedQueryChange: p,
      deletePrevTag: v,
      deleteTag: c,
      deleteSelected: g,
      handleOptionSelect: y,
      scrollToOption: m,
      setSelected: w,
      resetInputHeight: S,
      managePlaceholder: b,
      showClose: T,
      selectDisabled: _,
      iconComponent: C,
      iconReverse: $,
      showNewOption: L,
      emptyText: I,
      toggleLastOptionHitState: D,
      resetInputState: B,
      handleComposition: K,
      onOptionCreate: ee,
      onOptionDestroy: F,
      handleMenuEnter: Y,
      handleFocus: oe,
      blur: H,
      handleBlur: A,
      handleClearClick: q,
      handleClose: ce,
      handleKeydownEscape: de,
      toggleMenu: me,
      selectOption: he,
      getValueKey: re,
      navigateOptions: be,
      dropMenuVisible: Se,
      reference: le,
      input: xe,
      tooltipRef: Be,
      tags: ut,
      selectWrapper: Ue,
      scrollbar: Qe,
      queryChange: Mt,
      groupQueryChange: vt,
      handleMouseEnter: Ze,
      handleMouseLeave: Et
    } = gy(e, l, t), { focus: Rt } = Yh(le), {
      inputWidth: ze,
      selected: Ie,
      inputLength: Je,
      filteredOptionsCount: R,
      visible: ie,
      softFocus: Ae,
      selectedLabel: et,
      hoverIndex: It,
      query: _t,
      inputHovering: tn,
      currentPlaceholder: nn,
      menuVisibleOnFocus: j,
      isOnComposition: te,
      isSilentBlur: E,
      options: k,
      cachedOptions: z,
      optionsCount: X,
      prefixWidth: ve,
      tagInMultiLine: He
    } = Hn(l), Le = O(() => {
      const De = [n.b()], Nt = h(s);
      return Nt && De.push(n.m(Nt)), e.disabled && De.push(n.m("disabled")), De;
    }), ht = O(() => ({
      maxWidth: `${h(ze) - 32}px`,
      width: "100%"
    })), qe = O(() => ({ maxWidth: `${h(ze) > 123 ? h(ze) - 123 : h(ze) - 75}px` }));
    rt(nr, Wt({
      props: e,
      options: k,
      optionsArray: a,
      cachedOptions: z,
      optionsCount: X,
      filteredOptionsCount: R,
      hoverIndex: It,
      handleOptionSelect: y,
      onOptionCreate: ee,
      onOptionDestroy: F,
      selectWrapper: Ue,
      selected: Ie,
      setSelected: w,
      queryChange: Mt,
      groupQueryChange: vt
    })), ke(() => {
      l.cachedPlaceHolder = nn.value = e.placeholder || (() => r("el.select.placeholder")), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (nn.value = ""), Ln(Ue, u), e.remote && e.multiple && S(), ue(() => {
        const De = le.value && le.value.$el;
        if (De && (ze.value = De.getBoundingClientRect().width, t.slots.prefix)) {
          const Nt = De.querySelector(`.${o.e("prefix")}`);
          ve.value = Math.max(Nt.getBoundingClientRect().width + 5, 30);
        }
      }), w();
    }), e.multiple && !Array.isArray(e.modelValue) && t.emit(Ve, []), !e.multiple && Array.isArray(e.modelValue) && t.emit(Ve, "");
    const Cn = O(() => {
      var De, Nt;
      return (Nt = (De = Be.value) == null ? void 0 : De.popperRef) == null ? void 0 : Nt.contentRef;
    });
    return {
      tagInMultiLine: He,
      prefixWidth: ve,
      selectSize: s,
      readonly: i,
      handleResize: u,
      collapseTagSize: d,
      debouncedOnInputChange: f,
      debouncedQueryChange: p,
      deletePrevTag: v,
      deleteTag: c,
      deleteSelected: g,
      handleOptionSelect: y,
      scrollToOption: m,
      inputWidth: ze,
      selected: Ie,
      inputLength: Je,
      filteredOptionsCount: R,
      visible: ie,
      softFocus: Ae,
      selectedLabel: et,
      hoverIndex: It,
      query: _t,
      inputHovering: tn,
      currentPlaceholder: nn,
      menuVisibleOnFocus: j,
      isOnComposition: te,
      isSilentBlur: E,
      options: k,
      resetInputHeight: S,
      managePlaceholder: b,
      showClose: T,
      selectDisabled: _,
      iconComponent: C,
      iconReverse: $,
      showNewOption: L,
      emptyText: I,
      toggleLastOptionHitState: D,
      resetInputState: B,
      handleComposition: K,
      handleMenuEnter: Y,
      handleFocus: oe,
      blur: H,
      handleBlur: A,
      handleClearClick: q,
      handleClose: ce,
      handleKeydownEscape: de,
      toggleMenu: me,
      selectOption: he,
      getValueKey: re,
      navigateOptions: be,
      dropMenuVisible: Se,
      focus: Rt,
      reference: le,
      input: xe,
      tooltipRef: Be,
      popperPaneRef: Cn,
      tags: ut,
      selectWrapper: Ue,
      scrollbar: Qe,
      wrapperKls: Le,
      selectTagsStyle: ht,
      nsSelect: n,
      tagTextStyle: qe,
      handleMouseEnter: Ze,
      handleMouseLeave: Et
    };
  }
}), by = ["disabled", "autocomplete"], yy = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function wy(e, t, n, o, r, l) {
  const a = Te("el-tag"), s = Te("el-tooltip"), i = Te("el-icon"), u = Te("el-input"), d = Te("el-option"), f = Te("el-scrollbar"), p = Te("el-select-menu"), v = Wr("click-outside");
  return Pe((P(), N("div", {
    ref: "selectWrapper",
    class: M(e.wrapperKls),
    onMouseenter: t[22] || (t[22] = (...c) => e.handleMouseEnter && e.handleMouseEnter(...c)),
    onMouseleave: t[23] || (t[23] = (...c) => e.handleMouseLeave && e.handleMouseLeave(...c)),
    onClick: t[24] || (t[24] = bt((...c) => e.toggleMenu && e.toggleMenu(...c), ["stop"]))
  }, [
    ge(s, {
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
      default: Z(() => [
        V("div", {
          class: "select-trigger",
          onMouseenter: t[20] || (t[20] = (c) => e.inputHovering = !0),
          onMouseleave: t[21] || (t[21] = (c) => e.inputHovering = !1)
        }, [
          e.multiple ? (P(), N("div", {
            key: 0,
            ref: "tags",
            class: M(e.nsSelect.e("tags")),
            style: Oe(e.selectTagsStyle)
          }, [
            e.collapseTags && e.selected.length ? (P(), N("span", {
              key: 0,
              class: M([
                e.nsSelect.b("tags-wrapper"),
                { "has-prefix": e.prefixWidth && e.selected.length }
              ])
            }, [
              ge(a, {
                closable: !e.selectDisabled && !e.selected[0].isDisabled,
                size: e.collapseTagSize,
                hit: e.selected[0].hitState,
                type: e.tagType,
                "disable-transitions": "",
                onClose: t[0] || (t[0] = (c) => e.deleteTag(c, e.selected[0]))
              }, {
                default: Z(() => [
                  V("span", {
                    class: M(e.nsSelect.e("tags-text")),
                    style: Oe(e.tagTextStyle)
                  }, ye(e.selected[0].currentLabel), 7)
                ]),
                _: 1
              }, 8, ["closable", "size", "hit", "type"]),
              e.selected.length > 1 ? (P(), Q(a, {
                key: 0,
                closable: !1,
                size: e.collapseTagSize,
                type: e.tagType,
                "disable-transitions": ""
              }, {
                default: Z(() => [
                  e.collapseTagsTooltip ? (P(), Q(s, {
                    key: 0,
                    disabled: e.dropMenuVisible,
                    "fallback-placements": ["bottom", "top", "right", "left"],
                    effect: e.effect,
                    placement: "bottom",
                    teleported: e.teleported
                  }, {
                    default: Z(() => [
                      V("span", {
                        class: M(e.nsSelect.e("tags-text"))
                      }, "+ " + ye(e.selected.length - 1), 3)
                    ]),
                    content: Z(() => [
                      V("div", {
                        class: M(e.nsSelect.e("collapse-tags"))
                      }, [
                        (P(!0), N(Ke, null, Pn(e.selected.slice(1), (c, g) => (P(), N("div", {
                          key: g,
                          class: M(e.nsSelect.e("collapse-tag"))
                        }, [
                          (P(), Q(a, {
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
                            default: Z(() => [
                              V("span", {
                                class: M(e.nsSelect.e("tags-text")),
                                style: Oe({
                                  maxWidth: e.inputWidth - 75 + "px"
                                })
                              }, ye(c.currentLabel), 7)
                            ]),
                            _: 2
                          }, 1032, ["closable", "size", "hit", "type", "onClose"]))
                        ], 2))), 128))
                      ], 2)
                    ]),
                    _: 1
                  }, 8, ["disabled", "effect", "teleported"])) : (P(), N("span", {
                    key: 1,
                    class: M(e.nsSelect.e("tags-text"))
                  }, "+ " + ye(e.selected.length - 1), 3))
                ]),
                _: 1
              }, 8, ["size", "type"])) : G("v-if", !0)
            ], 2)) : G("v-if", !0),
            G(" <div> "),
            e.collapseTags ? G("v-if", !0) : (P(), Q(so, {
              key: 1,
              onAfterLeave: e.resetInputHeight
            }, {
              default: Z(() => [
                V("span", {
                  class: M([
                    e.nsSelect.b("tags-wrapper"),
                    { "has-prefix": e.prefixWidth && e.selected.length }
                  ])
                }, [
                  (P(!0), N(Ke, null, Pn(e.selected, (c) => (P(), Q(a, {
                    key: e.getValueKey(c),
                    closable: !e.selectDisabled && !c.isDisabled,
                    size: e.collapseTagSize,
                    hit: c.hitState,
                    type: e.tagType,
                    "disable-transitions": "",
                    onClose: (g) => e.deleteTag(g, c)
                  }, {
                    default: Z(() => [
                      V("span", {
                        class: M(e.nsSelect.e("tags-text")),
                        style: Oe({ maxWidth: e.inputWidth - 75 + "px" })
                      }, ye(c.currentLabel), 7)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                ], 2)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])),
            G(" </div> "),
            e.filterable ? Pe((P(), N("input", {
              key: 2,
              ref: "input",
              "onUpdate:modelValue": t[1] || (t[1] = (c) => e.query = c),
              type: "text",
              class: M([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
              disabled: e.selectDisabled,
              autocomplete: e.autocomplete,
              style: Oe({
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
                t[6] || (t[6] = ct(bt((c) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                t[7] || (t[7] = ct(bt((c) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                t[8] || (t[8] = ct((...c) => e.handleKeydownEscape && e.handleKeydownEscape(...c), ["esc"])),
                t[9] || (t[9] = ct(bt((...c) => e.selectOption && e.selectOption(...c), ["stop", "prevent"]), ["enter"])),
                t[10] || (t[10] = ct((...c) => e.deletePrevTag && e.deletePrevTag(...c), ["delete"])),
                t[11] || (t[11] = ct((c) => e.visible = !1, ["tab"]))
              ],
              onCompositionstart: t[12] || (t[12] = (...c) => e.handleComposition && e.handleComposition(...c)),
              onCompositionupdate: t[13] || (t[13] = (...c) => e.handleComposition && e.handleComposition(...c)),
              onCompositionend: t[14] || (t[14] = (...c) => e.handleComposition && e.handleComposition(...c)),
              onInput: t[15] || (t[15] = (...c) => e.debouncedQueryChange && e.debouncedQueryChange(...c))
            }, null, 46, by)), [
              [nu, e.query]
            ]) : G("v-if", !0)
          ], 6)) : G("v-if", !0),
          ge(u, {
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
            class: M([e.nsSelect.is("focus", e.visible)]),
            tabindex: e.multiple && e.filterable ? -1 : void 0,
            onFocus: e.handleFocus,
            onBlur: e.handleBlur,
            onInput: e.debouncedOnInputChange,
            onPaste: e.debouncedOnInputChange,
            onCompositionstart: e.handleComposition,
            onCompositionupdate: e.handleComposition,
            onCompositionend: e.handleComposition,
            onKeydown: [
              t[17] || (t[17] = ct(bt((c) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
              t[18] || (t[18] = ct(bt((c) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
              ct(bt(e.selectOption, ["stop", "prevent"]), ["enter"]),
              ct(e.handleKeydownEscape, ["esc"]),
              t[19] || (t[19] = ct((c) => e.visible = !1, ["tab"]))
            ]
          }, ou({
            suffix: Z(() => [
              e.iconComponent && !e.showClose ? (P(), Q(i, {
                key: 0,
                class: M([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: Z(() => [
                  (P(), Q(nt(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : G("v-if", !0),
              e.showClose && e.clearIcon ? (P(), Q(i, {
                key: 1,
                class: M([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                onClick: e.handleClearClick
              }, {
                default: Z(() => [
                  (P(), Q(nt(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : G("v-if", !0)
            ]),
            _: 2
          }, [
            e.$slots.prefix ? {
              name: "prefix",
              fn: Z(() => [
                V("div", yy, [
                  ae(e.$slots, "prefix")
                ])
              ])
            } : void 0
          ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
        ], 32)
      ]),
      content: Z(() => [
        ge(p, null, {
          default: Z(() => [
            Pe(ge(f, {
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: M([
                e.nsSelect.is("empty", !e.allowCreate && Boolean(e.query) && e.filteredOptionsCount === 0)
              ])
            }, {
              default: Z(() => [
                e.showNewOption ? (P(), Q(d, {
                  key: 0,
                  value: e.query,
                  created: !0
                }, null, 8, ["value"])) : G("v-if", !0),
                ae(e.$slots, "default")
              ]),
              _: 3
            }, 8, ["wrap-class", "view-class", "class"]), [
              [Dt, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? (P(), N(Ke, { key: 0 }, [
              e.$slots.empty ? ae(e.$slots, "empty", { key: 0 }) : (P(), N("p", {
                key: 1,
                class: M(e.nsSelect.be("dropdown", "empty"))
              }, ye(e.emptyText), 3))
            ], 64)) : G("v-if", !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "effect", "transition", "persistent", "onShow"])
  ], 34)), [
    [v, e.handleClose, e.popperPaneRef]
  ]);
}
var Cy = /* @__PURE__ */ pe(my, [["render", wy], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const Sy = W({
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
    const t = ne("select"), n = x(!0), o = we(), r = x([]);
    rt(Ri, Wt({
      ...Hn(e)
    }));
    const l = se(nr);
    ke(() => {
      r.value = a(o.subTree);
    });
    const a = (i) => {
      const u = [];
      return Array.isArray(i.children) && i.children.forEach((d) => {
        var f;
        d.type && d.type.name === "ElOption" && d.component && d.component.proxy ? u.push(d.component.proxy) : (f = d.children) != null && f.length && u.push(...a(d));
      }), u;
    }, { groupQueryChange: s } = $n(l);
    return U(s, () => {
      n.value = r.value.some((i) => i.visible === !0);
    }, { flush: "post" }), {
      visible: n,
      ns: t
    };
  }
});
function Ey(e, t, n, o, r, l) {
  return Pe((P(), N("ul", {
    class: M(e.ns.be("group", "wrap"))
  }, [
    V("li", {
      class: M(e.ns.be("group", "title"))
    }, ye(e.label), 3),
    V("li", null, [
      V("ul", {
        class: M(e.ns.b("group"))
      }, [
        ae(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [Dt, e.visible]
  ]);
}
var Ii = /* @__PURE__ */ pe(Sy, [["render", Ey], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
const _y = Ct(Cy, {
  Option: _l,
  OptionGroup: Ii
}), Oy = Wn(_l);
Wn(Ii);
const Ol = () => se(Ds, {}), xy = Ee({
  pageSize: {
    type: Number,
    required: !0
  },
  pageSizes: {
    type: fe(Array),
    default: () => ll([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String
  },
  disabled: Boolean,
  size: {
    type: String,
    values: co
  }
}), Ty = W({
  name: "ElPaginationSizes"
}), $y = /* @__PURE__ */ W({
  ...Ty,
  props: xy,
  emits: ["page-size-change"],
  setup(e, { emit: t }) {
    const n = e, { t: o } = Ut(), r = ne("pagination"), l = Ol(), a = x(n.pageSize);
    U(() => n.pageSizes, (u, d) => {
      if (!No(u, d) && Array.isArray(u)) {
        const f = u.includes(n.pageSize) ? n.pageSize : n.pageSizes[0];
        t("page-size-change", f);
      }
    }), U(() => n.pageSize, (u) => {
      a.value = u;
    });
    const s = O(() => n.pageSizes);
    function i(u) {
      var d;
      u !== a.value && (a.value = u, (d = l.handleSizeChange) == null || d.call(l, Number(u)));
    }
    return (u, d) => (P(), N("span", {
      class: M(h(r).e("sizes"))
    }, [
      ge(h(_y), {
        "model-value": a.value,
        disabled: u.disabled,
        "popper-class": u.popperClass,
        size: u.size,
        "validate-event": !1,
        onChange: i
      }, {
        default: Z(() => [
          (P(!0), N(Ke, null, Pn(h(s), (f) => (P(), Q(h(Oy), {
            key: f,
            value: f,
            label: f + h(o)("el.pagination.pagesize")
          }, null, 8, ["value", "label"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value", "disabled", "popper-class", "size"])
    ], 2));
  }
});
var Py = /* @__PURE__ */ pe($y, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);
const ky = Ee({
  size: {
    type: String,
    values: co
  }
}), Ay = ["disabled"], Ly = W({
  name: "ElPaginationJumper"
}), My = /* @__PURE__ */ W({
  ...Ly,
  props: ky,
  setup(e) {
    const { t } = Ut(), n = ne("pagination"), { pageCount: o, disabled: r, currentPage: l, changeEvent: a } = Ol(), s = x(), i = O(() => {
      var f;
      return (f = s.value) != null ? f : l == null ? void 0 : l.value;
    });
    function u(f) {
      s.value = +f;
    }
    function d(f) {
      f = Math.trunc(+f), a == null || a(+f), s.value = void 0;
    }
    return (f, p) => (P(), N("span", {
      class: M(h(n).e("jump")),
      disabled: h(r)
    }, [
      V("span", {
        class: M([h(n).e("goto")])
      }, ye(h(t)("el.pagination.goto")), 3),
      ge(h(ui), {
        size: f.size,
        class: M([h(n).e("editor"), h(n).is("in-pagination")]),
        min: 1,
        max: h(o),
        disabled: h(r),
        "model-value": h(i),
        "validate-event": !1,
        type: "number",
        "onUpdate:modelValue": u,
        onChange: d
      }, null, 8, ["size", "class", "max", "disabled", "model-value"]),
      V("span", {
        class: M([h(n).e("classifier")])
      }, ye(h(t)("el.pagination.pageClassifier")), 3)
    ], 10, Ay));
  }
});
var Ry = /* @__PURE__ */ pe(My, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);
const Iy = Ee({
  total: {
    type: Number,
    default: 1e3
  }
}), Ny = ["disabled"], Fy = W({
  name: "ElPaginationTotal"
}), By = /* @__PURE__ */ W({
  ...Fy,
  props: Iy,
  setup(e) {
    const { t } = Ut(), n = ne("pagination"), { disabled: o } = Ol();
    return (r, l) => (P(), N("span", {
      class: M(h(n).e("total")),
      disabled: h(o)
    }, ye(h(t)("el.pagination.total", {
      total: r.total
    })), 11, Ny));
  }
});
var zy = /* @__PURE__ */ pe(By, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);
const Hy = Ee({
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
}), Dy = ["onKeyup"], Wy = ["aria-current", "tabindex"], Vy = ["tabindex"], jy = ["aria-current", "tabindex"], Ky = ["tabindex"], Uy = ["aria-current", "tabindex"], qy = W({
  name: "ElPaginationPager"
}), Gy = /* @__PURE__ */ W({
  ...qy,
  props: Hy,
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = e, o = ne("pager"), r = ne("icon"), l = x(!1), a = x(!1), s = x(!1), i = x(!1), u = x(!1), d = x(!1), f = O(() => {
      const m = n.pagerCount, w = (m - 1) / 2, S = Number(n.currentPage), b = Number(n.pageCount);
      let T = !1, _ = !1;
      b > m && (S > m - w && (T = !0), S < b - w && (_ = !0));
      const C = [];
      if (T && !_) {
        const $ = b - (m - 2);
        for (let L = $; L < b; L++)
          C.push(L);
      } else if (!T && _)
        for (let $ = 2; $ < m; $++)
          C.push($);
      else if (T && _) {
        const $ = Math.floor(m / 2) - 1;
        for (let L = S - $; L <= S + $; L++)
          C.push(L);
      } else
        for (let $ = 2; $ < b; $++)
          C.push($);
      return C;
    }), p = O(() => n.disabled ? -1 : 0);
    Tn(() => {
      const m = (n.pagerCount - 1) / 2;
      l.value = !1, a.value = !1, n.pageCount > n.pagerCount && (n.currentPage > n.pagerCount - m && (l.value = !0), n.currentPage < n.pageCount - m && (a.value = !0));
    });
    function v(m = !1) {
      n.disabled || (m ? s.value = !0 : i.value = !0);
    }
    function c(m = !1) {
      m ? u.value = !0 : d.value = !0;
    }
    function g(m) {
      const w = m.target;
      if (w.tagName.toLowerCase() === "li" && Array.from(w.classList).includes("number")) {
        const S = Number(w.textContent);
        S !== n.currentPage && t("change", S);
      } else
        w.tagName.toLowerCase() === "li" && Array.from(w.classList).includes("more") && y(m);
    }
    function y(m) {
      const w = m.target;
      if (w.tagName.toLowerCase() === "ul" || n.disabled)
        return;
      let S = Number(w.textContent);
      const b = n.pageCount, T = n.currentPage, _ = n.pagerCount - 2;
      w.className.includes("more") && (w.className.includes("quickprev") ? S = T - _ : w.className.includes("quicknext") && (S = T + _)), Number.isNaN(+S) || (S < 1 && (S = 1), S > b && (S = b)), S !== T && t("change", S);
    }
    return (m, w) => (P(), N("ul", {
      class: M(h(o).b()),
      onClick: y,
      onKeyup: ct(g, ["enter"])
    }, [
      m.pageCount > 0 ? (P(), N("li", {
        key: 0,
        class: M([[
          h(o).is("active", m.currentPage === 1),
          h(o).is("disabled", m.disabled)
        ], "number"]),
        "aria-current": m.currentPage === 1,
        tabindex: h(p)
      }, " 1 ", 10, Wy)) : G("v-if", !0),
      l.value ? (P(), N("li", {
        key: 1,
        class: M([
          "more",
          "btn-quickprev",
          h(r).b(),
          h(o).is("disabled", m.disabled)
        ]),
        tabindex: h(p),
        onMouseenter: w[0] || (w[0] = (S) => v(!0)),
        onMouseleave: w[1] || (w[1] = (S) => s.value = !1),
        onFocus: w[2] || (w[2] = (S) => c(!0)),
        onBlur: w[3] || (w[3] = (S) => u.value = !1)
      }, [
        (s.value || u.value) && !m.disabled ? (P(), Q(h(uh), { key: 0 })) : (P(), Q(h(pa), { key: 1 }))
      ], 42, Vy)) : G("v-if", !0),
      (P(!0), N(Ke, null, Pn(h(f), (S) => (P(), N("li", {
        key: S,
        class: M([[
          h(o).is("active", m.currentPage === S),
          h(o).is("disabled", m.disabled)
        ], "number"]),
        "aria-current": m.currentPage === S,
        tabindex: h(p)
      }, ye(S), 11, jy))), 128)),
      a.value ? (P(), N("li", {
        key: 2,
        class: M([
          "more",
          "btn-quicknext",
          h(r).b(),
          h(o).is("disabled", m.disabled)
        ]),
        tabindex: h(p),
        onMouseenter: w[4] || (w[4] = (S) => v()),
        onMouseleave: w[5] || (w[5] = (S) => i.value = !1),
        onFocus: w[6] || (w[6] = (S) => c()),
        onBlur: w[7] || (w[7] = (S) => d.value = !1)
      }, [
        (i.value || d.value) && !m.disabled ? (P(), Q(h(hh), { key: 0 })) : (P(), Q(h(pa), { key: 1 }))
      ], 42, Ky)) : G("v-if", !0),
      m.pageCount > 1 ? (P(), N("li", {
        key: 3,
        class: M([[
          h(o).is("active", m.currentPage === m.pageCount),
          h(o).is("disabled", m.disabled)
        ], "number"]),
        "aria-current": m.currentPage === m.pageCount,
        tabindex: h(p)
      }, ye(m.pageCount), 11, Uy)) : G("v-if", !0)
    ], 42, Dy));
  }
});
var Yy = /* @__PURE__ */ pe(Gy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);
const We = (e) => typeof e != "number", Xy = Ee({
  total: Number,
  pageSize: Number,
  defaultPageSize: Number,
  currentPage: Number,
  defaultCurrentPage: Number,
  pageCount: Number,
  pagerCount: {
    type: Number,
    validator: (e) => $e(e) && Math.trunc(e) === e && e > 4 && e < 22 && e % 2 === 1,
    default: 7
  },
  layout: {
    type: String,
    default: ["prev", "pager", "next", "jumper", "->", "total"].join(", ")
  },
  pageSizes: {
    type: fe(Array),
    default: () => ll([10, 20, 30, 40, 50, 100])
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
    type: kt,
    default: () => $v
  },
  nextText: {
    type: String,
    default: ""
  },
  nextIcon: {
    type: kt,
    default: () => nl
  },
  small: Boolean,
  background: Boolean,
  disabled: Boolean,
  hideOnSinglePage: Boolean
}), Qy = {
  "update:current-page": (e) => $e(e),
  "update:page-size": (e) => $e(e),
  "size-change": (e) => $e(e),
  "current-change": (e) => $e(e),
  "prev-click": (e) => $e(e),
  "next-click": (e) => $e(e)
}, Ga = "ElPagination";
var Zy = W({
  name: Ga,
  props: Xy,
  emits: Qy,
  setup(e, { emit: t, slots: n }) {
    const { t: o } = Ut(), r = ne("pagination"), l = we().vnode.props || {}, a = "onUpdate:currentPage" in l || "onUpdate:current-page" in l || "onCurrentChange" in l, s = "onUpdate:pageSize" in l || "onUpdate:page-size" in l || "onSizeChange" in l, i = O(() => {
      if (We(e.total) && We(e.pageCount) || !We(e.currentPage) && !a)
        return !1;
      if (e.layout.includes("sizes")) {
        if (We(e.pageCount)) {
          if (!We(e.total) && !We(e.pageSize) && !s)
            return !1;
        } else if (!s)
          return !1;
      }
      return !0;
    }), u = x(We(e.defaultPageSize) ? 10 : e.defaultPageSize), d = x(We(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage), f = O({
      get() {
        return We(e.pageSize) ? u.value : e.pageSize;
      },
      set(S) {
        We(e.pageSize) && (u.value = S), s && (t("update:page-size", S), t("size-change", S));
      }
    }), p = O(() => {
      let S = 0;
      return We(e.pageCount) ? We(e.total) || (S = Math.max(1, Math.ceil(e.total / f.value))) : S = e.pageCount, S;
    }), v = O({
      get() {
        return We(e.currentPage) ? d.value : e.currentPage;
      },
      set(S) {
        let b = S;
        S < 1 ? b = 1 : S > p.value && (b = p.value), We(e.currentPage) && (d.value = b), a && (t("update:current-page", b), t("current-change", b));
      }
    });
    U(p, (S) => {
      v.value > S && (v.value = S);
    });
    function c(S) {
      v.value = S;
    }
    function g(S) {
      f.value = S;
      const b = p.value;
      v.value > b && (v.value = b);
    }
    function y() {
      e.disabled || (v.value -= 1, t("prev-click", v.value));
    }
    function m() {
      e.disabled || (v.value += 1, t("next-click", v.value));
    }
    function w(S, b) {
      S && (S.props || (S.props = {}), S.props.class = [S.props.class, b].join(" "));
    }
    return rt(Ds, {
      pageCount: p,
      disabled: O(() => e.disabled),
      currentPage: v,
      changeEvent: c,
      handleSizeChange: g
    }), () => {
      var S, b;
      if (!i.value)
        return Fe(Ga, o("el.pagination.deprecationWarning")), null;
      if (!e.layout || e.hideOnSinglePage && p.value <= 1)
        return null;
      const T = [], _ = [], C = J("div", { class: r.e("rightwrapper") }, _), $ = {
        prev: J(ny, {
          disabled: e.disabled,
          currentPage: v.value,
          prevText: e.prevText,
          prevIcon: e.prevIcon,
          onClick: y
        }),
        jumper: J(Ry, {
          size: e.small ? "small" : "default"
        }),
        pager: J(Yy, {
          currentPage: v.value,
          pageCount: p.value,
          pagerCount: e.pagerCount,
          onChange: c,
          disabled: e.disabled
        }),
        next: J(iy, {
          disabled: e.disabled,
          currentPage: v.value,
          pageCount: p.value,
          nextText: e.nextText,
          nextIcon: e.nextIcon,
          onClick: m
        }),
        sizes: J(Py, {
          pageSize: f.value,
          pageSizes: e.pageSizes,
          popperClass: e.popperClass,
          disabled: e.disabled,
          size: e.small ? "small" : "default"
        }),
        slot: (b = (S = n == null ? void 0 : n.default) == null ? void 0 : S.call(n)) != null ? b : null,
        total: J(zy, { total: We(e.total) ? 0 : e.total })
      }, L = e.layout.split(",").map((D) => D.trim());
      let I = !1;
      return L.forEach((D) => {
        if (D === "->") {
          I = !0;
          return;
        }
        I ? _.push($[D]) : T.push($[D]);
      }), w(T[0], r.is("first")), w(T[T.length - 1], r.is("last")), I && _.length > 0 && (w(_[0], r.is("first")), w(_[_.length - 1], r.is("last")), T.push(C)), J("div", {
        role: "pagination",
        "aria-label": "pagination",
        class: [
          r.b(),
          r.is("background", e.background),
          {
            [r.m("small")]: e.small
          }
        ]
      }, T);
    };
  }
});
const Jy = Ct(Zy);
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
var e1 = /["'&<>]/, t1 = n1;
function n1(e) {
  var t = "" + e, n = e1.exec(t);
  if (!n)
    return t;
  var o, r = "", l = 0, a = 0;
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
    a !== l && (r += t.substring(a, l)), a = l + 1, r += o;
  }
  return a !== l ? r + t.substring(a, l) : r;
}
const vr = function(e) {
  var t;
  return (t = e.target) == null ? void 0 : t.closest("td");
}, o1 = function(e, t, n, o, r) {
  if (!t && !o && (!r || Array.isArray(r) && !r.length))
    return e;
  typeof n == "string" ? n = n === "descending" ? -1 : 1 : n = n && n < 0 ? -1 : 1;
  const l = o ? null : function(s, i) {
    return r ? (Array.isArray(r) || (r = [r]), r.map((u) => typeof u == "string" ? Ne(s, u) : u(s, i, e))) : (t !== "$key" && st(s) && "$value" in s && (s = s.$value), [st(s) ? Ne(s, t) : s]);
  }, a = function(s, i) {
    if (o)
      return o(s.value, i.value);
    for (let u = 0, d = s.key.length; u < d; u++) {
      if (s.key[u] < i.key[u])
        return -1;
      if (s.key[u] > i.key[u])
        return 1;
    }
    return 0;
  };
  return e.map((s, i) => ({
    value: s,
    index: i,
    key: l ? l(s, i) : null
  })).sort((s, i) => {
    let u = a(s, i);
    return u || (u = s.index - i.index), u * +n;
  }).map((s) => s.value);
}, Ni = function(e, t) {
  let n = null;
  return e.columns.forEach((o) => {
    o.id === t && (n = o);
  }), n;
}, r1 = function(e, t) {
  let n = null;
  for (let o = 0; o < e.columns.length; o++) {
    const r = e.columns[o];
    if (r.columnKey === t) {
      n = r;
      break;
    }
  }
  return n || Rs("ElTable", `No column matching with column-key: ${t}`), n;
}, Ya = function(e, t, n) {
  const o = (t.className || "").match(new RegExp(`${n}-table_[^\\s]+`, "gm"));
  return o ? Ni(e, o[0]) : null;
}, Me = (e, t) => {
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
}, un = function(e, t) {
  const n = {};
  return (e || []).forEach((o, r) => {
    n[Me(o, t)] = { row: o, index: r };
  }), n;
};
function l1(e, t) {
  const n = {};
  let o;
  for (o in e)
    n[o] = e[o];
  for (o in t)
    if (pn(t, o)) {
      const r = t[o];
      typeof r < "u" && (n[o] = r);
    }
  return n;
}
function xl(e) {
  return e === "" || e !== void 0 && (e = Number.parseInt(e, 10), Number.isNaN(e) && (e = "")), e;
}
function Fi(e) {
  return e === "" || e !== void 0 && (e = xl(e), Number.isNaN(e) && (e = 80)), e;
}
function a1(e) {
  return typeof e == "number" ? e : typeof e == "string" ? /^\d+(?:px)?$/.test(e) ? Number.parseInt(e, 10) : e : null;
}
function s1(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...o) => t(n(...o)));
}
function Qn(e, t, n) {
  let o = !1;
  const r = e.indexOf(t), l = r !== -1, a = (s) => {
    s === "add" ? e.push(t) : e.splice(r, 1), o = !0, vn(t.children) && t.children.forEach((i) => {
      Qn(e, i, n ?? !l);
    });
  };
  return An(n) ? n && !l ? a("add") : !n && l && a("remove") : a(l ? "remove" : "add"), o;
}
function i1(e, t, n = "children", o = "hasChildren") {
  const r = (a) => !(Array.isArray(a) && a.length);
  function l(a, s, i) {
    t(a, s, i), s.forEach((u) => {
      if (u[o]) {
        t(u, null, i + 1);
        return;
      }
      const d = u[n];
      r(d) || l(u, d, i + 1);
    });
  }
  e.forEach((a) => {
    if (a[o]) {
      t(a, null, 0);
      return;
    }
    const s = a[n];
    r(s) || l(a, s, 0);
  });
}
let Bt;
function u1(e, t, n, o) {
  o = $s({
    enterable: !0,
    showArrow: !0
  }, o);
  const { nextZIndex: r } = yl(), l = e == null ? void 0 : e.dataset.prefix, a = e == null ? void 0 : e.querySelector(`.${l}-scrollbar__wrap`);
  function s() {
    const y = o.effect === "light", m = document.createElement("div");
    return m.className = [
      `${l}-popper`,
      y ? "is-light" : "is-dark",
      o.popperClass || ""
    ].join(" "), n = t1(n), m.innerHTML = n, m.style.zIndex = String(r()), e == null || e.appendChild(m), m;
  }
  function i() {
    const y = document.createElement("div");
    return y.className = `${l}-popper__arrow`, y;
  }
  function u() {
    d && d.update();
  }
  Bt == null || Bt(), Bt = () => {
    try {
      d && d.destroy(), v && (e == null || e.removeChild(v)), t.removeEventListener("mouseenter", f), t.removeEventListener("mouseleave", p), a == null || a.removeEventListener("scroll", Bt), Bt = void 0;
    } catch {
    }
  };
  let d = null, f = u, p = Bt;
  o.enterable && ({ onOpen: f, onClose: p } = si({
    showAfter: o.showAfter,
    hideAfter: o.hideAfter,
    open: u,
    close: Bt
  }));
  const v = s();
  v.onmouseenter = f, v.onmouseleave = p;
  const c = [];
  if (o.offset && c.push({
    name: "offset",
    options: {
      offset: [0, o.offset]
    }
  }), o.showArrow) {
    const y = v.appendChild(i());
    c.push({
      name: "arrow",
      options: {
        element: y,
        padding: 10
      }
    });
  }
  const g = o.popperOptions || {};
  return d = li(t, v, {
    placement: o.placement || "top",
    strategy: "fixed",
    ...g,
    modifiers: g.modifiers ? c.concat(g.modifiers) : c
  }), t.addEventListener("mouseenter", f), t.addEventListener("mouseleave", p), a == null || a.addEventListener("scroll", Bt), d;
}
function Bi(e) {
  return e.children ? Bp(e.children, Bi) : [e];
}
function Xa(e, t) {
  return e + t.colSpan;
}
const zi = (e, t, n, o) => {
  let r = 0, l = e;
  const a = n.states.columns.value;
  if (o) {
    const i = Bi(o[e]);
    r = a.slice(0, a.indexOf(i[0])).reduce(Xa, 0), l = r + i.reduce(Xa, 0) - 1;
  } else
    r = e;
  let s;
  switch (t) {
    case "left":
      l < n.states.fixedLeafColumnsLength.value && (s = "left");
      break;
    case "right":
      r >= a.length - n.states.rightFixedLeafColumnsLength.value && (s = "right");
      break;
    default:
      l < n.states.fixedLeafColumnsLength.value ? s = "left" : r >= a.length - n.states.rightFixedLeafColumnsLength.value && (s = "right");
  }
  return s ? {
    direction: s,
    start: r,
    after: l
  } : {};
}, Tl = (e, t, n, o, r, l = 0) => {
  const a = [], { direction: s, start: i, after: u } = zi(t, n, o, r);
  if (s) {
    const d = s === "left";
    a.push(`${e}-fixed-column--${s}`), d && u + l === o.states.fixedLeafColumnsLength.value - 1 ? a.push("is-last-column") : !d && i - l === o.states.columns.value.length - o.states.rightFixedLeafColumnsLength.value && a.push("is-first-column");
  }
  return a;
};
function Qa(e, t) {
  return e + (t.realWidth === null || Number.isNaN(t.realWidth) ? Number(t.width) : t.realWidth);
}
const $l = (e, t, n, o) => {
  const {
    direction: r,
    start: l = 0,
    after: a = 0
  } = zi(e, t, n, o);
  if (!r)
    return;
  const s = {}, i = r === "left", u = n.states.columns.value;
  return i ? s.left = u.slice(0, l).reduce(Qa, 0) : s.right = u.slice(a + 1).reverse().reduce(Qa, 0), s;
}, zn = (e, t) => {
  e && (Number.isNaN(e[t]) || (e[t] = `${e[t]}px`));
};
function c1(e) {
  const t = we(), n = x(!1), o = x([]);
  return {
    updateExpandRows: () => {
      const i = e.data.value || [], u = e.rowKey.value;
      if (n.value)
        o.value = i.slice();
      else if (u) {
        const d = un(o.value, u);
        o.value = i.reduce((f, p) => {
          const v = Me(p, u);
          return d[v] && f.push(p), f;
        }, []);
      } else
        o.value = [];
    },
    toggleRowExpansion: (i, u) => {
      Qn(o.value, i, u) && t.emit("expand-change", i, o.value.slice());
    },
    setExpandRowKeys: (i) => {
      t.store.assertRowKey();
      const u = e.data.value || [], d = e.rowKey.value, f = un(u, d);
      o.value = i.reduce((p, v) => {
        const c = f[v];
        return c && p.push(c.row), p;
      }, []);
    },
    isRowExpanded: (i) => {
      const u = e.rowKey.value;
      return u ? !!un(o.value, u)[Me(i, u)] : o.value.includes(i);
    },
    states: {
      expandRows: o,
      defaultExpandAll: n
    }
  };
}
function d1(e) {
  const t = we(), n = x(null), o = x(null), r = (u) => {
    t.store.assertRowKey(), n.value = u, a(u);
  }, l = () => {
    n.value = null;
  }, a = (u) => {
    const { data: d, rowKey: f } = e;
    let p = null;
    f.value && (p = (h(d) || []).find((v) => Me(v, f.value) === u)), o.value = p, t.emit("current-change", o.value, null);
  };
  return {
    setCurrentRowKey: r,
    restoreCurrentRowKey: l,
    setCurrentRowByKey: a,
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
          const p = Me(f, u);
          a(p);
        } else
          o.value = null;
        o.value === null && t.emit("current-change", null, f);
      } else
        n.value && (a(n.value), l());
    },
    states: {
      _currentRowKey: n,
      currentRow: o
    }
  };
}
function f1(e) {
  const t = x([]), n = x({}), o = x(16), r = x(!1), l = x({}), a = x("hasChildren"), s = x("children"), i = we(), u = O(() => {
    if (!e.rowKey.value)
      return {};
    const m = e.data.value || [];
    return f(m);
  }), d = O(() => {
    const m = e.rowKey.value, w = Object.keys(l.value), S = {};
    return w.length && w.forEach((b) => {
      if (l.value[b].length) {
        const T = { children: [] };
        l.value[b].forEach((_) => {
          const C = Me(_, m);
          T.children.push(C), _[a.value] && !S[C] && (S[C] = { children: [] });
        }), S[b] = T;
      }
    }), S;
  }), f = (m) => {
    const w = e.rowKey.value, S = {};
    return i1(m, (b, T, _) => {
      const C = Me(b, w);
      Array.isArray(T) ? S[C] = {
        children: T.map(($) => Me($, w)),
        level: _
      } : r.value && (S[C] = {
        children: [],
        lazy: !0,
        level: _
      });
    }, s.value, a.value), S;
  }, p = (m = !1, w = ((S) => (S = i.store) == null ? void 0 : S.states.defaultExpandAll.value)()) => {
    var S;
    const b = u.value, T = d.value, _ = Object.keys(b), C = {};
    if (_.length) {
      const $ = h(n), L = [], I = (B, K) => {
        if (m)
          return t.value ? w || t.value.includes(K) : !!(w || B != null && B.expanded);
        {
          const ee = w || t.value && t.value.includes(K);
          return !!(B != null && B.expanded || ee);
        }
      };
      _.forEach((B) => {
        const K = $[B], ee = { ...b[B] };
        if (ee.expanded = I(K, B), ee.lazy) {
          const { loaded: F = !1, loading: Y = !1 } = K || {};
          ee.loaded = !!F, ee.loading = !!Y, L.push(B);
        }
        C[B] = ee;
      });
      const D = Object.keys(T);
      r.value && D.length && L.length && D.forEach((B) => {
        const K = $[B], ee = T[B].children;
        if (L.includes(B)) {
          if (C[B].children.length !== 0)
            throw new Error("[ElTable]children must be an empty array.");
          C[B].children = ee;
        } else {
          const { loaded: F = !1, loading: Y = !1 } = K || {};
          C[B] = {
            lazy: !0,
            loaded: !!F,
            loading: !!Y,
            expanded: I(K, B),
            children: ee,
            level: ""
          };
        }
      });
    }
    n.value = C, (S = i.store) == null || S.updateTableScrollY();
  };
  U(() => t.value, () => {
    p(!0);
  }), U(() => u.value, () => {
    p();
  }), U(() => d.value, () => {
    p();
  });
  const v = (m) => {
    t.value = m, p();
  }, c = (m, w) => {
    i.store.assertRowKey();
    const S = e.rowKey.value, b = Me(m, S), T = b && n.value[b];
    if (b && T && "expanded" in T) {
      const _ = T.expanded;
      w = typeof w > "u" ? !T.expanded : w, n.value[b].expanded = w, _ !== w && i.emit("expand-change", m, w), i.store.updateTableScrollY();
    }
  }, g = (m) => {
    i.store.assertRowKey();
    const w = e.rowKey.value, S = Me(m, w), b = n.value[S];
    r.value && b && "loaded" in b && !b.loaded ? y(m, S, b) : c(m, void 0);
  }, y = (m, w, S) => {
    const { load: b } = i.props;
    b && !n.value[w].loaded && (n.value[w].loading = !0, b(m, S, (T) => {
      if (!Array.isArray(T))
        throw new TypeError("[ElTable] data must be an array");
      n.value[w].loading = !1, n.value[w].loaded = !0, n.value[w].expanded = !0, T.length && (l.value[w] = T), i.emit("expand-change", m, !0);
    }));
  };
  return {
    loadData: y,
    loadOrToggle: g,
    toggleTreeExpansion: c,
    updateTreeExpandKeys: v,
    updateTreeData: p,
    normalize: f,
    states: {
      expandRowKeys: t,
      treeData: n,
      indent: o,
      lazy: r,
      lazyTreeNodeMap: l,
      lazyColumnIdentifier: a,
      childrenColumnName: s
    }
  };
}
const p1 = (e, t) => {
  const n = t.sortingColumn;
  return !n || typeof n.sortable == "string" ? e : o1(e, t.sortProp, t.sortOrder, n.sortMethod, n.sortBy);
}, Po = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children ? t.push.apply(t, Po(n.children)) : t.push(n);
  }), t;
};
function v1() {
  var e;
  const t = we(), { size: n } = Hn((e = t.proxy) == null ? void 0 : e.$props), o = x(null), r = x([]), l = x([]), a = x(!1), s = x([]), i = x([]), u = x([]), d = x([]), f = x([]), p = x([]), v = x([]), c = x([]), g = [], y = x(0), m = x(0), w = x(0), S = x(!1), b = x([]), T = x(!1), _ = x(!1), C = x(null), $ = x({}), L = x(null), I = x(null), D = x(null), B = x(null), K = x(null);
  U(r, () => t.state && oe(!1), {
    deep: !0
  });
  const ee = () => {
    if (!o.value)
      throw new Error("[ElTable] prop row-key is required");
  }, F = (j) => {
    var te;
    (te = j.children) == null || te.forEach((E) => {
      E.fixed = j.fixed, F(E);
    });
  }, Y = () => {
    s.value.forEach((z) => {
      F(z);
    }), d.value = s.value.filter((z) => z.fixed === !0 || z.fixed === "left"), f.value = s.value.filter((z) => z.fixed === "right"), d.value.length > 0 && s.value[0] && s.value[0].type === "selection" && !s.value[0].fixed && (s.value[0].fixed = !0, d.value.unshift(s.value[0]));
    const j = s.value.filter((z) => !z.fixed);
    i.value = [].concat(d.value).concat(j).concat(f.value);
    const te = Po(j), E = Po(d.value), k = Po(f.value);
    y.value = te.length, m.value = E.length, w.value = k.length, u.value = [].concat(E).concat(te).concat(k), a.value = d.value.length > 0 || f.value.length > 0;
  }, oe = (j, te = !1) => {
    j && Y(), te ? t.state.doLayout() : t.state.debouncedUpdateLayout();
  }, H = (j) => b.value.includes(j), A = () => {
    S.value = !1, b.value.length && (b.value = [], t.emit("selection-change", []));
  }, q = () => {
    let j;
    if (o.value) {
      j = [];
      const te = un(b.value, o.value), E = un(r.value, o.value);
      for (const k in te)
        pn(te, k) && !E[k] && j.push(te[k].row);
    } else
      j = b.value.filter((te) => !r.value.includes(te));
    if (j.length) {
      const te = b.value.filter((E) => !j.includes(E));
      b.value = te, t.emit("selection-change", te.slice());
    }
  }, ce = () => (b.value || []).slice(), de = (j, te = void 0, E = !0) => {
    if (Qn(b.value, j, te)) {
      const z = (b.value || []).slice();
      E && t.emit("select", z, j), t.emit("selection-change", z);
    }
  }, me = () => {
    var j, te;
    const E = _.value ? !S.value : !(S.value || b.value.length);
    S.value = E;
    let k = !1, z = 0;
    const X = (te = (j = t == null ? void 0 : t.store) == null ? void 0 : j.states) == null ? void 0 : te.rowKey.value;
    r.value.forEach((ve, He) => {
      const Le = He + z;
      C.value ? C.value.call(null, ve, Le) && Qn(b.value, ve, E) && (k = !0) : Qn(b.value, ve, E) && (k = !0), z += be(Me(ve, X));
    }), k && t.emit("selection-change", b.value ? b.value.slice() : []), t.emit("select-all", b.value);
  }, he = () => {
    const j = un(b.value, o.value);
    r.value.forEach((te) => {
      const E = Me(te, o.value), k = j[E];
      k && (b.value[k.index] = te);
    });
  }, re = () => {
    var j, te, E;
    if (((j = r.value) == null ? void 0 : j.length) === 0) {
      S.value = !1;
      return;
    }
    let k;
    o.value && (k = un(b.value, o.value));
    const z = function(Le) {
      return k ? !!k[Me(Le, o.value)] : b.value.includes(Le);
    };
    let X = !0, ve = 0, He = 0;
    for (let Le = 0, ht = (r.value || []).length; Le < ht; Le++) {
      const qe = (E = (te = t == null ? void 0 : t.store) == null ? void 0 : te.states) == null ? void 0 : E.rowKey.value, Cn = Le + He, De = r.value[Le], Nt = C.value && C.value.call(null, De, Cn);
      if (z(De))
        ve++;
      else if (!C.value || Nt) {
        X = !1;
        break;
      }
      He += be(Me(De, qe));
    }
    ve === 0 && (X = !1), S.value = X;
  }, be = (j) => {
    var te;
    if (!t || !t.store)
      return 0;
    const { treeData: E } = t.store.states;
    let k = 0;
    const z = (te = E.value[j]) == null ? void 0 : te.children;
    return z && (k += z.length, z.forEach((X) => {
      k += be(X);
    })), k;
  }, Se = (j, te) => {
    Array.isArray(j) || (j = [j]);
    const E = {};
    return j.forEach((k) => {
      $.value[k.id] = te, E[k.columnKey || k.id] = te;
    }), E;
  }, le = (j, te, E) => {
    I.value && I.value !== j && (I.value.order = null), I.value = j, D.value = te, B.value = E;
  }, xe = () => {
    let j = h(l);
    Object.keys($.value).forEach((te) => {
      const E = $.value[te];
      if (!E || E.length === 0)
        return;
      const k = Ni({
        columns: u.value
      }, te);
      k && k.filterMethod && (j = j.filter((z) => E.some((X) => k.filterMethod.call(null, X, z, k))));
    }), L.value = j;
  }, Be = () => {
    r.value = p1(L.value, {
      sortingColumn: I.value,
      sortProp: D.value,
      sortOrder: B.value
    });
  }, ut = (j = void 0) => {
    j && j.filter || xe(), Be();
  }, Ue = (j) => {
    const { tableHeaderRef: te } = t.refs;
    if (!te)
      return;
    const E = Object.assign({}, te.filterPanels), k = Object.keys(E);
    if (k.length)
      if (typeof j == "string" && (j = [j]), Array.isArray(j)) {
        const z = j.map((X) => r1({
          columns: u.value
        }, X));
        k.forEach((X) => {
          const ve = z.find((He) => He.id === X);
          ve && (ve.filteredValue = []);
        }), t.store.commit("filterChange", {
          column: z,
          values: [],
          silent: !0,
          multi: !0
        });
      } else
        k.forEach((z) => {
          const X = u.value.find((ve) => ve.id === z);
          X && (X.filteredValue = []);
        }), $.value = {}, t.store.commit("filterChange", {
          column: {},
          values: [],
          silent: !0
        });
  }, Qe = () => {
    I.value && (le(null, null, null), t.store.commit("changeSortCondition", {
      silent: !0
    }));
  }, {
    setExpandRowKeys: Mt,
    toggleRowExpansion: vt,
    updateExpandRows: Ze,
    states: Et,
    isRowExpanded: Rt
  } = c1({
    data: r,
    rowKey: o
  }), {
    updateTreeExpandKeys: ze,
    toggleTreeExpansion: Ie,
    updateTreeData: Je,
    loadOrToggle: R,
    states: ie
  } = f1({
    data: r,
    rowKey: o
  }), {
    updateCurrentRowData: Ae,
    updateCurrentRow: et,
    setCurrentRowKey: It,
    states: _t
  } = d1({
    data: r,
    rowKey: o
  });
  return {
    assertRowKey: ee,
    updateColumns: Y,
    scheduleLayout: oe,
    isSelected: H,
    clearSelection: A,
    cleanSelection: q,
    getSelectionRows: ce,
    toggleRowSelection: de,
    _toggleAllSelection: me,
    toggleAllSelection: null,
    updateSelectionByRowKey: he,
    updateAllSelected: re,
    updateFilters: Se,
    updateCurrentRow: et,
    updateSort: le,
    execFilter: xe,
    execSort: Be,
    execQuery: ut,
    clearFilter: Ue,
    clearSort: Qe,
    toggleRowExpansion: vt,
    setExpandRowKeysAdapter: (j) => {
      Mt(j), ze(j);
    },
    setCurrentRowKey: It,
    toggleRowExpansionAdapter: (j, te) => {
      u.value.some(({ type: k }) => k === "expand") ? vt(j, te) : Ie(j, te);
    },
    isRowExpanded: Rt,
    updateExpandRows: Ze,
    updateCurrentRowData: Ae,
    loadOrToggle: R,
    updateTreeData: Je,
    states: {
      tableSize: n,
      rowKey: o,
      data: r,
      _data: l,
      isComplex: a,
      _columns: s,
      originColumns: i,
      columns: u,
      fixedColumns: d,
      rightFixedColumns: f,
      leafColumns: p,
      fixedLeafColumns: v,
      rightFixedLeafColumns: c,
      updateOrderFns: g,
      leafColumnsLength: y,
      fixedLeafColumnsLength: m,
      rightFixedLeafColumnsLength: w,
      isAllSelected: S,
      selection: b,
      reserveSelection: T,
      selectOnIndeterminate: _,
      selectable: C,
      filters: $,
      filteredData: L,
      sortingColumn: I,
      sortProp: D,
      sortOrder: B,
      hoverRow: K,
      ...Et,
      ...ie,
      ..._t
    }
  };
}
function Br(e, t) {
  return e.map((n) => {
    var o;
    return n.id === t.id ? t : ((o = n.children) != null && o.length && (n.children = Br(n.children, t)), n);
  });
}
function zr(e) {
  e.forEach((t) => {
    var n, o;
    t.no = (n = t.getColumnIndex) == null ? void 0 : n.call(t), (o = t.children) != null && o.length && zr(t.children);
  }), e.sort((t, n) => t.no - n.no);
}
function h1() {
  const e = we(), t = v1();
  return {
    ns: ne("table"),
    ...t,
    mutations: {
      setData(a, s) {
        const i = h(a._data) !== s;
        a.data.value = s, a._data.value = s, e.store.execQuery(), e.store.updateCurrentRowData(), e.store.updateExpandRows(), e.store.updateTreeData(e.store.states.defaultExpandAll.value), h(a.reserveSelection) ? (e.store.assertRowKey(), e.store.updateSelectionByRowKey()) : i ? e.store.clearSelection() : e.store.cleanSelection(), e.store.updateAllSelected(), e.$ready && e.store.scheduleLayout();
      },
      insertColumn(a, s, i, u) {
        const d = h(a._columns);
        let f = [];
        i ? (i && !i.children && (i.children = []), i.children.push(s), f = Br(d, i)) : (d.push(s), f = d), zr(f), a._columns.value = f, a.updateOrderFns.push(u), s.type === "selection" && (a.selectable.value = s.selectable, a.reserveSelection.value = s.reserveSelection), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
      },
      updateColumnOrder(a, s) {
        var i;
        ((i = s.getColumnIndex) == null ? void 0 : i.call(s)) !== s.no && (zr(a._columns.value), e.$ready && e.store.updateColumns());
      },
      removeColumn(a, s, i, u) {
        const d = h(a._columns) || [];
        if (i)
          i.children.splice(i.children.findIndex((p) => p.id === s.id), 1), ue(() => {
            var p;
            ((p = i.children) == null ? void 0 : p.length) === 0 && delete i.children;
          }), a._columns.value = Br(d, i);
        else {
          const p = d.indexOf(s);
          p > -1 && (d.splice(p, 1), a._columns.value = d);
        }
        const f = a.updateOrderFns.indexOf(u);
        f > -1 && a.updateOrderFns.splice(f, 1), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
      },
      sort(a, s) {
        const { prop: i, order: u, init: d } = s;
        if (i) {
          const f = h(a.columns).find((p) => p.property === i);
          f && (f.order = u, e.store.updateSort(f, i, u), e.store.commit("changeSortCondition", { init: d }));
        }
      },
      changeSortCondition(a, s) {
        const { sortingColumn: i, sortProp: u, sortOrder: d } = a, f = h(i), p = h(u), v = h(d);
        v === null && (a.sortingColumn.value = null, a.sortProp.value = null);
        const c = { filter: !0 };
        e.store.execQuery(c), (!s || !(s.silent || s.init)) && e.emit("sort-change", {
          column: f,
          prop: p,
          order: v
        }), e.store.updateTableScrollY();
      },
      filterChange(a, s) {
        const { column: i, values: u, silent: d } = s, f = e.store.updateFilters(i, u);
        e.store.execQuery(), d || e.emit("filter-change", f), e.store.updateTableScrollY();
      },
      toggleAllSelection() {
        e.store.toggleAllSelection();
      },
      rowSelectedChanged(a, s) {
        e.store.toggleRowSelection(s), e.store.updateAllSelected();
      },
      setHoverRow(a, s) {
        a.hoverRow.value = s;
      },
      setCurrentRow(a, s) {
        e.store.updateCurrentRow(s);
      }
    },
    commit: function(a, ...s) {
      const i = e.store.mutations;
      if (i[a])
        i[a].apply(e, [e.store.states].concat(s));
      else
        throw new Error(`Action not found: ${a}`);
    },
    updateTableScrollY: function() {
      ue(() => e.layout.updateScrollY.apply(e.layout));
    }
  };
}
const Zn = {
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
function g1(e, t) {
  if (!e)
    throw new Error("Table is required.");
  const n = h1();
  return n.toggleAllSelection = kn(n._toggleAllSelection, 10), Object.keys(Zn).forEach((o) => {
    Hi(Di(t, o), o, n);
  }), m1(n, t), n;
}
function m1(e, t) {
  Object.keys(Zn).forEach((n) => {
    U(() => Di(t, n), (o) => {
      Hi(o, n, e);
    });
  });
}
function Hi(e, t, n) {
  let o = e, r = Zn[t];
  typeof Zn[t] == "object" && (r = r.key, o = o || Zn[t].default), n.states[r].value = o;
}
function Di(e, t) {
  if (t.includes(".")) {
    const n = t.split(".");
    let o = e;
    return n.forEach((r) => {
      o = o[r];
    }), o;
  } else
    return e[t];
}
class b1 {
  constructor(t) {
    this.observers = [], this.table = null, this.store = null, this.columns = [], this.fit = !0, this.showHeader = !0, this.height = x(null), this.scrollX = x(!1), this.scrollY = x(!1), this.bodyWidth = x(null), this.fixedWidth = x(null), this.rightFixedWidth = x(null), this.gutterWidth = 0;
    for (const n in t)
      pn(t, n) && (dn(this[n]) ? this[n].value = t[n] : this[n] = t[n]);
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
    if (!_e)
      return;
    const o = this.table.vnode.el;
    if (t = a1(t), this.height.value = Number(t), !o && (t || t === 0))
      return ue(() => this.setHeight(t, n));
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
    if (!_e)
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
          const u = l.reduce((p, v) => p + Number(v.minWidth || 80), 0), d = i / u;
          let f = 0;
          l.forEach((p, v) => {
            if (v === 0)
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
    const a = this.store.states.fixedColumns.value;
    if (a.length > 0) {
      let i = 0;
      a.forEach((u) => {
        i += Number(u.realWidth || u.width);
      }), this.fixedWidth.value = i;
    }
    const s = this.store.states.rightFixedColumns.value;
    if (s.length > 0) {
      let i = 0;
      s.forEach((u) => {
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
const { CheckboxGroup: y1 } = Bn, w1 = W({
  name: "ElTableFilterPanel",
  components: {
    ElCheckbox: Bn,
    ElCheckboxGroup: y1,
    ElScrollbar: wl,
    ElTooltip: mi,
    ElIcon: je,
    ArrowDown: Ns,
    ArrowUp: zv
  },
  directives: { ClickOutside: wi },
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
    const t = we(), { t: n } = Ut(), o = ne("table-filter"), r = t == null ? void 0 : t.parent;
    r.filterPanels.value[e.column.id] || (r.filterPanels.value[e.column.id] = t);
    const l = x(!1), a = x(null), s = O(() => e.column && e.column.filters), i = O({
      get: () => {
        var b;
        return (((b = e.column) == null ? void 0 : b.filteredValue) || [])[0];
      },
      set: (b) => {
        u.value && (typeof b < "u" && b !== null ? u.value.splice(0, 1, b) : u.value.splice(0, 1));
      }
    }), u = O({
      get() {
        return e.column ? e.column.filteredValue || [] : [];
      },
      set(b) {
        e.column && e.upDataColumn("filteredValue", b);
      }
    }), d = O(() => e.column ? e.column.filterMultiple : !0), f = (b) => b.value === i.value, p = () => {
      l.value = !1;
    }, v = (b) => {
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
    U(l, (b) => {
      e.column && e.upDataColumn("filterOpened", b);
    }, {
      immediate: !0
    });
    const S = O(() => {
      var b, T;
      return (T = (b = a.value) == null ? void 0 : b.popperRef) == null ? void 0 : T.contentRef;
    });
    return {
      tooltipVisible: l,
      multiple: d,
      filteredValue: u,
      filterValue: i,
      filters: s,
      handleConfirm: g,
      handleReset: y,
      handleSelect: m,
      isActive: f,
      t: n,
      ns: o,
      showFilterPanel: v,
      hideFilterPanel: c,
      popperPaneRef: S,
      tooltip: a
    };
  }
}), C1 = { key: 0 }, S1 = ["disabled"], E1 = ["label", "onClick"];
function _1(e, t, n, o, r, l) {
  const a = Te("el-checkbox"), s = Te("el-checkbox-group"), i = Te("el-scrollbar"), u = Te("arrow-up"), d = Te("arrow-down"), f = Te("el-icon"), p = Te("el-tooltip"), v = Wr("click-outside");
  return P(), Q(p, {
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
    content: Z(() => [
      e.multiple ? (P(), N("div", C1, [
        V("div", {
          class: M(e.ns.e("content"))
        }, [
          ge(i, {
            "wrap-class": e.ns.e("wrap")
          }, {
            default: Z(() => [
              ge(s, {
                modelValue: e.filteredValue,
                "onUpdate:modelValue": t[0] || (t[0] = (c) => e.filteredValue = c),
                class: M(e.ns.e("checkbox-group"))
              }, {
                default: Z(() => [
                  (P(!0), N(Ke, null, Pn(e.filters, (c) => (P(), Q(a, {
                    key: c.value,
                    label: c.value
                  }, {
                    default: Z(() => [
                      Vo(ye(c.text), 1)
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
        V("div", {
          class: M(e.ns.e("bottom"))
        }, [
          V("button", {
            class: M({ [e.ns.is("disabled")]: e.filteredValue.length === 0 }),
            disabled: e.filteredValue.length === 0,
            type: "button",
            onClick: t[1] || (t[1] = (...c) => e.handleConfirm && e.handleConfirm(...c))
          }, ye(e.t("el.table.confirmFilter")), 11, S1),
          V("button", {
            type: "button",
            onClick: t[2] || (t[2] = (...c) => e.handleReset && e.handleReset(...c))
          }, ye(e.t("el.table.resetFilter")), 1)
        ], 2)
      ])) : (P(), N("ul", {
        key: 1,
        class: M(e.ns.e("list"))
      }, [
        V("li", {
          class: M([
            e.ns.e("list-item"),
            {
              [e.ns.is("active")]: e.filterValue === void 0 || e.filterValue === null
            }
          ]),
          onClick: t[3] || (t[3] = (c) => e.handleSelect(null))
        }, ye(e.t("el.table.clearFilter")), 3),
        (P(!0), N(Ke, null, Pn(e.filters, (c) => (P(), N("li", {
          key: c.value,
          class: M([e.ns.e("list-item"), e.ns.is("active", e.isActive(c))]),
          label: c.value,
          onClick: (g) => e.handleSelect(c.value)
        }, ye(c.text), 11, E1))), 128))
      ], 2))
    ]),
    default: Z(() => [
      Pe((P(), N("span", {
        class: M([
          `${e.ns.namespace.value}-table__column-filter-trigger`,
          `${e.ns.namespace.value}-none-outline`
        ]),
        onClick: t[4] || (t[4] = (...c) => e.showFilterPanel && e.showFilterPanel(...c))
      }, [
        ge(f, null, {
          default: Z(() => [
            e.column.filterOpened ? (P(), Q(u, { key: 0 })) : (P(), Q(d, { key: 1 }))
          ]),
          _: 1
        })
      ], 2)), [
        [v, e.hideFilterPanel, e.popperPaneRef]
      ])
    ]),
    _: 1
  }, 8, ["visible", "placement", "popper-class"]);
}
var O1 = /* @__PURE__ */ pe(w1, [["render", _1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/filter-panel.vue"]]);
function Wi(e) {
  const t = we();
  Dr(() => {
    n.value.addObserver(t);
  }), ke(() => {
    o(n.value), r(n.value);
  }), ns(() => {
    o(n.value), r(n.value);
  }), Do(() => {
    n.value.removeObserver(t);
  });
  const n = O(() => {
    const l = e.layout;
    if (!l)
      throw new Error("Can not find table layout.");
    return l;
  }), o = (l) => {
    var a;
    const s = ((a = e.vnode.el) == null ? void 0 : a.querySelectorAll("colgroup > col")) || [];
    if (!s.length)
      return;
    const i = l.getFlattenColumns(), u = {};
    i.forEach((d) => {
      u[d.id] = d;
    });
    for (let d = 0, f = s.length; d < f; d++) {
      const p = s[d], v = p.getAttribute("name"), c = u[v];
      c && p.setAttribute("width", c.realWidth || c.width);
    }
  }, r = (l) => {
    var a, s;
    const i = ((a = e.vnode.el) == null ? void 0 : a.querySelectorAll("colgroup > col[name=gutter]")) || [];
    for (let d = 0, f = i.length; d < f; d++)
      i[d].setAttribute("width", l.scrollY.value ? l.gutterWidth : "0");
    const u = ((s = e.vnode.el) == null ? void 0 : s.querySelectorAll("th.gutter")) || [];
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
const Lt = Symbol("ElTable");
function x1(e, t) {
  const n = we(), o = se(Lt), r = (g) => {
    g.stopPropagation();
  }, l = (g, y) => {
    !y.filters && y.sortable ? c(g, y, !1) : y.filterable && !y.sortable && r(g), o == null || o.emit("header-click", y, g);
  }, a = (g, y) => {
    o == null || o.emit("header-contextmenu", y, g);
  }, s = x(null), i = x(!1), u = x({}), d = (g, y) => {
    if (_e && !(y.children && y.children.length > 0) && s.value && e.border) {
      i.value = !0;
      const m = o;
      t("set-drag-visible", !0);
      const S = (m == null ? void 0 : m.vnode.el).getBoundingClientRect().left, b = n.vnode.el.querySelector(`th.${y.id}`), T = b.getBoundingClientRect(), _ = T.left - S + 30;
      Bo(b, "noclick"), u.value = {
        startMouseLeft: g.clientX,
        startLeft: T.right - S,
        startColumnLeft: T.left - S,
        tableLeft: S
      };
      const C = m == null ? void 0 : m.refs.resizeProxy;
      C.style.left = `${u.value.startLeft}px`, document.onselectstart = function() {
        return !1;
      }, document.ondragstart = function() {
        return !1;
      };
      const $ = (I) => {
        const D = I.clientX - u.value.startMouseLeft, B = u.value.startLeft + D;
        C.style.left = `${Math.max(_, B)}px`;
      }, L = () => {
        if (i.value) {
          const { startColumnLeft: I, startLeft: D } = u.value, K = Number.parseInt(C.style.left, 10) - I;
          y.width = y.realWidth = K, m == null || m.emit("header-dragend", y.width, D - I, y, g), requestAnimationFrame(() => {
            e.store.scheduleLayout(!1, !0);
          }), document.body.style.cursor = "", i.value = !1, s.value = null, u.value = {}, t("set-drag-visible", !1);
        }
        document.removeEventListener("mousemove", $), document.removeEventListener("mouseup", L), document.onselectstart = null, document.ondragstart = null, setTimeout(() => {
          hn(b, "noclick");
        }, 0);
      };
      document.addEventListener("mousemove", $), document.addEventListener("mouseup", L);
    }
  }, f = (g, y) => {
    var m;
    if (y.children && y.children.length > 0)
      return;
    const w = (m = g.target) == null ? void 0 : m.closest("th");
    if (!(!y || !y.resizable) && !i.value && e.border) {
      const S = w.getBoundingClientRect(), b = document.body.style;
      S.width > 12 && S.right - g.pageX < 8 ? (b.cursor = "col-resize", _o(w, "is-sortable") && (w.style.cursor = "col-resize"), s.value = y) : i.value || (b.cursor = "", _o(w, "is-sortable") && (w.style.cursor = "pointer"), s.value = null);
    }
  }, p = () => {
    _e && (document.body.style.cursor = "");
  }, v = ({ order: g, sortOrders: y }) => {
    if (g === "")
      return y[0];
    const m = y.indexOf(g || null);
    return y[m > y.length - 2 ? 0 : m + 1];
  }, c = (g, y, m) => {
    var w;
    g.stopPropagation();
    const S = y.order === m ? null : m || v(y), b = (w = g.target) == null ? void 0 : w.closest("th");
    if (b && _o(b, "noclick")) {
      hn(b, "noclick");
      return;
    }
    if (!y.sortable)
      return;
    const T = e.store.states;
    let _ = T.sortProp.value, C;
    const $ = T.sortingColumn.value;
    ($ !== y || $ === y && $.order === null) && ($ && ($.order = null), T.sortingColumn.value = y, _ = y.property), S ? C = y.order = S : C = y.order = null, T.sortProp.value = _, T.sortOrder.value = C, o == null || o.store.commit("changeSortCondition");
  };
  return {
    handleHeaderClick: l,
    handleHeaderContextMenu: a,
    handleMouseDown: d,
    handleMouseMove: f,
    handleMouseOut: p,
    handleSortClick: c,
    handleFilterClick: r
  };
}
function T1(e) {
  const t = se(Lt), n = ne("table");
  return {
    getHeaderRowStyle: (s) => {
      const i = t == null ? void 0 : t.props.headerRowStyle;
      return typeof i == "function" ? i.call(null, { rowIndex: s }) : i;
    },
    getHeaderRowClass: (s) => {
      const i = [], u = t == null ? void 0 : t.props.headerRowClassName;
      return typeof u == "string" ? i.push(u) : typeof u == "function" && i.push(u.call(null, { rowIndex: s })), i.join(" ");
    },
    getHeaderCellStyle: (s, i, u, d) => {
      var f;
      let p = (f = t == null ? void 0 : t.props.headerCellStyle) != null ? f : {};
      typeof p == "function" && (p = p.call(null, {
        rowIndex: s,
        columnIndex: i,
        row: u,
        column: d
      }));
      const v = $l(i, d.fixed, e.store, u);
      return zn(v, "left"), zn(v, "right"), Object.assign({}, p, v);
    },
    getHeaderCellClass: (s, i, u, d) => {
      const f = Tl(n.b(), i, d.fixed, e.store, u), p = [
        d.id,
        d.order,
        d.headerAlign,
        d.className,
        d.labelClassName,
        ...f
      ];
      d.children || p.push("is-leaf"), d.sortable && p.push("is-sortable");
      const v = t == null ? void 0 : t.props.headerCellClassName;
      return typeof v == "string" ? p.push(v) : typeof v == "function" && p.push(v.call(null, {
        rowIndex: s,
        columnIndex: i,
        row: u,
        column: d
      })), p.push(n.e("cell")), p.filter((c) => Boolean(c)).join(" ");
    }
  };
}
const Vi = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children ? (t.push(n), t.push.apply(t, Vi(n.children))) : t.push(n);
  }), t;
}, $1 = (e) => {
  let t = 1;
  const n = (l, a) => {
    if (a && (l.level = a.level + 1, t < l.level && (t = l.level)), l.children) {
      let s = 0;
      l.children.forEach((i) => {
        n(i, l), s += i.colSpan;
      }), l.colSpan = s;
    } else
      l.colSpan = 1;
  };
  e.forEach((l) => {
    l.level = 1, n(l, void 0);
  });
  const o = [];
  for (let l = 0; l < t; l++)
    o.push([]);
  return Vi(e).forEach((l) => {
    l.children ? (l.rowSpan = 1, l.children.forEach((a) => a.isSubColumn = !0)) : l.rowSpan = t - l.level + 1, o[l.level - 1].push(l);
  }), o;
};
function P1(e) {
  const t = se(Lt), n = O(() => $1(e.store.states.originColumns.value));
  return {
    isGroup: O(() => {
      const l = n.value.length > 1;
      return l && t && (t.state.isGroup.value = !0), l;
    }),
    toggleAllSelection: (l) => {
      l.stopPropagation(), t == null || t.store.commit("toggleAllSelection");
    },
    columnRows: n
  };
}
var k1 = W({
  name: "ElTableHeader",
  components: {
    ElCheckbox: Bn
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
    const n = we(), o = se(Lt), r = ne("table"), l = x({}), { onColumnsChange: a, onScrollableChange: s } = Wi(o);
    ke(async () => {
      await ue(), await ue();
      const { prop: _, order: C } = e.defaultSort;
      o == null || o.store.commit("sort", { prop: _, order: C, init: !0 });
    });
    const {
      handleHeaderClick: i,
      handleHeaderContextMenu: u,
      handleMouseDown: d,
      handleMouseMove: f,
      handleMouseOut: p,
      handleSortClick: v,
      handleFilterClick: c
    } = x1(e, t), {
      getHeaderRowStyle: g,
      getHeaderRowClass: y,
      getHeaderCellStyle: m,
      getHeaderCellClass: w
    } = T1(e), { isGroup: S, toggleAllSelection: b, columnRows: T } = P1(e);
    return n.state = {
      onColumnsChange: a,
      onScrollableChange: s
    }, n.filterPanels = l, {
      ns: r,
      filterPanels: l,
      onColumnsChange: a,
      onScrollableChange: s,
      columnRows: T,
      getHeaderRowClass: y,
      getHeaderRowStyle: g,
      getHeaderCellClass: w,
      getHeaderCellStyle: m,
      handleHeaderClick: i,
      handleHeaderContextMenu: u,
      handleMouseDown: d,
      handleMouseMove: f,
      handleMouseOut: p,
      handleSortClick: v,
      handleFilterClick: c,
      isGroup: S,
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
      getHeaderRowStyle: a,
      handleHeaderClick: s,
      handleHeaderContextMenu: i,
      handleMouseDown: u,
      handleMouseMove: d,
      handleSortClick: f,
      handleMouseOut: p,
      store: v,
      $parent: c
    } = this;
    let g = 1;
    return J("thead", {
      class: { [e.is("group")]: t }
    }, n.map((y, m) => J("tr", {
      class: l(m),
      key: m,
      style: a(m)
    }, y.map((w, S) => (w.rowSpan > g && (g = w.rowSpan), J("th", {
      class: r(m, S, y, w),
      colspan: w.colSpan,
      key: `${w.id}-thead`,
      rowspan: w.rowSpan,
      style: o(m, S, y, w),
      onClick: (b) => s(b, w),
      onContextmenu: (b) => i(b, w),
      onMousedown: (b) => u(b, w),
      onMousemove: (b) => d(b, w),
      onMouseout: p
    }, [
      J("div", {
        class: [
          "cell",
          w.filteredValue && w.filteredValue.length > 0 ? "highlight" : ""
        ]
      }, [
        w.renderHeader ? w.renderHeader({
          column: w,
          $index: S,
          store: v,
          _self: c
        }) : w.label,
        w.sortable && J("span", {
          onClick: (b) => f(b, w),
          class: "caret-wrapper"
        }, [
          J("i", {
            onClick: (b) => f(b, w, "ascending"),
            class: "sort-caret ascending"
          }),
          J("i", {
            onClick: (b) => f(b, w, "descending"),
            class: "sort-caret descending"
          })
        ]),
        w.filterable && J(O1, {
          store: v,
          placement: w.filterPlacement || "bottom-start",
          column: w,
          upDataColumn: (b, T) => {
            w[b] = T;
          }
        })
      ])
    ]))))));
  }
});
function A1(e) {
  const t = se(Lt), n = x(""), o = x(J("div")), r = (p, v, c) => {
    var g;
    const y = t, m = vr(p);
    let w;
    const S = (g = y == null ? void 0 : y.vnode.el) == null ? void 0 : g.dataset.prefix;
    m && (w = Ya({
      columns: e.store.states.columns.value
    }, m, S), w && (y == null || y.emit(`cell-${c}`, v, w, m, p))), y == null || y.emit(`row-${c}`, v, w, p);
  }, l = (p, v) => {
    r(p, v, "dblclick");
  }, a = (p, v) => {
    e.store.commit("setCurrentRow", v), r(p, v, "click");
  }, s = (p, v) => {
    r(p, v, "contextmenu");
  }, i = kn((p) => {
    e.store.commit("setHoverRow", p);
  }, 30), u = kn(() => {
    e.store.commit("setHoverRow", null);
  }, 30);
  return {
    handleDoubleClick: l,
    handleClick: a,
    handleContextMenu: s,
    handleMouseEnter: i,
    handleMouseLeave: u,
    handleCellMouseEnter: (p, v, c) => {
      var g;
      const y = t, m = vr(p), w = (g = y == null ? void 0 : y.vnode.el) == null ? void 0 : g.dataset.prefix;
      if (m) {
        const C = Ya({
          columns: e.store.states.columns.value
        }, m, w), $ = y.hoverState = { cell: m, column: C, row: v };
        y == null || y.emit("cell-mouse-enter", $.row, $.column, $.cell, p);
      }
      if (!c)
        return;
      const S = p.target.querySelector(".cell");
      if (!(_o(S, `${w}-tooltip`) && S.childNodes.length))
        return;
      const b = document.createRange();
      b.setStart(S, 0), b.setEnd(S, S.childNodes.length);
      const T = Math.round(b.getBoundingClientRect().width), _ = (Number.parseInt(ln(S, "paddingLeft"), 10) || 0) + (Number.parseInt(ln(S, "paddingRight"), 10) || 0);
      (T + _ > S.offsetWidth || S.scrollWidth > S.offsetWidth) && u1(t == null ? void 0 : t.refs.tableWrapper, m, m.innerText || m.textContent, c);
    },
    handleCellMouseLeave: (p) => {
      if (!vr(p))
        return;
      const c = t == null ? void 0 : t.hoverState;
      t == null || t.emit("cell-mouse-leave", c == null ? void 0 : c.row, c == null ? void 0 : c.column, c == null ? void 0 : c.cell, p);
    },
    tooltipContent: n,
    tooltipTrigger: o
  };
}
function L1(e) {
  const t = se(Lt), n = ne("table");
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
      const v = t == null ? void 0 : t.props.cellStyle;
      let c = v ?? {};
      typeof v == "function" && (c = v.call(null, {
        rowIndex: u,
        columnIndex: d,
        row: f,
        column: p
      }));
      const g = $l(d, e == null ? void 0 : e.fixed, e.store);
      return zn(g, "left"), zn(g, "right"), Object.assign({}, c, g);
    },
    getCellClass: (u, d, f, p, v) => {
      const c = Tl(n.b(), d, e == null ? void 0 : e.fixed, e.store, void 0, v), g = [p.id, p.align, p.className, ...c], y = t == null ? void 0 : t.props.cellClassName;
      return typeof y == "string" ? g.push(y) : typeof y == "function" && g.push(y.call(null, {
        rowIndex: u,
        columnIndex: d,
        row: f,
        column: p
      })), g.push(n.e("cell")), g.filter((m) => Boolean(m)).join(" ");
    },
    getSpan: (u, d, f, p) => {
      let v = 1, c = 1;
      const g = t == null ? void 0 : t.props.spanMethod;
      if (typeof g == "function") {
        const y = g({
          row: u,
          column: d,
          rowIndex: f,
          columnIndex: p
        });
        Array.isArray(y) ? (v = y[0], c = y[1]) : typeof y == "object" && (v = y.rowspan, c = y.colspan);
      }
      return { rowspan: v, colspan: c };
    },
    getColspanRealWidth: (u, d, f) => {
      if (d < 1)
        return u[f].realWidth;
      const p = u.map(({ realWidth: v, width: c }) => v || c).slice(f, f + d);
      return Number(p.reduce((v, c) => Number(v) + Number(c), -1));
    }
  };
}
function M1(e) {
  const t = se(Lt), n = ne("table"), {
    handleDoubleClick: o,
    handleClick: r,
    handleContextMenu: l,
    handleMouseEnter: a,
    handleMouseLeave: s,
    handleCellMouseEnter: i,
    handleCellMouseLeave: u,
    tooltipContent: d,
    tooltipTrigger: f
  } = A1(e), {
    getRowStyle: p,
    getRowClass: v,
    getCellStyle: c,
    getCellClass: g,
    getSpan: y,
    getColspanRealWidth: m
  } = L1(e), w = O(() => e.store.states.columns.value.findIndex(({ type: C }) => C === "default")), S = (C, $) => {
    const L = t.props.rowKey;
    return L ? Me(C, L) : $;
  }, b = (C, $, L, I = !1) => {
    const { tooltipEffect: D, tooltipOptions: B, store: K } = e, { indent: ee, columns: F } = K.states, Y = v(C, $);
    let oe = !0;
    return L && (Y.push(n.em("row", `level-${L.level}`)), oe = L.display), J("tr", {
      style: [oe ? null : {
        display: "none"
      }, p(C, $)],
      class: Y,
      key: S(C, $),
      onDblclick: (A) => o(A, C),
      onClick: (A) => r(A, C),
      onContextmenu: (A) => l(A, C),
      onMouseenter: () => a($),
      onMouseleave: s
    }, F.value.map((A, q) => {
      const { rowspan: ce, colspan: de } = y(C, A, $, q);
      if (!ce || !de)
        return null;
      const me = { ...A };
      me.realWidth = m(F.value, de, q);
      const he = {
        store: e.store,
        _self: e.context || t,
        column: me,
        row: C,
        $index: $,
        cellIndex: q,
        expanded: I
      };
      q === w.value && L && (he.treeNode = {
        indent: L.level * ee.value,
        level: L.level
      }, typeof L.expanded == "boolean" && (he.treeNode.expanded = L.expanded, "loading" in L && (he.treeNode.loading = L.loading), "noLazyChildren" in L && (he.treeNode.noLazyChildren = L.noLazyChildren)));
      const re = `${$},${q}`, be = me.columnKey || me.rawColumnKey || "", Se = T(q, A, he), le = A.showOverflowTooltip && $s({
        effect: D
      }, B, A.showOverflowTooltip);
      return J("td", {
        style: c($, q, C, A),
        class: g($, q, C, A, de - 1),
        key: `${be}${re}`,
        rowspan: ce,
        colspan: de,
        onMouseenter: (xe) => i(xe, C, le),
        onMouseleave: u
      }, [Se]);
    }));
  }, T = (C, $, L) => $.renderCell(L);
  return {
    wrappedRowRender: (C, $) => {
      const L = e.store, { isRowExpanded: I, assertRowKey: D } = L, { treeData: B, lazyTreeNodeMap: K, childrenColumnName: ee, rowKey: F } = L.states, Y = L.states.columns.value;
      if (Y.some(({ type: H }) => H === "expand")) {
        const H = I(C), A = b(C, $, void 0, H), q = t.renderExpanded;
        return H ? q ? [
          [
            A,
            J("tr", {
              key: `expanded-row__${A.key}`
            }, [
              J("td", {
                colspan: Y.length,
                class: `${n.e("cell")} ${n.e("expanded-cell")}`
              }, [q({ row: C, $index: $, store: L, expanded: H })])
            ])
          ]
        ] : (console.error("[Element Error]renderExpanded is required."), A) : [[A]];
      } else if (Object.keys(B.value).length) {
        D();
        const H = Me(C, F.value);
        let A = B.value[H], q = null;
        A && (q = {
          expanded: A.expanded,
          level: A.level,
          display: !0
        }, typeof A.lazy == "boolean" && (typeof A.loaded == "boolean" && A.loaded && (q.noLazyChildren = !(A.children && A.children.length)), q.loading = A.loading));
        const ce = [b(C, $, q)];
        if (A) {
          let de = 0;
          const me = (re, be) => {
            re && re.length && be && re.forEach((Se) => {
              const le = {
                display: be.display && be.expanded,
                level: be.level + 1,
                expanded: !1,
                noLazyChildren: !1,
                loading: !1
              }, xe = Me(Se, F.value);
              if (xe == null)
                throw new Error("For nested data item, row-key is required.");
              if (A = { ...B.value[xe] }, A && (le.expanded = A.expanded, A.level = A.level || le.level, A.display = !!(A.expanded && le.display), typeof A.lazy == "boolean" && (typeof A.loaded == "boolean" && A.loaded && (le.noLazyChildren = !(A.children && A.children.length)), le.loading = A.loading)), de++, ce.push(b(Se, $ + de, le)), A) {
                const Be = K.value[xe] || Se[ee.value];
                me(Be, A);
              }
            });
          };
          A.display = !0;
          const he = K.value[H] || C[ee.value];
          me(he, A);
        }
        return ce;
      } else
        return b(C, $, void 0);
    },
    tooltipContent: d,
    tooltipTrigger: f
  };
}
const R1 = {
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
var I1 = W({
  name: "ElTableBody",
  props: R1,
  setup(e) {
    const t = we(), n = se(Lt), o = ne("table"), { wrappedRowRender: r, tooltipContent: l, tooltipTrigger: a } = M1(e), { onColumnsChange: s, onScrollableChange: i } = Wi(n);
    return U(e.store.states.hoverRow, (u, d) => {
      if (!e.store.states.isComplex.value || !_e)
        return;
      let f = window.requestAnimationFrame;
      f || (f = (p) => window.setTimeout(p, 16)), f(() => {
        const p = t == null ? void 0 : t.vnode.el, v = Array.from((p == null ? void 0 : p.children) || []).filter((y) => y == null ? void 0 : y.classList.contains(`${o.e("row")}`)), c = v[d], g = v[u];
        c && hn(c, "hover-row"), g && Bo(g, "hover-row");
      });
    }), Do(() => {
      var u;
      (u = Bt) == null || u();
    }), {
      ns: o,
      onColumnsChange: s,
      onScrollableChange: i,
      wrappedRowRender: r,
      tooltipContent: l,
      tooltipTrigger: a
    };
  },
  render() {
    const { wrappedRowRender: e, store: t } = this, n = t.states.data.value || [];
    return J("tbody", {}, [
      n.reduce((o, r) => o.concat(e(r, o.length)), [])
    ]);
  }
});
function Pl(e) {
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
  return J("colgroup", {}, n.map((r) => J("col", o(r))));
}
Pl.props = ["columns", "tableLayout"];
function N1() {
  const e = se(Lt), t = e == null ? void 0 : e.store, n = O(() => t.states.fixedLeafColumnsLength.value), o = O(() => t.states.rightFixedColumns.value.length), r = O(() => t.states.columns.value.length), l = O(() => t.states.fixedColumns.value.length), a = O(() => t.states.rightFixedColumns.value.length);
  return {
    leftFixedLeafCount: n,
    rightFixedLeafCount: o,
    columnsCount: r,
    leftFixedCount: l,
    rightFixedCount: a,
    columns: t.states.columns
  };
}
function F1(e) {
  const { columns: t } = N1(), n = ne("table");
  return {
    getCellClasses: (l, a) => {
      const s = l[a], i = [
        n.e("cell"),
        s.id,
        s.align,
        s.labelClassName,
        ...Tl(n.b(), a, s.fixed, e.store)
      ];
      return s.className && i.push(s.className), s.children || i.push(n.is("leaf")), i;
    },
    getCellStyles: (l, a) => {
      const s = $l(a, l.fixed, e.store);
      return zn(s, "left"), zn(s, "right"), s;
    },
    columns: t
  };
}
var B1 = W({
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
    const { getCellClasses: t, getCellStyles: n, columns: o } = F1(e);
    return {
      ns: ne("table"),
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
    } = this, a = this.store.states.data.value;
    let s = [];
    return o ? s = o({
      columns: e,
      data: a
    }) : e.forEach((i, u) => {
      if (u === 0) {
        s[u] = r;
        return;
      }
      const d = a.map((c) => Number(c[i.property])), f = [];
      let p = !0;
      d.forEach((c) => {
        if (!Number.isNaN(+c)) {
          p = !1;
          const g = `${c}`.split(".")[1];
          f.push(g ? g.length : 0);
        }
      });
      const v = Math.max.apply(null, f);
      p ? s[u] = "" : s[u] = d.reduce((c, g) => {
        const y = Number(g);
        return Number.isNaN(+y) ? c : Number.parseFloat((c + g).toFixed(Math.min(v, 20)));
      }, 0);
    }), J("table", {
      class: l.e("footer"),
      cellspacing: "0",
      cellpadding: "0",
      border: "0"
    }, [
      Pl({
        columns: e
      }),
      J("tbody", [
        J("tr", {}, [
          ...e.map((i, u) => J("td", {
            key: u,
            colspan: i.colSpan,
            rowspan: i.rowSpan,
            class: n(e, u),
            style: t(i, u)
          }, [
            J("div", {
              class: ["cell", i.labelClassName]
            }, [s[u]])
          ]))
        ])
      ])
    ]);
  }
});
function z1(e) {
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
function H1(e, t, n, o) {
  const r = x(!1), l = x(null), a = x(!1), s = (H) => {
    a.value = H;
  }, i = x({
    width: null,
    height: null,
    headerHeight: null
  }), u = x(!1), d = {
    display: "inline-block",
    verticalAlign: "middle"
  }, f = x(), p = x(0), v = x(0), c = x(0), g = x(0);
  Tn(() => {
    t.setHeight(e.height);
  }), Tn(() => {
    t.setMaxHeight(e.maxHeight);
  }), U(() => [e.currentRowKey, n.states.rowKey], ([H, A]) => {
    !h(A) || !h(H) || n.setCurrentRowKey(`${H}`);
  }, {
    immediate: !0
  }), U(() => e.data, (H) => {
    o.store.commit("setData", H);
  }, {
    immediate: !0,
    deep: !0
  }), Tn(() => {
    e.expandRowKeys && n.setExpandRowKeysAdapter(e.expandRowKeys);
  });
  const y = () => {
    o.store.commit("setHoverRow", null), o.hoverState && (o.hoverState = null);
  }, m = (H, A) => {
    const { pixelX: q, pixelY: ce } = A;
    Math.abs(q) >= Math.abs(ce) && (o.refs.bodyWrapper.scrollLeft += A.pixelX / 5);
  }, w = O(() => e.height || e.maxHeight || n.states.fixedColumns.value.length > 0 || n.states.rightFixedColumns.value.length > 0), S = O(() => ({
    width: t.bodyWidth.value ? `${t.bodyWidth.value}px` : ""
  })), b = () => {
    w.value && t.updateElsHeight(), t.updateColumnsWidth(), requestAnimationFrame($);
  };
  ke(async () => {
    await ue(), n.updateColumns(), L(), requestAnimationFrame(b);
    const H = o.vnode.el, A = o.refs.headerWrapper;
    e.flexible && H && H.parentElement && (H.parentElement.style.minWidth = "0"), i.value = {
      width: f.value = H.offsetWidth,
      height: H.offsetHeight,
      headerHeight: e.showHeader && A ? A.offsetHeight : null
    }, n.states.columns.value.forEach((q) => {
      q.filteredValue && q.filteredValue.length && o.store.commit("filterChange", {
        column: q,
        values: q.filteredValue,
        silent: !0
      });
    }), o.$ready = !0;
  });
  const T = (H, A) => {
    if (!H)
      return;
    const q = Array.from(H.classList).filter((ce) => !ce.startsWith("is-scrolling-"));
    q.push(t.scrollX.value ? A : "is-scrolling-none"), H.className = q.join(" ");
  }, _ = (H) => {
    const { tableWrapper: A } = o.refs;
    T(A, H);
  }, C = (H) => {
    const { tableWrapper: A } = o.refs;
    return !!(A && A.classList.contains(H));
  }, $ = function() {
    if (!o.refs.scrollBarRef)
      return;
    if (!t.scrollX.value) {
      const re = "is-scrolling-none";
      C(re) || _(re);
      return;
    }
    const H = o.refs.scrollBarRef.wrapRef;
    if (!H)
      return;
    const { scrollLeft: A, offsetWidth: q, scrollWidth: ce } = H, { headerWrapper: de, footerWrapper: me } = o.refs;
    de && (de.scrollLeft = A), me && (me.scrollLeft = A);
    const he = ce - q - 1;
    A >= he ? _("is-scrolling-right") : _(A === 0 ? "is-scrolling-left" : "is-scrolling-middle");
  }, L = () => {
    o.refs.scrollBarRef && (o.refs.scrollBarRef.wrapRef && Zt(o.refs.scrollBarRef.wrapRef, "scroll", $, {
      passive: !0
    }), e.fit ? Ln(o.vnode.el, I) : Zt(window, "resize", I), Ln(o.refs.bodyWrapper, () => {
      var H, A;
      I(), (A = (H = o.refs) == null ? void 0 : H.scrollBarRef) == null || A.update();
    }));
  }, I = () => {
    var H, A, q;
    const ce = o.vnode.el;
    if (!o.$ready || !ce)
      return;
    let de = !1;
    const {
      width: me,
      height: he,
      headerHeight: re
    } = i.value, be = f.value = ce.offsetWidth;
    me !== be && (de = !0);
    const Se = ce.offsetHeight;
    (e.height || w.value) && he !== Se && (de = !0);
    const le = e.tableLayout === "fixed" ? o.refs.headerWrapper : (H = o.refs.tableHeaderRef) == null ? void 0 : H.$el;
    e.showHeader && (le == null ? void 0 : le.offsetHeight) !== re && (de = !0), p.value = ((A = o.refs.tableWrapper) == null ? void 0 : A.scrollHeight) || 0, c.value = (le == null ? void 0 : le.scrollHeight) || 0, g.value = ((q = o.refs.footerWrapper) == null ? void 0 : q.offsetHeight) || 0, v.value = p.value - c.value - g.value, de && (i.value = {
      width: be,
      height: Se,
      headerHeight: e.showHeader && (le == null ? void 0 : le.offsetHeight) || 0
    }, b());
  }, D = gn(), B = O(() => {
    const { bodyWidth: H, scrollY: A, gutterWidth: q } = t;
    return H.value ? `${H.value - (A.value ? q : 0)}px` : "";
  }), K = O(() => e.maxHeight ? "fixed" : e.tableLayout), ee = O(() => {
    if (e.data && e.data.length)
      return null;
    let H = "100%";
    e.height && v.value && (H = `${v.value}px`);
    const A = f.value;
    return {
      width: A ? `${A}px` : "",
      height: H
    };
  }), F = O(() => e.height ? {
    height: Number.isNaN(Number(e.height)) ? e.height : `${e.height}px`
  } : e.maxHeight ? {
    maxHeight: Number.isNaN(Number(e.maxHeight)) ? e.maxHeight : `${e.maxHeight}px`
  } : {}), Y = O(() => {
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
    setDragVisible: s,
    isGroup: u,
    handleMouseLeave: y,
    handleHeaderFooterMousewheel: m,
    tableSize: D,
    emptyBlockStyle: ee,
    handleFixedMousewheel: (H, A) => {
      const q = o.refs.bodyWrapper;
      if (Math.abs(A.spinY) > 0) {
        const ce = q.scrollTop;
        A.pixelY < 0 && ce !== 0 && H.preventDefault(), A.pixelY > 0 && q.scrollHeight - q.clientHeight > ce && H.preventDefault(), q.scrollTop += Math.ceil(A.pixelY / 5);
      } else
        q.scrollLeft += Math.ceil(A.pixelX / 5);
    },
    resizeProxyVisible: a,
    bodyWidth: B,
    resizeState: i,
    doLayout: b,
    tableBodyStyles: S,
    tableLayout: K,
    scrollbarViewStyle: d,
    tableInnerStyle: F,
    scrollbarStyle: Y
  };
}
function D1(e) {
  const t = x(), n = () => {
    const r = e.vnode.el.querySelector(".hidden-columns"), l = { childList: !0, subtree: !0 }, a = e.store.states.updateOrderFns;
    t.value = new MutationObserver(() => {
      a.forEach((s) => s());
    }), t.value.observe(r, l);
  };
  ke(() => {
    n();
  }), Do(() => {
    var o;
    (o = t.value) == null || o.disconnect();
  });
}
var W1 = {
  data: {
    type: Array,
    default: () => []
  },
  size: fo,
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
const V1 = () => {
  const e = x(), t = (l, a) => {
    const s = e.value;
    s && s.scrollTo(l, a);
  }, n = (l, a) => {
    const s = e.value;
    s && $e(a) && ["Top", "Left"].includes(l) && s[`setScroll${l}`](a);
  };
  return {
    scrollBarRef: e,
    scrollTo: t,
    setScrollTop: (l) => n("Top", l),
    setScrollLeft: (l) => n("Left", l)
  };
};
let j1 = 1;
const K1 = W({
  name: "ElTable",
  directives: {
    Mousewheel: O0
  },
  components: {
    TableHeader: k1,
    TableBody: I1,
    TableFooter: B1,
    ElScrollbar: wl,
    hColgroup: Pl
  },
  props: W1,
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
    const { t } = Ut(), n = ne("table"), o = we();
    rt(Lt, o);
    const r = g1(o, e);
    o.store = r;
    const l = new b1({
      store: o.store,
      table: o,
      fit: e.fit,
      showHeader: e.showHeader
    });
    o.layout = l;
    const a = O(() => (r.states.data.value || []).length === 0), {
      setCurrentRow: s,
      getSelectionRows: i,
      toggleRowSelection: u,
      clearSelection: d,
      clearFilter: f,
      toggleAllSelection: p,
      toggleRowExpansion: v,
      clearSort: c,
      sort: g
    } = z1(r), {
      isHidden: y,
      renderExpanded: m,
      setDragVisible: w,
      isGroup: S,
      handleMouseLeave: b,
      handleHeaderFooterMousewheel: T,
      tableSize: _,
      emptyBlockStyle: C,
      handleFixedMousewheel: $,
      resizeProxyVisible: L,
      bodyWidth: I,
      resizeState: D,
      doLayout: B,
      tableBodyStyles: K,
      tableLayout: ee,
      scrollbarViewStyle: F,
      tableInnerStyle: Y,
      scrollbarStyle: oe
    } = H1(e, l, r, o), { scrollBarRef: H, scrollTo: A, setScrollLeft: q, setScrollTop: ce } = V1(), de = kn(B, 50), me = `${n.namespace.value}-table_${j1++}`;
    o.tableId = me, o.state = {
      isGroup: S,
      resizeState: D,
      doLayout: B,
      debouncedUpdateLayout: de
    };
    const he = O(() => e.sumText || t("el.table.sumText")), re = O(() => e.emptyText || t("el.table.emptyText"));
    return D1(o), {
      ns: n,
      layout: l,
      store: r,
      handleHeaderFooterMousewheel: T,
      handleMouseLeave: b,
      tableId: me,
      tableSize: _,
      isHidden: y,
      isEmpty: a,
      renderExpanded: m,
      resizeProxyVisible: L,
      resizeState: D,
      isGroup: S,
      bodyWidth: I,
      tableBodyStyles: K,
      emptyBlockStyle: C,
      debouncedUpdateLayout: de,
      handleFixedMousewheel: $,
      setCurrentRow: s,
      getSelectionRows: i,
      toggleRowSelection: u,
      clearSelection: d,
      clearFilter: f,
      toggleAllSelection: p,
      toggleRowExpansion: v,
      clearSort: c,
      doLayout: B,
      sort: g,
      t,
      setDragVisible: w,
      context: o,
      computedSumText: he,
      computedEmptyText: re,
      tableLayout: ee,
      scrollbarViewStyle: F,
      tableInnerStyle: Y,
      scrollbarStyle: oe,
      scrollBarRef: H,
      scrollTo: A,
      setScrollLeft: q,
      setScrollTop: ce
    };
  }
}), U1 = ["data-prefix"], q1 = {
  ref: "hiddenColumns",
  class: "hidden-columns"
};
function G1(e, t, n, o, r, l) {
  const a = Te("hColgroup"), s = Te("table-header"), i = Te("table-body"), u = Te("el-scrollbar"), d = Te("table-footer"), f = Wr("mousewheel");
  return P(), N("div", {
    ref: "tableWrapper",
    class: M([
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
    style: Oe(e.style),
    "data-prefix": e.ns.namespace.value,
    onMouseleave: t[0] || (t[0] = (p) => e.handleMouseLeave())
  }, [
    V("div", {
      class: M(e.ns.e("inner-wrapper")),
      style: Oe(e.tableInnerStyle)
    }, [
      V("div", q1, [
        ae(e.$slots, "default")
      ], 512),
      e.showHeader && e.tableLayout === "fixed" ? Pe((P(), N("div", {
        key: 0,
        ref: "headerWrapper",
        class: M(e.ns.e("header-wrapper"))
      }, [
        V("table", {
          ref: "tableHeader",
          class: M(e.ns.e("header")),
          style: Oe(e.tableBodyStyles),
          border: "0",
          cellpadding: "0",
          cellspacing: "0"
        }, [
          ge(a, {
            columns: e.store.states.columns.value,
            "table-layout": e.tableLayout
          }, null, 8, ["columns", "table-layout"]),
          ge(s, {
            ref: "tableHeaderRef",
            border: e.border,
            "default-sort": e.defaultSort,
            store: e.store,
            onSetDragVisible: e.setDragVisible
          }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])
        ], 6)
      ], 2)), [
        [f, e.handleHeaderFooterMousewheel]
      ]) : G("v-if", !0),
      V("div", {
        ref: "bodyWrapper",
        class: M(e.ns.e("body-wrapper"))
      }, [
        ge(u, {
          ref: "scrollBarRef",
          "view-style": e.scrollbarViewStyle,
          "wrap-style": e.scrollbarStyle,
          always: e.scrollbarAlwaysOn
        }, {
          default: Z(() => [
            V("table", {
              ref: "tableBody",
              class: M(e.ns.e("body")),
              cellspacing: "0",
              cellpadding: "0",
              border: "0",
              style: Oe({
                width: e.bodyWidth,
                tableLayout: e.tableLayout
              })
            }, [
              ge(a, {
                columns: e.store.states.columns.value,
                "table-layout": e.tableLayout
              }, null, 8, ["columns", "table-layout"]),
              e.showHeader && e.tableLayout === "auto" ? (P(), Q(s, {
                key: 0,
                ref: "tableHeaderRef",
                border: e.border,
                "default-sort": e.defaultSort,
                store: e.store,
                onSetDragVisible: e.setDragVisible
              }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])) : G("v-if", !0),
              ge(i, {
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
            e.isEmpty ? (P(), N("div", {
              key: 0,
              ref: "emptyBlock",
              style: Oe(e.emptyBlockStyle),
              class: M(e.ns.e("empty-block"))
            }, [
              V("span", {
                class: M(e.ns.e("empty-text"))
              }, [
                ae(e.$slots, "empty", {}, () => [
                  Vo(ye(e.computedEmptyText), 1)
                ])
              ], 2)
            ], 6)) : G("v-if", !0),
            e.$slots.append ? (P(), N("div", {
              key: 1,
              ref: "appendWrapper",
              class: M(e.ns.e("append-wrapper"))
            }, [
              ae(e.$slots, "append")
            ], 2)) : G("v-if", !0)
          ]),
          _: 3
        }, 8, ["view-style", "wrap-style", "always"])
      ], 2),
      e.showSummary ? Pe((P(), N("div", {
        key: 1,
        ref: "footerWrapper",
        class: M(e.ns.e("footer-wrapper"))
      }, [
        ge(d, {
          border: e.border,
          "default-sort": e.defaultSort,
          store: e.store,
          style: Oe(e.tableBodyStyles),
          "sum-text": e.computedSumText,
          "summary-method": e.summaryMethod
        }, null, 8, ["border", "default-sort", "store", "style", "sum-text", "summary-method"])
      ], 2)), [
        [Dt, !e.isEmpty],
        [f, e.handleHeaderFooterMousewheel]
      ]) : G("v-if", !0),
      e.border || e.isGroup ? (P(), N("div", {
        key: 2,
        class: M(e.ns.e("border-left-patch"))
      }, null, 2)) : G("v-if", !0)
    ], 6),
    Pe(V("div", {
      ref: "resizeProxy",
      class: M(e.ns.e("column-resize-proxy"))
    }, null, 2), [
      [Dt, e.resizeProxyVisible]
    ])
  ], 46, U1);
}
var Y1 = /* @__PURE__ */ pe(K1, [["render", G1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/table.vue"]]);
const X1 = {
  selection: "table-column--selection",
  expand: "table__expand-column"
}, Q1 = {
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
}, Z1 = (e) => X1[e] || "", J1 = {
  selection: {
    renderHeader({ store: e }) {
      function t() {
        return e.states.data.value && e.states.data.value.length === 0;
      }
      return J(Bn, {
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
      return J(Bn, {
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
      return typeof o == "number" ? n = t + o : typeof o == "function" && (n = o(t)), J("div", {}, [n]);
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
      return n && r.push(o.em("expand-icon", "expanded")), J("div", {
        class: r,
        onClick: function(a) {
          a.stopPropagation(), t.toggleRowExpansion(e);
        }
      }, {
        default: () => [
          J(je, null, {
            default: () => [J(nl)]
          })
        ]
      });
    },
    sortable: !1,
    resizable: !1
  }
};
function ew({
  row: e,
  column: t,
  $index: n
}) {
  var o;
  const r = t.property, l = r && hv(e, r).value;
  return t && t.formatter ? t.formatter(e, t, l, n) : ((o = l == null ? void 0 : l.toString) == null ? void 0 : o.call(l)) || "";
}
function tw({
  row: e,
  treeNode: t,
  store: n
}, o = !1) {
  const { ns: r } = n;
  if (!t)
    return o ? [
      J("span", {
        class: r.e("placeholder")
      })
    ] : null;
  const l = [], a = function(s) {
    s.stopPropagation(), !t.loading && n.loadOrToggle(e);
  };
  if (t.indent && l.push(J("span", {
    class: r.e("indent"),
    style: { "padding-left": `${t.indent}px` }
  })), typeof t.expanded == "boolean" && !t.noLazyChildren) {
    const s = [
      r.e("expand-icon"),
      t.expanded ? r.em("expand-icon", "expanded") : ""
    ];
    let i = nl;
    t.loading && (i = rl), l.push(J("div", {
      class: s,
      onClick: a
    }, {
      default: () => [
        J(je, { class: { [r.is("loading")]: t.loading } }, {
          default: () => [J(i)]
        })
      ]
    }));
  } else
    l.push(J("span", {
      class: r.e("placeholder")
    }));
  return l;
}
function Za(e, t) {
  return e.reduce((n, o) => (n[o] = o, n), t);
}
function nw(e, t) {
  const n = we();
  return {
    registerComplexWatchers: () => {
      const l = ["fixed"], a = {
        realWidth: "width",
        realMinWidth: "minWidth"
      }, s = Za(l, a);
      Object.keys(s).forEach((i) => {
        const u = a[i];
        pn(t, u) && U(() => t[u], (d) => {
          let f = d;
          u === "width" && i === "realWidth" && (f = xl(d)), u === "minWidth" && i === "realMinWidth" && (f = Fi(d)), n.columnConfig.value[u] = f, n.columnConfig.value[i] = f;
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
      ], a = {
        property: "prop",
        align: "realAlign",
        headerAlign: "realHeaderAlign"
      }, s = Za(l, a);
      Object.keys(s).forEach((i) => {
        const u = a[i];
        pn(t, u) && U(() => t[u], (d) => {
          n.columnConfig.value[i] = d;
        });
      });
    }
  };
}
function ow(e, t, n) {
  const o = we(), r = x(""), l = x(!1), a = x(), s = x(), i = ne("table");
  Tn(() => {
    a.value = e.align ? `is-${e.align}` : null, a.value;
  }), Tn(() => {
    s.value = e.headerAlign ? `is-${e.headerAlign}` : a.value, s.value;
  });
  const u = O(() => {
    let b = o.vnode.vParent || o.parent;
    for (; b && !b.tableId && !b.columnId; )
      b = b.vnode.vParent || b.parent;
    return b;
  }), d = O(() => {
    const { store: b } = o.parent;
    if (!b)
      return !1;
    const { treeData: T } = b.states, _ = T.value;
    return _ && Object.keys(_).length > 0;
  }), f = x(xl(e.width)), p = x(Fi(e.minWidth)), v = (b) => (f.value && (b.width = f.value), p.value && (b.minWidth = p.value), !f.value && p.value && (b.width = void 0), b.minWidth || (b.minWidth = 80), b.realWidth = Number(b.width === void 0 ? b.minWidth : b.width), b), c = (b) => {
    const T = b.type, _ = J1[T] || {};
    Object.keys(_).forEach(($) => {
      const L = _[$];
      $ !== "className" && L !== void 0 && (b[$] = L);
    });
    const C = Z1(T);
    if (C) {
      const $ = `${h(i.namespace)}-${C}`;
      b.className = b.className ? `${b.className} ${$}` : $;
    }
    return b;
  }, g = (b) => {
    Array.isArray(b) ? b.forEach((_) => T(_)) : T(b);
    function T(_) {
      var C;
      ((C = _ == null ? void 0 : _.type) == null ? void 0 : C.name) === "ElTableColumn" && (_.vParent = o);
    }
  };
  return {
    columnId: r,
    realAlign: a,
    isSubColumn: l,
    realHeaderAlign: s,
    columnOrTableParent: u,
    setColumnWidth: v,
    setColumnForcedProps: c,
    setColumnRenders: (b) => {
      e.renderHeader ? Fe("TableColumn", "Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.") : b.type !== "selection" && (b.renderHeader = (_) => {
        o.columnConfig.value.label;
        const C = t.header;
        return C ? C(_) : b.label;
      });
      let T = b.renderCell;
      return b.type === "expand" ? (b.renderCell = (_) => J("div", {
        class: "cell"
      }, [T(_)]), n.value.renderExpanded = (_) => t.default ? t.default(_) : t.default) : (T = T || ew, b.renderCell = (_) => {
        let C = null;
        if (t.default) {
          const D = t.default(_);
          C = D.some((B) => B.type !== rs) ? D : T(_);
        } else
          C = T(_);
        const $ = d.value && _.cellIndex === 0 && _.column.type !== "selection", L = tw(_, $), I = {
          class: "cell",
          style: {}
        };
        return b.showOverflowTooltip && (I.class = `${I.class} ${h(i.namespace)}-tooltip`, I.style = {
          width: `${(_.column.realWidth || Number(_.column.width)) - 1}px`
        }), g(C), J("div", I, [L, C]);
      }), b;
    },
    getPropsData: (...b) => b.reduce((T, _) => (Array.isArray(_) && _.forEach((C) => {
      T[C] = e[C];
    }), T), {}),
    getColumnElIndex: (b, T) => Array.prototype.indexOf.call(b, T),
    updateColumnOrder: () => {
      n.value.store.commit("updateColumnOrder", o.columnConfig.value);
    }
  };
}
var rw = {
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
let lw = 1;
var ji = W({
  name: "ElTableColumn",
  components: {
    ElCheckbox: Bn
  },
  props: rw,
  setup(e, { slots: t }) {
    const n = we(), o = x({}), r = O(() => {
      let S = n.parent;
      for (; S && !S.tableId; )
        S = S.parent;
      return S;
    }), { registerNormalWatchers: l, registerComplexWatchers: a } = nw(r, e), {
      columnId: s,
      isSubColumn: i,
      realHeaderAlign: u,
      columnOrTableParent: d,
      setColumnWidth: f,
      setColumnForcedProps: p,
      setColumnRenders: v,
      getPropsData: c,
      getColumnElIndex: g,
      realAlign: y,
      updateColumnOrder: m
    } = ow(e, t, r), w = d.value;
    s.value = `${w.tableId || w.columnId}_column_${lw++}`, Dr(() => {
      i.value = r.value !== w;
      const S = e.type || "default", b = e.sortable === "" ? !0 : e.sortable, T = {
        ...Q1[S],
        id: s.value,
        type: S,
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
      let I = c([
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
      I = l1(T, I), I = s1(v, f, p)(I), o.value = I, l(), a();
    }), ke(() => {
      var S;
      const b = d.value, T = i.value ? b.vnode.el.children : (S = b.refs.hiddenColumns) == null ? void 0 : S.children, _ = () => g(T || [], n.vnode.el);
      o.value.getColumnIndex = _, _() > -1 && r.value.store.commit("insertColumn", o.value, i.value ? b.columnConfig.value : null, m);
    }), yt(() => {
      r.value.store.commit("removeColumn", o.value, i.value ? w.columnConfig.value : null, m);
    }), n.columnId = s.value, n.columnConfig = o;
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
        for (const a of o)
          ((n = a.type) == null ? void 0 : n.name) === "ElTableColumn" || a.shapeFlag & 2 ? r.push(a) : a.type === Ke && Array.isArray(a.children) && a.children.forEach((s) => {
            (s == null ? void 0 : s.patchFlag) !== 1024 && !ot(s == null ? void 0 : s.children) && r.push(s);
          });
      return J("div", r);
    } catch {
      return J("div", []);
    }
  }
});
const aw = Ct(Y1, {
  TableColumn: ji
}), sw = Wn(ji);
function iw(e) {
  let t;
  const n = ne("loading"), o = x(!1), r = Wt({
    ...e,
    originalPosition: "",
    originalOverflow: "",
    visible: !1
  });
  function l(v) {
    r.text = v;
  }
  function a() {
    const v = r.parent;
    if (!v.vLoadingAddClassList) {
      let c = v.getAttribute("loading-number");
      c = Number.parseInt(c) - 1, c ? v.setAttribute("loading-number", c.toString()) : (hn(v, n.bm("parent", "relative")), v.removeAttribute("loading-number")), hn(v, n.bm("parent", "hidden"));
    }
    s(), f.unmount();
  }
  function s() {
    var v, c;
    (c = (v = p.$el) == null ? void 0 : v.parentNode) == null || c.removeChild(p.$el);
  }
  function i() {
    var v;
    e.beforeClose && !e.beforeClose() || (o.value = !0, clearTimeout(t), t = window.setTimeout(u, 400), r.visible = !1, (v = e.closed) == null || v.call(e));
  }
  function u() {
    if (!o.value)
      return;
    const v = r.parent;
    o.value = !1, v.vLoadingAddClassList = void 0, a();
  }
  const f = ru({
    name: "ElLoading",
    setup() {
      return () => {
        const v = r.spinner || r.svg, c = J("svg", {
          class: "circular",
          viewBox: r.svgViewBox ? r.svgViewBox : "0 0 50 50",
          ...v ? { innerHTML: v } : {}
        }, [
          J("circle", {
            class: "path",
            cx: "25",
            cy: "25",
            r: "20",
            fill: "none"
          })
        ]), g = r.text ? J("p", { class: n.b("text") }, [r.text]) : void 0;
        return J(so, {
          name: n.b("fade"),
          onAfterLeave: u
        }, {
          default: Z(() => [
            Pe(ge("div", {
              style: {
                backgroundColor: r.background || ""
              },
              class: [
                n.b("mask"),
                r.customClass,
                r.fullscreen ? "is-fullscreen" : ""
              ]
            }, [
              J("div", {
                class: n.b("spinner")
              }, [c, g])
            ]), [[Dt, r.visible]])
          ])
        });
      };
    }
  }), p = f.mount(document.createElement("div"));
  return {
    ...Hn(r),
    setText: l,
    removeElLoadingChild: s,
    close: i,
    handleAfterLeave: u,
    vm: p,
    get $el() {
      return p.$el;
    }
  };
}
let Eo;
const uw = function(e = {}) {
  if (!_e)
    return;
  const t = cw(e);
  if (t.fullscreen && Eo)
    return Eo;
  const n = iw({
    ...t,
    closed: () => {
      var r;
      (r = t.closed) == null || r.call(t), t.fullscreen && (Eo = void 0);
    }
  });
  dw(t, t.parent, n), Ja(t, t.parent, n), t.parent.vLoadingAddClassList = () => Ja(t, t.parent, n);
  let o = t.parent.getAttribute("loading-number");
  return o ? o = `${Number.parseInt(o) + 1}` : o = "1", t.parent.setAttribute("loading-number", o), t.parent.appendChild(n.$el), ue(() => n.visible.value = t.visible), t.fullscreen && (Eo = n), n;
}, cw = (e) => {
  var t, n, o, r;
  let l;
  return ot(e.target) ? l = (t = document.querySelector(e.target)) != null ? t : document.body : l = e.target || document.body, {
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
}, dw = async (e, t, n) => {
  const { nextZIndex: o } = yl(), r = {};
  if (e.fullscreen)
    n.originalPosition.value = ln(document.body, "position"), n.originalOverflow.value = ln(document.body, "overflow"), r.zIndex = o();
  else if (e.parent === document.body) {
    n.originalPosition.value = ln(document.body, "position"), await ue();
    for (const l of ["top", "left"]) {
      const a = l === "top" ? "scrollTop" : "scrollLeft";
      r[l] = `${e.target.getBoundingClientRect()[l] + document.body[a] + document.documentElement[a] - Number.parseInt(ln(document.body, `margin-${l}`), 10)}px`;
    }
    for (const l of ["height", "width"])
      r[l] = `${e.target.getBoundingClientRect()[l]}px`;
  } else
    n.originalPosition.value = ln(t, "position");
  for (const [l, a] of Object.entries(r))
    n.$el.style[l] = a;
}, Ja = (e, t, n) => {
  const o = ne("loading");
  ["absolute", "fixed", "sticky"].includes(n.originalPosition.value) ? hn(t, o.bm("parent", "relative")) : Bo(t, o.bm("parent", "relative")), e.fullscreen && e.lock ? Bo(t, o.bm("parent", "hidden")) : hn(t, o.bm("parent", "hidden"));
}, Hr = Symbol("ElLoading"), es = (e, t) => {
  var n, o, r, l;
  const a = t.instance, s = (p) => st(t.value) ? t.value[p] : void 0, i = (p) => {
    const v = ot(p) && (a == null ? void 0 : a[p]) || p;
    return v && x(v);
  }, u = (p) => i(s(p) || e.getAttribute(`element-loading-${fv(p)}`)), d = (n = s("fullscreen")) != null ? n : t.modifiers.fullscreen, f = {
    text: u("text"),
    svg: u("svg"),
    svgViewBox: u("svgViewBox"),
    spinner: u("spinner"),
    background: u("background"),
    customClass: u("customClass"),
    fullscreen: d,
    target: (o = s("target")) != null ? o : d ? void 0 : e,
    body: (r = s("body")) != null ? r : t.modifiers.body,
    lock: (l = s("lock")) != null ? l : t.modifiers.lock
  };
  e[Hr] = {
    options: f,
    instance: uw(f)
  };
}, fw = (e, t) => {
  for (const n of Object.keys(t))
    dn(t[n]) && (t[n].value = e[n]);
}, pw = {
  mounted(e, t) {
    t.value && es(e, t);
  },
  updated(e, t) {
    const n = e[Hr];
    t.oldValue !== t.value && (t.value && !t.oldValue ? es(e, t) : t.value && t.oldValue ? st(t.value) && fw(t.value, n.options) : n == null || n.instance.close());
  },
  unmounted(e) {
    var t;
    (t = e[Hr]) == null || t.instance.close();
  }
};
const vw = W({
  name: "cm-button"
}), hw = /* @__PURE__ */ W({
  ...vw,
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
      const a = b0;
      return P(), Q(a, Ht(r.$attrs, {
        loading: h(n),
        onClick: o
      }), {
        default: Z(() => [
          ae(r.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["loading"]);
    };
  }
});
const kl = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Mw = /* @__PURE__ */ kl(hw, [["__scopeId", "data-v-5e79745c"]]), gw = {
  "aria-hidden": "true",
  class: "svg-icon"
}, mw = ["xlink:href"], bw = W({
  name: "CmSvg"
}), yw = /* @__PURE__ */ W({
  ...bw,
  props: {
    prefix: { default: "icon" },
    name: null,
    widthScale: { default: 1 }
  },
  setup(e) {
    const t = e;
    lu((r) => ({
      "88ae7cc6": h(o)
    }));
    const n = O(() => `#${t.prefix}-${t.name}`), o = O(() => t.widthScale.toString() + "em");
    return (r, l) => (P(), N("svg", gw, [
      V("use", { "xlink:href": h(n) }, null, 8, mw)
    ]));
  }
});
const Rw = /* @__PURE__ */ kl(yw, [["__scopeId", "data-v-5865a63a"]]);
const Ki = (e) => Object.prototype.toString.call(e).slice(8, -1), ts = (e) => [
  "String",
  "Number",
  "Boolean",
  "Null",
  "Undefined",
  "Symbol",
  "Bigint"
].includes(Ki(e));
var Ui = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, hr = (e, t, n) => (Ui(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ww = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Cw = (e, t, n, o) => (Ui(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n), _n;
class Sw {
  /**
   * 初始化一个栈
   * @param initData 初始栈的成员，可以任意个参数
   */
  constructor(...t) {
    ww(this, _n, void 0), Cw(this, _n, new Array(...t));
  }
  /**
   * 推入栈
   * @param member 要推入的成员
   * @returns 栈长度
   */
  push(t) {
    return hr(this, _n).push(t);
  }
  /**
   * 抛出最后一个成员
   * @returns 最后一个成员
   */
  pop() {
    return hr(this, _n).pop();
  }
  /**
   * 当前栈的长度
   * @returns 长度
   */
  length() {
    return hr(this, _n).length;
  }
}
_n = /* @__PURE__ */ new WeakMap();
const Ew = (e) => {
  if (ts(e))
    return e;
  let t;
  const n = new Sw({
    parent: t,
    key: void 0,
    data: e,
    sign: 2
    /* SELF */
  }), o = /* @__PURE__ */ new Map(), r = (l, a, s, i) => {
    switch (i) {
      case 2: {
        t = s;
        break;
      }
      case 3: {
        l[a] = s;
        break;
      }
      case 0: {
        l.add(s);
        break;
      }
      case 1: {
        l.set(a, s);
        break;
      }
    }
  };
  for (; n.length() > 0; ) {
    const { parent: l, key: a, data: s, sign: i } = n.pop();
    if (ts(s)) {
      r(l, a, s, i);
      continue;
    }
    if (o.has(s)) {
      r(l, a, o.get(s), i);
      continue;
    }
    const u = Ki(s);
    switch (u) {
      case "Date": {
        const d = new Date(s);
        r(l, a, d, i), o.set(s, d);
        break;
      }
      case "RegExp": {
        const d = new RegExp(s.source, s.flags);
        r(l, a, d, i), o.set(s, d);
        break;
      }
      case "Function": {
        r(l, a, s, i);
        break;
      }
      case "Array": {
        const d = [];
        r(l, a, d, i), o.set(s, d), s.forEach((f, p) => {
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
        r(l, a, d, i), o.set(s, d), Object.entries(s).reverse().forEach(([f, p]) => {
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
        const d = new s.constructor();
        r(l, a, d, i), o.set(s, d), Array.from(s).reverse().forEach((f, p) => {
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
        const d = new s.constructor();
        r(l, a, d, i), o.set(s, d), Array.from(s).reverse().forEach(([f, p]) => {
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
}, _w = { class: "cm-table" }, Ow = { class: "buttons" }, xw = { class: "table" }, Tw = { class: "pager" }, $w = W({
  name: "CmTable"
}), Pw = /* @__PURE__ */ W({
  ...$w,
  props: {
    getData: null,
    isInitData: { type: Boolean, default: !0 },
    initParams: { default: () => ({}) },
    isUsePager: { type: Boolean, default: !0 },
    isUseCheckBox: { type: Boolean, default: !0 }
  },
  setup(e, { expose: t }) {
    const n = e, o = x([]), r = x(!1), l = x({}), a = Wt({
      pageSize: 20,
      currentPage: 1
    }), s = x(0), i = x(null), u = (v, c = !0) => (v && (l.value = Ew(v)), c && (a.currentPage = 1), n.isUsePager && (l.value.pager = a), r.value = !0, n.getData(l).then((g) => {
      o.value = g.datas, s.value = g.total;
    }).catch().finally(() => {
      r.value = !1;
    }));
    n.isInitData && u(n.initParams), U(
      () => a.currentPage,
      () => {
        u(null, !1);
      }
    ), U(
      () => a.pageSize,
      () => {
        u();
      }
    );
    const d = x([]), f = (v) => {
      d.value = v;
    }, p = Wt({ a: 1 });
    return t({
      update: u,
      selection: d,
      test: p
    }), (v, c) => {
      const g = sw, y = aw, m = Jy, w = pw;
      return Pe((P(), N("div", _w, [
        G(" 操作按钮组 "),
        V("div", Ow, [
          ae(v.$slots, "buttons", { selection: h(d) }, void 0, !0)
        ]),
        G(" 表格主体 "),
        V("div", xw, [
          ge(y, Ht({
            ref_key: "table",
            ref: i
          }, v.$attrs, {
            data: h(o),
            onSelectionChange: f
          }), {
            default: Z(() => [
              n.isUseCheckBox ? (P(), Q(g, {
                key: 0,
                type: "selection"
              })) : G("v-if", !0),
              ae(v.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["data"])
        ]),
        G(" 分页部分 "),
        V("div", Tw, [
          ge(m, {
            "page-size": h(a).pageSize,
            "onUpdate:pageSize": c[0] || (c[0] = (S) => h(a).pageSize = S),
            "current-page": h(a).currentPage,
            "onUpdate:currentPage": c[1] || (c[1] = (S) => h(a).currentPage = S),
            background: "",
            layout: "total, prev, pager, next",
            "hide-on-single-page": "",
            total: h(s)
          }, null, 8, ["page-size", "current-page", "total"])
        ])
      ])), [
        [w, h(r)]
      ]);
    };
  }
});
const Iw = /* @__PURE__ */ kl(Pw, [["__scopeId", "data-v-175e1406"]]), qi = [], kw = /* @__PURE__ */ Object.assign({ "./CmButton/index.ts": () => import("./index-d8330fad.mjs"), "./CmSvg/index.ts": () => import("./index-aaa60146.mjs"), "./CmTable/index.ts": () => import("./index-acd2d186.mjs") }), Aw = async () => {
  for (const e of Object.values(kw)) {
    const t = await e();
    qi.push(t.default);
  }
};
Aw();
const Nw = {
  install(e) {
    qi.forEach((t) => {
      e.use(t);
    });
  }
};
export {
  Mw as CmButton,
  Rw as CmSvg,
  Iw as CmTable,
  Nw as default
};
