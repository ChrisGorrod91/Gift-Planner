const { withTamagui } = require('@tamagui/webpack-plugin')
const { createTamaguiWebpackConfig } = require('@tamagui/webpack-config')
const { withExpo } = require('@expo/webpack-config')

module.exports = async function (env, argv) {
  const config = await withExpo(env, argv)

  return withTamagui(
    config,
    {
      tamaguiOptions: {
        config: './tamagui.config.ts',
        components: ['tamagui'],
      },
    },
    createTamaguiWebpackConfig()
  )
}
