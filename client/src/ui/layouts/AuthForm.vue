<script setup lang="ts">
import { useAuthStore } from '@/stores/user.store'
import SubmitButtons from '../components/SubmitButtons.vue'
import UserInput from '../components/UserInput.vue'

const user = useAuthStore()

const props = defineProps<{
  headingMessage: string
  submitMessage: string
  pathName?: string
  message: string
  messagePath: string
  testing: string
}>()

function handleSubmit() {
  console.log('submit....' + props.testing)
}
</script>

<template>
  <form class="border shadow-lg rounded-md mx-1 my-8 p-10 h-[450px] w-[510px]">
    <h2 class="text-5xl text-center font-semibold mb-10">{{ props.headingMessage }}</h2>

    <div class="flex flex-col gap-8 mb-4">
      <UserInput v-model:value="user.email" placeholder="Email" type="email" />
      <UserInput v-model:value="user.password" placeholder="Password" type="password" />
    </div>
    <SubmitButtons @submit="handleSubmit" :message="props.submitMessage" />
    <p class="text-center text-lg">
      {{ message }}
      <RouterLink class="text-blue-300" :to="{ path: pathName }"
        >{{ messagePath }} here...</RouterLink
      >
    </p>
  </form>
</template>
