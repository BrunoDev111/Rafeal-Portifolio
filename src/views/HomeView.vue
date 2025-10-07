<template>
  <div class="home-view">
    <HeroSection />
  </div>
</template>

<script>
import HeroSection from '@/components/home/HeroSection.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection
  }
}
</script>

<style scoped>
.home-view {
  width: 100%;
}
</style>