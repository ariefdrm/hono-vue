import AboutPage from '@/pages/AboutPage.vue'
import MainPage from '@/pages/MainPage.vue'
import RegisterPage from '@/pages/RegisterPage.vue'
import api from '@/services/api.service'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: MainPage,
    },
    {
      path: '/login',
      name: 'login-page',
      component: () => import('@/pages/LoginPage.vue'),
    },
    {
      path: '/register',
      name: 'register-page',
      component: RegisterPage,
    },
    {
      path: '/about',
      name: 'about-page',
      component: AboutPage,
    },
    {
      path: '/secret',
      name: 'secret-page',
      component: () => import('@/pages/Secret.vue'),
      beforeEnter: async () => {
        const token = localStorage.getItem('token')

        try {
          await api.get('/auth/me', {
            headers: { Authorization: `Bearer ${token}` },
          })

          return true
        } catch (err) {
          console.log(err)
          return { name: 'login-page' }
        }
      },
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/',
    },
  ],
})

export default router
