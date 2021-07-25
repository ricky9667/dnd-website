<template>
  <div class="custom-title">
    <img src="../assets/logo/dnd_logo_color.png" alt=" - " class="inline-block h-10 mr-2"/>
    <h4 class="inline-block align-middle">{{ title }}</h4>
  </div>
</template>

<script>
export default {
  name: 'CustomTitle',
  props: ['title']
}
</script>

<style>
.custom-title {
  @apply mb-4;
}
</style>