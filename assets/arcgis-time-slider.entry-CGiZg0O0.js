import{r as s,c as i,g as a}from"./index-DX0rcHuW.js";import{aa as o}from"./index-d2df902e-DbqZVmdQ.js";import{u as r}from"./chunk-PVEVZB4O-2c3b8893-BS_Wu1Jy.js";import{u as h}from"./index-c99fc80c-Bfhmq5JD.js";import{m as g}from"./useWidget-9b153437-C0hvSQw-.js";import"./component-utils-de9339fe-Dlc67iIs.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
 * v4.30.7
 */const n="arcgis-time-slider{}",d=n,l=g(o),c=class{constructor(t){s(this,t),this.arcgisReady=i(this,"arcgisReady",7),this.arcgisPropertyChange=i(this,"arcgisPropertyChange",7),this.widgetTriggerAction=i(this,"arcgisTriggerAction",7),this.manager=h(this),this.widget=l(this),this.viewModel=this.widget.viewModel,this.arcgisPropertyChange=r()("effectiveStops","fullTimeExtent","timeExtent","state"),this.autoDestroyDisabled=!1,this.referenceElement=void 0,this.actions=this.widget.actions,this.disabled=this.widget.disabled,this.effectiveStops=this.widget.effectiveStops,this.fullTimeExtent=this.widget.fullTimeExtent,this.icon=this.widget.icon,this.label=this.widget.label,this.layout=this.widget.layout,this.loop=this.widget.loop,this.mode=this.widget.mode,this.playRate=this.widget.playRate,this.stops=this.widget.stops,this.tickConfigs=this.widget.tickConfigs,this.timeExtent=this.widget.timeExtent,this.timeVisible=this.widget.timeVisible,this.timeZone=this.widget.timeZone,this.position="bottom-left",this.state=this.viewModel.state}async destroy(){await this.manager.destroy()}async applyTimeSliderSettings(t){Object.assign(this,t)}async next(){var t;(t=this.widget)==null||t.next()}async play(){var t;(t=this.widget)==null||t.play()}async previous(){var t;(t=this.widget)==null||t.previous()}async stop(){var t;(t=this.widget)==null||t.stop()}async updateWebDocument(t){var e;(e=this.widget)==null||e.updateWebDocument(t)}get el(){return a(this)}};c.style=d;export{c as arcgis_time_slider};
