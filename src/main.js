import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { VanillaComponents } from '@flavorly/vanilla-components'

createApp(App).use(VanillaComponents).mount('#app')
