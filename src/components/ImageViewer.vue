<template>
  <div id="image-viewer" class="flex flex-col">
    <div v-for="image in images" :key="image.id" class="px-4 py-12">
      <img class="w-96 rounded-xl shadow-xl" :src="image.path" :alt="image.id" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageViewer',
  props: ['room'],
  setup(props) {
    const pathPrefix = '../assets/rooms/'
    const images = [
      {id: 0, path: pathPrefix + props.room + '.jpg'},
      {id: 1, path: pathPrefix + props.room + '-1.jpg'},
      {id: 2, path: pathPrefix + props.room + '-2.jpg'}
    ]

    console.log(images[0].path)

    return {images}
  }
}
</script>

<style scoped>

</style>