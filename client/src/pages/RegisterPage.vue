<script setup lang="ts">
import RegisterForm from '@/components/molecules/RegisterForm.vue'
</script>

<template>
  <form @submit.prevent="" class="flex justify-center items-center">
    <RegisterForm
      heading-message="Register"
      submit-message="Register"
      path-name="/login"
      message="Already have an account?"
      message-path="Login"
    >
    </RegisterForm>
  </form>
</template>
