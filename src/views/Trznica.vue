<template>
<div class="Tržnica">
    <Navbar></Navbar>
    <br>
    <br>
    <center>
<div class="box">
  
  <img src="https://firebasestorage.googleapis.com/v0/b/parkfinder-60514.appspot.com/o/Tr%C5%BEnicaPage.jpg?alt=media&token=68057530-d368-4036-973b-b2dfda45037a">

</div>
<div class="zaparking">
    <h2>Parking Tržnica</h2>
    <br>
    <h4>Flanatička ul. 18, 52100, Pula</h4>
</div>
<br>

<div class="container">
<br>
<h3><b> Lokacija:</b></h3>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.7703099173814!2d13.84845035148715!3d44.866970581011735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cd32057257c9b%3A0x64d811ad9c49550c!2sParking%20Tr%C5%BEnica!5e0!3m2!1sen!2shr!4v1621127595842!5m2!1sen!2shr" width="auto" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
      <b-col> <p>  09-21</p> </b-col>
      <b-col> <p>  07-19</p> </b-col>
  </b-row>
  <b-row>
      <b-col> <p>Subota: </p> </b-col>
      <b-col> <p>  10-21</p> </b-col>
      <b-col> <p>  09-19</p> </b-col>
  </b-row>
   <b-row>
      <b-col> <p>Nedjelja: </p> </b-col>
      <b-col> <p>  10-20</p> </b-col>
      <b-col> <p>  10-18</p> </b-col>
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
    <p>Zimsko: 7 Kn</p>
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
    name: "Trznica",
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
  width: 80%;
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