import type { RouteRecordRaw } from 'vue-router'

export const stockRoutes: RouteRecordRaw[] = [
  {
    path: '/stock',
    name: 'stockList',
    component: () => import('./views/ListView.vue'),
    meta: {
      title: 'Gestion Stock : Liste des articles'
    }
  },
  {
    path: '/stock/add',
    name: 'stockAdd',
    component: () => import('./views/AddView.vue'),
    meta: {
      title: 'Gestion Stock : Ajouter un article'
    }
  }
]
