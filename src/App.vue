<script setup lang="ts">
import TheNavbar from "./components/TheNavbar.vue";
import SectionHero from "./components/SectionHero.vue";
</script>

<template>
  <div class="max-h-screen h-screen">
    <TheNavbar class="p-16 h-1/6" />
    <SectionHero class="p-10 h-5/6" />
  </div>
</template>

<style scoped>
body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}
</style>
