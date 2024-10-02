import { stockRoutes } from '@/stock/stock.routes'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Gestion Stock'
      }
    },
    {
      path: '/legal',
      name: 'legal',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LegalView.vue'),
      meta: {
        title: 'Gestion Stock : Mentions Légales'
      }
    },
    ...stockRoutes,
    { path: '/:catchAll(.*)', name: 'legal', component: NotFound }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) || 'Gestion Stock'
  next()
})

export default router
