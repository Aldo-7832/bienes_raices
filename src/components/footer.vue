<template>
 <div class="bottom-navbar">
    <div class="card-footer">
      <div class="row">
        <div class="col-lg-4 ">
          <p class="text-light ms-5">&copy; Derechos Reservados 2021</p>
        </div>
        <div class="col-lg-8 text-end">
          <b-icon icon="facebook"  class="p-1 me-5" variant="light" font-scale="2"></b-icon>
          <b-icon icon="twitter"   class="p-1 me-5" variant="light" font-scale="2"></b-icon>
          <b-icon icon="linkedin"  class="p-1 me-5" variant="light" font-scale="2"></b-icon>
          <b-icon icon="instagram" class="p-1 me-5" variant="light" font-scale="2"></b-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>


.bottom-navbar {
  position: fixed;
  width: 100%;
  background-color: #417C9C;
}
.bottom-navbar {
  bottom: 0;
}


</style>