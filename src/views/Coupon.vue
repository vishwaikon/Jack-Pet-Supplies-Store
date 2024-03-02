<!-- <template>
    <h1> This is coupon page</h1>
    <div class="coupon bg-cover bg-center">
      <img src="../assets/coupon1.png"  height="1000vh">

      </div>
     
 </template> -->



 
 <template>
 
  <div class="coupon bg-cover bg-center">
    <img src="../assets/coupon1.png" class="w-full h-full  md:w-auto md:h-auto lg:w-auto lg:h-auto sm:h-auto" alt="Coupon" />
   
  </div>
</template> 

<style scoped>
.coupon img {
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit:fill;
}
</style>

<script>
  import { onAuthStateChanged } from 'firebase/auth';
  import { auth } from '../firebase/init';
  
  export default {
    name: 'Coupon',
    beforeRouteEnter(to, from, next) {
      // Check if the user is logged in before entering the route
      onAuthStateChanged(auth, (user) => {
        if (user) {
          next(); // User is logged in, allow access to the coupon page
        } else {
          next('/login');
           // User is not logged in, redirect to the login page
        }
      });
    },
  };
  </script>