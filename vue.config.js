const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    iconPaths:{
      favicon32: './logo.jpg',
      favicon16: './logo.jpg',
      appleTouchIcon: './logo.jpg',
      maskIcon: './logo.jpg',
      msTileImage: './logo.jpg'
    }
  }
})
