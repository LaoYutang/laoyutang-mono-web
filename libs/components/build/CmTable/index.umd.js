(function(d,g){typeof exports=="object"&&typeof module<"u"?g(exports,require("element-plus/es"),require("vue")):typeof define=="function"&&define.amd?define(["exports","element-plus/es","vue"],g):(d=typeof globalThis<"u"?globalThis:d||self,g(d.index={},d.es,d.Vue))})(this,function(d,g,e){"use strict";const W="",q="",v="",L="",R="",F="",G="",H="",J="",K="",Q="",X="",Y="",Z="",C=t=>Object.prototype.toString.call(t).slice(8,-1),E=t=>["String","Number","Boolean","Null","Undefined","Symbol","Bigint"].includes(C(t));var P=(t,s,a)=>{if(!s.has(t))throw TypeError("Cannot "+a)},y=(t,s,a)=>(P(t,s,"read from private field"),a?a.call(t):s.get(t)),T=(t,s,a)=>{if(s.has(t))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(t):s.set(t,a)},x=(t,s,a,l)=>(P(t,s,"write to private field"),l?l.call(t,a):s.set(t,a),a),_;class B{constructor(...s){T(this,_,void 0),x(this,_,new Array(...s))}push(s){return y(this,_).push(s)}pop(){return y(this,_).pop()}length(){return y(this,_).length}}_=new WeakMap;const N=t=>{if(E(t))return t;let s;const a=new B({parent:s,key:void 0,data:t,sign:2}),l=new Map,i=(c,r,n,p)=>{switch(p){case 2:{s=n;break}case 3:{c[r]=n;break}case 0:{c.add(n);break}case 1:{c.set(r,n);break}}};for(;a.length()>0;){const{parent:c,key:r,data:n,sign:p}=a.pop();if(E(n)){i(c,r,n,p);continue}if(l.has(n)){i(c,r,l.get(n),p);continue}const m=C(n);switch(m){case"Date":{const o=new Date(n);i(c,r,o,p),l.set(n,o);break}case"RegExp":{const o=new RegExp(n.source,n.flags);i(c,r,o,p),l.set(n,o);break}case"Function":{i(c,r,n,p);break}case"Array":{const o=[];i(c,r,o,p),l.set(n,o),n.forEach((f,u)=>{a.push({parent:o,key:u,data:f,sign:3})});break}case"Object":{const o={};i(c,r,o,p),l.set(n,o),Object.entries(n).reverse().forEach(([f,u])=>{a.push({parent:o,key:f,data:u,sign:3})});break}case"Set":case"WeakSet":{const o=new n.constructor;i(c,r,o,p),l.set(n,o),Array.from(n).reverse().forEach((f,u)=>{a.push({parent:o,key:u,data:f,sign:0})});break}case"Map":case"WeakMap":{const o=new n.constructor;i(c,r,o,p),l.set(n,o),Array.from(n).reverse().forEach(([f,u])=>{a.push({parent:o,key:f,data:u,sign:1})});break}default:console.error(`[typeError] unknown type ${m}`)}}return s},V={class:"cm-table"},D={class:"buttons"},z={class:"table"},O={class:"pager"},U=e.defineComponent({name:"CmTable"}),M=e.defineComponent({...U,props:{getData:null,isInitData:{type:Boolean,default:!0},initParams:{default:()=>({})},isUsePager:{type:Boolean,default:!0},isUseCheckBox:{type:Boolean,default:!0}},setup(t,{expose:s}){const a=t,l=e.ref([]),i=e.ref(!1),c=e.ref({}),r=e.reactive({pageSize:20,currentPage:1}),n=e.ref(0),p=e.ref(null),m=(h,b=!0)=>(h&&(c.value=N(h)),b&&(r.currentPage=1),a.isUsePager&&(c.value.pager=r),i.value=!0,a.getData(c).then(k=>{l.value=k.datas,n.value=k.total}).catch().finally(()=>{i.value=!1}));a.isInitData&&m(a.initParams),e.watch(()=>r.currentPage,()=>{m(null,!1)}),e.watch(()=>r.pageSize,()=>{m()});const o=e.ref([]),f=h=>{o.value=h},u=e.reactive({a:1});return s({update:m,selection:o,test:u}),(h,b)=>{const k=g.ElTableColumn,I=g.ElTable,$=g.ElPagination,A=g.ElLoadingDirective;return e.withDirectives((e.openBlock(),e.createElementBlock("div",V,[e.createCommentVNode(" 操作按钮组 "),e.createElementVNode("div",D,[e.renderSlot(h.$slots,"buttons",{selection:e.unref(o)},void 0,!0)]),e.createCommentVNode(" 表格主体 "),e.createElementVNode("div",z,[e.createVNode(I,e.mergeProps({ref_key:"table",ref:p},h.$attrs,{data:e.unref(l),onSelectionChange:f}),{default:e.withCtx(()=>[a.isUseCheckBox?(e.openBlock(),e.createBlock(k,{key:0,type:"selection"})):e.createCommentVNode("v-if",!0),e.renderSlot(h.$slots,"default",{},void 0,!0)]),_:3},16,["data"])]),e.createCommentVNode(" 分页部分 "),e.createElementVNode("div",O,[e.createVNode($,{"page-size":e.unref(r).pageSize,"onUpdate:pageSize":b[0]||(b[0]=w=>e.unref(r).pageSize=w),"current-page":e.unref(r).currentPage,"onUpdate:currentPage":b[1]||(b[1]=w=>e.unref(r).currentPage=w),background:"",layout:"total, prev, pager, next","hide-on-single-page":"",total:e.unref(n)},null,8,["page-size","current-page","total"])])])),[[A,e.unref(i)]])}}}),ee="",S=((t,s)=>{const a=t.__vccOpts||t;for(const[l,i]of s)a[l]=i;return a})(M,[["__scopeId","data-v-175e1406"]]),j={install(t){t.component(S.name,S)}};d.CmTable=S,d.default=j,Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
