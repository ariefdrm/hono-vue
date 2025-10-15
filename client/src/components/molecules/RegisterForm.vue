<script setup lang="ts">
import { useAuthStore } from '@/stores/user.store'
import UserInput from '../atoms/UserInput.vue'
import SubmitButtons from '../atoms/SubmitButtons.vue'
import FormLayouts from '../atoms/FormLayouts.vue'

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
  <FormLayouts :handle-submit="handleSubmit" heading-message="Register">
    <template #userInput>
      <div>
        <label for="firstName">firstname</label>
        <UserInput v-model:value="user.email" placeholder="e.g Jhon" required />
      </div>
      <div>
        <label for="lastName">lastname</label>
        <UserInput v-model:value="user.email" placeholder="e.g Cadilac" required />
      </div>
      <div>
        <label for="Username">email</label>
        <UserInput
          v-model:value="user.email"
          placeholder="e.g jhon.cadilac@mail.com"
          type="email"
          required
        />
      </div>
      <div>
        <label for="Username">password</label>
        <UserInput
          v-model:value="user.password"
          placeholder="Please Your Password"
          type="password"
          required
        />
      </div>
    </template>

    <template #submitButton>
      <SubmitButtons
        type="submit"
        class="block w-full h-[50px] rounded-sm py-0.5 bg-stone-900 text-white"
      >
        {{ props.submitMessage }}
      </SubmitButtons>
    </template>

    <template #informationMsg>
      <p class="text-center text-md mt-4">
        {{ message }}
        <RouterLink class="text-blue-300" :to="{ path: pathName }"
          >{{ messagePath }} here...</RouterLink
        >
      </p>
    </template>
  </FormLayouts>
</template>
