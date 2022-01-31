var e=Object.defineProperty,n=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(n,t,l)=>t in n?e(n,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[t]=l,s=(e,n)=>{for(var t in n||(n={}))a.call(n,t)&&o(e,t,n[t]);if(l)for(var t of l(n))i.call(n,t)&&o(e,t,n[t]);return e},r=(e,l)=>n(e,t(l));import{m as d,r as u,o as m,c,a as p,b as h,w as v,v as f,F as g,d as b,e as y,t as w,f as C,g as k,h as x,i as M,j as S,k as I,l as O,n as E,p as _,q as L,s as A,T as B,u as H,x as T,y as $,z as R,A as P,P as j,B as D,C as W,D as z}from"./vendor.5c135631.js";const U={template:'<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">'},N={name:"App",data:()=>({menu:[{header:"Getting Started",hiddenOnCollapse:!0},{href:"/",title:"Installation",icon:"fa fa-download"},{href:"/basic-usage",title:"Basic Usage",icon:"fa fa-code"},{header:"Usage",hiddenOnCollapse:!0},{href:"/props",title:"Props",icon:"fa fa-cogs"},{href:"/events",title:"Events",icon:"fa fa-bell"},{href:"/styling",title:"Styling",icon:"fa fa-palette"},{component:d(U)},{header:"Example",hiddenOnCollapse:!0},{href:"/disabled",title:"Disabled page",icon:"fa fa-lock",disabled:!0},{title:"Badge",icon:"fa fa-cog",badge:{text:"new",class:"vsm--badge_default"}},{href:"/page",title:"Dropdown Page",icon:"fa fa-list-ul",child:[{href:"/page/sub-page-1",title:"Sub Page 01",icon:"fa fa-file-alt"},{href:"/page/sub-page-2",title:"Sub Page 02",icon:"fa fa-file-alt"}]},{title:"Multiple Level",icon:"fa fa-list-alt",child:[{title:"page"},{title:"Level 2 ",child:[{title:"page"},{title:"Page"}]},{title:"Page"},{title:"Another Level 2",child:[{title:"Level 3",child:[{title:"Page"},{title:"Page"}]}]}]}],collapsed:!1,themes:[{name:"Default theme",input:""},{name:"White theme",input:"white-theme"}],selectedTheme:"white-theme",isOnMobile:!1}),mounted(){this.onResize(),window.addEventListener("resize",this.onResize)},methods:{onToggleCollapse(e){console.log("onToggleCollapse")},onItemClick(e,n){console.log("onItemClick")},onResize(){window.innerWidth<=767?(this.isOnMobile=!0,this.collapsed=!0):(this.isOnMobile=!1,this.collapsed=!1)}}},q={class:"demo"},F={class:"container"},Y=p("h1",null,[y(" vue-sidebar-menu "),p("a",{style:{color:"#000","text-transform":"uppercase","font-size":"14px","font-weight":"400"},href:"https://github.com/yaminncco/vue-sidebar-menu"}," Github ")],-1),V=p("p",null,"A vue.js sidebar menu component",-1),G=y(" Select theme: "),K=p("hr",{style:{margin:"50px 0px",border:"1px solid #e3e3e3"}},null,-1);N.render=function(e,n,t,l,a,i){const o=u("sidebar-menu"),s=u("router-view");return m(),c(g,null,[p(o,{collapsed:a.collapsed,"onUpdate:collapsed":[n[1]||(n[1]=e=>a.collapsed=e),i.onToggleCollapse],menu:a.menu,theme:a.selectedTheme,"show-one-child":!0,onItemClick:i.onItemClick},null,8,["collapsed","menu","theme","onUpdate:collapsed","onItemClick"]),a.isOnMobile&&!a.collapsed?(m(),c("div",{key:0,class:"sidebar-overlay",onClick:n[2]||(n[2]=e=>a.collapsed=!0)})):h("",!0),p("div",{id:"demo",class:[{collapsed:a.collapsed},{onmobile:a.isOnMobile}]},[p("div",q,[p("div",F,[Y,V,p("div",null,[G,v(p("select",{"onUpdate:modelValue":n[3]||(n[3]=e=>a.selectedTheme=e)},[(m(!0),c(g,null,b(a.themes,((e,n)=>(m(),c("option",{key:n,value:e.input},w(e.name),9,["value"])))),128))],512),[[f,a.selectedTheme]])]),K,p(s)])])],2)],64)};const J=C(!1),Q=C(null),X=C(null),Z=k({top:0,height:0,padding:"",maxHeight:0,maxWidth:0}),ee=C(null),ne=C(window.location.pathname+window.location.search+window.location.hash);function te(e,n){let t=0;function l(e){return e.map((e=>e.child?r(s({},e),{id:t++,child:l(e.child)}):r(s({},e),{id:t++})))}const a=x((()=>l(e.menu))),i=x((()=>J.value?e.widthCollapsed:e.width)),o=x((()=>[J.value?"vsm_collapsed":"vsm_expanded",e.theme?`vsm_${e.theme}`:"",e.rtl?"vsm_rtl":"",e.relative?"vsm_relative":""])),d=x((()=>[{position:"absolute"},{top:`${Z.top+Z.height}px`},e.rtl?{right:e.widthCollapsed}:{left:e.widthCollapsed},{width:`${Z.maxWidth}px`},{"max-height":`${Z.maxHeight}px`},{"overflow-y":"auto"}])),u=x((()=>[{position:"absolute"},{top:`${Z.top}px`},e.rtl?{right:e.widthCollapsed}:{left:e.widthCollapsed},{width:`${Z.maxWidth}px`},{height:`${Z.height}px`},{"padding-right":`${Z.padding}`},{"padding-left":`${Z.padding}`},{"z-index":"20"}])),m=x((()=>[{position:"absolute"},{top:`${Z.top}px`},e.rtl?{right:"0px"}:{left:"0px"},{width:`${Z.maxWidth+parseInt(e.widthCollapsed)}px`},{height:`${Z.height}px`},{"z-index":"10"}])),c=(e=!0,n=800)=>{X.value&&(ee.value&&clearTimeout(ee.value),e?X.value=null:ee.value=setTimeout((()=>{X.value=null}),n))};return{sidebarMenuRef:Q,isCollapsed:J,computedMenu:a,sidebarWidth:i,sidebarClass:o,currentRoute:ne,onToggleClick:()=>{c(),J.value=!J.value,n.emit("update:collapsed",J.value)},onItemClick:(e,t)=>{n.emit("item-click",e,t)},onRouteChange:()=>{ne.value=window.location.pathname+window.location.search+window.location.hash},mobileItem:X,mobileItemStyle:u,mobileItemDropdownStyle:d,mobileItemBackgroundStyle:m,setMobileItem:({item:n,itemEl:t})=>{ee.value&&clearTimeout(ee.value);const l=t.children[0],{top:a,bottom:i,height:o}=l.getBoundingClientRect(),{left:s,right:r}=Q.value.getBoundingClientRect(),d=l.offsetParent.getBoundingClientRect().top;let u=window.innerHeight,m=window.innerWidth,c=0,p=m;const h=parseInt(e.width)-parseInt(e.widthCollapsed);if(e.relative){const e=Q.value.parentElement;u=e.clientHeight,m=e.clientWidth,c=e.getBoundingClientRect().top,p=e.getBoundingClientRect().right}const v=e.rtl?m-(p-s):m-r;X.value=n,Z.top=a-d,Z.height=o,Z.padding=window.getComputedStyle(l).paddingRight,Z.maxWidth=v<=h?v:h,Z.maxHeight=u-(i-c)},unsetMobileItem:c,mobileItemTimeout:ee}}function le(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function ae(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function ie(e,n){return Array.isArray(e)?oe(e,n):Array.isArray(n)?oe(n,e):e===n}function oe(e,n){return Array.isArray(n)?e.length===n.length&&e.every(((e,t)=>e===n[t])):1===e.length&&e[0]===n}const se=C(null);function re(e){const n=M().appContext.config.globalProperties.$router,t=S("vsm-props"),l=S("emitItemClick"),a=S("emitScrollUpdate"),{isCollapsed:i,currentRoute:o,mobileItem:r,setMobileItem:d,unsetMobileItem:u,mobileItemTimeout:m}=te(t),c=C(!1),p=C(!1),h=x((()=>f(e.item)||g(e.item.child))),v=x((()=>f(e.item,!0))),f=(e,t)=>{if(!e.href||e.external)return!1;if(n){const l=n.resolve(e.href),a=n.currentRoute.value,i=function(e,n){const{matched:t}=e,{length:l}=t,a=t[l-1],i=n.matched;if(!a||!i.length)return-1;const o=i.findIndex(ae.bind(null,a));if(o>-1)return o;const s=le(t[l-2]);return l>1&&le(a)===s&&i[i.length-1].path!==s?i.findIndex(ae.bind(null,t[l-2])):o}(l,a);return t||e.exact?i>-1&&i===a.matched.length-1&&function(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(!ie(e[t],n[t]))return!1;return!0}(a.params,l.params):i>-1&&function(e,n){for(const t in n){const l=n[t],a=e[t];if("string"==typeof l){if(l!==a)return!1}else if(!Array.isArray(a)||a.length!==l.length||l.some(((e,n)=>e!==a[n])))return!1}return!0}(a.params,l.params)}return e.href===o.value},g=e=>!!e&&e.some((e=>f(e)||g(e.child))),b=(n,t)=>{w.value||i.value&&k.value&&setTimeout((()=>{var l;(null==(l=r.value)?void 0:l.id)!==e.item.id&&(d({item:e.item,itemEl:t}),y.value=!0),"click"!==n.type||O.value||u(!1)}),0)},y=x({get:()=>{var n;return!!O.value&&(i.value&&k.value?w.value:!!t.showChild||(t.showOneChild&&k.value?e.item.id===(null==(n=se.value)?void 0:n.id):c.value))},set:n=>{t.showOneChild&&k.value&&(se.value=n?e.item:null),c.value=n}}),w=x((()=>{var n;return i.value&&k.value?e.item.id===(null==(n=r.value)?void 0:n.id):p.value})),k=x((()=>1===e.level)),I=x((()=>i.value?!(!e.item.hidden||void 0!==e.item.hiddenOnCollapse)||!0===e.item.hiddenOnCollapse:!0===e.item.hidden)),O=x((()=>!!(e.item.child&&e.item.child.length>0))),E=x((()=>["vsm--link",`vsm--link_level-${e.level}`,{"vsm--link_mobile":A.value},{"vsm--link_hover":w.value},{"vsm--link_active":h.value},{"vsm--link_disabled":e.item.disabled},{"vsm--link_open":y.value},e.item.class])),_=x((()=>{const n=e.item.href?e.item.href:"#",t=e.item.external?"_blank":"_self",l=e.item.disabled?-1:null,a=v.value?"page":null,i=!!O.value||null,o=O.value?y.value:null;return s({href:n,target:t,tabindex:l,"aria-current":a,"aria-haspopup":i,"aria-expanded":o},e.item.attributes)})),L=x((()=>["vsm--item",{"vsm--item_mobile":A.value}])),A=x((()=>i.value&&k.value&&w.value));return{active:h,exactActive:v,activeShow:se,show:y,hover:w,isFirstLevel:k,isHidden:I,hasChild:O,linkClass:E,linkAttrs:_,itemClass:L,isMobileItem:A,onLinkClick:n=>{(e.item.href&&!e.item.disabled||(n.preventDefault(),!e.item.disabled))&&(b(n,n.currentTarget.parentElement),O.value&&(e.item.href&&!h.value||(y.value=!y.value)),l(n,e.item))},onMouseOver:n=>{e.item.disabled||(n.stopPropagation(),p.value=!0)},onMouseOut:e=>{e.stopPropagation(),p.value=!1},onMouseEnter:n=>{e.item.disabled||(A.value&&(t.disableHover&&O.value||!t.disableHover)&&m.value&&clearTimeout(m.value),t.disableHover||b(n,n.currentTarget))},onMouseLeave:()=>{if(t.disableHover&&!O.value)return;let e;t.disableHover||(e=300),u(!1,e)},onExpandEnter:e=>{e.style.height=e.scrollHeight+"px"},onExpandAfterEnter:e=>{e.style.height="auto",i.value||a()},onExpandBeforeLeave:e=>{i.value&&k.value?e.style.display="none":e.style.height=e.scrollHeight+"px"},onExpandAfterLeave:()=>{i.value||a()}}}const de={name:"SidebarMenuLink",inheritAttrs:!1,props:{item:{type:Object,required:!0}},data:()=>({router:!1}),computed:{isHyperLink(){return!(this.item.href&&!this.item.external&&this.router)}},mounted(){this.router=!!this.$router}};de.render=function(e,n,t,l,a,i){const o=u("router-link");return i.isHyperLink?(m(),c("a",O({key:0},e.$attrs),[I(e.$slots,"default")],16)):(m(),c(o,{key:1,custom:"",to:e.$attrs.href},{default:E((({href:n,navigate:t})=>[p("a",O(e.$attrs,{href:n,onClick:t}),[I(e.$slots,"default")],16,["href","onClick"])])),_:3},8,["to"]))};const ue={name:"SidebarMenuIcon",props:{icon:{type:[String,Object],default:""}}};ue.render=function(e,n,t,l,a,i){return m(),c(_(t.icon.element?t.icon.element:"i"),O({class:["vsm--icon","string"==typeof t.icon||t.icon instanceof String?t.icon:t.icon.class],"aria-hidden":"true"},t.icon.attributes),{default:E((()=>[y(w(t.icon.text),1)])),_:1},16,["class"])};const me={name:"SidebarMenuBadge",props:{badge:{type:Object,default:()=>{}}}};me.render=function(e,n,t,l,a,i){return m(),c(_(t.badge.element?t.badge.element:"span"),O({class:["vsm--badge",t.badge.class]},t.badge.attributes),{default:E((()=>[y(w(t.badge.text),1)])),_:1},16,["class"])};const ce={name:"SidebarMenuItem",components:{SidebarMenuLink:de,SidebarMenuIcon:ue,SidebarMenuBadge:me},props:{item:{type:Object,required:!0},level:{type:Number,default:1}},setup(e){const n=S("vsm-props"),{isCollapsed:t,mobileItemStyle:l,mobileItemDropdownStyle:a,mobileItemBackgroundStyle:i}=te(n),{linkComponentName:o}=L(n),{active:s,exactActive:r,show:d,hover:u,isFirstLevel:m,isHidden:c,hasChild:p,linkClass:h,linkAttrs:v,itemClass:f,isMobileItem:g,onLinkClick:b,onMouseOver:y,onMouseOut:w,onMouseEnter:C,onMouseLeave:k,onExpandEnter:x,onExpandAfterEnter:M,onExpandBeforeLeave:I,onExpandAfterLeave:O}=re(e);return A((()=>s.value),(()=>{s.value&&(d.value=!0)}),{immediate:!0}),{isCollapsed:t,linkComponentName:o,active:s,exactActive:r,isMobileItem:g,mobileItemStyle:l,mobileItemDropdownStyle:a,mobileItemBackgroundStyle:i,show:d,hover:u,isFirstLevel:m,isHidden:c,hasChild:p,linkClass:h,linkAttrs:v,itemClass:f,onLinkClick:b,onMouseOver:y,onMouseOut:w,onMouseEnter:C,onMouseLeave:k,onExpandEnter:x,onExpandAfterEnter:M,onExpandBeforeLeave:I,onExpandAfterLeave:O}}},pe={key:0},he={class:"vsm--dropdown"};ce.render=function(e,n,t,l,a,i){const o=u("sidebar-menu-icon"),s=u("sidebar-menu-badge"),r=u("sidebar-menu-item",!0);return t.item.component&&!l.isHidden?(m(),c("li",pe,[(m(),c(_(t.item.component),t.item.props,null,16))])):t.item.header&&!l.isHidden?(m(),c("li",O({key:1,class:["vsm--header",t.item.class]},t.item.attributes),w(t.item.header),17)):l.isHidden?h("",!0):(m(),c("li",O({key:2,class:l.itemClass,onMouseover:n[1]||(n[1]=(...e)=>l.onMouseOver&&l.onMouseOver(...e)),onMouseout:n[2]||(n[2]=(...e)=>l.onMouseOut&&l.onMouseOut(...e))},H(l.isCollapsed&&l.isFirstLevel?{mouseenter:l.onMouseEnter,mouseleave:l.onMouseLeave}:{})),[(m(),c(_(l.linkComponentName?l.linkComponentName:"SidebarMenuLink"),O({item:t.item,class:l.linkClass},l.linkAttrs,{onClick:l.onLinkClick}),{default:E((()=>[l.isCollapsed&&l.isFirstLevel?(m(),c(B,{key:0,name:"slide-animation"},{default:E((()=>[l.hover?(m(),c("div",{key:0,class:"vsm--mobile-bg",style:l.mobileItemBackgroundStyle},null,4)):h("",!0)])),_:1})):h("",!0),t.item.icon?(m(),c(o,{key:1,icon:t.item.icon},null,8,["icon"])):h("",!0),p("div",{class:["vsm--title",l.isCollapsed&&l.isFirstLevel&&!l.isMobileItem&&"vsm--title_hidden"],style:l.isMobileItem&&l.mobileItemStyle},[p("span",null,w(t.item.title),1),t.item.badge?(m(),c(s,{key:0,badge:t.item.badge},null,8,["badge"])):h("",!0),l.hasChild?(m(),c("div",{key:1,class:["vsm--arrow",{"vsm--arrow_open":l.show}]},[I(e.$slots,"dropdown-icon",{isOpen:l.show})],2)):h("",!0)],6)])),_:3},16,["item","class","onClick"])),l.hasChild?(m(),c(B,{key:0,appear:l.isMobileItem,name:"expand",onEnter:l.onExpandEnter,onAfterEnter:l.onExpandAfterEnter,onBeforeLeave:l.onExpandBeforeLeave,onAfterLeave:l.onExpandAfterLeave},{default:E((()=>[l.show?(m(),c("div",{key:0,class:["vsm--child",l.isMobileItem&&"vsm--child_mobile"],style:l.isMobileItem&&l.mobileItemDropdownStyle},[p("ul",he,[(m(!0),c(g,null,b(t.item.child,(n=>(m(),c(r,{key:n.id,item:n,level:t.level+1},{"dropdown-icon":E((({isOpen:n})=>[I(e.$slots,"dropdown-icon",{isOpen:n})])),_:2},1032,["item","level"])))),128))])],6)):h("",!0)])),_:1},8,["appear","onEnter","onAfterEnter","onBeforeLeave","onAfterLeave"])):h("",!0)],16))};const ve={name:"SidebarMenuScroll",setup(){const e=S("vsm-props"),{isCollapsed:n}=te(e),t=C(null),l=C(null),a=C(null),i=C(0),o=C(0);let s=0,r=!1;const d=x((()=>({height:`${o.value}%`,transform:`translateY(${i.value}%)`}))),u=()=>{t.value&&P((()=>{p()}))};T("emitScrollUpdate",u),$((()=>{u(),window.addEventListener("resize",u)})),R((()=>{window.removeEventListener("resize",u)})),A((()=>n.value),(()=>{u()}));const m=e=>{if(!r)return;const n=e.clientY-l.value.getBoundingClientRect().y,t=a.value.offsetHeight-s;h(n-t)},c=e=>{r=!1,s=0,window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",c)},p=()=>{const e=100*t.value.clientHeight/t.value.scrollHeight;o.value=e<100?e:0,i.value=100*t.value.scrollTop/t.value.clientHeight},h=e=>{const n=100*e/l.value.offsetHeight;t.value.scrollTop=n*t.value.scrollHeight/100};return{scrollRef:t,scrollBarRef:l,scrollThumbRef:a,thumbStyle:d,onScroll:()=>{requestAnimationFrame(u)},onClick:e=>{const n=Math.abs(l.value.getBoundingClientRect().y-e.clientY),t=a.value.offsetHeight/2;h(n-t)},onMouseDown:e=>{e.stopImmediatePropagation(),r=!0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",c),s=a.value.offsetHeight-(e.clientY-a.value.getBoundingClientRect().y)}}}},fe={class:"vsm--scroll-wrapper"},ge={class:"vsm--scroll-overflow"};ve.render=function(e,n,t,l,a,i){return m(),c("div",fe,[p("div",ge,[p("div",{ref:"scrollRef",class:"vsm--scroll",onScroll:n[1]||(n[1]=(...e)=>l.onScroll&&l.onScroll(...e))},[I(e.$slots,"default")],544),p("div",{ref:"scrollBarRef",class:"vsm--scroll-bar",onMousedown:n[3]||(n[3]=(...e)=>l.onClick&&l.onClick(...e))},[p("div",{ref:"scrollThumbRef",class:"vsm--scroll-thumb",style:l.thumbStyle,onMousedown:n[2]||(n[2]=(...e)=>l.onMouseDown&&l.onMouseDown(...e))},null,36)],544)])])};const be={name:"SidebarMenu",components:{SidebarMenuItem:ce,SidebarMenuScroll:ve},props:{menu:{type:Array,required:!0},collapsed:{type:Boolean,default:!1},width:{type:String,default:"290px"},widthCollapsed:{type:String,default:"65px"},showChild:{type:Boolean,default:!1},theme:{type:String,default:""},showOneChild:{type:Boolean,default:!1},rtl:{type:Boolean,default:!1},relative:{type:Boolean,default:!1},hideToggle:{type:Boolean,default:!1},disableHover:{type:Boolean,default:!1},linkComponentName:{type:String,default:void 0}},emits:{"item-click":(e,n)=>!(!e||!n),"update:collapsed":e=>!("boolean"!=typeof e)},setup(e,n){T("vsm-props",e);const{sidebarMenuRef:t,isCollapsed:l,computedMenu:a,sidebarWidth:i,sidebarClass:o,onToggleClick:s,onItemClick:r,onRouteChange:d,unsetMobileItem:u}=te(e,n);T("emitItemClick",r),T("emitScrollUpdate"),T("onRouteChange",d);const{collapsed:m}=L(e);l.value=m.value,A((()=>e.collapsed),(e=>{u(),l.value=e}));return M().appContext.config.globalProperties.$router||($((()=>{window.addEventListener("hashchange",d)})),R((()=>{window.removeEventListener("hashchange",d)}))),{sidebarMenuRef:t,isCollapsed:l,computedMenu:a,sidebarWidth:i,sidebarClass:o,onToggleClick:s,onItemClick:r,onRouteChange:d}}},ye=p("span",{class:"vsm--arrow_default"},null,-1),we=p("span",{class:"vsm--toggle-btn_default"},null,-1);be.render=function(e,n,t,l,a,i){const o=u("sidebar-menu-item"),s=u("sidebar-menu-scroll");return m(),c("div",{ref:"sidebarMenuRef",class:["v-sidebar-menu",l.sidebarClass],style:{"max-width":l.sidebarWidth}},[I(e.$slots,"header"),p(s,null,{default:E((()=>[p("ul",{class:"vsm--menu",style:{width:l.sidebarWidth}},[(m(!0),c(g,null,b(l.computedMenu,(n=>(m(),c(o,{key:n.id,item:n},{"dropdown-icon":E((({isOpen:n})=>[I(e.$slots,"dropdown-icon",{isOpen:n},(()=>[ye]))])),_:2},1032,["item"])))),128))],4)])),_:1}),I(e.$slots,"footer"),t.hideToggle?h("",!0):(m(),c("button",{key:0,class:"vsm--toggle-btn",onClick:n[1]||(n[1]=(...e)=>l.onToggleClick&&l.onToggleClick(...e))},[I(e.$slots,"toggle-icon",{},(()=>[we]))]))],6)};var Ce={install(e){e.component("SidebarMenu",be)}};const ke={},xe=p("h2",null,"Installation",-1),Me=p("p",null,"Use npm to install plugin",-1),Se=y(w("npm i vue-sidebar-menu@next --save")),Ie=p("p",null,"Import the plugin globally",-1),Oe=p("p",null,"Or import the component locally.",-1),Ee=y(w("import { SidebarMenu } from 'vue-sidebar-menu'\nexport default {\n  components: {\n    SidebarMenu\n  }\n}"));ke.render=function(e,n){const t=u("prism-code");return m(),c("div",null,[xe,Me,p(t,{lang:"bash"},{default:E((()=>[Se])),_:1}),Ie,p(t,{lang:"js"},{default:E((()=>[y(w("import { createApp } from 'vue'\nimport App from './App.vue'\nimport VueSidebarMenu from 'vue-sidebar-menu'\nimport 'vue-sidebar-menu/dist/vue-sidebar-menu.css'\n\nconst app = createApp(App)\napp.use(VueSidebarMenu)\napp.mount(\"#app\")"),1)])),_:1}),Oe,p(t,{lang:"js"},{default:E((()=>[Ee])),_:1})])};const _e={},Le=p("h2",null,"Basic Usage",-1),Ae=p("h3",null,"Item Properties",-1);_e.render=function(e,n){const t=u("prism-code");return m(),c("div",null,[Le,p(t,{lang:"html"},{default:E((()=>[y(w("<template>\n  <sidebar-menu :menu=\"menu\" />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        menu: [\n          {\n            header: 'Main Navigation',\n            hiddenOnCollapse: true\n          },\n          {\n            href: '/',\n            title: 'Dashboard',\n            icon: 'fa fa-user'\n          },\n          {\n            href: '/charts',\n            title: 'Charts',\n            icon: 'fa fa-chart-area',\n            child: [\n              {\n                href: '/charts/sublink',\n                title: 'Sub Link'\n              }\n            ]\n          }\n        ]\n      }\n    }\n  }\n<\/script>"),1)])),_:1}),Ae,p(t,{lang:"js"},{default:E((()=>[y(w("menu [\n  // item\n  {\n    // string or a location object\n    href: '/',\n    // href: { path: '/' }\n\n    title: 'Dashboard',\n\n    // icon class\n    icon: 'fa fa-user'\n    /* or custom icon\n    icon: {\n      element: 'span',\n      class: 'fa fa-user',\n      // attributes: {}\n      // text: ''\n    }\n    */\n\n    /*\n    badge: {\n      text: 'new',\n      class: 'vsm--badge_default'\n      // attributes: {}\n      // element: 'span'\n    }\n    */\n\n    // child: []\n    // disabled: true\n    // class: ''\n    // attributes: {}\n    // hidden: false\n    // hiddenOnCollapse: true\n\n    /* with vue-router */\n    // external: true\n    // exact: true // apply active class when current route is exactly the same. (based on route records, query & hash are not relevant)\n  },\n\n  // header item\n  {\n    header: 'Main Navigation'\n    // hidden: false\n    // hiddenOnCollapse: true\n    // class: ''\n    // attributes: {}\n  },\n\n  // component item\n  {\n    component: componentName\n    // props: componentProps\n    // hidden: false\n    // hiddenOnCollapse: true\n  }\n]"),1)])),_:1})])};const Be={},He=p("h2",null,"Props",-1);Be.render=function(e,n){const t=u("prism-code");return m(),c("div",null,[He,p(t,{lang:"js"},{default:E((()=>[y(w("props: {\n  // Sidebar menu (required)\n  menu: {\n    type: Array,\n    required: true\n  },\n\n  // Sidebar Collapse state (v-model:collapsed to enable two-way data binding)\n  collapsed: {\n    type: Boolean,\n    default: false\n  },\n\n  // Sidebar width (expanded)\n  width: {\n    type: String,\n    default: '290px'\n  },\n\n  // Sidebar width (collapsed)\n  widthCollapsed: {\n    type: String,\n    default: '65px'\n  },\n\n  // Keep only one child opened at a time (first level only)\n  showOneChild: {\n    type: Boolean,\n    default: false\n  },\n\n  // Keep all child open\n  showChild: {\n    type: Boolean,\n    default: false\n  },\n\n  // Sidebar right to left\n  rtl: {\n    type: Boolean,\n    default: false\n  },\n\n  // Make sidebar relative to the parent (by default the sidebar is relative to the viewport)\n  relative: {\n    type: Boolean,\n    default: false\n  },\n\n  // Hide toggle collapse btn\n  hideToggle: {\n    type: Boolean,\n    default: false\n  },\n\n  // Sidebar theme (available themes: 'white-theme')\n  theme: {\n    type: String,\n    default: ''\n  },\n\n  // Disable hover on collapse mode\n  disableHover: {\n    type: Boolean,\n    default: false\n  }\n\n  // The name of the custom link component (must be registered globally and define item as a prop)\n  linkComponentName: {\n    type: String,\n    default: undefined\n  }\n}"),1)])),_:1})])};const Te={},$e=p("h2",null,"Events",-1),Re=p("p",null,[p("b",null,"@update:collapsed(collapsed)"),y(" Trigger on toggle btn click")],-1),Pe=p("p",null,[p("b",null,"@item-click(event, item)"),y(" Trigger on item link click")],-1);Te.render=function(e,n){const t=u("prism-code");return m(),c("div",null,[$e,p(t,{lang:"html"},{default:E((()=>[y(w('<sidebar-menu @update:collapsed="onToggleCollapse" @item-click="onItemClick" />\n...\nmethods: {\n  onToggleCollapse(collapsed) {},\n  onItemClick(event, item) {}\n}'),1)])),_:1}),Re,Pe])};const je={},De=p("h2",null,"Styling",-1),We=p("p",null,"All styles customization can be done in normal CSS by using this classes",-1),ze=p("p",null,"or you can override Sass variables (complete list of all variables can be found in `src/scss/_variables.scss`) and create your own theme",-1),Ue=p("h2",null,"Slots",-1),Ne=y(w('<sidebar-menu>\n  <template v-slot:header>header</template>\n  <template v-slot:footer>footer</template>\n  <template v-slot:toggle-icon>toggle-icon</template>\n  <template v-slot:dropdown-icon="{ isOpen }">\n    <span v-if="!isOpen">+</span>\n    <span v-else>-</span>\n  </template>\n</sidebar-menu>'));je.render=function(e,n){const t=u("prism-code");return m(),c("div",null,[De,We,p(t,{lang:"css"},{default:E((()=>[y(w(".v-sidebar-menu {}\n.v-sidebar-menu.vsm_expanded {}\n.v-sidebar-menu.vsm_collapsed {}\n.v-sidebar-menu.vsm_rtl {}\n.v-sidebar-menu .vsm--item {}\n.v-sidebar-menu .vsm--link {}\n.v-sidebar-menu .vsm--link_active {}\n.v-sidebar-menu .vsm--link_open {}\n.v-sidebar-menu .vsm--link_mobile {}\n.v-sidebar-menu .vsm--link_level-[n] {}\n.v-sidebar-menu .vsm--link_disabled {}\n.v-sidebar-menu .vsm--title {}\n.v-sidebar-menu .vsm--icon {}\n.v-sidebar-menu .vsm--arrow {}\n.v-sidebar-menu .vsm--arrow_open {}\n.v-sidebar-menu .vsm--badge {}\n.v-sidebar-menu .vsm--badge_default {}\n.v-sidebar-menu .vsm--header {}\n.v-sidebar-menu .vsm--dropdown {}\n.v-sidebar-menu .vsm--mobile-bg {}\n.v-sidebar-menu .vsm--toggle-btn {}"),1)])),_:1}),ze,p(t,{lang:"css"},{default:E((()=>[y(w('@import "custom-var.scss";\n@import "vue-sidebar-menu/src/scss/vue-sidebar-menu.scss";'),1)])),_:1}),Ue,p(t,{lang:"html"},{default:E((()=>[Ne])),_:1})])};const qe={props:{lang:{type:String,required:!0}},data:()=>({isHighlighted:!1}),mounted(){this.isHighlighted||(j.highlightElement(this.$refs.code),this.isHighlighted=!0)}},Fe=y("    "),Ye=y("\r\n      "),Ve=y("\r\n    "),Ge=y("\r\n  ");qe.render=function(e,n,t,l,a,i){return m(),c("pre",null,[Fe,p("code",{ref:"code",class:`language-${t.lang}`},[Ye,I(e.$slots,"default"),Ve],2),Ge])};const Ke=D({history:W(),routes:[{path:"/",name:"Installation",component:ke},{path:"/basic-usage",name:"BasicUsage",component:_e},{path:"/props",name:"Props",component:Be},{path:"/events",name:"Events",component:Te},{path:"/styling",name:"Styling",component:je},{path:"/:pathMatch(.*)",component:ke}]});z(N).use(Ke).use(Ce).component("prism-code",qe).mount("#app");
