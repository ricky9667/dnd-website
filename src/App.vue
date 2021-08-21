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
      <router-link to="/" class="nav-item nav-link" @click="closeNavbar">
        <HomeIcon />
        <div class="">首頁</div>
      </router-link>
      <router-link to="/about" class="nav-item nav-link" @click="closeNavbar">
        <AboutIcon />
        <div>關於我們</div>
      </router-link>
      <router-link to="/rooms" class="nav-item nav-link" @click="closeNavbar">
        <RoomsIcon />
        <div>客房介紹</div>
      </router-link>
      <router-link to="/reservation" class="nav-item nav-link" @click="closeNavbar">
        <ReservationIcon />
        <div>訂房資訊</div>
      </router-link>
      <router-link to="/transportation" class="nav-item nav-link" @click="closeNavbar">
        <TransportationIcon />
        <div>交通資訊</div>
      </router-link>
      <router-link to="/tourism" class="nav-item nav-link" @click="closeNavbar">
        <TourismIcon />
        <div>鄰近景點</div>
      </router-link>
    </div>
  </nav>

  <router-view/>
</template>

<script>
import {onMounted, ref} from 'vue'
import HamburgerButton from './components/HamburgerButton'
import HomeIcon from './components/icons/HomeIcon'
import AboutIcon from './components/icons/AboutIcon'
import RoomsIcon from './components/icons/RoomsIcon'
import ReservationIcon from './components/icons/ReservationIcon'
import TransportationIcon from './components/icons/TransportationIcon'
import TourismIcon from './components/icons/TourismIcon'


export default {
  name: 'App',
  components: {
    HamburgerButton, 
    HomeIcon, 
    AboutIcon, 
    RoomsIcon, 
    ReservationIcon,
    TransportationIcon,
    TourismIcon
  },
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
  background-size: 0% 3px;
  background-repeat: no-repeat;
  background-position: left bottom;
  transition: background-size .25s ease;
}

.nav-link:hover {
  background-size: 100% 3px;
}

.icon-container {
  @apply h-12 w-12;
  @apply flex justify-center items-center;
}

.nav-item.router-link-exact-active {
  background-size: 100% 3px;
}
</style>
