import{dB as b,dA as F,a9 as I,hh as A,V as C,bY as D,jY as N,jZ as U,ar as j,eI as R,ac as r,ad as i,gq as M,j_ as P,ag as O,ah as c,is as Q,iu as L,i3 as Z,a as g,ge as G,iw as k,ix as z,iy as H,g6 as J,iF as K,iG as Y,i5 as W,gl as X,iz as ee,i4 as te,fp as re,g9 as ie,gV as oe,it as ne,gn as ae,g4 as se,a7 as le,a8 as pe,ga as de,H as ye,s as f,g0 as ue,I as he,x as ce,iS as me,ff as h,j$ as fe,i$ as ge,U as we,k0 as ve,E as x,k1 as E,D as be,g5 as Fe,i6 as Ie}from"./index-DX0rcHuW.js";import{s as Oe}from"./ReactiveMap-r-vujrh9.js";import{r as _e}from"./signal-CpmfLcHB.js";import{T as $}from"./utils-fmpzjX3M.js";import{V as Te,R as Se}from"./FeatureLayerBase-uK0oK06Z.js";import je from"./FeatureLayerSource-BcCZybt_.js";import{i as Le}from"./APIKeyMixin-DSbft86T.js";import{l as xe}from"./ArcGISService-CVVnFG2B.js";import{F as Ee}from"./EditBusLayer-Brt5ASt_.js";import{n as $e}from"./FeatureType-Bb4KOLCq.js";import{a as Ve}from"./lazyLayerLoader-BniCQt2l.js";import{t as Ce}from"./versionUtils-DlHqsQBg.js";import"./ClassBreaksDefinition-RQBfkmon.js";import"./inputs-Due4QVtL.js";import"./formUtils-Dni92j4V.js";import"./HeightModelInfo-DaJXTLDg.js";import"./arcgisLayerUrl-BpJodxxk.js";import"./LayerFloorInfo-D-bXPB8b.js";import"./Relationship-Clp_49iY.js";import"./serviceCapabilitiesUtils-CIgEASrL.js";import"./uuid-fwrPAdZb.js";import"./MeshLocalVertexSpace-Ck1lhGhd.js";import"./meshVertexSpaceUtils-UWZ_3JBG.js";import"./External-EuBme4r6.js";import"./infoFor3D-CxOdoily.js";import"./applyEditsUtils-GeA1qLWz.js";import"./MeshTransform-DiRYmUD4.js";import"./mat4f64-Dk4dwAN8.js";import"./quat-DrJsq_-D.js";import"./mat3f64-BBpwCtoL.js";import"./quatf64-BrpT0VRp.js";import"./axisAngleDegrees-jEN9n05M.js";import"./editingSupport-C3PVQfnc.js";import"./normalizeUtils-CzEkgn6d.js";import"./normalizeUtilsCommon-DXRtgGFh.js";import"./utils-nzDIu46v.js";import"./utils-D67OULxu.js";import"./QueryTask-BEsi-5Fi.js";import"./executeForIds-BJu0fyay.js";import"./query-95tcIPsI.js";import"./pbfQueryUtils-B33F7Io8.js";import"./pbf-9I_px9lQ.js";import"./OptimizedGeometry-vU5jWBvU.js";import"./OptimizedFeature-7juV2tZm.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-B1r3mH-Y.js";import"./executeQueryJSON-_Gsxb9pi.js";import"./executeQueryPBF-Ds4PRVlt.js";import"./featureConversionUtils-C8uvc1AG.js";import"./editsZScale-BDLbHb5e.js";import"./requestPresets-BzU17vvK.js";let d=class extends b(F(I(c))){constructor(e){super(e),this._layerCache=new A(20,t=>t.destroy()),this._oidToReference=new Oe,this._layerToReference=new Map,this.layers=new C,this.maximumVisibleSublayers=10,this.opacity=1,this.parent=null,this.persistenceEnabled=!0,this.title="Layers in view",this.type="catalog-dynamic-group",this.visible=!0}initialize(){this.addHandles([this.layers.on("after-add",({item:e})=>{e.parent=this}),this.layers.on("after-remove",({item:e})=>{e.parent=null}),D(()=>this._orderBy,()=>{this._updateLayerSortValues(),this._sortAllLayers()})])}load(e){return this.addResolvingPromise(this.parent.load()),Promise.resolve(this)}destroy(){this._layerCache.destroy(),this._oidToReference.clear(),this._layerToReference.clear()}get _orderBy(){var e;return this.parent?((e=this.parent.orderBy)==null?void 0:e.find(t=>!t.valueExpression&&t.field))??new N({field:this.parent.objectIdField}):null}get _referenceComparator(){const e=this._orderBy;if(!this.parent||!e)return()=>0;const t=this.parent.fieldsIndex.get(e.field),a=$(t==null?void 0:t.toJSON().type,e.order==="descending"),n=$("esriFieldTypeOID",e.order==="descending");return(l,p)=>a(p.sortValue,l.sortValue)||n(p.objectId,l.objectId)}get fullExtent(){var e;return((e=this.parent)==null?void 0:e.fullExtent)??null}get updating(){return U(this._oidToReference,e=>e.pending!=null)}acquireLayer(e){if(this.destroyed)return j();const t=this._getLayerReference(e);return t.count++,j(()=>{t.count--,t.count||this._destroyLayerReference(t)})}_getLayerReference(e){const t=e.getObjectId();return R(this._oidToReference,t,()=>{const a=e.getObjectId(),n=`${a}`,l=e.getAttribute(this.parent.itemSourceField),p=new Re(e,a,l),y=this._layerCache.pop(n);return y?(this._addLayer(p,y),p):(p.pending=this.parent.createLayerFromFootprint(e).then(u=>{p.count?this._addLayer(p,u):(this.destroyed||this._layerCache.get(n)||this._layerCache.put(n,u),p.layer=null)}).catch(()=>{}).finally(()=>{p.pending=null}),p)})}_destroyLayerReference(e){e.layer&&(this._layerToReference.delete(e.layer),this.layers.remove(e.layer),this.destroyed?e.layer.destroy():this._layerCache.put(`${e.objectId}`,e.layer),e.layer=null),this._oidToReference.delete(e.objectId)}_addLayer(e,t){e.layer=t,t.persistenceEnabled=!1,this._layerToReference.set(t,e),this._updateLayerSortValue(e),this.layers.add(t),this._sortAllLayers()}_updateLayerSortValues(){for(const e of this._layerToReference.values())this._updateLayerSortValue(e)}_updateLayerSortValue(e){this._orderBy&&(e.sortValue=e.footprint.getAttribute(this._orderBy.field))}_sortAllLayers(){this.layers.sort((e,t)=>this._referenceComparator(this._layerToReference.get(e),this._layerToReference.get(t)))}};r([i()],d.prototype,"_orderBy",null),r([i({readOnly:!0})],d.prototype,"_referenceComparator",null),r([i({type:["show","hide","hide-children"],json:{write:!0}})],d.prototype,"listMode",void 0),r([i({readOnly:!0})],d.prototype,"fullExtent",null),r([i({type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],d.prototype,"id",void 0),r([i({readOnly:!0})],d.prototype,"layers",void 0),r([i({type:M,range:{min:0,max:50},json:{write:!0,default:10}})],d.prototype,"maximumVisibleSublayers",void 0),r([i(P)],d.prototype,"opacity",void 0),r([i({clonable:!1})],d.prototype,"parent",void 0),r([i({type:String,nonNullable:!0,json:{write:{ignoreOrigin:!0,isRequired:!0}}})],d.prototype,"title",void 0),r([i({json:{read:!1}})],d.prototype,"type",void 0),r([i({readOnly:!0})],d.prototype,"updating",null),r([i({type:Boolean,json:{name:"visibility",write:!0}})],d.prototype,"visible",void 0),d=r([O("esri.layers.catalog.CatalogDynamicGroupLayer")],d);const q=d;class Re{constructor(t,a,n){this.footprint=t,this.objectId=a,this.itemSource=n,this.count=0,this.layer=null,this.sortValue=void 0,this._pending=_e(null)}get pending(){return this._pending.value}set pending(t){this._pending.value=t}}function Pe(){const e=new ie({style:"solid",color:[0,0,0,0],outline:{style:"solid",color:[96,96,96,.75],width:.75}});return new oe({symbol:e})}let o=class extends b(Q(F(I(c)))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.elevationInfo=null,this.formTemplate=null,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxScale=0,this.minScale=0,this.opacity=1,this.parent=null,this.persistenceEnabled=!0,this.popupEnabled=!0,this.popupTemplate=null,this.title="Footprints",this.type="catalog-footprint",this.visible=!0}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){await this.parent.load(e),L(this.renderer,this.fieldsIndex),this.addHandles([this.parent.on("apply-edits",t=>this.emit("apply-edits",t)),this.parent.on("edits",t=>this.emit("edits",t)),this.parent.on("refresh",t=>this.emit("refresh",t))])}get apiKey(){var e;return(e=this.parent)==null?void 0:e.apiKey}get capabilities(){var e;return(e=this.parent)==null?void 0:e.capabilities}get customParameters(){var e;return(e=this.parent)==null?void 0:e.customParameters}get dateFieldsTimeZone(){var e;return((e=this.parent)==null?void 0:e.dateFieldsTimeZone)??null}get datesInUnknownTimezone(){var e;return((e=this.parent)==null?void 0:e.datesInUnknownTimezone)??!1}get definitionExpression(){var e;return(e=this.parent)==null?void 0:e.definitionExpression}get editingInfo(){var e;return(e=this.parent)==null?void 0:e.editingInfo}get effectiveCapabilities(){var e;return(e=this.parent)==null?void 0:e.effectiveCapabilities}get createQueryVersion(){var e;return(e=this.parent)==null?void 0:e.createQueryVersion}get defaultPopupTemplate(){return this.createPopupTemplate()}get displayField(){var e;return(e=this.parent)==null?void 0:e.displayField}get effectiveEditingEnabled(){return!1}get fields(){var e;return(e=this.parent)==null?void 0:e.fields}get fieldsIndex(){var e;return(e=this.parent)==null?void 0:e.fieldsIndex}get fullExtent(){var e;return(e=this.parent)==null?void 0:e.fullExtent}get geometryFieldsInfo(){var e;return(e=this.parent)==null?void 0:e.geometryFieldsInfo}get geometryType(){var e;return(e=this.parent)==null?void 0:e.geometryType}get globalIdField(){var e;return(e=this.parent)==null?void 0:e.globalIdField}get hasM(){var e;return((e=this.parent)==null?void 0:e.hasM)??!1}get hasZ(){var e;return((e=this.parent)==null?void 0:e.hasZ)??!1}get objectIdField(){var e;return(e=this.parent)==null?void 0:e.objectIdField}get orderBy(){var e;return((e=this.parent)==null?void 0:e.orderBy)??null}get outFields(){var e;return(e=this.parent)==null?void 0:e.outFields}get parsedUrl(){var e;return((e=this.parent)==null?void 0:e.parsedUrl)??null}get preferredTimeZone(){var e;return((e=this.parent)==null?void 0:e.preferredTimeZone)??null}set renderer(e){L(e,this.fieldsIndex),this._set("renderer",e)}get renderer(){return this._isOverridden("renderer")?this._get("renderer"):Pe()}get returnM(){var e;return(e=this.parent)==null?void 0:e.returnM}get returnZ(){var e;return(e=this.parent)==null?void 0:e.returnZ}get source(){var e;return(e=this.parent)==null?void 0:e.source}get timeExtent(){var e;return(e=this.parent)==null?void 0:e.timeExtent}get timeInfo(){var e;return(e=this.parent)==null?void 0:e.timeInfo}get timeOffset(){var e;return(e=this.parent)==null?void 0:e.timeOffset}get typeIdField(){var e;return(e=this.parent)==null?void 0:e.typeIdField}get types(){var e;return(e=this.parent)==null?void 0:e.types}get useViewTime(){var e;return((e=this.parent)==null?void 0:e.useViewTime)??!0}get version(){var e;return(e=this.parent)==null?void 0:e.version}async applyEdits(e,t){return await this.load(),this.parent.applyEdits(e,t)}createPopupTemplate(e){const t={fields:this.fields,objectIdField:this.objectIdField,title:this.title};return Z(t,e)}createQuery(){var e;return(e=this.parent)==null?void 0:e.createQuery()}getField(e){var t;return(t=this.parent)==null?void 0:t.getField(e)}getFieldDomain(e,t){var a;return(a=this.parent)==null?void 0:a.getFieldDomain(e,t)}async queryExtent(e,t){return await this.load(),this.parent.queryExtent(e,t)}async queryFeatures(e,t){return await this.load(),this.parent.queryFeatures(e,t)}async queryFeatureCount(e,t){return await this.load(),this.parent.queryFeatureCount(e,t)}async queryObjectIds(e,t){return await this.load(),this.parent.queryObjectIds(e,t)}};r([i({readOnly:!0})],o.prototype,"apiKey",null),r([i({readOnly:!0})],o.prototype,"capabilities",null),r([i({readOnly:!0})],o.prototype,"customParameters",null),r([i()],o.prototype,"dateFieldsTimeZone",null),r([i({readOnly:!0})],o.prototype,"datesInUnknownTimezone",null),r([i({readOnly:!0})],o.prototype,"definitionExpression",null),r([i({readOnly:!0})],o.prototype,"editingInfo",null),r([i({readOnly:!0})],o.prototype,"effectiveCapabilities",null),r([i({json:{origins:{"web-scene":{write:!1}},write:!0}})],o.prototype,"charts",void 0),r([i({readOnly:!0})],o.prototype,"createQueryVersion",null),r([i({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),r([i()],o.prototype,"displayField",null),r([i({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"editingEnabled",void 0),r([i({readOnly:!0})],o.prototype,"effectiveEditingEnabled",null),r([i((()=>{const e=g(G);return e.json.origins["web-map"]={read:!1,write:!1},e})())],o.prototype,"elevationInfo",void 0),r([i({readOnly:!0})],o.prototype,"fields",null),r([i({readOnly:!0})],o.prototype,"fieldsIndex",null),r([i({type:Te,json:{name:"formInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"formTemplate",void 0),r([i({readOnly:!0})],o.prototype,"fullExtent",null),r([i({readOnly:!0})],o.prototype,"geometryFieldsInfo",null),r([i({readOnly:!0})],o.prototype,"geometryType",null),r([i({readOnly:!0})],o.prototype,"globalIdField",null),r([i({readOnly:!0})],o.prototype,"hasM",null),r([i({readOnly:!0})],o.prototype,"hasZ",null),r([i({type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],o.prototype,"id",void 0),r([i({type:[k],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:z,write:!0}})],o.prototype,"labelingInfo",void 0),r([i(H)],o.prototype,"labelsVisible",void 0),r([i(J)],o.prototype,"legendEnabled",void 0),r([i({type:["show","hide"],json:{write:!0}})],o.prototype,"listMode",void 0),r([i((()=>{const e=g(K);return e.json.origins.service.read=!1,e})())],o.prototype,"maxScale",void 0),r([i((()=>{const e=g(Y);return e.json.origins.service.read=!1,e})())],o.prototype,"minScale",void 0),r([i({readOnly:!0})],o.prototype,"objectIdField",null),r([i(P)],o.prototype,"opacity",void 0),r([i({readOnly:!0})],o.prototype,"orderBy",null),r([i({readOnly:!0})],o.prototype,"outFields",null),r([i({clonable:!1})],o.prototype,"parent",void 0),r([i({readOnly:!0})],o.prototype,"parsedUrl",null),r([i(W)],o.prototype,"popupEnabled",void 0),r([i({type:X,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),r([i({readOnly:!0})],o.prototype,"preferredTimeZone",null),r([i({types:ee,json:{origins:{"web-scene":{types:te}},name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy(e,t){return{ignoreOrigin:this.originIdOf(t)<re.PORTAL_ITEM}}}}})],o.prototype,"renderer",null),r([i({readOnly:!0})],o.prototype,"returnM",null),r([i({readOnly:!0})],o.prototype,"returnZ",null),r([i({readOnly:!0})],o.prototype,"source",null),r([i({readOnly:!0})],o.prototype,"timeExtent",null),r([i({readOnly:!0})],o.prototype,"timeInfo",null),r([i({readOnly:!0})],o.prototype,"timeOffset",null),r([i({type:String,nonNullable:!0,json:{write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"title",void 0),r([i({json:{read:!1}})],o.prototype,"type",void 0),r([i({readOnly:!0})],o.prototype,"typeIdField",null),r([i({readOnly:!0})],o.prototype,"types",null),r([i({readOnly:!0})],o.prototype,"useViewTime",null),r([i({type:Boolean,json:{name:"visibility",write:!0}})],o.prototype,"visible",void 0),o=r([O("esri.layers.catalog.CatalogFootprintLayer")],o);const B=o,w=Ie();function qe(e){return typeof e=="object"&&e!=null&&"itemId"in e&&"portalUrl"in e}function Be(e){return typeof e=="object"&&e!=null&&"url"in e}function Ae(e){if(e==null)return!0;const t=Object.keys(e);return!t.length||t.length===1&&t[0]==="id"}function V(e,t,a,n){const l=e.write({},n);Ae(l)||(t[a]=l)}let s=class extends Se(Ee(F(ne(ae(b(se(xe(le(pe(I(de(Le(c))))))))))))){constructor(e){super(e),this._portals=new Map,this._layerToFootprint=new WeakMap,this.drawOrderField="cd_draworder",this.dynamicGroupLayer=new q({parent:this}),this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.floorInfo=null,this.footprintLayer=new B({parent:this}),this.itemNameField="cd_itemname",this.itemSourceField="cd_itemsource",this.itemTypeField="cd_itemtype",this.layers=new C([this.dynamicGroupLayer,this.footprintLayer]),this.maxScaleField="cd_maxscale",this.minScaleField="cd_minscale",this.orderBy=null,this.outFields=null,this.supportedSourceTypes=new Set(["Catalog Layer"]),this.source=new je({layer:this,supportedSourceTypes:this.supportedSourceTypes}),this.type="catalog",this.typeIdField=null,this.types=null}load(e){const t=e!=null?e.signal:null,a=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(ye).then(async()=>{const{url:n,source:l,portalItem:p}=this;if(!n)throw new f("catalog-layer:missing-url","Catalog layer must be created with a url");if(this.layerId==null){const u=await this._fetchFirstValidLayerId(t);if(u==null)throw new f("catalog-layer:missing-layerId","There is no Catalog Layer in the service",{service:n});this.layerId=u}await l.load({signal:t});const{sourceJSON:y}=l;y&&(this.sourceJSON=y,this.read(y,{origin:"service",portalItem:p,portal:p==null?void 0:p.portal,url:this.parsedUrl}))}).then(()=>{const n=[this.itemNameField,this.itemSourceField,this.itemTypeField,this.minScaleField,this.maxScaleField],l=n.filter(p=>!this.fieldsIndex.has(p));if(l.length)throw new f("catalog-layer:missing-fields","There are missing fields to operate properly",{requiredFields:n,missingFields:l})}).then(()=>ue(this,"load",e));return this.addResolvingPromise(a),Promise.resolve(this)}destroy(){this.footprintLayer.destroy(),this.dynamicGroupLayer.destroy();for(const e of this._portals.values())e.destroy();this._portals.clear()}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities!=null&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return!1}get parsedUrl(){const e=he(this.url);return e!=null&&this.layerId!=null&&(e.path=ce(e.path,this.layerId.toString())),e}async applyEdits(e,t){return me(this,e,t)}on(e,t){return super.on(e,t)}async createLayerFromFootprint(e){const t=await this._createLayer(e);return this._configureLayer(t,e),this._layerToFootprint.set(t,e),t}createFootprintFromLayer(e){var t;return(t=this._layerToFootprint.get(e))==null?void 0:t.clone()}createQuery(){var l;const e=new h,t=(l=this.capabilities)==null?void 0:l.query;e.returnGeometry=!0,t&&(e.compactGeometryEnabled=t.supportsCompactGeometry,e.defaultSpatialReferenceEnabled=t.supportsDefaultSpatialReference),e.outFields=["*"];const{timeOffset:a,timeExtent:n}=this;return e.timeExtent=a!=null&&n!=null?n.offset(-a.value,a.unit):n||null,e.where=this.definitionExpression||"1=1",e}getFeatureType(e){return fe(this.types,this.typeIdField,e)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var l;const a=t==null?void 0:t.feature,n=this.getFeatureType(a);if(n){const p=n.domains&&n.domains[e];if(p&&p.type!=="inherited")return p}return(l=this.getField(e))==null?void 0:l.domain}async hasDataChanged(){return ge(this)}async queryFeatures(e,t){const a=await this.load(),n=await a.source.queryFeatures(h.from(e)??a.createQuery(),t);if(n!=null&&n.features)for(const l of n.features)l.layer=l.sourceLayer=a.footprintLayer;return n}async queryObjectIds(e,t){return(await this.load()).source.queryObjectIds(h.from(e)??this.createQuery(),t)}async queryFeatureCount(e,t){return(await this.load()).source.queryFeatureCount(h.from(e)??this.createQuery(),t)}async queryExtent(e,t){return(await this.load()).source.queryExtent(h.from(e)??this.createQuery(),t)}serviceSupportsSpatialReference(e){return this.loaded&&Ce(this,e)}read(e,t){if(super.read(e,t),e){const{footprintLayer:a,dynamicGroupLayer:n}=e;a&&this.footprintLayer.read(a,t),n&&this.dynamicGroupLayer.read(n,t)}}async _fetchFirstValidLayerId(e){var a;const{data:t}=await we(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});if(Array.isArray(t==null?void 0:t.layers))return(a=t.layers.find(({type:n})=>this.supportedSourceTypes.has(n)))==null?void 0:a.id}async _createLayer(e){var n;const t=e.getAttribute(this.itemSourceField);if(!t)throw new f("catalog-layer:item-source-missing",`The footprint is missing the "${this.itemSourceField}" attribute`);const a=JSON.parse(t);if(qe(a)){const{itemId:l,portalUrl:p}=a,y=ve(p),u=(n=this.portalItem)==null?void 0:n.portal,_=x.getDefault();let m,T=!0;u&&E(p,u.url)?m=u:E(p,_.url)?m=_:(m=R(this._portals,y,()=>new x({url:y})),T=!1);const S=await c.fromPortalItem(new be({id:l,portal:m}));return T||await v(S),S}return Be(a)?c.fromArcGISServerUrl({url:a.url}):new(await Ve.UnsupportedLayer())}_configureLayer(e,t){const a=t.getAttribute(this.itemNameField);a&&(e.title=a);const n=t.getAttribute(this.maxScaleField);n!=null&&"maxScale"in e&&(e.maxScale=n);const l=t.getAttribute(this.minScaleField);l!=null&&"minScale"in e&&(e.minScale=l)}};async function v(e){if("portalItem"in e&&e.portalItem){try{await e.load()}catch{}e.portalItem=null,e.type==="group"&&await Promise.allSettled([...e.layers.map(t=>v(t)),...e.tables.map(t=>v(t))])}}r([i({readOnly:!0})],s.prototype,"createQueryVersion",null),r([i({readOnly:!0})],s.prototype,"drawOrderField",void 0),r([i({type:q,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:V}}})],s.prototype,"dynamicGroupLayer",void 0),r([i({readOnly:!0})],s.prototype,"editingEnabled",null),r([i({readOnly:!0})],s.prototype,"effectiveEditingEnabled",null),r([i({json:{origins:{"web-scene":{name:"layerDefinition.elevationInfo",read:!1,write:!1}}}})],s.prototype,"elevationInfo",void 0),r([i({...w.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],s.prototype,"fields",void 0),r([i(w.fieldsIndex)],s.prototype,"fieldsIndex",void 0),r([i({json:{origins:{"web-scene":{name:"layerDefinition.floorInfo",read:!1,write:!1}}}})],s.prototype,"floorInfo",void 0),r([i({type:B,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:V}}})],s.prototype,"footprintLayer",void 0),r([i(Fe)],s.prototype,"id",void 0),r([i({readOnly:!0})],s.prototype,"itemNameField",void 0),r([i({readOnly:!0})],s.prototype,"itemSourceField",void 0),r([i({readOnly:!0})],s.prototype,"itemTypeField",void 0),r([i({readOnly:!0})],s.prototype,"layers",void 0),r([i({type:["show","hide","hide-children"]})],s.prototype,"listMode",void 0),r([i({readOnly:!0})],s.prototype,"maxScaleField",void 0),r([i({readOnly:!0})],s.prototype,"minScaleField",void 0),r([i({value:"CatalogLayer",type:["CatalogLayer"]})],s.prototype,"operationalLayerType",void 0),r([i({json:{origins:{"web-scene":{name:"layerDefinition.orderBy",write:!0,read:!0}}}})],s.prototype,"orderBy",void 0),r([i(w.outFields)],s.prototype,"outFields",void 0),r([i({readOnly:!0})],s.prototype,"parsedUrl",null),r([i({readOnly:!0})],s.prototype,"source",void 0),r([i({json:{read:!1}})],s.prototype,"type",void 0),r([i({type:String})],s.prototype,"typeIdField",void 0),r([i({type:[$e]})],s.prototype,"types",void 0),s=r([O("esri.layers.CatalogLayer")],s);const qt=s;export{qt as default};
