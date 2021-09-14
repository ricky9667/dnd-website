<template>
  <div id="reservation">
    <custom-header title="訂房資訊" subtitle="Reservation">
      <img class="header-image" :src="headerImage" alt="Reservation" />
    </custom-header>

    <div class="w-2/3 mx-auto bg-secondary rounded-lg p-4 mb-8">
      <custom-title title="敬請閱讀注意事項後再付訂金">
        <svg xmlns="http://www.w3.org/2000/svg" class="title-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </custom-title>
    </div>

    <h2 class="mb-8">訂房說明</h2>
    <div class="content-block">
      <ol class="list-decimal list-inside ml-8">
        <li v-for="(info, index) in reservationInfo" :key="index" class="my-1">
          {{ info }}
        </li>
      </ol>
    </div>

    <custom-footer />
  </div>
</template>

<script>
import CustomHeader from "../components/CustomHeader";
import CustomFooter from "../components/CustomFooter";
import CustomTitle from "../components/CustomTitle";

export default {
  name: "Reservation",
  components: { CustomHeader, CustomFooter, CustomTitle },
  setup() {
    const headerImage = "https://ik.imagekit.io/pxhytijjnsj/DnD/reservation-min__fdSKobHi.jpg?updatedAt=1631449643827";

    const reservationInfo = [
      "民宿房費皆為現金付款或匯款，無法刷卡。民宿入住時間為 15:00 ~ 22:00，退房時間為隔日 11:00。若因故住宿當日抵達時間晚於 22:00，請提前告知我們。",
      "早餐時間為 7:30 ~ 10:30，素食者請提前告知。",
      "室內一律禁煙，室外備有煙灰缸可使用。",
      "禁止攜帶寵物入住，若自行攜帶寵物將拒絕入住，房費無法退還。",
      "民宿無法接待臨時增加的房客，若有增加人數，無論是大人小孩都請在一天前通知民宿主人。",
      "民宿 1F 的客廳與餐廳為公共空間，包層客人無使用時間限制，個別客房入住時請在晚間 22:00 後降低音量，以免影響其他房客。",
      "本民宿位於山谷中，室外聲音會傳送得很遠，故晚上 21:30 後在室外喧嘩會有警察巡邏，請房客 21:30 後在室外務必保持安靜，以免影響附近鄉民。",
      "烤肉時間為 16:30 ~ 21:30，地點在民宿後院戶外烤肉區，烤肉需收 1000 元場地費。可借用烤肉架與代訂食材，烤肉網、鋁箔、木炭與免洗餐具等耗材需自備。",
      "廚房不外借，室內無法煮火鍋。另無提供電梯服務。",
      "取消訂房之扣款依觀光局規定辦理。",
    ];

    return { headerImage, reservationInfo };
  },
};
</script>