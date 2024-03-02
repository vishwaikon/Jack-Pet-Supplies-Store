<template>
    <div class="home-banner">
      <div class="banner m-3">
        <img src="../assets/sherlockbanner.png" class="w-full h-full object-fill">
      </div>
    </div>
  </template>
  
  <script>
  import carou from '../assets/carou.png';
  
  export default {
    name: "SherlockBanner",
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