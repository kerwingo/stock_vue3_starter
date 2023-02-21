<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <RouterView />
  </div>

</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  font-size: 16px;
  min-height: 100vh;
}
</style>
