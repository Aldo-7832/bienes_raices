<template>
  <div class="container">
    <div class="mb-4 mt-4">
      <h5 class="card-title">Listado de Viviendas</h5>
      <hr />
      <div class="card">
        <div class="card-header"></div>
        <div class="card-body">
          <div class="row">
            <div class="col-lg-12 mx-auto">
              <table
                class="table table-hover table-collapse mt-3 mytable table-responsive" id="housing">
                <thead>
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
                        <td><button type="button" class="btn btn-dark">Detalles</button></td>
                        <td><button type="button" class="btn btn-primary">Editar</button></td>
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
                        <td><button type="button" class="btn btn-dark">Detalles</button></td>
                        <td><button type="button" class="btn btn-primary">Editar</button></td>
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
                        <td><button type="button" class="btn btn-dark">Detalles</button></td>
                        <td><button type="button" class="btn btn-primary">Editar</button></td>
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
                        <td><button type="button" class="btn btn-dark">Detalles</button></td>
                        <td><button type="button" class="btn btn-primary">Editar</button></td>
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
</template>

<script>
export default {
  name: "TypeHousingTable"
}
</script>

<style scoped>
</style>