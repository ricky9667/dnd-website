<template>
  <div class="home-info">
    <slot></slot>
    <div class="flex flex-col items-start home-info-content px-1 divide-y divide-gray-300">
      <h2 class="pt-0 pb-4">{{ title }}</h2>
      <div class="flex flex-col items-start pt-4">
        <p v-for="info in infos" :key="info.id" class="my-1">{{ info.text }}</p>
        <button v-if="button"
                :class="{'home-button': true, 'button-yellow': button.theme === 'yellow', 'button-blue': button.theme === 'blue'}">
          <router-link :to="button.link">{{ button.text }}</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageSection',
  props: ['title', 'infos','button'],
}
</script>

<style>
.home-info {
  @apply flex flex-col items-center justify-evenly mx-8 my-8 gap-6;
  @apply lg:flex-row lg:mx-16 lg:my-28;
}

.home-info-content {
  @apply w-11/12 sm:w-5/6 md:w-3/4;
  @apply lg:h-80 lg:w-120 xl:h-96;
}

.image-block {
  @apply w-11/12 sm:w-5/6 rounded-lg;
  @apply md:w-3/4;
  @apply lg:h-80 lg:w-auto;
  @apply xl:h-96;
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