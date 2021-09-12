<template>
  <div class="custom-title">
    <slot></slot>
    <h4 class="inline-block align-middle ml-2">{{ title }}</h4>
  </div>
</template>

<script>
export default {
  name: "CustomTitle",
  props: ["title"],
};
</script>

<style>
.custom-title {
  @apply mb-2;
}
</style>