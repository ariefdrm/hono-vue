<script setup lang="ts"></script>

<template>
  <div class="container">
    <h1>Hello, world</h1>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,900&display=swap');
$color-text: #cccccc;
$font-family: 'Inter';

:root {
  font-family: $font-family, Avenir, Helvetica, Arial, sans-serif;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h1 {
    font-size: 3rem;
    font-family: $font-family;
    color: $color-text;
  }
}
</style>
