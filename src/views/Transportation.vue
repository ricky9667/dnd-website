<template>
  <div id="transportation">
    <Header title="交通資訊" subtitle="Transportation">
      <img class="header-image" src="https://i.imgur.com/B76LE0S.jpg" alt="Room example">
    </Header>

      <div class="flex justify-center my-20">
      <iframe class="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.0145504468114!2d121.62952617259401!3d24.664709691543308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3467e1e860fc55b1%3A0xc8bfd294046ef68e!2zRG5EIOawkeWuvy8gRG5EIEImQg!5e0!3m2!1szh-TW!2stw!4v1627232105031!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';

export default {
  name: 'Transportation',
  components: {Header, Footer}
}
</script>

<style>
.google-map {
  @apply w-full md:w-4/5;
  height: 450px;
}
</style>