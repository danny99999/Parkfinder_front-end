<template>
        <div class="form_group1">
           <Navsignup></Navsignup>
           <div class="form_group2">
            <form>
            <center>
            <b-card>
            <h2>Registracija</h2>
            <br>
            <div class="form-group3">
                <input 
                    type="text"
                    v-model="ime_prezime"
                    class="form-control"
                    placeholder="Ime"
                    required/>
                    <label for="exampleInputName1">Ime i prezime</label>
            </div>
            <br>
            <div class="form-group3">
                <input 
                    type="text"
                    v-model="grad"
                    class="form-control"
                    placeholder="Grad"
                    required/>
                    <label for="exampleInputCity1">Grad</label>
            </div>
            <br>
            <div class="form-group3">
                <input 
                    type="text"
                    v-model="korisnicko_ime"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp" 
                    placeholder="Email"/>
                    <label for="exampleInputEmail1">E-mail</label>
            </div>
            <br>
    
            <div class="form-group3">
                <input 
                    type="password"
                    v-model="lozinka" 
                    class="form-control" 
                    id="exampleInputPassword1"
                    placeholder="Lozinka" />
                    <password-meter :password="lozinka" @score="onScore" />
                    <span v-if="score === 0"><b>Lozinka je slaba</b><br></span>
                    <label for="exampleInputPassword1">Lozinka<br></label>

            </div>
            <br>
       
            <div class="form-group3">          
                <input 
                    type="password"
                    v-model="lozinkaRepeat" 
                    class="form-control"
                    id="exampleInputPassword2"
                    placeholder="Ponovite lozinku"/>
                    <strong><label class="usporedba" for="passwordnotmatching">{{comparePasswords}}</label></strong>
                    <br>
                    <label class="label1" for="exampleInputPassword2">Ponovite lozinku</label>   
                                   
            </div>
            <b-button type="button" class="btn" variant="danger" @click="signup">Registriraj se!</b-button>
            <br>
            <br>
            <b-button class="btn2" href="/">Već imam račun</b-button>
            </b-card>
            </center>
            </form>
           </div>
        <Footer></Footer>
        </div>

</template>

<script>

import passwordMeter from "vue-simple-password-meter";
import { Auth } from '@/services'
import Navsignup from '../components/Navsignup.vue';
import Footer from '@/components/Footer.vue';



export default {
    name2: 'Sign_up',
    components: {
        Navsignup,
        passwordMeter,
        Footer    
    },
 
  data() {
        return {
            ime_prezime:'',
            grad:'',
            username: '',
            lozinka: '',
            lozinkaRepeat: '',
            score: null
        }
    },
    methods: {
       async signup() {
            if (this.ime_prezime === '' || this.ime_prezime === null || this.ime_prezime === 0){
                alert("Unesite Vaše ime i prezime");
            }

            else if (this.grad === '' || this.grad === null || this.grad === 0){
                alert("Unesite Vaš grad!");
            }

            else if (this.korisnicko_ime === '' || this.korisnicko_ime === null || this.korisnicko_ime === 0){
                alert("Unesite Vaš E-Mail/korisničko ime!");
            }

            else if (this.lozinka === '' || this.lozinka === null){
                alert("Unesite Vašu lozinku!");
            }

            else if (this.lozinkaRepeat != this.lozinka || this.passwordRepeat === '' || this.passwordRepeat === null){
                alert("Vaše lozinke se ne podudaraju!");
            }

            else {
                    await Auth.register(this.korisnicko_ime, this.lozinka, this.grad, this.ime_prezime)
                    console.log("Uspješna registracija")
                    alert("Dobro došli! ");
                    this.$router.replace({name: "Sign_in"});
                }
        }},

        onScore({ score, strength }) {
            console.log(score); // from 0 to 4
            console.log(strength); // one of : 'risky', 'guessable', 'weak', 'safe' , 'secure' 
            this.score = score;
    },

    computed: {
        comparePasswords () {
            return this.lozinka !== this.lozinkaRepeat ? 'Lozinka se ne podudara' : ''
        }
    },
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




.usporedba {
    color: red;
    font-size: 15px;
    text-align: right;
    margin-left: 60%;
    
}


.po-password-strength-bar {
  border-radius: 2px;
  transition: all 0.2s linear;
  height: 5px;
  margin-top: 8px;
}

.po-password-strength-bar.risky {
  background-color: #f95e68;
}

.po-password-strength-bar.guessable {
  background-color: #fb964d;
}

.po-password-strength-bar.weak {
  background-color: #fdd244;
}

.po-password-strength-bar.safe {
  background-color: #b0dc53;
}

.po-password-strength-bar.secure {
  background-color: #35cc62;
}


</style>