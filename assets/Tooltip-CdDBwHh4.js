const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/calcite-button-B3dK3J4O.js","assets/button-D77aSY9T.js","assets/jsxFactory-DmHi7Kb2.js","assets/index-DX0rcHuW.js","assets/index-B2yzeq1w.css","assets/uuid-fwrPAdZb.js","assets/form-DT0Txu1X.js","assets/dom-Dv5tDaqe.js","assets/interactive-CM5F_5Ay.js","assets/label-CcvHzygA.js","assets/component-ByvC-PUv.js","assets/loadable-BpL5xwNx.js","assets/locale-jvDArz_C.js","assets/key-D5DPfjW0.js","assets/observers-CLdbMMrh.js","assets/t9n-Bv5oqD69.js","assets/icon-CWAu07D3.js","assets/loader-CQvnYTBN.js","assets/calcite-icon-W-AdNGRC.js","assets/calcite-input-UxOKjIHa.js","assets/input2-Dot_SaOW.js","assets/Validation-BmSC9xQN.js","assets/input-Dt5r39B0.js","assets/input-message-D42H2lMx.js","assets/progress-Cn98mWq-.js","assets/calcite-dropdown-CMVg7z72.js","assets/floating-ui-CVXgJmXk.js","assets/debounce-C5YDvsuO.js","assets/openCloseComponent-BcNBZQe2.js","assets/calcite-dropdown-item-BBSMiy9e.js","assets/resources3-B__tPmNQ.js","assets/calcite-dropdown-group-BLFzdlHC.js"])))=>i.map(i=>d[i]);
import{e$ as L,aF as C,ac as l,ad as a,ag as p,bh as Rt,_ as $,j2 as ht,M as St,oH as Ft,g2 as zt,oI as xt,oJ as Pt,oK as Ut,oL as Ht,bY as V,b5 as Yt,dN as F,dI as vt,hn as qt}from"./index-DX0rcHuW.js";import{n as Xt}from"./themeUtils-C3zvZbsE.js";import{B as T,n as s,e as U,u as h,f as Kt,r as at,q as Nt}from"./jsxFactory-DmHi7Kb2.js";import{o as Bt}from"./a11yUtils-BcOnuh2m.js";import{t as Zt}from"./memoize-DsJmrG76.js";import{b as jt}from"./unitFormatUtils-BYvkXWcg.js";import{e as ft}from"./getDefaultUnitForView-Cl7rPtCt.js";import{f as O}from"./keybindings-RFI4I3n4.js";import{n as wt}from"./Cyclical-CEj-eenM.js";import{k as Jt,x as mt,C as Wt,F as Gt,S as Qt,U as E,q as te}from"./quantityFormatUtils-BcCMIlyg.js";import{i as H,o as ee,s as kt}from"./quantityUtils-DSpmykXR.js";import{_ as ne,E as ie,g as oe,m as se}from"./coordinateFormatter-D92BK--E.js";import{A as le}from"./SnappingManager-C8RCylzd.js";import{e as z}from"./directionModeIcons-Br5woIHu.js";const S=1,Ct=6;function re(e,t){return{angleRelative:ae,direction:ce,directionRelative:de,directionRelativeBilateral:ue,latitudeDecimalDegrees:he,longitudeDecimalDegrees:pe,area:(n,i)=>Jt(e,n,i??t.area),length:(n,i,o)=>mt(e,n,i??t.length,o),lengthRelative:(n,i)=>Wt(e,n,i??t.length),totalLength:(n,i)=>mt(e,n,i??t.length),verticalLength:(n,i)=>Gt(e,n,i??t.length),verticalLengthRelative:(n,i)=>Qt(e,n,i??t.verticalLength),percentage:ve,scalar:Mt,scale:fe}}function ae(e){return C(e,{signDisplay:"exceptZero",...ct(S)})}function ce(e){return E(e,e.rotationType,S)}function de(e){const t=le(e);return C(t,{style:"unit",unitDisplay:"narrow",unit:"degree",signDisplay:t>0?"never":"exceptZero",...ct(S)})}function ue(e){return E(e,e.rotationType,S)}function pe(e){return Tt(e,Dt)}function he(e){return Tt(e,At)}function Ne(e){return Et(e,Dt)}function Be(e){return Et(e,At)}function Tt(e,t){return E(kt(e,"degrees"),"geographic",Ct,t,!1)}function Et(e,t){const i=t.normalize(kt(e,"degrees").value,void 0,!1);return Mt(H(i),Ct)}function ve(e){return C(e.value,{style:"percent"})}function fe(e){return C(e,{style:"percent",maximumFractionDigits:0})}function Mt(e,t){return C(e.value,ct(t))}function ct(e){return{minimumFractionDigits:e,maximumFractionDigits:e}}function Ze(e){return(t,n)=>{const i=L(t);return i!=null?e(i,n):null}}const me=e=>{let t=`[-+]?[0-9${e.thousands}]+`;return e.decimal!==""&&(t+=`${e.decimal}[0-9]+`),new RegExp(`^(${t}\\s*)${e.separator}(\\s*${t})$`,"i")},_e=" ",It=[];for(const e of[",","\\|","\\s+"])for(const t of["\\.",",",""])for(const n of["",",","\\.",_e,"\\s+"])e!==t&&e!==n&&t!==n&&It.push({separator:e,decimal:t,thousands:n,pattern:me({decimal:t,thousands:n,separator:e})});function je(e){for(const{decimal:t,thousands:n,pattern:i}of It){i.lastIndex=0;const o=e.match(i);if(!o)continue;const r=L(_t(o[1],t,n)),d=L(_t(o[2],t,n));if(r!=null&&d!=null)return{x:H(r),y:H(d)}}return null}function _t(e,t,n){let i=e.replaceAll(/[\s+]/g,"");return n!==""&&(i=i.replaceAll(n,"")),t!==""&&(i=i.replaceAll(t,".")),i}function Je(e){if(!e||L(e)!=null||!ne())return null;const t=ie(e),n=R(t==null?void 0:t.latitude),i=R(t==null?void 0:t.longitude);return i!=null&&n!=null?{latitude:n,longitude:i}:null}function We(e){return R(oe(e))}function Ge(e){return R(se(e))}function R(e){return e!=null?ee(e,"degrees","geographic"):null}const Dt=new wt(-180,180),At=new wt(-90,90);let x=class extends Rt{constructor(t){super(t),this.helpMessage=void 0,this.viewType=void 0}get visibleElements(){return this.sketchOptions.tooltips.visibleElements}get allFields(){return[]}get editableFields(){return this.allFields.filter(t=>t.visible&&!t.readOnly)}clearInputValues(){this.allFields.forEach(t=>t.clearInputValue())}};l([a()],x.prototype,"sketchOptions",void 0),l([a()],x.prototype,"visibleElements",null),l([a()],x.prototype,"helpMessage",void 0),l([a()],x.prototype,"viewType",void 0),l([a()],x.prototype,"allFields",null),l([a()],x.prototype,"editableFields",null),x=l([p("esri.views.interactive.tooltip.infos.SketchTooltipInfo")],x);const f="esri-tooltip",ye=`${f}-content`,ge=`${f}-content--input`,$e=`${f}-content__header`,be=`${f}-content__header__spacer`,yt=`${f}-content__header__actions`,Vt=`${f}-draw-header-actions`,xe=`${f}-table`,we=`${f}-help-message`,ke=`${f}-help-message__text`,Ce=`${f}-help-message__icon`,I=`${f}-field`,D={base:I,inputMode:`${I}--input`,title:`${I}__title`,value:`${I}__value`};let u=class extends T{constructor(){super(...arguments),this.hidden=!1,this.mode="feedback"}render(){return s("div",{class:this.classes({[D.base]:!0,[D.inputMode]:this.mode==="input"})},s("div",{class:D.title},this.title),s("div",{class:D.value},this.value))}};l([a()],u.prototype,"hidden",void 0),l([a()],u.prototype,"mode",void 0),l([a()],u.prototype,"title",void 0),l([a()],u.prototype,"value",void 0),u=l([p("esri.views.interactive.tooltip.components.TooltipField")],u);const Te={base:`${f}-value-by-value`};let b=class extends T{constructor(){super(...arguments),this.divider="×"}render(){return s("div",{class:Te.base},s("span",null,this.left),s("span",null,this.divider),s("span",null,this.right))}};l([a()],b.prototype,"left",void 0),l([a()],b.prototype,"divider",void 0),l([a()],b.prototype,"right",void 0),b=l([p("esri.views.interactive.tooltip.components.ValueByValue")],b);let c=class extends T{constructor(){super(...arguments),this._focusAbortController=new AbortController,this._transition=null,this._mode="feedback",this._getFormatters=Zt(re),this._onDiscard=()=>{this.info.clearInputValues(),this.exitInputMode()},this._onCommit=(e,t)=>{if(t==="commit-and-exit")return void this.exitInputMode();if(t==="commit-on-blur")return;const n=this._getFocusableElements(),i=n.length,o=n.indexOf(e);if(o===-1)return void this.exitInputMode();const r=((o+(t==="commit-and-next"?1:-1))%i+i)%i;A(n.at(r))},this._handleTab=e=>{if(e.code!==O.next)return;const t=this._getFocusableElements(),n=t.at(0),i=t.at(-1);n&&i&&(e.shiftKey?document.activeElement===n&&(e.preventDefault(),A(i)):document.activeElement===i&&(e.preventDefault(),A(n)))}}get mode(){return this._mode}get _displayUnits(){const e=ft(this.tooltip.view);return{length:e,verticalLength:e,area:e,angle:"degrees"}}get _inputUnitInfos(){const e=this._messagesUnits,t=m=>({unit:m,abbreviation:jt(e,m,"abbr")}),n=ft(this.tooltip.view),i=t(Pt(n)),o=t(Ut(n)),r=t(Ht(n)),d=t("degrees");return{length:i,lengthRelative:i,verticalLength:o,verticalLengthRelative:o,area:r,direction:d,orientation:d,rotation:d,longitudeLatitude:d}}get _formatters(){return this._getFormatters(this._messagesUnits,this._displayUnits)}get fieldContext(){return{formatters:this._formatters,inputUnitInfos:this._inputUnitInfos,messages:this._messagesTooltip,sketchOptions:this.info.sketchOptions,onCommit:this._onCommit,onDiscard:this._onDiscard}}render(){const{visibleElements:e}=this.info.sketchOptions.tooltips,t=this._renderedContent,n=this._renderedActions,i=this._renderedHelpMessage,o=t.length>0,r=o||!!i,d=this.mode==="input";return s("div",{class:Kt(ye,d&&ge),onkeydown:this._handleTab},d&&r&&e.header?s("div",{class:$e,key:"header"},s("calcite-button",{appearance:"transparent","data-testid":"tooltip-back-button",iconFlipRtl:"both",iconStart:"chevron-left",key:"discard-button",kind:"neutral",onclick:this._onDiscard,scale:"s",tabIndex:-1}),n.length>0?s(h,null,s("div",{class:be,key:"spacer"}),s("div",{class:yt,key:"actions"},n)):null):null,o?s("div",{class:xe,key:"content"},...t):null,i)}_renderActions(){return null}loadDependencies(){return at({button:()=>$(()=>import("./calcite-button-B3dK3J4O.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])),icon:()=>$(()=>import("./calcite-icon-W-AdNGRC.js"),__vite__mapDeps([18,16,2,3,4,5,7,14])),input:()=>$(()=>import("./calcite-input-UxOKjIHa.js"),__vite__mapDeps([19,20,2,3,4,5,7,6,8,13,9,10,11,12,14,15,21,22,16,23,24]))})}async enterInputMode(e){try{await this._transitionTo("input"),await this._focusField(e)}catch(t){ht(t)}}async exitInputMode({focusOnView:e=!0}={}){var t;try{const{container:n,info:i}=this;i.clearInputValues();const o=e?(t=n==null?void 0:n.closest(".esri-view"))==null?void 0:t.querySelector(".esri-view-surface"):null;await this._transitionTo("feedback"),o instanceof HTMLElement&&o.focus()}catch(n){ht(n)}}get _renderedContent(){return gt(this._renderContent())}get _renderedActions(){return gt(this._renderActions())}get _renderedHelpMessage(){const{sketchOptions:e,visibleElements:t}=this.info;if(!t.helpMessage)return null;const n=e.tooltips.helpMessage??this._defaultHelpMessage;if(!n)return null;const i=e.tooltips.helpMessageIcon??"information";return s("div",{class:we,key:"help-message"},i?s("calcite-icon",{class:Ce,icon:i,scale:"s"}):null,s("div",{class:ke},n))}get _defaultHelpMessage(){var i,o,r;const{helpMessage:e,viewType:t}=this.info;if(e==null)return null;const n=t==="3d"?"helpMessages3d":"helpMessages2d";return(r=(o=(i=this._messagesTooltip)==null?void 0:i.sketch)==null?void 0:o[n])==null?void 0:r[e]}async _focusField(e){var o;(o=this._focusAbortController)==null||o.abort(),this._focusAbortController=new AbortController;const{signal:t}=this._focusAbortController;await this._waitForInputs(),St(t);const n=this._getFocusableInputs(),i=e?n.find(r=>r.getAttribute("data-field-name")===e):n.at(0);await A(i)}async _transitionTo(e){var i,o;if(this._mode===e)return;const t=()=>{this._mode=e};if(!((i=this.domNode)!=null&&i.firstChild)||!document.startViewTransition||Bt())return void t();this.autoRenderingEnabled=!1,(o=this._transition)==null||o.skipTransition();const n=this._transition=document.startViewTransition(()=>{if(!this.destroyed)return this.autoRenderingEnabled=!0,t(),this.renderNow(),Ft()});try{await this._transition.finished}finally{n===this._transition&&(this._transition=null)}}async _waitForInputs(){const e=()=>{var t;return Array.from(((t=this.domNode)==null?void 0:t.querySelectorAll("calcite-input"))??[])};for(;e().length===0;)await zt(Ee);await xt()}_getFocusableInputs(){var e;return Array.from(((e=this.domNode)==null?void 0:e.querySelectorAll("calcite-input:not([read-only]):not([disabled])"))??[])}_getFocusableElements(){var t;const e=(t=this.domNode)==null?void 0:t.querySelector(`.${Vt}`);return[...Array.from((e==null?void 0:e.querySelectorAll(`.${yt} calcite-button:not([disabled])`))??[]),...this._getFocusableInputs()]}};async function A(e){await(e==null?void 0:e.setFocus())}function gt(e){return(Array.isArray(e)?e:[e]).flat(10).filter(t=>!!t)}l([U("esri/core/t9n/Units"),a()],c.prototype,"_messagesUnits",void 0),l([U("esri/views/interactive/tooltip/t9n/Tooltip"),a()],c.prototype,"_messagesTooltip",void 0),l([a()],c.prototype,"info",void 0),l([a()],c.prototype,"tooltip",void 0),l([a()],c.prototype,"_mode",void 0),l([a()],c.prototype,"mode",null),l([a()],c.prototype,"_displayUnits",null),l([a()],c.prototype,"_inputUnitInfos",null),l([a()],c.prototype,"_formatters",null),l([a()],c.prototype,"fieldContext",null),l([a()],c.prototype,"_renderedContent",null),l([a()],c.prototype,"_renderedActions",null),l([a()],c.prototype,"_renderedHelpMessage",null),l([a()],c.prototype,"_defaultHelpMessage",null),c=l([p("esri.views.interactive.tooltip.content.TooltipContent")],c);const Ee=20;let Y=class extends c{_renderContent(){const{area:t,radius:n,xSize:i,ySize:o,visibleElements:r}=this.info,d=this._messagesTooltip.sketch,m=this._formatters;return s(h,null,r.radius&&n!=null?s(u,{title:d.radius,value:m.length(n)}):null,r.size&&i!=null&&o!=null?s(u,{title:d.size,value:s(b,{left:m.length(i),right:m.length(o)})}):null,r.area?s(u,{title:d.area,value:m.area(t)}):null)}};Y=l([p("esri.views.interactive.tooltip.content.TooltipContentDrawCircle")],Y);const _=`${f}-editable-field`,v={base:_,inputMode:`${_}--input`,feedbackMode:`${_}--feedback`,readOnly:`${_}--read-only`,locked:`${_}--locked`,title:`${_}__title`,value:`${_}__value`,valueContent:`${_}__value__content`,valueContentReadOnly:`${_}__value__content--read-only`,lockIcon:`${_}__lock-icon`,input:`${_}__input`,inputSuffix:`${_}__input-suffix`,button:`${_}__button`},P={lock:"lock",unlock:"unlock"};let y=class extends T{constructor(){super(...arguments),this._input=null,this._onKeyDown=t=>{t.key===O.discard&&this.mode==="input"&&this._input&&this.context.onDiscard(this._input)},this._onInputKeyDown=t=>{const n=this._input;if(n)switch(t.key){case O.commit:return this.field.onCommit("commit-and-exit",n,this.context);case O.next:{t.preventDefault(),t.stopPropagation();const i=t.shiftKey?"commit-and-previous":"commit-and-next";return this.field.onCommit(i,n,this.context)}}},this._onInput=t=>{this.field.onInput(t.target.value)},this._onInputBlur=()=>{const t=this._input;t&&this.field.onCommit("commit-on-blur",t,this.context)},this._selectText=()=>{const t=()=>{var n;this._input===document.activeElement&&((n=this._input)==null||n.selectText())};t(),xt().then(t)}}initialize(){this.addHandles(V(()=>this._rawDisplayValue,()=>{const{committed:t,inputValue:n}=this.field;t||n||this._input!==document.activeElement||this._selectText()}))}loadDependencies(){return at({button:()=>$(()=>import("./calcite-button-B3dK3J4O.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])),icon:()=>$(()=>import("./calcite-icon-W-AdNGRC.js"),__vite__mapDeps([18,16,2,3,4,5,7,14])),input:()=>$(()=>import("./calcite-input-UxOKjIHa.js"),__vite__mapDeps([19,20,2,3,4,5,7,6,8,13,9,10,11,12,14,15,21,22,16,23,24]))})}render(){const{field:t,mode:n}=this,i=n==="input",{locked:o,readOnly:r}=t;return s("div",{class:this.classes({[v.base]:!0,[v.feedbackMode]:n==="feedback",[v.inputMode]:n==="input",[v.locked]:o,[v.readOnly]:r})},s("div",{class:v.title,key:"title"},this._title),s("div",{class:v.value,key:"value",onkeydown:this._onKeyDown},i?this._renderValueInputMode():this._renderValueFeedbackMode()))}get _formattedValue(){return this.field.getFormattedValue(this.context)||$t}get _rawDisplayValue(){return this.field.getRawDisplayValue(this.context)}get _suffix(){return this.field.getSuffix(this.context)}get _title(){const{title:t}=this.field;return typeof t=="string"?t:t(this.context)}_renderValueFeedbackMode(){return s(h,null,s("div",{class:v.valueContent,key:"value-feedback"},this._formattedValue),this.field.locked&&this.mode!=="input"?s("calcite-icon",{class:v.lockIcon,icon:P.lock,key:"icon",scale:"s"}):null)}_renderValueInputMode(){return this.field.readOnly?this._renderValueReadOnly():this._renderValueWritable()}_renderValueReadOnly(){return s("div",{class:this.classes(v.valueContent,v.valueContentReadOnly),key:"value-read-only"},this._formattedValue)}_renderValueWritable(){var m;const{field:t}=this,{name:n,invalid:i,locked:o}=t,r=((m=this.context)==null?void 0:m.messages.sketch)??{},d=o?r.unlockConstraint:r.lockConstraint;return s(h,null,s("calcite-input",{afterCreate:M=>{this._input=M},class:v.input,"data-field-name":n,"data-testid":`tooltip-field-${n}`,onblur:this._onInputBlur,onfocus:this._selectText,onkeydown:this._onInputKeyDown,scale:"s",status:i?"invalid":"idle",type:"text",value:this._rawDisplayValue??$t,onCalciteInputInput:this._onInput}),s("div",{class:v.inputSuffix,key:"suffix"},this._suffix),t.lockable?s("calcite-button",{alignment:"center",appearance:"transparent",class:v.button,"data-testid":`tooltip-field-${n}-lock`,iconStart:o?P.lock:P.unlock,key:"lock",kind:"neutral",label:d,onclick:()=>{t.toggleLock(this.context)},scale:"s",tabIndex:-1,title:d}):s("div",{key:"lock-empty"}))}};l([a()],y.prototype,"field",void 0),l([a()],y.prototype,"context",void 0),l([a()],y.prototype,"mode",void 0),l([a()],y.prototype,"_input",void 0),l([a()],y.prototype,"_formattedValue",null),l([a()],y.prototype,"_rawDisplayValue",null),l([a()],y.prototype,"_suffix",null),l([a()],y.prototype,"_title",null),y=l([p("esri.views.interactive.tooltip.components.TooltipEditableField")],y);const $t="—";function w(e){const t=e.fields.filter(n=>(n==null?void 0:n.visible)===!0);return t.length===0?null:s(h,null,t.map(n=>s(y,{context:e.context,field:n,key:n.id,mode:e.mode})))}let q=class extends c{_renderContent(){const{fieldContext:t,info:n,mode:i}=this,{visibleElements:o}=n;return s(w,{context:t,fields:[o.coordinates?n.effectiveX:void 0,o.coordinates?n.effectiveY:void 0,o.elevation?n.elevation:void 0,o.orientation?n.orientation:void 0,o.scale?n.scale:void 0],mode:i})}};q=l([p("esri.views.interactive.tooltip.content.TooltipContentDrawMesh")],q);let X=class extends c{_renderContent(){const{fieldContext:t,info:n,mode:i}=this,{elevation:o,visibleElements:r}=n;return s(w,{context:t,fields:[r.coordinates?n.effectiveX:void 0,r.coordinates?n.effectiveY:void 0,r.elevation?o:void 0],mode:i})}};X=l([p("esri.views.interactive.tooltip.content.TooltipContentDrawPoint")],X);let k=class extends T{constructor(e){super(e),this.visibleElements={}}render(){return s("div",{class:Vt},this._isElementVisible("direction")?s(Me,{messages:this.messages,sketchOptions:this.sketchOptions}):null)}loadDependencies(){return at({button:()=>$(()=>import("./calcite-button-B3dK3J4O.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])),dropdown:()=>$(()=>import("./calcite-dropdown-CMVg7z72.js"),__vite__mapDeps([25,2,3,4,5,7,26,27,8,13,11,14,28])),"dropdown-item":()=>$(()=>import("./calcite-dropdown-item-BBSMiy9e.js"),__vite__mapDeps([29,2,3,4,5,7,11,10,8,30,16,14])),"dropdown-group":()=>$(()=>import("./calcite-dropdown-group-BLFzdlHC.js"),__vite__mapDeps([31,2,3,4,5,14,30]))})}_isElementVisible(e){var t;return((t=this.visibleElements)==null?void 0:t[e])??this.sketchOptions.tooltips.visibleElements[e]}};function Me(e){var d,m,M,dt;const{directionMode:t}=e.sketchOptions.values,n=(d=e.messages)==null?void 0:d.sketch,i=(m=n==null?void 0:n.directionModeSelect)==null?void 0:m.title,o="absolute",r="relative";return s("calcite-dropdown",{key:"direction-mode",placement:"bottom-end",scale:"s",widthScale:"s",onCalciteDropdownSelect:Ot=>{var ut,pt;const Lt=(pt=(ut=Ot.target.selectedItems)==null?void 0:ut[0])==null?void 0:pt.getAttribute("data-mode");e.sketchOptions.values.directionMode=Lt??"absolute"}},s("calcite-button",{alignment:"end",appearance:"transparent",iconStart:z[t],kind:"neutral",label:i,scale:"s",slot:"trigger",title:i}),s("calcite-dropdown-group",{selectionMode:"single"},s("calcite-dropdown-item",{"data-mode":r,"data-testid":"tooltip-direction-mode-relative",iconStart:z.relative,key:"relative",selected:t===r},(M=n==null?void 0:n.directionModeSelect)==null?void 0:M.relative),s("calcite-dropdown-item",{"data-mode":o,"data-testid":"tooltip-direction-mode-absolute",iconStart:z.absolute,key:"absolute",selected:t===o},(dt=n==null?void 0:n.directionModeSelect)==null?void 0:dt.absolute)))}l([U("esri/views/interactive/tooltip/t9n/Tooltip"),a()],k.prototype,"messages",void 0),l([a()],k.prototype,"sketchOptions",void 0),l([a()],k.prototype,"visibleElements",void 0),k=l([p("esri.views.interactive.tooltip.components.DrawHeaderActions")],k);let K=class extends c{_renderContent(){const{fieldContext:t,info:n,mode:i}=this,{xyMode:o,visibleElements:r}=n;return s(w,{context:t,fields:[...o==="direction-distance"?[r.direction?n.direction:void 0,r.distance?n.distance:void 0]:[r.coordinates?n.effectiveX:void 0,r.coordinates?n.effectiveY:void 0],r.elevation?n.elevation:void 0,r.area?n.area:void 0],mode:i})}_renderActions(){const{xyMode:t,sketchOptions:n}=this.info;return s(k,{sketchOptions:n,visibleElements:{direction:t==="direction-distance"}})}};K=l([p("esri.views.interactive.tooltip.content.TooltipContentDrawPolygon")],K);let N=class extends c{_renderContent(){const{fieldContext:t,info:n,mode:i}=this,{xyMode:o,visibleElements:r}=n;return s(w,{context:t,fields:[...o==="direction-distance"?[r.direction?n.direction:void 0,r.distance?n.distance:void 0]:[r.coordinates?n.effectiveX:void 0,r.coordinates?n.effectiveY:void 0],r.elevation?n.elevation:void 0,r.totalLength?n.totalLength:void 0],mode:i})}_renderActions(){const{xyMode:t,sketchOptions:n}=this.info;return s(k,{sketchOptions:n,visibleElements:{direction:t==="direction-distance"}})}};N=l([p("esri.views.interactive.tooltip.content.TooltipContentDrawPolyline")],N);let B=class extends c{_renderContent(){const{area:t,xSize:n,ySize:i,visibleElements:o}=this.info,r=this._messagesTooltip.sketch,d=this._formatters;return s(h,null,o.size&&n!=null&&i!=null?s(u,{title:r.size,value:s(b,{left:d.length(n),right:d.length(i)})}):null,o.area?s(u,{title:r.area,value:d.area(t)}):null)}};B=l([p("esri.views.interactive.tooltip.content.TooltipContentDrawRectangle")],B);let Z=class extends c{_renderContent(){const{angle:t,visibleElements:n}=this.info,i=this._messagesTooltip.sketch;return s(h,null,n.rotation?s(u,{title:i.rotation,value:this._formatters.angleRelative(t)}):null)}};Z=l([p("esri.views.interactive.tooltip.content.TooltipContentExtentRotate")],Z);let j=class extends c{_renderContent(){const t=this.info,{visibleElements:n}=t,i=this._messagesTooltip.sketch,o=this._formatters;return s(h,null,n.size?s(u,{title:i.size,value:s(b,{left:o.length(t.xSize),right:o.length(t.ySize)})}):null,n.scale?s(u,{title:i.scale,value:s(b,{left:o.scale(t.xScale),right:o.scale(t.yScale)})}):null)}};j=l([p("esri.views.interactive.tooltip.content.TooltipContentExtentScale")],j);let J=class extends c{_renderContent(){const{fieldContext:t,info:n,mode:i}=this,{visibleElements:o}=n;return s(w,{context:t,fields:[o.coordinates?n.effectiveX:void 0,o.coordinates?n.effectiveY:void 0,o.elevation?n.elevation:void 0],mode:i})}};J=l([p("esri.views.interactive.tooltip.content.TooltipContentMovePoint")],J);let W=class extends c{_renderContent(){const{area:t,distance:n,totalLength:i,visibleElements:o}=this.info,r=this._messagesTooltip.sketch,d=this._formatters;return s(h,null,o.distance?s(u,{title:r.distance,value:d.lengthRelative(n)}):null,o.area&&t!=null?s(u,{title:r.area,value:d.area(t)}):null,o.totalLength&&i!=null?s(u,{title:r.totalLength,value:d.length(i)}):null)}};W=l([p("esri.views.interactive.tooltip.content.TooltipContentReshapeEdgeOffset")],W);let G=class extends c{_renderContent(){const{fieldContext:t,info:n,mode:i}=this,{visibleElements:o}=n;return s(w,{context:t,fields:[o.coordinates?n.effectiveX:void 0,o.coordinates?n.effectiveY:void 0,o.elevation?n.elevation:void 0,o.area&&n.geometryType==="polygon"?n.area:null,o.totalLength&&n.geometryType==="polyline"?n.totalLength:null],mode:i})}};G=l([p("esri.views.interactive.tooltip.content.TooltipContentSelectedVertex")],G);let Q=class extends c{_renderContent(){const{info:t}=this,{visibleElements:n}=t,i=this._messagesTooltip.sketch,o=this._formatters;return s(h,null,n.orientation&&t.orientation!=null?s(u,{key:"orientation",title:i.orientation,value:E(t.orientation,t.rotationType,t.orientationPrecision)}):null,n.size&&t.size!=null?s(u,{key:"size",title:i.size,value:o.length(t.size,t.sizeUnit,t.sizePrecision)}):null)}};Q=l([p("esri.views.interactive.tooltip.content.TooltipContentTransformAbsolute")],Q);let tt=class extends c{_renderContent(){const{fieldContext:e,info:t,mode:n}=this,{visibleElements:i}=t;return s(w,{context:e,fields:[i.coordinates?t.effectiveX:void 0,i.coordinates?t.effectiveY:void 0,i.elevation?t.elevation:void 0,i.orientation?t.orientation:void 0,i.scale?t.scale:void 0],mode:n})}};tt=l([p("esri.views.interactive.tooltip.content.TooltipContentTransformMesh")],tt);let et=class extends c{_renderContent(){const{fieldContext:t,info:n,mode:i}=this,{visibleElements:o}=n;return s(w,{context:t,fields:[o.coordinates?n.effectiveX:void 0,o.coordinates?n.effectiveY:void 0,o.elevation?n.elevation:void 0],mode:i})}};et=l([p("esri.views.interactive.tooltip.content.TooltipContentTransformPoint")],et);let nt=class extends c{_renderContent(){const{info:t}=this,{visibleElements:n}=t,i=this._messagesTooltip.sketch;return s(h,null,n.rotation&&t.rotation!=null?s(u,{key:"rotation",title:i.rotation,value:te(t.rotation,t.rotationType,t.rotationPrecision)}):null,n.orientation&&t.orientation!=null?s(u,{key:"orientation",title:i.orientation,value:E(t.orientation,t.rotationType,t.orientationPrecision)}):null)}};nt=l([p("esri.views.interactive.tooltip.content.TooltipContentTransformRotate")],nt);let it=class extends c{_renderContent(){const{info:e}=this,{visibleElements:t}=e,n=this._messagesTooltip.sketch,i=this._formatters;return s(h,null,t.scale&&e.scale!=null?s(u,{key:"scale",title:n.scale,value:i.percentage(e.scale)}):null,t.size&&e.size!=null?s(u,{key:"size",title:n.size,value:i.length(e.size,e.sizeUnit,e.sizePrecision)}):null)}};it=l([p("esri.views.interactive.tooltip.content.TooltipContentTransformScale")],it);let ot=class extends c{_renderContent(){const{info:t}=this,{visibleElements:n}=t,i=this._messagesTooltip.sketch,o=this._formatters;return s(h,null,n.distance?s(u,{title:i.distance,value:o.length(t.distance)}):null)}};ot=l([p("esri.views.interactive.tooltip.content.TooltipContentTranslate")],ot);let st=class extends c{_renderContent(){const{distance:e,elevation:t,area:n,totalLength:i,visibleElements:o}=this.info,r=this._messagesTooltip.sketch,d=this._formatters;return s(h,null,o.distance?s(u,{title:r.distance,value:d.length(e)}):null,o.elevation&&(t==null?void 0:t.actual)!=null?s(u,{title:r.elevation,value:d.verticalLength(t.actual)}):null,o.area&&n!=null?s(u,{title:r.area,value:d.area(n)}):null,o.totalLength&&i!=null?s(u,{title:r.totalLength,value:d.length(i)}):null)}};st=l([p("esri.views.interactive.tooltip.content.TooltipContentTranslateVertex")],st);let lt=class extends c{_renderContent(){const{info:t}=this,{visibleElements:n}=t,i=this._messagesTooltip.sketch,o=this._formatters;return s(h,null,n.distance?s(u,{title:i.distance,value:o.length(t.distance)}):null)}};lt=l([p("esri.views.interactive.tooltip.content.TooltipContentTranslateXY")],lt);let rt=class extends c{_renderContent(){const{info:e}=this,{visibleElements:t}=e,n=this._messagesTooltip.sketch;return s(h,null,t.distance?s(u,{title:n.distance,value:this._formatters.verticalLengthRelative(e.distance)}):null)}};rt=l([p("esri.views.interactive.tooltip.content.TooltipContentTranslateZ")],rt);function Ie(e,t){if(t==null)return null;const n=document.createElement("div");switch(t.type){case"draw-point":return new X({tooltip:e,info:t,container:n});case"draw-polygon":return new K({tooltip:e,info:t,container:n});case"draw-polyline":return new N({tooltip:e,info:t,container:n});case"draw-mesh":return new q({tooltip:e,info:t,container:n});case"draw-rectangle":return new B({tooltip:e,info:t,container:n});case"draw-circle":return new Y({tooltip:e,info:t,container:n});case"extent-rotate":return new Z({tooltip:e,info:t,container:n});case"extent-scale":return new j({tooltip:e,info:t,container:n});case"move-point":return new J({tooltip:e,info:t,container:n});case"selected-vertex":return new G({tooltip:e,info:t,container:n});case"transform-absolute":return new Q({tooltip:e,info:t,container:n});case"transform-point":return new et({tooltip:e,info:t,container:n});case"transform-mesh":return new tt({tooltip:e,info:t,container:n});case"transform-rotate":return new nt({tooltip:e,info:t,container:n});case"transform-scale":return new it({tooltip:e,info:t,container:n});case"translate":return new ot({tooltip:e,info:t,container:n});case"translate-vertex":return new st({tooltip:e,info:t,container:n});case"translate-z":return new rt({tooltip:e,info:t,container:n});case"translate-xy":return new lt({tooltip:e,info:t,container:n});case"reshape-edge-offset":return new W({tooltip:e,info:t,container:n})}}const De={base:`${f}`};let g=class extends Yt.EventedAccessor{constructor(e){super(e),this.info=null,this.position=null,this.content=null,this.contentContainer=(()=>{const t=document.createElement("div");return t.classList.add(De.base),Xt(t),t})()}initialize(){const{contentContainer:e}=this;this.addHandles([V(()=>{var t;return(t=this.view.overlay)==null?void 0:t.surface},t=>{e.remove(),t==null||t.appendChild(e)},F),V(()=>this.info,(t,n)=>{if(this.content!=null&&t!=null&&n!=null&&t.type===n.type)this.content.info=t;else{this.content=vt(this.content);const i=Ie(this,t);i&&(this.content=i,i.container&&e.appendChild(i.container),this.exitInputMode())}},F),V(()=>({container:this.contentContainer,content:this.content,screenPoint:this._screenPoint,positionMode:this.positionMode,position:this.position}),Ae,F),qt(this.contentContainer,"paste",t=>{this.emit("paste",t)})])}destroy(){this.info=null,this.content=vt(this.content),this.contentContainer.remove()}get positionMode(){var e;return((e=this.content)==null?void 0:e.mode)==="input"?"fixed":"follow-cursor"}get mode(){var e;return((e=this.content)==null?void 0:e.mode)??"feedback"}get _screenPoint(){const{inputManager:e}=this.view;return e!=null&&e.multiTouchActive?null:e==null?void 0:e.latestPointerLocation}get visible(){var e;return((e=this.contentContainer)==null?void 0:e.style.display)!=="none"}clear(){this.info=null}async enterInputMode(e){var t;await((t=this.content)==null?void 0:t.enterInputMode(e))}async exitInputMode(e){var t;await((t=this.content)==null?void 0:t.exitInputMode(e))}};function Ae(e){if(e.positionMode==="fixed"&&!e.position)return;const{style:t}=e.container,n=e.position??e.screenPoint;if(n!=null&&e.content!=null){t.display="block";const i=Nt(e.container),o=`translate(${Math.round(n.x)+bt[0]*(i?-1:1)}px, ${Math.round(n.y)+bt[1]}px)`;t.transform=i?`translate(-100%, 0) ${o}`:o}else t.display="none"}l([a({nonNullable:!0})],g.prototype,"view",void 0),l([a()],g.prototype,"info",void 0),l([a()],g.prototype,"positionMode",null),l([a()],g.prototype,"position",void 0),l([a()],g.prototype,"content",void 0),l([a()],g.prototype,"mode",null),l([a()],g.prototype,"contentContainer",void 0),l([a()],g.prototype,"_screenPoint",null),g=l([p("esri.views.interactive.tooltip.Tooltip")],g);const bt=[20,20];export{Be as A,Ze as B,Je as G,We as H,Ge as J,R as K,Ne as L,je as M,g as h,x as r};
