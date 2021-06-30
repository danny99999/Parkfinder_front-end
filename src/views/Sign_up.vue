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
                    v-model="ime"
                    class="form-control"
                    placeholder="Ime"
                    required/>
                    <label for="exampleInputName1">Ime</label>
            </div>
            <br>
            <div class="form-group3">
                <input 
                    type="text"
                    v-model="prezime"
                    class="form-control"
                    placeholder="Prezime"
                    required/>
                    <label for="exampleInputSurname1">Prezime</label>
            </div>
            <br>
            <div class="form-group3">
                <input 
                    type="text"
                    v-model="username"
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
                    v-model="password" 
                    class="form-control" 
                    id="exampleInputPassword1"
                    placeholder="Lozinka" />
                    <password-meter :password="password" @score="onScore" />
                    <span v-if="score === 0"><b>Lozinka je slaba</b><br></span>
                    <label for="exampleInputPassword1">Lozinka<br></label>

            </div>
            <br>
       
            <div class="form-group3">          
                <input 
                    type="password"
                    v-model="passwordRepeat" 
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
import { firebase } from '@/firebase';
import { db } from '@/firebase';
import store from "@/store";
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
            ime:'',
            prezime:'',
            username: '',
            password: '',
            passwordRepeat: '',
            datum_registracije: '',
            score: null,
            selectedday: null,
            selectedmonth: null,
            selectedyear: null,
            sveskupaproba: null,
        };
    },
    methods: {
        signup() {
            if (this.ime === '' || this.ime === null || this.ime.value === 0){
                alert("Unesite Vaše ime!");
            }

            else if (this.prezime === '' || this.prezime === null || this.prezime.value === 0){
                alert("Unesite Vaše prezime!");
            }

            else if (this.username === '' || this.username === null || this.username.value === 0){
                alert("Unesite Vaš E-Mail!");
            }

            else if (this.password === '' || this.password === null){
                alert("Unesite Vašu lozinku!");
            }

            else if (this.passwordRepeat != this.password || this.passwordRepeat === '' || this.passwordRepeat === null){
                alert("Vaše lozinke se ne podudaraju!");
            }

            else {
            var currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');
            firebase.auth().createUserWithEmailAndPassword(this.username, this.password)
            .then(() => {
                store.id = this.username
                db.collection("korisnici")
            .doc(store.id)
     
            .set({
                ime: this.ime,
                prezime: this.prezime,
                username: this.username,
                password: this.password,
                datum_registracije: currentDate,
                selectedday: this.selectedday,
                // dio za dvojku - od selecteda varijable/value slati na Firebase
                selectedmonth: this.selectedmonth,
                selectedyear: this.selectedyear,
                // dio za trojku - napisati kao nekakav datum - nisam siguran ako je tocno
                sveskupaproba: this.selectedday + "/" + this.selectedmonth + "/" + this.selectedyear,
              })

                console.log('Uspješna registracija');
                alert("Dobro došli! ");
                this.$router.push({name: "Sign_in"});
                }
            )
            .catch(function(error) {
                var errorCode = error.code;
                if (errorCode === 'auth/email-already-in-use') {
                    alert('Ovaj račun se već koristi!');
                }
                else if (errorCode === 'auth/weak-password') {
                    alert('Lozinka mora sadržavati minimalno 6 znakova!');
                }
                else { 
                console.error("Došlo je do greške", error),
                alert('Niste upisali dobru lozinku ili e-mail adresu!');
                }
            });  
            console.log('Nastavak');

        }},

        onScore({ score, strength }) {
            console.log(score); // from 0 to 4
            console.log(strength); // one of : 'risky', 'guessable', 'weak', 'safe' , 'secure' 
            this.score = score;
    },
    },

    computed: {
        comparePasswords () {
            return this.password !== this.passwordRepeat ? 'Lozinka se ne podudara' : ''
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