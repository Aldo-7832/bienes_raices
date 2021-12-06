<template lang="es">
    <div class="mx-5 mt-3 mb-0">
        <div class="mb-5">
            <hr class="line">
            <svg class="float-end" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
        </div>
        <div class="row mb-0">
            <div class="col-2  border border-dark text-center">
                <img src="../../assets/houseIcon.png" alt="casa" width="50%"> 
            </div>
            <div class="col-9">
                <h5>Casa con cuartos disponibles para estudiantes, amueblada con internet</h5>
                <p>$3,500 al mes</p>
                <p>Sin IVA</p>
            </div>
            <div class="col-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="feather feather-shopping-cart">
                    <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
            </div>
        </div>
        <hr class="line">
        <div class="row">
            <div class="col-2 border border-dark text-center">
                <img src="../../assets/houseIcon.png" alt="casa2" width="50%"> 
            </div>
            <div class="col-9">
                <h5>Casa cerca de la playa, vista al mar amueblada</h5>
                <p>$5,000 al mes</p>
                <p>IVA incluido</p>
            </div>
            <div class="col-1">
                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="feather feather-shopping-cart">
                    <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "ListHousing",
};
</script>

<style>
.line {
  border-width: 1px;
  border-style: solid;
  color: black;
}
</style>