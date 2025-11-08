import{r as i,j as a}from"../chunks/chunk-CfLmq_bh.js";import{c as j,a as c,L as k}from"../chunks/chunk-CDPAxeXJ.js";import{f as m,M as C}from"../chunks/chunk-Cwclk6Ef.js";/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),w=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,s)=>s?s.toUpperCase():r.toLowerCase()),p=e=>{const t=w(e);return t.charAt(0).toUpperCase()+t.slice(1)},u=(...e)=>e.filter((t,r,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===r).join(" ").trim(),b=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=i.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:s,className:o="",children:n,iconNode:d,...l},f)=>i.createElement("svg",{ref:f,...y,width:t,height:t,stroke:e,strokeWidth:s?Number(r)*24/Number(t):r,className:u("lucide",o),...!n&&!b(l)&&{"aria-hidden":"true"},...l},[...d.map(([h,x])=>i.createElement(h,x)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=(e,t)=>{const r=i.forwardRef(({className:s,...o},n)=>i.createElement(L,{ref:n,iconNode:t,className:u(`lucide-${g(p(e))}`,`lucide-${e}`,s),...o}));return r.displayName=p(e),r};/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],N=$("link",A);function M(e){const t=j.c(4),{articles:r}=e;let s;t[0]!==r?(s=r.map(P),t[0]=r,t[1]=s):s=t[1];let o;return t[2]!==s?(o=a.jsx(k,{children:a.jsx("article",{className:"mb-12 space-y-24",children:s})}),t[2]=s,t[3]=o):o=t[3],o}function P(e){return a.jsxs("section",{className:"space-y-4",children:[a.jsxs("div",{children:[a.jsxs("div",{children:[a.jsx(c,{href:e.link,target:"_blank",className:"text-lg uppercase underline decoration-[0.2px] underline-offset-[4px]",children:e.title}),a.jsx(c,{className:"ml-1",href:`/articles/${e.slug}`,title:`Permanent link to ${e.title}`,children:a.jsx(N,{className:"mx-2 mb-1 inline justify-center",size:14})})]}),a.jsxs("small",{children:[m(e.pubDate,"PPP")," at"," ",m(e.pubDate,"p")," CST"]})]}),a.jsx(C,{children:e.content})]},e.slug)}export{M as Page};
