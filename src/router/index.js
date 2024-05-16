import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home/HomeView.vue";
import ChatbotView from "../views/ChatbotView.vue";
import KonsultasiView from "../views/LandingPages/Konsultasi/KonsultasiView.vue";
import LoginView from "../views/LandingPages/SignIn/LoginView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "presentation",
      component: HomeView,
    },
    {
      path: "/aida",
      name: "aida",
      component: ChatbotView,
    },
    {
      path: "/konsultasi",
      name: "about",
      component: KonsultasiView,
    },
    {
      path: "/login",
      name: "signin-basic",
      component: LoginView,
    },
  ],
});

export default router;
