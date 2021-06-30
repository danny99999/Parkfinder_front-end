<template>
<div>
    <Navbar></Navbar>
    <br>
    <br>
    <br>
    <br>
    <h2><b>Karta</b></h2>
    <br>
    <center>
    <Mapa></Mapa>
    <br>
    <Footer></Footer>
    </center>  
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Mapa from '@/components/Mapa.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: "Karta",
    components: {
        Navbar,
        Mapa,
        Footer     
    },
};
</script>

<style>

</style>