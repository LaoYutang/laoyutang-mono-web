"use strict";var Ke=Object.defineProperty;var ve=(e,t,n)=>t in e?Ke(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var U=(e,t,n)=>(ve(e,typeof t!="symbol"?t+"":t,n),n),v=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var j=(e,t,n)=>(v(e,t,"read from private field"),n?n.call(e):t.get(e)),G=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},he=(e,t,n,r)=>(v(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n);var X=(e,t,n)=>(v(e,t,"access private method"),n);Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const J=e=>Object.prototype.toString.call(e).slice(8,-1),te=e=>["String","Number","Boolean","Null","Undefined","Symbol","Bigint"].includes(J(e)),Ge=(e,t=500,n=!0)=>{let r,s=!1;return function(...o){s?clearTimeout(r):n&&e.apply(this,o),r=setTimeout(()=>{n||e.apply(this,o),s=!1},t),s=!0}},Xe=(e,t=500,n=!0)=>{let r=!1;return function(...s){r||(n&&e.apply(this,s),setTimeout(()=>{n||e.apply(this,s),r=!1},t),r=!0)}};var N;class ge{constructor(...t){G(this,N,void 0);he(this,N,new Array(...t))}push(t){return j(this,N).push(t)}pop(){return j(this,N).pop()}length(){return j(this,N).length}}N=new WeakMap;const Qe=e=>{if(te(e))return e;let t;const n=new ge({parent:t,key:void 0,data:e,sign:2}),r=new Map,s=(o,i,c,f)=>{switch(f){case 2:{t=c;break}case 3:{o[i]=c;break}case 0:{o.add(c);break}case 1:{o.set(i,c);break}}};for(;n.length()>0;){const{parent:o,key:i,data:c,sign:f}=n.pop();if(te(c)){s(o,i,c,f);continue}if(r.has(c)){s(o,i,r.get(c),f);continue}const u=J(c);switch(u){case"Date":{const l=new Date(c);s(o,i,l,f),r.set(c,l);break}case"RegExp":{const l=new RegExp(c.source,c.flags);s(o,i,l,f),r.set(c,l);break}case"Function":{s(o,i,c,f);break}case"Array":{const l=[];s(o,i,l,f),r.set(c,l),c.forEach((p,y)=>{n.push({parent:l,key:y,data:p,sign:3})});break}case"Object":{const l={};s(o,i,l,f),r.set(c,l),Object.entries(c).reverse().forEach(([p,y])=>{n.push({parent:l,key:p,data:y,sign:3})});break}case"Set":case"WeakSet":{const l=new c.constructor;s(o,i,l,f),r.set(c,l),Array.from(c).reverse().forEach((p,y)=>{n.push({parent:l,key:y,data:p,sign:0})});break}case"Map":case"WeakMap":{const l=new c.constructor;s(o,i,l,f),r.set(c,l),Array.from(c).reverse().forEach(([y,w])=>{n.push({parent:l,key:y,data:w,sign:1})});break}default:console.error(`[typeError] unknown type ${u}`)}}return t};function Ne(e,t){return function(){return e.apply(t,arguments)}}const{toString:Pe}=Object.prototype,{getPrototypeOf:ae}=Object,ce=(e=>t=>{const n=Pe.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>ce(t)===e),V=e=>t=>typeof t===e,{isArray:_}=Array,k=V("undefined");function Ye(e){return e!==null&&!k(e)&&e.constructor!==null&&!k(e.constructor)&&g(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const xe=A("ArrayBuffer");function Ze(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&xe(e.buffer),t}const et=V("string"),g=V("function"),_e=V("number"),ue=e=>e!==null&&typeof e=="object",tt=e=>e===!0||e===!1,M=e=>{if(ce(e)!=="object")return!1;const t=ae(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},nt=A("Date"),rt=A("File"),st=A("Blob"),ot=A("FileList"),it=e=>ue(e)&&g(e.pipe),at=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Pe.call(e)===t||g(e.toString)&&e.toString()===t)},ct=A("URLSearchParams"),ut=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function D(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),_(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Ce(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const ke=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Fe=e=>!k(e)&&e!==ke;function ne(){const{caseless:e}=Fe(this)&&this||{},t={},n=(r,s)=>{const o=e&&Ce(t,s)||s;M(t[o])&&M(r)?t[o]=ne(t[o],r):M(r)?t[o]=ne({},r):_(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&D(arguments[r],n);return t}const lt=(e,t,n,{allOwnKeys:r}={})=>(D(t,(s,o)=>{n&&g(s)?e[o]=Ne(s,n):e[o]=s},{allOwnKeys:r}),e),ft=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),dt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},pt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&ae(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},ht=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},mt=e=>{if(!e)return null;if(_(e))return e;let t=e.length;if(!_e(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},yt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ae(Uint8Array)),wt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Et=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},bt=A("HTMLFormElement"),St=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),me=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ot=A("RegExp"),De=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};D(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},Rt=e=>{De(e,(t,n)=>{if(g(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(g(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},At=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return _(e)?r(e):r(String(e).split(t)),n},Tt=()=>{},gt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Q="abcdefghijklmnopqrstuvwxyz",ye="0123456789",Be={DIGIT:ye,ALPHA:Q,ALPHA_DIGIT:Q+Q.toUpperCase()+ye},Nt=(e=16,t=Be.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Pt(e){return!!(e&&g(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const xt=e=>{const t=new Array(10),n=(r,s)=>{if(ue(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=_(r)?[]:{};return D(r,(i,c)=>{const f=n(i,s+1);!k(f)&&(o[c]=f)}),t[s]=void 0,o}}return r};return n(e,0)},a={isArray:_,isArrayBuffer:xe,isBuffer:Ye,isFormData:at,isArrayBufferView:Ze,isString:et,isNumber:_e,isBoolean:tt,isObject:ue,isPlainObject:M,isUndefined:k,isDate:nt,isFile:rt,isBlob:st,isRegExp:Ot,isFunction:g,isStream:it,isURLSearchParams:ct,isTypedArray:yt,isFileList:ot,forEach:D,merge:ne,extend:lt,trim:ut,stripBOM:ft,inherits:dt,toFlatObject:pt,kindOf:ce,kindOfTest:A,endsWith:ht,toArray:mt,forEachEntry:wt,matchAll:Et,isHTMLForm:bt,hasOwnProperty:me,hasOwnProp:me,reduceDescriptors:De,freezeMethods:Rt,toObjectSet:At,toCamelCase:St,noop:Tt,toFiniteNumber:gt,findKey:Ce,global:ke,isContextDefined:Fe,ALPHABET:Be,generateString:Nt,isSpecCompliantForm:Pt,toJSONObject:xt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Le=m.prototype,Ue={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ue[e]={value:e}});Object.defineProperties(m,Ue);Object.defineProperty(Le,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Le);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const _t=null;function re(e){return a.isPlainObject(e)||a.isArray(e)}function je(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function we(e,t,n){return e?e.concat(t).map(function(s,o){return s=je(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Ct(e){return a.isArray(e)&&!e.some(re)}const kt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function $(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,O){return!a.isUndefined(O[h])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function u(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!f&&a.isBlob(d))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?f&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function l(d,h,O){let b=d;if(d&&!O&&typeof d=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&Ct(d)||(a.isFileList(d)||a.endsWith(h,"[]"))&&(b=a.toArray(d)))return h=je(h),b.forEach(function(L,We){!(a.isUndefined(L)||L===null)&&t.append(i===!0?we([h],We,o):i===null?h:h+"[]",u(L))}),!1}return re(d)?!0:(t.append(we(O,h,o),u(d)),!1)}const p=[],y=Object.assign(kt,{defaultVisitor:l,convertValue:u,isVisitable:re});function w(d,h){if(!a.isUndefined(d)){if(p.indexOf(d)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(d),a.forEach(d,function(b,P){(!(a.isUndefined(b)||b===null)&&s.call(t,b,a.isString(P)?P.trim():P,h,y))===!0&&w(b,h?h.concat(P):[P])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return w(e),t}function Ee(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function le(e,t){this._pairs=[],e&&$(e,this,t)}const Me=le.prototype;Me.append=function(t,n){this._pairs.push([t,n])};Me.toString=function(t){const n=t?function(r){return t.call(this,r,Ee)}:Ee;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Ft(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function qe(e,t,n){if(!t)return e;const r=n&&n.encode||Ft,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new le(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Dt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const be=Dt,He={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Bt=typeof URLSearchParams<"u"?URLSearchParams:le,Lt=typeof FormData<"u"?FormData:null,Ut=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),jt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),S={isBrowser:!0,classes:{URLSearchParams:Bt,FormData:Lt,Blob},isStandardBrowserEnv:Ut,isStandardBrowserWebWorkerEnv:jt,protocols:["http","https","file","blob","url","data"]};function Mt(e,t){return $(e,new S.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return S.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function qt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Ht(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Ie(e){function t(n,r,s,o){let i=n[o++];const c=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Ht(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(qt(r),s,n,0)}),n}return null}const It={"Content-Type":void 0};function zt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const W={transitional:He,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Ie(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Mt(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return $(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),zt(t)):t}],transformResponse:[function(t){const n=this.transitional||W.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:S.classes.FormData,Blob:S.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){W.headers[t]={}});a.forEach(["post","put","patch"],function(t){W.headers[t]=a.merge(It)});const fe=W,Jt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Vt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Jt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Se=Symbol("internals");function C(e){return e&&String(e).trim().toLowerCase()}function q(e){return e===!1||e==null?e:a.isArray(e)?e.map(q):String(e)}function $t(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function Wt(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function Y(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Kt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function vt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class K{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,f,u){const l=C(f);if(!l)throw new Error("header name must be a non-empty string");const p=a.findKey(s,l);(!p||s[p]===void 0||u===!0||u===void 0&&s[p]!==!1)&&(s[p||f]=q(c))}const i=(c,f)=>a.forEach(c,(u,l)=>o(u,l,f));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Wt(t)?i(Vt(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=C(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return $t(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=C(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Y(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=C(i),i){const c=a.findKey(r,i);c&&(!n||Y(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||Y(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=q(s),delete n[o];return}const c=t?Kt(o):String(o).trim();c!==o&&delete n[o],n[c]=q(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Se]=this[Se]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=C(i);r[c]||(vt(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}K.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(K.prototype);a.freezeMethods(K);const R=K;function Z(e,t){const n=this||fe,r=t||n,s=R.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function ze(e){return!!(e&&e.__CANCEL__)}function B(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(B,m,{__CANCEL__:!0});function Gt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Xt=S.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,c){const f=[];f.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&f.push("expires="+new Date(s).toGMTString()),a.isString(o)&&f.push("path="+o),a.isString(i)&&f.push("domain="+i),c===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Qt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Yt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Je(e,t){return e&&!Qt(t)?Yt(e,t):t}const Zt=S.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function en(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function tn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const u=Date.now(),l=r[o];i||(i=u),n[s]=f,r[s]=u;let p=o,y=0;for(;p!==s;)y+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),u-i<t)return;const w=l&&u-l;return w?Math.round(y*1e3/w):void 0}}function Oe(e,t){let n=0;const r=tn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,c=o-n,f=r(c),u=o<=i;n=o;const l={loaded:o,total:i,progress:i?o/i:void 0,bytes:c,rate:f||void 0,estimated:f&&i&&u?(i-o)/f:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const nn=typeof XMLHttpRequest<"u",rn=nn&&function(e){return new Promise(function(n,r){let s=e.data;const o=R.from(e.headers).normalize(),i=e.responseType;let c;function f(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}a.isFormData(s)&&(S.isStandardBrowserEnv||S.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const w=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(w+":"+d))}const l=Je(e.baseURL,e.url);u.open(e.method.toUpperCase(),qe(l,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function p(){if(!u)return;const w=R.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:w,config:e,request:u};Gt(function(b){n(b),f()},function(b){r(b),f()},h),u=null}if("onloadend"in u?u.onloadend=p:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(p)},u.onabort=function(){u&&(r(new m("Request aborted",m.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let d=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||He;e.timeoutErrorMessage&&(d=e.timeoutErrorMessage),r(new m(d,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,u)),u=null},S.isStandardBrowserEnv){const w=(e.withCredentials||Zt(l))&&e.xsrfCookieName&&Xt.read(e.xsrfCookieName);w&&o.set(e.xsrfHeaderName,w)}s===void 0&&o.setContentType(null),"setRequestHeader"in u&&a.forEach(o.toJSON(),function(d,h){u.setRequestHeader(h,d)}),a.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),i&&i!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Oe(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Oe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=w=>{u&&(r(!w||w.type?new B(null,e,u):w),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const y=en(l);if(y&&S.protocols.indexOf(y)===-1){r(new m("Unsupported protocol "+y+":",m.ERR_BAD_REQUEST,e));return}u.send(s||null)})},H={http:_t,xhr:rn};a.forEach(H,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const sn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?H[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(H,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:H};function ee(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new B(null,e)}function Re(e){return ee(e),e.headers=R.from(e.headers),e.data=Z.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),sn.getAdapter(e.adapter||fe.adapter)(e).then(function(r){return ee(e),r.data=Z.call(e,e.transformResponse,r),r.headers=R.from(r.headers),r},function(r){return ze(r)||(ee(e),r&&r.response&&(r.response.data=Z.call(e,e.transformResponse,r.response),r.response.headers=R.from(r.response.headers))),Promise.reject(r)})}const Ae=e=>e instanceof R?e.toJSON():e;function x(e,t){t=t||{};const n={};function r(u,l,p){return a.isPlainObject(u)&&a.isPlainObject(l)?a.merge.call({caseless:p},u,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(u,l,p){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u,p)}else return r(u,l,p)}function o(u,l){if(!a.isUndefined(l))return r(void 0,l)}function i(u,l){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u)}else return r(void 0,l)}function c(u,l,p){if(p in t)return r(u,l);if(p in e)return r(void 0,u)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(u,l)=>s(Ae(u),Ae(l),!0)};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(l){const p=f[l]||s,y=p(e[l],t[l],l);a.isUndefined(y)&&p!==c||(n[l]=y)}),n}const Ve="1.3.3",de={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{de[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Te={};de.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Ve+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Te[i]&&(Te[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function on(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],f=c===void 0||i(c,o,e);if(f!==!0)throw new m("option "+o+" must be "+f,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const se={assertOptions:on,validators:de},T=se.validators;class z{constructor(t){this.defaults=t,this.interceptors={request:new be,response:new be}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=x(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&se.assertOptions(r,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1),s!==void 0&&se.assertOptions(s,{encode:T.function,serialize:T.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),n.headers=R.concat(i,o);const c=[];let f=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(f=f&&h.synchronous,c.unshift(h.fulfilled,h.rejected))});const u=[];this.interceptors.response.forEach(function(h){u.push(h.fulfilled,h.rejected)});let l,p=0,y;if(!f){const d=[Re.bind(this),void 0];for(d.unshift.apply(d,c),d.push.apply(d,u),y=d.length,l=Promise.resolve(n);p<y;)l=l.then(d[p++],d[p++]);return l}y=c.length;let w=n;for(p=0;p<y;){const d=c[p++],h=c[p++];try{w=d(w)}catch(O){h.call(this,O);break}}try{l=Re.call(this,w)}catch(d){return Promise.reject(d)}for(p=0,y=u.length;p<y;)l=l.then(u[p++],u[p++]);return l}getUri(t){t=x(this.defaults,t);const n=Je(t.baseURL,t.url);return qe(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){z.prototype[t]=function(n,r){return this.request(x(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(x(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}z.prototype[t]=n(),z.prototype[t+"Form"]=n(!0)});const I=z;class pe{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new B(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new pe(function(s){t=s}),cancel:t}}}const an=pe;function cn(e){return function(n){return e.apply(null,n)}}function un(e){return a.isObject(e)&&e.isAxiosError===!0}const oe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(oe).forEach(([e,t])=>{oe[t]=e});const ln=oe;function $e(e){const t=new I(e),n=Ne(I.prototype.request,t);return a.extend(n,I.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return $e(x(e,s))},n}const E=$e(fe);E.Axios=I;E.CanceledError=B;E.CancelToken=an;E.isCancel=ze;E.VERSION=Ve;E.toFormData=$;E.AxiosError=m;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=cn;E.isAxiosError=un;E.mergeConfig=x;E.AxiosHeaders=R;E.formToJSON=e=>Ie(a.isHTMLForm(e)?new FormData(e):e);E.HttpStatusCode=ln;E.default=E;const fn=E;var F,ie;class dn{constructor(t,n){G(this,F);U(this,"instance");U(this,"requestMap");U(this,"customConfig");this.instance=fn.create(t),this.requestMap=new Map,this.customConfig=n,this.instance.interceptors.request.use(n==null?void 0:n.requestHandler,r=>Promise.reject(r)),this.instance.interceptors.response.use(n==null?void 0:n.responseHandler,n==null?void 0:n.responseErrorHandler)}request(t,n,r,s){var p;const o=t+r+JSON.stringify(n);if(this.requestMap.has(o))return this.requestMap.get(o);const[i,c]=r.split("/"),f=c==="formdata"?"application/x-www-form-urlencoded":"application/json";s!=null&&s.trimString&&X(this,F,ie).call(this,n);const u={...s==null?void 0:s.merge,url:t,method:i,params:i==="get"?n:{},data:i==="get"?{}:n,headers:Object.assign({},(p=s==null?void 0:s.merge)==null?void 0:p.headers,{"content-type":f})},l=this.instance.request(u);return this.requestMap.set(o,l),l.finally(()=>{var y;setTimeout(()=>{this.requestMap.delete(o)},((y=this.customConfig)==null?void 0:y.expire)??500)}),l}}F=new WeakSet,ie=function(t){for(const n in t)if(t.hasOwnProperty(n))switch(J(t[n])){case"String":{t[n]=t[n].trim();break}case"Object":case"Array":{X(this,F,ie).call(this,t[n]);break}}};exports._Request=dn;exports._Stack=ge;exports._debounce=Ge;exports._deepClone=Qe;exports._getVarType=J;exports._isPrimitVar=te;exports._throttle=Xe;