<template>
  <footer id="footer" class="flex flex-col items-center justify-evenly bg-gray-200 h-60">
    <section class="flex flex-row items-center justify-center w-72">
      <img class="h-10 mx-2" src="../assets/logo/dnd_logo_black.png" alt="Logo Black" />
      <h4 class="text-lg font-bold mx-2">聯絡我們</h4>
    </section>

    <section class="flex flex-col h-16 justify-around">
      <div class="info-row w-56">
        <PhoneIcon class="h-4 w-4" />
        <h5 class="text-sm px-2">0918-583-517 胡先生</h5>
      </div>

      <div class="info-row w-56">
        <LocationMarkerIcon class="h-4 w-4" />
        <h5 class="text-sm px-2">宜蘭縣三星鄉忠平路 43-28 號</h5>
      </div>
    </section>

    <section class="flex flex-row justify-evenly w-60">
      <a class="scale-transition" href="https://www.facebook.com/daledory" target="_blank">
        <img class="h-6 footer-icon" src="../assets/logo/facebook.png" alt="FB" />
      </a>
      <a class="scale-transition" href="https://line.me/R/ti/p/%40661wlbsv" target="_blank">
        <img class="h-6 footer-icon" src="../assets/logo/line.png" alt="Line" />
      </a>
    </section>

    <h6 class="text-xs">Copyright© DnD B&B Homestay</h6>
  </footer>
</template>

<script>
import { PhoneIcon, LocationMarkerIcon } from "@heroicons/vue/outline";

export default {
  name: "custom-footer",
  components: { PhoneIcon, LocationMarkerIcon },
};
</script>

<style>
footer {
  margin-top: 4rem;
}

.info-row {
  @apply flex flex-row items-center justify-start;
}

.scale-transition {
  @apply transform hover:scale-125 transition duration-150;
}
</style>