import CmSelect from './index.vue'
import type { App } from 'Vue'

export { CmSelect }

export default {
  install(app: App) {
    app.component(CmSelect.name, CmSelect)
  },
}
