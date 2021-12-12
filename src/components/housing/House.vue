<template lang="es">
<div class="accordion" id="collapse">
  <div class="accordion-item border border-dark border-end-0 border-start-0 border-bottom-0">
    <h2 class="accordion-header" id="headingOne">
      <button
        class="accordion-button bg-white"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        Casas
      </button>
    </h2>
    <div
      id="collapseOne"
      class="accordion-collapse collapse show"
      aria-labelledby="headingOne"
      data-bs-parent="#accordion"
    >
      <div class="accordion-body">
        <div class="row mb-0 mx-2">
          <div class="col-md-2 col-sm-2 border border-dark text-center mb-3">
            <img src="../../assets/houseIcon.png" alt="casa2" width="80%" />
          </div>
          <div class="col-md-9 col-sm-9">
            <h5 class="mb-3">
              Casa con cuartos disponibles para estudiantes, amueblada con
              internet
            </h5>
            <p>$3,500 al mes</p>
            <p>Sin IVA</p>
          </div>
          <div class="col-md-1 col-sm-1 d-flex justify-content-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              class="feather feather-shopping-cart"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </div>
        </div>
        <hr class="line" />
        <div class="row mb-3 mx-2">
          <div class="col-md-2 col-sm-2 border border-dark text-center mb-3">
            <img src="../../assets/houseIcon.png" alt="casa" width="80%" />
          </div>
          <div class="col-md-9 col-sm-9">
            <h5 class="mb-3">
              Casa cerca de la playa, vista al mar, amueblada y con servicios
            </h5>
            <p>$5,000 al mes</p>
            <p>IVA incluido</p>
          </div>
          <div class="col-md-1 col-sm-1 d-flex justify-content-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              class="feather feather-shopping-cart"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {name:"House",};
</script>
<style></style>
