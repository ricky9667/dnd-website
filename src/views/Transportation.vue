<template>
  <div id="transportation">
    <Header title="交通資訊" subtitle="Transportation">
      <img class="header-image" :src="headerImage" alt="Room example" />
    </Header>

    <section class="content-block">
      <p v-for="info in transportationInfo" :key="info" class="my-1">
        {{ info }}
      </p>
    </section>

    <div class="flex justify-center my-20">
      <iframe
        class="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.0145504468114!2d121.62952617259401!3d24.664709691543308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3467e1e860fc55b1%3A0xc8bfd294046ef68e!2zRG5EIOawkeWuvy8gRG5EIEImQg!5e0!3m2!1szh-TW!2stw!4v1627232105031!5m2!1szh-TW!2stw"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "Transportation",
  components: { Header, Footer },
  setup() {
    const headerImage =
      "https://ik.imagekit.io/pxhytijjnsj/transportation-min_8kPkJfs1K.jpg?updatedAt=1629825926470";

    const transportationInfo = [
      "民宿位在三星市中心和天送埤中間，是前往太平山、明池、棲蘭、武陵農場與福壽山農場等地的入口。羅東轉運站、羅東市中心有公車 1792、1793 可搭乘至茶廠站，下車後步行約 3 分鐘到達民宿。",
      "雖遠離塵囂，但不會遺世獨立，附近有步行可達的公車站、超市、咖啡簡餐。距離三星市區1.5km，有全聯社、餐廳、知名老店白雪冰店、米粉湯等。距離天送埤1.5km，有知名小吃味珍香卜肉、蔥油餅。",
    ];

    return { headerImage, transportationInfo };
  },
};
</script>

<style>
.google-map {
  @apply w-full md:w-4/5;
  height: 450px;
}
</style>