<template>
  <header class="bg-img bg-home flex">
    <span class="header-title-box m-auto">
      <h2 class="header-title">{{ title }}</h2>
    </span>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: ['title']
}
</script>

<style>
.bg-img {
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 60vw;
  opacity: .9;
}

.bg-home {
  background-image: url('../assets/home/home_header.jpg');
}

.header-title-box {
  @apply bg-black px-2 py-0;
  @apply md:px-6 py-1;
  @apply lg:px-12 py-4;
}

.header-title {
  @apply text-2xl font-bold text-white;
  @apply md:text-4xl;
  @apply lg:text-6xl
}
</style>