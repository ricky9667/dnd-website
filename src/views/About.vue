<template>
  <div id="about">
    <Header title="關於我們" subtitle="About us">
      <img class="header-image" src="https://i.imgur.com/B76LE0S.jpg" alt="Room example">
    </Header>

    <ImageSection title="DnD 的由來" :infos="aboutUsInfo">
      <img class="image-block shadow-xl" src="https://i.imgur.com/xgYLPDU.jpg" alt="Room example">
    </ImageSection>

    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageSection from '../components/ImageSection';

export default {
  name: 'About',
  components: {ImageSection, Header, Footer},
  setup() {
    const aboutUsInfo = [
      {id: 0, text: 'DnD 的名字來自女主人名字 Dory 與男主人名字 Dale，我們原本都是台北忙碌的上班族，來宜蘭只是當個假日農夫紓解工作壓力。'},
      {id: 1, text: '因緣際會下蓋了農舍、申請了民宿。103 年至今，點點滴滴建設起我們心中想要的家。'},
      {id: 2, text: '我們不是專業的旅店，只是分享我們喜愛的鄉村生活，亂亂種的成果，希望讓來到此處的你，也能在忙碌中找到寧靜。'}
    ]

    return {aboutUsInfo}
  }
}
</script>