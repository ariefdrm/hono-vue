<script setup lang="ts">
import { useAuthStore } from '@/stores/user.store'
import UserInput from '../atoms/UserInput.vue'
import SubmitButtons from '../atoms/SubmitButtons.vue'

const user = useAuthStore()

const props = defineProps<{
  headingMessage: string
  submitMessage: string
  pathName?: string
  messagePath: string
  message: string
}>()

const handleSubmit = async () => {
  try {
    await user.register()
  } catch (error) {
    console.error('Register failed:', error)
  }
}
</script>

<template>
  <form
    class="shadow-lg rounded-md mx-1 my-8 p-10 h-[450px] w-[510px]"
    @submit.prevent="handleSubmit"
  >
    <h2 class="text-5xl text-center font-semibold mb-10">{{ props.headingMessage }}</h2>

    <div class="flex flex-col gap-8 mb-4">
      <UserInput v-model:value="user.email" placeholder="Email" type="email" required />
      <UserInput v-model:value="user.password" placeholder="Password" type="password" required />
    </div>

    <SubmitButtons
      type="submit"
      class="block w-full h-[60px] rounded-sm py-0.5 bg-stone-900 text-white"
    >
      {{ props.submitMessage }}
    </SubmitButtons>
    <p class="text-center text-lg mt-1.5">
      {{ message }}
      <RouterLink class="text-blue-300" :to="{ path: pathName }"
        >{{ messagePath }} here...</RouterLink
      >
    </p>
  </form>
</template>
