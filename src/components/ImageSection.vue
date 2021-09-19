<template>
  <div class="image-section">
    <slot></slot>
    <div class="image-section-content px-1">
      <h2 class="pt-0 pb-4">{{ title }}</h2>
      <div class="flex flex-col text-left items-start pt-4">
        <p v-for="(info, index) in infos" :key="index" class="my-1">
          {{ info }}
        </p>
        <router-link v-if="button" class="image-section-button mt-2 lg:mt-4" :to="button.link">{{ button.text }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageSection",
  props: ["title", "infos", "button"],
};
</script>

<style>
.image-section {
  @apply flex flex-col items-center justify-evenly mx-8 my-8 gap-6;
  @apply lg:flex-row lg:mx-16 lg:my-28;
}

.image-section-content {
  @apply flex flex-col items-start divide-y divide-gray-300;
  @apply w-11/12 sm:w-5/6 md:w-3/4;
  @apply lg:h-80 lg:w-120 xl:h-96;
}

.image-block {
  @apply w-11/12 sm:w-5/6 rounded-lg;
  @apply md:w-3/4;
  @apply lg:h-80 lg:w-auto;
  @apply xl:h-96;
}

.image-section-button {
  @apply text-sm text-primary px-6 py-2 my-2;
  @apply md:text-base md:my-4;
  @apply inline-block rounded-full bg-secondary;
  @apply hover:text-white hover:bg-primary hover:-translate-y-1 hover:shadow-lg transform duration-300 font-bold;
  @apply focus:text-white focus:bg-primary;
}
</style>