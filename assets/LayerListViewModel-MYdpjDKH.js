import{V as g,b5 as f,bY as h,fa as c,ac as o,ad as d,ag as H}from"./index-DX0rcHuW.js";import{I}from"./ListItem-DtMf9zrO.js";import{f as _,u as V}from"./layerListUtils-BVwRmkZ0.js";const l={view:"view",viewLayers:"view-layers",mapLayers:"map-layers",layerViews:"layer-views",layerListMode:"layer-list-mode"},A="hide",b=g.ofType(I);let r=class extends f.EventedAccessor{constructor(e){super(e),this.checkPublishStatusEnabled=!1,this.listItemCreatedFunction=null,this.listModeDisabled=!1,this.operationalItems=new b,this.view=null}initialize(){this.addHandles([h(()=>{var e;return((e=this.view)==null?void 0:e.ready)===!0},()=>this._viewHandles(),c),h(()=>[this.listItemCreatedFunction,this.checkPublishStatusEnabled,this.listModeDisabled],()=>this._recompileList())],l.view)}destroy(){this._removeAllItems(),this.view=null}get state(){const{view:e}=this;return e!=null&&e.ready?"ready":e?"loading":"disabled"}get totalItems(){return this.operationalItems.flatten(e=>e.children).length}triggerAction(e,t){e&&!e.disabled&&this.emit("trigger-action",{action:e,item:t})}moveListItem(e,t,s,i){var w,L;const a=e==null?void 0:e.layer;if(!a||a.type==="subtype-sublayer"||a.type==="sublayer")return;const n=(L=(w=this.view)==null?void 0:w.map)==null?void 0:L.layers,y=t?_(t):n,m=s?_(s):n;if(!y||!m)return;const{operationalItems:p}=this,M=(t==null?void 0:t.children)||p,v=(s==null?void 0:s.children)||p,u=m.length-i;e.parent=s||null,M.remove(e),y.remove(a),v.includes(e)||v.add(e,u),m.includes(a)||m.add(a,u),this._compileList()}_createLayerViewHandles(e){this.removeHandles(l.layerViews),this._compileList(),e&&this.addHandles(e.on("change",()=>this._compileList()),l.layerViews)}_createMapLayerHandles(e){this.removeHandles(l.mapLayers),this._compileList(),e&&this.addHandles(e.on("change",()=>this._compileList()),l.mapLayers)}_createListItem(e){const{view:t,listItemCreatedFunction:s,checkPublishStatusEnabled:i,listModeDisabled:a}=this;return new I({checkPublishStatusEnabled:i,listModeDisabled:a,layer:e,listItemCreatedFunction:s,view:t})}_removeAllItems(){this.operationalItems.destroyAll()}_getViewableLayers(e){return e?this.listModeDisabled?e:e.filter(t=>V(t)!==A):void 0}_watchLayersListMode(e){this.removeHandles(l.layerListMode),e&&!this.listModeDisabled&&this.addHandles(h(()=>e.filter(t=>"listMode"in t).map(t=>t.listMode).toArray(),()=>this._compileList()),l.layerListMode)}_compileList(){var s,i;const e=(i=(s=this.view)==null?void 0:s.map)==null?void 0:i.layers;this._watchLayersListMode(e);const t=this._getViewableLayers(e);t!=null&&t.length?(this._createNewItems(t),this._removeItems(t),this._sortItems(t)):this._removeAllItems()}_createNewItems(e){const{operationalItems:t}=this;e.forEach(s=>{t.some(i=>i.layer===s)||t.add(this._createListItem(s))})}_removeItems(e){const{operationalItems:t}=this,s=[];t.forEach(i=>{i&&e&&e.includes(i.layer)||s.push(i)}),t.destroyMany(s)}_sortItems(e){const{operationalItems:t}=this;t.sort((s,i)=>{const a=e.indexOf(s.layer),n=e.indexOf(i.layer);return a>n?-1:a<n?1:0})}_recompileList(){this._removeAllItems(),this._compileList()}_viewHandles(){const{view:e}=this;this.removeHandles([l.mapLayers,l.layerViews,l.viewLayers]),e!=null&&e.ready?this.addHandles([h(()=>{var t,s;return(s=(t=this.view)==null?void 0:t.map)==null?void 0:s.allLayers},t=>this._createMapLayerHandles(t),c),h(()=>{var t;return(t=this.view)==null?void 0:t.allLayerViews},t=>this._createLayerViewHandles(t),c)],l.viewLayers):this._removeAllItems()}};o([d()],r.prototype,"checkPublishStatusEnabled",void 0),o([d()],r.prototype,"listItemCreatedFunction",void 0),o([d({nonNullable:!0})],r.prototype,"listModeDisabled",void 0),o([d({type:b})],r.prototype,"operationalItems",void 0),o([d({readOnly:!0})],r.prototype,"state",null),o([d()],r.prototype,"totalItems",null),o([d()],r.prototype,"view",void 0),r=o([H("esri.widgets.LayerList.LayerListViewModel")],r);const k=r;export{k as y};
