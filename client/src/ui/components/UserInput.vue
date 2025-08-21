<script setup lang="ts">
const props = defineProps<{
  type?: string | 'text'
  placeholder: string
  required?: boolean | false
}>()
</script>

<template>
  <input
    class="border rounded-md border-gray-400 p-1 block w-[430px] h-[60px]"
    :type="props.type"
    :placeholder="props.placeholder"
    :required="props.required"
  />
</template>

<style lang="scss" scoped>
input {
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  padding-left: 20px;

  &::placeholder {
    font-size: 1.2rem;
  }
}
</style>
