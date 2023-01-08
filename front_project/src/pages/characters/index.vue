<script setup>
import Searchbar from '../../components/form/Searchbar.vue';

const searchBar = ref(null);
console.error(searchBar.data)
/*
watch(searchBar, async (searchBarPreviousData, searchBarNewData) => {
    console.error(searchBarNewData.data)
})
*/

watch(() => searchBar.data, (searchBarPreviousData, searchBarNewData) => {
    console.error(searchBarNewData.data)
})


</script>

<template>
    <main>
        <h1>Characters</h1>

        <Searchbar searchType="characters" :ref="searchBar" />
    </main>
</template>

<style>

</style>