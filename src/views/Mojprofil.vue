<template>
  <div class="Mapa">
    <Navbar></Navbar>
    <b-card>
      <br />
      <br />
      <br />
      <br />
      <center>
        <b><h2>Informacije o profilu</h2></b>
        <label class="mt-4">E-Mail</label>
        <p class="form-control" id="frm-ctrl">{{ Korisnik.username }}</p>
        <label class="mt-4">Ime</label>
        <p class="form-control" id="frm-ctrl">{{ Korisnik.ime }}</p>
        <label class="mt-4">Prezime</label>
        <p class="form-control" id="frm-ctrl">{{ Korisnik.prezime }}</p>
        <label class="mt-4">Datum registracije</label>
        <p class="form-control" id="frm-ctrl">{{ Korisnik.datum_registracije }}</p>

        <br />
        <br />
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
  },
};
</script>
<style>
.user-role {
  color: black;
}
div.card {
  background-color: #ffffff;
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