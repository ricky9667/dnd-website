import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Rooms from '../views/Rooms.vue'
import Reservation from '../views/Reservation.vue'
import Transportation from '../views/Transportation.vue'
import Tourism from '../views/Tourism.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {title: 'DnD 休閒民宿 - 首頁'}
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {title: 'DnD 休閒民宿 - 關於我們'}
  },
  {
    path: '/rooms',
    name: 'Rooms',
    component: Rooms,
    meta: {title: 'DnD 休閒民宿 - 客房介紹'}
  },
  {
    path: '/reservation',
    name: 'Reservation',
    component: Reservation,
    meta: {title: 'DnD 休閒民宿 - 訂房資訊'}
  },
  {
    path: '/transportation',
    name: 'Transportation',
    component: Transportation,
    meta: {title: 'DnD 休閒民宿 - 交通資訊'}
  },
  {
    path: '/tourism',
    name: 'Tourism',
    component: Tourism,
    meta: {title: 'DnD 休閒民宿 - 鄰近景點'}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
