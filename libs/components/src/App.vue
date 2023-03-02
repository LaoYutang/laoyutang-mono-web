<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const visible = ref(false)
</script>

<template>
  <el-config-provider :locale="zhCn">
    <CmButton :handler="() => (visible = true)">open</CmButton>
    <CmDialog v-model="visible">Test</CmDialog>
  </el-config-provider>
</template>

<style scoped></style>
