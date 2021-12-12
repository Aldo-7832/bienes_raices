<template>
  <div class="scroll-page">
 <h1>UserProfile</h1>


<div>
  <footer>
<Footer/>
  </footer>
   
</div>
</div>



</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  name: "UserProfile",
  components: { Footer },
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