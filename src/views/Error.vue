<template>

<div>
<div class="scroll-page">

    <div class="row text-center mt-5">
      <div class="col-lg-12 ">
        <b-icon icon="building" font-scale="7.5"></b-icon>
      </div>
    </div>

  
</div>
  <Footer/> 
 
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  props: {
  },
  name: "Error",
  components:{
    Footer
  }
}
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