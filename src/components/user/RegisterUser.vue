<template lang="es">
    <div class="mx-5">
        <div class="text-center">
            <img src="../../assets/user.png" alt="user" height="150">
        </div>
        <div class="row mt-4">
            <div class="col-4">
                <label class="form-label">Nombre(s)</label>  
                <input type="text" class="form-control" placeholder="Nombre(s)" required>
            </div>
            <div class="col-4">
                <label class="form-label">Primer apellido</label>  
                <input type="text" class="form-control" placeholder="Primer apellido" required>
            </div>
            <div class="col-4">
                <label class="form-label">Segundo apellido</label>  
                <input type="text" class="form-control" placeholder="Segundo apellido" required>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-4">
                <label class="form-label">Correo electrónico</label>  
                <input type="text" class="form-control"placeholder="Correo electrónico" required>
            </div>
            <div class="col-4">
                <label class="form-label">Contraseña</label>  
                <input type="password" class="form-control" placeholder="Contraseña" required>
            </div>
            <div class="col-4">
                <label class="form-label">Confirmación de contraseña</label>  
                <input type="password" class="form-control" placeholder="Contraseña" required>
            </div>
        </div>
        <div class="d-flex justify-content-end mt-4">
            <button type="submit" class="btn btn-primary">Registrar</button>
        </div>
    </div>
</template>

<script>
export default {
  name: "RegisterUser",
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>