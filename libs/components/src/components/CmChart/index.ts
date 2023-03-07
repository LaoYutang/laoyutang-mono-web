import CmChart from './index.vue'
import type { App } from 'Vue'
export type { ChartOptionType } from './echart'

export { CmChart }

export default {
  install(app: App) {
    app.component(CmChart.name, CmChart)
  },
}
