<template>
  <div class=" scroll-page" >
    <div class="container">
<h2 class="ms-5 mt-2">Listado de Viviendas</h2>
        <hr/>
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
                        <div class="col-sm-6 col-lg-4 mt-2">
                            <div class="card" style="width: 18rem;">
                                <img src="../assets/condominio.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                  <h5 class="card-title">Condominios</h5>
                                  <a href="#" class="btn btn-primary">Visitar</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 mt-2">
                            <div class="card" style="width: 18rem;">
                                <img src="../assets/mansion.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                  <h5 class="card-title">Mansiones</h5>
                                  <a href="#" class="btn btn-primary">Visitar</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 mt-2">
                            <div class="card" style="width: 18rem;">
                                <img src="../assets/vecindades.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                  <h5 class="card-title">Vecindades</h5>
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
       <Footer/>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  name: "TypeHousing",
  components:{
    Footer
  }
}
</script>

<style scoped>
  hr {
    border-top: 8px solid #000000;
    border-radius: 5px;
  }
.scroll-page{
  width: 100%; 
  height: 600px; 
  line-height: 3em; 
  overflow:auto; 
  margin:5px;
 
}
</style>