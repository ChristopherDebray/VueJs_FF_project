import XivMethodsApi from "../../api/Xivapi/XivMethodsApi";
import { defineStore } from 'pinia';

export const useSearchStore = defineStore('job', {
    state: () => ({
        characterSearchResult: {}
    }),
    actions: {
        async charactersSearch(searchString) {
            const characterSearchResult = await XivMethodsApi.charactersSearch(searchString)
            this.characterSearchResult = characterSearchResult;
        },
    },
})