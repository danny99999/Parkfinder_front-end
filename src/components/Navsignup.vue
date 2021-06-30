<template>
<div>
    <b-navbar toggleable="lg" type="dark" class="stil">
    <img src=@/assets/P.png id="navbarP">
    <b-navbar-brand href="/">Park Finder</b-navbar-brand>
  
    

    <b-collapse id="nav-collapse" is-nav>
      
      <!-- Desna strana navbara -->
      <b-navbar-nav class="ml-auto">
        <hr>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: "Navsignup",  
};

</script>

<style scoped>

#navbarP{
  height: 50px;
  padding-right:20px
}

.stil{
  background-color:#044ca4 !important;
}

hr {
  clear: both;
  display: block;
  width: 100%;               
  background-color: white;
  height: 1px;
}
.Item-1 {
  padding-right:0 ;
  
  
}
.Item-2 {
  padding-right:0 ;
  
}
.ml-auto {
  padding-right: 5%;
}

h2 {
    color: aliceblue;
}

</style>