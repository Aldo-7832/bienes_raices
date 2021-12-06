<template lang="es">
  <div>
    <h1 class="ms-5">Registro</h1>
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

<style >
.line {
  border-width: 2px;
  border-style: solid;
  color:black;
}
</style>