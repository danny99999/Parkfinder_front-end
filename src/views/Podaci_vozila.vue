<template>
<div class="Podaci_vozila">
    <Navbar></Navbar>
    <br>
    <br>
    <br>
    <br>
    <h2>Upisite podatke svog vozila</h2>
<div class="form-group6">
 
                <label class= "prezime">Marka i model</label>
                <input 
                    v-model="markaimodel"
                    class="form-control" 
                    placeholder="Marka i model" >
            <br>
           <br>
            
                <label class= "br">Registracija</label>
                <input 
                    v-model="registracija"
                    class="form-control" 
                    placeholder="Registracija" >
            <br>
            <br>
            <label class= "br">Boja vozila</label>
                <input 
                    v-model="bojavozila"
                    class="form-control" 
                    placeholder="Boja">
                    <br>

            <b-button class="btn" type="button" variant="danger" @click="saljipodatkevozila">Dalje</b-button>        
                
</div>      

    

    <Footer></Footer>
</div>   
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: "Podaci_vozila",
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            markaimodel:'',
            registracija:'',
            bojavozila: '',
        };
        },
     methods: {
        saljipodatkevozila() {
            if (this.markaimodel === '' || this.markaimodel === null || this.markaimodel.value === 0){
                alert("Unesite Vašu marku i model vozila!");
            }

            else if (this.registracija === '' || this.registracija === null || this.registracija.value === 0){
                alert("Unesite Vašu registraciju!");
            }

            else if (this.bojavozila === '' || this.bojavozila === null || this.bojavozila.value === 0){
                alert("Unesite Vašu boju vozila!");
            }
            else {
                this.$router.push({name: "Podaci_rezervacije"});
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