<template>
  <div id="home">
    <img src="../assets/dnd_background_img.jpg" alt="DnD background image">

    <div class="home-info">
      <img class="home-info-image" src="../assets/dnd_logo_color.png" alt="Room example">
      <div class="flex flex-col items-start w-96 px-4">
        <h2 class="home-info-header">關於 DnD</h2>
        <p class="home-info-text text-left my-1">這裡是宜蘭三星鄉的 DnD 民宿。</p>
        <p class="home-info-text text-left my-1">雪山支脈的乾淨泉水，成就了一望無際的農田，這裡耕種著屬於自然的禮物 - 三星蔥、銀柳、上將梨，從種植到收割，有著在地農民的腳印與汗水。</p>
        <p class="home-info-text text-left my-1">放鬆、簡單、慢活，是我們生活的步調，請用最放鬆的心情體會田園風光、水岸山景。</p>
        <p class="home-info-text text-left my-1">樂活、自在、抒壓，讓這段旅程留下最美好的回憶。</p>
        <p class="home-info-text text-left my-1">歡迎大家一起來這裡呼吸新鮮的空氣、親近大自然的土地。也感謝有這樣的緣分，讓 DnD 成為您駐足的空間。</p>
      </div>
    </div>

    <div class="home-info">
      <img class="home-info-image" src="../assets/home_surroundings.jpg" alt="Room example">
      <div class="flex flex-col items-start w-96 px-4">
        <h2 class="home-info-header">DnD 環境</h2>
        <p class="home-info-text text-left my-4">民宿 2F 共 3間 客房，每間客房可容納 2-6 人住宿，全棟最大容量為住宿 16 人（2A、2C 最多 6 人，2B 最多 4 人）。</p>
        <p class="home-info-text text-left my-4">民宿室內禁煙，無法接待寵物、無法接待臨時增加的房客。客廳無卡拉 OK、無麻將桌。主人自用1F房間與廚房。</p>
        <button type="button"
                class="rounded bg-yellow-200 hover:bg-yellow-400 transform duration-200 px-6 py-2 my-4 font-bold">
          <router-link class="h-12 md:h-8" to="/rooms">參觀客房</router-link>
        </button>
      </div>
    </div>

    <div class="home-info">
      <img class="home-info-image" src="../assets/home_location.jpg" alt="Room example">
      <div class="flex flex-col items-start w-96 px-4">
        <h2 class="home-info-header">DnD 位置</h2>
        <p class="home-info-text text-left my-4">農舍位於前往太平山、明池、武陵農場等地的入口，開車到太平山收費口約 50 分鐘，到武陵農場約 2 小時。附近有步行可達的公車站、咖啡簡餐，距離 1.5km
          的三星市區有全聯社和各式餐廳。</p>
        <button type="button"
                class="rounded bg-blue-300 hover:bg-blue-500 transform duration-200 px-6 py-2 my-4 font-bold">
          <router-link class="h-12 md:h-8" to="/tourism">查看景點</router-link>
        </button>
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer';

export default {
  name: 'Home',
  components: {Footer}
}
</script>

<style>
.home-info {
  @apply flex flex-col items-center justify-evenly mx-8 my-12;
  @apply lg:flex-row lg:mx-20 lg:my-40;
}

.home-info-image {
  @apply w-96 rounded-lg my-2;
  @apply md:h-64 md:w-auto md:rounded-xl md:my-4;
  @apply lg:h-80 lg:w-auto lg:rounded-xl lg:my-4;
}

.home-info-header {
  @apply text-2xl font-bold pt-4;
  @apply lg:text-3xl lg:pt-0;
}

.home-info-text {
  @apply text-base;
}
</style>