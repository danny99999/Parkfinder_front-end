<template>
<div class="Rezervacija_parkinga">
    <Navbar></Navbar>
    <br>
    <br>
    <br>
    <br>
    <h2><b>Upišite svoje osobne podatke</b></h2>
<div class="form-group6">
    <br>
    <label class="Ime">Ime</label>
                <input 
                    v-model="podaci.Ime"
                    class="form-control" 
                    placeholder="Ime">
           <br>
           <br>
                <label class= "prezime">Prezime</label>
                <input
                    v-model="podaci.Prezime"
                    class="form-control" 
                    placeholder="Prezime" >
            <br>
           <br>
                <label class= "br">Broj mobitela</label>
                <input
                    v-model="podaci.Phonenumber"
                    class="form-control" 
                    placeholder="Br. telefona" >
            <br>
            <b-button class="btnn" type="button" variant="danger" @click="saljipodatke">Dalje</b-button>        
            <br/>    
            <br/>
</div>      
    <Footer></Footer>

</div>   
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';


export default {
    name: "Rezervacija_parkinga",
    components: {
        Navbar,
        Footer
    },
      data() {
        return {
        podaci: {
            Ime:'',
            Prezime:'',
            Phonenumber: '',
        }
        }
        },
     methods: {
        saljipodatke() {
            if (this.Ime === '' || this.Ime === null || this.Ime.value === 0){
                alert("Unesite Vaše ime!");
            }

            else if (this.Prezime === '' || this.Prezime === null || this.Prezime.value === 0){
                alert("Unesite Vaše prezime!");
            }

            else if (this.Phonenumber === '' || this.Phonenumber === null || this.Phonenumber.value === 0){
                alert("Unesite Vaš broj telefona!");
            }
            else {
                this.$router.push({name: "Podaci_vozila"});
                }

            },
},

 mounted () {
    this.podaci= []
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
    this.podaci= data2

  })
}
};
 
</script>

<style scoped>
.Rezervacija_parkinga {
    background-color: transparent;
    color: black;
}

.form-group6{
    padding-left: 20%;
    padding-right: 20%;
}

.btnn{
    width: 100px;
}

.form-control{
    border: 2px solid black !important;
}

</style>