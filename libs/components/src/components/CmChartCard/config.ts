import { ChartOptionType } from '../CmChart'
import IconBar from '~icons/material-symbols/bar-chart-sharp'
import IconLine from '~icons/mdi/chart-line-variant'
import IconPie from '~icons/ep/pie-chart'
import IconGrid from '~icons/bi/grid-3x3-gap-fill'

export const defaultConfig: ChartOptionType = {
  legend: { bottom: 0, type: 'scroll' },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  grid: { top: 30, right: 70, bottom: 70, left: 70 },
}

export const typeIcons: { [attr: string]: any } = {
  bar: IconBar,
  line: IconLine,
  pie: IconPie,
  grid: IconGrid,
}
