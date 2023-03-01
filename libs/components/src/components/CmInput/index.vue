<script lang="ts" setup name="CmInput">
const props = withDefaults(
  defineProps<{
    // 输入框类型，自定义一个number
    type?: string
  }>(),
  { type: 'text' },
)
</script>

<template>
  <el-input
    v-if="props.type !== 'number'"
    v-bind="$attrs"
    :type="props.type"
    clearable
  />

  <el-input-number v-else v-bind="$attrs" />
</template>

<style lang="scss" scoped></style>
