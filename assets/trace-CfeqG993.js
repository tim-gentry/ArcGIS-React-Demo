import{U as m}from"./index-DX0rcHuW.js";import{f as s,i as c,s as g}from"./utils-nzDIu46v.js";import{a as y}from"./UtilityNetwork-NjDvAhhO.js";import"./FeatureLayer-Bb5mf85J.js";import"./FeatureLayerBase-uK0oK06Z.js";import"./inputs-Due4QVtL.js";import"./formUtils-Dni92j4V.js";import"./HeightModelInfo-DaJXTLDg.js";import"./arcgisLayerUrl-BpJodxxk.js";import"./LayerFloorInfo-D-bXPB8b.js";import"./Relationship-Clp_49iY.js";import"./serviceCapabilitiesUtils-CIgEASrL.js";import"./editsZScale-BDLbHb5e.js";import"./queryZScale-B1r3mH-Y.js";import"./APIKeyMixin-DSbft86T.js";import"./ArcGISService-CVVnFG2B.js";import"./EditBusLayer-Brt5ASt_.js";import"./uuid-fwrPAdZb.js";import"./FeatureType-Bb4KOLCq.js";import"./versionUtils-DlHqsQBg.js";import"./styleUtils-CxRaW7Jr.js";import"./TopFeaturesQuery-B-wHLSqs.js";import"./interfaces-CL2NbQte.js";async function B(o,t,i){const e=s(o),r=t.toJSON();r.traceLocations=JSON.stringify(t.traceLocations),t.resultTypes&&(r.resultTypes=JSON.stringify(t.resultTypes));const a=c(e.query,{query:g({...r,f:"json"}),...i}),n=`${e.path}/trace`;return m(n,a).then(p=>u(p,t.outSpatialReference))}async function C(o,t,i){const e=s(o),r=t.toJSON();r.traceLocations=JSON.stringify(t.traceLocations),t.resultTypes&&(r.resultTypes=JSON.stringify(t.resultTypes));const a=c(e.query,{query:g({...r,async:!0,f:"json"}),...i}),n=`${e.path}/trace`,{data:p}=await m(n,a);return p.statusUrl}function u(o,t){const{data:i}=o,e=y.fromJSON(i.traceResults);return e.aggregatedGeometry&&t&&(e.aggregatedGeometry.line&&(e.aggregatedGeometry.line.spatialReference=t.clone()),e.aggregatedGeometry.multipoint&&(e.aggregatedGeometry.multipoint.spatialReference=t.clone()),e.aggregatedGeometry.polygon&&(e.aggregatedGeometry.polygon.spatialReference=t.clone())),e}export{C as submitTraceJob,B as trace};
