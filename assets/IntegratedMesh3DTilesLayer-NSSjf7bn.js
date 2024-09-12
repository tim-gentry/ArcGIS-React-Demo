import{a7 as U,a8 as V,dB as j,a9 as X,ga as k,f as b,aL as w,d_ as _,d2 as x,bB as G,d5 as p,bC as $,dk as S,bK as L,bG as E,gb as T,gc as R,gd as h,s as K,H as D,U as W,n as N,ac as c,ad as u,ge as F,af as P,ag as q,bp as v,ah as B}from"./index-DX0rcHuW.js";import{i as O}from"./APIKeyMixin-DSbft86T.js";import{l as C}from"./ArcGISService-CVVnFG2B.js";import{$ as z,Z as H,w as Z}from"./elevationInfoUtils-JmMUMmCn.js";import"./arcgisLayerUrl-BpJodxxk.js";let y=class extends C(U(V(j(X(k(O(B))))))){constructor(a){super(a),this.operationalLayerType="IntegratedMesh3DTilesLayer",this.spatialReference=new b({wkid:4326,vcsWkid:115700}),this.fullExtent=new w(-180,-90,180,90,this.spatialReference),this.url=null,this.type="integrated-mesh-3dtiles",this.path=null,this.minScale=0,this.maxScale=0}set elevationInfo(a){this._set("elevationInfo",a),this._validateElevationInfo()}_verifyArray(a,i){if(!Array.isArray(a)||a.length<i)return!1;for(const o of a)if(typeof o!="number")return!1;return!0}_initFullExtent(a){var I,M;const i=(I=a.root)==null?void 0:I.boundingVolume;if(!i)return;if(i.box){const t=i==null?void 0:i.box;if(t[3]>7972671&&t[7]>7972671&&t[11]>7945940)return}const o=(M=a.root)==null?void 0:M.transform,m=v();if(i.region&&this._verifyArray(i.region,6)){const t=i.region,l=_(t[0]),n=_(t[1]),r=t[4],s=_(t[2]),e=_(t[3]),d=t[5];this.fullExtent=new w({xmin:l,ymin:n,zmin:r,xmax:s,ymax:e,zmax:d,spatialReference:this.spatialReference})}else if(i.sphere&&this._verifyArray(i.sphere,4)){const t=i.sphere,l=x(t[0],t[1],t[2]),n=t[3]/Math.sqrt(3),r=v();G(r,l,x(n,n,n));const s=v();if(p(s,l,x(n,n,n)),o&&this._verifyArray(o,16)){const g=o;$(m,r,g),S(r,m),$(m,s,g),S(s,m)}L(r,E,0,r,b.WGS84,0,1),L(s,E,0,s,b.WGS84,0,1);const e=v(),d=v();T(e,r,s),R(d,r,s),this.fullExtent=new w({xmin:e[0],ymin:e[1],zmin:e[2],xmax:d[0],ymax:d[1],zmax:d[2],spatialReference:this.spatialReference})}else if(i.box&&this._verifyArray(i.box,12)){const t=i.box,l=x(t[0],t[1],t[2]),n=x(t[3],t[4],t[5]),r=x(t[6],t[7],t[8]),s=x(t[9],t[10],t[11]),e=[];for(let f=0;f<8;++f)e.push(v());if(p(e[0],l,n),p(e[0],e[0],r),p(e[0],e[0],s),h(e[1],l,n),p(e[1],e[1],r),p(e[1],e[1],s),p(e[2],l,n),h(e[2],e[2],r),p(e[2],e[2],s),h(e[3],l,n),h(e[3],e[3],r),p(e[3],e[3],s),p(e[4],l,n),p(e[4],e[4],r),h(e[4],e[4],s),h(e[5],l,n),p(e[5],e[5],r),h(e[5],e[5],s),p(e[6],l,n),h(e[6],e[6],r),h(e[6],e[6],s),h(e[7],l,n),h(e[7],e[7],r),h(e[7],e[7],s),o&&this._verifyArray(o,16)){const f=o;for(let A=0;A<8;++A)$(e[A],e[A],f)}const d=x(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),g=x(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);for(let f=0;f<8;++f)L(e[f],E,0,e[f],b.WGS84,0,1),T(g,g,e[f]),R(d,d,e[f]);this.fullExtent=new w({xmin:g[0],ymin:g[1],zmin:g[2],xmax:d[0],ymax:d[1],zmax:d[2],spatialReference:this.spatialReference})}}async load(a){return this.addResolvingPromise(this._doLoad(a)),this}async _doLoad(a){const i=a!=null?a.signal:null;try{await this.loadFromPortal({supportedTypes:["3DTiles Service"],validateItem:o=>{var m;if((m=o.typeKeywords)!=null&&m.includes("IntegratedMesh"))return!0;throw new K("portal:invalid-layer-item-type","Invalid layer item, expected '${expectedType}' ",{expectedType:"3DTiles Service containing IntegratedMesh"})}},a)}catch(o){D(o)}this.url&&await W(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:i}).then(m=>{this._initFullExtent(m.data)},m=>{D(m)})}async fetchAttributionData(){return this.load().then(()=>({}))}_validateElevationInfo(){const a=this.elevationInfo,i="Integrated mesh 3d tiles layers";z(N.getLogger(this),H(i,"absolute-height",a)),z(N.getLogger(this),Z(i,a))}};c([u({type:["IntegratedMesh3DTilesLayer"]})],y.prototype,"operationalLayerType",void 0),c([u({type:b})],y.prototype,"spatialReference",void 0),c([u({type:w})],y.prototype,"fullExtent",void 0),c([u(F)],y.prototype,"elevationInfo",null),c([u({type:["show","hide"]})],y.prototype,"listMode",void 0),c([u(P)],y.prototype,"url",void 0),c([u({readOnly:!0})],y.prototype,"type",void 0),c([u({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],y.prototype,"path",void 0),c([u({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:!1,write:!1}}}})],y.prototype,"minScale",void 0),c([u({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:!1,write:!1}}}})],y.prototype,"maxScale",void 0),y=c([q("esri.layers.IntegratedMesh3DTilesLayer")],y);const ie=y;export{ie as default};
