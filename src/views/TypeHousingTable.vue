<template>
  <div class=" scroll-page">
    <div class="container">
 <h5 class="card-title mt-3">Listado de Viviendas</h5>
        <hr/>
        <div class="mb-4 mt-4">
          <div class="card">
            <div class="card-header">
                <label class="title">Opción 1</label>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-lg-12 mx-auto">
                  <table
                    class="table table-hover table table-striped table-collapse mt-3 mytable table-responsive" id="housing">
                    <thead class="table-dark">
                      <tr>
                        <th>#</th>
                        <th>Folio</th>
                        <th>Propietario</th>
                        <th>Tipo de Vivienda</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>0001</td>
                        <td>Uriel Guerrero</td>
                        <td>Casa</td>
                        <td class="text-end">
                          <div class="col-lg-12 mb-3 text-end">
                            <button type="button" class="btn btn-dark">Detalles</button>
                            <button type="button" class="btn btn-primary">Editar</button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>0002</td>
                        <td>Aldo Hernández</td>
                        <td>Departamento</td>
                        <td class="text-end">
                          <div class="col-lg-12 mb-3 text-end">
                            <button type="button" class="btn btn-dark">Detalles</button>
                            <button type="button" class="btn btn-primary">Editar</button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>0003</td>
                        <td>Esmeralda Lara</td>
                        <td>Departamento</td>
                        <td class="text-end">
                          <div class="col-lg-12 mb-3 text-end">
                            <button type="button" class="btn btn-dark">Detalles</button>
                            <button type="button" class="btn btn-primary">Editar</button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>0004</td>
                        <td>Ulises Islas</td>
                        <td>Casa</td>
                        <td class="text-end">
                          <div class="col-lg-12 mb-3 text-end">
                            <button type="button" class="btn btn-dark">Detalles</button>
                            <button type="button" class="btn btn-primary">Editar</button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="card-footer"></div>
          </div>
        </div>
        <div class="mb-4 mt-4">
            <div class="card">
              <div class="card-header">
                <div>
                    <h5 class="title">Opción 2</h5>
                </div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-12 mx-auto">
                    <table
                      class="table table-hover table table-striped table-collapse mt-3 mytable table-responsive" id="housing">
                      <thead class="table-warning">
                        <tr>
                          <th>#</th>
                          <th>Folio</th>
                          <th>Propietario</th>
                          <th>Tipo de Vivienda</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>0001</td>
                          <td>Uriel Guerrero</td>
                          <td>Casa</td>
                          <td class="text-end">
                            <div class="col-lg-12 mb-3 text-end">
                              <button type="button" class="btn btn-dark">Detalles</button>
                              <button type="button" class="btn btn-primary">Editar</button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>0002</td>
                          <td>Aldo Hernández</td>
                          <td>Departamento</td>
                          <td class="text-end">
                            <div class="col-lg-12 mb-3 text-end">
                              <button type="button" class="btn btn-dark">Detalles</button>
                              <button type="button" class="btn btn-primary">Editar</button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>0003</td>
                          <td>Esmeralda Lara</td>
                          <td>Departamento</td>
                          <td class="text-end">
                            <div class="col-lg-12 mb-3 text-end">
                              <button type="button" class="btn btn-dark">Detalles</button>
                              <button type="button" class="btn btn-primary">Editar</button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>0004</td>
                          <td>Ulises Islas</td>
                          <td>Casa</td>
                          <td class="text-end">
                            <div class="col-lg-12 mb-3 text-end">
                              <button type="button" class="btn btn-dark">Detalles</button>
                              <button type="button" class="btn btn-primary">Editar</button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="card-footer"></div>
            </div>
          </div>
    </div>
       
          <Footer/>
      </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  name: "TypeHousingTable",
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
 
}
</style>