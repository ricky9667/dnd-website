<template>
  <nav class="flex flex-col md:flex-row justify-between">
    <div class="flex flex-row justify-between">
      <router-link to="/">
        <img class="h-12 md:h-16 px-4 py-1" src="./assets/logo/dnd_logo_color.png" alt="首頁" />
      </router-link>

      <div @click="toggleNavbar" class="md:hidden float-right icon-container nav-item">
        <HamburgerButton ref="hamburger" :open="isOpenNavbar" />
      </div>
    </div>

    <div class="nav-links">
      <router-link to="/" class="nav-item nav-link" @click="closeNavbar">
        <HomeIcon />
        <div>首頁</div>
      </router-link>
      <router-link to="/about" class="nav-item nav-link" @click="closeNavbar">
        <InformationCircleIcon />
        <div>關於我們</div>
      </router-link>
      <router-link to="/rooms" class="nav-item nav-link" @click="closeNavbar">
        <KeyIcon />
        <div>客房介紹</div>
      </router-link>
      <router-link to="/reservation" class="nav-item nav-link" @click="closeNavbar">
        <TagIcon />
        <div>訂房資訊</div>
      </router-link>
      <router-link to="/transportation" class="nav-item nav-link" @click="closeNavbar">
        <LocationMarkerIcon />
        <div>交通資訊</div>
      </router-link>
      <router-link to="/tourism" class="nav-item nav-link" @click="closeNavbar">
        <GlobeIcon />
        <div>鄰近景點</div>
      </router-link>
    </div>
  </nav>

  <BackToTop class="fixed right-2 bottom-2 sm:right-4 sm:bottom-4 lg:right-8 lg:bottom-8" />
  <router-view />
</template>

<script>
import { onMounted, ref } from "vue";
import { HomeIcon, InformationCircleIcon, KeyIcon, TagIcon, LocationMarkerIcon, GlobeIcon } from "@heroicons/vue/outline";
import HamburgerButton from "./components/HamburgerButton";
import BackToTop from "./components/BackToTop";

export default {
  name: "App",
  components: { HomeIcon, InformationCircleIcon, KeyIcon, TagIcon, LocationMarkerIcon, GlobeIcon, HamburgerButton, BackToTop },
  setup() {
    const navbarItems = [
      { id: 0, path: "/", title: "首頁" },
      { id: 1, path: "/about", title: "關於我們" },
      { id: 2, path: "/rooms", title: "客房介紹" },
      { id: 3, path: "/reservation", title: "訂房資訊" },
      { id: 4, path: "/transportation", title: "交通資訊" },
      { id: 5, path: "/tourism", title: "鄰近景點" },
    ];
    const navbarRef = ref({});
    const hamburger = ref({});
    const isOpenNavbar = ref(false);

    onMounted(() => {
      document.dispatchEvent(new Event("render-event"));
      navbarRef.value = document.getElementsByClassName("nav-links")[0];
    });

    const toggleNavbar = () => {
      navbarRef.value.classList.toggle("active");
      isOpenNavbar.value = !isOpenNavbar.value;
      hamburger.value.toggleClass();
    };

    const closeNavbar = () => {
      navbarRef.value.classList.remove("active");
      hamburger.value.removeClass();
    };

    return { navbarItems, isOpenNavbar, toggleNavbar, closeNavbar, hamburger };
  },
};
</script>

<style>
#app {
  font-family: "Open Sans", "Noto Sans TC", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav a {
  @apply font-bold;
}

nav {
  @apply fixed z-10 left-0 right-0;
  @apply bg-secondary shadow-lg;
}

.nav-links {
  @apply md:right-0 md:top-0 hidden md:flex md:flex-row;
}

.nav-links.active {
  @apply flex flex-row flex-wrap;
}

.nav-item {
  @apply flex flex-row justify-center items-center px-2 text-primary font-bold;
  @apply md:h-16;
}

.nav-link {
  @apply h-10 md:h-auto w-full sm:w-1/3 md:w-28 lg:w-36 xl:w-44 md:mx-px;

  background-image: linear-gradient(#335443, #335443);
  background-size: 0% 4px;
  background-repeat: no-repeat;
  background-position: left bottom;
  transition: background-size 0.25s ease;
}

.nav-link:hover {
  background-size: 100% 4px;
}

.icon-container {
  @apply h-12 w-12;
  @apply flex justify-center items-center;
}

.nav-item.router-link-exact-active {
  background-size: 100% 4px;
}
</style>
