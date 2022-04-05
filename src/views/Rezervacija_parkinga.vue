<template>
<div class="Rezervacija_parkinga">
    <Navbar></Navbar>
    <br>
    <br>
    <br>
    <br>
    <center>
    <div id="kartica">
    <b-container class="bv-example-row" fluid="md">
    <b-card tag="article" style="max-width: 40rem" class="mb-2">
    <b-col> 
        <h2><b>Upišite svoje osobne podatke</b></h2>
        <div class="form-group6">
        <form>
        <br>
        <label class="Ime">Ime</label>
                    <input 
                        v-model="Ime"
                        class="form-control" 
                        placeholder="Ime">
            <br>
            <br>
                    <label class= "prezime">Prezime</label>
                    <input
                        v-model="Prezime"
                        class="form-control" 
                        placeholder="Prezime">
            <br>
            <br>
                    <label class= "br">Broj mobitela</label>
                    <input
                        type="number"
                        v-model="Phonenumber"
                        class="form-control" 
                        placeholder="Br. telefona"
                        minlength="8" >
            <br>
            <hr class="new1">
                <h2><b>Upišite podatke svog vozila</b></h2>
            <br> 
                    <label class= "prezime">Marka i model</label>
                    <input 
                        v-model="Marka_i_model"
                        class="form-control" 
                        placeholder="Marka i model" >
            <br>
            <br>
            <label class= "br">Registracija</label>
                <input 
                    v-model="Registracija"
                    class="form-control" 
                    placeholder="Registracija" >
            <br>
            <br>
            <label class= "br">Boja vozila</label>
                <input
                    type="text" 
                    v-model="Bojavozila"
                    class="form-control" 
                    placeholder="Boja">
                    <br>
            <hr class="new1">
            <h2><b>Upišite podatke o rezervaciji parkinga</b></h2>
            <br>
                    <label for="example-datepicker">Odaberite datum</label>
                    <b-form-datepicker v-model="Izabrani_datum" :min="min" :max="max" locale="hr" class="form-kontrola"></b-form-datepicker>
           <br>
           <br>
            
                    <label class= "br">Vrijeme boravka na parkingu</label>    
                    <b-form-select v-model="Provedeno_vrijeme" :options="options" class="form-kontrola">
                        <template #first>
                        <b-form-select-option disabled :value="null">-- Molimo odaberite jednu od opcija --</b-form-select-option>
                        </template>
                    </b-form-select>
           <br>
           <br>
           <br>
                    <label class= "br">Odaberite parking</label>    
                    <b-form-select v-model="Koji_parking" :options="options2" class="form-kontrola">
                        <template #first>
                        <b-form-select-option disabled :value="null">-- Molimo odaberite jednu od opcija --</b-form-select-option>
                        </template>
                    </b-form-select>
            <br>
            <br>
            <br>
                    <b-button class="btn" type="button" variant="danger" @click="saljipodatke">Potvrdi rezervaciju</b-button>      
            <br/>    
            <br/>
        </form>   
    </div>
    </b-col>
    </b-card>
    </b-container>
    </div>
    </center>    
    <Footer></Footer>
</div>   
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { Auth } from '@/services';
import { Rezervacije } from '../services';


export default {
    name: "Rezervacija_parkinga",
    components: {
        Navbar,
        Footer,
    },
      data() {
      const now = new Date()
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      // Min datum -> Danasnji datum
      const minDate = new Date(today)
      minDate.setMonth(minDate.getMonth())
      minDate.setDate(minDate.getDate())
      // Min datum -> Danasnji dan u mjesecu ali mjesec dana unaprijed
      const maxDate = new Date(today)
      maxDate.setMonth(maxDate.getMonth() + 1)
      maxDate.setDate(maxDate.getDate())
        return {
            Ime:'',
            Prezime:'',
            Phonenumber: '',
            Marka_i_model:'',
            Registracija:'',
            Bojavozila: '',
            Izabrani_datum:'',
            Email:'',
            auth: Auth.state,
        Provedeno_vrijeme: null,
        options: [
          { value: '1', text: '1 sat' },
          { value: '2', text: '2 sata' },
          { value: '3', text: '3 sata' },
          { value: '4', text: '4 sata' },
          { value: '5', text: '5 sati' }
        ],
        Koji_parking: null,
        options2: [
          { value: 'Karolina', text: 'Parking Karolina' },
          { value: 'Dobriceva', text: 'Parking Dobrićeva ul.' },
          { value: 'Bolnica', text: 'Parking Bolnica ' },
          { value: 'Rojc', text: 'Parking Rojc' },
          { value: 'Tržnica', text: 'Parking Tržnica' },
          { value: 'Riva', text: 'Parking Riva Pula' },
          { value: 'Verudela', text: 'Parking Verudela' },
          { value: 'Autobusna', text: 'Parking Autobusni kolodvor' }
        ],
        value: '',
        min: minDate,
        max: maxDate
        }},
     methods: {
        saljipodatke() {
            if (this.Ime === '' || this.Ime === null || this.Ime === 0){
                alert("Unesite Vaše ime!");
            }

            else if (this.Prezime === '' || this.Prezime === null || this.Prezime === 0){
                alert("Unesite Vaše prezime!");
            }

            else if (this.Phonenumber === '' || this.Phonenumber === null || this.Phonenumber === 0){
                alert("Unesite Vaš broj telefona!");
            }

            else if (this.Marka_i_model === '' || this.Marka_i_model === null || this.Marka_i_model === 0){
                alert("Unesite Vašu marku i model vozila!");
            }

            else if (this.Registracija === '' || this.Registracija === null || this.Registracija === 0){
                alert("Unesite Vašu registraciju!");
            }

            else if (this.Bojavozila === '' || this.Bojavozila === null || this.Bojavozila === 0){
                alert("Unesite Vašu boju vozila!");
            }

            else if (this.Izabrani_datum === '' || this.Izabrani_datum === null || this.Izabrani_datum === 0){
                alert("Unesite datum rezervacije!");
            }

            else if (this.Provedeno_vrijeme === '' || this.Provedeno_vrijeme === null || this.Provedeno_vrijeme === 0){
                alert("Unesite vrijeme boravka!");
            }

            else if (this.Koji_parking === '' || this.Koji_parking === null || this.Koji_parking === 0){
                alert("Odaberite parking!");
            }

            else {
                let podaci = {
                    Ime: this.Ime,
                    Prezime: this.Prezime,
                    Phonenumber: this.Phonenumber,
                    Marka_i_model: this.Marka_i_model,
                    Bojavozila: this.Bojavozila,
                    Registracija: this.Registracija,
                    Izabrani_datum: this.Izabrani_datum,
                    Provedeno_vrijeme: this.Provedeno_vrijeme + " sata/i",
                    Koji_parking: this.Koji_parking, 
                    Email: this.auth.userEmail
                    }
                Rezervacije.create(podaci)
                    .then(() => {
                        alert("Uspješna rezervacija!")
                        
                        this.$router.push({name: "Home"})
                    })
                }
            },
},
};
 
</script>

<style scoped>

#kartica{
  margin:auto;
  width:100%;
}

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

.mb-2, .my-2 {
  margin-bottom: 2.5rem !important;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 1rem !important;
}

.mb-2 {
  overflow: hidden;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: #044ca4;
  color: white;
  -webkit-text-stroke-width: 0.15px;
  -webkit-text-stroke-color: #000;
}

hr.new1 {
  border: 1px solid black;
}

</style>