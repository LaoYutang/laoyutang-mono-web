<script lang="ts" setup name="CmFilter">
import IconSearch from '~icons/line-md/search'
import IconReset from '~icons/line-md/rotate-270'

const props = defineProps<{
  queryHandler: () => Promise<void>
  resetHandler: () => Promise<void>
}>()

// 是否折叠
const isFold = ref(true)
const formHeight = ref('50px')

const slot = ref<HTMLElement | null>(null)
const { height } = useElementSize(slot)

const handleFold = () => {
  isFold.value = !isFold.value
  formHeight.value = isFold.value ? '50px' : height.value.toString() + 'px'
}
</script>

<template>
  <div class="cm-filter">
    <!-- 左侧表单 -->
    <div class="form" :style="`height: ${formHeight}`">
      <div ref="slot">
        <slot />
      </div>

      <CmButton
        v-if="height > 50"
        class="form-fold_icon"
        :handler="handleFold"
        circle
        text
        bg
      >
        <icon-ic-round-keyboard-arrow-down v-show="isFold" />
        <icon-ic-round-keyboard-arrow-up v-show="!isFold" />
      </CmButton>
    </div>

    <!-- 右侧按钮 -->
    <div class="buttons">
      <el-button-group>
        <CmButton type="primary" :icon="IconSearch" :handler="queryHandler">
          查询
        </CmButton>
        <CmButton :icon="IconReset" :handler="resetHandler">重置</CmButton>
      </el-button-group>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./index.scss" />
