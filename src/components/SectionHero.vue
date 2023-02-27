<script setup lang="ts">

import BaseButton from "./BaseButton.vue";
</script>

<template>
  <section id="hero">
    <div
      class="container flex flex-col flex-wrap h-full items-center mx-auto">
      <h1 class="flex flex-col font-extrabold text-6xl text-blueDark">
        <span>La meilleure école des</span>
        <span>métiers du digital</span>
      </h1>

      <BaseButton class="mt-6" text="Appelez-nous" id="callus"
                  event-name="call" />

      <div class="mt-24 relative">
        <div class="z-0" v-for="item in items" :key="item.id">
          {{ item }}
        </div>
        <div class="flex flex-row flex-wrap z-10">
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
