<template>
  <div class="fondo scroll-page" >
        <div class="container">
            <div class="text-center">
                <h1 class="card-title text-dark">Bienes Raices</h1>
                <hr>
                <h5>Explora y descubre tu proximo hogar</h5>
            </div>
            <div>
                <div class="card mb-3">
                    <img src="../assets/viviendasMenu2.jpg" class="card-img-top" alt="">
                    <div class="card-body">
                      <h5 class="card-title">Explora nuestro citio</h5>
                      <p class="card-text">Explora diferentes viviendas y contacta con los vendedores para descubrir tu nuevo hogar</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-12 mb-3">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-12 mt-3">
                          <div class="row">
                            <div class="col-sm-6 col-lg-4 mt-2">
                                <div class="card" style="width: 18rem;">
                                    <img src="../assets/casa.jpeg" class="card-img-top">
                                    <div class="card-body">
                                      <h5 class="card-title">Casas</h5>
                                      <a href="#" class="btn btn-primary">Visitar</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-4 mt-2">
                                <div class="card" style="width: 18rem;">
                                    <img src="../assets/departamento.jpg" class="card-img-top" alt="...">
                                    <div class="card-body">
                                      <h5 class="card-title">Departamentos</h5>
                                      <a href="#" class="btn btn-primary">Visitar</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-4 mt-2 mb-3">
                                <div class="card" style="width: 18rem;">
                                    <img src="../assets/condominio.jpg" class="card-img-top" alt="...">
                                    <div class="card-body">
                                      <h5 class="card-title">Condominios</h5>
                                      <a href="#" class="btn btn-primary">Visitar</a>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
    name:"Main",
    components:{
      Footer
    }
}
</script>

<style scoped>
  .fondo{
    background-image: url('../assets/portada.jpg');
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
  }

  hr{
    border: 5px solid #000000;
    color: #000000;
  }
 .scroll-page{
  width: 100%; 
  height: 600px; 
  line-height: 3em; 
  overflow:auto; 
 
}
</style>

vue