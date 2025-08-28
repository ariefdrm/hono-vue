<script setup lang="ts">
const props = defineProps<{
  message: string
  namePath?: string
}>()
</script>

<template>
  <RouterLink
    class="text-lg bg-blue-300 rounded-4xl py-2 px-4 hover:bg-blue-200 hover:duration-100"
    :to="{ name: props.namePath }"
    >{{ message }}</RouterLink
  >
</template>
