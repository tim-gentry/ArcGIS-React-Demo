import{ac as r,ad as i,ag as y,al as N,gq as x,b3 as v,a as u,a7 as V,a8 as _,dB as L,a9 as E,ga as O,ct as w,g3 as A,H as k,i3 as D,ms as C,s as l,x as K,U as G,n as T,i5 as M,gl as U,ae as z,ge as H,g6 as Z,ak as J,i6 as Q,ah as W}from"./index-DX0rcHuW.js";import{i as X}from"./APIKeyMixin-DSbft86T.js";import{l as Y}from"./ArcGISService-CVVnFG2B.js";import{L as ee,C as F}from"./SceneService-WvLxy6qJ.js";import{c as q,d as te,b as re,a as ie}from"./PointCloudUniqueValueRenderer-CJgRhntR.js";import{$ as P,Z as oe,w as se}from"./elevationInfoUtils-JmMUMmCn.js";import"./arcgisLayerUrl-BpJodxxk.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./HeightModelInfo-DaJXTLDg.js";import"./I3SIndexInfo-B_3z-1dv.js";import"./jsonContext-HEw-mfc5.js";import"./resourceUtils-Cmphs_eq.js";import"./uuid-fwrPAdZb.js";import"./resourceUtils-CjBPLfB1.js";import"./saveAPIKeyUtils-JCRM_CYX.js";import"./saveUtils-BCE1Ph8s.js";let f=class extends N{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};r([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],f.prototype,"field",void 0),r([i({readOnly:!0,nonNullable:!0,json:{read:!1}})],f.prototype,"type",void 0),f=r([y("esri.layers.pointCloudFilters.PointCloudFilter")],f);const g=f;var b;let d=b=class extends g{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new b({field:this.field,requiredClearBits:u(this.requiredClearBits),requiredSetBits:u(this.requiredSetBits)})}};r([i({type:[x],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],d.prototype,"requiredClearBits",void 0),r([i({type:[x],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],d.prototype,"requiredSetBits",void 0),r([v({pointCloudBitfieldFilter:"bitfield"})],d.prototype,"type",void 0),d=b=r([y("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],d);const ne=d;var I;let h=I=class extends g{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new I({field:this.field,includedReturns:u(this.includedReturns)})}};r([i({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"includedReturns",void 0),r([v({pointCloudReturnFilter:"return"})],h.prototype,"type",void 0),h=I=r([y("esri.layers.pointCloudFilters.PointCloudReturnFilter")],h);const ae=h;var $;let p=$=class extends g{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new $({field:this.field,mode:this.mode,values:u(this.values)})}};r([i({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"mode",void 0),r([v({pointCloudValueFilter:"value"})],p.prototype,"type",void 0),r([i({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"values",void 0),p=$=r([y("esri.layers.pointCloudFilters.PointCloudValueFilter")],p);const le=p,de={key:"type",base:g,typeMap:{value:le,bitfield:ne,return:ae}};var S;let m=S=class extends q{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new S({...this.cloneProperties(),field:u(this.field)})}};r([v({pointCloudRGBRenderer:"point-cloud-rgb"})],m.prototype,"type",void 0),r([i({type:String,json:{write:!0}})],m.prototype,"field",void 0),m=S=r([y("esri.renderers.PointCloudRGBRenderer")],m);const pe=m,R={key:"type",base:q,typeMap:{"point-cloud-class-breaks":te,"point-cloud-rgb":pe,"point-cloud-stretch":re,"point-cloud-unique-value":ie},errorContext:"renderer"},j=Q();let o=class extends ee(Y(V(_(L(E(O(X(W)))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const t=this.fieldsIndex.get(e);return t!=null&&t.domain?t.domain:null}readServiceFields(e,t,n){return Array.isArray(e)?e.map(s=>{const a=new w;return s.type==="FieldTypeInteger"&&((s=u(s)).type="esriFieldTypeInteger"),a.read(s,n),a}):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map(s=>new w({name:s.name,type:s.name==="ELEVATION"?"double":"integer"})):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,t,n,s){A("layerDefinition.drawingInfo.renderer",e.write({},s),t)}load(e){const t=e!=null?e.signal:null,n=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(k).then(()=>this._fetchService(t));return this.addResolvingPromise(n),Promise.resolve(this)}createPopupTemplate(e){const t=D(this,e);return t&&(this._formatPopupTemplateReturnsField(t),this._formatPopupTemplateRGBField(t)),t}_formatPopupTemplateReturnsField(e){var a;const t=this.fieldsIndex.get("RETURNS");if(!t)return;const n=(a=e.fieldInfos)==null?void 0:a.find(c=>c.fieldName===t.name);if(!n)return;const s=new C({name:"pcl-returns-decoded",title:t.alias||t.name,expression:`
        var returnValue = $feature.${t.name};
        return (returnValue % 16) + " / " + Floor(returnValue / 16);
      `});e.expressionInfos=[...e.expressionInfos||[],s],n.fieldName="expression/pcl-returns-decoded"}_formatPopupTemplateRGBField(e){var a;const t=this.fieldsIndex.get("RGB");if(!t)return;const n=(a=e.fieldInfos)==null?void 0:a.find(c=>c.fieldName===t.name);if(!n)return;const s=new C({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:`
        var rgb = $feature.${t.name};
        var red = Floor(rgb / 65536, 0);
        var green = Floor((rgb - (red * 65536)) / 256,0);
        var blue = rgb - (red * 65536) - (green * 256);

        return "rgb(" + red + "," + green + "," + blue + ")";
      `});e.expressionInfos=[...e.expressionInfos||[],s],n.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){var s;if(await this.load(t),!this.attributeStorageInfo)throw new l("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const n=this.fieldsIndex.get(e);if(!n)throw new l("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const a of this.attributeStorageInfo)if(a.name===n.name){const c=K(((s=this.parsedUrl)==null?void 0:s.path)??"",`./statistics/${a.key}`);return G(c,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then(B=>B.data)}throw new l("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(F.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(F.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="PointCloud")throw new l("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new l("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new l("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return this.attributeStorageInfo!=null&&this.attributeStorageInfo.some(t=>t.name===e)}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;P(T.getLogger(this),oe("Point cloud layers","absolute-height",e)),P(T.getLogger(this),se("Point cloud layers",e))}};r([i({type:["PointCloudLayer"]})],o.prototype,"operationalLayerType",void 0),r([i(M)],o.prototype,"popupEnabled",void 0),r([i({type:U,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),r([i({readOnly:!0,json:{read:!1}})],o.prototype,"defaultPopupTemplate",null),r([i({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],o.prototype,"opacity",void 0),r([i({type:["show","hide"]})],o.prototype,"listMode",void 0),r([i({types:[de],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],o.prototype,"filters",void 0),r([i({type:[w]})],o.prototype,"fields",void 0),r([i(j.fieldsIndex)],o.prototype,"fieldsIndex",void 0),r([z("service","fields",["fields","attributeStorageInfo"])],o.prototype,"readServiceFields",null),r([i(j.outFields)],o.prototype,"outFields",void 0),r([i({readOnly:!0})],o.prototype,"attributeStorageInfo",void 0),r([i(H)],o.prototype,"elevationInfo",null),r([i({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),r([i(Z)],o.prototype,"legendEnabled",void 0),r([i({types:R,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:R},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],o.prototype,"renderer",void 0),r([J("renderer")],o.prototype,"writeRenderer",null),r([i({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),o=r([y("esri.layers.PointCloudLayer")],o);const Pe=o;export{Pe as default};
