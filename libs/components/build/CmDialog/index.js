"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const x=require("element-plus/es"),e=require("vue"),P=require("utils");const S=e.defineComponent({name:"cm-button"}),E=e.defineComponent({...S,props:{handler:null},setup(t){const n=t,o=e.ref(!1),a=P._debounce(async s=>{o.value=!0;try{await n.handler(s)}catch{}o.value=!1});return(s,u)=>{const r=x.ElButton;return e.openBlock(),e.createBlock(r,e.mergeProps(s.$attrs,{loading:e.unref(o),onClick:e.unref(a)}),{default:e.withCtx(()=>[e.renderSlot(s.$slots,"default",{},void 0,!0)]),_:3},16,["loading","onClick"])}}});const $=(t,n)=>{const o=t.__vccOpts||t;for(const[a,s]of n)o[a]=s;return o},T=$(E,[["__scopeId","data-v-68fd51f0"]]),Q={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},M=e.createStaticVNode('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M5.63604 5.63603C9.15076 2.12131 14.8492 2.12131 18.364 5.63603C21.8787 9.15075 21.8787 14.8492 18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C2.12132 14.8492 2.12132 9.15075 5.63604 5.63603Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"></animate></path><path stroke-dasharray="18" stroke-dashoffset="18" d="M6 6L18 18"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="18;0"></animate></path></g>',1),F=[M];function j(t,n){return e.openBlock(),e.createElementBlock("svg",Q,F)}const L={name:"line-md-cancel",render:j},z={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},D=e.createStaticVNode('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"></animate></path><path stroke-dasharray="14" stroke-dashoffset="14" d="M8 12L11 15L16 10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"></animate></path></g>',1),q=[D];function J(t,n){return e.openBlock(),e.createElementBlock("svg",z,q)}const R={name:"line-md-confirm-circle",render:J};var k;const h=typeof window<"u",U=t=>typeof t<"u",A=t=>typeof t=="function";h&&((k=window==null?void 0:window.navigator)!=null&&k.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function G(t){return t}h&&window.document;h&&window.navigator;h&&window.location;function H(t){return JSON.parse(JSON.stringify(t))}const g=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},w="__vueuse_ssr_handlers__";g[w]=g[w]||{};g[w];var I;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(I||(I={}));var W=Object.defineProperty,N=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,B=(t,n,o)=>n in t?W(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,X=(t,n)=>{for(var o in n||(n={}))Z.call(n,o)&&B(t,o,n[o]);if(N)for(var o of N(n))K.call(n,o)&&B(t,o,n[o]);return t};const Y={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};X({linear:G},Y);function ee(t,n,o,a={}){var s,u,r;const{clone:c=!1,passive:d=!1,eventName:f,deep:_=!1,defaultValue:V}=a,l=e.getCurrentInstance(),O=o||(l==null?void 0:l.emit)||((s=l==null?void 0:l.$emit)==null?void 0:s.bind(l))||((r=(u=l==null?void 0:l.proxy)==null?void 0:u.$emit)==null?void 0:r.bind(l==null?void 0:l.proxy));let m=f;n||(n="modelValue"),m=f||m||`update:${n.toString()}`;const y=i=>c?A(c)?c(i):H(i):i,b=()=>U(t[n])?y(t[n]):V;if(d){const i=b(),v=e.ref(i);return e.watch(()=>t[n],p=>v.value=y(p)),e.watch(v,p=>{(p!==t[n]||_)&&O(m,p)},{deep:_}),v}else return e.computed({get(){return b()},set(i){O(m,i)}})}const te={class:"footer"},ne=e.defineComponent({name:"CmDialog"}),C=e.defineComponent({...ne,props:{modelValue:{type:Boolean},isShowButtons:{type:Boolean,default:!0},beforeconfrim:{type:Function,default:()=>Promise.reject()}},emits:["update:modelValue"],setup(t,{emit:n}){const o=t,a=ee(o,"modelValue",n),s=()=>{o.beforeconfrim().then(()=>{a.value=!1}).catch(r=>r)},u=()=>{a.value=!1};return(r,c)=>{const d=T,f=x.ElDialog;return e.openBlock(),e.createBlock(f,e.mergeProps({modelValue:e.unref(a),"onUpdate:modelValue":c[0]||(c[0]=_=>e.isRef(a)?a.value=_:null)},r.$attrs,{class:"cm-dialog",draggable:"","close-on-click-modal":!1,"destroy-on-close":""}),e.createSlots({default:e.withCtx(()=>[e.renderSlot(r.$slots,"default")]),_:2},[t.isShowButtons?{name:"footer",fn:e.withCtx(()=>[e.createElementVNode("div",te,[e.createVNode(d,{handler:u,icon:e.unref(L)},{default:e.withCtx(()=>[e.createTextVNode(" 取消 ")]),_:1},8,["icon"]),e.createVNode(d,{handler:s,type:"primary",icon:e.unref(R)},{default:e.withCtx(()=>[e.createTextVNode(" 提交 ")]),_:1},8,["icon"])])]),key:"0"}:void 0]),1040,["modelValue"])}}}),oe={install(t){t.component(C.name,C)}};exports.CmDialog=C;exports.default=oe;
