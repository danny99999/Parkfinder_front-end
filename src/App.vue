<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import {firebase} from '@/firebase';
//import router from '@/router';


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("***", user.email);
  } else {
    console.log('*** No user');

    //if (router.name !== "Sign_in",  router.name !=="Sign_up") {
      //router.push({name: 'Sign_in'});


      
    //}
    
  }
});


export default {
  name: "App.vue",
  components: {
  },
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

.upperapp
{
  background-color: #044ca4;
}
</style>
