<script setup>
import TwoColumnDescriptiveLayout from '../../layouts/twoColumnDescriptive.vue';
import XivMethodsApi from '../../../api/Xivapi/XivMethodsApi'
const route = useRoute()
const jobInfos = await XivMethodsApi.getBasicJobDetails(route.params.id)
console.log(jobInfos)

</script>

<template>
    <TwoColumnDescriptiveLayout>
        <template #title>
            Personnage
        </template>
        <template #sideBar>
            <p>SideBar</p>
        </template>
        <template #content>
            <p>Content</p>
        </template>
    </TwoColumnDescriptiveLayout>
</template>

<style>

</style>