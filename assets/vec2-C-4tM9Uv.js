import{br as b,bs as q}from"./index-DX0rcHuW.js";function p(n,t){return n[0]=t[0],n[1]=t[1],n}function x(n,t,u){return n[0]=t,n[1]=u,n}function g(n,t,u){return n[0]=t[0]+u[0],n[1]=t[1]+u[1],n}function i(n,t,u){return n[0]=t[0]-u[0],n[1]=t[1]-u[1],n}function f(n,t,u){return n[0]=t[0]*u[0],n[1]=t[1]*u[1],n}function M(n,t,u){return n[0]=t[0]/u[0],n[1]=t[1]/u[1],n}function v(n,t){return n[0]=Math.ceil(t[0]),n[1]=Math.ceil(t[1]),n}function y(n,t){return n[0]=Math.floor(t[0]),n[1]=Math.floor(t[1]),n}function _(n,t,u){return n[0]=Math.min(t[0],u[0]),n[1]=Math.min(t[1],u[1]),n}function j(n,t,u){return n[0]=Math.max(t[0],u[0]),n[1]=Math.max(t[1],u[1]),n}function A(n,t){return n[0]=Math.round(t[0]),n[1]=Math.round(t[1]),n}function P(n,t,u){return n[0]=t[0]*u,n[1]=t[1]*u,n}function S(n,t,u,o){return n[0]=t[0]+u[0]*o,n[1]=t[1]+u[1]*o,n}function h(n,t){const u=t[0]-n[0],o=t[1]-n[1];return Math.sqrt(u*u+o*o)}function l(n,t){const u=t[0]-n[0],o=t[1]-n[1];return u*u+o*o}function d(n){const t=n[0],u=n[1];return Math.sqrt(t*t+u*u)}function m(n){const t=n[0],u=n[1];return t*t+u*u}function z(n,t){return n[0]=-t[0],n[1]=-t[1],n}function D(n,t){return n[0]=1/t[0],n[1]=1/t[1],n}function I(n,t){const u=t[0],o=t[1];let e=u*u+o*o;return e>0&&(e=1/Math.sqrt(e),n[0]=t[0]*e,n[1]=t[1]*e),n}function L(n,t){return n[0]*t[0]+n[1]*t[1]}function O(n,t,u){const o=t[0]*u[1]-t[1]*u[0];return n[0]=n[1]=0,n[2]=o,n}function $(n,t,u,o){const e=t[0],r=t[1];return n[0]=e+o*(u[0]-e),n[1]=r+o*(u[1]-r),n}function E(n,t){t=t||1;const u=2*b()*Math.PI;return n[0]=Math.cos(u)*t,n[1]=Math.sin(u)*t,n}function T(n,t,u){const o=t[0],e=t[1];return n[0]=u[0]*o+u[2]*e,n[1]=u[1]*o+u[3]*e,n}function k(n,t,u){const o=t[0],e=t[1];return n[0]=u[0]*o+u[2]*e+u[4],n[1]=u[1]*o+u[3]*e+u[5],n}function w(n,t,u){const o=t[0],e=t[1];return n[0]=u[0]*o+u[3]*e+u[6],n[1]=u[1]*o+u[4]*e+u[7],n}function B(n,t,u){const o=t[0],e=t[1];return n[0]=u[0]*o+u[4]*e+u[12],n[1]=u[1]*o+u[5]*e+u[13],n}function C(n,t,u,o){const e=t[0]-u[0],r=t[1]-u[1],a=Math.sin(o),c=Math.cos(o);return n[0]=e*c-r*a+u[0],n[1]=e*a+r*c+u[1],n}function F(n,t){const u=n[0],o=n[1],e=t[0],r=t[1];let a=u*u+o*o;a>0&&(a=1/Math.sqrt(a));let c=e*e+r*r;c>0&&(c=1/Math.sqrt(c));const s=(u*e+o*r)*a*c;return s>1?0:s<-1?Math.PI:Math.acos(s)}function G(n){return"vec2("+n[0]+", "+n[1]+")"}function H(n,t){return n[0]===t[0]&&n[1]===t[1]}function J(n,t){const u=n[0],o=n[1],e=t[0],r=t[1],a=q();return Math.abs(u-e)<=a*Math.max(1,Math.abs(u),Math.abs(e))&&Math.abs(o-r)<=a*Math.max(1,Math.abs(o),Math.abs(r))}function K(n,t,u,o,e){let r=t[0]-u[0],a=t[1]-u[1];const c=(o[0]*r+o[1]*a)*(e-1);return r=o[0]*c,a=o[1]*c,n[0]=t[0]+r,n[1]=t[1]+a,n}const N=d,Q=i,R=f,U=M,V=h,W=l,X=m;Object.freeze(Object.defineProperty({__proto__:null,add:g,angle:F,ceil:v,copy:p,cross:O,dist:V,distance:h,div:U,divide:M,dot:L,equals:J,exactEquals:H,floor:y,inverse:D,len:N,length:d,lerp:$,max:j,min:_,mul:R,multiply:f,negate:z,normalize:I,projectAndScale:K,random:E,rotate:C,round:A,scale:P,scaleAndAdd:S,set:x,sqrDist:W,sqrLen:X,squaredDistance:l,squaredLength:m,str:G,sub:Q,subtract:i,transformMat2:T,transformMat2d:k,transformMat3:w,transformMat4:B},Symbol.toStringTag,{value:"Module"}));export{Q as B,H as E,V as G,C as I,F as L,j as M,T as P,k as S,J as T,$ as _,l as b,S as d,i as e,_ as f,L as j,K as k,P as l,h as m,x as o,m as p,d as q,p as r,g as u,I as v,z as x,O as y};
