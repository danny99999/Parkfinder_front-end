<template>
    <div class="obavijesti">
     <Navbar></Navbar> 
      <br>
      <br>
      <br>
    <center>
    <b-card tag="article" style="max-width: 40rem" class="mb-2">
    <br>
    <h2><b>Obavijesti</b></h2>
    <br>
    <div class="mb-2_kartice">
        <h2>Zimske cijene</h2>
        <br>
        <h4>21.12.2021.</h4>
        <h4>Od 21.12.2021. do 31.05.2022. vrijede cijene za zimsko radno vrijeme parkinga.</h4>
    </div>
    <br>
    <div class="mb-2_kartice">
        <h2>Parking Riva zatvoren.</h2>
        <br>
        <h4>09.01.2022.</h4>
        <h4>Parking Riva zatvoren radi poplave.</h4>
    </div>
    <br>
    <div class="mb-2_kartice">
        <h2>Novi parking</h2>
        <br>
        <h4>18.02.2022</h4>
        <h4>Uskoro se otvara novi parking u gradu, lokacija i cijene također uskoro.</h4>
    </div>
    </b-card>
    </center>
    <br>
    <br>
    
    <Footer></Footer>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: "Obavijesti",
    components: {
        Navbar,
        Footer
    },
}
</script>

<style lang="scss">

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

.mb-2_kartice {
  overflow: hidden;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: #dc3545;
  color: black;
  -webkit-text-stroke-width: 0.15px;
  -webkit-text-stroke-color: #000;
  margin-bottom: 3rem !important;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  margin-top: 1.5rem !important;
  padding: 2.5%;
}

.zaparking{
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
</style>
