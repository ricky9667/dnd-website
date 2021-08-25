<template>
  <footer
    id="footer"
    class="flex flex-col items-center justify-evenly bg-gray-200 h-60"
  >
    <section class="flex flex-row items-center justify-center w-72">
      <img
        class="h-10 mx-2"
        src="../assets/logo/dnd_logo_black.png"
        alt="Logo Black"
      />
      <h4 class="text-lg font-bold mx-2">聯絡我們</h4>
    </section>

    <section class="flex flex-col h-16 justify-around">
      <div class="info-row w-56">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        <h5 class="text-sm px-2">0918-583-517 胡先生</h5>
      </div>

      <div class="info-row w-56">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <h5 class="text-sm px-2">宜蘭縣三星鄉忠平路 43-28 號</h5>
      </div>
    </section>

    <section class="flex flex-row justify-evenly w-60">
      <a
        class="scale-transition"
        href="https://www.facebook.com/daledory"
        target="_blank"
      >
        <img
          class="h-6 footer-icon"
          src="../assets/logo/facebook.png"
          alt="FB"
        />
      </a>
      <a
        class="scale-transition"
        href="https://line.me/R/ti/p/%40661wlbsv"
        target="_blank"
      >
        <img class="h-6 footer-icon" src="../assets/logo/line.png" alt="Line" />
      </a>
    </section>

    <h6 class="text-xs">Copyright© DnD B&B Homestay</h6>
  </footer>
</template>

<script>
export default {
  name: "custom-footer",
};
</script>

<style>
.info-row {
  @apply flex flex-row items-center justify-start;
}

.scale-transition {
  @apply transform hover:scale-125 transition duration-150;
}
</style>