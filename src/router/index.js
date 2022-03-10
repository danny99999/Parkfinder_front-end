import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Rojc from "@/views/Rojc.vue";
import Karolina from "@/views/Karolina.vue";
import Trznica from "@/views/Trznica.vue";
import Dobriceva from "@/views/Dobriceva.vue";
import Bolnica from "@/views/Bolnica.vue";
import Karta from "@/views/Karta.vue";
import Kalkulator from "@/views/Kalkulator.vue";
import Obavijesti from "@/views/Obavijesti.vue";
import Sign_up from "@/views/Sign_up.vue";
import Sign_in from "@/views/Sign_in.vue";
import Moj_Profil from "@/views/Mojprofil.vue";
import Rezervacija_parkinga from "@/views/Rezervacija_parkinga.vue";
import Podaci_vozila from "@/views/Podaci_vozila.vue";
import Podaci_rezervacije from "@/views/Podaci_rezervacije.vue";
import Rezervacije from "@/views/Rezervacije.vue";
import Riva from "@/views/Riva.vue";
import Verudela from "@/views/Verudela.vue";
import Autobusna from "@/views/Autobusna.vue";
import { firebase } from "@/firebase";
Vue.use(VueRouter);


const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },

  {
    path: "/rojc",
    name: "Rojc",
    component: Rojc,
    meta: { requiresAuth: true },
  },
  {
    path: "/karolina",
    name: "Karolina",
    component: Karolina,
    meta: { requiresAuth: true },
  },
  {
    path: "/trznica",
    name: "Trznica",
    component: Trznica,
    meta: { requiresAuth: true },
  },
  {
    path: "/dobriceva",
    name: "Dobriceva",
    component: Dobriceva,
    meta: { requiresAuth: true },
  },
  {
    path: "/bolnica",
    name: "Bolnica",
    component: Bolnica,
    meta: { requiresAuth: true },
  },
  {
    path: "/karta",
    name: "Karta",
    component: Karta,
    meta: { requiresAuth: true },
  },
  {
    path: "/kalkulator",
    name: "Kalkulator",
    component: Kalkulator,
    meta: { requiresAuth: true },
  },
  {
    path: "/obavijesti",
    name: "Obavijesti",
    component: Obavijesti,
    meta: { requiresAuth: true },
  },
  {
    path: "/Rezervacija_parkinga",
    name: "Rezervacija_parkinga",
    component: Rezervacija_parkinga,
    meta: { requiresAuth: true },
  },
  {
    path: "/Podaci_vozila",
    name: "Podaci_vozila",
    component: Podaci_vozila,
    meta: { requiresAuth: true },
  },
  {
    path: "/Podaci_rezervacije",
    name: "Podaci_rezervacije",
    component: Podaci_rezervacije,
    meta: { requiresAuth: true },
  },
  {
    path: "/sign_up",
    name: "Sign_up",
    component: Sign_up,
    meta: { logged: true },
  },
  {
    path: "/",
    name: "Sign_in",
    component: Sign_in,
    meta: { logged: true },
  },
  {
    path: "/moj_profil",
    name: "Moj_profil",
    component: Moj_Profil,
    meta: { requiresAuth: true },
  },
  {
    path: "/rezervacije",
    name: "Rezervacije",
    component: Rezervacije,
  },
  {
    path: "/riva",
    name: "Riva",
    component: Riva,
  },
  {
    path: "/verudela",
    name: "Verudela",
    component: Verudela,
  },
  {
    path: "/autobusna",
    name: "Autobusna",
    component: Autobusna,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const logged = to.matched.some((record) => record.meta.logged);
  const currentUser = firebase.auth().currentUser;

  if (requiresAuth && !currentUser) {
    next("/");
  } else if (requiresAuth && currentUser) {
    next();
  }

  if (logged && currentUser) {
    next("home");
  } else {
    next();
  }
});
export default router;