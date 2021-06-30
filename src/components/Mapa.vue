<template>
  <div>
    <button @click="drawMarkers">Prikaži lokacije</button>
    <button @click="clearMap">Očisti mapu</button>
    <br />
    <br />
    <GmapMap
      :center="center"
      :zoom="14"
      ref="map"
      map-type-id="terrain"
      style="width: 100%; height: 600px"
    >
      <gmap-info-window
        @closeclick="window_open = false"
        :opened="window_open"
        :position="infowindow.position"
        :options="{
          pixelOffset: {
            width: 0,
            height: -35,
          },
        }"
      >
        <router-link :to="{ path: infowindow.route }">Klikni me</router-link>
      </gmap-info-window>
      <GmapMarker
        :v-if="mapLoaded"
        v-for="(m, index) in markers"
        :key="index"
        :position="m.position"
        :clickable="true"
        :label="m.label"
        @click="openWindow(m)"
      />
    </GmapMap>
  </div>
</template>

<script>
const rojc = { lat: 44.86246641035136, lng: 13.844118917952022 };
const karolina = { lat: 44.87295713977241, lng: 13.84845695338057 };
const bolnica = { lat: 44.86615748628019, lng: 13.859112325863487 };
const trznica = { lat: 44.866989166250576, lng: 13.8506079377271 };
const dobriceva = { lat: 44.870609744174544, lng: 13.849421135612475 };

export default {
  name: "Mapa",
  data() {
    return {
      markers: [],
      center: trznica,
      infowindow: {
        position: { lat: 0, lng: 0 },
      },
      window_open: false,
      mapLoaded: false,
    };
  },

  mounted() {
    this.drawMarkers();
  },

  methods: {
    openWindow(m) {
      // console.log(m);
      this.infowindow = m;
      //console.log(this.infowindow.route);
      this.window_open = true;
    },

    drawMarkers() {
      this.markers = [
        {
          position: rojc,
          label: "Rojc",
          route: "/rojc",
        },
        {
          position: karolina,
          label: "Karolina",
          route: "/karolina",
        },
        {
          position: bolnica,
          label: "Bolnica",
          route: "/bolnica",
        },
        {
          position: trznica,
          label: "Trznica",
          route: "/trznica",
        },
        {
          position: dobriceva,
          label: "Dobriceva",
          route: "/dobriceva",
        },
      ];
      // console.log(this.markers);
    },
    clearMap() {
      this.markers = [];
      this.window_open = false;
    },
  },
};
</script>

<style scoped></style>