import XivMethodsApi from "../../api/Xivapi/XivMethodsApi";

export const jobStore = defineStore('job', {
    state: () => ({
        characterSearchResult: {}
    }),
    actions: {
        async characterSearch(searchString) {
            const characterSearchResult = await XivMethodsApi.charactersSearch(searchString)
            this.characterSearchResult = characterSearchResult;
        },
    },
})