import{U as v}from"./index-DX0rcHuW.js";import{f as c,i as d,s as y}from"./utils-nzDIu46v.js";async function g(o,r,s){const n=c(o),e=r.toJSON(),i=d(n.query,{query:y({...e,f:"json"}),...s}),t=`${n.path}/versionInfos`,{data:a}=await v(t,i);return a.versions.map(f=>{const{versionName:m,versionGuid:u,...p}=f;return{...p,versionIdentifier:{name:m,guid:u}}})}export{g as getVersionInfos};
