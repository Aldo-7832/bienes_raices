<template lang="es">
    <div class="mx-5">
        <div class="text-center">
            <img src="../../assets/user.png" alt="user" height="150">
        </div>
        <form class="row g-3 needs-validation" validate>
            <div class="row mt-4">
                <div class="col-4">
                    <label for="name" class="form-label">Nombre(s)</label>  
                    <input id="name" type="text" class="form-control" 
                    value="" placeholder="Nombre(s)" required>
                </div>
                <div class="col-4">
                    <label for="lastName" class="form-label">Primer apellido</label>  
                    <input id="lastName" type="text" class="form-control" 
                    value="" placeholder="Primer apellido" required>
                </div>
                <div class="col-4">
                    <label for="lastSecondName" class="form-label">Segundo apellido</label>  
                    <input id="lastSecondName" type="text" class="form-control" 
                    value="" placeholder="Segundo apellido">
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-4">
                    <label for="email" class="form-label">Correo electrónico</label>  
                    <input id="email" type="text" class="form-control" 
                    value="" placeholder="Correo electrónico" required>
                </div>
                <div class="col-4">
                    <label for="password" class="form-label">Contraseña</label>  
                    <input id="password" type="password" class="form-control" 
                    value="" placeholder="Contraseña" required>
                </div>
                <div class="col-4">
                    <label for="passwordConfirmation" class="form-label">Confirmación de contraseña</label>  
                    <input id="passwordConfirmation" type="password" class="form-control" 
                    value="" placeholder="Contraseña" required>
                </div>
            </div>
            <div class="d-flex justify-content-end mt-4">
                <button type="button" v-on:click="register" class="btn btn-primary">Registrar</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  name: "RegisterUser",
  methods: {
    register() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped></style>
