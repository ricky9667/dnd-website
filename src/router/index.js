import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Rooms from '@/views/Rooms.vue'
import Reservation from '@/views/Reservation.vue'
import Transportation from '@/views/Transportation.vue'
import Tourism from '@/views/Tourism.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/rooms',
    name: 'Rooms',
    component: Rooms
  },
  {
    path: '/reservation',
    name: 'Reservation',
    component: Reservation
  },
  {
    path: '/transportation',
    name: 'Transportation',
    component: Transportation
  },
  {
    path: '/tourism',
    name: 'Tourism',
    component: Tourism
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
