import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/styles.css'

import 'swiper/swiper.scss'
import 'swiper/components/effect-fade/effect-fade.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import SwiperCore, {EffectFade, Navigation, Pagination} from 'swiper/core';

SwiperCore.use([EffectFade, Navigation, Pagination]);
createApp(App).use(router).mount('#app')
