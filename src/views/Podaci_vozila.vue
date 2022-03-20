<template>
<div class="Podaci_vozila">
    <Navbar></Navbar>
    <br>
    <br>
    <br>
    <br>
    <h2><b>Upišite podatke svog vozila</b></h2>
    <div class="form-group6">
            <br> 
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
            <b-button class="btnn" type="button" variant="danger" @click="saljipodatkevozila">Dalje</b-button>        
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
            if (this.markaimodel === '' || this.markaimodel === null || this.markaimodel === 0){
                alert("Unesite Vašu marku i model vozila!");
            }

            else if (this.registracija === '' || this.registracija === null || this.registracija === 0){
                alert("Unesite Vašu registraciju!");
            }

            else if (this.bojavozila === '' || this.bojavozila === null || this.bojavozila === 0){
                alert("Unesite Vašu boju vozila!");
            }
            else {
                let podaci2 = {
                    Marka_i_model: this.markaimodel,
                    Bojavozila: this.bojavozila,
                    Registracija: this.registracija
                    }
                kartice.create2(podaci2)
                    .then(() => {
                        this.$router.push({name: "Podaci_rezervacije"})
                    })
                }
            },
            }
};
</script>

<style scoped>
.Podaci_vozila {
    background-color: transparent !important;
    color: black;
}

.form-group6{
    padding-left: 20%;
    padding-right: 20%;
}

.form-control{
    border: 2px solid black !important;
}


.btnn{
    width: 100px;
}

</style>