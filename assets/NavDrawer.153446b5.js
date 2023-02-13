import{_ as b,c as h,r as v,w as L,h as t,a as r,b as e,p as w,n as o,F as f,l as M,m as N,t as S}from"./index.64c3865f.js";import{u as k}from"./useNavigation.2cad501b.js";const B={props:{BASE_PATH:String,NAV_DATA:Object,IS_MENU_OPEN:Boolean},setup(u,{emit:l}){const{goto:d}=k(),n=h(()=>u.IS_MENU_OPEN),c=v(null),_=h(()=>u.SELECTED_MENU),a=v(null),i=s=>{s.hasChild=="true"?p(s.uid):d(s.path)},g=()=>{l("emitSetMenuOpen",!c)},p=s=>{l("emitSelectMenu",s)};return L([n,_],([s,m])=>{c.value=s,a.value=m}),{navigateTo:i,isMenuOpen:c,toggleMenu:g,selectedMenu:a}}},A=e("svg",{class:"fds-icon fds-icon--size-2","aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{d:"M3 18H16V16H3V18ZM3 13H13V11H3V13ZM3 6V8H16V6H3ZM21 15.59L17.42 12L21 8.41L19.59 7L14.59 12L19.59 17L21 15.59Z"})],-1),E=[A],O={class:"ds-nav-drawer__header"},V={key:0},y={key:1,type:"button",class:"fds-btn fds-btn--plain ds-btn--back",title:"Back to Main Menu","aria-label":"Back to Main Menu"},C=e("svg",{class:"fds-icon fds-icon--size-2","aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{d:"M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"})],-1),D=e("span",null,"Back to Main",-1),H=[C,D],x={class:"ds-nav-drawer__content"},T={"aria-label":"Primary Navigation"},P=["data-control-id"],I=["href","onClick"],Z=["d"],z={class:"ds-nav-drawer__label"},F=e("ul",{"aria-label":"Sub Navigation","aria-labelledby":""},[e("li",null,[e("a",{href:"",class:"ds-nav-drawer__item"},[e("span",null,"Sub Menu Item Drawer")])]),e("li",null,[e("a",{href:"",class:"ds-nav-drawer__item"},[e("span",null,"Sub Menu Item Drawer")])]),e("li",null,[e("a",{href:"",class:"ds-nav-drawer__item"},[e("span",null,"Sub Menu Item Drawer")])])],-1),U=[F];function Y(u,l,d,n,c,_){return t(),r("div",{class:o("ds-nav-drawer fds-hide@l "+(n.isMenuOpen?"ds-nav-drawer--open":" YYY "))},[e("button",{onClick:l[0]||(l[0]=a=>n.toggleMenu()),type:"button",class:"fds-btn fds-btn--plain ds-btn--icon",title:"Close Menu","aria-label":"Close Menu"},E),e("div",O,[n.isMenuOpen?w("",!0):(t(),r("h3",V,"FPAC Design System")),n.isMenuOpen?(t(),r("button",y,H)):w("",!0)]),e("div",x,[e("div",{class:o("ds-nav-drawer__main-menu"+(n.isMenuOpen?" ds-nav-drawer--translate-none":" ds-nav-drawer--translate-left")),"aria-hidden":"false"},[e("ul",T,[(t(!0),r(f,null,M(d.NAV_DATA.main,a=>(t(),r("li",{key:a.uid,"data-control-id":a.uid},[e("a",{href:d.BASE_PATH+a.path,onClick:N(i=>n.navigateTo(a),["prevent"]),class:o("ds-nav-drawer__item "+(n.selectedMenu==a.uid?"ds-nav-drawer__item--active":""))},[(t(!0),r(f,null,M([a.icon],i=>(t(),r("svg",{key:i.path,class:o(i.class),"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{d:i.path},null,8,Z)],2))),128)),e("span",z,S(a.label)+" Drawer",1)],10,I)],8,P))),128))])],2),e("div",{class:o("ds-nav-drawer__sub-menu"+(n.isMenuOpen?" ds-nav-drawer--translate-none":" ds-nav-drawer--translate-right")),"aria-hidden":"true"},U,2)])],2)}const J=b(B,[["render",Y]]);export{J as default};
