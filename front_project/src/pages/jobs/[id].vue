<script setup>
import TwoColumnDescriptiveLayout from '../../layouts/twoColumnDescriptive.vue';
import XivMethodsApi from '../../../api/Xivapi/XivMethodsApi'
import JobDetailCardVue from '../../components/cards/JobDetailCard.vue';
const route = useRoute()
const jobInfos = await XivMethodsApi.getBasicJobDetails(route.params.id)
const ClassJobParent = jobInfos.ClassJobParent;

</script>

<template>
    <TwoColumnDescriptiveLayout>
        <template #title>
        </template>
        <template #sideBar>
            <!-- Will contain the parent job infos if the job has one -->
            <JobDetailCardVue v-if="ClassJobParent" :job="ClassJobParent" />
        </template>
        <template #content>
            <!-- Will contain the job infos -->
            <JobDetailCardVue :job="jobInfos" />
        </template>
    </TwoColumnDescriptiveLayout>
</template>

<style>

</style>