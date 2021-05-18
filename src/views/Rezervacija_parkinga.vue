<template>
<div class="Rezervacija_parkinga">
    <Navbar></Navbar>
    <br>
    <br>
    <br>
    <br>
    <h2>Upisite svoje osobne podatke</h2>
<div class="form-group6">
    <label class="Ime">Ime</label>
                <input 
                    class="form-control" 
                    placeholder="Ime">
                
            
           <br>
           <br>
            
                <label class= "prezime">Prezime</label>
                <input 
                    class="form-control" 
                    placeholder="Prezime" >
            <br>
           <br>
            
                <label class= "br">Broj mobitela</label>
                <input 
                    class="form-control" 
                    placeholder="Br. telefona" >
            <br>
            <b-button class="btn" href="/podaci_vozila" type="submit" variant="danger">Dalje</b-button>        
                
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
};
</script>

<style>
.Rezervacija_parkinga {
    background-color: blanchedalmond;
}

.form-group6{
    padding-left: 20%;
    padding-right: 20%;
}

</style>