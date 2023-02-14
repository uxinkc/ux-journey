import{_ as h,d as u,f,r as k,o as y,h as v,a as x,e as r,b as e,i as E,g as m,u as I,z as g}from"./index.77ee2b66.js";import{u as B}from"./useNavigation.d08854cd.js";const C=u(()=>f(()=>import("./BaseHeader.795df0bd.js"),["assets/BaseHeader.795df0bd.js","assets/index.77ee2b66.js","assets/index.496be95f.css","assets/useNavigation.d08854cd.js"])),w=u(()=>f(()=>import("./BaseFooter.9c4c2ef0.js"),["assets/BaseFooter.9c4c2ef0.js","assets/index.77ee2b66.js","assets/index.496be95f.css"])),S={components:{baseHeader:C,baseFooter:w},setup(p){k("/ux-journey/"),I();const{goto:s}=B(),{showSuccessGrowl:d,showErrorGrowl:o,showWhiteout:_,setOrigin:b}=g();y(()=>{});const l=()=>{let t=document.getElementById("m-1"),n=document.getElementById("m-2"),a=document.getElementById("m-3"),i=document.getElementById("m-4");n.checked&&a.checked&&!t.checked&&!i.checked?(s("/curriculum/level-1/certificate"),d({title:"Correct",useIcon:"true",msg:"Great, you are now certified as Level 1."})):(s("/curriculum/level-1/step-1"),o({title:"Incorrect",useIcon:"true",msg:"Oh no! It looks like you need to review the content again."})),c()},c=()=>{let t=document.getElementById("m-1"),n=document.getElementById("m-2"),a=document.getElementById("m-3"),i=document.getElementById("m-4");t.checked=!1,n.checked=!1,a.checked=!1,i.checked=!1};return{goto:s,submit:l}}},A={id:"main-content",tabindex:"-1"},L=e("div",{class:"fds-section"},[e("div",{class:"fds-section__bd"},[e("div",{class:"fds-m-t--s fds-m-b--m"},[e("h1",null,"[Admin] Curriculum - Level 1 Exam")])])],-1),N={class:"fds-section"},V={class:"fds-section__bd"},G={class:"ds-article"},H=E('<p class="fds-text-size--4">Select the examples below that adhere to Miller&#39;s Law.</p><div class="fds-field"><ul class="fds-form-list" aria-describedby="millers-help" aria-labelledby="s"><li><span><input class="fds-checkbox" id="m-1" type="checkbox" name="millers"><label for="m-1">Stock Number: (5) 012344321-1</label></span></li><li><span><input class="fds-checkbox" id="m-2" type="checkbox" name="millers"><label for="m-2">Credit Card: 4232-1254-1209-5823</label></span></li><li><span><input class="fds-checkbox" id="m-3" type="checkbox" name="millers"><label for="m-3">+1 212.554.2987</label></span></li><li><span><input class="fds-checkbox" id="m-4" type="checkbox" name="millers"><label for="m-4">MCISI</label></span></li></ul><span class="fds-field__help" id="millers-help">Choose the millerss you fancy</span></div>',2),O={class:"fds-field fds-m-t--xl"};function T(p,s,d,o,_,b){const l=m("baseHeader"),c=m("baseFooter");return v(),x("div",null,[r(l,{USE_SEARCH:"true"}),e("main",A,[L,e("div",N,[e("div",V,[e("article",G,[H,e("div",O,[e("p",null,[e("button",{onClick:s[0]||(s[0]=(...t)=>o.submit&&o.submit(...t)),class:"fds-btn fds-btn--primary"},"Submit")])])])])])]),r(c)])}const P=h(S,[["render",T]]);export{P as default};