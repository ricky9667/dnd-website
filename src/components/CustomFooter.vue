<template>
  <footer id="footer">
    <section class="mx-auto flex flex-row items-center justify-center">
      <MailIcon class="h-6 w-6 text-white" />
      <h4 class="text-lg font-bold mx-2 text-white">聯絡我們</h4>
    </section>

    <section class="footer-content">
      <a class="scale-transition" href="tel:0918583517" target="_blank">
        <PhoneOutgoingIcon class="footer-icon" />
        <h5 class="footer-text">電話訂房</h5>
      </a>
      <a class="scale-transition" href="https://goo.gl/maps/hfuXQBPwAu7CdApa7" target="_blank">
        <LocationMarkerIcon class="footer-icon" />
        <h5 class="footer-text">查看位置</h5>
      </a>
      <a class="scale-transition" href="https://www.facebook.com/daledory" target="_blank">
        <FlagIcon class="footer-icon" />
        <h5 class="footer-text">粉絲專頁</h5>
      </a>
      <a class="scale-transition" href="https://line.me/R/ti/p/%40661wlbsv" target="_blank">
        <ChatIcon class="footer-icon" />
        <h5 class="footer-text">Line 帳號</h5>
      </a>
    </section>

    <h6 class="text-white">{{ copyright }}</h6>
  </footer>
</template>

<script>
import { MailIcon, PhoneOutgoingIcon, LocationMarkerIcon, FlagIcon, ChatIcon } from "@heroicons/vue/solid";

export default {
  name: "CustomFooter",
  components: { MailIcon, PhoneOutgoingIcon, LocationMarkerIcon, FlagIcon, ChatIcon },
  setup() {
    const copyright = "Copyright© DnD B&B Homestay";

    return { copyright };
  },
};
</script>

<style>
footer {
  @apply mt-16 py-2 lg:py-4 bg-primary;
}

.footer-content {
  @apply flex flex-row justify-center items-center;
  @apply gap-2 md:gap-4 lg:gap-6;
  @apply pt-1 pb-2 lg:pt-4;
}

.footer-icon {
  @apply text-white h-4 w-4 lg:h-6 lg:w-6;
}

.footer-text {
  @apply text-white py-1 whitespace-nowrap;
}

.scale-transition {
  @apply transform hover:scale-110 transition duration-150;
}
</style>