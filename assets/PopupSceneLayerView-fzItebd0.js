import{ac as g,ag as P,s as l,gN as b,h6 as m}from"./index-DX0rcHuW.js";import{p as u,n as v}from"./popupUtils-DV44wDbq.js";const L=d=>{let r=class extends d{_validateFetchPopupFeatures(t){const{layer:s}=this,{popupEnabled:p}=s;if(!p)throw new l("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:s});if(!u(s,t))throw new l("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:s})}async prepareFetchPopupFeatures(t){}async fetchPopupFeaturesFromGraphics(t,s){if(this._validateFetchPopupFeatures(s),t.length===0)return[];const p=this.layer.type==="scene"&&this.layer.associatedLayer!=null?this.layer.associatedLayer:this.layer;let i=[];"fieldsIndex"in this.layer&&(i=b(this.layer.fieldsIndex,await v(p,u(this.layer,s)))),await this.prepareFetchPopupFeatures(i);const c=new Set,n=[],a=[];for(const e of t)m(i,e,c)?a.push(e):n.push(e);if(a.length===0)return n;const o=new Map;for(let e=0;e<t.length;e++)o.set(t[e].getObjectId()??0,e);const h=await this.whenGraphicAttributes(a,[...c]).catch(()=>a).then(e=>n.concat(e));return h.sort((e,y)=>{const f=e.getObjectId()??0,w=o.get(f)??0,F=y.getObjectId()??0;return w-(o.get(F)??0)}),h}};return r=g([P("esri.views.3d.layers.support.PopupSceneLayerView")],r),r};export{L as i};
