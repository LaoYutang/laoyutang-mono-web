<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const visible = ref(false)
</script>

<template>
  <el-config-provider :locale="zhCn">
    <CmFilter>
      <el-form inline>
        <el-form-item label="aaaa">
          <el-input />
        </el-form-item>
        <el-form-item label="aaaa">
          <el-input />
        </el-form-item>
        <el-form-item label="aaaa">
          <el-input />
        </el-form-item>
        <el-form-item label="aaaa">
          <el-input />
        </el-form-item>
        <el-form-item label="aaaa">
          <el-input />
        </el-form-item>
        <el-form-item label="aaaa">
          <el-input />
        </el-form-item>
      </el-form>
    </CmFilter>
  </el-config-provider>
</template>

<style scoped></style>
