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
import Rezervacija_parkinga from "@/views/Rezervacija_parkinga.vue";
import Podaci_vozila from "@/views/Podaci_vozila.vue";
import Podaci_rezervacije from "@/views/Podaci_rezervacije.vue";
import Homeeng from "@/views/Homeeng.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },

  {
    path: "/rojc",
    name: "Rojc",
    component: Rojc
  },
  {
    path: "/karolina",
    name: "Karolina",
    component: Karolina
  }, 
  {
    path: "/trznica",
    name: "Trznica",
    component: Trznica
  },
  {
    path: "/dobriceva",
    name: "Dobriceva",
    component: Dobriceva
  },  
  {
    path: "/bolnica",
    name: "Bolnica",
    component: Bolnica
  },  
  {
    path: "/karta",
    name: "Karta",
    component: Karta
  },  
  {
    path: "/kalkulator",
    name: "Kalkulator",
    component: Kalkulator
  },  
  {
    path: "/obavijesti",
    name: "Obavijesti",
    component: Obavijesti
  },  
  {
    path: "/sign_up",
    name: "Sign_up",
    component: Sign_up
  },
{
  path: "/sign_in",
  name: "Sign_in",
  component: Sign_in
},
{
  path: "/rezervacija_parkinga",
  name: "Rezervacija_parkinga",
  component: Rezervacija_parkinga
},
{
  path: "/podaci_vozila",
  name: "Podaci_vozila",
  component: Podaci_vozila
},
{
  path: "/podaci_rezervacije",
  name: "Podaci_rezervacije",
  component: Podaci_rezervacije
},
{
  path: "/homeeng",
  name: "Homeeng",
  component: Homeeng
},
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
