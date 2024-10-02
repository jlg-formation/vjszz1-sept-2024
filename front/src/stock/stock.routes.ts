import type { RouteRecordRaw } from 'vue-router'

export const stockRoutes: RouteRecordRaw[] = [
  {
    path: '/stock',
    name: 'stockList',
    component: () => import('./views/ListView.vue')
  },
  {
    path: '/stock/add',
    name: 'stockAdd',
    component: () => import('./views/AddView.vue')
  }
]
