<template>
    <div class="obavijesti">
     <Navbar></Navbar> 
      <br>
      <br>
      <br>
    <center>
    <br>
    <h2><b>Rezervacije</b></h2>
    <br>
    <h2>User podaci valjda...</h2>
    <br>
    <div class="zaparking">
        <h2>Rezervacija 1</h2>
        <br>
        <h4>16.06.2021.</h4>
        <h4>Parking Karolina</h4>
        <h4>4 sata</h4>
        <h4>40 Kn</h4>
    </div>
    <br>
    <div class="zaparking">
        <h2>Rezervacija 2</h2>
        <br>
        <h4>01.06.2021.</h4>
        <h4>Parking Rojc</h4>
        <h4>3 sata</h4>
        <h4>30 Kn</h4>
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