import { APISettings } from "./config"

export default {
    getBaseApiUrl () {
        return APISettings.baseURL;
    },

    async getAllJobs () {
        return axios
            .get(`${APISettings.baseURL}/ClassJob?${APISettings.privateKeyString}`)
            .then(response => (this.info = response.data))
    },

    async getBasicJobDetails (jobId) {
        return axios
            .get(`${APISettings.baseURL}/ClassJob/${jobId}?columns=ID,Name,Icon,ClassJobCategory.Name,StartingLevel,ClassJobParent,UnlockQuest.ClassJobLevel0,Role,ItemStartingWeapon.ClassJobUse.StartingTown&${APISettings.privateKeyString}`)
            .then(response => (this.info = response.data))
    },
}