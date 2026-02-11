<template>
  <div v-if="environ !== EnumAppEnv.PROD" class="fixed bottom-2 left-1/2 -translate-x-1/2 z-50">
    <badge class="inline-flex">
      <p class="font-semibold text-sm">{{ environ }}</p>

      <Divider orientation="vertical" />

      <p class="block sm:hidden text-sm">xs</p>
      <p class="hidden sm:block md:hidden text-sm">sm</p>
      <p class="hidden md:block lg:hidden text-sm">md</p>
      <p class="hidden lg:block xl:hidden text-sm">lg</p>
      <p class="hidden xl:block 2xl:hidden text-sm">xl</p>
      <p class="hidden 2xl:block text-sm">2xl</p>
    </badge>
  </div>
</template>

<script setup lang="ts">
import { APP } from '@/lib/constants'
import { EnumAppEnv, MapAppEnv } from '@/types/main.types'
import { computed } from 'vue'
import Badge from './Badge.vue'
import Divider from './Divider.vue'

const app = APP.appEnv
const environ = computed(() => MapAppEnv[app])
</script>
