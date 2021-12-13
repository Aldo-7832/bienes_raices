<template>
  <div>
    <div class="scroll-page">
      <div class="row text-center mt-5 pt-5">
        <div class="col-lg-4">
         
        </div>
        <div class="col-lg-4">
           <b-card title="ERROR 404" class="mb-2 border border-5 border-dark">
            <b-card-text>
              <b-icon icon="building" font-scale="7.5"></b-icon>
              <h4>Página no encontrada</h4>
            </b-card-text>

          
          </b-card>
        </div>
        <div class="col-lg-4"></div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  props: {},
  name: "Error",
  components: {
    Footer,
  },
};
</script>

<style scoped>
.scroll-page {
  width: 100%;
  height: 800px;
  line-height: 3em;
  overflow: auto;
}

html {
  overflow: hidden;
}
</style>
