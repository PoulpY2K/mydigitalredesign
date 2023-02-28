<script setup lang="ts">
import BaseSection from "@/components/BaseSection.vue";
import SectionBlogCard from "@/components/SectionBlogCard.vue";
import { blogs } from "@/services/blogs";

</script>

<template>
  <BaseSection id="blog" class="justify-center bg-deepBlue">
    <div class="flex flex-col">
      <h1 class="flex flex-col font-extrabold text-5xl text-white">
        <span>MyDigitalSchool, c'est aussi</span>
        <span>un blog avec des conseils</span>
      </h1>
      <div class="flex flex-row mt-20 gap-8">
        <SectionBlogCard v-for="blog in blogs" :key="blog.id"
                         :id="blog.id" :image-src="blog.imageSrc"
                         :title="blog.title"
                         :date="blog.date"
                         :link="blog.link"
        />
      </div>
    </div>
  </BaseSection>
</template>
