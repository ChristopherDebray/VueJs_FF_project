<script setup></script>

<template>
    <div class="default-layout">
        <slot>
        </slot>
    </div>
</template>

<style scoped>
.default-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 80%;
    margin: 0 auto;
}
</style>