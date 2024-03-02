<template>
  <div class="rescue-wrapper">
    <div class="rescue">
     <Sherlock/>
     <SherlockBanner/>
      <!-- <Quote1/> -->
      <Dogquote/>
      
      <Donator/>
      <Adopt/>
      
    </div>
  </div>
  

  </template>

<style scoped>
.rescue-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>


<script>
// import Quote1 from "../components/Quote1.vue"
import Donator from "../components/Donator.vue"
import Sherlock from "../components/Sherlock.vue"
import SherlockBanner from "../components/Sherlockbanner.vue"
import Adopt from "../components/Adopt.vue"
import Dogquote from "../components/Dogquote.vue"

export default {
name:"Rescue", //name is the name of current page
components:{
    // Quote1//name of the imported component
    Dogquote,
    Donator,
    Sherlock,
    Adopt,
    // Dogquote,
    SherlockBanner //name of
  }
}
</script>