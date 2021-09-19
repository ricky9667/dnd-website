<template>
  <div id="about">
    <CustomHeader title="關於我們" subtitle="About us">
      <img class="header-image" :src="headerImage" alt="About" />
    </CustomHeader>

    <ImageSection title="DnD 的由來" :infos="aboutUsInfo">
      <img class="image-block shadow-xl" :src="aboutUsImage" alt="About us" />
    </ImageSection>

    <CustomFooter />
  </div>
</template>

<script>
import CustomHeader from "../components/CustomHeader";
import CustomFooter from "../components/CustomFooter";
import ImageSection from "../components/ImageSection";

export default {
  name: "About",
  components: { CustomHeader, CustomFooter, ImageSection },
  setup() {
    const headerImage = "https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/about-min_BxEgc7tZz.jpg?updatedAt=1631449610173";

    const aboutUsInfo = [
      "DnD 的名字來自女主人名字 Dory 與男主人名字 Dale，我們原本都是台北忙碌的上班族，來宜蘭只是當個假日農夫紓解工作壓力。",
      "因緣際會下蓋了農舍、申請了民宿。103 年至今，點點滴滴建設起我們心中想要的家。",
      "我們不是專業的旅店，只是分享我們喜愛的鄉村生活，亂亂種的成果，希望讓來到此處的你，也能在忙碌中找到寧靜。",
    ];

    const aboutUsImage = "https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/about_lvyrBBCwj.jpg?updatedAt=1631443813874";

    return { headerImage, aboutUsInfo, aboutUsImage };
  },
};
</script>