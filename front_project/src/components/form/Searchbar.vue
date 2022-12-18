<script setup>
import { useAttrs } from "@vue/runtime-core";

defineProps(
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
    }
)

</script>

<template>
    <form>
        <input type="search" :name="serachBarId" :id="serachBarId" :placeholder="placeholder" :value="inputValue" />
        <button type="submit"><i class="fa fa-search"></i></button>
    </form>
</template>

<style scoped>

</style>