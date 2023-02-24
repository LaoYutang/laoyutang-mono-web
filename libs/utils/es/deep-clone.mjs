import { _isPrimitVar as b, _getVarType as g } from "./common.mjs";
import { _Stack as u } from "./stack.mjs";
const l = (k) => {
  if (b(k))
    return k;
  let h;
  const p = new u({
    parent: h,
    key: void 0,
    data: k,
    sign: 2
    /* SELF */
  }), c = /* @__PURE__ */ new Map(), n = (r, t, e, s) => {
    switch (s) {
      case 2: {
        h = e;
        break;
      }
      case 3: {
        r[t] = e;
        break;
      }
      case 0: {
        r.add(e);
        break;
      }
      case 1: {
        r.set(t, e);
        break;
      }
    }
  };
  for (; p.length() > 0; ) {
    const { parent: r, key: t, data: e, sign: s } = p.pop();
    if (b(e)) {
      n(r, t, e, s);
      continue;
    }
    if (c.has(e)) {
      n(r, t, c.get(e), s);
      continue;
    }
    const y = g(e);
    switch (y) {
      case "Date": {
        const a = new Date(e);
        n(r, t, a, s), c.set(e, a);
        break;
      }
      case "RegExp": {
        const a = new RegExp(e.source, e.flags);
        n(r, t, a, s), c.set(e, a);
        break;
      }
      case "Function": {
        n(r, t, e, s);
        break;
      }
      case "Array": {
        const a = [];
        n(r, t, a, s), c.set(e, a), e.forEach((i, o) => {
          p.push({
            parent: a,
            key: o,
            data: i,
            sign: 3
            /* OTHER */
          });
        });
        break;
      }
      case "Object": {
        const a = {};
        n(r, t, a, s), c.set(e, a), Object.entries(e).reverse().forEach(([i, o]) => {
          p.push({
            parent: a,
            key: i,
            data: o,
            sign: 3
            /* OTHER */
          });
        });
        break;
      }
      case "Set":
      case "WeakSet": {
        const a = new e.constructor();
        n(r, t, a, s), c.set(e, a), Array.from(e).reverse().forEach((i, o) => {
          p.push({
            parent: a,
            key: o,
            data: i,
            sign: 0
            /* SET */
          });
        });
        break;
      }
      case "Map":
      case "WeakMap": {
        const a = new e.constructor();
        n(r, t, a, s), c.set(e, a), Array.from(e).reverse().forEach(([o, f]) => {
          p.push({
            parent: a,
            key: o,
            data: f,
            sign: 1
            /* MAP */
          });
        });
        break;
      }
      default:
        console.error(`[typeError] unknown type ${y}`);
    }
  }
  return h;
};
export {
  l as _deepClone
};
