<template>
  <div class="slider mx-auto">
    <figure>
      <slot></slot>
    </figure>
  </div>
</template>

<script>
export default {
  name: 'ImageSlider',
  props: ['title', 'subtitle']
}
</script>

<style>
.slider {
  overflow: hidden;
}

.slider figure {
  position: relative;
  width: 300%;
  margin: 0;
  left: 0;
}

.slider figure:hover {
  animation: 12s slider infinite;
}

.slider figure img {
  width: calc(100% / 3);
  float: left;
}

@keyframes slider {
  0% {
    left: 0;
  }
  25% {
    left: 0;
  }
  30% {
    left: -100%;
  }
  55% {
    left: -100%;
  }
  60% {
    left: -200%;
  }
  85% {
    left: -200%;
  }
  95% {
    left: 0;
  }
}
</style>