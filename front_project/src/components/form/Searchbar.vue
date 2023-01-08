<script setup>
import { ref, watch } from 'vue'
import XivMethodsApi from '../../../api/Xivapi/XivMethodsApi'

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
const searchValue = ref('');
let data = null;

if(props.searchType) {
    watch(searchValue, async (newSearch, previousSearch) => {
        const searchType = `${props.searchType}Search`
        data = await XivMethodsApi[searchType](newSearch);
        console.log(data)
    })
}

defineExpose({data})



</script>

<template>
    <form>
        <input type="search" :name="serachBarId" :id="serachBarId" :placeholder="placeholder" v-model="searchValue" />
        <button type="submit"><i class="fa fa-search"></i></button>
    </form>
</template>

<style scoped>

</style>