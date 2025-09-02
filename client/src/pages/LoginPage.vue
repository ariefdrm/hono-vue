<script setup lang="ts">
import LoginForm from '@/components/molecules/LoginForm.vue'
import { useAuthStore } from '@/stores/user.store'

const user = useAuthStore()
</script>

<template>
  <div class="flex justify-center items-center">
    <LoginForm
      heading-message="Login"
      submit-message="Login"
      path-name="/register"
      message="Don't have an account?"
      message-path="Register"
      :handle-submit="user.login"
    />
  </div>
</template>
