// import api from '@/services/api.service'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const email = ref('')
  const password = ref('')

  return { email, password }
})
