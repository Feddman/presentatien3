import{t as n,al as _,am as T,an as y,I as g,ao as x,ap as b,T as t,V as v,U as F,aq as j,d as C,a1 as k,o as m,b as p,F as E,g as L,e as S,W as r,ar as h,as as P,v as z}from"../modules/vue-6QpwdnMK.js";import{e as A,_ as O,c,b as B,O as N,P as R,Q as $,R as V,S as q}from"../index-uhfRtpxX.js";const Q=n(!1),X=n(!1),J=n(!1),D=n(!1),Y=n(!0),Z=_({xs:460,...j}),w=T(),ee=y(),se=g(()=>w.height.value-w.width.value/A>120),te=x(v?document.body:null),f=b(),ae=g(()=>{var e,s;return["INPUT","TEXTAREA"].includes(((e=f.value)==null?void 0:e.tagName)||"")||((s=f.value)==null?void 0:s.classList.contains("CodeMirror-code"))}),ne=g(()=>{var e;return["BUTTON","A"].includes(((e=f.value)==null?void 0:e.tagName)||"")});t("slidev-camera","default",{listenToStorageChanges:!1});t("slidev-mic","default",{listenToStorageChanges:!1});const oe=t("slidev-scale",0),ie=t("slidev-presenter-cursor",!0,{listenToStorageChanges:!1}),le=t("slidev-show-editor",!1,{listenToStorageChanges:!1}),re=t("slidev-editor-vertical",!1,{listenToStorageChanges:!1});t("slidev-editor-width",v?window.innerWidth*.4:318,{listenToStorageChanges:!1});t("slidev-editor-height",v?window.innerHeight*.4:300,{listenToStorageChanges:!1});const u=t("slidev-presenter-font-size",1,{listenToStorageChanges:!1}),d=t("slidev-presenter-layout",1,{listenToStorageChanges:!1});function ce(){d.value=d.value+1,d.value>2&&(d.value=1)}function de(){u.value=Math.min(2,u.value+.1)}function ue(){u.value=Math.max(.5,u.value-.1)}const ge=F(D);function fe(e,s=""){var i,l;const o=["slidev-page",s],a=(l=(i=e==null?void 0:e.meta)==null?void 0:i.slide)==null?void 0:l.no;return a!=null&&o.push(`slidev-page-${a}`),o.filter(Boolean).join(" ")}async function ve(){const{saveAs:e}=await O(()=>import("../modules/file-saver-CvNQQnEe.js").then(s=>s.F),__vite__mapDeps([]));e(typeof c.download=="string"?c.download:c.exportFilename?`${c.exportFilename}.pdf`:"/slidev-exported.pdf",`${c.title}.pdf`)}const I={class:"h-full w-full flex items-center justify-center gap-2"},M=S("div",{class:"i-svg-spinners-90-ring-with-bg text-xl"},null,-1),W=S("div",null,"Loading slide...",-1),G=C({__name:"SlideLoading",setup(e){const s=n(!1);return k(()=>{setTimeout(()=>{s.value=!0},200)}),(o,a)=>(m(),p("div",I,[s.value?(m(),p(E,{key:0},[M,W],64)):L("v-if",!0)]))}}),U=B(G,[["__file","C:/laragon/www/slidepresentation/node_modules/@slidev/client/internals/SlideLoading.vue"]]),me=C({name:"SlideWrapper",props:{clicksContext:{type:Object,required:!0},renderContext:{type:String,default:"main"},active:{type:Boolean,default:!1},is:{required:!0},route:{type:Object,required:!0}},setup(e){r(N,e.route),r(R,n(e.route.no)),r($,n(e.renderContext)),r(V,h(e,"active")),r(q,h(e,"clicksContext"));const s=g(()=>{var i,l;const a=((l=(i=e.route.meta)==null?void 0:i.slide)==null?void 0:l.frontmatter.zoom)??1;return a===1?void 0:{width:`${100/a}%`,height:`${100/a}%`,transformOrigin:"top left",transform:`scale(${a})`}}),o=P({loader:e.is,delay:300,loadingComponent:U});return()=>z(o,{style:s.value})}}),pe={render(){return[]}},he={render(){return[]}};export{he as G,me as S,pe as a,D as b,u as c,ue as d,Q as e,X as f,fe as g,se as h,de as i,le as j,oe as k,re as l,J as m,ee as n,Y as o,d as p,ne as q,ae as r,ie as s,ge as t,te as u,Z as v,w,ce as x,ve as y,f as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
