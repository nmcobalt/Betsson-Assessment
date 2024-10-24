import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/home-page.vue";
import AboutUs from "./pages/about-us-page.vue";
import Assessment from "./pages/assessment-page.vue";
//import { routes } from "vue-router/auto-routes";

export const routesList = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: HomePage, name: "home" },
  { path: "/about/:id?", component: AboutUs, name: "about" },
  { path: "/assessment", component: Assessment, name: "assessment" },
];

const router = createRouter({
  history: createWebHistory(),
  routes: [...routesList],
  linkActiveClass: "active",
});

export default router;
