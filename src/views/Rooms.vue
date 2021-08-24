<template>
  <div id="rooms">
    <Header title="客房介紹" subtitle="Rooms">
      <img
        class="header-image"
        src="https://i.imgur.com/B76LE0S.jpg"
        alt="Room example"
      />
    </Header>

    <section class="content-block">
      <CustomTitle title="客房與公共空間" />
      <p v-for="info in roomInfo" :key="info.id" class="my-1">
        {{ info.text }}
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
          <swiper-slide class="rounded-xl overflow-hidden">
            <img class="swiper-image rounded-xl" :src="room2F.image" alt="2F" />
          </swiper-slide>
        </swiper>
      </div>

      <div class="rooms-content lg:order-first">
        <h2 class="text-center lg:text-left">{{ room2F.title }}</h2>
        <div>
          <CustomTitle title="客房介紹" />
          <ul class="list-disc list-inside">
            <li
              v-for="description in room2F.descriptions"
              :key="description.id"
            >
              {{ description.text }}
            </li>
          </ul>
        </div>

        <div>
          <CustomTitle title="定價" />
          <div class="price-table">
            <div class="table-row bg-primary font-bold text-white">
              <div class="price-table-cell">平日</div>
              <div class="price-table-cell">假日</div>
              <div class="price-table-cell">農曆過年</div>
            </div>
            <div class="table-row">
              <div class="price-table-cell">${{ room2F.price.weekday }}</div>
              <div class="price-table-cell">${{ room2F.price.weekend }}</div>
              <div class="price-table-cell">${{ room2F.price.holiday }}</div>
            </div>
          </div>
          <a href="#add-tenant">
            <p
              class="
                my-2
                text-center
                lg:text-left
                hover:text-primary
                hover:animate-bounce
              "
            >
              ＋ 新增房客
            </p>
          </a>
        </div>
      </div>
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

      <div class="rooms-content">
        <h2 class="text-center lg:text-left">{{ room2A.title }}</h2>
        <div>
          <CustomTitle title="客房介紹" />
          <ul class="list-disc list-inside">
            <li
              v-for="description in room2A.descriptions"
              :key="description.id"
            >
              {{ description.text }}
            </li>
          </ul>
        </div>

        <div>
          <CustomTitle title="定價" />
          <div class="price-table">
            <div class="table-row bg-primary font-bold text-white">
              <div class="price-table-cell">平日</div>
              <div class="price-table-cell">假日</div>
              <div class="price-table-cell">農曆過年</div>
            </div>
            <div class="table-row">
              <div class="price-table-cell">${{ room2A.price.weekday }}</div>
              <div class="price-table-cell">${{ room2A.price.weekend }}</div>
              <div class="price-table-cell">${{ room2A.price.holiday }}</div>
            </div>
          </div>
          <a href="#add-tenant">
            <p
              class="
                my-2
                text-center
                lg:text-left
                hover:text-primary
                hover:animate-bounce
              "
            >
              ＋ 新增房客
            </p>
          </a>
        </div>
      </div>
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

      <div class="rooms-content lg:order-first">
        <h2 class="text-center lg:text-left">{{ room2B.title }}</h2>
        <div>
          <CustomTitle title="客房介紹" />
          <ul class="list-disc list-inside">
            <li
              v-for="description in room2B.descriptions"
              :key="description.id"
            >
              {{ description.text }}
            </li>
          </ul>
        </div>

        <div>
          <CustomTitle title="定價" />
          <div class="price-table">
            <div class="table-row bg-primary font-bold text-white">
              <div class="price-table-cell">平日</div>
              <div class="price-table-cell">假日</div>
              <div class="price-table-cell">農曆過年</div>
            </div>
            <div class="table-row">
              <div class="price-table-cell">${{ room2B.price.weekday }}</div>
              <div class="price-table-cell">${{ room2B.price.weekend }}</div>
              <div class="price-table-cell">${{ room2B.price.holiday }}</div>
            </div>
          </div>
          <a href="#add-tenant">
            <p
              class="
                my-2
                text-center
                lg:text-left
                hover:text-primary
                hover:animate-bounce
              "
            >
              ＋ 新增房客
            </p>
          </a>
        </div>
      </div>
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

      <div class="rooms-content">
        <h2 class="text-center lg:text-left">{{ room2C.title }}</h2>
        <div>
          <CustomTitle title="客房介紹" />
          <ul class="list-disc list-inside">
            <li
              v-for="description in room2C.descriptions"
              :key="description.id"
            >
              {{ description.text }}
            </li>
          </ul>
        </div>

        <div>
          <CustomTitle title="定價" />
          <div class="price-table">
            <div class="table-row bg-primary font-bold text-white">
              <div class="price-table-cell">平日</div>
              <div class="price-table-cell">假日</div>
              <div class="price-table-cell">農曆過年</div>
            </div>
            <div class="table-row">
              <div class="price-table-cell">${{ room2C.price.weekday }}</div>
              <div class="price-table-cell">${{ room2C.price.weekend }}</div>
              <div class="price-table-cell">${{ room2C.price.holiday }}</div>
            </div>
          </div>
          <a href="#add-tenant">
            <p
              class="
                my-2
                text-center
                lg:text-left
                hover:text-primary
                hover:animate-bounce
              "
            >
              ＋ 新增房客
            </p>
          </a>
        </div>
      </div>
    </section>

    <section id="add-tenant" class="content-block">
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

    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomTitle from "../components/CustomTitle";
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  name: "Rooms",
  components: { CustomTitle, Header, Footer, Swiper, SwiperSlide },
  setup() {
    const roomInfo = [
      {
        id: 0,
        text: "DnD 為合法新建民宿，為獨棟農舍，周遭是稻米、青蔥種植區，遠處群山環繞，安靜、空氣好。",
      },
      {
        id: 1,
        text: "民宿 1 樓的公共空間有客廳與餐廳，2 樓則有 3 間住宿客房，每間客房可容納 2 - 6 人住宿，全棟最大容量為住宿 16 人。",
      },
      {
        id: 2,
        text: "所有房間均有大面窗景，北歐風實木家具。餐廳有真正的材燒壁爐、懷舊木馬，客廳有積木火車軌道、各類書籍消遣時間。",
      },
      { id: 3, text: "或者也可以喝杯咖啡，享受周遭滿滿的綠意。" },
    ];

    const room2F = {
      title: "2F 包層",
      image: "https://i.imgur.com/B76LE0S.jpg",
      descriptions: [
        {
          id: 0,
          text: "包層為同時預訂 2F 三間房間，當天不會有其他客人入住。",
        },
        {
          id: 1,
          text: "入住人數可為 6 - 16 人，費用依實際人數而有不同。當住宿人數為 6 人時收費如下表。",
        },
      ],
      price: { weekday: 8340, weekend: 9540, holiday: 14310 },
    };

    const room2A = {
      title: "2A 山景房",
      images: [
        "https://i.imgur.com/UHxUVHA.jpg",
        "https://i.imgur.com/lJAioO9.jpg",
        "https://i.imgur.com/0H6pIzi.jpg",
      ],
      descriptions: [
        { id: 0, text: "房型 2A 有一張加大雙人床，和 2 張沙發。" },
        {
          id: 1,
          text: "4 人住宿時使用一張乳膠墊沙發床，6 人住宿時使用 2 張乳膠墊沙發床。",
        },
      ],
      price: { weekday: 2880, weekend: 3280, holiday: 4920 },
    };

    const room2B = {
      title: "2B 樓中樓山景房",
      images: [
        "https://i.imgur.com/YEeqngr.jpg",
        "https://i.imgur.com/DzH1qkY.jpg",
        "https://i.imgur.com/QF8aCB5.jpg",
      ],
      descriptions: [
        {
          id: 0,
          text: "房型 2B 住宿 2 人時使用一張加大雙人床，住宿 3 - 4 人使用樓中樓地板彈簧床墊。",
        },
      ],
      price: { weekday: 2680, weekend: 3080, holiday: 4620 },
    };

    const room2C = {
      title: "2C 樓中樓山景房",
      images: [
        "https://i.imgur.com/a3VaT8t.jpg",
        "https://i.imgur.com/V8smQxY.jpg",
        "https://i.imgur.com/CMD9joE.jpg",
      ],
      descriptions: [
        {
          id: 0,
          text: "房型 2C 住宿 2 人時使用一張加大雙人床，住宿 3 - 4 人使用樓中樓地板彈簧床墊，住宿 5 - 6 人使用沙發床。",
        },
      ],
      price: { weekday: 2780, weekend: 3180, holiday: 4770 },
    };

    return { roomInfo, room2F, room2A, room2B, room2C };
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