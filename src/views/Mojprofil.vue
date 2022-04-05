<template>
  <div id="kartica">
    <Navbar></Navbar>
    <b-card>
      <br />
      <br />
      <br />
      <br />
      <center>
        <b-card tag="article" style="max-width: 30rem" class="mb-2">
        <b-card-title><h2><b>Informacije o profilu</b></h2></b-card-title>

        <label class="mt-4">E-Mail</label>
        <p class="form-control" id="frm-ctrl">{{ auth.userEmail }}</p>
        <label class="mt-4">Ime i prezime</label>
        <p class="form-control" id="frm-ctrl">{{ auth.userImePrezime }}</p>
        <label class="mt-4">Grad</label>
        <p class="form-control" id="frm-ctrl">{{ auth.userGrad }}</p>
        <label class="mt-4">Datum registracije</label>
        <p class="form-control" id="frm-ctrl">{{ auth.userDatumRegistracije }}</p>
        <br>
        <b-button class="btn" type="button" variant="danger" @click="mojerezervacije">Moje Rezervacije</b-button>        
        <br>
        </b-card>
      </center>
    </b-card>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { Auth } from "@/services";

export default {
  name: "Moj_profil",
  data() {
    return {
      auth: Auth.state,
    };
  },
  components: {
    Navbar,
    Footer,
  },

  mounted() {
    this.getPodaci();
  },

  methods: {
    getPodaci() {
    },
    mojerezervacije() {
      console.log("Odabrali smo moje rezervacije u moj profil");
      this.$router.push({name: "Rezervacije"});
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

</style>