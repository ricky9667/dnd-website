<template>
  <div id="home">
    <CustomHeader title="DnD 民宿" subtitle="DnD Homestay">
      <img class="header-image" :src="headerImage" alt="Home" />
    </CustomHeader>

    <ImageSection title="來到 DnD" :infos="aboutDndInfo">
      <img
        class="hidden lg:block image-block"
        :src="aboutImage"
        alt="About DnD"
      />
    </ImageSection>

    <ImageSection
      title="DnD 環境"
      :infos="surroundingsInfo"
      :button="surroundingsButton"
    >
      <img
        class="image-block"
        :src="surroundingsImage"
        alt="DnD Surroundings"
      />
    </ImageSection>

    <ImageSection
      title="DnD 位置"
      :infos="locationInfo"
      :button="locationButton"
    >
      <img class="image-block" :src="locationImage" alt="DnD Location" />
    </ImageSection>

    <CustomFooter />
  </div>
</template>

<script>
import CustomHeader from "../components/CustomHeader.vue";
import CustomFooter from "../components/CustomFooter.vue";
import ImageSection from "../components/ImageSection.vue";

export default {
  name: "Home",
  components: { CustomHeader, CustomFooter, ImageSection },
  setup() {
    const headerImage =
      "https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/home-min_j91Rodc2s.jpg?updatedAt=1631449523190";

    const aboutDndInfo = [
      "這裡是宜蘭三星鄉的 DnD 民宿。",
      "雪山支脈的乾淨泉水，成就了一望無際的農田，這裡耕種著屬於自然的禮物 - 三星蔥、銀柳、上將梨，從種植到收割，有著在地農民的腳印與汗水。",
      "放鬆、簡單、慢活，是我們生活的步調，請用最放鬆的心情體會田園風光、水岸山景。",
      "樂活、自在、抒壓，讓這段旅程留下最美好的回憶。",
      "歡迎大家一起來這裡呼吸新鮮的空氣、親近大自然的土地。也感謝有這樣的緣分，讓 DnD 成為您駐足的空間。",
    ];

    const aboutImage =
      "https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/about-min_3s15cyzSe.jpg?updatedAt=1631449102395";

    const surroundingsInfo = [
      "民宿 2F 共 3 間 客房，每間客房可容納 2-4 人住宿，全棟最大容量為住宿 12 人。",
      "民宿室內禁煙，無法接待寵物、無法接待臨時增加的房客。客廳無卡拉 OK、無麻將桌。主人自用 1F 房間與廚房。",
    ];

    const surroundingsButton = {
      text: "參觀客房",
      link: "/rooms",
    };

    const surroundingsImage =
      "https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/surroundings-min_wXK6ocpfL.jpg?updatedAt=1631449511431";

    const locationInfo = [
      "農舍位於前往太平山、明池、武陵農場等地的入口，開車到太平山收費口約 50 分鐘，到武陵農場約 2 小時。附近有步行可達的公車站、咖啡簡餐，距離 1.5km 的三星市區有全聯社和各式餐廳。",
    ];

    const locationButton = {
      text: "查看景點",
      link: "/tourism",
    };

    const locationImage =
      "https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/location-min_c-xn6PSTmVf.png?updatedAt=1631443560198";

    return {
      headerImage,
      aboutDndInfo,
      aboutImage,
      surroundingsInfo,
      surroundingsButton,
      surroundingsImage,
      locationInfo,
      locationButton,
      locationImage,
    };
  },
};
</script>

<style></style>
