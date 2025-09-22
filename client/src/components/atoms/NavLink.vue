<script setup lang="ts">
const props = defineProps<{
  message: string
  namePath?: string
}>()
</script>

<template>
  <RouterLink
    class="text-lg rounded-4xl py-2 px-4 shadow-sm dark:shadow-neutral-300 dark:text-neutral-300 dark:hover:bg-white dark:hover:text-black hover:bg-stone-900 hover:text-white hover:duration-200"
    :to="{ name: props.namePath }"
    >{{ message }}
  </RouterLink>
</template>
