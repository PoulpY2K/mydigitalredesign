<script setup lang="ts">
import BaseLink from "./BaseLink.vue";
import BaseButton from "./BaseButton.vue";

import { ILink } from "@/types/ILink";
import { reactive } from "vue";
import { links } from "@/services/links";

const navbarLinks = reactive<Array<ILink>>(links);
</script>

<template>
  <nav
    class="px-2 sm:p-8 p-16 rounded">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <a href="https://mydigitalschool.com/" class="flex items-center">
        <img src="../assets/mds.png" class="mr-3 h-9"
             alt="MyDigitalSchool Logo" />
      </a>
      <div class="flex order-2">
        <BaseButton id="register" text="M'inscrire" event-name="register" />
      </div>
      <div
        class="items-center justify-between flex w-auto order-1"
        id="navbar-cta">
        <ul
          class="flex flex-row p-4 space-x-4 mt-0 font-bold text-sm border-0">
          <li v-for="link in navbarLinks" :key="link.id">
            <BaseLink :text="link.text" :href="link.href"
                      :current="link.current" />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
