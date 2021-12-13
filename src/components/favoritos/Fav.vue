<template>
  <div class="mx-5">
    <br>
    <h2 class="card-title mt-3">Favoritos</h2>
    <hr/>
    <br />
    <table class="table table-sm">
      <tbody>
        <tr>
          <td><img class="mediana" src="../../assets/depa.png" alt="" /></td>
          <td>
            <h3>Departamento de 3 habitaciones, <br> 1 baño, cocina y sala</h3>
            $6,300 <br>
            IVA incluido
          </td>
          <td><br><br>Color: Space gray <br> Stock disponible</td>
          <td><br><br><a type="button" v-b-modal.modal-center><img class="pequeña" src="../../assets/favs.png" alt="" /></a></td>
          <td><br><br><button type="button" v-b-modal.modal-agenda class="btn btn-primary"><b-icon icon="menu-up" variant="light"></b-icon> Agendar cita</button></td>
        </tr>
        
        <tr>
          <td><img class="mediana" src="../../assets/cama.png" alt="" /></td>
          <td><h3>Cuarto disponible para estudiantes,<br> amueblada con internet</h3>
            $3,500 por persona
          </td>
          <td><br> Color: Space gray <br> Stock disponible</td>
          <td><br><a type="button" v-b-modal.modal-center><img class="pequeña" src="../../assets/favs.png" alt="" /></a></td>
          <td><br><button type="button" v-b-modal.modal-agenda class="btn btn-primary"><b-icon icon="menu-up" variant="light"></b-icon> Agendar cita</button></td>
        </tr>
        
        <tr>
          <td><img class="mediana" src="../../assets/casa.png" alt="" /></td>
          <td><h3>Casa cerca de la playa, vista al mar,<br> amueblada</h3>
            $5,000 al mes <br>
            IVA incluido</td>
          <td><br>Color: Space gray <br> Stock disponible</td>
          <td><br><a type="button" v-b-modal.modal-center><img class="pequeña" src="../../assets/favs.png" alt="" /></a></td>
          <td><br><button type="button" v-b-modal.modal-agenda class="btn btn-primary"><b-icon icon="menu-up" variant="light"></b-icon> Agendar cita</button></td>
        </tr>
      </tbody>
    </table>
    <div class="justify-content-center">
      <b-modal id="modal-center" centered>
        <h4 class="text-center">¡Hola! Para agregar a favoritos, ingresa a tu cuenta</h4>
        <p class="text-center"><a href="/register"><button type="button" class="btn btn-primary">Soy nuevo</button></a></p>
        <p class="text-center"><a href="/login">Ya tengo una cuenta</a></p>
        <br><br><br><br>
      </b-modal>
    </div>
    <div class="justify-content-center">
      <b-modal id="modal-agenda" centered>
        <h4 class="text-center">¡Hola! Para agendar una cita, ingresa a tu cuenta</h4>
        <p class="text-center"><a href="/login"><button type="button" class="btn btn-primary">Soy nuevo</button></a></p>
        <p class="text-center"><a href="/chat">Ya tengo una cuenta</a></p>
        <br><br><br><br>
      </b-modal>
    </div>
  </div>
</template>

<style>
img.mediana {
  width: 100px;
  height: 100px;
}
img.pequeña{
  width: 50px;
  height: 50px;
}
hr {
  border-top: 8px solid #000000;
  border-radius: 5px;
}
</style>