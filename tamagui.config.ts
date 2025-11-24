import { createTamagui } from 'tamagui'
import { config as tamaguiConfig } from '@tamagui/config/v3'

const appConfig = createTamagui({
  ...tamaguiConfig,
  themeClassNameOnRoot: true,
})

export type AppConfig = typeof appConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig
