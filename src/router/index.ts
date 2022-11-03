import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  RouteRecordRaw,
} from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/welcome",
    name: "Welcome",
    component: () => import("@/views/welcome.vue"),
  },
  {
    path: "/",
    name: "Home",
    redirect: "/welcome",
    component: Home,
    children: [
      {
        path: "componentCss",
        component: () => import("@/views/ComponentCss/index.vue"),
      },
      {
        path: "componentChart",
        component: () => import("@/views/ComponentChart/index.vue"),
      },
      {
        path: "demoOpenlayer",
        component: () => import("@/views/DemoOpenlayer/index.vue"),
      },
      {
        path: "tictactoe",
        component: () => import("@/views/TicTacToe/index.vue"),
      },
      {
        path: "pageDeepwork",
        component: () => import("@/views/PageDeepwork/index.vue"),
      },
      {
        path: "pageHtml5_1",
        component: () => import("@/views/PageHtml5_1/index.vue"),
      },
      {
        path: "pageHtml5_2",
        component: () => import("@/views/PageHtml5_2/index.vue"),
      },
      {
        path: "resume",
        component: () => import("@/views/Resume/index.vue"),
      },
      {
        path: "test",
        component: () => import("@/views/Test.vue"),
      },
    ],
  },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
