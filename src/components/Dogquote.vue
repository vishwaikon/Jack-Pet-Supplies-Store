<template>
    <div class="quote">
    <div class="bg-blue-200 flex flex-col items-center justify-center h-auto m-3">
        
     
      <p class="sm:text-base md:text-xl font-bold mt-4 text-center font-serif overflow-wrap break-word">"{{ quote }}"</p>
      <p class="overflow-wrap break-word">- {{ author }}</p>
    </div>
    </div>
  </template>
  <style scoped>
  .quote {
    min-height: 100px; 
    
    
  }
  </style>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      quote: '',
      author: '',
    };
  },
  mounted() {
    this.fetchRandomQuote();
  },
  methods: {
    fetchRandomQuote() {
      axios.get('https://vishwaikon.github.io/Dogquotes/quotes.json')
        .then(response => {
          const quotes = response.data.quotes;
          const randomIndex = Math.floor(Math.random() * quotes.length);
          this.quote = quotes[randomIndex].text;
          this.author = quotes[randomIndex].author;
        })
        .catch(error => {
          console.error('Error fetching quotes:', error);
        });
    },
  },
};
</script>
