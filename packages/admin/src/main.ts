/* eslint-disable no-console */
import { createApp, App as AppType } from 'vue'
import './style.css'
import App from './App.vue'
import Router from '@/router'
import 'styles'
import {
  renderWithQiankun,
  qiankunWindow,
  QiankunProps,
} from 'vite-plugin-qiankun/es/helper'

let app: AppType
const render = (props: QiankunProps) => {
  const { container } = props

  app = createApp(App)
  app.use(Router)

  app.mount(container ? container.querySelector('#app') : '#app')
}

renderWithQiankun({
  bootstrap() {
    console.log('admin bootstrap')
  },
  mount(props) {
    console.log('admin mount')
    render(props)
  },
  unmount() {
    console.log('admin unmount')
    app.unmount()
  },
  update() {
    console.log('admin update')
  },
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({})
}
