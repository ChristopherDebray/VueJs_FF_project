<script setup>
import Searchbar from '../../components/form/Searchbar.vue';
import CharacterPreviewCard from '../../components/cards/CharacterPreviewCard.vue';
import { useSearchStore } from '../../stores/searchStore';

const searchStore = useSearchStore();
const { characterSearchResult } = storeToRefs(searchStore)
const searchBar = ref(null);

</script>

<template>
    <main>
        <h1>Characters</h1>

        <Searchbar searchType="characters" :ref="searchBar" />

        <div v-if="characterSearchResult" class="flex mt-5">
            <CharacterPreviewCard :character="character" v-for="character in characterSearchResult.Results" :key="character" />
        </div>
    </main>
</template>

<style>

</style>