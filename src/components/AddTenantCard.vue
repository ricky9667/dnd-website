<template>
  <div class="add-tenant-card">
    <div class="add-tenant-card-header">
      <h3 class="font-bold text-center text-white">{{ title }}</h3>
    </div>
    <h4>3 ~ 6 歲</h4>
    <p>${{ threeToSix }}/人，包含早餐、不含寢具</p>
    <br />
    <h4>6 歲以上</h4>
    <p>${{ overSix }}/人，包含早餐、寢具</p>
  </div>
</template>

<script>
export default {
  name: "add-tenant-card",
  props: ["title", "threeToSix", "overSix"],
};
</script>

<style>
.add-tenant-card {
  @apply w-full md:w-1/3 pb-4;
  @apply bg-secondary rounded-lg shadow-xl overflow-hidden;
}

.add-tenant-card > * {
  @apply text-center;
}

.add-tenant-card-header {
  @apply p-4 mb-4 bg-primary;
  clip-path: polygon(0 0, 100% 0%, 100% 85%, 0% 100%);
}
</style>