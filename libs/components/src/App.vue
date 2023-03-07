<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const value = ref<number | null>(3)
const getRaidoData = () =>
  Promise.resolve([
    { label: '1', value: 1 },
    { label: '2', value: 2, disabled: false },
  ])
</script>

<template>
  <el-config-provider :locale="zhCn">
    <CmRadio v-model="value" :get-data="getRaidoData" />
  </el-config-provider>
</template>
