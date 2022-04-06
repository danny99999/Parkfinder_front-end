<template>
  <div id="kartica">
    <center>
      <b-card tag="article" style="max-width: 30rem" class="mb-2">
        <b-card-title>Rezervacija {{index+1}}</b-card-title>
        <p>Ime: <b><br> {{info.ime}} </b></p>
        <p>Prezime: <b><br> {{info.prezime}}</b></p>
        <p>Broj telefona: <b><br> {{info.broj_telefona}}</b></p>
        <p>Marka i model vozila: <b><br> {{info.markaimodel}}</b></p>
        <p>Boja vozila: <b><br> {{info.bojavozila}}</b></p>
        <p>Registracija: <b><br> {{info.registracija}}</b></p>
        <p>Izabrani datum: <b><br> {{info.izabrani_datum}}</b></p>
        <p>Vrijeme_parkiranja: <b><br> {{info.vrijeme_parkiranja}}</b></p>
        <p>Izabrani parking: <b><br> {{info.koji_parking}}</b></p>
        <p>Datum slanja upita: <b><br> {{info.upit_poslan}}</b></p>
        <hr class="new1">
        <p>
          Vaša E-mail adresa: <br />
          <u class="underscore">{{ auth.userEmail }}</u>
        </p>
      </b-card>
    </center>
  </div>
</template>
<script>
import { Auth, Rezervacije } from "@/services";

export default {
  props: ["info","index"],
  name: "Rezervacija",
  data() {
    return {
      auth: Auth.state,
      rezervacije: Rezervacije.state,
    };
  },
};
</script>

<style>
#kartica {
  margin: auto;
  width: 100%;
}

hr.new1 {
  border: 0.5px solid black;
}

.mb-2,
.my-2 {
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
  background-color: #044ca4;
  color: white;
  -webkit-text-stroke-width: 0.15px;
  -webkit-text-stroke-color: #000;
}
</style>