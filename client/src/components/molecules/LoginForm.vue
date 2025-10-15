<script setup lang="ts">
import { useAuthStore } from '@/stores/user.store'
import UserInput from '../atoms/UserInput.vue'
import SubmitButtons from '../atoms/SubmitButtons.vue'
import FormLayouts from '../atoms/FormLayouts.vue'
import { useTitle } from '@vueuse/core'

const authStore = useAuthStore()

const {
  headingMessage,
  submitMessage,
  redirectPath, // replaces "pathName"
  infoMessage, // replaces "message"
  redirectLabel, // replaces "messagePath"
} = defineProps<{
  headingMessage: string
  submitMessage: string
  redirectPath?: string
  infoMessage: string
  redirectLabel: string
}>()

useTitle('login-page')

const handleSubmit = async () => {
  try {
    await authStore.login()
  } catch (error) {
    console.error('Login failed:', error)
    // Optional: add a user-facing message or toast notification
  }
}
</script>

<template>
  <FormLayouts :handle-submit="handleSubmit" :heading-message="headingMessage.toLowerCase()">
    <template #userInput>
      <UserInput v-model:value="authStore.email" placeholder="Email" type="email" required />
      <UserInput
        v-model:value="authStore.password"
        placeholder="Password"
        type="password"
        required
      />
    </template>

    <template #submitButton>
      <SubmitButtons
        type="submit"
        class="block w-full h-[50px] rounded-sm py-0.5 bg-stone-900 text-white"
      >
        {{ submitMessage }}
      </SubmitButtons>
    </template>

    <template #informationMsg>
      <p class="text-center text-md mt-4">
        {{ infoMessage }}
        <RouterLink class="text-blue-300" :to="{ path: redirectPath }">
          {{ redirectLabel }} here...
        </RouterLink>
      </p>
    </template>
  </FormLayouts>
</template>
