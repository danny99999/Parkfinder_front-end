<template>
<div class="Podaci_vozila">
    <Navbar></Navbar>
    <br>
    <br>
    <br>
    <br>
    <h2>Upisite podatke o rezervaciji parkinga</h2>
<div class="form-group6">
    <label class="Datum">Upisite datum rezervacije</label>
                <input 
                    class="form-control" 
                    placeholder="Datum">
                
            
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
            <b-button class="btn" href="/" type="submit" variant="danger" v-on:click="poruka('Uspješno ste rezervirali parking')">Potvrdi rezervaciju</b-button> 

            

                
</div>      

    


</div>   
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
    name: "Podaci_rezervacije",
    components: {
        Navbar

    },
    
    data() {
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
        ]
      }
    },
methods: {
        poruka: function (message) {
            alert(message)
        }

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