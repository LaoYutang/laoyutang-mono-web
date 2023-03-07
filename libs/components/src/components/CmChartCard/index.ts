import CmChartCard from './index.vue'
import type { App } from 'Vue'

export { CmChartCard }

export default {
  install(app: App) {
    app.component(CmChartCard.name, CmChartCard)
  },
}
