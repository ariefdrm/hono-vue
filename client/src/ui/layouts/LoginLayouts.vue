<script setup lang="ts">
import { reactive } from 'vue'
import SubmitButtons from '../components/SubmitButtons.vue'
import UserInput from '../components/UserInput.vue'
import type User from '@/utils/user.interface'

const state = reactive<User>({
  email: '',
  password: '',
})

const props = defineProps<{
  headingMessage: string
  submitMessage: string
  pathName?: string
  message: string
  messagePath: string
}>()
</script>

<template>
  <div class="border shadow-lg rounded-md mx-1 my-8 p-10 h-[450px] w-[510px]">
    <h2 class="text-5xl text-center font-semibold mb-10">{{ props.headingMessage }}</h2>

    <div class="flex flex-col gap-8">
      <UserInput v-model:value="state.email" placeholder="Email" type="email" />
      <UserInput v-model:value="state.password" placeholder="Password" type="password" />
    </div>
    <SubmitButtons class="mt-8 mb-4 text-xl"
      ><template #message>{{ props.submitMessage }}</template></SubmitButtons
    >
    <p class="text-center text-lg">
      {{ message }}
      <RouterLink class="text-blue-300" :to="{ path: pathName }"
        >{{ messagePath }} here...</RouterLink
      >
    </p>
  </div>
</template>
