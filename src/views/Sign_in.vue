<template>
<div>
        <div class="form_group1">
           <Navsignup></Navsignup>
           <form @submit.prevent="login">
           <div class="form_group2">
            <center>   
            <b-card id="sign">
            <h2>Prijava</h2>
            <br>
            <br>

            <div class="form-group3">
                <input 
                    type="email" 
                    v-model="korisnicko_ime" 
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp" 
                    placeholder="Email"/>
                <label for="exampleInputEmail1">Email</label>
            </div>
            <br>
           <br>
            <div class="form-group3">
                <input 
                    type="password"
                    v-model="lozinka"
                    class="form-control" 
                    id="exampleInputPassword1"
                    placeholder="Lozinka" />
                    <label for="exampleInputPassword1">Lozinka</label>
            </div>
            <br>
          

            <b-button class="btn" type="submit" variant="danger">Prijava</b-button>
            <br>
            <br>
            <br>
            <b-button href="/sign_up">Nemate račun? Registrirajte se.</b-button>
            </b-card>
            </center>
           </div>
           </form>
        </div>
        
    <Footer></Footer>

</div>
</template>

<script>
import Navsignup from '../components/Navsignup.vue';
import Footer from '@/components/Footer.vue';
import { Auth } from "@/services";

export default {
    name: 'Sign_in',
    components: {
        Navsignup,
        Footer    
    },
    
    data() {
        return {
            korisnicko_ime:"",
            lozinka:""
            
        }
    },
    methods: {
        async login() {
            let success = await Auth.login(this.korisnicko_ime, this.lozinka);
            console.log('Rezultat prijave', success);

            if (success == true) {
                this.$router.push({ name: "Home" })
            }
        },
    },   
};
</script>


<style>
div.form_group1 {
    
    border: none;
    background-color:rgb(63, 60, 60);
    height: 666px;
    align-items: center;
   
    
    
}

.form_group2 {
   
   margin: 0%;


}

#sign {
    background-color: #044ca4;
    color: aliceblue;
    height: 600px;
    border-radius: 10px;
    align-self: center;
   
}

div.card {
   
    border-radius: 10px;
    width: auto;
    
    
}

.form-group3 {
   margin-left: 20%;
   margin-right: 20%;
}
</style>