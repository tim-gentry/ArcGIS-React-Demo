import{r as d,c as r,h as a,g as l}from"./index-DX0rcHuW.js";import{G as c,H as m}from"./index-d2df902e-DbqZVmdQ.js";import{u as g}from"./chunk-PVEVZB4O-2c3b8893-BS_Wu1Jy.js";import{u as h}from"./index-c99fc80c-Bfhmq5JD.js";import{u,m as b}from"./useT9n-e78c8d12-C0cWahDE.js";import"./component-utils-de9339fe-Dlc67iIs.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
 * v4.30.7
 */const n={anchor:"esri-widget__anchor",anchorDisabled:"esri-widget__anchor--disabled",button:"esri-button",buttonDisabled:"esri-button--disabled",buttonHalf:"esri-button--half",buttonSecondary:"esri-button--secondary",buttonSmall:"esri-button--small",buttonTertiary:"esri-button--tertiary",buttonThird:"esri-button--third",disabled:"esri-disabled",disabledElement:"esri-disabled-element",empty:"esri-widget__content--empty",emptyIllustration:"esri-widget__content-illustration--empty",heading:"esri-widget__heading",hidden:"esri-hidden",input:"esri-input",interactive:"esri-interactive",loader:"esri-widget__loader",loaderAnimation:"esri-widget__loader-animation",loaderText:"esri-widget__loader-text",menu:"esri-menu",menuHeader:"esri-menu__header",menuItem:"esri-menu__list-item",menuItemActive:"esri-menu__list-item--active",menuItemFocus:"esri-menu__list-item--focus",menuList:"esri-menu__list",noBookmarksIcon:"esri-widget__no-bookmark-icon",panel:"esri-widget--panel",panelHeightOnly:"esri-widget--panel-height-only",primaryTick:"primary-tick",primaryTickAmPm:"primary-tick__ampm",primaryTickLabel:"primary-tick__label",rotating:"esri-rotating",secondaryTick:"secondary-tick",select:"esri-select",table:"esri-widget__table",ui:"esri-component",widget:"esri-widget",widgetButton:"esri-widget--button",widgetButtonActive:"esri-widget--button-active",widgetDisabled:"esri-widget--disabled"},w={base:"esri-home"},_=b(m),T=class{constructor(e){d(this,e),this.arcgisReady=r(this,"arcgisReady",7),this.viewModelGo=r(this,"arcgisGo",7),this.arcgisPropertyChange=r(this,"arcgisPropertyChange",7),this.manager=h(this),this.messages=u(),this.viewModel=_(this),this.arcgisPropertyChange=g()("state"),this._go=()=>{const{viewModel:t}=this;t.state==="going-home"?t.cancelGo():t.go()},this.goToOverride=this.viewModel.goToOverride,this.icon="home",this.label=void 0,this.position="top-left",this.referenceElement=void 0,this.viewpoint=this.viewModel.viewpoint,this.state=this.viewModel.state,this.autoDestroyDisabled=!1}async cancelGo(){this.viewModel.cancelGo()}async destroy(){await this.manager.destroy()}async go(){return this.viewModel.go()}render(){var o;const{messages:e,icon:t}=this,i=(o=this.viewModel)==null?void 0:o.state,s=i==="going-home";return a("div",{key:"1cad33e6ced15f9d1983419cfea451283142b84e",class:c(w.base,n.widget)},a("calcite-button",{key:"8667cb2f7e0204af1c28f9f4fcbaab4607ad5acd",class:n.widgetButton,disabled:i==="disabled","icon-start":s?void 0:t,kind:"neutral",label:e.componentLabel,onClick:this._go,scale:s?"s":"m",title:i==="going-home"?e.cancel:e.title},s?a("calcite-loader",{inline:!0,label:""}):null))}static get assetsDirs(){return["assets"]}get el(){return l(this)}};export{T as arcgis_home};
