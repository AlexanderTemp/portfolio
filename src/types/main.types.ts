export enum EnumTheme {
  LIGHT = 'light',
  DARK = 'dark',
}

export enum EnumColor {
  BLUE = 'blue',
  ORANGE = 'orange',
  GREEN = 'green',
}

export enum EnumAppEnv {
  DEV = 'development',
  PROD = 'production',
  TEST = 'test',
}

export const MapAppEnv: Record<EnumAppEnv, string> = {
  [EnumAppEnv.DEV]: 'DEV',
  [EnumAppEnv.PROD]: 'PROD',
  [EnumAppEnv.TEST]: 'TEST',
}
