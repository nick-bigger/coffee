import{r as l,j as a}from"../chunks/chunk-CfLmq_bh.js";import{c as j,a as i,L as k}from"../chunks/chunk-CDPAxeXJ.js";import{f as m,M as g,r as b}from"../chunks/chunk-C1G6k6kV.js";/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),w=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,s,r)=>r?r.toUpperCase():s.toLowerCase()),p=t=>{const e=w(t);return e.charAt(0).toUpperCase()+e.slice(1)},u=(...t)=>t.filter((e,s,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===s).join(" ").trim(),y=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var N={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=l.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:s=2,absoluteStrokeWidth:r,className:o="",children:n,iconNode:d,...c},x)=>l.createElement("svg",{ref:x,...N,width:e,height:e,stroke:t,strokeWidth:r?Number(s)*24/Number(e):s,className:u("lucide",o),...!n&&!y(c)&&{"aria-hidden":"true"},...c},[...d.map(([f,h])=>l.createElement(f,h)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=(t,e)=>{const s=l.forwardRef(({className:r,...o},n)=>l.createElement(L,{ref:n,iconNode:e,className:u(`lucide-${C(p(t))}`,`lucide-${t}`,r),...o}));return s.displayName=p(t),s};/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],A=P("link",$);function M(t){const e=j.c(4),{articles:s}=t;let r;e[0]!==s?(r=s.map(v),e[0]=s,e[1]=r):r=e[1];let o;return e[2]!==r?(o=a.jsx(k,{children:a.jsx("article",{className:"mb-12 space-y-24",children:r})}),e[2]=r,e[3]=o):o=e[3],o}function v(t){return a.jsxs("section",{className:"space-y-4",children:[a.jsxs("div",{children:[a.jsxs("div",{children:[a.jsx(i,{href:t.link,target:"_blank",className:"text-lg uppercase underline decoration-[0.2px] underline-offset-[4px]",children:t.title}),a.jsx(i,{className:"ml-1",href:`/articles/${t.slug}`,title:`Permanent link to ${t.title}`,children:a.jsx(A,{className:"mx-2 mb-1 inline justify-center",size:14})})]}),a.jsxs("small",{children:[m(t.pubDate,"PPP")," at"," ",m(t.pubDate,"p")," CST"]})]}),a.jsx(g,{remarkPlugins:[b],components:{a(e){return a.jsx("a",{className:"text-sm leading-[23px] text-blue-300",...e})},p(e){return a.jsx("p",{className:"leading-[23px]",...e})},blockquote(e){return a.jsx("blockquote",{className:"border-l-1 border-[rgb(74,68,68)] pl-4",...e})}},children:t.content})]},t.slug)}export{M as Page};
