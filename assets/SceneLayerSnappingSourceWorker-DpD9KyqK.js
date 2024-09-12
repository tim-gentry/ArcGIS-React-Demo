import{dV as l,dO as _,d5 as h,ac as v,ag as x,bp as p,M as y,dj as m}from"./index-DX0rcHuW.js";import{v as L,h as V,M as P}from"./lineSegment-C2OVzbAD.js";import{_ as S,V as f,a as C}from"./sphere-COyqsaGw.js";import{Y as b}from"./Octree-lrGXb_0y.js";import{m as j}from"./edgeProcessing-BO3TMEUB.js";import"./plane-BL9J6YX0.js";import"./mat3f64-BBpwCtoL.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-BrpT0VRp.js";import"./vec2f64-Diu2Kaa8.js";import"./mathUtils-BsqbT0oM.js";import"./frustum-Tc8kkw3_.js";import"./Util-HYkJg9Vp.js";import"./deduplicate-CREmZpKM.js";import"./Indices-BZu2O98k.js";import"./InterleavedLayout-ZKuAjCiK.js";import"./BufferView-XrMc2vJu.js";import"./vec2-C-4tM9Uv.js";import"./types-D0PSWh4d.js";import"./VertexAttribute-BnAa5VW0.js";import"./glUtil-C6KhMg1m.js";import"./enums-BlUEVwJR.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./Normals-ClOhen2_.js";const I=1e3;function T(t,o,n){const i=S(),e=f(i);return l(e,e,t,.5),l(e,e,o,.5),i[3]=_(e,t),h(e,e,n),i}let g=class{constructor(){this._idToComponent=new Map,this._components=new b(t=>t.bounds),this._edges=new b(t=>t.bounds),this._tmpLineSegment=L(),this._tmpP1=p(),this._tmpP2=p(),this._tmpP3=p(),this.remoteClient=null}async fetchCandidates(t,o){await Promise.resolve(),y(o),await this._ensureEdgeLocations(t,o);const n=[];return this._edges.forEachNeighbor(i=>(this._addCandidates(t,i,n),n.length<I),t.bounds),{result:{candidates:n}}}async _ensureEdgeLocations(t,o){const n=[];if(this._components.forEachNeighbor(s=>{if(s.info==null){const{id:c,uid:r}=s;n.push({id:c,uid:r})}return!0},t.bounds),!n.length)return;const i={components:n},e=await this.remoteClient.invoke("fetchAllEdgeLocations",i,o??{});for(const s of e.components)this._setFetchEdgeLocations(s)}async add(t){const o=new u(t.id,t.bounds);return this._idToComponent.set(o.id,o),this._components.add([o]),{result:{}}}async remove(t){const o=this._idToComponent.get(t.id);if(o){const n=[];this._edges.forEachNeighbor(i=>(i.component===o&&n.push(i),!0),o.bounds),this._edges.remove(n),this._components.remove([o]),this._idToComponent.delete(o.id)}return{result:{}}}_setFetchEdgeLocations(t){const o=this._idToComponent.get(t.id);if(o==null||t.uid!==o.uid)return;const n=j.createView(t.locations),i=new Array(n.count),e=p(),s=p();for(let d=0;d<n.count;d++){n.position0.getVec(d,e),n.position1.getVec(d,s);const a=T(e,s,t.origin),E=new M(o,d,a);i[d]=E}this._edges.add(i);const{objectIds:c,origin:r}=t;o.info={locations:n,objectIds:c,origin:r}}_addCandidates(t,o,n){const{info:i}=o.component,{origin:e,objectIds:s}=i,c=i.locations,r=c.position0.getVec(o.index,this._tmpP1),d=c.position1.getVec(o.index,this._tmpP2);h(r,r,e),h(d,d,e);const a=s[c.componentIndex.get(o.index)];this._addEdgeCandidate(t,a,r,d,n),w(t,a,r,n),w(t,a,d,n)}_addEdgeCandidate(t,o,n,i,e){if(!t.returnEdge)return;const s=f(t.bounds),c=V(n,i,this._tmpLineSegment),r=P(c,s,this._tmpP3);C(t.bounds,r)&&e.push({type:"edge",objectId:o,target:m(r),distance:_(s,r),start:m(n),end:m(i)})}};g=v([x("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],g);const it=g;function w(t,o,n,i){if(!t.returnVertex||!C(t.bounds,n))return;const e=f(t.bounds);i.push({type:"vertex",objectId:o,target:m(n),distance:_(e,n)})}class u{constructor(o,n){this.id=o,this.bounds=n,this.info=null,this.uid=++u.uid}}u.uid=0;class M{constructor(o,n,i){this.component=o,this.index=n,this.bounds=i}}export{it as default};
