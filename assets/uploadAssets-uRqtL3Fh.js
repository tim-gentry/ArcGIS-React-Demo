import{x as y,U as f,M as u,g2 as _,gJ as G,H as W,fX as V,n as X}from"./index-DX0rcHuW.js";import{r as K}from"./uuid-fwrPAdZb.js";import{h as Q,N as Y,i as S,o as U,A as Z}from"./External-EuBme4r6.js";import{r as ee,n as se,a as te,d as oe,c as D,l as ae,t as ne,u as re,p as ie}from"./uploadAssetErrors-cyorhvqm.js";import{i as g,h as ce,e as A,m as le,a as ue}from"./progressUtils-BAUYKe1N.js";import{g as pe}from"./arcgisLayerUrl-BpJodxxk.js";import{s as me,u as I,i as fe}from"./infoFor3D-CxOdoily.js";const $=1e6,N=20*$,de=2e9,ye=3;async function ge({data:s,name:t,description:e},o,a){let n=null;try{const r=y(o,"uploads"),i=y(r,"info"),{data:c}=await f(i,{query:{f:"json"},responseType:"json"});u(a);const p=pe(o),l=c.maxUploadFileSize*$,d=p?de:l,b=p?Math.min(N,l):N;if(s.size>d)throw new Error("Data too large");const R=y(r,"register"),{data:j}=await f(R,{query:{f:"json",itemName:we(t),description:e},responseType:"json",method:"post"});if(u(a),!j.success)throw new Error("Registration failed");const{itemID:k}=j.item;n=y(r,k);const B=y(n,"uploadPart"),F=Math.ceil(s.size/b),w=new Array;for(let m=0;m<F;++m)w.push(s.slice(m*b,Math.min((m+1)*b,s.size)));const h=w.slice().reverse(),E=new Array,z=g(F,a==null?void 0:a.onProgress,"uploadItem"),M=async()=>{for(;h.length!==0;){const m=w.length-h.length,P=h.pop(),T=new FormData,H=z.simulate(m,ce(P.size));try{T.append("f","json"),T.append("file",P),T.append("partId",`${m}`);const{data:J}=await f(B,{timeout:0,body:T,responseType:"json",method:"post"});if(u(a),!J.success)throw new Error("Part upload failed")}finally{H.remove()}}};for(let m=0;m<ye&&h.length!==0;++m)E.push(M());await Promise.all(E);const L=y(n,"commit"),{data:x}=await f(L,{query:{f:"json",parts:w.map((m,P)=>P).join(",")},responseType:"json",method:"post"});if(u(a),!x.success)throw new Error("Commit failed");return x.item}catch(r){if(n!=null){const i=y(n,"delete");await f(i,{query:{f:"json"},responseType:"json",method:"post"})}throw r}}function we(s){return s.replaceAll("/","_").replaceAll("\\","_")}async function _e(s,t,e){var n;const o=s.length;if(!o)return(n=e==null?void 0:e.onProgress)==null||n.call(e,1),[];const a=g(o,e==null?void 0:e.onProgress,"uploadAssets");return Promise.all(s.map((r,i)=>he(r,t,{...e,onProgress:a.makeOnProgress(i)})))}async function he(s,{layer:t,ongoingUploads:e},o){var r;const a=e.get(s);if(a)return a;if(!qe(t))throw new ee;if(Pe(s,t))return(r=o==null?void 0:o.onProgress)==null||r.call(o,1),s;const n=Te(s,t,o);e.set(s,n);try{await n}finally{e.delete(s)}return s}function Pe(s,t){const{parsedUrl:e}=t;return e!=null&&s.metadata.externalSources.some(o=>Q(o,e))}async function Te(s,t,e){const{metadata:o}=s,{displaySource:a}=o,n=v(a==null?void 0:a.source,t),r=!!n,i=o.externalSources.length>0,c=r?be(n,t,e):i?Ae(s,t,e):je(s,t,e),p=await c;return u(e),s.addExternalSources([p]),s}async function be(s,t,e){return{source:await O(s,t,e),original:!0}}async function Ae(s,t,e){const o=C(t),{externalSources:a}=s.metadata,n=Ee(a,t);if(!n)throw new se;const r=g(A.uploadConvertibleSource,e==null?void 0:e.onProgress,"uploadConvertibleSource"),i=await O(n,t,{onProgress:r.makeOnProgress("uploadEditSource")});s.addExternalSources([{source:i,original:!0}]);const c=n.reduce((l,{asset:d})=>d instanceof File?l+d.size:l,0),p=r.simulate("serviceAssetsToGlb",le(c));try{return{source:await $e(i,t,o)}}finally{p.remove()}}async function je(s,t,e){const o=g(A.uploadLocalMesh,e==null?void 0:e.onProgress,"uploadLocalMesh"),a=Fe(s,t,{...e,onProgress:o.makeOnProgress("meshToAssetBlob")});return{source:await q([a],t,{...e,onProgress:o.makeOnProgress("uploadAssetBlobs")}),extent:s.extent.clone(),original:!0}}async function Fe(s,t,e){const o=C(t),a=await s.load(e),n=await a.toBinaryGLTF({origin:a.origin,signal:e==null?void 0:e.signal,ignoreLocalTransform:!0});return u(e),{blob:new Blob([n],{type:"model/gltf-binary"}),assetName:`${K()}.glb`,assetType:o}}function Ee(s,t){for(const e of s){const o=v(e.source,t);if(o)return o}return null}function v(s,t){if(!s)return null;const{infoFor3D:{supportedFormats:e,editFormats:o}}=t,a=Z(s),n=new Array;let r=!1;for(let i=0;i<a.length;++i){const c=xe(a[i],e);if(!c)return null;o.includes(c.assetType)&&(r=!0),n.push(c)}return r?n:null}function xe(s,t){const e=Y(s,t);return e?{asset:s,assetType:e}:null}async function O(s,t,e){return q(s.map(o=>Ne(o,e)),t,e)}async function q(s,t,e){const o=g(A.uploadAssetBlobs,e==null?void 0:e.onProgress,"uploadAssetBlobs"),a=await Ue(s,t,{...e,onProgress:o.makeOnProgress("prepareAssetItems")});u(e);const n=a.map(({item:i})=>i),{uploadResults:r}=await De(n,t,{...e,onProgress:o.makeOnProgress("uploadAssetItems")});return u(e),s.map((i,c)=>Ie(a[c],r[c],t))}async function Ne(s,t){const{asset:e,assetType:o}=s;if(e instanceof File)return{blob:e,assetName:e.name,assetType:o};const a=await e.toBlob(t);return u(t),{blob:a,assetName:e.assetName,assetType:o}}async function Se(s,t,e){const{blob:o,assetType:a,assetName:n}=s;let r=null;try{const i=await ge({data:o,name:n},t.url,e);u(e),r={assetType:a,assetUploadId:i.itemID}}catch(i){W(i),Ce().warnOnce(`Service ${t.url} does not support the REST Uploads API.`)}if(!r){const i=await V(o);if(u(e),!i.isBase64)throw new re;r={assetType:a,assetData:i.data}}if(!r)throw new ie;return{item:r,assetName:n}}function Ue(s,t,e){const o=g(s.length,e==null?void 0:e.onProgress,"prepareAssetItems");return Promise.all(s.map(async(a,n)=>{const r=Se(await a,t,{...e,onProgress:o.makeOnProgress(n)});return u(e),r}))}async function De(s,t,e){const o=ue(e==null?void 0:e.onProgress);try{const a=await f(y(t.parsedUrl.path,"uploadAssets"),{timeout:0,query:{f:"json",assets:JSON.stringify(s)},method:"post",responseType:"json"});if(u(e),a.data.uploadResults.length!==s.length)throw new te(s.length,a.data.uploadResults.length);return a.data}finally{o.remove()}}function Ie(s,t,e){const{success:o}=t;if(!o){const{error:p}=t;throw new oe(s.assetName,p)}const{assetHash:a}=t,{assetName:n,item:{assetType:r}}=s,{infoFor3D:{supportedFormats:i}}=e,c=me(r,i);if(!c)throw new D(r);return new S(n,c,[new U(`${e.parsedUrl.path}/assets/${a}`,a)])}async function $e(s,t,e){var p;const o=s.map(({assetName:l,parts:d})=>({assetName:l,assetHash:d[0].partHash})),a=(p=t.capabilities)==null?void 0:p.operations.supportsAsyncConvert3D,n={f:"json",assets:JSON.stringify(o),transportType:"esriTransportTypeUrl",targetFormat:e,async:a},r=y(t.parsedUrl.path,"convert3D");let i;try{i=(await(a?Oe:ve)(r,{query:n,responseType:"json",timeout:0})).data}catch{throw new ae}const{supportedFormats:c}=t.infoFor3D;return i.assets.map(l=>{const d=I(l.contentType,c);if(!d)throw new D(d);return new S(l.assetName,l.contentType,[new U(l.assetURL,l.assetHash)])})}function ve(s,t){return f(s,t)}async function Oe(s,t){const e=(await f(s,t)).data.statusUrl;for(;;){const o=(await f(e,{query:{f:"json"},responseType:"json"})).data;switch(o.status){case"Completed":return f(o.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new Error(o.status);case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new Error}await _(Re)}}function qe(s){return!!s.infoFor3D&&!!s.url}function C(s){const{infoFor3D:t}=s,e=I("model/gltf-binary",t.supportedFormats)??fe("glb",t.supportedFormats);if(!e)throw new ne;return e}function Ce(){return X.getLogger("esri.layers.graphics.sources.support.uploadAssets")}const Re=G(1e3);export{_e as uploadAssets};
