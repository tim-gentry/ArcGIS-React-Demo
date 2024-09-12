import{ee as I,n as re}from"./index-DX0rcHuW.js";import{c as xe}from"./BufferObject-CWTeBz1x.js";import{a as Te,b as R,c as M,d as Ee,f as O}from"./Texture-BF0Xf23l.js";import{V as p,X as T,G as j,U as Se,t as X,n as C,M as S,F as be,A as Ae,B as A,H as x}from"./enums-BlUEVwJR.js";import{o as k}from"./_commonjsHelpers-DCkdB7M8.js";let rt=class{constructor(e,r,t=r){this.internalFormat=e,this.width=r,this.height=t,this.multisampled=!1,this.samples=1}};function De(i){return i.width<=0||i.height<=0||i.internalFormat==null?0:i.width*i.height*Te(i.internalFormat)}let Me=class{constructor(e,r){this._context=e,this._descriptor=r,this.type=R.RenderBuffer,this._context.instanceCounter.increment(p.Renderbuffer,this);const t=this._context.gl;this.glName=t.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:n,height:o,internalFormat:a,multisampled:h}=r;h?t.renderbufferStorageMultisample(t.RENDERBUFFER,this.samples,a,n,o):t.renderbufferStorage(t.RENDERBUFFER,a,n,o),this._context.bindRenderbuffer(null)}get descriptor(){return this._descriptor}get samples(){const e=this._descriptor.samples,r=this._context.parameters.maxSamples;return e?Math.min(e,r):r}get usedMemory(){return De(this._descriptor)}resize(e,r){const t=this._descriptor;if(t.width===e&&t.height===r)return;t.width=e,t.height=r;const n=this._context.gl;this._context.bindRenderbuffer(this),t.multisampled?n.renderbufferStorageMultisample(n.RENDERBUFFER,this.samples,t.internalFormat,t.width,t.height):n.renderbufferStorage(n.RENDERBUFFER,t.internalFormat,t.width,t.height),this._context.bindRenderbuffer(null)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(p.Renderbuffer,this),this._context=null)}};const Ce=()=>re.getLogger("esri.views.webgl.FramebufferObject");let ve=class v{constructor(e,r,t=null){this._context=e,this._glName=null,this._colorAttachments=new Map,this._depthStencilBuffer=null,this._depthStencilTexture=null,this._initialized=!1,e.instanceCounter.increment(p.FramebufferObject,this);const n=w(r)?r:new M(this._context,r);if(this._colorAttachments.set(T.COLOR_ATTACHMENT0,n),this._validateTextureDescriptor(n.descriptor),this._validateColorAttachmentPoint(T.COLOR_ATTACHMENT0),t!=null)if(Re(t))this._depthStencilTexture=w(t)?t:new M(this._context,t),this._validateTextureDescriptor(this._depthStencilTexture.descriptor);else{const o=Fe(t)?t:new Me(this._context,t);this._depthStencilBuffer=o,this._validateRenderBufferDescriptor(o.descriptor)}}dispose(){var r,t;if(this._colorAttachments.size===0&&!this._glName)return;const e=this._context.getBoundFramebufferObject();this._colorAttachments.forEach((n,o)=>{var a;return(a=this.detachColorTexture(o))==null?void 0:a.dispose()}),(r=this.detachDepthStencilBuffer())==null||r.dispose(),(t=this.detachDepthStencilTexture())==null||t.dispose(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(e),this._context.instanceCounter.decrement(p.FramebufferObject,this)}get glName(){return this._glName}get colorTexture(){return this._colorAttachments.get(T.COLOR_ATTACHMENT0)}get depthStencil(){return this._depthStencilTexture||this._depthStencilBuffer}get depthStencilTexture(){return this._depthStencilTexture}get width(){var r;const e=this._colorAttachments.get(T.COLOR_ATTACHMENT0);return((r=e==null?void 0:e.descriptor)==null?void 0:r.width)??0}get height(){var r;const e=this._colorAttachments.get(T.COLOR_ATTACHMENT0);return((r=e==null?void 0:e.descriptor)==null?void 0:r.height)??0}get usedMemory(){var e;return[...this._colorAttachments].reduce((r,[t,n])=>r+n.usedMemory,((e=this.depthStencil)==null?void 0:e.usedMemory)??0)}getColorTexture(e){const r=this._colorAttachments.get(e);return r&&w(r)?r:null}get colorAttachments(){return[...this._colorAttachments.keys()]}attachColorTexture(e,r=T.COLOR_ATTACHMENT0){var n;if(!e)return;this._validateColorAttachmentPoint(r);const t=e.descriptor;this._validateTextureDescriptor(t),(n=this.detachColorTexture(r))==null||n.dispose(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,r)),this._colorAttachments.set(r,e)}detachColorTexture(e=T.COLOR_ATTACHMENT0){const r=this._colorAttachments.get(e);if(r){if(this._initialized){const t=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e),this._context.bindFramebuffer(t)}return this._colorAttachments.delete(e),r}}setColorTextureTarget(e,r=T.COLOR_ATTACHMENT0){const t=this._colorAttachments.get(r);t&&this._framebufferTexture2D(t.glName,r,e)}attachDepthStencil(e){if(e)switch(e.type){case R.Texture:return this._attachDepthStencilTexture(e);case R.RenderBuffer:return this._attachDepthStencilBuffer(e)}}_attachDepthStencilTexture(e){var t;if(e==null)return;const r=e.descriptor;r.pixelFormat!==j.DEPTH_STENCIL&&r.pixelFormat!==j.DEPTH24_STENCIL8&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),r.dataType!==Se.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._validateTextureDescriptor(r),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,X)),(t=this._depthStencilTexture)==null||t.dispose(),this._depthStencilTexture=e}detachDepthStencilTexture(){const e=this._depthStencilTexture;if(e&&this._initialized){const r=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),this._framebufferTexture2D(null,X),this._context.bindFramebuffer(r)}return this._depthStencilTexture=null,e}_attachDepthStencilBuffer(e){if(e==null)return;const r=e.descriptor;if(this._validateRenderBufferDescriptor(r),this._disposeDepthStencilAttachments(),this._initialized){this._context.bindFramebuffer(this);const t=this._context.gl,n=this._getGLAttachmentPoint(r);t.framebufferRenderbuffer(C.FRAMEBUFFER,n,t.RENDERBUFFER,e.glName)}this._depthStencilBuffer=e}detachDepthStencilBuffer(){const e=this._depthStencilBuffer;if(e&&this._initialized){const r=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this);const t=this._context.gl,n=this._getGLAttachmentPoint(e.descriptor);t.framebufferRenderbuffer(C.FRAMEBUFFER,n,t.RENDERBUFFER,null),this._context.bindFramebuffer(r)}return this._depthStencilBuffer=null,e}copyToTexture(e,r,t,n,o,a,h){(e<0||r<0||o<0||a<0)&&console.error("Offsets cannot be negative!"),(t<=0||n<=0)&&console.error("Copy width and height must be greater than zero!");const s=h.descriptor;h.descriptor.target!==S.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),((s==null?void 0:s.width)==null||(s==null?void 0:s.height)==null||e+t>this.width||r+n>this.height||o+t>s.width||a+n>s.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const l=this._context,c=l.bindTexture(h,M.TEXTURE_UNIT_FOR_UPDATES);l.setActiveTexture(M.TEXTURE_UNIT_FOR_UPDATES),l.bindFramebuffer(this),l.gl.copyTexSubImage2D(S.TEXTURE_2D,0,o,a,e,r,t,n),l.bindTexture(c,M.TEXTURE_UNIT_FOR_UPDATES)}readPixels(e,r,t,n,o,a,h){(t<=0||n<=0)&&console.error("Copy width and height must be greater than zero!"),h||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(e,r,t,n,o,a,h)}async readPixelsAsync(e,r,t,n,o,a,h){const{gl:s}=this._context,l=xe.createPixelPack(this._context,be.STREAM_READ,h.byteLength);this._context.bindBuffer(l),this._context.bindFramebuffer(this),s.readPixels(e,r,t,n,o,a,0),this._context.unbindBuffer(Ae.PIXEL_PACK_BUFFER),await l.getSubDataAsync(h),l.dispose()}resize(e,r){var n,o;if(this.width===e&&this.height===r)return;const t={width:e,height:r};y(t,this._context.parameters.maxTextureSize),this._colorAttachments.forEach(a=>a.resize(t.width,t.height)),(n=this._depthStencilTexture)==null||n.resize(t.width,t.height),this._initialized&&(y(t,this._context.parameters.maxRenderbufferSize),(o=this._depthStencilBuffer)==null||o.resize(t.width,t.height),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1)}initializeAndBind(e=C.FRAMEBUFFER){const r=this._context.gl;if(this._initialized)return void r.bindFramebuffer(e,this.glName);this._glName&&r.deleteFramebuffer(this._glName);const t=r.createFramebuffer();if(r.bindFramebuffer(e,t),this._colorAttachments.forEach((n,o)=>this._framebufferTexture2D(n.glName,o,z(n),e)),this._depthStencilBuffer){const n=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);r.framebufferRenderbuffer(e,n,r.RENDERBUFFER,this._depthStencilBuffer.glName)}else this._depthStencilTexture&&this._framebufferTexture2D(this._depthStencilTexture.glName,r.DEPTH_STENCIL_ATTACHMENT,z(this._depthStencilTexture),e);Ee()&&r.checkFramebufferStatus(e)!==r.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=t,this._initialized=!0}_framebufferTexture2D(e,r=T.COLOR_ATTACHMENT0,t=S.TEXTURE_2D,n=C.FRAMEBUFFER,o=0){this._context.gl.framebufferTexture2D(n,r,t,e,o)}_disposeDepthStencilAttachments(){const e=this._context.gl;if(this._depthStencilBuffer){if(this._initialized){this._context.bindFramebuffer(this);const r=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);e.framebufferRenderbuffer(C.FRAMEBUFFER,r,e.RENDERBUFFER,null)}this._depthStencilBuffer=I(this._depthStencilBuffer)}this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture=I(this._depthStencilTexture))}_validateTextureDescriptor(e){e.target!==S.TEXTURE_2D&&e.target!==S.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),y(e,this._context.parameters.maxTextureSize),this._validateBufferDimensions(e)}_validateRenderBufferDescriptor(e){y(e,this._context.parameters.maxRenderbufferSize),this._validateBufferDimensions(e)}_validateBufferDimensions(e){e.width<=0&&(e.width=this.width),e.height<=0&&(e.height=this.height),this.width>0&&this.height>0&&(this.width===e.width&&this.height===e.height||console.error("Attachment size must match framebuffer size!"))}_getGLAttachmentPoint(e){switch(e.internalFormat){case A.DEPTH_COMPONENT16:case A.DEPTH_COMPONENT24:case A.DEPTH_COMPONENT32F:return this._context.gl.DEPTH_ATTACHMENT;case A.DEPTH24_STENCIL8:case A.DEPTH32F_STENCIL8:case A.DEPTH_STENCIL:return this._context.gl.DEPTH_STENCIL_ATTACHMENT;case A.STENCIL_INDEX8:return this._context.gl.STENCIL_ATTACHMENT}}_validateColorAttachmentPoint(e){if(v._MAX_COLOR_ATTACHMENTS===-1){const{gl:t}=this._context;v._MAX_COLOR_ATTACHMENTS=t.getParameter(t.MAX_COLOR_ATTACHMENTS)}const r=e-T.COLOR_ATTACHMENT0;r+1>v._MAX_COLOR_ATTACHMENTS&&re.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${r+1}. Implementation supports up to ${v._MAX_COLOR_ATTACHMENTS} color attachments`)}};function w(i){return i!=null&&"type"in i&&i.type===R.Texture}function Fe(i){return i!=null&&"type"in i&&i.type===R.RenderBuffer}function Re(i){return w(i)||i!=null&&"pixelFormat"in i}function y(i,e){const r=Math.max(i.width,i.height);if(r>e){Ce().warn(`Resizing FBO attachment size ${i.width}x${i.height} to device limit ${e}`);const t=e/r;return i.width=Math.round(i.width*t),i.height=Math.round(i.height*t),!1}return!0}function z(i){return i.descriptor.target===S.TEXTURE_CUBE_MAP?S.TEXTURE_CUBE_MAP_POSITIVE_X:S.TEXTURE_2D}ve._MAX_COLOR_ATTACHMENTS=-1;var V,ie={exports:{}};(V=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"])!==void 0&&(ie.exports=V);const ye=k(ie.exports);var G,ne={exports:{}};G=ne,function(i){var e=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"];e!==void 0&&(G.exports=e)}();const q=k(ne.exports);var oe={exports:{}};(function(i){(function(e){var r=function(){return["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT","textureSize","texelFetch"]}();r!==void 0&&(i.exports=r)})()})(oe);const Ue=k(oe.exports),we=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"];var g=999,K=9999,L=0,N=1,W=2,Q=3,Z=4,U=5,Pe=6,Le=7,Ne=8,J=9,Be=10,Y=11,Oe=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function ke(){var i,e,r,t=0,n=0,o=g,a=[],h=[],s=1,l=0,c=0,f=!1,d=!1,_="";return function(u){return h=[],u!==null?se(u.replace?u.replace(/\r\n/g,`
`):u):he()};function m(u){u.length&&h.push({type:Oe[o],data:u,position:c,line:s,column:l})}function se(u){var b;for(t=0,r=(_+=u).length;i=_[t],t<r;){switch(b=t,o){case L:t=ue();break;case N:t=fe();break;case W:t=H();break;case Q:t=de();break;case Z:t=_e();break;case Y:t=me();break;case U:t=ge();break;case K:t=pe();break;case J:t=le();break;case g:t=ce()}b!==t&&(_[b]===`
`?(l=0,++s):++l)}return n+=t,_=_.slice(t),h}function he(u){return a.length&&m(a.join("")),o=Be,m("(eof)"),h}function ce(){return a=a.length?[]:a,e==="/"&&i==="*"?(c=n+t-1,o=L,e=i,t+1):e==="/"&&i==="/"?(c=n+t-1,o=N,e=i,t+1):i==="#"?(o=W,c=n+t,t):/\s/.test(i)?(o=J,c=n+t,t):(f=/\d/.test(i),d=/[^\w_]/.test(i),c=n+t,o=f?Z:d?Q:K,t)}function le(){return/[^\s]/g.test(i)?(m(a.join("")),o=g,t):(a.push(i),e=i,t+1)}function H(){return i!=="\r"&&i!==`
`||e==="\\"?(a.push(i),e=i,t+1):(m(a.join("")),o=g,t)}function fe(){return H()}function ue(){return i==="/"&&e==="*"?(a.push(i),m(a.join("")),o=g,t+1):(a.push(i),e=i,t+1)}function de(){if(e==="."&&/\d/.test(i))return o=U,t;if(e==="/"&&i==="*")return o=L,t;if(e==="/"&&i==="/")return o=N,t;if(i==="."&&a.length){for(;P(a););return o=U,t}if(i===";"||i===")"||i==="("){if(a.length)for(;P(a););return m(i),o=g,t+1}var u=a.length===2&&i!=="=";if(/[\w_\d\s]/.test(i)||u){for(;P(a););return o=g,t}return a.push(i),e=i,t+1}function P(u){for(var b,D,$=0;;){if(b=q.indexOf(u.slice(0,u.length+$).join("")),D=q[b],b===-1){if($--+u.length>0)continue;D=u.slice(0,1).join("")}return m(D),c+=D.length,(a=a.slice(D.length)).length}}function me(){return/[^a-fA-F0-9]/.test(i)?(m(a.join("")),o=g,t):(a.push(i),e=i,t+1)}function _e(){return i==="."||/[eE]/.test(i)?(a.push(i),o=U,e=i,t+1):i==="x"&&a.length===1&&a[0]==="0"?(o=Y,a.push(i),e=i,t+1):/[^\d]/.test(i)?(m(a.join("")),o=g,t):(a.push(i),e=i,t+1)}function ge(){return i==="f"&&(a.push(i),e=i,t+=1),/[eE]/.test(i)||i==="-"&&/[eE]/.test(e)?(a.push(i),e=i,t+1):/[^\d]/.test(i)?(m(a.join("")),o=g,t):(a.push(i),e=i,t+1)}function pe(){if(/[^\d\w_]/.test(i)){var u=a.join("");return o=ye.indexOf(u)>-1?Ne:Ue.indexOf(u)>-1?Le:Pe,m(a.join("")),o=g,t}return a.push(i),e=i,t+1}}function He(i){var e=ke(),r=[];return r=(r=r.concat(e(i))).concat(e(null))}function $e(i){return He(i)}function Ie(i){return i.map(e=>e.type!=="eof"?e.data:"").join("")}const B=new Set(["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"]);function je(i,e="100",r="300 es"){const t=/^\s*#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const n of i)if(n.type==="preprocessor"){const o=t.exec(n.data);if(o){const a=o[1].replaceAll(/\s{2,}/g," ");if(a===r)return a;if(a===e)return n.data="#version "+r,e;throw new Error("unknown glsl version: "+a)}}return i.splice(0,0,{type:"preprocessor",data:"#version "+r},{type:"whitespace",data:`
`}),null}function Xe(i,e){for(let r=e-1;r>=0;r--){const t=i[r];if(t.type!=="whitespace"&&t.type!=="block-comment"){if(t.type!=="keyword")break;if(t.data==="attribute"||t.data==="in")return!0}}return!1}function F(i,e,r,t){t=t||r;for(const n of i)if(n.type==="ident"&&n.data===r)return t in e?e[t]++:e[t]=0,F(i,e,t+"_"+e[t],t);return r}function ae(i,e,r="afterVersion"){function t(s,l){for(let c=l;c<s.length;c++){const f=s[c];if(f.type==="operator"&&f.data===";")return c}return null}function n(s){let l=-1,c=0,f=-1;for(let d=0;d<s.length;d++){const _=s[d];if(_.type==="preprocessor"&&(/#(if|ifdef|ifndef)\s+.+/.test(_.data)?++c:/#endif\s*.*/.test(_.data)&&--c),r!=="afterVersion"&&r!=="afterPrecision"||_.type==="preprocessor"&&_.data.startsWith("#version")&&(f=Math.max(f,d)),r==="afterPrecision"&&_.type==="keyword"&&_.data==="precision"){const m=t(s,d);if(m===null)throw new Error("precision statement not followed by any semicolons!");f=Math.max(f,m)}l<f&&c===0&&(l=d)}return l+1}const o={data:`
`,type:"whitespace"},a=s=>s<i.length&&/[^\r\n]$/.test(i[s].data);let h=n(i);a(h-1)&&i.splice(h++,0,o);for(const s of e)i.splice(h++,0,s);a(h-1)&&a(h)&&i.splice(h,0,o)}function ze(i,e,r,t="lowp"){ae(i,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:t},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function Ve(i,e,r,t,n="lowp"){ae(i,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:t.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:n},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function Ge(i,e){let r,t,n=-1;for(let o=e;o<i.length;o++){const a=i[o];if(a.type==="operator"&&(a.data==="["&&(r=o),a.data==="]")){t=o;break}a.type==="integer"&&(n=parseInt(a.data,10))}return r&&t&&i.splice(r,t-r+1),n}function ee(i,e){if(i.startsWith("#version 300"))return i;const r=$e(i);if(je(r,"100","300 es")==="300 es")return i;let t=null,n=null;const o={},a={};for(let h=0;h<r.length;++h){const s=r[h];switch(s.type){case"keyword":e===x.VERTEX_SHADER&&s.data==="attribute"?s.data="in":s.data==="varying"&&(s.data=e===x.VERTEX_SHADER?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(s.data.trim())&&(s.data=s.data.replaceAll(/(2D|Cube|EXT)/g,"")),e===x.FRAGMENT_SHADER&&s.data==="gl_FragColor"&&(t||(t=F(r,o,"fragColor"),ze(r,t,"vec4")),s.data=t),e===x.FRAGMENT_SHADER&&s.data==="gl_FragData"){const l=Ge(r,h+1),c=F(r,o,"fragData");Ve(r,c,"vec4",l,"mediump"),s.data=c}else e===x.FRAGMENT_SHADER&&s.data==="gl_FragDepthEXT"&&(n||(n=F(r,o,"gl_FragDepth")),s.data=n);break;case"ident":if(we.includes(s.data)){if(e===x.VERTEX_SHADER&&Xe(r,h))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");s.data in a||(a[s.data]=F(r,o,s.data)),s.data=a[s.data]}}}for(let h=r.length-1;h>=0;--h){const s=r[h];if(s.type==="preprocessor"){const l=s.data.match(/#extension\s+(.*):/);if(l!=null&&l[1]&&B.has(l[1].trim())){const d=r[h+1];r.splice(h,d&&d.type==="whitespace"?2:1)}const c=s.data.match(/#ifdef\s+(.*)/);c!=null&&c[1]&&B.has(c[1].trim())&&(s.data="#if 1");const f=s.data.match(/#ifndef\s+(.*)/);f!=null&&f[1]&&B.has(f[1].trim())&&(s.data="#if 0")}}return qe(i,Ie(r))}function qe(i,e){return e}const Ke=4294967295;class ot{constructor(e,r,t,n,o=new Map,a=[]){var l;this._context=e,this._locations=n,this._uniformBlockBindings=o,this._transformFeedbackVaryings=a,this._refCount=1,this._compiled=!1,this._linesOfCode=0,this._nameToUniformLocation=new Map,this._nameToUniform1=new Map,this._nameToUniform1v=new Map,this._nameToUniform2=new Map,this._nameToUniform3=new Map,this._nameToUniform4=new Map,this._nameToUniformMatrix3=new Map,this._nameToUniformMatrix4=new Map,e||console.error("RenderingContext isn't initialized!"),r.length===0&&console.error("Shaders source should not be empty!"),r=ee(r,x.VERTEX_SHADER),t=ee(t,x.FRAGMENT_SHADER),this._vShader=te(this._context,x.VERTEX_SHADER,r),this._fShader=te(this._context,x.FRAGMENT_SHADER,t),this._vShader&&this._fShader||console.error("Error loading shaders!"),this._context.instanceCounter.increment(p.Shader,this),O()&&(this.vertexShader=r,this.fragmentShader=t),this.usedMemory=r.length+t.length;const h=this._context.gl,s=h.createProgram();h.attachShader(s,this._vShader),h.attachShader(s,this._fShader),this._locations.forEach((c,f)=>h.bindAttribLocation(s,c,f)),(l=this._transformFeedbackVaryings)!=null&&l.length&&h.transformFeedbackVaryings(s,this._transformFeedbackVaryings,h.SEPARATE_ATTRIBS),h.linkProgram(s),O()&&!h.getProgramParameter(s,h.LINK_STATUS)&&console.error(`Could not link shader
validated: ${h.getProgramParameter(s,h.VALIDATE_STATUS)}, gl error ${h.getError()}, vertex: ${h.getShaderParameter(this._vShader,h.COMPILE_STATUS)}, fragment: ${h.getShaderParameter(this._fShader,h.COMPILE_STATUS)}, info log: ${h.getProgramInfoLog(s)}, vertex source: ${this.vertexShader}, fragment source: ${this.fragmentShader}`);for(const[c,f]of this._uniformBlockBindings){const d=h.getUniformBlockIndex(s,c);d<Ke&&h.uniformBlockBinding(s,d,f)}this._glName=s,this._context.instanceCounter.increment(p.Program,this)}get glName(){return this._glName}get hasGLName(){return this._glName!=null}get hasTransformFeedbackVaryings(){var e;return!!((e=this._transformFeedbackVaryings)!=null&&e.length)}get compiled(){if(this._compiled)return!0;const e=this._context.gl.getExtension("KHR_parallel_shader_compile");return e==null||this.glName==null?(this._compiled=!0,!0):(this._compiled=!!this._context.gl.getProgramParameter(this.glName,e.COMPLETION_STATUS_KHR),this._compiled)}dispose(){if(--this._refCount>0)return;const e=this._context.gl,r=this._context.instanceCounter;this._nameToUniformLocation.forEach(t=>t&&r.decrement(p.Uniform,t)),this._nameToUniformLocation.clear(),this._vShader&&(this._linesOfCode>0&&(r.decrement(p.LinesOfCode,this._vShader,this._linesOfCode),this._linesOfCode=0),e.deleteShader(this._vShader),this._vShader=null,r.decrement(p.Shader,this)),this._fShader&&(e.deleteShader(this._fShader),this._fShader=null),this._glName&&(e.deleteProgram(this._glName),this._glName=null,r.decrement(p.Program,this))}ref(){++this._refCount}_getUniformLocation(e){const r=this._nameToUniformLocation.get(e);if(r!==void 0)return r;if(this.glName){const t=this._context.gl.getUniformLocation(this.glName,e);return this._nameToUniformLocation.set(e,t),t&&this._context.instanceCounter.increment(p.Uniform,t),t}return null}hasUniform(e){return this._getUniformLocation(e)!=null}setUniform1i(e,r){const t=this._nameToUniform1.get(e);t!==void 0&&r===t||(this._context.gl.uniform1i(this._getUniformLocation(e),r),this._nameToUniform1.set(e,r))}setUniform1iv(e,r){E(this._nameToUniform1v,e,r)&&this._context.gl.uniform1iv(this._getUniformLocation(e),r)}setUniform2iv(e,r){E(this._nameToUniform2,e,r)&&this._context.gl.uniform2iv(this._getUniformLocation(e),r)}setUniform3iv(e,r){E(this._nameToUniform3,e,r)&&this._context.gl.uniform3iv(this._getUniformLocation(e),r)}setUniform4iv(e,r){E(this._nameToUniform4,e,r)&&this._context.gl.uniform4iv(this._getUniformLocation(e),r)}setUniform1f(e,r){const t=this._nameToUniform1.get(e);t!==void 0&&r===t||(this._context.gl.uniform1f(this._getUniformLocation(e),r),this._nameToUniform1.set(e,r))}setUniform1fv(e,r){E(this._nameToUniform1v,e,r)&&this._context.gl.uniform1fv(this._getUniformLocation(e),r)}setUniform2f(e,r,t){const n=this._nameToUniform2.get(e);n===void 0?(this._context.gl.uniform2f(this._getUniformLocation(e),r,t),this._nameToUniform2.set(e,[r,t])):r===n[0]&&t===n[1]||(this._context.gl.uniform2f(this._getUniformLocation(e),r,t),n[0]=r,n[1]=t)}setUniform2fv(e,r){E(this._nameToUniform2,e,r)&&this._context.gl.uniform2fv(this._getUniformLocation(e),r)}setUniform3f(e,r,t,n){const o=this._nameToUniform3.get(e);o===void 0?(this._context.gl.uniform3f(this._getUniformLocation(e),r,t,n),this._nameToUniform3.set(e,[r,t,n])):r===o[0]&&t===o[1]&&n===o[2]||(this._context.gl.uniform3f(this._getUniformLocation(e),r,t,n),o[0]=r,o[1]=t,o[2]=n)}setUniform3fv(e,r){const t=this._getUniformLocation(e);t!=null&&E(this._nameToUniform3,e,r)&&this._context.gl.uniform3fv(t,r)}setUniform4f(e,r,t,n,o){const a=this._nameToUniform4.get(e);a===void 0?(this._context.gl.uniform4f(this._getUniformLocation(e),r,t,n,o),this._nameToUniform4.set(e,[r,t,n,o])):a!==void 0&&r===a[0]&&t===a[1]&&n===a[2]&&o===a[3]||(this._context.gl.uniform4f(this._getUniformLocation(e),r,t,n,o),a[0]=r,a[1]=t,a[2]=n,a[3]=o)}setUniform4fv(e,r){const t=this._getUniformLocation(e);t!=null&&E(this._nameToUniform4,e,r)&&this._context.gl.uniform4fv(t,r)}setUniformMatrix3fv(e,r,t=!1){const n=this._getUniformLocation(e);n!=null&&E(this._nameToUniformMatrix3,e,r)&&this._context.gl.uniformMatrix3fv(n,t,r)}setUniformMatrix4fv(e,r,t=!1){const n=this._getUniformLocation(e);n!=null&&E(this._nameToUniformMatrix4,e,r)&&this._context.gl.uniformMatrix4fv(n,t,r)}stop(){}}function te(i,e,r){const t=i.gl,n=t.createShader(e);return t.shaderSource(n,r),t.compileShader(n),O()&&!t.getShaderParameter(n,t.COMPILE_STATUS)&&(console.error("Compile error in ".concat(e===x.VERTEX_SHADER?"vertex":"fragment"," shader")),console.error(t.getShaderInfoLog(n)),console.error(We(r))),n}function We(i){let e=2;return i.replaceAll(`
`,()=>`
`+Qe(e++)+":")}function Qe(i){return i>=1e3?i.toString():("  "+i).slice(-3)}function E(i,e,r){const t=i.get(e);if(!t)return i.set(e,Array.from(r)),!0;const n=r.length;if(t.length!==n)return i.set(e,Array.from(r)),!0;for(let o=0;o<n;++o){const a=r[o];if(t[o]!==a){for(t[o]=a;o<n;++o)t[o]=r[o];return!0}}return!1}export{y as A,ve as E,rt as i,ot as r,Me as s};
