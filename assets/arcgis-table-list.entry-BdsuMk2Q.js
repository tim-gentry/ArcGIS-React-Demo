import{r as s,c as t,g as i}from"./index-DX0rcHuW.js";import{a9 as l}from"./index-d2df902e-DbqZVmdQ.js";import{u as a}from"./chunk-PVEVZB4O-2c3b8893-BS_Wu1Jy.js";import{u as r}from"./index-c99fc80c-Bfhmq5JD.js";import{m as o}from"./useWidget-9b153437-C0hvSQw-.js";import"./component-utils-de9339fe-Dlc67iIs.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
 * v4.30.7
 */const h="arcgis-table-list{}",n=h,g=o(l),d=class{constructor(e){s(this,e),this.arcgisReady=t(this,"arcgisReady",7),this.arcgisPropertyChange=t(this,"arcgisPropertyChange",7),this.widgetTriggerAction=t(this,"arcgisTriggerAction",7),this.manager=r(this),this.widget=g(this),this.viewModel=this.widget.viewModel,this.arcgisPropertyChange=a()("state"),this.autoDestroyDisabled=!1,this.referenceElement=void 0,this.collapsed=this.widget.collapsed,this.dragEnabled=this.widget.dragEnabled,this.filterPlaceholder=this.widget.filterPlaceholder,this.filterText=this.widget.filterText,this.icon=this.widget.icon,this.label=this.widget.label,this.minDragEnabledItems=this.widget.minDragEnabledItems,this.minFilterItems=this.widget.minFilterItems,this.selectedItems=this.widget.selectedItems,this.selectionMode=this.widget.selectionMode,this.listItemCreatedFunction=this.widget.listItemCreatedFunction,this.visibleElementsCloseButton=!1,this.visibleElementsCollapseButton=!1,this.visibleElementsErrors=!1,this.visibleElementsFilter=!1,this.visibleElementsFlow=!0,this.visibleElementsHeading=!1,this.visibleElementsStatusIndicators=!0,this.visibleElementsTemporaryTableIndicators=!1,this.position="bottom-left",this.state=this.viewModel.state}async destroy(){await this.manager.destroy()}get el(){return i(this)}};d.style=n;export{d as arcgis_table_list};
