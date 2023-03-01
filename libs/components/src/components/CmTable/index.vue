<script lang="ts" setup name="CmTable">
const props = withDefaults(
  defineProps<{
    // 表格数据获取方法
    getData: (params?: any) => Promise<{ datas: any[]; total: number }>
    // 是否初始化时获取数据
    isInitData?: boolean
    // 初始化时的参数
    initParams?: { [attr: string]: any }
    // 是否使用分页
    isUsePager?: boolean
    // 是否使用复选框
    isUseCheckBox?: boolean
  }>(),
  {
    isInitData: true,
    initParams: () => ({}),
    isUsePager: true,
    isUseCheckBox: true,
  },
)
// 表格数据
const tableData: Ref<any[]> = ref([])
// loading控制位
const loading = ref(false)
// 最后一次获取数据的参数
const paramsInner: Ref<{
  [attr: string]: any
  pager?: { pageSize: number; currentPage: number }
}> = ref({})
// 分页参数
const pager = reactive({
  pageSize: 20,
  currentPage: 1,
})
// 数据总数
const pageTotal = ref(0)
// table对象
const table = ref<any>(null)

// 数据更新方法
const update = (params?: any, isResetPager: boolean = true) => {
  // 没有传参数时使用上一次参数
  if (params) paramsInner.value = _deepClone(params)
  if (isResetPager) pager.currentPage = 1
  if (props.isUsePager) paramsInner.value.pager = pager

  // 调用getDate方法获取数据
  loading.value = true
  return props
    .getData(paramsInner)
    .then((res) => {
      tableData.value = res.datas
      pageTotal.value = res.total
    })
    .catch()
    .finally(() => {
      loading.value = false
    })
}

// 初始化数据
if (props.isInitData) update(props.initParams)

// 监测currentPage和pageSize变化
watch(
  () => pager.currentPage,
  () => {
    update(null, false)
  },
)

watch(
  () => pager.pageSize,
  () => {
    update()
  },
)

// 复选框
const selection = ref<any[]>([])
const handleSelect = (selections: any[]) => {
  selection.value = selections
}

const test = reactive({ a: 1 })

defineExpose({
  update,
  selection,
  test,
})
</script>

<template>
  <div v-loading="loading" class="cm-table">
    <!-- 操作按钮组 -->
    <div class="buttons">
      <slot name="buttons" :selection="selection" />
    </div>

    <!-- 表格主体 -->
    <div class="table">
      <el-table
        ref="table"
        v-bind="$attrs"
        :data="tableData"
        @selection-change="handleSelect"
      >
        <el-table-column v-if="props.isUseCheckBox" type="selection" />
        <slot />
      </el-table>
    </div>

    <!-- 分页部分 -->
    <div class="pager">
      <el-pagination
        v-model:page-size="pager.pageSize"
        v-model:current-page="pager.currentPage"
        background
        layout="total, prev, pager, next"
        hide-on-single-page
        :total="pageTotal"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped src="./index.scss" />
