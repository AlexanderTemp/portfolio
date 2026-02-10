<template>
  <div class="w-full h-full flex justify-center items-center">
    <div :class="classes" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../utils/cn'

type DividerType = 'horizontal' | 'vertical'
interface Props {
  orientation?: DividerType
}

const { orientation = 'horizontal' } = defineProps<Props>()

const classes = computed(() => dividerVariants({ orientation }))

const dividerVariants = ({ orientation = 'horizontal' }: { orientation: DividerType }) => {
  return cn(
    'bg-primary rounded-sm',
    orientation === 'horizontal' && 'w-[85%] h-[4px]',
    orientation === 'vertical' && 'h-[85%] w-[4px]',
  )
}
</script>
