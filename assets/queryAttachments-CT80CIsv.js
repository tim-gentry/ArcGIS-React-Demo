import{hu as u,hv as f,U as p}from"./index-DX0rcHuW.js";import{t as d}from"./query-95tcIPsI.js";import{a as l}from"./AttachmentInfo-CypukXoR.js";import"./normalizeUtils-CzEkgn6d.js";import"./normalizeUtilsCommon-DXRtgGFh.js";import"./utils-nzDIu46v.js";import"./utils-D67OULxu.js";import"./pbfQueryUtils-B33F7Io8.js";import"./pbf-9I_px9lQ.js";import"./OptimizedGeometry-vU5jWBvU.js";import"./OptimizedFeature-7juV2tZm.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-B1r3mH-Y.js";function y(n){const t=n.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function T(n,t){const o={};for(const a of t){const{parentObjectId:e,parentGlobalId:s,attachmentInfos:c}=a;for(const r of c){const{id:i}=r,h=u(f(`${n.path}/${e}/attachments/${i}`)),m=l.fromJSON(r);m.set({url:h,parentObjectId:e,parentGlobalId:s}),o[e]?o[e].push(m):o[e]=[m]}}return o}function x(n,t,o){let a={query:d({...n.query,f:"json",...y(t)})};return o&&(a={...o,...a,query:{...o.query,...a.query}}),p(n.path+"/queryAttachments",a).then(e=>e.data.attachmentGroups)}async function J(n,t,o){const{objectIds:a}=t,e=[];for(const s of a)e.push(p(n.path+"/"+s+"/attachments",o));return Promise.all(e).then(s=>a.map((c,r)=>({parentObjectId:c,attachmentInfos:s[r].data.attachmentInfos})))}export{x as executeAttachmentQuery,J as fetchAttachments,T as processAttachmentQueryResult};
