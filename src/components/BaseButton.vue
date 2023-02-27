<script setup lang="ts">
const props = defineProps<{
  id: string,
  eventName: string,
  text?: string,
  styleClass?: string
}>();
</script>

<template>
  <button type="button" :id="id" @click="$emit(eventName)"
          class="text-white font-bold transition-all duration-250 bg-lightBlue hover:bg-blueDark focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-sm px-5 py-2.5 text-center mr-0"
          :class="styleClass"
  >
    {{ text }}
  </button>
</template>
