import{ac as l,ad as i,ae as m,f as x,ag as S}from"./index-DX0rcHuW.js";import{z as f}from"./TileInfo-DuivnO5H.js";import{e as I}from"./TileInfoTilemapCache-BB5YNiTu.js";import{j as O}from"./TilemapCache-DM2bbb8F.js";const T=y=>{let t=class extends y{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}destroy(){var a,e;(e=(a=this.tilemapCache)==null?void 0:a.destroy)==null||e.call(a)}readMinScale(a,e){return e.minLOD!=null&&e.maxLOD!=null?a:0}readMaxScale(a,e){return e.minLOD!=null&&e.maxLOD!=null?a:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(a,e,h){var u;const v=(u=e.capabilities)==null?void 0:u.includes("Tilemap");let{minLOD:n,maxLOD:o,minScale:p,maxScale:c}=e;if(n==null&&o==null&&p!==0&&c!==0){const r=s=>Math.round(1e4*s)/1e4;p=r(p||e.tileInfo.lods[0].scale),c=r(c||e.tileInfo.lods[e.tileInfo.lods.length-1].scale);for(const s of e.tileInfo.lods){const d=r(s.scale);n=d>=p?s.level:n,o=d>=c?s.level:o}}if(v)return new O({layer:this,minLOD:n,maxLOD:o});if(e.tileInfo){const r=new f;return r.read(e.tileInfo,h),new I(r,n,o)}return null}};return l([i({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),l([i()],t.prototype,"minScale",void 0),l([m("service","minScale")],t.prototype,"readMinScale",null),l([i()],t.prototype,"maxScale",void 0),l([m("service","maxScale")],t.prototype,"readMaxScale",null),l([i({type:x})],t.prototype,"spatialReference",void 0),l([i({readOnly:!0})],t.prototype,"supportsBlankTile",null),l([i({type:f})],t.prototype,"tileInfo",void 0),l([i()],t.prototype,"tilemapCache",void 0),l([m("service","tilemapCache",["capabilities","tileInfo"])],t.prototype,"readTilemapCache",null),l([i()],t.prototype,"version",void 0),t=l([S("esri.layers.mixins.ArcGISCachedService")],t),t};export{T as p};
