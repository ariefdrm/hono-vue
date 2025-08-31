<script setup lang="ts">
import AuthForm from '@/components/molecules/AuthForm.vue'
import { useAuthStore } from '@/stores/user.store'

const user = useAuthStore()
</script>

<template>
  <div class="flex justify-center items-center">
    <AuthForm
      heading-message="Login"
      submit-message="Login"
      path-name="/register"
      message="Don't have an account?"
      message-path="Register"
      :handle-submit="user.login"
    />
  </div>
</template>
