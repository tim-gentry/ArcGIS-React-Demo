import{ac as n,ad as o,ag as H,ic as W,ib as re,bY as b,fa as S,dI as L,d9 as ae,aI as O,d as A,g9 as ne,hd as R,eD as oe,gr as le,jE as me,hb as pe,jF as ue,eC as z,m as E,db as v,f as $,aJ as he,bA as j,id as ce,n as de,ie as T,eJ as ge,da as ve,eF as ye}from"./index-DX0rcHuW.js";import{e as k,B as fe,n as B}from"./jsxFactory-DmHi7Kb2.js";import{e as _e}from"./defaultUnit-CeSgMfuW.js";import{g as V,j as we,$ as be,d as Le,D as Me}from"./unitFormatUtils-BYvkXWcg.js";import{h as $e}from"./UpdatingHandles-CERUeL1P.js";import{geodesicDensify as x,planarLength as N,simplify as M,geodesicLength as Ae,geodesicArea as Se,planarArea as De}from"./geometryEngine-C92iiwvG.js";import{w as U,R as _,v as G,y as q}from"./geodesicUtils-BPlO99Nt.js";import C from"./GraphicsLayer-SBXo_p0G.js";import{l as F}from"./ViewingMode-Dodu7ZZk.js";import{f as Oe}from"./SnappingVisualizer2D-l3CglQ4N.js";import{l as Te}from"./Draw-BhWecJv-.js";import{E as J,p as ke,P as xe}from"./EditGeometryOperations-BmjyQqm3.js";import{n as Ge,p as qe,E as Ce,f as Re}from"./InteractiveToolBase-DBqJNRIA.js";import{S as Ue}from"./GraphicManipulator-KAI0t0XJ.js";import{e as He}from"./SnappingContext-lR2hMWGP.js";import{f as Ie}from"./SnappingDragPipelineStep-tRLiKwn9.js";import{a as We}from"./SnappingManagerPool-PdSelfRv.js";import{N as ze}from"./SnappingManager-C8RCylzd.js";import{p as Ee,u as je}from"./MeasurementWidgetContent-C50H4Ymp.js";import{e as P}from"./globalCss-CZa70j6i.js";import"./uuid-fwrPAdZb.js";import"./getDefaultUnitForView-Cl7rPtCt.js";import"./ByteSizeUnit-BsxeN7wM.js";import"./Cyclical-CEj-eenM.js";import"./quantityUtils-DSpmykXR.js";import"./geometryEngineBase-RmbNeFm7.js";import"./_commonjsHelpers-DCkdB7M8.js";import"./hydrated-CEL7VY_R.js";import"./GraphicsCollection-BjA_qBYu.js";import"./vec2-C-4tM9Uv.js";import"./vec2f64-Diu2Kaa8.js";import"./enums-BRXbslMp.js";import"./SnappingVisualizer-CcMP9Ros.js";import"./PointSnappingHint-5GPoViz2.js";import"./projectVectorToVector-DjKO2tJh.js";import"./projectPointToVector-6lqiVL77.js";import"./SnappingOperation-SWaCs4qQ.js";import"./Scheduler-Bg_fxWwI.js";import"./signal-CpmfLcHB.js";import"./debugFlags-Cr0sx6r_.js";import"./InputManager-abOXR3ru.js";import"./keybindings-RFI4I3n4.js";import"./screenUtils-BcEL8jIe.js";import"./elevationInfoUtils-JmMUMmCn.js";import"./surfaceCoordinateSystems-UWtiICKD.js";import"./memoize-DsJmrG76.js";import"./ReactiveSet-BcQY7AxE.js";import"./dehydratedFeatureComparison-Cl-LDztH.js";import"./SketchLabelOptions-zVB6yjLA.js";import"./hydratedFeatures-DcIGyuBL.js";import"./mat2d-CXMJJ9G6.js";import"./mat2df64-CBKYtunK.js";import"./quat-DrJsq_-D.js";import"./mat3f64-BBpwCtoL.js";import"./quatf64-BrpT0VRp.js";import"./plane-BL9J6YX0.js";import"./mat4f64-Dk4dwAN8.js";import"./mathUtils-BsqbT0oM.js";import"./geometry2dUtils-D5ud2BJg.js";import"./meshVertexSpaceUtils-UWZ_3JBG.js";import"./MeshLocalVertexSpace-Ck1lhGhd.js";import"./interfaces-D6pIddIh.js";import"./drapedUtils-C1LMlkrW.js";import"./sphere-COyqsaGw.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./utils-CXgSw6Sd.js";import"./layerViewUtils-D2JqIDZ8.js";import"./geodesicLengthMeasurementUtils-1VjlYqtL.js";import"./UnitSelect-Cjf2PU8k.js";const y=1e5;let g=class extends Ge{constructor(e){super(e),this._drawActive=!1,this._measurementLayer=new C({internal:!0,listMode:"hide",visible:!1}),this._manipulatorLayer=new C({internal:!0,listMode:"hide",visible:!1}),this._snappingLayer=new C({internal:!0,listMode:"hide",visible:!1}),this._updatingHandles=new $e,this._vertices=[],this.geodesicDistanceThreshold=null,this.measurement=null,this.measurementLabel=null}initialize(){W("esri/core/t9n/Units").then(t=>{this.messages=t});const e=this.view;this._draw=new Te({view:e}),e.map.addMany([this._measurementLayer,this._manipulatorLayer,this._snappingLayer]),e.focus(),this._snappingManagerResult=We(e),this.addHandles([re(async()=>{this.messages=await W("esri/core/t9n/Units")}),b(()=>[this.unit,this.geodesicDistanceThreshold,this.messages],()=>{this._updateGraphics()},S),b(()=>[this.view.effectiveTheme.accentColor,this.view.effectiveTheme.textColor],()=>{if(!this._vertices.length)return;const t=this._vertices.map(({coord:s})=>s);for(const{handle:s}of this._vertices)s.remove();this._vertices=[],this._measurementLayer.removeAll(),this._manipulatorLayer.removeAll(),this._snappingLayer.removeAll(),this.manipulators.removeAll(),this._updateSketch(t)}),b(()=>this.snappingOptions.featureSources,t=>{for(const s of t)s.layer!==this._measurementLayer&&s.layer!==this._manipulatorLayer||(s.enabled=!1)},S),this._snappingManagerResult]),ze(this)}destroy(){const{map:e}=this.view;this._draw.view=null,this._draw=L(this._draw),e.removeMany([this._measurementLayer,this._manipulatorLayer,this._snappingLayer]),this._measurementLayer.removeAll(),this._manipulatorLayer.removeAll(),this._snappingLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null),this._measurementLayer=L(this._measurementLayer),this._manipulatorLayer=L(this._manipulatorLayer),this._snappingLayer=L(this._snappingLayer),this._updatingHandles=L(this._updatingHandles),this._resetVertices()}get _snappingManager(){return this._snappingManagerResult.snappingManager}get cursor(){return this._drawActive?"crosshair":null}set editable(e){this._set("editable",e),e||this._draw.reset()}get snappingOptions(){return this._snappingManager.options}get updating(){return this._updatingHandles.updating||this._snappingManager.updating}onActivate(){this._drawActive||this._vertices.length!==0||this._startSketch()}onShow(){this._measurementLayer.visible=!0,this._manipulatorLayer.visible=!0,this._snappingLayer.visible=!0}onHide(){this._measurementLayer.visible=!1,this._manipulatorLayer.visible=!1,this._snappingLayer.visible=!1}reset(){this.manipulators.removeAll(),this._resetVertices(),this._measurementLayer.removeAll(),this._manipulatorLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null),this._draw.reset(),this._drawActive=!1}_getSnappingContext(e){return new He({elevationInfo:{mode:"on-the-ground",offset:0},pointer:e,editGeometryOperations:new J(new ke("point",xe(!1,!1,this.view.spatialReference)),F.Local),visualizer:new Oe(this._snappingLayer)})}_resetVertices(){for(const{handle:e}of this._vertices)e.remove();this._vertices=[]}_startSketch(){this._drawActive=!0;const e=this._snappingManager,t=this._draw.create("polyline",{mode:"click",snappingManager:e});t.on(["vertex-add","vertex-update","vertex-remove","cursor-update","undo","redo"],s=>this._updateSketch(s.vertices)),t.on("draw-complete",()=>this._stopSketch())}_stopSketch(){if(this._vertices.length<3)return this.reset(),void this._startSketch();this.manipulators.forEach(({manipulator:e})=>{e.interactive=!0}),this._drawActive=!1,this.finishToolCreation()}_updateSketch(e){const t=this.view.spatialReference;if(t&&(!X(t)||ae())){for(;this._vertices.length>e.length;){const{handle:s,manipulator:r}=this._vertices.pop();s.remove(),this.manipulators.remove(r)}for(let s=this._vertices.length;s<e.length;s++){const[r,p]=e[s],l=new O({x:r,y:p,spatialReference:t}),m=Be(l,this.view,this._manipulatorLayer);this.manipulators.add(m);const a=J.fromGeometry(l,F.Local);a.on("vertex-update",h=>{const u=h.vertices.at(0);u&&(this._vertices[s].coord=[u.pos[0],u.pos[1]],this._updateGraphics())});const i=qe(m,(h,u,d,w)=>{const ee=this._getSnappingContext(w),te=this._snappingManager,se=this._updatingHandles,{snappingStep:ie}=Ie({snappingContext:ee,snappingManager:te,updatingHandles:se});u.next(Ce(this.view)).next(D=>{if(D.action==="start"){const I=new O(D.mapStart);h.graphic.geometry=I,a.trySetGeometry(I)}return D}).next(...ie).next(Re({operations:a})).next(()=>{h.graphic.geometry=a.data.geometry})});this._vertices.push({manipulator:m,coord:[r,p],handle:i})}if(this._vertices.length){const s=this._vertices.length-1,r=this._vertices[s],[p,l]=e[s];r.coord[0]===p&&r.coord[1]===l||(r.coord=[p,l],r.manipulator.graphic.geometry=new O({x:p,y:l,spatialReference:t}));const m=this._drawActive?this._vertices[s].manipulator:null;this.manipulators.forEach(({manipulator:a})=>{a.interactive=m==null||a!==m})}this._updateGraphics()}}_updateGraphics(){if(this._vertices.length<2)return void this._measurementLayer.removeAll();const e=Ve(this._vertices.map(({coord:d})=>d),this.view.spatialReference,this.geodesicDistanceThreshold);if(!e)return;const{measurement:t,fillGeometry:s,outlineGeometry:r}=e;this._set("measurement",t);const p=t?Fe(this.messages,t,this.unit):null;if(this._set("measurementLabel",p),!s&&!r)return;let l,m,a;const{graphics:i}=this._measurementLayer,h=i.length===3,{effectiveTheme:u}=this.view;h?(l=i.at(0),m=i.at(1),a=i.at(2)):(l=new A({symbol:new ne({color:R(u.accentColor,.3),outline:null})}),m=new A({symbol:new oe({color:u.accentColor,width:2})}),a=new A({symbol:new le({color:u.textColor,font:new me({size:14,family:"sans-serif"}),haloColor:R(pe(u.textColor,ue.Low),.5),haloSize:2})}),i.removeAll(),i.addMany([l,m,a])),l.geometry=s,m.geometry=r,a.geometry=s==null?void 0:s.centroid,a.symbol.text=(p==null?void 0:p.area)??""}};function Be(e,t,s){const p={style:"circle",color:R(t.effectiveTheme.accentColor,.5),outline:{type:"simple-line",width:0}},l=new z({...p,size:8}),m=new z({...p,size:1.5*8}),a=new A({geometry:e,symbol:l});return new Ue({view:t,layer:s,graphic:a,focusedSymbol:m})}function Ve(e,t,s){if(e.length===2){const h=new E({paths:e,spatialReference:t});let u;if(t!=null&&t.isGeographic)if(U(t))u=_(h,y);else{const d=v(h,$.WGS84),w=_(d,y);u=v(w,t)}else if(t!=null&&t.isWebMercator)u=x(h,y,"meters");else if(N(h,"meters")>=K(s)){const d=v(h,$.WGS84),w=_(d,y);u=v(w,t)}else u=h;return{measurement:null,fillGeometry:null,outlineGeometry:u}}e.push(e[0]);const r=new E({paths:[e],spatialReference:t}),p=new he({rings:[e],spatialReference:t});let l,m,a=null,i=null;if(t!=null&&t.isGeographic)if(U(t)){if(a=_(r,y),i=_(p,y),i=M(i),!i)return null;l=G([r],"meters")[0],m=q([i],"square-meters")[0]}else{const h=$.WGS84,u=v(r,h),d=v(p,h);if(a=_(u,y),i=_(d,y),i=M(i),!i)return null;l=G([u],"meters")[0],m=q([i],"square-meters")[0],a=v(a,t),i=v(i,t)}else if(t!=null&&t.isWebMercator){if(a=x(r,y,"meters"),i=x(p,y,"meters"),i=M(i),!i)return null;l=Ae(r,"meters"),m=Se(i,"square-meters")}else{const h=N(r,"meters");if(h>=K(s)){const u=$.WGS84,d=v(r,u),w=v(p,u);if(a=_(d,y),i=_(w,y),i=M(i),!i)return null;l=G([d],"meters")[0],m=q([i],"square-meters")[0],a=v(a,t),i=v(i,t)}else{if(a=r,i=M(p),!i)return null;l=h,m=De(i,"square-meters")}}return{measurement:{geometry:i,area:m,perimeter:l},fillGeometry:i,outlineGeometry:a}}function Ne(e){return e!=null}function X(e){if(!e)return!1;const{isGeographic:t,isWebMercator:s,isWGS84:r}=e;return t&&!r&&!U(e)||!t&&!s}function Fe(e,t,s){if(!t||!e)return null;const r={area:null,perimeter:null},{area:p,perimeter:l}=t;switch(s){case"metric":r.area=be(e,p,"square-meters");break;case"imperial":r.area=we(e,p,"square-meters");break;default:{const a=j(p,"square-meters",s);r.area=V(e,a,s);break}}const m=Je(s);if(m)switch(m){case"metric":r.perimeter=Me(e,l,"meters");break;case"imperial":r.perimeter=Le(e,l,"meters");break;default:{const a=j(l,"meters",m);r.perimeter=V(e,a,m);break}}else r.perimeter="";return r}function Je(e){switch(e){case"metric":case"ares":case"hectares":return"metric";case"imperial":case"acres":return"imperial";case"square-inches":return"inches";case"square-feet":return"feet";case"square-yards":return"yards";case"square-miles":return"miles";case"square-us-feet":return"us-feet";case"square-meters":return"meters";case"square-kilometers":return"kilometers";case"square-millimeters":return"millimeters";case"square-centimeters":return"centimeters";case"square-decimeters":return"decimeters";default:return null}}function K(e){return e??1/0}n([o()],g.prototype,"_drawActive",void 0),n([o({readOnly:!0})],g.prototype,"cursor",null),n([o({value:!0})],g.prototype,"editable",null),n([o({type:Number})],g.prototype,"geodesicDistanceThreshold",void 0),n([o({readOnly:!0})],g.prototype,"measurement",void 0),n([o({readOnly:!0})],g.prototype,"measurementLabel",void 0),n([o()],g.prototype,"messages",void 0),n([o()],g.prototype,"unit",void 0),n([o()],g.prototype,"updating",null),n([o({constructOnly:!0})],g.prototype,"view",void 0),g=n([H("esri.widgets.AreaMeasurement2D.AreaMeasurement2DTool")],g);let f=class extends Ee{constructor(e){super(e),this.supportedViewType="2d",this.unsupportedErrorMessage="AreaMeasurement2DViewModel is only supported in 2D views."}initialize(){this.addHandles([b(()=>{var e;return(e=this.view)==null?void 0:e.spatialReference},()=>this.clear()),b(()=>this.unit,e=>{this.tool!=null&&(this.tool.unit=e)},S),b(()=>this.geodesicDistanceThreshold,e=>{this.tool!=null&&(this.tool.geodesicDistanceThreshold=e)},S)])}get geodesicDistanceThreshold(){return this._get("geodesicDistanceThreshold")}set geodesicDistanceThreshold(e){ce(de.getLogger(this),"geodesicDistanceThreshold",{version:"4.29",warnOnce:!0}),this._set("geodesicDistanceThreshold",e)}get measurement(){return this.tool!=null?this.tool.measurement:null}get measurementLabel(){return this.tool!=null?this.tool.measurementLabel:null}get state(){var e;return this.disabled||this.view==null||!Ne(this.view.spatialReference)?"disabled":(e=this.tool)!=null&&e.measurement?this.tool.active?"measuring":"measured":"ready"}get unit(){return this._validateUnit(this.defaultUnit)}set unit(e){this._overrideIfSome("unit",this._validateUnit(e))}get unitOptions(){return T}set unitOptions(e){this._overrideIfSome("unitOptions",this._validateUnits(e))}async start(){const e=this.view;e!=null&&(await ge(()=>e.ready),X(e.spatialReference)&&await ve()),this.createTool({interactive:!0})}clear(){this.removeTool()}constructTool(){return new g({view:this.view,visible:this.visible,geodesicDistanceThreshold:this.geodesicDistanceThreshold,unit:this.unit})}_validateUnit(e){const{unitOptions:t,defaultUnit:s}=this;return e!=null&&t.includes(e)?e:t.includes(s)?s:t.length>0?t[0]:s}_validateUnits(e){if(e==null)return[];const t=e.filter(s=>T.includes(s));return t.length===0?T.slice():t}};n([o(_e)],f.prototype,"defaultUnit",void 0),n([o()],f.prototype,"geodesicDistanceThreshold",null),n([o({readOnly:!0})],f.prototype,"measurement",null),n([o({readOnly:!0})],f.prototype,"measurementLabel",null),n([o({readOnly:!0})],f.prototype,"state",null),n([o({type:String})],f.prototype,"unit",null),n([o({type:[String]})],f.prototype,"unitOptions",null),f=n([H("esri.widgets.AreaMeasurement2D.AreaMeasurement2DViewModel")],f);const Z=f,Y="esri-area-measurement-2d",Q={base:Y,newMeasurementButton:`${Y}__clear-button`};let c=class extends fe{constructor(e,t){super(e,t),this.messages=null,this.messagesUnits=null,this.messagesCommon=null,this.viewModel=new Z}get active(){return this.viewModel.active}get icon(){return"measure-area"}set icon(e){this._overrideIfSome("icon",e)}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get unit(){return this.viewModel.unit}set unit(e){this.viewModel.unit=e}get unitOptions(){return this.viewModel.unitOptions}set unitOptions(e){this.viewModel.unitOptions=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}get visible(){return this.viewModel.visible}set visible(e){this.viewModel.visible=e}render(){const{messages:e,messagesCommon:t,messagesUnits:s,unit:r,unitOptions:p,viewModel:l,visible:m}=this,{active:a,measurementLabel:i,state:h,supported:u}=l;return B("div",{"aria-label":e.widgetLabel,class:this.classes(Q.base,P.widget,P.panel),key:this,role:"presentation"},m?B(je,{active:a,measurementItems:[{key:"area",title:s==null?void 0:s.measures.area,value:i==null?void 0:i.area},{key:"perimeter",title:e.perimeter,value:i==null?void 0:i.perimeter}],messages:{...e,notApplicable:t.notApplicable},newMeasurementButtonClass:Q.newMeasurementButton,state:h,supported:u,unit:r,unitOptions:p,onNewMeasurementClick:()=>{ye(l.start())},onUnitChange:d=>{this.unit=d}}):null)}};n([o({readOnly:!0})],c.prototype,"active",null),n([o()],c.prototype,"icon",null),n([o()],c.prototype,"label",null),n([o(),k("esri/widgets/AreaMeasurement2D/t9n/AreaMeasurement2D")],c.prototype,"messages",void 0),n([o(),k("esri/core/t9n/Units")],c.prototype,"messagesUnits",void 0),n([o(),k("esri/t9n/common")],c.prototype,"messagesCommon",void 0),n([o()],c.prototype,"uiStrings",void 0),n([o()],c.prototype,"unit",null),n([o()],c.prototype,"unitOptions",null),n([o()],c.prototype,"view",null),n([o({type:Z})],c.prototype,"viewModel",void 0),n([o({type:Boolean})],c.prototype,"visible",null),c=n([H("esri.widgets.AreaMeasurement2D")],c);const ms=c;export{ms as default};
