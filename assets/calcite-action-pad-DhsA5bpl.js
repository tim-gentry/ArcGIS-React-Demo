import{p as b,H as y,d as v,h as a,c as E}from"./jsxFactory-DmHi7Kb2.js";import{c as C,d as w}from"./conditionalSlot-CqkDrxC7.js";import{v as s}from"./dom-Dv5tDaqe.js";import{s as L,a as k,c as T}from"./loadable-BpL5xwNx.js";import{c as A,d as S}from"./locale-jvDArz_C.js";import{u as G,c as P,d as M,s as O}from"./t9n-Bv5oqD69.js";import{t as c,E as H}from"./ExpandToggle-Dotf6BRD.js";import{c as z}from"./observers-CLdbMMrh.js";import{d as D}from"./action-BdLH7y4R.js";import{d as $}from"./action-group-DTA_uOXw.js";import{d as F}from"./action-menu-D84YVNtM.js";import{d as _}from"./icon-CWAu07D3.js";import{d as q}from"./loader-CQvnYTBN.js";import{d as B}from"./popover-Zk0D1hdH.js";import"./index-DX0rcHuW.js";import"./uuid-fwrPAdZb.js";import"./key-D5DPfjW0.js";import"./interactive-CM5F_5Ay.js";import"./component-ByvC-PUv.js";import"./array-DofFqflK.js";import"./floating-ui-CVXgJmXk.js";import"./debounce-C5YDvsuO.js";import"./focusTrapComponent-CklV4nIL.js";import"./openCloseComponent-BcNBZQe2.js";import"./Heading-DiaW_And.js";import"./FloatingArrow-Cy8j4zsH.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.2
 */const l={actionGroupEnd:"action-group--end",container:"container"},R={expandTooltip:"expand-tooltip"},U=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:block}@keyframes in{0%{opacity:0}100%{opacity:1}}:host{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;border-radius:var(--calcite-action-pad-corner-radius, 0.125rem);background:transparent}:host([expanded][layout=vertical]) .container{max-inline-size:var(--calcite-action-pad-expanded-max-width, auto)}::slotted(calcite-action-group:not(:last-of-type)){border-block-end-width:1px}.container{display:inline-flex;flex-direction:column;overflow-y:auto;--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);gap:var(--calcite-action-pad-items-space, 0);border-radius:calc(var(--calcite-action-pad-corner-radius, 0.125rem) * 2);background-color:var(--calcite-action-background-color, var(--calcite-color-foreground-1))}.action-group--bottom{flex-grow:1;justify-content:flex-end;padding-block-end:0px}:host([layout=horizontal]) .container{flex-direction:row}:host([layout=horizontal]) .container .action-group--bottom{padding:0px}:host([layout=horizontal]) .container ::slotted(calcite-action-group:not(:last-of-type)){border-inline-end-width:1px}:host([hidden]){display:none}[hidden]{display:none}",j=U,r=b(class extends y{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteActionPadToggle=v(this,"calciteActionPadToggle",6),this.mutationObserver=z("mutation",()=>this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")))),this.actionMenuOpenHandler=e=>{if(e.target.menuOpen){const o=e.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach(t=>{o.includes(t)||(t.menuOpen=!1)})}},this.toggleExpand=()=>{this.expanded=!this.expanded,this.calciteActionPadToggle.emit()},this.setExpandToggleRef=e=>{this.expandToggleEl=e},this.handleDefaultSlotChange=e=>{const o=s(e).filter(t=>t==null?void 0:t.matches("calcite-action-group"));this.setGroupLayout(o)},this.handleTooltipSlotChange=e=>{const o=s(e).filter(t=>t==null?void 0:t.matches("calcite-tooltip"));this.expandTooltip=o[0]},this.actionsEndGroupLabel=void 0,this.expandDisabled=!1,this.expanded=!1,this.layout="vertical",this.position=void 0,this.scale=void 0,this.messages=void 0,this.messageOverrides=void 0,this.overlayPositioning="absolute",this.expandTooltip=void 0,this.effectiveLocale="",this.defaultMessages=void 0}expandedHandler(e){c({el:this.el,expanded:e})}layoutHandler(){this.updateGroups()}onMessagesChange(){}effectiveLocaleChange(){G(this,this.effectiveLocale)}connectedCallback(){C(this),A(this),P(this)}disconnectedCallback(){S(this),M(this),w(this)}async componentWillLoad(){L(this);const{el:e,expanded:o}=this;c({el:e,expanded:o}),await O(this)}componentDidLoad(){k(this)}async setFocus(){var e;await T(this),(e=this.el)==null||e.focus()}updateGroups(){this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")))}setGroupLayout(e){e.forEach(o=>o.layout=this.layout)}renderBottomActionGroup(){const{expanded:e,expandDisabled:o,messages:t,el:u,position:m,toggleExpand:h,scale:i,layout:f,actionsEndGroupLabel:g,overlayPositioning:x}=this,n=o?null:a(H,{collapseLabel:t.collapseLabel,collapseText:t.collapse,el:u,expandLabel:t.expandLabel,expandText:t.expand,expanded:e,position:m,ref:this.setExpandToggleRef,scale:i,toggle:h,tooltip:this.expandTooltip});return n?a("calcite-action-group",{class:l.actionGroupEnd,label:g,layout:f,overlayPositioning:x,scale:i},a("slot",{name:R.expandTooltip,onSlotchange:this.handleTooltipSlotChange}),n):null}render(){return a(E,{key:"5bbd7e4402b9d4f0a319c7c8fe98ce20a9646d89",onCalciteActionMenuOpen:this.actionMenuOpenHandler},a("div",{key:"7757b0e8e4b47eacd05fd99a74d564ff855c157d",class:l.container},a("slot",{key:"2d9e826255494320a4c374282fa8b0c59ed26ddd",onSlotchange:this.handleDefaultSlotChange}),this.renderBottomActionGroup()))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],layout:["layoutHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return j}},[17,"calcite-action-pad",{actionsEndGroupLabel:[1,"actions-end-group-label"],expandDisabled:[516,"expand-disabled"],expanded:[1540],layout:[513],position:[513],scale:[513],messages:[1040],messageOverrides:[1040],overlayPositioning:[513,"overlay-positioning"],expandTooltip:[32],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]},void 0,{expanded:["expandedHandler"],layout:["layoutHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function d(){if(typeof customElements>"u")return;["calcite-action-pad","calcite-action","calcite-action-group","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover"].forEach(e=>{switch(e){case"calcite-action-pad":customElements.get(e)||customElements.define(e,r);break;case"calcite-action":customElements.get(e)||D();break;case"calcite-action-group":customElements.get(e)||$();break;case"calcite-action-menu":customElements.get(e)||F();break;case"calcite-icon":customElements.get(e)||_();break;case"calcite-loader":customElements.get(e)||q();break;case"calcite-popover":customElements.get(e)||B();break}})}d();const xe=r,be=d;export{xe as CalciteActionPad,be as defineCustomElement};
