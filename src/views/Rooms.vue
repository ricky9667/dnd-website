<template>
  <div id="rooms">
    <img src="../assets/rooms_header.jpg" alt="DnD background image">

    <h1 class="text-4xl my-12 font-bold">客房介紹</h1>

    <div class="my-8 grid grid-cols-5 gap-4">
      <section class="col-start-2 col-span-3">
        <p v-for="info in roomInfo" :key="info.id" class="rooms-info-text text-left leading-8">{{ info.text }}</p>
      </section>

      <section class="col-start-2 col-span-3 flex flex-row">

      </section>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer';

export default {
  name: 'Rooms',
  components: {Footer},
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
</style>