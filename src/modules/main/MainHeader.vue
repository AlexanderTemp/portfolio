<template>
  <header class="w-full flex justify-center items-center">
    <div class="w-fit flex gap-2 bg-background">
      <logo />
      <divider orientation="vertical" />

      <div class="flex items-center gap-1">
        <c-button variant="link" size="sm">Sobre mí</c-button>
        <c-button variant="link" size="sm">Mis proyectos</c-button>
      </div>
      <div class="flex items-center gap-2">
        <c-button
          variant="default"
          color="secondary"
          size="sm"
          class="animate-[glow_3s_ease-in-out_infinite]"
        >
          <PhPaperPlaneTilt weight="duotone" />
          Contáctame</c-button
        >
        <button>color</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import CButton from '@/shared/components/CButton.vue'
import Divider from '@/shared/components/Divider.vue'
import Logo from '@/shared/components/Logo.vue'
import { PhPaperPlaneTilt } from '@phosphor-icons/vue'
</script>
