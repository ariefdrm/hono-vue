import router from '@/router'
import api from '@/services/api.service'
import type User from '@/utils/user.interface'
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface dataFetch {
  message: string
  data: User
}

export const useAuthStore = defineStore('auth', () => {
  const email = ref('')
  const password = ref('')
  const token = ref('')

  async function login() {
    const response = await api.post<dataFetch>('/auth/login', { email, password })

    localStorage.setItem('token', response.data.data.token)
    return router.push({ name: 'home-page' })
  }

  return { email, password, token, login }
})
