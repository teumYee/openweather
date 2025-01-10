// import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./routes/index";

import store from "./store/index";
import { createPinia } from "pinia";

const pinia = createPinia();

// method 체이닝
createApp(App).use(router).use(store).use(pinia).mount("#app");
