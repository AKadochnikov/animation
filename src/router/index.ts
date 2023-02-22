import { createRouter, createWebHistory } from "vue-router";
import HoverView from "../views/HoverView/HoverView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      redirect: to => {
        return { path: "/hover" };
      },
    },
    {
      path: "/hover",
      name: "hover",
      component: HoverView,
    },
  ],
});

export default router;
