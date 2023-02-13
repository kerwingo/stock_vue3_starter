<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="app">
    <NavBar />
    <RouterView />
  </div>

</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
}
</style>
