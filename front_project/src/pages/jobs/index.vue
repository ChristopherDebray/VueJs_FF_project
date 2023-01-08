<script async setup>
import TwoColumnLayout from '../../layouts/twoColumn.vue';
import { useJobStore } from '../../stores/jobStore';
import ClassLine from '../../components/oneLineBlocks/ClassLine.vue';

const jobStore = useJobStore();
jobStore.fetchAllJobs();

const { jobs } = storeToRefs(jobStore)

console.error(jobStore.getJobs);
console.log(jobs);



/*
const allJobs = await XivMethodsApi.getAllJobs()
let jobsResult = allJobs.Results.slice(18);
const middleIndex = Math.ceil(jobsResult.length / 2);
const firstJobsHalf = jobsResult.splice(0, middleIndex);
const secondJobsHalf = jobsResult.splice(-middleIndex);
*/


</script>

<template>
        <TwoColumnLayout>
            <template #title>
                Jobs
            </template>
            <template #leftSide>
                <ul>
                    <li v-for="job in firstJobsHalf" :key="job">
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
                    <li v-for="job in secondJobsHalf" :key="job">
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