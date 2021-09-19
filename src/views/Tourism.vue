<template>
  <div id="tourism">
    <CustomHeader title="鄰近景點" subtitle="Tourism">
      <img class="header-image" :src="headerImage" alt="Tourism" />
    </CustomHeader>

    <under-construction />

    <CustomFooter />
  </div>
</template>

<script>
import CustomHeader from "../components/CustomHeader";
import CustomFooter from "../components/CustomFooter";
import UnderConstruction from "../components/UnderConstruction";

export default {
  name: "Tourism",
  components: { CustomHeader, CustomFooter, UnderConstruction },
  setup() {
    const headerImage = "https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/tourism-min_b7KnlkS6jw.jpg?updatedAt=1631449600838";

    return { headerImage };
  },
};
</script>