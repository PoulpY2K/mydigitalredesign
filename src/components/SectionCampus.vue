<script setup lang="ts">
import BaseImage from "./BaseImage.vue";
import { reactive } from "vue";
import BaseSection from "@/components/BaseSection.vue";

const imagesRelativePath = reactive<Array<string>>([
  "../assets/lyon.png",
  "../assets/paris.png",
  "../assets/annecy.png",
  "../assets/nantes.png"
]);
</script>

<template>
  <BaseSection id="campus" class="justify-center">
    <h2 class="flex flex-col font-bold uppercase text-md text-lightBlue">
      <span>Des campus partout en France</span>
    </h2>
    <div class="flex flex-row justify-center items-center gap-7 mt-7">
      <BaseImage v-for="path in imagesRelativePath" :src="path"
                 alt="Logo de ville" class="mr-6 h-10 w-32 object-contain" />
    </div>
    <div class="flex flex-row justify-center items-center mt-3 gap-7">
        <span v-for="index in 4" :key="index"
              class="mr-6 w-32 uppercase font-bold text-neutral-500">
          2000 étudiants
        </span>
    </div>
  </BaseSection>
</template>
