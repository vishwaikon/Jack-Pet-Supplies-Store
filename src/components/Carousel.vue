<!-- <template>
   <div class="carousel">
    <div class="carousel-inner">
      <div v-for="(image, index) in images" :key="index" :class="`carousel-item ${index === activeIndex ? 'active' : ''}`">
        <img :src="image" alt="Carousel Image" class="w-full h-full object-cover">
      </div>
    </div>
    <div class="carousel-controls">
      <button class="carousel-control" @click="prevSlide">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-6 w-6">
          <path fill-rule="evenodd" d="M14.707 5.707a1 1 0 0 0-1.414-1.414L8 9.586V3a1 1 0 1 0-2 0v6.586L2.707 4.293A1 1 0 0 0 1.293 5.707l6 6a1 1 0 0 0 1.414 0l6-6z" clip-rule="evenodd" />
        </svg>
      </button>
      <button class="carousel-control" @click="nextSlide">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-6 w-6">
          <path fill-rule="evenodd" d="M5.293 14.707a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414l-6-6a1 1 0 1 0-1.414 1.414L12.586 10l-7.293 7.293a1 1 0 0 0 0 1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
import dog2 from '../assets/dog2.webp';
import dog1 from '../assets/dog1.webp';
import dog3 from '../assets/dog3.webp';
    export default {
        name: 'Carousel',
        data() {
    return {
      activeIndex: 0,
      images: [
        dog2,
        dog1,
        dog3,
        '../assets/dog1.webp',
        '../assets/dog2.webp',
        '../assets/dog3.webp',
        
      ]
    };
  },
  methods: {
    prevSlide() {
      this.activeIndex = (this.activeIndex === 0) ? this.images.length - 1 : this.activeIndex - 1;
    },
    nextSlide() {
      this.activeIndex = (this.activeIndex === this.images.length - 1) ? 0 : this.activeIndex + 1;
    },
    autoSlide() {
    setInterval(() => {
      this.nextSlide();
    }, 2000);
  },
  mounted() {
    this.autoSlide();
  },
  watch:{
    activeIndex(){
      this.autoSlide();
    }
  }

  }
};
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  height: 300px; 
}

.carousel-inner {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.carousel-item.active {
  opacity: 1;
}

.carousel-controls {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.carousel-control {
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.carousel-control:hover {
  background-color: rgba(0, 0, 0, 0.5);
}
</style> -->



<template>
  <div class="carousel m-3">
    <div class="carousel-inner">
      <div v-for="(image, index) in images" :key="index" :class="`carousel-item ${index === activeIndex ? 'active' : ''}`">
        <img :src="image" alt="Carousel Image" class="w-full h-full object-fit">
        <!-- "w-full h-full object-fit " -->
        <!-- class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" -->
       
      </div>
    </div>
    <div class="carousel-controls">
      <button class="carousel-control" @click="prevSlide">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-6 w-6">
          <path fill-rule="evenodd" d="M14.707 5.707a1 1 0 0 0-1.414-1.414L8 9.586V3a1 1 0 1 0-2 0v6.586L2.707 4.293A1 1 0 0 0 1.293 5.707l6 6a1 1 0 0 0 1.414 0l6-6z" clip-rule="evenodd" />
        </svg> -->
        <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
      </button>
      <button class="carousel-control" @click="nextSlide">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-6 w-6">
          <path fill-rule="evenodd" d="M5.293 14.707a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414l-6-6a1 1 0 1 0-1.414 1.414L12.586 10l-7.293 7.293a1 1 0 0 0 0 1.414z" clip-rule="evenodd" />
        </svg> -->
        <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
      </button>
    </div>
  </div>
</template>

<script>
// import dog2 from '../assets/carousel10.png';
// import cat1 from '../assets/carousel11.png';
// import cat3 from '../assets/carousel12.png';
import carou1 from '../assets/carou1.png';
import carou2 from '../assets/carou2.png';
import carou3 from '../assets/carou3.png';
import carou4 from '../assets/carou4.png';


export default {
  name: 'Carousel',
  
  data() {
    return {
      activeIndex: 0,
      images: [
        // dog2,
        // cat1,
        // cat3,
        // carou4,
        carou1,
        carou2,
        carou3,
        carou4,
        
        // '../assets/dog2.webp',
        // '../assets/cat1.webp',
        // '../assets/cat3.webp',
        // Add more images here
      ],
      intervalId: null
        };
  },
  
  methods: {
    prevSlide() {
      this.activeIndex = (this.activeIndex === 0) ? this.images.length - 1 : this.activeIndex - 1;
    },
    
    nextSlide() {
      this.activeIndex = (this.activeIndex === this.images.length - 1) ? 0 : this.activeIndex + 1;
    },
    
    autoSlide() {
      clearInterval(this.intervalId); // Clear any existing interval
  this.intervalId = setInterval(() => {
    this.nextSlide();
  }, 4500);
    }
    
  },
  
  mounted() {
    this.autoSlide();
  },
  
  watch: {
    activeIndex() {
      this.autoSlide();
    }
  }

};
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  height: 300px; /* Adjust the height as needed */
  /* max-width: 100%;  */
 
}

.carousel-inner {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.carousel-item.active {
  opacity: 1;
}

.carousel-controls {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.carousel-control {
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.carousel-control:hover {
   background-color: rgba(0, 0, 0, .5);
}

@media (min-width: 640px) {
  /* Small screens and above */
  .carousel {
    height: 300px;
  }
}

@media (min-width: 768px) {
  /* Medium screens and above */
  .carousel {
    height: 300px;
  }
}

@media (min-width: 1024px) {
  /* Large screens and above */
  .carousel {
    height: 400px;
  }
}
</style>
