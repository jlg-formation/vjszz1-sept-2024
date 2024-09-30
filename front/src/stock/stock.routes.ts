import type { RouteRecordRaw } from 'vue-router'
import AddView from './views/AddView.vue'
import ListView from './views/ListView.vue'

export const stockRoutes: RouteRecordRaw[] = [
  {
    path: '/stock',
    name: 'stockList',
    component: ListView
  },
  {
    path: '/stock/add',
    name: 'stockAdd',
    component: AddView
  }
]
