<!-- <template>
    <nav class="navbar bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl mx-auto">
        <div class="flex flex-wrap items-center justify-between p-4">
          <span class="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">Jack Pet Supplies</span>
          <div class="flex md:order-2">
           
            <router-link to="/login">
              <button v-if="!isLoggedIn" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
            </router-link>
            <button v-if="isLoggedIn" type="button" class="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-lg px-4 py-2 text-center md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" @click="logout">Logout</button>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              :aria-expanded="isDropdownOpen ? 'true' : 'false'"
              @click="toggleDropdown"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
  
        <ul
          v-if="isDropdownOpen"
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <router-link
              to="/"
              class="block py-2 pl-3 pr-4 text-white bg-blue-700 text-xl rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              aria-current="page"
            >Home</router-link>
          </li>
          <li>
            <router-link
              to="/products"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded text-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >Products</router-link>
          </li>
          <li v-if="isLoggedIn">
            <router-link
              to="/coupon"
              class="block py-2 pl-3 pr-4 text-gray-900 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >Coupon</router-link>
          </li>
          <li>
            <router-link
              to="/rescue"
              class="block py-2 pl-3 pr-4 text-gray-900 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >Rescue</router-link>
          </li>
          <li>
            <router-link
              to="/about"
              class="block py-2 pl-3 pr-4 text-gray-900 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >About</router-link>
          </li>
          <li>
            <div class="welcome-message" v-if="isLoggedIn">
              <h5>Welcome {{ displayName }}!</h5>
            </div>
          </li>
          <li>
            <router-link to="/register">
              <button v-if="!isLoggedIn" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Register</button>
            </router-link>
            
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  import { signOut, onAuthStateChanged } from 'firebase/auth';
  import { auth } from '../firebase/init';
  
  export default {
    name: 'Testnav',
    data() {
      return {
        isLoggedIn: false,
        displayName: '',
        isDropdownOpen: false,
      };
    },
    created() {
      
      onAuthStateChanged(auth, (user) => {
        this.isLoggedIn = user !== null;
  
        
        if (this.isLoggedIn) {
          this.displayName = user.displayName;
        }
      });
    },
    methods: {
      logout() {
        signOut(auth)
          .then(() => {
            alert('Successfully logged out');
            this.$router.push('/');
          })
          .catch((error) => {
            console.log(error.message);
            alert('Error logging out');
          });
      },
      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
      },
    },
  };
  </script>
  
   -->

   <template>
    <nav class="navbar bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 mx-0">
        <span class="self-center sm: text-3xl lg:text-4xl md:text-4xl font-semibold whitespace-nowrap dark:text-white">Jack Pet Supplies</span>
       
        <!-- <div class="flex md:order-2"> -->
          
         
         
          <button
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
            @click="toggleMobileMenu"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        <!-- </div> -->

      
  
        <div
          class="items-center justify-between w-full md:flex md:w-auto md:order-1"
          :class="{ hidden: !mobileMenuOpen }"
          id="navbar-cta"
        >
          <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            @click.away="closeMobileMenu"
          >
            <li>
              <router-link
                to="/"
                class="block py-2 pl-3 pr-4 text-white bg-blue-700 text-xl rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link
                to="/products"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded text-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Products
              </router-link>
            </li>
            <li v-if="isLoggedIn">
              <router-link
                to="/coupon"
                class="block py-2 pl-3 pr-4 text-gray-900 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Coupon
              </router-link>
            </li>
            <li>
              <router-link
                to="/rescue"
                class="block py-2 pl-3 pr-4 text-gray-900 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Rescue
              </router-link>
            </li>
            <li>
              <router-link
                to="/about"
                class="block py-2 pl-3 pr-4 text-gray-900 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </router-link>
            </li>
            <li>
              <div class="welcome-message" v-if="isLoggedIn">
                <p class="text-xl  ">Welcome {{ displayName }}!</p>
              </div>
            </li>

<div class="flex md:order-2">
            <li>
                <router-link to="/register">
                <button
            v-if="!isLoggedIn"
            type="button"
            class="text-white bg-blue-700 m-1 hover:bg-blue-800  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Signup
          </button>
        </router-link>
            </li>
            <li>
                <router-link to="/login">
                <button
            v-if="!isLoggedIn"
            type="button"
            class="text-white bg-blue-700 m-1 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign in
          </button>
        </router-link>
            </li>
            <li>
                <button
            v-if="isLoggedIn"
            type="button"
            class="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-md px-4 py-2 text-center md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            @click="logout"
          >
            Logout
          </button>
            </li>
            </div>
           
         
          </ul>
         
        </div>

        
      </div>
    </nav>
  </template>
  
  <script>
  import { signOut, onAuthStateChanged } from 'firebase/auth';
  import { auth } from '../firebase/init';
import { RouterLink } from 'vue-router';
  
  export default {
    name: "Navigation",
    data() {
        return {
            isLoggedIn: false,
            displayName: "",
            mobileMenuOpen: false,
        };
    },
    created() {
        onAuthStateChanged(auth, (user) => {
            this.isLoggedIn = user !== null;
            if (this.isLoggedIn) {
                this.displayName = user.displayName;
            }
        });
    },
    methods: {
        logout() {
            signOut(auth)
                .then(() => {
                alert("Successfully logged out");
                this.$router.push("/");
            })
                .catch((error) => {
                console.log(error.message);
                alert("Error logging out");
            });
        },
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },
        closeMobileMenu() {
            this.mobileMenuOpen = false;
        },
    },
    components: { RouterLink }
};
  </script>
  