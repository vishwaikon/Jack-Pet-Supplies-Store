<!-- <template>
    <div class="home-banner">
      <div class="banner">
       <img src="../assets/carou.png" class="w-full h-full">
  
        </div>
      </div>
  
      
    </template>
    
    <script>
    import carou from '../assets/carou.png';
    export default{
    name: "CompetBanner", // name of the compo 
    // components: {
    };

</script>

<style scoped>

    @media (min-width: 640px) {
  /* Small screens and above */
  .banner {
    height: 100px;
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
</style> -->

<template>
    <div class="home-banner">
      <div class="banner">
        <img src="../assets/competition.png" class="w-full h-full m-3">
      </div>
    </div>
  </template>
  
  <script>
  import carou from '../assets/carou.png';
  
  export default {
    name: "CompetBanner",
  };
  </script>
  
  <style scoped>
  .home-banner {
    height: auto; /* Adjust the height as per your requirement */
  }
  
  .banner {
    max-width: 100%;
  }
  .banner-image {
  width: 100%;
  height: auto;
}

  
   @media (min-width: 640px) {
    
    .banner {
      height: 50px;
    }
  }
  
  @media (min-width: 768px) {
    
    .banner {
      height: 300px;
    }
  }
  
  @media (min-width: 1024px) {
    
    .banner {
      height: 300px;
    }
  } 
  </style>