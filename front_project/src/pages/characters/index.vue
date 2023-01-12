<script setup>
import Searchbar from '../../components/form/Searchbar.vue';
import { useSearchStore } from '../../stores/searchStore';

const searchStore = useSearchStore();
const { characterSearchResult } = storeToRefs(searchStore)
const searchBar = ref(null);

</script>

<template>
    <main>
        <h1>Characters</h1>

        <Searchbar searchType="characters" :ref="searchBar" />

        <div v-if="characterSearchResult">
            <div v-for="character in characterSearchResult.Results" :key="character">
                <img :src="character.Avatar" :alt="'Image of '+character.Name" />
                <p>{{ character.Name }}</p>
                <p>{{ character.Server }}</p>
            </div>
        </div>
    </main>
</template>

<style>

</style>