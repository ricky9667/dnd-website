<template>
  <div id="home">
    <Header title="DnD 休閒民宿" subtitle="DnD Homestay"/>

    <ImageSection title="關於 DnD" :infos="aboutDndInfo">
      <img class="home-info-image" src="../assets/logo/dnd_logo_color.png" alt="Room example">
    </ImageSection>

    <ImageSection title="DnD 環境" :infos="surroundingsInfo" :button="surroundingsButton">
      <img class="home-info-image shadow-xl" src="../assets/home/home_surroundings.jpg" alt="Room example">
    </ImageSection>

    <ImageSection title="DnD 位置" :infos="locationInfo" :button="locationButton">
      <img class="home-info-image shadow-xl" src="../assets/home/home_location.jpg" alt="Room example">
    </ImageSection>

    <Footer/>
  </div>
</template>

<script>
import ImageSection from '../components/ImageSection';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default {
  name: 'Home',
  components: {Header, ImageSection, Footer},
  setup() {
    const aboutDndInfo = [
      {id: 0, text: '這裡是宜蘭三星鄉的 DnD 民宿。'},
      {id: 1, text: '雪山支脈的乾淨泉水，成就了一望無際的農田，這裡耕種著屬於自然的禮物 - 三星蔥、銀柳、上將梨，從種植到收割，有著在地農民的腳印與汗水。'},
      {id: 2, text: '放鬆、簡單、慢活，是我們生活的步調，請用最放鬆的心情體會田園風光、水岸山景。'},
      {id: 3, text: '樂活、自在、抒壓，讓這段旅程留下最美好的回憶。'},
      {id: 4, text: '歡迎大家一起來這裡呼吸新鮮的空氣、親近大自然的土地。也感謝有這樣的緣分，讓 DnD 成為您駐足的空間。'},
    ]

    const surroundingsInfo = [
      {id: 0, text: '民宿 2F 共 3 間 客房，每間客房可容納 2-6 人住宿，全棟最大容量為住宿 16 人（2A、2C 最多 6 人，2B 最多 4 人）。'},
      {id: 1, text: '民宿室內禁煙，無法接待寵物、無法接待臨時增加的房客。客廳無卡拉 OK、無麻將桌。主人自用 1F 房間與廚房。'}
    ]
    const surroundingsButton = {text: '參觀客房', theme: 'yellow', link: '/rooms',}

    const locationInfo = [
      {id: 0, text: '農舍位於前往太平山、明池、武陵農場等地的入口，開車到太平山收費口約 50 分鐘，到武陵農場約 2 小時。附近有步行可達的公車站、咖啡簡餐，距離 1.5km 的三星市區有全聯社和各式餐廳。'}
    ]
    const locationButton = {text: '查看景點', theme: 'blue', link: '/tourism',}

    return {aboutDndInfo, surroundingsInfo, surroundingsButton, locationInfo, locationButton}
  }
}
</script>

<style>
.home-info-image {
  @apply w-80 rounded-lg my-2;
  @apply md:h-72 md:w-auto md:rounded-xl md:my-4;
  @apply lg:h-80;
}
</style>