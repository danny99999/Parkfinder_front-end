<template>
  <div class="nav1">
    <Navbar></Navbar>
    <br />
    <br />
    <br />
    <b-container class="bv-example-row" fluid="md">
      <b-col>
        <Kartica
          v-for="Kartica in kartice"
          :key="Kartica.id"
          :info="Kartica"
        ></Kartica>
      </b-col>
    </b-container>
    <Footer></Footer>
  </div>
</template>

<script>

/*kartice = [
  {
    url:
      "https://firebasestorage.googleapis.com/v0/b/parkfinder-60514.appspot.com/o/rojc.jpg?alt=media&token=0b5a4b6a-efae-40ae-a115-a83a676f8aef",
    naslov: "Parking Rojc",
    router: "/rojc",
  },
  {
    url:
      "https://firebasestorage.googleapis.com/v0/b/parkfinder-60514.appspot.com/o/karolina.jpg?alt=media&token=64aad6ca-9164-4de5-9d9f-aaee9b813819",
    naslov: "Parking Karolina",
    router: "/karolina",
  },
  {
    url:
      "https://firebasestorage.googleapis.com/v0/b/parkfinder-60514.appspot.com/o/Trznica.jpg?alt=media&token=8053a940-6b62-4a0c-954e-3202457a7aae",
    naslov: "Parking Tržnica",
    router: "/trznica",
  },
  {
    url:
      "https://firebasestorage.googleapis.com/v0/b/parkfinder-60514.appspot.com/o/dobriceva.png?alt=media&token=a22933a3-fe0e-4738-9b12-26ab58e57faa",
    naslov: "Parking Dobrićeva ul.",
    router: "/dobriceva",
  },
  {
    url:
      "https://firebasestorage.googleapis.com/v0/b/parkfinder-60514.appspot.com/o/bolnica.jpg?alt=media&token=bbfa7685-8384-4f38-882f-4ac718c02987",
    naslov: "Parking Bolnica",
    router: "/bolnica",
  },
];*/

import Kartica from "@/components/Kartica.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import store from "@/store";
import {test} from "@/services";
import _ from 'lodash';
import {kartice} from "@/services";

console.log("Testiranje importa", test)

export default {
  name: "Home",
  components: {
    Kartica,
    Navbar,
    Footer
  },
  data() {
    return {
      store,
      kartice: [],
    };
  },
  watch: {
  "store.searchTerm": _.debounce(function(val){
      this.fetchKartice(val)
  }, 500)

  },
  mounted() {
    this.fetchKartice()
  },
  methods: {  
    async fetchKartice(term) {
    term = term || store.searchTerm
  
    this.kartice = await kartice.getAll(term)
  }, 
}
};
</script>

<style>
.nav1 {
  max-width: 100%;
}
</style>