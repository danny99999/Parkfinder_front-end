<template>
  <div class="obavijesti">
    <Navbar></Navbar> 
    <br>
    <br>
    <br>
    <center>
      <br>
      <h2><b>Obavijesti</b></h2>
      <br>
      <div>
        <Obavijest
            v-for="Obavijesti in obavijesti"
            :key="Obavijesti.id"
            :info="Obavijesti"
          ></Obavijest>
      </div>
    </center>
    <br>
    <br>
    <Footer></Footer>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Obavijest from "@/components/Obavijest.vue";
import { Obavijesti } from "@/services";

export default {
    name: "Obavijesti",
    components: {
        Navbar,
        Footer,
        Obavijest
    },
    data() {
    return {
      obavijesti: [],
    };
  },

  mounted() {
    this.fetchObavijesti();
  },
  methods: {
    async fetchObavijesti() {
      this.obavijesti = await Obavijesti.getObavijesti();
    },
  },
};
</script>

<style>

#obavijesti {
  margin:auto;
  width:100%;
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
  background-color: #044ca4 !important;
  color: white;
  -webkit-text-stroke-width: 0.15px;
  -webkit-text-stroke-color: #000;
}

.lozinka{
  background-color: aqua;
  color: black;
}
</style>
