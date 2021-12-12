<template lang="es">
    <div class="scroll-page">
      <Notificar />
      <Footer />
    </div>
</template>

<script>
import Footer from "../components/Footer";
import Notificar from "../components/notificaciones/Notificar"
export default {
  name: "Notification",
  components: { Footer, Notificar },
  data (){},
};
</script>

<style scoped>
/* .scroll-page{
  width: 100%; 
  height: 600px; 
  line-height: 3em; 
  overflow:auto; 
 
} */
</style>
