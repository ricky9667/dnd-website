<template>
  <div id="reservation">
    <Header title="訂房資訊" subtitle="Reservation"/>

    <h4 class="m-auto mt-12 mb-6">敬請閱讀注意事項後再付訂金</h4>

    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
    </svg>

    <div class="content-block">
      <CustomTitle title="訂房說明" />
      <ol class="list-decimal list-inside">
        <li v-for="info in reservationInfo" :key="info.id" class="mb-1">{{ info.text }}</li>
      </ol>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomTitle from '../components/CustomTitle';

export default {
  name: 'Reservation',
  components: {CustomTitle, Header, Footer},
  setup() {
    const reservationInfo = [
      {id: 1, text: '民宿房費皆為現金付款或匯款，無法刷卡。民宿入住時間為 15:00 ~ 22:00，退房時間為隔日11:00。若因故住宿當日抵達時間晚於 22:00，請提前告知我們。'},
      {id: 2, text: '早餐時間為 7:30 ~ 10:30，素食者請提前告知。'},
      {id: 3, text: '室內一律禁煙，室外備有煙灰缸可使用。'},
      {id: 4, text: '禁止攜帶寵物入住，若自行攜帶寵物將拒絕入住，房費無法退還。'},
      {id: 5, text: '民宿無法接待臨時增加的房客，若有增加人數，無論是大人小孩都請在一天前通知民宿主人。'},
      {id: 6, text: '民宿 1F 的客廳與餐廳為公共空間，包層客人無使用時間限制，個別客房入住時請在 10:00 後降低音量，以免影響其他房客。'},
      {id: 7, text: '本民宿位於山谷中，室外聲音會傳送得很遠，故晚上 21:30 後在室外喧嘩會有警察巡邏，請房客 21:30 後在室外務必保持安靜，以免影響附近鄉民。'},
      {id: 8, text: '烤肉時間為 16:30～21:30，地點在民宿後院戶外烤肉區，烤肉需收1000元場地費。可借用烤肉架與代訂食材，烤肉網、鋁箔、木炭與免洗餐具等耗材需自備。'},
      {id: 9, text: '廚房不外借，室內無法煮火鍋。另無提供電梯服務。'},
      {id: 10, text: '取消訂房之扣款依觀光局規定辦理。'}
    ]

    return {reservationInfo}
  }
}
</script>