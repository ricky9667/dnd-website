<template>
  <div id="not-found">
    <header class="bg-header bg-not-found flex">
      <div class="header-title-box m-auto">
        <h1 class="text-white mb-0 md:mb-2 lg:mb-4">此頁面不存在</h1>
        <h3 class="text-white">Page not found</h3>
        <div class="mt-6 flex flex-row justify-center gap-4">
          <button @click="toPreviousPage" class="icon-button bg-green-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mx-auto text-green-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button @click="toHomePage" class="icon-button bg-yellow-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mx-auto text-yellow-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </button>
          <a
            href="https://www.facebook.com/daledory"
            target="_blank"
            class="icon-button bg-blue-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mx-auto text-blue-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  methods: {
    toHomePage() {
      this.$router.push({ name: "Home" });
    },
    toPreviousPage() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
.bg-not-found {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("https://i.imgur.com/xgYLPDU.jpg");
}

.icon-button {
  @apply h-10 w-10 flex justify-center items-center rounded-full;
  @apply transform duration-200 hover:bg-white;
}
</style>