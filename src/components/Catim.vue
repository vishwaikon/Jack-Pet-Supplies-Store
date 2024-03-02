<template>
    <div class="image-container m-3">
      <div class="background-image"></div>
      <div v-if="isLoading" class="spinner"></div>
      <div v-else class="cat-image-container">
        <img :src="catImageUrl" class="cat-image" alt="Random Cat" />
      </div>
    </div>
  </template>
  
  <script>
  import banner from '../assets/catogenic.png';
  
  export default {
    name: 'Catim',
    data() {
      return {
        catImageUrl: '',
        isLoading: true
      };
    },
    created() {
      this.fetchCatImage();
    },
    methods: {
      fetchCatImage() {
        fetch('https://api.thecatapi.com/v1/images/search')
          .then(response => response.json())
          .then(data => {
            this.catImageUrl = data[0].url;
            this.isLoading = false;
          })
          .catch(error => {
            console.error('Error fetching cat image:', error);
            this.isLoading = false;
          });
      }
    }
  };
  </script>
  
  <style scoped>
  .image-container {
    position: relative;
    height: 100%;
  }
  
  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: url(../assets/catogenic.png); /* Replace with desired background image path */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  
  .spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    animation: spin 1s linear infinite;
  }
  
  .cat-image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  
  .cat-image {
    width: 300px; /* Replace with your desired width */
    height: 200px; /* Replace with your desired height */
    object-fit: contain;
    margin: 20px;
  }
  </style>
  