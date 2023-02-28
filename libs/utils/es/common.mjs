const o = (t) => Object.prototype.toString.call(t).slice(8, -1), s = (t) => [
  "String",
  "Number",
  "Boolean",
  "Null",
  "Undefined",
  "Symbol",
  "Bigint"
].includes(o(t)), u = (t, i = 500, r = !0) => {
  let e, l = !1;
  return function(...n) {
    l ? clearTimeout(e) : r && t.apply(this, n), e = setTimeout(() => {
      r || t.apply(this, n), l = !1;
    }, i), l = !0;
  };
}, a = (t, i = 500, r = !0) => {
  let e = !1;
  return function(...l) {
    e || (r && t.apply(this, l), setTimeout(() => {
      r || t.apply(this, l), e = !1;
    }, i), e = !0);
  };
}, c = (t) => new Promise((i) => {
  setTimeout(() => {
    i();
  }, t);
});
export {
  u as _debounce,
  o as _getVarType,
  s as _isPrimitVar,
  c as _sleep,
  a as _throttle
};
