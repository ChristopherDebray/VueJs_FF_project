<script setup>
</script>

<template>
    <nav class="bg-secondary topnav">
        <div class="topnav__container">
            <router-link class="hover:bg-light hover:text-dark" to="/">Home</router-link>
            <router-link class="hover:bg-light hover:text-dark" to="/cHaracter">Character</router-link>
        </div>
    </nav>
</template>

<style scoped>
    .topnav {
        position: fixed;
        top: 0;
        justify-content: space-between;
        align-items: center;
        background-color: #333;
        color: #fff;
        width: 100vw;
    }
    .topnav .topnav__container {
        display: flex;
        align-items: center;
        width: 100%;
    }

    .topnav .topnav__container a {
        text-decoration: none;
        padding: 20px;
    }
</style>
