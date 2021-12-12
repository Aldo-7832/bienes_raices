<template lang="es">
  <div>
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
  name: "RegisterHousing",
  components: {RegisterForm, Footer},
};
</script>

<style>
.line {
  border-width: 2px;
  border-style: solid;
  color: black;
}
</style>
