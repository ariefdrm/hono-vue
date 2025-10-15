<script setup lang="ts">
const props = defineProps<{
  type?: string | 'text'
  placeholder: string
  required?: boolean | false
}>()

const modelValue = defineModel('value')
</script>

<template>
  <input
    v-model="modelValue"
    class="w-full border rounded-md shadow-md border-gray-400 p-1 ps-2 block h-[50px] placeholder:text-md placeholder:italic"
    :type="props.type"
    :placeholder="props.placeholder"
    :required="props.required"
    autocomplete="on"
  />
</template>
