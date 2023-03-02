<script lang="ts" setup name="cm-button">
const props = withDefaults(
  defineProps<{
    handler: (e: Event) => Promise<any>
  }>(),
  {},
)

const loading = ref(false)

// 按钮点击时间绑定
const handleClock = _debounce(async (e: Event) => {
  loading.value = true
  try {
    await props.handler(e)
  } catch (err) {}
  loading.value = false
})
</script>

<template>
  <el-button v-bind="$attrs" :loading="loading" @click="handleClock">
    <slot />
  </el-button>
</template>

<style scoped src="./index.scss" />
