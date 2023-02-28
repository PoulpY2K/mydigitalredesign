<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue";
</script>

<template>
  <footer class="h-screen flex flex-col justify-center items-center relative">
    <div
      class="h-screen w-full flex flex-col bg-footer bg-no-repeat bg-center justify-center items-center">
      <h1 class="flex flex-col font-extrabold text-5xl text-white">
        <span>Entre ton e-mail pour recevoir le </span>
        <span>programme de l’école</span>
      </h1>
      <p class="mt-10 w-1/3 flex flex-col font-normal text-lg text-white">Nous
        t’enverrons le programme complet, et quelqu’un prendra contact avec toi
        pour savoir tes besoins</p>
      <div
        class="mb-10 py-1 px-2 flex justify-between w-1/4 mt-14 bg-gray-50 rounded-full border focus:ring-blue-500 focus:border-blue-500">
        <input type="email" id="helper-text"
               class="px-4 w-full font-semibold text-gray-900 text-sm border-none outline-none"
               placeholder="Entre ton addresse e-mail ici">
        <BaseButton id="send" event-name="send" text="Envoyer" />
      </div>
    </div>
  </footer>
</template>
