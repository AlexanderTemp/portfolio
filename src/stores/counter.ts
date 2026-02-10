import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { EnumColor, EnumTheme } from '@/types/main.types'

type TStatesGlobal = {
  theme: EnumTheme
  color: EnumColor
}

type TActionsGlobal = {}

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
