import{l as r}from"./jsxFactory-DmHi7Kb2.js";import{w as s}from"./dom-Dv5tDaqe.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.2
 */const n=r;function i(e){return"opened"in e?e.opened:e.open}function l(e){n(()=>{e.transitionEl&&s(e.transitionEl,e.openTransitionProp,()=>{i(e)?e.onBeforeOpen():e.onBeforeClose()},()=>{i(e)?e.onOpen():e.onClose()})})}export{l as o};
