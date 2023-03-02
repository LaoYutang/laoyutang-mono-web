import CmDialog from './index.vue'
import type { App } from 'Vue'

export { CmDialog }

export default {
  install(app: App) {
    app.component(CmDialog.name, CmDialog)
  },
}
