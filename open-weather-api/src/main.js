// import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/index";
// method 체이닝
createApp(App).use(router).mount("#app");
