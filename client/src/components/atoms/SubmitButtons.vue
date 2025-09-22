<script setup lang="ts">
defineProps<{
  message?: string
  types?: 'button' | 'submit'
  class?: string
}>()

const emit = defineEmits(['click'])
</script>

<template>
  <button @click="emit('click')" :class="class">
    <slot />
  </button>
</template>
