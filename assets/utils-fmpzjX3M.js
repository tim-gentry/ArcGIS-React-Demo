import{d as N}from"./ClassBreaksDefinition-RQBfkmon.js";import{n as k}from"./index-DX0rcHuW.js";const q=()=>k.getLogger("esri.rest.support.generateRendererUtils");function g(t,e){return Number(t.toFixed(e))}function C(t){const{normalizationTotal:e}=t;return{classBreaks:w(t),normalizationTotal:e}}function w(t){const e=t.definition,{classificationMethod:l,normalizationType:n,definedInterval:u}=e,i=e.breakCount??1,c=[];let o=t.values;if(o.length===0)return[];o=o.sort((m,d)=>m-d);const f=o[0],p=o[o.length-1];if(l==="equal-interval")if(o.length>=i){const m=(p-f)/i;let d=f;for(let r=1;r<i;r++){const a=g(f+r*m,6);c.push({minValue:d,maxValue:a,label:b(d,a,n)}),d=a}c.push({minValue:d,maxValue:p,label:b(d,p,n)})}else o.forEach(m=>{c.push({minValue:m,maxValue:m,label:b(m,m,n)})});else if(l==="natural-breaks"){const m=E(o),d=t.valueFrequency||m.valueFrequency,r=B(m.uniqueValues,d,i);let a=f;for(let s=1;s<i;s++)if(m.uniqueValues.length>s){const h=g(m.uniqueValues[r[s]],6);c.push({minValue:a,maxValue:h,label:b(a,h,n)}),a=h}c.push({minValue:a,maxValue:p,label:b(a,p,n)})}else if(l==="quantile")if(o.length>=i&&f!==p){let m=f,d=Math.ceil(o.length/i),r=0;for(let a=1;a<i;a++){let s=d+r-1;s>o.length&&(s=o.length-1),s<0&&(s=0),c.push({minValue:m,maxValue:o[s],label:b(m,o[s],n)}),m=o[s],r+=d,d=Math.ceil((o.length-r)/(i-a))}c.push({minValue:m,maxValue:p,label:b(m,p,n)})}else{let m=-1;for(let d=0;d<o.length;d++){const r=o[d];r!==m&&(m=r,c.push({minValue:m,maxValue:r,label:b(m,r,n)}),m=r)}}else if(l==="standard-deviation"){const m=P(o),d=L(o,m);if(d===0)c.push({minValue:o[0],maxValue:o[0],label:b(o[0],o[0],n)});else{const r=U(f,p,i,m,d)*d;let a=0,s=f;for(let V=i;V>=1;V--){const F=g(m-(V-.5)*r,6);c.push({minValue:s,maxValue:F,label:b(s,F,n)}),s=F,a++}let h=g(m+.5*r,6);c.push({minValue:s,maxValue:h,label:b(s,h,n)}),s=h,a++;for(let V=1;V<=i;V++)h=a===2*i?p:g(m+(V+.5)*r,6),c.push({minValue:s,maxValue:h,label:b(s,h,n)}),s=h,a++}}else if(l==="defined-interval"){if(!u)return c;const m=o[0],d=o[o.length-1],r=Math.ceil((d-m)/u);let a=m;for(let s=1;s<r;s++){const h=g(m+s*u,6);c.push({minValue:a,maxValue:h,label:b(a,h,n)}),a=h}c.push({minValue:a,maxValue:d,label:b(a,d,n)})}return c}function b(t,e,l){let n=null;return n=t===e?l&&l==="percent-of-total"?t+"%":t.toString():l&&l==="percent-of-total"?t+"% - "+e+"%":t+" - "+e,n}function E(t){const e=[],l=[];let n=Number.MIN_VALUE,u=1,i=-1;for(let c=0;c<t.length;c++){const o=t[c];o===n?(u++,l[i]=u):o!==null&&(e.push(o),n=o,u=1,l.push(u),i++)}return{uniqueValues:e,valueFrequency:l}}function B(t,e,l){const n=t.length,u=[];l>n&&(l=n);for(let c=0;c<l;c++)u.push(Math.round(c*n/l-1));u.push(n-1);let i=D(u,t,e,l);return O(i.mean,i.sdcm,u,t,e,l)&&(i=D(u,t,e,l)),u}function D(t,e,l,n){let u=[],i=[],c=[],o=0;const f=[],p=[];for(let a=0;a<n;a++){const s=v(a,t,e,l);f.push(s.sbMean),p.push(s.sbSdcm),o+=p[a]}let m,d=o,r=!0;for(;r||o<d;){r=!1,u=[];for(let a=0;a<n;a++)u.push(t[a]);for(let a=0;a<n;a++)for(let s=t[a]+1;s<=t[a+1];s++)if(m=e[s],a>0&&s!==t[a+1]&&Math.abs(m-f[a])>Math.abs(m-f[a-1]))t[a]=s;else if(a<n-1&&t[a]!==s-1&&Math.abs(m-f[a])>Math.abs(m-f[a+1])){t[a+1]=s-1;break}d=o,o=0,i=[],c=[];for(let a=0;a<n;a++){i.push(f[a]),c.push(p[a]);const s=v(a,t,e,l);f[a]=s.sbMean,p[a]=s.sbSdcm,o+=p[a]}}if(o>d){for(let a=0;a<n;a++)t[a]=u[a],f[a]=i[a],p[a]=c[a];o=d}return{mean:f,sdcm:p}}function O(t,e,l,n,u,i){let c=0,o=0,f=0,p=0,m=!0;for(let d=0;d<2&&m;d++){d===0&&(m=!1);for(let r=0;r<i-1;r++)for(;l[r+1]+1!==l[r+2];){l[r+1]=l[r+1]+1;const a=v(r,l,n,u);f=a.sbMean,c=a.sbSdcm;const s=v(r+1,l,n,u);if(p=s.sbMean,o=s.sbSdcm,!(c+o<e[r]+e[r+1])){l[r+1]=l[r+1]-1;break}e[r]=c,e[r+1]=o,t[r]=f,t[r+1]=p,m=!0}for(let r=i-1;r>0;r--)for(;l[r]!==l[r-1]+1;){l[r]=l[r]-1;const a=v(r-1,l,n,u);f=a.sbMean,c=a.sbSdcm;const s=v(r,l,n,u);if(p=s.sbMean,o=s.sbSdcm,!(c+o<e[r-1]+e[r])){l[r]=l[r]+1;break}e[r-1]=c,e[r]=o,t[r-1]=f,t[r]=p,m=!0}}return m}function U(t,e,l,n,u){let i=Math.max(n-t,e-n)/u/l;return i=i>=1?1:i>=.5?.5:.25,i}function P(t){let e=0;for(let l=0;l<t.length;l++)e+=t[l];return e/=t.length,e}function L(t,e){let l=0;for(let n=0;n<t.length;n++){const u=t[n];l+=(u-e)*(u-e)}return l/=t.length,Math.sqrt(l)}function v(t,e,l,n){let u=0,i=0;for(let f=e[t]+1;f<=e[t+1];f++){const p=n[f];u+=l[f]*p,i+=p}i<=0&&q().warn("Exception in Natural Breaks calculation");const c=u/i;let o=0;for(let f=e[t]+1;f<=e[t+1];f++)o+=n[f]*(l[f]-c)**2;return{sbMean:c,sbSdcm:o}}const G="<Null>",A="equal-interval",_=1,Y=5,j=10,Q=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,R=new Set(["esriFieldTypeDate","esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeOID","esriFieldTypeBigInteger"]),H=new Set(["esriFieldTypeTimeOnly","esriFieldTypeDateOnly"]),J=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function x(t){return t==null||typeof t=="string"&&!t?G:t}function K(t){const e=t.normalizationField!=null||t.normalizationType!=null,l=t.minValue!=null||t.maxValue!=null,n=!!t.sqlExpression&&t.supportsSQLExpression;return!e&&!l&&!n}function ht(t){const e=t.returnDistinct?[...new Set(t.values)]:t.values,l=e.filter(i=>i!=null).sort(),n=l.length,u={count:n,min:l[0],max:l[n-1]};return t.supportsNullCount&&(u.nullcount=e.length-n),t.percentileParams&&(u.median=$(e,t.percentileParams)),u}function W(t){const{values:e,useSampleStdDev:l,supportsNullCount:n}=t;let u=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,c=null,o=null,f=null,p=null,m=0;const d=t.minValue==null?-1/0:t.minValue,r=t.maxValue==null?1/0:t.maxValue;for(const s of e)Number.isFinite(s)?s>=d&&s<=r&&(c=c===null?s:c+s,u=Math.min(u,s),i=Math.max(i,s),m++):typeof s=="string"&&m++;if(m&&c!=null){o=c/m;let s=0;for(const h of e)Number.isFinite(h)&&h>=d&&h<=r&&(s+=(h-o)**2);p=l?m>1?s/(m-1):0:m>0?s/m:0,f=Math.sqrt(p)}else u=null,i=null;const a={avg:o,count:m,max:i,min:u,stddev:f,sum:c,variance:p};return n&&(a.nullcount=e.length-m),t.percentileParams&&(a.median=$(e,t.percentileParams)),a}function $(t,e){const{fieldType:l,value:n,orderBy:u,isDiscrete:i}=e,c=X(l,u==="desc");if((t=[...t].filter(a=>a!=null).sort((a,s)=>c(a,s))).length===0)return null;if(n<=0)return t[0];if(n>=1)return t[t.length-1];const o=(t.length-1)*n,f=Math.floor(o),p=f+1,m=o%1,d=t[f],r=t[p];return p>=t.length||i||typeof d=="string"||typeof r=="string"?d:d*(1-m)+r*m}function X(t,e){if(t){if(R.has(t))return S(e);if(H.has(t))return M(e,!1);if(t==="esriFieldTypeTimestampOffset")return lt(e);const i=M(e,!0);if(t==="esriFieldTypeString")return i;if(t==="esriFieldTypeGUID"||t==="esriFieldTypeGlobalID")return(c,o)=>i(I(c),I(o))}const l=e?1:-1,n=S(e),u=M(e,!0);return(i,c)=>typeof i=="number"&&typeof c=="number"?n(i,c):typeof i=="string"&&typeof c=="string"?u(i,c):l}const T=(t,e)=>t==null?e==null?0:1:e==null?-1:null,y=(t,e)=>t==null?e==null?0:-1:e==null?1:null;function Z(t){return t?T:y}const tt=(t,e)=>y(t,e)??(t===e?0:new Date(t).getTime()-new Date(e).getTime()),et=(t,e)=>T(t,e)??(t===e?0:new Date(e).getTime()-new Date(t).getTime());function lt(t){return t?et:tt}const nt=(t,e)=>y(t,e)??(t===e?0:t<e?-1:1),at=(t,e)=>T(t,e)??(t===e?0:t<e?1:-1);function M(t,e){if(!e)return t?at:nt;const l=Z(t);return t?(n,u)=>{const i=l(n,u);return i??((n=n.toUpperCase())>(u=u.toUpperCase())?-1:n<u?1:0)}:(n,u)=>{const i=l(n,u);return i??((n=n.toUpperCase())<(u=u.toUpperCase())?-1:n>u?1:0)}}const it=(t,e)=>T(t,e)??e-t,ut=(t,e)=>y(t,e)??t-e;function S(t){return t?it:ut}function I(t){return t.substr(24,12)+t.substr(19,4)+t.substr(16,2)+t.substr(14,2)+t.substr(11,2)+t.substr(9,2)+t.substr(6,2)+t.substr(4,2)+t.substr(2,2)+t.substr(0,2)}function bt(t,e){let l;for(l in t)J.includes(l)&&(Number.isFinite(t[l])||(t[l]=null));return e&&["avg","stddev","variance"].forEach(n=>{t[n]!=null&&(t[n]=Math.ceil(t[n]??0))}),t}function Vt(t){const e={};for(let l of t)(l==null||typeof l=="string"&&l.trim()==="")&&(l=null),e[l]==null?e[l]={count:1,data:l}:e[l].count++;return{count:e}}function z(t){return(t==null?void 0:t.type)!=="coded-value"?[]:t.codedValues.map(e=>e.code)}function gt(t,e,l,n){const u=t.count,i=[];if(l&&e){const c=[],o=z(e[0]);for(const f of o)if(e[1]){const p=z(e[1]);for(const m of p)if(e[2]){const d=z(e[2]);for(const r of d)c.push(`${x(f)}${n}${x(m)}${n}${x(r)}`)}else c.push(`${x(f)}${n}${x(m)}`)}else c.push(f);for(const f of c)u.hasOwnProperty(f)||(u[f]={data:f,count:0})}for(const c in u){const o=u[c];i.push({value:o.data,count:o.count,label:o.label})}return{uniqueValueInfos:i}}function vt(t,e,l,n){let u=null;switch(e){case"log":t!==0&&(u=Math.log(t)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(n)&&n!==0&&(u=t/n*100);break;case"field":Number.isFinite(l)&&l!==0&&(u=t/l);break;case"natural-log":t>0&&(u=Math.log(t));break;case"square-root":t>0&&(u=t**.5)}return u}function ot(t,e){const l=st({field:e.field,normalizationType:e.normalizationType,normalizationField:e.normalizationField,classificationMethod:e.classificationMethod,standardDeviationInterval:e.standardDeviationInterval,breakCount:e.numClasses||Y});return t=rt(t,e.minValue,e.maxValue),C({definition:l,values:t,normalizationTotal:e.normalizationTotal})}function rt(t,e,l){const n=e??-1/0,u=l??1/0;return t.filter(i=>Number.isFinite(i)&&i>=n&&i<=u)}function st(t){const{breakCount:e,field:l,normalizationField:n,normalizationType:u}=t,i=t.classificationMethod||A,c=i==="standard-deviation"?t.standardDeviationInterval||_:void 0;return new N({breakCount:e,classificationField:l,classificationMethod:i,normalizationField:u==="field"?n:void 0,normalizationType:u,standardDeviationInterval:c})}function xt(t,e){var f,p;let l=t.classBreaks;const n=l.length,u=(f=l[0])==null?void 0:f.minValue,i=(p=l[n-1])==null?void 0:p.maxValue,c=e==="standard-deviation",o=Q;return l=l.map(m=>{const d=m.label,r={minValue:m.minValue,maxValue:m.maxValue,label:d};if(c&&d){const a=d.match(o),s=(a==null?void 0:a.map(h=>+h.trim()))??[];s.length===2?(r.minStdDev=s[0],r.maxStdDev=s[1],s[0]<0&&s[1]>0&&(r.hasAvg=!0)):s.length===1&&(d.includes("<")?(r.minStdDev=null,r.maxStdDev=s[0]):d.includes(">")&&(r.minStdDev=s[0],r.maxStdDev=null))}return r}),{minValue:u,maxValue:i,classBreakInfos:l,normalizationTotal:t.normalizationTotal}}function Tt(t,e){const l=ct(t,e);if(l.min==null&&l.max==null)return{bins:[],minValue:l.min,maxValue:l.max,normalizationTotal:e.normalizationTotal};const n=l.intervals,u=l.min??0,i=l.max??0,c=n.map((o,f)=>({minValue:n[f][0],maxValue:n[f][1],count:0}));for(const o of t)if(o!=null&&o>=u&&o<=i){const f=mt(n,o);f>-1&&c[f].count++}return{bins:c,minValue:u,maxValue:i,normalizationTotal:e.normalizationTotal}}function ct(t,e){const{field:l,classificationMethod:n,standardDeviationInterval:u,normalizationType:i,normalizationField:c,normalizationTotal:o,minValue:f,maxValue:p}=e,m=e.numBins||j;let d=null,r=null,a=null;if((!n||n==="equal-interval")&&!i){if(f!=null&&p!=null)d=f,r=p;else{const s=W({values:t,minValue:f,maxValue:p,useSampleStdDev:!i,supportsNullCount:K({normalizationType:i,normalizationField:c,minValue:f,maxValue:p})});d=s.min??null,r=s.max??null}a=ft(d??0,r??0,m)}else{const{classBreaks:s}=ot(t,{field:l,normalizationType:i,normalizationField:c,normalizationTotal:o,classificationMethod:n,standardDeviationInterval:u,minValue:f,maxValue:p,numClasses:m});d=s[0].minValue,r=s[s.length-1].maxValue,a=s.map(h=>[h.minValue,h.maxValue])}return{min:d,max:r,intervals:a}}function mt(t,e){let l=-1;for(let n=t.length-1;n>=0;n--)if(e>=t[n][0]){l=n;break}return l}function ft(t,e,l){const n=(e-t)/l,u=[];let i,c=t;for(let o=1;o<=l;o++)i=c+n,i=Number(i.toFixed(16)),u.push([c,o===l?e:i]),c=i;return u}export{gt as $,vt as B,bt as C,ot as E,xt as P,X as T,Tt as U,x as c,ht as d,K as f,Vt as k,W as p,$ as v};
