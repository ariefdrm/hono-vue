<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import SubmitButtons from '../atoms/SubmitButtons.vue'
import NavLink from '../atoms/NavLink.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <nav
    class="fixed bg-primary dark:bg-slate-900 z-0 w-full flex justify-around items-center gap-6 p-3"
  >
    <p class="text-lg dark:text-white">ini adalah website</p>
    <div class="flex gap-6">
      <NavLink name-path="home-page" message="Home" />
      <NavLink name-path="about-page" message="About" />
      <NavLink name-path="home-page" message="Home" />
    </div>

    <!-- <RouterLink :to="{ name: 'login-page' }">Login</RouterLink> -->
    <div class="flex gap-6">
      <SubmitButtons
        class="px-3 py-1 text-black bg-amber-300 active:bg-amber-400"
        @click="toggleDark"
      >
        testing
      </SubmitButtons>
      <NavLink name-path="login-page" message="Login" />
    </div>
  </nav>
</template>
