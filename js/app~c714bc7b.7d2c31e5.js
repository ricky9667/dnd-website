!function(t){function e(e){for(var o,a,c=e[0],s=e[1],u=e[2],j=0,m=[];j<c.length;j++)a=c[j],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&m.push(i[a][0]),i[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);for(l&&l(e);m.length;)m.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={"app~c714bc7b":0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;r.push([0,"app~d0ae3f07","app~bf0d6831","app~9b480ef4","app~6b4a2b08","app~5ea1a303","app~987e6011","app~54390a24","app~3beb61e6","app~a775fd80","app~fdc6512a","app~06837ae4"]),n()}({"0acc":function(t,e,n){},"0e5f":function(t,e,n){},"5cbc":function(t,e,n){},a18c:function(t,e,n){"use strict";var o=n("6c02"),i=n("7a23"),r={id:"home"},a=["src"],c=["src"],s=["src"],u=["src"];var l=n("339c"),j=n("604d"),m=n("3799"),p={name:"Home",components:{CustomHeader:l.a,CustomFooter:j.a,ImageSection:m.a},setup:function(){return{headerImage:"https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/home-min_j91Rodc2s.jpg?updatedAt=1631449523190",aboutDndInfo:["這裡是宜蘭三星鄉的 DnD 民宿。","雪山支脈的乾淨泉水，成就了一望無際的農田，這裡耕種著屬於自然的禮物 - 三星蔥、銀柳、上將梨，從種植到收割，有著在地農民的腳印與汗水。","放鬆、簡單、慢活，是我們生活的步調，請用最放鬆的心情體會田園風光、水岸山景。","樂活、自在、抒壓，讓這段旅程留下最美好的回憶。","歡迎大家一起來這裡呼吸新鮮的空氣、親近大自然的土地。也感謝有這樣的緣分，讓 DnD 成為您駐足的空間。"],aboutImage:"https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/about-min_3s15cyzSe.jpg?updatedAt=1631449102395",surroundingsInfo:["民宿 2F 共 3 間 客房，每間客房可容納 2-4 人住宿，全棟最大容量為住宿 12 人。","民宿室內禁煙，無法接待寵物、無法接待臨時增加的房客。客廳無卡拉 OK、無麻將桌。主人自用 1F 房間與廚房。"],surroundingsButton:{text:"參觀客房",link:"/rooms"},surroundingsImage:"https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/surroundings-min_wXK6ocpfL.jpg?updatedAt=1631449511431",locationInfo:["農舍位於前往太平山、明池、武陵農場等地的入口，開車到太平山收費口約 50 分鐘，到武陵農場約 2 小時。附近有步行可達的公車站、咖啡簡餐，距離 1.5km 的三星市區有全聯社和各式餐廳。"],locationButton:{text:"查看景點",link:"/tourism"},locationImage:"https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/location-min_c-xn6PSTmVf.png?updatedAt=1631443560198"}}},d=n("6b0d"),b=n.n(d);var f=b()(p,[["render",function(t,e,n,o,l,j){var m=Object(i.D)("CustomHeader"),p=Object(i.D)("ImageSection"),d=Object(i.D)("CustomFooter");return Object(i.x)(),Object(i.g)("div",r,[Object(i.j)(m,{title:"DnD 民宿",subtitle:"DnD Homestay"},{default:Object(i.J)((function(){return[Object(i.h)("img",{class:"header-image",src:o.headerImage,alt:"Home"},null,8,a)]})),_:1}),Object(i.j)(p,{title:"來到 DnD",infos:o.aboutDndInfo},{default:Object(i.J)((function(){return[Object(i.h)("img",{class:"hidden lg:block image-block",src:o.aboutImage,alt:"About DnD"},null,8,c)]})),_:1},8,["infos"]),Object(i.j)(p,{title:"DnD 環境",infos:o.surroundingsInfo,button:o.surroundingsButton},{default:Object(i.J)((function(){return[Object(i.h)("img",{class:"image-block",src:o.surroundingsImage,alt:"DnD Surroundings"},null,8,s)]})),_:1},8,["infos","button"]),Object(i.j)(p,{title:"DnD 位置",infos:o.locationInfo,button:o.locationButton},{default:Object(i.J)((function(){return[Object(i.h)("img",{class:"image-block",src:o.locationImage,alt:"DnD Location"},null,8,u)]})),_:1},8,["infos","button"]),Object(i.j)(d)])}]]),g={id:"about"},O=["src"],h=["src"];var D={name:"About",components:{CustomHeader:l.a,CustomFooter:j.a,ImageSection:m.a},setup:function(){return{headerImage:"https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/about-min_BxEgc7tZz.jpg?updatedAt=1631449610173",aboutUsInfo:["DnD 的名字來自女主人名字 Dory 與男主人名字 Dale，我們原本都是台北忙碌的上班族，來宜蘭只是當個假日農夫紓解工作壓力。","因緣際會下蓋了農舍、申請了民宿。103 年至今，點點滴滴建設起我們心中想要的家。","我們不是專業的旅店，只是分享我們喜愛的鄉村生活，亂亂種的成果，希望讓來到此處的你，也能在忙碌中找到寧靜。"],aboutUsImage:"https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/about_lvyrBBCwj.jpg?updatedAt=1631443813874"}}};var k=b()(D,[["render",function(t,e,n,o,r,a){var c=Object(i.D)("CustomHeader"),s=Object(i.D)("ImageSection"),u=Object(i.D)("CustomFooter");return Object(i.x)(),Object(i.g)("div",g,[Object(i.j)(c,{title:"關於我們",subtitle:"About us"},{default:Object(i.J)((function(){return[Object(i.h)("img",{class:"header-image",src:o.headerImage,alt:"About"},null,8,O)]})),_:1}),Object(i.j)(s,{title:"DnD 的由來",infos:o.aboutUsInfo},{default:Object(i.J)((function(){return[Object(i.h)("img",{class:"image-block shadow-xl",src:o.aboutUsImage,alt:"About us"},null,8,h)]})),_:1},8,["infos"]),Object(i.j)(u)])}]]),w={id:"rooms"},x=["src"],v={class:"rooms-section"},y={class:"lg:col-span-2 px-4"},_=["src"],I={class:"rooms-section"},A={class:"lg:col-span-2 px-4"},C=["src"],B={class:"rooms-section"},F={class:"lg:col-span-2 px-4"},J=["src"],H={class:"rooms-section"},S={class:"lg:col-span-2 px-4"},R=["src"];var T=n("5333"),P=n("90ea"),E=n("a16a"),K={name:"Rooms",components:{CustomHeader:l.a,CustomFooter:j.a,RoomContent:T.a,Swiper:P.a,SwiperSlide:E.a},setup:function(){return{headerImage:"https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/rooms-min_AALKbld4y.jpg?updatedAt=1631449561513",room2F:{title:"2F 包層",images:["https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/2F-min_huytqpMAp.jpg?updatedAt=1631443670017"],descriptions:["包層為同時預訂 2F 三間房間，當天不會有其他客人入住，公共空間為餐廳與客廳，主人自用一樓房間與廚房。","入住人數可為 6 - 12 人，費用依實際人數而有不同。當住宿人數為 6 人時收費如下表。"],price:{weekday:8640,weekend:10140,holiday:14310}},room2A:{title:"2A 山景房",images:["https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/2A-min_27Jx4BE4o.jpg?updatedAt=1631443756327","https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/2A-1-min_w-mEUCtL6.jpg?updatedAt=1631443714977","https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/2A-2-min_XNgmaH1cg.jpg?updatedAt=1631443771128"],descriptions:["房型 2A 有一張加大雙人床，和 2 張沙發。","4 人住宿時使用一張乳膠墊沙發床。"],price:{weekday:2980,weekend:3480,holiday:4920}},room2B:{title:"2B 樓中樓山景房",images:["https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/2B-min_YowtIH-uR.jpg?updatedAt=1631443805815","https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/2B-1-min_In3RJ-iPY.jpg?updatedAt=1631443745893","https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/2B-2-min_a_0sU7ZX0.jpg?updatedAt=1631443723366"],descriptions:["房型 2B 住宿 2 人時使用一張加大雙人床，住宿 3 - 4 人使用樓中樓地板彈簧床墊。"],price:{weekday:2780,weekend:3280,holiday:4620}},room2C:{title:"2C 樓中樓山景房",images:["https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/2C-min__kD5lO_A2.jpg?updatedAt=1631443801357","https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/2C-1-min_bjN09h9GP.jpg?updatedAt=1631443784771","https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/2C-2-min_qqPYWaKI4.jpg?updatedAt=1631443798589"],descriptions:["房型 2C 住宿 2 人時使用一張加大雙人床，住宿 3 - 4 人使用樓中樓地板彈簧床墊。"],price:{weekday:2880,weekend:3380,holiday:4770}}}}};n("a51a");var U=b()(K,[["render",function(t,e,n,o,r,a){var c=Object(i.D)("CustomHeader"),s=Object(i.D)("swiper-slide"),u=Object(i.D)("swiper"),l=Object(i.D)("room-content"),j=Object(i.D)("RoomContent"),m=Object(i.D)("CustomFooter");return Object(i.x)(),Object(i.g)("div",w,[Object(i.j)(c,{title:"客房介紹",subtitle:"Rooms"},{default:Object(i.J)((function(){return[Object(i.h)("img",{class:"header-image",src:o.headerImage,alt:"Rooms"},null,8,x)]})),_:1}),Object(i.h)("section",v,[Object(i.h)("div",y,[Object(i.j)(u,{class:"rooms-swiper",effect:"fade",navigation:!0,loop:!0,pagination:{clickable:!0}},{default:Object(i.J)((function(){return[(Object(i.x)(!0),Object(i.g)(i.a,null,Object(i.B)(o.room2F.images,(function(t,e){return Object(i.x)(),Object(i.e)(s,{key:e,class:"rounded-xl overflow-hidden"},{default:Object(i.J)((function(){return[Object(i.h)("img",{class:"swiper-image rounded-xl",src:t,alt:"2F"},null,8,_)]})),_:2},1024)})),128))]})),_:1})]),Object(i.j)(l,{class:"lg:order-first",title:o.room2F.title,descriptions:o.room2F.descriptions,price:o.room2F.price},null,8,["title","descriptions","price"])]),Object(i.h)("section",I,[Object(i.h)("div",A,[Object(i.j)(u,{class:"rooms-swiper",effect:"fade",navigation:!0,loop:!0,pagination:{clickable:!0}},{default:Object(i.J)((function(){return[(Object(i.x)(!0),Object(i.g)(i.a,null,Object(i.B)(o.room2A.images,(function(t,e){return Object(i.x)(),Object(i.e)(s,{key:e,class:"rounded-xl overflow-hidden"},{default:Object(i.J)((function(){return[Object(i.h)("img",{class:"swiper-image rounded-xl",src:t,alt:"2A"},null,8,C)]})),_:2},1024)})),128))]})),_:1})]),Object(i.j)(j,{title:o.room2A.title,descriptions:o.room2A.descriptions,price:o.room2A.price},null,8,["title","descriptions","price"])]),Object(i.h)("section",B,[Object(i.h)("div",F,[Object(i.j)(u,{class:"rooms-swiper",effect:"fade",navigation:!0,loop:!0,pagination:{clickable:!0}},{default:Object(i.J)((function(){return[(Object(i.x)(!0),Object(i.g)(i.a,null,Object(i.B)(o.room2B.images,(function(t,e){return Object(i.x)(),Object(i.e)(s,{key:e,class:"rounded-xl overflow-hidden"},{default:Object(i.J)((function(){return[Object(i.h)("img",{class:"swiper-image rounded-xl",src:t,alt:"2B"},null,8,J)]})),_:2},1024)})),128))]})),_:1})]),Object(i.j)(j,{class:"lg:order-first",title:o.room2B.title,descriptions:o.room2B.descriptions,price:o.room2B.price},null,8,["title","descriptions","price"])]),Object(i.h)("section",H,[Object(i.h)("div",S,[Object(i.j)(u,{class:"rooms-swiper",effect:"fade",navigation:!0,loop:!0,pagination:{clickable:!0}},{default:Object(i.J)((function(){return[(Object(i.x)(!0),Object(i.g)(i.a,null,Object(i.B)(o.room2C.images,(function(t,e){return Object(i.x)(),Object(i.e)(s,{key:e,class:"rounded-xl overflow-hidden"},{default:Object(i.J)((function(){return[Object(i.h)("img",{class:"swiper-image rounded-xl",src:t,alt:"2C"},null,8,R)]})),_:2},1024)})),128))]})),_:1})]),Object(i.j)(j,{title:o.room2C.title,descriptions:o.room2C.descriptions,price:o.room2C.price},null,8,["title","descriptions","price"])]),Object(i.j)(m)])}]]),z={id:"reservation"},M=["src"],L=Object(i.h)("h2",{class:"mb-8"},"訂房說明",-1),W={class:"w-11/12 sm:w-5/6 md:w-4/5 lg:w-3/5 max-w-screen-xl text-left mx-auto"},q={class:"list-decimal list-inside"},G=Object(i.i)(" 我知道了啦，帶我去訂房！ ");var X={name:"Reservation",components:{CustomHeader:l.a,CustomFooter:j.a},setup:function(){return{headerImage:"https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/reservation-min__fdSKobHi.jpg?updatedAt=1631449643827",reservationInfo:["民宿房費皆為現金付款或匯款，無法刷卡。民宿入住時間為 15:00 ~ 22:00，退房時間為隔日 11:00。若因故住宿當日抵達時間晚於 22:00，請提前告知我們。","早餐時間為 7:30 ~ 10:30，素食者請提前告知。","室內一律禁煙，室外備有煙灰缸可使用。","禁止攜帶寵物入住，若自行攜帶寵物將拒絕入住，房費無法退還。","民宿無法接待臨時增加的房客，若有增加人數，無論是大人小孩都請在一天前通知民宿主人。","民宿 1F 的客廳與餐廳為公共空間，包層客人無使用時間限制，個別客房入住時請在晚間 22:00 後降低音量，以免影響其他房客。","民宿位於山谷中，室外聲音會傳送得很遠，故晚上 21:30 後在室外喧嘩會有警察巡邏，請房客 21:30 後在室外務必保持安靜，以免影響附近鄉民。","民宿單純提供住宿服務，廚房不外借，室內外均無法煮火鍋或烤肉。另無提供電梯服務。","取消訂房之扣款依觀光局規定辦理。"]}}};n("e676");var Y=b()(X,[["render",function(t,e,n,o,r,a){var c=Object(i.D)("CustomHeader"),s=Object(i.D)("router-link"),u=Object(i.D)("CustomFooter");return Object(i.x)(),Object(i.g)("div",z,[Object(i.j)(c,{title:"訂房資訊",subtitle:"Reservation"},{default:Object(i.J)((function(){return[Object(i.h)("img",{class:"header-image",src:o.headerImage,alt:"Reservation"},null,8,M)]})),_:1}),L,Object(i.h)("div",W,[Object(i.h)("ol",q,[(Object(i.x)(!0),Object(i.g)(i.a,null,Object(i.B)(o.reservationInfo,(function(t,e){return Object(i.x)(),Object(i.g)("li",{key:e,class:"my-1"},Object(i.F)(t),1)})),128))])]),Object(i.j)(s,{to:"/rooms",class:"read-complete-button mt-2 lg:mt-4"},{default:Object(i.J)((function(){return[G]})),_:1}),Object(i.j)(u)])}]]),N={id:"transportation"},Z=["src"],Q=Object(i.h)("iframe",{class:"google-map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.0145504468114!2d121.62952617259401!3d24.664709691543308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3467e1e860fc55b1%3A0xc8bfd294046ef68e!2zRG5EIOawkeWuvy8gRG5EIEImQg!5e0!3m2!1szh-TW!2stw!4v1627232105031!5m2!1szh-TW!2stw",style:{border:"0"},allowfullscreen:"",loading:"lazy"},null,-1);var V={name:"Transportation",components:{CustomHeader:l.a,CustomFooter:j.a,ImageSection:m.a},setup:function(){return{headerImage:"https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/transportation-min_8kPkJfs1K.jpg?updatedAt=1631449627555",transportationInfo:["民宿位在三星市中心和天送埤中間，是前往太平山、明池、棲蘭、武陵農場與福壽山農場等地的入口。羅東轉運站、羅東市中心有公車 1792、1793 可搭乘至茶廠站，下車後步行約 3 分鐘到達民宿。","雖遠離塵囂，但不會遺世獨立，附近有步行可達的公車站、超市、咖啡簡餐。距離三星市區1.5km，有全聯社、餐廳、知名老店白雪冰店、米粉湯等。距離天送埤1.5km，有知名小吃味珍香卜肉、蔥油餅。"],mapsButton:{text:"查看景點",link:"/tourism"}}}};n("b761");var $=b()(V,[["render",function(t,e,n,o,r,a){var c=Object(i.D)("CustomHeader"),s=Object(i.D)("ImageSection"),u=Object(i.D)("CustomFooter");return Object(i.x)(),Object(i.g)("div",N,[Object(i.j)(c,{title:"交通資訊",subtitle:"Transportation"},{default:Object(i.J)((function(){return[Object(i.h)("img",{class:"header-image",src:o.headerImage,alt:"Transportation"},null,8,Z)]})),_:1}),Object(i.j)(s,{title:"民宿位置與交通方式",infos:o.transportationInfo,button:o.mapsButton},{default:Object(i.J)((function(){return[Q]})),_:1},8,["infos","button"]),Object(i.j)(u)])}]]),tt={id:"tourism"},et=["src"];var nt=n("7816"),ot={name:"Tourism",components:{CustomHeader:l.a,CustomFooter:j.a,UnderConstruction:nt.a},setup:function(){return{headerImage:"https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/tourism-min_b7KnlkS6jw.jpg?updatedAt=1631449600838"}}};var it=[{path:"/",name:"Home",component:f,meta:{title:"DnD 休閒民宿 - 首頁"}},{path:"/about",name:"About",component:k,meta:{title:"DnD 休閒民宿 - 關於我們"}},{path:"/rooms",name:"Rooms",component:U,meta:{title:"DnD 休閒民宿 - 客房介紹"}},{path:"/reservation",name:"Reservation",component:Y,meta:{title:"DnD 休閒民宿 - 訂房資訊"}},{path:"/transportation",name:"Transportation",component:$,meta:{title:"DnD 休閒民宿 - 交通資訊"}},{path:"/tourism",name:"Tourism",component:b()(ot,[["render",function(t,e,n,o,r,a){var c=Object(i.D)("CustomHeader"),s=Object(i.D)("under-construction"),u=Object(i.D)("CustomFooter");return Object(i.x)(),Object(i.g)("div",tt,[Object(i.j)(c,{title:"鄰近景點",subtitle:"Tourism"},{default:Object(i.J)((function(){return[Object(i.h)("img",{class:"header-image",src:o.headerImage,alt:"Tourism"},null,8,et)]})),_:1}),Object(i.j)(s),Object(i.j)(u)])}]]),meta:{title:"DnD 休閒民宿 - 鄰近景點"}}],rt=Object(o.a)({history:Object(o.b)("/"),routes:it});rt.beforeEach((function(t,e,n){document.title=t.meta.title,n()}));e.a=rt},a51a:function(t,e,n){"use strict";n("0acc")},b761:function(t,e,n){"use strict";n("5cbc")},dfb1:function(t,e,n){},e676:function(t,e,n){"use strict";n("0e5f")}});
//# sourceMappingURL=app~c714bc7b.7d2c31e5.js.map