<script setup lang="ts">
defineProps<{ message?: string }>()

defineEmits(['submit'])
</script>

<template>
  <button @click="$emit('submit')" class="block w-full h-[60px] rounded-sm py-0.5 bg-blue-300">
    {{ message }}
  </button>
</template>
