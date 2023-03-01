import CmInput from './index.vue'
import type { App } from 'Vue'

export { CmInput }

export default {
  install(app: App) {
    app.component(CmInput.name, CmInput)
  },
}
