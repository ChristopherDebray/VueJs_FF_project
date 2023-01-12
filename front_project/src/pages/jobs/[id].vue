<script setup>
import TwoColumnDescriptiveLayout from '../../layouts/twoColumnDescriptive.vue';
import XivMethodsApi from '../../../api/Xivapi/XivMethodsApi'
import JobDetailCard from '../../components/cards/JobDetailCard.vue';
import { useJobStore } from '../../stores/jobStore';

const jobStore = useJobStore();
const route = useRoute()
const { jobDetail } = storeToRefs(jobStore);

onBeforeMount(async () => {
    const isJobDetailAlreadyLoaded = jobStore.jobDetail.ID && jobStore.jobDetail.ID == route.params.id;
    if (isJobDetailAlreadyLoaded) {
        return;
    }

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
            <JobDetailCard v-if="jobDetail.ClassJobParent" :job="jobDetail.ClassJobParent" />
        </template>
        <template #content>
            <!-- Will contain the job infos -->
            <JobDetailCard :job="jobDetail" />
        </template>
    </TwoColumnDescriptiveLayout>
</template>