import MainPage from '@/pages/MainPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main-page',
      component: MainPage,
    },
    {
      path: '/login',
      name: 'login-page',
      component: () => import('@/pages/LoginPage.vue'),
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/',
    },
  ],
})

export default router
