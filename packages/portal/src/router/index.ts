import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/admin',
    name: 'admin',
    meta: {
      title: '系统管理',
    },
    component: () => import('@/views/admin.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
