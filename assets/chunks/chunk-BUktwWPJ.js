import{r as l,j as m}from"./chunk-CguFfjte.js";var u={exports:{}},a={};/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s;function p(){if(s)return a;s=1;var t=l().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;return a.c=function(e){return t.H.useMemoCache(e)},a}var c;function R(){return c||(c=1,u.exports=p()),u.exports}var f=R();function x(t){const e=f.c(5);let{href:r,children:o}=t;if(r&&!r.startsWith("/"))throw new Error("Link href should start with /");r="/coffee/"+r;let i;e[0]!==r?(i=_(r),e[0]=r,e[1]=i):i=e[1],r=i;let n;return e[2]!==o||e[3]!==r?(n=m.jsx("a",{href:r,children:o}),e[2]=o,e[3]=r,e[4]=n):n=e[4],n}function _(t){return"/"+t.split("/").filter(Boolean).join("/")}export{x as L,f as c};
