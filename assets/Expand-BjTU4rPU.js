const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/calcite-button-B3dK3J4O.js","assets/button-D77aSY9T.js","assets/jsxFactory-DmHi7Kb2.js","assets/index-DX0rcHuW.js","assets/index-B2yzeq1w.css","assets/uuid-fwrPAdZb.js","assets/form-DT0Txu1X.js","assets/dom-Dv5tDaqe.js","assets/interactive-CM5F_5Ay.js","assets/label-CcvHzygA.js","assets/component-ByvC-PUv.js","assets/loadable-BpL5xwNx.js","assets/locale-jvDArz_C.js","assets/key-D5DPfjW0.js","assets/observers-CLdbMMrh.js","assets/t9n-Bv5oqD69.js","assets/icon-CWAu07D3.js","assets/loader-CQvnYTBN.js","assets/calcite-icon-W-AdNGRC.js","assets/calcite-panel-DcFdTOap.js","assets/panel-DPpK0hDp.js","assets/action-menu-D84YVNtM.js","assets/array-DofFqflK.js","assets/action-BdLH7y4R.js","assets/popover-Zk0D1hdH.js","assets/floating-ui-CVXgJmXk.js","assets/debounce-C5YDvsuO.js","assets/focusTrapComponent-CklV4nIL.js","assets/openCloseComponent-BcNBZQe2.js","assets/Heading-DiaW_And.js","assets/FloatingArrow-Cy8j4zsH.js","assets/scrim-CLRFMMcr.js","assets/calcite-popover-CqUVx7C5.js","assets/calcite-sheet-BEPWkgZJ.js"])))=>i.map(i=>d[i]);
import{ac as n,ad as i,ag as y,bh as E,b_ as b,bZ as u,ia as f,_ as h}from"./index-DX0rcHuW.js";import{e as v,B as T,r as M,n as a}from"./jsxFactory-DmHi7Kb2.js";import{e as g}from"./globalCss-CZa70j6i.js";import{e as _,t as $}from"./widget-Co0CQfZ6.js";import"./uuid-fwrPAdZb.js";let c=class extends E{constructor(e){super(e),this._viewpointHandle=null,this.group=null}initialize(){this.addHandles(b(()=>{var e;return(e=this.view)==null?void 0:e.ui},"expand",e=>{const{target:t}=e;t&&t!==this&&t.expanded&&t.group&&t.group===this.group&&this._collapse()}))}destroy(){this._viewpointHandle=null,this.view=null}set autoCollapse(e){this._set("autoCollapse",e),this._watchViewpoint()}set expanded(e){var l;const t=!!e;this._set("expanded",t);const o=(l=this.view)==null?void 0:l.ui;o&&o.emit("expand",{target:this}),this._viewpointHandleChange(t)}get state(){var e;return(e=this.view)!=null&&e.ready?"ready":"disabled"}set view(e){this._get("view")!==e&&(this._set("view",e),e&&u(()=>e.ready,()=>{this.view===e&&this._watchViewpoint()},{once:!0,initial:!0}))}_viewpointHandleChange(e){this._viewpointHandle&&(e?u(()=>{var t;return(t=this.view)==null?void 0:t.stationary},()=>{var t;return(t=this._viewpointHandle)==null?void 0:t.resume()},{once:!0,initial:!0}):this._viewpointHandle.pause())}_watchViewpoint(){const e="viewpoint";this.removeHandles(e),this._viewpointHandle=null;const{autoCollapse:t,view:o}=this;if(!o||!t)return;const l=f(()=>o.type==="3d"?o.camera:o.viewpoint,()=>this._collapse());this.addHandles(l,e),this._viewpointHandle=l}_collapse(){this.expanded=!1}};n([i({value:!1})],c.prototype,"autoCollapse",null),n([i({value:!1})],c.prototype,"expanded",null),n([i()],c.prototype,"group",void 0),n([i({readOnly:!0})],c.prototype,"state",null),n([i({value:null})],c.prototype,"view",null),c=n([y("esri.widgets.Expand.ExpandViewModel")],c);const x=c,r="esri-expand",p={base:r,toggle:`${r}__toggle`,popoverContent:`${r}__popover-content`,panel:`${r}__panel`,panelContent:`${r}__panel-content`,sheet:`${r}__sheet`,panelIconNumber:`${r}__panel-icon-number`,contentContainer:`${r}__content-container`,icon:"esri-collapse__icon",iconFlip:"esri-collapse__icon-flip",iconExpanded:`${r}__icon--expanded`,iconNumber:`${r}__icon-number`,content:`${r}__content`,contentExpanded:`${r}__content--expanded`},w="chevrons-left",m="chevrons-right";let s=class extends T{constructor(e,t){super(e,t),this.closeOnEsc=!0,this.collapseTooltip="",this.content="",this.expandTooltip="",this.iconNumber=0,this.messages=null,this.messagesCommon=null,this.mode="auto",this.placement=null,this.viewModel=new x,this.toggle=()=>{this.viewModel.expanded=!this.viewModel.expanded},this._handlePopoverClose=o=>{o.target===this._popoverEl&&(this.viewModel.expanded=o.target.open)},this._handleSheetClose=o=>{this.viewModel.expanded=o.target.open},this._handlePanelClose=o=>{this.viewModel.expanded=!o.target.closed},this._handleKeyDown=o=>{this.viewModel.expanded&&o.key==="Escape"&&!this._willCloseOnEsc(o)&&o.preventDefault()},this._storeToggleButtonEl=o=>{this._toggleButtonEl=o},this._storePopoverEl=o=>{this._popoverEl=o}}loadDependencies(){return M({button:()=>h(()=>import("./calcite-button-B3dK3J4O.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])),icon:()=>h(()=>import("./calcite-icon-W-AdNGRC.js"),__vite__mapDeps([18,16,2,3,4,5,7,14])),panel:()=>h(()=>import("./calcite-panel-DcFdTOap.js"),__vite__mapDeps([19,20,2,3,4,5,7,8,11,14,21,22,13,23,12,10,15,16,17,24,25,26,27,28,29,30,31])),popover:()=>h(()=>import("./calcite-popover-CqUVx7C5.js"),__vite__mapDeps([32,24,2,3,4,5,25,7,26,27,28,29,12,13,14,15,11,30,10,23,8,16,17])),sheet:()=>h(()=>import("./calcite-sheet-BEPWkgZJ.js"),__vite__mapDeps([33,2,3,4,5,7,27,11,14,28,17,12,13,31,15]))})}get expandTitle(){const{expanded:e,messagesCommon:t,collapseTooltip:o,expandTooltip:l}=this;return(e?o||(t==null?void 0:t.collapse):l||(t==null?void 0:t.expand))??""}get _displaySheet(){var e;switch(this.mode){case"drawer":return!0;case"auto":return((e=this.viewModel.view)==null?void 0:e.widthBreakpoint)==="xsmall";default:return!1}}get autoCollapse(){return this.viewModel.autoCollapse}set autoCollapse(e){this.viewModel.autoCollapse=e}get collapseIcon(){return m}set collapseIcon(e){this._overrideIfSome("collapseIcon",e)}get expanded(){return this.viewModel.expanded}set expanded(e){this.viewModel.expanded=e}get expandIcon(){return _(this.content)?this.content.icon:w}set expandIcon(e){this._overrideIfSome("expandIcon",e)}get group(){return this.viewModel.group}set group(e){this.viewModel.group=e}get icon(){return null}get label(){var e;return(_(this.content)?this.content.label:null)??((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}expand(){this.viewModel.expanded=!0}collapse(){this.viewModel.expanded=!1}render(){const{_displaySheet:e,_toggleButtonEl:t,viewModel:{expanded:o},label:l,placement:d}=this;return a("div",{class:this.classes(p.base,g.widget)},this._renderToggle(),e?a("calcite-sheet",{class:p.sheet,heightScale:"l",label:l,onkeydown:this._handleKeyDown,open:o,position:"block-end",onCalciteSheetClose:this._handleSheetClose},a("calcite-panel",{class:p.panel,closable:!0,closed:!o,heading:l,onkeydown:this._handleKeyDown,onCalcitePanelClose:this._handlePanelClose},a("div",{class:p.panelContent},this._renderContent()))):t?a("calcite-popover",{afterCreate:this._storePopoverEl,afterUpdate:this._storePopoverEl,label:l,onkeydown:this._handleKeyDown,open:o,overlayPositioning:"fixed",placement:d??this._getPlacement(),referenceElement:t,onCalcitePopoverClose:this._handlePopoverClose},a("div",{class:p.popoverContent},this._renderContent())):null)}_getPlacement(){const{container:e,view:t}=this,o=e&&t?t.ui.getPosition(e):null;if(!o||o==="manual")return"auto";const[l,d]=o.split("-");return`${d==="right"?"left":"right"}-${l==="bottom"?"end":"start"}`}_willCloseOnEsc(e){const{closeOnEsc:t}=this;return typeof t=="function"?t(e):t}_renderBadgeNumber(){const{expanded:e,iconNumber:t}=this;return t&&!e?a("span",{class:p.iconNumber,key:"expand__icon-number"},t):null}_renderToggleButton(){const{expanded:e,expandTitle:t,expandIcon:o,collapseIcon:l}=this,d=e?l:o,C=d===w||d===m;return a("calcite-button",{afterCreate:this._storeToggleButtonEl,afterUpdate:this._storeToggleButtonEl,class:g.widgetButton,kind:"neutral",label:t,onclick:this.toggle,scale:"s",title:t},d?a("calcite-icon",{class:this.classes(p.icon,C&&p.iconFlip),icon:d,scale:"s"}):null)}_renderToggle(){return a("div",{class:p.toggle},this._renderToggleButton(),this._renderBadgeNumber())}_renderContent(){const{content:e}=this;return typeof e=="string"?a("div",{class:p.contentContainer,innerHTML:e,key:"content__string"}):_(e)?a("div",{class:p.contentContainer,key:"content__widget"},e.render()):e instanceof HTMLElement?a("div",{afterCreate:this._attachToNode,bind:e,class:p.contentContainer,key:"content__html-element"}):$(e)?a("div",{afterCreate:this._attachToNode,bind:e.domNode,class:p.contentContainer,key:"content__node"}):null}_attachToNode(e){const t=this;e.appendChild(t)}};n([i({readOnly:!0})],s.prototype,"expandTitle",null),n([i()],s.prototype,"_toggleButtonEl",void 0),n([i()],s.prototype,"_displaySheet",null),n([i()],s.prototype,"autoCollapse",null),n([i()],s.prototype,"closeOnEsc",void 0),n([i()],s.prototype,"collapseIcon",null),n([i()],s.prototype,"collapseTooltip",void 0),n([i()],s.prototype,"content",void 0),n([i()],s.prototype,"expanded",null),n([i()],s.prototype,"expandIcon",null),n([i()],s.prototype,"expandTooltip",void 0),n([i()],s.prototype,"group",null),n([i()],s.prototype,"icon",null),n([i()],s.prototype,"iconNumber",void 0),n([i()],s.prototype,"label",null),n([i(),v("esri/widgets/Expand/t9n/Expand")],s.prototype,"messages",void 0),n([i(),v("esri/t9n/common")],s.prototype,"messagesCommon",void 0),n([i()],s.prototype,"mode",void 0),n([i()],s.prototype,"placement",void 0),n([i()],s.prototype,"view",null),n([i({type:x})],s.prototype,"viewModel",void 0),s=n([y("esri.widgets.Expand")],s);const N=s;export{N as default};
