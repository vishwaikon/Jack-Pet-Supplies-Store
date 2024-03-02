<!-- <template>

<div class="flex flex-col min-h-screen">
    <div class="flex-grow">
    
    </div>

    <footer class="bg-blue-200 rounded-lg shadow dark:bg-gray-900 m-3">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">

            
            
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-lg font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/" class="mr-4 hover:underline md:mr-6 ">Home</a>
              

            </li>
            <li>
              <a href="/products" class="mr-4 hover:underline md:mr-6">Products</a>
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
</template> -->


<!-- <template>
  <div class="footer-wrapper">
    

    <footer class="bg-blue-200 rounded-lg shadow dark:bg-gray-900 m-3 mt-auto">
     
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a href="/" class="flex items-center mb-4 sm:mb-0">
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-md font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/" class="mr-4 hover:underline md:mr-6 ">Home</a>
            </li>
            <li>
              <a href="/products" class="mr-4 hover:underline md:mr-6">Products</a>
            </li>
            <li>
              <a href="/rescue" class="mr-4 hover:underline md:mr-6 ">Rescue</a>
            </li>
            <li>
              <a href="/about" class="hover:underline">About us</a>
            </li>
            <li v-if="isLoggedIn">
              <a href="/coupon" class="mr-4 hover:underline md:mr-6">Coupon</a>
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>



<script>

  
export default{
    name: "Footer", 
    
    };
</script>
  -->



  

  <template>
    <div class="footer-wrapper">
      <!-- Your page content goes here -->
  
      <footer class="bg-blue-200 rounded-lg shadow dark:bg-gray-900 m-3 mt-auto">
        <!-- Footer content -->
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a href="/" class="flex items-center mb-4 sm:mb-0">
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-md font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="/" class="mr-4 hover:underline md:mr-6 ">Home</a>
              </li>
              <li>
                <a href="/products" class="mr-4 hover:underline md:mr-6">Products</a>
              </li>
              <li>
                <a href="/rescue" class="mr-4 hover:underline md:mr-6 ">Rescue</a>
              </li>
              <li>
                <a href="/about" class="hover:underline">About us</a>
                
              </li>
              <li v-if="isLoggedIn">
                <a href="/coupon" class="mr-4 hover:underline md:mr-6">Coupon</a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" class="hover:underline">Jack Pet Supplies™</a>. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  import { onAuthStateChanged } from 'firebase/auth';
  import { auth } from '../firebase/init';
  
  export default {
    name: "Footer",
    data() {
      return {
        isLoggedIn: false
      };
    },
    created() {
    onAuthStateChanged(auth, (user) => {
      this.isLoggedIn = user !== null;
      if (!this.isLoggedIn) {
        alert("Please log in to access the coupon");
      }
    });
  }
};
  
  </script>
  
  <style scoped>
  .footer-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  </style>
  
  




















