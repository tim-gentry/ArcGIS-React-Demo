import{b2 as d,ac as t,ad as e,ag as p,al as u,f as g,ak as w,dv as m}from"./index-DX0rcHuW.js";import{s as f,o as a}from"./UtilityNetwork-NjDvAhhO.js";const n=new d({startingPoint:"starting-point",barrier:"barrier"});let i=class extends u{constructor(o){super(o),this.globalId=null,this.isFilterBarrier=!1,this.percentAlong=null,this.terminalId=null,this.type=null}};t([e({type:String,json:{write:!0}})],i.prototype,"globalId",void 0),t([e({type:Boolean,json:{write:!0}})],i.prototype,"isFilterBarrier",void 0),t([e({type:Number,json:{write:!0}})],i.prototype,"percentAlong",void 0),t([e({type:Number,json:{write:!0}})],i.prototype,"terminalId",void 0),t([e({type:n.apiValues,json:{type:n.jsonValues,read:{reader:n.read,source:"traceLocationType"},write:{writer:n.write,target:"traceLocationType"}}})],i.prototype,"type",void 0),i=t([p("esri.rest.networks.support.TraceLocation")],i);const b=i;var l;let r=l=class extends u{static from(o){return m(l,o)}constructor(o){super(o),this.namedTraceConfigurationGlobalId=null,this.gdbVersion=null,this.traceLocations=[],this.moment=null,this.outSpatialReference=null,this.traceConfiguration=null,this.resultTypes=null,this.traceType=null}writeOutSR(o,s,c){if(o!=null){const{wkid:y}=o;s[c]=JSON.stringify({wkid:y})}}};t([e({type:String,json:{read:{source:"traceConfigurationGlobalId"},write:{target:"traceConfigurationGlobalId"}}})],r.prototype,"namedTraceConfigurationGlobalId",void 0),t([e({type:String,json:{write:!0}})],r.prototype,"gdbVersion",void 0),t([e({type:[b],json:{write:!0}})],r.prototype,"traceLocations",void 0),t([e({type:Date,json:{type:Number,write:{writer:(o,s)=>{s.moment=o?o.getTime():null}}}})],r.prototype,"moment",void 0),t([e({type:g,json:{write:{allowNull:!0,target:"outSR"}}})],r.prototype,"outSpatialReference",void 0),t([w("outSpatialReference")],r.prototype,"writeOutSR",null),t([e({type:f,json:{write:!0}})],r.prototype,"traceConfiguration",void 0),t([e({type:[Object],json:{write:!0}})],r.prototype,"resultTypes",void 0),t([e({type:a.apiValues,json:{type:a.jsonValues,read:a.read,write:a.write}})],r.prototype,"traceType",void 0),r=l=t([p("esri.rest.networks.support.TraceParameters")],r);const j=r,h=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));export{h as T,b as a,j as m};
