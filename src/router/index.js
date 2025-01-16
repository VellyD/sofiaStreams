import { createRouter, createWebHistory } from "vue-router/auto";
import { useUserStore } from "@/store/userStore";
import Home from "@/pages/Home/Home.vue";
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";
import Favorites from "@/pages/Favorites.vue";
import Profile from "@/pages/Profile.vue";
import NotFoundPage from "@/components/NotFoundPage.vue";

const userValidation = () => {
  const userStore = useUserStore();
  return userStore.isAuthenticated
    ? userStore.isAuthenticated
    : { path: "/login" };
};

const routes = [
  { path: "/", component: Home },
  {
    path: "/login",
    component: Login,
    beforeEnter() {
      const userStore = useUserStore();
      return userStore.isAuthenticated ? { path: "/profile" } : true;
    },
  },
  {
    path: "/register",
    component: Register,
    beforeEnter() {
      const userStore = useUserStore();
      return userStore.isAuthenticated ? { path: "/profile" } : true;
    },
  },
  { path: "/favorites", component: Favorites, beforeEnter: userValidation },
  { path: "/profile", component: Profile, beforeEnter: userValidation },
  { path: "/:pathMatch(.*)*", component: NotFoundPage },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
