(window.webpackJsonp=window.webpackJsonp||[]).push([["app~06837ae4"],{1935:function(t,e,c){},2411:function(t,e,c){"use strict";c("d2d4")},"339c":function(t,e,c){"use strict";var n=c("7a23"),i={class:"header-title-box center-header-text m-auto"},a={class:"text-white mb-0 md:mb-2 lg:mb-4"},l={class:"text-white"};var o={name:"CustomHeader",props:["title","subtitle"]};c("68a2");o.render=function(t,e,c,o,b,s){return Object(n.y)(),Object(n.h)("header",null,[Object(n.D)(t.$slots,"default"),Object(n.i)("div",i,[Object(n.i)("h1",a,Object(n.G)(c.title),1),Object(n.i)("h3",l,Object(n.G)(c.subtitle),1)])])};e.a=o},3799:function(t,e,c){"use strict";c("9911");var n=c("7a23"),i={class:"image-section"},a={class:"image-section-content px-1"},l={class:"pt-0 pb-4"},o={class:"flex flex-col text-left items-start pt-4"};var b={name:"ImageSection",props:["title","infos","button"]};c("84ac");b.render=function(t,e,c,b,s,r){var u=Object(n.E)("router-link");return Object(n.y)(),Object(n.h)("div",i,[Object(n.D)(t.$slots,"default"),Object(n.i)("div",a,[Object(n.i)("h2",l,Object(n.G)(c.title),1),Object(n.i)("div",o,[(Object(n.y)(!0),Object(n.h)(n.a,null,Object(n.C)(c.infos,(function(t,e){return Object(n.y)(),Object(n.h)("p",{key:e,class:"my-1"},Object(n.G)(t),1)})),128)),c.button?(Object(n.y)(),Object(n.f)(u,{key:0,class:"image-section-button mt-2 lg:mt-4",to:c.button.link},{default:Object(n.L)((function(){return[Object(n.j)(Object(n.G)(c.button.text),1)]})),_:1},8,["to"])):Object(n.g)("",!0)])])])};e.a=b},"3b10":function(t,e,c){},5333:function(t,e,c){"use strict";var n=c("7a23"),i={class:"room-content"},a={class:"text-center lg:text-left"},l={class:"flex flex-col justify-start items-center lg:items-start"},o={class:"list-disc list-inside"},b={class:"flex flex-col justify-start items-center lg:items-start"},s={class:"tab-panel"},r={class:"text-center"},u=Object(n.i)("p",{class:"inline-block align-middle ml-1"},"$300/人: 3-6 歲，含早餐",-1),j=Object(n.i)("p",{class:"inline-block align-middle ml-1"},"$600/人: 6 歲+，含早餐、寢具",-1),O={class:"tab-panel"},f={class:"text-center"},d=Object(n.i)("p",{class:"inline-block align-middle ml-1"},"$300/人: 3-6 歲，含早餐",-1),m=Object(n.i)("p",{class:"inline-block align-middle ml-1"},"$600/人: 6 歲+，含早餐、寢具",-1),v={class:"tab-panel"},p={class:"text-center"},k=Object(n.i)("p",{class:"inline-block align-middle ml-1"},"$400/人: 3-6 歲，含早餐",-1),h=Object(n.i)("p",{class:"inline-block align-middle ml-1"},"$800/人: 6 歲+，含早餐、寢具",-1);var g={class:"custom-title"},x={class:"inline-block align-middle ml-2"};var y={name:"CustomTitle",props:["title"]};c("607b");y.render=function(t,e,c,i,a,l){return Object(n.y)(),Object(n.h)("div",g,[Object(n.D)(t.$slots,"default"),Object(n.i)("h4",x,Object(n.G)(c.title),1)])};var w=y,I=c("9510"),C=c("d511"),E={name:"RoomContent",components:{CustomTitle:w,HomeIcon:I.f,CurrencyDollarIcon:I.c,UserAddIcon:I.k,TabGroup:C.b,TabList:C.c,Tab:C.a,TabPanels:C.e,TabPanel:C.d},props:["title","descriptions","price"]};c("e14f");E.render=function(t,e,c,g,x,y){var w=Object(n.E)("HomeIcon"),I=Object(n.E)("custom-title"),C=Object(n.E)("CurrencyDollarIcon"),E=Object(n.E)("Tab"),L=Object(n.E)("TabList"),_=Object(n.E)("UserAddIcon"),T=Object(n.E)("TabPanel"),G=Object(n.E)("TabPanels"),B=Object(n.E)("TabGroup");return Object(n.y)(),Object(n.h)("div",i,[Object(n.i)("h2",a,Object(n.G)(c.title),1),Object(n.i)("div",l,[Object(n.k)(I,{title:"客房介紹"},{default:Object(n.L)((function(){return[Object(n.k)(w)]})),_:1}),Object(n.i)("ul",o,[(Object(n.y)(!0),Object(n.h)(n.a,null,Object(n.C)(c.descriptions,(function(t,e){return Object(n.y)(),Object(n.h)("li",{key:e},Object(n.G)(t),1)})),128))])]),Object(n.i)("div",b,[Object(n.k)(I,{title:"定價"},{default:Object(n.L)((function(){return[Object(n.k)(C)]})),_:1}),Object(n.k)(B,null,{default:Object(n.L)((function(){return[Object(n.k)(L,null,{default:Object(n.L)((function(){return[Object(n.k)(E,null,{default:Object(n.L)((function(t){var e=t.selected;return[Object(n.i)("button",{class:Object(n.q)([e?"tab-button tab-button-selected":"tab-button tab-button-normal"])},"平日",2)]})),_:1}),Object(n.k)(E,null,{default:Object(n.L)((function(t){var e=t.selected;return[Object(n.i)("button",{class:Object(n.q)([e?"tab-button tab-button-selected":"tab-button tab-button-normal"])},"假日",2)]})),_:1}),Object(n.k)(E,null,{default:Object(n.L)((function(t){var e=t.selected;return[Object(n.i)("button",{class:Object(n.q)([e?"tab-button tab-button-selected":"tab-button tab-button-normal"])},"過年",2)]})),_:1})]})),_:1}),Object(n.k)(G,null,{default:Object(n.L)((function(){return[Object(n.k)(T,null,{default:Object(n.L)((function(){return[Object(n.i)("div",s,[Object(n.i)("h4",r,"NT $"+Object(n.G)(c.price.weekday)+" (每間 2 人)",1),Object(n.i)("div",null,[Object(n.k)(_,{class:"h-6 w-6 text-content"}),u]),Object(n.i)("div",null,[Object(n.k)(_,{class:"h-6 w-6 text-content"}),j])])]})),_:1}),Object(n.k)(T,null,{default:Object(n.L)((function(){return[Object(n.i)("div",O,[Object(n.i)("h4",f,"NT $"+Object(n.G)(c.price.weekend)+" (2 人)",1),Object(n.i)("div",null,[Object(n.k)(_,{class:"h-6 w-6 text-content"}),d]),Object(n.i)("div",null,[Object(n.k)(_,{class:"h-6 w-6 text-content"}),m])])]})),_:1}),Object(n.k)(T,null,{default:Object(n.L)((function(){return[Object(n.i)("div",v,[Object(n.i)("h4",p,"NT $"+Object(n.G)(c.price.holiday)+" (2 人)",1),Object(n.i)("div",null,[Object(n.k)(_,{class:"h-6 w-6 text-content"}),k]),Object(n.i)("div",null,[Object(n.k)(_,{class:"h-6 w-6 text-content"}),h])])]})),_:1})]})),_:1})]})),_:1})])])};e.a=E},"56d7":function(t,e,c){"use strict";c.r(e);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23"),i=c("86bb"),a=c.n(i),l={class:"flex flex-col md:flex-row justify-between"},o={class:"flex flex-row justify-between"},b=Object(n.i)("img",{class:"h-12 md:h-16 px-4 py-1",src:a.a,alt:"首頁"},null,-1),s={class:"nav-links"},r=Object(n.i)("div",null,"首頁",-1),u=Object(n.i)("div",null,"關於我們",-1),j=Object(n.i)("div",null,"客房介紹",-1),O=Object(n.i)("div",null,"訂房資訊",-1),f=Object(n.i)("div",null,"交通資訊",-1),d=Object(n.i)("div",null,"鄰近景點",-1);var m=c("9510"),v={id:"hamburger-button",ref:"toggleButton"},p=[Object(n.i)("span",null,null,-1),Object(n.i)("span",null,null,-1),Object(n.i)("span",null,null,-1),Object(n.i)("span",null,null,-1)];var k={name:"HamburgerButton",props:[],setup:function(){var t=Object(n.B)({});Object(n.v)((function(){t.value=document.getElementById("hamburger-button")}));return{toggleButtonRef:t,toggleClass:function(){t.value.classList.toggle("open")},removeClass:function(){t.value.classList.remove("open")}}}};c("efcf");k.render=function(t,e,c,i,a,l){return Object(n.y)(),Object(n.h)("div",v,p,512)};var h=k,g={id:"back-to-top"},x={href:"#"},y={id:"back-to-top-container"},w=Object(n.i)("div",{id:"back-to-top-text"},"回到頂部",-1);var I={name:"BackToTop",components:{ArrowSmUpIcon:m.a,ArrowUpIcon:m.b}};c("2411");I.render=function(t,e,c,i,a,l){var o=Object(n.E)("ArrowSmUpIcon"),b=Object(n.E)("ArrowUpIcon");return Object(n.y)(),Object(n.h)("div",g,[Object(n.i)("a",x,[Object(n.i)("div",y,[Object(n.k)(o,{class:"text-primary inline-block sm:hidden"}),Object(n.k)(b,{class:"text-primary hidden sm:inline-block"}),w])])])};var C=I,E={name:"App",components:{HomeIcon:m.f,InformationCircleIcon:m.g,KeyIcon:m.h,TagIcon:m.j,LocationMarkerIcon:m.i,GlobeIcon:m.e,HamburgerButton:h,BackToTop:C},setup:function(){var t=Object(n.B)({}),e=Object(n.B)({}),c=Object(n.B)(!1);Object(n.v)((function(){document.dispatchEvent(new Event("render-event")),t.value=document.getElementsByClassName("nav-links")[0]}));return{navbarItems:[{id:0,path:"/",title:"首頁"},{id:1,path:"/about",title:"關於我們"},{id:2,path:"/rooms",title:"客房介紹"},{id:3,path:"/reservation",title:"訂房資訊"},{id:4,path:"/transportation",title:"交通資訊"},{id:5,path:"/tourism",title:"鄰近景點"}],isOpenNavbar:c,toggleNavbar:function(){t.value.classList.toggle("active"),c.value=!c.value,e.value.toggleClass()},closeNavbar:function(){t.value.classList.remove("active"),e.value.removeClass()},hamburger:e}}};c("ac0f");E.render=function(t,e,c,i,a,m){var v=Object(n.E)("router-link"),p=Object(n.E)("HamburgerButton"),k=Object(n.E)("HomeIcon"),h=Object(n.E)("InformationCircleIcon"),g=Object(n.E)("KeyIcon"),x=Object(n.E)("TagIcon"),y=Object(n.E)("LocationMarkerIcon"),w=Object(n.E)("GlobeIcon"),I=Object(n.E)("BackToTop"),C=Object(n.E)("router-view");return Object(n.y)(),Object(n.h)(n.a,null,[Object(n.i)("nav",l,[Object(n.i)("div",o,[Object(n.k)(v,{to:"/"},{default:Object(n.L)((function(){return[b]})),_:1}),Object(n.i)("div",{onClick:e[0]||(e[0]=function(){return i.toggleNavbar&&i.toggleNavbar.apply(i,arguments)}),class:"md:hidden float-right icon-container nav-item"},[Object(n.k)(p,{ref:"hamburger",open:i.isOpenNavbar},null,8,["open"])])]),Object(n.i)("div",s,[Object(n.k)(v,{to:"/",class:"nav-item nav-link",onClick:i.closeNavbar},{default:Object(n.L)((function(){return[Object(n.k)(k),r]})),_:1},8,["onClick"]),Object(n.k)(v,{to:"/about",class:"nav-item nav-link",onClick:i.closeNavbar},{default:Object(n.L)((function(){return[Object(n.k)(h),u]})),_:1},8,["onClick"]),Object(n.k)(v,{to:"/rooms",class:"nav-item nav-link",onClick:i.closeNavbar},{default:Object(n.L)((function(){return[Object(n.k)(g),j]})),_:1},8,["onClick"]),Object(n.k)(v,{to:"/reservation",class:"nav-item nav-link",onClick:i.closeNavbar},{default:Object(n.L)((function(){return[Object(n.k)(x),O]})),_:1},8,["onClick"]),Object(n.k)(v,{to:"/transportation",class:"nav-item nav-link",onClick:i.closeNavbar},{default:Object(n.L)((function(){return[Object(n.k)(y),f]})),_:1},8,["onClick"]),Object(n.k)(v,{to:"/tourism",class:"nav-item nav-link",onClick:i.closeNavbar},{default:Object(n.L)((function(){return[Object(n.k)(w),d]})),_:1},8,["onClick"])])]),Object(n.k)(I,{class:"fixed right-2 bottom-2 sm:right-4 sm:bottom-4 lg:right-8 lg:bottom-8"}),Object(n.k)(C)],64)};var L=E,_=c("a18c"),T=(c("dfb1"),c("5f67"),c("6d3b")),G=c("e36a"),B=c("8343"),N=c("5dc8");T.a.use([G.a,B.a,N.a]),Object(n.e)(L).use(_.a).mount("#app")},"604d":function(t,e,c){"use strict";var n=c("7a23"),i={id:"footer"},a={class:"mx-auto flex flex-row items-center justify-center"},l=Object(n.i)("h4",{class:"text-lg font-bold mx-2 text-white"},"聯絡我們",-1),o={class:"footer-content"},b={class:"scale-transition",href:"tel:0918583517",target:"_blank"},s=Object(n.i)("h5",{class:"footer-text"},"電話訂房",-1),r={class:"scale-transition",href:"https://goo.gl/maps/hfuXQBPwAu7CdApa7",target:"_blank"},u=Object(n.i)("h5",{class:"footer-text"},"查看位置",-1),j={class:"scale-transition",href:"https://www.facebook.com/daledory",target:"_blank"},O=Object(n.i)("h5",{class:"footer-text"},"粉絲專頁",-1),f={class:"scale-transition",href:"https://line.me/R/ti/p/%40661wlbsv",target:"_blank"},d=Object(n.i)("h5",{class:"footer-text"},"Line 帳號",-1),m={class:"text-white"};var v=c("fd7f"),p={name:"CustomFooter",components:{MailIcon:v.d,PhoneOutgoingIcon:v.e,LocationMarkerIcon:v.c,FlagIcon:v.b,ChatIcon:v.a},setup:function(){return{copyright:"Copyright© DnD B&B Homestay"}}};c("e5d2");p.render=function(t,e,c,v,p,k){var h=Object(n.E)("MailIcon"),g=Object(n.E)("PhoneOutgoingIcon"),x=Object(n.E)("LocationMarkerIcon"),y=Object(n.E)("FlagIcon"),w=Object(n.E)("ChatIcon");return Object(n.y)(),Object(n.h)("footer",i,[Object(n.i)("section",a,[Object(n.k)(h,{class:"h-6 w-6 text-white"}),l]),Object(n.i)("section",o,[Object(n.i)("a",b,[Object(n.k)(g,{class:"footer-icon"}),s]),Object(n.i)("a",r,[Object(n.k)(x,{class:"footer-icon"}),u]),Object(n.i)("a",j,[Object(n.k)(y,{class:"footer-icon"}),O]),Object(n.i)("a",f,[Object(n.k)(w,{class:"footer-icon"}),d])]),Object(n.i)("h6",m,Object(n.G)(v.copyright),1)])};e.a=p},"607b":function(t,e,c){"use strict";c("8698")},"68a2":function(t,e,c){"use strict";c("b70e")},7816:function(t,e,c){"use strict";var n=c("7a23"),i=c("f097"),a=c.n(i),l={class:"under-construction"},o=Object(n.i)("img",{class:"mx-auto h-20 md:h-32 lg:h-44",src:a.a,alt:""},null,-1),b={class:"flex flex-row justify-center items-center gap-1 h-8"},s={class:"mx-2 sm:mx-4"};var r={name:"under-construction",components:{ExclamationIcon:c("9510").d},setup:function(){return{title:"網頁施工中",descriptions:["此頁面尚未開發完畢，完成後會以最快的速度立即更新！","請記得隨時關注官方頁面和其他平台，以獲得最新的資訊！"]}}};c("e7da");r.render=function(t,e,c,i,a,r){var u=Object(n.E)("ExclamationIcon");return Object(n.y)(),Object(n.h)("section",l,[o,Object(n.i)("div",b,[Object(n.k)(u,{class:"h-6 w-6 lg:h-8 lg:w-8"}),Object(n.i)("h4",null,Object(n.G)(i.title),1)]),Object(n.i)("div",s,[(Object(n.y)(!0),Object(n.h)(n.a,null,Object(n.C)(i.descriptions,(function(t){return Object(n.y)(),Object(n.h)("p",{class:"text-center",key:t},Object(n.G)(t),1)})),128))])])};e.a=r},"79b7":function(t,e,c){},"84ac":function(t,e,c){"use strict";c("79b7")},8698:function(t,e,c){},"86bb":function(t,e,c){t.exports=c.p+"img/dnd_logo_color.93ed9041.png"},"8ed1":function(t,e,c){},ac0f:function(t,e,c){"use strict";c("1935")},af5b:function(t,e,c){},b70e:function(t,e,c){},c08f:function(t,e,c){},d2d4:function(t,e,c){},e14f:function(t,e,c){"use strict";c("c08f")},e5d2:function(t,e,c){"use strict";c("af5b")},e7da:function(t,e,c){"use strict";c("3b10")},efcf:function(t,e,c){"use strict";c("8ed1")},f097:function(t,e,c){t.exports=c.p+"img/dnd_logo_black.86962cf8.png"}}]);
//# sourceMappingURL=app~06837ae4.91c7b741.js.map