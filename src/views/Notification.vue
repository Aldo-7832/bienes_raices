<template lang="es">
    <div>
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
