<template>
  <div id="rooms">
    <CustomHeader title="客房介紹" subtitle="Rooms">
      <img class="header-image" :src="headerImage" alt="Rooms" />
    </CustomHeader>

    <section class="rooms-section">
      <div class="lg:col-span-2 px-4">
        <swiper
          class="rooms-swiper"
          :effect="'fade'"
          :navigation="true"
          :loop="true"
          :pagination="{ clickable: true }"
        >
          <swiper-slide
            v-for="(image, index) in room2F.images"
            :key="index"
            class="rounded-xl overflow-hidden"
          >
            <img class="swiper-image rounded-xl" :src="image" alt="2F" />
          </swiper-slide>
        </swiper>
      </div>

      <room-content
        class="lg:order-first"
        :title="room2F.title"
        :descriptions="room2F.descriptions"
        :price="room2F.price"
      />
    </section>

    <section class="rooms-section">
      <div class="lg:col-span-2 px-4">
        <swiper
          class="rooms-swiper"
          :effect="'fade'"
          :navigation="true"
          :loop="true"
          :pagination="{ clickable: true }"
        >
          <swiper-slide
            v-for="(image, index) in room2A.images"
            :key="index"
            class="rounded-xl overflow-hidden"
          >
            <img class="swiper-image rounded-xl" :src="image" alt="2A" />
          </swiper-slide>
        </swiper>
      </div>

      <RoomContent
        :title="room2A.title"
        :descriptions="room2A.descriptions"
        :price="room2A.price"
      />
    </section>

    <section class="rooms-section">
      <div class="lg:col-span-2 px-4">
        <swiper
          class="rooms-swiper"
          :effect="'fade'"
          :navigation="true"
          :loop="true"
          :pagination="{ clickable: true }"
        >
          <swiper-slide
            v-for="(image, index) in room2B.images"
            :key="index"
            class="rounded-xl overflow-hidden"
          >
            <img class="swiper-image rounded-xl" :src="image" alt="2B" />
          </swiper-slide>
        </swiper>
      </div>

      <RoomContent
        class="lg:order-first"
        :title="room2B.title"
        :descriptions="room2B.descriptions"
        :price="room2B.price"
      />
    </section>

    <section class="rooms-section">
      <div class="lg:col-span-2 px-4">
        <swiper
          class="rooms-swiper"
          :effect="'fade'"
          :navigation="true"
          :loop="true"
          :pagination="{ clickable: true }"
        >
          <swiper-slide
            v-for="(image, index) in room2C.images"
            :key="index"
            class="rounded-xl overflow-hidden"
          >
            <img class="swiper-image rounded-xl" :src="image" alt="2C" />
          </swiper-slide>
        </swiper>
      </div>

      <RoomContent
        :title="room2C.title"
        :descriptions="room2C.descriptions"
        :price="room2C.price"
      />
    </section>

    <CustomFooter />
  </div>
</template>

<script>
import CustomHeader from "../components/CustomHeader";
import CustomFooter from "../components/CustomFooter";
import RoomContent from "../components/RoomContent";
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  name: "Rooms",
  components: { CustomHeader, CustomFooter, RoomContent, Swiper, SwiperSlide },
  setup() {
    const headerImage =
      "https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/rooms-min_AALKbld4y.jpg?updatedAt=1631449561513";

    const room2F = {
      title: "2F 包層",
      images: [
        "https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/2F-min_huytqpMAp.jpg?updatedAt=1631443670017",
      ],
      descriptions: [
        "包層為同時預訂 2F 三間房間，當天不會有其他客人入住。",
        "入住人數可為 6 - 12 人，費用依實際人數而有不同。當住宿人數為 6 人時收費如下表。",
      ],
      price: { weekday: 8640, weekend: 10140, holiday: 14310 },
    };

    const room2A = {
      title: "2A 山景房",
      images: [
        "https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/2A-min_27Jx4BE4o.jpg?updatedAt=1631443756327",
        "https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/2A-1-min_w-mEUCtL6.jpg?updatedAt=1631443714977",
        "https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/2A-2-min_XNgmaH1cg.jpg?updatedAt=1631443771128",
      ],
      descriptions: [
        "房型 2A 有一張加大雙人床，和 2 張沙發。",
        "4 人住宿時使用一張乳膠墊沙發床，6 人住宿時使用 2 張乳膠墊沙發床。",
      ],
      price: { weekday: 2980, weekend: 3480, holiday: 4920 },
    };

    const room2B = {
      title: "2B 樓中樓山景房",
      images: [
        "https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/2B-min_YowtIH-uR.jpg?updatedAt=1631443805815",
        "https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/2B-1-min_In3RJ-iPY.jpg?updatedAt=1631443745893",
        "https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/2B-2-min_a_0sU7ZX0.jpg?updatedAt=1631443723366",
      ],
      descriptions: [
        "房型 2B 住宿 2 人時使用一張加大雙人床，住宿 3 - 4 人使用樓中樓地板彈簧床墊。",
      ],
      price: { weekday: 2780, weekend: 3280, holiday: 4620 },
    };

    const room2C = {
      title: "2C 樓中樓山景房",
      images: [
        "https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/2C-min__kD5lO_A2.jpg?updatedAt=1631443801357",
        "https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/2C-1-min_bjN09h9GP.jpg?updatedAt=1631443784771",
        "https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/2C-2-min_qqPYWaKI4.jpg?updatedAt=1631443798589",
      ],
      descriptions: [
        "房型 2C 住宿 2 人時使用一張加大雙人床，住宿 3 - 4 人使用樓中樓地板彈簧床墊，住宿 5 - 6 人使用沙發床。",
      ],
      price: { weekday: 2880, weekend: 3380, holiday: 4770 },
    };

    return { headerImage, room2F, room2A, room2B, room2C };
  },
};
</script>

<style>
.rooms-section {
  @apply grid grid-cols-1 lg:grid-cols-3 lg:gap-8;
  @apply max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12;
}

.rooms-content {
  @apply px-4 text-left divide-y divide-gray-300;
}

.rooms-content > * {
  @apply py-4;
}

.rooms-swiper {
  @apply w-full lg:w-auto;
  @apply h-48 sm:h-60 md:h-72 lg:h-108;
}

.swiper-image {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.price-table {
  @apply table w-full sm:w-4/5 lg:w-full mx-auto text-center rounded bg-secondary border-2 border-primary;
}

.price-table-cell {
  @apply table-cell py-1 w-1/4;
}
</style>
