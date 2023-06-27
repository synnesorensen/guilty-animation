import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/intro",
      name: "intro",
      component: () => import("../views/Intro.vue"),
    },
    {
      path: "/why-gsap",
      name: "why",
      component: () => import("../views/Why.vue"),
    },
    {
      path: "/tween",
      name: "tween",
      component: () => import("../views/Tween.vue"),
    },
    {
      path: "/timeline",
      name: "timeline",
      component: () => import("../views/Timeline.vue"),
    },
    {
      path: "/ease",
      name: "ease",
      component: () => import("../views/Ease.vue"),
    },
    {
      path: "/scroll",
      name: "scroll",
      component: () => import("../views/Scroll.vue"),
    },
    {
      path: "/svg",
      name: "svg",
      component: () => import("../views/SVG.vue"),
    },
    {
      path: "/svg-morph",
      name: "svg-morph",
      component: () => import("../views/Morph.vue"),
    },
    {
      path: "/video",
      name: "video",
      component: () => import("../views/Video.vue"),
    },
  ],
});

export default router;
