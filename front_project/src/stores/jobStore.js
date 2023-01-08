import XivMethodsApi from "../../api/Xivapi/XivMethodsApi";
import { defineStore } from 'pinia';

export const useJobStore = defineStore('job', {
    state: () => ({
        jobs: {},
        jobDetail: {}
    }),
    getters: {
        getJobs(state) {
            return state.jobs;
        }
    },
    actions: {
        async fetchAllJobs() {
            const allJobs = await XivMethodsApi.getAllJobs()
            let jobsResult = allJobs.Results.slice(18);
            this.jobs = jobsResult;
        },
        async fetchJobDetails(jobId) {
            const jobDetail = await XivMethodsApi.getBasicJobDetails(jobId);
            this.jobDetail = jobDetail;
        },
    },
})