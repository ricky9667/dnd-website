<template>
  <div id="rooms">
    <Header title="客房介紹" subtitle="Rooms"/>

    <section class="rooms-description">
      <CustomTitle title="客房與公共空間" />
      <p v-for="info in roomInfo" :key="info.id">{{ info.text }}</p>
    </section>

    <section class="rooms-container">
      <div class="flex flex-col relative room-card border-purple-500">
        <img src="../assets/home/home_header.jpg" alt="2C"/>
        <div class="p-4">
          <h2 class="card-title">{{ roomAll.title }}</h2>
          <p v-for="description in roomAll.descriptions" :key="description.id" class="card-content">
            {{ description.text }}
          </p>
        </div>
        <PriceTable :price="roomAll.price"/>
      </div>

      <div class="flex flex-col relative room-card border-yellow-400">
        <ImageSlider title="2A" subtitle="山景房">
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
      </div>

      <div class="flex flex-col relative room-card border-yellow-400">
        <ImageSlider title="2B" subtitle="樓中樓山景房">
          <img src="../assets/rooms/2B.jpg" alt="2B"/>
          <img src="../assets/rooms/2B-1.jpg" alt="2B-1"/>
          <img src="../assets/rooms/2B-2.jpg" alt="2B-2"/>
        </ImageSlider>
        <div class="p-4">
          <h2 class="card-title">{{ room2B.title }}</h2>
          <p v-for="description in room2B.descriptions" :key="description.id" class="card-content">
            {{ description.text }}
          </p>
        </div>
        <PriceTable :price="room2B.price"/>
      </div>

      <div class="flex flex-col relative room-card border-yellow-400">
        <ImageSlider title="2C" subtitle="樓中樓山景房">
          <img src="../assets/rooms/2C.jpg" alt="2C"/>
          <img src="../assets/rooms/2C-1.jpg" alt="2C-1"/>
          <img src="../assets/rooms/2C-2.jpg" alt="2C-2"/>
        </ImageSlider>
        <div class="p-4">
          <h2 class="card-title">{{ room2C.title }}</h2>
          <p v-for="description in room2C.descriptions" :key="description.id" class="card-content">
            {{ description.text }}
          </p>
        </div>
        <PriceTable :price="room2C.price"/>
      </div>
    </section>

    <section class="rooms-description">
      <CustomTitle title="增加人數價格" />
      <h4 class="font-bold my-1">平日 & 假日</h4>
      <ul class="list-disc list-inside">
        <li>３歲以上：600 元/人（含早餐及寢具）</li>
        <li>３～６歲：300 元/人（含早餐、無寢具）</li>
      </ul>
      <h4 class="font-bold my-1">農曆過年</h4>
      <ul class="list-disc list-inside">
        <li>３歲以上：800 元/人（含早餐及寢具）</li>
        <li>３～６歲：400 元/人（含早餐、無寢具）</li>
      </ul>
    </section>

    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';
import PriceTable from '../components/PriceTable';
import CustomTitle from '../components/CustomTitle';

export default {
  name: 'Rooms',
  components: {CustomTitle, PriceTable, ImageSlider, Header, Footer},
  setup() {
    const roomInfo = [
      {id: 0, text: 'DnD 為合法新建民宿，為獨棟農舍，周遭是稻米、青蔥種植區，遠處群山環繞，安靜、空氣好。'},
      {id: 1, text: '民宿 1 樓的公共空間有客廳與餐廳，2 樓則有 3 間住宿客房，每間客房可容納 2 - 6 人住宿，全棟最大容量為住宿 16 人。'},
      {id: 2, text: '所有房間均有大面窗景，北歐風實木家具。餐廳有真正的材燒壁爐、懷舊木馬，客廳有積木火車軌道、各類書籍消遣時間。'},
      {id: 3, text: '或者也可以喝杯咖啡，享受周遭滿滿的綠意。'}
    ]

    const roomAll = {
      title: '2F 包層',
      descriptions: [
        {id: 0, text: '包層可同時使用 3 間房間、每間房間均住宿 2 人，加人費用依照人數累加。'},
      ],
      price: {weekday: 8340, weekend: 9540, holiday: 14310}
    }

    const room2A = {
      title: '2A 山景房',
      descriptions: [
        {id: 0, text: '房型 2A 有一張加大雙人床，和 2 張沙發。'},
        {id: 1, text: '4 人住宿時使用一張乳膠墊沙發床，6 人住宿時使用 2 張乳膠墊沙發床。'}
      ],
      price: {weekday: 2880, weekend: 3280, holiday: 4920}
    }

    const room2B = {
      title: '2B 樓中樓山景房',
      descriptions: [
        {id: 0, text: '房型 2B 住宿 2 人時使用一張加大雙人床，住宿 3 - 4 人使用樓中樓地板彈簧床墊。'}
      ],
      price: {weekday: 2680, weekend: 3080, holiday: 4620}
    }

    const room2C = {
      title: '2C 樓中樓山景房',
      descriptions: [
        {id: 0, text: '房型 2C 住宿 2 人時使用一張加大雙人床，住宿 3 - 4 人使用樓中樓地板彈簧床墊，住宿 5 - 6 人使用沙發床。'}
      ],
      price: {weekday: 2780, weekend: 3180, holiday: 4770}
    }

    return {roomInfo, roomAll, room2A, room2B, room2C}
  }
}
</script>

<style>
.rooms-description {
  @apply w-5/6 px-8 py-6 mx-auto text-left bg-gray-100 hover:bg-gray-200 transform duration-200;
  @apply my-8 rounded;
  @apply sm:my-12 sm:rounded-lg;
  @apply lg:my-20 lg:rounded-xl;
}

.rooms-container {
  @apply flex flex-col;
  @apply md:flex-row md:flex-wrap;
}

.room-card {
  @apply overflow-hidden pb-4 border-2 mx-auto my-10 transform duration-500;
  @apply w-72 rounded shadow;
  @apply sm:w-80 sm:rounded-lg sm:shadow-lg;
  @apply md:w-96 md:rounded-xl md:shadow-xl;
  @apply lg:w-120 lg:rounded-2xl;
}

.room-card:hover {
  @apply border-4;
}

.card-title {
  @apply text-2xl font-bold mb-2;
}

.card-content {
  @apply text-base text-left px-1;
}
</style>