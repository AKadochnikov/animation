import { createRouter, createWebHistory } from "vue-router";
import HoverView from "../views/HoverView/HoverView.vue";
import HoverButtons from "../views/HoverView/components/HoverButtons.vue";
import MainView from "../views/MainView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainView,
    },
    {
      path: "/hover",
      name: "hover",
      children: [
        {
          path: "",
          name: "hover",
          component: HoverView,
        },
        {
          path: "buttons",
          name: "buttons",
          component: HoverButtons,
        },
      ],
    },
  ],
});

export default router;
