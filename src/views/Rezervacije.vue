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
  name: "Rezervacije",
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

#kartica {
  margin:auto;
  width:100%;
}

.mb-2, .my-2 {
  margin-bottom: 2.5rem !important;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 1rem !important;
}

.mb-2 {
  overflow: hidden;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: #044ca4 !important;
  color: white;
  -webkit-text-stroke-width: 0.15px;
  -webkit-text-stroke-color: #000;
}

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