<template>
 
  <!-- <Navigation  v-if="!isLoginPage"/> -->
  <Testnav v-if="!isLoginPage"/>
  
  
  <!-- <Quote/> -->
  
  <!-- <router-link to="/">Home</router-link> | 
   <router-link to="/products">Products</router-link> | 
   <router-link to="/rescue">Rescue</router-link> | 
   <router-link to="/about">About</router-link> |  -->


   <router-view></router-view>
   

   <div  class="footer-wrapper">
    

    <footer class="bg-blue-200 rounded-lg shadow dark:bg-gray-900 m-3 ">
     
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a href="" class="flex items-center mb-4 sm:mb-0">
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-base font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/" class="mr-4 hover:underline md:mr-6 ">Home</a>
            </li>
            <li>
              <a href="/products" class="mr-4 hover:underline md:mr-6">Products</a>
            </li>
            <li v-if="isLoggedIn">
                <a href="/coupon" class="mr-4 hover:underline md:mr-6">Coupon</a>
              </li>
            <li>
              <a href="/rescue" class="mr-4 hover:underline md:mr-6 ">Rescue</a>
            </li>
            <li>
              <a href="/about" class="hover:underline">About us</a>
            </li>
           
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" class="hover:underline">Jack Pet Supplies™</a>. All Rights Reserved.</span>
      </div>
    </footer>
  </div>
   
  
  
   
  
</template>
<style scoped>
.footer-wrapper {
  min-height: calc(100vh -100px);
  display: flex;
  flex-direction: column;
}
</style>

<!-- <script>
import Navigation from "./components/Navigation.vue"
import Testnav from "./components/Testnav.vue"


export default {
  name:"App", 
  components:{
      Navigation,
      Testnav,
      
    
     
  },
      computed: {
    isLoginPage() {
     
      return this.$route.name === "Login"|| this.$route.name === "Register"; 
    }
    


    }
}
</script> -->


<script>
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/init';

import Navigation from "./components/Navigation.vue";
import Testnav from "./components/Testnav.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Testnav,
  },
  computed: {
    isLoginPage() {
      return this.$route.name === "Login" || this.$route.name === "Register"; 
    },
    isCouponPage() {
      return this.$route.name === "Coupon";
    }

  },
  data() {
    return {
      isLoggedIn: false
    };
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      this.isLoggedIn = user !== null;
      
    });
  }
};
</script>
