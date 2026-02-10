<template>
  <button class="px-4 py-2 bg-primary rounded-md" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>
