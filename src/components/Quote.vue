<!-- <template>
    <div>
      <h2>{{ quote.text }}</h2>
      <p>- {{ quote.author }}</p>
      <button @click="getRandomQuote">Give me a Tip</button>
    </div>
  </template> -->

  <!-- <template>
    <div class="tips">
    <div class="flex flex-col items-center justify-center h-screen bg-blue-200 h-auto ">
      <h2 class="text-2x font-bold text-black">"{{ quote.text }}"</h2>
      <p class="mt-2">- {{ quote.author }}</p>
      <button class="mt-8 px-2 py-1 text-white rounded-full bg-blue-500 rounded hover:bg-blue-700" @click="getRandomQuote">Get Random Tip</button>
    </div>
    </div>
  </template> -->

  <template>
    <div class="bg-blue-200 m-3">
      <div class="h-auto">
        <div class="tips flex flex-col items-center justify-center h-40">
          <h2 class="sm:text-xl md:text-2xl font-bold text-black">"{{ quote.text }}"</h2>
          <!-- <p class="mt-2">- {{ quote.author }}</p> -->
          <button class="mt-8 px-2 py-1 text-white rounded-full bg-blue-500 rounded hover:bg-blue-700" @click="getRandomQuote">Get Random Tip</button>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>

  
  .tips {
    position: relative;
    z-index: 1;
  }
  
  </style>
  
  
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        quote: {}
      };
    },
    methods: {
      getRandomQuote() {
        axios.get('http://localhost:3000/quotes')
          .then(response => {
            const quotes = response.data;
            const randomIndex = Math.floor(Math.random() * quotes.length);
            this.quote = quotes[randomIndex];
          })
          .catch(error => {
            console.error(error);
          });
      }
    },
    mounted() {
      this.getRandomQuote();
    }
  };
  </script>

  