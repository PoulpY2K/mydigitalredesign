<script setup lang="ts">
const props = defineProps<{
  id: string,
}>();
</script>

<template>
  <section :id="id"
           class="flex flex-col flex-wrap items-center">
    <slot />
  </section>
</template>
