<template>
  <nav class="flex flex-col md:flex-row justify-between">
    <div class="flex flex-row justify-between">
      <router-link to="/">
        <img class="h-12 md:h-16 px-4 py-1" src="./assets/logo/dnd_logo_color.png" alt="首頁">
      </router-link>

      <div @click="toggleNavbar" class="md:hidden float-right icon-container nav-item">
        <HamburgerButton ref="hamburger" :open="isOpenNavbar" />
      </div>
    </div>

    <div class="nav-links">
      <router-link v-for="item in navbarItems" :key="item.id" :to="item.path" class="nav-item" @click="closeNavbar">
        {{ item.title }}
      </router-link>
    </div>
  </nav>

  <router-view/>
</template>

<script>
import {onMounted, ref} from 'vue'
import HamburgerButton from './components/HamburgerButton';

export default {
  name: 'App',
  components: {HamburgerButton},
  setup() {
    const navbarItems = [
      {id: 0, path: '/', title: '首頁'},
      {id: 1, path: '/about', title: '關於我們'},
      {id: 2, path: '/rooms', title: '客房介紹'},
      {id: 3, path: '/reservation', title: '訂房資訊'},
      {id: 4, path: '/transportation', title: '交通資訊'},
      {id: 5, path: '/tourism', title: '鄰近景點'}
    ]
    const navbarRef = ref({})
    const hamburger = ref({})
    const isOpenNavbar = ref(false)

    onMounted(() => {
      navbarRef.value = document.getElementsByClassName('nav-links')[0]
    })

    const toggleNavbar = () => {
      navbarRef.value.classList.toggle('active')
      isOpenNavbar.value = !isOpenNavbar.value
      hamburger.value.toggleClass()
    }

    const closeNavbar = () => {
      navbarRef.value.classList.remove('active')
      hamburger.value.removeClass()
    }

    return {navbarItems, isOpenNavbar, toggleNavbar, closeNavbar, hamburger}
  }
}
</script>

<style>
#app {
  font-family: 'Open Sans', 'Noto Sans TC', Avenir, Helvetica, Arial, sans-serif;
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

.nav-item {
  @apply flex flex-row justify-center items-center px-2 font-bold;
  @apply h-10 w-full;
  @apply md:h-16 md:w-24;
}

.nav-links {
  @apply right-0 top-0 hidden md:flex md:flex-row flex-col;
}

.nav-links.active {
  @apply flex;
}

.icon-container {
  @apply h-12 w-12;
  @apply flex justify-center items-center;
}

nav .nav-item.router-link-exact-active {
  @apply text-white bg-primary;
}
</style>
