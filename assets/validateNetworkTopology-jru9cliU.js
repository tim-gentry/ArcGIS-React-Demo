import{U as l,s as g}from"./index-DX0rcHuW.js";import{f as u,s as v,i as y}from"./utils-nzDIu46v.js";import{b as S}from"./UtilityNetwork-NjDvAhhO.js";import"./FeatureLayer-Bb5mf85J.js";import"./FeatureLayerBase-uK0oK06Z.js";import"./inputs-Due4QVtL.js";import"./formUtils-Dni92j4V.js";import"./HeightModelInfo-DaJXTLDg.js";import"./arcgisLayerUrl-BpJodxxk.js";import"./LayerFloorInfo-D-bXPB8b.js";import"./Relationship-Clp_49iY.js";import"./serviceCapabilitiesUtils-CIgEASrL.js";import"./editsZScale-BDLbHb5e.js";import"./queryZScale-B1r3mH-Y.js";import"./APIKeyMixin-DSbft86T.js";import"./ArcGISService-CVVnFG2B.js";import"./EditBusLayer-Brt5ASt_.js";import"./uuid-fwrPAdZb.js";import"./FeatureType-Bb4KOLCq.js";import"./versionUtils-DlHqsQBg.js";import"./styleUtils-CxRaW7Jr.js";import"./TopFeaturesQuery-B-wHLSqs.js";import"./interfaces-CL2NbQte.js";async function H(e,t,a){var n;const o=u(e),i=t.toJSON();t.validationSet&&(i.validationSet=JSON.stringify(t.validationSet));const s={...i,returnEdits:!0,f:"json"},m=v({...o.query,...s}),r=y(m,{...a,method:"post"}),c=`${o.path}/validateNetworkTopology`,{data:f}=await l(c,r),p=S.fromJSON(f);return p.serviceEdits=((n=p.serviceEdits)==null?void 0:n.map(d=>({layerId:d.id,editedFeatures:d.editedFeatures})))??[],p}async function K(e,t,a){if(!t.gdbVersion)throw new g("submit-validate-network-topology-job:missing-gdb-version","version is missing");const o=u(e),i=t.toJSON();t.validationSet&&(i.validationSet=JSON.stringify(t.validationSet));const s=y(o.query,{query:v({...i,returnEdits:!0,async:!0,f:"json"}),...a,method:"post"}),m=`${o.path}/validateNetworkTopology`,{data:r}=await l(m,s);return r?r.statusUrl:null}export{K as submitValidateNetworkTopologyJob,H as validateNetworkTopology};
