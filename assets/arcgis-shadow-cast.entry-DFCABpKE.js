import{r as s,c as e,g as a}from"./index-DX0rcHuW.js";import{a3 as o}from"./index-d2df902e-DbqZVmdQ.js";import{u as h}from"./chunk-PVEVZB4O-2c3b8893-BS_Wu1Jy.js";import{u as r}from"./index-c99fc80c-Bfhmq5JD.js";import{m as d}from"./useWidget-9b153437-C0hvSQw-.js";import"./component-utils-de9339fe-Dlc67iIs.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
 * v4.30.7
 */const n="arcgis-shadow-cast{}",l=n,g=d(o),c=class{constructor(t){s(this,t),this.arcgisReady=e(this,"arcgisReady",7),this.arcgisPropertyChange=e(this,"arcgisPropertyChange",7),this.manager=r(this),this.widget=g(this),this.viewModel=this.widget.viewModel,this.arcgisPropertyChange=h()("state"),this.autoDestroyDisabled=!1,this.referenceElement=void 0,this.discreteOptions=this.viewModel.discreteOptions,this.durationOptions=this.viewModel.durationOptions,this.endTimeOfDay=this.viewModel.endTimeOfDay,this.startTimeOfDay=this.viewModel.startTimeOfDay,this.thresholdOptions=this.viewModel.thresholdOptions,this.utcOffset=this.viewModel.utcOffset,this.visualizationType=this.viewModel.visualizationType,this.icon=this.widget.icon,this.label=this.widget.label,this.headingLevel=this.widget.headingLevel,this.hideTimeRangeSlider=this.widget.visibleElements.timeRangeSlider,this.hideTimezone=this.widget.visibleElements.timezone,this.hideDatePicker=this.widget.visibleElements.datePicker,this.hideVisualizationOptions=this.widget.visibleElements.visualizationOptions,this.hideColorPicker=this.widget.visibleElements.colorPicker,this.hideTooltip=this.widget.visibleElements.tooltip,this.position="bottom-left",this.state=this.viewModel.state}async destroy(){await this.manager.destroy()}async getDuration(t){var i;return(i=this.widget)==null?void 0:i.viewModel.getDuration(t)}async start(){var t;(t=this.widget)==null||t.viewModel.start()}async stop(){var t;(t=this.widget)==null||t.viewModel.stop()}get el(){return a(this)}};c.style=l;export{c as arcgis_shadow_cast};
