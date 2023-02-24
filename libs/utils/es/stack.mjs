var p = (r, t, s) => {
  if (!t.has(r))
    throw TypeError("Cannot " + s);
};
var e = (r, t, s) => (p(r, t, "read from private field"), s ? s.call(r) : t.get(r)), u = (r, t, s) => {
  if (t.has(r))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(r) : t.set(r, s);
}, c = (r, t, s, n) => (p(r, t, "write to private field"), n ? n.call(r, s) : t.set(r, s), s);
var h;
class a {
  /**
   * 初始化一个栈
   * @param initData 初始栈的成员，可以任意个参数
   */
  constructor(...t) {
    u(this, h, void 0);
    c(this, h, new Array(...t));
  }
  /**
   * 推入栈
   * @param member 要推入的成员
   * @returns 栈长度
   */
  push(t) {
    return e(this, h).push(t);
  }
  /**
   * 抛出最后一个成员
   * @returns 最后一个成员
   */
  pop() {
    return e(this, h).pop();
  }
  /**
   * 当前栈的长度
   * @returns 长度
   */
  length() {
    return e(this, h).length;
  }
}
h = new WeakMap();
export {
  a as _Stack
};
