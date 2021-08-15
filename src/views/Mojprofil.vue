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
        <p class="form-control" id="frm-ctrl">{{ Korisnik.username }}</p>
        <label class="mt-4">Ime</label>
        <p class="form-control" id="frm-ctrl">{{ Korisnik.ime }}</p>
        <label class="mt-4">Prezime</label>
        <p class="form-control" id="frm-ctrl">{{ Korisnik.prezime }}</p>
        <label class="mt-4">Datum registracije</label>
        <p class="form-control" id="frm-ctrl">{{ Korisnik.datum_registracije }}</p>

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
import { db } from "@/firebase";
import store from "@/store";

export default {
  name: "Moj_profil",
  data() {
    return {
      Korisnik: {},
      username: null,
      email: null,
      password: null,
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
      db.collection("korisnici")
        .doc(store.currentUser)
        .get()
        .then((doc) => {
          if (doc.exists) {
            // console.log("Document data:", doc.data());
            this.Korisnik = {};
            this.Korisnik = doc.data();
            //console.log(this.Korisnik.username);
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        });
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