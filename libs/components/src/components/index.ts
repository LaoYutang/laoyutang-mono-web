import type { App } from 'vue'
import CmButtom from './CmButton'
import CmSvg from './CmSvg'
export * from './CmButton'
export * from './CmSvg'

const components = [CmButtom, CmSvg]

export default {
  install(app: App) {
    components.forEach((component) => {
      app.use(component)
    })
  },
}
