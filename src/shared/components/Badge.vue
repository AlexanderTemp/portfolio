<template>
  <div
    class="py-0.5 shadow-xs shadow-secondary inline-flex items-center justify-center rounded-md border font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary px-2 text-secondary-text [a&]:hover:bg-secondary/90"
  >
    <slot />
  </div>
</template>

<script setup lang="ts"></script>
