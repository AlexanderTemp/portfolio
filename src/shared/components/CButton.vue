<template>
  <button :class="classes" v-bind="attrs">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { buttonVariants, type ButtonColor } from '../utils/buttonVariants'
import { type ButtonVariant, type ButtonSize } from '../utils/buttonVariants'

interface Props {
  variant?: ButtonVariant
  size?: ButtonSize
  color?: ButtonColor
}

defineOptions({
  inheritAttrs: false,
})

const { variant = 'default', size = 'md', color = 'primary' } = defineProps<Props>()

const attrs = useAttrs()

const classes = computed(() =>
  buttonVariants({
    variant,
    size,
    color,
    className: attrs.class ? String(attrs.class) : '',
  }),
)
</script>
