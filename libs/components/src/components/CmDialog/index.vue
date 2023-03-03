<script lang="ts" setup name="CmDialog">
import IconCancel from '~icons/line-md/cancel'
import IconConfirm from '~icons/line-md/confirm-circle'

const props = withDefaults(
  defineProps<{
    modelValue: boolean // 弹窗状态
    isShowButtons?: boolean // 是否显示提交取消按钮
    beforeconfrim?: () => Promise<void> // 提交动作
  }>(),
  {
    isShowButtons: true,
    beforeconfrim: () => Promise.reject(),
  },
)
const emits = defineEmits(['update:modelValue'])

const visible = useVModel(props, 'modelValue', emits)

// 提交处理
const handleConfrim = () => {
  // 执行成功则关闭弹窗
  props
    .beforeconfrim()
    .then(() => {
      visible.value = false
    })
    .catch((err) => err)
}

// 取消处理
const handleCancel = () => {
  visible.value = false
}
</script>

<template>
  <el-dialog
    v-model="visible"
    v-bind="$attrs"
    class="cm-dialog"
    draggable
    :close-on-click-modal="false"
    destroy-on-close
  >
    <template #default>
      <slot />
    </template>

    <template v-if="isShowButtons" #footer>
      <div class="footer">
        <CmButton :handler="handleCancel" :icon="IconCancel"> 取消 </CmButton>
        <CmButton :handler="handleConfrim" type="primary" :icon="IconConfirm">
          提交
        </CmButton>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped />
