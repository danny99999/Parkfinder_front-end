<template>
    <div class="obavijesti">
     <Navbar></Navbar> 
      <br>
      <br>
      <br>
    <center>
    <br>
    <h2><b>Rezervacije</b></h2>
 
    <div class="zaparking">
        <b-card>
            <h2>Osobni podaci</h2>
           <p>{{kartice2}}</p>
           
            </b-card>
       
        
    </div>
    </center>
   
    
    <Footer></Footer>
    </div>
</template>

<script>
let kartice2= [];
kartice2= [
    {
        Ime: null,
        Prezime: null,
        Phonenumber: null
    },
  
]

import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import store from "@/store";

export default {
    name: "Obavijesti",
    components: {
        Navbar,
        Footer,
    },
    data() {
        return {
            store,
            kartice2
        
        }
    },


mounted() {

this.kartice2= []
  fetch("http://localhost:3200/osobni_podaci_memory")
  .then(r=> {
    return r.json()
  })
  .then(data => {
    console.log("Podaci s backenda", data)

   let data2= data.map(element=> {
      return {
        Ime: element.ime_korisnika,
        Prezime: element.prezime_korisnika,
        Phonenumber: element.br_telefona
      }
    })
    this.kartice2= data2

  })
}
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