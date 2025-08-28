<script setup lang="ts">
import AuthForm from '@/ui/layouts/AuthForm.vue'
</script>

<template>
  <form @submit.prevent="" class="flex justify-center items-center">
    <AuthForm
      heading-message="Register"
      submit-message="Register"
      path-name="/login"
      message="Already have an account?"
      message-path="Login"
    >
    </AuthForm>
  </form>
</template>
