const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/geometryEngineJSON-DeYwub9C.js","assets/geometryEngineBase-RmbNeFm7.js","assets/_commonjsHelpers-DCkdB7M8.js","assets/json-Wa8cmqdu.js"])))=>i.map(i=>d[i]);
import{ce as d,cf as h,cd as g,cg as m,aV as p,ch as y,ci as a,_ as w}from"./index-DX0rcHuW.js";import{n as _}from"./date-M6n_RqpC.js";class I{constructor(){this.code=null,this.description=null}}class b{constructor(e){this.error=new I,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function l(n){return new b(n)}class q{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function A(n){return new q(n)}const c=new Set;function F(n,e,t,f=!1){c.clear();for(const i in t){const r=n.get(i);if(!r)continue;const o=P(r,t[i]);if(c.add(r.name),r&&(f||r.editable)){const u=d(r,o);if(u)return l(h(u,r,o));e[r.name]=o}}for(const i of(n==null?void 0:n.requiredFields)??[])if(!c.has(i.name))return l(`missing required field "${i.name}"`);return null}function P(n,e){let t=e;return g(n)&&typeof e=="string"?t=parseFloat(e):m(n)&&e!=null&&typeof e!="string"?t=String(e):p(n)&&typeof e=="string"&&(t=_(e)),y(t)}let s;function G(n,e){if(!n||!a(e))return n;if("rings"in n||"paths"in n){if(s==null)throw new TypeError("geometry engine not loaded");return s.simplify(e,n)}return n}async function j(){return s==null&&(s=await w(()=>import("./geometryEngineJSON-DeYwub9C.js").then(n=>n.g),__vite__mapDeps([0,1,2,3]))),s}async function S(n,e){!a(n)||e!=="esriGeometryPolygon"&&e!=="esriGeometryPolyline"||await j()}export{A as d,l as f,S as j,F as p,G as y};
