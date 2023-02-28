<script setup lang="ts">
import TheNavbar from "@/components/TheNavbar.vue";
import SectionHero from "@/components/SectionHero.vue";
import SectionCampus from "@/components/SectionCampus.vue";
import SectionDomains from "@/components/SectionDomains.vue";
import SectionBlog from "@/components/SectionBlog.vue";

const options = {
  licenseKey: "gplv3-license",
};
</script>

<template>
  <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="max-h-screen h-screen section">
      <TheNavbar class="p-16 h-1/6" />
      <SectionHero class="p-10 h-5/6" />
    </div>
    <div class="max-h-screen h-screen section">
      <SectionCampus class="px-10 py-2 h-1/5" />
      <SectionDomains class="py-16 px-16 h-4/5" />
    </div>
    <div class="max-h-screen h-screen section">
      <SectionBlog class="p-10 h-screen" />
    </div>
  </full-page>
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
