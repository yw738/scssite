import{e as P,m as S,aB as _,h as B,aG as w,aH as k,U as T,aI as N,u as D,c as z,_ as x,aa as A,N as I,Y as W,aJ as H,M as $}from"./CwMojux5.js";import{_ as d,k as E,l as M,B as b}from"./DaoMEhcv.js";import{k as R,b as j,l as F,D as f,F as G}from"./DMLcG8TL.js";const L=e=>{const{componentCls:o,popoverBg:r,popoverColor:t,width:a,fontWeightStrong:s,popoverPadding:l,boxShadowSecondary:c,colorTextHeading:g,borderRadiusLG:u,zIndexPopup:p,marginXS:m,colorBgElevated:n}=e;return[{[o]:d(d({},B(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:p,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--antd-arrow-background-color":n,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${o}-content`]:{position:"relative"},[`${o}-inner`]:{backgroundColor:r,backgroundClip:"padding-box",borderRadius:u,boxShadow:c,padding:l},[`${o}-title`]:{minWidth:a,marginBottom:m,color:g,fontWeight:s},[`${o}-inner-content`]:{color:t}})},w(e,{colorBg:"var(--antd-arrow-background-color)"}),{[`${o}-pure`]:{position:"relative",maxWidth:"none",[`${o}-content`]:{display:"inline-block"}}}]},O=e=>{const{componentCls:o}=e;return{[o]:k.map(r=>{const t=e[`${r}-6`];return{[`&${o}-${r}`]:{"--antd-arrow-background-color":t,[`${o}-inner`]:{backgroundColor:t},[`${o}-arrow`]:{background:"transparent"}}}})}},J=e=>{const{componentCls:o,lineWidth:r,lineType:t,colorSplit:a,paddingSM:s,controlHeight:l,fontSize:c,lineHeight:g,padding:u}=e,p=l-Math.round(c*g),m=p/2,n=p/2-r,i=u;return{[o]:{[`${o}-inner`]:{padding:0},[`${o}-title`]:{margin:0,padding:`${m}px ${i}px ${n}px`,borderBottom:`${r}px ${t} ${a}`},[`${o}-inner-content`]:{padding:`${s}px ${i}px`}}}},U=P("Popover",e=>{const{colorBgElevated:o,colorText:r,wireframe:t}=e,a=S(e,{popoverBg:o,popoverColor:r,popoverPadding:12});return[L(a),O(a),t&&J(a),_(a,"zoom-big")]},e=>{let{zIndexPopupBase:o}=e;return{zIndexPopup:o+30,width:177}}),V=()=>d(d({},H()),{content:b(),title:b()}),X=R({compatConfig:{MODE:3},name:"APopover",inheritAttrs:!1,props:T(V(),d(d({},N()),{trigger:"hover",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1})),setup(e,o){let{expose:r,slots:t,attrs:a}=o;const s=j();M(e.visible===void 0),r({getPopupDomNode:()=>{var n,i;return(i=(n=s.value)===null||n===void 0?void 0:n.getPopupDomNode)===null||i===void 0?void 0:i.call(n)}});const{prefixCls:l,configProvider:c}=D("popover",e),[g,u]=U(l),p=F(()=>c.getPrefixCls()),m=()=>{var n,i;const{title:v=$((n=t.title)===null||n===void 0?void 0:n.call(t)),content:h=$((i=t.content)===null||i===void 0?void 0:i.call(t))}=e,C=!!(Array.isArray(v)?v.length:v),y=!!(Array.isArray(h)?h.length:v);return!C&&!y?null:f(G,null,[C&&f("div",{class:`${l.value}-title`},[v]),f("div",{class:`${l.value}-inner-content`},[h])])};return()=>{const n=z(e.overlayClassName,u.value);return g(f(W,x(x(x({},I(e,["title","content"])),a),{},{prefixCls:l.value,ref:s,overlayClassName:n,transitionName:A(p.value,"zoom-big",e.transitionName),"data-popover-inject":!0}),{title:m,default:t.default}))}}}),Q=E(X);export{Q as _};
