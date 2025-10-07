<template>
  <Navbar />
  
  
</template>

<script>
import Navbar from './components/layout/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: #000;
  color: #fff;
}
</style>