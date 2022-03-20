<template>
<div class="Podaci_rezervacije">
    <Navbar></Navbar>
    <br>
    <br>
    <br>
    <br>
    <h2><b>Upišite podatke o rezervaciji parkinga</b></h2>
    <div class="form-group6">
    <br>
    <label for="example-datepicker">Odaberite datum</label>
    <b-form-datepicker v-model="izaberidatum" :min="min" :max="max" locale="hr" class="form-kontrola"></b-form-datepicker>
           <br>
           <br>
            
                <label class= "br">Vrijeme boravka na parkingu</label>    
                <b-form-select v-model="vrijemeprovedeno" :options="options" class="form-kontrola">
                    <template #first>
                    <b-form-select-option disabled :value="null">-- Molimo odaberite jednu od opcija --</b-form-select-option>
                    </template>
                </b-form-select>
           <br>
           <br>
           <br>
                <label class= "br">Odaberite parking</label>    
                <b-form-select v-model="kojiparking" :options="options2" class="form-kontrola">
                    <template #first>
                    <b-form-select-option disabled :value="null">-- Molimo odaberite jednu od opcija --</b-form-select-option>
                    </template>
                </b-form-select>
                <br>
                <br>
            <b-button class="btn" type="button" variant="danger" @click="posalji">Potvrdi rezervaciju</b-button>
            <br>
            <br>

                
        </div>      
    <Footer></Footer>
</div>   
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { kartice } from '@/services'

export default {
    name: "Podaci_rezervacije",
    components: {
        Navbar,
        Footer
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
        vrijemeprovedeno: null,
        options: [
          { value: '1', text: '1 sat' },
          { value: '2', text: '2 sata' },
          { value: '3', text: '3 sata' },
          { value: '4', text: '4 sata' },
          { value: '5', text: '5 sati' }
        ],
        kojiparking: null,
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
        posalji() {
            if (this.izaberidatum === '' || this.izaberidatum === null || this.izaberidatum === 0){
                alert("Unesite datum rezervacije!");
            }

            else if (this.vrijemeprovedeno === '' || this.vrijemeprovedeno === null || this.vrijemeprovedeno.value === 0){
                alert("Unesite vrijeme boravka!");
            }

            else if (this.kojiparking === '' || this.kojiparking === null || this.kojiparking.value === 0){
                alert("Odaberite parking!");
            }
            else {
                let podaci3 = {
                    Izabrani_datum: this.izaberidatum,
                    Provedeno_vrijeme: this.vrijemeprovedeno + " sati",
                    Koji_parking: this.kojiparking
                    }
                kartice.create3(podaci3)
                    .then(() => {
                        alert("Uspješna rezervacija parkinga!");
                        this.$router.push({name: "Home"})
                    })
                }
            },
            }
};
</script>

<style scoped>
.Podaci_rezervacije {
    background-color: transparent;
    color: black;
}

.form-kontrola{
    border: 2px solid black !important;
}


.form-group6{
    padding-left: 20%;
    padding-right: 20%;
}

</style>