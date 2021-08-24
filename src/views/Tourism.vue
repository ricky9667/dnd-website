<template>
  <div id="tourism">
    <Header title="鄰近景點" subtitle="Tourism">
      <img class="header-image" :src="headerImage" alt="Room example" />
    </Header>

    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "Tourism",
  components: { Header, Footer },
  setup() {
    const headerImage =
      "https://ik.imagekit.io/pxhytijjnsj/tourism-min_b7KnlkS6jw.jpg?updatedAt=1629825929111";

    return { headerImage };
  },
};
</script>