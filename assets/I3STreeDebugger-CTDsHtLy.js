import{b6 as d,hw as S,dk as u,bK as r,bC as p,aJ as b,ac as o,ad as c,ag as g,bp as m}from"./index-DX0rcHuW.js";import{e as v}from"./mat4f64-Dk4dwAN8.js";import{d as j}from"./TileTreeDebugger-BD-0r5wQ.js";let h=class extends j{constructor(n){super(n)}getTiles(){const n=this.lv.getVisibleNodes(),t=this.view.renderSpatialReference,i=this.nodeSR;return n.map(l=>y(l,t,i)).filter(d).sort((l,s)=>l.lij[0]===s.lij[0]?l.label>s.label?-1:1:l.lij[0]-s.lij[0])}};function y(n,t,i){const l=n.serviceObbInIndexSR;if(l==null||t==null)return null;S(a,l.quaternion),u(e,l.center),r(e,i,0,e,t,0,1),a[12]=e[0],a[13]=e[1],a[14]=e[2];const s=[[],[],[]];p(e,l.halfSize,a),r(e,t,0,e,i,0,1),s[0].push([e[0],e[1]]),u(e,l.halfSize),e[0]=-e[0],p(e,e,a),r(e,t,0,e,i,0,1),s[0].push([e[0],e[1]]),u(e,l.halfSize),e[0]=-e[0],e[1]=-e[1],p(e,e,a),r(e,t,0,e,i,0,1),s[0].push([e[0],e[1]]),u(e,l.halfSize),e[1]=-e[1],p(e,e,a),r(e,t,0,e,i,0,1),s[0].push([e[0],e[1]]),s[1].push(s[0][0]),s[1].push(s[0][1]),u(e,l.halfSize),e[0]=-e[0],e[2]=-e[2],p(e,e,a),r(e,t,0,e,i,0,1),s[1].push([e[0],e[1]]),u(e,l.halfSize),e[2]=-e[2],p(e,e,a),r(e,t,0,e,i,0,1),s[1].push([e[0],e[1]]),s[2].push(s[0][0]),s[2].push(s[0][3]),u(e,l.halfSize),e[1]=-e[1],e[2]=-e[2],p(e,e,a),r(e,t,0,e,i,0,1),s[2].push([e[0],e[1]]),s[2].push(s[1][3]);const f=new b({rings:s,spatialReference:i});return{lij:[n.level,n.childCount,0],label:n.id,geometry:f}}o([c({constructOnly:!0})],h.prototype,"lv",void 0),o([c({constructOnly:!0})],h.prototype,"nodeSR",void 0),h=o([g("esri.views.3d.layers.support.I3STreeDebugger")],h);const a=v(),e=m();export{h as I3STreeDebugger};
