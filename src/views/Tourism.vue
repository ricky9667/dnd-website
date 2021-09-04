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
  metaInfo() {
    return {
      title: "DnD 休閒民宿 - 鄰近景點",
      meta: [
        { name: "description", content: "DnD 休閒民宿 - 鄰近景點" },
        { property: "og:title", content: "DnD 休閒民宿 - 鄰近景點" },
        { property: "og:site_name", content: "DnD 休閒民宿" },
        { property: "og:type", content: "website" },
      ],
    };
  },
  setup() {
    const headerImage =
      "https://ik.imagekit.io/pxhytijjnsj/tourism-min_b7KnlkS6jw.jpg?updatedAt=1629825929111";

    return { headerImage };
  },
};
</script>