<template>
  <div class="room-content">
    <h2 class="text-center lg:text-left">{{ title }}</h2>

    <div class="flex flex-col justify-start items-center lg:items-start">
      <custom-title title="客房介紹">
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
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </custom-title>

      <ul class="list-disc list-inside">
        <li v-for="(description, index) in descriptions" :key="index">
          {{ description }}
        </li>
      </ul>
    </div>

    <div class="flex flex-col justify-start items-center lg:items-start">
      <custom-title title="定價">
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
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </custom-title>

      <div class="price-table">
        <div class="table-row bg-primary font-bold text-white">
          <div class="price-table-cell">平日</div>
          <div class="price-table-cell">假日</div>
          <div class="price-table-cell">農曆過年</div>
        </div>
        <div class="table-row">
          <div class="price-table-cell">${{ price.weekday }}</div>
          <div class="price-table-cell">${{ price.weekend }}</div>
          <div class="price-table-cell">${{ price.holiday }}</div>
        </div>
      </div>

      <a href="#add-tenant">
        <div class="transform duration-200 hover:translate-y-1 px-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 inline-block text-content"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            />
          </svg>
          <p class="inline-block align-middle my-2 ml-2">查看增加人數價格</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import CustomTitle from "./CustomTitle.vue";
export default {
  components: { CustomTitle },
  name: "room-content",
  props: ["title", "descriptions", "price"],
};
</script>

<style>
.room-content {
  @apply px-4 text-left divide-y divide-gray-300;
}

.room-content > * {
  @apply py-2;
}

.price-table {
  @apply table w-full sm:w-4/5 lg:w-full mx-auto text-center rounded bg-secondary border-2 border-primary;
}

.price-table-cell {
  @apply table-cell py-1 w-1/4;
}
</style>