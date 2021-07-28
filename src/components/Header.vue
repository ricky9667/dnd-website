<template>
  <header class="bg-header bg-home flex">
    <div class="header-title-box m-auto">
      <h1 class="text-white mb-0 md:mb-2 lg:mb-4">{{ title }}</h1>
      <h3 class="text-white">{{ subtitle }}</h3>
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
  height: calc((50vw + 100vh) / 2);
}

.bg-home {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://i.imgur.com/B76LE0S.jpg');
}

.header-title-box {
  @apply px-2 py-0;
  @apply md:px-6 py-1;
  @apply lg:px-12 py-4;
}
</style>