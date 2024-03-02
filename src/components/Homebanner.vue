<template>
    <div class="home-banner m-3">
      <div class="banner">
       <img src="../assets/signupbanner (2).png" class="w-full h-full">
  
        </div>
      </div>
  
      
    </template>
    
    <script>
    import signupban from '../assets/signupbanner (2).png';
    export default{
    name: "Banner", // name of the compo 
    // components: {
    };

</script>

<style scoped>

    @media (min-width: 640px) {
  /* Small screens and above */
  .banner {
    height: 200px;
  }
}

@media (min-width: 768px) {
  /* Medium screens and above */
  .banner {
    height: 300px;
  }
}

@media (min-width: 1024px) {
  /* Large screens and above */
  .banner {
    height: 300px;
  }
}
.banner {


  max-width: 100%;
  
}
</style>