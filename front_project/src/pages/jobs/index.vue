<script setup>
import TwoColumnLayout from '../../layouts/twoColumn.vue';
import XivMethodsApi from '../../../api/Xivapi/XivMethodsApi'
import ClassLine from '../../components/oneLineBlocks/ClassLine.vue';
import { onBeforeMount } from 'vue';

let allJobs = ref(1)

onBeforeMount(async () => {
    allJobs = await XivMethodsApi.getAllJobs();
    let jobsResult = allJobs.Results.slice(20);
    
    const middleIndex = Math.ceil(jobsResult.length / 2);
    const firstJobsHalf = jobsResult.splice(0, middleIndex);   
    const secondJobsHalf = jobsResult.splice(-middleIndex);
    console.log(firstJobsHalf)
    console.log(secondJobsHalf)
})

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