import{o as S,l as q}from"./ResponsiveTheme-CBjn5DSa.js";import{M as N,eH as D,bA as W,aF as J,ji as K,ar as Q,bs as _}from"./index-DX0rcHuW.js";import{r as P}from"./signal-CpmfLcHB.js";import{g as G,b as ii}from"./unitFormatUtils-BYvkXWcg.js";import{r as v,e as ti,s as oi}from"./ElevationProfile-CRUPn4HG.js";import{W as ei,B as ni}from"./chartUtilsAm5-CJMbkrAE.js";import{q as R}from"./jsxFactory-DmHi7Kb2.js";import{r as ai}from"./themeUtils-C3zvZbsE.js";import{n as ri,g as X,b as si,x as li,l as pi,f as mi}from"./LineSeries-HMqBXCNE.js";import{a3 as b,t as u,r as di,G as ci}from"./Theme-DFgU1DwO.js";import{u as O}from"./Tooltip-BCne9EUK.js";import{s as ui}from"./substitute-e0S7rtIE.js";import"./ByteSizeUnit-BsxeN7wM.js";import"./Cyclical-CEj-eenM.js";import"./quantityUtils-DSpmykXR.js";import"./memoize-DsJmrG76.js";import"./ElevationQueryTileCache-ByGSevWc.js";import"./projectVectorToVector-DjKO2tJh.js";import"./projectPointToVector-6lqiVL77.js";import"./LayerConstants-B33OP6sh.js";import"./Material-BfvzXcva.js";import"./interfaces-B8ge7Jg9.js";import"./basicInterfaces-wONHx_SN.js";import"./VertexAttribute-BnAa5VW0.js";import"./ViewingMode-Dodu7ZZk.js";import"./ElevationProvider-Xg9LKEp7.js";import"./mat4f64-Dk4dwAN8.js";import"./sphere-COyqsaGw.js";import"./plane-BL9J6YX0.js";import"./mat3f64-BBpwCtoL.js";import"./quatf64-BrpT0VRp.js";import"./vec2f64-Diu2Kaa8.js";import"./mathUtils-BsqbT0oM.js";import"./boundedPlane-MAPkm7Yi.js";import"./lineSegment-C2OVzbAD.js";import"./verticalOffsetUtils-Bq_pVrum.js";import"./mat3-Ck4GO2qT.js";import"./orientedBoundingBox-BTwqkknQ.js";import"./quat-DrJsq_-D.js";import"./spatialReferenceEllipsoidUtils-Bv0mQCFg.js";import"./computeTranslationToOriginAndRotation-B9BchKSd.js";import"./Intersector-CG5xfiNM.js";import"./Intersector-ENyKy7_L.js";import"./defaultUnit-CeSgMfuW.js";import"./getDefaultUnitForView-Cl7rPtCt.js";import"./throttle-jjSnxk80.js";import"./elevationInfoUtils-JmMUMmCn.js";import"./vec2-C-4tM9Uv.js";import"./geodesicUtils-BPlO99Nt.js";import"./QueueProcessor-01Ee2ByR.js";import"./ReactiveMap-r-vujrh9.js";import"./Scheduler-Bg_fxWwI.js";import"./debugFlags-Cr0sx6r_.js";import"./traversalUtils-DmE6QkgJ.js";import"./uuid-fwrPAdZb.js";import"./Ground-dhRLerDt.js";import"./loadAll-8MiqgLTH.js";import"./ElevationQuery-DaGOvBJY.js";import"./ElevationSamplerData-CFwzCheb.js";import"./ElevationTile-MIg3DBTc.js";import"./TileKey-DZd6gJy7.js";import"./GraphicsLayer-SBXo_p0G.js";import"./GraphicsCollection-BjA_qBYu.js";import"./InputManager-abOXR3ru.js";import"./SketchViewModel-CW2OqW_5.js";import"./isSupportedObject-DZrOSWxn.js";import"./SketchLabelOptions-zVB6yjLA.js";import"./SnappingManager-C8RCylzd.js";import"./UpdatingHandles-CERUeL1P.js";import"./geometry2dUtils-D5ud2BJg.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./keybindings-RFI4I3n4.js";import"./utils-CXgSw6Sd.js";import"./layerViewUtils-D2JqIDZ8.js";import"./geodesicLengthMeasurementUtils-1VjlYqtL.js";import"./geometryEngine-C92iiwvG.js";import"./geometryEngineBase-RmbNeFm7.js";import"./_commonjsHelpers-DCkdB7M8.js";import"./hydrated-CEL7VY_R.js";import"./layerUtils-BS1Di3Pm.js";import"./hitTestSelectUtils-UXJPjatw.js";import"./screenUtils-BcEL8jIe.js";import"./UnitSelect-Cjf2PU8k.js";import"./globalCss-CZa70j6i.js";import"./DefaultTheme-Ck1k7FI6.js";import"./ColorSet-wVL2yoYE.js";import"./Tick-Dt1wNCno.js";import"./Button-Da6fd0GD.js";function fi(i,e,o=10){const t=z(e-i,!1);if(t===0)return[i,e];const n=z(t/(o-1),!0);return[Math.floor(i/n)*n,Math.ceil(e/n)*n]}function z(i,e){const o=Math.floor(Math.log10(i)),t=i/10**o;let n;return n=e?t<1.5?1:t<3?2:t<5?2.5:t<7?5:10:t<=1?1:t<=2?2:t<=3?2.5:t<=5?5:10,n*10**o}const A="#f8f8f8",E="#a9a9a9",g="#323232",xi="line",gi="fill",h=15,x=12,Y=.001,hi=.1,Ai=.02,I={fontFamily:"Avenir Next",paddingBottom:x/2,paddingLeft:0,paddingRight:0,paddingTop:0,axisGridStroke:"#f4f4f4",axisLabelsFontSize:9,axisLabelsFontWeight:"400",axisLabelsColor:E,axisTooltipFontSize:12,axisTooltipBackgroundColor:g,axisTooltipLabelColor:A,axisTooltipPaddingTop:Math.round(x/4),axisTooltipPaddingBottom:Math.round(x/4),axisTooltipPaddingHorizontal:Math.round(h/4),xAxisMinGridDistance:50,xAxisLabelsSpacing:Math.round(x/2),xAxisMinLabelPosition:.05,xAxisMaxLabelPosition:.9,yAxisMinGridDistance:30,yAxisLabelSpacing:Math.round(h/4),yAxisMinLabelPosition:0,yAxisMaxLabelPosition:.8,seriesTooltipFontSize:12,seriesTooltipBackgroundColor:A,seriesTooltipLabelColor:g,seriesFillLighten:.9,seriesTooltipSpacing:x/2,seriesTooltipPaddingVertical:Math.round(h/4),seriesTooltipPaddingHorizontal:Math.round(h/4)},vi={...I,axisGridStroke:g,axisLabelsColor:E,axisTooltipBackgroundColor:g,axisTooltipLabelColor:A,seriesTooltipBackgroundColor:g,seriesTooltipLabelColor:A,seriesFillLighten:-.75},y={minX:void 0,maxX:void 0,minY:void 0,maxY:void 0};async function Ao(i){const e=await ei(i.container);N(i.abortOptions);const o=ai(),t=o?vi:I;e.setThemes(o?[S.new(e),q.new(e)]:[S.new(e)]);const n=R(i.container),a=e.container.children.push(ri.new(e,{panX:!0,panY:!0,paddingTop:t.paddingTop,paddingBottom:t.paddingBottom,paddingLeft:n?t.paddingRight:t.paddingLeft,paddingRight:n?t.paddingLeft:t.paddingRight,maxTooltipDistance:0}));a.zoomOutButton.set("forceHidden",!0);const r=a.xAxes.push(X.new(e,{renderer:si.new(e,{})})),s=a.yAxes.push(X.new(e,{renderer:li.new(e,{})})),m=P(null),l=P("loading"),p={params:i,chart:a,xAxis:r,yAxis:s,seriesInfos:new Map,messages:null,theme:t,pointerIsOver:!1,get state(){return l.value},get data(){return m.value},set data(d){m.value=d}};yi(p),Ti(p),bi(p);const c=D([Ci(p,i.onRangeChange),ki(p,i.onCursorPositionChange),L(e.events.once("frameended",()=>{l.value="ready"})),L(e)]);return{destroy:()=>{c.remove(),l.value="destroyed"},update:d=>{d.data===p.data&&d.messages===p.messages||M(p)||Li(p,d)},zoomOut:()=>V(p)}}function M(i){return i.state==="destroyed"}function bi({chart:i,xAxis:e,yAxis:o}){const t=pi.new(i.root,{behavior:"none",xAxis:e,yAxis:o});t.lineY.set("visible",!1),i.set("cursor",t)}function yi(i){var r;const{chart:e,xAxis:o,theme:t}=i;o.setAll({extraMax:0,extraMin:0,maxDeviation:0,numberFormatter:U(i,"distance"),strictMinMax:!0,strictMinMaxSelection:!0}),o.axisHeader.set("forceHidden",!0);const n=o.get("renderer");n.setAll({inside:!1,minGridDistance:t.xAxisMinGridDistance}),n.labels.template.setAll({centerX:b,centerY:b,fill:u(t.axisLabelsColor),fontFamily:t.fontFamily,fontSize:t.axisLabelsFontSize,fontWeight:t.axisLabelsFontWeight,maxPosition:t.xAxisMaxLabelPosition,minPosition:t.xAxisMinLabelPosition,paddingLeft:0,paddingRight:0,paddingTop:t.xAxisLabelsSpacing});const a=o.set("tooltip",O.new(e.root,{paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0}));(r=a.get("background"))==null||r.setAll({fill:u(t.axisTooltipBackgroundColor),stroke:void 0}),a.label.setAll({fill:u(t.axisTooltipLabelColor),fontFamily:t.fontFamily,fontSize:t.axisTooltipFontSize,paddingBottom:t.axisTooltipPaddingBottom,paddingLeft:t.axisTooltipPaddingHorizontal,paddingRight:t.axisTooltipPaddingHorizontal,paddingTop:t.axisTooltipPaddingTop}),n.grid.template.setAll({strokeOpacity:1,stroke:u(t.axisGridStroke)})}function Ti(i){const{yAxis:e,theme:o}=i;e.setAll({baseValue:v().noDataValue,extraMax:0,extraMin:0,maxDeviation:0,numberFormatter:U(i,"elevation"),strictMinMax:!0,strictMinMaxSelection:!0,tooltip:void 0}),e.axisHeader.set("visible",!1);const t=R(i.params.container),n=e.get("renderer");n.setAll({minGridDistance:o.yAxisMinGridDistance,opposite:t,inside:!0}),n.labels.template.setAll({centerX:b,centerY:di,fill:u(o.axisLabelsColor),fontFamily:o.fontFamily,fontSize:o.axisLabelsFontSize,fontWeight:o.axisLabelsFontWeight,maxPosition:o.yAxisMaxLabelPosition,minPosition:o.yAxisMinLabelPosition,paddingBottom:0,paddingLeft:t?0:o.yAxisLabelSpacing,paddingRight:t?o.yAxisLabelSpacing:0,paddingTop:0,textAlign:"start"}),n.grid.template.setAll({strokeOpacity:1,stroke:u(o.axisGridStroke)})}function Li(i,e){var s;if(M(i))return;const o=i.data??void 0,t=e.data??void 0;(s=i.chart.get("cursor"))==null||s.set("forceHidden",!(t!=null&&t.refined));const n=o!==t,a=(o==null?void 0:o.effectiveUnits)!==(t==null?void 0:t.effectiveUnits),r=(o==null?void 0:o.uniformScaling)!==(t==null?void 0:t.uniformScaling);i.data=t,i.messages=e.messages,(n||a)&&(Mi(i),Pi(i)),r&&V(i),T(i)}function V(i){M(i)||(i.xAxis.zoom(0,1),i.yAxis.zoom(0,1))}function Mi(i){const{chart:e,data:o,xAxis:t,yAxis:n}=i,{minX:a,maxX:r,minY:s,maxY:m}=Fi({data:o,pixelWidth:t.width(),pixelHeight:n.height()}),l=!!(o!=null&&o.uniformScaling),p=!!(o!=null&&o.refined);e.setAll({panX:!0,panY:l,pinchZoomX:p,pinchZoomY:p&&l,wheelX:"panX",wheelY:p?l?"zoomXY":"zoomX":"none"}),t.setAll({max:r,min:a,panX:!0,panY:!1,zoomX:!0,zoomY:l}),n.setAll({max:m,min:s,panX:!1,panY:l,zoomX:l,zoomY:l})}function Fi({data:i,pixelWidth:e,pixelHeight:o}){if(i==null)return y;const t=i.statistics,n=0,a=t==null?void 0:t.maxDistance;let r=t==null?void 0:t.minElevation,s=t==null?void 0:t.maxElevation;if(a==null||r==null||s==null)return y;const m=Math.max(a-n,Y);let l=Math.max(s-r,Y);const p=i.effectiveUnits;if(i.dynamicElevationRange){const c=W(m,p.distance,p.elevation);l=Math.max(l,c/v().maxChartRatio)}return r-=Ai*l,s=r+l+hi*l,[r,s]=fi(r,s,10),l=s-r,i.uniformScaling?Si({data:i,bounds:{minX:n,maxX:a,minY:r,maxY:s},pixelWidth:e,pixelHeight:o,centered:!0}):{minX:n,maxX:n+m,minY:r,maxY:r+l}}function Si({data:i,bounds:e,pixelWidth:o,pixelHeight:t,centered:n}){if(i==null)return e;let{minX:a,maxX:r,minY:s,maxY:m}=e;if(a==null||r==null||s==null||m==null)return y;const l=r-a,p=m-s,c=i.effectiveUnits,d=W(p,c.elevation,c.distance)/t/(l/o);return d>=1?[a,r]=C([a,r],d,n):[s,m]=C([s,m],1/d,n),{minX:a,maxX:r,minY:s,maxY:m}}function C([i,e],o,t){const n=(e-i)*o;if(t){const a=(i+e)/2-n/2;return[a,a+n]}return[i,i+n]}function Pi(i){var l;const{chart:e,data:o,seriesInfos:t,xAxis:n,yAxis:a}=i;if(o==null||o.lines.length===0)return void e.series.clear();const r=new Map,s=new Set(e.series.values),m=o.lines.length;for(let p=0;p<m;p++){const c=o.lines[p];let d=t.get(c.id);d?(d.fill&&s.delete(d.fill),s.delete(d.line)):(d=zi(i,c),d.fill&&e.series.push(d.fill),e.series.push(d.line)),r.set(d.id,d);const f=m-p-1;(l=d.fill)==null||l.set("layer",f),d.line.set("layer",m+f),Xi(i,d,c)}i.seriesInfos=r;for(const p of s)e.series.removeValue(p);n.set("layer",m+1),a.set("layer",m+2)}function Xi({theme:i},e,o){const t=u(o.color.toCss()),n=o.samples??[],a=n.length>0,{line:r,fill:s}=e;r.set("visible",a),r.set("stroke",t),s==null||s.set("visible",a),s==null||s.set("fill",ci.lighten(t,i.seriesFillLighten)),r.data.setAll(n),s==null||s.data.setAll(n)}function zi(i,e){const{id:o}=e,t=k(i,`${xi}-${o}`);t.setAll({dy:e.chartStrokeOffsetY,tooltip:Yi(i)}),t.strokes.template.setAll({strokeWidth:e.chartStrokeWidth});let n=null;return e.chartFillEnabled&&(n=k(i,`${gi}-${o}`),n.fills.template.setAll({fillOpacity:1,visible:!0})),{id:o,line:t,fill:n}}function k(i,e){return mi.new(i.chart.root,{connect:!1,excludeFromTotal:!0,fill:void 0,id:e,stroke:void 0,valueXField:"distance",valueYField:"elevation",xAxis:i.xAxis,yAxis:i.yAxis})}function Yi({theme:i,chart:e}){var a;const o=O.new(e.root,{autoTextColor:!1,forceHidden:!0,getFillFromSprite:!1,getLabelFillFromSprite:!1,pointerOrientation:"vertical",visible:!1}),t=i.seriesTooltipPaddingHorizontal,n=i.seriesTooltipPaddingVertical;return o.label.setAll({fill:u(i.seriesTooltipLabelColor),fontFamily:i.fontFamily,fontSize:i.seriesTooltipFontSize,paddingBottom:n,paddingLeft:t,paddingRight:t,paddingTop:n,textAlign:"start"}),(a=o.get("background"))==null||a.setAll({stroke:void 0,fill:u(i.seriesTooltipBackgroundColor)}),o.adapters.add("dy",r=>{var l;const s=i.seriesTooltipSpacing,m=((l=o.get("pointTo"))==null?void 0:l.y)??0;return(r??0)+(o.y()>m?s:-s)}),o}function Ci(i,e){const{xAxis:o,yAxis:t}=i,n=()=>{e(w(o),w(t))},a=r=>[r.on("start",n),r.on("end",n)];return Z([...a(o),...a(t)])}function w(i){const e=Math.abs((i.get("end")??0)-(i.get("start")??0)),o=e!==0?1/e:1;return Math.abs(1-o)<_()?1:o}function ki(i,e){const{chart:o,xAxis:t,yAxis:n}=i,a=o.get("cursor"),r=o.plotContainer.events,s=l=>{i.pointerIsOver=l,T(i)},m=()=>{s(!1),e(null,null)};return Z([a==null?void 0:a.events.on("cursormoved",()=>{if(!i.pointerIsOver)return;T(i);let l=(a==null?void 0:a.getPrivate("positionX"))??0,p=(a==null?void 0:a.getPrivate("positionY"))??0;const c=i.data;if((c==null?void 0:c.statistics)!=null){const{maxDistance:d,minElevation:f,maxElevation:F}=c.statistics;d!=null&&(l=B(l,H(t),$(t),0,d)),f!=null&&F!=null&&(p=B(p,H(n),$(n),f,F))}e(l,p)}),r.on("pointerover",()=>s(!0)),r.on("pointerout",m),r.on("blur",m)])}function B(i,e,o,t,n){return(e+i*(o-e)-t)/(n-t)}function T(i){const e=wi(i);if(!e)return void i.seriesInfos.forEach(o=>{var t;(t=o.line.get("tooltip"))==null||t.set("forceHidden",!0)});i.seriesInfos.forEach(o=>{const t=o.line.get("tooltip");t.set("forceHidden",!1),t.label.set("text",e)}),i.xAxis.getTooltip().setAll({tooltipText:$i(i)})}function wi(i){const{data:e}=i,o=e==null?void 0:e.lines.map(t=>{var n;return{line:t,y:(n=j(i,t))==null?void 0:n.elevation}}).sort(Bi);return o&&o.length!==0&&o[0].y!=null?o.map(({y:t,line:n})=>Hi(i,n,t)).join(`
`):null}function Bi({y:i},{y:e}){return i==null?1:e==null?-1:e-i}function Hi(i,e,o){const{data:t,messages:n}=i;if(t==null||n==null)return"";const a=v().formatPrecision,r=ui(n.chartTooltip,{name:ti(e,n),elevation:o!=null?G(n,o,t.effectiveUnits.elevation,a):oi});return`[${e.color.toHex()}]●[/] ${r}`}function $i(i){const{data:e,messages:o}=i;if(e==null||o==null)return"";const t=e.lines[0],n=t?j(i,t):null,a=v().formatPrecision;return n!=null?G(o,n.distance,e.effectiveUnits.distance,a):"-"}function U(i,e){const o=ni.new(i.chart.root,{});return o.format=(t,n,a)=>{const{data:r,messages:s}=i;return s==null||r==null||typeof t=="string"?"":`${J(t,{maximumFractionDigits:a})} ${ii(s,r.effectiveUnits[e],"abbr")}`},o}function j({chart:i,xAxis:e},o){const t=o.samples??[];if(t.length===0)return null;const n=i.get("cursor"),a=(n==null?void 0:n.getPrivate("positionX"))??0,r=e.toAxisPosition(a),s=e.positionToValue(r);return K(t,s,m=>m.distance)}function H(i){return i.positionToValue(i.get("start")??0)}function $(i){return i.positionToValue(i.get("end")??1)}function Z(i){return D(i.map(L))}function L(i){return Q(()=>{i==null||i.dispose()})}export{Ao as createChart,Fi as getAdjustedBounds};
