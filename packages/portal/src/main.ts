import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Wujie from 'wujie-vue3'
import Router from '@/router'
import '@/utils/promise-flat'

const { setupApp, preloadApp, bus } = Wujie

// 创建VUE app
const app = createApp(App)

app.use(Wujie)
app.use(Router)

setupApp({
  name: 'admin',
  url: '//localhost:8001/',
  exec: true,
  sync: true,
  alive: true,
})

app.mount('#app')
