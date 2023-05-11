import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/',
    component: () => import('@/views/layout/index.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
