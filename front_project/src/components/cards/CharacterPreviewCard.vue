<script setup>
const props = defineProps({
    character: Object
    /*
    avatar: String,
    name: String,
    server: String,
    lang: String
    */
})

console.log(props.character)
</script>

<template>
    <router-link class="characterPreviewCard text-light" :to="`/character/${character.ID}`">
        <div class="characterPreviewCard__avatar_container">
            <img :src="character.Avatar" :alt="'Image of '+character.Name" class="characterPreview__avatar" />
        </div>
        <p class="characterPreview__name">{{ character.Name }}</p>
        <p class="characterPreview__server">{{ character.Server }}</p>
        <p class="characterPreview__lang">{{ character.Lang }}</p>
    </router-link>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
.characterPreviewCard {
    position: relative;
    min-width: 200px;
    min-height: 200px;
    background-color: rgba(20,20,160, 0.9);
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    transition: background-color 0.2s, transform 0.2s;
}
.characterPreviewCard:hover {
    background-color: rgba(20,20,160, 1);
    transform: scale(1.1);
}

.characterPreviewCard .characterPreview__name {text-align: center;}
.characterPreviewCard .characterPreviewCard__avatar_container {margin-bottom: 20px;}
.characterPreviewCard .characterPreview__avatar {
    border: 1px solid #D3ADA6;
    margin: auto;
}

.characterPreviewCard .characterPreview__server,.characterPreviewCard .characterPreview__lang {
    position: absolute;
    bottom: 5px;
}
.characterPreviewCard .characterPreview__server {
    left: 10px;
}
.characterPreviewCard .characterPreview__lang {
    right: 10px;
    font-style: italic;
}
</style>