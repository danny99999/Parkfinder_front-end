<template>
  <div id="kartica">
    <Navbar></Navbar>
    <b-card>
      <br />
      <br />
      <br />
      <br />
      <center>
        <b-card tag="article" style="max-width: 30rem" class="mb-2">
        <b-card-title><h2><b>Promjena lozinke</b></h2></b-card-title>

        <div class="form-group3">
                <label class="mt-4">Vaše korisničko ime</label>
                <p class="form-control" id="frm-ctrl">{{ auth.userEmail }}</p>
            </div>
            <br>
        <br>

        <div class="form-group3">
                <input 
                    type="password"
                    v-model="stara_lozinka" 
                    class="form-control" 
                    id="exampleInputPassword1"
                    placeholder="Stara lozinka" />
                    <label for="exampleInputPassword1">Stara lozinka<br></label>

            </div>
            <br>
       
            <div class="form-group3">          
                <input 
                    type="password"
                    v-model="nova_lozinka" 
                    class="form-control"
                    id="exampleInputPassword2"
                    placeholder="Nova lozinka"/>
                    <label class="label1" for="exampleInputPassword2">Nova lozinka</label>   
                                   
            </div>
            <br>
        <b-button @click="changePassword" variant="danger">Promjena lozinke</b-button>
        </b-card>
      </center>
    </b-card>
    <Footer></Footer>
  </div>
</template>

<script>

import { Auth } from '@/services'
import Navbar from "@/components/Navbar.vue";
import Footer from '@/components/Footer.vue';




export default {
    name: 'Promjena_lozinke',
    components: {
        Navbar,
        Footer,
    },


  data() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
        return {
            nova_lozinka: '',
            stara_lozinka: '',
            auth: Auth.state,
            today: today
        }
    },
    methods: {
       async changePassword() {
             if (this.stara_lozinka === '' || this.stara_lozinka === null){
                alert("Unesite staru lozinku!");
            }

            else if (this.nova_lozinka === '' || this.nova_lozinka === null){
                alert("Unesite novu lozinku!");
            }

            else if(this.stara_lozinka == this.nova_lozinka){
                alert("Lozinke ne smiju biti iste!")
            }

             else {
                    await Auth.changeUserPassword(this.auth.userEmail, this.stara_lozinka, this.nova_lozinka)
                    alert("Promijenili ste lozinku. Molimo, ulogirajte se ponovno.");
                    this.$router.replace({name: "Sign_in"});
                }
        },
}
};
</script>


<style scoped>

#kartica {
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