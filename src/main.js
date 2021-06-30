import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { firebase } from "@/firebase";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import * as VueGoogleMaps from "vue2-google-maps";
import VueGeolocation from "vue-browser-geolocation";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
export const changeRoute = new Vue();
Vue.use(router);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBYqD66rArcPkXO1Cw4_tQmuvJDpUMrQ0s",
    libraries: "places",
  },
});
Vue.use(VueGeolocation);

firebase.auth().onAuthStateChanged(function() {
  new Vue({
    router,
    render: (h) => h(App),
    components: { App },
  }).$mount("#app");
});