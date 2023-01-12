<script setup>
import Searchbar from '../../components/form/Searchbar.vue';
import { useSearchStore } from '../../stores/searchStore';

const searchStore = useSearchStore();
const { characterSearchResult } = storeToRefs(searchStore)
const searchBar = ref(null);

/*
{
    "Avatar": "https:\/\/img2.finalfantasyxiv.com\/f\/5b99cd8dd0208c7aba0e8f5c66f83f94_c33f640c0cdd35f7def85b8aa31a0007fc0_96x96.jpg?1673535638",
    "ID": 45663480,
    "Lang": "FR",
    "Name": "Pinkuy Pingu",
    "Server": "Twintania"
}
*/

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