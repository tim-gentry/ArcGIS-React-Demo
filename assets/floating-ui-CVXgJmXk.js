import{D as yt,i as Ft}from"./jsxFactory-DmHi7Kb2.js";import{g as Xt}from"./dom-Dv5tDaqe.js";import{d as qt}from"./debounce-C5YDvsuO.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.2
 */const Mt=["top","right","bottom","left"],xt=["start","end"],vt=Mt.reduce((t,e)=>t.concat(e,e+"-"+xt[0],e+"-"+xt[1]),[]),X=Math.min,U=Math.max,et=Math.round,tt=Math.floor,V=t=>({x:t,y:t}),Gt={left:"right",right:"left",bottom:"top",top:"bottom"},Kt={start:"end",end:"start"};function dt(t,e,n){return U(t,X(e,n))}function j(t,e){return typeof t=="function"?t(e):t}function W(t){return t.split("-")[0]}function B(t){return t.split("-")[1]}function kt(t){return t==="x"?"y":"x"}function gt(t){return t==="y"?"height":"width"}function st(t){return["top","bottom"].includes(W(t))?"y":"x"}function pt(t){return kt(st(t))}function Bt(t,e,n){n===void 0&&(n=!1);const o=B(t),i=pt(t),s=gt(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=ot(r)),[r,ot(r)]}function Jt(t){const e=ot(t);return[nt(t),e,nt(e)]}function nt(t){return t.replace(/start|end/g,e=>Kt[e])}function Qt(t,e,n){const o=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?s:r;default:return[]}}function Zt(t,e,n,o){const i=B(t);let s=Qt(W(t),n==="start",o);return i&&(s=s.map(r=>r+"-"+i),e&&(s=s.concat(s.map(nt)))),s}function ot(t){return t.replace(/left|right|bottom|top/g,e=>Gt[e])}function te(t){return{top:0,right:0,bottom:0,left:0,...t}}function Nt(t){return typeof t!="number"?te(t):{top:t,right:t,bottom:t,left:t}}function it(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function bt(t,e,n){let{reference:o,floating:i}=t;const s=st(e),r=pt(e),c=gt(r),l=W(e),a=s==="y",d=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,h=o[c]/2-i[c]/2;let f;switch(l){case"top":f={x:d,y:o.y-i.height};break;case"bottom":f={x:d,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:u};break;case"left":f={x:o.x-i.width,y:u};break;default:f={x:o.x,y:o.y}}switch(B(e)){case"start":f[r]-=h*(n&&a?-1:1);break;case"end":f[r]+=h*(n&&a?-1:1);break}return f}const ee=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,c=s.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(e));let a=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:u}=bt(a,o,l),h=o,f={},m=0;for(let g=0;g<c.length;g++){const{name:w,fn:p}=c[g],{x:y,y:x,data:b,reset:v}=await p({x:d,y:u,initialPlacement:o,placement:h,strategy:i,middlewareData:f,rects:a,platform:r,elements:{reference:t,floating:e}});d=y??d,u=x??u,f={...f,[w]:{...f[w],...b}},v&&m<=50&&(m++,typeof v=="object"&&(v.placement&&(h=v.placement),v.rects&&(a=v.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):v.rects),{x:d,y:u}=bt(a,h,l)),g=-1)}return{x:d,y:u,placement:h,strategy:i,middlewareData:f}};async function K(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:r,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:h=!1,padding:f=0}=j(e,t),m=Nt(f),w=c[h?u==="floating"?"reference":"floating":u],p=it(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(w)))==null||n?w:w.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:a,rootBoundary:d,strategy:l})),y=u==="floating"?{x:o,y:i,width:r.floating.width,height:r.floating.height}:r.reference,x=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),b=await(s.isElement==null?void 0:s.isElement(x))?await(s.getScale==null?void 0:s.getScale(x))||{x:1,y:1}:{x:1,y:1},v=it(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:y,offsetParent:x,strategy:l}):y);return{top:(p.top-v.top+m.top)/b.y,bottom:(v.bottom-p.bottom+m.bottom)/b.y,left:(p.left-v.left+m.left)/b.x,right:(v.right-p.right+m.right)/b.x}}const ne=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:s,platform:r,elements:c,middlewareData:l}=e,{element:a,padding:d=0}=j(t,e)||{};if(a==null)return{};const u=Nt(d),h={x:n,y:o},f=pt(i),m=gt(f),g=await r.getDimensions(a),w=f==="y",p=w?"top":"left",y=w?"bottom":"right",x=w?"clientHeight":"clientWidth",b=s.reference[m]+s.reference[f]-h[f]-s.floating[m],v=h[f]-s.reference[f],R=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a));let O=R?R[x]:0;(!O||!await(r.isElement==null?void 0:r.isElement(R)))&&(O=c.floating[x]||s.floating[m]);const T=b/2-v/2,F=O/2-g[m]/2-1,A=X(u[p],F),E=X(u[y],F),P=A,I=O-g[m]-E,C=O/2-g[m]/2+T,M=dt(P,C,I),k=!l.arrow&&B(i)!=null&&C!==M&&s.reference[m]/2-(C<P?A:E)-g[m]/2<0,$=k?C<P?C-P:C-I:0;return{[f]:h[f]+$,data:{[f]:M,centerOffset:C-M-$,...k&&{alignmentOffset:$}},reset:k}}});function oe(t,e,n){return(t?[...n.filter(i=>B(i)===t),...n.filter(i=>B(i)!==t)]:n.filter(i=>W(i)===i)).filter(i=>t?B(i)===t||(e?nt(i)!==i:!1):!0)}const ie=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i;const{rects:s,middlewareData:r,placement:c,platform:l,elements:a}=e,{crossAxis:d=!1,alignment:u,allowedPlacements:h=vt,autoAlignment:f=!0,...m}=j(t,e),g=u!==void 0||h===vt?oe(u||null,f,h):h,w=await K(e,m),p=((n=r.autoPlacement)==null?void 0:n.index)||0,y=g[p];if(y==null)return{};const x=Bt(y,s,await(l.isRTL==null?void 0:l.isRTL(a.floating)));if(c!==y)return{reset:{placement:g[0]}};const b=[w[W(y)],w[x[0]],w[x[1]]],v=[...((o=r.autoPlacement)==null?void 0:o.overflows)||[],{placement:y,overflows:b}],R=g[p+1];if(R)return{data:{index:p+1,overflows:v},reset:{placement:R}};const O=v.map(A=>{const E=B(A.placement);return[A.placement,E&&d?A.overflows.slice(0,2).reduce((P,I)=>P+I,0):A.overflows[0],A.overflows]}).sort((A,E)=>A[1]-E[1]),F=((i=O.filter(A=>A[2].slice(0,B(A[0])?2:3).every(E=>E<=0))[0])==null?void 0:i[0])||O[0][0];return F!==c?{data:{index:p+1,overflows:v},reset:{placement:F}}:{}}}},re=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:s,rects:r,initialPlacement:c,platform:l,elements:a}=e,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:h,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:g=!0,...w}=j(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const p=W(i),y=W(c)===c,x=await(l.isRTL==null?void 0:l.isRTL(a.floating)),b=h||(y||!g?[ot(c)]:Jt(c));!h&&m!=="none"&&b.push(...Zt(c,g,m,x));const v=[c,...b],R=await K(e,w),O=[];let T=((o=s.flip)==null?void 0:o.overflows)||[];if(d&&O.push(R[p]),u){const P=Bt(i,r,x);O.push(R[P[0]],R[P[1]])}if(T=[...T,{placement:i,overflows:O}],!O.every(P=>P<=0)){var F,A;const P=(((F=s.flip)==null?void 0:F.index)||0)+1,I=v[P];if(I)return{data:{index:P,overflows:T},reset:{placement:I}};let C=(A=T.filter(M=>M.overflows[0]<=0).sort((M,k)=>M.overflows[1]-k.overflows[1])[0])==null?void 0:A.placement;if(!C)switch(f){case"bestFit":{var E;const M=(E=T.map(k=>[k.placement,k.overflows.filter($=>$>0).reduce(($,Yt)=>$+Yt,0)]).sort((k,$)=>k[1]-$[1])[0])==null?void 0:E[0];M&&(C=M);break}case"initialPlacement":C=c;break}if(i!==C)return{reset:{placement:C}}}return{}}}};function Ot(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function At(t){return Mt.some(e=>t[e]>=0)}const se=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=j(t,e);switch(o){case"referenceHidden":{const s=await K(e,{...i,elementContext:"reference"}),r=Ot(s,n.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:At(r)}}}case"escaped":{const s=await K(e,{...i,altBoundary:!0}),r=Ot(s,n.floating);return{data:{escapedOffsets:r,escaped:At(r)}}}default:return{}}}}};async function ce(t,e){const{placement:n,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=W(n),c=B(n),l=st(n)==="y",a=["left","top"].includes(r)?-1:1,d=s&&l?-1:1,u=j(e,t);let{mainAxis:h,crossAxis:f,alignmentAxis:m}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return c&&typeof m=="number"&&(f=c==="end"?m*-1:m),l?{x:f*d,y:h*a}:{x:h*a,y:f*d}}const le=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:s,placement:r,middlewareData:c}=e,l=await ce(e,t);return r===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:i+l.x,y:s+l.y,data:{...l,placement:r}}}}},ae=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:c={fn:w=>{let{x:p,y}=w;return{x:p,y}}},...l}=j(t,e),a={x:n,y:o},d=await K(e,l),u=st(W(i)),h=kt(u);let f=a[h],m=a[u];if(s){const w=h==="y"?"top":"left",p=h==="y"?"bottom":"right",y=f+d[w],x=f-d[p];f=dt(y,f,x)}if(r){const w=u==="y"?"top":"left",p=u==="y"?"bottom":"right",y=m+d[w],x=m-d[p];m=dt(y,m,x)}const g=c.fn({...e,[h]:f,[u]:m});return{...g,data:{x:g.x-n,y:g.y-o}}}}};function G(t){return $t(t)?(t.nodeName||"").toLowerCase():"#document"}function S(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function H(t){var e;return(e=($t(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function $t(t){return t instanceof Node||t instanceof S(t).Node}function D(t){return t instanceof Element||t instanceof S(t).Element}function N(t){return t instanceof HTMLElement||t instanceof S(t).HTMLElement}function Rt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof S(t).ShadowRoot}function Z(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=L(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function fe(t){return["table","td","th"].includes(G(t))}function ct(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function lt(t){const e=ht(),n=D(t)?L(t):t;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function ue(t){let e=_(t);for(;N(e)&&!q(e);){if(lt(e))return e;if(ct(e))return null;e=_(e)}return null}function ht(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function q(t){return["html","body","#document"].includes(G(t))}function L(t){return S(t).getComputedStyle(t)}function at(t){return D(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function _(t){if(G(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Rt(t)&&t.host||H(t);return Rt(e)?e.host:e}function Wt(t){const e=_(t);return q(e)?t.ownerDocument?t.ownerDocument.body:t.body:N(e)&&Z(e)?e:Wt(e)}function J(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Wt(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),r=S(i);if(s){const c=de(r);return e.concat(r,r.visualViewport||[],Z(i)?i:[],c&&n?J(c):[])}return e.concat(i,J(i,[],n))}function de(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Ht(t){const e=L(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=N(t),s=i?t.offsetWidth:n,r=i?t.offsetHeight:o,c=et(n)!==s||et(o)!==r;return c&&(n=s,o=r),{width:n,height:o,$:c}}function wt(t){return D(t)?t:t.contextElement}function Y(t){const e=wt(t);if(!N(e))return V(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=Ht(e);let r=(s?et(n.width):n.width)/o,c=(s?et(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!c||!Number.isFinite(c))&&(c=1),{x:r,y:c}}const me=V(0);function Vt(t){const e=S(t);return!ht()||!e.visualViewport?me:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ge(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==S(t)?!1:e}function z(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=wt(t);let r=V(1);e&&(o?D(o)&&(r=Y(o)):r=Y(t));const c=ge(s,n,o)?Vt(s):V(0);let l=(i.left+c.x)/r.x,a=(i.top+c.y)/r.y,d=i.width/r.x,u=i.height/r.y;if(s){const h=S(s),f=o&&D(o)?S(o):o;let m=h,g=m.frameElement;for(;g&&o&&f!==m;){const w=Y(g),p=g.getBoundingClientRect(),y=L(g),x=p.left+(g.clientLeft+parseFloat(y.paddingLeft))*w.x,b=p.top+(g.clientTop+parseFloat(y.paddingTop))*w.y;l*=w.x,a*=w.y,d*=w.x,u*=w.y,l+=x,a+=b,m=S(g),g=m.frameElement}}return it({width:d,height:u,x:l,y:a})}function pe(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const s=i==="fixed",r=H(o),c=e?ct(e.floating):!1;if(o===r||c&&s)return n;let l={scrollLeft:0,scrollTop:0},a=V(1);const d=V(0),u=N(o);if((u||!u&&!s)&&((G(o)!=="body"||Z(r))&&(l=at(o)),N(o))){const h=z(o);a=Y(o),d.x=h.x+o.clientLeft,d.y=h.y+o.clientTop}return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-l.scrollLeft*a.x+d.x,y:n.y*a.y-l.scrollTop*a.y+d.y}}function he(t){return Array.from(t.getClientRects())}function _t(t){return z(H(t)).left+at(t).scrollLeft}function we(t){const e=H(t),n=at(t),o=t.ownerDocument.body,i=U(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=U(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+_t(t);const c=-n.scrollTop;return L(o).direction==="rtl"&&(r+=U(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:r,y:c}}function ye(t,e){const n=S(t),o=H(t),i=n.visualViewport;let s=o.clientWidth,r=o.clientHeight,c=0,l=0;if(i){s=i.width,r=i.height;const a=ht();(!a||a&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:s,height:r,x:c,y:l}}function xe(t,e){const n=z(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=N(t)?Y(t):V(1),r=t.clientWidth*s.x,c=t.clientHeight*s.y,l=i*s.x,a=o*s.y;return{width:r,height:c,x:l,y:a}}function Pt(t,e,n){let o;if(e==="viewport")o=ye(t,n);else if(e==="document")o=we(H(t));else if(D(e))o=xe(e,n);else{const i=Vt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return it(o)}function It(t,e){const n=_(t);return n===e||!D(n)||q(n)?!1:L(n).position==="fixed"||It(n,e)}function ve(t,e){const n=e.get(t);if(n)return n;let o=J(t,[],!1).filter(c=>D(c)&&G(c)!=="body"),i=null;const s=L(t).position==="fixed";let r=s?_(t):t;for(;D(r)&&!q(r);){const c=L(r),l=lt(r);!l&&c.position==="fixed"&&(i=null),(s?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Z(r)&&!l&&It(t,r))?o=o.filter(d=>d!==r):i=c,r=_(r)}return e.set(t,o),o}function be(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[...n==="clippingAncestors"?ct(e)?[]:ve(e,this._c):[].concat(n),o],c=r[0],l=r.reduce((a,d)=>{const u=Pt(e,d,i);return a.top=U(u.top,a.top),a.right=X(u.right,a.right),a.bottom=X(u.bottom,a.bottom),a.left=U(u.left,a.left),a},Pt(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Oe(t){const{width:e,height:n}=Ht(t);return{width:e,height:n}}function Ae(t,e,n){const o=N(e),i=H(e),s=n==="fixed",r=z(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const l=V(0);if(o||!o&&!s)if((G(e)!=="body"||Z(i))&&(c=at(e)),o){const u=z(e,!0,s,e);l.x=u.x+e.clientLeft,l.y=u.y+e.clientTop}else i&&(l.x=_t(i));const a=r.left+c.scrollLeft-l.x,d=r.top+c.scrollTop-l.y;return{x:a,y:d,width:r.width,height:r.height}}function ft(t){return L(t).position==="static"}function Ct(t,e){return!N(t)||L(t).position==="fixed"?null:e?e(t):t.offsetParent}function Ut(t,e){const n=S(t);if(ct(t))return n;if(!N(t)){let i=_(t);for(;i&&!q(i);){if(D(i)&&!ft(i))return i;i=_(i)}return n}let o=Ct(t,e);for(;o&&fe(o)&&ft(o);)o=Ct(o,e);return o&&q(o)&&ft(o)&&!lt(o)?n:o||ue(t)||n}const Re=async function(t){const e=this.getOffsetParent||Ut,n=this.getDimensions,o=await n(t.floating);return{reference:Ae(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Pe(t){return L(t).direction==="rtl"}const mt={convertOffsetParentRelativeRectToViewportRelativeRect:pe,getDocumentElement:H,getClippingRect:be,getOffsetParent:Ut,getElementRects:Re,getClientRects:he,getDimensions:Oe,getScale:Y,isElement:D,isRTL:Pe};function Ce(t,e){let n=null,o;const i=H(t);function s(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function r(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),s();const{left:a,top:d,width:u,height:h}=t.getBoundingClientRect();if(c||e(),!u||!h)return;const f=tt(d),m=tt(i.clientWidth-(a+u)),g=tt(i.clientHeight-(d+h)),w=tt(a),y={rootMargin:-f+"px "+-m+"px "+-g+"px "+-w+"px",threshold:U(0,X(1,l))||1};let x=!0;function b(v){const R=v[0].intersectionRatio;if(R!==l){if(!x)return r();R?r(!1,R):o=setTimeout(()=>{r(!1,1e-7)},1e3)}x=!1}try{n=new IntersectionObserver(b,{...y,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,y)}n.observe(t)}return r(!0),s}function Se(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,a=wt(t),d=i||s?[...a?J(a):[],...J(e)]:[];d.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),s&&p.addEventListener("resize",n)});const u=a&&c?Ce(a,n):null;let h=-1,f=null;r&&(f=new ResizeObserver(p=>{let[y]=p;y&&y.target===a&&f&&(f.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var x;(x=f)==null||x.observe(e)})),n()}),a&&!l&&f.observe(a),f.observe(e));let m,g=l?z(t):null;l&&w();function w(){const p=z(t);g&&(p.x!==g.x||p.y!==g.y||p.width!==g.width||p.height!==g.height)&&n(),g=p,m=requestAnimationFrame(w)}return n(),()=>{var p;d.forEach(y=>{i&&y.removeEventListener("scroll",n),s&&y.removeEventListener("resize",n)}),u==null||u(),(p=f)==null||p.disconnect(),f=null,l&&cancelAnimationFrame(m)}}const Te=le,Ee=ie,De=ae,St=re,Le=se,Fe=ne,Me=(t,e,n)=>{const o=new Map,i={platform:mt,...n},s={...i.platform,_c:o};return ee(t,e,{...i,platform:s})};function ke(t){return Be(t)}function ut(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function Be(t){for(let e=t;e;e=ut(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=ut(t);e;e=ut(e)){if(!(e instanceof Element))continue;const n=getComputedStyle(e);if(n.display!=="contents"&&(n.position!=="static"||lt(n)||e.tagName==="BODY"))return e}return null}(function(){if(Ft()){const e=mt.getOffsetParent;mt.getOffsetParent=n=>e(n,ke)}})();function Tt(t){const e=window.devicePixelRatio||1;return Math.round(t*e)/e}const zt=async(t,{referenceEl:e,floatingEl:n,overlayPositioning:o="absolute",placement:i,flipDisabled:s,flipPlacements:r,offsetDistance:c,offsetSkidding:l,arrowEl:a,type:d})=>{var b;if(!e||!n)return null;const{x:u,y:h,placement:f,strategy:m,middlewareData:g}=await Me(e,n,{strategy:o,placement:i==="auto"||i==="auto-start"||i==="auto-end"?void 0:Dt(n,i),middleware:$e({placement:i,flipDisabled:s,flipPlacements:r==null?void 0:r.map(v=>Dt(n,v)),offsetDistance:c,offsetSkidding:l,arrowEl:a,type:d})});if(a&&g.arrow){const{x:v,y:R}=g.arrow,O=f.split("-")[0],T=v!=null?"left":"top",F=He[O],A={left:"",top:"",bottom:"",right:""};"floatingLayout"in t&&(t.floatingLayout=O==="left"||O==="right"?"horizontal":"vertical"),Object.assign(a.style,{...A,[T]:`${T=="left"?v:R}px`,[O]:"100%",transform:F})}const p=((b=g.hide)==null?void 0:b.referenceHidden)?"hidden":null,y=p?"none":null;n.setAttribute(Ne,f);const{open:x}=t;Object.assign(n.style,{visibility:p,pointerEvents:y,position:m,transform:x?`translate(${Tt(u)}px,${Tt(h)}px)`:"",top:0,left:0})},Ne="data-placement",Et=["top","bottom","right","left","top-start","top-end","bottom-start","bottom-end","right-start","right-end","left-start","left-end","leading","trailing","leading-start","leading-end","trailing-start","trailing-end"],ze="bottom-start",je={animation:"calcite-floating-ui-anim",animationActive:"calcite-floating-ui-anim--active"};function $e({placement:t,flipDisabled:e,flipPlacements:n,offsetDistance:o,offsetSkidding:i,arrowEl:s,type:r}){const c=[De(),Le()];if(r==="menu")return[...c,St({fallbackPlacements:n||["top-start","top","top-end","bottom-start","bottom","bottom-end"]})];if(r==="popover"||r==="tooltip"){const l=[...c,Te({mainAxis:typeof o=="number"?o:0,crossAxis:typeof i=="number"?i:0})];return t==="auto"||t==="auto-start"||t==="auto-end"?l.push(Ee({alignment:t==="auto-start"?"start":t==="auto-end"?"end":null})):e||l.push(St(n?{fallbackPlacements:n}:{})),s&&l.push(Fe({element:s})),l}return[]}function Ye(t,e){const n=t.filter(o=>Et.includes(o));return n.length!==t.length&&console.warn(`${e.tagName}: Invalid value found in: flipPlacements. Try any of these: ${Et.map(o=>`"${o}"`).join(", ").trim()}`,{el:e}),n}function Dt(t,e){const n=["left","right"];return Xt(t)==="rtl"&&n.reverse(),e.replace(/leading/gi,n[0]).replace(/trailing/gi,n[1])}async function Xe(t,e,n=!1){if(!t.open||!e.floatingEl||!e.referenceEl)return;if(!Q.get(t))return jt(t,e.referenceEl,e.floatingEl);await(n?We(t):zt)(t,e)}function We(t){let e=rt.get(t);return e||(e=qt(zt,yt.reposition,{leading:!0,maxWait:yt.reposition}),rt.set(t,e),e)}const He={top:"",left:"rotate(-90deg)",bottom:"rotate(180deg)",right:"rotate(90deg)"},Q=new WeakMap,rt=new WeakMap;async function jt(t,e,n){if(!n.isConnected)return;const o=Ft()?Se:(r,c,l)=>(l(),()=>{});Q.set(t,{state:"pending"});let i;const s=o(e,n,()=>{const r=t.reposition();i||(i=r)});return Q.set(t,{state:"active",cleanUp:s}),i}async function qe(t,e,n){if(!(!n||!e)&&(Ve(t,e,n),Object.assign(n.style,{visibility:"hidden",pointerEvents:"none",position:t.overlayPositioning}),!!t.open))return jt(t,e,n)}function Ve(t,e,n){var i;if(!n||!e)return;const o=Q.get(t);(o==null?void 0:o.state)==="active"&&o.cleanUp(),Q.delete(t),(i=rt.get(t))==null||i.cancel(),rt.delete(t)}const Lt=4,Ge=Math.ceil(Math.hypot(Lt,Lt));export{je as F,Ve as a,ze as b,qe as c,Ge as d,Ye as f,Xe as r};
