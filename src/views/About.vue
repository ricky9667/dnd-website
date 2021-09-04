<template>
  <div id="about">
    <custom-header title="關於我們" subtitle="About us">
      <img class="header-image" :src="headerImage" alt="About" />
    </custom-header>

    <image-section title="DnD 的由來" :infos="aboutUsInfo">
      <img
        class="image-block shadow-xl"
        src="https://ik.imagekit.io/pxhytijjnsj/about_lvyrBBCwj.jpg?updatedAt=1629827222671"
        alt="Room example"
      />
    </image-section>

    <custom-footer />
  </div>
</template>

<script>
import CustomHeader from "../components/CustomHeader";
import CustomFooter from "../components/CustomFooter";
import ImageSection from "../components/ImageSection";

export default {
  name: "About",
  components: { CustomHeader, CustomFooter, ImageSection },
  metaInfo() {
    return {
      title: "DnD 休閒民宿 - 關於我們",
      meta: [
        { name: "description", content: "DnD 休閒民宿 - 關於我們" },
        { property: "og:title", content: "DnD 休閒民宿 - 關於我們" },
        { property: "og:site_name", content: "DnD 休閒民宿" },
        { property: "og:type", content: "website" },
      ],
    };
  },
  setup() {
    const headerImage =
      "https://ik.imagekit.io/pxhytijjnsj/about-min_BxEgc7tZz.jpg?updatedAt=1629825928432";

    const aboutUsInfo = [
      "DnD 的名字來自女主人名字 Dory 與男主人名字 Dale，我們原本都是台北忙碌的上班族，來宜蘭只是當個假日農夫紓解工作壓力。",
      "因緣際會下蓋了農舍、申請了民宿。103 年至今，點點滴滴建設起我們心中想要的家。",
      "我們不是專業的旅店，只是分享我們喜愛的鄉村生活，亂亂種的成果，希望讓來到此處的你，也能在忙碌中找到寧靜。",
    ];

    return { headerImage, aboutUsInfo };
  },
};
</script>