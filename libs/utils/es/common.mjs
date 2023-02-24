const o = (t) => Object.prototype.toString.call(t).slice(8, -1), u = (t) => [
  "String",
  "Number",
  "Boolean",
  "Null",
  "Undefined",
  "Symbol",
  "Bigint"
].includes(o(t)), s = (t, r = 500, i = !0) => {
  let e, l = !1;
  return function(...n) {
    l ? clearTimeout(e) : i && t.apply(this, n), e = setTimeout(() => {
      i || t.apply(this, n), l = !1;
    }, r), l = !0;
  };
}, a = (t, r = 500, i = !0) => {
  let e = !1;
  return function(...l) {
    e || (i && t.apply(this, l), setTimeout(() => {
      i || t.apply(this, l), e = !1;
    }, r), e = !0);
  };
};
export {
  s as _debounce,
  o as _getVarType,
  u as _isPrimitVar,
  a as _throttle
};
