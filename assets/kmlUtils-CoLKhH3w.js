import{a as d,t as I,cM as k,i as w,U as x,b4 as P,gg as h,gh as g,gi as S,gj as E,f as v,f9 as M,gk as O,gl as F}from"./index-DX0rcHuW.js";const j={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function L(s){var u;const r=s.folders||[],e=r.slice(),o=new Map,a=new Map,f=new Map,i=new Map,c=new Map,l={esriGeometryPoint:a,esriGeometryPolyline:f,esriGeometryPolygon:i};(((u=s.featureCollection)==null?void 0:u.layers)||[]).forEach(t=>{const m=d(t);m.featureSet.features=[];const y=t.featureSet.geometryType;o.set(y,m);const p=t.layerDefinition.objectIdField;y==="esriGeometryPoint"?G(a,p,t.featureSet.features):y==="esriGeometryPolyline"?G(f,p,t.featureSet.features):y==="esriGeometryPolygon"&&G(i,p,t.featureSet.features)}),s.groundOverlays&&s.groundOverlays.forEach(t=>{c.set(t.id,t)}),r.forEach(t=>{t.networkLinkIds.forEach(m=>{const y=C(m,t.id,s.networkLinks);y&&e.push(y)})}),e.forEach(t=>{var m;if(t.featureInfos){t.points=d(o.get("esriGeometryPoint")),t.polylines=d(o.get("esriGeometryPolyline")),t.polygons=d(o.get("esriGeometryPolygon")),t.mapImages=[];for(const y of t.featureInfos)switch(y.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const p=l[y.type].get(y.id);p&&((m=t[j[y.type]])==null||m.featureSet.features.push(p));break}case"GroundOverlay":{const p=c.get(y.id);p&&t.mapImages.push(p);break}}t.fullExtent=b([t])}});const n=b(e);return{folders:r,sublayers:e,extent:n}}function N(s,r,e,o){var i;const a=(i=I)==null?void 0:i.findCredential(s);s=k(s,{token:a==null?void 0:a.token});const f=w.kmlServiceUrl;return x(f,{query:{url:s,model:"simple",folders:"",refresh:e!==0||void 0,outSR:JSON.stringify(r)},responseType:"json",signal:o})}function T(s,r,e=null,o=[]){const a=[],f={},i=r.sublayers,c=new Set(r.folders.map(l=>l.id));return i.forEach(l=>{var u;const n=new s;if(e?n.read(l,e):n.read(l),o.length&&c.has(n.id)&&(n.visible=o.includes(n.id)),f[l.id]=n,l.parentFolderId!=null&&l.parentFolderId!==-1){const t=f[l.parentFolderId];t.sublayers||(t.sublayers=[]),(u=t.sublayers)==null||u.unshift(n)}else a.unshift(n)}),a}function G(s,r,e){e.forEach(o=>{s.set(o.attributes[r],o)})}function $(s,r){let e;return r.some(o=>o.id===s&&(e=o,!0)),e}function C(s,r,e){const o=$(s,e);return o&&(o.parentFolderId=r,o.networkLink=o),o}async function z(s){const r=M.fromJSON(s.featureSet).features,e=s.layerDefinition,o=O(e.drawingInfo.renderer),a=F.fromJSON(s.popupInfo),f=[];for(const i of r){const c=await o.getSymbolAsync(i);i.symbol=c,i.popupTemplate=a,i.visible=!0,f.push(i)}return f}function b(s){var o,a,f,i,c,l;const r=P(h),e=P(h);for(const n of s){if((a=(o=n.polygons)==null?void 0:o.featureSet)!=null&&a.features)for(const u of n.polygons.featureSet.features)g(r,u.geometry),S(e,r);if((i=(f=n.polylines)==null?void 0:f.featureSet)!=null&&i.features)for(const u of n.polylines.featureSet.features)g(r,u.geometry),S(e,r);if((l=(c=n.points)==null?void 0:c.featureSet)!=null&&l.features)for(const u of n.points.featureSet.features)g(r,u.geometry),S(e,r);if(n.mapImages)for(const u of n.mapImages)g(r,u.extent),S(e,r)}return E(e,h)?void 0:{xmin:e[0],ymin:e[1],zmin:e[2],xmax:e[3],ymax:e[4],zmax:e[5],spatialReference:v.WGS84}}export{T as S,z as b,L as d,N as g,b as j};
