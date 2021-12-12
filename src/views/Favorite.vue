<template lang="es">
  <div class="scroll-page">
      <Fav />
      <Footer />
    </div>
</template>

<script>
import Footer from "../components/Footer";
import Fav from "../components/favoritos/Fav"
export default {
  name: "Favorite",
  components: { Footer, Fav },
  data (){},
}
</script>

<style scoped>
.scroll-page{
  width: 100%; 
  height: 600px; 
  line-height: 3em; 
  overflow:auto; 
 
}
</style>