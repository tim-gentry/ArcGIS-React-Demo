import{x as u,U as c}from"./index-DX0rcHuW.js";import{f as d,i as p,s as v}from"./utils-nzDIu46v.js";async function h(s,i,e){const r=d(s),o=p(r.query,{query:v({f:"json"}),...e});i.startsWith("{")&&(i=i.slice(1,-1));const t=u(r.path,"versions",i),{data:a}=await c(t,o),{versionName:n,versionGuid:f,...m}=a;return{...m,versionIdentifier:{name:n,guid:f}}}export{h as getVersion};
