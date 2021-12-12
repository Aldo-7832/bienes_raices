<template lang="es">
<div class="mx-5 mt-3">
  <House />
  <Department  />
  <Condominium  />
</div>
</template>

<script>
import Department from "./Department";
import House from "./House";
import Condominium from "./Condominium";
export default {
  name: "ListHousing",
  components: { House, Department, Condominium },
};
</script>

<style>
.line {
  border-width: 1px;
  border-style: solid;
  color: black;
}
</style>
