<template lang="es">
  <div class="row mx-5 text-center">
    <div class="col-md-4 col-sm-12">
      <a class="text-decoration-none text-dark" data-bs-toggle="collapse" href="#collapse" role="button" aria-expanded="true" aria-controls="collapse"> 
        <img src="../../assets/casa.jpeg" alt="casa" class="img-fluid"> 
        <div class="bg-primary p-2 border border-dark">
          <h4>Casas</h4>
        </div>
      </a>
    </div>
    <div class="col-md-4 col-sm-12">
      <a class="text-decoration-none text-dark" data-bs-toggle="collapse" href="#collapse2" role="button" aria-expanded="false" aria-controls="collapse"> 
        <img src="../../assets/departamento.jpg" alt="departamento" class="img-fluid"> 
        <div class="bg-primary pad border border-dark">
          <h4>Departamentos</h4>
        </div>
      </a>
    </div>
    <div class="col-md-4 col-sm-12">
      <a class="text-decoration-none text-dark" data-bs-toggle="collapse" href="#collapse3" role="button" aria-expanded="false" aria-controls="collapse"> 
        <img src="../../assets/condominio.jpg" alt="condominio" class="img-fluid"> 
        <div class="bg-primary pad border border-dark">
          <h4>Condominios</h4>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TypeHousing",
};
</script>

<style>
.pad {
  padding: 10px;
}
</style>
