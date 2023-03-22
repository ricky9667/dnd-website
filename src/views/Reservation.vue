<template>
  <div id="reservation">
    <CustomHeader title="訂房資訊" subtitle="Reservation">
      <img class="header-image" :src="headerImage" alt="Reservation" />
    </CustomHeader>

    <h2 class="mb-8">訂房說明</h2>
    <div
      class="w-11/12 sm:w-5/6 md:w-4/5 lg:w-3/5 max-w-screen-xl text-left mx-auto"
    >
      <ol class="list-decimal list-inside">
        <li v-for="(info, index) in reservationInfo" :key="index" class="my-1">
          {{ info }}
        </li>
      </ol>
    </div>

    <router-link to="/rooms" class="read-complete-button mt-2 lg:mt-4">
      我知道了啦，帶我去訂房！
    </router-link>

    <CustomFooter />
  </div>
</template>

<script>
import CustomHeader from "../components/CustomHeader.vue";
import CustomFooter from "../components/CustomFooter.vue";

export default {
  name: "Reservation",
  components: { CustomHeader, CustomFooter },
  setup() {
    const headerImage =
      "https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/reservation-min__fdSKobHi.jpg?updatedAt=1631449643827";

    const reservationInfo = [
      "民宿房費皆為現金付款或匯款，無法刷卡。民宿入住時間為 15:00 ~ 22:00，退房時間為隔日 11:00。若因故住宿當日抵達時間晚於 22:00，請提前告知我們。",
      "早餐時間為 7:30 ~ 10:30，素食者請提前告知。",
      "室內一律禁煙，室外備有煙灰缸可使用。",
      "禁止攜帶寵物入住，若自行攜帶寵物將拒絕入住，房費無法退還。",
      "民宿無法接待臨時增加的房客，若有增加人數，無論是大人小孩都請在一天前通知民宿主人。",
      "民宿 1F 的客廳與餐廳為公共空間，包層客人無使用時間限制，個別客房入住時請在晚間 22:00 後降低音量，以免影響其他房客。",
      "民宿位於山谷中，室外聲音會傳送得很遠，故晚上 21:30 後在室外喧嘩會有警察巡邏，請房客 21:30 後在室外務必保持安靜，以免影響附近鄉民。",
      "民宿單純提供住宿服務，廚房不外借，室內外均無法煮火鍋或烤肉。另無提供電梯服務。",
      "取消訂房之扣款依觀光局規定辦理。",
    ];

    return { headerImage, reservationInfo };
  },
};
</script>

<style>
.read-complete-button {
  @apply text-sm text-primary px-6 py-2 my-2 font-bold;
  @apply md:text-base md:my-4;
  @apply inline-block rounded-full bg-secondary;
  @apply hover:rotate-6 transform duration-300;
}
</style>
