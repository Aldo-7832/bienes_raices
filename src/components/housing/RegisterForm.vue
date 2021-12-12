<template lang="es">
    <div class="mx-5">
        <form class="row g-3 needs-validation" validate>
            <div class="row">
                <div class="col-md-4 col-xl-4 mt-4">
                    <label for="type" class="form-label">Tipo de vivienda</label>  
                    <select id="type" class="form-select" required>
                        <option value="0" selected disabled>Seleccione una opción...</option>
                        <option value="1">Casa</option>
                        <option value="2">Departamento</option>
                        <option value="3">Condominio</option>
                    </select>
                </div>
                <div class="col-md-4 mt-4 ">
                    <label for="price" class="form-label">Precio</label>  
                    <input id="price" type="number" class="form-control" 
                    min="0" placeholder="Precio" required>
                </div>
                <div class="col-md-4 mt-4">
                    <label for="name" class="form-label">Nombre del dueño</label>  
                    <input id="name" type="text" class="form-control" 
                    value="" placeholder="Nombre del dueño" required>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-4 mt-4">  
                    <input id="img" type="file" class="form-control">
                </div>
            </div>
            <div class="d-flex justify-content-end my-4">
                <button type="button" v-on:click="register" class="btn btn-primary">Registrar</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
  name: "RegisterForm",
  methods: {
    register() {
      this.$router.push("/detailsHousing");
    },
  },
};
</script>
<style lang=""></style>
