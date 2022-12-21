import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './modules/router.js'

const app = createApp(App);

app.config.globalProperties.$filters = {
    capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    },
}
app.use(router);
app.mount('#app')
