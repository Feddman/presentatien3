import{d as p,Y as d,I as _,b as a,e as t,x as s,z as c,F as u,X as h,o as n,Z as f,l as g,g as v}from"../modules/vue-6QpwdnMK.js";import{k as x,c as m,f as b,t as y,b as N}from"../index-uhfRtpxX.js";import{N as k}from"./NoteDisplay-DNBpq1Bv.js";import"../modules/shiki-Ceez9vfC.js";const w={id:"page-root"},L={class:"m-4"},T={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},C={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},S=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-main mb-8"},F=p({__name:"print",setup(M){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),x({title:`Notes - ${m.title}`});const i=_(()=>b.value.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(n(),a("div",w,[t("div",L,[t("div",T,[t("h1",V,s(c(m).title),1),t("div",B,s(new Date().toLocaleString()),1)]),(n(!0),a(u,null,h(i.value,(e,r)=>(n(),a("div",{key:r,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",D,[t("div",H,s(e==null?void 0:e.no)+"/"+s(c(y)),1),f(" "+s(e==null?void 0:e.title)+" ",1),S])]),g(k,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),r<i.value.length-1?(n(),a("hr",z)):v("v-if",!0)]))),128))])]))}}),W=N(F,[["__file","C:/laragon/www/slidepresentation/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{W as default};
