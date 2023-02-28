<script setup lang="ts">
import BaseImage from "@/components/BaseImage.vue";

const props = withDefaults(defineProps<{
  id: string,
  name: string,
  status: string,
  imageSrc: string,
  cardSize?: string,
  date: string,
  review: string,
}>(), { cardSize: "42rem" });
</script>

<template>
  <div
    class="flex flex-col items-start pt-8 px-10 bg-white rounded-2xl drop-shadow-xl"
    :class="'max-w-[' + cardSize+ ']'">
    <div class="flex flex-row mb-6">
      <BaseImage :src="imageSrc" :id="id + '-img'" alt="Card image"
                 class="h-10 w-10 object-cover rounded mr-3" />
      <div class="flex flex-col">
        <p class="font-semibold text-left text-sm">{{ name }}</p>
        <p class="font-normal text-gray-400 text-left text-xs">{{ status }}</p>
      </div>
    </div>

    <p class="mb-8 font-normal text-blueDark text-left text-xs">{{ review }}</p>
    <p class="mb-6 font-semibold text-sm text-blueDark text-left">{{ date }}</p>
  </div>
</template>
