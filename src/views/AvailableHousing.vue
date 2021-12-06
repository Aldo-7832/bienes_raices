<template lang="es">
  <div>
    <h1 class="ms-5">Viviendas disponibles</h1>
    <hr class="line mx-5" >
    <TypeHousing />
     <ListHousing />
    <Footer/>
  </div>
</template>

<script>
import TypeHousing from "../components/housing/TypeHousing";
import ListHousing from "../components/housing/ListHousing";
import Footer from "../components/Footer";
export default {
  name: "AvailableHousing",
  components: {
    Footer, TypeHousing, ListHousing
  },
};
</script>

<style>
.line {
  border-width: 2px;
  border-style: solid;
  color: black;
}
</style>