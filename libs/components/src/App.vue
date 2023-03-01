<script setup lang="ts">
const modules = import.meta.glob('./components/*/index.ts', { eager: true })
console.log(modules)
</script>

<template>
  <div>
    <CmInput type="text">
      <template #append>
        <el-button>111</el-button>
      </template>
    </CmInput>
  </div>
</template>

<style scoped></style>
