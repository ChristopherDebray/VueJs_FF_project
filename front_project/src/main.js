import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './modules/router.js'

const pinia = createPinia();
const app = createApp(App);

/*
app.config.globalProperties.$filters = {
    capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    },
    stringifyJobRole (jobRoleInt) {
        const roleString = {
            0: () => 'Profession',
            1: () => 'Tank',
            2: () => 'Melee DPS',
            3: () => 'Ranged DPS (Physical or Magical)',
            4: () => 'Healer',
            'default': () => 'Unknown role'
        };

        return (roleString[jobRoleInt] || roleString['default'])()
    }
}
*/
app.use(pinia);
app.use(router);
app.mount('#app');
