import router from '@/router'
import axiosInstances from '@/services/api.service'
import type User from '@/utils/user.interface'
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface LoginResponse {
  message: string
  data: User
}

export const useAuthStore = defineStore('auth', () => {
  const email = ref('')
  const password = ref('')
  const token = localStorage.getItem('token')

  async function login(): Promise<void> {
    try {
      const response = await axiosInstances.post<LoginResponse>(
        '/auth/login',
        {
          email: email.value,
          password: password.value,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      // save token to local storage
      localStorage.setItem('token', response.data.data.token)

      // set email and password to empty
      email.value = ''
      password.value = ''

      router.push({ name: 'secret-page' })
    } catch (error) {
      console.error(error)
    }
  }

  async function register(): Promise<void> {
    try {
      const response = await axiosInstances.post<LoginResponse>(
        '/auth/register',
        {
          email: email.value,
          password: password.value,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      console.log(response.data)

      // set email and password to empty
      email.value = ''
      password.value = ''

      router.push('/login')
    } catch (error) {
      // console.error(error)
      throw error
    }
  }

  return { email, password, token, login, register }
})
