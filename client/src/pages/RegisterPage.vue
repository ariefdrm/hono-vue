<script setup lang="ts">
import LoginLayouts from '@/ui/layouts/LoginLayouts.vue'
import { provide } from 'vue'

provide('email', 'password')
</script>

<template>
  <form class="flex justify-center items-center">
    <LoginLayouts
      heading-message="Register"
      submit-message="register"
      path-name="/login"
      message="Already have an account?"
      message-path="Login"
    />
  </form>
</template>
