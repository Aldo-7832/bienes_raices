<template>
  <div class="scroll-page">
    <div
      class="container w-50 mt-5 rounded shadow pb-2 py-2 py-lg-6 pt-lg-7"
      id="login"
    >
      <div class="row">
        <div class="col bg-white p-5">
          <h2 class="mt-2 text-center">Wizard</h2>

          <div class="row bg-primary">
            <div class="col-lg-4">
              <button class="btn btn-primary" @click="personalInformationh">Información personal</button>
            </div>
            <div class="col-lg-4 text-center">
              <button class="btn btn-primary" @click="maccount">Cuenta</button>
            </div>
            <div class="col-lg-4 text-end">
              <button class="btn btn-primary" @click="maddress">Dirección</button>
            </div>
          </div>

          <div class="row" v-show="personalInformation">
            
             <div class="col-lg-12 text-center mb-5 mt-3">
        <b-icon class="p-1" icon="person-square" font-scale="7.5"></b-icon>
      </div>

      <div class="col-lg-4">
        <label class="form-label">Nombre(s) </label>
        <input  class="form-control" placeholder="Nombre(s)"/>
      </div>
      
      <div class="col-lg-4">
        <label class="form-label">Primer Apellido </label>
        <input  class="form-control" placeholder="Primer Apellido"/>
      </div>
      
      <div class="col-lg-4">
        <label class="form-label">Segundo Apellido </label>
        <input  class="form-control" placeholder="Segundo Apellido"/>
      </div>

      <div class="col-lg-12 text-end mt-5">
         <button class="btn btn-primary" @click="maccount">Siguiente</button>
      </div>


          </div>

          <div class="row" v-show="acountt">
            <div class="col-lg-12">
 <label class="form-label">Correo Electrónico </label>
        <input  class="form-control" placeholder="Correo Electrónico"/>
            </div>
            <div class="col-lg-6">
<label class="form-label">Contraseña </label>
        <input  class="form-control" placeholder="Contraseña" type="password"/>
            </div>
            <div class="col-lg-6">
<label class="form-label">Confirmar Contraseña </label>
        <input  class="form-control" placeholder="Confirmar Contraseña" type="password"/>
            </div>
              <div class="col-lg-12 text-end mt-5">
         <button class="btn btn-primary" @click="maddress">Siguiente</button>
      </div>

            </div>


            
          <div class="row" v-show="address">
            <div class="col-lg-6">
 <label class="form-label">Entidad Federativa </label>
        <input  class="form-control" placeholder="Correo Electrónico"/>
            </div>
            <div class="col-lg-6">
<label class="form-label">Estado </label>
        <input  class="form-control" placeholder="Estado" />
            </div>
              <div class="col-lg-6">
<label class="form-label">Tipo de vialidad </label>
        <input  class="form-control" placeholder="Tipo de vialidad" />
            </div>
            <div class="col-lg-6">
<label class="form-label">Asentamiento </label>
        <input  class="form-control" placeholder="Asentamiento" />
            </div>
                     <div class="col-lg-12">
<label class="form-label">Dirección </label>
        <input  class="form-control" placeholder="Dirección"/>
            </div>
              <div class="col-lg-12 text-end mt-5">
         <button class="btn btn-primary" >Siguiente</button>
      </div>

            </div>
          
     
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  methods: {
    personalInformationh(){
        this.personalInformation =  true
        this.acountt = false
        this.address = false
    },
    maccount(){
        this.personalInformation =  false
        this.acountt = true
        this.address = false
    },
     maddress(){
        this.personalInformation =  false
        this.acountt = false
        this.address = true
    }
  },
  data () {
    return {
      personalInformation:true,
      acountt: false,
      address:false


    }
  },
  name: "Wizard",
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
