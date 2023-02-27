<script setup lang="ts">
import BaseButton from "./BaseButton.vue";
import { reactive } from "vue";
import { ICircle } from "../types/ICircle";

const getRandomArbitrary = (max: number, min: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const circles = reactive<Array<ICircle>>([]);
const colors = reactive<Array<string>>([
  "bg-lightBlue",
  "bg-neutral-800",
  "bg-neutralBlue"
]);

for (let i = 0; i < Math.random() * (15 - 8) + 8; i++) {
  circles.push({
    size: getRandomArbitrary(16, 46),
    color: colors[getRandomArbitrary(colors.length, 0)],
    position: {
      top: getRandomArbitrary(0, 100),
      left: getRandomArbitrary(0, 100)
    }
  });
}
</script>

<template>
  <section id="hero">
    <div
      class="container flex flex-col flex-wrap h-full items-center">
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
        <div class="pt-24 flex flex-row flex-wrap relative z-10 justify-center">
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
    </div>

  </section>
</template>
