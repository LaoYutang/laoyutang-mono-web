import type { App } from 'vue'
import CmButtom from './CmButton'
export * from './CmButton'

const components = [CmButtom]

export default {
  install(app: App) {
    components.forEach((component) => {
      app.use(component)
    })
  },
}
