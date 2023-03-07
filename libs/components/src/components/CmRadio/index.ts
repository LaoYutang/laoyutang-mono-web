import CmRadio from './index.vue'
import type { App } from 'Vue'

export { CmRadio }

export default {
  install(app: App) {
    app.component(CmRadio.name, CmRadio)
  },
}
