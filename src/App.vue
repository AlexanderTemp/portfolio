<script setup lang="ts">
import HeroImage from './modules/main/HeroImage.vue'
</script>

<template>
  <main>
    <div class="h-dvh grid grid-cols-2 gap-10">
      <div class="flex flex-col">
        <h1 class="text-primary font-bold">
          <span class="text-secondary">Hola 👋</span>&nbsp;Soy Alexander
        </h1>
        <h3 class="text-secondary">Desarrollador Fullstack</h3>

        <p class="text-primary">
          Desarrollo proyectos a medida que cuenten con funcionalidad, seguros, despliegue rápido y
          con una buena experiencia de usuario.
        </p>
      </div>
      <hero-image class="w-full h-full flex justify-center items-center" />
    </div>
  </main>
</template>

<style scoped></style>
