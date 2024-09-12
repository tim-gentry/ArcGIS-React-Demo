import{bl as se,ng as ae,nh as ie,ni as ue,mp as J,M as le,nj as Y,U as fe,K as ce,H as de,s as l,n0 as pe,o as me,eI as he,bw as Te,kD as ye,lJ as we,bx as ge,z as be,k4 as X,hm as V,n as I,nk as xe}from"./index-DX0rcHuW.js";import{e as Q,r as $}from"./mat4f64-Dk4dwAN8.js";import{D as M,L,C as f,E as g}from"./enums-BlUEVwJR.js";import{v as _e}from"./quat-DrJsq_-D.js";import{e as Se}from"./quatf64-BrpT0VRp.js";import{c as H,u as W,F as Ee,w as Oe,q as Re,A as Ne,V as Ae,B as ve,g as Ce,d as Ie,i as U,x as Me,L as Le,O as Fe,E as Be}from"./BufferView-XrMc2vJu.js";import{n as Ue,t as $e,o as De,r as Pe}from"./resourceUtils-Cv8EFCAN.js";import{l as Ge,i as je}from"./Indices-BZu2O98k.js";function Ve(r,e){Z(r.typedBuffer,e.typedBuffer,r.typedBufferStride,e.typedBufferStride)}function Z(r,e,n=2,t=n){const o=e.length/2;let s=0,a=0;if(se(e)||ae(e)){for(let u=0;u<o;++u)r[s]=e[a],r[s+1]=e[a+1],s+=n,a+=t;return}const i=ie(e);if(ue(e))for(let u=0;u<o;++u)r[s]=Math.max(e[a]/i,-1),r[s+1]=Math.max(e[a+1]/i,-1),s+=n,a+=t;else for(let u=0;u<o;++u)r[s]=e[a]/i,r[s+1]=e[a+1]/i,s+=n,a+=t}function He(r,e,n,t){const o=r.typedBuffer,s=r.typedBufferStride,a=(t==null?void 0:t.count)??r.count;let i=((t==null?void 0:t.dstIndex)??0)*s;for(let u=0;u<a;++u)o[i]=e,o[i+1]=n,i+=s}Object.freeze(Object.defineProperty({__proto__:null,fill:He,normalizeIntegerBuffer:Z,normalizeIntegerBufferView:Ve},Symbol.toStringTag,{value:"Module"}));function ke(r,e){ee(r.typedBuffer,e.typedBuffer,r.typedBufferStride,e.typedBufferStride)}function ee(r,e,n=3,t=n){const o=e.length/t;let s=0,a=0;for(let i=0;i<o;++i)r[s]=e[a],r[s+1]=e[a+1],r[s+2]=e[a+2],s+=n,a+=t}function ze(r,e,n,t,o){const s=r.typedBuffer,a=r.typedBufferStride,i=(o==null?void 0:o.count)??r.count;let u=((o==null?void 0:o.dstIndex)??0)*a;for(let c=0;c<i;++c)s[u]=e,s[u+1]=n,s[u+2]=t,u+=a}Object.freeze(Object.defineProperty({__proto__:null,copy:ee,copyView:ke,fill:ze},Symbol.toStringTag,{value:"Module"}));function Ke(r,e){te(r.typedBuffer,e,r.typedBufferStride)}function te(r,e,n=4){const t=e.typedBuffer,o=e.typedBufferStride,s=e.count;let a=0,i=0;for(let u=0;u<s;++u)r[a]=t[i],r[a+1]=t[i+1],r[a+2]=t[i+2],r[a+3]=t[i+3],a+=n,i+=o}function qe(r,e,n,t,o,s){const a=r.typedBuffer,i=r.typedBufferStride,u=(s==null?void 0:s.count)??r.count;let c=((s==null?void 0:s.dstIndex)??0)*i;for(let m=0;m<u;++m)a[c]=e,a[c+1]=n,a[c+2]=t,a[c+3]=o,c+=i}Object.freeze(Object.defineProperty({__proto__:null,copy:te,copyView:Ke,fill:qe},Symbol.toStringTag,{value:"Module"}));let Nt=class{constructor(e){this._streamDataRequester=e}async loadJSON(e,n){return this._load("json",e,n)}async loadBinary(e,n){return J(e)?(le(n),Y(e)):this._load("binary",e,n)}async loadImage(e,n){return this._load("image",e,n)}async _load(e,n,t){if(this._streamDataRequester==null)return(await fe(n,{responseType:Je[e]})).data;const o=await ce(this._streamDataRequester.request(n,e,t));if(o.ok===!0)return o.value;throw de(o.error),new l("",`Request for resource failed: ${o.error}`)}};const Je={image:"image",binary:"array-buffer",json:"json","image+type":void 0};function Ye(r={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,colorTextureTransform:null,normalTextureTransform:null,occlusionTextureTransform:null,emissiveTextureTransform:null,metallicRoughnessTextureTransform:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...r}}function Xe(r,e={}){return{data:r,parameters:{wrap:{s:M.REPEAT,t:M.REPEAT,...e.wrap},noUnpackFlip:!0,mipmap:!1,...e}}}function C(r,e){const n=r.count;e||(e=new r.TypedArrayConstructor(n));for(let t=0;t<n;t++)e[t]=r.get(t);return e}Object.freeze(Object.defineProperty({__proto__:null,makeDense:C},Symbol.toStringTag,{value:"Module"}));let k=class{constructor(e){this._data=e,this._offset4=0,this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4))}readUint32(){const e=this._offset4;return this._offset4+=1,this._dataUint32[e]}readUint8Array(e){const n=4*this._offset4;return this._offset4+=e/4,new Uint8Array(this._data,n,e)}remainingBytes(){return this._data.byteLength-4*this._offset4}};var S,z;(function(r){r.SCALAR="SCALAR",r.VEC2="VEC2",r.VEC3="VEC3",r.VEC4="VEC4",r.MAT2="MAT2",r.MAT3="MAT3",r.MAT4="MAT4"})(S||(S={})),function(r){r[r.ARRAY_BUFFER=34962]="ARRAY_BUFFER",r[r.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(z||(z={}));const re={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},Qe={pbrMetallicRoughness:re,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},We={ESRI_externalColorMixMode:"tint",ESRI_receiveShadows:!0,ESRI_receiveAmbientOcclusion:!0},K=(r={})=>{const e={...re,...r.pbrMetallicRoughness},n=Ze({...We,...r.extras});return{...Qe,...r,pbrMetallicRoughness:e,extras:n}};function Ze(r){switch(r.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:r.ESRI_externalColorMixMode="tint"}return r}const et={magFilter:L.LINEAR,minFilter:L.LINEAR_MIPMAP_LINEAR,wrapS:M.REPEAT,wrapT:M.REPEAT},tt=r=>({...et,...r});function rt(r){let e,n;return r.replace(/^(.*\/)?([^/]*)$/,(t,o,s)=>(e=o||"",n=s||"","")),{dirPart:e,filePart:n}}const A={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20};class w{constructor(e,n,t,o){if(this._context=e,this.uri=n,this.json=t,this._glbBuffer=o,this._bufferLoaders=new Map,this._textureLoaders=new Map,this._textureCache=new Map,this._materialCache=new Map,this._nodeParentMap=new Map,this._nodeTransformCache=new Map,this._supportedExtensions=["KHR_texture_basisu","KHR_texture_transform"],this._baseUri=rt(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),t.scenes==null)throw new l("gltf-loader-unsupported-feature","Scenes must be defined.");if(t.meshes==null)throw new l("gltf-loader-unsupported-feature","Meshes must be defined");if(t.nodes==null)throw new l("gltf-loader-unsupported-feature","Nodes must be defined.");this._computeNodeParents()}static async load(e,n,t){if(J(n)){const a=me(n);if(a&&a.mediaType!=="model/gltf-binary")try{const u=JSON.parse(a.isBase64?atob(a.data):a.data);return new w(e,n,u)}catch{}const i=Y(n);if(w._isGLBData(i))return this._fromGLBData(e,n,i)}if(ut.test(n)||(t==null?void 0:t.expectedType)==="gltf"){const a=await e.loadJSON(n,t);return new w(e,n,a)}const o=await e.loadBinary(n,t);if(w._isGLBData(o))return this._fromGLBData(e,n,o);if(lt.test(n)||(t==null?void 0:t.expectedType)==="glb")throw new l("gltf-loader-invalid-glb","This is not a valid glb file.");const s=await e.loadJSON(n,t);return new w(e,n,s)}static _isGLBData(e){if(e==null)return!1;const n=new k(e);return n.remainingBytes()>=4&&n.readUint32()===A.MAGIC}static async _fromGLBData(e,n,t){const o=await w._parseGLBData(t);return new w(e,n,o.json,o.binaryData)}static async _parseGLBData(e){const n=new k(e);if(n.remainingBytes()<12)throw new l("gltf-loader-error","glb binary data is insufficiently large.");const t=n.readUint32(),o=n.readUint32(),s=n.readUint32();if(t!==A.MAGIC)throw new l("gltf-loader-error","Magic first 4 bytes do not fit to expected glb value.");if(e.byteLength<s)throw new l("gltf-loader-error","glb binary data is smaller than header specifies.");if(o!==2)throw new l("gltf-loader-unsupported-feature","An unsupported glb container version was detected. Only version 2 is supported.");let a,i,u=0;for(;n.remainingBytes()>=8;){const c=n.readUint32(),m=n.readUint32();if(u===0){if(m!==A.CHUNK_TYPE_JSON)throw new l("gltf-loader-error","First glb chunk must be JSON.");if(c<0)throw new l("gltf-loader-error","No JSON data found.");a=await Ue(n.readUint8Array(c))}else if(u===1){if(m!==A.CHUNK_TYPE_BIN)throw new l("gltf-loader-unsupported-feature","Second glb chunk expected to be BIN.");i=n.readUint8Array(c)}else I.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 glb chunks detected. Skipping.");u+=1}if(!a)throw new l("gltf-loader-error","No glb JSON chunk detected.");return{json:a,binaryData:i}}async getBuffer(e,n){const t=this.json.buffers[e];if(t.uri==null){if(this._glbBuffer==null)throw new l("gltf-loader-error","glb buffer not present");return this._glbBuffer}const o=await this._getBufferLoader(e,n);if(o.byteLength!==t.byteLength)throw new l("gltf-loader-error","Buffer byte lengths should match.");return o}async _getBufferLoader(e,n){const t=this._bufferLoaders.get(e);if(t)return t;const o=this.json.buffers[e].uri,s=this._context.loadBinary(this._resolveUri(o),n).then(a=>new Uint8Array(a));return this._bufferLoaders.set(e,s),s}async getAccessor(e,n){if(!this.json.accessors)throw new l("gltf-loader-unsupported-feature","Accessors missing.");const t=this.json.accessors[e];if((t==null?void 0:t.bufferView)==null)throw new l("gltf-loader-unsupported-feature","Some accessor does not specify a bufferView.");if(t.type in[S.MAT2,S.MAT3,S.MAT4])throw new l("gltf-loader-unsupported-feature",`AttributeType ${t.type} is not supported`);const o=this.json.bufferViews[t.bufferView],s=await this.getBuffer(o.buffer,n),a=st[t.type],i=at[t.componentType],u=a*i,c=o.byteStride||u;return{raw:s.buffer,byteStride:c,byteOffset:s.byteOffset+(o.byteOffset||0)+(t.byteOffset||0),entryCount:t.count,isDenselyPacked:c===u,componentCount:a,componentByteSize:i,componentType:t.componentType,min:t.min,max:t.max,normalized:!!t.normalized}}async getIndexData(e,n){if(e.indices==null)return;const t=await this.getAccessor(e.indices,n);if(t.isDenselyPacked)switch(t.componentType){case f.UNSIGNED_BYTE:return new Uint8Array(t.raw,t.byteOffset,t.entryCount);case f.UNSIGNED_SHORT:return new Uint16Array(t.raw,t.byteOffset,t.entryCount);case f.UNSIGNED_INT:return new Uint32Array(t.raw,t.byteOffset,t.entryCount)}else switch(t.componentType){case f.UNSIGNED_BYTE:return C(y(Ie,t));case f.UNSIGNED_SHORT:return C(y(Ce,t));case f.UNSIGNED_INT:return C(y(ve,t))}}async getPositionData(e,n){if(e.attributes.POSITION==null)throw new l("gltf-loader-unsupported-feature","No POSITION vertex data found.");const t=await this.getAccessor(e.attributes.POSITION,n);if(t.componentType!==f.FLOAT)throw new l("gltf-loader-unsupported-feature","Expected type FLOAT for POSITION vertex attribute, but found "+f[t.componentType]);if(t.componentCount!==3)throw new l("gltf-loader-unsupported-feature","POSITION vertex attribute must have 3 components, but found "+t.componentCount.toFixed());return y(U,t)}async getNormalData(e,n){if(e.attributes.NORMAL==null)throw new l("gltf-loader-error","No NORMAL vertex data found.");const t=await this.getAccessor(e.attributes.NORMAL,n);if(t.componentType!==f.FLOAT)throw new l("gltf-loader-unsupported-feature","Expected type FLOAT for NORMAL vertex attribute, but found "+f[t.componentType]);if(t.componentCount!==3)throw new l("gltf-loader-unsupported-feature","NORMAL vertex attribute must have 3 components, but found "+t.componentCount.toFixed());return y(U,t)}async getTangentData(e,n){if(e.attributes.TANGENT==null)throw new l("gltf-loader-error","No TANGENT vertex data found.");const t=await this.getAccessor(e.attributes.TANGENT,n);if(t.componentType!==f.FLOAT)throw new l("gltf-loader-unsupported-feature","Expected type FLOAT for TANGENT vertex attribute, but found "+f[t.componentType]);if(t.componentCount!==4)throw new l("gltf-loader-unsupported-feature","TANGENT vertex attribute must have 4 components, but found "+t.componentCount.toFixed());return new H(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount)}async getTextureCoordinates(e,n){if(e.attributes.TEXCOORD_0==null)throw new l("gltf-loader-error","No TEXCOORD_0 vertex data found.");const t=await this.getAccessor(e.attributes.TEXCOORD_0,n);if(t.componentCount!==2)throw new l("gltf-loader-unsupported-feature","TEXCOORD_0 vertex attribute must have 2 components, but found "+t.componentCount.toFixed());if(t.componentType===f.FLOAT)return y(W,t);if(!t.normalized)throw new l("gltf-loader-unsupported-feature","Integer component types are only supported for a normalized accessor for TEXCOORD_0.");return it(t)}async getVertexColors(e,n){if(e.attributes.COLOR_0==null)throw new l("gltf-loader-error","No COLOR_0 vertex data found.");const t=await this.getAccessor(e.attributes.COLOR_0,n);if(t.componentCount!==4&&t.componentCount!==3)throw new l("gltf-loader-unsupported-feature","COLOR_0 attribute must have 3 or 4 components, but found "+t.componentCount.toFixed());if(t.componentCount===4){if(t.componentType===f.FLOAT)return y(H,t);if(t.componentType===f.UNSIGNED_BYTE)return y(Me,t);if(t.componentType===f.UNSIGNED_SHORT)return y(Le,t)}else if(t.componentCount===3){if(t.componentType===f.FLOAT)return y(U,t);if(t.componentType===f.UNSIGNED_BYTE)return y(Fe,t);if(t.componentType===f.UNSIGNED_SHORT)return y(Be,t)}throw new l("gltf-loader-unsupported-feature","Unsupported component type for COLOR_0 attribute: "+f[t.componentType])}hasPositions(e){return e.attributes.POSITION!==void 0}hasNormals(e){return e.attributes.NORMAL!==void 0}hasVertexColors(e){return e.attributes.COLOR_0!==void 0}hasTextureCoordinates(e){return e.attributes.TEXCOORD_0!==void 0}hasTangents(e){return e.attributes.TANGENT!==void 0}async getMaterial(e,n,t){var s,a,i,u,c,m,h,b,p,_;let o=e.material?this._materialCache.get(e.material):void 0;if(!o){const d=e.material!=null?K(this.json.materials[e.material]):K(),T=d.pbrMetallicRoughness,E=this.hasVertexColors(e),x=this.getTexture(T.baseColorTexture,n),O=this.getTexture(d.normalTexture,n),F=t?this.getTexture(d.occlusionTexture,n):void 0,B=t?this.getTexture(d.emissiveTexture,n):void 0,R=t?this.getTexture(T.metallicRoughnessTexture,n):void 0,N=e.material!=null?e.material:-1;o={alphaMode:d.alphaMode,alphaCutoff:d.alphaCutoff,color:T.baseColorFactor,doubleSided:!!d.doubleSided,colorTexture:await x,normalTexture:await O,name:d.name,id:N,occlusionTexture:await F,emissiveTexture:await B,emissiveFactor:d.emissiveFactor,metallicFactor:T.metallicFactor,roughnessFactor:T.roughnessFactor,metallicRoughnessTexture:await R,hasVertexColors:E,ESRI_externalColorMixMode:d.extras.ESRI_externalColorMixMode,colorTextureTransform:(a=(s=T==null?void 0:T.baseColorTexture)==null?void 0:s.extensions)==null?void 0:a.KHR_texture_transform,normalTextureTransform:(u=(i=d.normalTexture)==null?void 0:i.extensions)==null?void 0:u.KHR_texture_transform,occlusionTextureTransform:(m=(c=d.occlusionTexture)==null?void 0:c.extensions)==null?void 0:m.KHR_texture_transform,emissiveTextureTransform:(b=(h=d.emissiveTexture)==null?void 0:h.extensions)==null?void 0:b.KHR_texture_transform,metallicRoughnessTextureTransform:(_=(p=T==null?void 0:T.metallicRoughnessTexture)==null?void 0:p.extensions)==null?void 0:_.KHR_texture_transform,receiveAmbientOcclusion:d.extras.ESRI_receiveAmbientOcclusion,receiveShadows:d.extras.ESRI_receiveShadows}}return o}async getTexture(e,n){if(!e)return;if((e.texCoord||0)!==0)throw new l("gltf-loader-unsupported-feature","Only TEXCOORD with index 0 is supported.");const t=e.index,o=this.json.textures[t],s=tt(o.sampler!=null?this.json.samplers[o.sampler]:{}),a=q(o),i=this.json.images[a],u=await this._loadTextureImageData(t,o,n);return he(this._textureCache,t,()=>{const c=h=>h===33071||h===33648||h===10497,m=h=>{throw new l("gltf-loader-error",`Unexpected TextureSampler WrapMode: ${h}`)};return{data:u,wrapS:c(s.wrapS)?s.wrapS:m(s.wrapS),wrapT:c(s.wrapT)?s.wrapT:m(s.wrapT),minFilter:s.minFilter,name:i.name,id:t}})}getNodeTransform(e){if(e===void 0)return nt;let n=this._nodeTransformCache.get(e);if(!n){const t=this.getNodeTransform(this._getNodeParent(e)),o=this.json.nodes[e];o.matrix?n=Te(Q(),t,o.matrix):o.translation||o.rotation||o.scale?(n=$(t),o.translation&&ye(n,n,o.translation),o.rotation&&(v[3]=_e(v,o.rotation),we(n,n,v[3],v)),o.scale&&ge(n,n,o.scale)):n=$(t),this._nodeTransformCache.set(e,n)}return n}_resolveUri(e){return be(e,this._baseUri)}_getNodeParent(e){return this._nodeParentMap.get(e)}_checkVersionSupported(){const e=X.parse(this.json.asset.version,"glTF");ot.validate(e)}_checkRequiredExtensionsSupported(){const e=this.json;if(e.extensionsRequired&&!e.extensionsRequired.every(n=>this._supportedExtensions.includes(n)))throw new l("gltf-loader-unsupported-feature","gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}_computeNodeParents(){this.json.nodes.forEach((e,n)=>{e.children&&e.children.forEach(t=>{this._nodeParentMap.set(t,n)})})}async _loadTextureImageData(e,n,t){const o=this._textureLoaders.get(e);if(o)return o;const s=this._createTextureLoader(n,t);return this._textureLoaders.set(e,s),s}async _createTextureLoader(e,n){const t=q(e),o=this.json.images[t];if(o.uri){if(o.uri.endsWith(".ktx2")){const u=await this._context.loadBinary(this._resolveUri(o.uri),n);return new $e(new Uint8Array(u))}return this._context.loadImage(this._resolveUri(o.uri),n)}if(o.bufferView==null)throw new l("gltf-loader-unsupported-feature","Image bufferView must be defined.");if(o.mimeType==null)throw new l("gltf-loader-unsupported-feature","Image mimeType must be defined.");const s=this.json.bufferViews[o.bufferView],a=await this.getBuffer(s.buffer,n);if(s.byteStride!=null)throw new l("gltf-loader-unsupported-feature","byteStride not supported for image buffer");const i=a.byteOffset+(s.byteOffset||0);return De(new Uint8Array(a.buffer,i,s.byteLength),o.mimeType)}async getLoadedBuffersSize(){if(this._glbBuffer)return this._glbBuffer.byteLength;const e=await V(Array.from(this._bufferLoaders.values())),n=await V(Array.from(this._textureLoaders.values()));return e.reduce((t,o)=>t+((o==null?void 0:o.byteLength)??0),0)+n.reduce((t,o)=>t+(o?Pe(o)?o.data.byteLength:o.width*o.height*4:0),0)}}const nt=pe(Q(),Math.PI/2),ot=new X(2,0,"glTF"),v=Se(),st={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},at={[f.BYTE]:1,[f.UNSIGNED_BYTE]:1,[f.SHORT]:2,[f.UNSIGNED_SHORT]:2,[f.HALF_FLOAT]:2,[f.FLOAT]:4,[f.INT]:4,[f.UNSIGNED_INT]:4};function it(r){switch(r.componentType){case f.BYTE:return new Ae(r.raw,r.byteOffset,r.byteStride,r.byteOffset+r.byteStride*r.entryCount);case f.UNSIGNED_BYTE:return new Ne(r.raw,r.byteOffset,r.byteStride,r.byteOffset+r.byteStride*r.entryCount);case f.SHORT:return new Re(r.raw,r.byteOffset,r.byteStride,r.byteOffset+r.byteStride*r.entryCount);case f.UNSIGNED_SHORT:return new Oe(r.raw,r.byteOffset,r.byteStride,r.byteOffset+r.byteStride*r.entryCount);case f.UNSIGNED_INT:return new Ee(r.raw,r.byteOffset,r.byteStride,r.byteOffset+r.byteStride*r.entryCount);case f.FLOAT:return new W(r.raw,r.byteOffset,r.byteStride,r.byteOffset+r.byteStride*r.entryCount)}}function y(r,e){return new r(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*(e.entryCount-1)+e.componentByteSize*e.componentCount)}function q(r){var e;if(((e=r.extensions)==null?void 0:e.KHR_texture_basisu)!=null)return r.extensions.KHR_texture_basisu.source;if(r.source!==null)return r.source;throw new l("gltf-loader-unsupported-feature","Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.")}const ut=/\.gltf$/i,lt=/\.glb$/i;let ft=0;async function Ct(r,e,n={},t=!0){var h,b;const o=await w.load(r,e,n),s="gltf_"+ft++,a={lods:[],materials:new Map,textures:new Map,meta:ct(o)},i=!(!o.json.asset.extras||o.json.asset.extras.ESRI_type!=="symbolResource"),u=(b=(h=o.json.asset.extras)==null?void 0:h.ESRI_webstyleSymbol)==null?void 0:b.webstyle,c=new Map;await dt(o,async(p,_,d,T)=>{var j;const E=c.get(d)??0;c.set(d,E+1);const x=p.mode!==void 0?p.mode:g.TRIANGLES,O=x===g.TRIANGLES||x===g.TRIANGLE_STRIP||x===g.TRIANGLE_FAN?x:null;if(O==null)return void I.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode ("+g[x]+"). Skipping primitive.");if(!o.hasPositions(p))return void I.getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.");const F=o.getPositionData(p,n),B=o.getMaterial(p,n,t),R=o.hasNormals(p)?o.getNormalData(p,n):null,N=o.hasTangents(p)?o.getTangentData(p,n):null,D=o.hasTextureCoordinates(p)?o.getTextureCoordinates(p,n):null,P=o.hasVertexColors(p)?o.getVertexColors(p,n):null,ne=o.getIndexData(p,n),oe={name:T,transform:$(_),attributes:{position:await F,normal:R?await R:null,texCoord0:D?await D:null,color:P?await P:null,tangent:N?await N:null},indices:await ne,primitiveType:O,material:mt(a,await B,s)};let G=null;((j=a.meta)==null?void 0:j.ESRI_lod)!=null&&a.meta.ESRI_lod.metric==="screenSpaceRadius"&&(G=a.meta.ESRI_lod.thresholds[d]),a.lods[d]=a.lods[d]||{parts:[],name:T,lodThreshold:G},a.lods[d].parts[E]=oe});for(const p of a.lods)p.parts=p.parts.filter(_=>!!_);const m=await o.getLoadedBuffersSize();return{model:a,meta:{isEsriSymbolResource:i,uri:o.uri,ESRI_webstyle:u},customMeta:{},size:m}}function ct(r){const e=r.json;let n=null;return e.nodes.forEach(t=>{const o=t.extras;o!=null&&(o.ESRI_proxyEllipsoid||o.ESRI_lod)&&(n=o)}),n}async function dt(r,e){const n=r.json,t=n.scenes[n.scene||0].nodes,o=t.length>1,s=[];for(const i of t){const u=n.nodes[i];s.push(a(i,0)),pt(u)&&!o&&u.extensions.MSFT_lod.ids.forEach((c,m)=>a(c,m+1))}async function a(i,u){const c=n.nodes[i],m=r.getNodeTransform(i);if(c.weights!=null&&I.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported."),c.mesh!=null){const h=n.meshes[c.mesh];for(const b of h.primitives)s.push(e(b,m,u,h.name))}for(const h of c.children||[])s.push(a(h,u))}await Promise.all(s)}function pt(r){var e;return((e=r.extensions)==null?void 0:e.MSFT_lod)&&Array.isArray(r.extensions.MSFT_lod.ids)}function mt(r,e,n){const t=s=>{const a=`${n}_tex_${s&&s.id}${s!=null&&s.name?"_"+s.name:""}`;if(s&&!r.textures.has(a)){const i=Xe(s.data,{wrap:{s:s.wrapS,t:s.wrapT},mipmap:ht.has(s.minFilter),noUnpackFlip:!0});r.textures.set(a,i)}return a},o=`${n}_mat_${e.id}_${e.name}`;if(!r.materials.has(o)){const s=Ye({color:[e.color[0],e.color[1],e.color[2]],opacity:e.color[3],alphaMode:e.alphaMode,alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,colorMixMode:e.ESRI_externalColorMixMode,textureColor:e.colorTexture?t(e.colorTexture):void 0,textureNormal:e.normalTexture?t(e.normalTexture):void 0,textureOcclusion:e.occlusionTexture?t(e.occlusionTexture):void 0,textureEmissive:e.emissiveTexture?t(e.emissiveTexture):void 0,textureMetallicRoughness:e.metallicRoughnessTexture?t(e.metallicRoughnessTexture):void 0,emissiveFactor:[e.emissiveFactor[0],e.emissiveFactor[1],e.emissiveFactor[2]],colorTextureTransform:e.colorTextureTransform,normalTextureTransform:e.normalTextureTransform,occlusionTextureTransform:e.occlusionTextureTransform,emissiveTextureTransform:e.emissiveTextureTransform,metallicRoughnessTextureTransform:e.metallicRoughnessTextureTransform,metallicFactor:e.metallicFactor,roughnessFactor:e.roughnessFactor,receiveShadows:e.receiveShadows,receiveAmbientOcclustion:e.receiveAmbientOcclusion});r.materials.set(o,s)}return o}const ht=new Set([L.LINEAR_MIPMAP_LINEAR,L.LINEAR_MIPMAP_NEAREST]);function It(r,e){switch(e){case g.TRIANGLES:return Tt(r);case g.TRIANGLE_STRIP:return yt(r);case g.TRIANGLE_FAN:return wt(r)}}function Tt(r){return typeof r=="number"?Ge(r):xe(r)?new Uint16Array(r):r}function yt(r){const e=typeof r=="number"?r:r.length;if(e<3)return[];const n=e-2,t=je(3*n);if(typeof r=="number"){let o=0;for(let s=0;s<n;s+=1)s%2==0?(t[o++]=s,t[o++]=s+1,t[o++]=s+2):(t[o++]=s+1,t[o++]=s,t[o++]=s+2)}else{let o=0;for(let s=0;s<n;s+=1)s%2==0?(t[o++]=r[s],t[o++]=r[s+1],t[o++]=r[s+2]):(t[o++]=r[s+1],t[o++]=r[s],t[o++]=r[s+2])}return t}function wt(r){const e=typeof r=="number"?r:r.length;if(e<3)return new Uint16Array(0);const n=e-2,t=n<=65536?new Uint16Array(3*n):new Uint32Array(3*n);if(typeof r=="number"){let i=0;for(let u=0;u<n;++u)t[i++]=0,t[i++]=u+1,t[i++]=u+2;return t}const o=r[0];let s=r[1],a=0;for(let i=0;i<n;++i){const u=r[i+2];t[a++]=o,t[a++]=s,t[a++]=u,s=u}return t}const Mt=2.1;export{qe as a,Ve as b,He as c,ke as d,Ke as e,ze as f,Mt as g,Z as h,ee as i,Ct as l,Nt as n,It as o,te as t};
