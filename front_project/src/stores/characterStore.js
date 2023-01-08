import XivMethodsApi from "../../api/Xivapi/XivMethodsApi";

export const characterStore = defineStore('character', {
    state: () => ({
        characterDetail: {}
    }),
    actions: {
        async getCharacterDetail () {
            
        }
    }
})