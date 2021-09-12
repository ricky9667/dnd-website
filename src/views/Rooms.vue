<template>
  <div id="rooms">
    <custom-header title="客房介紹" subtitle="Rooms">
      <img class="header-image" :src="headerImage" alt="Rooms" />
    </custom-header>

    <section class="content-block" v-if="false">
      <custom-title title="客房與公共空間">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="title-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
          />
        </svg>
      </custom-title>
      <p v-for="(info, index) in roomInfo" :key="index" class="my-1">
        {{ info }}
      </p>
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

      <room-content
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

      <room-content
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

      <room-content
        :title="room2C.title"
        :descriptions="room2C.descriptions"
        :price="room2C.price"
      />
    </section>

    <section id="add-tenant" class="content-block">
      <h2 class="text-center my-6">增加客房人數</h2>

      <div class="flex flex-col md:flex-row gap-4">
        <add-tenant-card title="平日" threeToSix="300" overSix="600" />
        <add-tenant-card title="假日" threeToSix="300" overSix="600" />
        <add-tenant-card title="農曆過年" threeToSix="400" overSix="800" />
      </div>
    </section>

    <custom-footer />
  </div>
</template>

<script>
import CustomHeader from "../components/CustomHeader";
import CustomFooter from "../components/CustomFooter";
import CustomTitle from "../components/CustomTitle";
import RoomContent from "../components/RoomContent";
import AddTenantCard from "../components/AddTenantCard";
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  name: "Rooms",
  components: {
    CustomTitle,
    CustomHeader,
    CustomFooter,
    RoomContent,
    AddTenantCard,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const headerImage =
      "https://ik.imagekit.io/pxhytijjnsj/rooms-min_AALKbld4y.jpg?updatedAt=1629825934506";

    const roomInfo = [
      "DnD 為合法新建民宿，為獨棟農舍，周遭是稻米、青蔥種植區，遠處群山環繞，安靜、空氣好。",
      "民宿 1 樓的公共空間有客廳與餐廳，2 樓則有 3 間住宿客房，每間客房可容納 2 - 6 人住宿，全棟最大容量為住宿 16 人。",
      "所有房間均有大面窗景，北歐風實木家具。餐廳有真正的材燒壁爐、懷舊木馬，客廳有積木火車軌道、各類書籍消遣時間。",
      "或者也可以喝杯咖啡，享受周遭滿滿的綠意。",
    ];

    const room2F = {
      title: "2F 包層",
      images: [
        "https://ik.imagekit.io/pxhytijjnsj/2F-min_huytqpMAp.jpg?updatedAt=1629828843089",
        headerImage,
      ],
      descriptions: [
        "包層為同時預訂 2F 三間房間，當天不會有其他客人入住。",
        "入住人數可為 6 - 16 人，費用依實際人數而有不同。當住宿人數為 6 人時收費如下表。",
      ],
      price: { weekday: 8340, weekend: 9540, holiday: 14310 },
    };

    const room2A = {
      title: "2A 山景房",
      images: [
        "https://ik.imagekit.io/pxhytijjnsj/2A-min_27Jx4BE4o.jpg?updatedAt=1629827328394",
        "https://ik.imagekit.io/pxhytijjnsj/2A-1-min_w-mEUCtL6.jpg?updatedAt=1629827341285",
        "https://ik.imagekit.io/pxhytijjnsj/2A-2-min_XNgmaH1cg.jpg?updatedAt=1629827322020",
      ],
      descriptions: [
        "房型 2A 有一張加大雙人床，和 2 張沙發。",
        "4 人住宿時使用一張乳膠墊沙發床，6 人住宿時使用 2 張乳膠墊沙發床。",
      ],
      price: { weekday: 2880, weekend: 3280, holiday: 4920 },
    };

    const room2B = {
      title: "2B 樓中樓山景房",
      images: [
        "https://ik.imagekit.io/pxhytijjnsj/2B-min_YowtIH-uR.jpg?updatedAt=1629827265086",
        "https://ik.imagekit.io/pxhytijjnsj/2B-1-min_In3RJ-iPY.jpg?updatedAt=1629827332433",
        "https://ik.imagekit.io/pxhytijjnsj/2B-2-min_a_0sU7ZX0.jpg?updatedAt=1629827336601",
      ],
      descriptions: [
        "房型 2B 住宿 2 人時使用一張加大雙人床，住宿 3 - 4 人使用樓中樓地板彈簧床墊。",
      ],
      price: { weekday: 2680, weekend: 3080, holiday: 4620 },
    };

    const room2C = {
      title: "2C 樓中樓山景房",
      images: [
        "https://ik.imagekit.io/pxhytijjnsj/2C-min__kD5lO_A2.jpg?updatedAt=1629827310074",
        "https://ik.imagekit.io/pxhytijjnsj/2C-1-min_bjN09h9GP.jpg?updatedAt=1629827317689",
        "https://ik.imagekit.io/pxhytijjnsj/2C-2-min_qqPYWaKI4.jpg?updatedAt=1629827312429",
      ],
      descriptions: [
        "房型 2C 住宿 2 人時使用一張加大雙人床，住宿 3 - 4 人使用樓中樓地板彈簧床墊，住宿 5 - 6 人使用沙發床。",
      ],
      price: { weekday: 2780, weekend: 3180, holiday: 4770 },
    };

    return { headerImage, roomInfo, room2F, room2A, room2B, room2C };
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