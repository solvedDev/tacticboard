var V=Object.defineProperty,I=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var k=(s,e,r)=>e in s?V(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r,C=(s,e)=>{for(var r in e||(e={}))A.call(e,r)&&k(s,r,e[r]);if(N)for(var r of N(e))E.call(e,r)&&k(s,r,e[r]);return s},O=(s,e)=>I(s,z(e));import{d as w,o as d,c as p,r as F,a as y,u as $,b as K,w as S,t as T,e as q,v as M,f as W,n as a,g as o,h as j,i as U,j as G,k as i,F as h,l as v,m as g,p as B,q as L,s as _,x as H}from"./vendor.0a43d640.js";const J=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function u(t){if(t.ep)return;t.ep=!0;const l=r(t);fetch(t.href,l)}};J();const x=w({emits:["click"],setup(s,{emit:e}){return(r,u)=>(d(),p("button",{class:"bg-white m-2 px-3 py-1 drop-shadow-lg hover:drop-shadow-2xl rounded-lg active:bg-lime-100 focus:ring focus:ring-lime-800",onClick:u[0]||(u[0]=t=>e("click"))},[F(r.$slots,"default")]))}}),Q={key:0,class:"touch-none"},D=w({props:{isOpponent:{type:Boolean,default:!1},playerNumber:null},setup(s){const e=s,r=y(null),u=y(null),t=e.playerNumber,l=$(e.isOpponent?`opponent#${t}`:`player#${t}`,{playerNumber:t,position:{x:e.isOpponent?window.innerWidth-60:12,y:60}}),n=y("readonly"),m=y(l.value.playerNumber),{style:P}=K(r,{initialValue:l.value.position,onStart:()=>n.value==="readonly"?void 0:!1,onEnd:f=>{l.value={playerNumber:m.value,position:f}},preventDefault:!0,stopPropagation:!0});return S(n,()=>{n.value==="edit"&&U(()=>{var f;return(f=u.value)==null?void 0:f.focus()})}),S(m,()=>{l.value=O(C({},l.value),{playerNumber:m.value})}),(f,c)=>(d(),p("div",{ref_key:"player",ref:r,style:a(o(P)),class:j(["cursor-pointer select-none touch-none absolute h-12 w-12 border border-2 rounded-full bg-white grid content-center text-center",{"border-lime-900 text-lime-900 bg-white":!e.isOpponent,"border-white text-white bg-red-800":e.isOpponent}]),onDblclick:c[3]||(c[3]=b=>n.value=n.value==="readonly"?"edit":"readonly")},[n.value==="readonly"?(d(),p("span",Q,T(m.value),1)):q((d(),p("input",{key:1,class:"w-8 touch-none","onUpdate:modelValue":c[0]||(c[0]=b=>m.value=b),ref_key:"editInput",ref:u,onKeydown:c[1]||(c[1]=W(b=>n.value="readonly",["enter"])),onBlur:c[2]||(c[2]=b=>n.value="readonly"),type:"number"},null,544)),[[M,m.value]])],38))}}),R=w({setup(s){const{width:e,height:r}=G();return(u,t)=>(d(),p(h,null,[i("div",{style:a({left:`${o(e)/2}px`}),class:"absolute w-[2px] h-full bg-white"},null,4),i("div",{style:a({left:`calc(${o(e)/2}px - 9rem)`,top:`calc(${o(r)/2}px - 9rem)`}),class:"absolute w-[18rem] h-[18rem] rounded-full border border-2 border-white"},null,4),i("div",{style:a({left:`calc(${o(e)/2}px - 0.5rem)`,top:`calc(${o(r)/2}px - 0.5rem)`}),class:"absolute w-[1rem] h-[1rem] rounded-full bg-white"},null,4),i("div",{style:a({left:"8rem",top:`calc(${o(r)/2}px - 6rem)`}),class:"absolute w-[12rem] h-[12rem] rounded-full border border-2 border-white"},null,4),i("div",{style:a({left:"4rem",top:`calc(${o(r)/2}px - 12rem)`}),class:"absolute w-[12rem] h-[24rem] bg-lime-600 border border-2 border-white"},null,4),i("div",{style:a({left:"4rem",top:`calc(${o(r)/2}px - 7rem)`}),class:"absolute w-[4rem] h-[14rem] border border-2 border-white"},null,4),i("div",{style:a({left:"12rem",top:`calc(${o(r)/2}px - 0.5rem)`}),class:"absolute w-[1rem] h-[1rem] rounded-full bg-white"},null,4),i("div",{style:a({left:`calc(${o(e)}px - 20rem)`,top:`calc(${o(r)/2}px - 6rem)`}),class:"absolute w-[12rem] h-[12rem] rounded-full border border-2 border-white"},null,4),i("div",{style:a({left:`calc(${o(e)}px - 16rem)`,top:`calc(${o(r)/2}px - 12rem)`}),class:"absolute w-[12rem] h-[24rem] bg-lime-600 border border-2 border-white"},null,4),i("div",{style:a({left:`calc(${o(e)}px - 8rem)`,top:`calc(${o(r)/2}px - 7rem)`}),class:"absolute w-[4rem] h-[14rem] border border-2 border-white"},null,4),i("div",{style:a({left:`calc(${o(e)}px - 13rem)`,top:`calc(${o(r)/2}px - 0.5rem)`}),class:"absolute w-[1rem] h-[1rem] rounded-full bg-white"},null,4)],64))}});const X=_("+"),Y=_("Clear"),Z=_(" + "),ee=w({setup(s){const e=$("playerCount",0),r=$("opponentPlayerCount",0);function u(){e.value=0,r.value=0}return(t,l)=>(d(),p(h,null,[v(R),v(x,{onClick:l[0]||(l[0]=n=>e.value++)},{default:g(()=>[X]),_:1}),v(x,{onClick:u},{default:g(()=>[Y]),_:1}),v(x,{class:"float-right",onClick:l[1]||(l[1]=n=>r.value++)},{default:g(()=>[Z]),_:1}),(d(!0),p(h,null,B(o(e),n=>(d(),L(D,{playerNumber:n},null,8,["playerNumber"]))),256)),(d(!0),p(h,null,B(o(r),n=>(d(),L(D,{playerNumber:n,isOpponent:!0},null,8,["playerNumber"]))),256))],64))}});H(ee).mount("#app");
