import{r as s,c as t,g as e}from"./index-DX0rcHuW.js";import{E as a}from"./index-d2df902e-DbqZVmdQ.js";import{m as r}from"./useWidget-9b153437-C0hvSQw-.js";import{u as o}from"./chunk-PVEVZB4O-2c3b8893-BS_Wu1Jy.js";import{u as h}from"./index-c99fc80c-Bfhmq5JD.js";import"./component-utils-de9339fe-Dlc67iIs.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
 * v4.30.7
 */const n="arcgis-histogram{}",g=n,d=r(a),m=class{constructor(i){s(this,i),this.arcgisReady=t(this,"arcgisReady",7),this.arcgisPropertyChange=t(this,"arcgisPropertyChange",7),this.manager=h(this),this.widget=d(this),this.viewModel=this.widget.viewModel,this.arcgisPropertyChange=o()("state"),this.autoDestroyDisabled=!1,this.referenceElement=void 0,this.icon=this.widget.icon,this.label=this.widget.label,this.average=this.widget.average,this.barCreatedFunction=this.widget.barCreatedFunction,this.bins=this.widget.bins,this.dataLineCreatedFunction=this.widget.dataLineCreatedFunction,this.dataLines=this.widget.dataLines,this.labelFormatFunction=this.widget.labelFormatFunction,this.layout=this.widget.layout,this.max=this.widget.max,this.min=this.widget.min,this.position="bottom-left",this.state=this.widget.state}async destroy(){await this.manager.destroy()}get el(){return e(this)}};m.style=g;export{m as arcgis_histogram};
