<template>

<div class="nav1">
    <NavbarENG></NavbarENG>
    <br>
    <br>
    <br>
    <b-container class="bv-example-row" fluid="md">
        <b-col>
            <Kartica v-for="Kartica in kartice" :key="Kartica" :info="Kartica"></Kartica>
        </b-col>
    </b-container>
    <FooterENG></FooterENG>
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
  naslov: 'Parking Marketplace',
  router: '/trznica'
  },
  {url: 'https://cdn.discordapp.com/attachments/465282681622757399/806587488574505000/unknown.png',
  naslov: 'Parking Dobricheva St.',
  router: '/dobriceva'
  },
  {url: 'https://istarski.hr/app_assets/publications/index/69736/xl_69736_pxl_261120_30956277.jpg',
  naslov: 'Parking Hospital',
  router: '/bolnica'
  }
]

import Kartica from '@/components/Kartica.vue';
import NavbarENG from '@/components/NavbarENG.vue';
import FooterENG from '@/components/FooterENG.vue';


export default {
    name: "Homeeng",
    components: {
        Kartica,
        NavbarENG,
        FooterENG
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