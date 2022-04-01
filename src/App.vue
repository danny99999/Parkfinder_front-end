<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "App.vue",
  data() {
    return {
      store,
    };
  },
  mounted() {
  }

};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>