<script setup lang="ts">
import { PhPaperPlaneTilt, PhScroll } from '@phosphor-icons/vue'
import HeroImage from './modules/main/HeroImage.vue'
import HeroPattern from './modules/main/HeroPattern.vue'
import MainHeader from './modules/main/MainHeader.vue'
import CButton from './shared/components/CButton.vue'
</script>

<template>
  <main>
    <hero-pattern class="text-primary -z-10" />
    <main-header />
    <div class="h-dvh grid grid-cols-12 gap-10">
      <div
        class="w-[80%] flex flex-col justify-center lg:justify-start lg:mt-12 2xl:mt-60 gap-4 col-span-7"
      >
        <h1 class="text-primary font-bold">
          <span class="text-secondary">Hola 👋</span>&nbsp;Soy Alexander
        </h1>
        <h3 class="text-secondary">Desarrollador Fullstack</h3>

        <h5 class="text-primary opacity-90">
          Desarrollo proyectos a medida que cuenten con funcionalidad, seguros, despliegue rápido y
          con una buena experiencia de usuario.
        </h5>

        <div class="flex items-center gap-2">
          <c-button size="lg">
            <ph-paper-plane-tilt weight="duotone" />
            Contáctame</c-button
          >
          <c-button variant="outline" size="lg">
            <ph-scroll weight="duotone" />
            Hoja de vida</c-button
          >
        </div>
      </div>
      <hero-image class="col-span-5 w-full h-full flex justify-center items-center" />
    </div>
  </main>
</template>

<style scoped></style>
