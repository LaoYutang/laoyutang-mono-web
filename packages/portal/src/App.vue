<script setup lang="ts">
ElMessage.success('ss')
</script>

<template>
  <div class="container custom">
    <div class="menu" />
    <div class="navi" />
    <div id="content" class="content" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: var(--cm-navi-height) 1fr;
  grid-template-columns: 200px 1fr;

  .menu {
    grid-area: 1/1/3/2;
    background-color: red;
  }

  .navi {
    grid-area: 1/2/2/3;
    background-color: blue;
  }
  .content {
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 10px;
  }
}
</style>
