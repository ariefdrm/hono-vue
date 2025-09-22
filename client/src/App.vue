<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import PageLayouts from './components/molecules/PageLayouts.vue'

const title = useTitle()
title.value = 'Arief Portfolio' // set title

/* onBeforeMount(async () => {
  await api.get('/auth/me', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      Accept: 'application/json',
    },
  })
}) */
</script>

<template>
  <PageLayouts />
</template>
