// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from '@/router'
createApp(App).use(router).mount('#app')

