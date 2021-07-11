<template>
  <div id="rooms">
    <Header title="客房介紹" subtitle="Rooms"/>

    <div class="h-20 text-gray-300">I am a container</div>

    <section class="flex flex-col center-x room-card border-green-400 color-border">
      <ImageSlider title="2A" subtitle="樓中樓山景房">
        <img src="../assets/rooms/2A.jpg" alt="2A"/>
        <img src="../assets/rooms/2A-1.jpg" alt="2A-1"/>
        <img src="../assets/rooms/2A-2.jpg" alt="2A-2"/>
      </ImageSlider>
      <div class="p-4">
        <h2 class="card-title">{{ room2A.title }}</h2>
        <p v-for="description in room2A.descriptions" :key="description.id" class="card-content">
          {{ description.text }}
        </p>
      </div>
      <PriceTable :price="room2A.price"/>
    </section>

    <div class="h-20 text-gray-300">I am a container</div>

    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';
import PriceTable from '../components/PriceTable';

export default {
  name: 'Rooms',
  components: {PriceTable, ImageSlider, Header, Footer},
  setup() {
    const roomInfo = [
      {id: 0, text: '合法新建民宿，為獨棟農舍，周遭是稻米、青蔥種植區，遠處群山環繞，安靜、空氣好。'},
      {id: 1, text: '民宿 1 樓的公共空間有客廳與餐廳，2 樓則有 3 間住宿客房，每間客房可容納 2 - 6 人住宿，全棟最大容量為住宿 16 人。'},
      {id: 2, text: '所有房間均有大面窗景，北歐風實木家具。餐廳有真正的材燒壁爐、懷舊木馬，客廳有積木火車軌道、各類書籍消遣時間。或者也可以喝杯咖啡，享受周遭滿滿的綠意。'}
    ]

    const room2A = {
      title: '2A 山景房',
      descriptions: [
        {id: 0, text: '房型 2A 有一張加大雙人床，和 2 張沙發。'},
        {id: 1, text: '4 人住宿時使用一張乳膠墊沙發床，6 人住宿時使用 2 張乳膠墊沙發床。'}
      ],
      price: {weekday: 2880, weekend: 3280, holiday: 4920}
    }

    return {roomInfo, room2A}
  }
}
</script>

<style>
.rooms-info-text {
  @apply text-sm text-gray-600;
  @apply md:text-base;
}

.room-card {
  @apply overflow-hidden pb-4 transform duration-300 hover:scale-110;
  @apply w-80 rounded-lg shadow-lg;
  @apply md:w-96 rounded-xl shadow-xl;
}

.color-border {
  @apply border-2;
}

.color-border:hover {
  @apply border-4;
}

.card-title {
  @apply text-2xl font-bold mb-2;
}

.card-content {
  @apply text-base text-left px-1;
}
</style>