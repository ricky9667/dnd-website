<template>
  <header>
    <slot></slot>
    <div class="header-title-box center-header-text m-auto">
      <h1 class="text-white mb-0 md:mb-2 lg:mb-4">{{ title }}</h1>
      <h3 class="text-white">{{ subtitle }}</h3>
    </div>
  </header>
</template>

<script>
export default {
  name: "custom-header",
  props: ["title", "subtitle"],
};
</script>

<style>
header {
  position: relative;
  width: 100%;
  white-space: nowrap;
  margin-bottom: 4rem;
}

.header-image {
  width: 100%;
  height: calc((50vw + 50vh) / 2);
  filter: brightness(0.75);
  object-fit: cover;
}

.header-title-box {
  @apply px-2 py-0;
  @apply md:px-6 py-1;
  @apply lg:px-12 py-4;
}

.center-header-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>