<template>
  <div id="rooms">
    <Header title="客房介紹" subtitle="Rooms"/>

    <section class="flex flex-col">
      <ImageSlider title="2A" subtitle="樓中樓山景房" class="room-images">
        <img src="../assets/rooms/2A.jpg" alt="2A"/>
        <img src="../assets/rooms/2A-1.jpg" alt="2A-1"/>
        <img src="../assets/rooms/2A-2.jpg" alt="2A-2"/>
      </ImageSlider>
    </section>

    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';

export default {
  name: 'Rooms',
  components: {ImageSlider, Header, Footer},
  setup() {
    const roomInfo = [
      {id: 0, text: '合法新建民宿，為獨棟農舍，周遭是稻米、青蔥種植區，遠處群山環繞，安靜、空氣好。'},
      {id: 1, text: '民宿 1 樓的公共空間有客廳與餐廳，2 樓則有 3 間住宿客房，每間客房可容納 2 - 6 人住宿，全棟最大容量為住宿 16 人。'},
      {id: 2, text: '所有房間均有大面窗景，北歐風實木家具。餐廳有真正的材燒壁爐、懷舊木馬，客廳有積木火車軌道、各類書籍消遣時間。或者也可以喝杯咖啡，享受周遭滿滿的綠意。'}
    ]

    return {roomInfo}
  }
}
</script>

<style>
.rooms-info-text {
  @apply text-sm text-gray-600;
  @apply md:text-base;
}

.room-images {
  @apply lg:w-96;
  @apply w-72;
}
</style>