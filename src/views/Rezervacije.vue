<template>
    <div class="obavijesti">
     <Navbar></Navbar> 
      <br>
      <br>
      <br>
    <center>
    <br>
    <h2><b>Vaše rezervacije</b></h2>
    <br>
    <div>
        <Rezervacija
          v-for="Rezervacija in rezervacije"
          :key="Rezervacija.id"
          :info="Rezervacija"
        ></Rezervacija>
    </div>
    </center>
    <Footer></Footer>
    </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import store from "@/store";
import Rezervacija from "@/components/Rezervacija.vue";
import { Rezervacije } from '@/services';

export default {
    name: "Obavijesti",
    components: {
        Navbar,
        Footer,
        Rezervacija,
    },
    data() {
        return {
            store,
            rezervacije: [],
        }
    },

    mounted() {
    this.fetchRezervacije()
  },
  methods: {  
    async fetchRezervacije() {
        this.rezervacije = await Rezervacije.getRezervacije()
  }, 
}
};
</script>

<style scoped>

.zaparking {
  background-color:#044ca4 !important;
  position: relative;
  overflow: hidden;
  border: 1px solid black;
  color: white;
  width: 80%;
  padding-top: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
}

.underscore {
  text-decoration: underline;
  text-decoration-color: white;
}
</style>