<template>
  <div class="home-info">
    <slot></slot>
    <div class="flex flex-col items-start home-info-content px-4">
      <h2 class="pt-4 lg:pt-0 mb-4">{{ title }}</h2>
      <p v-for="info in infos" :key="info.id" class="my-1">{{ info.text }}</p>
      <button v-if="button"
              :class="{'home-button': true, 'button-yellow': button.theme === 'yellow', 'button-blue': button.theme === 'blue'}">
        <router-link :to="button.link">{{ button.text }}</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageSection',
  props: ['title', 'infos', 'button'],
}
</script>

<style>
.home-info {
  @apply flex flex-col items-center justify-evenly mx-8 my-12 gap-4;
  @apply lg:flex-row lg:mx-20 lg:my-28;
}

.home-info-content {
  @apply w-72 px-8;
  @apply sm:w-96;
  @apply md:w-108;
  @apply lg:w-120;
}

.home-button {
  @apply inline-block rounded-lg transform duration-200 hover:scale-110 font-bold shadow-lg tracking-widest;
  @apply text-sm px-6 py-2 my-2;
  @apply md:text-base md:my-4;
}

.button-yellow {
  @apply bg-yellow-200 hover:bg-yellow-300 text-gray-600;
}

.button-blue {
  @apply bg-blue-500 hover:bg-blue-600 text-gray-100;
}
</style>