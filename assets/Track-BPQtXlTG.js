const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/calcite-button-B3dK3J4O.js","assets/button-D77aSY9T.js","assets/jsxFactory-DmHi7Kb2.js","assets/index-DX0rcHuW.js","assets/index-B2yzeq1w.css","assets/uuid-fwrPAdZb.js","assets/form-DT0Txu1X.js","assets/dom-Dv5tDaqe.js","assets/interactive-CM5F_5Ay.js","assets/label-CcvHzygA.js","assets/component-ByvC-PUv.js","assets/loadable-BpL5xwNx.js","assets/locale-jvDArz_C.js","assets/key-D5DPfjW0.js","assets/observers-CLdbMMrh.js","assets/t9n-Bv5oqD69.js","assets/icon-CWAu07D3.js","assets/loader-CQvnYTBN.js","assets/calcite-tooltip-CXmK6QYS.js","assets/floating-ui-CVXgJmXk.js","assets/debounce-C5YDvsuO.js","assets/openCloseComponent-BcNBZQe2.js","assets/FloatingArrow-Cy8j4zsH.js"])))=>i.map(i=>d[i]);
import{ac as i,ad as o,ag as _,eF as k,eG as T,ap as b,_ as g}from"./index-DX0rcHuW.js";import{e as E,B as y,r as M,n as h}from"./jsxFactory-DmHi7Kb2.js";import{e as u}from"./globalCss-CZa70j6i.js";import{e as I}from"./vmEvent-D4Ubqkbq.js";import{b as f}from"./GeolocationPositioning-DqTbkL_b.js";import"./uuid-fwrPAdZb.js";import"./geolocationUtils-CAAPYkhK.js";import"./project-BQyPiext.js";import"./utils-nzDIu46v.js";import"./utils-D67OULxu.js";import"./GoTo-Bv8U0vYJ.js";const P=15e3;let a=class extends f{constructor(t){super(t),this._watchId=void 0,this._trackStartingTimeoutId=void 0,this._settingPosition=null,this._trackController=null,this.error=void 0,this.positionFilterFunction=null}destroy(){this._stopTracking()}get state(){return this._geolocationUsable?this.view&&!this.view.ready?"disabled":this._settingPosition||this._trackStartingTimeoutId!==void 0?"waiting":this.tracking?"tracking":this.error!=null?"error":"ready":"feature-unsupported"}get tracking(){return this._watchId!==void 0}start(){this.state!=="disabled"&&this.state!=="feature-unsupported"&&this._startTracking()}stop(){this.state!=="disabled"&&this.state!=="feature-unsupported"&&this._stopTracking()}_stopWatchingPosition(){this._watchId!==void 0&&(navigator.geolocation.clearWatch(this._watchId),this._watchId=void 0)}_stopTracking(){this._abortTrack(),this._clearWaitingTimer(),this._stopWatchingPosition(),this._clearGraphic()}_startTracking(){this._stopTracking();const t=T(async e=>{this._abortTrack();const s=new AbortController;this._trackController=s;const{timestamp:n,coords:d}=e,c={timestamp:n,coords:{...d}};this.error=void 0;try{if(typeof this.positionFilterFunction=="function"&&!this.positionFilterFunction.call(null,{position:c})||(await this.updatePosition(e,s),this._trackController!==s))return;this._clearWaitingTimer(),this._addGraphic(),this.emit("track",{position:e}),this._trackController=null}catch(l){if(b(l))return;throw this._trackController=null,this._emitError(l),this._clearWaitingTimer(),l}},0);this._watchId=navigator.geolocation.watchPosition(e=>{this._settingPosition=t(e).catch(k)},this._handleWatchPositionError.bind(this),this.geolocationOptions??void 0),this._trackStartingTimeoutId=setTimeout(()=>{this._trackStartingTimeoutId=void 0},P)}_handleWatchPositionError(t){t.code===t.PERMISSION_DENIED&&this._stopTracking(),this._emitError(t)}_abortTrack(){var t;(t=this._trackController)==null||t.abort(),this._trackController=null}_clearWaitingTimer(){clearTimeout(this._trackStartingTimeoutId),this._trackStartingTimeoutId=void 0,this._settingPosition=null}_emitError(t){this.error=t,this.emit("track-error",{error:t})}};i([o()],a.prototype,"_watchId",void 0),i([o()],a.prototype,"_trackStartingTimeoutId",void 0),i([o()],a.prototype,"_settingPosition",void 0),i([o()],a.prototype,"error",void 0),i([o()],a.prototype,"positionFilterFunction",void 0),i([o({readOnly:!0})],a.prototype,"state",null),i([o({readOnly:!0})],a.prototype,"tracking",null),i([o()],a.prototype,"start",null),i([o()],a.prototype,"stop",null),a=i([_("esri.widgets.Track.TrackViewModel")],a);const v=a,O={base:"esri-track"};let r=class extends y{constructor(t,e){super(t,e),this.messages=null,this.viewModel=new v,this._toggleTracking=()=>{const s=this.viewModel;s&&s.state!=="feature-unsupported"&&s.state!=="disabled"&&(s.state!=="tracking"&&s.state!=="waiting"?this.viewModel.start():this.viewModel.stop())}}loadDependencies(){return M({button:()=>g(()=>import("./calcite-button-B3dK3J4O.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])),tooltip:()=>g(()=>import("./calcite-tooltip-CXmK6QYS.js"),__vite__mapDeps([18,2,3,4,5,7,19,20,21,22]))})}get geolocationOptions(){return this.viewModel.geolocationOptions}set geolocationOptions(t){this.viewModel.geolocationOptions=t}get goToLocationEnabled(){return this.viewModel.goToLocationEnabled}set goToLocationEnabled(t){this.viewModel.goToLocationEnabled=t}get goToOverride(){return this.viewModel.goToOverride}set goToOverride(t){this.viewModel.goToOverride=t}get graphic(){return this.viewModel.graphic}set graphic(t){this.viewModel.graphic=t}get icon(){return"compass-north-circle"}set icon(t){this._overrideIfSome("icon",t)}get label(){var t;return((t=this.messages)==null?void 0:t.widgetLabel)??""}set label(t){this._overrideIfSome("label",t)}get rotationEnabled(){return this.viewModel.rotationEnabled}set rotationEnabled(t){this.viewModel.rotationEnabled=t}get scale(){return this.viewModel.scale}set scale(t){this.viewModel.scale=t}get tracking(){return this.viewModel.tracking}get view(){return this.viewModel.view}set view(t){this.viewModel.view=t}start(){this.viewModel.start()}stop(){this.viewModel.stop()}render(){var p;const{viewModel:t,messages:e,icon:s}=this,n=t==null?void 0:t.state,d=n==="tracking",c=this._localizeError((p=this.viewModel)==null?void 0:p.error),l=(d?e==null?void 0:e.stopTracking:e==null?void 0:e.startTracking)??"",m=n==="feature-unsupported",w=(n==="tracking"?"pause":void 0)??s;return h("div",{class:this.classes(O.base,u.widget)},!m&&h("calcite-button",{class:u.widgetButton,disabled:n==="disabled",iconStart:w,kind:"neutral",label:l,loading:n==="waiting",onclick:this._toggleTracking,title:l}),c?h("calcite-tooltip",{open:!0,overlayPositioning:"fixed",referenceElement:this.container},c):null)}_localizeError(t){var e,s,n;return t instanceof GeolocationPositionError?t.code===GeolocationPositionError.PERMISSION_DENIED?(e=this.messages)==null?void 0:e.permissionError:t.code===GeolocationPositionError.TIMEOUT?(s=this.messages)==null?void 0:s.timeoutError:(n=this.messages)==null?void 0:n.positionUnavailable:t instanceof Error?t.message:void 0}};i([o()],r.prototype,"geolocationOptions",null),i([o()],r.prototype,"goToLocationEnabled",null),i([o()],r.prototype,"goToOverride",null),i([o()],r.prototype,"graphic",null),i([o()],r.prototype,"icon",null),i([o()],r.prototype,"label",null),i([o(),E("esri/widgets/Track/t9n/Track")],r.prototype,"messages",void 0),i([o()],r.prototype,"rotationEnabled",null),i([o()],r.prototype,"scale",null),i([o({readOnly:!0})],r.prototype,"tracking",null),i([o()],r.prototype,"view",null),i([o({type:v}),I(["track","track-error"])],r.prototype,"viewModel",void 0),r=i([_("esri.widgets.Track")],r);const A=r;export{A as default};
