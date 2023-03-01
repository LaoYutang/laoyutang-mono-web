import CmTable from './index.vue'
import type { App } from 'Vue'

export { CmTable }

export default {
  install(app: App) {
    app.component(CmTable.name, CmTable)
  },
}
