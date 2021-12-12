<template>
  <div class="container">
    <h5 class="card-title mt-3">Verificar Datos del Cliente</h5>
    <hr/>
    <div class="mb-4 mt-4">
      <div class="card">
        <div class="card-header">
          <label class="title">Datos de Usuarios</label>
        </div>
        <div class="card-body">
          <form class="row g-3 needs-validation" novalidate>
            <div class="row g-2">
              <div class="col-md-4">
                <label for="nombreEmpresa">Nombre(s)</label>
                <input
                  required
                  type="text"
                  class="form-control mt-1"
                  id="rfc"
                  placeholder="Nombre(s)"
                  minlength="13"
                  maxlength="13"
                  autocomplete="off"
                />
                <div class="d-none text-danger" id="alert">
                  <i class="fa fa-info-circle"></i>
                  {{ alert }}
                </div>
                <div class="invalid-feedback">Este es un campo obligatorio</div>
              </div>
              <div class="col-md-8">
                <label for="nombreEmpresa">Primer Apellido</label>
                <input
                  required
                  type="text"
                  class="form-control mt-1"
                  id="rfc"
                  placeholder="Primer Apellido"
                  minlength="13"
                  maxlength="13"
                  autocomplete="off"
                />
                <div class="d-none text-danger" id="alert">
                  <i class="fa fa-info-circle"></i>
                  {{ alert }}
                </div>
                <div class="invalid-feedback">Este es un campo obligatorio</div>
              </div>
            </div>
            <div class="row g-2">
              <div class="col-md-4">
                <label for="nombreEmpresa">Segundo Apellido</label>
                <input
                  required
                  type="text"
                  class="form-control mt-1"
                  id="rfc"
                  placeholder="Segundo Apellido"
                  minlength="13"
                  maxlength="13"
                  autocomplete="off"
                />
                <div class="d-none text-danger" id="alert">
                  <i class="fa fa-info-circle"></i>
                  {{ alert }}
                </div>
                <div class="invalid-feedback">Este es un campo obligatorio</div>
              </div>
              <div class="col-md-8">
                <label for="nombreEmpresa">Correo Electrónico</label>
                <input
                  required
                  type="text"
                  class="form-control mt-1"
                  id="rfc"
                  placeholder="Correo Electrónico"
                  minlength="13"
                  maxlength="13"
                  autocomplete="off"
                />
                <div class="d-none text-danger" id="alert">
                  <i class="fa fa-info-circle"></i>
                  {{ alert }}
                </div>
                <div class="invalid-feedback">Este es un campo obligatorio</div>
              </div>
            </div>
            <div class="row g-2">
              <div class="col-md-4">
                <label for="nombreEmpresa">Contraseña</label>
                <input
                  required
                  type="text"
                  class="form-control mt-1"
                  id="rfc"
                  placeholder="Contraseña"
                  minlength="13"
                  maxlength="13"
                  autocomplete="off"
                />
                <div class="d-none text-danger" id="alert">
                  <i class="fa fa-info-circle"></i>
                  {{ alert }}
                </div>
                <div class="invalid-feedback">Este es un campo obligatorio</div>
              </div>
              <div class="col-md-8">
                <label for="nombreEmpresa">Confirmar Contraseña</label>
                <input
                  required
                  type="text"
                  class="form-control mt-1"
                  id="rfc"
                  placeholder="Confirmar Contraseña"
                  minlength="13"
                  maxlength="13"
                  autocomplete="off"
                />
                <div class="d-none text-danger" id="alert">
                  <i class="fa fa-info-circle"></i>
                  {{ alert }}
                </div>
                <div class="invalid-feedback">Este es un campo obligatorio</div>
              </div>
            </div>
          </form>
        </div>
        <div class="card-footer d-flex justify-content-end">
          <div class="ms-2">
            <a ng-click="ctrlCompany.cleanObjectCancel()">
              <button class="btn btn-secondary" data-bs-dismiss="modal">
                <i class="fas fa-times"></i>
                <span class="d-sm-none d-md-none d-lg-inline d-xl-inline">Cancelar</span>
              </button>
            </a>
          </div>
          <div class="ms-2">
            <button type="submit" v-on:click="validar()" id="form" class="btn btn-primary">
              <i class="fas fa-check"></i>
              <span class="d-sm-none d-md-none d-lg-inline d-xl-inline">Confirmar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VerifyData",
  data(){
    return{
      
    }
  },
  methods:{
    validar(){
      
    }
  }

}
</script>

<style scoped>
hr.rounded {
  border-top: 8px solid #000000;
  border-radius: 5px;
}
</style>