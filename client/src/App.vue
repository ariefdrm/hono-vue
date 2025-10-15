<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import PageLayouts from './components/molecules/PageLayouts.vue'

const title = useTitle()
title.value = 'Arief Portfolio' // set title
</script>

<template>
  <PageLayouts />
</template>
