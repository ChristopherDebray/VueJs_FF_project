import XivMethodsApi from "../../api/Xivapi/XivMethodsApi";

export const jobStore = defineStore('job', {
    state: () => ({
        jobs: {},
        jobDetail: {}
    }),
    actions: {
        async getAllJobs() {
            const allJobs = await XivMethodsApi.getAllJobs()
            let jobsResult = allJobs.Results.slice(18);
            this.jobs = jobsResult;
        },
        async getJobDetails(jobId) {
            const jobDetail = await XivMethodsApi.getBasicJobDetails(jobId);
            this.jobDetail = jobDetail;
        },
    },
})