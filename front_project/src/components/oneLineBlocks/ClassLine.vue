<script setup>
    import capitalizeFirstLetter from '../../filters/capitalizeFirstLetter';

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
        <router-link class="hover:underline" :to="`/jobs/${classId}`">
            <img :src="classIconUrl" :alt="capitalizeFirstLetter(className)+' job icon'" class="class_line__icon">
            <span class="class_line__name">{{ capitalizeFirstLetter(className) }}</span>
        </router-link>
    </div>
</template>

<style scoped>
    .class_line {
        display: flex;
    }
    .class_line a {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 10px;
        padding: 10px 0;
    }
    .class_line__icon {
        width: 48px;
        height: 48px;
        border-radius: 10px;
        border: 1px solid #D3ADA6;
        padding: 5px;
        /*
            background-color: #346624; 
            background-color: #2d3a80; 
            */
            background-color: #732828; 
    }

    .class_line__name {
        margin-left: 10px;
    }
</style>