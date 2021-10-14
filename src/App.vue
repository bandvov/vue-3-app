<template>
<navbar />
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

  export default {
    components:{
      Navbar
    }    
  }
</script>

<style>
 body {
    padding: 0;
    margin: 0;
    box-sizing: content-box;
  }

  .app {
    margin: 1rem;
  }
</style>