<script setup lang="ts">
import NavLink from './components/atoms/NavLink.vue'
</script>

<template>
  <nav class="fixed w-full flex justify-around items-center gap-6 p-3">
    <p class="text-lg">ini adalah website</p>
    <div class="flex gap-6 me-[4%]">
      <NavLink name-path="home-page" message="Home" />
      <NavLink name-path="home-page" message="Home" />
      <NavLink name-path="home-page" message="Home" />
    </div>
    <!-- <RouterLink :to="{ name: 'login-page' }">Login</RouterLink> -->
    <NavLink name-path="login-page" message="Login" />
  </nav>

  <RouterView class="h-screen"></RouterView>
</template>
