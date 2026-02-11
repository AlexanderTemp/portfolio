import { EnumAppEnv } from '@/types/main.types'

interface IConstants {
  appEnv: EnumAppEnv
}

export const APP: IConstants = {
  appEnv: import.meta.env.VITE_APP_ENV || EnumAppEnv.DEV,
}
