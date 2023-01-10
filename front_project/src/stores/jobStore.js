import XivMethodsApi from "../../api/Xivapi/XivMethodsApi";
import { defineStore } from 'pinia';

export const useJobStore = defineStore('job', {
    state: () => ({
        jobs: {},
        twoArrayJobs: {},
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
            this.setTwoArrayJobs();
        },
        setTwoArrayJobs() {
            const middleIndex = Math.ceil(this.jobs.length / 2);
            
            this.twoArrayJobs = {
                'firstJobsHalf': this.jobs.splice(0, middleIndex),
                'secondJobsHalf': this.jobs.splice(-middleIndex)
            };
        },
        async fetchJobDetails(jobId) {
            const jobDetail = await XivMethodsApi.getBasicJobDetails(jobId);
            this.jobDetail = jobDetail;
        },
    },
})