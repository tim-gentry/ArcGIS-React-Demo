import{a as v,c as w,z as x,h as f,g as m,n as T,t as B}from"./Theme-DFgU1DwO.js";import{l as R,o as j}from"./ResponsiveTheme-CBjn5DSa.js";import{n as y,o as P}from"./Button-Da6fd0GD.js";import{u as E}from"./Tooltip-BCne9EUK.js";import{s as z}from"./ColorSet-wVL2yoYE.js";import"./index-DX0rcHuW.js";class c extends v{constructor(){super(...arguments),Object.defineProperty(this,"thumb",{enumerable:!0,configurable:!0,writable:!0,value:this._makeThumb()}),Object.defineProperty(this,"startGrip",{enumerable:!0,configurable:!0,writable:!0,value:this._makeButton()}),Object.defineProperty(this,"endGrip",{enumerable:!0,configurable:!0,writable:!0,value:this._makeButton()}),Object.defineProperty(this,"_thumbBusy",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_startDown",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_endDown",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_thumbDown",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_gripDown",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}_addOrientationClass(){this._settings.themeTags=w(this._settings.themeTags,["scrollbar",this._settings.orientation]),this._settings.background||(this._settings.background=y.new(this._root,{themeTags:w(this._settings.themeTags,["main","background"])}))}_makeButton(){return this.children.push(P.new(this._root,{themeTags:["resize","button",this.get("orientation")],icon:x.new(this._root,{themeTags:["icon"]})}))}_makeThumb(){return this.children.push(y.new(this._root,{themeTags:["thumb",this.get("orientation")]}))}_handleAnimation(t){t&&this._disposers.push(t.events.on("stopped",()=>{this.setPrivateRaw("isBusy",!1),this._thumbBusy=!1}))}_afterNew(){this._addOrientationClass(),super._afterNew();const t=this.startGrip,e=this.endGrip,i=this.thumb,r=this.get("background");r&&this._disposers.push(r.events.on("click",s=>{this.setPrivateRaw("isBusy",!0);const a=this._display.toLocal(s.point),h=this.width(),o=this.height(),u=this.get("orientation");let n,d,p;n=u=="vertical"?(a.y-i.height()/2)/o:(a.x-i.width()/2)/h,u=="vertical"?(d=n*o,p="y"):(d=n*h,p="x");const l=this.get("animationDuration",0);l>0?(this._thumbBusy=!0,this._handleAnimation(this.thumb.animate({key:p,to:d,duration:l,easing:this.get("animationEasing")}))):(this.thumb.set(p,d),this._root.events.once("frameended",()=>{this.setPrivateRaw("isBusy",!1)}))})),this._disposers.push(i.events.on("dblclick",s=>{if(!f(s.originalEvent,this))return;const a=this.get("animationDuration",0),h=this.get("animationEasing");this.animate({key:"start",to:0,duration:a,easing:h}),this.animate({key:"end",to:1,duration:a,easing:h})})),this._disposers.push(t.events.on("pointerdown",()=>{this.setPrivateRaw("isBusy",!0),this._startDown=!0,this._gripDown="start"})),this._disposers.push(e.events.on("pointerdown",()=>{this.setPrivateRaw("isBusy",!0),this._endDown=!0,this._gripDown="end"})),this._disposers.push(i.events.on("pointerdown",()=>{this.setPrivateRaw("isBusy",!0),this._thumbDown=!0,this._gripDown=void 0})),this._disposers.push(t.events.on("globalpointerup",()=>{this._startDown&&(this.setPrivateRaw("isBusy",!1),this._released()),this._startDown=!1})),this._disposers.push(e.events.on("globalpointerup",()=>{this._endDown&&(this.setPrivateRaw("isBusy",!1),this._released()),this._endDown=!1})),this._disposers.push(i.events.on("globalpointerup",()=>{this._thumbDown&&(this.setPrivateRaw("isBusy",!1),this._released()),this._thumbDown=!1})),this._disposers.push(t.on("x",()=>{this._updateThumb()})),this._disposers.push(e.on("x",()=>{this._updateThumb()})),this._disposers.push(t.on("y",()=>{this._updateThumb()})),this._disposers.push(e.on("y",()=>{this._updateThumb()})),this._disposers.push(i.events.on("positionchanged",()=>{this._updateGripsByThumb()})),this.get("orientation")=="vertical"?(t.set("x",0),e.set("x",0),this._disposers.push(i.adapters.add("y",s=>Math.max(Math.min(Number(s),this.height()-i.height()),0))),this._disposers.push(i.adapters.add("x",s=>this.width()/2)),this._disposers.push(t.adapters.add("x",s=>this.width()/2)),this._disposers.push(e.adapters.add("x",s=>this.width()/2)),this._disposers.push(t.adapters.add("y",s=>Math.max(Math.min(Number(s),this.height()),0))),this._disposers.push(e.adapters.add("y",s=>Math.max(Math.min(Number(s),this.height()),0)))):(t.set("y",0),e.set("y",0),this._disposers.push(i.adapters.add("x",s=>Math.max(Math.min(Number(s),this.width()-i.width()),0))),this._disposers.push(i.adapters.add("y",s=>this.height()/2)),this._disposers.push(t.adapters.add("y",s=>this.height()/2)),this._disposers.push(e.adapters.add("y",s=>this.height()/2)),this._disposers.push(t.adapters.add("x",s=>Math.max(Math.min(Number(s),this.width()),0))),this._disposers.push(e.adapters.add("x",s=>Math.max(Math.min(Number(s),this.width()),0))))}_updateChildren(){super._updateChildren(),(this.isDirty("end")||this.isDirty("start")||this._sizeDirty)&&this.updateGrips()}_changed(){if(super._changed(),this.isDirty("start")||this.isDirty("end")){const t="rangechanged";this.events.isEnabled(t)&&this.events.dispatch(t,{type:t,target:this,start:this.get("start",0),end:this.get("end",1),grip:this._gripDown})}}_released(){const t="released";this.events.isEnabled(t)&&this.events.dispatch(t,{type:t,target:this})}updateGrips(){const t=this.startGrip,e=this.endGrip,i=this.get("orientation"),r=this.height(),s=this.width();i=="vertical"?(t.set("y",r*this.get("start",0)),e.set("y",r*this.get("end",1))):(t.set("x",s*this.get("start",0)),e.set("x",s*this.get("end",1)));const a=this.getPrivate("positionTextFunction"),h=Math.round(100*this.get("start",0)),o=Math.round(100*this.get("end",0));let u,n;a?(u=a.call(this,this.get("start",0)),n=a.call(this,this.get("end",0))):(u=h+"%",n=o+"%"),t.set("ariaLabel",this._t("From %1",void 0,u)),t.set("ariaValueNow",""+h),t.set("ariaValueText",h+"%"),t.set("ariaValueMin","0"),t.set("ariaValueMax","100"),e.set("ariaLabel",this._t("To %1",void 0,n)),e.set("ariaValueNow",""+o),e.set("ariaValueText",o+"%"),e.set("ariaValueMin","0"),e.set("ariaValueMax","100")}_updateThumb(){const t=this.thumb,e=this.startGrip,i=this.endGrip,r=this.height(),s=this.width();let a=e.x(),h=i.x(),o=e.y(),u=i.y(),n=0,d=1;this.get("orientation")=="vertical"?m(o)&&m(u)&&(this._thumbBusy||t.isDragging()||(t.set("height",u-o),t.set("y",o)),n=o/r,d=u/r):m(a)&&m(h)&&(this._thumbBusy||t.isDragging()||(t.set("width",h-a),t.set("x",a)),n=a/s,d=h/s),!this.getPrivate("isBusy")||this.get("start")==n&&this.get("end")==d||(this.set("start",n),this.set("end",d));const p=this.getPrivate("positionTextFunction"),l=Math.round(100*this.get("start",0)),D=Math.round(100*this.get("end",0));let b,_;p?(b=p.call(this,this.get("start",0)),_=p.call(this,this.get("end",0))):(b=l+"%",_=D+"%"),t.set("ariaLabel",this._t("From %1 to %2",void 0,b,_)),t.set("ariaValueNow",""+l),t.set("ariaValueText",l+"%")}_updateGripsByThumb(){const t=this.thumb,e=this.startGrip,i=this.endGrip;if(this.get("orientation")=="vertical"){const r=t.height();e.set("y",t.y()),i.set("y",t.y()+r)}else{const r=t.width();e.set("x",t.x()),i.set("x",t.x()+r)}}}Object.defineProperty(c,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Scrollbar"}),Object.defineProperty(c,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:v.classNames.concat([c.className])});class N extends T{setupDefaultRules(){super.setupDefaultRules(),this.rule("Component").setAll({interpolationDuration:600}),this.rule("Hierarchy").set("animationDuration",600),this.rule("Scrollbar").set("animationDuration",600),this.rule("Tooltip").set("animationDuration",300),this.rule("MapChart").set("animationDuration",1e3),this.rule("MapChart").set("wheelDuration",300),this.rule("Entity").setAll({stateAnimationDuration:600}),this.rule("Sprite").states.create("default",{stateAnimationDuration:600}),this.rule("Tooltip",["axis"]).setAll({animationDuration:200}),this.rule("WordCloud").set("animationDuration",500),this.rule("Polygon").set("animationDuration",600),this.rule("ArcDiagram").set("animationDuration",600)}}const G=["#2888B8","#EB7028","#48A375","#9370B1","#e55035","#3d9ccc","#DC7B04","#b87bb0","#3fa681","#EE6386"].map(g=>B(g));export{N as AnimatedThemeAm5,z as ColorSetAm5,R as DarkThemeAm5,j as ResponsiveThemeAm5,c as ScrollbarAm5,T as ThemeAm5,E as TooltipAm5,B as colorAm5,G as esriChartColorSet};
