<template>
  <div class="home-wrapper">
    <div class="home">
     
     
       <Carousel/>
      <Banner/>
      <Quote/>
      <Bestselling/>
     <CompetBanner /> 
    <Catim/>
    <Topbrands/>
   
      </div>
    </div>

   
    
  </template>
  
  <style scoped>
.home-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>

  <script>
  import Quote from "../components/Quote.vue"
  import Carousel from "../components/Carousel.vue"
  import Catim from "../components/Catim.vue"
  import Banner from "../components/Homebanner.vue"
  import Bestselling from "../components/Bestselling.vue"
  import Topbrands from "../components/Topbrands.vue"
  import CompetBanner from "../components/Competbanner.vue"
    
    
  export default {
  name:"Home", //name is the name of current page
  components:{
      Quote,//name of the imported component
     Carousel,
     Catim,
     Banner,
     Bestselling, //
     Topbrands, //
     CompetBanner,

    }
}
</script>