<template lang="es">
  <div class="scroll-page">
    <h1 class="ms-5">Registrar Vivienda</h1>
    <hr class="line mx-5" >
    <RegisterForm />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
import RegisterForm from "../components/housing/RegisterForm";
export default {
  methods: {
 

  },
  name: "RegisterHousing",
  components: {RegisterForm, Footer},
  
};
</script>

<style scoped>
.line {
  border-width: 2px;
  border-style: solid;
  color: black;
}
.scroll-page{
  width: 100%; 
  height: 650px; 
  line-height: 3em; 
  overflow:auto; 
 
}
</style>
