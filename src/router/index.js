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
import Rezervacije from "@/views/Rezervacije.vue";
import Riva from "@/views/Riva.vue";
import Verudela from "@/views/Verudela.vue";
import Autobusna from "@/views/Autobusna.vue";
import { Auth } from "@/services";
Vue.use(VueRouter);


const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },

  {
    path: "/rojc",
    name: "Rojc",
    component: Rojc,
  },
  {
    path: "/karolina",
    name: "Karolina",
    component: Karolina,
  },
  {
    path: "/trznica",
    name: "Trznica",
    component: Trznica,
  },
  {
    path: "/dobriceva",
    name: "Dobriceva",
    component: Dobriceva,
  },
  {
    path: "/bolnica",
    name: "Bolnica",
    component: Bolnica,
  },
  {
    path: "/karta",
    name: "Karta",
    component: Karta,
  },
  {
    path: "/kalkulator",
    name: "Kalkulator",
    component: Kalkulator,
  },
  {
    path: "/obavijesti",
    name: "Obavijesti",
    component: Obavijesti,
  },
  {
    path: "/Rezervacija_parkinga",
    name: "Rezervacija_parkinga",
    component: Rezervacija_parkinga,
  },
  {
    path: "/sign_up",
    name: "Sign_up",
    component: Sign_up,
  },
  {
    path: "/",
    name: "Sign_in",
    component: Sign_in,
  },
  {
    path: "/moj_profil",
    name: "Moj_profil",
    component: Moj_Profil,
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
  const javneStranice = ["/", "/sign_up"]
  const loginPotreban = !javneStranice.includes(to.path);
  const user = Auth.getUser();

  if (loginPotreban  && !user){
    next("/");
    return;
  }
  next();
});


export default router;