<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
    <div class="homepage">
        <h1>Homepage</h1>
    </div>
</template>

<style>

</style>