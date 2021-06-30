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
        <h2>Parking Karolina zatvoren.</h2>
        <br>
        <h4>16.06.2021.</h4>
        <h4>Parking Karolina se zatvara radi najavljenoga nevremena.</h4>
    </div>
    <br>
    <div class="zaparking">
        <h2>Ljetne cijene</h2>
        <br>
        <h4>01.06.2021.</h4>
        <h4>Od 01.06. do 01.09. vrijede cijene za ljetno radno vrijeme parkinga.</h4>
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
