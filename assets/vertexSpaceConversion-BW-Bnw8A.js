import{bt as L,bu as V,bv as G,bw as y,bx as d,by as T,bz as Y,bA as D,bp as H,n as I,bB as J,bC as K}from"./index-DX0rcHuW.js";import{j as Q}from"./mat3-Ck4GO2qT.js";import{e as W}from"./mat3f64-BBpwCtoL.js";import{o as X,e as b}from"./mat4f64-Dk4dwAN8.js";import{a as $}from"./spatialReferenceEllipsoidUtils-Bv0mQCFg.js";import{u as F}from"./computeTranslationToOriginAndRotation-B9BchKSd.js";import{c as N}from"./projectPointToVector-6lqiVL77.js";import{m as Z}from"./meshVertexSpaceUtils-UWZ_3JBG.js";import{i as w,e as h,f as B}from"./vec3-DxxvdsHs.js";import{logProjectionError as A,transformNormal as M,transformTangent as z,projectFromPCPF as _,projectNormalFromPCPF as nn,projectTangentFromPCPF as tn,projectToPCPF as rn,projectNormalToPCPF as on,projectTangentToPCPF as en}from"./projection-BJFZt5ZW.js";const p=()=>I.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function Cn(n,t,{vertexSpace:r,spatialReference:e}){if(r.type==="georeferenced"){const u=n;if(!N(t,u,e))return!1;const{origin:c}=r;return J(n,u,c),!0}const o=$(e),a=n;if(!N(t,a,o))return!1;const{origin:l}=r,s=U;if(!F(e,l,s,o))return!1;const i=T(U,s);return i!=null&&(K(n,a,i),!0)}function Pn(n,t,r){const{vertexSpace:e,transform:o,vertexAttributes:a}=n,l=R(n.spatialReference,r,m.SOURCE|m.TARGET);if(Z(e,t)&&(!o||L(o.localMatrix,X))&&V(l,1)){const{position:s,normal:i,tangent:u}=a,c=r==null?void 0:r.allowBufferReuse;return{position:c?s:s.slice(),normal:c?i:i==null?void 0:i.slice(),tangent:c?u:u==null?void 0:u.slice()}}switch(n.vertexSpace.type){case"local":return t.type==="local"?un(n,n.vertexSpace,t.origin,r):ln(n,n.vertexSpace,t.origin,r);case"georeferenced":return t.type==="local"?sn(n,n.vertexSpace,t.origin,r):an(n,n.vertexSpace,t.origin,r)}}function an({vertexAttributes:n,transform:t,spatialReference:r},{origin:e},o,a){const{position:l,normal:s,tangent:i}=t?E(n,t.localMatrix):n,u=new Float64Array(l.length);let c=l;if(e&&(c=w(u,c,e)),o){const v=G(q,o);c=w(u,c,v)}R(r,a,m.NONE);const g=a==null?void 0:a.allowBufferReuse;return{position:c!==n.position||g?c:c.slice(),normal:s!==n.normal||g?s:s==null?void 0:s.slice(),tangent:i!==n.tangent||g?i:i==null?void 0:i.slice()}}function ln({spatialReference:n,vertexAttributes:t,transform:r},{origin:e},o,a){const l=$(n);if(!F(n,e,f,l))return A(p(),n,l),null;r&&y(f,f,r.localMatrix),k(f,n,a,m.SOURCE);const s=new Float64Array(t.position.length),i=fn(t.position,f,n,s);if(!i)return null;const u=pn(i,s,t.normal,f,n);if(t.normal&&!u)return null;const c=mn(i,s,t.tangent,f,n);if(t.tangent&&!c)return null;if(o){const g=G(q,o);w(i,i,g)}return{position:i,normal:u,tangent:c}}function sn({vertexAttributes:n,spatialReference:t,transform:r},{origin:e},o,a){const l=$(t);if(!F(t,o,f,l))return A(p(),t,l),null;const s=1/R(t,a,m.TARGET);d(f,f,[s,s,s]);const i=T(x,f),{position:u,normal:c,tangent:g}=cn(n,e,r),v=new Float64Array(u.length),S=gn(u,t,i,v);if(!S)return null;const C=Q(vn,i),P=An(c,u,v,t,C,c!==n.normal?c:void 0);if(!P&&c)return null;const j=$n(g,u,v,t,C,g!==n.tangent?g:void 0);return!j&&g?null:{position:S,normal:P,tangent:j}}function cn(n,t,r){if(!t)return n;if(!r){const{position:o,normal:a,tangent:l}=n;return{position:w(new Float64Array(o.length),o,t),tangent:l,normal:a}}const e=E(n,r.localMatrix);return w(e.position,e.position,t),e}function un({vertexAttributes:n,spatialReference:t,transform:r},{origin:e},o,a){const l=$(t);if(!F(t,e,f,l))return A(p(),t,l),null;if(r&&y(f,f,r.localMatrix),!F(t,o,x,l))return A(p(),l,t),null;T(x,x);const s=y(f,x,f);return k(s,t,a,m.SOURCE|m.TARGET),E(n,s)}function E(n,t){const r=new Float64Array(n.position.length);h(r,n.position,t);const e=n.normal?new Float32Array(n.normal.length):null,o=n.tangent?new Float32Array(n.tangent.length):null;return e&&n.normal&&M(n.normal,e,t),o&&n.tangent&&z(n.tangent,o,t),{position:r,normal:e,tangent:o}}function fn(n,t,r,e){h(e,n,t);const o=new Float64Array(n.length);return _(e,o,r)?o:(A(p(),$(r),r),null)}function pn(n,t,r,e,o){if(r==null)return null;const a=new Float32Array(r.length);return M(r,a,e),nn(a,n,t,o,a)?a:(A(p(),$(o),o),null)}function mn(n,t,r,e,o){if(r==null)return null;const a=new Float32Array(r.length);return z(r,a,e),tn(a,n,t,o,a)?a:(A(p(),$(o),o),null)}function k(n,t,r,e){const o=R(t,r,e);o!==1&&d(n,n,[o,o,o])}function R(n,t,r){const e=!!(r&m.SOURCE),o=!!(r&m.TARGET),a=t==null?void 0:t.sourceUnit,l=t==null?void 0:t.targetUnit;if(!a&&!l)return 1;let s=O(a,n);!e&&a&&s!==1&&(p().warn("source unit conversion not supported"),s=1);let i=1/O(l,n);return!o&&l&&i!==1&&(p().warn("target unit conversion not supported"),i=1),s*i}function gn(n,t,r,e){const o=rn(n,t,e);if(!o)return A(p(),t,$(t)),null;const a=new Float64Array(o.length);return h(a,o,r),a}function An(n,t,r,e,o,a){if(n==null)return null;const l=a??new Float32Array(n.length);return on(n,t,r,e,l)?(B(l,l,o),l):(A(p(),e,$(e)),null)}function $n(n,t,r,e,o,a){if(n==null)return null;const l=a??new Float32Array(n.length);return en(n,t,r,e,l)?(B(l,l,o,4),l):(A(p(),e,$(e)),null)}function O(n,t){if(n==null)return 1;const r=Y(t);return 1/D(r,"meters",n)}const f=b(),x=b(),vn=W(),q=H(),U=b();var m;(function(n){n[n.NONE=0]="NONE",n[n.SOURCE=1]="SOURCE",n[n.TARGET=2]="TARGET"})(m||(m={}));export{Pn as M,Cn as N,O as X};
