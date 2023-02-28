<script setup lang="ts">
import BaseSection from "@/components/BaseSection.vue";
import SectionDomainsCard from "@/components/SectionDomainsCard.vue";
import BaseButton from "@/components/BaseButton.vue";

import { domains } from "@/services/domains";
import { ICircle } from "@/types/ICircle";
import { populateCircles } from "@/utils";

const circles: Array<ICircle> = populateCircles(3, 2);
</script>

<template>
  <BaseSection id="domains" class="justify-center relative">
    <div class="flex flex-col items-center">
      <h2
        class="flex flex-col font-bold uppercase text-md text-lightBlue z-10 bg-background">
        <span>Plusieurs spécialités</span>
      </h2>
      <h1
        class="flex flex-col mt-3 font-extrabold text-3xl text-blueDark z-10 bg-background">
        <span>Les domaines les plus</span>
        <span>demandés dans le digital</span>
      </h1>
      <span class="z-0 absolute rounded-full" v-for="circle in circles"
            :class="circle.color"
            :style="'top: ' + circle.position.top + '%; left: ' + circle.position.left + '%; height: ' + circle.size + 'px; width: ' + circle.size + 'px'">
      </span>
      <div class="flex flex-row mt-16 gap-8">
        <SectionDomainsCard v-for="domain in domains" :key="domain.id"
                            :id="domain.id" logo="/assets/annonce.png"
                            :title="domain.title"
                            :desc="domain.desc" :button-text="domain.buttonText"
                            :link="domain.link"
                            class="z-10"
        />
      </div>
      <BaseButton class="mt-14 z-10" id="download" event-name="download"
                  text="Télécharger le programme" />
    </div>
  </BaseSection>
</template>
