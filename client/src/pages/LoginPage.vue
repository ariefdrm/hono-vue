<script setup lang="ts">
import LoginForm from '@/components/molecules/LoginForm.vue'
</script>

<template>
  <div class="flex justify-center items-center h-[90vh]">
    <LoginForm
      heading-message="login"
      submit-message="login"
      info-message="Don't have an account?"
      redirect-path="/register"
      redirect-label="register"
    />
  </div>
</template>
