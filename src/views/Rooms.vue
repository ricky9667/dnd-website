<template>
  <div id="rooms">
    <CustomHeader title="客房介紹" subtitle="Rooms">
      <img class="header-image" :src="headerImage" alt="Rooms" />
    </CustomHeader>

    <RoomSection
      :title="room2F.title"
      :images="room2F.images"
      image-alt="2F"
      :descriptions="room2F.descriptions"
      :price="room2F.price"
      :modules="swiperModules"
      content-first
    />

    <RoomSection
      :title="room2A.title"
      :images="room2A.images"
      image-alt="2A"
      :descriptions="room2A.descriptions"
      :price="room2A.price"
      :modules="swiperModules"
    />

    <RoomSection
      :title="room2B.title"
      :images="room2B.images"
      image-alt="2B"
      :descriptions="room2B.descriptions"
      :price="room2B.price"
      :modules="swiperModules"
      content-first
    />

    <RoomSection
      :title="room2C.title"
      :images="room2C.images"
      image-alt="2C"
      :descriptions="room2C.descriptions"
      :price="room2C.price"
      :modules="swiperModules"
    />

    <CustomFooter />
  </div>
</template>

<script lang="ts">
import { ref, onBeforeMount } from "vue";
import CustomHeader from "../components/CustomHeader.vue";
import CustomFooter from "../components/CustomFooter.vue";
import RoomSection from "../components/RoomSection.vue";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { fetchPriceData } from "../utils/api";

export default {
  name: "Rooms",
  components: { CustomHeader, CustomFooter, RoomSection },
  setup() {
    onBeforeMount(async () => {
      const priceData = await fetchPriceData();

      room2F.value.price = priceData.room2F;
      room2A.value.price = priceData.room2A;
      room2B.value.price = priceData.room2B;
      room2C.value.price = priceData.room2C;
    });

    const headerImage =
      "https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/rooms-min_AALKbld4y.jpg?updatedAt=1631449561513";
    const swiperModules = [EffectFade, Navigation, Pagination];

    const room2F = ref({
      title: "2F 包層",
      images: [
        "https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/2F-min_huytqpMAp.jpg?updatedAt=1631443670017",
      ],
      descriptions: [
        "包層為同時預訂 2F 三間房間，當天不會有其他客人入住，公共空間為餐廳與客廳，主人自用一樓房間與廚房。",
        "入住人數可為 6 - 12 人，費用依實際人數而有不同。當住宿人數為 6 人時收費如下表。",
      ],
      price: {},
    });

    const room2A = ref({
      title: "2A 山景房",
      images: [
        "https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/2A-min_27Jx4BE4o.jpg?updatedAt=1631443756327",
        "https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/2A-1-min_w-mEUCtL6.jpg?updatedAt=1631443714977",
        "https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/2A-2-min_XNgmaH1cg.jpg?updatedAt=1631443771128",
      ],
      descriptions: [
        "房型 2A 有一張加大雙人床，和 2 張沙發。",
        "4 人住宿時使用一張乳膠墊沙發床。",
      ],
      price: {},
    });

    const room2B = ref({
      title: "2B 樓中樓山景房",
      images: [
        "https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/2B-min_YowtIH-uR.jpg?updatedAt=1631443805815",
        "https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/2B-1-min_In3RJ-iPY.jpg?updatedAt=1631443745893",
        "https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/2B-2-min_a_0sU7ZX0.jpg?updatedAt=1631443723366",
      ],
      descriptions: [
        "房型 2B 住宿 2 人時使用一張加大雙人床，住宿 3 - 4 人使用樓中樓地板彈簧床墊。",
      ],
      price: {},
    });

    const room2C = ref({
      title: "2C 樓中樓山景房",
      images: [
        "https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/2C-min__kD5lO_A2.jpg?updatedAt=1631443801357",
        "https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/2C-1-min_bjN09h9GP.jpg?updatedAt=1631443784771",
        "https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/2C-2-min_qqPYWaKI4.jpg?updatedAt=1631443798589",
      ],
      descriptions: [
        "房型 2C 住宿 2 人時使用一張加大雙人床，住宿 3 - 4 人使用樓中樓地板彈簧床墊。",
      ],
      price: {},
    });

    return { headerImage, room2F, room2A, room2B, room2C, swiperModules };
  },
};
</script>

<style>
@reference "../styles/styles.css";

.rooms-content {
  @apply px-4 text-left divide-y divide-gray-300;
}

.rooms-content > * {
  @apply py-4;
}

.price-table {
  @apply table w-full sm:w-4/5 lg:w-full mx-auto text-center rounded bg-secondary border-2 border-primary;
}

.price-table-cell {
  @apply table-cell py-1 w-1/4;
}
</style>
