<script setup lang="ts">
import LoginLayouts from '@/ui/layouts/LoginLayouts.vue'
</script>

<template>
  <form class="flex justify-center items-center">
    <LoginLayouts
      heading-message="Login"
      submit-message="Login"
      path-name="/register"
      message="Don't have an account?"
      message-path="Register"
    />
  </form>
</template>
