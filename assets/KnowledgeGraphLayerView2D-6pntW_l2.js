import{V as p,fr as m,ac as e,ad as o,fq as a,ag as s}from"./index-DX0rcHuW.js";import{f as n}from"./LayerView2D-YNhPkz7V.js";import{y as l}from"./LayerView-C2s9lN61.js";import"./Container-BuHS0oKS.js";import"./DefaultUI-BM5o-ZLH.js";import"./jsxFactory-DmHi7Kb2.js";import"./uuid-fwrPAdZb.js";import"./UpdatingHandles-CERUeL1P.js";import"./InputManager-abOXR3ru.js";import"./signal-CpmfLcHB.js";import"./Map-BcseqEdU.js";import"./Basemap-CjElSnyL.js";import"./loadAll-8MiqgLTH.js";import"./writeUtils-RiCb1SCd.js";import"./Ground-dhRLerDt.js";import"./CollectionFlattener-Be8YW6oV.js";import"./editableLayers-DuIVmwOk.js";import"./catalogUtils-B2PovfNH.js";import"./basemapUtils-rjdIOXhY.js";import"./TablesMixin-CcZZ6esO.js";import"./GraphicsCollection-BjA_qBYu.js";import"./HeightModelInfo-DaJXTLDg.js";import"./ReactiveMap-r-vujrh9.js";import"./selectionUtils-DYi6daQO.js";import"./IViewEvents-Bci6PjlS.js";import"./interfaces-D6pIddIh.js";import"./screenUtils-BcEL8jIe.js";import"./a11yUtils-BcOnuh2m.js";import"./heightModelInfoUtils-CTi_JiJC.js";import"./arcgisLayerUrl-BpJodxxk.js";import"./ViewingMode-Dodu7ZZk.js";import"./capabilities-C84AMSCg.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-CjDcv_he.js";import"./Compass-S4M9NML1.js";import"./utils-DsJqvptN.js";import"./GoTo-Bv8U0vYJ.js";import"./NavigationToggle-Da_EVApx.js";import"./Zoom-OTCbJYcz.js";import"./EffectView-CZsZ4wVb.js";import"./DisplayObject-I7xo9JVP.js";import"./highlightReasons-BQJ1jGcs.js";import"./Tile-B_ZCIyG8.js";import"./quickselect-D0_cvEX6.js";import"./_commonjsHelpers-DCkdB7M8.js";import"./TileKey-m4M152GY.js";import"./definitions-ByNBSgP9.js";import"./enums-BlUEVwJR.js";import"./Texture-BF0Xf23l.js";import"./ClipRect-DDLZgoLv.js";import"./layerViewUtils-D2JqIDZ8.js";let r=class extends n(l){constructor(t){super(t),this.layerViews=new p}set layerViews(t){this._set("layerViews",m(t,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((t,i)=>t+i.updatingProgress,0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(t){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((t,i)=>this.container.addChildAt(t.container,i))}};e([o({cast:a})],r.prototype,"layerViews",null),e([o({readOnly:!0})],r.prototype,"updatingProgress",null),r=e([s("esri.views.2d.layers.KnowledgeGraphLayerView2D")],r);const nt=r;export{nt as default};
