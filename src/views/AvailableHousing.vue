<template >
  <div class="scroll-page" >
    <h2 class="ms-5 mt-2">Viviendas disponibles</h2>
    <hr class="line mx-5" >
    <TypeHousing />
    <ListHousing />
  

  <Footer/>
  </div>
</template>

<script>
import TypeHousing from "../components/housing/TypeHousing";
import ListHousing from "../components/housing/ListHousing";
import Footer from "../components/Footer";
export default {
  name: "AvailableHousing",
  components: {
    Footer,
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




.scroll-page{
  width: 100%; 
  height: 600px; 
  line-height: 3em; 
  overflow:auto; 
 
}

</style>
