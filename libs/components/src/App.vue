<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const getData = (params?: number) => {
  if (params === 1)
    return Promise.resolve([
      {
        label: '1',
        value: '11',
        children: [
          { label: '2', value: '22' },
          { label: '3', value: '33' },
        ],
      },
      { label: '4', value: '44' },
    ])
  else
    return Promise.resolve([
      {
        label: '1',
        value: '11',
        children: [
          { label: '2', value: '22' },
          { label: '3', value: '33' },
        ],
      },
    ])
}

const value = ref<string[]>([])
const param = ref(0)

setTimeout(() => {
  param.value = 1
}, 2000)
</script>

<template>
  {{ value }}
  <el-config-provider :locale="zhCn">
    <CmSelect v-model="value" :get-data="getData" multiple :params="param">
      <!-- <template #default="{ data }">
        {{ `${data.value}:${data.label}` }}
      </template> -->
    </CmSelect>
  </el-config-provider>
</template>

<style scoped></style>
