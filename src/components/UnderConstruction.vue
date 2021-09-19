<template>
  <section class="under-construction">
    <img class="mx-auto h-20 md:h-32 lg:h-44" src="../assets/logo/dnd_logo_black.png" alt="" />
    <div class="flex flex-row justify-center items-center gap-1 h-8">
      <ExclamationIcon class="h-6 w-6 lg:h-8 lg:w-8" />
      <h4>{{ title }}</h4>
    </div>
    <div class="mx-2 sm:mx-4">
      <p class="text-center" v-for="description in descriptions" :key="description">{{ description }}</p>
    </div>
  </section>
</template>

<script>
import { ExclamationIcon } from "@heroicons/vue/outline";

export default {
  name: "under-construction",
  components: { ExclamationIcon },
  setup() {
    const title = "網頁施工中";
    const descriptions = ["此頁面尚未開發完畢，完成後會以最快的速度立即更新！", "請記得隨時關注官方頁面和其他平台，以獲得最新的資訊！"];

    return { title, descriptions };
  },
};
</script>

<style>
.under-construction > * {
  @apply my-4;
}
</style>