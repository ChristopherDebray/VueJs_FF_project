<script setup>
import Navbar from './components/navigation/Navbar.vue';
</script>

<template>
  <div class="">
    <Navbar />
    <div class="main-container">
      <router-view v-slot="{ Component }">
            <Suspense timeout="0">
                <template #default>
                    <component :is="Component"></component>
                </template>
                <template #fallback>
                    <div>Loading...</div>
                </template>
            </Suspense>
        </router-view>
      
    </div>
  </div>
</template>

<style scoped>
.main-container {
  margin-top: 4rem;
}
</style>
