const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ElevationQuery-DaGOvBJY.js","assets/index-DX0rcHuW.js","assets/index-B2yzeq1w.css","assets/ElevationSamplerData-CFwzCheb.js","assets/ElevationTile-MIg3DBTc.js","assets/TileKey-DZd6gJy7.js","assets/layersCreator-ClVvg_hW.js","assets/portalLayers-DSWQp5r3.js","assets/associatedFeatureServiceUtils-wz8Lt-hC.js","assets/arcgisLayerUrl-BpJodxxk.js","assets/lazyLayerLoader-BniCQt2l.js","assets/requestPresets-BzU17vvK.js","assets/styleUtils-CxRaW7Jr.js"])))=>i.map(i=>d[i]);
import{ac as o,b3 as L,ag as I,al as $,eL as C,a3 as A,V as E,ap as S,n as g,dI as O,fr as b,hN as P,s as x,_ as c,M as d,a as m,ad as l,ak as N,gq as _,hO as T,hP as F,cC as j}from"./index-DX0rcHuW.js";import{t as R}from"./loadAll-8MiqgLTH.js";var h;let p=h=class extends ${constructor(e){super(e),this.type="none"}clone(){return new h({type:this.type})}};o([L({none:"none",stayAbove:"stay-above"})],p.prototype,"type",void 0),p=h=o([I("esri.ground.NavigationConstraint")],p);var f;let s=f=class extends C(A){constructor(e){super(e),this.opacity=1,this.surfaceColor=null,this.navigationConstraint=null,this.layers=new E;const t=r=>{r.parent&&r.parent!==this&&"remove"in r.parent&&r.parent.remove(r),r.parent=this,r.type!=="elevation"&&r.type!=="base-elevation"&&g.getLogger(this).error(`Layer '${r.title}, id:${r.id}' of type '${r.type}' is not supported as a ground layer and will therefore be ignored. Only layers of type 'elevation' are supported.`)},n=r=>{r.parent=null};this.addHandles([this.layers.on("after-add",r=>t(r.item)),this.layers.on("after-remove",r=>n(r.item))])}initialize(){this.when().catch(e=>{S(e)||g.getLogger(this).error("#load()","Failed to load ground",e)}),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)}destroy(){const e=this.layers.removeAll();for(const t of e)O(t);this.layers.destroy()}normalizeCtorArgs(e){return e&&"resourceInfo"in e&&(this._set("resourceInfo",e.resourceInfo),delete(e={...e}).resourceInfo),e}set layers(e){this._set("layers",b(e,this._get("layers")))}writeLayers(e,t,n,r){const a=[];e&&(r={...r,layerContainerType:"ground"},e.forEach(i=>{if("write"in i){const y={};P(i)().write(y,r)&&a.push(y)}else r!=null&&r.messages&&r.messages.push(new x("layer:unsupported",`Layers (${i.title}, ${i.id}) of type '${i.declaredClass}' cannot be persisted in the ground`,{layer:i}))})),t.layers=a}load(e){return this.addResolvingPromise(this._loadFromSource(e)),Promise.resolve(this)}loadAll(){return R(this,e=>{e(this.layers)})}async queryElevation(e,t){await this.load({signal:t==null?void 0:t.signal});const{ElevationQuery:n}=await c(()=>import("./ElevationQuery-DaGOvBJY.js"),__vite__mapDeps([0,1,2,3,4,5]));d(t);const r=new n,a=this.layers.filter(w).toArray();return r.queryAll(a,e,t)}async createElevationSampler(e,t){await this.load({signal:t==null?void 0:t.signal});const{ElevationQuery:n}=await c(()=>import("./ElevationQuery-DaGOvBJY.js"),__vite__mapDeps([0,1,2,3,4,5]));d(t);const r=new n,a=this.layers.filter(w).toArray();return r.createSamplerAll(a,e,t)}clone(){const e={opacity:this.opacity,surfaceColor:m(this.surfaceColor),navigationConstraint:m(this.navigationConstraint),layers:this.layers.slice()};return this.loaded&&(e.loadStatus="loaded"),new f({resourceInfo:this.resourceInfo}).set(e)}read(e,t){this.resourceInfo||this._set("resourceInfo",{data:e,context:t}),super.read(e,t)}_loadFromSource(e){const t=this.resourceInfo;return t?this._loadLayersFromJSON(t.data,t.context,e):Promise.resolve()}async _loadLayersFromJSON(e,t,n){const r=(t==null?void 0:t.origin)||"web-scene",a=(t==null?void 0:t.portal)||null,i=(t==null?void 0:t.url)||null,{populateOperationalLayers:y}=await c(async()=>{const{populateOperationalLayers:u}=await import("./layersCreator-ClVvg_hW.js");return{populateOperationalLayers:u}},__vite__mapDeps([6,1,2,7,8,9,10,11,12]));d(n);const v=[];if(e.layers&&Array.isArray(e.layers)){const u={context:{origin:r,url:i,portal:a,layerContainerType:"ground"},defaultLayerType:"ArcGISTiledElevationServiceLayer"};v.push(y(this.layers,e.layers,u))}await Promise.allSettled(v)}};function V(e){return e&&"createElevationSampler"in e}function w(e){return e.type==="elevation"||V(e)}o([l({json:{read:!1}})],s.prototype,"layers",null),o([N("layers")],s.prototype,"writeLayers",null),o([l({readOnly:!0})],s.prototype,"resourceInfo",void 0),o([l({type:Number,nonNullable:!0,range:{min:0,max:1},json:{type:_,read:{reader:T,source:"transparency"},write:{writer:(e,t)=>{t.transparency=F(e)},target:"transparency"}}})],s.prototype,"opacity",void 0),o([l({type:j,json:{type:[_],write:(e,t)=>{t.surfaceColor=e.toJSON().slice(0,3)}}})],s.prototype,"surfaceColor",void 0),o([l({type:p,json:{write:!0}})],s.prototype,"navigationConstraint",void 0),s=f=o([I("esri.Ground")],s);const J=s;export{J as b};
