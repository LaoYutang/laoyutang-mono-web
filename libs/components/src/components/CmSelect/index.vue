<script lang="ts" setup name="CmSelect">
import type { DataNodeType } from './select'

const props = withDefaults(
  defineProps<{
    type?: 'normal' | 'tree' // 下拉框类型
    getData: (params?: any) => Promise<DataNodeType[]> // 数据获取方法
    params?: number | string | any[] | { [attr: string]: any } // 调用getData时的参数
    multiple?: boolean // 是否多选
  }>(),
  {
    type: 'normal',
    params: '',
    multiple: false,
  },
)

const emits = defineEmits(['update:modelValue'])

// 下拉框数据
const datas = ref<DataNodeType[]>([])
const loading = ref(false)
// 通过getData方法获取数据
const update = (params?: any) => {
  loading.value = true
  props
    .getData(params)
    .then((res) => {
      datas.value = res
    })
    .finally(() => {
      loading.value = false
    })
}
update(props.params)

// 监听params 变化时重新获取数据
watch(
  () => props.params,
  () => {
    emits('update:modelValue', null)
    update(props.params)
  },
)
</script>

<template>
  <!-- 普通下拉框 -->
  <el-select
    v-if="props.type === 'normal'"
    v-bind="$attrs"
    :multiple="props.multiple"
    :show-checkbox="false"
    @update:model-value="(val: any) => $emit('update:modelValue', val)"
  >
    <el-option
      v-for="item in datas"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
      <slot :data="item" />
    </el-option>
  </el-select>

  <!-- 树形下拉框 -->
  <el-tree-select
    v-else-if="props.type === 'tree'"
    v-bind="$attrs"
    :data="datas"
    :multiple="props.multiple"
    :show-checkbox="props.multiple"
    @update:model-value="(val: any) => $emit('update:modelValue', val)"
  >
    <template #default="{ data }">
      <slot :data="data" />
    </template>
  </el-tree-select>
</template>

<style lang="scss" scoped></style>
