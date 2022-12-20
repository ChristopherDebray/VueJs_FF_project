import { APISettings } from "./config"

export default {
    getBaseApiUrl () {
        return APISettings.baseURL;
    },

    getAllClasses () {
        return axios
            .get(`${APISettings.baseURL}/ClassJob?${APISettings.privateKeyString}`)
            .then(response => (this.info = response.data))
    },

    getClassDetails () {
        return axios
            .get(`${APISettings.baseURL}/ClassJob?${APISettings.privateKeyString}`)
            .then(response => (this.info = response.data))
    },
}