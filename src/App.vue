<template>
  <nav class="flex flex-col md:flex-row justify-between">
    <div class="flex flex-row justify-between">
      <router-link to="/">
        <img class="h-12 md:h-16 px-4 py-1" src="./assets/logo/dnd_logo_color.png" alt="首頁">
      </router-link>

      <div @click="toggleNavbar" class="md:hidden float-right icon-container nav-hover">
        <svg v-if="!openNavbar" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-900" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-if="openNavbar" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </div>

    <div class="nav-links">
      <router-link v-for="item in navbarItems" :key="item.id" :to="item.path" class="nav-item nav-hover">
        {{ item.title }}
      </router-link>
    </div>
  </nav>

  <router-view/>
</template>

<script>
import {ref} from 'vue'

export default {
  name: 'App',
  setup() {
    const navbarItems = [
      {id: 0, path: '/', title: '首頁'},
      {id: 1, path: '/about', title: '關於我們'},
      {id: 2, path: '/rooms', title: '客房介紹'},
      {id: 3, path: '/reservation', title: '訂房資訊'},
      {id: 4, path: '/transportation', title: '交通資訊'},
      {id: 5, path: '/tourism', title: '鄰近景點'}
    ]

    const openNavbar = ref(false)
    const toggleNavbar = () => {
      document.getElementsByClassName('nav-links')[0].classList.toggle('active')
      openNavbar.value = !openNavbar.value
    }

    return {navbarItems, openNavbar, toggleNavbar}
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
  @apply bg-yellow-200 shadow-lg;
}

.nav-item {
  @apply flex flex-row justify-center items-center px-2 font-bold;
  @apply h-10 w-full ;
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

.nav-hover {
  @apply transform duration-100 hover:bg-yellow-100 hover:text-yellow-900;
}

nav .nav-item.router-link-exact-active {
  @apply text-yellow-200 bg-yellow-900;
}
</style>
