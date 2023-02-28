<script setup lang="ts">
import BaseImage from "@/components/BaseImage.vue";

const props = defineProps<{
  id: string,
  eventName: string,
  imageSrc: string,
}>();
</script>

<template>
  <button type="button" :id="id" @click="$emit(eventName)"
          class="duration-250"
  >
    <BaseImage :src="imageSrc" alt="Image du bouton" />
  </button>
</template>
