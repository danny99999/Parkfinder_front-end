<template>
<div class="Stoja">
    <Navbar></Navbar>
    <br>
    <br>
    <center>
<div class="box">
  
  <img src="https://www.beachrex.com/img/beaches/hr-100-k-istra/hr-100-k-istra-sp1.jpg">
</div>
<div class="zaparking">
    <h2>Parking Verudela </h2>
    <br>
    <h4>Verudela 22, 52100, Pula</h4>
</div>
<br>

<div class="container">
<br>
<h3><b> Lokacija:</b></h3>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.175940522868!2d13.828544634887695!3d44.8383502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cd364ca462d49%3A0xa22b96820208f852!2sFree%20Parking!5e0!3m2!1shr!2shr!4v1646939562065!5m2!1shr!2shr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
      <b-col> <p>  08-22</p> </b-col>
      <b-col> <p>  12-19</p> </b-col>
  </b-row>
  <b-row>
      <b-col> <p>Subota: </p> </b-col>
      <b-col> <p>  10-23</p> </b-col>
      <b-col> <p>  12-19</p> </b-col>
  </b-row>
   <b-row>
      <b-col> <p>Nedjelja: </p> </b-col>
      <b-col> <p>  11-23</p> </b-col>
      <b-col> <p>  12-18</p> </b-col>
  </b-row>
  <br>
    <b-row>
    <h4><b>Cijena (po satu): </b></h4>
  </b-row>
   <hr>
  <b-row>
    <p>Ljetno: 15 Kn</p>
  </b-row>
    <b-row>
    <p>Zimsko: 5 Kn</p>
  </b-row>
  <br>
   <b-row>
    <h4><b>Ukupno mjesta: </b></h4>
   </b-row>
   <hr>
   <b-row>
    <p>Ukupno: 70</p>
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
    name: "Riva",
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