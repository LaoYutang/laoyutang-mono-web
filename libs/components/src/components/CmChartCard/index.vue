<script lang="ts" setup name="CmChartCard">
import type { ChartOptionType } from '../CmChart'
import { defaultConfig, typeIcons } from './config'

interface NodeChartOptionType extends ChartOptionType {
  type: string
}
type DataNodeType = number | string | null | undefined

const props = withDefaults(
  defineProps<{
    name: string // 卡片唯一名称
    title: string // 卡片显示标题
    configs: NodeChartOptionType[] // 配置列表
    getData: () => Promise<DataNodeType[][]> // 卡片数据的获取方法，返回一个Promise对象
    publicConfig?: NodeChartOptionType // 公共配置覆盖
    height?: number // 图表高度
    isInitData?: boolean // 是否初始化获取数据
  }>(),
  {
    publicConfig: undefined,
    height: 400,
    isInitData: true,
  },
)

const refChart = ref<any>(null)

/**
 * 更新echarts配置后刷新图表
 */
const refresh = () => {
  refChart.value?.chartInstance?.update()
}

const loading = ref(false)
const datas = ref<DataNodeType[][]>([])
/**
 * 调用getData方法获取图表数据
 */
const update = () => {
  loading.value = true
  return props
    .getData()
    .then((res) => {
      datas.value = res ?? []
      // 更新数据后 刷新图表
      refresh()
    })
    .finally(() => {
      loading.value = false
    })
}
// 初始化数据
onMounted(() => {
  if (props.isInitData) update()
})

// 是否无数据
const isNoData = computed(() => {
  return datas.value.length <= 1
})

// 图表下拉框数据
const selectData = computed(() => {
  return [...props.configs.map(({ type }) => type), 'grid']
})

// 当前配置项索引
const currentIndex = ref(0)

// 当前图表的图标
const currentIcon = computed(() => {
  return typeIcons[selectData.value[currentIndex.value]]
})

// 整合后的完整配置
const currentConfig = computed(() => {
  return Object.assign(
    _deepClone(defaultConfig),
    props.publicConfig,
    props.configs[currentIndex.value]
      ? props.configs[currentIndex.value].config
      : {},
    {
      dataset: {
        source: datas.value,
      },
    },
  )
})

// 选择图表类型
const chooseType = (index: number) => {
  currentIndex.value = index
  nextTick(() => {
    refresh()
  })
}
</script>

<template>
  <el-card v-loading="loading" class="cm-chart-card">
    <template #header>
      <div class="header">
        <div class="header-left">
          <!-- 标题 -->
          <div class="header-left-title">{{ props.title }}</div>

          <!-- 类型选择下拉 -->
          <div class="header-left-dropdown">
            <el-dropdown trigger="click" @command="chooseType">
              <component :is="currentIcon" class="icon" />

              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item
                    v-for="(type, index) in selectData"
                    :key="type"
                    :command="index"
                    :disabled="index === currentIndex"
                  >
                    <component :is="typeIcons[type]" style="font-size: 18px" />
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>

        <!-- 右侧操作区 -->
        <div class="header-right">
          <CmButton text circle :handler="update">
            <icon-material-symbols-refresh />
          </CmButton>
        </div>
      </div>
    </template>

    <template #default>
      <!-- 卡片主体 -->
      <div class="card-body" :style="`height: ${props.height}px`">
        <!-- 空 -->
        <el-empty v-if="isNoData" description="No Data" />
        <!-- 图表 -->
        <CmChart
          v-else-if="currentIndex < selectData.length - 1"
          ref="refChart"
          :options="currentConfig"
          :style="`height: ${props.height}px`"
        />
        <!-- 表格 -->
        <el-table v-else :data="datas.slice(1)">
          <el-table-column
            v-for="(val, index) in datas[0]"
            :key="val"
            :prop="index.toString()"
            :label="val"
          />
        </el-table>
      </div>
    </template>
  </el-card>
</template>

<style lang="scss" scoped src="./index.scss" />
