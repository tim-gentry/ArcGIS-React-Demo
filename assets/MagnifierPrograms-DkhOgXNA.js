import{n as M}from"./WGLContainer-DyFTYdJ0.js";import{t as _t}from"./CircularArray-CujHzHWW.js";import{b9 as F,b5 as gt,bn as x,bh as R,ac as p,ad as v,ag as L,dG as vt,gJ as dt,bp as wt,aI as j,bZ as pt,d6 as ft,dH as bt,d2 as yt,dI as q}from"./index-DX0rcHuW.js";import{a as Mt}from"./testSVGPremultipliedAlpha-eKesxQ43.js";import{U as O,N as xt,O as Tt}from"./definitions-ByNBSgP9.js";import{t as St}from"./AttributeStore-qiTY00FJ.js";import{m as Q}from"./Viewpoint-sw4jiA6m.js";import{k as Y,r as $t,G as Ct,$ as zt,b as st,p as Et,R as rt}from"./viewpointUtils-BG1_rfM2.js";import{_ as ht}from"./InputManager-abOXR3ru.js";import{c as Rt,a as Lt,s as At}from"./ZoomMomentumEstimator-pQkiU-PR.js";import{o as nt,u as Zt,r as kt}from"./vec2-C-4tM9Uv.js";import{n as D}from"./vec2f64-Diu2Kaa8.js";import{e as It}from"./ProgramTemplate-Ddp-btlS.js";const se={shaders:{vertexShader:M("bitBlit/bitBlit.vert"),fragmentShader:M("bitBlit/bitBlit.frag")},attributes:new Map([["a_pos",0],["a_tex",1]])},ne={shaders:{vertexShader:M("stencil/stencil.vert"),fragmentShader:M("stencil/stencil.frag")},attributes:new Map([["a_pos",0]])},oe={shaders:{vertexShader:M("highlight/textured.vert"),fragmentShader:M("highlight/highlight.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])},ae={shaders:{vertexShader:M("highlight/textured.vert"),fragmentShader:M("highlight/blur.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])},f=F("esri-2d-profiler");let re=class{constructor(t,e){if(this._events=new gt,this._entries=new Map,this._timings=new _t(10),this._currentContainer=null,this._currentPass=null,this._currentBrush=null,this._currentSummary=null,!f)return;this._ext=Mt(t.gl,{}),this._debugOutput=e;const i=t.gl;if(!this.enableCommandLogging)return;let s;for(s in i)if(typeof i[s]=="function"){const n=i[s],a=s.includes("draw");i[s]=(...r)=>(this._events.emit("command",{container:this._currentContainer,pass:this._currentPass,brush:this._currentBrush,method:s,args:r,isDrawCommand:a}),this._currentSummary&&(this._currentSummary.commands++,a&&this._currentSummary.drawCommands++),n.apply(i,r))}}get enableCommandLogging(){return!(typeof f=="object"&&f.disableCommands)}recordContainerStart(t){f&&(this._currentContainer=t)}recordContainerEnd(){f&&(this._currentContainer=null)}recordPassStart(t){f&&(this._currentPass=t,this._initSummary())}recordPassEnd(){f&&(this._currentPass=null,this._emitSummary())}recordBrushStart(t){f&&(this._currentBrush=t)}recordBrushEnd(){f&&(this._currentBrush=null)}recordStart(t){if(f&&this._ext!=null){if(this._entries.has(t)){const i=this._entries.get(t),s=this._ext.resultAvailable(i.query),n=this._ext.disjoint();if(s&&!n){const a=this._ext.getResult(i.query)/1e6;let r=0;if(this._timings.enqueue(a)!=null){const m=this._timings.entries,c=m.length;let _=0;for(const u of m)_+=u;r=_/c}const o=a.toFixed(2),l=r?r.toFixed(2):"--";this.enableCommandLogging?(console.groupCollapsed(`Frame report for ${t}, ${o} ms (${l} last 10 avg)
${i.commandsLen} Commands (${i.drawCommands} draw)`),console.log("RenderPass breakdown: "),console.table(i.summaries),console.log("Commands: ",i.commands),console.groupEnd()):console.log(`Frame report for ${t}, ${o} ms (${l} last 10 avg)`),this._debugOutput.innerHTML=`${o} (${l})`}for(const a of i.handles)a.remove();this._ext.deleteQuery(i.query),this._entries.delete(t)}const e={name:t,query:this._ext.createQuery(),commands:[],commandsLen:0,drawCommands:0,summaries:[],handles:[]};this.enableCommandLogging&&(e.handles.push(this._events.on("command",i=>{e.commandsLen++,e.commands.push(i),i.isDrawCommand&&e.drawCommands++})),e.handles.push(this._events.on("summary",i=>{e.summaries.push(i)}))),this._ext.beginTimeElapsed(e.query),this._entries.set(t,e)}}recordEnd(t){f&&this._ext!=null&&this._entries.has(t)&&this._ext.endTimeElapsed()}_initSummary(){this.enableCommandLogging&&(this._currentSummary={container:this._currentContainer,pass:this._currentPass,drawCommands:0,commands:0})}_emitSummary(){this.enableCommandLogging&&this._currentSummary&&this._events.emit("summary",this._currentSummary)}};const b=1,H=0,P=1,B=2;let Nt=class{constructor(t,e,i){this._width=t*i,this._height=e*i,this._pixelRatio=i;const s=Math.ceil(this._width/b),n=Math.ceil(this._height/b);this._cols=s,this._rows=n,this._cells=St.create(s*n)}insertMetrics(t){this._markMetrics(t)}hasCollision(t){let e=0;for(const{computedX:i,computedY:s,width:n,height:a}of t.bounds){const r=(n+O)*this._pixelRatio,o=(a+O)*this._pixelRatio;switch(this._collide(i,s,r,o)){case B:return B;case P:e++}}return e===t.bounds.length?P:H}getCellId(t,e){return t+e*this._cols}has(t){return this._cells.has(t)}hasRange(t,e){return this._cells.hasRange(t,e)}set(t){this._cells.set(t)}setRange(t,e){this._cells.setRange(t,e)}_collide(t,e,i,s){const n=t-i/2,a=e-s/2,r=n+i,o=a+s;if(r<0||o<0||n>this._width||a>this._height)return P;const l=x(Math.floor(n/b),0,this._cols),m=x(Math.floor(a/b),0,this._rows),c=x(Math.ceil(r/b),0,this._cols),_=x(Math.ceil(o/b),0,this._rows);for(let u=m;u<=_;u++)for(let d=l;d<=c;d++){const g=this.getCellId(d,u);if(this.has(g))return B}return H}_mark(t,e,i,s,n){const a=t-i/2,r=e-s/2,o=a+i,l=r+s,m=x(Math.floor(a/b),0,this._cols),c=x(Math.floor(r/b),0,this._rows),_=x(Math.ceil(o/b),0,this._cols),u=x(Math.ceil(l/b),0,this._rows);for(let d=c;d<=u;d++)for(let g=m;g<=_;g++){const V=this.getCellId(g,d);this.set(V)}return!1}_markMetrics(t){for(const{computedX:e,computedY:i,width:s,height:n}of t.bounds){const a=(s+O)*this._pixelRatio,r=(n+O)*this._pixelRatio;this._mark(e,i,a,r,t.entityTexel)}}};const A=254,U=255,Z=0;function $(h,t){const e=h.children.slice();e.sort((i,s)=>i.tileAge-s.tileAge),e.forEach(i=>{i.labelMetrics!=null&&i.isReady&&t(i,i.labelMetrics)})}function mt(h,t){return(!h.minScale||h.minScale>=t)&&(!h.maxScale||h.maxScale<=t)}let Pt=class{run(t,e,i,s){var a;const n=[];for(let r=t.length-1;r>=0;r--){const o=t[r];(a=o.labelingCollisionInfos)!=null&&a.length&&n.push(...o.labelingCollisionInfos)}F("esri-2d-update-debug")&&n.length&&console.debug("CollisionEngine.run"),this._transformMetrics(n),this._runCollision(n,e,i,s);for(const r of n)r.container.requestRender()}_runCollision(t,e,i,s){const[n,a]=e.state.size,r=new Nt(n,a,e.pixelRatio);for(const{container:o,deconflictionEnabled:l,visible:m}of t){const c=o.attributeView;l?m?(this._prepare(o),this._collideVisible(r,o,i,s),this._collideInvisible(r,o)):$(o,(_,u)=>{for(const d of u)c.setLabelMinZoom(d.entityTexel,U)}):$(o,(_,u)=>{for(const d of u)mt(d,i)?(c.setLabelMinZoom(d.entityTexel,Z),m&&r.insertMetrics(d)):c.setLabelMinZoom(d.entityTexel,A)})}}_isFiltered(t,e,i){const s=e.getFilterFlags(t),n=!i.hasFilter||!!(s&xt),a=i.featureEffect==null||i.featureEffect.excludedLabelsVisible||!!(s&Tt);return!(n&&a)}_prepare(t){const e=t.attributeView,i=new Set;$(t,(s,n)=>{for(const a of n){const r=a.entityTexel;if(!i.has(r)){if(i.add(r),this._isFiltered(r,e,t.layerView)){e.setLabelMinZoom(r,A);continue}e.getLabelMinZoom(r)!==Z?e.setLabelMinZoom(r,U):e.setLabelMinZoom(r,Z)}}})}_collideVisible(t,e,i,s){const n=e.attributeView,a=new Set;$(e,(r,o)=>{for(let l=0;l<o.length;l++){const m=o[l].entityTexel;if(a.has(m))continue;if(r.key.level!==s){n.setLabelMinZoom(m,A),a.add(m);continue}if(!mt(o[l],i)){n.setLabelMinZoom(m,A),a.add(m);continue}if(n.getLabelMinZoom(m)!==0){a.add(m);continue}let c=!1,_=!0;const u=l;let d=l;for(;d<o.length;d++){const g=o[d];if(g.entityTexel!==m)break;if(!c)switch(t.hasCollision(g)){case P:break;case B:c=!0,_=!1;break;case H:_=!1}}if(!c)for(let g=u;g<d;g++)t.insertMetrics(o[g]);l=d-1,_||(a.add(m),n.setLabelMinZoom(m,c?A:Z))}})}_collideInvisible(t,e){const i=e.attributeView,s=new Set;$(e,(n,a)=>{for(let r=0;r<a.length;r++){const o=a[r].entityTexel;if(s.has(o))continue;if(i.getLabelMinZoom(o)!==U){s.add(o);continue}let l=!1,m=!0;const c=r;let _=r;for(;_<a.length;_++){const u=a[_];if(u.entityTexel!==o)break;if(!l)switch(t.hasCollision(u)){case P:break;case B:l=!0,m=!1;break;case H:m=!1}}if(!l)for(let u=c;u<_;u++)t.insertMetrics(a[u]);r=_-1,m||(s.add(o),i.setLabelMinZoom(o,l?U:Z))}})}_transformMetrics(t){for(const{container:e,geometryType:i,vvEvaluators:s}of t)$(e,(n,a)=>{var m;const r=e.attributeView,o=n.transforms.labelMat2d;o[4]=Math.round(o[4]),o[5]=Math.round(o[5]);const l=i==="polyline";for(const c of a){const{entityTexel:_,anchorX:u,anchorY:d}=c;let g=((m=c.referenceBounds)==null?void 0:m.size)??0;const V=s[0];if(V!=null){const w=V(r.getVVSize(_));g=isNaN(w)||w==null||w===1/0?g:w}const ot=c.directionX*(g/2),at=c.directionY*(g/2);for(const w of c.bounds){let J=u,K=d;if(l){let T=J+w.x+ot,S=K+w.y+at;T=o[0]*T+o[2]*S+o[4],S=o[1]*T+o[3]*S+o[5],w.computedX=Math.floor(T),w.computedY=Math.floor(S)}else{J=o[0]*u+o[2]*d+o[4],K=o[1]*u+o[3]*d+o[5];const T=J+w.x+ot,S=K+w.y+at;w.computedX=T,w.computedY=S}}}})}};const Bt=32;let k=class extends R{constructor(t){super(t),this._lastUpdate=0,this.collisionEngine=new Pt,this.lastUpdateId=-1,this.updateRequested=!1,this.view=null}get updating(){return F("esri-2d-log-updating")&&console.log(`Updating LabelManager ${this.updateRequested}:
-> updateRequested: ${this.updateRequested}`),this.updateRequested}update(t){const e=performance.now();e-this._lastUpdate>=Bt?(this._lastUpdate=e,this.doUpdate(t)):this.requestUpdate()}viewChange(){this.requestUpdate()}requestUpdate(){var t;this.updateRequested||(this.updateRequested=!0,(t=this.view)==null||t.requestUpdate())}processUpdate(t){this.updateRequested&&(this.updateRequested=!1,this.update(t))}doUpdate(t){const e=this.view;if(e)try{const i=t.state.scale,s=e.featuresTilingScheme.getClosestInfoForScale(i).level;this.collisionEngine.run(e.allLayerViews.items,t,i,s)}catch{}}};p([v()],k.prototype,"updateRequested",void 0),p([v()],k.prototype,"updating",null),p([v()],k.prototype,"view",void 0),k=p([L("esri.views.2d.LabelManager")],k);const G="esri-zoom-box",X={container:`${G}__container`,overlay:`${G}__overlay`,background:`${G}__overlay-background`,box:`${G}__outline`},W={zoom:"Shift",counter:"Control"};let I=class extends R{constructor(t){super(t),this._container=null,this._overlay=null,this._backgroundShape=null,this._boxShape=null,this._box={x:0,y:0,width:0,height:0},this._rafId=null,this._redraw=this._redraw.bind(this)}destroy(){this.view=null}set view(t){this.removeAllHandles(),this._destroyOverlay(),this._set("view",t),t&&this.addHandles([t.on("drag",[W.zoom],e=>this._handleDrag(e,1),ht.INTERNAL),t.on("drag",[W.zoom,W.counter],e=>this._handleDrag(e,-1),ht.INTERNAL)])}_start(){this._createContainer(),this._createOverlay(),this.navigation.begin()}_update(t,e,i,s){this._box.x=t,this._box.y=e,this._box.width=i,this._box.height=s,this._rafId||(this._rafId=requestAnimationFrame(this._redraw))}_end(t,e,i,s,n){const a=this.view,r=a.toMap(vt(t+.5*i,e+.5*s));let o=Math.max(i/a.width,s/a.height);n===-1&&(o=1/o),this._destroyOverlay(),this.navigation.end(),a.goTo({center:r,scale:a.scale*o},{animationMode:"always",duration:dt(F("mapview-essential-goto-duration"))})}_updateBox(t,e,i,s){const n=this._boxShape;n.setAttributeNS(null,"x",""+t),n.setAttributeNS(null,"y",""+e),n.setAttributeNS(null,"width",""+i),n.setAttributeNS(null,"height",""+s),n.setAttributeNS(null,"class",X.box)}_updateBackground(t,e,i,s){this._backgroundShape.setAttributeNS(null,"d",this._toSVGPath(t,e,i,s,this.view.width,this.view.height))}_createContainer(){const t=document.createElement("div");t.className=X.container,this.view.root.appendChild(t),this._container=t}_createOverlay(){const t=this.view.width,e=this.view.height,i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttributeNS(null,"d","M 0 0 L "+t+" 0 L "+t+" "+e+" L 0 "+e+" Z"),i.setAttributeNS(null,"class",X.background);const s=document.createElementNS("http://www.w3.org/2000/svg","rect"),n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),n.setAttributeNS(null,"class",X.overlay),n.appendChild(i),n.appendChild(s),this._container.appendChild(n),this._backgroundShape=i,this._boxShape=s,this._overlay=n}_destroyOverlay(){this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container),this._container=this._backgroundShape=this._boxShape=this._overlay=null}_toSVGPath(t,e,i,s,n,a){const r=t+i,o=e+s;return"M 0 0 L "+n+" 0 L "+n+" "+a+" L 0 "+a+" ZM "+t+" "+e+" L "+t+" "+o+" L "+r+" "+o+" L "+r+" "+e+" Z"}_handleDrag(t,e){const i=t.x,s=t.y,n=t.origin.x,a=t.origin.y;let r,o,l,m;switch(i>n?(r=n,l=i-n):(r=i,l=n-i),s>a?(o=a,m=s-a):(o=s,m=a-s),t.action){case"start":this._start();break;case"update":this._update(r,o,l,m);break;case"end":this._end(r,o,l,m,e)}t.stopPropagation()}_redraw(){if(!this._rafId||(this._rafId=null,!this._overlay))return;const{x:t,y:e,width:i,height:s}=this._box;this._updateBox(t,e,i,s),this._updateBackground(t,e,i,s),this._rafId=requestAnimationFrame(this._redraw)}};p([v()],I.prototype,"navigation",void 0),p([v()],I.prototype,"view",null),I=p([L("esri.views.2d.navigation.ZoomBox")],I);const Dt=I;let z=class extends R{constructor(t){super(t),this.animationTime=0,this.momentumEstimator=new Rt(500,6,.92),this.momentum=null,this.tmpMomentum=wt(),this.momentumFinished=!1,this.viewpoint=new Q({targetGeometry:new j,scale:0,rotation:0}),this._previousDrag=null,pt(()=>this.momentumFinished,()=>this.navigation.stop())}begin(t,e){this.navigation.begin(),this.momentumEstimator.reset(),this.addToEstimator(e),this._previousDrag=e}update(t,e){this.addToEstimator(e);let i=e.center.x,s=e.center.y;const n=this._previousDrag;i=n?n.center.x-i:-i,s=n?s-n.center.y:s,t.viewpoint=Y(this.viewpoint,t.viewpoint,[i||0,s||0]),this._previousDrag=e}end(t,e){this.addToEstimator(e);const i=t.navigation.effectiveMomentumEnabled;this.momentum=i?this.momentumEstimator.evaluateMomentum():null,this.animationTime=0,this.momentum&&this.onAnimationUpdate(t),this._previousDrag=null,this.navigation.end()}addToEstimator(t){const e=t.center.x,i=t.center.y,s=bt(-e,i),n=yt(-e,i,0);this.momentumEstimator.add(s,n,.001*t.timestamp)}onAnimationUpdate(t){var e;(e=this.navigation.animationManager)==null||e.animateContinuous(t.viewpoint,(i,s)=>{const{momentum:n,animationTime:a,tmpMomentum:r}=this,o=.001*s;if(!(this.momentumFinished=!n||n.isFinished(a))){const l=n.valueDelta(a,o);ft(r,n.direction,l),Y(i,i,r),t.constraints.constrainByGeometry(i)}this.animationTime+=o})}stopMomentumNavigation(){this.momentum&&(this.momentumEstimator.reset(),this.momentum=null,this.navigation.stop())}};p([v()],z.prototype,"momentumFinished",void 0),p([v()],z.prototype,"viewpoint",void 0),p([v()],z.prototype,"navigation",void 0),z=p([L("esri.views.2d.navigation.actions.Pan")],z);const Ft=z;let E=class extends R{constructor(t){super(t),this._animationTime=0,this._momentumFinished=!1,this._previousAngle=0,this._previousRadius=0,this._previousCenter=null,this._rotationMomentumEstimator=new Lt(.6,.15,.95),this._rotationDirection=1,this._startAngle=0,this._startRadius=0,this._updateTimestamp=null,this._zoomDirection=1,this._zoomMomentumEstimator=new At,this._zoomOnly=null,this.viewpoint=new Q({targetGeometry:new j,scale:0,rotation:0}),this.zoomMomentum=null,this.rotateMomentum=null,this.addHandles(pt(()=>this._momentumFinished,()=>this.navigation.stop()))}begin(t,e){this.navigation.begin(),this._rotationMomentumEstimator.reset(),this._zoomMomentumEstimator.reset(),this._zoomOnly=null,this._previousAngle=this._startAngle=e.angle,this._previousRadius=this._startRadius=e.radius,this._previousCenter=e.center,this._updateTimestamp=null,t.constraints.rotationEnabled&&this.addToRotateEstimator(0,e.timestamp),this.addToZoomEstimator(e,1)}update(t,e){this._updateTimestamp===null&&(this._updateTimestamp=e.timestamp);const i=e.angle,s=e.radius,n=e.center,a=Math.abs(180*(i-this._startAngle)/Math.PI),r=Math.abs(s-this._startRadius),o=this._startRadius/s;if(this._previousRadius&&this._previousCenter){const l=s/this._previousRadius;let m=180*(i-this._previousAngle)/Math.PI;this._rotationDirection=m>=0?1:-1,this._zoomDirection=l>=1?1:-1,t.constraints.rotationEnabled?(this._zoomOnly===null&&e.timestamp-this._updateTimestamp>200&&(this._zoomOnly=r-a>0),this._zoomOnly===null||this._zoomOnly?m=0:this.addToRotateEstimator(i-this._startAngle,e.timestamp)):m=0,this.addToZoomEstimator(e,o),this.navigation.setViewpoint([n.x,n.y],1/l,m,[this._previousCenter.x-n.x,n.y-this._previousCenter.y])}this._previousAngle=i,this._previousRadius=s,this._previousCenter=n}end(t){this.rotateMomentum=this._rotationMomentumEstimator.evaluateMomentum(),this.zoomMomentum=this._zoomMomentumEstimator.evaluateMomentum(),this._animationTime=0,(this.rotateMomentum||this.zoomMomentum)&&this.onAnimationUpdate(t),this.navigation.end()}addToRotateEstimator(t,e){this._rotationMomentumEstimator.add(t,.001*e)}addToZoomEstimator(t,e){this._zoomMomentumEstimator.add(e,.001*t.timestamp)}canZoomIn(t){const e=t.scale,i=t.constraints.effectiveMaxScale;return i===0||e>i}canZoomOut(t){const e=t.scale,i=t.constraints.effectiveMinScale;return i===0||e<i}onAnimationUpdate(t){var e;(e=this.navigation.animationManager)==null||e.animateContinuous(t.viewpoint,(i,s)=>{const n=!this.canZoomIn(t)&&this._zoomDirection>1||!this.canZoomOut(t)&&this._zoomDirection<1,a=!this.rotateMomentum||this.rotateMomentum.isFinished(this._animationTime),r=n||!this.zoomMomentum||this.zoomMomentum.isFinished(this._animationTime),o=.001*s;if(this._momentumFinished=a&&r,!this._momentumFinished){const l=this.rotateMomentum?Math.abs(this.rotateMomentum.valueDelta(this._animationTime,o))*this._rotationDirection*180/Math.PI:0;let m=this.zoomMomentum?Math.abs(this.zoomMomentum.valueDelta(this._animationTime,o)):1;const c=D(),_=D();if(this._previousCenter){nt(c,this._previousCenter.x,this._previousCenter.y),$t(_,t.size,t.padding),Zt(c,c,_);const{constraints:u,scale:d}=t,g=d*m;m<1&&!u.canZoomInTo(g)?(m=d/u.effectiveMaxScale,this.zoomMomentum=null,this.rotateMomentum=null):m>1&&!u.canZoomOutTo(g)&&(m=d/u.effectiveMinScale,this.zoomMomentum=null,this.rotateMomentum=null),Ct(i,t.viewpoint,m,l,c,t.size),t.constraints.constrainByGeometry(i)}}this._animationTime+=o})}stopMomentumNavigation(){(this.rotateMomentum||this.zoomMomentum)&&(this.rotateMomentum&&(this._rotationMomentumEstimator.reset(),this.rotateMomentum=null),this.zoomMomentum&&(this._zoomMomentumEstimator.reset(),this.zoomMomentum=null),this.navigation.stop())}};p([v()],E.prototype,"_momentumFinished",void 0),p([v()],E.prototype,"viewpoint",void 0),p([v()],E.prototype,"navigation",void 0),E=p([L("esri.views.2d.navigation.actions.Pinch")],E);const Vt=E,tt=D(),lt=D();let N=class extends R{constructor(h){super(h),this._previousCenter=D(),this.viewpoint=new Q({targetGeometry:new j,scale:0,rotation:0})}begin(h,t){this.navigation.begin(),nt(this._previousCenter,t.center.x,t.center.y)}update(h,t){const{state:{size:e,padding:i}}=h;nt(tt,t.center.x,t.center.y),zt(lt,e,i),h.viewpoint=st(this.viewpoint,h.state.paddedViewState.viewpoint,Et(lt,this._previousCenter,tt)),kt(this._previousCenter,tt)}end(){this.navigation.end()}};p([v()],N.prototype,"viewpoint",void 0),p([v()],N.prototype,"navigation",void 0),N=p([L("esri.views.2d.navigation.actions.Rotate")],N);const qt=N,C=10,ut=1,et=new Q({targetGeometry:new j}),it=[0,0],ct=250;let y=class extends R{constructor(h){super(h),this._endTimer=null,this._lastEventTimestamp=null,this.animationManager=null,this.interacting=!1}initialize(){this.pan=new Ft({navigation:this}),this.rotate=new qt({navigation:this}),this.pinch=new Vt({navigation:this}),this.zoomBox=new Dt({view:this.view,navigation:this})}destroy(){this.pan=q(this.pan),this.rotate=q(this.rotate),this.pinch=q(this.pinch),this.zoomBox=q(this.zoomBox),this.animationManager=null}begin(){this.stop(),this._set("interacting",!0)}end(){this._lastEventTimestamp=performance.now(),this._startTimer(ct)}async zoom(h,t=this._getDefaultAnchor()){if(this.begin(),this.view.constraints.snapToZoom&&this.view.constraints.effectiveLODs)return h<1?this.zoomIn(t):this.zoomOut(t);this.setViewpoint(t,h,0,[0,0])}async zoomIn(h){const t=this.view,e=t.constraints.snapToNextScale(t.scale);return this._zoomToScale(e,h)}async zoomOut(h){const t=this.view,e=t.constraints.snapToPreviousScale(t.scale);return this._zoomToScale(e,h)}setViewpoint(h,t,e,i){this.begin(),this.view.stateManager.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,h,t,e,i),this.end()}setViewpointImmediate(h,t=0,e=[0,0],i=this._getDefaultAnchor()){this.view.stateManager.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,i,h,t,e)}continuousRotateClockwise(){var t;const h=this.view.viewpoint;(t=this.animationManager)==null||t.animateContinuous(h,e=>{st(e,e,-ut)})}continuousRotateCounterclockwise(){var t;const h=this.view.viewpoint;(t=this.animationManager)==null||t.animateContinuous(h,e=>{st(e,e,ut)})}resetRotation(){this.view.constraints.rotationEnabled&&(this.view.rotation=0)}continuousPanLeft(){this._continuousPan([-C,0])}continuousPanRight(){this._continuousPan([C,0])}continuousPanUp(){this._continuousPan([0,C])}continuousPanDown(){this._continuousPan([0,-C])}continuousPanVector({x:h,y:t}){this._continuousPan([h*C,t*C])}stop(){var h;this.pan.stopMomentumNavigation(),(h=this.animationManager)==null||h.stop(),this.end(),this._endTimer!==null&&(clearTimeout(this._endTimer),this._endTimer=null,this._set("interacting",!1))}_continuousPan(h){var e;const t=this.view.viewpoint;(e=this.animationManager)==null||e.animateContinuous(t,i=>{Y(i,i,h),this.view.constraints.constrainByGeometry(i)})}_startTimer(h){return this._endTimer!==null||(this._endTimer=setTimeout(()=>{this._endTimer=null;const t=performance.now()-(this._lastEventTimestamp??0);t<ct?this._endTimer=this._startTimer(t):this._set("interacting",!1)},h)),this._endTimer}_getDefaultAnchor(){const{size:h,padding:{left:t,right:e,top:i,bottom:s}}=this.view;return it[0]=.5*(h[0]-e+t),it[1]=.5*(h[1]-s+i),it}async _zoomToScale(h,t=this._getDefaultAnchor()){const{view:e}=this,{constraints:i,scale:s,viewpoint:n,size:a,padding:r}=e,o=i.canZoomInTo(h),l=i.canZoomOutTo(h);if(!(h<s&&!o||h>s&&!l))return rt(et,n,h/s,0,t,a,r),i.constrainByGeometry(et),e.goTo(et,{animate:!0,animationMode:"always",duration:dt(F("mapview-essential-goto-duration")),pickClosestTarget:!1})}_scaleRotateTranslateViewpoint(h,t,e,i,s){const{view:n}=this,{size:a,padding:r,constraints:o,scale:l,viewpoint:m}=n,c=l*e,_=o.canZoomInTo(c),u=o.canZoomOutTo(c);return(e<1&&!_||e>1&&!u)&&(e=1),Y(m,m,s),rt(h,m,e,i,t,a,r),o.constrainByGeometry(h)}};p([v()],y.prototype,"animationManager",void 0),p([v({type:Boolean,readOnly:!0})],y.prototype,"interacting",void 0),p([v()],y.prototype,"pan",void 0),p([v()],y.prototype,"pinch",void 0),p([v()],y.prototype,"rotate",void 0),p([v()],y.prototype,"view",void 0),p([v()],y.prototype,"zoomBox",void 0),y=p([L("esri.views.2d.navigation.MapViewNavigation")],y);const _e=y,Ot={shaders:{vertexShader:M("magnifier/magnifier.vert"),fragmentShader:M("magnifier/magnifier.frag")},attributes:new Map([["a_pos",0]])};function ge(h){return It(h,Ot)}export{ae as a,ge as b,Ot as c,k as d,se as e,re as n,ne as r,oe as t,_e as y};
