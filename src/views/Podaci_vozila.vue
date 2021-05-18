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
                    class="form-control" 
                    placeholder="Marka i model" >
            <br>
           <br>
            
                <label class= "br">Registracija</label>
                <input 
                    class="form-control" 
                    placeholder="Registracija" >
            <br>
            <br>
            <label class= "br">Boja vozila</label>
                <input 
                    class="form-control" 
                    placeholder="Boja" >
                    <br>

            <b-button class="btn" href="/podaci_rezervacije" type="submit" variant="danger">Dalje</b-button>        
                
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