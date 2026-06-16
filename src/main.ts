import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/styles.css";
import { createChatWoot } from "@huntersofbook/chatwoot-vue";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

const chatwoot = createChatWoot({
  init: {
    websiteToken: "cMKyMwYHdFz76Ufr4FGYRUMp",
  },
  settings: {
    position: "right",
    launcherTitle: "訂房詢問",
  },
  partytown: false,
});

createApp(App).use(router).use(chatwoot).mount("#app");
