<template>

<div class="nav1">
    
    <Navbar></Navbar>
    <br>
    <br>
    <br>
    <b-container class="bv-example-row" fluid="md">
        <b-col>
            <Kartica v-for="Kartica in kartice" :key="Kartica" :info="Kartica"></Kartica>
        </b-col>
    </b-container>
    <Footer></Footer>
</div>
</template>

<script>
let kartice = []

kartice = [
  { 
  url: 'https://storage.glasistre.hr/MediaServer/Photos/Download/81904?Format=1',
  naslov: 'Parking Rojc',
  router: '/rojc'
  },
  {url: 'https://storage.glasistre.hr/MediaServer/Photos/Download/90513?Format=1',
  naslov: 'Parking Karolina',
  router: '/karolina'
  },
  {url: 'https://www.pula.hr/site_media/media/typo3/uploads/pics/Picture_23086_01.jpg',
  naslov: 'Parking Tržnica',
  router: '/trznica'
  },
  {url: 'https://cdn.discordapp.com/attachments/465282681622757399/806587488574505000/unknown.png',
  naslov: 'Parking Dobrićeva ul.',
  router: '/dobriceva'
  },
  {url: 'https://istarski.hr/app_assets/publications/index/69736/xl_69736_pxl_261120_30956277.jpg',
  naslov: 'Parking Bolnica',
  router: '/bolnica'
  }
]

import Kartica from '@/components/Kartica.vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: "Home",
    components: {
        Kartica,
        Navbar,
        Footer,
    },
    data: function() {
        return {
        kartice,
        };
    },
};
</script>

<style>

.nav1 {
    max-width: 100%;
    
}
</style>