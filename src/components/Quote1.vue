
   <template>
    <div class="quote">
    <div class="bg-blue-200 flex flex-col items-center justify-center h-auto m-3">
        <!--min-h-screen-->
      <!-- <h1 class="text-2xl font-bold mb-4">Help us have a hope on life</h1> -->
     
      <p class="sm:text-sm md:text-lg font-bold mt-4 text-center font-serif overflow-wrap break-word">"{{ quote }}"</p>
      <p class="overflow-wrap break-word">- {{ author }}</p>
    </div>
    </div>
  </template>
  
  
  
  
  

<script>
import axios from 'axios';

export default {
  data() {
    return {
      quote: '',
      author: '',
    };
  },
  methods: {
    getRandomQuote() {
      axios
        .get('https://api.api-ninjas.com/v1/quotes', {
          headers: {
            'X-Api-Key': 'RnhooT7Vc4WMbxk8W5T9ow==WXMaDYNb6yjMI4ew',
          },
          params: {
            category: 'faith',
          },
        })
        .then(response => {
          const randomQuote = response.data[0];
          this.quote = randomQuote.quote;
          this.author = randomQuote.author;
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
  mounted() {
    this.getRandomQuote();
  },
};
</script>
<style scoped>
.quote {
  min-height: 100px; 
  
  
}
</style>


  
 
  