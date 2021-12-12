<template lang="es">
  <div>
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

</style>