const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/calcite-button-B3dK3J4O.js","assets/button-D77aSY9T.js","assets/jsxFactory-DmHi7Kb2.js","assets/index-DX0rcHuW.js","assets/index-B2yzeq1w.css","assets/uuid-fwrPAdZb.js","assets/form-DT0Txu1X.js","assets/dom-Dv5tDaqe.js","assets/interactive-CM5F_5Ay.js","assets/label-CcvHzygA.js","assets/component-ByvC-PUv.js","assets/loadable-BpL5xwNx.js","assets/locale-jvDArz_C.js","assets/key-D5DPfjW0.js","assets/observers-CLdbMMrh.js","assets/t9n-Bv5oqD69.js","assets/icon-CWAu07D3.js","assets/loader-CQvnYTBN.js"])))=>i.map(i=>d[i]);
import{ac as e,ad as i,ag as d,bh as v,eF as h,_ as g}from"./index-DX0rcHuW.js";import{e as z,B as Z,r as _,n as m}from"./jsxFactory-DmHi7Kb2.js";import{e as p}from"./globalCss-CZa70j6i.js";let l=class extends v{get canZoomIn(){var s,n,u;if(!((s=this.view)==null?void 0:s.ready))return!1;const o=(u=(n=this.view)==null?void 0:n.constraints)==null?void 0:u.effectiveMaxScale;return o===0||this._scale>o}get canZoomOut(){var n;const{view:t}=this;if(!(t==null?void 0:t.ready))return!1;const s=(n=t.constraints)==null?void 0:n.effectiveMinScale;return s===0||this._scale<s}get _scale(){var o,s,n;const t=(s=(o=this.view)==null?void 0:o.animation)==null?void 0:s.target;return(t&&"then"in t||t==null?void 0:t.scale)??((n=this.view)==null?void 0:n.scale)??0}};e([i({readOnly:!0})],l.prototype,"canZoomIn",null),e([i({readOnly:!0})],l.prototype,"canZoomOut",null),e([i()],l.prototype,"view",void 0),e([i()],l.prototype,"_scale",null),l=e([d("esri.widgets.Zoom.ZoomConditions2D")],l);const O=l;let c=class extends v{get canZoomIn(){return!!this.view.ready}get canZoomOut(){return!!this.view.ready}};e([i({readOnly:!0})],c.prototype,"canZoomIn",null),e([i({readOnly:!0})],c.prototype,"canZoomOut",null),e([i()],c.prototype,"view",void 0),c=e([d("esri.widgets.Zoom.ZoomConditions3D")],c);const b=c;let r=class extends v{constructor(o){super(o)}destroy(){this.view=null}get canZoomIn(){return this._zoomConditions!=null&&this._zoomConditions.canZoomIn}get canZoomOut(){var o;return this._zoomConditions!=null&&((o=this._zoomConditions)==null?void 0:o.canZoomOut)}get state(){var o;return(o=this.view)!=null&&o.ready?"ready":"disabled"}set view(o){o?o.type==="2d"?this._zoomConditions=new O({view:o}):o.type==="3d"&&(this._zoomConditions=new b({view:o})):this._zoomConditions=null,this._set("view",o)}zoomIn(){if(!this.canZoomIn)return;const o=this.view;o.type==="2d"?o.mapViewNavigation.zoomIn():h(o.goTo({zoomFactor:2}))}zoomOut(){if(!this.canZoomOut)return;const o=this.view;o.type==="2d"?o.mapViewNavigation.zoomOut():h(o.goTo({zoomFactor:.5}))}};e([i()],r.prototype,"_zoomConditions",void 0),e([i()],r.prototype,"canZoomIn",null),e([i()],r.prototype,"canZoomOut",null),e([i({readOnly:!0})],r.prototype,"state",null),e([i()],r.prototype,"view",null),r=e([d("esri.widgets.Zoom.ZoomViewModel")],r);const y=r,w={base:"esri-zoom",horizontalLayout:"esri-zoom--horizontal"};let a=class extends Z{constructor(t,o){super(t,o),this.messages=null,this.viewModel=new y,this.zoomIn=()=>this.viewModel.zoomIn(),this.zoomOut=()=>this.viewModel.zoomOut()}loadDependencies(){return _({button:()=>g(()=>import("./calcite-button-B3dK3J4O.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]))})}get icon(){return"magnifying-glass-plus"}set icon(t){this._overrideIfSome("icon",t)}get label(){var t;return((t=this.messages)==null?void 0:t.widgetLabel)??""}set label(t){this._overrideIfSome("label",t)}set layout(t){t!=="horizontal"&&(t="vertical"),this._set("layout",t)}set view(t){this.viewModel.view=t}get view(){return this.viewModel.view}render(){const t={[w.horizontalLayout]:this.layout==="horizontal"},{canZoomIn:o,canZoomOut:s}=this.viewModel,{zoomIn:n,zoomOut:u}=this.messages;return m("div",{class:this.classes(w.base,p.widget,t)},m("calcite-button",{class:p.widgetButton,disabled:!o,iconStart:"plus",kind:"neutral",label:n,onclick:this.zoomIn,title:n}),m("calcite-button",{class:p.widgetButton,disabled:!s,iconStart:"minus",kind:"neutral",label:u,onclick:this.zoomOut,title:u}))}};e([i()],a.prototype,"icon",null),e([i()],a.prototype,"label",null),e([i({value:"vertical"})],a.prototype,"layout",null),e([i(),z("esri/widgets/Zoom/t9n/Zoom")],a.prototype,"messages",void 0),e([i()],a.prototype,"view",null),e([i({type:y})],a.prototype,"viewModel",void 0),a=e([d("esri.widgets.Zoom")],a);const I=a,S=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"}));export{S as Z,I as a,y as p};
