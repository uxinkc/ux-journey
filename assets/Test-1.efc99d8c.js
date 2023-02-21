import{_ as h,d as b,f as p,r as k,o as y,h as g,a as v,e as r,b as e,i as j,g as m,u as E,z as x}from"./index.1a0e7ad5.js";import{u as I}from"./useNavigation.086bb970.js";const w=b(()=>p(()=>import("./BaseHeader.1d328521.js"),["assets/BaseHeader.1d328521.js","assets/index.1a0e7ad5.js","assets/index.496be95f.css","assets/useNavigation.086bb970.js"])),B=b(()=>p(()=>import("./BaseFooter.1ddbc2d7.js"),["assets/BaseFooter.1ddbc2d7.js","assets/index.1a0e7ad5.js","assets/index.496be95f.css"])),S={components:{baseHeader:w,baseFooter:B},setup(u){k("/ux-journey/"),E();const{goto:s}=I(),{showSuccessGrowl:d,showErrorGrowl:o,showWhiteout:_,setOrigin:f}=x();y(()=>{});const l=()=>{let t=document.getElementById("j-1"),n=document.getElementById("j-2"),c=document.getElementById("j-3"),i=document.getElementById("j-4");t.checked&&c.checked&&!n.checked&&!i.checked?(s("/learning/level-2/test-2"),d({title:"Correct",useIcon:"true",msg:"Great, keep on going."})):(s("/learning/level-2/step-1"),o({title:"Incorrect",useIcon:"true",msg:"Oh no! It looks like you need to review the content again."})),a()},a=()=>{let t=document.getElementById("j-1"),n=document.getElementById("j-2"),c=document.getElementById("j-3"),i=document.getElementById("j-4");t.checked=!1,n.checked=!1,c.checked=!1,i.checked=!1};return{goto:s,submit:l}}},C={id:"main-content",tabindex:"-1"},A=e("div",{class:"fds-section"},[e("div",{class:"fds-section__bd"},[e("div",{class:"fds-m-t--s fds-m-b--m"},[e("h1",null,"Learning - Level 2 Exam")])])],-1),L={class:"fds-section"},V={class:"fds-section__bd"},F={class:"ds-article"},G=j('<p class="fds-text-size--4">Which of the below concepts represent why Jakob&#39;s Law is valueable to Users?</p><div class="fds-field"><ul class="fds-form-list" aria-describedby="jakob-help" aria-labelledby="s"><li><span><input class="fds-checkbox" id="j-1" type="checkbox" name="millers"><label for="j-1">Establishes trust for Users</label></span></li><li><span><input class="fds-checkbox" id="j-2" type="checkbox" name="millers"><label for="j-2">Makes observable websites</label></span></li><li><span><input class="fds-checkbox" id="j-3" type="checkbox" name="millers"><label for="j-3">Familiarity helps Usability</label></span></li><li><span><input class="fds-checkbox" id="j-4" type="checkbox" name="millers"><label for="j-4">Accessibility is the law</label></span></li></ul><span class="fds-field__help" id="jakob-help">Select all that apply</span></div>',2),H={class:"fds-field fds-m-t--xl"};function N(u,s,d,o,_,f){const l=m("baseHeader"),a=m("baseFooter");return g(),v("div",null,[r(l,{USE_SEARCH:"true"}),e("main",C,[A,e("div",L,[e("div",V,[e("article",F,[G,e("div",H,[e("p",null,[e("button",{onClick:s[0]||(s[0]=(...t)=>o.submit&&o.submit(...t)),class:"fds-btn fds-btn--primary"},"Submit")])])])])])]),r(a)])}const U=h(S,[["render",N]]);export{U as default};
