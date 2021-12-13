<template>
  <div >

    <div class="scroll-page">
    <h1>Perfil de Usuario</h1>
    <hr />
    <div class="row mt-5 ms-5">
      <div class="col-lg-12 text-center mb-5">
        <b-icon class="p-1" icon="person-square" font-scale="7.5"></b-icon>
      </div>
      <div class="col-lg-12 text-cneter">
        <h4>Datos de Usuario</h4>
      </div>
      <div class="col-lg-4"><label class="form-label">Nombre(s): Aldo Francisco </label></div>
      <div class="col-lg-4"><label class="form-label">Primer Apellido: Hernández</label></div>
      <div class="col-lg-4"><label class="form-label">Segundo Apellido: Ortiz</label></div>
      <div class="col-lg-12"><label class="form-label">Correo electrónico: Aldo Francisco </label></div>
    </div>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "UserProfile",
  components: { Footer },
};
</script>

<style scoped>
.scroll-page {
  width: 100%;
  height: 600px;
  line-height: 3em;
  overflow: auto;
}
</style>
