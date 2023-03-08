<template>
  <div class="admin">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
console.log(router)
setTimeout(() => {
  router.push('/1')
}, 5000)

setTimeout(() => {
  router.push('/test')
}, 10000)
</script>
