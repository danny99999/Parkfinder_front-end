<template>
<div class="Dobriceva">
    <Navbar></Navbar>
    <br>
    <br>
    <center>
<div class="box">
  
  <img src="https://firebasestorage.googleapis.com/v0/b/parkfinder-60514.appspot.com/o/DobricevaPage.jpg?alt=media&token=06d0bedb-12ef-4a03-9089-3ff07f0d2dde">

</div>
<div class="zaparking">
    <h2>Parking Dobrićeva ulica</h2>
    <br>
    <h4>Dobricheva ul., 52100, Pula</h4>
</div>
<br>

<div class="container">
<br>
<h3><b> Lokacija: <hr></b></h3>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11310.461756142655!2d13.842427289288793!3d44.87012306557292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cd2dffc67f92f%3A0x4973a4018e8c831!2sParking%20Dobricheva%20ulica!5e0!3m2!1sen!2shr!4v1621126650712!5m2!1sen!2shr" width="auto" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
      <b-col> <p>  09-20</p> </b-col>
      <b-col> <p>  11-21</p> </b-col>
  </b-row>
  <b-row>
      <b-col> <p>Subota: </p> </b-col>
      <b-col> <p>  08-20</p> </b-col>
      <b-col> <p>  08-22</p> </b-col>
  </b-row>
   <b-row>
      <b-col> <p>Nedjelja: </p> </b-col>
      <b-col> <p>  10-20</p> </b-col>
      <b-col> <p>  09-21</p> </b-col>
  </b-row>
  <br>
    <b-row>
    <h4><b>Cijena (po satu): </b></h4>
  </b-row>
   <hr>
  <b-row>
    <p>Ljetno: 9 Kn</p>
  </b-row>
    <b-row>
    <p>Zimsko: 7 Kn</p>
  </b-row>
  <br>
   <b-row>
    <h4><b>Ukupno mjesta: </b></h4>
   </b-row>
   <hr>
   <b-row>
    <p>Ukupno: 25</p>
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
    name: "Dobriceva",
    components: {
        Navbar,
        Footer
    },
};
</script>
<style>
.proba {
    color: black;
    font-weight: bold;
}

.box{
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}
.box img{
  width: 100%;
}

.bottom,
.right{
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
  width: 100%;
  padding-top: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
} 
</style>