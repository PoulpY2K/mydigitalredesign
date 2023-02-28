<script setup lang="ts">
import BaseButton from "./BaseButton.vue";
import BaseSection from "@/components/BaseSection.vue";

import { ICircle } from "@/types/ICircle";
import { populateCircles } from "@/utils";

const circles: Array<ICircle> = populateCircles(15, 8);
</script>

<template>
  <BaseSection id="hero">
    <h1 class="flex flex-col font-extrabold text-6xl text-blueDark">
      <span>La meilleure école des</span>
      <span>métiers du digital</span>
    </h1>

    <BaseButton class="mt-6" text="Appelez-nous" id="callus"
                event-name="call" />

    <div class="relative w-full">
          <span class="z-0 absolute rounded-full" v-for="circle in circles"
                :class="circle.color"
                :style="'top: ' + circle.position.top + '%; left: ' + circle.position.left + '%; height: ' + circle.size + 'px; width: ' + circle.size + 'px'">
          </span>
      <div class="pt-16 flex flex-row flex-wrap relative z-10 justify-center">
        <img src="../assets/people1.png" class="mr-6 h-60"
             alt="Une personne" />
        <img src="../assets/people2.png" class="mt-10 mr-6 h-60"
             alt="Une personne" />
        <img src="../assets/people3.png" class="mt-10 mr-6 h-60"
             alt="Une personne" />
        <img src="../assets/people4.png" class="mr-6 h-60"
             alt="Une personne" />
      </div>
    </div>
  </BaseSection>
</template>
