<script setup lang="ts"></script>

<template>
  <nav class="fixed w-full bg-gray-400 flex justify-around gap-6">
    <p>ini adalah website</p>
    <div class="flex gap-6 self-center me-[5%]">
      <RouterLink :to="{ name: 'main-page' }">Home</RouterLink>
      <RouterLink :to="{ name: 'main-page' }">Home</RouterLink>
      <RouterLink :to="{ name: 'main-page' }">Home</RouterLink>
    </div>
    <RouterLink :to="{ name: 'login-page' }">Login</RouterLink>
  </nav>

  <RouterView class="h-screen"></RouterView>
</template>
