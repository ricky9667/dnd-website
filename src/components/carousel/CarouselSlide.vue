<template>
  <transition :name="direction" mode="in-out">
    <div v-if="visibleSlide === index" class="carousel-slide">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CarouselSlide',
  props: ['visibleSlide', 'index', 'direction']
}
</script>

<style>
.carousel-slide {
  position: absolute;
  inset: 0;
}

.left-enter-active {
  animation: leftInAnimation .3s ease-in-out;
}

@keyframes leftInAnimation {
  from {transform: translateX(100%);}
  to {transform: translateX(0);}
}

.left-leave-active {
  animation: leftOutAnimation .3s ease-in-out;
}

@keyframes leftOutAnimation {
  from {transform: translateX(0);}
  to {transform: translateX(-100%);}
}

.right-enter-active {
  animation: rightInAnimation .3s ease-in-out;
}

@keyframes rightInAnimation {
  from {transform: translateX(-100%);}
  to {transform: translateX(0);}
}

.right-leave-active {
  animation: rightOutAnimation .3s ease-in-out;
}

@keyframes rightOutAnimation {
  from {transform: translateX(0);}
  to {transform: translateX(100%);}
}
</style>