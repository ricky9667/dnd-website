<template>
  <div id="tourism">
    <CustomHeader title="鄰近景點" subtitle="Tourism">
      <img class="header-image" :src="headerImage" alt="Tourism" />
    </CustomHeader>

    <section class="tourism-content">
      <div
        v-for="section in tourismSections"
        :key="section.title"
        class="tourism-section"
      >
        <h2>{{ section.title }}</h2>
        <div class="tourism-card-grid">
          <article v-for="spot in section.spots" :key="spot.name" class="tourism-card">
            <h3>{{ spot.name }}</h3>
            <p>{{ spot.description }}</p>
            <a
              class="map-link"
              :href="spot.mapUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              查看地址
            </a>
          </article>
        </div>
      </div>
    </section>

    <CustomFooter />
  </div>
</template>

<script>
import CustomHeader from "../components/CustomHeader.vue";
import CustomFooter from "../components/CustomFooter.vue";

export default {
  name: "TourismView",
  components: { CustomHeader, CustomFooter },
  setup() {
    const headerImage =
      "https://ik.imagekit.io/pxhytijjnsj/tr:w-2400/DnD/tourism-min_b7KnlkS6jw.jpg?updatedAt=1631449600838";

    const tourismSections = [
      {
        title: "週邊美食",
        spots: [
          {
            name: "白雪懷念清冰",
            description:
              "三星在地老冰店，主打古早味清冰與芋冰，很多人會把它當作三星行程中的甜點收尾。",
            mapUrl:
              "https://www.google.com/maps/search/?api=1&query=%E7%99%BD%E9%9B%AA%E6%87%B7%E5%BF%B5%E6%B8%85%E5%86%B0",
          },
          {
            name: "三星卜肉",
            description:
              "三星最具代表性的在地美食之一，適合跟景點一起安排成午餐或下午茶前的正餐。",
            mapUrl:
              "https://www.google.com/maps/search/?api=1&query=%E4%B8%89%E6%98%9F%E5%8D%9C%E8%82%89",
          },
        ],
      },
      {
        title: "自然風景",
        spots: [
          {
            name: "安農溪分洪堰風景區",
            description:
              "沿溪景觀明顯，適合散步、拍照，屬於三星很代表性的自然系景點。",
            mapUrl:
              "https://www.google.com/maps/search/?api=1&query=%E5%AE%89%E8%BE%B2%E6%BA%AA%E5%88%86%E6%B4%AA%E5%A0%B0%E9%A2%A8%E6%99%AF%E5%8D%80",
          },
          {
            name: "長埤湖風景區",
            description: "湖景與山景組合，氛圍悠閒，適合順遊放鬆。",
            mapUrl:
              "https://www.google.com/maps/search/?api=1&query=%E9%95%B7%E5%9F%A4%E6%B9%96%E9%A2%A8%E6%99%AF%E5%8D%80",
          },
          {
            name: "清水地熱公園",
            description:
              "三星鄉周邊的高人氣景點，可體驗地熱煮食，適合親子或情侶安排半日遊。",
            mapUrl:
              "https://www.google.com/maps/search/?api=1&query=%E6%B8%85%E6%B0%B4%E5%9C%B0%E7%86%B1%E5%85%AC%E5%9C%92",
          },
        ],
      },
      {
        title: "歷史文化",
        spots: [
          {
            name: "天送埤車站",
            description: "復古鐵道風格很強，常被納入三星鄉經典行程，適合拍照與輕旅行。",
            mapUrl:
              "https://www.google.com/maps/search/?api=1&query=%E5%A4%A9%E9%80%81%E5%9F%A4%E8%BB%8A%E7%AB%99",
          },
          {
            name: "陳定南紀念園區",
            description: "屬於人文紀念型景點，可搭配三星鄉其他景點一起安排。",
            mapUrl:
              "https://www.google.com/maps/search/?api=1&query=%E9%99%B3%E5%AE%9A%E5%8D%97%E7%B4%80%E5%BF%B5%E5%9C%92%E5%8D%80",
          },
          {
            name: "大洲車站",
            description: "小型鐵道景點，適合喜歡老車站、地方風景的人。",
            mapUrl:
              "https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E6%B4%B2%E8%BB%8A%E7%AB%99",
          },
        ],
      },
      {
        title: "親子休閒",
        spots: [
          {
            name: "宜農牧場",
            description: "可與小動物互動，行程輕鬆，常被列入三星鄉親子路線。",
            mapUrl:
              "https://www.google.com/maps/search/?api=1&query=%E5%AE%9C%E8%BE%B2%E7%89%A7%E5%A0%B4",
          },
          {
            name: "安農溪自行車道",
            description: "適合騎車、散步、看風景，對想要輕運動的人很友善。",
            mapUrl:
              "https://www.google.com/maps/search/?api=1&query=%E5%AE%89%E8%BE%B2%E6%BA%AA%E8%87%AA%E8%A1%8C%E8%BB%8A%E9%81%93",
          },
        ],
      },
      {
        title: "在地特色",
        spots: [
          {
            name: "三星青蔥文化館",
            description: "想認識三星蔥與在地農產，這個點很適合排進去。",
            mapUrl:
              "https://www.google.com/maps/search/?api=1&query=%E4%B8%89%E6%98%9F%E9%9D%92%E8%94%A5%E6%96%87%E5%8C%96%E9%A4%A8",
          },
          {
            name: "安農驛站",
            description: "常被作為三星休憩與拍照的中繼點，適合順遊休息。",
            mapUrl:
              "https://www.google.com/maps/search/?api=1&query=%E5%AE%89%E8%BE%B2%E9%A9%9B%E7%AB%99",
          },
        ],
      },
    ];

    return { headerImage, tourismSections };
  },
};
</script>

<style>
.tourism-content {
  @apply max-w-6xl mx-auto px-4 py-12 space-y-12;
}

.tourism-section h2 {
  @apply mb-6 text-2xl font-bold text-gray-800 md:text-3xl;
}

.tourism-card-grid {
  @apply grid gap-5 md:grid-cols-2 lg:grid-cols-3;
}

.tourism-card {
  @apply rounded-lg bg-white p-6 shadow-md space-y-3;
}

.tourism-card h3 {
  @apply text-xl font-semibold text-gray-800;
}

.tourism-card p {
  @apply leading-7 text-gray-600;
}

.tourism-card a {
  @apply text-primary;
}

.map-link {
  @apply text-sm text-primary px-6 py-2 my-2;
  @apply md:text-base md:my-4;
  @apply inline-block rounded-full bg-secondary;
  @apply hover:text-white hover:bg-primary hover:-translate-y-1 hover:shadow-lg transform duration-300 font-bold;
  @apply focus:text-white focus:bg-primary;
}
</style>
