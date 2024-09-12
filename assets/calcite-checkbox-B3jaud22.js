import{p as l,H as r,d as o,h as t,C as d,c as h}from"./jsxFactory-DmHi7Kb2.js";import{b,g as u,t as f}from"./dom-Dv5tDaqe.js";import{c as g,d as m,H as k}from"./form-DT0Txu1X.js";import{c as p,d as v,u as x,I as y}from"./interactive-CM5F_5Ay.js";import{i as C}from"./key-D5DPfjW0.js";import{c as w,d as I,g as z}from"./label-CcvHzygA.js";import{c as F,s as E,a as H}from"./loadable-BpL5xwNx.js";import"./index-DX0rcHuW.js";import"./uuid-fwrPAdZb.js";import"./component-ByvC-PUv.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.2
 */const i={toggle:"toggle",check:"check-svg"},L=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([scale=s]){--calcite-checkbox-size:0.75rem}:host([scale=m]){--calcite-checkbox-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-checkbox-size:1rem}:host{position:relative;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}:host .check-svg,:host .toggle{inline-size:var(--calcite-checkbox-size);block-size:var(--calcite-checkbox-size)}:host .check-svg{pointer-events:none;box-sizing:border-box;display:block;overflow:hidden;background-color:var(--calcite-color-foreground-1);fill:currentColor;stroke:currentColor;stroke-width:1;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;box-shadow:inset 0 0 0 1px var(--calcite-color-border-input);color:var(--calcite-color-background)}:host([status=invalid]:not([checked])) .check-svg{box-shadow:inset 0 0 0 1px var(--calcite-color-status-danger)}:host([status=invalid]:not([checked])) .toggle:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([checked]) .check-svg,:host([indeterminate]) .check-svg{background-color:var(--calcite-color-brand);box-shadow:inset 0 0 0 1px var(--calcite-color-brand)}:host([hovered]) .toggle .check-svg,:host .toggle:hover .check-svg{box-shadow:inset 0 0 0 2px var(--calcite-color-brand)}.toggle{position:relative;outline-color:transparent}.toggle:active,.toggle:focus,.toggle:focus-visible{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.toggle::after,.toggle::before{inset-block-start:50%;inset-inline-start:50%;min-block-size:1.5rem;min-inline-size:1.5rem;position:absolute}.toggle:not(.calcite--rtl)::after{content:"";transform:translateX(-50%) translateY(-50%)}.toggle.calcite--rtl::before{content:"";transform:translateX(50%) translateY(-50%)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}`,B=L,s=l(class extends r{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalCheckboxBlur=o(this,"calciteInternalCheckboxBlur",6),this.calciteCheckboxChange=o(this,"calciteCheckboxChange",6),this.calciteInternalCheckboxFocus=o(this,"calciteInternalCheckboxFocus",6),this.checkedPath="M5.5 12L2 8.689l.637-.636L5.5 10.727l8.022-7.87.637.637z",this.indeterminatePath="M13 8v1H3V8z",this.getPath=()=>this.indeterminate?this.indeterminatePath:this.checked?this.checkedPath:"",this.toggle=()=>{this.disabled||(this.checked=!this.checked,this.setFocus(),this.indeterminate=!1,this.calciteCheckboxChange.emit())},this.keyDownHandler=e=>{C(e.key)&&(this.toggle(),e.preventDefault())},this.clickHandler=()=>{this.disabled||this.toggle()},this.onToggleBlur=()=>{this.calciteInternalCheckboxBlur.emit(!1)},this.onToggleFocus=()=>{this.calciteInternalCheckboxFocus.emit(!0)},this.onLabelClick=()=>{this.toggle()},this.checked=!1,this.disabled=!1,this.form=void 0,this.guid=void 0,this.hovered=!1,this.indeterminate=!1,this.label=void 0,this.name=void 0,this.required=!1,this.scale="m",this.status="idle",this.validity={valid:!1,badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1},this.value=void 0}async setFocus(){var e;await F(this),(e=this.toggleEl)==null||e.focus()}syncHiddenFormInput(e){e.type="checkbox"}connectedCallback(){this.guid=this.el.id||`calcite-checkbox-${b()}`,p(this),w(this),g(this)}disconnectedCallback(){v(this),I(this),m(this)}componentWillLoad(){E(this)}componentDidLoad(){H(this)}componentDidRender(){x(this)}render(){const e=u(this.el)==="rtl";return t(h,{key:"29feebf02ef9c71ea9e6dafe0f5ed11b0cb89848",onClick:this.clickHandler,onKeyDown:this.keyDownHandler},t(y,{key:"e89b0df0f5638181e233bce9c454e48c6963de19",disabled:this.disabled},t("div",{key:"25a91677124b2b77e6e30bf371afce3153c26761","aria-checked":f(this.checked),"aria-label":z(this),class:{[i.toggle]:!0,[d.rtl]:e},onBlur:this.onToggleBlur,onFocus:this.onToggleFocus,ref:n=>this.toggleEl=n,role:"checkbox",tabIndex:this.disabled?void 0:0},t("svg",{key:"1aae8a62a1f771e2d3e7fb731bae49e608f15617","aria-hidden":"true",class:i.check,viewBox:"0 0 16 16"},t("path",{key:"27ea5db7e99c8f82f5e7773b684f64e9d9a8101a",d:this.getPath()})),t("slot",{key:"c6ea3d961bc6b3b7018378b8044691b88d65f2d3"})),t(k,{key:"bf3c47ad291541078a94dd46205e912622e85411",component:this})))}get el(){return this}static get style(){return B}},[1,"calcite-checkbox",{checked:[1540],disabled:[516],form:[513],guid:[1537],hovered:[516],indeterminate:[1540],label:[1],name:[513],required:[516],scale:[513],status:[513],validity:[1040],value:[8],setFocus:[64]}]);function c(){if(typeof customElements>"u")return;["calcite-checkbox"].forEach(e=>{switch(e){case"calcite-checkbox":customElements.get(e)||customElements.define(e,s);break}})}c();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.2
 */const X=s,$=c;export{X as CalciteCheckbox,$ as defineCustomElement};
