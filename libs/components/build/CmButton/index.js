"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const u=require("element-plus/es"),e=require("vue"),_=require("utils");const d=e.defineComponent({name:"cm-button"}),i=e.defineComponent({...d,props:{handler:null},setup(t){const s=t,n=e.ref(!1),c=_._debounce(async o=>{n.value=!0;try{await s.handler(o)}catch{}n.value=!1});return(o,l)=>{const a=u.ElButton;return e.openBlock(),e.createBlock(a,e.mergeProps(o.$attrs,{loading:e.unref(n),onClick:e.unref(c)}),{default:e.withCtx(()=>[e.renderSlot(o.$slots,"default",{},void 0,!0)]),_:3},16,["loading","onClick"])}}});const f=(t,s)=>{const n=t.__vccOpts||t;for(const[c,o]of s)n[c]=o;return n},r=f(i,[["__scopeId","data-v-68fd51f0"]]),p={install(t){t.component(r.name,r)}};exports.CmButton=r;exports.default=p;
