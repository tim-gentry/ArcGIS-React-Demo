import{ac as a,ad as r,ag as y,cC as m,gq as _,bY as g}from"./index-DX0rcHuW.js";import C from"./Histogram-CfxGl0Ht.js";import{l as w,A as B}from"./Slider-CpGCtdCj.js";import{e as $,B as D,n as v}from"./jsxFactory-DmHi7Kb2.js";import{r as x,s as M,a as T}from"./utils-Cj5nzmhN.js";import{e as F}from"./globalCss-CZa70j6i.js";import"./substitute-e0S7rtIE.js";import"./uuid-fwrPAdZb.js";import"./utils-DbK1m8LJ.js";import"./Basemap-CjElSnyL.js";import"./loadAll-8MiqgLTH.js";import"./writeUtils-RiCb1SCd.js";import"./utils-BbU12Hvz.js";import"./cimSymbolUtils-DzDRYI6s.js";import"./utils-CZ12wTZ2.js";let u=class extends w{constructor(e){super(e),this.average=null,this.bins=null,this.hasTimeData=!1,this.labelFormatFunction=n=>{if(this.hasTimeData)return x(n);const{max:d,min:t,precision:h}=this,l=d-t>10?2:h;return M(parseFloat(n.toFixed(l)))},this.rangeType="equal",this.standardDeviation=null}generateWhereClause(e){const{rangeType:n,state:d,values:t}=this;if(d!=="ready"||!(t!=null&&t.length)||e==null)return null;const h=t[0],l=t.length>1?t[t.length-1]:null;switch(n){case"equal":return`${e} = ${h}`;case"not-equal":return`${e} <> ${h}`;case"less-than":return`${e} < ${h}`;case"greater-than":return`${e} > ${h}`;case"at-least":return`${e} >= ${h}`;case"at-most":return`${e} <= ${h}`;case"between":return`${e} BETWEEN ${h} AND ${l}`;case"not-between":return`${e} NOT BETWEEN ${h} AND ${l}`;default:return null}}};a([r()],u.prototype,"average",void 0),a([r()],u.prototype,"bins",void 0),a([r()],u.prototype,"hasTimeData",void 0),a([r()],u.prototype,"labelFormatFunction",void 0),a([r()],u.prototype,"rangeType",void 0),a([r()],u.prototype,"standardDeviation",void 0),u=a([y("esri.widgets.HistogramRangeSlider.HistogramRangeSliderViewModel")],u);const f=u,p="esri-histogram-range-slider",c={base:p,sliderContainer:`${p}__slider-container`,histogramContainer:`${p}__histogram-container`,rangeTypePrefix:`${p}__range-type--`};let s=class extends D{constructor(e,n){super(e,n),this._barElements=[],this._histogram=null,this._slider=null,this.barCreatedFunction=null,this.dataLines=null,this.dataLineCreatedFunction=null,this.excludedBarColor=new m("#d7e5f0"),this.includedBarColor=new m("#599dd4"),this.messages=null,this.standardDeviationCount=1,this.viewModel=new f}initialize(){const{average:e,bins:n,hasTimeData:d,max:t,min:h,viewModel:l}=this;this._updateBarFill=this._updateBarFill.bind(this),this._histogram=new C({average:e,bins:n,barCreatedFunction:(i,o)=>{i===0&&(this._barElements=[]),this._barElements.push(o),this._updateBarFill(i,o),this.barCreatedFunction&&this.barCreatedFunction(i,o)},dataLines:this._getDataLines(),dataLineCreatedFunction:(i,o)=>{this.dataLineCreatedFunction&&this.dataLineCreatedFunction(i,o)},labelFormatFunction:this.labelFormatFunction,layout:"horizontal",max:t,min:h}),this._slider=new B({labelFormatFunction:this.labelFormatFunction,layout:"horizontal",visibleElements:{labels:!0,rangeLabels:!0},rangeLabelInputsEnabled:!d,viewModel:l}),this.addHandles([this._slider.on("max-change",i=>this.emit("max-change",i)),this._slider.on("min-change",i=>this.emit("min-change",i)),this._slider.on("segment-drag",i=>{this._updateBarFills(),this.emit("segment-drag",i)}),this._slider.on("thumb-change",i=>{this._updateBarFills(),this.emit("thumb-change",i)}),this._slider.on("thumb-drag",i=>{this._updateBarFills(),this.emit("thumb-drag",i)}),g(()=>this.bins,i=>{if(i&&this._histogram.bins){const o=this._histogram.bins.length-i.length;this._barElements.splice(-o,o)}else this._barElements=[];this._histogram.set({bins:i}),this._updateBarFills(),this.scheduleRender()}),g(()=>[this.max,this.min,this.rangeType,this.values],([i,o])=>{this._histogram.set({max:i,min:o}),this._updateBarFills(),this.scheduleRender()}),g(()=>[this.average,this.dataLines,this.standardDeviation,this.standardDeviationCount],([i])=>{this._histogram.set({average:i,dataLines:this._getDataLines()})}),g(()=>this.labelFormatFunction,i=>{this._histogram.set({labelFormatFunction:i})}),g(()=>this.hasTimeData,i=>{this._slider.set({rangeLabelInputsEnabled:!i})})])}get average(){return this.viewModel.average}set average(e){this.viewModel.average=e}get bins(){return this.viewModel.bins}set bins(e){this.viewModel.bins=e}get hasTimeData(){return this.viewModel.hasTimeData}set hasTimeData(e){this.viewModel.hasTimeData=e}get icon(){return"arrow-double-horizontal"}set icon(e){this._overrideIfSome("icon",e)}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get labelFormatFunction(){return this.viewModel.labelFormatFunction}set labelFormatFunction(e){this.viewModel.labelFormatFunction=e}get max(){return this.viewModel.max}set max(e){this.viewModel.max=e}get min(){return this.viewModel.min}set min(e){this.viewModel.min=e}get precision(){return this.viewModel.precision}set precision(e){this.viewModel.precision=e}get rangeType(){return this.viewModel.rangeType}set rangeType(e){this.viewModel.rangeType=e}get standardDeviation(){return this.viewModel.standardDeviation}set standardDeviation(e){this.viewModel.standardDeviation=e}get values(){return this.viewModel.values}set values(e){this.viewModel.values=e}generateWhereClause(e){return this.viewModel.generateWhereClause(e)}render(){const{rangeType:e,viewModel:n,label:d}=this,t=this.classes(c.base,F.widget,`${c.rangeTypePrefix}${e}`,n.state==="disabled"?F.disabled:null);return v("div",{"aria-label":d,class:t},n.state==="disabled"?null:this._renderContent())}_renderContent(){return[this._renderHistogram(),this._renderSlider()]}_renderSlider(){return v("div",{class:c.sliderContainer,key:`${this.id}-slider-container`},this._slider.render())}_renderHistogram(){return v("div",{class:c.histogramContainer},this._histogram.render())}_getDataLines(){return[...this._getStandardDeviationDataLines(),...this.dataLines||[]]}_getStandardDeviationDataLines(){const{average:e,standardDeviation:n,standardDeviationCount:d}=this;return T(n,e,d).map(t=>({value:t}))}_updateBarFills(){this._barElements.forEach((e,n)=>this._updateBarFill(n,e))}_updateBarFill(e,n){var d;n.setAttribute("fill",((d=this._getFillForBar(e))==null?void 0:d.toHex())??"")}_getFillForBar(e){const{bins:n,rangeType:d,values:t}=this;if(e===-1||!(n!=null&&n.length)||!d||!(t!=null&&t.length))return null;const h=n[e];if(!h)return null;const{maxValue:l,minValue:i}=h,o=l-i,b=t[0]>i&&t[0]<l;switch(d){case"equal":case"not-equal":return this.includedBarColor;case"less-than":case"at-most":return b?this._getBlendedColor((t[0]-i)/o):l<=t[0]?this.includedBarColor:this.excludedBarColor;case"greater-than":case"at-least":return b?this._getBlendedColor(1-(t[0]-i)/o):i>=t[0]?this.includedBarColor:this.excludedBarColor;case"between":if(t.length===2)return t[0]>i&&t[0]<l?this._getBlendedColor(1-(t[0]-i)/o):t[1]>i&&t[1]<l?this._getBlendedColor((t[1]-i)/o):i>=t[0]&&l<=t[1]?this.includedBarColor:this.excludedBarColor;break;case"not-between":if(t.length===2)return t[0]>i&&t[0]<l?this._getBlendedColor((t[0]-i)/o):t[1]>i&&t[1]<l?this._getBlendedColor(1-(t[1]-i)/o):i>t[0]&&l<t[1]?this.excludedBarColor:this.includedBarColor}return this.includedBarColor}_getBlendedColor(e){return m.blendColors(this.excludedBarColor,this.includedBarColor,e)}};a([r()],s.prototype,"average",null),a([r()],s.prototype,"barCreatedFunction",void 0),a([r()],s.prototype,"bins",null),a([r()],s.prototype,"dataLines",void 0),a([r()],s.prototype,"dataLineCreatedFunction",void 0),a([r({type:m,json:{type:[_],write:!0}})],s.prototype,"excludedBarColor",void 0),a([r()],s.prototype,"hasTimeData",null),a([r({type:m,json:{type:[_],write:!0}})],s.prototype,"includedBarColor",void 0),a([r()],s.prototype,"icon",null),a([r()],s.prototype,"label",null),a([r()],s.prototype,"labelFormatFunction",null),a([r()],s.prototype,"max",null),a([r(),$("esri/widgets/HistogramRangeSlider/t9n/HistogramRangeSlider")],s.prototype,"messages",void 0),a([r()],s.prototype,"min",null),a([r()],s.prototype,"precision",null),a([r()],s.prototype,"rangeType",null),a([r()],s.prototype,"standardDeviation",null),a([r()],s.prototype,"standardDeviationCount",void 0),a([r()],s.prototype,"values",null),a([r()],s.prototype,"viewModel",void 0),s=a([y("esri.widgets.HistogramRangeSlider")],s);const O=s;export{O as default};
