import{ac as e,ad as o,ag as s,al as n}from"./index-DX0rcHuW.js";let r=class extends n{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};e([o({readOnly:!0})],r.prototype,"version",null),r=e([s("esri.views.layers.support.ClipArea")],r);const l=r;var i;let t=i=class extends l{constructor(p){super(p),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new i({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};e([o({type:[Number,String],json:{write:!0}})],t.prototype,"left",void 0),e([o({type:[Number,String],json:{write:!0}})],t.prototype,"right",void 0),e([o({type:[Number,String],json:{write:!0}})],t.prototype,"top",void 0),e([o({type:[Number,String],json:{write:!0}})],t.prototype,"bottom",void 0),t=i=e([s("esri.views.layers.support.ClipRect")],t);const h=t;export{l as a,h as p};
