import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/test',
  },
  {
    path: '/test',
    name: 'test',
    meta: {
      title: '测试',
    },
    component: () => import('@/views/test-page.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
