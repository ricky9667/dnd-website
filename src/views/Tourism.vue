<template>
  <div id="tourism">
    <custom-header title="鄰近景點" subtitle="Tourism">
      <img class="header-image" :src="headerImage" alt="Tourism" />
    </custom-header>

    <custom-footer />
  </div>
</template>

<script>
import CustomHeader from "../components/CustomHeader";
import CustomFooter from "../components/CustomFooter";

export default {
  name: "Tourism",
  components: { CustomHeader, CustomFooter },
  setup() {
    const headerImage = "https://ik.imagekit.io/pxhytijjnsj/DnD/tourism-min_b7KnlkS6jw.jpg?updatedAt=1631449600838";

    return { headerImage };
  },
};
</script>