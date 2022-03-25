import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
	onOfflineReady() {},
})

createApp(App).mount('#app')
