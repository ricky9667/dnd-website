<template>
  <div id="hamburger-button" ref="toggleButton">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
import {ref, onMounted} from 'vue';

export default {
  name: 'HamburgerButton',
  props: [],
  setup() {
    const toggleButtonRef = ref({})

    onMounted(() => {
      toggleButtonRef.value = document.getElementById('hamburger-button')
    })

    const toggleClass = () => {
      toggleButtonRef.value.classList.toggle('open')
    }

    const removeClass = () => {
      toggleButtonRef.value.classList.remove('open')
    }

    return {toggleButtonRef, toggleClass, removeClass}
  }
}
</script>

<style>
#hamburger-button:hover {
  transform: scale(1.1);
  transition-duration: .1s;
}

#hamburger-button {
  position: relative;
  width: 1.5rem;
  height: 1rem;

  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
}

#hamburger-button span {
  display: block;
  position: absolute;
  height: 0.2rem;
  width: 100%;
  background: #335443;
  border-radius: 1rem;
  opacity: 1;
  left: 0;

  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}

#hamburger-button span:nth-child(1) {
  top: 0;
}

#hamburger-button span:nth-child(2), #hamburger-button span:nth-child(3) {
  top: 0.5rem;
}

#hamburger-button span:nth-child(4) {
  top: 1rem;
}

#hamburger-button.open span:nth-child(1) {
  top: 0.5rem;
  width: 0;
  left: 50%;
}

#hamburger-button.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#hamburger-button.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#hamburger-button.open span:nth-child(4) {
  top: 0.5rem;
  width: 0;
  left: 50%;
}
</style>