var x = Object.defineProperty;
var O = (r, t, e) => t in r ? x(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var h = (r, t, e) => (O(r, typeof t != "symbol" ? t + "" : t, e), e), T = (r, t, e) => {
  if (!t.has(r))
    throw TypeError("Cannot " + e);
};
var w = (r, t, e) => {
  if (t.has(r))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(r) : t.set(r, e);
};
var d = (r, t, e) => (T(r, t, "access private method"), e);
import H from "../node_modules/.pnpm/registry.npmmirror.com_axios@1.3.3/node_modules/axios/lib/axios.mjs";
import { _getVarType as P } from "../common.mjs";
var p, l;
class m {
  constructor(t, e) {
    /**
     * 递归去空方法，只处理常规Object和Array中的字符串
     * @param source 需要做字符串去空的请求参数
     */
    w(this, p);
    // 构造函数创建axios实例
    h(this, "instance");
    h(this, "requestMap");
    h(this, "customConfig");
    this.instance = H.create(t), this.requestMap = /* @__PURE__ */ new Map(), this.customConfig = e, this.instance.interceptors.request.use(
      e == null ? void 0 : e.requestHandler,
      (a) => Promise.reject(a)
    ), this.instance.interceptors.response.use(
      e == null ? void 0 : e.responseHandler,
      e == null ? void 0 : e.responseErrorHandler
    );
  }
  /**
   * @description axios请求方法
   * @param url 请求相对路径
   * @param params 请求参数对象
   * @param method 请求方法
   * @param config 请求的额外配置
   * @returns 请求的返回Promise
   */
  request(t, e, a, s) {
    var y;
    const i = t + a + JSON.stringify(e);
    if (this.requestMap.has(i))
      return this.requestMap.get(i);
    const [n, b] = a.split("/"), j = b === "formdata" ? "application/x-www-form-urlencoded" : "application/json";
    s != null && s.trimString && d(this, p, l).call(this, e);
    const u = {
      ...s == null ? void 0 : s.merge,
      // 覆盖默认请求配置
      url: t,
      method: n,
      // 若为get请求放到params中，否则放到data
      params: n === "get" ? e : {},
      data: n === "get" ? {} : e,
      headers: Object.assign({}, (y = s == null ? void 0 : s.merge) == null ? void 0 : y.headers, {
        "content-type": j
      })
    }, q = this.instance.request(u);
    return this.requestMap.set(i, q), q.finally(() => {
      var M;
      setTimeout(() => {
        this.requestMap.delete(i);
      }, ((M = this.customConfig) == null ? void 0 : M.expire) ?? 500);
    }), q;
  }
}
p = new WeakSet(), l = function(t) {
  for (const e in t)
    if (t.hasOwnProperty(e))
      switch (P(t[e])) {
        case "String": {
          t[e] = t[e].trim();
          break;
        }
        case "Object":
        case "Array": {
          d(this, p, l).call(this, t[e]);
          break;
        }
      }
};
export {
  m as _Request
};
