import{eH as a}from"./index-DX0rcHuW.js";import{o as u,n as f,r as h,a as c}from"./SnappingManager-C8RCylzd.js";import{n as l}from"./PointSnappingHint-5GPoViz2.js";class g{draw(n,i){const o=m(n),e=this.sortUniqueHints(o),t=[];for(const s of e)s instanceof u&&t.push(this.visualizeIntersectionPoint(s,i)),s instanceof f&&t.push(this.visualizeLine(s,i)),s instanceof h&&t.push(this.visualizeParallelSign(s,i)),s instanceof c&&t.push(this.visualizeRightAngleQuad(s,i)),s instanceof l&&t.push(this.visualizePoint(s,i));return a(t)}sortUniqueHints(n){return n}}function m(r){const n=[];for(const i of r){let o=!0;for(const e of n)if(i.equals(e)){o=!1;break}o&&n.push(i)}return n}export{g as r};
