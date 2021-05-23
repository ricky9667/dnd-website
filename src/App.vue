<template>
  <nav class="flex items-center justify-around rounded-3xl m-4 fixed left-0 right-0 bg-gray-200 opacity-80">
    <div>
      <router-link class="h-12 md:h-8" to="/">
        <img class="h-12 p-1" src="./assets/dnd_logo_color.png" alt="logo">
      </router-link>
    </div>
    <div v-for="item in navbarItems" :key="item.id">
      <router-link class="h-12 md:h-8" :to="item.path">{{ item.title }}</router-link>
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
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
