import{I as _,e as D,aO as L,am as w,aP as A,aQ as R,aq as N,aR as T,aS as k,aT as B,u as F,f as M,_ as h,P as y,c as x}from"./CwMojux5.js";import{D as $,r as q,p as H,w as K,i as Q,l,k as I}from"./DMLcG8TL.js";import{_ as s,A as b,m as C}from"./DaoMEhcv.js";var V={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"};function O(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},o=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),o.forEach(function(a){W(t,a,n[a])})}return t}function W(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var P=function(e,n){var o=O({},e,n.attrs);return $(_,O({},o,{icon:V}),null)};P.displayName="LoadingOutlined";P.inheritAttrs=!1;function G(t){const e=Symbol("contextKey");return{useProvide:(a,c)=>{const r=q({});return H(e,r),K(()=>{s(r,a,c||{})}),r},useInject:()=>Q(e,t)||{}}}const J=t=>{const{componentCls:e}=t;return{[e]:{display:"inline-flex","&-block":{display:"flex",width:"100%"},"&-vertical":{flexDirection:"column"}}}},U=t=>{const{componentCls:e}=t;return{[e]:{display:"inline-flex","&-rtl":{direction:"rtl"},"&-vertical":{flexDirection:"column"},"&-align":{flexDirection:"column","&-center":{alignItems:"center"},"&-start":{alignItems:"flex-start"},"&-end":{alignItems:"flex-end"},"&-baseline":{alignItems:"baseline"}},[`${e}-item`]:{"&:empty":{display:"none"}}}}},X=D("Space",t=>[U(t),J(t)]);var Y="[object Map]",Z="[object Set]",tt=Object.prototype,et=tt.hasOwnProperty;function j(t){if(t==null)return!0;if(L(t)&&(w(t)||typeof t=="string"||typeof t.splice=="function"||A(t)||R(t)||N(t)))return!t.length;var e=T(t);if(e==Y||e==Z)return!t.size;if(k(t))return!B(t).length;for(var n in t)if(et.call(t,n))return!1;return!0}const nt=()=>({compactSize:String,compactDirection:y.oneOf(b("horizontal","vertical")).def("horizontal"),isFirstItem:C(),isLastItem:C()}),m=G(null),mt=(t,e)=>{const n=m.useInject(),o=l(()=>{if(!n||j(n))return"";const{compactDirection:a,isFirstItem:c,isLastItem:r}=n,i=a==="vertical"?"-vertical-":"-";return x({[`${t.value}-compact${i}item`]:!0,[`${t.value}-compact${i}first-item`]:c,[`${t.value}-compact${i}last-item`]:r,[`${t.value}-compact${i}item-rtl`]:e.value==="rtl"})});return{compactSize:l(()=>n==null?void 0:n.compactSize),compactDirection:l(()=>n==null?void 0:n.compactDirection),compactItemClassnames:o}},ut=I({name:"NoCompactStyle",setup(t,e){let{slots:n}=e;return m.useProvide(null),()=>{var o;return(o=n.default)===null||o===void 0?void 0:o.call(n)}}}),ot=()=>({prefixCls:String,size:{type:String},direction:y.oneOf(b("horizontal","vertical")).def("horizontal"),align:y.oneOf(b("start","end","center","baseline")),block:{type:Boolean,default:void 0}}),at=I({name:"CompactItem",props:nt(),setup(t,e){let{slots:n}=e;return m.useProvide(t),()=>{var o;return(o=n.default)===null||o===void 0?void 0:o.call(n)}}});I({name:"ASpaceCompact",inheritAttrs:!1,props:ot(),setup(t,e){let{attrs:n,slots:o}=e;const{prefixCls:a,direction:c}=F("space-compact",t),r=m.useInject(),[i,u]=X(a),z=l(()=>x(a.value,u.value,{[`${a.value}-rtl`]:c.value==="rtl",[`${a.value}-block`]:t.block,[`${a.value}-vertical`]:t.direction==="vertical"}));return()=>{var d;const p=M(((d=o.default)===null||d===void 0?void 0:d.call(o))||[]);return p.length===0?null:i($("div",h(h({},n),{},{class:[z.value,n.class]}),[p.map((f,g)=>{var v;const E=f&&f.key||`${a.value}-item-${g}`,S=!r||j(r);return $(at,{key:E,compactSize:(v=t.size)!==null&&v!==void 0?v:"middle",compactDirection:t.direction,isFirstItem:g===0&&(S||(r==null?void 0:r.isFirstItem)),isLastItem:g===p.length-1&&(S||(r==null?void 0:r.isLastItem))},{default:()=>[f]})})]))}}});function rt(t,e,n){const{focusElCls:o,focus:a,borderElCls:c}=n,r=c?"> *":"",i=["hover",a?"focus":null,"active"].filter(Boolean).map(u=>`&:${u} ${r}`).join(",");return{[`&-item:not(${e}-last-item)`]:{marginInlineEnd:-t.lineWidth},"&-item":s(s({[i]:{zIndex:2}},o?{[`&${o}`]:{zIndex:2}}:{}),{[`&[disabled] ${r}`]:{zIndex:0}})}}function it(t,e,n){const{borderElCls:o}=n,a=o?`> ${o}`:"";return{[`&-item:not(${e}-first-item):not(${e}-last-item) ${a}`]:{borderRadius:0},[`&-item:not(${e}-last-item)${e}-first-item`]:{[`& ${a}, &${t}-sm ${a}, &${t}-lg ${a}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&-item:not(${e}-first-item)${e}-last-item`]:{[`& ${a}, &${t}-sm ${a}, &${t}-lg ${a}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}}}function dt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{focus:!0};const{componentCls:n}=t,o=`${n}-compact`;return{[o]:s(s({},rt(t,o,e)),it(n,o,e))}}export{P as L,ut as N,G as c,dt as g,mt as u};