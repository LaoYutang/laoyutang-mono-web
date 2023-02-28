<script setup lang="ts">
const handler = async () => {
  console.log(111)
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
  return Promise.resolve()
}
</script>

<template>
  <div class="container">
    <div class="menu" />
    <div class="navi" />
    <div class="content">
      <CmButton :handler="handler">test</CmButton>
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 48px 1fr;
  grid-template-columns: 200px 1fr;
}

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
  overflow: hidden;
}
</style>
