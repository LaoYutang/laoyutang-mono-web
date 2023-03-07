<script lang="ts" setup name="CmChart">
import { Chart, ChartsType, ChartOptionType } from './echart'
interface NodeChartOptionType extends ChartOptionType {
  type: string
}

const props = defineProps<{
  options: NodeChartOptionType
}>()

const cmChart = ref<HTMLElement | null>(null)
let chartInstance = null as unknown as ChartsType
let resizeChart: Function

const { height: chartHeight, width: chartWidth } = useElementSize(cmChart)
const chart = ref<any>(null)

// 判断组件是否可见，懒加载初始化echarts
const { stop } = useIntersectionObserver(cmChart, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    // 初始化图表
    chartInstance = Chart.init(chart.value)
    // 报表大小重置方法
    resizeChart = _throttle(chartInstance.resize, 500, false)
    useResizeObserver(cmChart, () => resizeChart())
    // 输入配置
    chartInstance.setOption(props.options)
    // 停止监控
    stop()
  }
})

// 销毁canvas
onBeforeUnmount(() => {
  chartInstance.dispose()
})

defineExpose({
  chartInstance,
})
</script>

<template>
  <div ref="cmChart" class="cm-chart">
    <div
      id="chart"
      ref="chart"
      class="chart"
      :style="`width: ${chartWidth}px;height: ${chartHeight}px;`"
    />
  </div>
</template>
