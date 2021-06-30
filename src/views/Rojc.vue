<template>
<div class="Rojc">
    <Navbar></Navbar>
    <br>
    <br>
    <center>
<div class="box">
  
  <img src="https://firebasestorage.googleapis.com/v0/b/parkfinder-60514.appspot.com/o/RojcPage.jpg?alt=media&token=81745746-54a4-454b-8f14-c0c616615b9d">

</div>
<div class="zaparking">
    <h2>Parking Rojc</h2>
    <br>
    <h4>Ul. Silvija Strahimira Kranjčevića 4, 52100, Pula </h4>
</div>
<br>

<div class="container">
<br>
<h3><b> Lokacija:</b></h3>
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11311.967852727505!2d13.8441199!3d44.8624584!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2cd5bd0b9be66d58!2sKarlo%20Rojc%20South%20Parking!5e0!3m2!1sen!2shr!4v1621085124714!5m2!1sen!2shr" width="auto" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
<br>
<br>
<b-container class="bv-example-row">
  <b-row>
    <h4><b>Radno Vrijeme: </b></h4>
  </b-row>
   <hr>
   <b-row>
      <b-col> <p><b>Dan: </b></p></b-col>
      <b-col> <p><b>Ljetno: </b></p></b-col>
      <b-col> <p><b>Zimsko: </b></p></b-col>
  </b-row>
     <b-row>
      <b-col> <p>Pon-Pet: </p> </b-col>
      <b-col> <p>  08-21</p> </b-col>
      <b-col> <p>  12-20</p> </b-col>
  </b-row>
  <b-row>
      <b-col> <p>Subota: </p> </b-col>
      <b-col> <p>  10-21</p> </b-col>
      <b-col> <p>  12-19</p> </b-col>
  </b-row>
   <b-row>
      <b-col> <p>Nedjelja: </p> </b-col>
      <b-col> <p>  11-21</p> </b-col>
      <b-col> <p>  11-19</p> </b-col>
  </b-row>
  <br>
    <b-row>
    <h4><b>Cijena (po satu): </b></h4>
  </b-row>
   <hr>
  <b-row>
    <p>Ljetno: 8 Kn</p>
  </b-row>
    <b-row>
    <p>Zimsko: 6 Kn</p>
  </b-row>
  <br>
   <b-row>
    <h4><b>Ukupno mjesta: </b></h4>
   </b-row>
   <hr>
   <b-row>
    <p>Ukupno: 30</p>
  </b-row>
     <b-row>
    <p>Invalidskih: 5</p>
  </b-row>
  <br>
</b-container>

</div>
    </center>
    <Footer></Footer>
</div>  
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: "Rojc",
    components: {
        Navbar,
        Footer,
    },
};
</script>
<style>

.proba {
    color: black;
    font-weight: bold;
}

.box{
  width: 80%;
  position: relative;
  overflow: hidden;
}
.box img{
  width: 80%;
  border-radius: none;
}

.bottom.right{
  margin:1em;
  position:absolute;
}
.bottom{
  bottom: 0px;
}
.right{
  top: 50%;
  left: 0px;
  right: 0px;
  bottom: 0px;
  color: white;
  font-weight: bold;
  font-size: 50px;
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