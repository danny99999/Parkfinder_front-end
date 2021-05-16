<template>
<div class="Bolnica">
    <Navbar></Navbar>
    <br>
    <br>
    <center>
<div class="box">
  
  <img src="../assets/Bolnica.jpg">

</div>
<div class="zaparking">
    <h2>Parking Bolnica</h2>
    <br>
    <h4>Santoriova ul. 26, 52100, Pula</h4>
</div>
<br>

<div class="container">
<br>
<h3><b> Lokacija: <hr></b></h3>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5655.70255684436!2d13.853008404105408!3d44.86532235184251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x75b69abb0215c851!2sHospital%20Parking!5e0!3m2!1sen!2shr!4v1621128055020!5m2!1sen!2shr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
      <b-col> <p>  08-20</p> </b-col>
      <b-col> <p>  07-19</p> </b-col>
  </b-row>
  <b-row>
      <b-col> <p>Subota: </p> </b-col>
      <b-col> <p>  09-21</p> </b-col>
      <b-col> <p>  10-19</p> </b-col>
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
    <p>Zimsko: 5 Kn</p>
  </b-row>
  <br>
   <b-row>
    <h4><b>Slobodna mjesta: </b></h4>
   </b-row>
   <hr>
   <b-row>
    <p>Ukupno: 100</p>
  </b-row>
     <b-row>
    <p>Slobodno: 67</p>
  </b-row>
     <b-row>
    <p>Invalidskih: 25</p>
  </b-row>
     <b-row>
    <p>Slob. Invalidskih: 17</p>
  </b-row>
  <br>
</b-container>

</div>
    </center>
</div>   
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
    name: "Bolnica",
    components: {
        Navbar
    },
};
</script>
<style>
.Drosina {
    background-color:yellow;
}
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
  width: 80%;
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
  width: 80%;
  padding-top: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
} 
</style>