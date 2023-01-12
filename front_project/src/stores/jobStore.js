import XivMethodsApi from "../../api/Xivapi/XivMethodsApi";
import { defineStore } from 'pinia';

export const useJobStore = defineStore('job', {
    state: () => ({
        jobs: {},
        twoArrayJobs: {},
        jobDetail: {}
    }),
    actions: {
        async fetchAllJobs() {
            const allJobs = await XivMethodsApi.getAllJobs()
            let jobsResult = allJobs.Results.slice(18);
            this.jobs = jobsResult;
            this.setTwoArrayJobs();
        },
        async setTwoArrayJobs() {
            const middleIndex = Math.ceil(this.jobs.length / 2);
            let jobsArray = Object.values(this.jobs);
            this.twoArrayJobs = {
                'firstJobsHalf': jobsArray.splice(0, middleIndex),
                'secondJobsHalf': jobsArray.splice(-middleIndex)
            };
        },
        async fetchJobDetails(jobId) {
            const jobDetail = await XivMethodsApi.getBasicJobDetails(jobId);
            this.jobDetail = jobDetail;
        },
    },
})