<script setup lang="ts">
import AuthForm from '@/components/layouts/AuthForm.vue'
</script>

<template>
  <div class="flex justify-center items-center">
    <AuthForm
      heading-message="Login"
      submit-message="Login"
      path-name="/register"
      message="Don't have an account?"
      message-path="Register"
      testing="testing"
    />
  </div>
</template>
