<script lang="ts" setup name="CmRadio">
interface radioNode {
  label: string
  value: string | number
  disabled?: boolean
}

const props = withDefaults(
  defineProps<{
    getData: () => Promise<radioNode[]>
  }>(),
  {},
)
const datas = ref<radioNode[]>([])

props
  .getData()
  .then((res) => {
    datas.value = res
  })
  .catch()
</script>

<template>
  <el-radio-group v-bind="$attrs">
    <el-radio-button
      v-for="{ value, label, disabled } in datas"
      :key="value"
      :label="value"
      :disabled="disabled"
    >
      {{ label }}
    </el-radio-button>
  </el-radio-group>
</template>

<style lang="scss" scoped></style>
