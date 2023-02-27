import CmSvg from './index.vue'
import type { App } from 'Vue'

export { CmSvg }

export default {
  install(app: App) {
    app.component(CmSvg.name, CmSvg)
  },
}
