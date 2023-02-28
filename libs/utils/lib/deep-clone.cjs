"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const y=require("./common.cjs"),d=require("./stack.cjs"),h=k=>{if(y._isPrimitVar(k))return k;let u;const i=new d._Stack({parent:u,key:void 0,data:k,sign:2}),c=new Map,n=(t,r,e,s)=>{switch(s){case 2:{u=e;break}case 3:{t[r]=e;break}case 0:{t.add(e);break}case 1:{t.set(r,e);break}}};for(;i.length()>0;){const{parent:t,key:r,data:e,sign:s}=i.pop();if(y._isPrimitVar(e)){n(t,r,e,s);continue}if(c.has(e)){n(t,r,c.get(e),s);continue}const b=y._getVarType(e);switch(b){case"Date":{const a=new Date(e);n(t,r,a,s),c.set(e,a);break}case"RegExp":{const a=new RegExp(e.source,e.flags);n(t,r,a,s),c.set(e,a);break}case"Function":{n(t,r,e,s);break}case"Array":{const a=[];n(t,r,a,s),c.set(e,a),e.forEach((p,o)=>{i.push({parent:a,key:o,data:p,sign:3})});break}case"Object":{const a={};n(t,r,a,s),c.set(e,a),Object.entries(e).reverse().forEach(([p,o])=>{i.push({parent:a,key:p,data:o,sign:3})});break}case"Set":case"WeakSet":{const a=new e.constructor;n(t,r,a,s),c.set(e,a),Array.from(e).reverse().forEach((p,o)=>{i.push({parent:a,key:o,data:p,sign:0})});break}case"Map":case"WeakMap":{const a=new e.constructor;n(t,r,a,s),c.set(e,a),Array.from(e).reverse().forEach(([o,g])=>{i.push({parent:a,key:o,data:g,sign:1})});break}default:console.error(`[typeError] unknown type ${b}`)}}return u};exports._deepClone=h;
