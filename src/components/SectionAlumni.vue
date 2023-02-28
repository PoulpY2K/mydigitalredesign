<script setup lang="ts">
import BaseSection from "@/components/BaseSection.vue";
import SectionAlumniNavButton from "@/components/SectionAlumniNavButton.vue";
import SectionAlumniCard from "@/components/SectionAlumniCard.vue";
import { alumnis } from "@/services/alumnis";

</script>

<template>
  <BaseSection id="alumni" class="justify-center">
    <div class="w-full flex flex-row justify-between">
      <h1
        class="w-full flex flex-col font-extrabold text-4xl text-blueDark text-left">
        <span>Qu'est-ce que nos</span>
        <span>alumnis en pensent ?</span>
      </h1>
      <SectionAlumniNavButton id="left" event-name="navLeft"
                              image-src="/src/assets/ButtonLeft.png"
                              class="mr-4" />
      <SectionAlumniNavButton id="right" event-name="navRight"
                              image-src="/src/assets/ButtonRight.png" />
    </div>
    <div class="w-full flex flex-row mt-20 gap-8">
      <SectionAlumniCard v-for="alumni in alumnis" :key="alumni.id"
                         :id="alumni.id" :image-src="alumni.imageSrc"
                         :name="alumni.name"
                         :date="alumni.date"
                         :review="alumni.review"
                         :status="alumni.status"
      />
    </div>
  </BaseSection>
</template>
