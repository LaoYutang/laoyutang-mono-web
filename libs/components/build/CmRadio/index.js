"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const l=require("element-plus/es"),e=require("vue");const p=e.defineComponent({name:"CmRadio"}),n=e.defineComponent({...p,props:{getData:null},setup(t){const c=t,a=e.ref([]);return c.getData().then(o=>{a.value=o}).catch(),(o,m)=>{const s=l.ElRadioButton,u=l.ElRadioGroup;return e.openBlock(),e.createBlock(u,e.normalizeProps(e.guardReactiveProps(o.$attrs)),{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(a),({value:r,label:i,disabled:d})=>(e.openBlock(),e.createBlock(s,{key:r,label:r,disabled:d},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(i),1)]),_:2},1032,["label","disabled"]))),128))]),_:1},16)}}}),_={install(t){t.component(n.name,n)}};exports.CmRadio=n;exports.default=_;
