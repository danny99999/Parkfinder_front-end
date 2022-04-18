<template>
  <div id="kartica">
    <center>
    <b-card tag="article" style="max-width: 30rem" class="mb-2">
        <b-card-title>{{info.naslov_obavijesti}}</b-card-title>
        <br>
        <p>{{info.tekst_obavijesti}}</p>
        <p>Datum obavijesti: <b><br> {{info.datum_obavijesti}} </b></p>
      </b-card>
    </center>
  </div>
</template>
<script>

export default {
  props: ["info"],
  name: "Obavijest"
};
</script>

<style scoped>

#kartica{
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
  background-color: #044ca4;
  color: white;
  -webkit-text-stroke-width: 0.15px;
  -webkit-text-stroke-color: #000;
}

</style>