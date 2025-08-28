<script setup lang="ts">
const props = defineProps<{
  type?: string | 'text'
  placeholder: string
  required?: boolean | false
}>()

const modelValue = defineModel<string>('value')
</script>

<template>
  <input
    v-model="modelValue"
    class="border rounded-md shadow-md border-gray-400 p-1 ps-2 block w-[430px] h-[60px] placeholder:text-xl placeholder:italic"
    :type="props.type"
    :placeholder="props.placeholder"
    :required="props.required"
  />
</template>
