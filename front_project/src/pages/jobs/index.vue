<script async setup>
import TwoColumnLayout from '../../layouts/twoColumn.vue';
import { useJobStore } from '../../stores/jobStore';
import ClassLine from '../../components/oneLineBlocks/ClassLine.vue';
import XivMethodsApi from '../../../api/Xivapi/XivMethodsApi';

const jobStore = useJobStore();
const { twoArrayJobs, setTwoArrayJobs } = storeToRefs(jobStore)

onBeforeMount(async () => {
    jobStore.fetchAllJobs();
    jobStore.setTwoArrayJobs();
});

</script>

<template>
        <TwoColumnLayout>
            <template #title>
                Jobs
            </template>
            <template #leftSide>
                <ul>
                    <li v-for="job in twoArrayJobs.firstJobsHalf" :key="job">
                        <ClassLine
                            :className="job.Name"
                            :classIconUrl="XivMethodsApi.getBaseApiUrl()+job.Icon"
                            :classId="job.ID"
                        />
                    </li>
                </ul>
            </template>
            <template #rightSide>
                <ul>
                    <li v-for="job in twoArrayJobs.secondJobsHalf" :key="job">
                        <ClassLine
                            :className="job.Name"
                            :classIconUrl="XivMethodsApi.getBaseApiUrl()+job.Icon"
                            :classId="job.ID"
                        />
                    </li>
                </ul>
            </template>
        </TwoColumnLayout>
</template>

<style scoped>
</style>