<template lang="es">
<div class="scroll-page">
  <div class="mx-5">
    <h1>Obtén beneficios según tu nivel</h1>
    <hr class="line" >
    <div class="row text-center d-flex justify-content-center">
      <div class="cardInit col-md-3 col-sm-6">
        <div class=" border bg-secondary border-secondary card my-3 bg-opacity-50">
          <h3 class="p-3 pb-5">Free</h3>
          <p>Fecha de caducidad: 10 días</p>
          <p>Propiedades: 10</p>
          <p>Listas destacadas: 5</p>
          <div class="card bg-white mb-3">
            <p class="fs-1 p-3">$129</p>
          </div>
        </div>
      </div>
      <div class="cardInit col-md-3 col-sm-6">
        <div class=" border border-secondary card  my-3">
          <h3 class="p-3 pb-5">Standard</h3>
          <p>Fecha de caducidad: 3 meses</p>
          <p>Propiedades: 20</p>
          <p>Listas destacadas: 10</p>
          <div class="card bg-secondary bg-opacity-50 mb-3">
            <p class="fs-1 p-3">$159</p>
          </div>
        </div>
      </div>
      <div class="cardInit col-md-3 col-sm-6">
        <div class=" border bg-secondary border-secondary card  my-3 bg-opacity-50">
          <h3 class="p-3 pb-5">Premium</h3>
          <p>Fecha de caducidad: 1 año</p>
          <p>Propiedades: 100</p>
          <p>Listas destacadas: 50</p>
          <div class="card bg-white mb-3">
            <p class="fs-1 p-3">$179</p>
          </div>
          </div>
      </div>
      <div class="cardInit col-md-3 col-sm-6">
        <div class="border border-secondary card  my-3">
          <h3 class="p-3 pb-5">Gold</h3> <p>Fecha de caducidad: 2 años</p>
          <p>Propiedades: Ilimitado</p>
          <p>Listas destacadas: 50</p>
          <div class="card bg-secondary bg-opacity-50 mb-3">
            <p class="fs-1 p-3">$199</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</div>
</template>

<script>
import Footer from "../components/Footer";

export default {
  name: "Pricing",
  components: { Footer },
};
</script>

<style scoped>
.line {
  border-width: 2px;
  border-style: solid;
  color: black;
}
.card {
  border-radius: 25px;
  margin: 20px;
}
.cardInit {
  padding: 5px;
}

.scroll-page{
  width: 100%; 
  height: 600px; 
  line-height: 3em; 
  overflow:auto; 
 
}
</style>
