import{dG as x,bp as i,dH as w,dk as G,jG as $,A as R,w as y,G as S}from"./index-DX0rcHuW.js";import{e as g,v as z}from"./vec2-C-4tM9Uv.js";import{e as T}from"./projectVectorToVector-DjKO2tJh.js";import{x as C}from"./elevationInfoUtils-JmMUMmCn.js";import{a as c}from"./quantityUtils-DSpmykXR.js";import{geodesicLength as j}from"./geometryEngine-C92iiwvG.js";import{w as v,j as H,v as Z,z as b}from"./geodesicUtils-BPlO99Nt.js";function Q(e,r,n,t){n.projectToRenderScreen(e,l),n.projectToRenderScreen(r,d),g(t,d,l),z(t,t)}function k(e,r,n,t,m=i()){const p=G(f,e);return p[2]=C(t,p,r,n)||0,t.renderCoordsHelper.toRenderCoords(p,r,m),m}function U(e,r,n,t){return t.type==="2d"?(o.x=e[0],o.y=e[1],o.spatialReference=r,t.toScreen(o)):(k(e,r,n,t,f),t.state.camera.projectToScreen(f,u),x(u[0],u[1]))}const o=T(0,0,0,null),f=i(),l=$(),d=$(),u=w();function V(e){return R(e)&&v(e)||y(e)}function h(e,r,n,...t){return R(e)&&v(e)?r.apply(void 0,t):y(e)?n.apply(void 0,t):null}const W=1e5;function X(e){const{spatialReference:r}=e;return h(r,B,D,e)}function Y(e,r){if(!S(e.spatialReference,r.spatialReference))return null;const{spatialReference:n}=e;return s[0]=e.x,s[1]=e.y,s[2]=e.hasZ?e.z:0,a[0]=r.x,a[1]=r.y,a[2]=r.hasZ?r.z:0,q(s,a,n)}function q(e,r,n){return h(n,A,L,e,r,n)}function A(e,r,n){return c(H(F,e,r,n).distance,"meters")}function L(e,r,n){return c(j(E(e,r,n),"meters"),"meters")}function B(e){return c(Z([e],"meters")[0],"meters")}function D(e){return c(j(e,"meters"),"meters")}function E(e,r,n){return{type:"polyline",spatialReference:n,paths:[[[...e],[...r]]]}}const F=new b,s=i(),a=i();export{Q as a,U as d,Y as f,W as i,k as l,X as m,h as p,V as r,q as u};
