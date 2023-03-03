import CmFilter from './index.vue'
import type { App } from 'Vue'

export { CmFilter }

export default {
  install(app: App) {
    app.component(CmFilter.name, CmFilter)
  },
}
