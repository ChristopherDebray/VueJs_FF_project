<script async setup>
import TwoColumnLayout from '../../layouts/twoColumn.vue';
import { useJobStore } from '../../stores/jobStore';
import ClassLine from '../../components/oneLineBlocks/ClassLine.vue';
import XivMethodsApi from '../../../api/Xivapi/XivMethodsApi';

const jobStore = useJobStore();

/*
const { jobs, getJobs } = storeToRefs(jobStore)

onMounted(() => {
    //console.log(test)
    console.log("MOUNTED")
});

let test = computed(() => {
    console.log("COMPUTED");
    jobStore.getJobs
});
console.error(test);

let firstJobsHalf, secondJobsHalf;

watch(getJobs, () => {
    let jobArray = Object.entries(getJobs.value);
    const middleIndex = Math.ceil(jobArray.length / 2);
    firstJobsHalf = jobArray.splice(0, middleIndex);
    secondJobsHalf = jobArray.splice(-middleIndex);
})
*/

const { jobs, getJobs, setTwoArrayJobs } = storeToRefs(jobStore)

onBeforeMount(async () => {
    jobStore.fetchAllJobs();
});

console.log(jobs)

</script>

<template>
        <TwoColumnLayout>
            <template #title>
                Jobs
            </template>
            <template #leftSide>
                <ul>
                    <li v-for="job in jobs" :key="job">
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
                    <li v-for="job in jobs.secondJobsHalf" :key="job">
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