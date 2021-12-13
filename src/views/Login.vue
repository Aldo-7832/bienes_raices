<template>
  <div class="container w-60 mt-5 rounded shadow pb-2 py-2 py-lg-6 pt-lg-7" id="login">
        <div class="row align-items-stretch  mt-3 mb-3 ">
            <div class="col bg-image d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">
              <img src="../assets/loginImage.jpeg" width="750" alt="">
            </div>
            <div class="col bg-white p-5 rounded-end border border-1 border-dark">
                
                <h4 >Iniciar Sesión</h4>
                    <div class="mb-4 mt-5">
                        <label >Correo Electrónico</label>
                        <input required  type="text" class="form-control" name="usuario" placeholder="Correo Electrónico">
                        
                    </div>
                    <div class="mb-4">
                        <label>Contraseña</label>
                        <input required  type="password" class="form-control" name="password" placeholder="Contraseña">
                        
                    </div>
                   
                   <div class="row text-center">
                     <div class=" col-lg-12 text-center">
                        <button type="submit" class="btn btn-primary">Ingresar</button>
                    </div>
                   </div>
                    
                    <div class="my-3 text-center"><small><a href="">¿Olvidaste tu contraseña?</a></small></div>
                    <div class="my-3 text-center"><small><a href="">Registrate</a></small></div>
                
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: "Login"
}
</script>

<style scoped>
/* .scroll-page{
  width: 100%; 
  height: 650px; 
  line-height: 3em; 
  overflow:auto; 
 
} */
</style>