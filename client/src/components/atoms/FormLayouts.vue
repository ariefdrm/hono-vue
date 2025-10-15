<script setup lang="ts">
const { handleSubmit, headingMessage } = defineProps<{
  handleSubmit: () => void
  headingMessage: string
}>()
</script>

<template>
  <form class="shadow-lg rounded-md mx-1 my-8 p-8 w-[450px]" @submit.prevent="handleSubmit">
    <h2 class="text-5xl text-center font-semibold mb-10 select-none">{{ headingMessage }}</h2>

    <!-- User Inputs -->
    <div class="flex flex-col gap-4 mb-4">
      <slot name="userInput" />
    </div>

    <!-- Submit Button -->
    <div>
      <slot name="submitButton" />
    </div>

    <!-- Information Message -->
    <div>
      <slot name="informationMsg" />
    </div>
  </form>
</template>
