<script setup lang="ts">
import RegisterForm from '@/components/molecules/RegisterForm.vue'
import { useTitle } from '@vueuse/core'

const title = useTitle()
title.value = 'register-page'
</script>

<template>
  <div class="flex justify-center items-center h-[90vh]">
    <RegisterForm
      heading-message="Register"
      submit-message="Register"
      path-name="/login"
      message="Already have an account?"
      message-path="Login"
    >
    </RegisterForm>
  </div>
</template>
