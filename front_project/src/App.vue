<script setup>
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="">
    <Navbar />
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
</style>
