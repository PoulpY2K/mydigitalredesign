<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  src: string,
  alt: string,
}>();

const getImgURL = computed(() => new URL(props.src, import.meta.url).href);
</script>

<template>
  <img
    :src="getImgURL"
    :alt="alt"/>
</template>
