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
  },
  devServer: {
    proxy: {
      '/api': {
        // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
        target: 'http://localhost:3013',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
