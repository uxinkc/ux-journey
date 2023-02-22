import{_ as h,d as p,f as _,r as v,o as g,h as x,a as y,e as m,b as e,i as E,g as f,u as k,z as w}from"./index.2a438694.js";import{u as I}from"./useNavigation.8a310bf5.js";const S="/ux-journey/img/example1.png",B="/ux-journey/img/example2.png",C="/ux-journey/img/example3.png",L=p(()=>_(()=>import("./BaseHeader.a0bea969.js"),["assets/BaseHeader.a0bea969.js","assets/index.2a438694.js","assets/index.496be95f.css","assets/useNavigation.8a310bf5.js"])),T=p(()=>_(()=>import("./BaseFooter.4d7e6a2e.js"),["assets/BaseFooter.4d7e6a2e.js","assets/index.2a438694.js","assets/index.496be95f.css"])),V={components:{baseHeader:L,baseFooter:T},setup(u){v("/ux-journey/");const s=k(),{goto:l}=I(),{showSuccessGrowl:t,showErrorGrowl:i,showWhiteout:b,setOrigin:r}=w();g(()=>{});const o=()=>{let n=document.getElementById("m2-1"),d=document.getElementById("m2-2"),a=document.getElementById("m2-3");n.checked&&a.checked&&!d.checked?(l("/learning/level-1/certificate"),s.dispatch("learning/setLevelCompleted",1),t({title:"Correct",useIcon:"true",msg:"Great, you are now certified as Level 1."})):(l("/learning/level-1/step-1"),i({title:"Incorrect",useIcon:"true",msg:"Oh no! It looks like you need to review the content again."})),c()},c=()=>{let n=document.getElementById("m2-1"),d=document.getElementById("m2-2"),a=document.getElementById("m2-3");n.checked=!1,d.checked=!1,a.checked=!1};return{goto:l,submit:o}}},j={id:"main-content",tabindex:"-1"},A=e("div",{class:"fds-section"},[e("div",{class:"fds-section__bd"},[e("div",{class:"fds-m-t--s fds-m-b--m"},[e("h1",null,"Learning - Level 1 Exam")])])],-1),G={class:"fds-section"},H={class:"fds-section__bd"},N={class:"fds-level fds-level--none@s fds-level--full@m fds-level--grow-even fds-level--align-top fds-level--gutter-l"},O={class:"ds-article"},F=E('<p class="fds-text-size--4 fds-m-b--l">Select all of the Menu Examples below that correctly follow the principles of Miller&#39;s Law.</p><div class="fds-field fds-field--fill"><ul class="fds-form-list" aria-describedby="millers-help" aria-labelledby="s"><li class="fds-level fds-level--none fds-m-b--s fds-box fds-box--bg-0"><p><input class="fds-checkbox" id="m2-1" type="checkbox" name="millers"><label for="m2-1">Select Example 1</label></p><p class=""><img src="'+S+'"></p></li><li class="fds-level fds-level--none fds-m-b--s fds-box fds-box--bg-0"><p><input class="fds-checkbox" id="m2-2" type="checkbox" name="millers"><label for="m2-2">Select Example 2</label></p><p class=""><img src="'+B+'"></p></li><li class="fds-level fds-level--none fds-m-b--s fds-box fds-box--bg-0"><p><input class="fds-checkbox" id="m2-3" type="checkbox" name="millers"><label for="m2-3">Select Example 3</label></p><p class=""><img src="'+C+'"></p></li></ul><span class="fds-field__help" id="millers-help">Select all that apply</span></div>',2),M={class:"fds-field fds-m-t--xl"};function P(u,s,l,t,i,b){const r=f("baseHeader"),o=f("baseFooter");return x(),y("div",null,[m(r,{USE_SEARCH:"true"}),e("main",j,[A,e("div",G,[e("div",H,[e("div",N,[e("article",O,[F,e("div",M,[e("p",null,[e("button",{onClick:s[0]||(s[0]=(...c)=>t.submit&&t.submit(...c)),class:"fds-btn fds-btn--primary"},"Submit Test")])])])])])])]),m(o)])}const D=h(V,[["render",P]]);export{D as default};