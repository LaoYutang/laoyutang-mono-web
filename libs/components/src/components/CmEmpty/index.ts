import CmEmpty from './index.vue'
import type { App } from 'Vue'

export { CmEmpty }

export default {
  install(app: App) {
    app.component(CmEmpty.name, CmEmpty)
  },
}
