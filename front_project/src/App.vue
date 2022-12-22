<script setup>
import Navbar from './components/navigation/Navbar.vue';
</script>

<template>
  <div class="">
    <Navbar />
    <div class="main-container">
      <router-view></router-view>
      
    </div>
  </div>
</template>

<style scoped>
.main-container {
  margin-top: 4rem;
}
</style>
