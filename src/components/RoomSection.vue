<template>
  <section class="rooms-section">
    <div class="lg:col-span-2 px-4">
      <swiper
        class="rooms-swiper"
        :modules="modules"
        :effect="'fade'"
        :navigation="true"
        :loop="images.length > 1"
        :pagination="{ clickable: true }"
      >
        <swiper-slide
          v-for="(image, index) in images"
          :key="index"
          class="rounded-xl overflow-hidden"
        >
          <img class="swiper-image rounded-xl" :src="image" :alt="imageAlt" />
        </swiper-slide>
      </swiper>
    </div>

    <RoomContent
      :class="{ 'lg:order-first': contentFirst }"
      :title="title"
      :descriptions="descriptions"
      :price="price"
    />
  </section>
</template>

<script lang="ts">
import RoomContent from "./RoomContent.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import type { SwiperModule } from "swiper/types";
import type { PropType } from "vue";
import type { RoomPrice } from "../utils/api";

export default {
  name: "RoomSection",
  components: { RoomContent, Swiper, SwiperSlide },
  props: {
    title: { type: String, required: true },
    images: { type: Array as PropType<string[]>, required: true },
    imageAlt: { type: String, required: true },
    descriptions: { type: Array as PropType<string[]>, required: true },
    price: { type: Object as PropType<Partial<RoomPrice>>, required: true },
    modules: { type: Array as PropType<SwiperModule[]>, required: true },
    contentFirst: { type: Boolean, default: false },
  },
};
</script>

<style>
@reference "../styles/styles.css";

.rooms-section {
  @apply grid grid-cols-1 lg:grid-cols-3 lg:gap-8;
  @apply max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12;
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
</style>
