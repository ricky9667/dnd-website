<template>
  <div class="room-content">
    <h2 class="text-center lg:text-left">{{ title }}</h2>

    <div class="flex flex-col justify-start items-center lg:items-start">
      <custom-title title="客房介紹">
        <HomeIcon />
      </custom-title>

      <ul class="list-disc list-inside">
        <li v-for="(description, index) in descriptions" :key="index">
          {{ description }}
        </li>
      </ul>
    </div>

    <div class="flex flex-col justify-start items-center lg:items-start">
      <custom-title title="定價">
        <CurrencyDollarIcon />
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
          <UserAddIcon />
          <p class="inline-block align-middle my-2 ml-2">查看增加人數價格</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import CustomTitle from "./CustomTitle.vue";
import { HomeIcon, CurrencyDollarIcon, UserAddIcon } from "@heroicons/vue/outline";

export default {
  name: "room-content",
  components: { CustomTitle, HomeIcon, CurrencyDollarIcon, UserAddIcon },
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