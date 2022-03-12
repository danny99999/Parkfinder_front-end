<template>
    <div class="obavijesti">
     <Navbar></Navbar> 
      <br>
      <br>
      <br>
    <center>
    <br>
    <h2><b>Obavijesti</b></h2>
    <br>
    <div class="zaparking">
        <h2>Zimske cijene</h2>
        <br>
        <h4>21.12.2021.</h4>
        <h4>Od 21.12.2021. do 31.05.2022. vrijede cijene za zimsko radno vrijeme parkinga.</h4>
    </div>
    <br>
    <div class="zaparking">
        <h2>Parking Riva zatvoren.</h2>
        <br>
        <h4>09.01.2022.</h4>
        <h4>Parking Riva zatvoren radi poplave.</h4>
    </div>
    <br>
    <div class="zaparking">
        <h2>Novi parking</h2>
        <br>
        <h4>18.02.2022</h4>
        <h4>Uskoro se otvara novi parking u gradu, lokacija i cijene također uskoro.</h4>
    </div>
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
.obavijesti
{
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
