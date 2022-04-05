<template>
<div>
    <b-navbar toggleable="lg" type="dark" class="stil" fixed="top">
    <img src=@/assets/P.png id="navbarP">
    <b-navbar-brand href="/home">Park Finder</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    
    <b-collapse id="nav-collapse" is-nav>
     
   
      <b-navbar-nav>
        <b-nav-item href="/karta">Karta</b-nav-item>
        <b-nav-item-dropdown text="Lista Parkinga">
          <b-dropdown-item href="/rojc">Rojc</b-dropdown-item>
          <b-dropdown-item href="/karolina">Karolina</b-dropdown-item>
          <b-dropdown-item href="/trznica">Tržnica</b-dropdown-item>
          <b-dropdown-item href="/dobriceva">Dobrićeva</b-dropdown-item>
          <b-dropdown-item href="/bolnica">Bolnica</b-dropdown-item>
          <b-dropdown-item href="/riva">Riva</b-dropdown-item>
          <b-dropdown-item href="/verudela">Verudela</b-dropdown-item>
          <b-dropdown-item href="/autobusna">A.Kolodvor</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="/kalkulator">Kalkulator</b-nav-item>
        <b-nav-item href="/Rezervacija_parkinga">Rezervacija Parkinga</b-nav-item>
      </b-navbar-nav> 

       

      
      <!-- Desna strana navbara -->
      <b-navbar-nav class="ml-auto" id="profil">
        <b-form-input v-model="store.searchTerm" pattern="[A-Ža-ž]" class="mr-sm-2" type="search" placeholder="Pretraži parking..."></b-form-input>
        <b-nav-item class="Item-1" href="/obavijesti">Obavijesti</b-nav-item>
        <b-nav-item-dropdown text="Profil" id="profil1">
          <b-dropdown-item href="/Moj_Profil">Moj Profil</b-dropdown-item>
          <b-dropdown-item href="#" @click="logout()">Odjava</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-navbar-nav>
     <b-navbar-nav>
        <b><digital-clock :blink="true" class="sat"/></b>
      </b-navbar-nav>
      <br>
    </b-collapse>
   
  </b-navbar>
</div>
</template>

<script>
import { Auth} from '@/services';
import DigitalClock from "vue-digital-clock";
import store from "@/store"

export default {
  name: "Navbar",
  components: {
    DigitalClock,
  },
  data() {
    return {
       store
    };
  },
  methods: {
    logout() {
      Auth.logout();
      this.$router.go();
    },
  },  
};

</script>
<style scoped>

#navbarP{
  height: 50px;
  padding-right:20px
}

.sat{
  color: white;
  margin: auto;
  width: 50%;
  border: 2px solid white;
  padding: 10px;
}

.stil{
  background-color:#044ca4 !important;
  width: 100%;
  height: 8%;

}

hr {
  clear: both;
  display: block;
  width: 100%;               
  background-color: white;
  height: 1px;
}
.Item-1 {
  padding-left:5% ;
  
  
}
.Item-2 {
  padding-right:0 ;
  
}
.ml-auto {
  padding-right: 5%;
}

#nav-collapse {

  background-color: #044ca4;
}

#profil1{
  padding-left: 5%;
}

.btn-outline-success{
  border-color: white;
  color: white;
}

.btn-outline-success:hover {
  background-color: white;
  color: black;
}

</style>
