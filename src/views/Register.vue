<template lang="es">
  <div class="scroll-page">
    <h2 class="ms-5 mt-2">Registro</h2>
    <hr class="line mx-5" >
    <RegisterUser />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
import RegisterUser from "../components/user/RegisterUser";
export default {
  name: "Register",
  components: { Footer, RegisterUser },
  data() {
    return {};
  },
};
</script>

<style scoped>
.line {
  border-width: 2px;
  border-style: solid;
  color:black;
}
.scroll-page{
  width: 100%; 
  height: 600px; 
  line-height: 3em; 
  overflow:auto; 
 
}
</style>