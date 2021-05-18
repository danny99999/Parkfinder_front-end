<template>
<div class="Mapa">
    <Navbar></Navbar>
    <br>
    
    <br>
    <br>
    <br>
    <br>
    <h1>Karta stranica</h1>
    <br>
    <br>
    <center>
    <iframe src="https://snazzymaps.com/embed/313663" width="100%" height="600px" style="border:none;"></iframe>
    </center>    
    
    <Footer></Footer>
</div>   
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: "Mapa",
    components: {
        Navbar,
        Footer
    },
};
</script>
<style>
.Mapa {
}
.proba {
    color: black;
    font-weight: bold;
}
</style>