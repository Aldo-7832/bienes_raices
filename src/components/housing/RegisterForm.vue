<template>
  <div class="mx-5">
    <div class="row">
      <div class="col-lg-4">
        <label for="input-live3">Tipo de vivienda:</label>
        <b-select
          :options="options"
          class="form-select"
          id="input-live3"
          v-model="select1"
          :state="Select1"
        >
        </b-select>
        <b-form-invalid-feedback id="input-live-feedback">
          Selecciona un tipo de vivienda
        </b-form-invalid-feedback>
      </div>
      <div class="col-lg-4">
        <div role="group">
          <label for="input-live">Nombre del dueño:</label>
          <b-form-input
            id="input-live"
            v-model="nameHou"
            :state="NameHou"
            aria-describedby="input-live-help input-live-feedback"
            placeholder="Nombre del dueño"
            trim
          ></b-form-input>

          <b-form-invalid-feedback id="input-live-feedback">
            Ingresar minímo 3 caracteres
          </b-form-invalid-feedback>
        </div>
      </div>

      <div class="col-lg-4">
        <div role="group">
          <label for="input-live">Precio:</label>
          <b-form-input
            id="input-live"
            v-model="price"
            :state="Price"
            aria-describedby="input-live-help input-live-feedback"
            placeholder="Precio"
            trim
            type="number"
          ></b-form-input>

          <b-form-invalid-feedback id="input-live-feedback">
            Ingresar un número mayor a 0
          </b-form-invalid-feedback>
        </div>
      </div>
    </div>

    <!-- <div class="row">
      <div class="col-lg-4">
          <input class="form-control" type="file" value="" id="prueba"
          :state="Boolean"/>
                 <b-form-invalid-feedback id="input-live-feedback">
          Selecciona un tipo de vivienda
        </b-form-invalid-feedback>
      </div>
    </div> -->
  

  <div class="row">
 <div class="col-lg-12 text-end">
  <button type="button" class="btn btn-primary">Registrar</button>
    </div>
  </div>
   

  
  </div>
</template>
<script>
export default {
  name: "RegisterForm",
  methods: {
    // register() {
    //   this.$router.push("/detailsHousing");
    // },
  },
  computed: {
    Price() {
      return this.price > 0 ? true : false;
    },
    NameHou() {
      return this.nameHou.length > 2 ? true : false;
    },
    Boolean() {
      return document.getElementById("prueba").value !== null ? true : false;
    },
    Select1() {
      return this.select1 !== null ? true : false;
    },
  },
  data() {
    return {
      price: null,
      selected: null,
      nameHou: "",
      file1: null,
      select1: null,
      options: [
        { value: null, text: "SELECCIONA UN TIPO DE VIVIENDA..." },
        { value: "a", text: "Casa" },
        { value: "b", text: "Departamento" },
        { value: "d", text: "Condomonio   " },
      ],
    };
  },
};
</script>
<style></style>
