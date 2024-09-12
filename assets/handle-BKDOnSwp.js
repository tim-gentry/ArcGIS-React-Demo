import{p as u,H as f,d as i,h as o}from"./jsxFactory-DmHi7Kb2.js";import{t as d}from"./dom-Dv5tDaqe.js";import{s as g,a as b,c as m}from"./loadable-BpL5xwNx.js";import{c as p,d as C}from"./locale-jvDArz_C.js";import{c as v,s as x,d as y,u as H}from"./t9n-Bv5oqD69.js";import{c as T,u as A,d as L}from"./interactive-CM5F_5Ay.js";import{d as S}from"./icon-CWAu07D3.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.2
 */const r={handle:"handle",handleSelected:"handle--selected"},k={drag:"drag"},a={itemLabel:"{itemLabel}",position:"{position}",total:"{total}"},w=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}.handle{display:flex;align-items:center;justify-content:center;align-self:stretch;border-style:none;outline-color:transparent;color:var(--calcite-color-border-input);padding-block:0.75rem;padding-inline:0.25rem;line-height:0}.handle calcite-icon{color:inherit}:host(:not([disabled])) .handle{cursor:move}:host(:not([disabled])) .handle:hover{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}:host(:not([disabled])) .handle:focus{color:var(--calcite-color-text-1);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host(:not([disabled])) .handle--selected{background-color:var(--calcite-color-foreground-3);color:var(--calcite-color-text-1)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`,D=w,I=u(class extends f{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteHandleChange=i(this,"calciteHandleChange",6),this.calciteHandleNudge=i(this,"calciteHandleNudge",6),this.calciteInternalAssistiveTextChange=i(this,"calciteInternalAssistiveTextChange",6),this.handleKeyDown=e=>{if(!this.disabled)switch(e.key){case" ":this.selected=!this.selected,this.calciteHandleChange.emit(),e.preventDefault();break;case"ArrowUp":if(!this.selected)return;e.preventDefault(),this.calciteHandleNudge.emit({direction:"up"});break;case"ArrowDown":if(!this.selected)return;e.preventDefault(),this.calciteHandleNudge.emit({direction:"down"});break}},this.handleBlur=()=>{this.blurUnselectDisabled||this.disabled||this.selected&&(this.selected=!1,this.calciteHandleChange.emit())},this.selected=!1,this.disabled=!1,this.dragHandle=void 0,this.messages=void 0,this.setPosition=void 0,this.setSize=void 0,this.label=void 0,this.blurUnselectDisabled=!1,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}handleAriaTextChange(){const e=this.getAriaText("live");e&&this.calciteInternalAssistiveTextChange.emit({message:e})}onMessagesChange(){}connectedCallback(){T(this),v(this),p(this)}async componentWillLoad(){g(this),await x(this)}componentDidLoad(){b(this)}componentDidRender(){A(this)}disconnectedCallback(){L(this),y(this),C(this)}effectiveLocaleChange(){H(this,this.effectiveLocale)}async setFocus(){var e;await m(this),(e=this.handleButton)==null||e.focus()}getTooltip(){const{label:e,messages:t}=this;return t?e?t.dragHandle.replace(a.itemLabel,e):t.dragHandleUntitled:""}getAriaText(e){const{setPosition:t,setSize:n,label:l,messages:s,selected:c}=this;return!s||!l||typeof n!="number"||typeof t!="number"?null:(e==="label"?c?s.dragHandleChange:s.dragHandleIdle:c?s.dragHandleActive:s.dragHandleCommit).replace(a.position,t.toString()).replace(a.itemLabel,l).replace(a.total,n.toString())}render(){return o("span",{key:"043550c81bdf21e953f33e7b3ffc04c982ae17e3","aria-checked":this.disabled?null:d(this.selected),"aria-disabled":this.disabled?d(this.disabled):null,"aria-label":this.disabled?null:this.getAriaText("label"),class:{[r.handle]:!0,[r.handleSelected]:!this.disabled&&this.selected},onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,ref:e=>{this.handleButton=e},role:"radio",tabIndex:this.disabled?null:0,title:this.getTooltip()},o("calcite-icon",{key:"1d432a3f6e17366782fe92b8347f2f301b181b7b",icon:k.drag,scale:"s"}))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messages:["handleAriaTextChange"],label:["handleAriaTextChange"],selected:["handleAriaTextChange"],setPosition:["handleAriaTextChange"],setSize:["handleAriaTextChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return D}},[1,"calcite-handle",{selected:[1540],disabled:[516],dragHandle:[513,"drag-handle"],messages:[1040],setPosition:[2,"set-position"],setSize:[2,"set-size"],label:[1],blurUnselectDisabled:[4,"blur-unselect-disabled"],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]},void 0,{messages:["handleAriaTextChange"],label:["handleAriaTextChange"],selected:["handleAriaTextChange"],setPosition:["handleAriaTextChange"],setSize:["handleAriaTextChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function E(){if(typeof customElements>"u")return;["calcite-handle","calcite-icon"].forEach(e=>{switch(e){case"calcite-handle":customElements.get(e)||customElements.define(e,I);break;case"calcite-icon":customElements.get(e)||S();break}})}E();export{E as d};
