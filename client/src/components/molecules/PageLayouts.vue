<script setup lang="ts">
import NavBar from './NavBar.vue'
</script>

<template>
  <NavBar class="fixed top-0 left-0 right-0 z-50" />
  <main class="flex-1 pt-20 bg-primary dark:bg-slate-900">
    <RouterView />
  </main>
</template>
