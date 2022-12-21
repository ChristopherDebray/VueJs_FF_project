import { APISettings } from "./config"

export default {
    getBaseApiUrl () {
        return APISettings.baseURL;
    },

    async getAllJobs () {
        return await axios
            .get(`${APISettings.baseURL}/ClassJob?${APISettings.privateKeyString}`)
            .then(response => (this.info = response.data))
    },

    async getJobDetails () {
        return await axios
            .get(`${APISettings.baseURL}/ClassJob?${APISettings.privateKeyString}`)
            .then(response => (this.info = response.data))
    },
}