<script setup lang="ts">
import BaseImage from "@/components/BaseImage.vue";

const props = withDefaults(defineProps<{
  id: string,
  imageSrc: string,
  cardSize?: string,
  title: string,
  date: string,
  link: string
}>(), { cardSize: "16rem" });
</script>

<template>
  <a :href="link"
     class="flex flex-col items-start pt-8 px-10 bg-white border border-gray-200 rounded-2xl"
     :class="'max-w-[' + cardSize+ ']'">
    <BaseImage :src="imageSrc" :id="id + '-img'" alt="Card image"
               class="mb-8 h-40 w-full object-cover rounded-lg" />
    <p class="mb-3 font-normal text-gray-500 text-left">Posté le {{ date }}</p>
    <h5
      class="mb-8 text-xl font-bold text-gray-900 text-left">
      {{ title }}</h5>
  </a>
</template>
