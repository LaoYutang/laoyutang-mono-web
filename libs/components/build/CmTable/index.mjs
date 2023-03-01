import { unref as m, getCurrentScope as _i, onScopeDispose as Oi, getCurrentInstance as we, onMounted as Le, nextTick as se, watch as V, ref as O, openBlock as x, createElementBlock as N, createElementVNode as K, warn as Ti, computed as T, inject as ie, toRef as Wt, onUnmounted as Ao, isRef as on, shallowRef as mn, onBeforeUnmount as gt, onBeforeMount as Or, provide as it, defineComponent as U, mergeProps as Kt, renderSlot as pe, useAttrs as $i, useSlots as Tr, withDirectives as xe, createCommentVNode as Y, Fragment as Ue, normalizeClass as R, createBlock as J, withCtx as te, resolveDynamicComponent as ht, withModifiers as vt, createVNode as he, toDisplayString as ye, normalizeStyle as Oe, vShow as It, Transition as Zn, reactive as Vt, onUpdated as Na, cloneVNode as Pi, Text as xi, Comment as Fa, Teleport as Li, readonly as Ai, onDeactivated as ki, toRaw as yn, vModelCheckbox as wo, createTextVNode as ko, toRefs as kn, triggerRef as Nn, resolveComponent as $e, resolveDirective as $r, renderList as wn, withKeys as at, vModelText as Ri, createSlots as Ii, watchEffect as bn, h as Q, createApp as Mi } from "vue";
var Ni = typeof global == "object" && global && global.Object === Object && global;
const za = Ni;
var Fi = typeof self == "object" && self && self.Object === Object && self, zi = za || Fi || Function("return this")();
const mt = zi;
var Bi = mt.Symbol;
const _t = Bi;
var Ba = Object.prototype, Hi = Ba.hasOwnProperty, Di = Ba.toString, Fn = _t ? _t.toStringTag : void 0;
function Wi(e) {
  var t = Hi.call(e, Fn), n = e[Fn];
  try {
    e[Fn] = void 0;
    var o = !0;
  } catch {
  }
  var r = Di.call(e);
  return o && (t ? e[Fn] = n : delete e[Fn]), r;
}
var Ki = Object.prototype, ji = Ki.toString;
function Vi(e) {
  return ji.call(e);
}
var Ui = "[object Null]", qi = "[object Undefined]", vl = _t ? _t.toStringTag : void 0;
function un(e) {
  return e == null ? e === void 0 ? qi : Ui : vl && vl in Object(e) ? Wi(e) : Vi(e);
}
function Ut(e) {
  return e != null && typeof e == "object";
}
var Gi = "[object Symbol]";
function Ro(e) {
  return typeof e == "symbol" || Ut(e) && un(e) == Gi;
}
function Ha(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var Yi = Array.isArray;
const tt = Yi;
var Xi = 1 / 0, hl = _t ? _t.prototype : void 0, gl = hl ? hl.toString : void 0;
function Da(e) {
  if (typeof e == "string")
    return e;
  if (tt(e))
    return Ha(e, Da) + "";
  if (Ro(e))
    return gl ? gl.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Xi ? "-0" : t;
}
var Qi = /\s/;
function Zi(e) {
  for (var t = e.length; t-- && Qi.test(e.charAt(t)); )
    ;
  return t;
}
var Ji = /^\s+/;
function eu(e) {
  return e && e.slice(0, Zi(e) + 1).replace(Ji, "");
}
function nt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ml = 0 / 0, tu = /^[-+]0x[0-9a-f]+$/i, nu = /^0b[01]+$/i, ou = /^0o[0-7]+$/i, ru = parseInt;
function bl(e) {
  if (typeof e == "number")
    return e;
  if (Ro(e))
    return ml;
  if (nt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = nt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = eu(e);
  var n = nu.test(e);
  return n || ou.test(e) ? ru(e.slice(2), n ? 2 : 8) : tu.test(e) ? ml : +e;
}
function Pr(e) {
  return e;
}
var lu = "[object AsyncFunction]", au = "[object Function]", su = "[object GeneratorFunction]", iu = "[object Proxy]";
function xr(e) {
  if (!nt(e))
    return !1;
  var t = un(e);
  return t == au || t == su || t == lu || t == iu;
}
var uu = mt["__core-js_shared__"];
const Uo = uu;
var yl = function() {
  var e = /[^.]+$/.exec(Uo && Uo.keys && Uo.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function cu(e) {
  return !!yl && yl in e;
}
var du = Function.prototype, fu = du.toString;
function cn(e) {
  if (e != null) {
    try {
      return fu.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var pu = /[\\^$.*+?()[\]{}|]/g, vu = /^\[object .+?Constructor\]$/, hu = Function.prototype, gu = Object.prototype, mu = hu.toString, bu = gu.hasOwnProperty, yu = RegExp(
  "^" + mu.call(bu).replace(pu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function wu(e) {
  if (!nt(e) || cu(e))
    return !1;
  var t = xr(e) ? yu : vu;
  return t.test(cn(e));
}
function Cu(e, t) {
  return e == null ? void 0 : e[t];
}
function dn(e, t) {
  var n = Cu(e, t);
  return wu(n) ? n : void 0;
}
var Su = dn(mt, "WeakMap");
const nr = Su;
var wl = Object.create, Eu = function() {
  function e() {
  }
  return function(t) {
    if (!nt(t))
      return {};
    if (wl)
      return wl(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
const _u = Eu;
function Ou(e, t, n) {
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
function Tu(e, t) {
  var n = -1, o = e.length;
  for (t || (t = Array(o)); ++n < o; )
    t[n] = e[n];
  return t;
}
var $u = 800, Pu = 16, xu = Date.now;
function Lu(e) {
  var t = 0, n = 0;
  return function() {
    var o = xu(), r = Pu - (o - n);
    if (n = o, r > 0) {
      if (++t >= $u)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Au(e) {
  return function() {
    return e;
  };
}
var ku = function() {
  try {
    var e = dn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Co = ku;
var Ru = Co ? function(e, t) {
  return Co(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Au(t),
    writable: !0
  });
} : Pr;
const Iu = Ru;
var Mu = Lu(Iu);
const Wa = Mu;
var Nu = 9007199254740991, Fu = /^(?:0|[1-9]\d*)$/;
function Io(e, t) {
  var n = typeof e;
  return t = t ?? Nu, !!t && (n == "number" || n != "symbol" && Fu.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Lr(e, t, n) {
  t == "__proto__" && Co ? Co(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Jn(e, t) {
  return e === t || e !== e && t !== t;
}
var zu = Object.prototype, Bu = zu.hasOwnProperty;
function Ka(e, t, n) {
  var o = e[t];
  (!(Bu.call(e, t) && Jn(o, n)) || n === void 0 && !(t in e)) && Lr(e, t, n);
}
function Hu(e, t, n, o) {
  var r = !n;
  n || (n = {});
  for (var l = -1, s = t.length; ++l < s; ) {
    var a = t[l], i = o ? o(n[a], e[a], a, n, e) : void 0;
    i === void 0 && (i = e[a]), r ? Lr(n, a, i) : Ka(n, a, i);
  }
  return n;
}
var Cl = Math.max;
function ja(e, t, n) {
  return t = Cl(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, l = Cl(o.length - t, 0), s = Array(l); ++r < l; )
      s[r] = o[t + r];
    r = -1;
    for (var a = Array(t + 1); ++r < t; )
      a[r] = o[r];
    return a[t] = n(s), Ou(e, this, a);
  };
}
function Du(e, t) {
  return Wa(ja(e, t, Pr), e + "");
}
var Wu = 9007199254740991;
function Ar(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Wu;
}
function Rn(e) {
  return e != null && Ar(e.length) && !xr(e);
}
function Ku(e, t, n) {
  if (!nt(n))
    return !1;
  var o = typeof t;
  return (o == "number" ? Rn(n) && Io(t, n.length) : o == "string" && t in n) ? Jn(n[t], e) : !1;
}
function ju(e) {
  return Du(function(t, n) {
    var o = -1, r = n.length, l = r > 1 ? n[r - 1] : void 0, s = r > 2 ? n[2] : void 0;
    for (l = e.length > 3 && typeof l == "function" ? (r--, l) : void 0, s && Ku(n[0], n[1], s) && (l = r < 3 ? void 0 : l, r = 1), t = Object(t); ++o < r; ) {
      var a = n[o];
      a && e(t, a, o, l);
    }
    return t;
  });
}
var Vu = Object.prototype;
function kr(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Vu;
  return e === n;
}
function Uu(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var qu = "[object Arguments]";
function Sl(e) {
  return Ut(e) && un(e) == qu;
}
var Va = Object.prototype, Gu = Va.hasOwnProperty, Yu = Va.propertyIsEnumerable, Xu = Sl(function() {
  return arguments;
}()) ? Sl : function(e) {
  return Ut(e) && Gu.call(e, "callee") && !Yu.call(e, "callee");
};
const jn = Xu;
function Qu() {
  return !1;
}
var Ua = typeof exports == "object" && exports && !exports.nodeType && exports, El = Ua && typeof module == "object" && module && !module.nodeType && module, Zu = El && El.exports === Ua, _l = Zu ? mt.Buffer : void 0, Ju = _l ? _l.isBuffer : void 0, ec = Ju || Qu;
const So = ec;
var tc = "[object Arguments]", nc = "[object Array]", oc = "[object Boolean]", rc = "[object Date]", lc = "[object Error]", ac = "[object Function]", sc = "[object Map]", ic = "[object Number]", uc = "[object Object]", cc = "[object RegExp]", dc = "[object Set]", fc = "[object String]", pc = "[object WeakMap]", vc = "[object ArrayBuffer]", hc = "[object DataView]", gc = "[object Float32Array]", mc = "[object Float64Array]", bc = "[object Int8Array]", yc = "[object Int16Array]", wc = "[object Int32Array]", Cc = "[object Uint8Array]", Sc = "[object Uint8ClampedArray]", Ec = "[object Uint16Array]", _c = "[object Uint32Array]", Ce = {};
Ce[gc] = Ce[mc] = Ce[bc] = Ce[yc] = Ce[wc] = Ce[Cc] = Ce[Sc] = Ce[Ec] = Ce[_c] = !0;
Ce[tc] = Ce[nc] = Ce[vc] = Ce[oc] = Ce[hc] = Ce[rc] = Ce[lc] = Ce[ac] = Ce[sc] = Ce[ic] = Ce[uc] = Ce[cc] = Ce[dc] = Ce[fc] = Ce[pc] = !1;
function Oc(e) {
  return Ut(e) && Ar(e.length) && !!Ce[un(e)];
}
function Tc(e) {
  return function(t) {
    return e(t);
  };
}
var qa = typeof exports == "object" && exports && !exports.nodeType && exports, Bn = qa && typeof module == "object" && module && !module.nodeType && module, $c = Bn && Bn.exports === qa, qo = $c && za.process, Pc = function() {
  try {
    var e = Bn && Bn.require && Bn.require("util").types;
    return e || qo && qo.binding && qo.binding("util");
  } catch {
  }
}();
const Ol = Pc;
var Tl = Ol && Ol.isTypedArray, xc = Tl ? Tc(Tl) : Oc;
const Rr = xc;
var Lc = Object.prototype, Ac = Lc.hasOwnProperty;
function Ga(e, t) {
  var n = tt(e), o = !n && jn(e), r = !n && !o && So(e), l = !n && !o && !r && Rr(e), s = n || o || r || l, a = s ? Uu(e.length, String) : [], i = a.length;
  for (var u in e)
    (t || Ac.call(e, u)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    l && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Io(u, i))) && a.push(u);
  return a;
}
function Ya(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var kc = Ya(Object.keys, Object);
const Rc = kc;
var Ic = Object.prototype, Mc = Ic.hasOwnProperty;
function Nc(e) {
  if (!kr(e))
    return Rc(e);
  var t = [];
  for (var n in Object(e))
    Mc.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Ir(e) {
  return Rn(e) ? Ga(e) : Nc(e);
}
function Fc(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var zc = Object.prototype, Bc = zc.hasOwnProperty;
function Hc(e) {
  if (!nt(e))
    return Fc(e);
  var t = kr(e), n = [];
  for (var o in e)
    o == "constructor" && (t || !Bc.call(e, o)) || n.push(o);
  return n;
}
function Xa(e) {
  return Rn(e) ? Ga(e, !0) : Hc(e);
}
var Dc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Wc = /^\w*$/;
function Mr(e, t) {
  if (tt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ro(e) ? !0 : Wc.test(e) || !Dc.test(e) || t != null && e in Object(t);
}
var Kc = dn(Object, "create");
const Vn = Kc;
function jc() {
  this.__data__ = Vn ? Vn(null) : {}, this.size = 0;
}
function Vc(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Uc = "__lodash_hash_undefined__", qc = Object.prototype, Gc = qc.hasOwnProperty;
function Yc(e) {
  var t = this.__data__;
  if (Vn) {
    var n = t[e];
    return n === Uc ? void 0 : n;
  }
  return Gc.call(t, e) ? t[e] : void 0;
}
var Xc = Object.prototype, Qc = Xc.hasOwnProperty;
function Zc(e) {
  var t = this.__data__;
  return Vn ? t[e] !== void 0 : Qc.call(t, e);
}
var Jc = "__lodash_hash_undefined__";
function ed(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Vn && t === void 0 ? Jc : t, this;
}
function rn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
rn.prototype.clear = jc;
rn.prototype.delete = Vc;
rn.prototype.get = Yc;
rn.prototype.has = Zc;
rn.prototype.set = ed;
function td() {
  this.__data__ = [], this.size = 0;
}
function Mo(e, t) {
  for (var n = e.length; n--; )
    if (Jn(e[n][0], t))
      return n;
  return -1;
}
var nd = Array.prototype, od = nd.splice;
function rd(e) {
  var t = this.__data__, n = Mo(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : od.call(t, n, 1), --this.size, !0;
}
function ld(e) {
  var t = this.__data__, n = Mo(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function ad(e) {
  return Mo(this.__data__, e) > -1;
}
function sd(e, t) {
  var n = this.__data__, o = Mo(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function Nt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Nt.prototype.clear = td;
Nt.prototype.delete = rd;
Nt.prototype.get = ld;
Nt.prototype.has = ad;
Nt.prototype.set = sd;
var id = dn(mt, "Map");
const Un = id;
function ud() {
  this.size = 0, this.__data__ = {
    hash: new rn(),
    map: new (Un || Nt)(),
    string: new rn()
  };
}
function cd(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function No(e, t) {
  var n = e.__data__;
  return cd(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function dd(e) {
  var t = No(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function fd(e) {
  return No(this, e).get(e);
}
function pd(e) {
  return No(this, e).has(e);
}
function vd(e, t) {
  var n = No(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function Ft(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Ft.prototype.clear = ud;
Ft.prototype.delete = dd;
Ft.prototype.get = fd;
Ft.prototype.has = pd;
Ft.prototype.set = vd;
var hd = "Expected a function";
function Nr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(hd);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], l = n.cache;
    if (l.has(r))
      return l.get(r);
    var s = e.apply(this, o);
    return n.cache = l.set(r, s) || l, s;
  };
  return n.cache = new (Nr.Cache || Ft)(), n;
}
Nr.Cache = Ft;
var gd = 500;
function md(e) {
  var t = Nr(e, function(o) {
    return n.size === gd && n.clear(), o;
  }), n = t.cache;
  return t;
}
var bd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, yd = /\\(\\)?/g, wd = md(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(bd, function(n, o, r, l) {
    t.push(r ? l.replace(yd, "$1") : o || n);
  }), t;
});
const Cd = wd;
function Sd(e) {
  return e == null ? "" : Da(e);
}
function Fo(e, t) {
  return tt(e) ? e : Mr(e, t) ? [e] : Cd(Sd(e));
}
var Ed = 1 / 0;
function eo(e) {
  if (typeof e == "string" || Ro(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Ed ? "-0" : t;
}
function Fr(e, t) {
  t = Fo(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[eo(t[n++])];
  return n && n == o ? e : void 0;
}
function Me(e, t, n) {
  var o = e == null ? void 0 : Fr(e, t);
  return o === void 0 ? n : o;
}
function Qa(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var $l = _t ? _t.isConcatSpreadable : void 0;
function _d(e) {
  return tt(e) || jn(e) || !!($l && e && e[$l]);
}
function zr(e, t, n, o, r) {
  var l = -1, s = e.length;
  for (n || (n = _d), r || (r = []); ++l < s; ) {
    var a = e[l];
    t > 0 && n(a) ? t > 1 ? zr(a, t - 1, n, o, r) : Qa(r, a) : o || (r[r.length] = a);
  }
  return r;
}
function Od(e) {
  var t = e == null ? 0 : e.length;
  return t ? zr(e, 1) : [];
}
function Td(e) {
  return Wa(ja(e, void 0, Od), e + "");
}
var $d = Ya(Object.getPrototypeOf, Object);
const Za = $d;
var Pd = "[object Object]", xd = Function.prototype, Ld = Object.prototype, Ja = xd.toString, Ad = Ld.hasOwnProperty, kd = Ja.call(Object);
function Rd(e) {
  if (!Ut(e) || un(e) != Pd)
    return !1;
  var t = Za(e);
  if (t === null)
    return !0;
  var n = Ad.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Ja.call(n) == kd;
}
function Id() {
  this.__data__ = new Nt(), this.size = 0;
}
function Md(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Nd(e) {
  return this.__data__.get(e);
}
function Fd(e) {
  return this.__data__.has(e);
}
var zd = 200;
function Bd(e, t) {
  var n = this.__data__;
  if (n instanceof Nt) {
    var o = n.__data__;
    if (!Un || o.length < zd - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Ft(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function St(e) {
  var t = this.__data__ = new Nt(e);
  this.size = t.size;
}
St.prototype.clear = Id;
St.prototype.delete = Md;
St.prototype.get = Nd;
St.prototype.has = Fd;
St.prototype.set = Bd;
var es = typeof exports == "object" && exports && !exports.nodeType && exports, Pl = es && typeof module == "object" && module && !module.nodeType && module, Hd = Pl && Pl.exports === es, xl = Hd ? mt.Buffer : void 0, Ll = xl ? xl.allocUnsafe : void 0;
function Dd(e, t) {
  if (t)
    return e.slice();
  var n = e.length, o = Ll ? Ll(n) : new e.constructor(n);
  return e.copy(o), o;
}
function Wd(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, l = []; ++n < o; ) {
    var s = e[n];
    t(s, n, e) && (l[r++] = s);
  }
  return l;
}
function Kd() {
  return [];
}
var jd = Object.prototype, Vd = jd.propertyIsEnumerable, Al = Object.getOwnPropertySymbols, Ud = Al ? function(e) {
  return e == null ? [] : (e = Object(e), Wd(Al(e), function(t) {
    return Vd.call(e, t);
  }));
} : Kd;
const qd = Ud;
function Gd(e, t, n) {
  var o = t(e);
  return tt(e) ? o : Qa(o, n(e));
}
function kl(e) {
  return Gd(e, Ir, qd);
}
var Yd = dn(mt, "DataView");
const or = Yd;
var Xd = dn(mt, "Promise");
const rr = Xd;
var Qd = dn(mt, "Set");
const lr = Qd;
var Rl = "[object Map]", Zd = "[object Object]", Il = "[object Promise]", Ml = "[object Set]", Nl = "[object WeakMap]", Fl = "[object DataView]", Jd = cn(or), ef = cn(Un), tf = cn(rr), nf = cn(lr), of = cn(nr), Zt = un;
(or && Zt(new or(new ArrayBuffer(1))) != Fl || Un && Zt(new Un()) != Rl || rr && Zt(rr.resolve()) != Il || lr && Zt(new lr()) != Ml || nr && Zt(new nr()) != Nl) && (Zt = function(e) {
  var t = un(e), n = t == Zd ? e.constructor : void 0, o = n ? cn(n) : "";
  if (o)
    switch (o) {
      case Jd:
        return Fl;
      case ef:
        return Rl;
      case tf:
        return Il;
      case nf:
        return Ml;
      case of:
        return Nl;
    }
  return t;
});
const zl = Zt;
var rf = mt.Uint8Array;
const Eo = rf;
function lf(e) {
  var t = new e.constructor(e.byteLength);
  return new Eo(t).set(new Eo(e)), t;
}
function af(e, t) {
  var n = t ? lf(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
function sf(e) {
  return typeof e.constructor == "function" && !kr(e) ? _u(Za(e)) : {};
}
var uf = "__lodash_hash_undefined__";
function cf(e) {
  return this.__data__.set(e, uf), this;
}
function df(e) {
  return this.__data__.has(e);
}
function _o(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Ft(); ++t < n; )
    this.add(e[t]);
}
_o.prototype.add = _o.prototype.push = cf;
_o.prototype.has = df;
function ff(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function pf(e, t) {
  return e.has(t);
}
var vf = 1, hf = 2;
function ts(e, t, n, o, r, l) {
  var s = n & vf, a = e.length, i = t.length;
  if (a != i && !(s && i > a))
    return !1;
  var u = l.get(e), d = l.get(t);
  if (u && d)
    return u == t && d == e;
  var f = -1, p = !0, v = n & hf ? new _o() : void 0;
  for (l.set(e, t), l.set(t, e); ++f < a; ) {
    var c = e[f], h = t[f];
    if (o)
      var y = s ? o(h, c, f, t, e, l) : o(c, h, f, e, t, l);
    if (y !== void 0) {
      if (y)
        continue;
      p = !1;
      break;
    }
    if (v) {
      if (!ff(t, function(g, w) {
        if (!pf(v, w) && (c === g || r(c, g, n, o, l)))
          return v.push(w);
      })) {
        p = !1;
        break;
      }
    } else if (!(c === h || r(c, h, n, o, l))) {
      p = !1;
      break;
    }
  }
  return l.delete(e), l.delete(t), p;
}
function gf(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function mf(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var bf = 1, yf = 2, wf = "[object Boolean]", Cf = "[object Date]", Sf = "[object Error]", Ef = "[object Map]", _f = "[object Number]", Of = "[object RegExp]", Tf = "[object Set]", $f = "[object String]", Pf = "[object Symbol]", xf = "[object ArrayBuffer]", Lf = "[object DataView]", Bl = _t ? _t.prototype : void 0, Go = Bl ? Bl.valueOf : void 0;
function Af(e, t, n, o, r, l, s) {
  switch (n) {
    case Lf:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case xf:
      return !(e.byteLength != t.byteLength || !l(new Eo(e), new Eo(t)));
    case wf:
    case Cf:
    case _f:
      return Jn(+e, +t);
    case Sf:
      return e.name == t.name && e.message == t.message;
    case Of:
    case $f:
      return e == t + "";
    case Ef:
      var a = gf;
    case Tf:
      var i = o & bf;
      if (a || (a = mf), e.size != t.size && !i)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      o |= yf, s.set(e, t);
      var d = ts(a(e), a(t), o, r, l, s);
      return s.delete(e), d;
    case Pf:
      if (Go)
        return Go.call(e) == Go.call(t);
  }
  return !1;
}
var kf = 1, Rf = Object.prototype, If = Rf.hasOwnProperty;
function Mf(e, t, n, o, r, l) {
  var s = n & kf, a = kl(e), i = a.length, u = kl(t), d = u.length;
  if (i != d && !s)
    return !1;
  for (var f = i; f--; ) {
    var p = a[f];
    if (!(s ? p in t : If.call(t, p)))
      return !1;
  }
  var v = l.get(e), c = l.get(t);
  if (v && c)
    return v == t && c == e;
  var h = !0;
  l.set(e, t), l.set(t, e);
  for (var y = s; ++f < i; ) {
    p = a[f];
    var g = e[p], w = t[p];
    if (o)
      var S = s ? o(w, g, p, t, e, l) : o(g, w, p, e, t, l);
    if (!(S === void 0 ? g === w || r(g, w, n, o, l) : S)) {
      h = !1;
      break;
    }
    y || (y = p == "constructor");
  }
  if (h && !y) {
    var b = e.constructor, $ = t.constructor;
    b != $ && "constructor" in e && "constructor" in t && !(typeof b == "function" && b instanceof b && typeof $ == "function" && $ instanceof $) && (h = !1);
  }
  return l.delete(e), l.delete(t), h;
}
var Nf = 1, Hl = "[object Arguments]", Dl = "[object Array]", ao = "[object Object]", Ff = Object.prototype, Wl = Ff.hasOwnProperty;
function zf(e, t, n, o, r, l) {
  var s = tt(e), a = tt(t), i = s ? Dl : zl(e), u = a ? Dl : zl(t);
  i = i == Hl ? ao : i, u = u == Hl ? ao : u;
  var d = i == ao, f = u == ao, p = i == u;
  if (p && So(e)) {
    if (!So(t))
      return !1;
    s = !0, d = !1;
  }
  if (p && !d)
    return l || (l = new St()), s || Rr(e) ? ts(e, t, n, o, r, l) : Af(e, t, i, n, o, r, l);
  if (!(n & Nf)) {
    var v = d && Wl.call(e, "__wrapped__"), c = f && Wl.call(t, "__wrapped__");
    if (v || c) {
      var h = v ? e.value() : e, y = c ? t.value() : t;
      return l || (l = new St()), r(h, y, n, o, l);
    }
  }
  return p ? (l || (l = new St()), Mf(e, t, n, o, r, l)) : !1;
}
function zo(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !Ut(e) && !Ut(t) ? e !== e && t !== t : zf(e, t, n, o, zo, r);
}
var Bf = 1, Hf = 2;
function Df(e, t, n, o) {
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
      var f = new St();
      if (o)
        var p = o(u, d, i, e, t, f);
      if (!(p === void 0 ? zo(d, u, Bf | Hf, o, f) : p))
        return !1;
    }
  }
  return !0;
}
function ns(e) {
  return e === e && !nt(e);
}
function Wf(e) {
  for (var t = Ir(e), n = t.length; n--; ) {
    var o = t[n], r = e[o];
    t[n] = [o, r, ns(r)];
  }
  return t;
}
function os(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Kf(e) {
  var t = Wf(e);
  return t.length == 1 && t[0][2] ? os(t[0][0], t[0][1]) : function(n) {
    return n === e || Df(n, e, t);
  };
}
function jf(e, t) {
  return e != null && t in Object(e);
}
function Vf(e, t, n) {
  t = Fo(t, e);
  for (var o = -1, r = t.length, l = !1; ++o < r; ) {
    var s = eo(t[o]);
    if (!(l = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return l || ++o != r ? l : (r = e == null ? 0 : e.length, !!r && Ar(r) && Io(s, r) && (tt(e) || jn(e)));
}
function rs(e, t) {
  return e != null && Vf(e, t, jf);
}
var Uf = 1, qf = 2;
function Gf(e, t) {
  return Mr(e) && ns(t) ? os(eo(e), t) : function(n) {
    var o = Me(n, e);
    return o === void 0 && o === t ? rs(n, e) : zo(t, o, Uf | qf);
  };
}
function Yf(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Xf(e) {
  return function(t) {
    return Fr(t, e);
  };
}
function Qf(e) {
  return Mr(e) ? Yf(eo(e)) : Xf(e);
}
function Zf(e) {
  return typeof e == "function" ? e : e == null ? Pr : typeof e == "object" ? tt(e) ? Gf(e[0], e[1]) : Kf(e) : Qf(e);
}
function Jf(e) {
  return function(t, n, o) {
    for (var r = -1, l = Object(t), s = o(t), a = s.length; a--; ) {
      var i = s[e ? a : ++r];
      if (n(l[i], i, l) === !1)
        break;
    }
    return t;
  };
}
var ep = Jf();
const ls = ep;
function tp(e, t) {
  return e && ls(e, t, Ir);
}
function np(e, t) {
  return function(n, o) {
    if (n == null)
      return n;
    if (!Rn(n))
      return e(n, o);
    for (var r = n.length, l = t ? r : -1, s = Object(n); (t ? l-- : ++l < r) && o(s[l], l, s) !== !1; )
      ;
    return n;
  };
}
var op = np(tp);
const rp = op;
var lp = function() {
  return mt.Date.now();
};
const Yo = lp;
var ap = "Expected a function", sp = Math.max, ip = Math.min;
function Cn(e, t, n) {
  var o, r, l, s, a, i, u = 0, d = !1, f = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(ap);
  t = bl(t) || 0, nt(n) && (d = !!n.leading, f = "maxWait" in n, l = f ? sp(bl(n.maxWait) || 0, t) : l, p = "trailing" in n ? !!n.trailing : p);
  function v(_) {
    var C = o, P = r;
    return o = r = void 0, u = _, s = e.apply(P, C), s;
  }
  function c(_) {
    return u = _, a = setTimeout(g, t), d ? v(_) : s;
  }
  function h(_) {
    var C = _ - i, P = _ - u, k = t - C;
    return f ? ip(k, l - P) : k;
  }
  function y(_) {
    var C = _ - i, P = _ - u;
    return i === void 0 || C >= t || C < 0 || f && P >= l;
  }
  function g() {
    var _ = Yo();
    if (y(_))
      return w(_);
    a = setTimeout(g, h(_));
  }
  function w(_) {
    return a = void 0, p && o ? v(_) : (o = r = void 0, s);
  }
  function S() {
    a !== void 0 && clearTimeout(a), u = 0, o = i = r = a = void 0;
  }
  function b() {
    return a === void 0 ? s : w(Yo());
  }
  function $() {
    var _ = Yo(), C = y(_);
    if (o = arguments, r = this, i = _, C) {
      if (a === void 0)
        return c(i);
      if (f)
        return clearTimeout(a), a = setTimeout(g, t), v(i);
    }
    return a === void 0 && (a = setTimeout(g, t)), s;
  }
  return $.cancel = S, $.flush = b, $;
}
function ar(e, t, n) {
  (n !== void 0 && !Jn(e[t], n) || n === void 0 && !(t in e)) && Lr(e, t, n);
}
function up(e) {
  return Ut(e) && Rn(e);
}
function sr(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function cp(e) {
  return Hu(e, Xa(e));
}
function dp(e, t, n, o, r, l, s) {
  var a = sr(e, n), i = sr(t, n), u = s.get(i);
  if (u) {
    ar(e, n, u);
    return;
  }
  var d = l ? l(a, i, n + "", e, t, s) : void 0, f = d === void 0;
  if (f) {
    var p = tt(i), v = !p && So(i), c = !p && !v && Rr(i);
    d = i, p || v || c ? tt(a) ? d = a : up(a) ? d = Tu(a) : v ? (f = !1, d = Dd(i, !0)) : c ? (f = !1, d = af(i, !0)) : d = [] : Rd(i) || jn(i) ? (d = a, jn(a) ? d = cp(a) : (!nt(a) || xr(a)) && (d = sf(i))) : f = !1;
  }
  f && (s.set(i, d), r(d, i, o, l, s), s.delete(i)), ar(e, n, d);
}
function as(e, t, n, o, r) {
  e !== t && ls(t, function(l, s) {
    if (r || (r = new St()), nt(l))
      dp(e, t, s, n, as, o, r);
    else {
      var a = o ? o(sr(e, s), l, s + "", e, t, r) : void 0;
      a === void 0 && (a = l), ar(e, s, a);
    }
  }, Xa);
}
function fp(e, t) {
  var n = -1, o = Rn(e) ? Array(e.length) : [];
  return rp(e, function(r, l, s) {
    o[++n] = t(r, l, s);
  }), o;
}
function pp(e, t) {
  var n = tt(e) ? Ha : fp;
  return n(e, Zf(t));
}
function vp(e, t) {
  return zr(pp(e, t), 1);
}
function Oo(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var r = e[t];
    o[r[0]] = r[1];
  }
  return o;
}
function To(e, t) {
  return zo(e, t);
}
function Bo(e) {
  return e == null;
}
function hp(e) {
  return e === void 0;
}
var gp = ju(function(e, t, n) {
  as(e, t, n);
});
const ss = gp;
function is(e, t, n, o) {
  if (!nt(e))
    return e;
  t = Fo(t, e);
  for (var r = -1, l = t.length, s = l - 1, a = e; a != null && ++r < l; ) {
    var i = eo(t[r]), u = n;
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return e;
    if (r != s) {
      var d = a[i];
      u = o ? o(d, i, a) : void 0, u === void 0 && (u = nt(d) ? d : Io(t[r + 1]) ? [] : {});
    }
    Ka(a, i, u), a = a[i];
  }
  return e;
}
function mp(e, t, n) {
  for (var o = -1, r = t.length, l = {}; ++o < r; ) {
    var s = t[o], a = Fr(e, s);
    n(a, s) && is(l, Fo(s, e), a);
  }
  return l;
}
function bp(e, t) {
  return mp(e, t, function(n, o) {
    return rs(e, o);
  });
}
var yp = Td(function(e, t) {
  return e == null ? {} : bp(e, t);
});
const wp = yp;
function Cp(e, t, n) {
  return e == null ? e : is(e, t, n);
}
const Rt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const l = e == null ? void 0 : e(r);
  if (n === !1 || !l)
    return t == null ? void 0 : t(r);
};
var Kl;
const Ee = typeof window < "u", Sn = (e) => typeof e == "boolean", Pe = (e) => typeof e == "number", Sp = (e) => typeof e == "string", us = () => {
}, Ep = Ee && ((Kl = window == null ? void 0 : window.navigator) == null ? void 0 : Kl.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function cs(e) {
  return typeof e == "function" ? e() : m(e);
}
function _p(e) {
  return e;
}
function Br(e) {
  return _i() ? (Oi(e), !0) : !1;
}
function Op(e, t = !0) {
  we() ? Le(e) : t ? e() : se(e);
}
function Dt(e) {
  var t;
  const n = cs(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Hr = Ee ? window : void 0;
function jt(...e) {
  let t, n, o, r;
  if (Sp(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = Hr) : [t, n, o, r] = e, !t)
    return us;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const l = [], s = () => {
    l.forEach((d) => d()), l.length = 0;
  }, a = (d, f, p, v) => (d.addEventListener(f, p, v), () => d.removeEventListener(f, p, v)), i = V(() => [Dt(t), cs(r)], ([d, f]) => {
    s(), d && l.push(...n.flatMap((p) => o.map((v) => a(d, p, v, f))));
  }, { immediate: !0, flush: "post" }), u = () => {
    i(), s();
  };
  return Br(u), u;
}
let jl = !1;
function Tp(e, t, n = {}) {
  const { window: o = Hr, ignore: r = [], capture: l = !0, detectIframe: s = !1 } = n;
  if (!o)
    return;
  Ep && !jl && (jl = !0, Array.from(o.document.body.children).forEach((p) => p.addEventListener("click", us)));
  let a = !0;
  const i = (p) => r.some((v) => {
    if (typeof v == "string")
      return Array.from(o.document.querySelectorAll(v)).some((c) => c === p.target || p.composedPath().includes(c));
    {
      const c = Dt(v);
      return c && (p.target === c || p.composedPath().includes(c));
    }
  }), d = [
    jt(o, "click", (p) => {
      const v = Dt(e);
      if (!(!v || v === p.target || p.composedPath().includes(v))) {
        if (p.detail === 0 && (a = !i(p)), !a) {
          a = !0;
          return;
        }
        t(p);
      }
    }, { passive: !0, capture: l }),
    jt(o, "pointerdown", (p) => {
      const v = Dt(e);
      v && (a = !p.composedPath().includes(v) && !i(p));
    }, { passive: !0 }),
    s && jt(o, "blur", (p) => {
      var v;
      const c = Dt(e);
      ((v = o.document.activeElement) == null ? void 0 : v.tagName) === "IFRAME" && !(c != null && c.contains(o.document.activeElement)) && t(p);
    })
  ].filter(Boolean);
  return () => d.forEach((p) => p());
}
function $p(e, t = !1) {
  const n = O(), o = () => n.value = Boolean(e());
  return o(), Op(o, t), n;
}
const ir = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ur = "__vueuse_ssr_handlers__";
ir[ur] = ir[ur] || {};
ir[ur];
var Vl = Object.getOwnPropertySymbols, Pp = Object.prototype.hasOwnProperty, xp = Object.prototype.propertyIsEnumerable, Lp = (e, t) => {
  var n = {};
  for (var o in e)
    Pp.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Vl)
    for (var o of Vl(e))
      t.indexOf(o) < 0 && xp.call(e, o) && (n[o] = e[o]);
  return n;
};
function En(e, t, n = {}) {
  const o = n, { window: r = Hr } = o, l = Lp(o, ["window"]);
  let s;
  const a = $p(() => r && "ResizeObserver" in r), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = V(() => Dt(e), (f) => {
    i(), a.value && r && f && (s = new ResizeObserver(t), s.observe(f, l));
  }, { immediate: !0, flush: "post" }), d = () => {
    i(), u();
  };
  return Br(d), {
    isSupported: a,
    stop: d
  };
}
var Ul;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ul || (Ul = {}));
var Ap = Object.defineProperty, ql = Object.getOwnPropertySymbols, kp = Object.prototype.hasOwnProperty, Rp = Object.prototype.propertyIsEnumerable, Gl = (e, t, n) => t in e ? Ap(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ip = (e, t) => {
  for (var n in t || (t = {}))
    kp.call(t, n) && Gl(e, n, t[n]);
  if (ql)
    for (var n of ql(t))
      Rp.call(t, n) && Gl(e, n, t[n]);
  return e;
};
const Mp = {
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
Ip({
  linear: _p
}, Mp);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const qn = () => {
}, Np = Object.prototype.hasOwnProperty, ln = (e, t) => Np.call(e, t), an = Array.isArray, Ct = (e) => typeof e == "function", et = (e) => typeof e == "string", ot = (e) => e !== null && typeof e == "object", Fp = Object.prototype.toString, zp = (e) => Fp.call(e), Xo = (e) => zp(e).slice(8, -1), ds = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Bp = /-(\w)/g, Hp = ds((e) => e.replace(Bp, (t, n) => n ? n.toUpperCase() : "")), Dp = /\B([A-Z])/g, Wp = ds((e) => e.replace(Dp, "-$1").toLowerCase()), $o = (e) => e === void 0, Gn = (e) => typeof Element > "u" ? !1 : e instanceof Element, Kp = (e) => et(e) ? !Number.isNaN(Number(e)) : !1, jp = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Vp = (e, t, n) => ({
  get value() {
    return Me(e, t, n);
  },
  set value(o) {
    Cp(e, t, o);
  }
});
class fs extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function ps(e, t) {
  throw new fs(`[${e}] ${t}`);
}
function Ne(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = et(e) ? new fs(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Up = "utils/dom/style", vs = (e = "") => e.split(" ").filter((t) => !!t.trim()), vo = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, Po = (e, t) => {
  !e || !t.trim() || e.classList.add(...vs(t));
}, sn = (e, t) => {
  !e || !t.trim() || e.classList.remove(...vs(t));
}, Jt = (e, t) => {
  var n;
  if (!Ee || !e || !t)
    return "";
  let o = Hp(t);
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
function cr(e, t = "px") {
  if (!e)
    return "";
  if (Pe(e) || Kp(e))
    return `${e}${t}`;
  if (et(e))
    return e;
  Ne(Up, "binding value must be a string or number");
}
function qp(e, t) {
  if (!Ee)
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
var rt = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [o, r] of t)
    n[o] = r;
  return n;
}, Gp = {
  name: "ArrowDown"
}, Yp = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Xp = /* @__PURE__ */ K("path", {
  fill: "currentColor",
  d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
}, null, -1), Qp = [
  Xp
];
function Zp(e, t, n, o, r, l) {
  return x(), N("svg", Yp, Qp);
}
var hs = /* @__PURE__ */ rt(Gp, [["render", Zp], ["__file", "arrow-down.vue"]]), Jp = {
  name: "ArrowLeft"
}, ev = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, tv = /* @__PURE__ */ K("path", {
  fill: "currentColor",
  d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
}, null, -1), nv = [
  tv
];
function ov(e, t, n, o, r, l) {
  return x(), N("svg", ev, nv);
}
var rv = /* @__PURE__ */ rt(Jp, [["render", ov], ["__file", "arrow-left.vue"]]), lv = {
  name: "ArrowRight"
}, av = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, sv = /* @__PURE__ */ K("path", {
  fill: "currentColor",
  d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
}, null, -1), iv = [
  sv
];
function uv(e, t, n, o, r, l) {
  return x(), N("svg", av, iv);
}
var Dr = /* @__PURE__ */ rt(lv, [["render", uv], ["__file", "arrow-right.vue"]]), cv = {
  name: "ArrowUp"
}, dv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, fv = /* @__PURE__ */ K("path", {
  fill: "currentColor",
  d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
}, null, -1), pv = [
  fv
];
function vv(e, t, n, o, r, l) {
  return x(), N("svg", dv, pv);
}
var hv = /* @__PURE__ */ rt(cv, [["render", vv], ["__file", "arrow-up.vue"]]), gv = {
  name: "CircleCheck"
}, mv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, bv = /* @__PURE__ */ K("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), yv = /* @__PURE__ */ K("path", {
  fill: "currentColor",
  d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
}, null, -1), wv = [
  bv,
  yv
];
function Cv(e, t, n, o, r, l) {
  return x(), N("svg", mv, wv);
}
var Sv = /* @__PURE__ */ rt(gv, [["render", Cv], ["__file", "circle-check.vue"]]), Ev = {
  name: "CircleClose"
}, _v = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ov = /* @__PURE__ */ K("path", {
  fill: "currentColor",
  d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
}, null, -1), Tv = /* @__PURE__ */ K("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), $v = [
  Ov,
  Tv
];
function Pv(e, t, n, o, r, l) {
  return x(), N("svg", _v, $v);
}
var Wr = /* @__PURE__ */ rt(Ev, [["render", Pv], ["__file", "circle-close.vue"]]), xv = {
  name: "Close"
}, Lv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Av = /* @__PURE__ */ K("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1), kv = [
  Av
];
function Rv(e, t, n, o, r, l) {
  return x(), N("svg", Lv, kv);
}
var Yl = /* @__PURE__ */ rt(xv, [["render", Rv], ["__file", "close.vue"]]), Iv = {
  name: "DArrowLeft"
}, Mv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Nv = /* @__PURE__ */ K("path", {
  fill: "currentColor",
  d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
}, null, -1), Fv = [
  Nv
];
function zv(e, t, n, o, r, l) {
  return x(), N("svg", Mv, Fv);
}
var Bv = /* @__PURE__ */ rt(Iv, [["render", zv], ["__file", "d-arrow-left.vue"]]), Hv = {
  name: "DArrowRight"
}, Dv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Wv = /* @__PURE__ */ K("path", {
  fill: "currentColor",
  d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
}, null, -1), Kv = [
  Wv
];
function jv(e, t, n, o, r, l) {
  return x(), N("svg", Dv, Kv);
}
var Vv = /* @__PURE__ */ rt(Hv, [["render", jv], ["__file", "d-arrow-right.vue"]]), Uv = {
  name: "Hide"
}, qv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Gv = /* @__PURE__ */ K("path", {
  d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z",
  fill: "currentColor"
}, null, -1), Yv = /* @__PURE__ */ K("path", {
  d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z",
  fill: "currentColor"
}, null, -1), Xv = [
  Gv,
  Yv
];
function Qv(e, t, n, o, r, l) {
  return x(), N("svg", qv, Xv);
}
var Zv = /* @__PURE__ */ rt(Uv, [["render", Qv], ["__file", "hide.vue"]]), Jv = {
  name: "Loading"
}, eh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, th = /* @__PURE__ */ K("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1), nh = [
  th
];
function oh(e, t, n, o, r, l) {
  return x(), N("svg", eh, nh);
}
var gs = /* @__PURE__ */ rt(Jv, [["render", oh], ["__file", "loading.vue"]]), rh = {
  name: "MoreFilled"
}, lh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ah = /* @__PURE__ */ K("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"
}, null, -1), sh = [
  ah
];
function ih(e, t, n, o, r, l) {
  return x(), N("svg", lh, sh);
}
var Xl = /* @__PURE__ */ rt(rh, [["render", ih], ["__file", "more-filled.vue"]]), uh = {
  name: "View"
}, ch = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, dh = /* @__PURE__ */ K("path", {
  fill: "currentColor",
  d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
}, null, -1), fh = [
  dh
];
function ph(e, t, n, o, r, l) {
  return x(), N("svg", ch, fh);
}
var vh = /* @__PURE__ */ rt(uh, [["render", ph], ["__file", "view.vue"]]);
const ms = "__epPropKey", de = (e) => e, hh = (e) => ot(e) && !!e[ms], Ho = (e, t) => {
  if (!ot(e) || hh(e))
    return e;
  const { values: n, required: o, default: r, type: l, validator: s } = e, i = {
    type: l,
    required: !!o,
    validator: n || s ? (u) => {
      let d = !1, f = [];
      if (n && (f = Array.from(n), ln(e, "default") && f.push(r), d || (d = f.includes(u))), s && (d || (d = s(u))), !d && f.length > 0) {
        const p = [...new Set(f)].map((v) => JSON.stringify(v)).join(", ");
        Ti(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${p}], got value ${JSON.stringify(u)}.`);
      }
      return d;
    } : void 0,
    [ms]: !0
  };
  return ln(e, "default") && (i.default = r), i;
}, _e = (e) => Oo(Object.entries(e).map(([t, n]) => [
  t,
  Ho(n, t)
])), qt = de([
  String,
  Object,
  Function
]), gh = {
  validating: gs,
  success: Sv,
  error: Wr
}, Tt = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, to = (e) => (e.install = qn, e), Yn = {
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
}, We = "update:modelValue", bs = "change", no = ["", "default", "small", "large"], mh = {
  large: 40,
  default: 32,
  small: 24
}, bh = (e) => mh[e || "default"], yh = (e) => ["", ...no].includes(e), wh = () => Ee && /firefox/i.test(window.navigator.userAgent), ys = (e) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e), Kr = (e) => e, Ch = ["class", "style"], Sh = /^on[A-Z]/, Eh = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = T(() => ((n == null ? void 0 : n.value) || []).concat(Ch)), r = we();
  return r ? T(() => {
    var l;
    return Oo(Object.entries((l = r.proxy) == null ? void 0 : l.$attrs).filter(([s]) => !o.value.includes(s) && !(t && Sh.test(s))));
  }) : (Ne("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), T(() => ({})));
}, In = Symbol("checkboxGroupContextKey"), _h = Symbol(), jr = Symbol("formContextKey"), xo = Symbol("formItemContextKey"), ws = Symbol("elPaginationKey"), Cs = Symbol("scrollbarContextKey"), Vr = Symbol("popper"), Ss = Symbol("popperContent"), Ur = Symbol("elTooltip"), Es = (e) => {
  const t = we();
  return T(() => {
    var n, o;
    return (o = ((n = t.proxy) == null ? void 0 : n.$props)[e]) != null ? o : void 0;
  });
}, Ql = O();
function Mn(e, t = void 0) {
  const n = we() ? ie(_h, Ql) : Ql;
  return e ? T(() => {
    var o, r;
    return (r = (o = n.value) == null ? void 0 : o[e]) != null ? r : t;
  }) : n;
}
const Do = Ho({
  type: String,
  values: no,
  required: !1
}), _n = (e, t = {}) => {
  const n = O(void 0), o = t.prop ? n : Es("size"), r = t.global ? n : Mn("size"), l = t.form ? { size: void 0 } : ie(jr, void 0), s = t.formItem ? { size: void 0 } : ie(xo, void 0);
  return T(() => o.value || m(e) || (s == null ? void 0 : s.size) || (l == null ? void 0 : l.size) || r.value || "");
}, _s = (e) => {
  const t = Es("disabled"), n = ie(jr, void 0);
  return T(() => t.value || m(e) || (n == null ? void 0 : n.disabled) || !1);
}, Oh = ({ from: e, replacement: t, scope: n, version: o, ref: r, type: l = "API" }, s) => {
  V(() => m(s), (a) => {
    a && Ne(n, `[${l}] ${e} is about to be deprecated in version ${o}, please use ${t} instead.
For more detail, please visit: ${r}
`);
  }, {
    immediate: !0
  });
}, Th = (e) => ({
  focus: () => {
    var t, n;
    (n = (t = e.value) == null ? void 0 : t.focus) == null || n.call(t);
  }
}), qr = "el", $h = "is-", Qt = (e, t, n, o, r) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), o && (l += `__${o}`), r && (l += `--${r}`), l;
}, ne = (e) => {
  const t = Mn("namespace", qr);
  return {
    namespace: t,
    b: (c = "") => Qt(t.value, e, c, "", ""),
    e: (c) => c ? Qt(t.value, e, "", c, "") : "",
    m: (c) => c ? Qt(t.value, e, "", "", c) : "",
    be: (c, h) => c && h ? Qt(t.value, e, c, h, "") : "",
    em: (c, h) => c && h ? Qt(t.value, e, "", c, h) : "",
    bm: (c, h) => c && h ? Qt(t.value, e, c, "", h) : "",
    bem: (c, h, y) => c && h && y ? Qt(t.value, e, c, h, y) : "",
    is: (c, ...h) => {
      const y = h.length >= 1 ? h[0] : !0;
      return c && y ? `${$h}${c}` : "";
    },
    cssVar: (c) => {
      const h = {};
      for (const y in c)
        c[y] && (h[`--${t.value}-${y}`] = c[y]);
      return h;
    },
    cssVarName: (c) => `--${t.value}-${c}`,
    cssVarBlock: (c) => {
      const h = {};
      for (const y in c)
        c[y] && (h[`--${t.value}-${e}-${y}`] = c[y]);
      return h;
    },
    cssVarBlockName: (c) => `--${t.value}-${e}-${c}`
  };
}, dr = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Ph = Symbol("elIdInjection"), Os = () => we() ? ie(Ph, dr) : dr, Ts = (e) => {
  const t = Os();
  !Ee && t === dr && Ne("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = Mn("namespace", qr);
  return T(() => m(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, oo = () => {
  const e = ie(jr, void 0), t = ie(xo, void 0);
  return {
    form: e,
    formItem: t
  };
}, Gr = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = O(!1)), o || (o = O(!1));
  const r = O();
  let l;
  const s = T(() => {
    var a;
    return !!(!e.label && t && t.inputIds && ((a = t.inputIds) == null ? void 0 : a.length) <= 1);
  });
  return Le(() => {
    l = V([Wt(e, "id"), n], ([a, i]) => {
      const u = a ?? (i ? void 0 : Ts().value);
      u !== r.value && (t != null && t.removeInputId && (r.value && t.removeInputId(r.value), !(o != null && o.value) && !i && u && t.addInputId(u)), r.value = u);
    }, { immediate: !0 });
  }), Ao(() => {
    l && l(), t != null && t.removeInputId && r.value && t.removeInputId(r.value);
  }), {
    isLabeledByFormItem: s,
    inputId: r
  };
};
var xh = {
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
const Lh = (e) => (t, n) => Ah(t, n, m(e)), Ah = (e, t, n) => Me(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var l;
  return `${(l = t == null ? void 0 : t[r]) != null ? l : `{${r}}`}`;
}), kh = (e) => {
  const t = T(() => m(e).name), n = on(e) ? e : O(e);
  return {
    lang: t,
    locale: n,
    t: Lh(e)
  };
}, zt = () => {
  const e = Mn("locale");
  return kh(T(() => e.value || xh));
}, Rh = Ho({
  type: de(Boolean),
  default: null
}), Ih = Ho({
  type: de(Function)
}), Mh = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: Rh,
    [n]: Ih
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
      const p = we(), { emit: v } = p, c = p.props, h = T(() => Ct(c[n])), y = T(() => c[e] === null), g = (C) => {
        s.value !== !0 && (s.value = !0, a && (a.value = C), Ct(d) && d(C));
      }, w = (C) => {
        s.value !== !1 && (s.value = !1, a && (a.value = C), Ct(f) && f(C));
      }, S = (C) => {
        if (c.disabled === !0 || Ct(u) && !u())
          return;
        const P = h.value && Ee;
        P && v(t, !0), (y.value || !P) && g(C);
      }, b = (C) => {
        if (c.disabled === !0 || !Ee)
          return;
        const P = h.value && Ee;
        P && v(t, !1), (y.value || !P) && w(C);
      }, $ = (C) => {
        Sn(C) && (c.disabled && C ? h.value && v(t, !1) : s.value !== C && (C ? g() : w()));
      }, _ = () => {
        s.value ? b() : S();
      };
      return V(() => c[e], $), i && p.appContext.config.globalProperties.$route !== void 0 && V(() => ({
        ...p.proxy.$route
      }), () => {
        i.value && s.value && b();
      }), Le(() => {
        $(c[e]);
      }), {
        hide: b,
        show: S,
        toggle: _,
        hasUpdateHandler: h
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
};
var qe = "top", ut = "bottom", ct = "right", Ge = "left", Yr = "auto", ro = [qe, ut, ct, Ge], On = "start", Xn = "end", Nh = "clippingParents", $s = "viewport", zn = "popper", Fh = "reference", Zl = ro.reduce(function(e, t) {
  return e.concat([t + "-" + On, t + "-" + Xn]);
}, []), Wo = [].concat(ro, [Yr]).reduce(function(e, t) {
  return e.concat([t, t + "-" + On, t + "-" + Xn]);
}, []), zh = "beforeRead", Bh = "read", Hh = "afterRead", Dh = "beforeMain", Wh = "main", Kh = "afterMain", jh = "beforeWrite", Vh = "write", Uh = "afterWrite", qh = [zh, Bh, Hh, Dh, Wh, Kh, jh, Vh, Uh];
function Ot(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function bt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Tn(e) {
  var t = bt(e).Element;
  return e instanceof t || e instanceof Element;
}
function st(e) {
  var t = bt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Xr(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = bt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Gh(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, l = t.elements[n];
    !st(l) || !Ot(l) || (Object.assign(l.style, o), Object.keys(r).forEach(function(s) {
      var a = r[s];
      a === !1 ? l.removeAttribute(s) : l.setAttribute(s, a === !0 ? "" : a);
    }));
  });
}
function Yh(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], l = t.attributes[o] || {}, s = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), a = s.reduce(function(i, u) {
        return i[u] = "", i;
      }, {});
      !st(r) || !Ot(r) || (Object.assign(r.style, a), Object.keys(l).forEach(function(i) {
        r.removeAttribute(i);
      }));
    });
  };
}
var Ps = { name: "applyStyles", enabled: !0, phase: "write", fn: Gh, effect: Yh, requires: ["computeStyles"] };
function Et(e) {
  return e.split("-")[0];
}
var nn = Math.max, Lo = Math.min, $n = Math.round;
function Pn(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), o = 1, r = 1;
  if (st(e) && t) {
    var l = e.offsetHeight, s = e.offsetWidth;
    s > 0 && (o = $n(n.width) / s || 1), l > 0 && (r = $n(n.height) / l || 1);
  }
  return { width: n.width / o, height: n.height / r, top: n.top / r, right: n.right / o, bottom: n.bottom / r, left: n.left / o, x: n.left / o, y: n.top / r };
}
function Qr(e) {
  var t = Pn(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function xs(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Xr(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Mt(e) {
  return bt(e).getComputedStyle(e);
}
function Xh(e) {
  return ["table", "td", "th"].indexOf(Ot(e)) >= 0;
}
function Gt(e) {
  return ((Tn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ko(e) {
  return Ot(e) === "html" ? e : e.assignedSlot || e.parentNode || (Xr(e) ? e.host : null) || Gt(e);
}
function Jl(e) {
  return !st(e) || Mt(e).position === "fixed" ? null : e.offsetParent;
}
function Qh(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && st(e)) {
    var o = Mt(e);
    if (o.position === "fixed")
      return null;
  }
  var r = Ko(e);
  for (Xr(r) && (r = r.host); st(r) && ["html", "body"].indexOf(Ot(r)) < 0; ) {
    var l = Mt(r);
    if (l.transform !== "none" || l.perspective !== "none" || l.contain === "paint" || ["transform", "perspective"].indexOf(l.willChange) !== -1 || t && l.willChange === "filter" || t && l.filter && l.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function lo(e) {
  for (var t = bt(e), n = Jl(e); n && Xh(n) && Mt(n).position === "static"; )
    n = Jl(n);
  return n && (Ot(n) === "html" || Ot(n) === "body" && Mt(n).position === "static") ? t : n || Qh(e) || t;
}
function Zr(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Hn(e, t, n) {
  return nn(e, Lo(t, n));
}
function Zh(e, t, n) {
  var o = Hn(e, t, n);
  return o > n ? n : o;
}
function Ls() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function As(e) {
  return Object.assign({}, Ls(), e);
}
function ks(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var Jh = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, As(typeof e != "number" ? e : ks(e, ro));
};
function eg(e) {
  var t, n = e.state, o = e.name, r = e.options, l = n.elements.arrow, s = n.modifiersData.popperOffsets, a = Et(n.placement), i = Zr(a), u = [Ge, ct].indexOf(a) >= 0, d = u ? "height" : "width";
  if (!(!l || !s)) {
    var f = Jh(r.padding, n), p = Qr(l), v = i === "y" ? qe : Ge, c = i === "y" ? ut : ct, h = n.rects.reference[d] + n.rects.reference[i] - s[i] - n.rects.popper[d], y = s[i] - n.rects.reference[i], g = lo(l), w = g ? i === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, S = h / 2 - y / 2, b = f[v], $ = w - p[d] - f[c], _ = w / 2 - p[d] / 2 + S, C = Hn(b, _, $), P = i;
    n.modifiersData[o] = (t = {}, t[P] = C, t.centerOffset = C - _, t);
  }
}
function tg(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || !xs(t.elements.popper, r) || (t.elements.arrow = r));
}
var ng = { name: "arrow", enabled: !0, phase: "main", fn: eg, effect: tg, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function xn(e) {
  return e.split("-")[1];
}
var og = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function rg(e) {
  var t = e.x, n = e.y, o = window, r = o.devicePixelRatio || 1;
  return { x: $n(t * r) / r || 0, y: $n(n * r) / r || 0 };
}
function ea(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, l = e.variation, s = e.offsets, a = e.position, i = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, f = e.isFixed, p = s.x, v = p === void 0 ? 0 : p, c = s.y, h = c === void 0 ? 0 : c, y = typeof d == "function" ? d({ x: v, y: h }) : { x: v, y: h };
  v = y.x, h = y.y;
  var g = s.hasOwnProperty("x"), w = s.hasOwnProperty("y"), S = Ge, b = qe, $ = window;
  if (u) {
    var _ = lo(n), C = "clientHeight", P = "clientWidth";
    if (_ === bt(n) && (_ = Gt(n), Mt(_).position !== "static" && a === "absolute" && (C = "scrollHeight", P = "scrollWidth")), _ = _, r === qe || (r === Ge || r === ct) && l === Xn) {
      b = ut;
      var k = f && _ === $ && $.visualViewport ? $.visualViewport.height : _[C];
      h -= k - o.height, h *= i ? 1 : -1;
    }
    if (r === Ge || (r === qe || r === ut) && l === Xn) {
      S = ct;
      var M = f && _ === $ && $.visualViewport ? $.visualViewport.width : _[P];
      v -= M - o.width, v *= i ? 1 : -1;
    }
  }
  var D = Object.assign({ position: a }, u && og), z = d === !0 ? rg({ x: v, y: h }) : { x: v, y: h };
  if (v = z.x, h = z.y, i) {
    var j;
    return Object.assign({}, D, (j = {}, j[b] = w ? "0" : "", j[S] = g ? "0" : "", j.transform = ($.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + h + "px)" : "translate3d(" + v + "px, " + h + "px, 0)", j));
  }
  return Object.assign({}, D, (t = {}, t[b] = w ? h + "px" : "", t[S] = g ? v + "px" : "", t.transform = "", t));
}
function lg(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, l = n.adaptive, s = l === void 0 ? !0 : l, a = n.roundOffsets, i = a === void 0 ? !0 : a, u = { placement: Et(t.placement), variation: xn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ea(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: i })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ea(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: i })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Rs = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: lg, data: {} }, so = { passive: !0 };
function ag(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, l = r === void 0 ? !0 : r, s = o.resize, a = s === void 0 ? !0 : s, i = bt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return l && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, so);
  }), a && i.addEventListener("resize", n.update, so), function() {
    l && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, so);
    }), a && i.removeEventListener("resize", n.update, so);
  };
}
var Is = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: ag, data: {} }, sg = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ho(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return sg[t];
  });
}
var ig = { start: "end", end: "start" };
function ta(e) {
  return e.replace(/start|end/g, function(t) {
    return ig[t];
  });
}
function Jr(e) {
  var t = bt(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function el(e) {
  return Pn(Gt(e)).left + Jr(e).scrollLeft;
}
function ug(e) {
  var t = bt(e), n = Gt(e), o = t.visualViewport, r = n.clientWidth, l = n.clientHeight, s = 0, a = 0;
  return o && (r = o.width, l = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = o.offsetLeft, a = o.offsetTop)), { width: r, height: l, x: s + el(e), y: a };
}
function cg(e) {
  var t, n = Gt(e), o = Jr(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, l = nn(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), s = nn(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), a = -o.scrollLeft + el(e), i = -o.scrollTop;
  return Mt(r || n).direction === "rtl" && (a += nn(n.clientWidth, r ? r.clientWidth : 0) - l), { width: l, height: s, x: a, y: i };
}
function tl(e) {
  var t = Mt(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function Ms(e) {
  return ["html", "body", "#document"].indexOf(Ot(e)) >= 0 ? e.ownerDocument.body : st(e) && tl(e) ? e : Ms(Ko(e));
}
function Dn(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Ms(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), l = bt(o), s = r ? [l].concat(l.visualViewport || [], tl(o) ? o : []) : o, a = t.concat(s);
  return r ? a : a.concat(Dn(Ko(s)));
}
function fr(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function dg(e) {
  var t = Pn(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function na(e, t) {
  return t === $s ? fr(ug(e)) : Tn(t) ? dg(t) : fr(cg(Gt(e)));
}
function fg(e) {
  var t = Dn(Ko(e)), n = ["absolute", "fixed"].indexOf(Mt(e).position) >= 0, o = n && st(e) ? lo(e) : e;
  return Tn(o) ? t.filter(function(r) {
    return Tn(r) && xs(r, o) && Ot(r) !== "body";
  }) : [];
}
function pg(e, t, n) {
  var o = t === "clippingParents" ? fg(e) : [].concat(t), r = [].concat(o, [n]), l = r[0], s = r.reduce(function(a, i) {
    var u = na(e, i);
    return a.top = nn(u.top, a.top), a.right = Lo(u.right, a.right), a.bottom = Lo(u.bottom, a.bottom), a.left = nn(u.left, a.left), a;
  }, na(e, l));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Ns(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? Et(o) : null, l = o ? xn(o) : null, s = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, i;
  switch (r) {
    case qe:
      i = { x: s, y: t.y - n.height };
      break;
    case ut:
      i = { x: s, y: t.y + t.height };
      break;
    case ct:
      i = { x: t.x + t.width, y: a };
      break;
    case Ge:
      i = { x: t.x - n.width, y: a };
      break;
    default:
      i = { x: t.x, y: t.y };
  }
  var u = r ? Zr(r) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (l) {
      case On:
        i[u] = i[u] - (t[d] / 2 - n[d] / 2);
        break;
      case Xn:
        i[u] = i[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return i;
}
function Qn(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, l = n.boundary, s = l === void 0 ? Nh : l, a = n.rootBoundary, i = a === void 0 ? $s : a, u = n.elementContext, d = u === void 0 ? zn : u, f = n.altBoundary, p = f === void 0 ? !1 : f, v = n.padding, c = v === void 0 ? 0 : v, h = As(typeof c != "number" ? c : ks(c, ro)), y = d === zn ? Fh : zn, g = e.rects.popper, w = e.elements[p ? y : d], S = pg(Tn(w) ? w : w.contextElement || Gt(e.elements.popper), s, i), b = Pn(e.elements.reference), $ = Ns({ reference: b, element: g, strategy: "absolute", placement: r }), _ = fr(Object.assign({}, g, $)), C = d === zn ? _ : b, P = { top: S.top - C.top + h.top, bottom: C.bottom - S.bottom + h.bottom, left: S.left - C.left + h.left, right: C.right - S.right + h.right }, k = e.modifiersData.offset;
  if (d === zn && k) {
    var M = k[r];
    Object.keys(P).forEach(function(D) {
      var z = [ct, ut].indexOf(D) >= 0 ? 1 : -1, j = [qe, ut].indexOf(D) >= 0 ? "y" : "x";
      P[D] += M[j] * z;
    });
  }
  return P;
}
function vg(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, l = n.rootBoundary, s = n.padding, a = n.flipVariations, i = n.allowedAutoPlacements, u = i === void 0 ? Wo : i, d = xn(o), f = d ? a ? Zl : Zl.filter(function(c) {
    return xn(c) === d;
  }) : ro, p = f.filter(function(c) {
    return u.indexOf(c) >= 0;
  });
  p.length === 0 && (p = f);
  var v = p.reduce(function(c, h) {
    return c[h] = Qn(e, { placement: h, boundary: r, rootBoundary: l, padding: s })[Et(h)], c;
  }, {});
  return Object.keys(v).sort(function(c, h) {
    return v[c] - v[h];
  });
}
function hg(e) {
  if (Et(e) === Yr)
    return [];
  var t = ho(e);
  return [ta(e), t, ta(t)];
}
function gg(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, l = r === void 0 ? !0 : r, s = n.altAxis, a = s === void 0 ? !0 : s, i = n.fallbackPlacements, u = n.padding, d = n.boundary, f = n.rootBoundary, p = n.altBoundary, v = n.flipVariations, c = v === void 0 ? !0 : v, h = n.allowedAutoPlacements, y = t.options.placement, g = Et(y), w = g === y, S = i || (w || !c ? [ho(y)] : hg(y)), b = [y].concat(S).reduce(function(ve, re) {
      return ve.concat(Et(re) === Yr ? vg(t, { placement: re, boundary: d, rootBoundary: f, padding: u, flipVariations: c, allowedAutoPlacements: h }) : re);
    }, []), $ = t.rects.reference, _ = t.rects.popper, C = /* @__PURE__ */ new Map(), P = !0, k = b[0], M = 0; M < b.length; M++) {
      var D = b[M], z = Et(D), j = xn(D) === On, Z = [qe, ut].indexOf(z) >= 0, F = Z ? "width" : "height", G = Qn(t, { placement: D, boundary: d, rootBoundary: f, altBoundary: p, padding: u }), oe = Z ? j ? ct : Ge : j ? ut : qe;
      $[F] > _[F] && (oe = ho(oe));
      var H = ho(oe), A = [];
      if (l && A.push(G[z] <= 0), a && A.push(G[oe] <= 0, G[H] <= 0), A.every(function(ve) {
        return ve;
      })) {
        k = D, P = !1;
        break;
      }
      C.set(D, A);
    }
    if (P)
      for (var q = c ? 3 : 1, ue = function(ve) {
        var re = b.find(function(be) {
          var Se = C.get(be);
          if (Se)
            return Se.slice(0, ve).every(function(le) {
              return le;
            });
        });
        if (re)
          return k = re, "break";
      }, ce = q; ce > 0; ce--) {
        var me = ue(ce);
        if (me === "break")
          break;
      }
    t.placement !== k && (t.modifiersData[o]._skip = !0, t.placement = k, t.reset = !0);
  }
}
var mg = { name: "flip", enabled: !0, phase: "main", fn: gg, requiresIfExists: ["offset"], data: { _skip: !1 } };
function oa(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function ra(e) {
  return [qe, ct, ut, Ge].some(function(t) {
    return e[t] >= 0;
  });
}
function bg(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, l = t.modifiersData.preventOverflow, s = Qn(t, { elementContext: "reference" }), a = Qn(t, { altBoundary: !0 }), i = oa(s, o), u = oa(a, r, l), d = ra(i), f = ra(u);
  t.modifiersData[n] = { referenceClippingOffsets: i, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: f }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": f });
}
var yg = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: bg };
function wg(e, t, n) {
  var o = Et(e), r = [Ge, qe].indexOf(o) >= 0 ? -1 : 1, l = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = l[0], a = l[1];
  return s = s || 0, a = (a || 0) * r, [Ge, ct].indexOf(o) >= 0 ? { x: a, y: s } : { x: s, y: a };
}
function Cg(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, l = r === void 0 ? [0, 0] : r, s = Wo.reduce(function(d, f) {
    return d[f] = wg(f, t.rects, l), d;
  }, {}), a = s[t.placement], i = a.x, u = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = s;
}
var Sg = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Cg };
function Eg(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Ns({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var Fs = { name: "popperOffsets", enabled: !0, phase: "read", fn: Eg, data: {} };
function _g(e) {
  return e === "x" ? "y" : "x";
}
function Og(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, l = r === void 0 ? !0 : r, s = n.altAxis, a = s === void 0 ? !1 : s, i = n.boundary, u = n.rootBoundary, d = n.altBoundary, f = n.padding, p = n.tether, v = p === void 0 ? !0 : p, c = n.tetherOffset, h = c === void 0 ? 0 : c, y = Qn(t, { boundary: i, rootBoundary: u, padding: f, altBoundary: d }), g = Et(t.placement), w = xn(t.placement), S = !w, b = Zr(g), $ = _g(b), _ = t.modifiersData.popperOffsets, C = t.rects.reference, P = t.rects.popper, k = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, M = typeof k == "number" ? { mainAxis: k, altAxis: k } : Object.assign({ mainAxis: 0, altAxis: 0 }, k), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, z = { x: 0, y: 0 };
  if (_) {
    if (l) {
      var j, Z = b === "y" ? qe : Ge, F = b === "y" ? ut : ct, G = b === "y" ? "height" : "width", oe = _[b], H = oe + y[Z], A = oe - y[F], q = v ? -P[G] / 2 : 0, ue = w === On ? C[G] : P[G], ce = w === On ? -P[G] : -C[G], me = t.elements.arrow, ve = v && me ? Qr(me) : { width: 0, height: 0 }, re = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ls(), be = re[Z], Se = re[F], le = Hn(0, C[G], ve[G]), Te = S ? C[G] / 2 - q - le - be - M.mainAxis : ue - le - be - M.mainAxis, Fe = S ? -C[G] / 2 + q + le + Se + M.mainAxis : ce + le + Se + M.mainAxis, lt = t.elements.arrow && lo(t.elements.arrow), Ke = lt ? b === "y" ? lt.clientTop || 0 : lt.clientLeft || 0 : 0, Ye = (j = D == null ? void 0 : D[b]) != null ? j : 0, Pt = oe + Te - Ye - Ke, dt = oe + Fe - Ye, Xe = Hn(v ? Lo(H, Pt) : H, oe, v ? nn(A, dt) : A);
      _[b] = Xe, z[b] = Xe - oe;
    }
    if (a) {
      var yt, xt = b === "x" ? qe : Ge, ze = b === "x" ? ut : ct, Ie = _[$], Qe = $ === "y" ? "height" : "width", I = Ie + y[xt], ae = Ie - y[ze], Ae = [qe, Ge].indexOf(g) !== -1, Ze = (yt = D == null ? void 0 : D[$]) != null ? yt : 0, Lt = Ae ? I : Ie - C[Qe] - P[Qe] - Ze + M.altAxis, wt = Ae ? Ie + C[Qe] + P[Qe] - Ze - M.altAxis : ae, Yt = v && Ae ? Zh(Lt, Ie, wt) : Hn(v ? Lt : I, Ie, v ? wt : ae);
      _[$] = Yt, z[$] = Yt - Ie;
    }
    t.modifiersData[o] = z;
  }
}
var Tg = { name: "preventOverflow", enabled: !0, phase: "main", fn: Og, requiresIfExists: ["offset"] };
function $g(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Pg(e) {
  return e === bt(e) || !st(e) ? Jr(e) : $g(e);
}
function xg(e) {
  var t = e.getBoundingClientRect(), n = $n(t.width) / e.offsetWidth || 1, o = $n(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Lg(e, t, n) {
  n === void 0 && (n = !1);
  var o = st(t), r = st(t) && xg(t), l = Gt(t), s = Pn(e, r), a = { scrollLeft: 0, scrollTop: 0 }, i = { x: 0, y: 0 };
  return (o || !o && !n) && ((Ot(t) !== "body" || tl(l)) && (a = Pg(t)), st(t) ? (i = Pn(t, !0), i.x += t.clientLeft, i.y += t.clientTop) : l && (i.x = el(l))), { x: s.left + a.scrollLeft - i.x, y: s.top + a.scrollTop - i.y, width: s.width, height: s.height };
}
function Ag(e) {
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
function kg(e) {
  var t = Ag(e);
  return qh.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function Rg(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Ig(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var la = { placement: "bottom", modifiers: [], strategy: "absolute" };
function aa() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function nl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, l = r === void 0 ? la : r;
  return function(s, a, i) {
    i === void 0 && (i = l);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, la, l), modifiersData: {}, elements: { reference: s, popper: a }, attributes: {}, styles: {} }, d = [], f = !1, p = { state: u, setOptions: function(h) {
      var y = typeof h == "function" ? h(u.options) : h;
      c(), u.options = Object.assign({}, l, u.options, y), u.scrollParents = { reference: Tn(s) ? Dn(s) : s.contextElement ? Dn(s.contextElement) : [], popper: Dn(a) };
      var g = kg(Ig([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = g.filter(function(w) {
        return w.enabled;
      }), v(), p.update();
    }, forceUpdate: function() {
      if (!f) {
        var h = u.elements, y = h.reference, g = h.popper;
        if (aa(y, g)) {
          u.rects = { reference: Lg(y, lo(g), u.options.strategy === "fixed"), popper: Qr(g) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(P) {
            return u.modifiersData[P.name] = Object.assign({}, P.data);
          });
          for (var w = 0; w < u.orderedModifiers.length; w++) {
            if (u.reset === !0) {
              u.reset = !1, w = -1;
              continue;
            }
            var S = u.orderedModifiers[w], b = S.fn, $ = S.options, _ = $ === void 0 ? {} : $, C = S.name;
            typeof b == "function" && (u = b({ state: u, options: _, name: C, instance: p }) || u);
          }
        }
      }
    }, update: Rg(function() {
      return new Promise(function(h) {
        p.forceUpdate(), h(u);
      });
    }), destroy: function() {
      c(), f = !0;
    } };
    if (!aa(s, a))
      return p;
    p.setOptions(i).then(function(h) {
      !f && i.onFirstUpdate && i.onFirstUpdate(h);
    });
    function v() {
      u.orderedModifiers.forEach(function(h) {
        var y = h.name, g = h.options, w = g === void 0 ? {} : g, S = h.effect;
        if (typeof S == "function") {
          var b = S({ state: u, name: y, instance: p, options: w }), $ = function() {
          };
          d.push(b || $);
        }
      });
    }
    function c() {
      d.forEach(function(h) {
        return h();
      }), d = [];
    }
    return p;
  };
}
nl();
var Mg = [Is, Fs, Rs, Ps];
nl({ defaultModifiers: Mg });
var Ng = [Is, Fs, Rs, Ps, Sg, mg, Tg, ng, yg], zs = nl({ defaultModifiers: Ng });
const Fg = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: i }) => {
      const u = zg(i);
      Object.assign(s.value, u);
    },
    requires: ["computeStyles"]
  }, r = T(() => {
    const { onFirstUpdate: i, placement: u, strategy: d, modifiers: f } = m(n);
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
  }), l = mn(), s = O({
    styles: {
      popper: {
        position: m(r).strategy,
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
  return V(r, (i) => {
    const u = m(l);
    u && u.setOptions(i);
  }, {
    deep: !0
  }), V([e, t], ([i, u]) => {
    a(), !(!i || !u) && (l.value = zs(i, u, m(r)));
  }), gt(() => {
    a();
  }), {
    state: T(() => {
      var i;
      return { ...((i = m(l)) == null ? void 0 : i.state) || {} };
    }),
    styles: T(() => m(s).styles),
    attributes: T(() => m(s).attributes),
    update: () => {
      var i;
      return (i = m(l)) == null ? void 0 : i.update();
    },
    forceUpdate: () => {
      var i;
      return (i = m(l)) == null ? void 0 : i.forceUpdate();
    },
    instanceRef: T(() => m(l))
  };
};
function zg(e) {
  const t = Object.keys(e.elements), n = Oo(t.map((r) => [r, e.styles[r] || {}])), o = Oo(t.map((r) => [r, e.attributes[r]]));
  return {
    styles: n,
    attributes: o
  };
}
function Bg() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return Br(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
let vn = [];
const sa = (e) => {
  const t = e;
  t.key === Yn.esc && vn.forEach((n) => n(t));
}, Hg = (e) => {
  Le(() => {
    vn.length === 0 && document.addEventListener("keydown", sa), Ee && vn.push(e);
  }), gt(() => {
    vn = vn.filter((t) => t !== e), vn.length === 0 && Ee && document.removeEventListener("keydown", sa);
  });
};
let ia;
const Bs = () => {
  const e = Mn("namespace", qr), t = Os(), n = T(() => `${e.value}-popper-container-${t.prefix}`), o = T(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, Dg = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, Wg = () => {
  Or(() => {
    if (!Ee)
      return;
    const { id: e, selector: t } = Bs();
    (process.env.NODE_ENV === "test" || !ia && !document.body.querySelector(t.value)) && (ia = Dg(e.value));
  });
}, Kg = _e({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  }
}), Hs = ({
  showAfter: e,
  hideAfter: t,
  open: n,
  close: o
}) => {
  const { registerTimeout: r } = Bg();
  return {
    onOpen: (a) => {
      r(() => {
        n(a);
      }, m(e));
    },
    onClose: (a) => {
      r(() => {
        o(a);
      }, m(t));
    }
  };
}, Ds = Symbol("elForwardRef"), jg = (e) => {
  it(Ds, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, Vg = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), ua = O(0), ol = () => {
  const e = Mn("zIndex", 2e3), t = T(() => e.value + ua.value);
  return {
    initialZIndex: e,
    currentZIndex: t,
    nextZIndex: () => (ua.value++, t.value)
  };
};
function Ug(e) {
  const t = O();
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
var ge = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
const qg = _e({
  size: {
    type: de([Number, String])
  },
  color: {
    type: String
  }
}), Gg = U({
  name: "ElIcon",
  inheritAttrs: !1
}), Yg = /* @__PURE__ */ U({
  ...Gg,
  props: qg,
  setup(e) {
    const t = e, n = ne("icon"), o = T(() => {
      const { size: r, color: l } = t;
      return !r && !l ? {} : {
        fontSize: $o(r) ? void 0 : cr(r),
        "--color": l
      };
    });
    return (r, l) => (x(), N("i", Kt({
      class: m(n).b(),
      style: m(o)
    }, r.$attrs), [
      pe(r.$slots, "default")
    ], 16));
  }
});
var Xg = /* @__PURE__ */ ge(Yg, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const Je = Tt(Xg);
let pt;
const Qg = `
  height:0 !important;
  visibility:hidden !important;
  ${wh() ? "" : "overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, Zg = [
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
function Jg(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), r = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: Zg.map((s) => `${s}:${t.getPropertyValue(s)}`).join(";"), paddingSize: o, borderSize: r, boxSizing: n };
}
function ca(e, t = 1, n) {
  var o;
  pt || (pt = document.createElement("textarea"), document.body.appendChild(pt));
  const { paddingSize: r, borderSize: l, boxSizing: s, contextStyle: a } = Jg(e);
  pt.setAttribute("style", `${a};${Qg}`), pt.value = e.value || e.placeholder || "";
  let i = pt.scrollHeight;
  const u = {};
  s === "border-box" ? i = i + l : s === "content-box" && (i = i - r), pt.value = "";
  const d = pt.scrollHeight - r;
  if (Pe(t)) {
    let f = d * t;
    s === "border-box" && (f = f + r + l), i = Math.max(f, i), u.minHeight = `${f}px`;
  }
  if (Pe(n)) {
    let f = d * n;
    s === "border-box" && (f = f + r + l), i = Math.min(f, i);
  }
  return u.height = `${i}px`, (o = pt.parentNode) == null || o.removeChild(pt), pt = void 0, u;
}
const em = _e({
  id: {
    type: String,
    default: void 0
  },
  size: Do,
  disabled: Boolean,
  modelValue: {
    type: de([
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
    type: de([Boolean, Object]),
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
    type: qt
  },
  prefixIcon: {
    type: qt
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
    type: de([Object, Array, String]),
    default: () => Kr({})
  }
}), tm = {
  [We]: (e) => et(e),
  input: (e) => et(e),
  change: (e) => et(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, nm = ["role"], om = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form"], rm = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form"], lm = U({
  name: "ElInput",
  inheritAttrs: !1
}), am = /* @__PURE__ */ U({
  ...lm,
  props: em,
  emits: tm,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = $i(), l = Tr(), s = T(() => {
      const I = {};
      return o.containerRole === "combobox" && (I["aria-haspopup"] = r["aria-haspopup"], I["aria-owns"] = r["aria-owns"], I["aria-expanded"] = r["aria-expanded"]), I;
    }), a = T(() => [
      o.type === "textarea" ? y.b() : h.b(),
      h.m(v.value),
      h.is("disabled", c.value),
      h.is("exceed", ue.value),
      {
        [h.b("group")]: l.prepend || l.append,
        [h.bm("group", "append")]: l.append,
        [h.bm("group", "prepend")]: l.prepend,
        [h.m("prefix")]: l.prefix || o.prefixIcon,
        [h.m("suffix")]: l.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [h.bm("suffix", "password-clear")]: oe.value && H.value
      },
      r.class
    ]), i = T(() => [
      h.e("wrapper"),
      h.is("focus", S.value)
    ]), u = Eh({
      excludeKeys: T(() => Object.keys(s.value))
    }), { form: d, formItem: f } = oo(), { inputId: p } = Gr(o, {
      formItemContext: f
    }), v = _n(), c = _s(), h = ne("input"), y = ne("textarea"), g = mn(), w = mn(), S = O(!1), b = O(!1), $ = O(!1), _ = O(!1), C = O(), P = mn(o.inputStyle), k = T(() => g.value || w.value), M = T(() => {
      var I;
      return (I = d == null ? void 0 : d.statusIcon) != null ? I : !1;
    }), D = T(() => (f == null ? void 0 : f.validateState) || ""), z = T(() => D.value && gh[D.value]), j = T(() => _.value ? vh : Zv), Z = T(() => [
      r.style,
      o.inputStyle
    ]), F = T(() => [
      o.inputStyle,
      P.value,
      { resize: o.resize }
    ]), G = T(() => Bo(o.modelValue) ? "" : String(o.modelValue)), oe = T(() => o.clearable && !c.value && !o.readonly && !!G.value && (S.value || b.value)), H = T(() => o.showPassword && !c.value && !o.readonly && !!G.value && (!!G.value || S.value)), A = T(() => o.showWordLimit && !!u.value.maxlength && (o.type === "text" || o.type === "textarea") && !c.value && !o.readonly && !o.showPassword), q = T(() => Array.from(G.value).length), ue = T(() => !!A.value && q.value > Number(u.value.maxlength)), ce = T(() => !!l.suffix || !!o.suffixIcon || oe.value || o.showPassword || A.value || !!D.value && M.value), [me, ve] = Ug(g);
    En(w, (I) => {
      if (!A.value || o.resize !== "both")
        return;
      const ae = I[0], { width: Ae } = ae.contentRect;
      C.value = {
        right: `calc(100% - ${Ae + 15 + 6}px)`
      };
    });
    const re = () => {
      const { type: I, autosize: ae } = o;
      if (!(!Ee || I !== "textarea" || !w.value))
        if (ae) {
          const Ae = ot(ae) ? ae.minRows : void 0, Ze = ot(ae) ? ae.maxRows : void 0;
          P.value = {
            ...ca(w.value, Ae, Ze)
          };
        } else
          P.value = {
            minHeight: ca(w.value).minHeight
          };
    }, be = () => {
      const I = k.value;
      !I || I.value === G.value || (I.value = G.value);
    }, Se = async (I) => {
      me();
      let { value: ae } = I.target;
      if (o.formatter && (ae = o.parser ? o.parser(ae) : ae, ae = o.formatter(ae)), !$.value) {
        if (ae === G.value) {
          be();
          return;
        }
        n(We, ae), n("input", ae), await se(), be(), ve();
      }
    }, le = (I) => {
      n("change", I.target.value);
    }, Te = (I) => {
      n("compositionstart", I), $.value = !0;
    }, Fe = (I) => {
      var ae;
      n("compositionupdate", I);
      const Ae = (ae = I.target) == null ? void 0 : ae.value, Ze = Ae[Ae.length - 1] || "";
      $.value = !ys(Ze);
    }, lt = (I) => {
      n("compositionend", I), $.value && ($.value = !1, Se(I));
    }, Ke = () => {
      _.value = !_.value, Ye();
    }, Ye = async () => {
      var I;
      await se(), (I = k.value) == null || I.focus();
    }, Pt = () => {
      var I;
      return (I = k.value) == null ? void 0 : I.blur();
    }, dt = (I) => {
      S.value = !0, n("focus", I);
    }, Xe = (I) => {
      var ae;
      S.value = !1, n("blur", I), o.validateEvent && ((ae = f == null ? void 0 : f.validate) == null || ae.call(f, "blur").catch((Ae) => Ne(Ae)));
    }, yt = (I) => {
      b.value = !1, n("mouseleave", I);
    }, xt = (I) => {
      b.value = !0, n("mouseenter", I);
    }, ze = (I) => {
      n("keydown", I);
    }, Ie = () => {
      var I;
      (I = k.value) == null || I.select();
    }, Qe = () => {
      n(We, ""), n("change", ""), n("clear"), n("input", "");
    };
    return V(() => o.modelValue, () => {
      var I;
      se(() => re()), o.validateEvent && ((I = f == null ? void 0 : f.validate) == null || I.call(f, "change").catch((ae) => Ne(ae)));
    }), V(G, () => be()), V(() => o.type, async () => {
      await se(), be(), re();
    }), Le(() => {
      !o.formatter && o.parser && Ne("ElInput", "If you set the parser, you also need to set the formatter."), be(), se(re);
    }), t({
      input: g,
      textarea: w,
      ref: k,
      textareaStyle: F,
      autosize: Wt(o, "autosize"),
      focus: Ye,
      blur: Pt,
      select: Ie,
      clear: Qe,
      resizeTextarea: re
    }), (I, ae) => xe((x(), N("div", Kt(m(s), {
      class: m(a),
      style: m(Z),
      role: I.containerRole,
      onMouseenter: xt,
      onMouseleave: yt
    }), [
      Y(" input "),
      I.type !== "textarea" ? (x(), N(Ue, { key: 0 }, [
        Y(" prepend slot "),
        I.$slots.prepend ? (x(), N("div", {
          key: 0,
          class: R(m(h).be("group", "prepend"))
        }, [
          pe(I.$slots, "prepend")
        ], 2)) : Y("v-if", !0),
        K("div", {
          class: R(m(i))
        }, [
          Y(" prefix slot "),
          I.$slots.prefix || I.prefixIcon ? (x(), N("span", {
            key: 0,
            class: R(m(h).e("prefix"))
          }, [
            K("span", {
              class: R(m(h).e("prefix-inner")),
              onClick: Ye
            }, [
              pe(I.$slots, "prefix"),
              I.prefixIcon ? (x(), J(m(Je), {
                key: 0,
                class: R(m(h).e("icon"))
              }, {
                default: te(() => [
                  (x(), J(ht(I.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : Y("v-if", !0)
            ], 2)
          ], 2)) : Y("v-if", !0),
          K("input", Kt({
            id: m(p),
            ref_key: "input",
            ref: g,
            class: m(h).e("inner")
          }, m(u), {
            type: I.showPassword ? _.value ? "text" : "password" : I.type,
            disabled: m(c),
            formatter: I.formatter,
            parser: I.parser,
            readonly: I.readonly,
            autocomplete: I.autocomplete,
            tabindex: I.tabindex,
            "aria-label": I.label,
            placeholder: I.placeholder,
            style: I.inputStyle,
            form: o.form,
            onCompositionstart: Te,
            onCompositionupdate: Fe,
            onCompositionend: lt,
            onInput: Se,
            onFocus: dt,
            onBlur: Xe,
            onChange: le,
            onKeydown: ze
          }), null, 16, om),
          Y(" suffix slot "),
          m(ce) ? (x(), N("span", {
            key: 1,
            class: R(m(h).e("suffix"))
          }, [
            K("span", {
              class: R(m(h).e("suffix-inner")),
              onClick: Ye
            }, [
              !m(oe) || !m(H) || !m(A) ? (x(), N(Ue, { key: 0 }, [
                pe(I.$slots, "suffix"),
                I.suffixIcon ? (x(), J(m(Je), {
                  key: 0,
                  class: R(m(h).e("icon"))
                }, {
                  default: te(() => [
                    (x(), J(ht(I.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : Y("v-if", !0)
              ], 64)) : Y("v-if", !0),
              m(oe) ? (x(), J(m(Je), {
                key: 1,
                class: R([m(h).e("icon"), m(h).e("clear")]),
                onMousedown: vt(m(qn), ["prevent"]),
                onClick: Qe
              }, {
                default: te(() => [
                  he(m(Wr))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : Y("v-if", !0),
              m(H) ? (x(), J(m(Je), {
                key: 2,
                class: R([m(h).e("icon"), m(h).e("password")]),
                onClick: Ke
              }, {
                default: te(() => [
                  (x(), J(ht(m(j))))
                ]),
                _: 1
              }, 8, ["class"])) : Y("v-if", !0),
              m(A) ? (x(), N("span", {
                key: 3,
                class: R(m(h).e("count"))
              }, [
                K("span", {
                  class: R(m(h).e("count-inner"))
                }, ye(m(q)) + " / " + ye(m(u).maxlength), 3)
              ], 2)) : Y("v-if", !0),
              m(D) && m(z) && m(M) ? (x(), J(m(Je), {
                key: 4,
                class: R([
                  m(h).e("icon"),
                  m(h).e("validateIcon"),
                  m(h).is("loading", m(D) === "validating")
                ])
              }, {
                default: te(() => [
                  (x(), J(ht(m(z))))
                ]),
                _: 1
              }, 8, ["class"])) : Y("v-if", !0)
            ], 2)
          ], 2)) : Y("v-if", !0)
        ], 2),
        Y(" append slot "),
        I.$slots.append ? (x(), N("div", {
          key: 1,
          class: R(m(h).be("group", "append"))
        }, [
          pe(I.$slots, "append")
        ], 2)) : Y("v-if", !0)
      ], 64)) : (x(), N(Ue, { key: 1 }, [
        Y(" textarea "),
        K("textarea", Kt({
          id: m(p),
          ref_key: "textarea",
          ref: w,
          class: m(y).e("inner")
        }, m(u), {
          tabindex: I.tabindex,
          disabled: m(c),
          readonly: I.readonly,
          autocomplete: I.autocomplete,
          style: m(F),
          "aria-label": I.label,
          placeholder: I.placeholder,
          form: o.form,
          onCompositionstart: Te,
          onCompositionupdate: Fe,
          onCompositionend: lt,
          onInput: Se,
          onFocus: dt,
          onBlur: Xe,
          onChange: le,
          onKeydown: ze
        }), null, 16, rm),
        m(A) ? (x(), N("span", {
          key: 0,
          style: Oe(C.value),
          class: R(m(h).e("count"))
        }, ye(m(q)) + " / " + ye(m(u).maxlength), 7)) : Y("v-if", !0)
      ], 64))
    ], 16, nm)), [
      [It, I.type !== "hidden"]
    ]);
  }
});
var sm = /* @__PURE__ */ ge(am, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const Ws = Tt(sm), gn = 4, im = {
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
}, um = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), cm = _e({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), dm = "Thumb", fm = /* @__PURE__ */ U({
  __name: "thumb",
  props: cm,
  setup(e) {
    const t = e, n = ie(Cs), o = ne("scrollbar");
    n || ps(dm, "can not inject scrollbar context");
    const r = O(), l = O(), s = O({}), a = O(!1);
    let i = !1, u = !1, d = Ee ? document.onselectstart : null;
    const f = T(() => im[t.vertical ? "vertical" : "horizontal"]), p = T(() => um({
      size: t.size,
      move: t.move,
      bar: f.value
    })), v = T(() => r.value[f.value.offset] ** 2 / n.wrapElement[f.value.scrollSize] / t.ratio / l.value[f.value.offset]), c = (_) => {
      var C;
      if (_.stopPropagation(), _.ctrlKey || [1, 2].includes(_.button))
        return;
      (C = window.getSelection()) == null || C.removeAllRanges(), y(_);
      const P = _.currentTarget;
      P && (s.value[f.value.axis] = P[f.value.offset] - (_[f.value.client] - P.getBoundingClientRect()[f.value.direction]));
    }, h = (_) => {
      if (!l.value || !r.value || !n.wrapElement)
        return;
      const C = Math.abs(_.target.getBoundingClientRect()[f.value.direction] - _[f.value.client]), P = l.value[f.value.offset] / 2, k = (C - P) * 100 * v.value / r.value[f.value.offset];
      n.wrapElement[f.value.scroll] = k * n.wrapElement[f.value.scrollSize] / 100;
    }, y = (_) => {
      _.stopImmediatePropagation(), i = !0, document.addEventListener("mousemove", g), document.addEventListener("mouseup", w), d = document.onselectstart, document.onselectstart = () => !1;
    }, g = (_) => {
      if (!r.value || !l.value || i === !1)
        return;
      const C = s.value[f.value.axis];
      if (!C)
        return;
      const P = (r.value.getBoundingClientRect()[f.value.direction] - _[f.value.client]) * -1, k = l.value[f.value.offset] - C, M = (P - k) * 100 * v.value / r.value[f.value.offset];
      n.wrapElement[f.value.scroll] = M * n.wrapElement[f.value.scrollSize] / 100;
    }, w = () => {
      i = !1, s.value[f.value.axis] = 0, document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", w), $(), u && (a.value = !1);
    }, S = () => {
      u = !1, a.value = !!t.size;
    }, b = () => {
      u = !0, a.value = i;
    };
    gt(() => {
      $(), document.removeEventListener("mouseup", w);
    });
    const $ = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return jt(Wt(n, "scrollbarElement"), "mousemove", S), jt(Wt(n, "scrollbarElement"), "mouseleave", b), (_, C) => (x(), J(Zn, {
      name: m(o).b("fade"),
      persisted: ""
    }, {
      default: te(() => [
        xe(K("div", {
          ref_key: "instance",
          ref: r,
          class: R([m(o).e("bar"), m(o).is(m(f).key)]),
          onMousedown: h
        }, [
          K("div", {
            ref_key: "thumb",
            ref: l,
            class: R(m(o).e("thumb")),
            style: Oe(m(p)),
            onMousedown: c
          }, null, 38)
        ], 34), [
          [It, _.always || a.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var da = /* @__PURE__ */ ge(fm, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const pm = _e({
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
}), vm = /* @__PURE__ */ U({
  __name: "bar",
  props: pm,
  setup(e, { expose: t }) {
    const n = e, o = O(0), r = O(0);
    return t({
      handleScroll: (s) => {
        if (s) {
          const a = s.offsetHeight - gn, i = s.offsetWidth - gn;
          r.value = s.scrollTop * 100 / a * n.ratioY, o.value = s.scrollLeft * 100 / i * n.ratioX;
        }
      }
    }), (s, a) => (x(), N(Ue, null, [
      he(da, {
        move: o.value,
        ratio: s.ratioX,
        size: s.width,
        always: s.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      he(da, {
        move: r.value,
        ratio: s.ratioY,
        size: s.height,
        vertical: "",
        always: s.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var hm = /* @__PURE__ */ ge(vm, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const gm = _e({
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
    type: de([String, Object, Array]),
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
}), mm = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(Pe)
}, pr = "ElScrollbar", bm = U({
  name: pr
}), ym = /* @__PURE__ */ U({
  ...bm,
  props: gm,
  emits: mm,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = ne("scrollbar");
    let l, s;
    const a = O(), i = O(), u = O(), d = O("0"), f = O("0"), p = O(), v = O(1), c = O(1), h = T(() => {
      const C = {};
      return o.height && (C.height = cr(o.height)), o.maxHeight && (C.maxHeight = cr(o.maxHeight)), [o.wrapStyle, C];
    }), y = T(() => [
      o.wrapClass,
      r.e("wrap"),
      { [r.em("wrap", "hidden-default")]: !o.native }
    ]), g = T(() => [r.e("view"), o.viewClass]), w = () => {
      var C;
      i.value && ((C = p.value) == null || C.handleScroll(i.value), n("scroll", {
        scrollTop: i.value.scrollTop,
        scrollLeft: i.value.scrollLeft
      }));
    };
    function S(C, P) {
      ot(C) ? i.value.scrollTo(C) : Pe(C) && Pe(P) && i.value.scrollTo(C, P);
    }
    const b = (C) => {
      if (!Pe(C)) {
        Ne(pr, "value must be a number");
        return;
      }
      i.value.scrollTop = C;
    }, $ = (C) => {
      if (!Pe(C)) {
        Ne(pr, "value must be a number");
        return;
      }
      i.value.scrollLeft = C;
    }, _ = () => {
      if (!i.value)
        return;
      const C = i.value.offsetHeight - gn, P = i.value.offsetWidth - gn, k = C ** 2 / i.value.scrollHeight, M = P ** 2 / i.value.scrollWidth, D = Math.max(k, o.minSize), z = Math.max(M, o.minSize);
      v.value = k / (C - k) / (D / (C - D)), c.value = M / (P - M) / (z / (P - z)), f.value = D + gn < C ? `${D}px` : "", d.value = z + gn < P ? `${z}px` : "";
    };
    return V(() => o.noresize, (C) => {
      C ? (l == null || l(), s == null || s()) : ({ stop: l } = En(u, _), s = jt("resize", _));
    }, { immediate: !0 }), V(() => [o.maxHeight, o.height], () => {
      o.native || se(() => {
        var C;
        _(), i.value && ((C = p.value) == null || C.handleScroll(i.value));
      });
    }), it(Cs, Vt({
      scrollbarElement: a,
      wrapElement: i
    })), Le(() => {
      o.native || se(() => {
        _();
      });
    }), Na(() => _()), t({
      wrapRef: i,
      update: _,
      scrollTo: S,
      setScrollTop: b,
      setScrollLeft: $,
      handleScroll: w
    }), (C, P) => (x(), N("div", {
      ref_key: "scrollbarRef",
      ref: a,
      class: R(m(r).b())
    }, [
      K("div", {
        ref_key: "wrapRef",
        ref: i,
        class: R(m(y)),
        style: Oe(m(h)),
        onScroll: w
      }, [
        (x(), J(ht(C.tag), {
          ref_key: "resizeRef",
          ref: u,
          class: R(m(g)),
          style: Oe(C.viewStyle)
        }, {
          default: te(() => [
            pe(C.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      C.native ? Y("v-if", !0) : (x(), J(hm, {
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
var wm = /* @__PURE__ */ ge(ym, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const rl = Tt(wm), Cm = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Ks = _e({
  role: {
    type: String,
    values: Cm,
    default: "tooltip"
  }
}), Sm = U({
  name: "ElPopper",
  inheritAttrs: !1
}), Em = /* @__PURE__ */ U({
  ...Sm,
  props: Ks,
  setup(e, { expose: t }) {
    const n = e, o = O(), r = O(), l = O(), s = O(), a = T(() => n.role), i = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: l,
      referenceRef: s,
      role: a
    };
    return t(i), it(Vr, i), (u, d) => pe(u.$slots, "default");
  }
});
var _m = /* @__PURE__ */ ge(Em, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const js = _e({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Om = U({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Tm = /* @__PURE__ */ U({
  ...Om,
  props: js,
  setup(e, { expose: t }) {
    const n = e, o = ne("popper"), { arrowOffset: r, arrowRef: l, arrowStyle: s } = ie(Ss, void 0);
    return V(() => n.arrowOffset, (a) => {
      r.value = a;
    }), gt(() => {
      l.value = void 0;
    }), t({
      arrowRef: l
    }), (a, i) => (x(), N("span", {
      ref_key: "arrowRef",
      ref: l,
      class: R(m(o).e("arrow")),
      style: Oe(m(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var $m = /* @__PURE__ */ ge(Tm, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const Qo = "ElOnlyChild", Pm = U({
  name: Qo,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = ie(Ds), l = Vg((o = r == null ? void 0 : r.setForwardRef) != null ? o : qn);
    return () => {
      var s;
      const a = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!a)
        return null;
      if (a.length > 1)
        return Ne(Qo, "requires exact only one valid child."), null;
      const i = Vs(a);
      return i ? xe(Pi(i, n), [[l]]) : (Ne(Qo, "no valid child node found"), null);
    };
  }
});
function Vs(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (ot(n))
      switch (n.type) {
        case Fa:
          continue;
        case xi:
        case "svg":
          return fa(n);
        case Ue:
          return Vs(n.children);
        default:
          return n;
      }
    return fa(n);
  }
  return null;
}
function fa(e) {
  const t = ne("only-child");
  return he("span", {
    class: t.e("content")
  }, [e]);
}
const Us = _e({
  virtualRef: {
    type: de(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: de(Function)
  },
  onMouseleave: {
    type: de(Function)
  },
  onClick: {
    type: de(Function)
  },
  onKeydown: {
    type: de(Function)
  },
  onFocus: {
    type: de(Function)
  },
  onBlur: {
    type: de(Function)
  },
  onContextmenu: {
    type: de(Function)
  },
  id: String,
  open: Boolean
}), xm = U({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), Lm = /* @__PURE__ */ U({
  ...xm,
  props: Us,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = ie(Vr, void 0);
    jg(r);
    const l = T(() => a.value ? n.id : void 0), s = T(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), a = T(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), i = T(() => a.value ? `${n.open}` : void 0);
    let u;
    return Le(() => {
      V(() => n.virtualRef, (d) => {
        d && (r.value = Dt(d));
      }, {
        immediate: !0
      }), V(r, (d, f) => {
        u == null || u(), u = void 0, Gn(d) && ([
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
        }), u = V([l, s, a, i], (p) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((v, c) => {
            Bo(p[c]) ? d.removeAttribute(v) : d.setAttribute(v, p[c]);
          });
        }, { immediate: !0 })), Gn(f) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((p) => f.removeAttribute(p));
      }, {
        immediate: !0
      });
    }), gt(() => {
      u == null || u(), u = void 0;
    }), t({
      triggerRef: r
    }), (d, f) => d.virtualTriggering ? Y("v-if", !0) : (x(), J(m(Pm), Kt({ key: 0 }, d.$attrs, {
      "aria-controls": m(l),
      "aria-describedby": m(s),
      "aria-expanded": m(i),
      "aria-haspopup": m(a)
    }), {
      default: te(() => [
        pe(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var Am = /* @__PURE__ */ ge(Lm, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
const Zo = "focus-trap.focus-after-trapped", Jo = "focus-trap.focus-after-released", km = "focus-trap.focusout-prevented", pa = {
  cancelable: !0,
  bubbles: !1
}, Rm = {
  cancelable: !0,
  bubbles: !1
}, va = "focusAfterTrapped", ha = "focusAfterReleased", Im = Symbol("elFocusTrap"), ll = O(), jo = O(0), al = O(0);
let io = 0;
const qs = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, ga = (e, t) => {
  for (const n of e)
    if (!Mm(n, t))
      return n;
}, Mm = (e, t) => {
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
}, Nm = (e) => {
  const t = qs(e), n = ga(t, e), o = ga(t.reverse(), e);
  return [n, o];
}, Fm = (e) => e instanceof HTMLInputElement && "select" in e, Bt = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), al.value = window.performance.now(), e !== n && Fm(e) && t && e.select();
  }
};
function ma(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const zm = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = ma(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, l;
      e = ma(e, o), (l = (r = e[0]) == null ? void 0 : r.resume) == null || l.call(r);
    }
  };
}, Bm = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (Bt(o, t), document.activeElement !== n)
      return;
}, ba = zm(), Hm = () => jo.value > al.value, uo = () => {
  ll.value = "pointer", jo.value = window.performance.now();
}, ya = () => {
  ll.value = "keyboard", jo.value = window.performance.now();
}, Dm = () => (Le(() => {
  io === 0 && (document.addEventListener("mousedown", uo), document.addEventListener("touchstart", uo), document.addEventListener("keydown", ya)), io++;
}), gt(() => {
  io--, io <= 0 && (document.removeEventListener("mousedown", uo), document.removeEventListener("touchstart", uo), document.removeEventListener("keydown", ya));
}), {
  focusReason: ll,
  lastUserFocusTimestamp: jo,
  lastAutomatedFocusTimestamp: al
}), co = (e) => new CustomEvent(km, {
  ...Rm,
  detail: e
}), Wm = U({
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
    va,
    ha,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = O();
    let o, r;
    const { focusReason: l } = Dm();
    Hg((c) => {
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
      const { key: h, altKey: y, ctrlKey: g, metaKey: w, currentTarget: S, shiftKey: b } = c, { loop: $ } = e, _ = h === Yn.tab && !y && !g && !w, C = document.activeElement;
      if (_ && C) {
        const P = S, [k, M] = Nm(P);
        if (k && M) {
          if (!b && C === M) {
            const z = co({
              focusReason: l.value
            });
            t("focusout-prevented", z), z.defaultPrevented || (c.preventDefault(), $ && Bt(k, !0));
          } else if (b && [k, P].includes(C)) {
            const z = co({
              focusReason: l.value
            });
            t("focusout-prevented", z), z.defaultPrevented || (c.preventDefault(), $ && Bt(M, !0));
          }
        } else if (C === P) {
          const z = co({
            focusReason: l.value
          });
          t("focusout-prevented", z), z.defaultPrevented || c.preventDefault();
        }
      }
    };
    it(Im, {
      focusTrapRef: n,
      onKeydown: a
    }), V(() => e.focusTrapEl, (c) => {
      c && (n.value = c);
    }, { immediate: !0 }), V([n], ([c], [h]) => {
      c && (c.addEventListener("keydown", a), c.addEventListener("focusin", d), c.addEventListener("focusout", f)), h && (h.removeEventListener("keydown", a), h.removeEventListener("focusin", d), h.removeEventListener("focusout", f));
    });
    const i = (c) => {
      t(va, c);
    }, u = (c) => t(ha, c), d = (c) => {
      const h = m(n);
      if (!h)
        return;
      const y = c.target, g = c.relatedTarget, w = y && h.contains(y);
      e.trapped || g && h.contains(g) || (o = g), w && t("focusin", c), !s.paused && e.trapped && (w ? r = y : Bt(r, !0));
    }, f = (c) => {
      const h = m(n);
      if (!(s.paused || !h))
        if (e.trapped) {
          const y = c.relatedTarget;
          !Bo(y) && !h.contains(y) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const g = co({
                focusReason: l.value
              });
              t("focusout-prevented", g), g.defaultPrevented || Bt(r, !0);
            }
          }, 0);
        } else {
          const y = c.target;
          y && h.contains(y) || t("focusout", c);
        }
    };
    async function p() {
      await se();
      const c = m(n);
      if (c) {
        ba.push(s);
        const h = c.contains(document.activeElement) ? o : document.activeElement;
        if (o = h, !c.contains(h)) {
          const g = new Event(Zo, pa);
          c.addEventListener(Zo, i), c.dispatchEvent(g), g.defaultPrevented || se(() => {
            let w = e.focusStartEl;
            et(w) || (Bt(w), document.activeElement !== w && (w = "first")), w === "first" && Bm(qs(c), !0), (document.activeElement === h || w === "container") && Bt(c);
          });
        }
      }
    }
    function v() {
      const c = m(n);
      if (c) {
        c.removeEventListener(Zo, i);
        const h = new CustomEvent(Jo, {
          ...pa,
          detail: {
            focusReason: l.value
          }
        });
        c.addEventListener(Jo, u), c.dispatchEvent(h), !h.defaultPrevented && (l.value == "keyboard" || !Hm() || c.contains(document.activeElement)) && Bt(o ?? document.body), c.removeEventListener(Jo, i), ba.remove(s);
      }
    }
    return Le(() => {
      e.trapped && p(), V(() => e.trapped, (c) => {
        c ? p() : v();
      });
    }), gt(() => {
      e.trapped && v();
    }), {
      onKeydown: a
    };
  }
});
function Km(e, t, n, o, r, l) {
  return pe(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var jm = /* @__PURE__ */ ge(Wm, [["render", Km], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const Vm = ["fixed", "absolute"], Um = _e({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: de(Array),
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
    values: Wo,
    default: "bottom"
  },
  popperOptions: {
    type: de(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Vm,
    default: "absolute"
  }
}), Gs = _e({
  ...Um,
  id: String,
  style: {
    type: de([String, Array, Object])
  },
  className: {
    type: de([String, Array, Object])
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
    type: de([String, Array, Object])
  },
  popperStyle: {
    type: de([String, Array, Object])
  },
  referenceEl: {
    type: de(Object)
  },
  triggerTargetEl: {
    type: de(Object)
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
}), qm = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Gm = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: r } = e, l = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: [...Xm(e), ...t]
  };
  return Qm(l, r == null ? void 0 : r.modifiers), l;
}, Ym = (e) => {
  if (Ee)
    return Dt(e);
};
function Xm(e) {
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
function Qm(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const Zm = 0, Jm = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: r } = ie(Vr, void 0), l = O(), s = O(), a = T(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), i = T(() => {
    var g;
    const w = m(l), S = (g = m(s)) != null ? g : Zm;
    return {
      name: "arrow",
      enabled: !hp(w),
      options: {
        element: w,
        padding: S
      }
    };
  }), u = T(() => ({
    onFirstUpdate: () => {
      c();
    },
    ...Gm(e, [
      m(i),
      m(a)
    ])
  })), d = T(() => Ym(e.referenceEl) || m(o)), { attributes: f, state: p, styles: v, update: c, forceUpdate: h, instanceRef: y } = Fg(d, n, u);
  return V(y, (g) => t.value = g), Le(() => {
    V(() => {
      var g;
      return (g = m(d)) == null ? void 0 : g.getBoundingClientRect();
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
    forceUpdate: h,
    update: c
  };
}, eb = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: r } = ol(), l = ne("popper"), s = T(() => m(t).popper), a = O(e.zIndex || r()), i = T(() => [
    l.b(),
    l.is("pure", e.pure),
    l.is(e.effect),
    e.popperClass
  ]), u = T(() => [
    { zIndex: m(a) },
    e.popperStyle || {},
    m(n).popper
  ]), d = T(() => o.value === "dialog" ? "false" : void 0), f = T(() => m(n).arrow || {});
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
}, tb = (e, t) => {
  const n = O(!1), o = O();
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
}, nb = U({
  name: "ElPopperContent"
}), ob = /* @__PURE__ */ U({
  ...nb,
  props: Gs,
  emits: qm,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: r,
      trapped: l,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: a,
      onFocusInTrap: i,
      onFocusoutPrevented: u,
      onReleaseRequested: d
    } = tb(o, n), { attributes: f, arrowRef: p, contentRef: v, styles: c, instanceRef: h, role: y, update: g } = Jm(o), {
      ariaModal: w,
      arrowStyle: S,
      contentAttrs: b,
      contentClass: $,
      contentStyle: _,
      updateZIndex: C
    } = eb(o, {
      styles: c,
      attributes: f,
      role: y
    }), P = ie(xo, void 0), k = O();
    it(Ss, {
      arrowStyle: S,
      arrowRef: p,
      arrowOffset: k
    }), P && (P.addInputId || P.removeInputId) && it(xo, {
      ...P,
      addInputId: qn,
      removeInputId: qn
    });
    let M;
    const D = (j = !0) => {
      g(), j && C();
    }, z = () => {
      D(!1), o.visible && o.focusOnShow ? l.value = !0 : o.visible === !1 && (l.value = !1);
    };
    return Le(() => {
      V(() => o.triggerTargetEl, (j, Z) => {
        M == null || M(), M = void 0;
        const F = m(j || v.value), G = m(Z || v.value);
        Gn(F) && (M = V([y, () => o.ariaLabel, w, () => o.id], (oe) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((H, A) => {
            Bo(oe[A]) ? F.removeAttribute(H) : F.setAttribute(H, oe[A]);
          });
        }, { immediate: !0 })), G !== F && Gn(G) && ["role", "aria-label", "aria-modal", "id"].forEach((oe) => {
          G.removeAttribute(oe);
        });
      }, { immediate: !0 }), V(() => o.visible, z, { immediate: !0 });
    }), gt(() => {
      M == null || M(), M = void 0;
    }), t({
      popperContentRef: v,
      popperInstanceRef: h,
      updatePopper: D,
      contentStyle: _
    }), (j, Z) => (x(), N("div", Kt({
      ref_key: "contentRef",
      ref: v
    }, m(b), {
      style: m(_),
      class: m($),
      tabindex: "-1",
      onMouseenter: Z[0] || (Z[0] = (F) => j.$emit("mouseenter", F)),
      onMouseleave: Z[1] || (Z[1] = (F) => j.$emit("mouseleave", F))
    }), [
      he(m(jm), {
        trapped: m(l),
        "trap-on-focus-in": !0,
        "focus-trap-el": m(v),
        "focus-start-el": m(r),
        onFocusAfterTrapped: m(a),
        onFocusAfterReleased: m(s),
        onFocusin: m(i),
        onFocusoutPrevented: m(u),
        onReleaseRequested: m(d)
      }, {
        default: te(() => [
          pe(j.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var rb = /* @__PURE__ */ ge(ob, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const lb = Tt(_m), ab = ne("tooltip"), sl = _e({
  ...Kg,
  ...Gs,
  appendTo: {
    type: de([String, Object])
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
    type: de(Boolean),
    default: null
  },
  transition: {
    type: String,
    default: `${ab.namespace.value}-fade-in-linear`
  },
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: {
    type: Boolean
  }
}), Ys = _e({
  ...Us,
  disabled: Boolean,
  trigger: {
    type: de([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: de(Array),
    default: () => [Yn.enter, Yn.space]
  }
}), {
  useModelToggleProps: sb,
  useModelToggleEmits: ib,
  useModelToggle: ub
} = Mh("visible"), cb = _e({
  ...Ks,
  ...sb,
  ...sl,
  ...Ys,
  ...js,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), db = [
  ...ib,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], fb = (e, t) => an(e) ? e.includes(t) : e === t, pn = (e, t, n) => (o) => {
  fb(m(e), t) && n(o);
}, pb = U({
  name: "ElTooltipTrigger"
}), vb = /* @__PURE__ */ U({
  ...pb,
  props: Ys,
  setup(e, { expose: t }) {
    const n = e, o = ne("tooltip"), { controlled: r, id: l, open: s, onOpen: a, onClose: i, onToggle: u } = ie(Ur, void 0), d = O(null), f = () => {
      if (m(r) || n.disabled)
        return !0;
    }, p = Wt(n, "trigger"), v = Rt(f, pn(p, "hover", a)), c = Rt(f, pn(p, "hover", i)), h = Rt(f, pn(p, "click", (b) => {
      b.button === 0 && u(b);
    })), y = Rt(f, pn(p, "focus", a)), g = Rt(f, pn(p, "focus", i)), w = Rt(f, pn(p, "contextmenu", (b) => {
      b.preventDefault(), u(b);
    })), S = Rt(f, (b) => {
      const { code: $ } = b;
      n.triggerKeys.includes($) && (b.preventDefault(), u(b));
    });
    return t({
      triggerRef: d
    }), (b, $) => (x(), J(m(Am), {
      id: m(l),
      "virtual-ref": b.virtualRef,
      open: m(s),
      "virtual-triggering": b.virtualTriggering,
      class: R(m(o).e("trigger")),
      onBlur: m(g),
      onClick: m(h),
      onContextmenu: m(w),
      onFocus: m(y),
      onMouseenter: m(v),
      onMouseleave: m(c),
      onKeydown: m(S)
    }, {
      default: te(() => [
        pe(b.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var hb = /* @__PURE__ */ ge(vb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const gb = U({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), mb = /* @__PURE__ */ U({
  ...gb,
  props: sl,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = Bs(), r = O(null), l = O(!1), {
      controlled: s,
      id: a,
      open: i,
      trigger: u,
      onClose: d,
      onOpen: f,
      onShow: p,
      onHide: v,
      onBeforeShow: c,
      onBeforeHide: h
    } = ie(Ur, void 0), y = T(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    gt(() => {
      l.value = !0;
    });
    const g = T(() => m(y) ? !0 : m(i)), w = T(() => n.disabled ? !1 : m(i)), S = T(() => n.appendTo || o.value), b = T(() => {
      var F;
      return (F = n.style) != null ? F : {};
    }), $ = T(() => !m(i)), _ = () => {
      v();
    }, C = () => {
      if (m(s))
        return !0;
    }, P = Rt(C, () => {
      n.enterable && m(u) === "hover" && f();
    }), k = Rt(C, () => {
      m(u) === "hover" && d();
    }), M = () => {
      var F, G;
      (G = (F = r.value) == null ? void 0 : F.updatePopper) == null || G.call(F), c == null || c();
    }, D = () => {
      h == null || h();
    }, z = () => {
      p(), Z = Tp(T(() => {
        var F;
        return (F = r.value) == null ? void 0 : F.popperContentRef;
      }), () => {
        if (m(s))
          return;
        m(u) !== "hover" && d();
      });
    }, j = () => {
      n.virtualTriggering || d();
    };
    let Z;
    return V(() => m(i), (F) => {
      F || Z == null || Z();
    }, {
      flush: "post"
    }), V(() => n.content, () => {
      var F, G;
      (G = (F = r.value) == null ? void 0 : F.updatePopper) == null || G.call(F);
    }), t({
      contentRef: r
    }), (F, G) => (x(), J(Li, {
      disabled: !F.teleported,
      to: m(S)
    }, [
      he(Zn, {
        name: F.transition,
        onAfterLeave: _,
        onBeforeEnter: M,
        onAfterEnter: z,
        onBeforeLeave: D
      }, {
        default: te(() => [
          m(g) ? xe((x(), J(m(rb), Kt({
            key: 0,
            id: m(a),
            ref_key: "contentRef",
            ref: r
          }, F.$attrs, {
            "aria-label": F.ariaLabel,
            "aria-hidden": m($),
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
            "popper-style": [F.popperStyle, m(b)],
            "reference-el": F.referenceEl,
            "trigger-target-el": F.triggerTargetEl,
            visible: m(w),
            "z-index": F.zIndex,
            onMouseenter: m(P),
            onMouseleave: m(k),
            onBlur: j,
            onClose: m(d)
          }), {
            default: te(() => [
              l.value ? Y("v-if", !0) : pe(F.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [It, m(w)]
          ]) : Y("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var bb = /* @__PURE__ */ ge(mb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const yb = ["innerHTML"], wb = { key: 1 }, Cb = U({
  name: "ElTooltip"
}), Sb = /* @__PURE__ */ U({
  ...Cb,
  props: cb,
  emits: db,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    Wg();
    const r = Ts(), l = O(), s = O(), a = () => {
      var g;
      const w = m(l);
      w && ((g = w.popperInstanceRef) == null || g.update());
    }, i = O(!1), u = O(), { show: d, hide: f, hasUpdateHandler: p } = ub({
      indicator: i,
      toggleReason: u
    }), { onOpen: v, onClose: c } = Hs({
      showAfter: Wt(o, "showAfter"),
      hideAfter: Wt(o, "hideAfter"),
      open: d,
      close: f
    }), h = T(() => Sn(o.visible) && !p.value);
    it(Ur, {
      controlled: h,
      id: r,
      open: Ai(i),
      trigger: Wt(o, "trigger"),
      onOpen: (g) => {
        v(g);
      },
      onClose: (g) => {
        c(g);
      },
      onToggle: (g) => {
        m(i) ? c(g) : v(g);
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
    }), V(() => o.disabled, (g) => {
      g && i.value && (i.value = !1);
    });
    const y = () => {
      var g, w;
      const S = (w = (g = s.value) == null ? void 0 : g.contentRef) == null ? void 0 : w.popperContentRef;
      return S && S.contains(document.activeElement);
    };
    return ki(() => i.value && f()), t({
      popperRef: l,
      contentRef: s,
      isFocusInsideContent: y,
      updatePopper: a,
      onOpen: v,
      onClose: c,
      hide: f
    }), (g, w) => (x(), J(m(lb), {
      ref_key: "popperRef",
      ref: l,
      role: g.role
    }, {
      default: te(() => [
        he(hb, {
          disabled: g.disabled,
          trigger: g.trigger,
          "trigger-keys": g.triggerKeys,
          "virtual-ref": g.virtualRef,
          "virtual-triggering": g.virtualTriggering
        }, {
          default: te(() => [
            g.$slots.default ? pe(g.$slots, "default", { key: 0 }) : Y("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        he(bb, {
          ref_key: "contentRef",
          ref: s,
          "aria-label": g.ariaLabel,
          "boundaries-padding": g.boundariesPadding,
          content: g.content,
          disabled: g.disabled,
          effect: g.effect,
          enterable: g.enterable,
          "fallback-placements": g.fallbackPlacements,
          "hide-after": g.hideAfter,
          "gpu-acceleration": g.gpuAcceleration,
          offset: g.offset,
          persistent: g.persistent,
          "popper-class": g.popperClass,
          "popper-style": g.popperStyle,
          placement: g.placement,
          "popper-options": g.popperOptions,
          pure: g.pure,
          "raw-content": g.rawContent,
          "reference-el": g.referenceEl,
          "trigger-target-el": g.triggerTargetEl,
          "show-after": g.showAfter,
          strategy: g.strategy,
          teleported: g.teleported,
          transition: g.transition,
          "virtual-triggering": g.virtualTriggering,
          "z-index": g.zIndex,
          "append-to": g.appendTo
        }, {
          default: te(() => [
            pe(g.$slots, "content", {}, () => [
              g.rawContent ? (x(), N("span", {
                key: 0,
                innerHTML: g.content
              }, null, 8, yb)) : (x(), N("span", wb, ye(g.content), 1))
            ]),
            g.showArrow ? (x(), J(m($m), {
              key: 0,
              "arrow-offset": g.arrowOffset
            }, null, 8, ["arrow-offset"])) : Y("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var Eb = /* @__PURE__ */ ge(Sb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const Xs = Tt(Eb), Ht = /* @__PURE__ */ new Map();
let wa;
Ee && (document.addEventListener("mousedown", (e) => wa = e), document.addEventListener("mouseup", (e) => {
  for (const t of Ht.values())
    for (const { documentHandler: n } of t)
      n(e, wa);
}));
function Ca(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : Gn(t.arg) && n.push(t.arg), function(o, r) {
    const l = t.instance.popperRef, s = o.target, a = r == null ? void 0 : r.target, i = !t || !t.instance, u = !s || !a, d = e.contains(s) || e.contains(a), f = e === s, p = n.length && n.some((c) => c == null ? void 0 : c.contains(s)) || n.length && n.includes(a), v = l && (l.contains(s) || l.contains(a));
    i || u || d || f || p || v || t.value(o, r);
  };
}
const Qs = {
  beforeMount(e, t) {
    Ht.has(e) || Ht.set(e, []), Ht.get(e).push({
      documentHandler: Ca(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    Ht.has(e) || Ht.set(e, []);
    const n = Ht.get(e), o = n.findIndex((l) => l.bindingFn === t.oldValue), r = {
      documentHandler: Ca(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, r) : n.push(r);
  },
  unmounted(e) {
    Ht.delete(e);
  }
};
var Sa = !1, en, vr, hr, go, mo, Zs, bo, gr, mr, br, Js, yr, wr, ei, ti;
function Ve() {
  if (!Sa) {
    Sa = !0;
    var e = navigator.userAgent, t = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e), n = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
    if (yr = /\b(iPhone|iP[ao]d)/.exec(e), wr = /\b(iP[ao]d)/.exec(e), br = /Android/i.exec(e), ei = /FBAN\/\w+;/i.exec(e), ti = /Mobile/i.exec(e), Js = !!/Win64/.exec(e), t) {
      en = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN, en && document && document.documentMode && (en = document.documentMode);
      var o = /(?:Trident\/(\d+.\d+))/.exec(e);
      Zs = o ? parseFloat(o[1]) + 4 : en, vr = t[2] ? parseFloat(t[2]) : NaN, hr = t[3] ? parseFloat(t[3]) : NaN, go = t[4] ? parseFloat(t[4]) : NaN, go ? (t = /(?:Chrome\/(\d+\.\d+))/.exec(e), mo = t && t[1] ? parseFloat(t[1]) : NaN) : mo = NaN;
    } else
      en = vr = hr = mo = go = NaN;
    if (n) {
      if (n[1]) {
        var r = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
        bo = r ? parseFloat(r[1].replace("_", ".")) : !0;
      } else
        bo = !1;
      gr = !!n[2], mr = !!n[3];
    } else
      bo = gr = mr = !1;
  }
}
var Cr = { ie: function() {
  return Ve() || en;
}, ieCompatibilityMode: function() {
  return Ve() || Zs > en;
}, ie64: function() {
  return Cr.ie() && Js;
}, firefox: function() {
  return Ve() || vr;
}, opera: function() {
  return Ve() || hr;
}, webkit: function() {
  return Ve() || go;
}, safari: function() {
  return Cr.webkit();
}, chrome: function() {
  return Ve() || mo;
}, windows: function() {
  return Ve() || gr;
}, osx: function() {
  return Ve() || bo;
}, linux: function() {
  return Ve() || mr;
}, iphone: function() {
  return Ve() || yr;
}, mobile: function() {
  return Ve() || yr || wr || br || ti;
}, nativeApp: function() {
  return Ve() || ei;
}, android: function() {
  return Ve() || br;
}, ipad: function() {
  return Ve() || wr;
} }, _b = Cr, fo = !!(typeof window < "u" && window.document && window.document.createElement), Ob = { canUseDOM: fo, canUseWorkers: typeof Worker < "u", canUseEventListeners: fo && !!(window.addEventListener || window.attachEvent), canUseViewport: fo && !!window.screen, isInWorker: !fo }, ni = Ob, oi;
ni.canUseDOM && (oi = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0);
function Tb(e, t) {
  if (!ni.canUseDOM || t && !("addEventListener" in document))
    return !1;
  var n = "on" + e, o = n in document;
  if (!o) {
    var r = document.createElement("div");
    r.setAttribute(n, "return;"), o = typeof r[n] == "function";
  }
  return !o && oi && e === "wheel" && (o = document.implementation.hasFeature("Events.wheel", "3.0")), o;
}
var $b = Tb, Ea = 10, _a = 40, Oa = 800;
function ri(e) {
  var t = 0, n = 0, o = 0, r = 0;
  return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), o = t * Ea, r = n * Ea, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (o = e.deltaX), (o || r) && e.deltaMode && (e.deltaMode == 1 ? (o *= _a, r *= _a) : (o *= Oa, r *= Oa)), o && !t && (t = o < 1 ? -1 : 1), r && !n && (n = r < 1 ? -1 : 1), { spinX: t, spinY: n, pixelX: o, pixelY: r };
}
ri.getEventType = function() {
  return _b.firefox() ? "DOMMouseScroll" : $b("wheel") ? "wheel" : "mousewheel";
};
var Pb = ri;
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
const xb = function(e, t) {
  if (e && e.addEventListener) {
    const n = function(o) {
      const r = Pb(o);
      t && Reflect.apply(t, this, [o, r]);
    };
    e.addEventListener("wheel", n, { passive: !0 });
  }
}, Lb = {
  beforeMount(e, t) {
    xb(e, t.value);
  }
}, li = {
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
  size: Do,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: !0
  }
}, ai = {
  [We]: (e) => et(e) || Pe(e) || Sn(e),
  change: (e) => et(e) || Pe(e) || Sn(e)
}, Ab = ({
  model: e,
  isChecked: t
}) => {
  const n = ie(In, void 0), o = T(() => {
    var l, s;
    const a = (l = n == null ? void 0 : n.max) == null ? void 0 : l.value, i = (s = n == null ? void 0 : n.min) == null ? void 0 : s.value;
    return !$o(a) && e.value.length >= a && !t.value || !$o(i) && e.value.length <= i && t.value;
  });
  return {
    isDisabled: _s(T(() => (n == null ? void 0 : n.disabled.value) || o.value)),
    isLimitDisabled: o
  };
}, kb = (e, {
  model: t,
  isLimitExceeded: n,
  hasOwnLabel: o,
  isDisabled: r,
  isLabeledByFormItem: l
}) => {
  const s = ie(In, void 0), { formItem: a } = oo(), { emit: i } = we();
  function u(c) {
    var h, y;
    return c === e.trueLabel || c === !0 ? (h = e.trueLabel) != null ? h : !0 : (y = e.falseLabel) != null ? y : !1;
  }
  function d(c, h) {
    i("change", u(c), h);
  }
  function f(c) {
    if (n.value)
      return;
    const h = c.target;
    i("change", u(h.checked), c);
  }
  async function p(c) {
    n.value || !o.value && !r.value && l.value && (c.composedPath().some((g) => g.tagName === "LABEL") || (t.value = u([!1, e.falseLabel].includes(t.value)), await se(), d(t.value, c)));
  }
  const v = T(() => (s == null ? void 0 : s.validateEvent) || e.validateEvent);
  return V(() => e.modelValue, () => {
    v.value && (a == null || a.validate("change").catch((c) => Ne(c)));
  }), {
    handleChange: f,
    onClickRoot: p
  };
}, Rb = (e) => {
  const t = O(!1), { emit: n } = we(), o = ie(In, void 0), r = T(() => $o(o) === !1), l = O(!1);
  return {
    model: T({
      get() {
        var a, i;
        return r.value ? (a = o == null ? void 0 : o.modelValue) == null ? void 0 : a.value : (i = e.modelValue) != null ? i : t.value;
      },
      set(a) {
        var i, u;
        r.value && an(a) ? (l.value = ((i = o == null ? void 0 : o.max) == null ? void 0 : i.value) !== void 0 && a.length > (o == null ? void 0 : o.max.value), l.value === !1 && ((u = o == null ? void 0 : o.changeEvent) == null || u.call(o, a))) : (n(We, a), t.value = a);
      }
    }),
    isGroup: r,
    isLimitExceeded: l
  };
}, Ib = (e, t, { model: n }) => {
  const o = ie(In, void 0), r = O(!1), l = T(() => {
    const u = n.value;
    return Sn(u) ? u : an(u) ? ot(e.label) ? u.map(yn).some((d) => To(d, e.label)) : u.map(yn).includes(e.label) : u != null ? u === e.trueLabel : !!u;
  }), s = _n(T(() => {
    var u;
    return (u = o == null ? void 0 : o.size) == null ? void 0 : u.value;
  }), {
    prop: !0
  }), a = _n(T(() => {
    var u;
    return (u = o == null ? void 0 : o.size) == null ? void 0 : u.value;
  })), i = T(() => !!(t.default || e.label));
  return {
    checkboxButtonSize: s,
    isChecked: l,
    isFocused: r,
    checkboxSize: a,
    hasOwnLabel: i
  };
}, Mb = (e, { model: t }) => {
  function n() {
    an(t.value) && !t.value.includes(e.label) ? t.value.push(e.label) : t.value = e.trueLabel || !0;
  }
  e.checked && n();
}, si = (e, t) => {
  const { formItem: n } = oo(), { model: o, isGroup: r, isLimitExceeded: l } = Rb(e), {
    isFocused: s,
    isChecked: a,
    checkboxButtonSize: i,
    checkboxSize: u,
    hasOwnLabel: d
  } = Ib(e, t, { model: o }), { isDisabled: f } = Ab({ model: o, isChecked: a }), { inputId: p, isLabeledByFormItem: v } = Gr(e, {
    formItemContext: n,
    disableIdGeneration: d,
    disableIdManagement: r
  }), { handleChange: c, onClickRoot: h } = kb(e, {
    model: o,
    isLimitExceeded: l,
    hasOwnLabel: d,
    isDisabled: f,
    isLabeledByFormItem: v
  });
  return Mb(e, { model: o }), {
    inputId: p,
    isLabeledByFormItem: v,
    isChecked: a,
    isDisabled: f,
    isFocused: s,
    checkboxButtonSize: i,
    checkboxSize: u,
    hasOwnLabel: d,
    model: o,
    handleChange: c,
    onClickRoot: h
  };
}, Nb = ["tabindex", "role", "aria-checked"], Fb = ["id", "aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"], zb = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"], Bb = U({
  name: "ElCheckbox"
}), Hb = /* @__PURE__ */ U({
  ...Bb,
  props: li,
  emits: ai,
  setup(e) {
    const t = e, n = Tr(), {
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
    } = si(t, n), v = ne("checkbox"), c = T(() => [
      v.b(),
      v.m(i.value),
      v.is("disabled", s.value),
      v.is("bordered", t.border),
      v.is("checked", l.value)
    ]), h = T(() => [
      v.e("input"),
      v.is("disabled", s.value),
      v.is("checked", l.value),
      v.is("indeterminate", t.indeterminate),
      v.is("focus", a.value)
    ]);
    return (y, g) => (x(), J(ht(!m(u) && m(r) ? "span" : "label"), {
      class: R(m(c)),
      "aria-controls": y.indeterminate ? y.controls : null,
      onClick: m(p)
    }, {
      default: te(() => [
        K("span", {
          class: R(m(h)),
          tabindex: y.indeterminate ? 0 : void 0,
          role: y.indeterminate ? "checkbox" : void 0,
          "aria-checked": y.indeterminate ? "mixed" : void 0
        }, [
          y.trueLabel || y.falseLabel ? xe((x(), N("input", {
            key: 0,
            id: m(o),
            "onUpdate:modelValue": g[0] || (g[0] = (w) => on(d) ? d.value = w : null),
            class: R(m(v).e("original")),
            type: "checkbox",
            "aria-hidden": y.indeterminate ? "true" : "false",
            name: y.name,
            tabindex: y.tabindex,
            disabled: m(s),
            "true-value": y.trueLabel,
            "false-value": y.falseLabel,
            onChange: g[1] || (g[1] = (...w) => m(f) && m(f)(...w)),
            onFocus: g[2] || (g[2] = (w) => a.value = !0),
            onBlur: g[3] || (g[3] = (w) => a.value = !1)
          }, null, 42, Fb)), [
            [wo, m(d)]
          ]) : xe((x(), N("input", {
            key: 1,
            id: m(o),
            "onUpdate:modelValue": g[4] || (g[4] = (w) => on(d) ? d.value = w : null),
            class: R(m(v).e("original")),
            type: "checkbox",
            "aria-hidden": y.indeterminate ? "true" : "false",
            disabled: m(s),
            value: y.label,
            name: y.name,
            tabindex: y.tabindex,
            onChange: g[5] || (g[5] = (...w) => m(f) && m(f)(...w)),
            onFocus: g[6] || (g[6] = (w) => a.value = !0),
            onBlur: g[7] || (g[7] = (w) => a.value = !1)
          }, null, 42, zb)), [
            [wo, m(d)]
          ]),
          K("span", {
            class: R(m(v).e("inner"))
          }, null, 2)
        ], 10, Nb),
        m(u) ? (x(), N("span", {
          key: 0,
          class: R(m(v).e("label"))
        }, [
          pe(y.$slots, "default"),
          y.$slots.default ? Y("v-if", !0) : (x(), N(Ue, { key: 0 }, [
            ko(ye(y.label), 1)
          ], 64))
        ], 2)) : Y("v-if", !0)
      ]),
      _: 3
    }, 8, ["class", "aria-controls", "onClick"]));
  }
});
var Db = /* @__PURE__ */ ge(Hb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
const Wb = ["name", "tabindex", "disabled", "true-value", "false-value"], Kb = ["name", "tabindex", "disabled", "value"], jb = U({
  name: "ElCheckboxButton"
}), Vb = /* @__PURE__ */ U({
  ...jb,
  props: li,
  emits: ai,
  setup(e) {
    const t = e, n = Tr(), {
      isFocused: o,
      isChecked: r,
      isDisabled: l,
      checkboxButtonSize: s,
      model: a,
      handleChange: i
    } = si(t, n), u = ie(In, void 0), d = ne("checkbox"), f = T(() => {
      var v, c, h, y;
      const g = (c = (v = u == null ? void 0 : u.fill) == null ? void 0 : v.value) != null ? c : "";
      return {
        backgroundColor: g,
        borderColor: g,
        color: (y = (h = u == null ? void 0 : u.textColor) == null ? void 0 : h.value) != null ? y : "",
        boxShadow: g ? `-1px 0 0 0 ${g}` : void 0
      };
    }), p = T(() => [
      d.b("button"),
      d.bm("button", s.value),
      d.is("disabled", l.value),
      d.is("checked", r.value),
      d.is("focus", o.value)
    ]);
    return (v, c) => (x(), N("label", {
      class: R(m(p))
    }, [
      v.trueLabel || v.falseLabel ? xe((x(), N("input", {
        key: 0,
        "onUpdate:modelValue": c[0] || (c[0] = (h) => on(a) ? a.value = h : null),
        class: R(m(d).be("button", "original")),
        type: "checkbox",
        name: v.name,
        tabindex: v.tabindex,
        disabled: m(l),
        "true-value": v.trueLabel,
        "false-value": v.falseLabel,
        onChange: c[1] || (c[1] = (...h) => m(i) && m(i)(...h)),
        onFocus: c[2] || (c[2] = (h) => o.value = !0),
        onBlur: c[3] || (c[3] = (h) => o.value = !1)
      }, null, 42, Wb)), [
        [wo, m(a)]
      ]) : xe((x(), N("input", {
        key: 1,
        "onUpdate:modelValue": c[4] || (c[4] = (h) => on(a) ? a.value = h : null),
        class: R(m(d).be("button", "original")),
        type: "checkbox",
        name: v.name,
        tabindex: v.tabindex,
        disabled: m(l),
        value: v.label,
        onChange: c[5] || (c[5] = (...h) => m(i) && m(i)(...h)),
        onFocus: c[6] || (c[6] = (h) => o.value = !0),
        onBlur: c[7] || (c[7] = (h) => o.value = !1)
      }, null, 42, Kb)), [
        [wo, m(a)]
      ]),
      v.$slots.default || v.label ? (x(), N("span", {
        key: 2,
        class: R(m(d).be("button", "inner")),
        style: Oe(m(r) ? m(f) : void 0)
      }, [
        pe(v.$slots, "default", {}, () => [
          ko(ye(v.label), 1)
        ])
      ], 6)) : Y("v-if", !0)
    ], 2));
  }
});
var ii = /* @__PURE__ */ ge(Vb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
const Ub = _e({
  modelValue: {
    type: de(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: Do,
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
}), qb = {
  [We]: (e) => an(e),
  change: (e) => an(e)
}, Gb = U({
  name: "ElCheckboxGroup"
}), Yb = /* @__PURE__ */ U({
  ...Gb,
  props: Ub,
  emits: qb,
  setup(e, { emit: t }) {
    const n = e, o = ne("checkbox"), { formItem: r } = oo(), { inputId: l, isLabeledByFormItem: s } = Gr(n, {
      formItemContext: r
    }), a = async (u) => {
      t(We, u), await se(), t("change", u);
    }, i = T({
      get() {
        return n.modelValue;
      },
      set(u) {
        a(u);
      }
    });
    return it(In, {
      ...wp(kn(n), [
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
    }), V(() => n.modelValue, () => {
      n.validateEvent && (r == null || r.validate("change").catch((u) => Ne(u)));
    }), (u, d) => {
      var f;
      return x(), J(ht(u.tag), {
        id: m(l),
        class: R(m(o).b("group")),
        role: "group",
        "aria-label": m(s) ? void 0 : u.label || "checkbox-group",
        "aria-labelledby": m(s) ? (f = m(r)) == null ? void 0 : f.labelId : void 0
      }, {
        default: te(() => [
          pe(u.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var ui = /* @__PURE__ */ ge(Yb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
const Ln = Tt(Db, {
  CheckboxButton: ii,
  CheckboxGroup: ui
});
to(ii);
to(ui);
const ci = _e({
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
    values: no,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), Xb = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, Qb = U({
  name: "ElTag"
}), Zb = /* @__PURE__ */ U({
  ...Qb,
  props: ci,
  emits: Xb,
  setup(e, { emit: t }) {
    const n = e, o = _n(), r = ne("tag"), l = T(() => {
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
    return (i, u) => i.disableTransitions ? (x(), N("span", {
      key: 0,
      class: R(m(l)),
      style: Oe({ backgroundColor: i.color }),
      onClick: a
    }, [
      K("span", {
        class: R(m(r).e("content"))
      }, [
        pe(i.$slots, "default")
      ], 2),
      i.closable ? (x(), J(m(Je), {
        key: 0,
        class: R(m(r).e("close")),
        onClick: vt(s, ["stop"])
      }, {
        default: te(() => [
          he(m(Yl))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : Y("v-if", !0)
    ], 6)) : (x(), J(Zn, {
      key: 1,
      name: `${m(r).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: te(() => [
        K("span", {
          class: R(m(l)),
          style: Oe({ backgroundColor: i.color }),
          onClick: a
        }, [
          K("span", {
            class: R(m(r).e("content"))
          }, [
            pe(i.$slots, "default")
          ], 2),
          i.closable ? (x(), J(m(Je), {
            key: 0,
            class: R(m(r).e("close")),
            onClick: vt(s, ["stop"])
          }, {
            default: te(() => [
              he(m(Yl))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : Y("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var Jb = /* @__PURE__ */ ge(Zb, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const ey = Tt(Jb), ty = _e({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  prevText: {
    type: String
  },
  prevIcon: {
    type: qt
  }
}), ny = {
  click: (e) => e instanceof MouseEvent
}, oy = ["disabled", "aria-disabled"], ry = { key: 0 }, ly = U({
  name: "ElPaginationPrev"
}), ay = /* @__PURE__ */ U({
  ...ly,
  props: ty,
  emits: ny,
  setup(e) {
    const t = e, n = T(() => t.disabled || t.currentPage <= 1);
    return (o, r) => (x(), N("button", {
      type: "button",
      class: "btn-prev",
      disabled: m(n),
      "aria-disabled": m(n),
      onClick: r[0] || (r[0] = (l) => o.$emit("click", l))
    }, [
      o.prevText ? (x(), N("span", ry, ye(o.prevText), 1)) : (x(), J(m(Je), { key: 1 }, {
        default: te(() => [
          (x(), J(ht(o.prevIcon)))
        ]),
        _: 1
      }))
    ], 8, oy));
  }
});
var sy = /* @__PURE__ */ ge(ay, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);
const iy = _e({
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
    type: qt
  }
}), uy = ["disabled", "aria-disabled"], cy = { key: 0 }, dy = U({
  name: "ElPaginationNext"
}), fy = /* @__PURE__ */ U({
  ...dy,
  props: iy,
  emits: ["click"],
  setup(e) {
    const t = e, n = T(() => t.disabled || t.currentPage === t.pageCount || t.pageCount === 0);
    return (o, r) => (x(), N("button", {
      type: "button",
      class: "btn-next",
      disabled: m(n),
      "aria-disabled": m(n),
      onClick: r[0] || (r[0] = (l) => o.$emit("click", l))
    }, [
      o.nextText ? (x(), N("span", cy, ye(o.nextText), 1)) : (x(), J(m(Je), { key: 1 }, {
        default: te(() => [
          (x(), J(ht(o.nextIcon)))
        ]),
        _: 1
      }))
    ], 8, uy));
  }
});
var py = /* @__PURE__ */ ge(fy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);
const di = Symbol("ElSelectGroup"), Vo = Symbol("ElSelect");
function vy(e, t) {
  const n = ie(Vo), o = ie(di, { disabled: !1 }), r = T(() => Object.prototype.toString.call(e.value).toLowerCase() === "[object object]"), l = T(() => n.props.multiple ? f(n.props.modelValue, e.value) : p(e.value, n.props.modelValue)), s = T(() => {
    if (n.props.multiple) {
      const h = n.props.modelValue || [];
      return !l.value && h.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), a = T(() => e.label || (r.value ? "" : e.value)), i = T(() => e.value || e.label || ""), u = T(() => e.disabled || t.groupDisabled || s.value), d = we(), f = (h = [], y) => {
    if (r.value) {
      const g = n.props.valueKey;
      return h && h.some((w) => yn(Me(w, g)) === Me(y, g));
    } else
      return h && h.includes(y);
  }, p = (h, y) => {
    if (r.value) {
      const { valueKey: g } = n.props;
      return Me(h, g) === Me(y, g);
    } else
      return h === y;
  }, v = () => {
    !e.disabled && !o.disabled && (n.hoverIndex = n.optionsArray.indexOf(d.proxy));
  };
  V(() => a.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), V(() => e.value, (h, y) => {
    const { remote: g, valueKey: w } = n.props;
    if (Object.is(h, y) || (n.onOptionDestroy(y, d.proxy), n.onOptionCreate(d.proxy)), !e.created && !g) {
      if (w && typeof h == "object" && typeof y == "object" && h[w] === y[w])
        return;
      n.setSelected();
    }
  }), V(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 });
  const { queryChange: c } = yn(n);
  return V(c, (h) => {
    const { query: y } = m(h), g = new RegExp(jp(y), "i");
    t.visible = g.test(a.value) || e.created, t.visible || n.filteredOptionsCount--;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: a,
    currentValue: i,
    itemSelected: l,
    isDisabled: u,
    hoverItem: v
  };
}
const hy = U({
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
    const t = ne("select"), n = Vt({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hitState: !1,
      hover: !1
    }), { currentLabel: o, itemSelected: r, isDisabled: l, select: s, hoverItem: a } = vy(e, n), { visible: i, hover: u } = kn(n), d = we().proxy;
    s.onOptionCreate(d), gt(() => {
      const p = d.value, { selected: v } = s, h = (s.props.multiple ? v : [v]).some((y) => y.value === d.value);
      se(() => {
        s.cachedOptions.get(p) === d && !h && s.cachedOptions.delete(p);
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
function gy(e, t, n, o, r, l) {
  return xe((x(), N("li", {
    class: R([
      e.ns.be("dropdown", "item"),
      e.ns.is("disabled", e.isDisabled),
      {
        selected: e.itemSelected,
        hover: e.hover
      }
    ]),
    onMouseenter: t[0] || (t[0] = (...s) => e.hoverItem && e.hoverItem(...s)),
    onClick: t[1] || (t[1] = vt((...s) => e.selectOptionClick && e.selectOptionClick(...s), ["stop"]))
  }, [
    pe(e.$slots, "default", {}, () => [
      K("span", null, ye(e.currentLabel), 1)
    ])
  ], 34)), [
    [It, e.visible]
  ]);
}
var il = /* @__PURE__ */ ge(hy, [["render", gy], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const my = U({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = ie(Vo), t = ne("select"), n = T(() => e.props.popperClass), o = T(() => e.props.multiple), r = T(() => e.props.fitInputWidth), l = O("");
    function s() {
      var a;
      l.value = `${(a = e.selectWrapper) == null ? void 0 : a.offsetWidth}px`;
    }
    return Le(() => {
      s(), En(e.selectWrapper, s);
    }), {
      ns: t,
      minWidth: l,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: r
    };
  }
});
function by(e, t, n, o, r, l) {
  return x(), N("div", {
    class: R([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Oe({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    pe(e.$slots, "default")
  ], 6);
}
var yy = /* @__PURE__ */ ge(my, [["render", by], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function wy(e) {
  const { t } = zt();
  return Vt({
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
const Cy = (e, t, n) => {
  const { t: o } = zt(), r = ne("select");
  Oh({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, T(() => e.suffixTransition === !1));
  const l = O(null), s = O(null), a = O(null), i = O(null), u = O(null), d = O(null), f = O(-1), p = mn({ query: "" }), v = mn(""), { form: c, formItem: h } = oo(), y = T(() => !e.filterable || e.multiple || !t.visible), g = T(() => e.disabled || (c == null ? void 0 : c.disabled)), w = T(() => {
    const E = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !g.value && t.inputHovering && E;
  }), S = T(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), b = T(() => r.is("reverse", S.value && t.visible && e.suffixTransition)), $ = T(() => e.remote ? 300 : 0), _ = T(() => e.loading ? e.loadingText || o("el.select.loading") : e.remote && t.query === "" && t.options.size === 0 ? !1 : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0 ? e.noMatchText || o("el.select.noMatch") : t.options.size === 0 ? e.noDataText || o("el.select.noData") : null), C = T(() => Array.from(t.options.values())), P = T(() => Array.from(t.cachedOptions.values())), k = T(() => {
    const E = C.value.filter((L) => !L.created).some((L) => L.currentLabel === t.query);
    return e.filterable && e.allowCreate && t.query !== "" && !E;
  }), M = _n(), D = T(() => ["small"].includes(M.value) ? "small" : "default"), z = T({
    get() {
      return t.visible && _.value !== !1;
    },
    set(E) {
      t.visible = E;
    }
  });
  V([() => g.value, () => M.value, () => c == null ? void 0 : c.size], () => {
    se(() => {
      j();
    });
  }), V(() => e.placeholder, (E) => {
    t.cachedPlaceHolder = t.currentPlaceholder = E;
  }), V(() => e.modelValue, (E, L) => {
    e.multiple && (j(), E && E.length > 0 || s.value && t.query !== "" ? t.currentPlaceholder = "" : t.currentPlaceholder = t.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (t.query = "", Z(t.query))), oe(), e.filterable && !e.multiple && (t.inputLength = 20), !To(E, L) && e.validateEvent && (h == null || h.validate("change").catch((B) => Ne(B)));
  }, {
    flush: "post",
    deep: !0
  }), V(() => t.visible, (E) => {
    var L, B, X;
    E ? ((B = (L = a.value) == null ? void 0 : L.updatePopper) == null || B.call(L), e.filterable && (t.filteredOptionsCount = t.optionsCount, t.query = e.remote ? "" : t.selectedLabel, e.multiple ? (X = s.value) == null || X.focus() : t.selectedLabel && (t.currentPlaceholder = `${t.selectedLabel}`, t.selectedLabel = ""), Z(t.query), !e.multiple && !e.remote && (p.value.query = "", Nn(p), Nn(v)))) : (e.filterable && (Ct(e.filterMethod) && e.filterMethod(""), Ct(e.remoteMethod) && e.remoteMethod("")), s.value && s.value.blur(), t.query = "", t.previousQuery = null, t.selectedLabel = "", t.inputLength = 20, t.menuVisibleOnFocus = !1, A(), se(() => {
      s.value && s.value.value === "" && t.selected.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }), e.multiple || (t.selected && (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel ? t.selectedLabel = t.createdLabel : t.selectedLabel = t.selected.currentLabel, e.filterable && (t.query = t.selectedLabel)), e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))), n.emit("visible-change", E);
  }), V(() => t.options.entries(), () => {
    var E, L, B;
    if (!Ee)
      return;
    (L = (E = a.value) == null ? void 0 : E.updatePopper) == null || L.call(E), e.multiple && j();
    const X = ((B = u.value) == null ? void 0 : B.querySelectorAll("input")) || [];
    Array.from(X).includes(document.activeElement) || oe(), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && G();
  }, {
    flush: "post"
  }), V(() => t.hoverIndex, (E) => {
    Pe(E) && E > -1 ? f.value = C.value[E] || {} : f.value = {}, C.value.forEach((L) => {
      L.hover = f.value === L;
    });
  });
  const j = () => {
    e.collapseTags && !e.filterable || se(() => {
      var E, L;
      if (!l.value)
        return;
      const B = l.value.$el.querySelector("input"), X = i.value, fe = bh(M.value || (c == null ? void 0 : c.size));
      B.style.height = `${(t.selected.length === 0 ? fe : Math.max(X ? X.clientHeight + (X.clientHeight > fe ? 6 : 0) : 0, fe)) - 2}px`, t.tagInMultiLine = Number.parseFloat(B.style.height) >= fe, t.visible && _.value !== !1 && ((L = (E = a.value) == null ? void 0 : E.updatePopper) == null || L.call(E));
    });
  }, Z = async (E) => {
    if (!(t.previousQuery === E || t.isOnComposition)) {
      if (t.previousQuery === null && (Ct(e.filterMethod) || Ct(e.remoteMethod))) {
        t.previousQuery = E;
        return;
      }
      t.previousQuery = E, se(() => {
        var L, B;
        t.visible && ((B = (L = a.value) == null ? void 0 : L.updatePopper) == null || B.call(L));
      }), t.hoverIndex = -1, e.multiple && e.filterable && se(() => {
        const L = s.value.value.length * 15 + 20;
        t.inputLength = e.collapseTags ? Math.min(50, L) : L, F(), j();
      }), e.remote && Ct(e.remoteMethod) ? (t.hoverIndex = -1, e.remoteMethod(E)) : Ct(e.filterMethod) ? (e.filterMethod(E), Nn(v)) : (t.filteredOptionsCount = t.optionsCount, p.value.query = E, Nn(p), Nn(v)), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && (await se(), G());
    }
  }, F = () => {
    t.currentPlaceholder !== "" && (t.currentPlaceholder = s.value.value ? "" : t.cachedPlaceHolder);
  }, G = () => {
    const E = C.value.filter((X) => X.visible && !X.disabled && !X.states.groupDisabled), L = E.find((X) => X.created), B = E[0];
    t.hoverIndex = Fe(C.value, L || B);
  }, oe = () => {
    var E;
    if (e.multiple)
      t.selectedLabel = "";
    else {
      const B = H(e.modelValue);
      (E = B.props) != null && E.created ? (t.createdLabel = B.props.value, t.createdSelected = !0) : t.createdSelected = !1, t.selectedLabel = B.currentLabel, t.selected = B, e.filterable && (t.query = t.selectedLabel);
      return;
    }
    const L = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((B) => {
      L.push(H(B));
    }), t.selected = L, se(() => {
      j();
    });
  }, H = (E) => {
    let L;
    const B = Xo(E).toLowerCase() === "object", X = Xo(E).toLowerCase() === "null", fe = Xo(E).toLowerCase() === "undefined";
    for (let ft = t.cachedOptions.size - 1; ft >= 0; ft--) {
      const je = P.value[ft];
      if (B ? Me(je.value, e.valueKey) === Me(E, e.valueKey) : je.value === E) {
        L = {
          value: E,
          currentLabel: je.currentLabel,
          isDisabled: je.isDisabled
        };
        break;
      }
    }
    if (L)
      return L;
    const Be = B ? E.label : !X && !fe ? E : "", ke = {
      value: E,
      currentLabel: Be
    };
    return e.multiple && (ke.hitState = !1), ke;
  }, A = () => {
    setTimeout(() => {
      const E = e.valueKey;
      e.multiple ? t.selected.length > 0 ? t.hoverIndex = Math.min.apply(null, t.selected.map((L) => C.value.findIndex((B) => Me(B, E) === Me(L, E)))) : t.hoverIndex = -1 : t.hoverIndex = C.value.findIndex((L) => wt(L) === wt(t.selected));
    }, 300);
  }, q = () => {
    var E, L;
    ue(), (L = (E = a.value) == null ? void 0 : E.updatePopper) == null || L.call(E), e.multiple && j();
  }, ue = () => {
    var E;
    t.inputWidth = (E = l.value) == null ? void 0 : E.$el.offsetWidth;
  }, ce = () => {
    e.filterable && t.query !== t.selectedLabel && (t.query = t.selectedLabel, Z(t.query));
  }, me = Cn(() => {
    ce();
  }, $.value), ve = Cn((E) => {
    Z(E.target.value);
  }, $.value), re = (E) => {
    To(e.modelValue, E) || n.emit(bs, E);
  }, be = (E) => {
    if (E.target.value.length <= 0 && !Xe()) {
      const L = e.modelValue.slice();
      L.pop(), n.emit(We, L), re(L);
    }
    E.target.value.length === 1 && e.modelValue.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
  }, Se = (E, L) => {
    const B = t.selected.indexOf(L);
    if (B > -1 && !g.value) {
      const X = e.modelValue.slice();
      X.splice(B, 1), n.emit(We, X), re(X), n.emit("remove-tag", L.value);
    }
    E.stopPropagation();
  }, le = (E) => {
    E.stopPropagation();
    const L = e.multiple ? [] : "";
    if (!et(L))
      for (const B of t.selected)
        B.isDisabled && L.push(B.value);
    n.emit(We, L), re(L), t.hoverIndex = -1, t.visible = !1, n.emit("clear");
  }, Te = (E, L) => {
    var B;
    if (e.multiple) {
      const X = (e.modelValue || []).slice(), fe = Fe(X, E.value);
      fe > -1 ? X.splice(fe, 1) : (e.multipleLimit <= 0 || X.length < e.multipleLimit) && X.push(E.value), n.emit(We, X), re(X), E.created && (t.query = "", Z(""), t.inputLength = 20), e.filterable && ((B = s.value) == null || B.focus());
    } else
      n.emit(We, E.value), re(E.value), t.visible = !1;
    t.isSilentBlur = L, lt(), !t.visible && se(() => {
      Ke(E);
    });
  }, Fe = (E = [], L) => {
    if (!ot(L))
      return E.indexOf(L);
    const B = e.valueKey;
    let X = -1;
    return E.some((fe, Be) => yn(Me(fe, B)) === Me(L, B) ? (X = Be, !0) : !1), X;
  }, lt = () => {
    t.softFocus = !0;
    const E = s.value || l.value;
    E && (E == null || E.focus());
  }, Ke = (E) => {
    var L, B, X, fe, Be;
    const ke = Array.isArray(E) ? E[0] : E;
    let ft = null;
    if (ke != null && ke.value) {
      const je = C.value.filter((fn) => fn.value === ke.value);
      je.length > 0 && (ft = je[0].$el);
    }
    if (a.value && ft) {
      const je = (fe = (X = (B = (L = a.value) == null ? void 0 : L.popperRef) == null ? void 0 : B.contentRef) == null ? void 0 : X.querySelector) == null ? void 0 : fe.call(X, `.${r.be("dropdown", "wrap")}`);
      je && qp(je, ft);
    }
    (Be = d.value) == null || Be.handleScroll();
  }, Ye = (E) => {
    t.optionsCount++, t.filteredOptionsCount++, t.options.set(E.value, E), t.cachedOptions.set(E.value, E);
  }, Pt = (E, L) => {
    t.options.get(E) === L && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(E));
  }, dt = (E) => {
    E.code !== Yn.backspace && Xe(!1), t.inputLength = s.value.value.length * 15 + 20, j();
  }, Xe = (E) => {
    if (!Array.isArray(t.selected))
      return;
    const L = t.selected[t.selected.length - 1];
    if (L)
      return E === !0 || E === !1 ? (L.hitState = E, E) : (L.hitState = !L.hitState, L.hitState);
  }, yt = (E) => {
    const L = E.target.value;
    if (E.type === "compositionend")
      t.isOnComposition = !1, se(() => Z(L));
    else {
      const B = L[L.length - 1] || "";
      t.isOnComposition = !ys(B);
    }
  }, xt = () => {
    se(() => Ke(t.selected));
  }, ze = (E) => {
    t.softFocus ? t.softFocus = !1 : ((e.automaticDropdown || e.filterable) && (e.filterable && !t.visible && (t.menuVisibleOnFocus = !0), t.visible = !0), n.emit("focus", E));
  }, Ie = () => {
    var E;
    t.visible = !1, (E = l.value) == null || E.blur();
  }, Qe = (E) => {
    se(() => {
      t.isSilentBlur ? t.isSilentBlur = !1 : n.emit("blur", E);
    }), t.softFocus = !1;
  }, I = (E) => {
    le(E);
  }, ae = () => {
    t.visible = !1;
  }, Ae = (E) => {
    t.visible && (E.preventDefault(), E.stopPropagation(), t.visible = !1);
  }, Ze = (E) => {
    var L;
    E && !t.mouseEnter || g.value || (t.menuVisibleOnFocus ? t.menuVisibleOnFocus = !1 : (!a.value || !a.value.isFocusInsideContent()) && (t.visible = !t.visible), t.visible && ((L = s.value || l.value) == null || L.focus()));
  }, Lt = () => {
    t.visible ? C.value[t.hoverIndex] && Te(C.value[t.hoverIndex], void 0) : Ze();
  }, wt = (E) => ot(E.value) ? Me(E.value, e.valueKey) : E.value, Yt = T(() => C.value.filter((E) => E.visible).every((E) => E.disabled)), Xt = (E) => {
    if (!t.visible) {
      t.visible = !0;
      return;
    }
    if (!(t.options.size === 0 || t.filteredOptionsCount === 0) && !t.isOnComposition && !Yt.value) {
      E === "next" ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0)) : E === "prev" && (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1));
      const L = C.value[t.hoverIndex];
      (L.disabled === !0 || L.states.groupDisabled === !0 || !L.visible) && Xt(E), se(() => Ke(f.value));
    }
  };
  return {
    optionsArray: C,
    selectSize: M,
    handleResize: q,
    debouncedOnInputChange: me,
    debouncedQueryChange: ve,
    deletePrevTag: be,
    deleteTag: Se,
    deleteSelected: le,
    handleOptionSelect: Te,
    scrollToOption: Ke,
    readonly: y,
    resetInputHeight: j,
    showClose: w,
    iconComponent: S,
    iconReverse: b,
    showNewOption: k,
    collapseTagSize: D,
    setSelected: oe,
    managePlaceholder: F,
    selectDisabled: g,
    emptyText: _,
    toggleLastOptionHitState: Xe,
    resetInputState: dt,
    handleComposition: yt,
    onOptionCreate: Ye,
    onOptionDestroy: Pt,
    handleMenuEnter: xt,
    handleFocus: ze,
    blur: Ie,
    handleBlur: Qe,
    handleClearClick: I,
    handleClose: ae,
    handleKeydownEscape: Ae,
    toggleMenu: Ze,
    selectOption: Lt,
    getValueKey: wt,
    navigateOptions: Xt,
    dropMenuVisible: z,
    queryChange: p,
    groupQueryChange: v,
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
}, Ta = "ElSelect", Sy = U({
  name: Ta,
  componentName: Ta,
  components: {
    ElInput: Ws,
    ElSelectMenu: yy,
    ElOption: il,
    ElTag: ey,
    ElScrollbar: rl,
    ElTooltip: Xs,
    ElIcon: Je
  },
  directives: { ClickOutside: Qs },
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
      validator: yh
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
    teleported: sl.teleported,
    persistent: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: qt,
      default: Wr
    },
    fitInputWidth: {
      type: Boolean,
      default: !1
    },
    suffixIcon: {
      type: qt,
      default: hs
    },
    tagType: { ...ci.type, default: "info" },
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
      values: Wo,
      default: "bottom-start"
    }
  },
  emits: [
    We,
    bs,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const n = ne("select"), o = ne("input"), { t: r } = zt(), l = wy(e), {
      optionsArray: s,
      selectSize: a,
      readonly: i,
      handleResize: u,
      collapseTagSize: d,
      debouncedOnInputChange: f,
      debouncedQueryChange: p,
      deletePrevTag: v,
      deleteTag: c,
      deleteSelected: h,
      handleOptionSelect: y,
      scrollToOption: g,
      setSelected: w,
      resetInputHeight: S,
      managePlaceholder: b,
      showClose: $,
      selectDisabled: _,
      iconComponent: C,
      iconReverse: P,
      showNewOption: k,
      emptyText: M,
      toggleLastOptionHitState: D,
      resetInputState: z,
      handleComposition: j,
      onOptionCreate: Z,
      onOptionDestroy: F,
      handleMenuEnter: G,
      handleFocus: oe,
      blur: H,
      handleBlur: A,
      handleClearClick: q,
      handleClose: ue,
      handleKeydownEscape: ce,
      toggleMenu: me,
      selectOption: ve,
      getValueKey: re,
      navigateOptions: be,
      dropMenuVisible: Se,
      reference: le,
      input: Te,
      tooltipRef: Fe,
      tags: lt,
      selectWrapper: Ke,
      scrollbar: Ye,
      queryChange: Pt,
      groupQueryChange: dt,
      handleMouseEnter: Xe,
      handleMouseLeave: yt
    } = Cy(e, l, t), { focus: xt } = Th(le), {
      inputWidth: ze,
      selected: Ie,
      inputLength: Qe,
      filteredOptionsCount: I,
      visible: ae,
      softFocus: Ae,
      selectedLabel: Ze,
      hoverIndex: Lt,
      query: wt,
      inputHovering: Yt,
      currentPlaceholder: Xt,
      menuVisibleOnFocus: W,
      isOnComposition: ee,
      isSilentBlur: E,
      options: L,
      cachedOptions: B,
      optionsCount: X,
      prefixWidth: fe,
      tagInMultiLine: Be
    } = kn(l), ke = T(() => {
      const He = [n.b()], At = m(a);
      return At && He.push(n.m(At)), e.disabled && He.push(n.m("disabled")), He;
    }), ft = T(() => ({
      maxWidth: `${m(ze) - 32}px`,
      width: "100%"
    })), je = T(() => ({ maxWidth: `${m(ze) > 123 ? m(ze) - 123 : m(ze) - 75}px` }));
    it(Vo, Vt({
      props: e,
      options: L,
      optionsArray: s,
      cachedOptions: B,
      optionsCount: X,
      filteredOptionsCount: I,
      hoverIndex: Lt,
      handleOptionSelect: y,
      onOptionCreate: Z,
      onOptionDestroy: F,
      selectWrapper: Ke,
      selected: Ie,
      setSelected: w,
      queryChange: Pt,
      groupQueryChange: dt
    })), Le(() => {
      l.cachedPlaceHolder = Xt.value = e.placeholder || (() => r("el.select.placeholder")), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (Xt.value = ""), En(Ke, u), e.remote && e.multiple && S(), se(() => {
        const He = le.value && le.value.$el;
        if (He && (ze.value = He.getBoundingClientRect().width, t.slots.prefix)) {
          const At = He.querySelector(`.${o.e("prefix")}`);
          fe.value = Math.max(At.getBoundingClientRect().width + 5, 30);
        }
      }), w();
    }), e.multiple && !Array.isArray(e.modelValue) && t.emit(We, []), !e.multiple && Array.isArray(e.modelValue) && t.emit(We, "");
    const fn = T(() => {
      var He, At;
      return (At = (He = Fe.value) == null ? void 0 : He.popperRef) == null ? void 0 : At.contentRef;
    });
    return {
      tagInMultiLine: Be,
      prefixWidth: fe,
      selectSize: a,
      readonly: i,
      handleResize: u,
      collapseTagSize: d,
      debouncedOnInputChange: f,
      debouncedQueryChange: p,
      deletePrevTag: v,
      deleteTag: c,
      deleteSelected: h,
      handleOptionSelect: y,
      scrollToOption: g,
      inputWidth: ze,
      selected: Ie,
      inputLength: Qe,
      filteredOptionsCount: I,
      visible: ae,
      softFocus: Ae,
      selectedLabel: Ze,
      hoverIndex: Lt,
      query: wt,
      inputHovering: Yt,
      currentPlaceholder: Xt,
      menuVisibleOnFocus: W,
      isOnComposition: ee,
      isSilentBlur: E,
      options: L,
      resetInputHeight: S,
      managePlaceholder: b,
      showClose: $,
      selectDisabled: _,
      iconComponent: C,
      iconReverse: P,
      showNewOption: k,
      emptyText: M,
      toggleLastOptionHitState: D,
      resetInputState: z,
      handleComposition: j,
      handleMenuEnter: G,
      handleFocus: oe,
      blur: H,
      handleBlur: A,
      handleClearClick: q,
      handleClose: ue,
      handleKeydownEscape: ce,
      toggleMenu: me,
      selectOption: ve,
      getValueKey: re,
      navigateOptions: be,
      dropMenuVisible: Se,
      focus: xt,
      reference: le,
      input: Te,
      tooltipRef: Fe,
      popperPaneRef: fn,
      tags: lt,
      selectWrapper: Ke,
      scrollbar: Ye,
      wrapperKls: ke,
      selectTagsStyle: ft,
      nsSelect: n,
      tagTextStyle: je,
      handleMouseEnter: Xe,
      handleMouseLeave: yt
    };
  }
}), Ey = ["disabled", "autocomplete"], _y = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function Oy(e, t, n, o, r, l) {
  const s = $e("el-tag"), a = $e("el-tooltip"), i = $e("el-icon"), u = $e("el-input"), d = $e("el-option"), f = $e("el-scrollbar"), p = $e("el-select-menu"), v = $r("click-outside");
  return xe((x(), N("div", {
    ref: "selectWrapper",
    class: R(e.wrapperKls),
    onMouseenter: t[22] || (t[22] = (...c) => e.handleMouseEnter && e.handleMouseEnter(...c)),
    onMouseleave: t[23] || (t[23] = (...c) => e.handleMouseLeave && e.handleMouseLeave(...c)),
    onClick: t[24] || (t[24] = vt((...c) => e.toggleMenu && e.toggleMenu(...c), ["stop"]))
  }, [
    he(a, {
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
      default: te(() => [
        K("div", {
          class: "select-trigger",
          onMouseenter: t[20] || (t[20] = (c) => e.inputHovering = !0),
          onMouseleave: t[21] || (t[21] = (c) => e.inputHovering = !1)
        }, [
          e.multiple ? (x(), N("div", {
            key: 0,
            ref: "tags",
            class: R(e.nsSelect.e("tags")),
            style: Oe(e.selectTagsStyle)
          }, [
            e.collapseTags && e.selected.length ? (x(), N("span", {
              key: 0,
              class: R([
                e.nsSelect.b("tags-wrapper"),
                { "has-prefix": e.prefixWidth && e.selected.length }
              ])
            }, [
              he(s, {
                closable: !e.selectDisabled && !e.selected[0].isDisabled,
                size: e.collapseTagSize,
                hit: e.selected[0].hitState,
                type: e.tagType,
                "disable-transitions": "",
                onClose: t[0] || (t[0] = (c) => e.deleteTag(c, e.selected[0]))
              }, {
                default: te(() => [
                  K("span", {
                    class: R(e.nsSelect.e("tags-text")),
                    style: Oe(e.tagTextStyle)
                  }, ye(e.selected[0].currentLabel), 7)
                ]),
                _: 1
              }, 8, ["closable", "size", "hit", "type"]),
              e.selected.length > 1 ? (x(), J(s, {
                key: 0,
                closable: !1,
                size: e.collapseTagSize,
                type: e.tagType,
                "disable-transitions": ""
              }, {
                default: te(() => [
                  e.collapseTagsTooltip ? (x(), J(a, {
                    key: 0,
                    disabled: e.dropMenuVisible,
                    "fallback-placements": ["bottom", "top", "right", "left"],
                    effect: e.effect,
                    placement: "bottom",
                    teleported: e.teleported
                  }, {
                    default: te(() => [
                      K("span", {
                        class: R(e.nsSelect.e("tags-text"))
                      }, "+ " + ye(e.selected.length - 1), 3)
                    ]),
                    content: te(() => [
                      K("div", {
                        class: R(e.nsSelect.e("collapse-tags"))
                      }, [
                        (x(!0), N(Ue, null, wn(e.selected.slice(1), (c, h) => (x(), N("div", {
                          key: h,
                          class: R(e.nsSelect.e("collapse-tag"))
                        }, [
                          (x(), J(s, {
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
                            default: te(() => [
                              K("span", {
                                class: R(e.nsSelect.e("tags-text")),
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
                  }, 8, ["disabled", "effect", "teleported"])) : (x(), N("span", {
                    key: 1,
                    class: R(e.nsSelect.e("tags-text"))
                  }, "+ " + ye(e.selected.length - 1), 3))
                ]),
                _: 1
              }, 8, ["size", "type"])) : Y("v-if", !0)
            ], 2)) : Y("v-if", !0),
            Y(" <div> "),
            e.collapseTags ? Y("v-if", !0) : (x(), J(Zn, {
              key: 1,
              onAfterLeave: e.resetInputHeight
            }, {
              default: te(() => [
                K("span", {
                  class: R([
                    e.nsSelect.b("tags-wrapper"),
                    { "has-prefix": e.prefixWidth && e.selected.length }
                  ])
                }, [
                  (x(!0), N(Ue, null, wn(e.selected, (c) => (x(), J(s, {
                    key: e.getValueKey(c),
                    closable: !e.selectDisabled && !c.isDisabled,
                    size: e.collapseTagSize,
                    hit: c.hitState,
                    type: e.tagType,
                    "disable-transitions": "",
                    onClose: (h) => e.deleteTag(h, c)
                  }, {
                    default: te(() => [
                      K("span", {
                        class: R(e.nsSelect.e("tags-text")),
                        style: Oe({ maxWidth: e.inputWidth - 75 + "px" })
                      }, ye(c.currentLabel), 7)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                ], 2)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])),
            Y(" </div> "),
            e.filterable ? xe((x(), N("input", {
              key: 2,
              ref: "input",
              "onUpdate:modelValue": t[1] || (t[1] = (c) => e.query = c),
              type: "text",
              class: R([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
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
                t[6] || (t[6] = at(vt((c) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                t[7] || (t[7] = at(vt((c) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                t[8] || (t[8] = at((...c) => e.handleKeydownEscape && e.handleKeydownEscape(...c), ["esc"])),
                t[9] || (t[9] = at(vt((...c) => e.selectOption && e.selectOption(...c), ["stop", "prevent"]), ["enter"])),
                t[10] || (t[10] = at((...c) => e.deletePrevTag && e.deletePrevTag(...c), ["delete"])),
                t[11] || (t[11] = at((c) => e.visible = !1, ["tab"]))
              ],
              onCompositionstart: t[12] || (t[12] = (...c) => e.handleComposition && e.handleComposition(...c)),
              onCompositionupdate: t[13] || (t[13] = (...c) => e.handleComposition && e.handleComposition(...c)),
              onCompositionend: t[14] || (t[14] = (...c) => e.handleComposition && e.handleComposition(...c)),
              onInput: t[15] || (t[15] = (...c) => e.debouncedQueryChange && e.debouncedQueryChange(...c))
            }, null, 46, Ey)), [
              [Ri, e.query]
            ]) : Y("v-if", !0)
          ], 6)) : Y("v-if", !0),
          he(u, {
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
            class: R([e.nsSelect.is("focus", e.visible)]),
            tabindex: e.multiple && e.filterable ? -1 : void 0,
            onFocus: e.handleFocus,
            onBlur: e.handleBlur,
            onInput: e.debouncedOnInputChange,
            onPaste: e.debouncedOnInputChange,
            onCompositionstart: e.handleComposition,
            onCompositionupdate: e.handleComposition,
            onCompositionend: e.handleComposition,
            onKeydown: [
              t[17] || (t[17] = at(vt((c) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
              t[18] || (t[18] = at(vt((c) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
              at(vt(e.selectOption, ["stop", "prevent"]), ["enter"]),
              at(e.handleKeydownEscape, ["esc"]),
              t[19] || (t[19] = at((c) => e.visible = !1, ["tab"]))
            ]
          }, Ii({
            suffix: te(() => [
              e.iconComponent && !e.showClose ? (x(), J(i, {
                key: 0,
                class: R([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: te(() => [
                  (x(), J(ht(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : Y("v-if", !0),
              e.showClose && e.clearIcon ? (x(), J(i, {
                key: 1,
                class: R([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                onClick: e.handleClearClick
              }, {
                default: te(() => [
                  (x(), J(ht(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : Y("v-if", !0)
            ]),
            _: 2
          }, [
            e.$slots.prefix ? {
              name: "prefix",
              fn: te(() => [
                K("div", _y, [
                  pe(e.$slots, "prefix")
                ])
              ])
            } : void 0
          ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
        ], 32)
      ]),
      content: te(() => [
        he(p, null, {
          default: te(() => [
            xe(he(f, {
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: R([
                e.nsSelect.is("empty", !e.allowCreate && Boolean(e.query) && e.filteredOptionsCount === 0)
              ])
            }, {
              default: te(() => [
                e.showNewOption ? (x(), J(d, {
                  key: 0,
                  value: e.query,
                  created: !0
                }, null, 8, ["value"])) : Y("v-if", !0),
                pe(e.$slots, "default")
              ]),
              _: 3
            }, 8, ["wrap-class", "view-class", "class"]), [
              [It, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? (x(), N(Ue, { key: 0 }, [
              e.$slots.empty ? pe(e.$slots, "empty", { key: 0 }) : (x(), N("p", {
                key: 1,
                class: R(e.nsSelect.be("dropdown", "empty"))
              }, ye(e.emptyText), 3))
            ], 64)) : Y("v-if", !0)
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
var Ty = /* @__PURE__ */ ge(Sy, [["render", Oy], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const $y = U({
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
    const t = ne("select"), n = O(!0), o = we(), r = O([]);
    it(di, Vt({
      ...kn(e)
    }));
    const l = ie(Vo);
    Le(() => {
      r.value = s(o.subTree);
    });
    const s = (i) => {
      const u = [];
      return Array.isArray(i.children) && i.children.forEach((d) => {
        var f;
        d.type && d.type.name === "ElOption" && d.component && d.component.proxy ? u.push(d.component.proxy) : (f = d.children) != null && f.length && u.push(...s(d));
      }), u;
    }, { groupQueryChange: a } = yn(l);
    return V(a, () => {
      n.value = r.value.some((i) => i.visible === !0);
    }, { flush: "post" }), {
      visible: n,
      ns: t
    };
  }
});
function Py(e, t, n, o, r, l) {
  return xe((x(), N("ul", {
    class: R(e.ns.be("group", "wrap"))
  }, [
    K("li", {
      class: R(e.ns.be("group", "title"))
    }, ye(e.label), 3),
    K("li", null, [
      K("ul", {
        class: R(e.ns.b("group"))
      }, [
        pe(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [It, e.visible]
  ]);
}
var fi = /* @__PURE__ */ ge($y, [["render", Py], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
const xy = Tt(Ty, {
  Option: il,
  OptionGroup: fi
}), Ly = to(il);
to(fi);
const ul = () => ie(ws, {}), Ay = _e({
  pageSize: {
    type: Number,
    required: !0
  },
  pageSizes: {
    type: de(Array),
    default: () => Kr([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String
  },
  disabled: Boolean,
  size: {
    type: String,
    values: no
  }
}), ky = U({
  name: "ElPaginationSizes"
}), Ry = /* @__PURE__ */ U({
  ...ky,
  props: Ay,
  emits: ["page-size-change"],
  setup(e, { emit: t }) {
    const n = e, { t: o } = zt(), r = ne("pagination"), l = ul(), s = O(n.pageSize);
    V(() => n.pageSizes, (u, d) => {
      if (!To(u, d) && Array.isArray(u)) {
        const f = u.includes(n.pageSize) ? n.pageSize : n.pageSizes[0];
        t("page-size-change", f);
      }
    }), V(() => n.pageSize, (u) => {
      s.value = u;
    });
    const a = T(() => n.pageSizes);
    function i(u) {
      var d;
      u !== s.value && (s.value = u, (d = l.handleSizeChange) == null || d.call(l, Number(u)));
    }
    return (u, d) => (x(), N("span", {
      class: R(m(r).e("sizes"))
    }, [
      he(m(xy), {
        "model-value": s.value,
        disabled: u.disabled,
        "popper-class": u.popperClass,
        size: u.size,
        "validate-event": !1,
        onChange: i
      }, {
        default: te(() => [
          (x(!0), N(Ue, null, wn(m(a), (f) => (x(), J(m(Ly), {
            key: f,
            value: f,
            label: f + m(o)("el.pagination.pagesize")
          }, null, 8, ["value", "label"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value", "disabled", "popper-class", "size"])
    ], 2));
  }
});
var Iy = /* @__PURE__ */ ge(Ry, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);
const My = _e({
  size: {
    type: String,
    values: no
  }
}), Ny = ["disabled"], Fy = U({
  name: "ElPaginationJumper"
}), zy = /* @__PURE__ */ U({
  ...Fy,
  props: My,
  setup(e) {
    const { t } = zt(), n = ne("pagination"), { pageCount: o, disabled: r, currentPage: l, changeEvent: s } = ul(), a = O(), i = T(() => {
      var f;
      return (f = a.value) != null ? f : l == null ? void 0 : l.value;
    });
    function u(f) {
      a.value = +f;
    }
    function d(f) {
      f = Math.trunc(+f), s == null || s(+f), a.value = void 0;
    }
    return (f, p) => (x(), N("span", {
      class: R(m(n).e("jump")),
      disabled: m(r)
    }, [
      K("span", {
        class: R([m(n).e("goto")])
      }, ye(m(t)("el.pagination.goto")), 3),
      he(m(Ws), {
        size: f.size,
        class: R([m(n).e("editor"), m(n).is("in-pagination")]),
        min: 1,
        max: m(o),
        disabled: m(r),
        "model-value": m(i),
        "validate-event": !1,
        type: "number",
        "onUpdate:modelValue": u,
        onChange: d
      }, null, 8, ["size", "class", "max", "disabled", "model-value"]),
      K("span", {
        class: R([m(n).e("classifier")])
      }, ye(m(t)("el.pagination.pageClassifier")), 3)
    ], 10, Ny));
  }
});
var By = /* @__PURE__ */ ge(zy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);
const Hy = _e({
  total: {
    type: Number,
    default: 1e3
  }
}), Dy = ["disabled"], Wy = U({
  name: "ElPaginationTotal"
}), Ky = /* @__PURE__ */ U({
  ...Wy,
  props: Hy,
  setup(e) {
    const { t } = zt(), n = ne("pagination"), { disabled: o } = ul();
    return (r, l) => (x(), N("span", {
      class: R(m(n).e("total")),
      disabled: m(o)
    }, ye(m(t)("el.pagination.total", {
      total: r.total
    })), 11, Dy));
  }
});
var jy = /* @__PURE__ */ ge(Ky, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);
const Vy = _e({
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
}), Uy = ["onKeyup"], qy = ["aria-current", "tabindex"], Gy = ["tabindex"], Yy = ["aria-current", "tabindex"], Xy = ["tabindex"], Qy = ["aria-current", "tabindex"], Zy = U({
  name: "ElPaginationPager"
}), Jy = /* @__PURE__ */ U({
  ...Zy,
  props: Vy,
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = e, o = ne("pager"), r = ne("icon"), l = O(!1), s = O(!1), a = O(!1), i = O(!1), u = O(!1), d = O(!1), f = T(() => {
      const g = n.pagerCount, w = (g - 1) / 2, S = Number(n.currentPage), b = Number(n.pageCount);
      let $ = !1, _ = !1;
      b > g && (S > g - w && ($ = !0), S < b - w && (_ = !0));
      const C = [];
      if ($ && !_) {
        const P = b - (g - 2);
        for (let k = P; k < b; k++)
          C.push(k);
      } else if (!$ && _)
        for (let P = 2; P < g; P++)
          C.push(P);
      else if ($ && _) {
        const P = Math.floor(g / 2) - 1;
        for (let k = S - P; k <= S + P; k++)
          C.push(k);
      } else
        for (let P = 2; P < b; P++)
          C.push(P);
      return C;
    }), p = T(() => n.disabled ? -1 : 0);
    bn(() => {
      const g = (n.pagerCount - 1) / 2;
      l.value = !1, s.value = !1, n.pageCount > n.pagerCount && (n.currentPage > n.pagerCount - g && (l.value = !0), n.currentPage < n.pageCount - g && (s.value = !0));
    });
    function v(g = !1) {
      n.disabled || (g ? a.value = !0 : i.value = !0);
    }
    function c(g = !1) {
      g ? u.value = !0 : d.value = !0;
    }
    function h(g) {
      const w = g.target;
      if (w.tagName.toLowerCase() === "li" && Array.from(w.classList).includes("number")) {
        const S = Number(w.textContent);
        S !== n.currentPage && t("change", S);
      } else
        w.tagName.toLowerCase() === "li" && Array.from(w.classList).includes("more") && y(g);
    }
    function y(g) {
      const w = g.target;
      if (w.tagName.toLowerCase() === "ul" || n.disabled)
        return;
      let S = Number(w.textContent);
      const b = n.pageCount, $ = n.currentPage, _ = n.pagerCount - 2;
      w.className.includes("more") && (w.className.includes("quickprev") ? S = $ - _ : w.className.includes("quicknext") && (S = $ + _)), Number.isNaN(+S) || (S < 1 && (S = 1), S > b && (S = b)), S !== $ && t("change", S);
    }
    return (g, w) => (x(), N("ul", {
      class: R(m(o).b()),
      onClick: y,
      onKeyup: at(h, ["enter"])
    }, [
      g.pageCount > 0 ? (x(), N("li", {
        key: 0,
        class: R([[
          m(o).is("active", g.currentPage === 1),
          m(o).is("disabled", g.disabled)
        ], "number"]),
        "aria-current": g.currentPage === 1,
        tabindex: m(p)
      }, " 1 ", 10, qy)) : Y("v-if", !0),
      l.value ? (x(), N("li", {
        key: 1,
        class: R([
          "more",
          "btn-quickprev",
          m(r).b(),
          m(o).is("disabled", g.disabled)
        ]),
        tabindex: m(p),
        onMouseenter: w[0] || (w[0] = (S) => v(!0)),
        onMouseleave: w[1] || (w[1] = (S) => a.value = !1),
        onFocus: w[2] || (w[2] = (S) => c(!0)),
        onBlur: w[3] || (w[3] = (S) => u.value = !1)
      }, [
        (a.value || u.value) && !g.disabled ? (x(), J(m(Bv), { key: 0 })) : (x(), J(m(Xl), { key: 1 }))
      ], 42, Gy)) : Y("v-if", !0),
      (x(!0), N(Ue, null, wn(m(f), (S) => (x(), N("li", {
        key: S,
        class: R([[
          m(o).is("active", g.currentPage === S),
          m(o).is("disabled", g.disabled)
        ], "number"]),
        "aria-current": g.currentPage === S,
        tabindex: m(p)
      }, ye(S), 11, Yy))), 128)),
      s.value ? (x(), N("li", {
        key: 2,
        class: R([
          "more",
          "btn-quicknext",
          m(r).b(),
          m(o).is("disabled", g.disabled)
        ]),
        tabindex: m(p),
        onMouseenter: w[4] || (w[4] = (S) => v()),
        onMouseleave: w[5] || (w[5] = (S) => i.value = !1),
        onFocus: w[6] || (w[6] = (S) => c()),
        onBlur: w[7] || (w[7] = (S) => d.value = !1)
      }, [
        (i.value || d.value) && !g.disabled ? (x(), J(m(Vv), { key: 0 })) : (x(), J(m(Xl), { key: 1 }))
      ], 42, Xy)) : Y("v-if", !0),
      g.pageCount > 1 ? (x(), N("li", {
        key: 3,
        class: R([[
          m(o).is("active", g.currentPage === g.pageCount),
          m(o).is("disabled", g.disabled)
        ], "number"]),
        "aria-current": g.currentPage === g.pageCount,
        tabindex: m(p)
      }, ye(g.pageCount), 11, Qy)) : Y("v-if", !0)
    ], 42, Uy));
  }
});
var e0 = /* @__PURE__ */ ge(Jy, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);
const De = (e) => typeof e != "number", t0 = _e({
  total: Number,
  pageSize: Number,
  defaultPageSize: Number,
  currentPage: Number,
  defaultCurrentPage: Number,
  pageCount: Number,
  pagerCount: {
    type: Number,
    validator: (e) => Pe(e) && Math.trunc(e) === e && e > 4 && e < 22 && e % 2 === 1,
    default: 7
  },
  layout: {
    type: String,
    default: ["prev", "pager", "next", "jumper", "->", "total"].join(", ")
  },
  pageSizes: {
    type: de(Array),
    default: () => Kr([10, 20, 30, 40, 50, 100])
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
    type: qt,
    default: () => rv
  },
  nextText: {
    type: String,
    default: ""
  },
  nextIcon: {
    type: qt,
    default: () => Dr
  },
  small: Boolean,
  background: Boolean,
  disabled: Boolean,
  hideOnSinglePage: Boolean
}), n0 = {
  "update:current-page": (e) => Pe(e),
  "update:page-size": (e) => Pe(e),
  "size-change": (e) => Pe(e),
  "current-change": (e) => Pe(e),
  "prev-click": (e) => Pe(e),
  "next-click": (e) => Pe(e)
}, $a = "ElPagination";
var o0 = U({
  name: $a,
  props: t0,
  emits: n0,
  setup(e, { emit: t, slots: n }) {
    const { t: o } = zt(), r = ne("pagination"), l = we().vnode.props || {}, s = "onUpdate:currentPage" in l || "onUpdate:current-page" in l || "onCurrentChange" in l, a = "onUpdate:pageSize" in l || "onUpdate:page-size" in l || "onSizeChange" in l, i = T(() => {
      if (De(e.total) && De(e.pageCount) || !De(e.currentPage) && !s)
        return !1;
      if (e.layout.includes("sizes")) {
        if (De(e.pageCount)) {
          if (!De(e.total) && !De(e.pageSize) && !a)
            return !1;
        } else if (!a)
          return !1;
      }
      return !0;
    }), u = O(De(e.defaultPageSize) ? 10 : e.defaultPageSize), d = O(De(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage), f = T({
      get() {
        return De(e.pageSize) ? u.value : e.pageSize;
      },
      set(S) {
        De(e.pageSize) && (u.value = S), a && (t("update:page-size", S), t("size-change", S));
      }
    }), p = T(() => {
      let S = 0;
      return De(e.pageCount) ? De(e.total) || (S = Math.max(1, Math.ceil(e.total / f.value))) : S = e.pageCount, S;
    }), v = T({
      get() {
        return De(e.currentPage) ? d.value : e.currentPage;
      },
      set(S) {
        let b = S;
        S < 1 ? b = 1 : S > p.value && (b = p.value), De(e.currentPage) && (d.value = b), s && (t("update:current-page", b), t("current-change", b));
      }
    });
    V(p, (S) => {
      v.value > S && (v.value = S);
    });
    function c(S) {
      v.value = S;
    }
    function h(S) {
      f.value = S;
      const b = p.value;
      v.value > b && (v.value = b);
    }
    function y() {
      e.disabled || (v.value -= 1, t("prev-click", v.value));
    }
    function g() {
      e.disabled || (v.value += 1, t("next-click", v.value));
    }
    function w(S, b) {
      S && (S.props || (S.props = {}), S.props.class = [S.props.class, b].join(" "));
    }
    return it(ws, {
      pageCount: p,
      disabled: T(() => e.disabled),
      currentPage: v,
      changeEvent: c,
      handleSizeChange: h
    }), () => {
      var S, b;
      if (!i.value)
        return Ne($a, o("el.pagination.deprecationWarning")), null;
      if (!e.layout || e.hideOnSinglePage && p.value <= 1)
        return null;
      const $ = [], _ = [], C = Q("div", { class: r.e("rightwrapper") }, _), P = {
        prev: Q(sy, {
          disabled: e.disabled,
          currentPage: v.value,
          prevText: e.prevText,
          prevIcon: e.prevIcon,
          onClick: y
        }),
        jumper: Q(By, {
          size: e.small ? "small" : "default"
        }),
        pager: Q(e0, {
          currentPage: v.value,
          pageCount: p.value,
          pagerCount: e.pagerCount,
          onChange: c,
          disabled: e.disabled
        }),
        next: Q(py, {
          disabled: e.disabled,
          currentPage: v.value,
          pageCount: p.value,
          nextText: e.nextText,
          nextIcon: e.nextIcon,
          onClick: g
        }),
        sizes: Q(Iy, {
          pageSize: f.value,
          pageSizes: e.pageSizes,
          popperClass: e.popperClass,
          disabled: e.disabled,
          size: e.small ? "small" : "default"
        }),
        slot: (b = (S = n == null ? void 0 : n.default) == null ? void 0 : S.call(n)) != null ? b : null,
        total: Q(jy, { total: De(e.total) ? 0 : e.total })
      }, k = e.layout.split(",").map((D) => D.trim());
      let M = !1;
      return k.forEach((D) => {
        if (D === "->") {
          M = !0;
          return;
        }
        M ? _.push(P[D]) : $.push(P[D]);
      }), w($[0], r.is("first")), w($[$.length - 1], r.is("last")), M && _.length > 0 && (w(_[0], r.is("first")), w(_[_.length - 1], r.is("last")), $.push(C)), Q("div", {
        role: "pagination",
        "aria-label": "pagination",
        class: [
          r.b(),
          r.is("background", e.background),
          {
            [r.m("small")]: e.small
          }
        ]
      }, $);
    };
  }
});
const r0 = Tt(o0);
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
var l0 = /["'&<>]/, a0 = s0;
function s0(e) {
  var t = "" + e, n = l0.exec(t);
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
const er = function(e) {
  var t;
  return (t = e.target) == null ? void 0 : t.closest("td");
}, i0 = function(e, t, n, o, r) {
  if (!t && !o && (!r || Array.isArray(r) && !r.length))
    return e;
  typeof n == "string" ? n = n === "descending" ? -1 : 1 : n = n && n < 0 ? -1 : 1;
  const l = o ? null : function(a, i) {
    return r ? (Array.isArray(r) || (r = [r]), r.map((u) => typeof u == "string" ? Me(a, u) : u(a, i, e))) : (t !== "$key" && ot(a) && "$value" in a && (a = a.$value), [ot(a) ? Me(a, t) : a]);
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
}, pi = function(e, t) {
  let n = null;
  return e.columns.forEach((o) => {
    o.id === t && (n = o);
  }), n;
}, u0 = function(e, t) {
  let n = null;
  for (let o = 0; o < e.columns.length; o++) {
    const r = e.columns[o];
    if (r.columnKey === t) {
      n = r;
      break;
    }
  }
  return n || ps("ElTable", `No column matching with column-key: ${t}`), n;
}, Pa = function(e, t, n) {
  const o = (t.className || "").match(new RegExp(`${n}-table_[^\\s]+`, "gm"));
  return o ? pi(e, o[0]) : null;
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
}, tn = function(e, t) {
  const n = {};
  return (e || []).forEach((o, r) => {
    n[Re(o, t)] = { row: o, index: r };
  }), n;
};
function c0(e, t) {
  const n = {};
  let o;
  for (o in e)
    n[o] = e[o];
  for (o in t)
    if (ln(t, o)) {
      const r = t[o];
      typeof r < "u" && (n[o] = r);
    }
  return n;
}
function cl(e) {
  return e === "" || e !== void 0 && (e = Number.parseInt(e, 10), Number.isNaN(e) && (e = "")), e;
}
function vi(e) {
  return e === "" || e !== void 0 && (e = cl(e), Number.isNaN(e) && (e = 80)), e;
}
function d0(e) {
  return typeof e == "number" ? e : typeof e == "string" ? /^\d+(?:px)?$/.test(e) ? Number.parseInt(e, 10) : e : null;
}
function f0(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...o) => t(n(...o)));
}
function Wn(e, t, n) {
  let o = !1;
  const r = e.indexOf(t), l = r !== -1, s = (a) => {
    a === "add" ? e.push(t) : e.splice(r, 1), o = !0, an(t.children) && t.children.forEach((i) => {
      Wn(e, i, n ?? !l);
    });
  };
  return Sn(n) ? n && !l ? s("add") : !n && l && s("remove") : s(l ? "remove" : "add"), o;
}
function p0(e, t, n = "children", o = "hasChildren") {
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
let kt;
function v0(e, t, n, o) {
  o = ss({
    enterable: !0,
    showArrow: !0
  }, o);
  const { nextZIndex: r } = ol(), l = e == null ? void 0 : e.dataset.prefix, s = e == null ? void 0 : e.querySelector(`.${l}-scrollbar__wrap`);
  function a() {
    const y = o.effect === "light", g = document.createElement("div");
    return g.className = [
      `${l}-popper`,
      y ? "is-light" : "is-dark",
      o.popperClass || ""
    ].join(" "), n = a0(n), g.innerHTML = n, g.style.zIndex = String(r()), e == null || e.appendChild(g), g;
  }
  function i() {
    const y = document.createElement("div");
    return y.className = `${l}-popper__arrow`, y;
  }
  function u() {
    d && d.update();
  }
  kt == null || kt(), kt = () => {
    try {
      d && d.destroy(), v && (e == null || e.removeChild(v)), t.removeEventListener("mouseenter", f), t.removeEventListener("mouseleave", p), s == null || s.removeEventListener("scroll", kt), kt = void 0;
    } catch {
    }
  };
  let d = null, f = u, p = kt;
  o.enterable && ({ onOpen: f, onClose: p } = Hs({
    showAfter: o.showAfter,
    hideAfter: o.hideAfter,
    open: u,
    close: kt
  }));
  const v = a();
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
  const h = o.popperOptions || {};
  return d = zs(t, v, {
    placement: o.placement || "top",
    strategy: "fixed",
    ...h,
    modifiers: h.modifiers ? c.concat(h.modifiers) : c
  }), t.addEventListener("mouseenter", f), t.addEventListener("mouseleave", p), s == null || s.addEventListener("scroll", kt), d;
}
function hi(e) {
  return e.children ? vp(e.children, hi) : [e];
}
function xa(e, t) {
  return e + t.colSpan;
}
const gi = (e, t, n, o) => {
  let r = 0, l = e;
  const s = n.states.columns.value;
  if (o) {
    const i = hi(o[e]);
    r = s.slice(0, s.indexOf(i[0])).reduce(xa, 0), l = r + i.reduce(xa, 0) - 1;
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
}, dl = (e, t, n, o, r, l = 0) => {
  const s = [], { direction: a, start: i, after: u } = gi(t, n, o, r);
  if (a) {
    const d = a === "left";
    s.push(`${e}-fixed-column--${a}`), d && u + l === o.states.fixedLeafColumnsLength.value - 1 ? s.push("is-last-column") : !d && i - l === o.states.columns.value.length - o.states.rightFixedLeafColumnsLength.value && s.push("is-first-column");
  }
  return s;
};
function La(e, t) {
  return e + (t.realWidth === null || Number.isNaN(t.realWidth) ? Number(t.width) : t.realWidth);
}
const fl = (e, t, n, o) => {
  const {
    direction: r,
    start: l = 0,
    after: s = 0
  } = gi(e, t, n, o);
  if (!r)
    return;
  const a = {}, i = r === "left", u = n.states.columns.value;
  return i ? a.left = u.slice(0, l).reduce(La, 0) : a.right = u.slice(s + 1).reverse().reduce(La, 0), a;
}, An = (e, t) => {
  e && (Number.isNaN(e[t]) || (e[t] = `${e[t]}px`));
};
function h0(e) {
  const t = we(), n = O(!1), o = O([]);
  return {
    updateExpandRows: () => {
      const i = e.data.value || [], u = e.rowKey.value;
      if (n.value)
        o.value = i.slice();
      else if (u) {
        const d = tn(o.value, u);
        o.value = i.reduce((f, p) => {
          const v = Re(p, u);
          return d[v] && f.push(p), f;
        }, []);
      } else
        o.value = [];
    },
    toggleRowExpansion: (i, u) => {
      Wn(o.value, i, u) && t.emit("expand-change", i, o.value.slice());
    },
    setExpandRowKeys: (i) => {
      t.store.assertRowKey();
      const u = e.data.value || [], d = e.rowKey.value, f = tn(u, d);
      o.value = i.reduce((p, v) => {
        const c = f[v];
        return c && p.push(c.row), p;
      }, []);
    },
    isRowExpanded: (i) => {
      const u = e.rowKey.value;
      return u ? !!tn(o.value, u)[Re(i, u)] : o.value.includes(i);
    },
    states: {
      expandRows: o,
      defaultExpandAll: n
    }
  };
}
function g0(e) {
  const t = we(), n = O(null), o = O(null), r = (u) => {
    t.store.assertRowKey(), n.value = u, s(u);
  }, l = () => {
    n.value = null;
  }, s = (u) => {
    const { data: d, rowKey: f } = e;
    let p = null;
    f.value && (p = (m(d) || []).find((v) => Re(v, f.value) === u)), o.value = p, t.emit("current-change", o.value, null);
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
function m0(e) {
  const t = O([]), n = O({}), o = O(16), r = O(!1), l = O({}), s = O("hasChildren"), a = O("children"), i = we(), u = T(() => {
    if (!e.rowKey.value)
      return {};
    const g = e.data.value || [];
    return f(g);
  }), d = T(() => {
    const g = e.rowKey.value, w = Object.keys(l.value), S = {};
    return w.length && w.forEach((b) => {
      if (l.value[b].length) {
        const $ = { children: [] };
        l.value[b].forEach((_) => {
          const C = Re(_, g);
          $.children.push(C), _[s.value] && !S[C] && (S[C] = { children: [] });
        }), S[b] = $;
      }
    }), S;
  }), f = (g) => {
    const w = e.rowKey.value, S = {};
    return p0(g, (b, $, _) => {
      const C = Re(b, w);
      Array.isArray($) ? S[C] = {
        children: $.map((P) => Re(P, w)),
        level: _
      } : r.value && (S[C] = {
        children: [],
        lazy: !0,
        level: _
      });
    }, a.value, s.value), S;
  }, p = (g = !1, w = ((S) => (S = i.store) == null ? void 0 : S.states.defaultExpandAll.value)()) => {
    var S;
    const b = u.value, $ = d.value, _ = Object.keys(b), C = {};
    if (_.length) {
      const P = m(n), k = [], M = (z, j) => {
        if (g)
          return t.value ? w || t.value.includes(j) : !!(w || z != null && z.expanded);
        {
          const Z = w || t.value && t.value.includes(j);
          return !!(z != null && z.expanded || Z);
        }
      };
      _.forEach((z) => {
        const j = P[z], Z = { ...b[z] };
        if (Z.expanded = M(j, z), Z.lazy) {
          const { loaded: F = !1, loading: G = !1 } = j || {};
          Z.loaded = !!F, Z.loading = !!G, k.push(z);
        }
        C[z] = Z;
      });
      const D = Object.keys($);
      r.value && D.length && k.length && D.forEach((z) => {
        const j = P[z], Z = $[z].children;
        if (k.includes(z)) {
          if (C[z].children.length !== 0)
            throw new Error("[ElTable]children must be an empty array.");
          C[z].children = Z;
        } else {
          const { loaded: F = !1, loading: G = !1 } = j || {};
          C[z] = {
            lazy: !0,
            loaded: !!F,
            loading: !!G,
            expanded: M(j, z),
            children: Z,
            level: ""
          };
        }
      });
    }
    n.value = C, (S = i.store) == null || S.updateTableScrollY();
  };
  V(() => t.value, () => {
    p(!0);
  }), V(() => u.value, () => {
    p();
  }), V(() => d.value, () => {
    p();
  });
  const v = (g) => {
    t.value = g, p();
  }, c = (g, w) => {
    i.store.assertRowKey();
    const S = e.rowKey.value, b = Re(g, S), $ = b && n.value[b];
    if (b && $ && "expanded" in $) {
      const _ = $.expanded;
      w = typeof w > "u" ? !$.expanded : w, n.value[b].expanded = w, _ !== w && i.emit("expand-change", g, w), i.store.updateTableScrollY();
    }
  }, h = (g) => {
    i.store.assertRowKey();
    const w = e.rowKey.value, S = Re(g, w), b = n.value[S];
    r.value && b && "loaded" in b && !b.loaded ? y(g, S, b) : c(g, void 0);
  }, y = (g, w, S) => {
    const { load: b } = i.props;
    b && !n.value[w].loaded && (n.value[w].loading = !0, b(g, S, ($) => {
      if (!Array.isArray($))
        throw new TypeError("[ElTable] data must be an array");
      n.value[w].loading = !1, n.value[w].loaded = !0, n.value[w].expanded = !0, $.length && (l.value[w] = $), i.emit("expand-change", g, !0);
    }));
  };
  return {
    loadData: y,
    loadOrToggle: h,
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
      lazyColumnIdentifier: s,
      childrenColumnName: a
    }
  };
}
const b0 = (e, t) => {
  const n = t.sortingColumn;
  return !n || typeof n.sortable == "string" ? e : i0(e, t.sortProp, t.sortOrder, n.sortMethod, n.sortBy);
}, yo = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children ? t.push.apply(t, yo(n.children)) : t.push(n);
  }), t;
};
function y0() {
  var e;
  const t = we(), { size: n } = kn((e = t.proxy) == null ? void 0 : e.$props), o = O(null), r = O([]), l = O([]), s = O(!1), a = O([]), i = O([]), u = O([]), d = O([]), f = O([]), p = O([]), v = O([]), c = O([]), h = [], y = O(0), g = O(0), w = O(0), S = O(!1), b = O([]), $ = O(!1), _ = O(!1), C = O(null), P = O({}), k = O(null), M = O(null), D = O(null), z = O(null), j = O(null);
  V(r, () => t.state && oe(!1), {
    deep: !0
  });
  const Z = () => {
    if (!o.value)
      throw new Error("[ElTable] prop row-key is required");
  }, F = (W) => {
    var ee;
    (ee = W.children) == null || ee.forEach((E) => {
      E.fixed = W.fixed, F(E);
    });
  }, G = () => {
    a.value.forEach((B) => {
      F(B);
    }), d.value = a.value.filter((B) => B.fixed === !0 || B.fixed === "left"), f.value = a.value.filter((B) => B.fixed === "right"), d.value.length > 0 && a.value[0] && a.value[0].type === "selection" && !a.value[0].fixed && (a.value[0].fixed = !0, d.value.unshift(a.value[0]));
    const W = a.value.filter((B) => !B.fixed);
    i.value = [].concat(d.value).concat(W).concat(f.value);
    const ee = yo(W), E = yo(d.value), L = yo(f.value);
    y.value = ee.length, g.value = E.length, w.value = L.length, u.value = [].concat(E).concat(ee).concat(L), s.value = d.value.length > 0 || f.value.length > 0;
  }, oe = (W, ee = !1) => {
    W && G(), ee ? t.state.doLayout() : t.state.debouncedUpdateLayout();
  }, H = (W) => b.value.includes(W), A = () => {
    S.value = !1, b.value.length && (b.value = [], t.emit("selection-change", []));
  }, q = () => {
    let W;
    if (o.value) {
      W = [];
      const ee = tn(b.value, o.value), E = tn(r.value, o.value);
      for (const L in ee)
        ln(ee, L) && !E[L] && W.push(ee[L].row);
    } else
      W = b.value.filter((ee) => !r.value.includes(ee));
    if (W.length) {
      const ee = b.value.filter((E) => !W.includes(E));
      b.value = ee, t.emit("selection-change", ee.slice());
    }
  }, ue = () => (b.value || []).slice(), ce = (W, ee = void 0, E = !0) => {
    if (Wn(b.value, W, ee)) {
      const B = (b.value || []).slice();
      E && t.emit("select", B, W), t.emit("selection-change", B);
    }
  }, me = () => {
    var W, ee;
    const E = _.value ? !S.value : !(S.value || b.value.length);
    S.value = E;
    let L = !1, B = 0;
    const X = (ee = (W = t == null ? void 0 : t.store) == null ? void 0 : W.states) == null ? void 0 : ee.rowKey.value;
    r.value.forEach((fe, Be) => {
      const ke = Be + B;
      C.value ? C.value.call(null, fe, ke) && Wn(b.value, fe, E) && (L = !0) : Wn(b.value, fe, E) && (L = !0), B += be(Re(fe, X));
    }), L && t.emit("selection-change", b.value ? b.value.slice() : []), t.emit("select-all", b.value);
  }, ve = () => {
    const W = tn(b.value, o.value);
    r.value.forEach((ee) => {
      const E = Re(ee, o.value), L = W[E];
      L && (b.value[L.index] = ee);
    });
  }, re = () => {
    var W, ee, E;
    if (((W = r.value) == null ? void 0 : W.length) === 0) {
      S.value = !1;
      return;
    }
    let L;
    o.value && (L = tn(b.value, o.value));
    const B = function(ke) {
      return L ? !!L[Re(ke, o.value)] : b.value.includes(ke);
    };
    let X = !0, fe = 0, Be = 0;
    for (let ke = 0, ft = (r.value || []).length; ke < ft; ke++) {
      const je = (E = (ee = t == null ? void 0 : t.store) == null ? void 0 : ee.states) == null ? void 0 : E.rowKey.value, fn = ke + Be, He = r.value[ke], At = C.value && C.value.call(null, He, fn);
      if (B(He))
        fe++;
      else if (!C.value || At) {
        X = !1;
        break;
      }
      Be += be(Re(He, je));
    }
    fe === 0 && (X = !1), S.value = X;
  }, be = (W) => {
    var ee;
    if (!t || !t.store)
      return 0;
    const { treeData: E } = t.store.states;
    let L = 0;
    const B = (ee = E.value[W]) == null ? void 0 : ee.children;
    return B && (L += B.length, B.forEach((X) => {
      L += be(X);
    })), L;
  }, Se = (W, ee) => {
    Array.isArray(W) || (W = [W]);
    const E = {};
    return W.forEach((L) => {
      P.value[L.id] = ee, E[L.columnKey || L.id] = ee;
    }), E;
  }, le = (W, ee, E) => {
    M.value && M.value !== W && (M.value.order = null), M.value = W, D.value = ee, z.value = E;
  }, Te = () => {
    let W = m(l);
    Object.keys(P.value).forEach((ee) => {
      const E = P.value[ee];
      if (!E || E.length === 0)
        return;
      const L = pi({
        columns: u.value
      }, ee);
      L && L.filterMethod && (W = W.filter((B) => E.some((X) => L.filterMethod.call(null, X, B, L))));
    }), k.value = W;
  }, Fe = () => {
    r.value = b0(k.value, {
      sortingColumn: M.value,
      sortProp: D.value,
      sortOrder: z.value
    });
  }, lt = (W = void 0) => {
    W && W.filter || Te(), Fe();
  }, Ke = (W) => {
    const { tableHeaderRef: ee } = t.refs;
    if (!ee)
      return;
    const E = Object.assign({}, ee.filterPanels), L = Object.keys(E);
    if (L.length)
      if (typeof W == "string" && (W = [W]), Array.isArray(W)) {
        const B = W.map((X) => u0({
          columns: u.value
        }, X));
        L.forEach((X) => {
          const fe = B.find((Be) => Be.id === X);
          fe && (fe.filteredValue = []);
        }), t.store.commit("filterChange", {
          column: B,
          values: [],
          silent: !0,
          multi: !0
        });
      } else
        L.forEach((B) => {
          const X = u.value.find((fe) => fe.id === B);
          X && (X.filteredValue = []);
        }), P.value = {}, t.store.commit("filterChange", {
          column: {},
          values: [],
          silent: !0
        });
  }, Ye = () => {
    M.value && (le(null, null, null), t.store.commit("changeSortCondition", {
      silent: !0
    }));
  }, {
    setExpandRowKeys: Pt,
    toggleRowExpansion: dt,
    updateExpandRows: Xe,
    states: yt,
    isRowExpanded: xt
  } = h0({
    data: r,
    rowKey: o
  }), {
    updateTreeExpandKeys: ze,
    toggleTreeExpansion: Ie,
    updateTreeData: Qe,
    loadOrToggle: I,
    states: ae
  } = m0({
    data: r,
    rowKey: o
  }), {
    updateCurrentRowData: Ae,
    updateCurrentRow: Ze,
    setCurrentRowKey: Lt,
    states: wt
  } = g0({
    data: r,
    rowKey: o
  });
  return {
    assertRowKey: Z,
    updateColumns: G,
    scheduleLayout: oe,
    isSelected: H,
    clearSelection: A,
    cleanSelection: q,
    getSelectionRows: ue,
    toggleRowSelection: ce,
    _toggleAllSelection: me,
    toggleAllSelection: null,
    updateSelectionByRowKey: ve,
    updateAllSelected: re,
    updateFilters: Se,
    updateCurrentRow: Ze,
    updateSort: le,
    execFilter: Te,
    execSort: Fe,
    execQuery: lt,
    clearFilter: Ke,
    clearSort: Ye,
    toggleRowExpansion: dt,
    setExpandRowKeysAdapter: (W) => {
      Pt(W), ze(W);
    },
    setCurrentRowKey: Lt,
    toggleRowExpansionAdapter: (W, ee) => {
      u.value.some(({ type: L }) => L === "expand") ? dt(W, ee) : Ie(W, ee);
    },
    isRowExpanded: xt,
    updateExpandRows: Xe,
    updateCurrentRowData: Ae,
    loadOrToggle: I,
    updateTreeData: Qe,
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
      fixedLeafColumns: v,
      rightFixedLeafColumns: c,
      updateOrderFns: h,
      leafColumnsLength: y,
      fixedLeafColumnsLength: g,
      rightFixedLeafColumnsLength: w,
      isAllSelected: S,
      selection: b,
      reserveSelection: $,
      selectOnIndeterminate: _,
      selectable: C,
      filters: P,
      filteredData: k,
      sortingColumn: M,
      sortProp: D,
      sortOrder: z,
      hoverRow: j,
      ...yt,
      ...ae,
      ...wt
    }
  };
}
function Sr(e, t) {
  return e.map((n) => {
    var o;
    return n.id === t.id ? t : ((o = n.children) != null && o.length && (n.children = Sr(n.children, t)), n);
  });
}
function Er(e) {
  e.forEach((t) => {
    var n, o;
    t.no = (n = t.getColumnIndex) == null ? void 0 : n.call(t), (o = t.children) != null && o.length && Er(t.children);
  }), e.sort((t, n) => t.no - n.no);
}
function w0() {
  const e = we(), t = y0();
  return {
    ns: ne("table"),
    ...t,
    mutations: {
      setData(s, a) {
        const i = m(s._data) !== a;
        s.data.value = a, s._data.value = a, e.store.execQuery(), e.store.updateCurrentRowData(), e.store.updateExpandRows(), e.store.updateTreeData(e.store.states.defaultExpandAll.value), m(s.reserveSelection) ? (e.store.assertRowKey(), e.store.updateSelectionByRowKey()) : i ? e.store.clearSelection() : e.store.cleanSelection(), e.store.updateAllSelected(), e.$ready && e.store.scheduleLayout();
      },
      insertColumn(s, a, i, u) {
        const d = m(s._columns);
        let f = [];
        i ? (i && !i.children && (i.children = []), i.children.push(a), f = Sr(d, i)) : (d.push(a), f = d), Er(f), s._columns.value = f, s.updateOrderFns.push(u), a.type === "selection" && (s.selectable.value = a.selectable, s.reserveSelection.value = a.reserveSelection), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
      },
      updateColumnOrder(s, a) {
        var i;
        ((i = a.getColumnIndex) == null ? void 0 : i.call(a)) !== a.no && (Er(s._columns.value), e.$ready && e.store.updateColumns());
      },
      removeColumn(s, a, i, u) {
        const d = m(s._columns) || [];
        if (i)
          i.children.splice(i.children.findIndex((p) => p.id === a.id), 1), se(() => {
            var p;
            ((p = i.children) == null ? void 0 : p.length) === 0 && delete i.children;
          }), s._columns.value = Sr(d, i);
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
          const f = m(s.columns).find((p) => p.property === i);
          f && (f.order = u, e.store.updateSort(f, i, u), e.store.commit("changeSortCondition", { init: d }));
        }
      },
      changeSortCondition(s, a) {
        const { sortingColumn: i, sortProp: u, sortOrder: d } = s, f = m(i), p = m(u), v = m(d);
        v === null && (s.sortingColumn.value = null, s.sortProp.value = null);
        const c = { filter: !0 };
        e.store.execQuery(c), (!a || !(a.silent || a.init)) && e.emit("sort-change", {
          column: f,
          prop: p,
          order: v
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
      se(() => e.layout.updateScrollY.apply(e.layout));
    }
  };
}
const Kn = {
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
function C0(e, t) {
  if (!e)
    throw new Error("Table is required.");
  const n = w0();
  return n.toggleAllSelection = Cn(n._toggleAllSelection, 10), Object.keys(Kn).forEach((o) => {
    mi(bi(t, o), o, n);
  }), S0(n, t), n;
}
function S0(e, t) {
  Object.keys(Kn).forEach((n) => {
    V(() => bi(t, n), (o) => {
      mi(o, n, e);
    });
  });
}
function mi(e, t, n) {
  let o = e, r = Kn[t];
  typeof Kn[t] == "object" && (r = r.key, o = o || Kn[t].default), n.states[r].value = o;
}
function bi(e, t) {
  if (t.includes(".")) {
    const n = t.split(".");
    let o = e;
    return n.forEach((r) => {
      o = o[r];
    }), o;
  } else
    return e[t];
}
class E0 {
  constructor(t) {
    this.observers = [], this.table = null, this.store = null, this.columns = [], this.fit = !0, this.showHeader = !0, this.height = O(null), this.scrollX = O(!1), this.scrollY = O(!1), this.bodyWidth = O(null), this.fixedWidth = O(null), this.rightFixedWidth = O(null), this.gutterWidth = 0;
    for (const n in t)
      ln(t, n) && (on(this[n]) ? this[n].value = t[n] : this[n] = t[n]);
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
    if (!Ee)
      return;
    const o = this.table.vnode.el;
    if (t = d0(t), this.height.value = Number(t), !o && (t || t === 0))
      return se(() => this.setHeight(t, n));
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
    if (!Ee)
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
const { CheckboxGroup: _0 } = Ln, O0 = U({
  name: "ElTableFilterPanel",
  components: {
    ElCheckbox: Ln,
    ElCheckboxGroup: _0,
    ElScrollbar: rl,
    ElTooltip: Xs,
    ElIcon: Je,
    ArrowDown: hs,
    ArrowUp: hv
  },
  directives: { ClickOutside: Qs },
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
    const t = we(), { t: n } = zt(), o = ne("table-filter"), r = t == null ? void 0 : t.parent;
    r.filterPanels.value[e.column.id] || (r.filterPanels.value[e.column.id] = t);
    const l = O(!1), s = O(null), a = T(() => e.column && e.column.filters), i = T({
      get: () => {
        var b;
        return (((b = e.column) == null ? void 0 : b.filteredValue) || [])[0];
      },
      set: (b) => {
        u.value && (typeof b < "u" && b !== null ? u.value.splice(0, 1, b) : u.value.splice(0, 1));
      }
    }), u = T({
      get() {
        return e.column ? e.column.filteredValue || [] : [];
      },
      set(b) {
        e.column && e.upDataColumn("filteredValue", b);
      }
    }), d = T(() => e.column ? e.column.filterMultiple : !0), f = (b) => b.value === i.value, p = () => {
      l.value = !1;
    }, v = (b) => {
      b.stopPropagation(), l.value = !l.value;
    }, c = () => {
      l.value = !1;
    }, h = () => {
      w(u.value), p();
    }, y = () => {
      u.value = [], w(u.value), p();
    }, g = (b) => {
      i.value = b, w(typeof b < "u" && b !== null ? u.value : []), p();
    }, w = (b) => {
      e.store.commit("filterChange", {
        column: e.column,
        values: b
      }), e.store.updateAllSelected();
    };
    V(l, (b) => {
      e.column && e.upDataColumn("filterOpened", b);
    }, {
      immediate: !0
    });
    const S = T(() => {
      var b, $;
      return ($ = (b = s.value) == null ? void 0 : b.popperRef) == null ? void 0 : $.contentRef;
    });
    return {
      tooltipVisible: l,
      multiple: d,
      filteredValue: u,
      filterValue: i,
      filters: a,
      handleConfirm: h,
      handleReset: y,
      handleSelect: g,
      isActive: f,
      t: n,
      ns: o,
      showFilterPanel: v,
      hideFilterPanel: c,
      popperPaneRef: S,
      tooltip: s
    };
  }
}), T0 = { key: 0 }, $0 = ["disabled"], P0 = ["label", "onClick"];
function x0(e, t, n, o, r, l) {
  const s = $e("el-checkbox"), a = $e("el-checkbox-group"), i = $e("el-scrollbar"), u = $e("arrow-up"), d = $e("arrow-down"), f = $e("el-icon"), p = $e("el-tooltip"), v = $r("click-outside");
  return x(), J(p, {
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
    content: te(() => [
      e.multiple ? (x(), N("div", T0, [
        K("div", {
          class: R(e.ns.e("content"))
        }, [
          he(i, {
            "wrap-class": e.ns.e("wrap")
          }, {
            default: te(() => [
              he(a, {
                modelValue: e.filteredValue,
                "onUpdate:modelValue": t[0] || (t[0] = (c) => e.filteredValue = c),
                class: R(e.ns.e("checkbox-group"))
              }, {
                default: te(() => [
                  (x(!0), N(Ue, null, wn(e.filters, (c) => (x(), J(s, {
                    key: c.value,
                    label: c.value
                  }, {
                    default: te(() => [
                      ko(ye(c.text), 1)
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
        K("div", {
          class: R(e.ns.e("bottom"))
        }, [
          K("button", {
            class: R({ [e.ns.is("disabled")]: e.filteredValue.length === 0 }),
            disabled: e.filteredValue.length === 0,
            type: "button",
            onClick: t[1] || (t[1] = (...c) => e.handleConfirm && e.handleConfirm(...c))
          }, ye(e.t("el.table.confirmFilter")), 11, $0),
          K("button", {
            type: "button",
            onClick: t[2] || (t[2] = (...c) => e.handleReset && e.handleReset(...c))
          }, ye(e.t("el.table.resetFilter")), 1)
        ], 2)
      ])) : (x(), N("ul", {
        key: 1,
        class: R(e.ns.e("list"))
      }, [
        K("li", {
          class: R([
            e.ns.e("list-item"),
            {
              [e.ns.is("active")]: e.filterValue === void 0 || e.filterValue === null
            }
          ]),
          onClick: t[3] || (t[3] = (c) => e.handleSelect(null))
        }, ye(e.t("el.table.clearFilter")), 3),
        (x(!0), N(Ue, null, wn(e.filters, (c) => (x(), N("li", {
          key: c.value,
          class: R([e.ns.e("list-item"), e.ns.is("active", e.isActive(c))]),
          label: c.value,
          onClick: (h) => e.handleSelect(c.value)
        }, ye(c.text), 11, P0))), 128))
      ], 2))
    ]),
    default: te(() => [
      xe((x(), N("span", {
        class: R([
          `${e.ns.namespace.value}-table__column-filter-trigger`,
          `${e.ns.namespace.value}-none-outline`
        ]),
        onClick: t[4] || (t[4] = (...c) => e.showFilterPanel && e.showFilterPanel(...c))
      }, [
        he(f, null, {
          default: te(() => [
            e.column.filterOpened ? (x(), J(u, { key: 0 })) : (x(), J(d, { key: 1 }))
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
var L0 = /* @__PURE__ */ ge(O0, [["render", x0], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/filter-panel.vue"]]);
function yi(e) {
  const t = we();
  Or(() => {
    n.value.addObserver(t);
  }), Le(() => {
    o(n.value), r(n.value);
  }), Na(() => {
    o(n.value), r(n.value);
  }), Ao(() => {
    n.value.removeObserver(t);
  });
  const n = T(() => {
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
      const p = a[d], v = p.getAttribute("name"), c = u[v];
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
const $t = Symbol("ElTable");
function A0(e, t) {
  const n = we(), o = ie($t), r = (h) => {
    h.stopPropagation();
  }, l = (h, y) => {
    !y.filters && y.sortable ? c(h, y, !1) : y.filterable && !y.sortable && r(h), o == null || o.emit("header-click", y, h);
  }, s = (h, y) => {
    o == null || o.emit("header-contextmenu", y, h);
  }, a = O(null), i = O(!1), u = O({}), d = (h, y) => {
    if (Ee && !(y.children && y.children.length > 0) && a.value && e.border) {
      i.value = !0;
      const g = o;
      t("set-drag-visible", !0);
      const S = (g == null ? void 0 : g.vnode.el).getBoundingClientRect().left, b = n.vnode.el.querySelector(`th.${y.id}`), $ = b.getBoundingClientRect(), _ = $.left - S + 30;
      Po(b, "noclick"), u.value = {
        startMouseLeft: h.clientX,
        startLeft: $.right - S,
        startColumnLeft: $.left - S,
        tableLeft: S
      };
      const C = g == null ? void 0 : g.refs.resizeProxy;
      C.style.left = `${u.value.startLeft}px`, document.onselectstart = function() {
        return !1;
      }, document.ondragstart = function() {
        return !1;
      };
      const P = (M) => {
        const D = M.clientX - u.value.startMouseLeft, z = u.value.startLeft + D;
        C.style.left = `${Math.max(_, z)}px`;
      }, k = () => {
        if (i.value) {
          const { startColumnLeft: M, startLeft: D } = u.value, j = Number.parseInt(C.style.left, 10) - M;
          y.width = y.realWidth = j, g == null || g.emit("header-dragend", y.width, D - M, y, h), requestAnimationFrame(() => {
            e.store.scheduleLayout(!1, !0);
          }), document.body.style.cursor = "", i.value = !1, a.value = null, u.value = {}, t("set-drag-visible", !1);
        }
        document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", k), document.onselectstart = null, document.ondragstart = null, setTimeout(() => {
          sn(b, "noclick");
        }, 0);
      };
      document.addEventListener("mousemove", P), document.addEventListener("mouseup", k);
    }
  }, f = (h, y) => {
    var g;
    if (y.children && y.children.length > 0)
      return;
    const w = (g = h.target) == null ? void 0 : g.closest("th");
    if (!(!y || !y.resizable) && !i.value && e.border) {
      const S = w.getBoundingClientRect(), b = document.body.style;
      S.width > 12 && S.right - h.pageX < 8 ? (b.cursor = "col-resize", vo(w, "is-sortable") && (w.style.cursor = "col-resize"), a.value = y) : i.value || (b.cursor = "", vo(w, "is-sortable") && (w.style.cursor = "pointer"), a.value = null);
    }
  }, p = () => {
    Ee && (document.body.style.cursor = "");
  }, v = ({ order: h, sortOrders: y }) => {
    if (h === "")
      return y[0];
    const g = y.indexOf(h || null);
    return y[g > y.length - 2 ? 0 : g + 1];
  }, c = (h, y, g) => {
    var w;
    h.stopPropagation();
    const S = y.order === g ? null : g || v(y), b = (w = h.target) == null ? void 0 : w.closest("th");
    if (b && vo(b, "noclick")) {
      sn(b, "noclick");
      return;
    }
    if (!y.sortable)
      return;
    const $ = e.store.states;
    let _ = $.sortProp.value, C;
    const P = $.sortingColumn.value;
    (P !== y || P === y && P.order === null) && (P && (P.order = null), $.sortingColumn.value = y, _ = y.property), S ? C = y.order = S : C = y.order = null, $.sortProp.value = _, $.sortOrder.value = C, o == null || o.store.commit("changeSortCondition");
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
function k0(e) {
  const t = ie($t), n = ne("table");
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
      const v = fl(i, d.fixed, e.store, u);
      return An(v, "left"), An(v, "right"), Object.assign({}, p, v);
    },
    getHeaderCellClass: (a, i, u, d) => {
      const f = dl(n.b(), i, d.fixed, e.store, u), p = [
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
        rowIndex: a,
        columnIndex: i,
        row: u,
        column: d
      })), p.push(n.e("cell")), p.filter((c) => Boolean(c)).join(" ");
    }
  };
}
const wi = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children ? (t.push(n), t.push.apply(t, wi(n.children))) : t.push(n);
  }), t;
}, R0 = (e) => {
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
  return wi(e).forEach((l) => {
    l.children ? (l.rowSpan = 1, l.children.forEach((s) => s.isSubColumn = !0)) : l.rowSpan = t - l.level + 1, o[l.level - 1].push(l);
  }), o;
};
function I0(e) {
  const t = ie($t), n = T(() => R0(e.store.states.originColumns.value));
  return {
    isGroup: T(() => {
      const l = n.value.length > 1;
      return l && t && (t.state.isGroup.value = !0), l;
    }),
    toggleAllSelection: (l) => {
      l.stopPropagation(), t == null || t.store.commit("toggleAllSelection");
    },
    columnRows: n
  };
}
var M0 = U({
  name: "ElTableHeader",
  components: {
    ElCheckbox: Ln
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
    const n = we(), o = ie($t), r = ne("table"), l = O({}), { onColumnsChange: s, onScrollableChange: a } = yi(o);
    Le(async () => {
      await se(), await se();
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
    } = A0(e, t), {
      getHeaderRowStyle: h,
      getHeaderRowClass: y,
      getHeaderCellStyle: g,
      getHeaderCellClass: w
    } = k0(e), { isGroup: S, toggleAllSelection: b, columnRows: $ } = I0(e);
    return n.state = {
      onColumnsChange: s,
      onScrollableChange: a
    }, n.filterPanels = l, {
      ns: r,
      filterPanels: l,
      onColumnsChange: s,
      onScrollableChange: a,
      columnRows: $,
      getHeaderRowClass: y,
      getHeaderRowStyle: h,
      getHeaderCellClass: w,
      getHeaderCellStyle: g,
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
      getHeaderRowStyle: s,
      handleHeaderClick: a,
      handleHeaderContextMenu: i,
      handleMouseDown: u,
      handleMouseMove: d,
      handleSortClick: f,
      handleMouseOut: p,
      store: v,
      $parent: c
    } = this;
    let h = 1;
    return Q("thead", {
      class: { [e.is("group")]: t }
    }, n.map((y, g) => Q("tr", {
      class: l(g),
      key: g,
      style: s(g)
    }, y.map((w, S) => (w.rowSpan > h && (h = w.rowSpan), Q("th", {
      class: r(g, S, y, w),
      colspan: w.colSpan,
      key: `${w.id}-thead`,
      rowspan: w.rowSpan,
      style: o(g, S, y, w),
      onClick: (b) => a(b, w),
      onContextmenu: (b) => i(b, w),
      onMousedown: (b) => u(b, w),
      onMousemove: (b) => d(b, w),
      onMouseout: p
    }, [
      Q("div", {
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
        w.sortable && Q("span", {
          onClick: (b) => f(b, w),
          class: "caret-wrapper"
        }, [
          Q("i", {
            onClick: (b) => f(b, w, "ascending"),
            class: "sort-caret ascending"
          }),
          Q("i", {
            onClick: (b) => f(b, w, "descending"),
            class: "sort-caret descending"
          })
        ]),
        w.filterable && Q(L0, {
          store: v,
          placement: w.filterPlacement || "bottom-start",
          column: w,
          upDataColumn: (b, $) => {
            w[b] = $;
          }
        })
      ])
    ]))))));
  }
});
function N0(e) {
  const t = ie($t), n = O(""), o = O(Q("div")), r = (p, v, c) => {
    var h;
    const y = t, g = er(p);
    let w;
    const S = (h = y == null ? void 0 : y.vnode.el) == null ? void 0 : h.dataset.prefix;
    g && (w = Pa({
      columns: e.store.states.columns.value
    }, g, S), w && (y == null || y.emit(`cell-${c}`, v, w, g, p))), y == null || y.emit(`row-${c}`, v, w, p);
  }, l = (p, v) => {
    r(p, v, "dblclick");
  }, s = (p, v) => {
    e.store.commit("setCurrentRow", v), r(p, v, "click");
  }, a = (p, v) => {
    r(p, v, "contextmenu");
  }, i = Cn((p) => {
    e.store.commit("setHoverRow", p);
  }, 30), u = Cn(() => {
    e.store.commit("setHoverRow", null);
  }, 30);
  return {
    handleDoubleClick: l,
    handleClick: s,
    handleContextMenu: a,
    handleMouseEnter: i,
    handleMouseLeave: u,
    handleCellMouseEnter: (p, v, c) => {
      var h;
      const y = t, g = er(p), w = (h = y == null ? void 0 : y.vnode.el) == null ? void 0 : h.dataset.prefix;
      if (g) {
        const C = Pa({
          columns: e.store.states.columns.value
        }, g, w), P = y.hoverState = { cell: g, column: C, row: v };
        y == null || y.emit("cell-mouse-enter", P.row, P.column, P.cell, p);
      }
      if (!c)
        return;
      const S = p.target.querySelector(".cell");
      if (!(vo(S, `${w}-tooltip`) && S.childNodes.length))
        return;
      const b = document.createRange();
      b.setStart(S, 0), b.setEnd(S, S.childNodes.length);
      const $ = Math.round(b.getBoundingClientRect().width), _ = (Number.parseInt(Jt(S, "paddingLeft"), 10) || 0) + (Number.parseInt(Jt(S, "paddingRight"), 10) || 0);
      ($ + _ > S.offsetWidth || S.scrollWidth > S.offsetWidth) && v0(t == null ? void 0 : t.refs.tableWrapper, g, g.innerText || g.textContent, c);
    },
    handleCellMouseLeave: (p) => {
      if (!er(p))
        return;
      const c = t == null ? void 0 : t.hoverState;
      t == null || t.emit("cell-mouse-leave", c == null ? void 0 : c.row, c == null ? void 0 : c.column, c == null ? void 0 : c.cell, p);
    },
    tooltipContent: n,
    tooltipTrigger: o
  };
}
function F0(e) {
  const t = ie($t), n = ne("table");
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
      const h = fl(d, e == null ? void 0 : e.fixed, e.store);
      return An(h, "left"), An(h, "right"), Object.assign({}, c, h);
    },
    getCellClass: (u, d, f, p, v) => {
      const c = dl(n.b(), d, e == null ? void 0 : e.fixed, e.store, void 0, v), h = [p.id, p.align, p.className, ...c], y = t == null ? void 0 : t.props.cellClassName;
      return typeof y == "string" ? h.push(y) : typeof y == "function" && h.push(y.call(null, {
        rowIndex: u,
        columnIndex: d,
        row: f,
        column: p
      })), h.push(n.e("cell")), h.filter((g) => Boolean(g)).join(" ");
    },
    getSpan: (u, d, f, p) => {
      let v = 1, c = 1;
      const h = t == null ? void 0 : t.props.spanMethod;
      if (typeof h == "function") {
        const y = h({
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
function z0(e) {
  const t = ie($t), n = ne("table"), {
    handleDoubleClick: o,
    handleClick: r,
    handleContextMenu: l,
    handleMouseEnter: s,
    handleMouseLeave: a,
    handleCellMouseEnter: i,
    handleCellMouseLeave: u,
    tooltipContent: d,
    tooltipTrigger: f
  } = N0(e), {
    getRowStyle: p,
    getRowClass: v,
    getCellStyle: c,
    getCellClass: h,
    getSpan: y,
    getColspanRealWidth: g
  } = F0(e), w = T(() => e.store.states.columns.value.findIndex(({ type: C }) => C === "default")), S = (C, P) => {
    const k = t.props.rowKey;
    return k ? Re(C, k) : P;
  }, b = (C, P, k, M = !1) => {
    const { tooltipEffect: D, tooltipOptions: z, store: j } = e, { indent: Z, columns: F } = j.states, G = v(C, P);
    let oe = !0;
    return k && (G.push(n.em("row", `level-${k.level}`)), oe = k.display), Q("tr", {
      style: [oe ? null : {
        display: "none"
      }, p(C, P)],
      class: G,
      key: S(C, P),
      onDblclick: (A) => o(A, C),
      onClick: (A) => r(A, C),
      onContextmenu: (A) => l(A, C),
      onMouseenter: () => s(P),
      onMouseleave: a
    }, F.value.map((A, q) => {
      const { rowspan: ue, colspan: ce } = y(C, A, P, q);
      if (!ue || !ce)
        return null;
      const me = { ...A };
      me.realWidth = g(F.value, ce, q);
      const ve = {
        store: e.store,
        _self: e.context || t,
        column: me,
        row: C,
        $index: P,
        cellIndex: q,
        expanded: M
      };
      q === w.value && k && (ve.treeNode = {
        indent: k.level * Z.value,
        level: k.level
      }, typeof k.expanded == "boolean" && (ve.treeNode.expanded = k.expanded, "loading" in k && (ve.treeNode.loading = k.loading), "noLazyChildren" in k && (ve.treeNode.noLazyChildren = k.noLazyChildren)));
      const re = `${P},${q}`, be = me.columnKey || me.rawColumnKey || "", Se = $(q, A, ve), le = A.showOverflowTooltip && ss({
        effect: D
      }, z, A.showOverflowTooltip);
      return Q("td", {
        style: c(P, q, C, A),
        class: h(P, q, C, A, ce - 1),
        key: `${be}${re}`,
        rowspan: ue,
        colspan: ce,
        onMouseenter: (Te) => i(Te, C, le),
        onMouseleave: u
      }, [Se]);
    }));
  }, $ = (C, P, k) => P.renderCell(k);
  return {
    wrappedRowRender: (C, P) => {
      const k = e.store, { isRowExpanded: M, assertRowKey: D } = k, { treeData: z, lazyTreeNodeMap: j, childrenColumnName: Z, rowKey: F } = k.states, G = k.states.columns.value;
      if (G.some(({ type: H }) => H === "expand")) {
        const H = M(C), A = b(C, P, void 0, H), q = t.renderExpanded;
        return H ? q ? [
          [
            A,
            Q("tr", {
              key: `expanded-row__${A.key}`
            }, [
              Q("td", {
                colspan: G.length,
                class: `${n.e("cell")} ${n.e("expanded-cell")}`
              }, [q({ row: C, $index: P, store: k, expanded: H })])
            ])
          ]
        ] : (console.error("[Element Error]renderExpanded is required."), A) : [[A]];
      } else if (Object.keys(z.value).length) {
        D();
        const H = Re(C, F.value);
        let A = z.value[H], q = null;
        A && (q = {
          expanded: A.expanded,
          level: A.level,
          display: !0
        }, typeof A.lazy == "boolean" && (typeof A.loaded == "boolean" && A.loaded && (q.noLazyChildren = !(A.children && A.children.length)), q.loading = A.loading));
        const ue = [b(C, P, q)];
        if (A) {
          let ce = 0;
          const me = (re, be) => {
            re && re.length && be && re.forEach((Se) => {
              const le = {
                display: be.display && be.expanded,
                level: be.level + 1,
                expanded: !1,
                noLazyChildren: !1,
                loading: !1
              }, Te = Re(Se, F.value);
              if (Te == null)
                throw new Error("For nested data item, row-key is required.");
              if (A = { ...z.value[Te] }, A && (le.expanded = A.expanded, A.level = A.level || le.level, A.display = !!(A.expanded && le.display), typeof A.lazy == "boolean" && (typeof A.loaded == "boolean" && A.loaded && (le.noLazyChildren = !(A.children && A.children.length)), le.loading = A.loading)), ce++, ue.push(b(Se, P + ce, le)), A) {
                const Fe = j.value[Te] || Se[Z.value];
                me(Fe, A);
              }
            });
          };
          A.display = !0;
          const ve = j.value[H] || C[Z.value];
          me(ve, A);
        }
        return ue;
      } else
        return b(C, P, void 0);
    },
    tooltipContent: d,
    tooltipTrigger: f
  };
}
const B0 = {
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
var H0 = U({
  name: "ElTableBody",
  props: B0,
  setup(e) {
    const t = we(), n = ie($t), o = ne("table"), { wrappedRowRender: r, tooltipContent: l, tooltipTrigger: s } = z0(e), { onColumnsChange: a, onScrollableChange: i } = yi(n);
    return V(e.store.states.hoverRow, (u, d) => {
      if (!e.store.states.isComplex.value || !Ee)
        return;
      let f = window.requestAnimationFrame;
      f || (f = (p) => window.setTimeout(p, 16)), f(() => {
        const p = t == null ? void 0 : t.vnode.el, v = Array.from((p == null ? void 0 : p.children) || []).filter((y) => y == null ? void 0 : y.classList.contains(`${o.e("row")}`)), c = v[d], h = v[u];
        c && sn(c, "hover-row"), h && Po(h, "hover-row");
      });
    }), Ao(() => {
      var u;
      (u = kt) == null || u();
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
    return Q("tbody", {}, [
      n.reduce((o, r) => o.concat(e(r, o.length)), [])
    ]);
  }
});
function pl(e) {
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
  return Q("colgroup", {}, n.map((r) => Q("col", o(r))));
}
pl.props = ["columns", "tableLayout"];
function D0() {
  const e = ie($t), t = e == null ? void 0 : e.store, n = T(() => t.states.fixedLeafColumnsLength.value), o = T(() => t.states.rightFixedColumns.value.length), r = T(() => t.states.columns.value.length), l = T(() => t.states.fixedColumns.value.length), s = T(() => t.states.rightFixedColumns.value.length);
  return {
    leftFixedLeafCount: n,
    rightFixedLeafCount: o,
    columnsCount: r,
    leftFixedCount: l,
    rightFixedCount: s,
    columns: t.states.columns
  };
}
function W0(e) {
  const { columns: t } = D0(), n = ne("table");
  return {
    getCellClasses: (l, s) => {
      const a = l[s], i = [
        n.e("cell"),
        a.id,
        a.align,
        a.labelClassName,
        ...dl(n.b(), s, a.fixed, e.store)
      ];
      return a.className && i.push(a.className), a.children || i.push(n.is("leaf")), i;
    },
    getCellStyles: (l, s) => {
      const a = fl(s, l.fixed, e.store);
      return An(a, "left"), An(a, "right"), a;
    },
    columns: t
  };
}
var K0 = U({
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
    const { getCellClasses: t, getCellStyles: n, columns: o } = W0(e);
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
          const h = `${c}`.split(".")[1];
          f.push(h ? h.length : 0);
        }
      });
      const v = Math.max.apply(null, f);
      p ? a[u] = "" : a[u] = d.reduce((c, h) => {
        const y = Number(h);
        return Number.isNaN(+y) ? c : Number.parseFloat((c + h).toFixed(Math.min(v, 20)));
      }, 0);
    }), Q("table", {
      class: l.e("footer"),
      cellspacing: "0",
      cellpadding: "0",
      border: "0"
    }, [
      pl({
        columns: e
      }),
      Q("tbody", [
        Q("tr", {}, [
          ...e.map((i, u) => Q("td", {
            key: u,
            colspan: i.colSpan,
            rowspan: i.rowSpan,
            class: n(e, u),
            style: t(i, u)
          }, [
            Q("div", {
              class: ["cell", i.labelClassName]
            }, [a[u]])
          ]))
        ])
      ])
    ]);
  }
});
function j0(e) {
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
function V0(e, t, n, o) {
  const r = O(!1), l = O(null), s = O(!1), a = (H) => {
    s.value = H;
  }, i = O({
    width: null,
    height: null,
    headerHeight: null
  }), u = O(!1), d = {
    display: "inline-block",
    verticalAlign: "middle"
  }, f = O(), p = O(0), v = O(0), c = O(0), h = O(0);
  bn(() => {
    t.setHeight(e.height);
  }), bn(() => {
    t.setMaxHeight(e.maxHeight);
  }), V(() => [e.currentRowKey, n.states.rowKey], ([H, A]) => {
    !m(A) || !m(H) || n.setCurrentRowKey(`${H}`);
  }, {
    immediate: !0
  }), V(() => e.data, (H) => {
    o.store.commit("setData", H);
  }, {
    immediate: !0,
    deep: !0
  }), bn(() => {
    e.expandRowKeys && n.setExpandRowKeysAdapter(e.expandRowKeys);
  });
  const y = () => {
    o.store.commit("setHoverRow", null), o.hoverState && (o.hoverState = null);
  }, g = (H, A) => {
    const { pixelX: q, pixelY: ue } = A;
    Math.abs(q) >= Math.abs(ue) && (o.refs.bodyWrapper.scrollLeft += A.pixelX / 5);
  }, w = T(() => e.height || e.maxHeight || n.states.fixedColumns.value.length > 0 || n.states.rightFixedColumns.value.length > 0), S = T(() => ({
    width: t.bodyWidth.value ? `${t.bodyWidth.value}px` : ""
  })), b = () => {
    w.value && t.updateElsHeight(), t.updateColumnsWidth(), requestAnimationFrame(P);
  };
  Le(async () => {
    await se(), n.updateColumns(), k(), requestAnimationFrame(b);
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
  const $ = (H, A) => {
    if (!H)
      return;
    const q = Array.from(H.classList).filter((ue) => !ue.startsWith("is-scrolling-"));
    q.push(t.scrollX.value ? A : "is-scrolling-none"), H.className = q.join(" ");
  }, _ = (H) => {
    const { tableWrapper: A } = o.refs;
    $(A, H);
  }, C = (H) => {
    const { tableWrapper: A } = o.refs;
    return !!(A && A.classList.contains(H));
  }, P = function() {
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
    const { scrollLeft: A, offsetWidth: q, scrollWidth: ue } = H, { headerWrapper: ce, footerWrapper: me } = o.refs;
    ce && (ce.scrollLeft = A), me && (me.scrollLeft = A);
    const ve = ue - q - 1;
    A >= ve ? _("is-scrolling-right") : _(A === 0 ? "is-scrolling-left" : "is-scrolling-middle");
  }, k = () => {
    o.refs.scrollBarRef && (o.refs.scrollBarRef.wrapRef && jt(o.refs.scrollBarRef.wrapRef, "scroll", P, {
      passive: !0
    }), e.fit ? En(o.vnode.el, M) : jt(window, "resize", M), En(o.refs.bodyWrapper, () => {
      var H, A;
      M(), (A = (H = o.refs) == null ? void 0 : H.scrollBarRef) == null || A.update();
    }));
  }, M = () => {
    var H, A, q;
    const ue = o.vnode.el;
    if (!o.$ready || !ue)
      return;
    let ce = !1;
    const {
      width: me,
      height: ve,
      headerHeight: re
    } = i.value, be = f.value = ue.offsetWidth;
    me !== be && (ce = !0);
    const Se = ue.offsetHeight;
    (e.height || w.value) && ve !== Se && (ce = !0);
    const le = e.tableLayout === "fixed" ? o.refs.headerWrapper : (H = o.refs.tableHeaderRef) == null ? void 0 : H.$el;
    e.showHeader && (le == null ? void 0 : le.offsetHeight) !== re && (ce = !0), p.value = ((A = o.refs.tableWrapper) == null ? void 0 : A.scrollHeight) || 0, c.value = (le == null ? void 0 : le.scrollHeight) || 0, h.value = ((q = o.refs.footerWrapper) == null ? void 0 : q.offsetHeight) || 0, v.value = p.value - c.value - h.value, ce && (i.value = {
      width: be,
      height: Se,
      headerHeight: e.showHeader && (le == null ? void 0 : le.offsetHeight) || 0
    }, b());
  }, D = _n(), z = T(() => {
    const { bodyWidth: H, scrollY: A, gutterWidth: q } = t;
    return H.value ? `${H.value - (A.value ? q : 0)}px` : "";
  }), j = T(() => e.maxHeight ? "fixed" : e.tableLayout), Z = T(() => {
    if (e.data && e.data.length)
      return null;
    let H = "100%";
    e.height && v.value && (H = `${v.value}px`);
    const A = f.value;
    return {
      width: A ? `${A}px` : "",
      height: H
    };
  }), F = T(() => e.height ? {
    height: Number.isNaN(Number(e.height)) ? e.height : `${e.height}px`
  } : e.maxHeight ? {
    maxHeight: Number.isNaN(Number(e.maxHeight)) ? e.maxHeight : `${e.maxHeight}px`
  } : {}), G = T(() => {
    if (e.height)
      return {
        height: "100%"
      };
    if (e.maxHeight) {
      if (Number.isNaN(Number(e.maxHeight)))
        return {
          maxHeight: `calc(${e.maxHeight} - ${c.value + h.value}px)`
        };
      {
        const H = e.maxHeight;
        if (p.value >= Number(H))
          return {
            maxHeight: `${p.value - c.value - h.value}px`
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
    handleHeaderFooterMousewheel: g,
    tableSize: D,
    emptyBlockStyle: Z,
    handleFixedMousewheel: (H, A) => {
      const q = o.refs.bodyWrapper;
      if (Math.abs(A.spinY) > 0) {
        const ue = q.scrollTop;
        A.pixelY < 0 && ue !== 0 && H.preventDefault(), A.pixelY > 0 && q.scrollHeight - q.clientHeight > ue && H.preventDefault(), q.scrollTop += Math.ceil(A.pixelY / 5);
      } else
        q.scrollLeft += Math.ceil(A.pixelX / 5);
    },
    resizeProxyVisible: s,
    bodyWidth: z,
    resizeState: i,
    doLayout: b,
    tableBodyStyles: S,
    tableLayout: j,
    scrollbarViewStyle: d,
    tableInnerStyle: F,
    scrollbarStyle: G
  };
}
function U0(e) {
  const t = O(), n = () => {
    const r = e.vnode.el.querySelector(".hidden-columns"), l = { childList: !0, subtree: !0 }, s = e.store.states.updateOrderFns;
    t.value = new MutationObserver(() => {
      s.forEach((a) => a());
    }), t.value.observe(r, l);
  };
  Le(() => {
    n();
  }), Ao(() => {
    var o;
    (o = t.value) == null || o.disconnect();
  });
}
var q0 = {
  data: {
    type: Array,
    default: () => []
  },
  size: Do,
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
const G0 = () => {
  const e = O(), t = (l, s) => {
    const a = e.value;
    a && a.scrollTo(l, s);
  }, n = (l, s) => {
    const a = e.value;
    a && Pe(s) && ["Top", "Left"].includes(l) && a[`setScroll${l}`](s);
  };
  return {
    scrollBarRef: e,
    scrollTo: t,
    setScrollTop: (l) => n("Top", l),
    setScrollLeft: (l) => n("Left", l)
  };
};
let Y0 = 1;
const X0 = U({
  name: "ElTable",
  directives: {
    Mousewheel: Lb
  },
  components: {
    TableHeader: M0,
    TableBody: H0,
    TableFooter: K0,
    ElScrollbar: rl,
    hColgroup: pl
  },
  props: q0,
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
    const { t } = zt(), n = ne("table"), o = we();
    it($t, o);
    const r = C0(o, e);
    o.store = r;
    const l = new E0({
      store: o.store,
      table: o,
      fit: e.fit,
      showHeader: e.showHeader
    });
    o.layout = l;
    const s = T(() => (r.states.data.value || []).length === 0), {
      setCurrentRow: a,
      getSelectionRows: i,
      toggleRowSelection: u,
      clearSelection: d,
      clearFilter: f,
      toggleAllSelection: p,
      toggleRowExpansion: v,
      clearSort: c,
      sort: h
    } = j0(r), {
      isHidden: y,
      renderExpanded: g,
      setDragVisible: w,
      isGroup: S,
      handleMouseLeave: b,
      handleHeaderFooterMousewheel: $,
      tableSize: _,
      emptyBlockStyle: C,
      handleFixedMousewheel: P,
      resizeProxyVisible: k,
      bodyWidth: M,
      resizeState: D,
      doLayout: z,
      tableBodyStyles: j,
      tableLayout: Z,
      scrollbarViewStyle: F,
      tableInnerStyle: G,
      scrollbarStyle: oe
    } = V0(e, l, r, o), { scrollBarRef: H, scrollTo: A, setScrollLeft: q, setScrollTop: ue } = G0(), ce = Cn(z, 50), me = `${n.namespace.value}-table_${Y0++}`;
    o.tableId = me, o.state = {
      isGroup: S,
      resizeState: D,
      doLayout: z,
      debouncedUpdateLayout: ce
    };
    const ve = T(() => e.sumText || t("el.table.sumText")), re = T(() => e.emptyText || t("el.table.emptyText"));
    return U0(o), {
      ns: n,
      layout: l,
      store: r,
      handleHeaderFooterMousewheel: $,
      handleMouseLeave: b,
      tableId: me,
      tableSize: _,
      isHidden: y,
      isEmpty: s,
      renderExpanded: g,
      resizeProxyVisible: k,
      resizeState: D,
      isGroup: S,
      bodyWidth: M,
      tableBodyStyles: j,
      emptyBlockStyle: C,
      debouncedUpdateLayout: ce,
      handleFixedMousewheel: P,
      setCurrentRow: a,
      getSelectionRows: i,
      toggleRowSelection: u,
      clearSelection: d,
      clearFilter: f,
      toggleAllSelection: p,
      toggleRowExpansion: v,
      clearSort: c,
      doLayout: z,
      sort: h,
      t,
      setDragVisible: w,
      context: o,
      computedSumText: ve,
      computedEmptyText: re,
      tableLayout: Z,
      scrollbarViewStyle: F,
      tableInnerStyle: G,
      scrollbarStyle: oe,
      scrollBarRef: H,
      scrollTo: A,
      setScrollLeft: q,
      setScrollTop: ue
    };
  }
}), Q0 = ["data-prefix"], Z0 = {
  ref: "hiddenColumns",
  class: "hidden-columns"
};
function J0(e, t, n, o, r, l) {
  const s = $e("hColgroup"), a = $e("table-header"), i = $e("table-body"), u = $e("el-scrollbar"), d = $e("table-footer"), f = $r("mousewheel");
  return x(), N("div", {
    ref: "tableWrapper",
    class: R([
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
    K("div", {
      class: R(e.ns.e("inner-wrapper")),
      style: Oe(e.tableInnerStyle)
    }, [
      K("div", Z0, [
        pe(e.$slots, "default")
      ], 512),
      e.showHeader && e.tableLayout === "fixed" ? xe((x(), N("div", {
        key: 0,
        ref: "headerWrapper",
        class: R(e.ns.e("header-wrapper"))
      }, [
        K("table", {
          ref: "tableHeader",
          class: R(e.ns.e("header")),
          style: Oe(e.tableBodyStyles),
          border: "0",
          cellpadding: "0",
          cellspacing: "0"
        }, [
          he(s, {
            columns: e.store.states.columns.value,
            "table-layout": e.tableLayout
          }, null, 8, ["columns", "table-layout"]),
          he(a, {
            ref: "tableHeaderRef",
            border: e.border,
            "default-sort": e.defaultSort,
            store: e.store,
            onSetDragVisible: e.setDragVisible
          }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])
        ], 6)
      ], 2)), [
        [f, e.handleHeaderFooterMousewheel]
      ]) : Y("v-if", !0),
      K("div", {
        ref: "bodyWrapper",
        class: R(e.ns.e("body-wrapper"))
      }, [
        he(u, {
          ref: "scrollBarRef",
          "view-style": e.scrollbarViewStyle,
          "wrap-style": e.scrollbarStyle,
          always: e.scrollbarAlwaysOn
        }, {
          default: te(() => [
            K("table", {
              ref: "tableBody",
              class: R(e.ns.e("body")),
              cellspacing: "0",
              cellpadding: "0",
              border: "0",
              style: Oe({
                width: e.bodyWidth,
                tableLayout: e.tableLayout
              })
            }, [
              he(s, {
                columns: e.store.states.columns.value,
                "table-layout": e.tableLayout
              }, null, 8, ["columns", "table-layout"]),
              e.showHeader && e.tableLayout === "auto" ? (x(), J(a, {
                key: 0,
                ref: "tableHeaderRef",
                border: e.border,
                "default-sort": e.defaultSort,
                store: e.store,
                onSetDragVisible: e.setDragVisible
              }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])) : Y("v-if", !0),
              he(i, {
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
            e.isEmpty ? (x(), N("div", {
              key: 0,
              ref: "emptyBlock",
              style: Oe(e.emptyBlockStyle),
              class: R(e.ns.e("empty-block"))
            }, [
              K("span", {
                class: R(e.ns.e("empty-text"))
              }, [
                pe(e.$slots, "empty", {}, () => [
                  ko(ye(e.computedEmptyText), 1)
                ])
              ], 2)
            ], 6)) : Y("v-if", !0),
            e.$slots.append ? (x(), N("div", {
              key: 1,
              ref: "appendWrapper",
              class: R(e.ns.e("append-wrapper"))
            }, [
              pe(e.$slots, "append")
            ], 2)) : Y("v-if", !0)
          ]),
          _: 3
        }, 8, ["view-style", "wrap-style", "always"])
      ], 2),
      e.showSummary ? xe((x(), N("div", {
        key: 1,
        ref: "footerWrapper",
        class: R(e.ns.e("footer-wrapper"))
      }, [
        he(d, {
          border: e.border,
          "default-sort": e.defaultSort,
          store: e.store,
          style: Oe(e.tableBodyStyles),
          "sum-text": e.computedSumText,
          "summary-method": e.summaryMethod
        }, null, 8, ["border", "default-sort", "store", "style", "sum-text", "summary-method"])
      ], 2)), [
        [It, !e.isEmpty],
        [f, e.handleHeaderFooterMousewheel]
      ]) : Y("v-if", !0),
      e.border || e.isGroup ? (x(), N("div", {
        key: 2,
        class: R(e.ns.e("border-left-patch"))
      }, null, 2)) : Y("v-if", !0)
    ], 6),
    xe(K("div", {
      ref: "resizeProxy",
      class: R(e.ns.e("column-resize-proxy"))
    }, null, 2), [
      [It, e.resizeProxyVisible]
    ])
  ], 46, Q0);
}
var e1 = /* @__PURE__ */ ge(X0, [["render", J0], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/table.vue"]]);
const t1 = {
  selection: "table-column--selection",
  expand: "table__expand-column"
}, n1 = {
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
}, o1 = (e) => t1[e] || "", r1 = {
  selection: {
    renderHeader({ store: e }) {
      function t() {
        return e.states.data.value && e.states.data.value.length === 0;
      }
      return Q(Ln, {
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
      return Q(Ln, {
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
      return typeof o == "number" ? n = t + o : typeof o == "function" && (n = o(t)), Q("div", {}, [n]);
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
      return n && r.push(o.em("expand-icon", "expanded")), Q("div", {
        class: r,
        onClick: function(s) {
          s.stopPropagation(), t.toggleRowExpansion(e);
        }
      }, {
        default: () => [
          Q(Je, null, {
            default: () => [Q(Dr)]
          })
        ]
      });
    },
    sortable: !1,
    resizable: !1
  }
};
function l1({
  row: e,
  column: t,
  $index: n
}) {
  var o;
  const r = t.property, l = r && Vp(e, r).value;
  return t && t.formatter ? t.formatter(e, t, l, n) : ((o = l == null ? void 0 : l.toString) == null ? void 0 : o.call(l)) || "";
}
function a1({
  row: e,
  treeNode: t,
  store: n
}, o = !1) {
  const { ns: r } = n;
  if (!t)
    return o ? [
      Q("span", {
        class: r.e("placeholder")
      })
    ] : null;
  const l = [], s = function(a) {
    a.stopPropagation(), !t.loading && n.loadOrToggle(e);
  };
  if (t.indent && l.push(Q("span", {
    class: r.e("indent"),
    style: { "padding-left": `${t.indent}px` }
  })), typeof t.expanded == "boolean" && !t.noLazyChildren) {
    const a = [
      r.e("expand-icon"),
      t.expanded ? r.em("expand-icon", "expanded") : ""
    ];
    let i = Dr;
    t.loading && (i = gs), l.push(Q("div", {
      class: a,
      onClick: s
    }, {
      default: () => [
        Q(Je, { class: { [r.is("loading")]: t.loading } }, {
          default: () => [Q(i)]
        })
      ]
    }));
  } else
    l.push(Q("span", {
      class: r.e("placeholder")
    }));
  return l;
}
function Aa(e, t) {
  return e.reduce((n, o) => (n[o] = o, n), t);
}
function s1(e, t) {
  const n = we();
  return {
    registerComplexWatchers: () => {
      const l = ["fixed"], s = {
        realWidth: "width",
        realMinWidth: "minWidth"
      }, a = Aa(l, s);
      Object.keys(a).forEach((i) => {
        const u = s[i];
        ln(t, u) && V(() => t[u], (d) => {
          let f = d;
          u === "width" && i === "realWidth" && (f = cl(d)), u === "minWidth" && i === "realMinWidth" && (f = vi(d)), n.columnConfig.value[u] = f, n.columnConfig.value[i] = f;
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
      }, a = Aa(l, s);
      Object.keys(a).forEach((i) => {
        const u = s[i];
        ln(t, u) && V(() => t[u], (d) => {
          n.columnConfig.value[i] = d;
        });
      });
    }
  };
}
function i1(e, t, n) {
  const o = we(), r = O(""), l = O(!1), s = O(), a = O(), i = ne("table");
  bn(() => {
    s.value = e.align ? `is-${e.align}` : null, s.value;
  }), bn(() => {
    a.value = e.headerAlign ? `is-${e.headerAlign}` : s.value, a.value;
  });
  const u = T(() => {
    let b = o.vnode.vParent || o.parent;
    for (; b && !b.tableId && !b.columnId; )
      b = b.vnode.vParent || b.parent;
    return b;
  }), d = T(() => {
    const { store: b } = o.parent;
    if (!b)
      return !1;
    const { treeData: $ } = b.states, _ = $.value;
    return _ && Object.keys(_).length > 0;
  }), f = O(cl(e.width)), p = O(vi(e.minWidth)), v = (b) => (f.value && (b.width = f.value), p.value && (b.minWidth = p.value), !f.value && p.value && (b.width = void 0), b.minWidth || (b.minWidth = 80), b.realWidth = Number(b.width === void 0 ? b.minWidth : b.width), b), c = (b) => {
    const $ = b.type, _ = r1[$] || {};
    Object.keys(_).forEach((P) => {
      const k = _[P];
      P !== "className" && k !== void 0 && (b[P] = k);
    });
    const C = o1($);
    if (C) {
      const P = `${m(i.namespace)}-${C}`;
      b.className = b.className ? `${b.className} ${P}` : P;
    }
    return b;
  }, h = (b) => {
    Array.isArray(b) ? b.forEach((_) => $(_)) : $(b);
    function $(_) {
      var C;
      ((C = _ == null ? void 0 : _.type) == null ? void 0 : C.name) === "ElTableColumn" && (_.vParent = o);
    }
  };
  return {
    columnId: r,
    realAlign: s,
    isSubColumn: l,
    realHeaderAlign: a,
    columnOrTableParent: u,
    setColumnWidth: v,
    setColumnForcedProps: c,
    setColumnRenders: (b) => {
      e.renderHeader ? Ne("TableColumn", "Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.") : b.type !== "selection" && (b.renderHeader = (_) => {
        o.columnConfig.value.label;
        const C = t.header;
        return C ? C(_) : b.label;
      });
      let $ = b.renderCell;
      return b.type === "expand" ? (b.renderCell = (_) => Q("div", {
        class: "cell"
      }, [$(_)]), n.value.renderExpanded = (_) => t.default ? t.default(_) : t.default) : ($ = $ || l1, b.renderCell = (_) => {
        let C = null;
        if (t.default) {
          const D = t.default(_);
          C = D.some((z) => z.type !== Fa) ? D : $(_);
        } else
          C = $(_);
        const P = d.value && _.cellIndex === 0 && _.column.type !== "selection", k = a1(_, P), M = {
          class: "cell",
          style: {}
        };
        return b.showOverflowTooltip && (M.class = `${M.class} ${m(i.namespace)}-tooltip`, M.style = {
          width: `${(_.column.realWidth || Number(_.column.width)) - 1}px`
        }), h(C), Q("div", M, [k, C]);
      }), b;
    },
    getPropsData: (...b) => b.reduce(($, _) => (Array.isArray(_) && _.forEach((C) => {
      $[C] = e[C];
    }), $), {}),
    getColumnElIndex: (b, $) => Array.prototype.indexOf.call(b, $),
    updateColumnOrder: () => {
      n.value.store.commit("updateColumnOrder", o.columnConfig.value);
    }
  };
}
var u1 = {
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
let c1 = 1;
var Ci = U({
  name: "ElTableColumn",
  components: {
    ElCheckbox: Ln
  },
  props: u1,
  setup(e, { slots: t }) {
    const n = we(), o = O({}), r = T(() => {
      let S = n.parent;
      for (; S && !S.tableId; )
        S = S.parent;
      return S;
    }), { registerNormalWatchers: l, registerComplexWatchers: s } = s1(r, e), {
      columnId: a,
      isSubColumn: i,
      realHeaderAlign: u,
      columnOrTableParent: d,
      setColumnWidth: f,
      setColumnForcedProps: p,
      setColumnRenders: v,
      getPropsData: c,
      getColumnElIndex: h,
      realAlign: y,
      updateColumnOrder: g
    } = i1(e, t, r), w = d.value;
    a.value = `${w.tableId || w.columnId}_column_${c1++}`, Or(() => {
      i.value = r.value !== w;
      const S = e.type || "default", b = e.sortable === "" ? !0 : e.sortable, $ = {
        ...n1[S],
        id: a.value,
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
      let M = c([
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
      M = c0($, M), M = f0(v, f, p)(M), o.value = M, l(), s();
    }), Le(() => {
      var S;
      const b = d.value, $ = i.value ? b.vnode.el.children : (S = b.refs.hiddenColumns) == null ? void 0 : S.children, _ = () => h($ || [], n.vnode.el);
      o.value.getColumnIndex = _, _() > -1 && r.value.store.commit("insertColumn", o.value, i.value ? b.columnConfig.value : null, g);
    }), gt(() => {
      r.value.store.commit("removeColumn", o.value, i.value ? w.columnConfig.value : null, g);
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
            (a == null ? void 0 : a.patchFlag) !== 1024 && !et(a == null ? void 0 : a.children) && r.push(a);
          });
      return Q("div", r);
    } catch {
      return Q("div", []);
    }
  }
});
const d1 = Tt(e1, {
  TableColumn: Ci
}), f1 = to(Ci);
function p1(e) {
  let t;
  const n = ne("loading"), o = O(!1), r = Vt({
    ...e,
    originalPosition: "",
    originalOverflow: "",
    visible: !1
  });
  function l(v) {
    r.text = v;
  }
  function s() {
    const v = r.parent;
    if (!v.vLoadingAddClassList) {
      let c = v.getAttribute("loading-number");
      c = Number.parseInt(c) - 1, c ? v.setAttribute("loading-number", c.toString()) : (sn(v, n.bm("parent", "relative")), v.removeAttribute("loading-number")), sn(v, n.bm("parent", "hidden"));
    }
    a(), f.unmount();
  }
  function a() {
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
    o.value = !1, v.vLoadingAddClassList = void 0, s();
  }
  const f = Mi({
    name: "ElLoading",
    setup() {
      return () => {
        const v = r.spinner || r.svg, c = Q("svg", {
          class: "circular",
          viewBox: r.svgViewBox ? r.svgViewBox : "0 0 50 50",
          ...v ? { innerHTML: v } : {}
        }, [
          Q("circle", {
            class: "path",
            cx: "25",
            cy: "25",
            r: "20",
            fill: "none"
          })
        ]), h = r.text ? Q("p", { class: n.b("text") }, [r.text]) : void 0;
        return Q(Zn, {
          name: n.b("fade"),
          onAfterLeave: u
        }, {
          default: te(() => [
            xe(he("div", {
              style: {
                backgroundColor: r.background || ""
              },
              class: [
                n.b("mask"),
                r.customClass,
                r.fullscreen ? "is-fullscreen" : ""
              ]
            }, [
              Q("div", {
                class: n.b("spinner")
              }, [c, h])
            ]), [[It, r.visible]])
          ])
        });
      };
    }
  }), p = f.mount(document.createElement("div"));
  return {
    ...kn(r),
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
let po;
const v1 = function(e = {}) {
  if (!Ee)
    return;
  const t = h1(e);
  if (t.fullscreen && po)
    return po;
  const n = p1({
    ...t,
    closed: () => {
      var r;
      (r = t.closed) == null || r.call(t), t.fullscreen && (po = void 0);
    }
  });
  g1(t, t.parent, n), ka(t, t.parent, n), t.parent.vLoadingAddClassList = () => ka(t, t.parent, n);
  let o = t.parent.getAttribute("loading-number");
  return o ? o = `${Number.parseInt(o) + 1}` : o = "1", t.parent.setAttribute("loading-number", o), t.parent.appendChild(n.$el), se(() => n.visible.value = t.visible), t.fullscreen && (po = n), n;
}, h1 = (e) => {
  var t, n, o, r;
  let l;
  return et(e.target) ? l = (t = document.querySelector(e.target)) != null ? t : document.body : l = e.target || document.body, {
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
}, g1 = async (e, t, n) => {
  const { nextZIndex: o } = ol(), r = {};
  if (e.fullscreen)
    n.originalPosition.value = Jt(document.body, "position"), n.originalOverflow.value = Jt(document.body, "overflow"), r.zIndex = o();
  else if (e.parent === document.body) {
    n.originalPosition.value = Jt(document.body, "position"), await se();
    for (const l of ["top", "left"]) {
      const s = l === "top" ? "scrollTop" : "scrollLeft";
      r[l] = `${e.target.getBoundingClientRect()[l] + document.body[s] + document.documentElement[s] - Number.parseInt(Jt(document.body, `margin-${l}`), 10)}px`;
    }
    for (const l of ["height", "width"])
      r[l] = `${e.target.getBoundingClientRect()[l]}px`;
  } else
    n.originalPosition.value = Jt(t, "position");
  for (const [l, s] of Object.entries(r))
    n.$el.style[l] = s;
}, ka = (e, t, n) => {
  const o = ne("loading");
  ["absolute", "fixed", "sticky"].includes(n.originalPosition.value) ? sn(t, o.bm("parent", "relative")) : Po(t, o.bm("parent", "relative")), e.fullscreen && e.lock ? Po(t, o.bm("parent", "hidden")) : sn(t, o.bm("parent", "hidden"));
}, _r = Symbol("ElLoading"), Ra = (e, t) => {
  var n, o, r, l;
  const s = t.instance, a = (p) => ot(t.value) ? t.value[p] : void 0, i = (p) => {
    const v = et(p) && (s == null ? void 0 : s[p]) || p;
    return v && O(v);
  }, u = (p) => i(a(p) || e.getAttribute(`element-loading-${Wp(p)}`)), d = (n = a("fullscreen")) != null ? n : t.modifiers.fullscreen, f = {
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
  e[_r] = {
    options: f,
    instance: v1(f)
  };
}, m1 = (e, t) => {
  for (const n of Object.keys(t))
    on(t[n]) && (t[n].value = e[n]);
}, b1 = {
  mounted(e, t) {
    t.value && Ra(e, t);
  },
  updated(e, t) {
    const n = e[_r];
    t.oldValue !== t.value && (t.value && !t.oldValue ? Ra(e, t) : t.value && t.oldValue ? ot(t.value) && m1(t.value, n.options) : n == null || n.instance.close());
  },
  unmounted(e) {
    var t;
    (t = e[_r]) == null || t.instance.close();
  }
};
const Si = (e) => Object.prototype.toString.call(e).slice(8, -1), Ia = (e) => [
  "String",
  "Number",
  "Boolean",
  "Null",
  "Undefined",
  "Symbol",
  "Bigint"
].includes(Si(e));
var Ei = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, tr = (e, t, n) => (Ei(e, t, "read from private field"), n ? n.call(e) : t.get(e)), y1 = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, w1 = (e, t, n, o) => (Ei(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n), hn;
class C1 {
  /**
   * 初始化一个栈
   * @param initData 初始栈的成员，可以任意个参数
   */
  constructor(...t) {
    y1(this, hn, void 0), w1(this, hn, new Array(...t));
  }
  /**
   * 推入栈
   * @param member 要推入的成员
   * @returns 栈长度
   */
  push(t) {
    return tr(this, hn).push(t);
  }
  /**
   * 抛出最后一个成员
   * @returns 最后一个成员
   */
  pop() {
    return tr(this, hn).pop();
  }
  /**
   * 当前栈的长度
   * @returns 长度
   */
  length() {
    return tr(this, hn).length;
  }
}
hn = /* @__PURE__ */ new WeakMap();
const S1 = (e) => {
  if (Ia(e))
    return e;
  let t;
  const n = new C1({
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
    if (Ia(a)) {
      r(l, s, a, i);
      continue;
    }
    if (o.has(a)) {
      r(l, s, o.get(a), i);
      continue;
    }
    const u = Si(a);
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
}, E1 = { class: "cm-table" }, _1 = { class: "buttons" }, O1 = { class: "table" }, T1 = { class: "pager" }, $1 = U({
  name: "CmTable"
}), P1 = /* @__PURE__ */ U({
  ...$1,
  props: {
    getData: null,
    isInitData: { type: Boolean, default: !0 },
    initParams: { default: () => ({}) },
    isUsePager: { type: Boolean, default: !0 },
    isUseCheckBox: { type: Boolean, default: !0 }
  },
  setup(e, { expose: t }) {
    const n = e, o = O([]), r = O(!1), l = O({}), s = Vt({
      pageSize: 20,
      currentPage: 1
    }), a = O(0), i = O(null), u = (v, c = !0) => (v && (l.value = S1(v)), c && (s.currentPage = 1), n.isUsePager && (l.value.pager = s), r.value = !0, n.getData(l).then((h) => {
      o.value = h.datas, a.value = h.total;
    }).catch().finally(() => {
      r.value = !1;
    }));
    n.isInitData && u(n.initParams), V(
      () => s.currentPage,
      () => {
        u(null, !1);
      }
    ), V(
      () => s.pageSize,
      () => {
        u();
      }
    );
    const d = O([]), f = (v) => {
      d.value = v;
    }, p = Vt({ a: 1 });
    return t({
      update: u,
      selection: d,
      test: p
    }), (v, c) => {
      const h = f1, y = d1, g = r0, w = b1;
      return xe((x(), N("div", E1, [
        Y(" 操作按钮组 "),
        K("div", _1, [
          pe(v.$slots, "buttons", { selection: m(d) }, void 0, !0)
        ]),
        Y(" 表格主体 "),
        K("div", O1, [
          he(y, Kt({
            ref_key: "table",
            ref: i
          }, v.$attrs, {
            data: m(o),
            onSelectionChange: f
          }), {
            default: te(() => [
              n.isUseCheckBox ? (x(), J(h, {
                key: 0,
                type: "selection"
              })) : Y("v-if", !0),
              pe(v.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["data"])
        ]),
        Y(" 分页部分 "),
        K("div", T1, [
          he(g, {
            "page-size": m(s).pageSize,
            "onUpdate:pageSize": c[0] || (c[0] = (S) => m(s).pageSize = S),
            "current-page": m(s).currentPage,
            "onUpdate:currentPage": c[1] || (c[1] = (S) => m(s).currentPage = S),
            background: "",
            layout: "total, prev, pager, next",
            "hide-on-single-page": "",
            total: m(a)
          }, null, 8, ["page-size", "current-page", "total"])
        ])
      ])), [
        [w, m(r)]
      ]);
    };
  }
});
const x1 = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Ma = /* @__PURE__ */ x1(P1, [["__scopeId", "data-v-175e1406"]]), A1 = {
  install(e) {
    e.component(Ma.name, Ma);
  }
};
export {
  Ma as CmTable,
  A1 as default
};
