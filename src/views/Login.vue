<template>
   
   

    
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-blue-200 shadow-lg rounded-lg px-8 py-10 max-w-sm">
      <!-- <h2 class="justify-centr text-2xl font-bold mb-6">Signin</h2> -->
      <h2 class="text-center text-2xl font-bold mb-6">Sign in</h2>


      <p><router-link to="/register"  class="block text-center mb-4 text-sm sm:text-base md:text-lg lg:text-xl">No account ?
        Register</router-link></p>
      <form @submit.prevent="login" class="max-w-sm mx-auto" v-if="!isLoggedIn">
        <div class="mb-4">
          <label for="email" class="block font-semibold mb-2">Email</label>
          <input
            type="text"
            class="w-full border border-gray-300 rounded py-2 px-3"
            required v-model="email"
            placeholder="Enter your email"
            >
        </div>
        <div class="mb-6">
          <label for="password" class="block font-semibold mb-2">Password</label>
          <input
            type="password"
            id="password"
            required v-model="password"
            class="w-full border border-gray-300 rounded py-2 px-3"
            placeholder="Enter your password"
            >
        
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
        >
          Sign in
        </button>
      </form>
      <div v-else>
      
      <router-link to="/">Go to Home</router-link>
    </div>
    </div>
  </div>
  


</template>
<!-- <script>
  export default {
    
    data() {
        return {
                     email: null,
                    password: null,
                };
            },
 };
</script> -->

<script>
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/init';

export default {
  data() {
    return {
      email: '',
      password: '',
      isLoggedIn: false
    };
  },
  created() {
    // Listen for authentication state changes
    onAuthStateChanged(auth, (user) => {
      this.isLoggedIn = user !== null;
    });
  },
  methods: {
    login() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.$router.push('/');
          console.log('Successfully logged in');
          alert("Successfully logged in");
        })
        .catch((error) => {
          console.log(error.message);
          alert(error.message);
        });
    }
  },
  beforeRouteEnter(to, from, next) {
    // Redirect to home if already logged in
    onAuthStateChanged(auth, (user) => {
      if (user) {
        next('/');
      } else {
        next();
      }
    });
  }
}
</script>








