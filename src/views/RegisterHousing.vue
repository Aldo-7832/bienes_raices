<template lang="es">
    <div>
        <h1 class="ms-5">Registrar Vivienda</h1>
        <hr class="line mx-5" >
        <RegisterForm />
    </div>
</template>
<script>
import RegisterForm from "../components/housing/RegisterForm";
export default {
  name: "RegisterHousing",
  components: [RegisterForm],
};
</script>

<style>
.line {
  border-width: 2px;
  border-style: solid;
  color: black;
}
</style>
