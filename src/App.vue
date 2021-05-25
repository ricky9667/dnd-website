<template>
  <nav class="flex items-center justify-around rounded-3xl z-10 m-8 fixed left-0 right-0 bg-gray-200 opacity-80">
    <div>
      <router-link class="h-12" to="/">
        <img class="h-12 p-1" src="./assets/dnd_logo_color.png" alt="logo">
      </router-link>
    </div>
    <div v-for="item in navbarItems" :key="item.id">
      <router-link class="h-12 lg:text-lg md:text-base hidden sm:inline" :to="item.path">{{ item.title }}</router-link>
    </div>
    <div class="sm:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </div>
  </nav>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  setup() {
    const navbarItems = [
      {id: 1, path: '/about', title: '關於我們'},
      {id: 2, path: '/rooms', title: '客房介紹'},
      {id: 3, path: '/reservation', title: '訂房資訊'},
      {id: 4, path: '/transportation', title: '交通資訊'},
      {id: 5, path: '/tourism', title: '鄰近景點'},
    ]

    return {navbarItems}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  @apply font-bold;
  color: #2c3e50;
  transition: 0.2s;
}

nav a:hover {
  color: #42b983;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
