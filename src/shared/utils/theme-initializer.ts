import { defineStore } from 'pinia'

export const setGlobalThemeState = () => {
  try {
    const getSystemTheme = () =>
      window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  } catch (error) {
    console.warn('Imposible obtener configuración del sistema')
  }
}
