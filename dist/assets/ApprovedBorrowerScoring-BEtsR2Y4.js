import{r as l,d as ee,j as n,L as sa}from"./index-BEBeRwjt.js";import{c as S,P as U,Q as la,U as oa,V as B,W as ca,_ as da,$ as De,a0 as pa,a1 as ua,v as _,a2 as ma,a3 as fa,a4 as va,a5 as ba,s as J,a6 as ha,a7 as ga,a8 as xa,a9 as ya,aa as Ce,ab as Aa,ac as ja,ad as Pa,h as ae,ae as Na,af as te,ag as Ia,ah as ka,ai as wa,r as re,H as ie,R as Re,aj as Ea,D as ue,ak as Le,o as F,al as Oa,L as M,Z as me,j as Te,y as _e,J as Me,am as Sa,z,an as K,ao as H,ap as Da,aq as Ca,ar as Ra,as as La,at as Ta,au as _a,av as Ma,F as za,B as ze,aw as Ka,ax as X,ay as de,az as ge,aA as q,aB as Wa,aC as $a,aD as Ke,aE as Ba,aF as Ga,b as We,d as $e,aG as Fa,i as Be,g as xe,e as Va,aH as Xa,p as Ua,u as Ge,S as Ja,f as Ya,aI as Ha,n as qa,m as Za,aJ as Qa,k as et,l as at,q as tt,t as rt,G as it,A as ye,w as Ae,aK as nt,x as st,aL as lt,C as ot,E as ct,I as dt,aM as Z,aN as pt,aO as ut,aP as mt,aQ as ft,aR as vt,aS as bt,aT as ht,aU as gt,M as Fe,K as xt,N as yt,O as At,X as jt,Y as Pt,T as Nt}from"./CartesianChart-C7ps2EJs.js";var ne=e=>null;ne.displayName="Cell";var Ve=e=>e.graphicalItems.polarItems,It=S([U,la],oa),se=S([Ve,B,It],ca),kt=S([se],da),le=S([kt,De],pa),wt=S([le,B,se],ua);S([le,B,se],(e,a,t)=>t.length>0?e.flatMap(r=>t.flatMap(i=>{var s,c=_(r,(s=a.dataKey)!==null&&s!==void 0?s:i.dataKey);return{value:c,errorDomain:[]}})).filter(Boolean):(a==null?void 0:a.dataKey)!=null?e.map(r=>({value:_(r,a.dataKey),errorDomain:[]})):e.map(r=>({value:r,errorDomain:[]})));var je=()=>{},Et=S([le,B,se,ma,U],fa),Ot=S([B,va,ba,je,Et,je,J,U],ha),Xe=S([B,J,le,wt,ga,U,Ot],xa),St=S([Xe,ya,Ce],Aa),Dt=S([B,Xe,St,U],ja);S([Ce,Dt],Pa);function Pe(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Ne(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?Pe(Object(t),!0).forEach(function(r){Ct(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Pe(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Ct(e,a,t){return(a=Rt(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function Rt(e){var a=Lt(e,"string");return typeof a=="symbol"?a:a+""}function Lt(e,a){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,a);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}var Tt=(e,a)=>a,fe=S([Ve,Tt],(e,a)=>e.filter(t=>t.type==="pie").find(t=>t.id===a)),_t=[],ve=(e,a,t)=>(t==null?void 0:t.length)===0?_t:t,Ue=S([De,fe,ve],(e,a,t)=>{var{chartData:r}=e;if(a!=null){var i;if((a==null?void 0:a.data)!=null&&a.data.length>0?i=a.data:i=r,(!i||!i.length)&&t!=null&&(i=t.map(s=>Ne(Ne({},a.presentationProps),s.props))),i!=null)return i}}),Mt=S([Ue,fe,ve],(e,a,t)=>{if(!(e==null||a==null))return e.map((r,i)=>{var s,c=_(r,a.nameKey,a.name),o;return t!=null&&(s=t[i])!==null&&s!==void 0&&(s=s.props)!==null&&s!==void 0&&s.fill?o=t[i].props.fill:typeof r=="object"&&r!=null&&"fill"in r?o=r.fill:o=a.fill,{value:ae(c,a.dataKey),color:o,payload:r,type:a.legendType}})}),zt=S([Ue,fe,ve,Na],(e,a,t,r)=>{if(!(a==null||e==null))return or({offset:r,pieSettings:a,displayedData:e,cells:t})}),Kt=(e,a,t)=>{var r=te();return(i,s)=>c=>{e==null||e(i,s,c),r(Ia({activeIndex:String(s),activeDataKey:a,activeCoordinate:i.tooltipPosition,activeGraphicalItemId:t}))}},Wt=e=>{var a=te();return(t,r)=>i=>{e==null||e(t,r,i),a(ka())}},$t=(e,a,t)=>{var r=te();return(i,s)=>c=>{e==null||e(i,s,c),r(wa({activeIndex:String(s),activeDataKey:a,activeCoordinate:i.tooltipPosition,activeGraphicalItemId:t}))}},Bt=["key"],Gt=["onMouseEnter","onClick","onMouseLeave"],Ft=["id"],Vt=["id"];function W(){return W=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},W.apply(null,arguments)}function oe(e,a){if(e==null)return{};var t,r,i=Xt(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function Xt(e,a){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(a.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function Ie(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function I(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?Ie(Object(t),!0).forEach(function(r){Ut(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ie(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Ut(e,a,t){return(a=Jt(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function Jt(e){var a=Yt(e,"string");return typeof a=="symbol"?a:a+""}function Yt(e,a){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,a);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function Ht(e){var a=l.useMemo(()=>Le(e.children,ne),[e.children]),t=F(r=>Mt(r,e.id,a));return t==null?null:l.createElement(Oa,{legendPayload:t})}function qt(e){if(!(e==null||typeof e=="boolean"||typeof e=="function")){if(l.isValidElement(e)){var a,t=(a=e.props)===null||a===void 0?void 0:a.fill;return typeof t=="string"?t:void 0}var{fill:r}=e;return typeof r=="string"?r:void 0}}var Zt=l.memo(e=>{var{dataKey:a,nameKey:t,sectors:r,stroke:i,strokeWidth:s,fill:c,name:o,hide:d,tooltipType:u,id:m,activeShape:v}=e,p=qt(v),b=r.map(P=>{var x=P.tooltipPayload;return p==null||x==null?x:x.map(f=>I(I({},f),{},{color:p,fill:p}))}),A={dataDefinedOnItem:b,getPosition:P=>{var x;return(x=r[Number(P)])===null||x===void 0?void 0:x.tooltipPosition},settings:{stroke:i,strokeWidth:s,fill:c,dataKey:a,nameKey:t,name:ae(o,a),hide:d,type:u,color:c,unit:"",graphicalItemId:m}};return l.createElement(Te,{tooltipEntrySettings:A})}),Qt=(e,a)=>e>a?"start":e<a?"end":"middle",er=(e,a,t)=>typeof a=="function"?X(a(e),t,t*.8):X(a,t,t*.8),ar=(e,a,t)=>{var{top:r,left:i,width:s,height:c}=a,o=Ka(s,c),d=i+X(e.cx,s,s/2),u=r+X(e.cy,c,c/2),m=X(e.innerRadius,o,0),v=er(t,e.outerRadius,o),p=e.maxRadius||Math.sqrt(s*s+c*c)/2;return{cx:d,cy:u,innerRadius:m,outerRadius:v,maxRadius:p}},tr=(e,a)=>{var t=H(a-e),r=Math.min(Math.abs(a-e),360);return t*r},rr=(e,a)=>{if(l.isValidElement(e))return l.cloneElement(e,a);if(typeof e=="function")return e(a);var t=ee("recharts-pie-label-line",typeof e!="boolean"?e.className:""),{key:r}=a,i=oe(a,Bt);return l.createElement(q,W({},i,{type:"linear",className:t}))},ir=(e,a,t)=>{if(l.isValidElement(e))return l.cloneElement(e,a);var r=t;if(typeof e=="function"&&(r=e(a),l.isValidElement(r)))return r;var i=ee("recharts-pie-label-text",Wa(e));return l.createElement($a,W({},a,{alignmentBaseline:"middle",className:i}),r)};function nr(e){var{sectors:a,props:t,showLabels:r}=e,{label:i,labelLine:s,dataKey:c}=t;if(!r||!i||!a)return null;var o=ie(t),d=ge(i),u=ge(s),m=typeof i=="object"&&"offsetRadius"in i&&typeof i.offsetRadius=="number"&&i.offsetRadius||20,v=a.map((p,b)=>{var A=(p.startAngle+p.endAngle)/2,P=de(p.cx,p.cy,p.outerRadius+m,A),x=I(I(I(I({},o),p),{},{stroke:"none"},d),{},{index:b,textAnchor:Qt(P.x,p.cx)},P),f=I(I(I(I({},o),p),{},{fill:"none",stroke:p.fill},u),{},{index:b,points:[de(p.cx,p.cy,p.outerRadius,A),P],key:"line"});return l.createElement(me,{zIndex:ue.label,key:"label-".concat(p.startAngle,"-").concat(p.endAngle,"-").concat(p.midAngle,"-").concat(b)},l.createElement(M,null,s&&rr(s,f),ir(i,x,_(p,c))))});return l.createElement(M,{className:"recharts-pie-labels"},v)}function sr(e){var{sectors:a,props:t,showLabels:r}=e,{label:i}=t;return typeof i=="object"&&i!=null&&"position"in i?l.createElement(ze,{label:i}):l.createElement(nr,{sectors:a,props:t,showLabels:r})}function lr(e){var{sectors:a,activeShape:t,inactiveShape:r,allOtherPieProps:i,shape:s,id:c}=e,o=F(Ca),d=F(Ra),u=F(La),{onMouseEnter:m,onClick:v,onMouseLeave:p}=i,b=oe(i,Gt),A=Kt(m,i.dataKey,c),P=Wt(p),x=$t(v,i.dataKey,c);return a==null||a.length===0?null:l.createElement(l.Fragment,null,a.map((f,k)=>{if((f==null?void 0:f.startAngle)===0&&(f==null?void 0:f.endAngle)===0&&a.length!==1)return null;var E=u==null||u===c,g=String(k)===o&&(d==null||i.dataKey===d)&&E,N=o?r:null,j=t&&g?t:N,y=I(I({},f),{},{stroke:f.stroke,tabIndex:-1,[_a]:k,[Ta]:c});return l.createElement(M,W({key:"sector-".concat(f==null?void 0:f.startAngle,"-").concat(f==null?void 0:f.endAngle,"-").concat(f.midAngle,"-").concat(k),tabIndex:-1,className:"recharts-pie-sector"},Ma(b,f,k),{onMouseEnter:A(f,k),onMouseLeave:P(f,k),onClick:x(f,k)}),l.createElement(za,W({option:s??j,index:k,shapeType:"sector",isActive:g},y)))}))}function or(e){var a,{pieSettings:t,displayedData:r,cells:i,offset:s}=e,{cornerRadius:c,startAngle:o,endAngle:d,dataKey:u,nameKey:m,tooltipType:v}=t,p=Math.abs(t.minAngle),b=tr(o,d),A=Math.abs(b),P=r.length<=1?0:(a=t.paddingAngle)!==null&&a!==void 0?a:0,x=r.filter(j=>_(j,u,0)!==0).length,f=(A>=360?x:x-1)*P,k=A-x*p-f,E=r.reduce((j,y)=>{var h=_(y,u,0);return j+(K(h)?h:0)},0),g;if(E>0){var N;g=r.map((j,y)=>{var h=_(j,u,0),R=_(j,m,y),C=ar(t,s,j),D=(K(h)?h:0)/E,w,O=I(I({},j),i&&i[y]&&i[y].props),L=O!=null&&"fill"in O&&typeof O.fill=="string"?O.fill:t.fill;y?w=N.endAngle+H(b)*P*(h!==0?1:0):w=o;var T=w+H(b)*((h!==0?p:0)+D*k),Y=(w+T)/2,V=(C.innerRadius+C.outerRadius)/2,ia=[{name:R,value:h,payload:O,dataKey:u,type:v,color:L,fill:L,graphicalItemId:t.id}],na=de(C.cx,C.cy,V,Y);return N=I(I(I(I({},t.presentationProps),{},{percent:D,cornerRadius:typeof c=="string"?parseFloat(c):c,name:R,tooltipPayload:ia,midAngle:Y,middleRadius:V,tooltipPosition:na},O),C),{},{value:h,dataKey:u,startAngle:w,endAngle:T,payload:O,paddingAngle:H(b)*P}),N})}return g}function cr(e){var{showLabels:a,sectors:t,children:r}=e,i=l.useMemo(()=>!a||!t?[]:t.map(s=>({value:s.value,payload:s.payload,clockWise:!1,parentViewBox:void 0,viewBox:{cx:s.cx,cy:s.cy,innerRadius:s.innerRadius,outerRadius:s.outerRadius,startAngle:s.startAngle,endAngle:s.endAngle,clockWise:!1},fill:s.fill})),[t,a]);return l.createElement(Da,{value:a?i:void 0},r)}function dr(e){var{props:a,previousSectorsRef:t,id:r}=e,{sectors:i,isAnimationActive:s,animationBegin:c,animationDuration:o,animationEasing:d,activeShape:u,inactiveShape:m,onAnimationStart:v,onAnimationEnd:p}=a,b=_e(a,"recharts-pie-"),A=t.current,[P,x]=l.useState(!1),f=l.useCallback(()=>{typeof p=="function"&&p(),x(!1)},[p]),k=l.useCallback(()=>{typeof v=="function"&&v(),x(!0)},[v]);return l.createElement(cr,{showLabels:!P,sectors:i},l.createElement(Me,{animationId:b,begin:c,duration:o,isActive:s,easing:d,onAnimationStart:k,onAnimationEnd:f,key:b},E=>{var g,N=[],j=i&&i[0],y=(g=j==null?void 0:j.startAngle)!==null&&g!==void 0?g:0;return i==null||i.forEach((h,R)=>{var C=A&&A[R],D=R>0?Sa(h,"paddingAngle",0):0;if(C){var w=z(C.endAngle-C.startAngle,h.endAngle-h.startAngle,E),O=I(I({},h),{},{startAngle:y+D,endAngle:y+w+D});N.push(O),y=O.endAngle}else{var{endAngle:L,startAngle:T}=h,Y=z(0,L-T,E),V=I(I({},h),{},{startAngle:y+D,endAngle:y+Y+D});N.push(V),y=V.endAngle}}),t.current=N,l.createElement(M,null,l.createElement(lr,{sectors:N,activeShape:u,inactiveShape:m,allOtherPieProps:a,shape:a.shape,id:r}))}),l.createElement(sr,{showLabels:!P,sectors:i,props:a}),a.children)}var pr={animationBegin:400,animationDuration:1500,animationEasing:"ease",cx:"50%",cy:"50%",dataKey:"value",endAngle:360,fill:"#808080",hide:!1,innerRadius:0,isAnimationActive:"auto",label:!1,labelLine:!0,legendType:"rect",minAngle:0,nameKey:"name",outerRadius:"80%",paddingAngle:0,rootTabIndex:0,startAngle:0,stroke:"#fff",zIndex:ue.area};function ur(e){var{id:a}=e,t=oe(e,Ft),{hide:r,className:i,rootTabIndex:s}=e,c=l.useMemo(()=>Le(e.children,ne),[e.children]),o=F(m=>zt(m,a,c)),d=l.useRef(null),u=ee("recharts-pie",i);return r||o==null?(d.current=null,l.createElement(M,{tabIndex:s,className:u})):l.createElement(me,{zIndex:e.zIndex},l.createElement(Zt,{dataKey:e.dataKey,nameKey:e.nameKey,sectors:o,stroke:e.stroke,strokeWidth:e.strokeWidth,fill:e.fill,name:e.name,hide:e.hide,tooltipType:e.tooltipType,id:a,activeShape:e.activeShape}),l.createElement(M,{tabIndex:s,className:u},l.createElement(dr,{props:I(I({},t),{},{sectors:o}),previousSectorsRef:d,id:a})))}function mr(e){var a=re(e,pr),{id:t}=a,r=oe(a,Vt),i=ie(r);return l.createElement(Re,{id:t,type:"pie"},s=>l.createElement(l.Fragment,null,l.createElement(Ea,{type:"pie",id:s,data:r.data,dataKey:r.dataKey,hide:r.hide,angleAxisId:0,radiusAxisId:0,name:r.name,nameKey:r.nameKey,tooltipType:r.tooltipType,legendType:r.legendType,fill:r.fill,cx:r.cx,cy:r.cy,startAngle:r.startAngle,endAngle:r.endAngle,paddingAngle:r.paddingAngle,minAngle:r.minAngle,innerRadius:r.innerRadius,outerRadius:r.outerRadius,cornerRadius:r.cornerRadius,presentationProps:i,maxRadius:a.maxRadius}),l.createElement(Ht,W({},r,{id:s})),l.createElement(ur,W({},r,{id:s}))))}var Je=mr;Je.displayName="Pie";function be(e,a){var t,r;return(t=(r=e.graphicalItems.cartesianItems.find(i=>i.id===a))===null||r===void 0?void 0:r.xAxisId)!==null&&t!==void 0?t:Ke}function he(e,a){var t,r;return(t=(r=e.graphicalItems.cartesianItems.find(i=>i.id===a))===null||r===void 0?void 0:r.yAxisId)!==null&&t!==void 0?t:Ke}var Ye=(e,a,t)=>We(e,"xAxis",be(e,a),t),He=(e,a,t)=>$e(e,"xAxis",be(e,a),t),qe=(e,a,t)=>We(e,"yAxis",he(e,a),t),Ze=(e,a,t)=>$e(e,"yAxis",he(e,a),t),fr=S([J,Ye,qe,He,Ze],(e,a,t,r,i)=>Be(e,"xAxis")?xe(a,r,!1):xe(t,i,!1)),vr=(e,a)=>a,Qe=S([Va,vr],(e,a)=>e.filter(t=>t.type==="area").find(t=>t.id===a)),ea=e=>{var a=J(e),t=Be(a,"xAxis");return t?"yAxis":"xAxis"},br=(e,a)=>{var t=ea(e);return t==="yAxis"?he(e,a):be(e,a)},hr=(e,a,t)=>Xa(e,ea(e),br(e,a),t),gr=S([Qe,hr],(e,a)=>{var t;if(!(e==null||a==null)){var{stackId:r}=e,i=Fa(e);if(!(r==null||i==null)){var s=(t=a[r])===null||t===void 0?void 0:t.stackedData,c=s==null?void 0:s.find(o=>o.key===i);if(c!=null)return c.map(o=>[o[0],o[1]])}}}),xr=S([J,Ye,qe,He,Ze,gr,Ba,fr,Qe,Ga],(e,a,t,r,i,s,c,o,d,u)=>{var{chartData:m,dataStartIndex:v,dataEndIndex:p}=c;if(!(d==null||e!=="horizontal"&&e!=="vertical"||a==null||t==null||r==null||i==null||r.length===0||i.length===0||o==null)){var{data:b}=d,A;if(b&&b.length>0?A=b:A=m==null?void 0:m.slice(v,p+1),A!=null)return Kr({layout:e,xAxis:a,yAxis:t,xAxisTicks:r,yAxisTicks:i,dataStartIndex:v,areaSettings:d,stackedData:s,displayedData:A,chartBaseValue:u,bandSize:o})}}),yr=["id"],Ar=["activeDot","animationBegin","animationDuration","animationEasing","connectNulls","dot","fill","fillOpacity","hide","isAnimationActive","legendType","stroke","xAxisId","yAxisId"];function $(){return $=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},$.apply(null,arguments)}function aa(e,a){if(e==null)return{};var t,r,i=jr(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function jr(e,a){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(a.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function ke(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function G(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?ke(Object(t),!0).forEach(function(r){Pr(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ke(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Pr(e,a,t){return(a=Nr(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function Nr(e){var a=Ir(e,"string");return typeof a=="symbol"?a:a+""}function Ir(e,a){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,a);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function Q(e,a){return e&&e!=="none"?e:a}var kr=e=>{var{dataKey:a,name:t,stroke:r,fill:i,legendType:s,hide:c}=e;return[{inactive:c,dataKey:a,type:s,color:Q(r,i),value:ae(t,a),payload:e}]},wr=l.memo(e=>{var{dataKey:a,data:t,stroke:r,strokeWidth:i,fill:s,name:c,hide:o,unit:d,tooltipType:u,id:m}=e,v={dataDefinedOnItem:t,getPosition:qa,settings:{stroke:r,strokeWidth:i,fill:s,dataKey:a,nameKey:void 0,name:ae(c,a),hide:o,type:u,color:Q(r,s),unit:d,graphicalItemId:m}};return l.createElement(Te,{tooltipEntrySettings:v})});function Er(e){var{clipPathId:a,points:t,props:r}=e,{needClip:i,dot:s,dataKey:c}=r,o=ie(r);return l.createElement(dt,{points:t,dot:s,className:"recharts-area-dots",dotClassName:"recharts-area-dot",dataKey:c,baseProps:o,needClip:i,clipPathId:a})}function Or(e){var{showLabels:a,children:t,points:r}=e,i=r.map(s=>{var c,o,d={x:(c=s.x)!==null&&c!==void 0?c:0,y:(o=s.y)!==null&&o!==void 0?o:0,width:0,lowerWidth:0,upperWidth:0,height:0};return G(G({},d),{},{value:s.value,payload:s.payload,parentViewBox:void 0,viewBox:d,fill:void 0})});return l.createElement(ot,{value:a?i:void 0},t)}function we(e){var{points:a,baseLine:t,needClip:r,clipPathId:i,props:s}=e,{layout:c,type:o,stroke:d,connectNulls:u,isRange:m}=s,{id:v}=s,p=aa(s,yr),b=ie(p),A=ct(p);return l.createElement(l.Fragment,null,(a==null?void 0:a.length)>1&&l.createElement(M,{clipPath:r?"url(#clipPath-".concat(i,")"):void 0},l.createElement(q,$({},A,{id:v,points:a,connectNulls:u,type:o,baseLine:t,layout:c,stroke:"none",className:"recharts-area-area"})),d!=="none"&&l.createElement(q,$({},b,{className:"recharts-area-curve",layout:c,type:o,connectNulls:u,fill:"none",points:a})),d!=="none"&&m&&Array.isArray(t)&&l.createElement(q,$({},b,{className:"recharts-area-curve",layout:c,type:o,connectNulls:u,fill:"none",points:t}))),l.createElement(Er,{points:a,props:p,clipPathId:i}))}function Sr(e){var a,t,{alpha:r,baseLine:i,points:s,strokeWidth:c}=e,o=(a=s[0])===null||a===void 0?void 0:a.y,d=(t=s[s.length-1])===null||t===void 0?void 0:t.y;if(!Z(o)||!Z(d))return null;var u=r*Math.abs(o-d),m=Math.max(...s.map(v=>v.x||0));return K(i)?m=Math.max(i,m):i&&Array.isArray(i)&&i.length&&(m=Math.max(...i.map(v=>v.x||0),m)),K(m)?l.createElement("rect",{x:0,y:o<d?o:o-u,width:m+(c?parseInt("".concat(c),10):1),height:Math.floor(u)}):null}function Dr(e){var a,t,{alpha:r,baseLine:i,points:s,strokeWidth:c}=e,o=(a=s[0])===null||a===void 0?void 0:a.x,d=(t=s[s.length-1])===null||t===void 0?void 0:t.x;if(!Z(o)||!Z(d))return null;var u=r*Math.abs(o-d),m=Math.max(...s.map(v=>v.y||0));return K(i)?m=Math.max(i,m):i&&Array.isArray(i)&&i.length&&(m=Math.max(...i.map(v=>v.y||0),m)),K(m)?l.createElement("rect",{x:o<d?o:o-u,y:0,width:u,height:Math.floor(m+(c?parseInt("".concat(c),10):1))}):null}function Cr(e){var{alpha:a,layout:t,points:r,baseLine:i,strokeWidth:s}=e;return t==="vertical"?l.createElement(Sr,{alpha:a,points:r,baseLine:i,strokeWidth:s}):l.createElement(Dr,{alpha:a,points:r,baseLine:i,strokeWidth:s})}function Rr(e){var{needClip:a,clipPathId:t,props:r,previousPointsRef:i,previousBaselineRef:s}=e,{points:c,baseLine:o,isAnimationActive:d,animationBegin:u,animationDuration:m,animationEasing:v,onAnimationStart:p,onAnimationEnd:b}=r,A=l.useMemo(()=>({points:c,baseLine:o}),[c,o]),P=_e(A,"recharts-area-"),x=nt(),[f,k]=l.useState(!1),E=!f,g=l.useCallback(()=>{typeof b=="function"&&b(),k(!1)},[b]),N=l.useCallback(()=>{typeof p=="function"&&p(),k(!0)},[p]);if(x==null)return null;var j=i.current,y=s.current;return l.createElement(Or,{showLabels:E,points:c},r.children,l.createElement(Me,{animationId:P,begin:u,duration:m,isActive:d,easing:v,onAnimationEnd:g,onAnimationStart:N,key:P},h=>{if(j){var R=j.length/c.length,C=h===1?c:c.map((w,O)=>{var L=Math.floor(O*R);if(j[L]){var T=j[L];return G(G({},w),{},{x:z(T.x,w.x,h),y:z(T.y,w.y,h)})}return w}),D;return K(o)?D=z(y,o,h):st(o)||lt(o)?D=z(y,0,h):D=o.map((w,O)=>{var L=Math.floor(O*R);if(Array.isArray(y)&&y[L]){var T=y[L];return G(G({},w),{},{x:z(T.x,w.x,h),y:z(T.y,w.y,h)})}return w}),h>0&&(i.current=C,s.current=D),l.createElement(we,{points:C,baseLine:D,needClip:a,clipPathId:t,props:r})}return h>0&&(i.current=c,s.current=o),l.createElement(M,null,d&&l.createElement("defs",null,l.createElement("clipPath",{id:"animationClipPath-".concat(t)},l.createElement(Cr,{alpha:h,points:c,baseLine:o,layout:x,strokeWidth:r.strokeWidth}))),l.createElement(M,{clipPath:"url(#animationClipPath-".concat(t,")")},l.createElement(we,{points:c,baseLine:o,needClip:a,clipPathId:t,props:r})))}),l.createElement(ze,{label:r.label}))}function Lr(e){var{needClip:a,clipPathId:t,props:r}=e,i=l.useRef(null),s=l.useRef();return l.createElement(Rr,{needClip:a,clipPathId:t,props:r,previousPointsRef:i,previousBaselineRef:s})}class Tr extends l.PureComponent{render(){var{hide:a,dot:t,points:r,className:i,top:s,left:c,needClip:o,xAxisId:d,yAxisId:u,width:m,height:v,id:p,baseLine:b,zIndex:A}=this.props;if(a)return null;var P=ee("recharts-area",i),x=p,{r:f,strokeWidth:k}=tt(t),E=rt(t),g=f*2+k,N=o?"url(#clipPath-".concat(E?"":"dots-").concat(x,")"):void 0;return l.createElement(me,{zIndex:A},l.createElement(M,{className:P},o&&l.createElement("defs",null,l.createElement(it,{clipPathId:x,xAxisId:d,yAxisId:u}),!E&&l.createElement("clipPath",{id:"clipPath-dots-".concat(x)},l.createElement("rect",{x:c-g/2,y:s-g/2,width:m+g,height:v+g}))),l.createElement(Lr,{needClip:o,clipPathId:x,props:this.props})),l.createElement(ye,{points:r,mainColor:Q(this.props.stroke,this.props.fill),itemDataKey:this.props.dataKey,activeDot:this.props.activeDot,clipPath:N}),this.props.isRange&&Array.isArray(b)&&l.createElement(ye,{points:b,mainColor:Q(this.props.stroke,this.props.fill),itemDataKey:this.props.dataKey,activeDot:this.props.activeDot,clipPath:N}))}}var _r={activeDot:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",connectNulls:!1,dot:!1,fill:"#3182bd",fillOpacity:.6,hide:!1,isAnimationActive:"auto",legendType:"line",stroke:"#3182bd",strokeWidth:1,type:"linear",label:!1,xAxisId:0,yAxisId:0,zIndex:ue.area};function Mr(e){var a,{activeDot:t,animationBegin:r,animationDuration:i,animationEasing:s,connectNulls:c,dot:o,fill:d,fillOpacity:u,hide:m,isAnimationActive:v,legendType:p,stroke:b,xAxisId:A,yAxisId:P}=e,x=aa(e,Ar),f=Za(),k=Qa(),{needClip:E}=et(A,P),g=Ge(),{points:N,isRange:j,baseLine:y}=(a=F(O=>xr(O,e.id,g)))!==null&&a!==void 0?a:{},h=at();if(f!=="horizontal"&&f!=="vertical"||h==null||k!=="AreaChart"&&k!=="ComposedChart")return null;var{height:R,width:C,x:D,y:w}=h;return!N||!N.length?null:l.createElement(Tr,$({},x,{activeDot:t,animationBegin:r,animationDuration:i,animationEasing:s,baseLine:y,connectNulls:c,dot:o,fill:d,fillOpacity:u,height:R,hide:m,layout:f,isAnimationActive:v,isRange:j,legendType:p,needClip:E,points:N,stroke:b,width:C,left:D,top:w,xAxisId:A,yAxisId:P}))}var zr=(e,a,t,r,i)=>{var s=t??a;if(K(s))return s;var c=e==="horizontal"?i:r,o=c.scale.domain();if(c.type==="number"){var d=Math.max(o[0],o[1]),u=Math.min(o[0],o[1]);return s==="dataMin"?u:s==="dataMax"||d<0?d:Math.max(Math.min(o[0],o[1]),0)}return s==="dataMin"?o[0]:s==="dataMax"?o[1]:o[0]};function Kr(e){var{areaSettings:{connectNulls:a,baseValue:t,dataKey:r},stackedData:i,layout:s,chartBaseValue:c,xAxis:o,yAxis:d,displayedData:u,dataStartIndex:m,xAxisTicks:v,yAxisTicks:p,bandSize:b}=e,A=i&&i.length,P=zr(s,c,t,o,d),x=s==="horizontal",f=!1,k=u.map((g,N)=>{var j,y,h,R;if(A)R=i[m+N];else{var C=_(g,r);Array.isArray(C)?(R=C,f=!0):R=[P,C]}var D=(j=(y=R)===null||y===void 0?void 0:y[1])!==null&&j!==void 0?j:null,w=D==null||A&&!a&&_(g,r)==null;if(x){var O;return{x:Ae({axis:o,ticks:v,bandSize:b,entry:g,index:N}),y:w?null:(O=d.scale.map(D))!==null&&O!==void 0?O:null,value:R,payload:g}}return{x:w?null:(h=o.scale.map(D))!==null&&h!==void 0?h:null,y:Ae({axis:d,ticks:p,bandSize:b,entry:g,index:N}),value:R,payload:g}}),E;return A||f?E=k.map(g=>{var N,j=Array.isArray(g.value)?g.value[0]:null;if(x){var y;return{x:g.x,y:j!=null&&g.y!=null&&(y=d.scale.map(j))!==null&&y!==void 0?y:null,payload:g.payload}}return{x:j!=null&&(N=o.scale.map(j))!==null&&N!==void 0?N:null,y:g.y,payload:g.payload}}):E=x?d.scale.map(P):o.scale.map(P),{points:k,baseLine:E??0,isRange:f}}function Wr(e){var a=re(e,_r),t=Ge();return l.createElement(Re,{id:a.id,type:"area"},r=>l.createElement(l.Fragment,null,l.createElement(Ja,{legendPayload:kr(a)}),l.createElement(wr,{dataKey:a.dataKey,data:a.data,stroke:a.stroke,strokeWidth:a.strokeWidth,fill:a.fill,name:a.name,hide:a.hide,unit:a.unit,tooltipType:a.tooltipType,id:r}),l.createElement(Ya,{type:"area",id:r,data:a.data,dataKey:a.dataKey,xAxisId:a.xAxisId,yAxisId:a.yAxisId,zAxisId:0,stackId:Ha(a.stackId),hide:a.hide,barSize:void 0,baseValue:a.baseValue,isPanorama:t,connectNulls:a.connectNulls}),l.createElement(Mr,$({},a,{id:r}))))}var ta=l.memo(Wr,Ua);ta.displayName="Area";function $r(e){var a=te();return l.useEffect(()=>{a(pt(e))},[a,e]),null}var Br=["layout"];function pe(){return pe=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},pe.apply(null,arguments)}function Gr(e,a){if(e==null)return{};var t,r,i=Fr(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function Fr(e,a){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(a.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function Ee(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Vr(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?Ee(Object(t),!0).forEach(function(r){Xr(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ee(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Xr(e,a,t){return(a=Ur(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function Ur(e){var a=Jr(e,"string");return typeof a=="symbol"?a:a+""}function Jr(e,a){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,a);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}var Yr={top:5,right:5,bottom:5,left:5},ra=Vr({accessibilityLayer:!0,stackOffset:"none",barCategoryGap:"10%",barGap:4,margin:Yr,reverseStackOrder:!1,syncMethod:"index",layout:"radial",responsive:!1,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"},gt),Hr=l.forwardRef(function(a,t){var r,i=re(a.categoricalChartProps,ra),{layout:s}=i,c=Gr(i,Br),{chartName:o,defaultTooltipEventType:d,validateTooltipEventTypes:u,tooltipPayloadSearcher:m}=a,v={chartName:o,defaultTooltipEventType:d,validateTooltipEventTypes:u,tooltipPayloadSearcher:m,eventEmitter:void 0};return l.createElement(ut,{preloadedState:{options:v},reduxStoreName:(r=i.id)!==null&&r!==void 0?r:o},l.createElement(mt,{chartData:i.data}),l.createElement(ft,{layout:s,margin:i.margin}),l.createElement(vt,{throttleDelay:i.throttleDelay,throttledEvents:i.throttledEvents}),l.createElement(bt,{baseValue:void 0,accessibilityLayer:i.accessibilityLayer,barCategoryGap:i.barCategoryGap,maxBarSize:i.maxBarSize,stackOffset:i.stackOffset,barGap:i.barGap,barSize:i.barSize,syncId:i.syncId,syncMethod:i.syncMethod,className:i.className,reverseStackOrder:i.reverseStackOrder}),l.createElement($r,{cx:i.cx,cy:i.cy,startAngle:i.startAngle,endAngle:i.endAngle,innerRadius:i.innerRadius,outerRadius:i.outerRadius}),l.createElement(ht,pe({},c,{ref:t})))});function Oe(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Se(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?Oe(Object(t),!0).forEach(function(r){qr(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Oe(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function qr(e,a,t){return(a=Zr(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function Zr(e){var a=Qr(e,"string");return typeof a=="symbol"?a:a+""}function Qr(e,a){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,a);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}var ei=["item"],ai=Se(Se({},ra),{},{layout:"centric",startAngle:0,endAngle:360}),ti=l.forwardRef((e,a)=>{var t=re(e,ai);return l.createElement(Hr,{chartName:"PieChart",defaultTooltipEventType:"item",validateTooltipEventTypes:ei,tooltipPayloadSearcher:Fe,categoricalChartProps:t,ref:a})}),ri=["axis"],ii=l.forwardRef((e,a)=>l.createElement(xt,{chartName:"AreaChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:ri,tooltipPayloadSearcher:Fe,categoricalChartProps:e,ref:a}));const ce=[{name:"High Risk",value:15,color:"#f87171"},{name:"Medium",value:25,color:"#fbbf24"},{name:"Low",value:60,color:"#4ade80"}],ni=[{m:"Jun",s:5e4},{m:"Jul",s:8e4},{m:"Aug",s:12e4},{m:"Sep",s:16e4},{m:"Oct",s:2e5},{m:"Nov",s:26e4},{m:"Dec",s:3e5},{m:"Jan",s:34e4},{m:"Feb",s:37e4},{m:"Mar",s:39e4},{m:"Apr",s:42e4},{m:"May",s:46e4},{m:"Jun",s:5e5},{m:"Jul",s:54e4},{m:"Aug",s:58e4},{m:"Sep",s:62e4},{m:"Oct",s:65e4},{m:"Nov",s:67e4},{m:"Dec",s:7e5}],si=`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap');

/* Base styles */
.abs-page {
  font-family: 'Roboto', sans-serif;
  background: transparent;
  min-height: 100vh;
  padding: 24px 16px;
}

/* Header card */
.abs-header-card {
  background: rgba(30, 42, 58, 0.8);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 28px;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
}

.abs-header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.abs-back {
  font-size: 14px;
  color: #9ca3af;
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
  transition: color 0.2s;
}

.abs-back:hover {
  color: #fff;
}

.abs-dots {
  background: none;
  border: none;
  cursor: pointer;
  color: #9ca3af;
  font-size: 22px;
  padding: 0;
  line-height: 1;
  transition: color 0.2s;
}

.abs-dots:hover {
  color: #fff;
}

.abs-header-body {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}

.abs-header-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 40px;
  flex: 1;
  min-width: 280px;
}

.abs-hrow {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.abs-hlbl {
  font-size: 13px;
  color: #9ca3af;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  text-transform: capitalize;
}

.abs-hval {
  font-size: 16px;
  color: #f3f4f6;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
}

.abs-photo {
  width: 80px;
  height: 80px;
  border-radius: 12px;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
}

.abs-badges {
  display: flex;
  gap: 10px;
  margin-top: 8px;
  flex-wrap: wrap;
}

.abadge {
  padding: 10px 22px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  font-family: 'Poppins', sans-serif;
  flex-shrink: 0;
  transition: all 0.2s;
}

.abadge:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

.abadge-ap {
  background: #22c55e;
  color: #fff;
}

.abadge-rj {
  background: #ef4444;
  color: #fff;
}

.abadge-mn {
  background: transparent;
  color: #9ca3af;
  border: 1px solid #4b5563;
}

/* Risk section */
.abs-risk-title {
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 20px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
}

.abs-risk-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
  align-items: stretch;
}

@media (max-width: 768px) {
  .abs-risk-row {
    grid-template-columns: 1fr;
  }
}

.abs-dist-card {
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 200px;
}

.abs-dist-title {
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.65);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: 'Roboto', sans-serif;
}

.abs-dist-body {
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
}

.abs-legend {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.abs-leg {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.75);
  font-family: 'Roboto', sans-serif;
}

.abs-dot {
  width: 8px;
  height: 8px;
  border-radius: 1px;
  flex-shrink: 0;
}

.abs-metric {
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.abs-m-green { background: #166534; }
.abs-m-teal { background: #0f766e; }
.abs-m-blue { background: #1e40af; }
.abs-m-emerald { background: #065f46; }

.abs-m-lbl {
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 12px;
  font-family: 'Roboto', sans-serif;
}

.abs-m-val {
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  line-height: 1;
  font-family: 'Poppins', sans-serif;
}

.abs-m-sub {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.75);
  margin-top: 6px;
  font-family: 'Roboto', sans-serif;
}

.abs-m-bullet {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #fff;
  margin-bottom: 6px;
}

/* Two column layout */
.abs-two {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

@media (max-width: 1024px) {
  .abs-two {
    grid-template-columns: 1fr;
  }
}

/* Dark cards */
.abs-dark-card {
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 20px;
}

.abs-dc-title {
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 16px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

.abs-alt-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

@media (max-width: 768px) {
  .abs-alt-grid {
    grid-template-columns: 1fr;
  }
}

.abs-alt-lbl {
  font-size: 13px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 8px;
  font-family: 'Poppins', sans-serif;
}

.abs-alt-li {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  list-style: disc;
  margin-left: 16px;
  font-family: 'Roboto', sans-serif;
}

.abs-alt-score {
  font-size: 13px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  margin-top: 8px;
  font-family: 'Poppins', sans-serif;
}

.abs-tl-hdr {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  flex-wrap: wrap;
  gap: 12px;
}

.abs-tabs {
  display: flex;
  gap: 6px;
}

.abs-tab {
  font-size: 12px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  background: none;
  font-family: 'Roboto', sans-serif;
  transition: all 0.2s;
}

.abs-tab:hover {
  border-color: rgba(255, 255, 255, 0.3);
}

.abs-tab.on {
  background: #22c55e;
  border-color: #22c55e;
  color: #fff;
}

.abs-drv-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

@media (max-width: 768px) {
  .abs-drv-grid {
    grid-template-columns: 1fr;
  }
}

.abs-drv-title {
  font-size: 12px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.75);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 10px;
  font-family: 'Poppins', sans-serif;
}

.abs-drv-li {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  list-style: disc;
  margin-left: 16px;
  font-family: 'Roboto', sans-serif;
}

.abs-drv-pos {
  font-size: 13px;
  color: #4ade80;
  line-height: 1.8;
  font-family: 'Roboto', sans-serif;
}

.abs-note-text {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
  font-style: italic;
  font-family: 'Roboto', sans-serif;
  border-left: 3px solid #22c55e;
  padding-left: 16px;
}

/* Modals */
.abs-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.97);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  flex-direction: column;
  gap: 24px;
  padding: 20px;
}

.abs-modal-icon {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(34, 197, 94, 0.4);
  font-size: 48px;
  line-height: 1;
}

.abs-modal-title {
  font-size: 24px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
}

.abs-modal-btn {
  color: #fff;
  border: none;
  border-radius: 24px;
  padding: 14px 48px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  transition: all 0.2s;
}

.abs-modal-btn:hover {
  opacity: 0.9;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .abs-page {
    padding: 16px 12px;
  }
  
  .abs-header-card {
    padding: 16px;
    margin-bottom: 20px;
  }
  
  .abs-header-body {
    gap: 16px;
  }
  
  .abs-header-cols {
    gap: 12px 24px;
  }
  
  .abs-hval {
    font-size: 14px;
  }
  
  .abs-photo {
    width: 64px;
    height: 64px;
  }
  
  .abs-m-val {
    font-size: 22px;
  }
}
`;function ci(){const[e,a]=l.useState("All"),[t,r]=l.useState(!1),[i,s]=l.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:si}),n.jsxs("div",{className:"abs-page",children:[n.jsxs("div",{className:"abs-header-card",children:[n.jsxs("div",{className:"abs-header-top",children:[n.jsx(sa,{to:"/dashboard",children:n.jsx("button",{type:"button",className:"abs-back",children:"Go to Dashboard"})}),n.jsx("button",{className:"abs-dots",children:"•••"})]}),n.jsxs("div",{className:"abs-header-body",children:[n.jsxs("div",{className:"abs-header-cols",children:[n.jsxs("div",{className:"abs-hrow",children:[n.jsx("span",{className:"abs-hlbl",children:"Customer Name:"}),n.jsx("span",{className:"abs-hval",children:"John Okafor"})]}),n.jsxs("div",{className:"abs-hrow",children:[n.jsx("span",{className:"abs-hlbl",children:"Customer ID:"}),n.jsx("span",{className:"abs-hval",children:"CRD-20485"})]}),n.jsxs("div",{className:"abs-hrow",children:[n.jsx("span",{className:"abs-hlbl",children:"Phone Number:"}),n.jsx("span",{className:"abs-hval",children:"+2348036782727"})]}),n.jsxs("div",{className:"abs-hrow",children:[n.jsx("span",{className:"abs-hlbl",children:"Application Date:"}),n.jsx("span",{className:"abs-hval",children:"10 March 2026"})]}),n.jsxs("div",{className:"abs-hrow",style:{gridColumn:"1/-1"},children:[n.jsx("span",{className:"abs-hlbl",children:"Application Status:"}),n.jsxs("div",{className:"abs-badges",children:[n.jsx("button",{className:"abadge abadge-ap",onClick:()=>r(!0),children:"Approve"}),n.jsx("button",{className:"abadge abadge-rj",onClick:()=>s(!0),children:"Reject"}),n.jsx("button",{className:"abadge abadge-mn",children:"Manual Review"})]})]})]}),n.jsx("img",{src:"https://i.pravatar.cc/100?img=52",className:"abs-photo",alt:"customer"})]})]}),n.jsx("div",{className:"abs-risk-title",children:"Risk Summary"}),n.jsxs("div",{className:"abs-risk-row",children:[n.jsxs("div",{className:"abs-dist-card",children:[n.jsx("div",{className:"abs-dist-title",children:"Risk Distribution"}),n.jsxs("div",{className:"abs-dist-body",children:[n.jsxs("div",{style:{position:"relative",width:64,height:64,flexShrink:0},children:[n.jsx(ti,{width:64,height:64,children:n.jsx(Je,{data:ce,cx:28,cy:28,innerRadius:18,outerRadius:30,startAngle:90,endAngle:-270,dataKey:"value",strokeWidth:0,children:ce.map((c,o)=>n.jsx(ne,{fill:c.color},o))})}),n.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",textAlign:"center"},children:n.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#4ade80",fontFamily:"'Poppins',sans-serif"},children:"60%"})})]}),n.jsx("div",{className:"abs-legend",children:ce.map((c,o)=>n.jsxs("div",{className:"abs-leg",children:[n.jsx("div",{className:"abs-dot",style:{background:c.color}}),c.name]},o))})]})]}),n.jsxs("div",{className:"abs-metric abs-m-green",children:[n.jsx("div",{className:"abs-m-lbl",children:"Risk Score"}),n.jsxs("div",{children:[n.jsx("div",{className:"abs-m-sub",children:"Score: 721/1000"}),n.jsx("div",{className:"abs-m-sub",children:"Risk Level: Low"})]}),n.jsxs("div",{style:{marginTop:8,position:"relative",paddingBottom:20},children:[n.jsx("div",{style:{height:8,background:"rgba(255,255,255,.25)",borderRadius:10},children:n.jsx("div",{style:{width:"72%",height:"100%",background:"#4ade80",borderRadius:10}})}),n.jsx("div",{style:{position:"absolute",left:"72%",top:"4px",transform:"translateX(-50%)",width:0,height:0,borderLeft:"2px solid transparent",borderRight:"2px solid transparent",borderBottom:"12px solid #fff",zIndex:10}}),n.jsx("div",{style:{marginTop:6,paddingLeft:"64%",fontSize:11,fontWeight:700,color:"#fff",fontFamily:"'Roboto',sans-serif"},children:"72"})]})]}),n.jsxs("div",{className:"abs-metric abs-m-teal",children:[n.jsx("div",{className:"abs-m-lbl",children:"Probability of Default"}),n.jsxs("div",{children:[n.jsx("div",{className:"abs-m-val",style:{fontSize:28},children:"6%"}),n.jsx("div",{className:"abs-m-sub",children:"Low Risk"})]})]}),n.jsxs("div",{className:"abs-metric abs-m-blue",children:[n.jsx("div",{className:"abs-m-lbl",children:"Recommended Limit"}),n.jsxs("div",{children:[n.jsx("div",{className:"abs-m-bullet"}),n.jsx("div",{className:"abs-m-val",style:{fontSize:17},children:"₦150,000"})]})]}),n.jsxs("div",{className:"abs-metric abs-m-emerald",children:[n.jsx("div",{className:"abs-m-lbl",children:"Decision Confidence"}),n.jsxs("div",{children:[n.jsx("div",{className:"abs-m-bullet"}),n.jsx("div",{className:"abs-m-val",style:{fontSize:17},children:"High"})]})]})]}),n.jsxs("div",{className:"abs-two",children:[n.jsxs("div",{className:"abs-dark-card",children:[n.jsx("div",{className:"abs-dc-title",children:"Alternative Data Score Breakdown"}),n.jsxs("div",{className:"abs-alt-grid",children:[n.jsxs("div",{children:[n.jsx("div",{className:"abs-alt-lbl",children:"Mobile Behavior Score"}),n.jsxs("ul",{children:[n.jsx("li",{className:"abs-alt-li",children:"SIM Stability"}),n.jsx("li",{className:"abs-alt-li",children:"Phone Usage Consistency"}),n.jsx("li",{className:"abs-alt-li",children:"Device Changes"})]}),n.jsx("div",{className:"abs-alt-score",style:{color:"#4ade80"},children:"Score: 80/100"})]}),n.jsxs("div",{children:[n.jsx("div",{className:"abs-alt-lbl",children:"Financial Behavior Score"}),n.jsxs("ul",{children:[n.jsx("li",{className:"abs-alt-li",children:"Mobile money transaction"}),n.jsx("li",{className:"abs-alt-li",children:"Wallet balance trend"}),n.jsx("li",{className:"abs-alt-li",children:"Spending pattern"})]}),n.jsx("div",{className:"abs-alt-score",style:{color:"#4ade80"},children:"Score: 70/100"})]}),n.jsxs("div",{style:{marginTop:8},children:[n.jsx("div",{className:"abs-alt-lbl",children:"Identity Verification Score"}),n.jsxs("ul",{children:[n.jsx("li",{className:"abs-alt-li",children:"BVN/NID verified"}),n.jsx("li",{className:"abs-alt-li",children:"Phone match"}),n.jsx("li",{className:"abs-alt-li",children:"Device match"})]}),n.jsx("div",{className:"abs-alt-score",style:{color:"#4ade80"},children:"Score: 92/100"})]}),n.jsxs("div",{style:{marginTop:8},children:[n.jsx("div",{className:"abs-alt-lbl",children:"Digital Footprint Score"}),n.jsxs("ul",{children:[n.jsx("li",{className:"abs-alt-li",children:"App usage pattern"}),n.jsx("li",{className:"abs-alt-li",children:"Location stability"}),n.jsx("li",{className:"abs-alt-li",children:"Online payments"})]}),n.jsx("div",{className:"abs-alt-score",style:{color:"#4ade80"},children:"Score: 70/100"})]})]})]}),n.jsxs("div",{className:"abs-dark-card",children:[n.jsxs("div",{className:"abs-tl-hdr",children:[n.jsx("div",{className:"abs-dc-title",style:{margin:0},children:"Credit Timeline"}),n.jsx("div",{className:"abs-tabs",children:["1M","3M","6M","All"].map(c=>n.jsx("button",{className:`abs-tab${e===c?" on":""}`,onClick:()=>a(c),children:c},c))})]}),n.jsx(yt,{width:"100%",height:155,children:n.jsxs(ii,{data:ni,margin:{top:4,right:4,left:10,bottom:0},children:[n.jsx("defs",{children:n.jsxs("linearGradient",{id:"greenGrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"5%",stopColor:"#22c55e",stopOpacity:.3}),n.jsx("stop",{offset:"95%",stopColor:"#22c55e",stopOpacity:.02})]})}),n.jsx(At,{strokeDasharray:"3 3",stroke:"rgba(255,255,255,.06)"}),n.jsx(jt,{dataKey:"m",tick:{fontSize:8,fill:"rgba(255,255,255,.4)"},axisLine:!1,tickLine:!1}),n.jsx(Pt,{tickFormatter:c=>`${c/1e3}k`,tick:{fontSize:8,fill:"rgba(255,255,255,.4)"},axisLine:!1,tickLine:!1}),n.jsx(Nt,{formatter:c=>[`₦${c.toLocaleString()}`,""],contentStyle:{background:"#1e2d4a",border:"1px solid rgba(255,255,255,.1)",borderRadius:8,fontSize:10,color:"#fff"},labelStyle:{color:"rgba(255,255,255,.6)"},itemStyle:{color:"#4ade80"}}),n.jsx(ta,{type:"monotone",dataKey:"s",stroke:"#22c55e",strokeWidth:2,fill:"url(#greenGrad)",dot:!1,activeDot:{r:4,fill:"#22c55e"}})]})})]})]}),n.jsxs("div",{className:"abs-two",children:[n.jsxs("div",{className:"abs-dark-card",children:[n.jsx("div",{className:"abs-dc-title",style:{textAlign:"left"},children:"Risk Drivers"}),n.jsxs("div",{className:"abs-drv-grid",children:[n.jsxs("div",{children:[n.jsx("div",{className:"abs-drv-title",children:"Positive Signals"}),n.jsx("div",{className:"abs-drv-pos",children:"• Stable phone usage"}),n.jsx("div",{className:"abs-drv-pos",children:"• Verified Identity"}),n.jsx("div",{className:"abs-drv-pos",children:"• Consistent transaction activity"})]}),n.jsxs("div",{children:[n.jsx("div",{className:"abs-drv-title",children:"Risk Flags"}),n.jsxs("ul",{children:[n.jsx("li",{className:"abs-drv-li",children:"Limited credit history"}),n.jsx("li",{className:"abs-drv-li",children:"Income variability"})]})]})]})]}),n.jsxs("div",{className:"abs-dark-card",children:[n.jsx("div",{className:"abs-dc-title",style:{textAlign:"left"},children:"Analyst Notes"}),n.jsx("div",{className:"abs-note-text",children:'"Customer has strong mobile behavior signals but limited formal credit history."'})]})]}),t&&n.jsxs("div",{className:"abs-modal",children:[n.jsx("div",{className:"abs-modal-icon",style:{background:"#22c55e",boxShadow:"0 8px 24px rgba(34,197,94,.4)"},children:n.jsx("span",{children:"✓"})}),n.jsx("div",{className:"abs-modal-title",style:{color:"#22c55e"},children:"Loan Approved!"}),n.jsx("button",{onClick:()=>r(!1),className:"abs-modal-btn",style:{background:"#166534"},children:"Done"})]}),i&&n.jsxs("div",{className:"abs-modal",children:[n.jsx("div",{className:"abs-modal-icon",style:{background:"#ef4444",boxShadow:"0 8px 24px rgba(239,68,68,.4)"},children:n.jsx("span",{children:"✕"})}),n.jsx("div",{className:"abs-modal-title",style:{color:"#ef4444"},children:"Loan Rejected!"}),n.jsx("button",{onClick:()=>s(!1),className:"abs-modal-btn",style:{background:"#1e3a5f"},children:"Done"})]})]})]})}export{ci as default};
