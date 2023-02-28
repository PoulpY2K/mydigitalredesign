<script setup lang="ts">
const props = withDefaults(defineProps<{
  text: string
  href: string
  current?: boolean,
}>(), { current: false });
</script>

<template>
  <a :href="href"
     class="block py-2 pl-3 pr-4 rounded transition-all duration-250"
     :class="current ? 'bg-transparent text-blueDark bg-blueDark' : 'text-gray-500 hover:text-blueDark'"
     :aria-current="current && 'page'">{{ text }}</a>
</template>
