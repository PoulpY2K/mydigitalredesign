<script setup lang="ts">
import TheNavbar from "@/components/TheNavbar.vue";
import SectionHero from "@/components/SectionHero.vue";
import SectionCampus from "@/components/SectionCampus.vue";
import SectionDomains from "@/components/SectionDomains.vue";
import SectionBlog from "@/components/SectionBlog.vue";
import SectionAlumni from "@/components/SectionAlumni.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
  <div class="max-h-screen h-screen">
    <TheNavbar class="p-16 h-1/6" />
    <SectionHero class="p-10 h-5/6" />
  </div>
  <div class="max-h-screen h-screen">
    <SectionCampus class="px-10 py-2 h-1/5" />
    <SectionDomains class="py-16 px-16 h-4/5" />
  </div>
  <div class="max-h-screen h-screen">
    <SectionBlog class="p-10 h-full" />
  </div>
  <div class="max-h-screen h-screen">
    <SectionAlumni class="p-16 h-full" />
  </div>
  <div>
    <TheFooter class="p-16" />
  </div>
</template>

<style scoped>
body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}
</style>
