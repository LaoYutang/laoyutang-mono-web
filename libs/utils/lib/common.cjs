"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=e=>Object.prototype.toString.call(e).slice(8,-1),s=e=>["String","Number","Boolean","Null","Undefined","Symbol","Bigint"].includes(n(e)),u=(e,i=500,l=!0)=>{let t,r=!1;return function(...o){r?clearTimeout(t):l&&e.apply(this,o),t=setTimeout(()=>{l||e.apply(this,o),r=!1},i),r=!0}},a=(e,i=500,l=!0)=>{let t=!1;return function(...r){t||(l&&e.apply(this,r),setTimeout(()=>{l||e.apply(this,r),t=!1},i),t=!0)}},c=e=>new Promise(i=>{setTimeout(()=>{i()},e)});exports._debounce=u;exports._getVarType=n;exports._isPrimitVar=s;exports._sleep=c;exports._throttle=a;