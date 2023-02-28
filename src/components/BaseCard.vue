<script setup lang="ts">
import BaseImage from "@/components/BaseImage.vue";

const props = withDefaults(defineProps<{
  id: string,
  logo: string,
  cardSize?: string,
  title: string,
  desc: string,
  buttonText: string
  link: string
}>(), { cardSize: "16rem" });
</script>

<template>
  <div
    class="flex flex-col items-start p-6 bg-white border border-gray-200 rounded-lg drop-shadow-xl"
    :class="'max-w-[' + cardSize+ ']'">
    <BaseImage :src="logo" :id="id + '-logo'" alt="Card logo"
               class="h-10 mb-4 self-start" />
    <h5
      class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
      {{ title }}</h5>
    <p class="mb-6 font-normal text-gray-500 text-left">{{ desc }}</p>
    <a :href="link" class="inline-flex items-center font-bold hover:underline">
      {{ buttonText }}
    </a>
  </div>
</template>
