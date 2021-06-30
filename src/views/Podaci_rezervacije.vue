<template>
<div class="Podaci_vozila">
    <Navbar></Navbar>
    <br>
    <br>
    <br>
    <br>
    <h2>Upisite podatke o rezervaciji parkinga</h2>
<div class="form-group6">
    <br>
    <br>
    <label for="example-datepicker">Odaberite datum</label>
    <b-form-datepicker v-model="value" :min="min" :max="max" locale="en"></b-form-datepicker>
           <br>
           <br>
            
                <label class= "br">Vrijeme boravka na parkingu</label>    
                <b-form-select v-model="selected" :options="options">--Odaberite jednu od opcija--</b-form-select>    
            <br>
           <br>
           <br>
                <label class= "br">Odaberite parking</label>    
                <b-form-select v-model="selected2" :options="options2">--Odaberite jednu od opcija--</b-form-select>
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
        selected: null,
        options: [
          { value: null, text: 'Odaberite vrijeme boravka' },
          { value: 'a', text: '1 sat' },
          { value: 'b', text: '2 sata' },
          { value: 'c', text: '3 sata' },
          { value: 'd', text: '4 sata' },
          { value: 'e', text: '5 sati' }
        ],
        selected2: null,
        options2: [
          { value: null, text: 'Odaberite parking' },
          { value: '1', text: 'Parking Karolina' },
          { value: '2', text: 'Parking Dobrićeva' },
          { value: '3', text: 'Parking Bolnica ' },
          { value: '4', text: 'Parking Rojc' },
          { value: '5', text: 'Parking Trznica' }
        ],
        value: '',
        min: minDate,
        max: maxDate
        }},
     methods: {
        posalji() {
            if (this.value === '' || this.value === null || this.value === 0){
                alert("Unesite datum rezervacije!");
            }

            else if (this.selected === '' || this.selected === null || this.selected.value === 0){
                alert("Unesite vrijeme boravka!");
            }

            else if (this.selected2 === '' || this.selected2 === null || this.selected2.value === 0){
                alert("Odaberite parking!");
            }
            else {
                alert("Uspjesna rezervacija parkinga!");
                this.$router.push({name: "Home"});
                }
            },
            }
};
</script>

<style>
.Podaci_vozila {
    background-color: blanchedalmond;
}

.form-group6{
    padding-left: 20%;
    padding-right: 20%;
}

</style>