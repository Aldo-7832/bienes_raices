<template >
  <div class="scroll-page" >
    <h1 class="ms-5">Viviendas disponibles</h1>
    <hr class="line mx-5" >
    <TypeHousing />
    <ListHousing />
    <div class="bottom-navbar">
    <div class="card-footer">
      <div class="row">
        <div class="col-lg-4 d-flex">
          <p class="text-light">&copy; Derechos Reservados 2021</p>
        </div>
        <div class="col-lg-8 text-end">
          
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import TypeHousing from "../components/housing/TypeHousing";
import ListHousing from "../components/housing/ListHousing";
// import Footer from "../components/Footer";
export default {
  name: "AvailableHousing",
  components: {
    // Footer,
    TypeHousing,
    ListHousing,
  },
};
</script>

<style>
.line {
  border-width: 2px;
  border-style: solid;
  color: black;
}
html {
	overflow: hidden;
}

.bottom-navbar {
  position:absolute;
  width: 100%;
  background-color: black;
  bottom: 0%;
}

.scroll-page{
  width: 100%; 
  height: 600px; 
  line-height: 3em; 
  overflow:auto; 
 
}

</style>
