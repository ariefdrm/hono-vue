<script setup lang="ts">
defineProps<{
  types?: 'button' | 'submit'
  class?: string
}>()

const emit = defineEmits(['click'])
</script>

<template>
  <button @click="emit('click')" :class="class" :type="types">
    <slot> isi pesan </slot>
  </button>
</template>
