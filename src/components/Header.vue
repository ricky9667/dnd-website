<template>
  <header class="bg-header bg-home flex">
    <div class="header-title-box m-auto">
      <h2 class="header-title mb-0 md:mb-2 lg:mb-4">{{ title }}</h2>
      <h4 class="header-subtitle">{{ subtitle }}</h4>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: ['title', 'subtitle']
}
</script>

<style>
.bg-header {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 50vw;
}

.bg-home {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../assets/home/home_header.jpg');
}

.header-title-box {
  @apply px-2 py-0;
  @apply md:px-6 py-1;
  @apply lg:px-12 py-4;
}

.header-title {
  @apply text-2xl font-bold text-white;
  @apply md:text-4xl;
  @apply lg:text-6xl
}

.header-subtitle {
  @apply text-sm text-white;
  @apply md:text-lg;
  @apply lg:text-2xl;
}
</style>