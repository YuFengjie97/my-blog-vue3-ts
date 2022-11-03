import { createApp, useContext } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "normalize.css";
import "font-awesome/css/font-awesome.min.css";
import "animate.css";
import "@/assets/public.scss";

import "@/mock/mock.ts";

import hljs from "highlight.js";
import "highlight.js/styles/github.css";

console.log(process.env.NODE_ENV);

const app = createApp(App)
  .use(store)
  .use(router)
  .use(hljs.vuePlugin)
  .mount("#app");
