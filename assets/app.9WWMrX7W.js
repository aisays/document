import{R as o,a3 as p,a4 as u,a5 as l,a6 as c,a7 as f,a8 as d,a9 as m,aa as h,ab as g,ac as A,d as v,u as P,v as y,s as C,ad as b,ae as w,af as R,ag as E}from"./chunks/framework.DsC6XQ3x.js";import{t as S}from"./chunks/theme.G_s3ZOsV.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(S),_=v({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=P();return y(()=>{C(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&b(),w(),R(),s.setup&&s.setup(),()=>E(s.Layout)}});async function T(){globalThis.__VITEPRESS__=!0;const e=V(),a=D();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function D(){return h(_)}function V(){let e=o,a;return g(t=>{let n=A(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&T().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{T as createApp};