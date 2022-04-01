<template>
  <div class="Mapa">
    <Navbar></Navbar>
    <b-card>
      <br />
      <br />
      <br />
      <br />
      <center>
        <h2><b>Informacije o profilu</b></h2>
        <label class="mt-4">E-Mail</label>
        <p class="form-control" id="frm-ctrl">{{ auth.userEmail }}</p>
        <label class="mt-4">Ime i prezime</label>
        <p class="form-control" id="frm-ctrl">{{ auth.userImePrezime }}</p>
        <label class="mt-4">Grad</label>
        <p class="form-control" id="frm-ctrl">{{ auth.userGrad }}</p>
        <label class="mt-4">Datum registracije</label>
        <p class="form-control" id="frm-ctrl">{{ auth.userDatumRegistracije }}</p>

        <br />
        <b-button class="btn" type="button" variant="danger" @click="mojerezervacije">Moje Rezervacije</b-button>        
        <br>   
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
<style>
.user-role {
  color: black;
}
div.card {
  background-color: transparent;
  color: black;
  border-radius: 10px;
  max-width: 1000%;
  height: 700px;
}

#frm-ctrl{
    max-width: 400px;
    border: 2px solid black;
}

</style>