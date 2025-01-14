import { createRouter, createWebHistory } from "vue-router/auto";
import Home from "@/pages/Home/Home.vue";
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";
import Favorites from "@/pages/Favorites.vue";
import Profile from "@/pages/Profile.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/favorites", component: Favorites },
  { path: "/profile", component: Profile },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
