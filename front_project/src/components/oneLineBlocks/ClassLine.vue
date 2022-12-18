<script setup>
    defineProps(
        {
            className: {
                type: String,
                required: true
            },
            classIconUrl: {
                type: String,
                required: true
            },
            classId: {
                type: Number,
                required: true
            }
        }
    )
</script>

<template>
    <div class="class_line">
        <router-link class="hover:bg-light hover:text-dark" :to="`/classes/${classId}`">
            <img :src="classIconUrl" :alt="className+' class icon'" class="class_line__icon">
            <span class="class_line__name">{{ className }}</span>
        </router-link>
    </div>
</template>

<style scoped>
    .class_line {
        display: flex;
    }
</style>