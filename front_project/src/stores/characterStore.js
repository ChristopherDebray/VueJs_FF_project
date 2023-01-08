import XivMethodsApi from "../../api/Xivapi/XivMethodsApi";
import { defineStore } from 'pinia';

export const useCharacterStore = defineStore('character', {
    state: () => ({
        characterDetail: {}
    }),
    actions: {
        async fetchCharacterDetail () {
            
        }
    }
})