<template>
  <div id="back-to-top">
    <a href="#">
      <div id="back-to-top-container">
        <ArrowSmUpIcon class="text-primary inline-block sm:hidden" />
        <ArrowUpIcon class="text-primary hidden sm:inline-block" />
        <div id="back-to-top-text">回到頂部</div>
      </div>
    </a>
  </div>
</template>

<script>
import { ArrowSmUpIcon, ArrowUpIcon } from "@heroicons/vue/outline";

export default {
  name: "BackToTop",
  components: { ArrowSmUpIcon, ArrowUpIcon },
};
</script>

<style>
#back-to-top {
  @apply w-min my-4 z-10;
  @apply transform duration-300 hover:-translate-y-1.5;
}

#back-to-top-container {
  @apply flex flex-row items-center bg-secondary rounded-full shadow;
  @apply p-1 sm:p-3 md:px-4 md:py-2;
}

#back-to-top-text {
  @apply hidden md:inline text-lg font-bold text-primary whitespace-nowrap pl-1;
}
</style>
