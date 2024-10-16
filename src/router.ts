import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/home-page.vue";
import AboutUs from "./pages/about-us-page.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomePage },
    { path: "/about", component: AboutUs },
  ],
  linkActiveClass: "active",
});

export default router;