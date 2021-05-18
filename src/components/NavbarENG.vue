<template>
<div>
    <b-navbar toggleable="lg" type="dark" class="stil" fixed="top">
    <img src=@/assets/P.png id="navbarP">
    <b-navbar-brand href="/">Park Finder</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    
    <b-collapse id="nav-collapse" is-nav>
     
   
      <b-navbar-nav>
        <b-nav-item href="/karta">Maps</b-nav-item>
        <b-nav-item-dropdown text="Parking List">
          <b-dropdown-item href="/rojc">Rojc</b-dropdown-item>
          <b-dropdown-item href="/karolina">Karolina</b-dropdown-item>
          <b-dropdown-item href="/trznica">Marketplace</b-dropdown-item>
          <b-dropdown-item href="/dobriceva">Dobricheva St.</b-dropdown-item>
          <b-dropdown-item href="/bolnica">Hospital</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="/kalkulator">Calculator</b-nav-item>
        <b-nav-item href="/rezervacija_parkinga">Parking Reservation</b-nav-item>
      </b-navbar-nav>
      <!-- Desna strana navbara -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="Item-1" href="/obavijesti" img>News</b-nav-item>
        <b-nav-item-dropdown class="jezik" text="Language" right>
          <b-dropdown-item href="/">CRO</b-dropdown-item>
          <b-dropdown-item href="/homeeng">ENG</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item class="Item-2" href="#" @click="logout()">Log Out</b-nav-item>

      </b-navbar-nav>
     
    </b-collapse>
   
  </b-navbar>
</div>
</template>

<script>
import {firebase} from '@/firebase';
export default {
  name: "NavbarENG",
  methods: {
    logout() {
      firebase.auth().signOut().then(()=>{
        this.$router.push({name: "Sign_in"});
      })
    },
  },  
};

</script>

<style scoped>

#navbarP{
  height: 50px;
  padding-right:20px
}



.stil{
  background-color:#044ca4 !important;
  width: 100%;
  height: 7%;
  border-bottom: 1px solid black;
}

hr {
  clear: both;
  display: block;
  width: 100%;               
  background-color: white;
  height: 1px;
}
.Item-1 {
  padding-right:0 ;
  
  
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

</style>
