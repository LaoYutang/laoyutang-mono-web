import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from '@/router'

// 创建VUE app
const app = createApp(App)

app.use(Router)

app.mount('#app')