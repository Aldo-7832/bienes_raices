<template>
  <div id="app">
    <b-navbar toggleable="lg" class="back">
      <b-navbar-brand href="/dashMain">
        <span class="d-sm-none d-md-none d-lg-inline d-xl-inline">
          <img src="./assets/logo.png" style="margin-left :15px" alt="logo" class="wImage" />
        </span>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!--<b-navbar-nav class="fw-bold">
        <b-nav-item href="#">Inicio</b-nav-item>
        <b-nav-item href="#">Viviendas</b-nav-item>
        <b-nav-item href="#">Comprar Viviendas</b-nav-item>
        <b-nav-item href="#">Carritos de Compras</b-nav-item>
        <b-nav-item href="#">Notificaciones</b-nav-item>
        <b-nav-item href="#">Usuario</b-nav-item>

      </b-navbar-nav>-->

        <b-navbar-nav class="ml-auto fw-bold">
          <b-nav-item-dropdown text="Viviendas" right>
            <b-dropdown-item :to="{ name: 'TypeHousingTable' }">
              Listado de Viviendas
            </b-dropdown-item>

            <b-dropdown-item :to="{ name: 'RegisterHousing' }">
              Registro de Vivienda
            </b-dropdown-item >
            
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto fw-bold">
          <b-nav-item-dropdown text="Comprar Viviendas" right>
            <b-dropdown-item :to="{ name: 'TypeHousing' }">Tipos de viviendas</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'AvailableHousing' }">Viviendas Disponibles</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'DetailsHousing' }">Detalle Vivienda</b-dropdown-item>
            
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto fw-bold">
          <b-nav-item-dropdown text="Favoritos" right>
            <b-dropdown-item :to="{ name: 'Favorite' }">Favoritos</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'DetailsHousing' }">Detalle del Producto</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'VerifyData' }"
              >Verificar Datos del Cliente</b-dropdown-item
            >
            <b-dropdown-item :to="{ name: 'Schedule' }">Agendar</b-dropdown-item>
            
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto fw-bold">
          <b-nav-item-dropdown text="Notificaciones" right>
            <b-dropdown-item :to="{ name: 'Notification' }">Notificaciones</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'Mailbox' }">Bandeja de Correo</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'Chat' }"
              >Chat</b-dropdown-item
            >
            
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto fw-bold">
          <b-nav-item-dropdown text="Iniciar Sesión" right>
            <b-dropdown-item :to="{ name: 'Pricing' }">Pricing</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'Register' }">Registro</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'Login' }">Iniciar Sesión</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'UserProfile' }">Perfil de Usuario</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'Wizard' }">Wizard</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>




<style scoped>
.back {
  background-color: #f1ba39;
}

.wImage {
  width: 4rem;
}
html {
  overflow: hidden;
}
</style>



