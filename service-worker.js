if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,r)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let d={};const o=e=>c(e,f),n={module:{uri:f},exports:d,require:o};s[f]=Promise.all(i.map((e=>n[e]||o(e)))).then((e=>(r(...e),d)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/page.css",revision:"2288c1d91838c71e78d3efe316645ff0"},{url:"css/style.min.css",revision:"16a4cc20ac2ecce2dfd8bc11dcf43592"},{url:"css/vue-pdf.css",revision:"df78b919e81b5a871066dead5925c13f"},{url:"index.html",revision:"5d641f5d8f63e1e9f241f4d780bc0692"},{url:"js/common.js",revision:"ae798d30af603c3cbf2fa6549151dd0b"},{url:"js/css.escape.js",revision:"fe4db48c9e3f272a6d12cf1312de889e"},{url:"js/smooth-scroll.min.js",revision:"53a7fcc785e987d5ed08302f36de6653"},{url:"zh-cn/index.html",revision:"f0c1060226251f59d44c845a3b88f931"}],{})}));
//# sourceMappingURL=service-worker.js.map