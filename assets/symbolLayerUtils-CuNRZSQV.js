const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/objectResourceUtils-dMevf21j.js","assets/devEnvironmentUtils-D6qIi8Ky.js","assets/index-DX0rcHuW.js","assets/index-B2yzeq1w.css","assets/mat3-Ck4GO2qT.js","assets/mat3f64-BBpwCtoL.js","assets/mat4f64-Dk4dwAN8.js","assets/vec2f64-Diu2Kaa8.js","assets/Texture-0jciB86n.js","assets/Matrix4PassUniform-CTNrzJ6Q.js","assets/interfaces-B8ge7Jg9.js","assets/BindType-BmZEZMMh.js","assets/VertexAttribute-BnAa5VW0.js","assets/Util-HYkJg9Vp.js","assets/enums-BlUEVwJR.js","assets/Texture-BF0Xf23l.js","assets/basicInterfaces-wONHx_SN.js","assets/vec2-C-4tM9Uv.js","assets/ShaderTechniqueConfiguration-D3UbJ2mX.js","assets/doublePrecisionUtils-B0owpBza.js","assets/Indices-BZu2O98k.js","assets/Material-BfvzXcva.js","assets/ViewingMode-Dodu7ZZk.js","assets/triangle-CGr49R4x.js","assets/sphere-COyqsaGw.js","assets/plane-BL9J6YX0.js","assets/quatf64-BrpT0VRp.js","assets/mathUtils-BsqbT0oM.js","assets/lineSegment-C2OVzbAD.js","assets/renderState-yUi34s5A.js","assets/requestImageUtils-Cd7mPI4y.js","assets/BufferView-XrMc2vJu.js","assets/vec3-DxxvdsHs.js","assets/vec4-B2fX0VJI.js","assets/DefaultMaterial_COLOR_GAMMA-vDn2TTUE.js","assets/quat-DrJsq_-D.js","assets/resourceUtils-Cv8EFCAN.js","assets/vec2f32-BbH2jxlN.js","assets/NestedMap-DgiGbX8E.js","assets/orientedBoundingBox-BTwqkknQ.js","assets/spatialReferenceEllipsoidUtils-Bv0mQCFg.js","assets/computeTranslationToOriginAndRotation-B9BchKSd.js","assets/InterleavedLayout-ZKuAjCiK.js","assets/types-D0PSWh4d.js","assets/VertexColor.glsl-BX9otDj2.js","assets/verticalOffsetUtils-Bq_pVrum.js","assets/DecodeSymbolColor.glsl-CpAWHGzb.js"])))=>i.map(i=>d[i]);
import{hh as y,s,U as p,_ as b,hi as l,b4 as w,hj as _,bp as h}from"./index-DX0rcHuW.js";let a=f();function f(){return new y(50)}function x(){a=f()}async function B(e,r){var o,t;if((o=e.resource)!=null&&o.href)return g(e.resource.href).then(n=>[n.width,n.height]);if((t=e.resource)!=null&&t.primitive)return r!=null?[r,r]:[256,256];throw new s("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function g(e){return p(e,{responseType:"image"}).then(r=>r.data)}async function $(e,r=null){var t,n;if(!e.isPrimitive){const i=(t=e.resource)==null?void 0:t.href;if(!i)throw new s("symbol:invalid-resource","The symbol does not have a valid resource");const u=a.get(i);if(u!==void 0)return u;const{fetch:m}=await b(()=>import("./objectResourceUtils-dMevf21j.js").then(v=>v.G),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46])),d=await m(i,{disableTextures:!0}),c=l(d.referenceBoundingBox,h());return a.put(i,c),c}if(!((n=e.resource)!=null&&n.primitive))throw new s("symbol:invalid-resource","The symbol does not have a valid resource");const o=w(_(e.resource.primitive));if(r!=null)for(let i=0;i<o.length;i++)o[i]*=r;return l(o,h())}export{x as clearBoundingBoxCache,B as computeIconLayerResourceSize,$ as computeObjectLayerResourceSize};
