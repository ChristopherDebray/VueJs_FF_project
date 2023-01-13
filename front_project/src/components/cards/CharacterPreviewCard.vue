<script setup>
defineProps({
    character: Object
    /*
    avatar: String,
    name: String,
    server: String,
    lang: String
    */
})
</script>

<template>
    <div class="characterPreviewCard">
        <img :src="character.Avatar" :alt="'Image of '+character.Name" class="characterPreview__avatar" />
        <p class="characterPreview__name">{{ character.Name }}</p>
        <p class="characterPreview__server">{{ character.Server }}</p>
        <p class="characterPreview__lang">{{ character.Lang }}</p>
    </div>
</template>

<style scoped>
</style>