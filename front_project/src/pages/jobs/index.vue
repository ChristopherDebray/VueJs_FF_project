<script async setup>
import TwoColumnLayout from '../../layouts/twoColumn.vue';
import { useJobStore } from '../../stores/jobStore';
import ClassLine from '../../components/oneLineBlocks/ClassLine.vue';
import XivMethodsApi from '../../../api/Xivapi/XivMethodsApi';

const jobStore = useJobStore();
/*
const { jobs } = storeToRefs(jobStore)
const { getJobs } = jobStore;
*/

onBeforeMount(() => {
    jobStore.fetchAllJobs();
});

const { jobs, getJobs } = storeToRefs(jobStore)

/*
watch(jobs, async (result, previousResult) => {
    // const searchType = `${props.searchType}Search`
    // data = await XivMethodsApi[searchType](newSearch);

    const middleIndex = Math.ceil(result.length / 2);
    

    console.log(firstJobsHalf)
    console.log(secondJobsHalf);
})
*/
let firstJobsHalf, secondJobsHalf;

watch(getJobs, () => {
    let jobArray = Object.entries(getJobs.value);
    const middleIndex = Math.ceil(jobArray.length / 2);
    firstJobsHalf = jobArray.splice(0, middleIndex);
    secondJobsHalf = jobArray.splice(-middleIndex);
})
//const firstJobsHalf = jobs

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