<template>
  <div id="back-to-top">
    <a href="#">
      <div id="back-to-top-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-primary"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
        <div id="back-to-top-text">回到頂部</div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "BackToTop",
};
</script>

<style>
#back-to-top {
  @apply w-min my-4;
  @apply transform duration-300 hover:-translate-y-1.5;
}

#back-to-top-container {
  @apply flex flex-row items-center bg-secondary px-4 py-2 rounded-full shadow-lg;
}

#back-to-top-text {
  @apply text-base md:text-lg font-bold text-primary whitespace-nowrap;
}
</style>