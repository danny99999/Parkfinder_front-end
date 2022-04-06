<template>
  <div class="obavijesti">
    <Navbar></Navbar>
    <br />
    <br />
    <br />
    <center>
      <br />
      <h2><b>Vaše rezervacije</b></h2>
      <br />
      <div>
        <Rezervacija
          v-for="(Rezervacija, index) in rezervacije"
          :key="Rezervacija.id"
          :info="Rezervacija"
          :index="index"
        ></Rezervacija>
      </div>
    </center>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import store from "@/store";
import Rezervacija from "@/components/Rezervacija.vue";
import { Rezervacije, Auth } from "@/services";

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
      auth: Auth.state,
    };
  },

  mounted() {
    this.fetchRezervacije();
  },
  methods: {
    async fetchRezervacije() {
      this.rezervacije = await Rezervacije.getRezervacije(this.auth.userEmail);
    },
  },
};
</script>

<style scoped>
.zaparking {
  background-color: #044ca4 !important;
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