import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createVuetify } from "vuetify";

createApp(App)
    .use(
        createVuetify({})
    )
    .mount("#app");
