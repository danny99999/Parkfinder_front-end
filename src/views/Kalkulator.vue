<template>
<center>
<div class="bgkalkus">
  <Navbar></Navbar>
  <br>
  <br>
  <br>
  <br>
  <h2><b>Kalkulator</b></h2>
  <br>
  <center>
    <div class="top">
      <h4 style="padding-top:10px">Odaberite jedan od parkinga</h4>
      <p>*Napomena: zadržavanje više od 5 sati na određenom parkingu smatra se dnevnom kartom čija je cijena ista za svaki parking</p>
      <p style="padding:10px">Ljetna dnevna karta: <b>50Kn</b> <br> Zimska dnevna karta: <b>40Kn</b> </p>
    </div>
    <br>
  </center>
  <br>
  <div class="accordion" role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info">Parking Rojc</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
        <b-card-body>
         <b-card-text>Cijena: {{form.rojc}} Kn/h  <br> Radno vrijeme: <br> Pon-Pet: 08:00 - 21:00 <br> Sub: 10:00-21:00 <br> Ned: 11:00-21:00 </b-card-text>
          <b-card-text>Ovdje odaberite vrijeme provedeno na parkingu: </b-card-text>
            <b-form-select v-model="selected" :options="options">
            <template #first>
            <b-form-select-option :value="null">-- Molimo odaberite jednu od opcija --</b-form-select-option>
            </template>
            </b-form-select>
            <div class="mt-3">Konacna cijena: <strong>{{ selected }}  Kn </strong></div>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="info">Parking Karolina</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
        <b-card-text>Cijena: {{form.karolina}} Kn/h  <br> Radno vrijeme: <br> Pon-Pet: 09:00 - 21:00 <br> Sub: 08:00-22:00 <br> Ned: 10:00-22:00 </b-card-text>
          <b-card-text>Ovdje odaberite vrijeme provedeno na parkingu: </b-card-text>
            <b-form-select v-model="selected2" :options="options2">
            <template #first>
            <b-form-select-option :value="null">-- Molimo odaberite jednu od opcija --</b-form-select-option>
            </template>
            </b-form-select>
            <div class="mt-3">Konacna cijena: <strong>{{ selected2 }}  Kn </strong></div>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="info">Parking Tržnica</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
         <b-card-text>Cijena: {{form.trznica}} Kn/h  <br> Radno vrijeme: <br> Pon-Pet: 09:00 - 21:00 <br> Sub: 10:00-21:00 <br> Ned: 10:00-20:00 </b-card-text>
          <b-card-text>Ovdje odaberite vrijeme provedeno na parkingu: </b-card-text>
            <b-form-select v-model="selected3" :options="options3">
            <template #first>
            <b-form-select-option :value="null">-- Molimo odaberite jednu od opcija --</b-form-select-option>
            </template>
            </b-form-select>
            <div class="mt-3">Konacna cijena: <strong>{{ selected3 }}  Kn </strong></div>
        </b-card-body>
      </b-collapse>
    </b-card>

        <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-4 variant="info">Parking Dobrićeva ul.</b-button>
      </b-card-header>
      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
        <b-card-body>
         <b-card-text>Cijena: {{form.dobriceva}} Kn/h  <br> Radno vrijeme: <br> Pon-Pet: 09:00 - 20:00 <br> Sub: 08:00-20:00 <br> Ned: 10:00-20:00 </b-card-text>
          <b-card-text>Ovdje odaberite vrijeme provedeno na parkingu: </b-card-text>
            <b-form-select v-model="selected4" :options="options4">
            <template #first>
            <b-form-select-option :value="null">-- Molimo odaberite jednu od opcija --</b-form-select-option>
            </template>
            </b-form-select>
            <div class="mt-3">Konacna cijena: <strong>{{ selected4 }}  Kn </strong></div>
        </b-card-body>
      </b-collapse>
    </b-card>

        <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-5 variant="info">Parking Bolnica</b-button>
      </b-card-header>
      <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>Cijena: {{form.bolnica}} Kn/h  <br> Radno vrijeme: <br> Pon-Pet: 08:00 - 20:00 <br> Sub: 09:00-21:00 <br> Ned: 11:00-21:00 </b-card-text>
          <b-card-text>Ovdje odaberite vrijeme provedeno na parkingu: </b-card-text>
            <b-form-select v-model="selected5" :options="options5">
            <template #first>
            <b-form-select-option :value="null">-- Molimo odaberite jednu od opcija --</b-form-select-option>
            </template>
            </b-form-select>
            <div class="mt-3">Konacna cijena: <strong>{{ selected5 }}  Kn </strong></div>
        </b-card-body>
      </b-collapse>
    </b-card>

    <hr>
     
        <div class="kalkulator">
           <strong>Ovdje se nalazi kalkulator za izračun cijene boravka ako ostajete dulje od jednoga dana</strong><br><br>
            <label for="quantity">Unesite broj dana:</label>
            <br>
            <input value="form.quantity" type="number" id="quantity" placeholder="Dani" max="365" />
            <button @click='updateQuantity'>Izračunaj</button>
            <br>
            <br>
            <p>Ukupna cijena: <strong> {{form.total}} Kn {{form.quantity}} </strong></p>
        </div>
    </div>

    <Footer></Footer>
</div>
</center>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

var dnevna = '';

var GivenDate = '2021-06-01';
var GivenDate2 = '2021-09-01';
var CurrentDate = new Date();
GivenDate = new Date(GivenDate);
GivenDate2 = new Date(GivenDate2);

var rojc ='';
var karolina ='';
var trznica ='';
var dobriceva ='';
var bolnica ='';

if (CurrentDate >= GivenDate && CurrentDate <= GivenDate2){
    console.log("Ljetno računanje cijena");
    rojc = 8;
    karolina = 10;
    trznica = 8;
    dobriceva = 9;
    bolnica = 8; 
    dnevna = 50;
}
  else if (CurrentDate >= GivenDate2 && CurrentDate <= GivenDate) {
    console.log("Zimsko računanje cijena");
    rojc = 6;
    karolina = 6;
    trznica = 7;
    dobriceva = 7;
    bolnica = 5; 
    dnevna = 40;
}
else ( alert("Greska u racunanju datuma.") )

  export default {
    components: {
      Navbar,
      Footer
    },
    data() {
      return {
        form: {
        quantity: null,
        total: null,
        rojc: rojc,
        karolina: karolina,
        trznica: trznica,
        dobriceva: dobriceva,
        bolnica: bolnica
      },
        selected: null,
        options: [
          { value: rojc, text: '1 sat' },
          { value: rojc*2, text: '2 sata' },
          { value: rojc*3, text: '3 sata' },
          { value: rojc*4, text: '4 sata' },
          { value: rojc*5, text: '5 sati' },
          { value: dnevna, text: 'više od 5 sati' },
        ],
        selected2: null,
        options2: [
          { value: karolina, text: '1 sat' },
          { value: karolina*2, text: '2 sata' },
          { value: karolina*3, text: '3 sata' },
          { value: karolina*4, text: '4 sata' },
          { value: karolina*5, text: '5 sati' },
          { value: dnevna, text: 'više od 5 sati' },
        ],
        selected3: null,
        options3: [
          { value: trznica, text: '1 sat' },
          { value: trznica*2, text: '2 sata' },
          { value: trznica*3, text: '3 sata' },
          { value: trznica*4, text: '4 sata' },
          { value: trznica*5, text: '5 sati' },
          { value: dnevna, text: 'više od 5 sati' },
        ],
        selected4: null,
        options4: [
          { value: dobriceva, text: '1 sat' },
          { value: dobriceva*2, text: '2 sata' },
          { value: dobriceva*3, text: '3 sata' },
          { value: dobriceva*4, text: '4 sata' },
          { value: dobriceva*5, text: '5 sati' },
          { value: dnevna, text: 'više od 5 sati' },
        ],
        selected5: null,
        options5: [
          { value: bolnica, text: '1 sat' },
          { value: bolnica*2, text: '2 sata' },
          { value: bolnica*3, text: '3 sata' },
          { value: bolnica*4, text: '4 sata' },
          { value: bolnica*5, text: '5 sati' },
          { value: dnevna, text: 'više od 5 sati' },
        ]
      }
    },
     methods: {
    updateQuantity: function() {
        var unos=document.getElementById("quantity").value
        if(unos>0) {
          if(unos==1 || unos>365) 
            {alert('Krivi unos, molimo Vas unesite broj između 2 i 365.')}
          else 
            { this.form.total = unos * dnevna}
        }
        else {{alert('Krivi unos, usesen je negativan broj ili 0')}}
  }
}
}
</script>

<style lang="scss">
.bgkalkus{
  background-color: white;
  color: black;
}
.top{
  background-color: #044ca4 !important;
  position: relative;
  overflow: hidden;
  color: white;
  width: 80%;
  padding-top: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  border-radius: 10px;
}

div.card.mb-1 {
  background-color: transparent;
  color: black;
  height: auto;
}

button.btn.btn-info.btn-block.collapsed{
  background-color: #044ca4;
  color: #fff;
  border-color: #044ca4;
}

button.btn.btn-info.btn-block.not-collapsed{
  background-color: #044ca4;
  color: #fff;
  border-color: #044ca4;
}

header.card-header.p-1{
  background-color: transparent;
}

.accordion{
  width:80%;
}
</style>