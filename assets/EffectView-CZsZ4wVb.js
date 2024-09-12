import{ac as h,ad as o,ag as m,bh as T,b9 as v,n as S,a as p,fj as E,fk as $,fl as b}from"./index-DX0rcHuW.js";const _=-1;let l=class extends T{constructor(t){super(t),this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this.duration=v("mapview-transitions-duration"),this.effects=[]}set effect(t){if(this._get("effect")!==(t=t||"")){this._set("effect",t);try{this._transitionTo(g(t))}catch(e){this._transitionTo([]),S.getLogger(this).warn("Invalid Effect",{effect:t,error:e})}}}get hasEffects(){return this.transitioning||!!this.effects.length}set scale(t){this._updateForScale(t)}get transitioning(){return this._to!==null}canTransitionTo(t){try{return this.scale>0&&y(this._current,g(t),this.scale)}catch{return!1}}transitionStep(t,e){this._applyTimeTransition(t),this._updateForScale(e)}endTransitions(){this._applyTimeTransition(this.duration)}_transitionTo(t){this.scale>0&&y(this._current,t,this.scale)?(this._final=t,this._to=p(t),w(this._current,this._to,this.scale),this._from=p(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=t),this._set("effects",this._current[0]?p(this._current[0].effects):[])}_applyTimeTransition(t){if(!(this._to&&this._from&&this._current&&this._final))return;this._time+=t;const e=Math.min(1,this._time/this.duration);for(let n=0;n<this._current.length;n++){const s=this._current[n],f=this._from[n],a=this._to[n];s.scale=F(f.scale,a.scale,e);for(let r=0;r<s.effects.length;r++){const i=s.effects[r],u=f.effects[r],d=a.effects[r];i.interpolate(u,d,e)}}e===1&&(this._current=this._final,this._set("effects",this._current[0]?p(this._current[0].effects):[]),this._from=this._to=this._final=null)}_updateForScale(t){if(this._set("scale",t),this._current.length===0)return;const e=this._current,n=this._current.length-1;let s,f,a=1;if(e.length===1||t>=e[0].scale)f=s=e[0].effects;else if(t<=e[n].scale)f=s=e[n].effects;else for(let r=0;r<n;r++){const i=e[r],u=e[r+1];if(i.scale>=t&&u.scale<=t){a=(t-i.scale)/(u.scale-i.scale),s=i.effects,f=u.effects;break}}for(let r=0;r<this.effects.length;r++)this.effects[r].interpolate(s[r],f[r],a)}};function g(c){const t=E(c)||[];return O(t)?[{scale:_,effects:t}]:t}function y(c,t,e){var n,s,f,a;return!((n=c[0])!=null&&n.effects)||!((s=t[0])!=null&&s.effects)?!0:!((((f=c[0])==null?void 0:f.scale)===_||((a=t[0])==null?void 0:a.scale)===_)&&(c.length>1||t.length>1)&&e<=0)&&$(c[0].effects,t[0].effects)}function w(c,t,e){const n=c.length>t.length?c:t,s=c.length>t.length?t:c,f=s[s.length-1],a=(f==null?void 0:f.scale)??e,r=(f==null?void 0:f.effects)??[];for(let i=s.length;i<n.length;i++)s.push({scale:a,effects:[...r]});for(let i=0;i<n.length;i++)s[i].scale=s[i].scale===_?e:s[i].scale,n[i].scale=n[i].scale===_?e:n[i].scale,b(s[i].effects,n[i].effects)}function F(c,t,e){return c+(t-c)*e}function O(c){const t=c[0];return!!t&&"type"in t}h([o()],l.prototype,"_to",void 0),h([o()],l.prototype,"duration",void 0),h([o({value:""})],l.prototype,"effect",null),h([o({readOnly:!0})],l.prototype,"effects",void 0),h([o({readOnly:!0})],l.prototype,"hasEffects",null),h([o({value:0})],l.prototype,"scale",null),h([o({readOnly:!0})],l.prototype,"transitioning",null),l=h([m("esri.layers.effects.EffectView")],l);export{l as h};
