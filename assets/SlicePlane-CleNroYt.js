import{dw as r,al as p,fT as h,ac as e,ad as o,aI as d,el as s,fU as n,ag as m}from"./index-DX0rcHuW.js";import{a as l}from"./Cyclical-CEj-eenM.js";import{j as a}from"./persistable-Dc28tVUD.js";let i=class extends r(p){constructor(t){super(t),this.type="plane",this.position=null,this.heading=0,this.tilt=0,this.width=10,this.height=10}equals(t){return this.heading===t.heading&&this.tilt===t.tilt&&h(this.position,t.position)&&this.width===t.width&&this.height===t.height}};e([o({readOnly:!0,json:{read:!1,write:!0}})],i.prototype,"type",void 0),e([o({type:d}),a()],i.prototype,"position",void 0),e([o({type:Number,nonNullable:!0,range:{min:0,max:360}}),a(),s(t=>l.normalize(n(t),0,!0))],i.prototype,"heading",void 0),e([o({type:Number,nonNullable:!0,range:{min:0,max:360}}),a(),s(t=>l.normalize(n(t),0,!0))],i.prototype,"tilt",void 0),e([o({type:Number,nonNullable:!0}),a()],i.prototype,"width",void 0),e([o({type:Number,nonNullable:!0}),a()],i.prototype,"height",void 0),i=e([m("esri.analysis.SlicePlane")],i);const b=i;export{b as h};
