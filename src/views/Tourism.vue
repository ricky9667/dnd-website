<template>
  <div id="tourism">
    <Header title="鄰近景點" subtitle="Tourism">
      <img class="header-image" src="https://i.imgur.com/B76LE0S.jpg" alt="Room example" />
    </Header>

    <Carousel @next="next" @prev="prev">
      <CarouselSlide v-for="(slide, index) in slides" :key="slide" :index="index" :visibleSlide="visibleSlide" :direction="direction">
        <img :src="slide" alt="image" />
      </CarouselSlide>
    </Carousel>

    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/carousel/Carousel';
import CarouselSlide from '../components/carousel/CarouselSlide';
import {ref} from 'vue';

export default {
  name: 'Tourism',
  components: {Header, Footer, Carousel, CarouselSlide},
  setup() {
    const visibleSlide = ref(0)
    const direction = ref({})
    const slides = [
      'https://i.imgur.com/a3VaT8t.jpg',
      'https://i.imgur.com/V8smQxY.jpg',
      'https://i.imgur.com/CMD9joE.jpg'
    ]

    const next = () => {
      if (visibleSlide.value >= slides.length - 1) {
        visibleSlide.value = 0;
      } else {
        visibleSlide.value++;
      }

      direction.value = 'left'
    }

    const prev = () => {
      if (visibleSlide.value <= 0) {
        visibleSlide.value = slides.length - 1;
      } else {
        visibleSlide.value--;
      }
      direction.value = 'right'
    }

    return {slides, visibleSlide, direction, next, prev}
  }
}
</script>