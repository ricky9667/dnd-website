!function(t){function e(e){for(var n,a,r=e[0],s=e[1],l=e[2],j=0,m=[];j<r.length;j++)a=r[j],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&m.push(i[a][0]),i[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);for(u&&u(e);m.length;)m.shift()();return c.push.apply(c,l||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],n=!0,r=1;r<o.length;r++){var s=o[r];0!==i[s]&&(n=!1)}n&&(c.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},i={"app~c714bc7b":0},c=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var r=window.webpackJsonp=window.webpackJsonp||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=s;c.push([0,"app~d0ae3f07","app~5ea1a303","app~987e6011","app~54390a24","app~3beb61e6","app~a775fd80","app~fdc6512a","app~06837ae4"]),o()}({"63f8":function(t,e,o){"use strict";o("b2a9")},a18c:function(t,e,o){"use strict";var n=o("6c02"),i=o("7a23"),c={id:"home"},a=["src"],r=Object(i.g)("img",{class:"hidden lg:block image-block",src:"https://ik.imagekit.io/pxhytijjnsj/about-min_3s15cyzSe.jpg?updatedAt=1629827141935",alt:"About DnD"},null,-1),s=Object(i.g)("img",{class:"image-block",src:"https://ik.imagekit.io/pxhytijjnsj/surroundings-min_wXK6ocpfL.jpg?updatedAt=1629827088209",alt:"DnD Surroundings"},null,-1),l=Object(i.g)("img",{class:"image-block",src:"https://ik.imagekit.io/pxhytijjnsj/tourism-min_b7KnlkS6jw.jpg?updatedAt=1629825929111",alt:"DnD Location"},null,-1);var u=o("339c"),j=o("604d"),m=o("3799"),b={name:"Home",components:{CustomHeader:u.a,CustomFooter:j.a,ImageSection:m.a},setup:function(){return{headerImage:"https://ik.imagekit.io/pxhytijjnsj/home-min_j91Rodc2s.jpg?updatedAt=1629825939747",aboutDndInfo:["這裡是宜蘭三星鄉的 DnD 民宿。","雪山支脈的乾淨泉水，成就了一望無際的農田，這裡耕種著屬於自然的禮物 - 三星蔥、銀柳、上將梨，從種植到收割，有著在地農民的腳印與汗水。","放鬆、簡單、慢活，是我們生活的步調，請用最放鬆的心情體會田園風光、水岸山景。","樂活、自在、抒壓，讓這段旅程留下最美好的回憶。","歡迎大家一起來這裡呼吸新鮮的空氣、親近大自然的土地。也感謝有這樣的緣分，讓 DnD 成為您駐足的空間。"],surroundingsInfo:["民宿 2F 共 3 間 客房，每間客房可容納 2-6 人住宿，全棟最大容量為住宿 16 人（2A、2C 最多 6 人，2B 最多 4 人）。","民宿室內禁煙，無法接待寵物、無法接待臨時增加的房客。客廳無卡拉 OK、無麻將桌。主人自用 1F 房間與廚房。"],surroundingsButton:{text:"參觀客房",link:"/rooms"},locationInfo:["農舍位於前往太平山、明池、武陵農場等地的入口，開車到太平山收費口約 50 分鐘，到武陵農場約 2 小時。附近有步行可達的公車站、咖啡簡餐，距離 1.5km 的三星市區有全聯社和各式餐廳。"],locationButton:{text:"查看景點",link:"/tourism"}}},render:function(t,e,o,n,u,j){var m=Object(i.C)("custom-header"),b=Object(i.C)("image-section"),d=Object(i.C)("custom-footer");return Object(i.w)(),Object(i.f)("div",c,[Object(i.j)(m,{title:"DnD 民宿",subtitle:"DnD Homestay"},{default:Object(i.H)((function(){return[Object(i.g)("img",{class:"header-image",src:n.headerImage,alt:"Home"},null,8,a)]})),_:1}),Object(i.j)(b,{title:"來到 DnD",infos:n.aboutDndInfo},{default:Object(i.H)((function(){return[r]})),_:1},8,["infos"]),Object(i.j)(b,{title:"DnD 環境",infos:n.surroundingsInfo,button:n.surroundingsButton},{default:Object(i.H)((function(){return[s]})),_:1},8,["infos","button"]),Object(i.j)(b,{title:"DnD 位置",infos:n.locationInfo,button:n.locationButton},{default:Object(i.H)((function(){return[l]})),_:1},8,["infos","button"]),Object(i.j)(d)])}},d=b,p={id:"about"},f=["src"],g=Object(i.g)("img",{class:"image-block shadow-xl",src:"https://ik.imagekit.io/pxhytijjnsj/about_lvyrBBCwj.jpg?updatedAt=1629827222671",alt:"Room example"},null,-1);var O={name:"About",components:{CustomHeader:u.a,CustomFooter:j.a,ImageSection:m.a},setup:function(){return{headerImage:"https://ik.imagekit.io/pxhytijjnsj/about-min_BxEgc7tZz.jpg?updatedAt=1629825928432",aboutUsInfo:["DnD 的名字來自女主人名字 Dory 與男主人名字 Dale，我們原本都是台北忙碌的上班族，來宜蘭只是當個假日農夫紓解工作壓力。","因緣際會下蓋了農舍、申請了民宿。103 年至今，點點滴滴建設起我們心中想要的家。","我們不是專業的旅店，只是分享我們喜愛的鄉村生活，亂亂種的成果，希望讓來到此處的你，也能在忙碌中找到寧靜。"]}},render:function(t,e,o,n,c,a){var r=Object(i.C)("custom-header"),s=Object(i.C)("image-section"),l=Object(i.C)("custom-footer");return Object(i.w)(),Object(i.f)("div",p,[Object(i.j)(r,{title:"關於我們",subtitle:"About us"},{default:Object(i.H)((function(){return[Object(i.g)("img",{class:"header-image",src:n.headerImage,alt:"About"},null,8,f)]})),_:1}),Object(i.j)(s,{title:"DnD 的由來",infos:n.aboutUsInfo},{default:Object(i.H)((function(){return[g]})),_:1},8,["infos"]),Object(i.j)(l)])}},h=O,k={id:"rooms"},w=["src"],y={class:"content-block"},v={class:"rooms-section"},C={class:"lg:col-span-2 px-4"},x=["src"],A={class:"rooms-section"},_={class:"lg:col-span-2 px-4"},D=["src"],I={class:"rooms-section"},H={class:"lg:col-span-2 px-4"},B=["src"],F={class:"rooms-section"},T={class:"lg:col-span-2 px-4"},R=["src"],S={id:"add-tenant",class:"content-block"},P={class:""},E=Object(i.g)("h4",{class:"font-bold my-1"},"平日 & 假日",-1),K=Object(i.g)("ul",{class:"list-disc list-inside"},[Object(i.g)("li",null,"３歲以上：600 元/人（含早餐及寢具）"),Object(i.g)("li",null,"３～６歲：300 元/人（含早餐、無寢具）")],-1),z=Object(i.g)("h4",{class:"font-bold my-1"},"農曆過年",-1),M=Object(i.g)("ul",{class:"list-disc list-inside"},[Object(i.g)("li",null,"３歲以上：800 元/人（含早餐及寢具）"),Object(i.g)("li",null,"３～６歲：400 元/人（含早餐、無寢具）")],-1);var J=o("9548"),L=o("5333"),U=o("90ea"),W=o("a16a"),q={name:"Rooms",components:{CustomTitle:J.a,CustomHeader:u.a,CustomFooter:j.a,RoomContent:L.a,Swiper:U.a,SwiperSlide:W.a},setup:function(){var t="https://ik.imagekit.io/pxhytijjnsj/rooms-min_AALKbld4y.jpg?updatedAt=1629825934506";return{headerImage:t,roomInfo:["DnD 為合法新建民宿，為獨棟農舍，周遭是稻米、青蔥種植區，遠處群山環繞，安靜、空氣好。","民宿 1 樓的公共空間有客廳與餐廳，2 樓則有 3 間住宿客房，每間客房可容納 2 - 6 人住宿，全棟最大容量為住宿 16 人。","所有房間均有大面窗景，北歐風實木家具。餐廳有真正的材燒壁爐、懷舊木馬，客廳有積木火車軌道、各類書籍消遣時間。","或者也可以喝杯咖啡，享受周遭滿滿的綠意。"],room2F:{title:"2F 包層",images:["https://ik.imagekit.io/pxhytijjnsj/2F-min_huytqpMAp.jpg?updatedAt=1629828843089",t],descriptions:["包層為同時預訂 2F 三間房間，當天不會有其他客人入住。","入住人數可為 6 - 16 人，費用依實際人數而有不同。當住宿人數為 6 人時收費如下表。"],price:{weekday:8340,weekend:9540,holiday:14310}},room2A:{title:"2A 山景房",images:["https://ik.imagekit.io/pxhytijjnsj/2A-min_27Jx4BE4o.jpg?updatedAt=1629827328394","https://ik.imagekit.io/pxhytijjnsj/2A-1-min_w-mEUCtL6.jpg?updatedAt=1629827341285","https://ik.imagekit.io/pxhytijjnsj/2A-2-min_XNgmaH1cg.jpg?updatedAt=1629827322020"],descriptions:["房型 2A 有一張加大雙人床，和 2 張沙發。","4 人住宿時使用一張乳膠墊沙發床，6 人住宿時使用 2 張乳膠墊沙發床。"],price:{weekday:2880,weekend:3280,holiday:4920}},room2B:{title:"2B 樓中樓山景房",images:["https://ik.imagekit.io/pxhytijjnsj/2B-min_YowtIH-uR.jpg?updatedAt=1629827265086","https://ik.imagekit.io/pxhytijjnsj/2B-1-min_In3RJ-iPY.jpg?updatedAt=1629827332433","https://ik.imagekit.io/pxhytijjnsj/2B-2-min_a_0sU7ZX0.jpg?updatedAt=1629827336601"],descriptions:["房型 2B 住宿 2 人時使用一張加大雙人床，住宿 3 - 4 人使用樓中樓地板彈簧床墊。"],price:{weekday:2680,weekend:3080,holiday:4620}},room2C:{title:"2C 樓中樓山景房",images:["https://ik.imagekit.io/pxhytijjnsj/2C-min__kD5lO_A2.jpg?updatedAt=1629827310074","https://ik.imagekit.io/pxhytijjnsj/2C-1-min_bjN09h9GP.jpg?updatedAt=1629827317689","https://ik.imagekit.io/pxhytijjnsj/2C-2-min_qqPYWaKI4.jpg?updatedAt=1629827312429"],descriptions:["房型 2C 住宿 2 人時使用一張加大雙人床，住宿 3 - 4 人使用樓中樓地板彈簧床墊，住宿 5 - 6 人使用沙發床。"],price:{weekday:2780,weekend:3180,holiday:4770}}}}};o("ac2b");q.render=function(t,e,o,n,c,a){var r=Object(i.C)("custom-header"),s=Object(i.C)("CustomTitle"),l=Object(i.C)("swiper-slide"),u=Object(i.C)("swiper"),j=Object(i.C)("room-content"),m=Object(i.C)("custom-footer");return Object(i.w)(),Object(i.f)("div",k,[Object(i.j)(r,{title:"客房介紹",subtitle:"Rooms"},{default:Object(i.H)((function(){return[Object(i.g)("img",{class:"header-image",src:n.headerImage,alt:"Rooms"},null,8,w)]})),_:1}),Object(i.g)("section",y,[Object(i.j)(s,{title:"客房與公共空間"}),(Object(i.w)(!0),Object(i.f)(i.a,null,Object(i.A)(n.roomInfo,(function(t,e){return Object(i.w)(),Object(i.f)("p",{key:e,class:"my-1"},Object(i.E)(t),1)})),128))]),Object(i.g)("section",v,[Object(i.g)("div",C,[Object(i.j)(u,{class:"rooms-swiper",effect:"fade",navigation:!0,loop:!0,pagination:{clickable:!0}},{default:Object(i.H)((function(){return[(Object(i.w)(!0),Object(i.f)(i.a,null,Object(i.A)(n.room2F.images,(function(t,e){return Object(i.w)(),Object(i.d)(l,{key:e,class:"rounded-xl overflow-hidden"},{default:Object(i.H)((function(){return[Object(i.g)("img",{class:"swiper-image rounded-xl",src:t,alt:"2F"},null,8,x)]})),_:2},1024)})),128))]})),_:1})]),Object(i.j)(j,{class:"lg:order-first",title:n.room2F.title,descriptions:n.room2F.descriptions,price:n.room2F.price},null,8,["title","descriptions","price"])]),Object(i.g)("section",A,[Object(i.g)("div",_,[Object(i.j)(u,{class:"rooms-swiper",effect:"fade",navigation:!0,loop:!0,pagination:{clickable:!0}},{default:Object(i.H)((function(){return[(Object(i.w)(!0),Object(i.f)(i.a,null,Object(i.A)(n.room2A.images,(function(t,e){return Object(i.w)(),Object(i.d)(l,{key:e,class:"rounded-xl overflow-hidden"},{default:Object(i.H)((function(){return[Object(i.g)("img",{class:"swiper-image rounded-xl",src:t,alt:"2A"},null,8,D)]})),_:2},1024)})),128))]})),_:1})]),Object(i.j)(j,{title:n.room2A.title,descriptions:n.room2A.descriptions,price:n.room2A.price},null,8,["title","descriptions","price"])]),Object(i.g)("section",I,[Object(i.g)("div",H,[Object(i.j)(u,{class:"rooms-swiper",effect:"fade",navigation:!0,loop:!0,pagination:{clickable:!0}},{default:Object(i.H)((function(){return[(Object(i.w)(!0),Object(i.f)(i.a,null,Object(i.A)(n.room2B.images,(function(t,e){return Object(i.w)(),Object(i.d)(l,{key:e,class:"rounded-xl overflow-hidden"},{default:Object(i.H)((function(){return[Object(i.g)("img",{class:"swiper-image rounded-xl",src:t,alt:"2B"},null,8,B)]})),_:2},1024)})),128))]})),_:1})]),Object(i.j)(j,{class:"lg:order-first",title:n.room2B.title,descriptions:n.room2B.descriptions,price:n.room2B.price},null,8,["title","descriptions","price"])]),Object(i.g)("section",F,[Object(i.g)("div",T,[Object(i.j)(u,{class:"rooms-swiper",effect:"fade",navigation:!0,loop:!0,pagination:{clickable:!0}},{default:Object(i.H)((function(){return[(Object(i.w)(!0),Object(i.f)(i.a,null,Object(i.A)(n.room2C.images,(function(t,e){return Object(i.w)(),Object(i.d)(l,{key:e,class:"rounded-xl overflow-hidden"},{default:Object(i.H)((function(){return[Object(i.g)("img",{class:"swiper-image rounded-xl",src:t,alt:"2C"},null,8,R)]})),_:2},1024)})),128))]})),_:1})]),Object(i.j)(j,{title:n.room2C.title,descriptions:n.room2C.descriptions,price:n.room2C.price},null,8,["title","descriptions","price"])]),Object(i.g)("section",S,[Object(i.g)("div",P,[Object(i.j)(s,{title:"增加人數價格"})]),E,K,z,M]),Object(i.j)(m)])};var G=q,X={id:"reservation"},Y=["src"],N=Object(i.g)("h4",{class:"m-auto mt-12 mb-6"},"敬請閱讀注意事項後再付訂金",-1),Z=Object(i.g)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 mx-auto animate-bounce",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(i.g)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 17l-4 4m0 0l-4-4m4 4V3"})],-1),Q={class:"content-block"},V={class:"list-decimal list-inside"};var $={name:"Reservation",components:{CustomHeader:u.a,CustomFooter:j.a,CustomTitle:J.a},setup:function(){return{headerImage:"https://ik.imagekit.io/pxhytijjnsj/reservation-min__fdSKobHi.jpg?updatedAt=1629825920542",reservationInfo:["民宿房費皆為現金付款或匯款，無法刷卡。民宿入住時間為 15:00 ~ 22:00，退房時間為隔日11:00。若因故住宿當日抵達時間晚於 22:00，請提前告知我們。","早餐時間為 7:30 - 10:30，素食者請提前告知。","室內一律禁煙，室外備有煙灰缸可使用。","禁止攜帶寵物入住，若自行攜帶寵物將拒絕入住，房費無法退還。","民宿無法接待臨時增加的房客，若有增加人數，無論是大人小孩都請在一天前通知民宿主人。","民宿 1F 的客廳與餐廳為公共空間，包層客人無使用時間限制，個別客房入住時請在 10:00 後降低音量，以免影響其他房客。","本民宿位於山谷中，室外聲音會傳送得很遠，故晚上 21:30 後在室外喧嘩會有警察巡邏，請房客 21:30 後在室外務必保持安靜，以免影響附近鄉民。","烤肉時間為 16:30 - 21:30，地點在民宿後院戶外烤肉區，烤肉需收1000元場地費。可借用烤肉架與代訂食材，烤肉網、鋁箔、木炭與免洗餐具等耗材需自備。","廚房不外借，室內無法煮火鍋。另無提供電梯服務。","取消訂房之扣款依觀光局規定辦理。"]}},render:function(t,e,o,n,c,a){var r=Object(i.C)("custom-header"),s=Object(i.C)("CustomTitle"),l=Object(i.C)("custom-footer");return Object(i.w)(),Object(i.f)("div",X,[Object(i.j)(r,{title:"訂房資訊",subtitle:"Reservation"},{default:Object(i.H)((function(){return[Object(i.g)("img",{class:"header-image",src:n.headerImage,alt:"Reservation"},null,8,Y)]})),_:1}),N,Z,Object(i.g)("div",Q,[Object(i.j)(s,{title:"訂房說明"}),Object(i.g)("ol",V,[(Object(i.w)(!0),Object(i.f)(i.a,null,Object(i.A)(n.reservationInfo,(function(t,e){return Object(i.w)(),Object(i.f)("li",{key:e,class:"mb-1"},Object(i.E)(t),1)})),128))])]),Object(i.j)(l)])}},tt=$,et={id:"transportation"},ot=["src"],nt={class:"content-block"},it=Object(i.g)("div",{class:"flex justify-center my-20"},[Object(i.g)("iframe",{class:"google-map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.0145504468114!2d121.62952617259401!3d24.664709691543308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3467e1e860fc55b1%3A0xc8bfd294046ef68e!2zRG5EIOawkeWuvy8gRG5EIEImQg!5e0!3m2!1szh-TW!2stw!4v1627232105031!5m2!1szh-TW!2stw",style:{border:"0"},allowfullscreen:"",loading:"lazy"})],-1);var ct={name:"Transportation",components:{CustomHeader:u.a,CustomFooter:j.a},setup:function(){return{headerImage:"https://ik.imagekit.io/pxhytijjnsj/transportation-min_8kPkJfs1K.jpg?updatedAt=1629825926470",transportationInfo:["民宿位在三星市中心和天送埤中間，是前往太平山、明池、棲蘭、武陵農場與福壽山農場等地的入口。羅東轉運站、羅東市中心有公車 1792、1793 可搭乘至茶廠站，下車後步行約 3 分鐘到達民宿。","雖遠離塵囂，但不會遺世獨立，附近有步行可達的公車站、超市、咖啡簡餐。距離三星市區1.5km，有全聯社、餐廳、知名老店白雪冰店、米粉湯等。距離天送埤1.5km，有知名小吃味珍香卜肉、蔥油餅。"]}}};o("63f8");ct.render=function(t,e,o,n,c,a){var r=Object(i.C)("custom-header"),s=Object(i.C)("custom-footer");return Object(i.w)(),Object(i.f)("div",et,[Object(i.j)(r,{title:"交通資訊",subtitle:"Transportation"},{default:Object(i.H)((function(){return[Object(i.g)("img",{class:"header-image",src:n.headerImage,alt:"Transportation"},null,8,ot)]})),_:1}),Object(i.g)("section",nt,[(Object(i.w)(!0),Object(i.f)(i.a,null,Object(i.A)(n.transportationInfo,(function(t){return Object(i.w)(),Object(i.f)("p",{key:t,class:"my-1"},Object(i.E)(t),1)})),128))]),it,Object(i.j)(s)])};var at=ct,rt={id:"tourism"},st=["src"];var lt={name:"Tourism",components:{CustomHeader:u.a,CustomFooter:j.a},setup:function(){return{headerImage:"https://ik.imagekit.io/pxhytijjnsj/tourism-min_b7KnlkS6jw.jpg?updatedAt=1629825929111"}},render:function(t,e,o,n,c,a){var r=Object(i.C)("custom-header"),s=Object(i.C)("custom-footer");return Object(i.w)(),Object(i.f)("div",rt,[Object(i.j)(r,{title:"鄰近景點",subtitle:"Tourism"},{default:Object(i.H)((function(){return[Object(i.g)("img",{class:"header-image",src:n.headerImage,alt:"Tourism"},null,8,st)]})),_:1}),Object(i.j)(s)])}},ut=[{path:"/",name:"Home",component:d,meta:{title:"DnD 休閒民宿 - 首頁"}},{path:"/about",name:"About",component:h,meta:{title:"DnD 休閒民宿 - 關於我們"}},{path:"/rooms",name:"Rooms",component:G,meta:{title:"DnD 休閒民宿 - 客房介紹"}},{path:"/reservation",name:"Reservation",component:tt,meta:{title:"DnD 休閒民宿 - 訂房資訊"}},{path:"/transportation",name:"Transportation",component:at,meta:{title:"DnD 休閒民宿 - 交通資訊"}},{path:"/tourism",name:"Tourism",component:lt,meta:{title:"DnD 休閒民宿 - 鄰近景點"}}],jt=Object(n.a)({history:Object(n.b)("/"),routes:ut});jt.beforeEach((function(t,e,o){document.title=t.meta.title,o()}));e.a=jt},ac2b:function(t,e,o){"use strict";o("e4ee")},b2a9:function(t,e,o){},dfb1:function(t,e,o){},e4ee:function(t,e,o){}});
//# sourceMappingURL=app~c714bc7b.fc6cbbc6.js.map