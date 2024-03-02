<!-- <template>
    
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white shadow-lg rounded-lg px-8 py-10 max-w-sm">
      <h2 class="text-center text-2xl font-bold mb-6">Register</h2>
      <p><router-link to="/login">Have account ?
        Sign in</router-link></p>
      <form @submit.prevent="signUp">
        <div class="mb-4">
          <label for="userName" class="block font-semibold mb-2">User Name</label>
          <input
            type="text"
            class="w-full border border-gray-300 rounded py-2 px-3"
            required v-model="username"
            placeholder="Enter user name"
            >
            </div>
            <div class="mb-4">
          <label for="email" class="block font-semibold mb-2">Email</label>
          <input
            type="email"
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
          Sign Up
        </button>
      </form>
    </div>
  </div>
</template> -->



<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-blue-200 shadow-lg rounded-lg px-8 py-10 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
      <h2 class="text-center text-2xl font-bold mb-6">Register</h2>
      <p>
        <router-link to="/login" class="block text-center mb-4 text-sm sm:text-base md:text-lg lg:text-xl">Have an account? Sign in</router-link>
      </p>
      <form @submit.prevent="signUp">
        <div class="mb-4">
          <label for="userName" class="block font-semibold mb-2">User Name</label>
          <input
            type="text"
            class="w-full border border-gray-300 rounded py-2 px-3"
            required v-model="username"
            placeholder="Enter user name"
          >
        </div>
        <div class="mb-4">
          <label for="email" class="block font-semibold mb-2">Email</label>
          <input
            type="email"
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
          Sign Up
        </button>
      </form>
    </div>
  </div>
</template>































<!-- <script>
  export default {
    
    data() {
        return {
                     
                    email: null,
                    password: null,
                    uname: null,
                    // errors: null
                };
            },
 };
</script> -->


<script>
 
 import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js";
 
  import { createUserWithEmailAndPassword , updateProfile} from 'firebase/auth'
  import { auth } from '../firebase/init'
  
  export default {
    // emits:['loggedIn'],
    data() {
      return {
        username: '',
        email:    '',
        password: ''
      }
    },
    methods: {
    
    signUp() {
      // register and login user
      createUserWithEmailAndPassword(auth,this.email,this.password)
      .then(() => {

        // update 'displayName'
        updateProfile(auth.currentUser, {
          displayName: this.username
        })
        .then(() => {
          console.log(auth.currentUser.displayName);
          alert("Sign up successful");
          this.$router.push('/coupon');
        })

      })
      .catch((error) => {
      console.log(error.message);
      alert(error.message);
    });
    }
  }
  }
  </script>
