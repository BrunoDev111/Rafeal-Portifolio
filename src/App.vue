<template>
  <BackgroundAnimated/>
  <Navbar />
  <RouterView />
</template>

<script>
import BackgroundAnimated from './components/layout/BackgroundAnimated.vue';
import Navbar from './components/layout/Navbar.vue'
import { RouterView } from 'vue-router'


export default {
  name: 'App',
  components: {
    Navbar, RouterView, BackgroundAnimated
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
#app {
  margin-top: 100px; /* ajuste o valor para a altura do seu navbar */
}

</style>