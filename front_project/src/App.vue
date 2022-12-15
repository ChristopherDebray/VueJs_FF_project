<script setup>
import Navbar from './components/navigation/Navbar.vue';
</script>

<template>
  <div class="">
    <Navbar />
    <main class="main-container">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.main-container {
  margin-top: 4.5rem;
}
</style>
