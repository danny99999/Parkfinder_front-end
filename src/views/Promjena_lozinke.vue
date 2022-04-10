<template>
        <div class="form_group1">
           <Navbar></Navbar>
           <div class="form_group2">
            <form>
            <center>
            <b-card>
            <h2>Registracija</h2>
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
                    <br>
                    <label class="label1" for="exampleInputPassword2">Nova lozinka</label>   
                                   
            </div>
            <b-button type="button" class="btn" variant="danger" @click="changePassword">Registriraj se!</b-button>
            
            </b-card>
            </center>
            </form>
           </div>
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
        return {
            nova_lozinka: '',
            stara_lozinka: '',
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

            else {
                await Auth.changeUserPassword(this.korisnicko_ime, this.nova_lozinka, this.stara_lozinka)
                    console.log("Promjena lozinke")
                    alert("Lozinka uspješno promjenjena! ");
                    this.$router.replace({name: "Home"});
        }
        }
}
};
</script>


<style scoped>

div.form_group1 {
    border: none;
    background-color:rgb(63, 60, 60);
    height: 890px !important;
}

.form_group2 {
margin: 0%;
  
}



div.card {
    background-color: #044ca4 !important;
    color: white !important;
    border-radius: 10px;
    width:auto;
    height: 770px;
   
    
}




.signup {
    color: aliceblue;
}

</style>