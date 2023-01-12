<script setup>
import TwoColumnDescriptiveLayout from '../../layouts/twoColumnDescriptive.vue';
import XivMethodsApi from '../../../api/Xivapi/XivMethodsApi'
import JobDetailCard from '../../components/cards/JobDetailCard.vue';
import { useJobStore } from '../../stores/jobStore';
import { watch } from '@vue/runtime-core';

const jobStore = useJobStore();
const route = useRoute()
const { jobDetail } = storeToRefs(jobStore);
const jobRouteId = ref(route.params.id);

onBeforeMount(async () => {
    await jobStore.fetchJobDetails(route.params.id)
})

watch(() => route.params.id, (newJobId, previousJobId) => {
    jobStore.fetchJobDetails(newJobId)
})

</script>

<template>
    <TwoColumnDescriptiveLayout>
        <template #title>
        </template>
        <template #sideBar>
            <!-- Will contain the parent job infos if the job has one -->
            {{  ClassJobParent }}
            <JobDetailCard v-if="jobDetail.ClassJobParent" :job="jobDetail.ClassJobParent" />
        </template>
        <template #content>
            <!-- Will contain the job infos -->
            <JobDetailCard :job="jobDetail" />
        </template>
    </TwoColumnDescriptiveLayout>
</template>

<style>

</style>