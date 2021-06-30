<template>
<div>
        <div class="form_group1">
           <Navsignup></Navsignup>
           <div class="form_group2">
            <center>   
            <b-card id="sign">
            <h2>Prijava</h2>
            <br>
            <br>

            <div class="form-group3">
                <input 
                    type="email" 
                    v-model="username" 
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
                    v-model="password"
                    class="form-control" 
                    id="exampleInputPassword1"
                    placeholder="Lozinka" />
                    <label for="exampleInputPassword1">Lozinka</label>
            </div>
            <br>
          

            <b-button class="btn" type="submit" variant="danger" @click="login">Prijava</b-button>
            <br>
            <br>
            <br>
            <b-button href="/sign_up">Nemate račun? Registrirajte se.</b-button>
            </b-card>
            </center>
           </div>
        </div>
        
    <Footer></Footer>

</div>
</template>

<script>



import Navsignup from '../components/Navsignup.vue';
import Footer from '@/components/Footer.vue';
import {firebase} from '@/firebase';

export default {
    name1: 'Sign_in',
    components: {
        Navsignup,
        Footer    
    },
    
    data() {
        return {
            username:"",
            password:""
            
        }
    },
    methods: {
        login() {
            console.log("login..." + this.username);
            console.log(this.$router);
            firebase.auth().signInWithEmailAndPassword(this.username, this.password)
            .then((result)=> {
                console.log('Uspješna prijava', result);
                this.$router.replace({name: 'Home'});
            })
            .catch(function(e) {
                console.error('Greška', e);
                var errorCode = e.code;
                var errorMessage = e.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Upišite ispravnu lozinku.');
                } else {
                 alert(errorMessage);
                }
                console.log(e);
                
            });
        }
       
        
         

      
    }
    
    
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