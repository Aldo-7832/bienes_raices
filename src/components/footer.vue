<template>
  <footer class="text-center text-white bottom-navar" style="background-color: #417c9c">
    <!-- Grid container -->
    <div class="container pt-4">
      <!-- Section: Social media -->
      <section class="mb-4">
        <div class="row">
          <div class="col-6" style="text-align: left">
            <span class="me-3">© Derechos Reservados 2021</span>
          </div>
          <div class="col-6" style="text-align: right">
            <!-- Facebook -->
            <a
              class="btn btn-link btn-floating btn-lg text-white m-1"
              role="button"
              data-mdb-ripple-color="white"
              ><i class="fa fa-facebook-f"></i
            ></a>
            <!-- Twitter -->
            <a
              class="btn btn-link btn-floating btn-lg text-white m-1"
              role="button"
              data-mdb-ripple-color="white"
              ><i class="fa fa-twitter"></i
            ></a>
            <!-- whats -->
            <a
              class="btn btn-link btn-floating btn-lg text-white m-1"
              role="button"
              data-mdb-ripple-color="white"
              ><i class="fa fa-whatsapp"></i
            ></a>
            <!-- Instagram -->
            <a
              class="btn btn-link btn-floating btn-lg text-white m-1"
              role="button"
              data-mdb-ripple-color="white"
              ><i class="fa fa-instagram"></i
            ></a>
          </div>
        </div>
      </section>
      <!-- Section: Social media -->
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer",
};
</script>

<style>
footer {
  background-color: black;
  position:absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  color: white;
}
.top-navbar,
.bottom-navbar {
  position: fixed;
  width: 100%;
}
.bottom-navbar {
  bottom: 0;
}
</style>