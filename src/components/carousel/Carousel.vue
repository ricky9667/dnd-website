<template>
  <div class="carousel">
    <slot></slot>

    <div>
      <button @click="prev" class="carousel-button prev">Prev</button>
      <button @click="next" class="carousel-button next">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  methods: {
    next() {
      this.$emit('next')
    },
    prev() {
      this.$emit('prev')
    }
  }
}
</script>

<style>
.carousel {
  position: relative;
  overflow: hidden;
  width: 600px;
  height: 350px;
}

.carousel-button {
  position: absolute;
  height: 40px;
  width: 50px;
  top: calc(50% - 20px);
  background-color: rgba(0, 0, 0, 0.8);
  border: none;
  color: #fff
}

.carousel-button:active, .carousel-button:hover {
  outline: none;
  cursor: pointer;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}
</style>