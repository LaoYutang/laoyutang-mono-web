import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@/utils/promise-flat'
import 'styles'
import { registerMicroApps, start } from 'qiankun'

// 创建VUE app
const app = createApp(App)

app.mount('#app')

registerMicroApps([
  {
    name: 'admin',
    entry: '//localhost:8001',
    container: '#content',
    activeRule: '/admin',
  },
])
start()
