import{r as e,c as t,g as s}from"./index-DX0rcHuW.js";import{j as o}from"./index-d2df902e-DbqZVmdQ.js";import{u as a}from"./chunk-PVEVZB4O-2c3b8893-BS_Wu1Jy.js";import{u as h}from"./index-c99fc80c-Bfhmq5JD.js";import{m as r}from"./useWidget-9b153437-C0hvSQw-.js";import"./component-utils-de9339fe-Dlc67iIs.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
 * v4.30.7
 */const l="",d=l,n=r(o),g=class{constructor(i){e(this,i),this.arcgisReady=t(this,"arcgisReady",7),this.widgetBookmarkEdit=t(this,"arcgisEdit",7),this.widgetBookmarkSelect=t(this,"arcgisSelect",7),this.arcgisPropertyChange=t(this,"arcgisPropertyChange",7),this.manager=h(this),this.widget=n(this),this.viewModel=this.widget.viewModel,this.arcgisPropertyChange=a()("state"),this.autoDestroyDisabled=!1,this.referenceElement=void 0,this.bookmarks=this.widget.bookmarks,this.defaultCreateOptions=this.widget.defaultCreateOptions,this.defaultEditOptions=this.widget.defaultEditOptions,this.disabled=this.widget.disabled,this.dragEnabled=this.widget.dragEnabled,this.filterPlaceholder=this.widget.filterPlaceholder,this.filterText=this.widget.filterText,this.icon=this.widget.icon,this.label=this.widget.label,this.showAddBookmarkButton=this.widget.visibleElements.addBookmarkButton,this.showCloseButton=this.widget.visibleElements.closeButton,this.showCollapseButton=this.widget.visibleElements.collapseButton,this.showEditBookmarkButton=this.widget.visibleElements.editBookmarkButton,this.showFilter=this.widget.visibleElements.filter,this.hideFlow=this.widget.visibleElements.flow,this.showHeading=this.widget.visibleElements.heading,this.hideThumbnail=this.widget.visibleElements.thumbnail,this.hideTime=this.widget.visibleElements.time,this.position="bottom-left",this.state=this.viewModel.state}async destroy(){await this.manager.destroy()}get el(){return s(this)}};g.style=d;export{g as arcgis_bookmarks};
