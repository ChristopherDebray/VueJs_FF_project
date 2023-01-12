<script setup>
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue'
import XivMethodsApi from '../../../api/Xivapi/XivMethodsApi'
import { useSearchStore } from '../../stores/searchStore';

const props = defineProps(
    {
        placeholder: {
            type: String,
            default: 'Type your search here',
        },
        serachBarId: {
            type: String,
            default: 'searchBar',
        },
        inputValue: {
            type: String,
            default: '',
        },
        searchType: {
            type: String,
            default: ''
        }
    }
)
const searchStore = useSearchStore();
const { characterSearchResult } = storeToRefs(searchStore)
const searchValue = ref('');

// if(props.searchType) {}

async function fetchSearchResult() {
    const searchType = `${props.searchType}Search`
    searchStore[searchType](searchValue.value)
    console.log(characterSearchResult)
    //data = await XivMethodsApi[searchType](searchValue.value);
}

</script>

<template>
    <div>
        <input type="search" :name="serachBarId" :id="serachBarId" :placeholder="placeholder" v-model="searchValue" />
        <button @click="fetchSearchResult"><i class="fa fa-search"></i></button>
    </div>
</template>

<style scoped>

</style>